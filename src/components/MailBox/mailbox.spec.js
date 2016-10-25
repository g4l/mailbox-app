import MailboxModule from './mailbox.module.js'
import MailboxComponent from './mailbox.component.js'
import MailboxController from './mailbox.controller.js'
import MailboxTemplate from './mailbox.html';

describe('Mailbox module', () => {
	let makeController, $rootScope, $scope, $state, $log, MailsDataSvc, $httpBackend;
  let fakeMailboxes = [{"_id":"1","title":"sent"},{"_id":"2","title":"inbox"}]
	let mockLetters = [{"_id":"1","subject":"subject","mailbox":"1","body":"body","to":"me@test.com"},
			{"_id":"2","subject":"subject_2","mailbox":"2","body":"body_2","to":"me@test.com"}];
	let mockDeleteResponse = {data: "ok", status: 200, statusText: "OK"};
  beforeEach(window.module(MailboxModule));
	beforeEach(inject(( _$rootScope_, _$log_, _MailsDataSvc_, $q, _$httpBackend_) => {
		$scope = _$rootScope_.$new();
		$rootScope = _$rootScope_;
    MailsDataSvc = _MailsDataSvc_;
		$httpBackend = _$httpBackend_;
		makeController = () => {
			return new MailboxController( $scope, $log, MailsDataSvc );
		}
    spyOn($scope, "$emit");
    spyOn(MailsDataSvc, 'getAllMailboxes').and.returnValue($q.resolve(fakeMailboxes));

    $httpBackend.whenGET('//test-api.javascript.ru/v1/vmerkotan/letters?delay=1000')
			.respond(mockLetters);
		$httpBackend.whenDELETE('//test-api.javascript.ru/v1/vmerkotan/letters/1?delay=1000')
				.respond(mockDeleteResponse);
		$httpBackend.whenPATCH('//test-api.javascript.ru/v1/vmerkotan/letters/1?delay=1000', mockLetters[0])
				.respond(mockLetters[0]);
		$httpBackend.whenPOST('//test-api.javascript.ru/v1/vmerkotan/letters/?delay=1000', mockLetters[0])
				.respond(mockLetters[0]);
	}));

		describe('Controller', () => {

			it("when controller initiates 'startLoading' event should fire", () => {
				let controller = makeController();
	      expect($scope.$emit).toHaveBeenCalledWith("startLoading");
			})
	    it("when controller initiates MailsDataSvc.getAllMailboxes() should be called", () => {
				let controller = makeController();
	      expect(MailsDataSvc.getAllMailboxes).toHaveBeenCalled();
			})
	})

	describe('MailsDataSvc', () => {
		it("when invoke getAllMailboxes() list of mailboxes should return", (done) => {
			MailsDataSvc.getAllMailboxes().then(mailboxes => {
				expect(mailboxes).toEqual(fakeMailboxes);
				done();
			});
			$httpBackend.flush();
		})

		it("when invoke getAllMails() list of mails should return", (done) => {
			MailsDataSvc.getAllMails().then(letters => {
				expect(letters).toEqual(mockLetters);
				done();
			});
			$httpBackend.flush();
		})

		it("when invoke deleteMail(letterId) delete response should be returned", (done) => {
			MailsDataSvc.deleteMail(1).then(response => {
				expect(response.data).toEqual(mockDeleteResponse);
				done();
			});
			$httpBackend.flush();
		})

		it("when invoke moveToTrash(letterId, letter) updated letter should be returned", (done) => {
			MailsDataSvc.moveToTrash(1, mockLetters[0]).then(response => {
				expect(response.data).toEqual(mockLetters[0]);
				done();
			});
			$httpBackend.flush();
		})
		it("when invoke saveLetter(letter) passed in letter should be returned", (done) => {
			MailsDataSvc.saveLetter(mockLetters[0]).then(response => {
				expect(response.data).toEqual(mockLetters[0]);
				done();
			});
			$httpBackend.flush();
		})
	})

	describe('Component', () => {
	  let component = MailboxComponent;

	  it('includes the intended template',() => {
    	expect(component.template).toEqual(MailboxTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(MailboxController);
    });
	})

})
