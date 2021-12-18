window.EVA = window.EVA || {};
window.EVA.plugin = window.EVA.plugin || {};
window.EVA.plugin.renderer = window.EVA.plugin.renderer || {};

var _EVA_IIFE_img = function (exports, eva_js, pluginRenderer, rendererAdapter, pixi_js) {
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

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }

    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }

      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }

      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }

      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
        f,
        y,
        t,
        g;
    return g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g;

    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }

    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");

      while (_) {
        try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      }

      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }

  function getIDEPropsPropertyObj(target, propertyKey) {
    if (!target.constructor.IDEProps) {
      target.constructor.IDEProps = {};
    }

    if (!target.constructor.IDEProps[propertyKey]) {
      target.constructor.IDEProps[propertyKey] = {};
    }

    var propertyObj = target.constructor.IDEProps[propertyKey];
    return propertyObj;
  }

  function type(type) {
    return function (target, propertyKey) {
      var prop = getIDEPropsPropertyObj(target, propertyKey);
      prop.key = propertyKey;
      prop.type = type;
    };
  }

  var Img$2 = function (_super) {
    __extends(Img, _super);

    function Img() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.resource = '';
      return _this;
    }

    Img.prototype.init = function (obj) {
      if (obj && obj.resource) {
        this.resource = obj.resource;
      }
    };

    Img.componentName = 'Img';

    __decorate([type('string')], Img.prototype, "resource", void 0);

    return Img;
  }(eva_js.Component);

  var Img$3 = Img$2;
  eva_js.resource.registerInstance(eva_js.RESOURCE_TYPE.IMAGE, function (_a) {
    var _b = _a.data,
        data = _b === void 0 ? {} : _b;
    var image = data.image;

    if (image) {
      var texture = pixi_js.Texture.from(image);
      return texture;
    }

    return;
  });
  eva_js.resource.registerDestroy(eva_js.RESOURCE_TYPE.IMAGE, function (_a) {
    var instance = _a.instance;

    if (instance) {
      instance.destroy(true);
    }
  });

  var Img = function (_super) {
    __extends(Img, _super);

    function Img() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.name = 'Img';
      _this.imgs = {};
      return _this;
    }

    Img.prototype.init = function () {
      this.renderSystem = this.game.getSystem(pluginRenderer.RendererSystem);
      this.renderSystem.rendererManager.register(this);
    };

    Img.prototype.rendererUpdate = function (gameObject) {
      var _a = gameObject.transform.size,
          width = _a.width,
          height = _a.height;

      if (this.imgs[gameObject.id]) {
        this.imgs[gameObject.id].sprite.width = width;
        this.imgs[gameObject.id].sprite.height = height;
      }
    };

    Img.prototype.componentChanged = function (changed) {
      var _a, _b;

      return __awaiter(this, void 0, void 0, function () {
        var component, sprite_1, instance, sprite;
        return __generator(this, function (_c) {
          switch (_c.label) {
            case 0:
              if (!(changed.componentName === 'Img')) return [3, 4];
              component = changed.component;
              if (!(changed.type === eva_js.OBSERVER_TYPE.ADD)) return [3, 1];
              sprite_1 = new rendererAdapter.Sprite(null);
              eva_js.resource.getResource(component.resource).then(function (_a) {
                var instance = _a.instance;

                if (!instance) {
                  console.error("GameObject:" + changed.gameObject.name + "'s Img resource load error");
                }

                sprite_1.image = instance;
              });
              this.imgs[changed.gameObject.id] = sprite_1;
              this.containerManager.getContainer(changed.gameObject.id).addChildAt(sprite_1.sprite, 0);
              return [3, 4];

            case 1:
              if (!(changed.type === eva_js.OBSERVER_TYPE.CHANGE)) return [3, 3];
              return [4, eva_js.resource.getResource(component.resource)];

            case 2:
              instance = _c.sent().instance;

              if (!instance) {
                console.error("GameObject:" + changed.gameObject.name + "'s Img resource load error");
              }

              this.imgs[changed.gameObject.id].image = instance;
              return [3, 4];

            case 3:
              if (changed.type === eva_js.OBSERVER_TYPE.REMOVE) {
                sprite = this.imgs[changed.gameObject.id];
                if (!sprite) return [2];
                (_b = (_a = this.containerManager) === null || _a === void 0 ? void 0 : _a.getContainer(changed.gameObject.id)) === null || _b === void 0 ? void 0 : _b.removeChild(sprite.sprite);
                sprite.sprite.destroy({
                  children: true
                });
                delete this.imgs[changed.gameObject.id];
              }

              _c.label = 4;

            case 4:
              return [2];
          }
        });
      });
    };

    Img.systemName = 'Img';
    Img = __decorate([eva_js.decorators.componentObserver({
      Img: [{
        prop: ['resource'],
        deep: false
      }]
    })], Img);
    return Img;
  }(pluginRenderer.Renderer);

  var Img$1 = Img;
  exports.Img = Img$3;
  exports.ImgSystem = Img$1;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({}, EVA, EVA.plugin.renderer, EVA.rendererAdapter, PIXI);

window.EVA.plugin.renderer.img = window.EVA.plugin.renderer.img || _EVA_IIFE_img;
