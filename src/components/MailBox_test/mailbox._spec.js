import MailboxModule from './mailbox.module.js'
import MailboxController from './mailbox.controller.js'

describe('Mailbox test module', () => {
	let makeController, MailsDataSvc, $q;
  let fakeMailboxes = [{"_id":"1","title":"sent"},{"_id":"2","title":"inbox"}];	
  beforeEach(window.module(MailboxModule));
	beforeEach(inject((_MailsDataSvc_,_$q_) => {		
    MailsDataSvc = _MailsDataSvc_;		
		$q = _$q_;

		makeController = () => {
			return new MailboxController( MailsDataSvc );
		}
	}));

		describe('Controller', () => {

			it("when getAllMailboxes() invokes mailboxes property in controller should be populated", () => {
				let controller = makeController();
				controller.MailsDataSvc.getAllMailboxes = () => {					
					return $q.resolve(fakeMailboxes)
				}
				controller.getAllMailBoxes();				
	      expect(controller.mailboxes).toEqual(fakeMailboxes);
			})
	})

})