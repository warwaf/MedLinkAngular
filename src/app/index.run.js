(function() {
  'use strict';

  angular
    .module('gulpAnglar')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
