class WrapperController {
	constructor($scope, $state) {
		this.$scope = $scope;		
		this.$state = $state;
		
		this.$scope.$on('$stateChangeError', (event, toState, toParams, fromState, fromParams, error) => {					
			this.authError = error;
			$state.go('login');
		});
		
		this.$scope.$on('$stateChangeSuccess',  (event, toState, toParams, fromState, fromParams, error) => {								
		    //will hide error when any state was changed successfully
			this.authError = "";
		})
	}
}
WrapperController.$inject = ['$scope', '$state'];
export default WrapperController;