/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('mlc')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('PROJECT_INFO',{
       ASIDE_URL:"json/nav.json"   //aside 的URL地址
    });
})();
