routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function routerConfig($stateProvider, $urlRouterProvider) {

  $stateProvider.state('mailboxes', {
    url: '/mailboxes',
    template: `<mailboxes></mailboxes>`,
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
}

export default routerConfig;