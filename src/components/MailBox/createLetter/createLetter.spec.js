import MailboxModule from '../mailbox.module.js'
import CreateLetterComponent from './createLetter.component.js'
import CreateLetterController from './createLetter.controller.js'
import CreateLetterTemplate from './createLetter.html';

describe('Create Letter module', () => {
	let makeController, $rootScope, $scope, $state, $log, MailsDataSvc, $httpBackend;
  let fakeMailboxes = [{"_id":"1","title":"sent"},{"_id":"2","title":"inbox"}]
	let mockLetters = [{"_id":"1","subject":"subject","mailbox":"1","body":"body","to":"me@test.com"},
			{"_id":"2","subject":"subject_2","mailbox":"2","body":"body_2","to":"me@test.com"}];

  beforeEach(window.module(MailboxModule));
	beforeEach(inject(( _$rootScope_, _$log_, _MailsDataSvc_, $q) => {
		$scope = _$rootScope_.$new();
		$rootScope = _$rootScope_;
    MailsDataSvc = _MailsDataSvc_;
		makeController = () => {
			return new CreateLetterController( $scope, MailsDataSvc );
		}
    spyOn($scope, "$emit");
    spyOn(MailsDataSvc, 'getAllMailboxes').and.returnValue($q.resolve(fakeMailboxes));
		spyOn(MailsDataSvc, 'saveLetter').and.returnValue($q.resolve(mockLetters[0]));
	}));

		describe('Controller', () => {

			it("when sendEmail() function invokes, 'startLoading' event should fire", () => {
				let controller = makeController();
				controller.sendEmail();
	      expect($scope.$emit).toHaveBeenCalledWith("startLoading");
			})

			it("when sendEmail() function invokes MailsDataSvc.saveLetter() should be invoked too", () => {
				let controller = makeController();
				controller.sendEmail();
				expect(MailsDataSvc.saveLetter).toHaveBeenCalled();
			})

	    it("when controller initiates MailsDataSvc.getAllMailboxes() should be called", () => {
				let controller = makeController();
	      expect(MailsDataSvc.getAllMailboxes).toHaveBeenCalled();
			})
	})

	describe('Component', () => {
	  let component = CreateLetterComponent;

	  it('includes the intended template',() => {
    	expect(component.template).toEqual(CreateLetterTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(CreateLetterController);
    });
	})

})
