class MailsDataSvc {
	constructor($http) {
		this.$http = $http;		
	}
	
	getAllMailboxes(){	  
		return $http.get('//test-api.javascript.ru/v1/vmerkotan/mailboxes?delay=1000')
					.then(response => response.data)
    }	
}
MailsDataSvc.$inject = ['$http']
export default MailsDataSvc