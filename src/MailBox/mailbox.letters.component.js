  angular.module('mailbox') 
  .component('letters', {
    bindings: {
      mailboxId: '<'
    },
    templateUrl: 'src/MailBox/templates/mailbox.letters.component.tmpl.html',
    controller: function($scope, MailsDataSvc) {
		$scope.$emit('startLoading');
      MailsDataSvc.getAllMails().then(letters => {
        this.letters = letters.filter(i => i.mailbox == this.mailboxId);
		$scope.$emit('stopLoading');
      })
	  .catch(error => {
			console.log("letters component error >>>>>", error);
			$scope.$emit('stopLoading');
			$scope.$emit('showError', error.status + ' ' + error.statusText);			
		})
	  $scope.$on('deleteLetter', function(name, letterId){
		//почему через this.letters не работает? 
		$scope.$ctrl.letters = $scope.$ctrl.letters.filter( i => i._id != letterId);
	  });
    }
  })