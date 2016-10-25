//svg格式代码解析
/*气泡数据分析*/
function bubbleDataParse(obj,className,data){
	$("."+className).remove();
	if(data.path.length>0){
		obj.selectAll("."+className).data(data.path).enter().append("g").attr("class",function(d){
			var expressNode=d3.select(this);
			var pathContent=expressNode.append(d.type);
			d.style.forEach(function(css){
				if(css.attr=="text"){
					pathContent.text(css.val);
				}else{
					pathContent.attr(css.attr,css.val);
				}
			})
			return className;
		});
		if((data.cX!=0)||(data.cY!=0)){
			obj.attr("transform","translate("+data.cX+","+data.cY+")");
		}
	}
}
/*表情数据分析*/
function expressDataParse(obj,className,data,cleanBoolean){
	if(cleanBoolean){
		$("."+className).remove();
	}
	if(data.path.length>0){
		obj.selectAll("."+className).data(data.path).enter().append("g").attr("class",function(d){
			var expressNode=d3.select(this);
			var pathContent=expressNode.append(d.type);
			d.style.forEach(function(css){
				pathContent.attr(css.attr,css.val);
			})
			return className;
		});
		if((data.cX!=0)||(data.cY!=0)){
			obj.attr("transform","translate("+data.cX+","+data.cY+")");
		}
	}
}
function expressDataParse2(obj,obj2,className,data,cleanBoolean){
	if(cleanBoolean){
		$("."+className).remove();
	}
	if("frontPath" in data) {
		if(data.frontPath.length>0){
			obj2.selectAll("."+className).data(data.frontPath).enter().append("g").attr("class",function(d){
				var expressNode=d3.select(this);
				var pathContent=expressNode.append(d.type);
				d.style.forEach(function(css){
					pathContent.attr(css.attr,css.val);
				})
				return className;
			});
			if((data.cX!=0)||(data.cY!=0)){
				obj2.attr("transform","translate("+data.cX+","+data.cY+")");
			}
		}
	}
	if("backPath" in data) {
		if(data.backPath.length>0){
			obj.selectAll("."+className).data(data.backPath).enter().append("g").attr("class",function(d){
				var expressNode=d3.select(this);
				var pathContent=expressNode.append(d.type);
				d.style.forEach(function(css){
					pathContent.attr(css.attr,css.val);
				})
				return className;
			});
			if((data.cX!=0)||(data.cY!=0)){
				obj.attr("transform","translate("+data.cX+","+data.cY+")");
			}
		}
	}
}
/*头发数据解析*/
function hairDataParse(frontHair,middleHair,backHair,className,hairData,cleanBoolean){
	if(cleanBoolean){
		$("."+className).remove();
	}
	if("frontPath" in hairData) {
		frontHair.selectAll("."+className).data(hairData.frontPath).enter().append("g").attr("class",function(d){
			var faceNode=d3.select(this);
			var pathContent;
			if("type" in d){
				pathContent=faceNode.append(d.type);
			}else{
				pathContent=faceNode.append("path").attr("d",d.path);
			}
			d.style.forEach(function(css){
				pathContent.attr(css.attr,css.val);
			})
			return className;
		});

		if((hairData.cX[0]!=0)||(hairData.cY[0]!=0)){
			frontHair.attr("transform","translate("+hairData.cX[0]+","+hairData.cY[0]+")");
		}
	}
	if("middlePath" in hairData){
		middleHair.selectAll("."+className).data(hairData.middlePath).enter().append("g").attr("class",function(d){
			var faceNode=d3.select(this);
			var pathContent=faceNode.append("path").attr("d",d.path);
			d.style.forEach(function(css){
				pathContent.attr(css.attr,css.val);
			})
			return className;
		});

		if((hairData.cX[2]!=0)||(hairData.cY[2]!=0)){
			backHair.attr("transform","translate("+hairData.cX[1]+","+hairData.cY[1]+")");
		}
	}
	if("backPath" in hairData){
		backHair.selectAll("."+className).data(hairData.backPath).enter().append("g").attr("class",function(d){
			var faceNode=d3.select(this);
			var pathContent=faceNode.append("path").attr("d",d.path);
			d.style.forEach(function(css){
				pathContent.attr(css.attr,css.val);
			})
			return className;
		});

		if((hairData.cX[1]!=0)||(hairData.cY[1]!=0)){
			backHair.attr("transform","translate("+hairData.cX[1]+","+hairData.cY[1]+")");
		}
	}
}
function dataParse (obj,className,data,cx,cy) {
	if(data.length>0){
		$("."+className).remove();
		obj.selectAll("."+className).data(data).enter().append("g").attr("class",function(d){
			var faceNode=d3.select(this);
			var pathContent=faceNode.append("path").attr("d",d.path);
			d.style.forEach(function(css){
				pathContent.attr(css.attr,css.val);
			})
			return className;
		});
		obj.attr("transform","translate("+cx+","+cy+")");
	}
}