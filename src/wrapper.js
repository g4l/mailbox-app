angular.module('mailbox')
	.component('wrapper', {
		controller: function($scope, $log, $state) {
		
		 $scope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {				
				this.authError = error;
				$state.go('login')
			});
			
		 $scope.$on('$stateChangeSuccess',  (event, toState, toParams, fromState, fromParams, error) => {								
				this.authError = "";				
			})
		},
		template: `<div class="slds-m-top--large slds-align--absolute-center login-error slds-p-around--xx-small" ng-if="$ctrl.authError">{{$ctrl.authError}}</div>
					<ui-view></ui-view>`
	})