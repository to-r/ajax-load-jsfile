if (!VB) VB = {};

var VB = (function(VB) {
  VB.FPS = 30;
  VB.StageWidth = 550;
  VB.StageHeight = 400;
  VB.inputImages = [];
  VB.sequence = [];

  //
  //
  //
  (VB.Stage = function(canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();
  /*
  p.setAutoPlay = function(autoPlay) {
    this.tickEnabled = autoPlay;
  }
  p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
  p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
  p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(VB.FPS * ms / 1000); }
  p.getDuration = function() { return this.getChildAt(0).totalFrames / VB.FPS * 1000; }
  p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / VB.FPS * 1000; }
  */

  var canvas, stage, root;

  var Player = (function() {
    function Player(data) {
      this.data = data;
      this.imageData = [];

      canvas = document.getElementById('canvas');
    }

    Player.prototype.load = function() {
      var _self = this;
      var _counter = 0;
      var images = this.data.task_set[0].inputs;
      console.log(images);
      for (var i = 0; i < images.length; i++) {
        var d = images[i];
        var img = new Image();
        img.label = d.label;
        img.onload = function() {
          _counter++;
          if (_counter == images.length) {
            var format = _self.data.task_set[1].format;
            var id = VB.Compositions.Format[format].id;
            var type = VB.Compositions.Format[format].type;
            if (type == 'fla') {
              var comp = AdobeAn.getComposition(id);
              var lib = comp.getLibrary();
              var loader = new createjs.LoadQueue(false);
              loader.addEventListener('fileload', function(evt) {
                handleFileLoad(evt, comp);
              });
              loader.addEventListener('complete', function(evt) {
                handleComplete(evt, comp);
                console.log('init');
                _self.init();
              });
              var lib = comp.getLibrary();
              for (var j = 0; j < lib.properties.manifest.length; j++) {
                lib.properties.manifest[j].src =
                  'canvas/js/text/' + lib.properties.manifest[j].src;
              }
              console.log('lib.properties.manifest:', lib.properties.manifest);
              loader.loadManifest(lib.properties.manifest);
            } else {
              _self.init();
            }
          }
        };
        img.src = '/canvas/' + d.path;
        VB.inputImages[d.label] = img;
      }

      function handleFileLoad(evt, comp) {
        var images = comp.getImages();
        if (evt && evt.item.type == 'image') {
          images[evt.item.id] = evt.result;
        }
      }

      function handleComplete(evt, comp) {
        //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
        var lib = comp.getLibrary();
        var ss = comp.getSpriteSheet();
        var queue = evt.target;
        var ssMetadata = lib.ssMetadata;
        for (i = 0; i < ssMetadata.length; i++) {
          ss[ssMetadata[i].name] = new createjs.SpriteSheet({
            images: [queue.getResult(ssMetadata[i].name)],
            frames: ssMetadata[i].frames
          });
        }
      }
    };

    Player.prototype.init = function() {
      createjs.Ticker.setFPS(VB.FPS);

      root = new createjs.MovieClip();

      stage = new VB.Stage(canvas);
      stage.addChild(root);
      //stage.setAutoPlay(true);

      var format = this.data.task_set[1].format;
      var cuts = this.data.task_set[1].json.input.cuts;

      var _totalFrames = 0;
      var _currentFrame = 0;

      for (var i = 0; i < cuts.length; i++) {
        _totalFrames += cuts[i].frame;
      }
      for (var i = 0; i < cuts.length; i++) {
        var seq = new VB.Sequence(format, cuts[i]);

        var tween;
        seq.clip.visible = false;
        //seq.clip.x = 300 - 100 * i;
        seq.clip.name = 'sequence' + i;
        var start = _currentFrame - cuts[i].fade;
        if (start < 0) start = 0;
        tween = createjs.Tween.get(seq.clip)
          .wait(start)
          .to({ visible: true }, 0)
          .call(
            (function(s) {
              return function() {
                s.start();
              };
            })(seq)
          )
          .wait(cuts[i].frame)
          .call(
            (function(s) {
              return function() {
                s.end();
              };
            })(seq)
          )
          //.wait(_totalFrames - _currentFrame - cuts[i].frame)
          .call(function() {
            //console.log('complete');
          });

        root.timeline.addTween(tween);
        //root.addChild(seq.clip);

        _currentFrame += cuts[i].frame;

        VB.sequence.push(seq);
      }

      for (var i = 0; i < VB.sequence.length; i++) {
        root.children.push(VB.sequence[i].clip);
      }

      console.log(root);

      createjs.Ticker.addEventListener('tick', stage);
    };

    Player.prototype.play = function() {
      stage.tickEnabled = true;
      //stage.seek(0);
      //      stage.play();
      root.gotoAndPlay(root.currentFrame);
    };

    Player.prototype.pause = function() {
      stage.tickEnabled = false;
      root.gotoAndStop(root.currentFrame);
      //stage.seek(0);
      //for (var i = 0; i < VB.sequence.length; i++) {
      //  VB.sequence[i].end();
      //}
    };

    Player.prototype.stop = function() {
      stage.tickEnabled = false;
      root.gotoAndStop(0);
      /*
      stage.stop();
      stage.seek(0);
      for (var i = 0; i < VB.sequence.length; i++) {
        VB.sequence[i].end();
      }*/
    };

    Player.prototype.toDataURL = function() {
      return canvas.toDataURL();
    };

    return Player;
  })();

  VB.Player = Player;

  return VB;
})(VB);
