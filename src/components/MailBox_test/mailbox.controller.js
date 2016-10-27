class MailBoxController {
	constructor(MailsDataSvc) {		
		this.MailsDataSvc = MailsDataSvc;
		this.mailboxes = [];
	}
	
	getAllMailBoxes() {		
		return this.MailsDataSvc.getAllMailboxes()
        .then(mailboxes => {
          this.mailboxes = mailboxes;
        })
	}
}

MailBoxController.$inject = ['MailsDataSvc'];
export default MailBoxController