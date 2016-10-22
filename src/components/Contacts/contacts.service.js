class ContactsDataSvc {
	constructor($http) {
		this.$http = $http;
	}
	
	getAllContacts() {	  	
		return this.$http.get('//test-api.javascript.ru/v1/vmerkotan/users?delay=1000')
                  .then(response => response.data);	  
    }
	
	deleteContact(contactId) {
		return this.$http.delete('//test-api.javascript.ru/v1/vmerkotan/users/' + contactId + '?delay=1000');	
   }
   
   createContact(contact) {		
		return this.$http.post('//test-api.javascript.ru/v1/vmerkotan/users/?delay=1000', contact)
					.then(response => response.data);	
	}
}

ContactsDataSvc.$inject = ['$http'];
export default ContactsDataSvc;
