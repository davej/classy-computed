/*global angular */
/*jshint unused:false */
'use strict';

var app = angular.module('app', ['classy', 'classy-computed']);

app.classy.controller({
  name: 'ComputedController',
  inject: ['$scope'],

  init: function() {
    this.$.firstName = 'Karlton';
    this.$.secondName = 'Banks';

    // Easter Egg :-)
    this.$.dancingCarltonCSSProp = 'url(http://media.giphy.com/media/uK1m1ZAJAOr8k/giphy.gif) no-repeat top right'
  },

  computed: {
    fullName: function() {
      return this.$.firstName + ' ' + this.$.secondName;
    }
  }
});

app.classy.controller({
  name: 'ComputedWithWatchController',
  inject: ['$scope'],

  init: function() {
    this.$.firstName = 'Geoffrey';
    this.$.secondName = 'Butler';
  },

  computed: {
    fullName: {
      watch: ['firstName', 'secondName'],
      get: function() {
          return this.$.firstName + ' ' + this.$.secondName;
      }
    }
  }
});

app.classy.controller({
  name: 'ComputedSetController',
  inject: ['$scope'],

  init: function() {
    this.$.fullName = 'Will Smith';
  },

  computed: {
    fullName: {
      set: function(fullName) {
        if (fullName && fullName.split(' ')) {
          var names = fullName.split(' ');
          this.$.firstName = names[0] || '';
          if (names.length > 1) {
            this.$.secondName = names[names.length - 1] || '';
          }
        }
      }
    }
  }
});

app.classy.controller({
  name: 'ComputedGetSetWithWatchController',
  inject: ['$scope'],

  init: function() {
    this.$.firstName = 'Jazzy';
    this.$.secondName = 'Jeff';
  },

  computed: {
    fullName: {
      watch: ['firstName', 'secondName'],
      get: function() {
          return this.$.firstName + ' ' + this.$.secondName;
      },
      set: function(fullName) {
        if (fullName && fullName.split(' ')) {
          var names = fullName.split(' ');
          this.$.firstName = names[0] || '';
          if (names.length > 1) {
            this.$.secondName = names[names.length - 1] || '';
          }
        }
      }
    }
  }
});

app.classy.controller({
  name: 'CombinedComputedController',
  inject: ['$scope'],
  init: function() {
    this.$.testData = {
      firstName: 'Karlton',
      lastName: 'Banks',
      firstNameGetSet: 'Jazzy',
      lastNameGetSet: 'Jeff',
      fullName: 'Will Smith'
    }
  },
  computed: {
    fullName: function() {
      return "" + this.$.testData.firstName + " " + this.$.testData.lastName;
    },
    fullNameWithWatch: {
      watch: ['testData.firstName', 'testData.lastName'],
      get: function() {
        return "" + this.$.testData.firstName + " " + this.$.testData.lastName;
      }
    },
    'testData.fullName': {
      set: function(fullName) {
        var _ref;
        _ref = typeof fullName !== "undefined" && fullName !== null ? fullName.split(' ') : void 0, this.$.firstName = _ref[0], this.$.lastName = _ref[1];
      }
    },
    fullNameGetSetWithWatch: {
      watch: ['testData.firstNameGetSet', 'testData.lastNameGetSet'],
      get: function() {
        return "" + this.$.testData.firstNameGetSet + " " + this.$.testData.lastNameGetSet;
      },
      set: function(fullName) {
        var _ref;
        _ref = typeof fullName !== "undefined" && fullName !== null ? fullName.split(' ') : void 0, this.$.testData.firstNameGetSet = _ref[0], this.$.testData.lastNameGetSet = _ref[1];
      }
    }
  }
});
