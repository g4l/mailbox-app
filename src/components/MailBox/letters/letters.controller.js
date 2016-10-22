class LettersController {
	constructor($scope, $log, MailsDataSvc) {
		this.$scope = $scope;
		this.$log = $log;
		this.MailsDataSvc = MailsDataSvc;		
		this.letters = [];
	    this.$scope.$on('deleteLetter', (name, letterId) =>{
			//this.$scope.$ctrl.letters = this.$scope.$ctrl.letters.filter( i => i._id != letterId);
			this.letters = this.letters.filter( i => i._id != letterId);
	    });
		this.getAllMails();
	}
	
	getAllMails() {
	  this.$scope.$emit('startLoading');
      this.MailsDataSvc.getAllMails().then(letters => {
        this.letters = letters.filter(i => i.mailbox == this.mailboxId);
		this.$scope.$emit('stopLoading');
      })
	  .catch(error => {
			this.$log.error("letters component error >>>>>", error);
			this.$scope.$emit('stopLoading');
			this.$scope.$emit('showError', error.status + ' ' + error.statusText);			
		})
	}
}
LettersController.$inject = ['$scope', '$log', 'MailsDataSvc']
export default LettersController;
