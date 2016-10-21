class AuthSvc {
	constructor($q, $timeout, LocalStorageSrv, SessionStorageSrv) {
		this.$q = $q;
		this.$timeout = $timeout;
		this.LocalStorageSrv = LocalStorageSrv;
		this.SessionStorageSrv = SessionStorageSrv;
		this.password = "";
		this.email = ""; 
		this.remember = false;
		this.storageKey = "mailbox_authenticated";
	}
	
	isAuthenticated(){
	   let deferred = this.$q.defer();
	   
	   if( this.LocalStorageSrv.getItem(this.storageKey) || this.SessionStorageSrv.getItem(this.storageKey) ) {
			deferred.resolve("Authenticated");
	   } else if( !this.email.trim() && !this.password ) {
		   deferred.reject("Login required...");
	   } else {
			this.$timeout(function(){
			   if( (this.email.trim() === "me@test.com" && this.password === "qwerty")  ) {
				this.remember ? this.LocalStorageSrv.setItem(this.storageKey, true) : this.SessionStorageSrv.setItem(this.storageKey, true);
				  deferred.resolve("Authenticated");
			   } else {				
				  deferred.reject("Incorrect login and/or password...");
			   }			   
		   },2000);
	   }		   
	   return deferred.promise;
	}
	
	setPassword(newPass) {
		this.password = newPass;
	}
	
	setMail(newMail) {
		this.email = newMail;
	}
	
	setRemember(newRemember) {
		this.remember = newRemember;
	}	
}
AuthSvc.$inject = ['$q','$timeout', 'LocalStorageSrv', 'SessionStorageSrv'];
export default AuthSvc;
