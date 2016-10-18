  angular.module('mailbox') 
  .component('letters', {
    bindings: {
      mailboxId: '<'
    },
    templateUrl: 'src/MailBox/templates/mailbox.letters.component.tmpl.html',
    controller: function($scope, MailsDataSvc) {
      MailsDataSvc.getAllMails().then(letters => {
        this.letters = letters.filter(i => i.mailbox == this.mailboxId);
      })
	  $scope.$on('deleteLetter', function(name, letterId){
		//почему через this.letters не работает? 
		$scope.$ctrl.letters = $scope.$ctrl.letters.filter( i => i._id != letterId);
	  });
    }
  })