/*global angular */
/*jshint unused:false */
'use strict';

var app = angular.module('app', ['classy', 'classy-computed']);

app.classy.controller({
	name: 'ComputedController',
	inject: ['$scope'],

	init: function() {
		this.$.firstName = 'Carlton';
		this.$.secondName = 'Bank';

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
	name: 'ComputedGetSetController',
	inject: ['$scope'],

	init: function() {
		this.$.firstName = 'Tyriq';
		this.$.secondName = 'Johnson';
	},

	computed: {
		fullName: {
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