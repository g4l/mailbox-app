import MailboxModule from '../../mailbox.module.js'
import LetterComponent from './letter.component.js'
import LetterController from './letter.controller.js'
import LetterTemplate from './letter.html';
import uiRouter from 'angular-ui-router';

describe('Letter module', () => {
	let makeController, $rootScope, $scope, $log, MailsDataSvc, $state, $httpBackend, $q;
	let mockLetters = [{"_id":"1","subject":"subject","mailbox":"1","body":"body","to":"me@test.com"},
			{"_id":"2","subject":"subject_2","mailbox":"2","body":"body_2","to":"me@test.com"}];
	let mockMailboxes = [{"_id":"1","title":"sent"},{"_id":"2","title":"trash"}]

  beforeEach(window.module(MailboxModule));
	beforeEach(window.module(uiRouter));
	beforeEach(inject(( _$rootScope_, _$log_, _MailsDataSvc_, _$q_, _$state_, _$httpBackend_) => {
		$scope = _$rootScope_.$new();
		$rootScope = _$rootScope_;
    MailsDataSvc = _MailsDataSvc_;
		$log = _$log_;
		$state = _$state_;
		$httpBackend = _$httpBackend_;
		$q = _$q_;
		makeController = () => {
			return new LetterController( $state, $scope, $log, MailsDataSvc );
		}
      spyOn($scope, "$emit");
			spyOn($state, "go");
    	spyOn(MailsDataSvc, 'getAllMails').and.returnValue($q.resolve());
			spyOn(MailsDataSvc, 'getAllMailboxes').and.returnValue($q.resolve(mockMailboxes));

	}));

		describe('Controller', () => {

			it("when controller initiates, MailsDataSvc.getAllMails() should be invoked", () => {
				let controller = makeController();
				expect(MailsDataSvc.getAllMails).toHaveBeenCalled();
			})

			it("when controller initiates, MailsDataSvc.getAllMailboxes() should be invoked", () => {
				let controller = makeController();
				expect(MailsDataSvc.getAllMailboxes).toHaveBeenCalled();
			})

			it("when controller initiates, trashMailbox variable should be initiates with mailbox with title = 'trash'", () => {
				let controller = makeController();
				controller.MailsDataSvc.getAllMailboxes = () => {
					return $q.resolve(mockMailboxes);
				}
				controller.getData();
				expect(controller.trashMailbox).toEqual(mockMailboxes[1]);
			})

			it("when goBack() function invokes $state should be changed to previous one", () => {
				let controller = makeController();
				controller.goBack();
				expect($state.go).toHaveBeenCalledWith("^");
			})

			it("successfulDelete(letterId, notificationMessage) function invokes 'deleteLetter' with letterId should fire", () => {
				let controller = makeController();
				controller.successfulDelete(1);
				expect($scope.$emit).toHaveBeenCalledWith("deleteLetter", 1);
			})
	})

	describe('Component', () => {
	  let component = LetterComponent;

	  it('includes the intended template',() => {
    	expect(component.template).toEqual(LetterTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(LetterController);
    });
	})

})
