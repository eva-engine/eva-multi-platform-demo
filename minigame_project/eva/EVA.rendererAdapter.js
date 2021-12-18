window.EVA = window.EVA || {};

var _EVA_IIFE_rendererAdapter = function (exports, pixi_js) {
  'use strict';

  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var Application = function (_super) {
    __extends(Application, _super);

    function Application(params) {
      var _this = this;

      params.autoStart = false;
      _this = _super.call(this, params) || this;
      return _this;
    }

    return Application;
  }(pixi_js.Application);

  var Application$1 = Application;

  var Container = function (_super) {
    __extends(Container, _super);

    function Container() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return Container;
  }(pixi_js.Container);

  var Container$1 = Container;

  var Graphics = function (_super) {
    __extends(Graphics, _super);

    function Graphics() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    return Graphics;
  }(pixi_js.Graphics);

  var Graphics$1 = Graphics;

  var NinePatch = function (_super) {
    __extends(NinePatch, _super);

    function NinePatch(img, leftWidth, topHeight, rightWidth, bottomHeight) {
      var _this = this;

      var texture;

      if (img === 'string') {
        texture = pixi_js.Texture.fromFrame(img);
      } else {
        texture = pixi_js.Texture.from(img);
      }

      _this = _super.call(this, texture, leftWidth, topHeight, rightWidth, bottomHeight) || this;
      return _this;
    }

    return NinePatch;
  }(pixi_js.mesh.NineSlicePlane);

  var NinePatch$1 = NinePatch;

  var Sprite = function () {
    function Sprite(image) {
      this._image = null;
      this._image = image;

      if (image) {
        if (image instanceof HTMLImageElement) {
          this.sprite = pixi_js.Sprite.from(image);
        } else if (image instanceof pixi_js.Texture) {
          this.sprite = new pixi_js.Sprite(image);
        }
      } else {
        this.sprite = new pixi_js.Sprite();
      }
    }

    Object.defineProperty(Sprite.prototype, "image", {
      get: function get() {
        return this._image;
      },
      set: function set(val) {
        if (this._image === val) {
          return;
        }

        if (val instanceof HTMLImageElement) {
          this.sprite.texture && this.sprite.texture.destroy(false);
          this.sprite.texture = pixi_js.Texture.from(val);
        } else if (val instanceof pixi_js.Texture) {
          this.sprite.texture = val;
        }

        this._image = val;
      },
      enumerable: false,
      configurable: true
    });
    return Sprite;
  }();

  var Sprite$1 = Sprite;

  var SpriteAnimation = function () {
    function SpriteAnimation(_a) {
      var frames = _a.frames;
      this.animatedSprite = new pixi_js.extras.AnimatedSprite(frames);
    }

    SpriteAnimation.prototype.play = function () {
      this.animatedSprite.play();
    };

    SpriteAnimation.prototype.stop = function () {
      this.animatedSprite.stop();
    };

    SpriteAnimation.prototype.gotoAndPlay = function (frameNumber) {
      this.animatedSprite.gotoAndPlay(frameNumber);
    };

    SpriteAnimation.prototype.gotoAndStop = function (frameNumber) {
      this.animatedSprite.gotoAndStop(frameNumber);
    };

    Object.defineProperty(SpriteAnimation.prototype, "speed", {
      get: function get() {
        return this.animatedSprite.animationSpeed;
      },
      set: function set(val) {
        this.animatedSprite.animationSpeed = val;
      },
      enumerable: false,
      configurable: true
    });
    return SpriteAnimation;
  }();

  var SpriteAnimation$1 = SpriteAnimation;

  var Text = function (_super) {
    __extends(Text, _super);

    function Text(text, style) {
      return _super.call(this, text, style) || this;
    }

    return Text;
  }(pixi_js.Text);

  var Text$1 = Text;
  var PIXITilingSprite = pixi_js.extras.TilingSprite;

  var TilingSprite = function () {
    function TilingSprite(image) {
      this._image = null;
      this._image = image;

      if (image) {
        if (image instanceof HTMLImageElement) {
          this.tilingSprite = new PIXITilingSprite(pixi_js.Texture.from(image));
        } else if (image instanceof pixi_js.Texture) {
          this.tilingSprite = new PIXITilingSprite(image);
        }
      } else {
        this.tilingSprite = new PIXITilingSprite(pixi_js.Texture.EMPTY);
      }
    }

    Object.defineProperty(TilingSprite.prototype, "image", {
      get: function get() {
        return this._image;
      },
      set: function set(val) {
        if (this._image === val) {
          return;
        }

        if (val instanceof HTMLImageElement) {
          this.tilingSprite.texture = pixi_js.Texture.from(val);
        } else if (val instanceof pixi_js.Texture) {
          this.tilingSprite.texture = val;
        }

        this._image = val;
      },
      enumerable: false,
      configurable: true
    });
    return TilingSprite;
  }();

  var TilingSprite$1 = TilingSprite;
  exports.Application = Application$1;
  exports.Container = Container$1;
  exports.Graphics = Graphics$1;
  exports.NinePatch = NinePatch$1;
  exports.Sprite = Sprite$1;
  exports.SpriteAnimation = SpriteAnimation$1;
  exports.Text = Text$1;
  exports.TilingSprite = TilingSprite$1;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({}, PIXI);

window.EVA.rendererAdapter = window.EVA.rendererAdapter || _EVA_IIFE_rendererAdapter;
