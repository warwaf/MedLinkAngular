(function() {
  'use strict';

  angular
    .module('mlc')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$timeout, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1453971208447;
    vm.showToastr = showToastr;

    //activate();


    // config
    $scope.app = {
      name: 'mlc',
      version: '0.0.1',
      test:true,
      /**
       * 设置显示电子病历时隐藏边栏和footer
       */
      record:false,
      NavBtn:"退出",
      // for chart colors
      color: {
        primary: '#7266ba',
        info:    '#23b7e5',
        success: '#27c24c',
        warning: '#fad733',
        danger:  '#f05050',
        light:   '#e8eff0',
        dark:    '#3a3f51',
        black:   '#1c2b36'
      },
      settings: {
        themeID: 1,
        navbarHeaderColor: 'bg-info dker',
        navbarCollapseColor: 'bg-info dker',
        asideColor: 'bg-light dker b-r',
        headerFixed: true,
        asideFixed: false,
        asideFolded: false,
        asideDock: false,
        container: false
      }
    }

    //function activate() {
    //  getWebDevTec();
    //  $timeout(function() {
    //    vm.classAnimation = 'rubberBand';
    //  }, 4000);
    //}

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    //function getWebDevTec() {
    //  vm.awesomeThings = webDevTec.getTec();
    //
    //  angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //    awesomeThing.rank = Math.random();
    //  });
    //}
  }
})();
