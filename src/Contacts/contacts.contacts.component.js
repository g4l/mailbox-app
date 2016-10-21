angular.module('mailbox') .component('contacts', {	controller: function($scope, ContactsDataSvc) {		$scope.$emit('startLoading');		ContactsDataSvc.getAllContacts()			.then( contacts => {				this.contacts = contacts;				$scope.$emit('stopLoading');			})			.catch(error => {				console.log("contacts component error >>>>>", error);				$scope.$emit('stopLoading');				$scope.$emit('showError', error.status + ' ' + error.statusText);						})			this.deleteContact = function(contactId) {				//$scope.$emit('startLoading');				ContactsDataSvc.deleteContact(contactId).then( () => {										this.contacts = this.contacts.filter(i => i._id != contactId);					//$scope.$emit('stopLoading');				})				.catch(error => {					console.log("contacts component error on delete contact >>>>>", error);					//$scope.$emit('stopLoading');					$scope.$emit('showError', error.status + ' ' + error.statusText);							})			}			this.createUser = function(user) {								$scope.$emit('startLoading');				ContactsDataSvc.createContact(user).then( (response) => {											this.contacts.push(response);					$scope.$emit('stopLoading');				})				.catch(error => {					console.log("contacts component error on save contact >>>>>", error);					$scope.$emit('stopLoading');					$scope.$emit('showError', error.status + ' ' + error.statusText);							})		  }		  	},	templateUrl: 'src/Contacts/templates/contacts.contacts.component.tmpl.html'})