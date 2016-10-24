import NotificationModule from './notification.module.js'
import NotificationComponent from './notification.component.js'
import NotificationTemplate from './notification.html'

describe('Notification module', () => {	
	let element, $rootScope, $scope, $compile, isolateScope; 
	let notification = "notification message";
	
	beforeEach(window.module(NotificationModule));	  
	beforeEach(inject(( _$rootScope_, _$compile_ ) => {
		$scope = _$rootScope_.$new();
		$rootScope = _$rootScope_;
		$compile = _$compile_;

		var parentScope = $rootScope.$new();
	    parentScope.notificationMessage = notification;
		parentScope.hideNotification = function() {
			this.notificationMessage = "";
		}
	    element = angular.element('<mb-notification notification-message="notificationMessage" hide-notification="hideNotification()"></mb-notification>');		
	    $compile(element)(parentScope);
		isolateScope = element.isolateScope();
		isolateScope.$apply();
	}));
	
	it("when error-message attr passed to component then it should be present in template", () => {	  
	  expect(element.text()).toContain(notification);
	})
	
	it("when notification-message attr passed to component then it should be present in controller", () => {	
	  expect(isolateScope.$ctrl.notificationMessage).toEqual(notification);	  	  
	})
	
	it("when hide-notification attr passed to component then it should be present in controller", () => {
	  isolateScope.$ctrl.hideNotification();
	  isolateScope.$apply();
	  expect(isolateScope.$ctrl.notificationMessage).toEqual("");
	})
	
	describe('Component', () => {
	  let component = NotificationComponent;	
		  it('includes the intended template',() => {
			expect(component.template).toEqual(NotificationTemplate);
		  });
	  })
	  
})
