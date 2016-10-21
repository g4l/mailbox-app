class CreateLetter {
	constructor($scope, MailsDataSvc) {
		this.$scope = $scope;
		this.MailsDataSvc = MailsDataSvc;
		this.to = "";
		this.subject = "";
		this.body = "";
		this.sentMailbox = "";
		getMailBoxes();
	}
	
	getMailBoxes() {
		this.MailsDataSvc.getAllMailboxes()
          .then(mailboxes => {
          this.sentMailbox = mailboxes.find(i => i.title.toUpperCase() == 'SENT')
        })
		.catch(error => {			
			this.$scope.$emit('showError', error.status + ' ' + error.statusText);			
		})
	}
	
	sendEmail() {
		this.$scope.$emit('startLoading');
		this.MailsDataSvc.saveLetter({ subject: this.subject, to: this.to, body: this.body, mailbox: this.sentMailbox._id})
			.then( () => {
					this.to = "";
					this.subject = "";
					this.body = "";
					this.addMailForm.$setPristine();
					this.addMailForm.$setUntouched();
					this.$scope.$emit('stopLoading');
					this.$scope.$emit('showNotification', "Letter was sent successfully. You can find it in sent mailbox");
				})
				.catch(error => {		
					console.log("createLetter component error >>>>>", error);
					this.$scope.$emit('stopLoading');
					this.$scope.$emit('showError', error.status + ' ' + error.statusText);			
				})
	}
}
CreateLetter.$inject = ['$scope', 'MailsDataSvc'];
export default CreateLetter;
