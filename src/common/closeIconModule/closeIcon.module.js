import angular from 'angular';
import CloseIconComponent from './closeIcon.component.js';

let CloseIconModule = angular.module('closeIconModule', [])
    .component('closeIcon', CloseIconComponent)
    .name;

export default CloseIconModule;
