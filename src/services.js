function MailsDataSvc($http) {
	let mails;
  this.getAllMails = () => {
	  if(!mails) {		
		mails = $http.get('http://test-api.javascript.ru/v1/vmerkotan/letters?delay=1000')
                  .then(response => response.data);
	  }
      return mails;
    }
  this.getAllMailboxes = () => {
      return $http.get('http://test-api.javascript.ru/v1/vmerkotan/mailboxes?delay=1000')
                  .then(response => response.data)
    }
}

export default MailsDataSvc