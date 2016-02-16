/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  此文件包含用于其他文件定义的变量任务吞
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 *  通过设计，我们只在几个地方使用了非常通用的配置值，以保持良好的可读性的任务
 */

var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 *  项目主要需要的路径
 */
exports.paths = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e'
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  exclude: [/\/bootstrap\.js$/, /\/bootstrap-sass\/.*\.js/, /\/bootstrap\.css/],
  directory: 'bower_components'
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
