import MailboxModule from './mailbox.module.js'
import MailboxController from './mailbox.controller.js'

describe('Mailbox test module', () => {
	let makeController, MailsDataSvc, $q, $httpBackend;
  let fakeMailboxes = [{"_id":"1","title":"sent"},{"_id":"2","title":"inbox"}];	
  beforeEach(window.module(MailboxModule));
	beforeEach(inject((_MailsDataSvc_,_$q_, _$httpBackend_) => {		
    MailsDataSvc = _MailsDataSvc_;
		$q = _$q_;
		$httpBackend = _$httpBackend_;

		makeController = () => {
			return new MailboxController( MailsDataSvc );
		}
	}));
		describe('Controller', () => {

			it("when getAllMailboxes() invokes mailboxes property in controller should be populated", (done) => {
				let controller = makeController();
				controller.MailsDataSvc.getAllMailboxes = () => {
					return $q.resolve(fakeMailboxes);
				}
				controller.getAllMailBoxes().then(() => {
					expect(controller.mailboxes).toEqual(fakeMailboxes);
					done();
				});
			$httpBackend.flush();
			})
	})

})