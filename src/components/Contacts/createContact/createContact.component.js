import controller from './createContact.controller.js';
import template from './createContact.html';
import './createContact.css';

let CreateContactComponent = {
	bindings: {
		saveContact: '&'
	},
	controller,
	template
}

export default CreateContactComponent;