require([
    'http://cdn.bootcss.com/vue/1.0.24/vue.min.js',
    'http://cdn.bootcss.com/vue-router/0.7.13/vue-router.min.js',
    'js/data/music.hetu',
    'js/router.map'
], function(
    Vue,
    VueRouter,
    hetu,
    routerMap
) {
    Vue.config.delimiters = ['{=', '=}'];
    var rand = Math.floor(Math.random() * hetu.lyrics.length);
    var vm = new Vue({
        el: '#body',
        data: {
            lyrics: hetu.lyrics[rand]
        },
        ready: function() {
            setTimeout(closeLoader, 1);
        }
    });

    function closeLoader() {
        var loader = document.getElementById('page-loader-model');
        loader.className = 'hide';
        setTimeout(function() {
            loader.remove();
        }, 1000);
    }
});