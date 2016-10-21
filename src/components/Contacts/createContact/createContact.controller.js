class CreateContact{
	constructor(ContactsDataSvc) {
		this.ContactsDataSvc = ContactsDataSvc;
		this.fullName = "";
		this.email = "";
		this.birthdate = "";
		this.gender = "";
		this.address = "";
		this.avatarUrl = "";
	}
	
	create() {			
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
	
}

CreateContact.$inject = ['ContactsDataSvc'];
export default CreateContact;