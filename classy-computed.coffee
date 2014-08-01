angular.module('classy-computed', ['classy-core']).classy.plugin.controller
  name: 'computed'

  options:
    enabled: true

  isActive: (klass, deps) ->
    if @options.enabled and angular.isObject(klass.computed)
      if !deps.$scope
        throw new Error "You need to inject `$scope` to use computed properties"
        return false

      return true

  postInit: (klass, deps, module) ->
    if !@isActive(klass, deps) then return

    for prop, computeUsing of klass.computed
      if typeof computeUsing is 'function'
        @registerGet(prop, computeUsing, klass, deps)
      else if typeof computeUsing is 'object'
        @registerAdvanced(prop, computeUsing, klass, deps)

  registerGet: (prop, getFn, klass, deps) ->
    deps.$scope[prop] = angular.bind(klass, getFn)();

    deps.$scope.$watch angular.bind(klass, getFn), (newVal, oldVal) ->
      if oldVal isnt newVal
        deps.$scope[prop] = newVal

  registerGetWithWatch: (prop, obj, klass, deps) ->
    watch = "[#{obj.watch.toString()}]"
    deps.$scope[prop] = angular.bind(klass, obj.get)()
    deps.$scope.$watchCollection watch, (newVal, oldVal) ->
      deps.$scope[prop] = angular.bind(klass, obj.get)()

  registerSet: (prop, setFn, klass, deps) ->
    deps.$scope.$watch prop, angular.bind(klass, setFn)

  registerAdvanced: (prop, obj, klass, deps) ->
    if typeof obj.get is 'function'
      if obj.watch
        @registerGetWithWatch(prop, obj, klass, deps)
      else
        @registerGet(prop, obj.get, klass, deps)

    if typeof obj.set is 'function'
      @registerSet(prop, obj.set, klass, deps)