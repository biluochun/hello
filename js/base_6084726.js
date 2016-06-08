define('js/base', ['require', 'exports', 'module', 'http://cdn.bootcss.com/vue/1.0.24/vue.min.js', 'http://cdn.bootcss.com/vue-router/0.7.13/vue-router.min.js', 'js/data/music.hetu'], function(require, exports, module) {

  var Vue = require('http://cdn.bootcss.com/vue/1.0.24/vue.min.js');
  var VueRouter = require('http://cdn.bootcss.com/vue-router/0.7.13/vue-router.min.js');
  var hetu = require('js/data/music.hetu');
  
  Vue.config.delimiters = ['{=', '=}'];
  var rand = Math.floor(Math.random() * hetu.lyrics.length);
  var vm = new Vue({
    el: 'body',
    data: {
      lyrics: hetu.lyrics[rand]
    }
  });
  

});