if(!VB) VB = {};

var VB = (function (VB) {


  VB.Compositions = {
    Format : {
      'pattern165' : {
        type : 'fla',
        id : '1C1BF2AE0D77C3418473297DADF6C66E',
        name : 'pattern165'
      },
      'pattern182' : {
        type : 'fla',
        id : '258331BA58602B45B5E372B1F2DE565C',
        name : 'pattern182'
      }
    },
    Mask : {
      'mask-pattern1' : {
        id : '52C0BCE0695DB145B3FAC479BD27E53A',
        name : 'maskpattern1'
      }
    },
    Text : {
      'pattern165' : {
        id : '1C1BF2AE0D77C3418473297DADF6C66E',
        name : 'pattern165'
      },
      'bg-text1' : {
        id : '31F4D5F8C306AC468BD4427A1DF94582',
        name : 'bgtext1'
      }
    }
  }


  function createSVG(text, options) {
    var alignment = options.textAlign.split(" ");
    var ha = alignment[0];
    var va = alignment[1];

    var xmlns = "http://www.w3.org/2000/svg";
    
    var svgElem = document.createElementNS (xmlns, "svg");
    svgElem.setAttributeNS (null, "viewBox", "0 0 " + VB.StageWidth + " " + VB.StageHeight);
    svgElem.setAttributeNS (null, "width", VB.StageWidth);
    svgElem.setAttributeNS (null, "height", VB.StageHeight);

    var fontSize = options.fontSize;
    var ta = text.split("<br-m>");
    var t = document.createElementNS (xmlns, "text");
    t.setAttributeNS (null, "x", "50%");
    t.setAttributeNS (null, "y", "50%");
    t.setAttributeNS (null, "text-anchor", "middle");
    t.setAttributeNS (null, "alignment-baseline", "central");
    t.setAttributeNS (null, "font-size", fontSize);
    var prev = -1;

    

    svgText = "<svg xmlns='http://www.w3.org/2000/svg' width='"+VB.StageWidth+"px' height='"+VB.StageHeight+"px'>";
    svgText += "<text x='50%' y='50%' text-anchor='middle' alignment-baseline='central' font-size='"+fontSize+"px'>";
    for(var i = 0; i < ta.length; i++){
      var line = ta[i].replace(/ foreground='#ffffff'/g, "").replace(/<span>/g, "").replace(/<\/span>/g, "");
      for(var j = 0; j < line.length; j++){
        var ts = document.createElementNS (xmlns, "tspan");
        //ts.setAttributeNS (null, "x", "50%" );
        //ts.setAttributeNS (null, "dx", 0 );
        ts.setAttributeNS (null, "fill", "#f00");
        if(prev != i) {
          ts.setAttributeNS (null, "x", "50%");
          ts.setAttributeNS (null, "dy", fontSize * i * 1.5 );
          prev = i;

          svgText += "<tspan x='50%' dy='"+fontSize * i * 1.5+"' fill='red'>"+line.charAt(j)+"</tspan>";
        }else{

          svgText += "<tspan fill='red'>"+line.charAt(j)+"</tspan>";

        }
        

        var n = document.createTextNode(line.charAt(j));
        ts.appendChild(n);
        t.appendChild(ts);
      }
    }
    svgText += "</text>";
    svgText += "</svg>";

    svgElem.appendChild(t);
    //console.log("data:image/svg+xml;charset=utf-8,"+svgElem.outerHTML)
    return svgText;
    
    /*var t = "data:image/svg+xml," +

    "<svg xmlns='http://www.w3.org/2000/svg' width='"+VB.StageWidth+"px' height='"+VB.StageHeight+"px'>" +

      "<foreignObject  width='"+VB.StageWidth+"' height='"+VB.StageHeight+"'>" +

        "<div xmlns='http://www.w3.org/1999/xhtml' style='display:flex; text-align:"+ha+"; font-size:24px;'>" +

        
        
        '<svg xmlns="http://www.w3.org/2000/svg" width="'+VB.StageWidth+'" height="'+VB.StageHeight+'" viewBox="0 0 '+VB.StageWidth+' '+VB.StageHeight+'">' +

        "<foreignObject  width='"+VB.StageWidth+"' height='"+VB.StageHeight+"'>" +

          '<text x="5" y="50%" dy="0.4em" dominant-baseline="alphabetic" letter-spacing="4" font-weight="bold" font-size="40" font-family="Meiryo" fill="#ffffff" stroke-width="9" stroke="#003366" stroke-linejoin="round">SVGで縁取り</text>' + 
          
        "</foreignObject>" +
        '</svg>';
        //'<text x="5" y="50%" dy="0.4em" dominant-baseline="alphabetic" letter-spacing="4" font-weight="bold" font-size="40" font-family="Meiryo UI" fill="#ffffff"  stroke-width="9" stroke="#003366" stroke-linejoin="round" >SVGで縁取り</text>' + 
        //'<text x="5" y="50%" dy="0.4em" dominant-baseline="alphabetic" letter-spacing="4" font-weight="bold" font-size="40" font-family="Meiryo UI" fill="#ffffff"  stroke-width="0">SVGで縁取り</text>' + 
          
/*
          "<div style='align-self:"+va+"'>" +

            text.replace(/<br-m>/g, "").replace(/ foreground='#ffffff'/g, " style='display:block;'")+ 
         
          "</div>" +
         
        "</div>" +

      "</foreignObject>" +

    "</svg>";

    

    /*"data:image/svg+xml," +

    "<svg xmlns='http://www.w3.org/2000/svg' width='"+VB.StageWidth+"' height='"+VB.StageHeight+"'>" +

      "<foreignObject width='100%' height='100%'>" +

      "<div xmlns='http://www.w3.org/1999/xhtml' style='display:flex; text-align:"+ha+";'>" +

        "<div style='align-self:"+va+"; font-size:12px;'>" +

         text  +   
         
        "</div>" +

      "</div>" +

      "</foreignObject>" +

    "</svg>";*/

    return t;
  }


  function rgb2hex ( rgb ) {
    return "#" + rgb.map( function ( value ) {
      return ( "0" + value.toString( 16 ) ).slice( -2 ) ;
    } ).join( "" ) ;
  }

  


  var Sequence = (function () {

    function Sequence(format, data) {
      this.format = format;
      this.data = data;
      this.data.options.transition.from.x += VB.StageWidth/2;
      this.data.options.transition.from.y += VB.StageHeight/2;
      this.data.options.transition.to.x += VB.StageWidth/2;
      this.data.options.transition.to.y += VB.StageHeight/2;
      
      this.init();
    }

    Sequence.prototype.init = function () {
      var img = VB.inputImages[this.data.image];
      var hasImage = (img) ? true : false;
      var hasText = (this.data.text != "") ? true : false;

      //
      // mask
      //
      if (!this.data.options.mask || this.data.options.mask == null) {
        this.wrapper = new createjs.MovieClip(createjs.MovieClip.SYNCHED);
        this.container = new createjs.MovieClip(createjs.MovieClip.SYNCHED);
        this.wrapper.addChild(this.container);
      } else {
        var m = VB.Compositions.Mask[this.data.options.mask];
        var id = m.id;
        var name = m.name;
        var comp=AdobeAn.getComposition(id);
        var lib=comp.getLibrary();
        this.wrapper = new lib[name](createjs.MovieClip.SYNCHED);
        this.container = this.wrapper.container;
        this.container.mode = createjs.MovieClip.SYNCHED;
      }
      this.clip = new createjs.MovieClip(createjs.MovieClip.SYNCHED);
      this.e = new createjs.MovieClip(createjs.MovieClip.SYNCHED);
      this.container.addChild(this.e);



      //
      // image
      //
      if(hasImage) {
        var bmp = new createjs.Bitmap(img);
        this.image = new createjs.MovieClip(createjs.MovieClip.SYNCHED);
        
        // center基準に(ステージサイズ合わせる)
        this.image.regX = VB.StageWidth/2;
        this.image.regY = VB.StageHeight/2;
        this.image.x = VB.StageWidth/2;
        this.image.y = VB.StageHeight/2;

        bmp.alpha = 0;
        var tween = createjs.Tween.get(bmp)
          .to({alpha:1}, this.data.fade)
          .wait(this.data.frame)
        this.image.timeline.addTween(tween);

        this.image.addChild(bmp)
        this.container.addChild(this.image);
      } else {
        console.log('NO Image')
      }


      //
      // text
      //
      if(hasText) {
        var m = VB.Compositions.Format[this.format];

        if(m.type == "fla") {
          var _svg = createSVG(this.data.text, this.data.options.text);
          
          var svg = new Image();
          var blob = new Blob([_svg], {type: 'image/svg+xml'});
          var url = URL.createObjectURL(blob);
          svg.src = url;

          var bmp = new createjs.Bitmap(svg);
          
          this.textImage = new createjs.MovieClip(createjs.MovieClip.SYNCHED);
          this.textImage.regX = VB.StageWidth/2;
          this.textImage.regY = VB.StageHeight/2;
          this.textImage.addChild(bmp);

          this.textImage.scaleX = 
          this.textImage.scaleY = this.data.text_scale[0];

          //*/
          
          var id = m.id;
          var name = m.name + "_" + (this.data.id);
          var comp=AdobeAn.getComposition(id);
          var lib=comp.getLibrary();
          this.text = new lib[name](createjs.MovieClip.SYNCHED);

          for(var p in this.data.color) {
            var col = this.data.color[p];
            if(this.text[p]) {
              var m = this.text[p].mask;
              console.log(this.text[p].instance)
              this.text[p].instance.filters = [
                new createjs.ColorFilter(0,0,0, 1, 255 *col.r, 255 *col.g, 255 *col.b,0)
              ];
              this.text[p].instance.cache(0,0,VB.StageWidth,VB.StageHeight);
            }
          }
          /*
          this.text.field.text = this.data.text.replace(/<br-m>/g, "\n").replace(/ foreground='#ffffff'/g, "").replace(/<span>/g, "").replace(/<\/span>/g, "");
          this.text.field.color = this.data.options.text.color;
          this.text.field.font = "18px sans-serif";
          this.text.field.lineHeight = 18 * 1.5;

          this.text.field.width = VB.StageWidth;
          this.text.field.height = VB.StageHeight;
          var alignment = this.data.options.text.textAlign.split(" ");
          this.text.field.textAlign = alignment[0];
          console.log(this.text.field.lineHeight)


          this.text.field.x = VB.StageWidth * 0.5;
          switch(alignment[1]) {
            case "top" : {
              this.text.y = 0;
            }
            case "center" : {
              this.text.y = VB.StageHeight * 0.5 + this.data.text_position[1] - this.text.field.lineHeight * 0.5;
            }
            case "bottom" : {
              this.text.y = VB.StageHeight * 0.5 + this.data.text_position[1] - this.text.field.lineHeight;
            }
          }

          this.text.field.scaleX = this.data.text_scale[0];
          this.text.field.scaleY = this.data.text_scale[1];
          //this.image.x = VB.StageWidth/2;
          //this.image.y = VB.StageHeight/2;
          //*/

          var duration = this.data.frame + this.data.fade;
          this.text.field.addChild(this.textImage);

          this.text.timeline.duration += duration - this.text.timeline.duration;
          for(var i = 0; i < this.text.timeline._tweens.length; i++) {
            var a = this.text.timeline._tweens[i];
            a.duration += duration - a.duration;
          }
          console.log(this.text.timeline)

          this.text.alpha = 0;
          var tween = createjs.Tween.get(this.text)
            .to({alpha:1}, 0)
            .wait(this.data.frame+ this.data.fade)
          this.container.timeline.addTween(tween);
          this.container.addChild(this.text);
        }
      } else {
        console.log("NO Text")
      }



      if(hasImage){
        this.container.timeline.addTween(this.getTransition());
      }


      //
      // 背景追加
      //
      var shape = new createjs.Shape();
      var color = this.data.color.base_color_1;
      var bgColor = rgb2hex([color.r*255,color.g*255,color.b*255]);
      shape.graphics.beginFill(bgColor);
      shape.graphics.drawRect(0, 0, VB.StageWidth, VB.StageHeight);
      shape.graphics.endFill();

      shape.alpha = 0;
      var tween = createjs.Tween.get(shape)
        .to({alpha:1}, this.data.fade)
        .wait(this.data.frame)
      this.container.timeline.addTween(tween);
      this.container.addChildAt(shape, 0);

      //
      // duration 調整
      //
      var duration = this.data.frame + this.data.fade;
      if (!this.data.options.mask) {
        this.wrapper.timeline.addTween(createjs.Tween.get(this.container).wait(duration));
      } else {
        var d = new createjs.MovieClip();
        this.wrapper.addChild(d);
        this.wrapper.timeline.addTween(createjs.Tween.get(d).wait(duration));
        for(var i = 0; i < this.wrapper.timeline._tweens.length; i++) {
          var a = this.wrapper.timeline._tweens[i];
          a.duration += duration - a.duration;
        }
      }
      this.clip.timeline.addTween(createjs.Tween.get(this.wrapper).wait(duration));
      this.clip.addChild(this.wrapper);
    }


    Sequence.prototype.start = function () {
    }


    Sequence.prototype.end = function () {

    }


    Sequence.prototype.getTransition = function () {
      this.image.x = this.data.options.transition.from.x;
      this.image.y = this.data.options.transition.from.y;
      this.image.scaleX = this.data.options.transition.from.scaleX;
      this.image.scaleY = this.data.options.transition.from.scaleY;
      this.image.rotation = this.data.options.transition.from.rotation;

      var transition = createjs.Tween.get(this.image)
        .to(this.data.options.transition.to, this.data.frame + this.data.fade)
      return transition;
    }

    return Sequence;
  })();


  VB.Sequence = Sequence;

  return VB;
})(VB);