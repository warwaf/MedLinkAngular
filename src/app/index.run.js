(function() {
  'use strict';

  angular
    .module('mlc')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
