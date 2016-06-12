require([
    '//cdn.bootcss.com/vue/1.0.24/vue.min.js',
    '//cdn.bootcss.com/vue-router/0.7.13/vue-router.min.js',
    './data/music.hetu.js',
    'text!../html/index.html',
    'text!../html/about.html',
    'text!../html/friend.html',
    'text!../html/categories.html',
    './js/post.js'
], function(
    Vue,
    VueRouter,
    hetu,
    indexView,
    aboutView,
    friendView,
    categoriesView,
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
                    lyrics: hetu.lyrics[rand],
                    hover: {
                        menu: true,
                        auther: false,
                        other: false,
                        chat: false
                    }
                };
            },
            ready: function() {
                setTimeout(closeLoader, 1);
            }
        });
        new Vue({
            el: '#uyan_frame_control',
            data: {
                bool: false
            },
            methods: {
                click: (function(){
                    var uyan = document.getElementById('uyan_frame');
                    return function(){
                        var that = this;
                        //uyan_config.su = location.hash;
                        require(['http://v2.uyan.cc/code/uyan.js?uid=2016535'], function(){
                            that.bool = !that.bool;
                            uyan.className = that.bool?'show':'';
                        });
                    };
                })()
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
                name: 'post',
                component: post
            },
            '/about': {
                name: 'about',
                component: {
                    template: aboutView
                }
            },
            '/friend': {
                name: 'friend',
                component: {
                    template: friendView
                }
            },
            '/categories': {
                name: 'categories',
                component: {
                    template: categoriesView
                }
            }
        };

        router.map(routerMap);
        router.start(App, '#body');

        var routerName = router._currentTransition.to.name;
        var routerNumber = 0;
        var routerIndex = 0;
        for(var i in routerMap){
            routerNumber++;
        }
        for(var i in routerMap){
            if(routerMap[i].name === routerName){
                break;
            }else{
                routerIndex++;
                if(routerIndex === routerNumber){
                    router.go({
                        name: 'index'
                    });
                }
            }
        }
    }
});