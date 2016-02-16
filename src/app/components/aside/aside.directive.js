/**
 * 作者:war
 * 时间:16/2/16
 * 内容:
 */
'use strict';
(function () {
   angular.module('mlc').directive('aside',aside);
    function aside(){
        return{
            restrict:'E',
            replace:true,
            scope:{
              data:'='
            },
            templateUrl:"./app/components/aside/aside.tpl.html"
        }
    }
})();