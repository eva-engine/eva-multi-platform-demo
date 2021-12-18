window.EVA = window.EVA || {};
window.EVA.plugin = window.EVA.plugin || {};

var _EVA_IIFE_stats = function (exports, eva_js) {
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

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };

  var StatsComponent = function (_super) {
    __extends(StatsComponent, _super);

    function StatsComponent() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    StatsComponent.prototype.update = function () {
      this.stats && this.stats.begin();
    };

    StatsComponent.componentName = 'Stats';
    return StatsComponent;
  }(eva_js.Component);

  var Stats$2 = StatsComponent;

  var Stats = function Stats(style) {
    style = _assign({
      width: 20,
      height: 12,
      x: 0,
      y: 0
    }, style);
    var width = style.width,
        height = style.height,
        x = style.x,
        y = style.y;
    var mode = 0;
    var container = document.createElement('div');
    container.style.cssText = "position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000;width: " + width + "vw;height: " + height + "vw;left: " + x + "vw;top: " + y + "vw;";
    container.addEventListener('click', function (event) {
      event.preventDefault();
      showPanel(++mode % container.children.length);
    }, false);

    function addPanel(panel) {
      container.appendChild(panel.dom);
      return panel;
    }

    function showPanel(id) {
      for (var i = 0; i < container.children.length; i++) {
        container.children[i].style.display = i === id ? 'block' : 'none';
      }

      mode = id;
    }

    var beginTime = (performance || Date).now(),
        prevTime = beginTime,
        frames = 0;
    var fpsPanel = addPanel(Stats.Panel('FPS', '#0ff', '#002'));
    var msPanel = addPanel(Stats.Panel('MS', '#0f0', '#020'));
    var memPanel;

    if (self.performance && self.performance.memory) {
      memPanel = addPanel(Stats.Panel('MB', '#f08', '#201'));
    }

    showPanel(0);
    return {
      REVISION: 16,
      dom: container,
      addPanel: addPanel,
      showPanel: showPanel,
      begin: function begin(time) {
        beginTime = time || (performance || Date).now();
      },
      end: function end() {
        frames++;
        var time = (performance || Date).now();
        msPanel.update(time - beginTime, 200);

        if (time >= prevTime + 1000) {
          fpsPanel.update(frames * 1000 / (time - prevTime), 100);
          prevTime = time;
          frames = 0;

          if (memPanel) {
            var memory = performance.memory;
            memPanel.update(memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576);
          }
        }

        return time;
      },
      update: function update() {
        beginTime = this.end();
      },
      domElement: container,
      setMode: showPanel
    };
  };

  Stats.Panel = function (name, fg, bg) {
    var min = Infinity,
        max = 0;
    var round = Math.round;
    var PR = round(window.devicePixelRatio || 1);
    var WIDTH = 80 * PR,
        HEIGHT = 48 * PR,
        TEXT_X = 3 * PR,
        TEXT_Y = 2 * PR,
        GRAPH_X = 3 * PR,
        GRAPH_Y = 15 * PR,
        GRAPH_WIDTH = 74 * PR,
        GRAPH_HEIGHT = 30 * PR;
    var canvas = document.createElement('canvas');
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    canvas.style.cssText = 'width:100%;height:100%';
    var context = canvas.getContext('2d');
    context.font = 'bold ' + 9 * PR + 'px Helvetica,Arial,sans-serif';
    context.textBaseline = 'top';
    context.fillStyle = bg;
    context.fillRect(0, 0, WIDTH, HEIGHT);
    context.fillStyle = fg;
    context.fillText(name, TEXT_X, TEXT_Y);
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    context.fillStyle = bg;
    context.globalAlpha = 0.9;
    context.fillRect(GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT);
    return {
      dom: canvas,
      update: function update(value, maxValue) {
        min = Math.min(min, value);
        max = Math.max(max, value);
        context.fillStyle = bg;
        context.globalAlpha = 1;
        context.fillRect(0, 0, WIDTH, GRAPH_Y);
        context.fillStyle = fg;
        context.fillText(round(value) + ' ' + name + ' (' + round(min) + '-' + round(max) + ')', TEXT_X, TEXT_Y);
        context.drawImage(canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT);
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT);
        context.fillStyle = bg;
        context.globalAlpha = 0.9;
        context.fillRect(GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round((1 - value / maxValue) * GRAPH_HEIGHT));
      }
    };
  };

  var Stats$1 = Stats;

  var StatsSystem = function (_super) {
    __extends(StatsSystem, _super);

    function StatsSystem() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.show = true;
      return _this;
    }

    StatsSystem.prototype.init = function (param) {
      if (param === void 0) {
        param = {
          show: true
        };
      }

      this.show = param.show;
      this.style = param.style;
    };

    StatsSystem.prototype.start = function () {
      if (!this.show) return;
      this.component = this.game.scene.addComponent(new Stats$2());
      this.stats = Stats$1(this.style);
      this.component.stats = this.stats;
      this.stats.showPanel(0);
      document.body.appendChild(this.stats.dom);
    };

    StatsSystem.prototype.lateUpdate = function () {
      if (!this.show) return;
      this.stats && this.stats.end();
    };

    StatsSystem.systemName = 'Stats';
    return StatsSystem;
  }(eva_js.System);

  var StatsSystem$1 = StatsSystem;
  var index = {
    Components: [Stats$2],
    Systems: [StatsSystem$1]
  };
  exports.Stats = Stats$2;
  exports.StatsSystem = StatsSystem$1;
  exports['default'] = index;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({}, EVA);

window.EVA.plugin.stats = window.EVA.plugin.stats || _EVA_IIFE_stats;
