FMATH.ApplicationConfiguration.setFolderUrlForFonts('fonts');
FMATH.ApplicationConfiguration.setFolderUrlForGlyphs('glyphs');

var allMathMLLive = document.getElementsByTagName("math");
var allMathML = Array.prototype.slice.call(allMathMLLive);

var mathmlList = new Array(allMathML.length);
var canvasList = new Array(allMathML.length);
var canvasIdList = new Array(allMathML.length);
var canvasScaleList = new Array(allMathML.length);
var formulasList = new Array(allMathML.length);

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

function displayMessage(text){
	text = text.replaceAll("&", "&amp;");
	text = text.replaceAll("<", "&lt;");
	text = text.replaceAll(">", "&gt;");
	basicModal.show({
		body: '<div align="left"><pre>'+text+'</pre><div>',
		buttons: {
			action: {
				title: 'Close',
				fn: basicModal.close
			}
		}
	})
}


var onClick = function(e) {
	var elementId = e.target.getAttribute("id");

	var goToFmath = function() { window.open('http://www.fmath.info','_blank'); }

	var getMathML = function() {
		var index = getIndexForElementId(elementId);
		displayMessage(formulasList[index].getMathMLString("ENTITIES", true));
	}
	var getLatex = function() {
		var index = getIndexForElementId(elementId);
		var _mathml  = formulasList[index].getMathMLString("ENTITIES", true);
		var latex = formulasList[index].convertMathMLToLatex(_mathml)
		displayMessage(latex);
	}

	var zoomIn = function() {
		var index = getIndexForElementId(elementId);
		canvasScaleList[index] = canvasScaleList[index] * 1.25;
		formulasList[index].scaleFormula(canvasScaleList[index]);
	}
	var zoomIn100 = function() {
		var index = getIndexForElementId(elementId);
		canvasScaleList[index] = canvasScaleList[index] * 2;
		formulasList[index].scaleFormula(canvasScaleList[index]);
	}
	var zoomOut = function() {
		var index = getIndexForElementId(elementId);
		canvasScaleList[index] = canvasScaleList[index] / 1.25;
		formulasList[index].scaleFormula(canvasScaleList[index]);
	}
	var zoomOut100 = function() {
		var index = getIndexForElementId(elementId);
		canvasScaleList[index] = canvasScaleList[index] / 2;
		formulasList[index].scaleFormula(canvasScaleList[index]);
	}
	var zoom100 = function() {
		var index = getIndexForElementId(elementId);
		canvasScaleList[index] = 1;
		formulasList[index].scaleFormula(canvasScaleList[index]);
	}


	var items = [
		{ title: 'Get MathML', icon: 'ion-compose', fn: getMathML },
		{ title: 'Get Latex', icon: 'ion-compose', fn: getLatex },
		{ },
		{ title: 'Zoom In 2x', icon: 'ion-plus-round', fn: zoomIn100 },
		{ title: 'Zoom In 25%', icon: 'ion-plus-round', fn: zoomIn },
		{ title: 'Zoom 100%', icon: 'ion-help-buoy', fn: zoom100 },
		{ title: 'Zoom Out 25%', icon: 'ion-android-remove', fn: zoomOut },
		{ title: 'Zoom Out 2x', icon: 'ion-android-remove', fn: zoomOut100 },
		{ },
		{ title: 'Help', icon: 'ion-clipboard', fn: goToFmath }
	]

	var onClose = function(e) {
		basicContext.close()
	}
	basicContext.show(items, e, onClose)
}

function getIndexForElementId(id){
	for(var i=0; i<canvasIdList.length; i++){
		if(canvasIdList[i] == id){
			return i;
		}
	}
	return 0;
}

var mouseOver = function(e) {
	e.target.classList.remove("button-look-N");
	e.target.classList.add("button-look-P");
}
var mouseOut = function(e) {
	e.target.classList.add("button-look-N");
	e.target.classList.remove("button-look-P");
}

var c = document.createElement('canvas');
if(c.getContext == null){
	console.log("XHTML page !!! This page doesn't accept to create canvas element");
}else{
	for(var i=0; i<allMathML.length; i++){
		var e = allMathML[i];
		var styleElem = window.getComputedStyle(e, null);
		var fontSize = parseInt(getIntegerFromPx(styleElem.getPropertyValue("font-size")));
		var fontBold = styleElem.getPropertyValue("font-weight");
		var fontItalic = styleElem.getPropertyValue("font-style");
		var fontColor = styleElem.getPropertyValue("color");
		fontColor = rgb2hex(fontColor);

		mathmlList[i] = e.parentNode.innerHTML;

		var canvas = document.createElement('canvas');
		canvas.id     = "FMATH_Formula" + i;
		canvas.width  = 1;
		canvas.height = 1;
		canvas.classList.add("button-look-N");
		canvas.addEventListener('click', onClick);
		canvas.addEventListener('mouseover', mouseOver);
		canvas.addEventListener('mouseout', mouseOut);

		canvasList[i] = canvas;
		canvasIdList[i] = "FMATH_Formula" + i;
		canvasScaleList[i] = 1;

		e.parentNode.insertBefore(canvas, e);
		e.parentNode.removeChild(e);

		formulasList[i] = new FMATH.MathMLFormula();
		formulasList[i].setFontSize(fontSize*1.4);
		formulasList[i].setFontBold(fontBold=='bold');
		formulasList[i].setFontItalic(fontItalic=='italic');
		formulasList[i].setColor(fontColor);
		formulasList[i].drawImage(canvas, mathmlList[i]);


	}
}

function getIntegerFromPx(val){
	if(val.indexOf(".")>-1){
		return val.substring(0, val.indexOf("."));
	}
	return val.substring(0, val.length-2);
}
function rgb2hex(rgb_color) {
	if (rgb_color.substr(0, 1) === '#') {
		return rgb_color;
	}
	var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(rgb_color);
	var red = parseInt(digits[2]);
	var green = parseInt(digits[3]);
	var blue = parseInt(digits[4]);

	var hex = (red << 16) | (green << 8) | blue;
	return '#' + hex.toString(16);
}

