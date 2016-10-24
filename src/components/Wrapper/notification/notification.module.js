import angular from 'angular';
import NotificationComponent from './notification.component.js';

let NotificationModule = angular.module("notification-module", [])
	.component("mbNotification", NotificationComponent)
	.name
	
export default NotificationModule;
