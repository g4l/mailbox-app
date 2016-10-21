angular.module('mailbox')
.component('login', {
	controller: function($scope, $log, $state, AuthSvc) {
		this.password = "";
		this.email = "";
		this.rememberme = false;
		this.processing = false;
		
		this.login = function() {
			this.processing = true;
			AuthSvc.setPassword(this.password);
			AuthSvc.setMail(this.email);
			AuthSvc.setRemember(this.rememberme);
			$state.go('mailboxes');
		}
		 
		 $scope.$on('$stateChangeError', () => {						
			this.processing = false;
		});
	},
	templateUrl: 'src/Auth/auth.login.component.tmpl.html',
})