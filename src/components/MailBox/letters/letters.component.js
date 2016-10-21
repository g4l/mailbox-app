import controller from './letters.controller.js';
import template from './letters.html';
import './letters.css';

let LettersComponent = {
    bindings: {
      mailboxId: '<'
    },
	controller,
	template
}

export default LettersComponent;