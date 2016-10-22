class MailsDataSvc {
	constructor($http) {
		this.$http = $http;		
	}
	
	getAllMails() {
	  if(!this.mails) {		
		this.mails = this.$http.get('http://test-api.javascript.ru/v1/vmerkotan/letters?delay=1000')
                  .then(response => response.data);
	  }
      return this.mails;
    }
	
	getAllMailboxes(){
	  if(!this.mailboxes) {
		this.mailboxes = this.$http.get('http://test-api.javascript.ru/v1/vmerkotan/mailboxes?delay=1000')
						.then(response => response.data)
	  }
      return this.mailboxes;
    }
	
	deleteMail(letterId) {
		return this.$http.delete('http://test-api.javascript.ru/v1/vmerkotan/letters/' + letterId + '?delay=1000');	
    }
	
	moveToTrash(letterId, letter){
	 this.mails = null;
	 return this.$http.patch('http://test-api.javascript.ru/v1/vmerkotan/letters/' + letterId + '?delay=1000', letter);	
   }
   
   saveLetter(mail) {
		this.mails = null;
		return this.$http.post('http://test-api.javascript.ru/v1/vmerkotan/letters/?delay=1000', mail);
	}
	
}
MailsDataSvc.$inject = ['$http']
export default MailsDataSvc