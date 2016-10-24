import WrapperComponent from './wrapper.component.js'
import WrapperController from './wrapper.controller.js'
import WrapperTemplate from './wrapper.html'
import uiRouter from 'angular-ui-router';

describe('Wrapper module', () => {	
	let makeController, $rootScope, $scope, $state;
		
	beforeEach(window.module(uiRouter));
	beforeEach(inject(( _$rootScope_, _$state_ ) => {
		$scope = _$rootScope_.$new();
		$rootScope = _$rootScope_;
		$state = _$state_;		
		spyOn($state, 'go');
		makeController = () => {
			return new WrapperController( $scope, $state );
		}
	}));
	
	describe('Controller', () => {
	
		it("has a loading property default to false", () => {
			let controller = makeController();
			expect(controller.loading).toEqual(false); 
		})
		
		it("when 'startLoading' event fires, 'loading' property should be changed to true", () => {
			let controller = makeController();			
			$rootScope.$broadcast('startLoading');
			expect(controller.loading).toEqual(true);
		})
		
		it("when 'stopLoading' event fires, 'loading' property should be changed to false", () => {
			let controller = makeController();
			controller.loading = true;
			$rootScope.$broadcast('stopLoading');
			expect(controller.loading).toEqual(false);
		})
		
		it("when 'showError' event fires, 'error' property should be changed to passed message", () => {
			let errorMessage = 'error';
			let controller = makeController();			
			$rootScope.$broadcast('showError', errorMessage);
			expect(controller.error).toEqual(errorMessage);
		})
		
		it("when 'hideError'  function invokes then error property should become empty", () => {			
			let controller = makeController();
			controller.error = "error";
			controller.hideError();
			expect(controller.error).toEqual("");
		})
		
		it("when 'showNotification' event fires, then 'notification' property should be changed to passed message", () => {			
			let notificationMessage = "notification";
			let controller = makeController();
			$rootScope.$broadcast('showNotification', notificationMessage);						
			expect(controller.notification).toEqual(notificationMessage);
		})
		
		it("when 'hideNotification'  function invokes then notification property should become empty", () => {			
			let controller = makeController();
			controller.notification = "notification";
			controller.hideNotification();
			expect(controller.notification).toEqual("");
		})
		
		it("when '$stateChangeError' event fires, then $state.go('login') should be called", () =>{
			let controller = makeController();			
			$rootScope.$broadcast('$stateChangeError');		
			expect($state.go).toHaveBeenCalledWith("login");
			
		})
		
		it("when '$stateChangeError' event fires, then authError property should be changed to error message", () =>{
			let controller = makeController();
			let authErrorMessage = "auth error";
			$rootScope.$broadcast('$stateChangeError', null, null, null, null, authErrorMessage);			
			expect(controller.authError).toEqual(authErrorMessage);
		})
		
		it("when '$stateChangeSuccess' event fires, then authError property should become empty", () =>{
			let controller = makeController();
			controller.authError = "auth error";
			$rootScope.$broadcast('$stateChangeSuccess');
			expect(controller.authError).toEqual("");
		})
	})

	describe('Component', () => {
	  let component = WrapperComponent;
	
	  it('includes the intended template',() => {
        expect(component.template).toEqual(WrapperTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).toEqual(WrapperController);
      });
	})
	
})