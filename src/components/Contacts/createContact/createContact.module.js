import angular from 'angular';
import CreateContactComponent from './createContact.component.js'

let CreateContactModule = angular.module('createContact', [])
	.component('createContact', CreateContactComponent)
	.name;
	
export default CreateContactModule;