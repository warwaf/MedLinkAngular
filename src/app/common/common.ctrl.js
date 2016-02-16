/**
 * 作者:war
 * 时间:16/2/3
 * 内容:
 */
'use strict';
(function () {
   angular.module('mlc').controller('commonCtrl',common);

    function common($scope,$http,PROJECT_INFO){

        $scope.dataArr = ["电子病历1", "电子病历2"];

        var month = [
            ["一月", "January", "Jan."],
            ["二月", "February", "Feb."],
            ["三月", "March", "Mar."],
            ["四月", "April", "April"],
            ["五月", "May", "May"],
            ["六月", "June", "June"],
            ["七月", "July", "July"],
            ["八月", "August", "Aug."],
            ["九月", "September", "Sep."],
            ["十月", "October", "Oct."],
            ["十一月", "November", "Nov."],
            ["十二月", "December", "Dec."]
        ];
        var Day = [
            ["星期日", "Sunday", "Sun."],
            ["星期一", "Monday", "Mon."],
            ["星期二", "Tuesday", "Tues."],
            ["星期三", "Wednesday", "Wed."],
            ["星期四", "Thursday", "Thur."],
            ["星期五", "Friday", "Fri."],
            ["星期六", "Saturday", "Sat."]
        ]
        var mydate = new Date();
        var txt = month[mydate.getMonth()][2] + " " + mydate.getDate() + "," + mydate.getFullYear() + "," + Day[mydate.getDay()][1];
        $scope.navDate = txt;

        if ($scope.app.test) {
            $http.get("json/navMessage.json").success(function(rep) {
                var userInfo = rep;
                var message = "Log-in Account：" + userInfo["userinfo"]["userName"] + "/" + userInfo["userinfo"]["realName"] + "/" + userInfo["userinfo"]["hname"] + "[Work ID: 3011]";
                $scope.navMessage = message;
            });
        } else {
            var userInfo = window.getNotice();
            var message = "Log-in Account：" + userInfo["userinfo"]["userName"] + "/" + userInfo["userinfo"]["realName"] + "/" + userInfo["userinfo"]["hname"] + "[Work ID: 3011]";
            $scope.navMessage = message;
        }

        $http.get(PROJECT_INFO.ASIDE_URL).success(function(rep){
            $scope.task = rep;
        }).error(function(){

        })
    }
})()