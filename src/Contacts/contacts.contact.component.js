angular.module('mailbox') 
.component('contact', {
	bindings: {
		contact: '<',
		deleteContact: '&'
	},
	controller: function() {
		this.deleting = false;
		this.delete = function(){
			this.deleting = true;
			this.deleteContact();
		}
	},
	templateUrl: 'src/Contacts/templates/contacts.contact.component.tmpl.html'
	
})