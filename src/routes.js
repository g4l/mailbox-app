angular.module('mailbox')
.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider.state('login', {
    url: '/login',
    template: `<login></login>`,
  })
  $stateProvider.state('mailboxes', {
    url: '/mailboxes',
	resolve: {
		isAuth: function(AuthSvc){
			return AuthSvc.isAuthenticated();
		}
	},
    template: `<mailboxes></mailboxes>`,	
	
  })
  $stateProvider.state('create', {
	parent: 'mailboxes',
    url: '/create',
    template: `	<table class="slds-table slds-table--bordered slds-table--cell-buffer slds-no-row-hover">
				  <tbody>
					<tr>
					  <td >
						<create-letter></create-letter>
					  </td>      
					</tr>
				  </tbody>
				</table>`,
  })
  $stateProvider.state('contacts', {
	parent: 'mailboxes',
    url: '/contacts',
    template: `<div><contacts></contacts></div>`,
  })
  $stateProvider.state('mailbox', {
    parent: 'mailboxes',
    url: '/:mailboxId',
    template: `<letters mailbox-id="mailboxId"></letters>`,
    controller: function($stateParams, $scope) {
      $scope.mailboxId = $stateParams.mailboxId;
    }
  })
  $stateProvider.state('letter', {
    parent: 'mailbox',
    url: '/:letterId',
    template: `<letter letter-id="letterId"></letter>`,
    controller: function($stateParams, $scope) {
      $scope.letterId = $stateParams.letterId;
    }
  })   
   $urlRouterProvider.otherwise('/login');
})
