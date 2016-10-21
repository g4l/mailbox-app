angular.module('mailbox-app')
.service('LocalStorageSrv', function($window) {	
	this.getItem = (key) => {
		return $window.localStorage.getItem(key)
    }
	this.setItem = (key, value) => {
		$window.localStorage.setItem(key, value);
	}
})