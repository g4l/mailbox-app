class LocalStorageSrv {
	constructor($window) {
		this.$window = $window;
	}
	
	getItem (key) {
		return this.$window.localStorage.getItem(key)
    }
	setItem (key, value) {
		this.$window.localStorage.setItem(key, value);
	}
}
LocalStorageSrv.$inject = ['$window'];
export default LocalStorageSrv;
