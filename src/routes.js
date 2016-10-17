routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routerConfig($stateProvider, $urlRouterProvider) {

  $stateProvider.state('mailboxes', {
    url: '/mailboxes',
    template: `<mailboxes></mailboxes>`,
  })
  $stateProvider.state('create', {
	parent: 'mailboxes',
    url: '/create',
    template: `<h3>Create new mail</h3>`,
  })
  $stateProvider.state('contacts', {
	parent: 'mailboxes',
    url: '/contacts',
    template: `<h3>Contacts</h3>`,
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
   $urlRouterProvider.when('', '/mailboxes');
}

export default routerConfig;