import angular from 'angular';
import ErrorComponent from './error.component.js';
import CloseIconModule from '../../../common/closeIconModule/closeIcon.module.js';


let ErrorModule = angular.module('error-module', [CloseIconModule])
	.component("mbError", ErrorComponent)
	.name;
	
export default ErrorModule;