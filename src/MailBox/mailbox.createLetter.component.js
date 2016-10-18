angular.module('mailbox') 
.component("createLetter",{ 
	controller : function($scope, MailsDataSvc) {		
		MailsDataSvc.getAllMailboxes()
        .then(mailboxes => {
          this.sentMailbox = mailboxes.find(i => i.title.toUpperCase() == 'SENT')
        })
		.catch(error => {			
			$scope.$emit('showError', error.status + ' ' + error.statusText);			
		})
		this.to = "";
		this.subject = "";
		this.body = "";		
		this.sendEmail = function() {
			$scope.$emit('startLoading');
			MailsDataSvc.saveLetter({ subject: this.subject, to: this.to, body: this.body, mailbox: this.sentMailbox._id})
						.then( () => {
								this.to = "";
								this.subject = "";
								this.body = "";
								this.addMailForm.$setPristine();
								this.addMailForm.$setUntouched();
								$scope.$emit('stopLoading');
								$scope.$emit('showNotification', "Letter was sent successfully. You can find it in sent mailbox");
							})
							.catch(error => {		
								console.log("createLetter component error >>>>>", error);
								$scope.$emit('stopLoading');
								$scope.$emit('showError', error.status + ' ' + error.statusText);			
							})
		}
		
	},	
	templateUrl: 'src/MailBox/templates/mailbox.createLetter.component.tpl.html'
  })