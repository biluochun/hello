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
				var that = this;
				require(['text!'+decodeURI(path)], function(html){
					temp = html;
					transition.next();
					this.$parent.loader = 5;
				});
			},
			activate: function(transition){
				this.html = temp;
				this.$parent.loader = 10;
			}
		}
	};
});