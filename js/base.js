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
        el: 'body',
        data: {
            loadStatus: 0,
            lyrics: hetu.lyrics[rand]
        },
        ready: function() {
            setTimeout(closeLoader.bind(this), 1);
        }
    });

    function closeLoader() {
        var that = this;
        that.loadStatus++;
        setTimeout(function() {
            that.loadStatus++;
        }, 1000);
    }
});