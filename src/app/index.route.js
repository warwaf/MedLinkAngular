(function() {
  'use strict';
  angular.module('mlc').config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      //.state('home', {
      //  url: '/',
      //  templateUrl: 'app/main/main.html',
      //  controller: 'MainController',
      //  controllerAs: 'main'
      //});
     .state('home', {
          url: '/',
          templateUrl: 'app/common/layout.menu.html',
          controller: 'commonCtrl'
      });
    $urlRouterProvider.otherwise('/');
  }
})();
