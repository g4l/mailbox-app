import ContactsModule from './contacts.module.js'
import ContactsComponent from './contacts.component.js'
import ContactsController from './contacts.controller.js'
import ContactsTemplate from './contacts.html';

describe('Contacts module', () => {
	let makeController, $rootScope, $scope, $state, $log, ContactsDataSvc, $httpBackend, $q;
  let fakeContacts = [{"_id":"1","fullName":"Madeline Hamilton","email":"madeline.hamilton@test.com","avatarUrl":"url","birthdate":"1990-07-03","gender":"F","address":"3747 West Drive"},
						{"_id":"2","fullName":"John Smith","email":"john.smith@test.com","avatarUrl":"url","birthdate":"1985-03-10","gender":"M","address":"3268 East Drive"}]
	let mockDeleteResponse = {data: "ok", status: 200, statusText: "OK"};
  beforeEach(window.module(ContactsModule));
	beforeEach(inject(( _$rootScope_, _$log_, _ContactsDataSvc_, $q, _$httpBackend_) => {
		$scope = _$rootScope_.$new();
		$rootScope = _$rootScope_;
    ContactsDataSvc = _ContactsDataSvc_;
		$httpBackend = _$httpBackend_;
		makeController = () => {
			return new ContactsController( $scope, $log, ContactsDataSvc );
		}
    spyOn($scope, "$emit");
    spyOn(ContactsDataSvc, 'getAllContacts').and.returnValue($q.resolve(fakeContacts));

    $httpBackend.whenGET('//test-api.javascript.ru/v1/vmerkotan/users?delay=1000')
			.respond(fakeContacts);
		$httpBackend.whenDELETE('//test-api.javascript.ru/v1/vmerkotan/users/1?delay=1000')
				.respond(mockDeleteResponse);
		$httpBackend.whenPOST('//test-api.javascript.ru/v1/vmerkotan/users/?delay=1000', fakeContacts[0])
				.respond(fakeContacts[0]);
	}));

		describe('Controller', () => {

			it("when controller initiates 'startLoading' event should fire", () => {
				let controller = makeController();
	      expect($scope.$emit).toHaveBeenCalledWith("startLoading");
			})
	    it("when controller initiates ContactsDataSvc.getAllContacts() should be called", () => {
				let controller = makeController();
	      expect(ContactsDataSvc.getAllContacts).toHaveBeenCalled();
			})
	})

	describe('ContactsDataSvc', () => {
		it("when invoke getAllContacts() list of contacts should be return", (done) => {
			ContactsDataSvc.getAllContacts().then(contacts => {
				expect(contacts).toEqual(fakeContacts);
				done();
			});
			$httpBackend.flush();
		})

		it("when invoke deleteContact(contactId) delete response should be returned", (done) => {
			ContactsDataSvc.deleteContact(1).then(response => {
				expect(response.data).toEqual(mockDeleteResponse);
				done();
			});
			$httpBackend.flush();
		})

		it("when invoke createContact(user) passed in user should be returned", (done) => {
			ContactsDataSvc.createContact(fakeContacts[0]).then(response => {
				expect(response).toEqual(fakeContacts[0]);
				done();
			});
			$httpBackend.flush();
		})
	})

	describe('Component', () => {
	  let component = ContactsComponent;

	  it('includes the intended template',() => {
    	expect(component.template).toEqual( ContactsTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual( ContactsController);
    });
	})

})
