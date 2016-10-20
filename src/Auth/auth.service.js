angular.module('mailbox')
.service('AuthSvc', function($q, $timeout,  LocalStorageSrv) {
	let password = "", email = "";
	let localStorageKey = "mailbox_authenticated"
	return {
        isAuthenticated: function(){
           var deferred = $q.defer();
		   
		   if( LocalStorageSrv.getItem(localStorageKey) ) {
				deferred.resolve("Authenticated");
		   } else {
				$timeout(function(){
				   if( (email.trim() === "me@test.com" && password === "qwerty")  ) {				  
					 LocalStorageSrv.setItem(localStorageKey, true);
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
		}
    };
})