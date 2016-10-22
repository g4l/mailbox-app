import angular from 'angular';
import LetterComponent from './letter.component.js';

let LetterModule = angular.module('letter-module', []) 
	.component('letter', LetterComponent)
	.name;
	
export default LetterModule;