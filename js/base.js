require([
    '//cdn.bootcss.com/vue/1.0.24/vue.js',
    '//cdn.bootcss.com/vue-router/0.7.13/vue-router.js',
    'js/data/music.hetu',
    'text!./html/index.html',
    'js/post'
], function(
    Vue,
    VueRouter,
    hetu,
    indexView,
    post
) {
    Vue.config.delimiters = ['{=', '=}'];
    Vue.use(VueRouter);

    init();

    function closeLoader() {
        var loader = document.getElementById('page-loader-model');
        loader.className = 'hide';
        setTimeout(function() {
            loader.remove();
        }, 1000);
    }

    function init() {
        var rand = Math.floor(Math.random() * hetu.lyrics.length);
        var router = new VueRouter({
            hashbang: false,
            linkActiveClass: 'active'
        });
        var App = Vue.extend({
            data: function() {
                return {
                    lyrics: hetu.lyrics[rand]
                };
            },
            ready: function() {
                setTimeout(closeLoader, 1);
            }
        });
        var routerMap = {
            '/': {
                name: 'index',
                component: {
                    template: indexView
                }
            },
            '/post': {
                component: post
            }
        };

        router.map(routerMap);
        router.start(App, '#body');
        router.go({
            name: 'index'
        });
    }
});