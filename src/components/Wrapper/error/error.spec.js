import ErrorModule from './error.module.js'
import ErrorComponent from './error.component.js'
import ErrorTemplate from './error.html'

describe('Error module', () => {	
	let element, $rootScope, $scope, $compile, isolateScope; 
	let message = "Error message";
	
	beforeEach(window.module(ErrorModule));	  
	beforeEach(inject(( _$rootScope_, _$compile_ ) => {
		$scope = _$rootScope_.$new();
		$rootScope = _$rootScope_;
		$compile = _$compile_;

		var parentScope = $rootScope.$new();
	    parentScope.error = message;
		parentScope.hideError = function() {
			this.error = "";
		}
	    element = angular.element('<mb-error error-message="error" hide-error="hideError()"></mb-error>');		
	    $compile(element)(parentScope);
		isolateScope = element.isolateScope();
		isolateScope.$apply();
	}));
	
	it("when error-message attr passed to component then it should be present in template", () => {	
	  expect(element.text()).toContain(message);	  
	})
	
	it("when error-message attr passed to component then it should be present in controller", () => {	
	  expect(isolateScope.$ctrl.errorMessage).toEqual(message);	  	  
	})
	
	it("when hide-error attr passed to component then it should be present in controller", () => {
	  isolateScope.$ctrl.hideError();
	  isolateScope.$apply();
	  expect(isolateScope.$ctrl.errorMessage).toEqual("");
	})
})
