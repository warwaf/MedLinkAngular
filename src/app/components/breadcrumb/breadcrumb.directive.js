/**
 * 作者:war
 * 时间:16/2/3
 * 内容:
 */
'use strict';
(function () {
   angular.module("mlc").directive('breadcrumb',breadcrumb);
    function breadcrumb(){
        return {
            restrict: 'E',
            replace: true,
            scope: {
                war: '='
            },
            templateUrl:"./app/components/breadcrumb/breadcrumb.tpl.html"
        }
    }
})()