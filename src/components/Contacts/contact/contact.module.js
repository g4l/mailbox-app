import angular from 'angular';
import ContactComponent from './contact.component.js';

let ContactModule = angular.module('contact', [])
	.component('contact', ContactComponent)
	.name;

export default ContactModule;
