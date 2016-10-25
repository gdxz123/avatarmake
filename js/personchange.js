//背景文字改变
function bubbl2eChangeA(i){
	$(".bdBubblePart").remove();
	expressDataParse(bubbl2e,"bubbl2ePartA",bubbl2eData["bubbl2e"+i].frontSide,true);
}
function bubbl2eChangeB(i){
	$(".bdBubblePart").remove();
	expressDataParse(bubbl2eB,"bubbl2ePartB",bubbl2eData["bubbl2e"+i].frontSide,true);
}
//背景文字改变
function bdBubbleChange(i){
	$(".bdBubblePart,.bubbl2ePartA,.bubbl2ePartB").remove();
	expressDataParse(bdBubble,"bdBubblePart",bdBubbleData["bdBubble"+i].frontSide,true);
}
//光晕改变
function haloChangeB(i){
	expressDataParse(haloB,"haloPartB",haloData["halo"+i].frontSide,true);
}
function haloChangeA(i){
	expressDataParse(haloA,"haloPartA",haloData["halo"+i].frontSide,true);
}
//气泡改变
function bubbleChange(i){
	bubbleDataParse(bubble,"bubblePart",bubbleData["bubble"+i].frontSide,true);
}
//鼻子变换
function noseChange(i){
	expressDataParse(nose,"nosePart",noseData["nose"+i].frontSide,true);
}
//帽子改变
function hatChange(i){
	expressDataParse(hat,"hatPart",hatData["hat"+i].frontSide,true);
}
//背景改变
function backgroundChange(i){
	var tem="bg"+i;
	$(".bgPart,.bgPart2,.bgPart3").remove();
	expressDataParse(background,"bgPart",backgroundData[tem].frontSide,true);
	$("#contentSVG").css("background",backgroundData[tem].frontSide.bgcolor);
	if(minWidth==winHeight&&backgroundData[tem].frontSide.repeat==1){
		expressDataParse(background2,"bgPart2",backgroundData["bgUse"].frontSide,true);
		background2.attr("transform","translate(-639,0)");
		expressDataParse(background3,"bgPart3",backgroundData["bgUse"].frontSide,true);
		background3.attr("transform","translate(639,0)");
		$(".bgUse").attr("fill",backgroundData[tem].frontSide.bgcolor);
	}
	else if(minWidth==winHeight&&backgroundData[tem].frontSide.repeat==2){
		expressDataParse(background2,"bgPart2",backgroundData[tem].frontSide,true);
		background2.attr("transform","translate(-639,0)");
		expressDataParse(background3,"bgPart3",backgroundData[tem].frontSide,true);
		background3.attr("transform","translate(639,0)");
	}
}
//爱好改变
function hobbyChange(i){
	expressDataParse(hobby,"hobbyPart",hobbyData["hobby"+i].frontSide,true);
	roleA.selectAll(".faceColor").attr("fill",faceTag.color);
}
//特征改变
function featureChange(i){
	expressDataParse(feature,"featurePart",featureData["feature"+i].frontSide,true);
}
//眼镜变换
function glassChange(i){
	expressDataParse(glass,"glassPart",glassData["glass"+i].frontSide,true);
}
////脸部编辑操作模块
//脸部编辑
function faceChange(i) {
	expressDataParse(face,"facePart",faceData["face"+i].frontSide,true);
	if(faceTag.color!=""){
		roleA.selectAll(".faceColor").attr("fill",faceTag.color);
	}
}
//头发编辑
function hairChange(i) {
	hairDataParse(frontHair,middleHair,backHair,"hairPart",hairData["hair"+i].frontSide,true);
	if(hairTag.color!=""){
		roleA.selectAll(".hairColor").attr("fill",hairTag.color);
	}
}
//表情变换
function expressChange(i){
	if(i==0){
		roleA.select("#facial").attr("opacity",1);
	}else{
		roleA.select("#facial").attr("opacity",0);
	}
	expressDataParse2(express,express2,"expressPart",expressData["express"+i].frontSide,true);
}
//眼睛编辑
function eyeChange(i) {
	expressDataParse(eye,"eyePart",eyeData["eye"+i].frontSide,true);
}
//眉毛编辑
function eyebrowChange(i){
	expressDataParse(eyebrow,"eyebrowPart",eyebrowData["eyebrow"+i].frontSide,true);
}
//嘴部编辑
function mouthChange(i){
	expressDataParse(mouth,"mouthPart",mouthData["mouth"+i].frontSide,true);
}
//衣服编辑
function clothChange(i){
	expressDataParse(cloth,"clothPart",clothData["cloth"+i].frontSide,true);
	roleA.selectAll(".faceColor").attr("fill",faceTag.color);
}
/*颜色改变*/
//头发颜色改变
function hairColorChange(color){
	hairTag.color=color;
	roleA.selectAll(".hairColor").attr("fill",hairTag.color,true);
}
//肤色改变
function faceColorChange(color){
	faceTag.color=color;
	roleA.selectAll(".faceColor").attr("fill",faceTag.color);
}
function bodyChange(i){
	expressDataParse(body,"bodyPart",bodyData["body"+i].frontSide,true);
}

//roleB改变
//气泡改变
function bubbleChangeB(i){
	bubbleDataParse(bubbleB,"bubblePartB",bubbleData["bubble"+i].frontSide);
}
//鼻子变换
function noseChangeB(i){
	expressDataParse(noseB,"nosePartB",noseData["nose"+i].frontSide,true);
}
//帽子改变
function hatChangeB(i){
	expressDataParse(hatB,"hatPartB",hatData["hat"+i].frontSide,true);
}
//爱好改变
function hobbyChangeB(i){
	expressDataParse(hobbyB,"hobbyPartB",hobbyData["hobby"+i].frontSide,true);
	roleB.selectAll(".faceColor").attr("fill",faceTagB.color);
}
//特征改变
function featureChangeB(i){
	expressDataParse(featureB,"featurePartB",featureData["feature"+i].frontSide,true);
}
//眼镜变换
function glassChangeB(i){
	expressDataParse(glassB,"glassPartB",glassData["glass"+i].frontSide,true);
}
////脸部编辑操作模块
//脸部编辑
function faceChangeB(i) {
	expressDataParse(faceB,"facePartB",faceData["face"+i].frontSide,true);
	if(faceTagB.color!=""){
		roleB.selectAll(".faceColor").attr("fill",faceTagB.color);
	}
}
//头发编辑
function hairChangeB(i) {
	hairDataParse(frontHairB,middleHairB,backHairB,"hairPartB",hairData["hair"+i].frontSide,true);
	if(hairTagB.color!=""){
		roleB.selectAll(".hairColor").attr("fill",hairTagB.color);
	}
}
//表情变换
function expressChangeB(i){
	if(i==0){
		roleB.select("#facialB").attr("opacity",1);
	}else{
		roleB.select("#facialB").attr("opacity",0);
	}
	expressDataParse2(expressB,express2B,"expressPartB",expressData["express"+i].frontSide,true);
}
//眼睛编辑
function eyeChangeB(i) {
	expressDataParse(eyeB,"eyePartB",eyeData["eye"+i].frontSide,true);
}
//眉毛编辑
function eyebrowChangeB(i){
	expressDataParse(eyebrowB,"eyebrowPartB",eyebrowData["eyebrow"+i].frontSide,true);
}
//嘴部编辑
function mouthChangeB(i){
	expressDataParse(mouthB,"mouthPartB",mouthData["mouth"+i].frontSide,true);
}
//衣服编辑
function clothChangeB(i){
	expressDataParse(clothB,"clothPartB",clothData["cloth"+i].frontSide,true);
	roleB.selectAll(".faceColor").attr("fill",faceTagB.color);
}
/*颜色改变*/
//头发颜色改变
function hairColorChangeB(color){
	hairTagB.color=color;
	roleB.selectAll(".hairColor").attr("fill",hairTagB.color);
}
//肤色改变
function faceColorChangeB(color){
	faceTagB.color=color;
	roleB.selectAll(".faceColor").attr("fill",faceTagB.color);
}
function bodyChangeB(i){
	expressDataParse(bodyB,"bodyPartB",bodyData["body"+i].frontSide,true);
}

//人物初始化
function personInitA() {
	bodyChange(1);
	hairChange(hairTag.id);
	mouthChange(mouthTag.id);
	eyeChange(eyeTag.id);
	eyebrowChange(eyebrowTag.id);
	noseChange(noseTag.id);
	expressChange(expressTag.id);
	faceChange(faceTag.id);
	hatChange(hatTag.id);
	backgroundChange(backgroundTag.id);
	hobbyChange(hobbyTag.id);
	clothChange(clothTag.id);
	bdBubbleChange(bdBubbleTag.id);
	featureChange(featureTag.id);
	glassChange(glassTag.id);
	roleA.attr("transform","translate(0,290) scale(.55,.55)");
}
function personInitB() {
	bodyChangeB(1);
	hairChangeB(hairTagB.id);
	mouthChangeB(mouthTagB.id);
	eyeChangeB(eyeTagB.id);
	eyebrowChangeB(eyebrowTagB.id);
	noseChangeB(noseTagB.id);
	expressChangeB(expressTagB.id);
	faceChangeB(faceTagB.id);
	hatChangeB(hatTagB.id);
	hobbyChangeB(hobbyTagB.id);
	clothChangeB(clothTagB.id);
	featureChangeB(featureTagB.id);
	glassChangeB(glassTagB.id);
	roleB.attr("transform","translate(295,290) scale(.55,.55)");
}
function recordTag(person1Tag,person2Tag){
	sexTag.id=person1Tag.sexual.id;
	hairTag.id=person1Tag.hair.id;
	hairTag.color=person1Tag.hair.color;
	faceTag.id=person1Tag.face.id;
	faceTag.color=person1Tag.face.color;
	mouthTag.id=person1Tag.mouth.id;
	eyeTag.id=person1Tag.eye.id;
	eyebrowTag.id=person1Tag.eyebrow.id;
	hatTag.id=person1Tag.hat.id;
	backgroundTag.id=person1Tag.background.id;
	hobbyTag.id=person1Tag.hobby.id;
	clothTag.id=person1Tag.cloth.id;
	bdBubbleTag.id=person1Tag.bdBubble.id;
	featureTag.id=person1Tag.feature.id;
	glassTag.id=person1Tag.glass.id;
	expressTag.id=person1Tag.express.id;
	noseTag.id=person1Tag.nose.id;
	sexTagB.id=person2Tag.sexual.id;
	hairTagB.id=person2Tag.hair.id;
	hairTagB.color=person2Tag.hair.color;
	faceTagB.id=person2Tag.face.id;
	faceTagB.color=person2Tag.face.color;
	mouthTagB.id=person2Tag.mouth.id;
	eyeTagB.id=person2Tag.eye.id;
	eyebrowTagB.id=person2Tag.eyebrow.id;
	hatTagB.id=person2Tag.hat.id;
	hobbyTagB.id=person2Tag.hobby.id;
	clothTagB.id=person2Tag.cloth.id;
	featureTagB.id=person2Tag.feature.id;
	glassTagB.id=person2Tag.glass.id;
	expressTagB.id=person2Tag.express.id;
	noseTagB.id=person2Tag.nose.id;
}
//屏幕自适应
function resizeSVG() {
	d3.select("#contentSVG").attr("width",$(window).get(0).innerWidth)
		.attr("height",$(window).get(0).innerHeight);
}
function bubbleEdit(inputString){
	var bubbleTextArray=inputString.split("&el&");
	d3.selectAll(".bubbleEditText").style("white-space","pre").text("");
	for(var i=0;i<bubbleTextArray.length;i++){
		$("#bubbleEditText"+i).text(bubbleTextArray[i]);
	}
	if(bubbleTextArray.length==1){
		d3.select("#bubbleEditText0").attr("y",150);
	}
	if(bubbleTextArray.length==2){
		d3.select("#bubbleEditText0").attr("y",120);
		d3.select("#bubbleEditText1").attr("y",180);
	}
	if(bubbleTextArray.length==3){
		d3.select("#bubbleEditText0").attr("y",80);
		d3.select("#bubbleEditText1").attr("y",140);
		d3.select("#bubbleEditText2").attr("y",200);
	}
}
function bubbl2eEditA(inputString){
	var bubbleTextArray=inputString.split("&el&");
	d3.selectAll(".bubbl2eTextA").style("white-space","pre").text("");
	for(var i=0;i<bubbleTextArray.length;i++){
		$("#bubbl2eTextA"+i).text(bubbleTextArray[i]);
	}
	if(bubbleTextArray.length==1){
		d3.select("#bubbl2eTextA0").attr("y",160);
	}
	if(bubbleTextArray.length==2){
		d3.select("#bubbl2eTextA0").attr("y",130);
		d3.select("#bubbl2eTextA1").attr("y",190);
	}
	if(bubbleTextArray.length==3){
		d3.select("#bubbl2eTextA0").attr("y",100);
		d3.select("#bubbl2eTextA1").attr("y",160);
		d3.select("#bubbl2eTextA2").attr("y",220);
	}
}
function bubbl2eEditB(inputString){
	var bubbleTextArray=inputString.split("&el&");
	d3.selectAll(".bubbl2eTextB").style("white-space","pre").text("");
	for(var i=0;i<bubbleTextArray.length;i++){
		$("#bubbl2eTextB"+i).text(bubbleTextArray[i]);
	}
	if(bubbleTextArray.length==1){
		d3.select("#bubbl2eTextB0").attr("y",160);
	}
	if(bubbleTextArray.length==2){
		d3.select("#bubbl2eTextB0").attr("y",130);
		d3.select("#bubbl2eTextB1").attr("y",190);
	}
	if(bubbleTextArray.length==3){
		d3.select("#bubbl2eTextB0").attr("y",100);
		d3.select("#bubbl2eTextB1").attr("y",160);
		d3.select("#bubbl2eTextB2").attr("y",220);
	}
}
function cleanBubbl2eTextA(bdBubbleId){
	$(".bubbl2ePartA").remove();
	if($(".bubbl2ePartB").length==0){
		bdBubbleChange(bdBubbleId);
	}
};
function cleanBubbl2eTextB(bdBubbleId){
	$(".bubbl2ePartB").remove();
	if($(".bubbl2ePartA").length==0){
		bdBubbleChange(bdBubbleId);
	}
};
function cleanHalo(){
	d3.selectAll(".haloPartA,.haloPartB").attr("opacity",0);
}
function showHalo(){
	d3.selectAll(".haloPartA,.haloPartB").attr("opacity",1);
}