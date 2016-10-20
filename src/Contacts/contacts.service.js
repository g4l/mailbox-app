angular.module('mailbox')
.service('ContactsDataSvc', function($http, $interval) {	
  this.getAllContacts = () => {	  	
		return $http.get('//test-api.javascript.ru/v1/vmerkotan/users?delay=1000')
                  .then(response => response.data);	  
    }
   this.deleteContact = contactId => {
	return $http.delete('//test-api.javascript.ru/v1/vmerkotan/users/' + contactId + '?delay=1000');	
   }
   
   this.createContact = (contact) => {		
		return $http.post('//test-api.javascript.ru/v1/vmerkotan/users/?delay=1000', contact)
					.then(response => response.data);	
	}
})