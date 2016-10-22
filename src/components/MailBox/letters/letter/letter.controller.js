class LetterController {
	constructor($state, $scope, $log, MailsDataSvc) {
		this.$state = $state;
		this.$scope = $scope;
		this.$log = $log;
		this.MailsDataSvc = MailsDataSvc;
		this.deleting = false;
		this.letter = {};
		this.trashMailbox = {};
		this.sentMailbox = {};
		this.getData();
	}
	
	getData() {
		this.MailsDataSvc.getAllMails().then(letters => {			
			this.letter = letters.find(i => i._id == this.letterId)			
		})
		this.MailsDataSvc.getAllMailboxes()
			.then(mailboxes => {
				this.trashMailbox = mailboxes.find(i => i.title.toUpperCase() == 'TRASH')
				this.sentMailbox = mailboxes.find(i => i.title.toUpperCase() == 'SENT')
		})
	}
	
	goBack() {
		this.$state.go('^');
	}
	
	deleteMail(letterId) {
		this.deleting = true;
		if(this.letter.mailbox == this.trashMailbox._id) {
			this.MailsDataSvc.deleteMail(this.letter._id).then( () => {
				this.$scope.$emit('deleteLetter', letterId);
				this.$state.go('^');
				this.deleting = false;
				this.$scope.$emit('showNotification', "Letter was deleted successfully.");
			})
			.catch(error => {
				this.$log.error("letter component error in deleteMail >>>>>", error);
				this.$state.go('^');
				this.deleting = false;
				this.$scope.$emit('showError', error.status + ' ' + error.statusText);
			});
		} else {
			this.MailsDataSvc.moveToTrash(this.letter._id, { mailbox: this.trashMailbox._id }).then( () => {
				this.$scope.$emit('deleteLetter', letterId);
				this.$state.go('^');
				this.deleting = false;
				this.$scope.$emit('showNotification', "Letter was moved to trash mailbox successfully.");
			})
			.catch(error => {
				this.$log.error("letter component error in moveToTrash >>>>>", error);
				this.$state.go('^');
				this.deleting = false;
				this.$scope.$emit('showError', error.status + ' ' + error.statusText);
			});
		}		
	}	
}
LetterController.$inject = ['$state', '$scope', '$log', 'MailsDataSvc']
export default LetterController;