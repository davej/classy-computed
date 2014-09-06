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

	describe('Classy Computed Get and Set Property Controller', function () {
		var ctrl, scope;
		var ctrlName = 'ComputedGetSetController';

		// Load the module containing the app, only 'ng' is loaded by default.
		beforeEach(module('app'));

		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			ctrl = $controller(ctrlName, { $scope: scope });
		}));

		it('should have the fullName property computed on start', function () {
			expect(scope.fullName).toBe("Tyriq Johnson");
		});

		it('should have first and second name assigned on start', function () {
			expect(scope.firstName).toBe("Tyriq");
			expect(scope.secondName).toBe("Johnson");
		});

		describe('when fullName changes', function () {
			it('should update firstName and Second Name', function () {
				scope.fullName = 'Tobey Maquire';
				scope.$digest();
				expect(scope.fullName).toBe("Tobey Maquire");
				expect(scope.firstName).toBe("Tobey");
				expect(scope.secondName).toBe("Maquire");
			});
		});

		describe('when firstName or secondName changes', function () {
			it('fullName computed property should be updated', function () {
				scope.firstName = 'Spider';
				scope.$digest();
				expect(scope.fullName).toBe("Spider Johnson");

				scope.secondName = 'Man';
				scope.$digest();
				expect(scope.fullName).toBe("Spider Man");
			});
		});
	});



}());
