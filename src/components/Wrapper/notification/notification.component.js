import template from './notification.html';
import './notification.css';

let NotificationComponent = {
	bindings: {
		notificationMessage:"<",
		hideNotification:"&"
	},
	template
}

export default NotificationComponent;