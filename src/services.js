angular.module('mailbox')
.service('MailsDataSvc', function($http) {
	let mails;
	let mailboxes;
  this.getAllMails = () => {
	  if(!mails) {		
		mails = $http.get('//test-api.javascript.ru/v1/vmerkotan/letters?delay=1000')
                  .then(response => response.data);
	  }
      return mails;
    }
  this.getAllMailboxes = () => {
	  if(!mailboxes) {
		mailboxes = $http.get('//test-api.javascript.ru/v1/vmerkotan/mailboxes?delay=1000')
						.then(response => response.data)
	  }
      return mailboxes;
    }
   this.deleteMail = letterId => {
	return $http.delete('//test-api.javascript.ru/v1/vmerkotan/letters/' + letterId);	
   }
})
