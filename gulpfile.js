/**
 * 作者:war
 * 时间:16/1/29
 * 内容:
 */
'use strict';

var gulp = require('gulp');
var wrench = require('wrench');
/**
 * 这个将加载gulp目录下的所有的js或coffee文件
 * 按指定的顺序执行gulp 的任务
 */
wrench.readdirSyncRecursive('./gulp').filter(function(file){
    return (/\.(js|coffee)$/i).test(file);
}).map(function(file){
    require('./gulp/'+file);
})

gulp.task('default',[],function(){
   gulp.start('build');
});