angular.module('contacts')
.component("createContact", {
	bindings: {
		saveContact: '&'
	},
	controller: function(ContactsDataSvc) {
		this.fullName = "";
		this.email = "";
		this.birthdate = "";
		this.gender = "";
		this.address = "";
		this.avatarUrl = "";
		this.create = function() {			
			let contactToSave = { 
				fullName: this.fullName, 
				email: this.email, 
				birthdate: isFinite( new Date(this.birthdate) ) ? this.birthdate : "", 				
				address:this.address,
				avatarUrl:this.avatarUrl
			}
			if(this.gender) {
				contactToSave.gender = this.gender;
			}
			this.saveContact({user:contactToSave});
			this.fullName = "";
			this.email = "";
			this.birthdate = "";
			this.gender = "";
			this.address = "";
			this.avatarUrl = "";
			this.createContactForm.$setPristine();
			this.createContactForm.$setUntouched();
		}

	},
	templateUrl: 'src/Contacts/templates/contacts.createContact.component.tmpl.html'
})