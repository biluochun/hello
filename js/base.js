require(["//cdn.bootcss.com/vue/1.0.24/vue.min.js","//cdn.bootcss.com/vue-router/0.7.13/vue-router.min.js","js/data/music.hetu","text!/html/index.html","text!/html/about.html","text!/html/friend.html","text!/html/categories.html","js/post"],function(e,t,n,o,a,m,r,i){function c(){var e=document.getElementById("page-loader-model");e.className="hide",setTimeout(function(){e.remove()},1e3)}function u(){var u=Math.floor(Math.random()*n.lyrics.length),s=new t({hashbang:!1,linkActiveClass:"active"}),l=e.extend({data:function(){return{lyrics:n.lyrics[u],hover:{menu:!0,auther:!1,other:!1,chat:!1}}},ready:function(){setTimeout(c,1)}});new e({el:"#uyan_frame_control",data:{bool:!1},methods:{click:function(){var e=document.getElementById("uyan_frame");return function(){var t=this;uyan_config.su=location.hash,require(["http://v2.uyan.cc/code/uyan.js?uid=2016535&time_now="+Date.now()],function(){t.bool=!t.bool,e.className=t.bool?"show":""})}}()}});var d={"/":{name:"index",component:{template:o}},"/post":{name:"post",component:i},"/about":{name:"about",component:{template:a}},"/friend":{name:"friend",component:{template:m}},"/categories":{name:"categories",component:{template:r}}};s.map(d),s.start(l,"#body");var h=s._currentTransition.to.name,f=0,v=0;for(var p in d)f++;for(var p in d){if(d[p].name===h)break;v++,v===f&&s.go({name:"index"})}}e.config.delimiters=["{=","=}"],e.use(t),u()});