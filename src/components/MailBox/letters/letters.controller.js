class LettersController {
	constructor($scope, MailsDataSvc) {
		this.$scope = $scope;
		this.MailsDataSvc = MailsDataSvc;
		getAllMails();
		
	  this.$scope.$on('deleteLetter', function(name, letterId){
		//почему через this.letters не работает? 
		this.$scope.$ctrl.letters = this.$scope.$ctrl.letters.filter( i => i._id != letterId);
	  });
	}
	
	getAllMails() {
	  this.$scope.$emit('startLoading');
      this.MailsDataSvc.getAllMails().then(letters => {
        this.letters = letters.filter(i => i.mailbox == this.mailboxId);
		this.$scope.$emit('stopLoading');
      })
	  .catch(error => {
			console.log("letters component error >>>>>", error);
			this.$scope.$emit('stopLoading');
			this.$scope.$emit('showError', error.status + ' ' + error.statusText);			
		})
	}
}
