import controller from './letter.controller.js';
import template from './letter.html';
import './letter.css';

let LetterComponent = {
	bindings: {
      letterId: '<'
    },   
	controller,
	template
}

export default LetterComponent;