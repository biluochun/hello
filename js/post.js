define([], function(){
	return {
		template: '<div id="post" v-html="html"></div>',
		data: function(){
			return {
				html: ''
			};
		},
		route: {
			activate: function(transition){
				var path = transition.to.query.url;
				var that = this;
				require(['text!'+decodeURI(path)], function(html){
					that.html = html;
				});
				transition.next();
			}
		}
	};
});