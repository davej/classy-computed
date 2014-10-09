/*global describe, it, beforeEach, inject, expect*/
(function () {
	'use strict';

	describe('Classy Computed Property Controller', function () {
		var ctrl, scope;
		var ctrlName = 'ComputedController';

		// Load the module containing the app, only 'ng' is loaded by default.
		beforeEach(module('app'));

		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller(ctrlName, { $scope: scope });
			scope.$digest();
		}));

		it('should have first and second name assigned on start', function () {
			expect(scope.firstName).toBe("Karlton");
			expect(scope.secondName).toBe("Banks");
		});

		it('should have the fullName property computed on start', function () {
			expect(scope.fullName).toBe("Karlton Banks");
		});

		describe('when firstName or secondName changes', function () {
			it('fullName computed property should be updated', function () {
				scope.firstName = 'Carlton';
				scope.$digest();
				expect(scope.fullName).toBe("Carlton Banks");

				scope.secondName = 'Bank';
				scope.$digest();
				expect(scope.fullName).toBe("Carlton Bank");
			});
		});
	});

	describe('Classy Computed Property Controller (with watch)', function () {
		var ctrl, scope;
		var ctrlName = 'ComputedWithWatchController';

		// Load the module containing the app, only 'ng' is loaded by default.
		beforeEach(module('app'));

		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller(ctrlName, { $scope: scope });
			scope.$digest();
		}));

		it('should have first and second name assigned on start', function () {
			expect(scope.firstName).toBe("Geoffrey");
			expect(scope.secondName).toBe("Butler");
		});

		it('should have the fullName property computed on start', function () {
			expect(scope.fullName).toBe("Geoffrey Butler");
		});

		describe('when firstName or secondName changes', function () {
			it('fullName computed property should be updated', function () {
				scope.firstName = 'Geoff';
				scope.$digest();
				expect(scope.fullName).toBe("Geoff Butler");

				scope.secondName = 'Butts';
				scope.$digest();
				expect(scope.fullName).toBe("Geoff Butts");
			});
		});
	});

	describe('Classy Computed Set Property Controller', function () {
		var ctrl, scope;
		var ctrlName = 'ComputedSetController';

		// Load the module containing the app, only 'ng' is loaded by default.
		beforeEach(module('app'));

		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller(ctrlName, { $scope: scope });
			scope.$digest();
		}));

		it('should have the fullName property computed on start', function () {
			expect(scope.fullName).toBe("Will Smith");
		});

		it('should have first and second name assigned on start', function () {
			expect(scope.firstName).toBe("Will");
			expect(scope.secondName).toBe("Smith");
		});

		describe('when fullName changes', function () {
			it('should update firstName and Second Name', function () {
				scope.fullName = 'Big Willy';
				scope.$digest();
				expect(scope.firstName).toBe("Big");
				expect(scope.secondName).toBe("Willy");
			});
		});
	});

describe('Classy Computed Get and Set Property Controller (with watch)', function () {
	var ctrl, scope;
	var ctrlName = 'ComputedGetSetWithWatchController';

	// Load the module containing the app, only 'ng' is loaded by default.
	beforeEach(module('app'));

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller(ctrlName, { $scope: scope });
		scope.$digest();
	}));

	it('should have the fullName property computed on start', function () {
		expect(scope.fullName).toBe("Jazzy Jeff");
	});

	it('should have first and second name assigned on start', function () {
		expect(scope.firstName).toBe("Jazzy");
		expect(scope.secondName).toBe("Jeff");
	});

	describe('when fullName changes', function () {
		it('should update firstName and Second Name', function () {

			scope.fullName = 'Willy Wonka';
			scope.$digest();
			expect(scope.fullName).toBe("Willy Wonka");
			expect(scope.firstName).toBe("Willy");
			expect(scope.secondName).toBe("Wonka");
		});
	});

	describe('when firstName or secondName changes', function () {
		it('fullName computed property should be updated', function () {
			scope.firstName = 'Daffy';
			scope.$digest();
			expect(scope.fullName).toBe("Daffy Jeff");

			scope.secondName = 'Duck';
			scope.$digest();
			expect(scope.fullName).toBe("Daffy Duck");
		});
	});
});

describe('Combined Computed Controller (thanks @wuxiaoying)', function () {
	// Tests object properties and combines multiple computed properties in one controller

	var ctrl, scope;
	var ctrlName = 'CombinedComputedController';

	// Load the module containing the app, only 'ng' is loaded by default.
	beforeEach(module('app'));

	beforeEach(inject(function ($controller, $rootScope) {
		scope = $rootScope.$new();
		ctrl = $controller(ctrlName, { $scope: scope });
		scope.$digest();
	}));

	describe('computed property', function () {
		it('should have the fullName property computed on start', function () {
			expect(scope.fullName).toBe("Karlton Banks");
		});

		it('should update full name computed property when first or last name changes', function () {
			scope.testData.firstName = 'Carlton';
			scope.$digest();
			expect(scope.fullName).toBe("Carlton Banks");

			scope.testData.lastName = 'Bank';
			scope.$digest();
			expect(scope.fullName).toBe("Carlton Bank");
		});
	});

	describe('computed property with watch', function () {
		it('should have the fullName property computed on start', function () {
			expect(scope.fullName).toBe("Karlton Banks");
		});

		it('should update full name computed property when first or last name changes', function () {
			scope.testData.firstName = 'Carlton';
			scope.$digest();
			expect(scope.fullNameWithWatch).toBe("Carlton Banks");

			scope.testData.lastName = 'Bank';
			scope.$digest();
			expect(scope.fullNameWithWatch).toBe("Carlton Bank");
		});
	});

	describe('computed set property', function () {
		it('should have first and second name assigned on start', function () {
			expect(scope.firstName).toBe("Will");
			expect(scope.lastName).toBe("Smith");
		});

		it('should update firstName and Second Name', function () {
			scope.testData.fullName = 'Big Willy';
			scope.$digest();
			expect(scope.firstName).toBe("Big");
			expect(scope.lastName).toBe("Willy");
		});
	});

	describe('computed get and set property (with watch)', function () {
		it('should have full name property computed at start', function() {
		  expect(scope.fullNameGetSetWithWatch).toBe('Jazzy Jeff');
		});
		it('should update first and last name when full name changes', function() {
		  scope.fullNameGetSetWithWatch = 'Willy Wonka';
		  scope.$digest();
		  expect(scope.testData.firstNameGetSet).toBe('Willy');
		  expect(scope.testData.lastNameGetSet).toBe('Wonka');
		});
		it('should update computed property when first or last name changes', function() {
		  scope.testData.firstNameGetSet = 'Daffy';
		  scope.$digest();
		  expect(scope.fullNameGetSetWithWatch).toBe('Daffy Jeff');
		  scope.testData.lastNameGetSet = 'Duck';
		  scope.$digest();
		  expect(scope.fullNameGetSetWithWatch).toBe('Daffy Duck');
		});
	});



});



}());
