define('js/post', ['require'], function(require){
	var temp = '';
	return {
		template: '<div class="main post" transition="normal" id="post" v-html="html"></div>',
		data: function(){
			return {
				html: ''
			};
		},
		route: {
			canActivate: function(transition){
				var path = transition.to.query.url;
				require(['text!'+decodeURI(path)], function(html){
					temp = html;
					transition.next();
				});
			},
			activate: function(transition){
				this.html = temp;
				transition.next();
			}
		}
	};
});