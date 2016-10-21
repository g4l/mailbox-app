angular.module('mailbox')
.service('SessionStorageSrv', function($window) {	
	
	this.getItem = (key) => {
		return sessionStorage.getItem(key)
    }
	this.setItem = (key, value) => {
		sessionStorage.setItem(key, value);
	}
})