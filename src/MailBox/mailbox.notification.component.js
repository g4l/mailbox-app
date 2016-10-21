angular.module('mailbox')
.component("mbNotification", {
	bindings: {
		notificationMessage:"<",
		hideNotification:"&"
	},
	templateUrl: 'src/MailBox/templates/mailbox.notification.component.tmpl.html'

})
