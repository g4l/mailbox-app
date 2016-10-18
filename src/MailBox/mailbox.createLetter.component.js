angular.module('mailbox') 
.component("createLetter",{ 
	controller : function(MailsDataSvc) {		
		MailsDataSvc.getAllMailboxes()
        .then(mailboxes => {
          this.sentMailbox = mailboxes.find(i => i.title.toUpperCase() == 'SENT')
        })
		this.to = "";
		this.subject = "";
		this.body = "";
		this.saving = false;
		this.sendEmail = function() {
			this.saving = true;
			MailsDataSvc.saveLetter({ subject: this.subject, to: this.to, body: this.body, mailbox: this.sentMailbox._id})
						.then( () => {
								this.to = "";
								this.subject = "";
								this.body = "";
								this.addMailForm.$setPristine();
								this.addMailForm.$setUntouched();
								this.saving = false;
							})
		}
		
	},	
	templateUrl: 'src/MailBox/templates/mailbox.createLetter.component.tpl.html'
  })