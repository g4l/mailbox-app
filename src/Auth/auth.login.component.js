angular.module('mailbox')
.component('login', {
	controller: function($scope, $log, $state, AuthSvc) {
		this.password = "";
		this.email = "";
		this.processing = false;
		
		this.login = function() {
			this.processing = true;
			AuthSvc.setPassword(this.password);
			AuthSvc.setMail(this.email);
			$state.go('mailboxes');
		}
		
		 
		 $scope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {						
				this.processing = false;
			});
		
		
	},
	templateUrl: 'src/Auth/auth.login.component.tmpl.html',
})