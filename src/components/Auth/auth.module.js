import angular from 'angular'
import authLoginComponent from './auth.login.component.js';
import authService from './auth.service.js';

let authModule = angular.module('auth', [])
.component('login', authLoginComponent)
.service('AuthSvc', authService)
.name

export default authModule;