;(function(window,undefined) {
	/**
	 * [r 基于Q.js简单的封装]
	 * @param  {[string]} anchor [锚点名称]
	 * @param  {[string]} html   [内容（字符串或html）]
	 */
	function r(anchor,html) {
		return new r.fn.init(anchor,html);
	}
	// 原型属性
	r.fn = r.prototype = {
		constructor: r,
		init:function(anchor,html) {
			if(r.isString(anchor) && r.isString(html)) {
				this.anchor = anchor;
				this.html = html;
			} else {
				this.anchor = anchor || 'a';
				this.html = '参数错误，请检查你的代码';
			}
		},
		routes:function(container){
			var that = this;
			Q.reg(this.anchor,function(){
		    	container.innerHTML=that.html;
			});
		}
	}
	r.fn.init.prototype = r.fn;
	// 添加可扩展的方法 extend
	r.extend = r.fn.extend = function ( obj ) {
	  	for ( var k in obj ) {
	  	  this[ k ] = obj[ k ];
	  	}
	}
	r.extend({
		// 判断字符串
		isString: function ( data ) {
   			return typeof data === 'string';
  		},
		routesCall:function(anchorArr){
			// 执行所有路由方法
			for (var i = 0; i < anchorArr.length; i++) {
				var item = anchorArr[i];
				r(item,document.getElementById(item).innerHTML).routes(container);
			}
		}
	})
	// 导出到全局
	window.r = r;
})(window)