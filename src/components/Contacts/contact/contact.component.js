import controller from './contact.controller.js';
import template from './contact.html';
import './contact.css';

let ContactComponent = {
	bindings: {
		contact: '<',
		deleteContact: '&'
	},
	controller,
	template
}

export default ContactComponent;