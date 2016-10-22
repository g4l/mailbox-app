class AuthLoginController {
	constructor($scope, $state, AuthSvc) {
		this.$scope = $scope;
		this.$state = $state;
		this.AuthSvc = AuthSvc;
		this.password = "";
		this.email = "";
		this.rememberme = false;
		this.processing = false;
		
		$scope.$on('$stateChangeError', () => {						
			this.processing = false;
		});
	}
	
	login() {
		this.processing = true;
		this.AuthSvc.setPassword(this.password);
		this.AuthSvc.setMail(this.email);
		this.AuthSvc.setRemember(this.rememberme);
		this.$state.go('mailboxes');
	}
}
AuthLoginController.$inject = ['$scope', '$state', 'AuthSvc'];
export default AuthLoginController;
