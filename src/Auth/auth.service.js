angular.module('auth')
.service('AuthSvc', function($q, $timeout, LocalStorageSrv, SessionStorageSrv) {
	let password = "", email = "", remember = false;
	let storageKey = "mailbox_authenticated"
	return {
        isAuthenticated: function(){
           var deferred = $q.defer();
		   
		   if( LocalStorageSrv.getItem(storageKey) || SessionStorageSrv.getItem(storageKey) ) {
				deferred.resolve("Authenticated");
		   } else if( !email.trim() && !password ) {
			   deferred.reject("Login required...");
		   } else {
				$timeout(function(){
				   if( (email.trim() === "me@test.com" && password === "qwerty")  ) {
					remember ? LocalStorageSrv.setItem(storageKey, true) : SessionStorageSrv.setItem(storageKey, true);
					  deferred.resolve("Authenticated");
				   } else {				
					  deferred.reject("Incorrect login and/or password...");
				   }			   
			   },2000);
		   }		   
           return deferred.promise;
        },
		
		setPassword: function(newPass) {
			password = newPass;
		},
		
		setMail: function(newMail) {
			email = newMail;
		},
		
		setRemember: function(newRemember) {
			remember = newRemember;
		}
    };
})