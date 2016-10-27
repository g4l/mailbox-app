class MailBoxController {
	constructor(MailsDataSvc) {		
		this.MailsDataSvc = MailsDataSvc;
		this.mailboxes = [];
	}
	
	getAllMailBoxes() {		
		this.MailsDataSvc.getAllMailboxes()
        .then(mailboxes => {
          this.mailboxes = mailboxes;
        })
	}
}

MailBoxController.$inject = ['MailsDataSvc'];
export default MailBoxController