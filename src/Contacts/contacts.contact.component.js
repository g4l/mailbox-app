angular.module('mailbox') 
.component('contact', {
	bindings: {
		contact: '<',
		deleteContact: '&'
	},
	templateUrl: 'src/Contacts/templates/contacts.contact.component.tmpl.html'
	
})