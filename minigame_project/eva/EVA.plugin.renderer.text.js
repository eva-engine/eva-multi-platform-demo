function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

window.EVA = window.EVA || {};
window.EVA.plugin = window.EVA.plugin || {};
window.EVA.plugin.renderer = window.EVA.plugin.renderer || {};

var _EVA_IIFE_text = function (exports, pixi_js, eva_js, pluginRenderer, rendererAdapter) {
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

  var Text$2 = function (_super) {
    __extends(Text, _super);

    function Text() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.text = '';
      _this.style = {};
      return _this;
    }

    Text.prototype.init = function (obj) {
      var style = new pixi_js.TextStyle({
        fontSize: 20
      });
      var newStyle = {};

      for (var key in style) {
        if (key.indexOf('_') === 0) {
          newStyle[key.substring(1)] = style[key];
        }
      }

      this.style = newStyle;

      if (obj) {
        this.text = obj.text;

        _extends(this.style, obj.style);
      }
    };

    Text.componentName = 'Text';

    __decorate([type('string')], Text.prototype, "text", void 0);

    return Text;
  }(eva_js.Component);

  var Text$3 = Text$2;

  var Text = function (_super) {
    __extends(Text, _super);

    function Text() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.name = 'Text';
      _this.texts = {};
      return _this;
    }

    Text.prototype.init = function () {
      this.renderSystem = this.game.getSystem(pluginRenderer.RendererSystem);
      this.renderSystem.rendererManager.register(this);
    };

    Text.prototype.componentChanged = function (changed) {
      return __awaiter(this, void 0, void 0, function () {
        var component, text;
        return __generator(this, function (_a) {
          if (changed.componentName !== 'Text') return [2];

          if (changed.type === eva_js.OBSERVER_TYPE.ADD) {
            component = changed.component;
            text = new rendererAdapter.Text(component.text, component.style);
            this.containerManager.getContainer(changed.gameObject.id).addChildAt(text, 0);
            this.texts[changed.gameObject.id] = {
              text: text,
              component: changed.component
            };
            this.setSize(changed);
          } else if (changed.type === eva_js.OBSERVER_TYPE.REMOVE) {
            this.containerManager.getContainer(changed.gameObject.id).removeChild(this.texts[changed.gameObject.id].text);
            this.texts[changed.gameObject.id].text.destroy({
              children: true
            });
            delete this.texts[changed.gameObject.id];
          } else {
            this.change(changed);
            this.setSize(changed);
          }

          return [2];
        });
      });
    };

    Text.prototype.change = function (changed) {
      var _a = this.texts[changed.gameObject.id],
          text = _a.text,
          component = _a.component;

      if (changed.prop.prop[0] === 'text') {
        text.text = component.text;
      } else if (changed.prop.prop[0] === 'style') {
        _extends(text.style, changed.component.style);
      }
    };

    Text.prototype.setSize = function (changed) {
      var transform = changed.gameObject.transform;
      if (!transform) return;
      transform.size.width = this.texts[changed.gameObject.id].text.width;
      transform.size.height = this.texts[changed.gameObject.id].text.height;
    };

    Text.systemName = 'Text';
    Text = __decorate([eva_js.decorators.componentObserver({
      Text: ['text', {
        prop: ['style'],
        deep: true
      }]
    })], Text);
    return Text;
  }(pluginRenderer.Renderer);

  var Text$1 = Text;
  exports.Text = Text$3;
  exports.TextSystem = Text$1;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({}, PIXI, EVA, EVA.plugin.renderer, EVA.rendererAdapter);

window.EVA.plugin.renderer.text = window.EVA.plugin.renderer.text || _EVA_IIFE_text;
