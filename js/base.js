require.config({
  baseUrl: '/'
});
require(['./data/music.hetu', 'http://cdn.bootcss.com/vue/1.0.24/vue.min.js'], function(hetu, Vue) {
  var rand = Math.floor(Math.random() * hetu.lyrics.length);
  var vm = new Vue({
    el: 'body',
    data: {
      lyrics: hetu.lyrics[rand]
    }
  });
});
/*

<script src="http://cdn.bootcss.com/vue/1.0.24/vue.min.js"></script>
<script src="http://cdn.bootcss.com/vue-router/0.7.13/vue-router.min.js"></script>
 */