import angular from 'angular';
import LocalStorageService from './common.localStorageService.js';
import SessionStorageService from './common.sessionStorageService.js';
import CommonRoute from './common.route.js';

let CommonModule = angular.module('common-module', [])
	.service('LocalStorageSrv', LocalStorageService)
	.service('SessionStorageSrv', SessionStorageService)
	.config(CommonRoute)
	.name;
	
export default CommonModule;