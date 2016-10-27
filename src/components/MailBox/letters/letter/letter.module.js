import angular from 'angular';
import LetterComponent from './letter.component.js';
import CloseIconModule from '../../../../common/closeIconModule/closeIcon.module.js';

let LetterModule = angular.module('letter-module', [CloseIconModule]) 
	.component('letter', LetterComponent)
	.name;
	
export default LetterModule;