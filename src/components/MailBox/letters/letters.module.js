import angular from 'angular';
import LettersComponent from './letters.component.js';
import LetterModule from './letter/letter.module.js';

let LettersModule = angular.module('letters-module', [LetterModule])
	.component('letters', LettersComponent)
	.name;

export default LettersModule;
