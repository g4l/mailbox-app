import angular from 'angular'
import uiRouter from 'angular-ui-router'
import routerConfig from './routes.js'
import MailsDataSvc from './services.js'
import MailBoxes from './components/MailBoxes.js';
import Letters from './components/Letters.js';
import Letter from './components/Letter.js';

angular.module('mailbox', [uiRouter])
.config(routerConfig)
.component('mailboxes', MailBoxes)
.component('letters', Letters)
.component('letter', Letter)
.service('MailsDataSvc', MailsDataSvc)



