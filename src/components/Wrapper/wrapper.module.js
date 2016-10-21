import angular from 'angular';
import WrapperComponent from './wrapper.component.js';

let WrapperModule = angular.module('wrapper-module', [])
	.component('wrapper', WrapperComponent)
	.name;
	
export default WrapperModule;