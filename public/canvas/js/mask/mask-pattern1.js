(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.rect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AnzH0IAAvnIPnAAIAAPng");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.rect, new cjs.Rectangle(-50,-50,100,100), null);


(lib.empty = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.empty, null, null);


// stage content:
(lib.maskpattern1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AlfOpIB+h+IB+B+Ih+B+g");
	var mask_graphics_10 = new cjs.Graphics().p("EBIDApNIB+h+IB+B+Ih+B+g");
	var mask_graphics_11 = new cjs.Graphics().p("EAmPAd8IYh4hIYhYhI4hYgg");
	var mask_graphics_12 = new cjs.Graphics().p("AF7TKMAuEguDMAuDAuDMguDAuEg");
	var mask_graphics_13 = new cjs.Graphics().p("A44I5MBClhCmMBCnBCmMhCnBCmg");
	var mask_graphics_14 = new cjs.Graphics().p("Eg2NAAAMBWJhWJMBWKBWJMhWKBWKg");
	var mask_graphics_15 = new cjs.Graphics().p("EhSBAAAMBoshosMBotBosMhotBotg");
	var mask_graphics_16 = new cjs.Graphics().p("EhsVAAAMB6Oh6PMB6QB6PMh6QB6Qg");
	var mask_graphics_17 = new cjs.Graphics().p("EiFKAAAMCKyiKyMCKzCKyMiKzCKzg");
	var mask_graphics_18 = new cjs.Graphics().p("EiaWAAAMCaWiaWMCaXCaWMiaXCaXg");
	var mask_graphics_19 = new cjs.Graphics().p("Eio5AAAMCo5io5MCo6Co5Mio6Co6g");
	var mask_graphics_20 = new cjs.Graphics().p("Ei2cAAAMC2ci2cMC2dC2cMi2dC2dg");
	var mask_graphics_21 = new cjs.Graphics().p("EjDAAAAMDDAjDAMDDBDDAMjDBDDBg");
	var mask_graphics_22 = new cjs.Graphics().p("EjOkAAAMDOkjOkMDOlDOkMjOlDOlg");
	var mask_graphics_23 = new cjs.Graphics().p("EjZHAAAMDZHjZHMDZIDZHMjZIDZIg");
	var mask_graphics_24 = new cjs.Graphics().p("EjirAAAMDirjirMDisDirMjisDisg");
	var mask_graphics_25 = new cjs.Graphics().p("EjrPAAAMDrPjrPMDrQDrPMjrQDrQg");
	var mask_graphics_26 = new cjs.Graphics().p("EjyzAAAMDyzjyzMDy0DyzMjy0Dy0g");
	var mask_graphics_27 = new cjs.Graphics().p("Ej5XAAAMD5Xj5XMD5YD5XMj5YD5Yg");
	var mask_graphics_28 = new cjs.Graphics().p("Ej+7AAAMD+7j+7MD+8D+7Mj+8D+8g");
	var mask_graphics_29 = new cjs.Graphics().p("EkDgAAAMEDgkDgMEDhEDgMkDhEDhg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-35.2,y:106.3}).wait(10).to({graphics:mask_graphics_10,x:486.3,y:276.3}).wait(1).to({graphics:mask_graphics_11,x:558.5,y:348.4}).wait(1).to({graphics:mask_graphics_12,x:627.4,y:417.4}).wait(1).to({graphics:mask_graphics_13,x:693.2,y:483.1}).wait(1).to({graphics:mask_graphics_14,x:755.8,y:540}).wait(1).to({graphics:mask_graphics_15,x:815.2,y:540}).wait(1).to({graphics:mask_graphics_16,x:871.3,y:540}).wait(1).to({graphics:mask_graphics_17,x:924.3,y:540}).wait(1).to({graphics:mask_graphics_18,x:960.4,y:540}).wait(1).to({graphics:mask_graphics_19,x:960.4,y:540}).wait(1).to({graphics:mask_graphics_20,x:960.4,y:540}).wait(1).to({graphics:mask_graphics_21,x:960.5,y:540}).wait(1).to({graphics:mask_graphics_22,x:960.5,y:540}).wait(1).to({graphics:mask_graphics_23,x:960.5,y:540}).wait(1).to({graphics:mask_graphics_24,x:960.5,y:540}).wait(1).to({graphics:mask_graphics_25,x:960.6,y:540}).wait(1).to({graphics:mask_graphics_26,x:960.6,y:540}).wait(1).to({graphics:mask_graphics_27,x:960.6,y:540}).wait(1).to({graphics:mask_graphics_28,x:960.6,y:540}).wait(1).to({graphics:mask_graphics_29,x:959,y:540}).wait(1));

	// レイヤー_1
	this.container = new lib.empty();
	this.container.name = "container";
	this.container.parent = this;

	var maskedShapeInstanceList = [this.container];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.container).wait(30));

	// レイヤー_2
	this.instance = new lib.rect();
	this.instance.parent = this;
	this.instance.setTransform(960,540,0.178,0.178,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:23.49,scaleY:23.49,x:959},19,cjs.Ease.get(0.7)).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1907.4,1067.4,25.2,25.2);
// library properties:
lib.properties = {
	id: '52C0BCE0695DB145B3FAC479BD27E53A',
	width: 1920,
	height: 1080,
	fps: 30,
	color: "#000000",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['52C0BCE0695DB145B3FAC479BD27E53A'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;