class SessionStorageSrv{
	constructor($window) {
		this.$window = $window;
	}
	
	getItem(key){
		return this.$window.sessionStorage.getItem(key)
    }
	setItem(key, value) {
		this.$window.sessionStorage.setItem(key, value);
	}	
}

SessionStorageSrv.$inject = ["$window"];
export default SessionStorageSrv;