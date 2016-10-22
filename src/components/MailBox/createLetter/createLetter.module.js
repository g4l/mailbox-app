import angular from 'angular';
import CreateLetterComponent from './createLetter.component.js';

let CreateLetterModule = angular.module('createLetter-module', []) 
	.component("createLetter",CreateLetterComponent)
	.name
	
export default CreateLetterModule;