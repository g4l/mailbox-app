import angular from 'angular';
import MailBoxComponent from './mailbox.component.js';
import MailsDataSvc from './mailbox.service.js'

let MailboxModule = angular.module('mailbox-module', [])
	.component('mailboxes', MailBoxComponent)
	.service('MailsDataSvc', MailsDataSvc)
	.name;

export default MailboxModule;