import angular from 'angular';
import uiRouter from 'angular-ui-router';
import CommonModule from './common/common.module.js';
import AuthModule from './components/Auth/auth.module.js';
import ContactsModule from './components/Contacts/contacts.module.js';
import MailBoxModule from './components/MailBox/mailbox.module.js';
import WrapperModule from './components/Wrapper/wrapper.module.js';

angular.module('mailbox-app', [uiRouter, CommonModule, AuthModule, ContactsModule, MailBoxModule, WrapperModule])
