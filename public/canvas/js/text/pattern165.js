(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib._0_00000 = function() {
	this.initialize(img._0_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);


(lib._1_00000 = function() {
	this.initialize(img._1_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1920,1080);// helper functions:

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


(lib.field = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.field, null, null);


(lib.base_color_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._0_00000();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.base_color_1_0, new cjs.Rectangle(0,0,1920,1080), null);


(lib.base_color_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib._1_00000();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.base_color_1, new cjs.Rectangle(0,0,1920,1080), null);


(lib.pattern165_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.field = new lib.field();
	this.field.name = "field";
	this.field.parent = this;
	this.field.setTransform(960,970);

	this.timeline.addTween(cjs.Tween.get(this.field).wait(1));

	// レイヤー_2
	this.base_color_1 = new lib.base_color_1();
	this.base_color_1.name = "base_color_1";
	this.base_color_1.parent = this;
	this.base_color_1.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.base_color_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.pattern165_2, new cjs.Rectangle(0,0,1920.1,1080), null);


(lib.pattern165_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_3
	this.field = new lib.field();
	this.field.name = "field";
	this.field.parent = this;
	this.field.setTransform(960,540);

	this.timeline.addTween(cjs.Tween.get(this.field).wait(1));

	// レイヤー_2
	this.base_color_1 = new lib.base_color_1_0();
	this.base_color_1.name = "base_color_1";
	this.base_color_1.parent = this;
	this.base_color_1.setTransform(960,540,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get(this.base_color_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.pattern165_1, new cjs.Rectangle(0,0,1920.1,1080), null);


// stage content:
(lib.pattern165 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー_1
	this.instance = new lib.pattern165_2();
	this.instance.parent = this;
	this.instance.setTransform(516,108.1,1,1,0,0,0,960,540);

	this.instance_1 = new lib.pattern165_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(654,53.1,1,1,0,0,0,960,540);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-169,-286.9,2058,1135);
// library properties:
lib.properties = {
	id: '1C1BF2AE0D77C3418473297DADF6C66E',
	width: 550,
	height: 400,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_0_00000.png?1551125318661", id:"_0_00000"},
		{src:"images/_1_00000.png?1551125318661", id:"_1_00000"}
	],
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
an.compositions['1C1BF2AE0D77C3418473297DADF6C66E'] = {
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