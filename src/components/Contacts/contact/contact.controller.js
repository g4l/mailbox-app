class ContactController {
	constructor() {
		this.deleting = false;
	}
	
	delete(){
		this.deleting = true;
		this.deleteContact();
	}
}

export default ContactController;