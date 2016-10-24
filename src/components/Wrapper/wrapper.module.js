import angular from 'angular';
import ErrorModule from './error/error.module.js';
import LoaderModule from './loader/loader.module.js';
import NotificationModule from './notification/notification.module.js';
import WrapperComponent from './wrapper.component.js';

let WrapperModule = angular.module('wrapper-module', [ErrorModule,LoaderModule,NotificationModule])
	.component('wrapper', WrapperComponent)
	.name;
	
export default WrapperModule;