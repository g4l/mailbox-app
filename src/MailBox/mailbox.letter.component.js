angular.module('mailbox') 
.component('letter',{
    bindings: {
      letterId: '<'
    },    
    controller: function($state, $scope, MailsDataSvc) {
		this.deleting = false;		
		MailsDataSvc.getAllMails().then(letters => {			
			this.letter = letters.find(i => i._id == this.letterId)			
		})
		MailsDataSvc.getAllMailboxes()
			.then(mailboxes => {
				this.trashMailbox = mailboxes.find(i => i.title.toUpperCase() == 'TRASH')
				this.sentMailbox = mailboxes.find(i => i.title.toUpperCase() == 'SENT')
			})
		this.goBack = function() {
			$state.go('^');
		}
		this.deleteMail = function(letterId) {
			this.deleting = true;
			if(this.letter.mailbox == this.trashMailbox._id) {
				MailsDataSvc.deleteMail(this.letter._id).then( () => {
					$scope.$emit('deleteLetter', letterId);
					$state.go('^');
					this.deleting = false;
					$scope.$emit('showNotification', "Letter was deleted successfully.");
				})
				.catch(error => {
					console.log("letter component error in deleteMail >>>>>", error);
					$state.go('^');
					this.deleting = false;
					$scope.$emit('showError', error.status + ' ' + error.statusText);
				});
			} else {
				MailsDataSvc.moveToTrash(this.letter._id, { mailbox: this.trashMailbox._id }).then( () => {
					$scope.$emit('deleteLetter', letterId);
					$state.go('^');
					this.deleting = false;
					$scope.$emit('showNotification', "Letter was moved to trash mailbox successfully.");
				})
				.catch(error => {
					console.log("letter component error in moveToTrash >>>>>", error);
					$state.go('^');
					this.deleting = false;
					$scope.$emit('showError', error.status + ' ' + error.statusText);
				});
			}
			
		}
    },
	templateUrl: 'src/MailBox/templates/mailbox.letter.component.tmpl.html'
  })