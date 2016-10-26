import MailboxModule from '../mailbox.module.js'
import LettersComponent from './letters.component.js'
import LettersController from './letters.controller.js'
import LettersTemplate from './letters.html';

describe('Letters module', () => {
	let makeController, $rootScope, $scope, $state, $log, MailsDataSvc;

	let mockLetters = [{"_id":"1","subject":"subject","mailbox":"1","body":"body","to":"me@test.com"},
			{"_id":"2","subject":"subject_2","mailbox":"2","body":"body_2","to":"me@test.com"}];

  beforeEach(window.module(MailboxModule));
	beforeEach(inject(( _$rootScope_, _$log_, _MailsDataSvc_, $q) => {
		$scope = _$rootScope_.$new();
		$rootScope = _$rootScope_;
    MailsDataSvc = _MailsDataSvc_;
		$log =  _$log_;
		makeController = () => {
			return new LettersController( $scope,	$log, MailsDataSvc );
		}
      spyOn($scope, "$emit");
    	spyOn(MailsDataSvc, 'getAllMails').and.returnValue($q.resolve());
	}));

		describe('Controller', () => {
			it("when controller initiates, MailsDataSvc.getAllMails() should be invoked", () => {
				let controller = makeController();
				expect(MailsDataSvc.getAllMails).toHaveBeenCalled();
			})

	    it("when controller initiates, 'startLoading' event should fire", () => {
				let controller = makeController();
				expect($scope.$emit).toHaveBeenCalledWith("startLoading");
			})

			it("when 'deleteLetter' event fires, letters property should be filtered by deleted letter Id", () => {
				let controller = makeController();
				controller.letters = mockLetters;
				$rootScope.$broadcast('deleteLetter', 1);
				expect(controller.letters).toEqual(mockLetters.filter(i => i._id != 1));
			})
	})

	describe('Component', () => {
	  let component = LettersComponent;

	  it('includes the intended template',() => {
    	expect(component.template).toEqual(LettersTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).toEqual(LettersController);
    });
	})

})
