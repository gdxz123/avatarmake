/*
	Name: Javascript Translate Plugin 
	Link: niumowang.org
	Author: ok8008@yeah.net
*/
(function(){
	var Translate = function(params){
		var _this = this;
		_this.params = params;
		_this.timer = null;
		_this.isAnimate = false;
		_this.len = _this.current = _this.bothWidth = 0;
		_this.obj =  _this.params.obj || document.getElementById('touch');
		_this.items = _this.params.items || _this.obj.getElementsByTagName('li');
		_this.circle = _this.params.circle || false;
		if(window.addEventListener){
			window.addEventListener('orientationchange',function(){
				_this.init();
			},false);
		};
		_this.init();
	};
	Translate.prototype.init=function(){
		var _this = this;
		_this.width = document.body.offsetWidth+15;
		_this.len = _this.items.length;
		_this.bothWidth = _this.width*_this.len;
		for(var i=0;i<_this.len;i++){
			console.log(_this.items[i]);
			_this.items[i].style.width = _this.width+'px';
		}
		_this.obj.style.width = _this.bothWidth +'px';
		
		_this.obj.style.webkitTransform = 'translate3d(0,0,0)';
	};
	Translate.prototype.offset = function(distance){
		var _this = this;
		var nowPercent = -(100/_this.len)*_this.current;
        var movePercent = (100/_this.bothWidth)*distance;
		_this.move(nowPercent+movePercent,false);
	};
	Translate.prototype.move = function(percent,translate){
		var _this = this;
		if(translate==true){
			$(_this.obj).animate({
				translate3d: percent+'%,0,0',
			},200);
		}else{
			_this.obj.style.webkitTransform = 'translate3d('+percent+'%,0,0)';
		}
	};
	Translate.prototype.end = function(distance){
		var _this = this;
		if(Math.abs(distance) > _this.width/2){
			if(distance<0){
				_this.current = (_this.current+1<_this.len)?_this.current+1:_this.len-1;
				var percent = (100/_this.len)*_this.current;
				_this.move(-percent,true);
			}else{
				_this.current = (_this.current > 1)?_this.current-1:0;
				var percent = (100/_this.len)*_this.current;
				_this.move(-percent,true);
			}
		}else{
			var percent = (100/_this.len)*_this.current;
			_this.move(-percent,true);
		};
	};
	Translate.prototype.next = function(tem){
		var _this = this;
		_this.move(-(100/_this.len)*tem,true);
		_this.checkAnimate();
	};
	Translate.prototype.prev = function(tem){
		var _this = this;
		_this.move(-(100/_this.len)*tem,true);
		_this.checkAnimate();
	};
	Translate.prototype.checkAnimate = function () {
		var _this = this;
		_this.isAnimate = true;
		clearTimeout(_this.timer);
		_this.timer = setTimeout(function(){
			_this.isAnimate = false;
		},500);
	};
	window.Translate = Translate;
}());