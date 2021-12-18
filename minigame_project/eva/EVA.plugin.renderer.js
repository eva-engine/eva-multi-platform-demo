function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

window.EVA = window.EVA || {};
window.EVA.plugin = window.EVA.plugin || {};

var _EVA_IIFE_renderer = function (exports, eva_js, rendererAdapter, pixi_js) {
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

  function __decorate(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  }

  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator,
        m = s && o[s],
        i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
      next: function next() {
        if (o && i >= o.length) o = void 0;
        return {
          value: o && o[i++],
          done: !o
        };
      }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o),
        r,
        ar = [],
        e;

    try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
        ar.push(r.value);
      }
    } catch (error) {
      e = {
        error: error
      };
    } finally {
      try {
        if (r && !r.done && (m = i["return"])) m.call(i);
      } finally {
        if (e) throw e.error;
      }
    }

    return ar;
  }

  function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++) {
      ar = ar.concat(__read(arguments[i]));
    }

    return ar;
  }

  function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
  }

  function eq(value, other) {
    return value === other || value !== value && other !== other;
  }

  function assocIndexOf(array, key) {
    var length = array.length;

    while (length--) {
      if (eq(array[length][0], key)) {
        return length;
      }
    }

    return -1;
  }

  var arrayProto = Array.prototype;
  var splice = arrayProto.splice;

  function listCacheDelete(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      return false;
    }

    var lastIndex = data.length - 1;

    if (index == lastIndex) {
      data.pop();
    } else {
      splice.call(data, index, 1);
    }

    --this.size;
    return true;
  }

  function listCacheGet(key) {
    var data = this.__data__,
        index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
  }

  function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
  }

  function listCacheSet(key, value) {
    var data = this.__data__,
        index = assocIndexOf(data, key);

    if (index < 0) {
      ++this.size;
      data.push([key, value]);
    } else {
      data[index][1] = value;
    }

    return this;
  }

  function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  ListCache.prototype.clear = listCacheClear;
  ListCache.prototype['delete'] = listCacheDelete;
  ListCache.prototype.get = listCacheGet;
  ListCache.prototype.has = listCacheHas;
  ListCache.prototype.set = listCacheSet;

  function stackClear() {
    this.__data__ = new ListCache();
    this.size = 0;
  }

  function stackDelete(key) {
    var data = this.__data__,
        result = data['delete'](key);
    this.size = data.size;
    return result;
  }

  function stackGet(key) {
    return this.__data__.get(key);
  }

  function stackHas(key) {
    return this.__data__.has(key);
  }

  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;
  var freeGlobal$1 = freeGlobal;
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;
  var root = freeGlobal$1 || freeSelf || Function('return this')();
  var root$1 = root;
  var Symbol$1 = root$1.Symbol;
  var Symbol$2 = Symbol$1;
  var objectProto$b = Object.prototype;
  var hasOwnProperty$8 = objectProto$b.hasOwnProperty;
  var nativeObjectToString$1 = objectProto$b.toString;
  var symToStringTag$1 = Symbol$2 ? Symbol$2.toStringTag : undefined;

  function getRawTag(value) {
    var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
        tag = value[symToStringTag$1];

    try {
      value[symToStringTag$1] = undefined;
      var unmasked = true;
    } catch (e) {}

    var result = nativeObjectToString$1.call(value);

    if (unmasked) {
      if (isOwn) {
        value[symToStringTag$1] = tag;
      } else {
        delete value[symToStringTag$1];
      }
    }

    return result;
  }

  var objectProto$a = Object.prototype;
  var nativeObjectToString = objectProto$a.toString;

  function objectToString(value) {
    return nativeObjectToString.call(value);
  }

  var nullTag = '[object Null]',
      undefinedTag = '[object Undefined]';
  var symToStringTag = Symbol$2 ? Symbol$2.toStringTag : undefined;

  function baseGetTag(value) {
    if (value == null) {
      return value === undefined ? undefinedTag : nullTag;
    }

    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
  }

  function isObject(value) {
    var type = typeof value;
    return value != null && (type == 'object' || type == 'function');
  }

  var asyncTag = '[object AsyncFunction]',
      funcTag$1 = '[object Function]',
      genTag = '[object GeneratorFunction]',
      proxyTag = '[object Proxy]';

  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }

    var tag = baseGetTag(value);
    return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
  }

  var coreJsData = root$1['__core-js_shared__'];
  var coreJsData$1 = coreJsData;

  var maskSrcKey = function () {
    var uid = /[^.]+$/.exec(coreJsData$1 && coreJsData$1.keys && coreJsData$1.keys.IE_PROTO || '');
    return uid ? 'Symbol(src)_1.' + uid : '';
  }();

  function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
  }

  var funcProto$1 = Function.prototype;
  var funcToString$1 = funcProto$1.toString;

  function toSource(func) {
    if (func != null) {
      try {
        return funcToString$1.call(func);
      } catch (e) {}

      try {
        return func + '';
      } catch (e) {}
    }

    return '';
  }

  var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var funcProto = Function.prototype,
      objectProto$9 = Object.prototype;
  var funcToString = funcProto.toString;
  var hasOwnProperty$7 = objectProto$9.hasOwnProperty;
  var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

  function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) {
      return false;
    }

    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
  }

  function getValue(object, key) {
    return object == null ? undefined : object[key];
  }

  function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
  }

  var Map = getNative(root$1, 'Map');
  var Map$1 = Map;
  var nativeCreate = getNative(Object, 'create');
  var nativeCreate$1 = nativeCreate;

  function hashClear() {
    this.__data__ = nativeCreate$1 ? nativeCreate$1(null) : {};
    this.size = 0;
  }

  function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
  }

  var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';
  var objectProto$8 = Object.prototype;
  var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

  function hashGet(key) {
    var data = this.__data__;

    if (nativeCreate$1) {
      var result = data[key];
      return result === HASH_UNDEFINED$2 ? undefined : result;
    }

    return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
  }

  var objectProto$7 = Object.prototype;
  var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

  function hashHas(key) {
    var data = this.__data__;
    return nativeCreate$1 ? data[key] !== undefined : hasOwnProperty$5.call(data, key);
  }

  var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

  function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate$1 && value === undefined ? HASH_UNDEFINED$1 : value;
    return this;
  }

  function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  Hash.prototype.clear = hashClear;
  Hash.prototype['delete'] = hashDelete;
  Hash.prototype.get = hashGet;
  Hash.prototype.has = hashHas;
  Hash.prototype.set = hashSet;

  function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
      'hash': new Hash(),
      'map': new (Map$1 || ListCache)(),
      'string': new Hash()
    };
  }

  function isKeyable(value) {
    var type = typeof value;
    return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
  }

  function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
  }

  function mapCacheDelete(key) {
    var result = getMapData(this, key)['delete'](key);
    this.size -= result ? 1 : 0;
    return result;
  }

  function mapCacheGet(key) {
    return getMapData(this, key).get(key);
  }

  function mapCacheHas(key) {
    return getMapData(this, key).has(key);
  }

  function mapCacheSet(key, value) {
    var data = getMapData(this, key),
        size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
  }

  function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;
    this.clear();

    while (++index < length) {
      var entry = entries[index];
      this.set(entry[0], entry[1]);
    }
  }

  MapCache.prototype.clear = mapCacheClear;
  MapCache.prototype['delete'] = mapCacheDelete;
  MapCache.prototype.get = mapCacheGet;
  MapCache.prototype.has = mapCacheHas;
  MapCache.prototype.set = mapCacheSet;
  var LARGE_ARRAY_SIZE = 200;

  function stackSet(key, value) {
    var data = this.__data__;

    if (data instanceof ListCache) {
      var pairs = data.__data__;

      if (!Map$1 || pairs.length < LARGE_ARRAY_SIZE - 1) {
        pairs.push([key, value]);
        this.size = ++data.size;
        return this;
      }

      data = this.__data__ = new MapCache(pairs);
    }

    data.set(key, value);
    this.size = data.size;
    return this;
  }

  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }

  Stack.prototype.clear = stackClear;
  Stack.prototype['delete'] = stackDelete;
  Stack.prototype.get = stackGet;
  Stack.prototype.has = stackHas;
  Stack.prototype.set = stackSet;
  var HASH_UNDEFINED = '__lodash_hash_undefined__';

  function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);

    return this;
  }

  function setCacheHas(value) {
    return this.__data__.has(value);
  }

  function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;
    this.__data__ = new MapCache();

    while (++index < length) {
      this.add(values[index]);
    }
  }

  SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
  SetCache.prototype.has = setCacheHas;

  function arraySome(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
      if (predicate(array[index], index, array)) {
        return true;
      }
    }

    return false;
  }

  function cacheHas(cache, key) {
    return cache.has(key);
  }

  var COMPARE_PARTIAL_FLAG$3 = 1,
      COMPARE_UNORDERED_FLAG$1 = 2;

  function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
        arrLength = array.length,
        othLength = other.length;

    if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
      return false;
    }

    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);

    if (arrStacked && othStacked) {
      return arrStacked == other && othStacked == array;
    }

    var index = -1,
        result = true,
        seen = bitmask & COMPARE_UNORDERED_FLAG$1 ? new SetCache() : undefined;
    stack.set(array, other);
    stack.set(other, array);

    while (++index < arrLength) {
      var arrValue = array[index],
          othValue = other[index];

      if (customizer) {
        var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
      }

      if (compared !== undefined) {
        if (compared) {
          continue;
        }

        result = false;
        break;
      }

      if (seen) {
        if (!arraySome(other, function (othValue, othIndex) {
          if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            return seen.push(othIndex);
          }
        })) {
          result = false;
          break;
        }
      } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
        result = false;
        break;
      }
    }

    stack['delete'](array);
    stack['delete'](other);
    return result;
  }

  var Uint8Array$1 = root$1.Uint8Array;
  var Uint8Array$2 = Uint8Array$1;

  function mapToArray(map) {
    var index = -1,
        result = Array(map.size);
    map.forEach(function (value, key) {
      result[++index] = [key, value];
    });
    return result;
  }

  function setToArray(set) {
    var index = -1,
        result = Array(set.size);
    set.forEach(function (value) {
      result[++index] = value;
    });
    return result;
  }

  var COMPARE_PARTIAL_FLAG$2 = 1,
      COMPARE_UNORDERED_FLAG = 2;
  var boolTag$1 = '[object Boolean]',
      dateTag$1 = '[object Date]',
      errorTag$1 = '[object Error]',
      mapTag$2 = '[object Map]',
      numberTag$1 = '[object Number]',
      regexpTag$1 = '[object RegExp]',
      setTag$2 = '[object Set]',
      stringTag$1 = '[object String]',
      symbolTag = '[object Symbol]';
  var arrayBufferTag$1 = '[object ArrayBuffer]',
      dataViewTag$2 = '[object DataView]';
  var symbolProto = Symbol$2 ? Symbol$2.prototype : undefined,
      symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

  function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch (tag) {
      case dataViewTag$2:
        if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
          return false;
        }

        object = object.buffer;
        other = other.buffer;

      case arrayBufferTag$1:
        if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array$2(object), new Uint8Array$2(other))) {
          return false;
        }

        return true;

      case boolTag$1:
      case dateTag$1:
      case numberTag$1:
        return eq(+object, +other);

      case errorTag$1:
        return object.name == other.name && object.message == other.message;

      case regexpTag$1:
      case stringTag$1:
        return object == other + '';

      case mapTag$2:
        var convert = mapToArray;

      case setTag$2:
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
        convert || (convert = setToArray);

        if (object.size != other.size && !isPartial) {
          return false;
        }

        var stacked = stack.get(object);

        if (stacked) {
          return stacked == other;
        }

        bitmask |= COMPARE_UNORDERED_FLAG;
        stack.set(object, other);
        var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
        stack['delete'](object);
        return result;

      case symbolTag:
        if (symbolValueOf) {
          return symbolValueOf.call(object) == symbolValueOf.call(other);
        }

    }

    return false;
  }

  function arrayPush(array, values) {
    var index = -1,
        length = values.length,
        offset = array.length;

    while (++index < length) {
      array[offset + index] = values[index];
    }

    return array;
  }

  var isArray = Array.isArray;
  var isArray$1 = isArray;

  function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray$1(object) ? result : arrayPush(result, symbolsFunc(object));
  }

  function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
      var value = array[index];

      if (predicate(value, index, array)) {
        result[resIndex++] = value;
      }
    }

    return result;
  }

  function stubArray() {
    return [];
  }

  var objectProto$6 = Object.prototype;
  var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;
  var nativeGetSymbols = Object.getOwnPropertySymbols;
  var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
    if (object == null) {
      return [];
    }

    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function (symbol) {
      return propertyIsEnumerable$1.call(object, symbol);
    });
  };
  var getSymbols$1 = getSymbols;

  function baseTimes(n, iteratee) {
    var index = -1,
        result = Array(n);

    while (++index < n) {
      result[index] = iteratee(index);
    }

    return result;
  }

  function isObjectLike(value) {
    return value != null && typeof value == 'object';
  }

  var argsTag$2 = '[object Arguments]';

  function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag$2;
  }

  var objectProto$5 = Object.prototype;
  var hasOwnProperty$4 = objectProto$5.hasOwnProperty;
  var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;
  var isArguments = baseIsArguments(function () {
    return arguments;
  }()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty$4.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
  };
  var isArguments$1 = isArguments;

  function stubFalse() {
    return false;
  }

  var freeExports$1 = typeof exports == 'object' && exports && !exports.nodeType && exports;
  var freeModule$1 = freeExports$1 && typeof module == 'object' && module && !module.nodeType && module;
  var moduleExports$1 = freeModule$1 && freeModule$1.exports === freeExports$1;
  var Buffer = moduleExports$1 ? root$1.Buffer : undefined;
  var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
  var isBuffer = nativeIsBuffer || stubFalse;
  var isBuffer$1 = isBuffer;
  var MAX_SAFE_INTEGER$1 = 9007199254740991;
  var reIsUint = /^(?:0|[1-9]\d*)$/;

  function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER$1 : length;
    return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
  }

  var MAX_SAFE_INTEGER = 9007199254740991;

  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }

  var argsTag$1 = '[object Arguments]',
      arrayTag$1 = '[object Array]',
      boolTag = '[object Boolean]',
      dateTag = '[object Date]',
      errorTag = '[object Error]',
      funcTag = '[object Function]',
      mapTag$1 = '[object Map]',
      numberTag = '[object Number]',
      objectTag$2 = '[object Object]',
      regexpTag = '[object RegExp]',
      setTag$1 = '[object Set]',
      stringTag = '[object String]',
      weakMapTag$1 = '[object WeakMap]';
  var arrayBufferTag = '[object ArrayBuffer]',
      dataViewTag$1 = '[object DataView]',
      float32Tag = '[object Float32Array]',
      float64Tag = '[object Float64Array]',
      int8Tag = '[object Int8Array]',
      int16Tag = '[object Int16Array]',
      int32Tag = '[object Int32Array]',
      uint8Tag = '[object Uint8Array]',
      uint8ClampedTag = '[object Uint8ClampedArray]',
      uint16Tag = '[object Uint16Array]',
      uint32Tag = '[object Uint32Array]';
  var typedArrayTags = {};
  typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
  typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag$1] = typedArrayTags[numberTag] = typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] = typedArrayTags[setTag$1] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag$1] = false;

  function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
  }

  function baseUnary(func) {
    return function (value) {
      return func(value);
    };
  }

  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;
  var moduleExports = freeModule && freeModule.exports === freeExports;
  var freeProcess = moduleExports && freeGlobal$1.process;

  var nodeUtil = function () {
    try {
      var types = freeModule && freeModule.require && freeModule.require('util').types;

      if (types) {
        return types;
      }

      return freeProcess && freeProcess.binding && freeProcess.binding('util');
    } catch (e) {}
  }();

  var nodeUtil$1 = nodeUtil;
  var nodeIsTypedArray = nodeUtil$1 && nodeUtil$1.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
  var isTypedArray$1 = isTypedArray;
  var objectProto$4 = Object.prototype;
  var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

  function arrayLikeKeys(value, inherited) {
    var isArr = isArray$1(value),
        isArg = !isArr && isArguments$1(value),
        isBuff = !isArr && !isArg && isBuffer$1(value),
        isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
        skipIndexes = isArr || isArg || isBuff || isType,
        result = skipIndexes ? baseTimes(value.length, String) : [],
        length = result.length;

    for (var key in value) {
      if ((inherited || hasOwnProperty$3.call(value, key)) && !(skipIndexes && (key == 'length' || isBuff && (key == 'offset' || key == 'parent') || isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') || isIndex(key, length)))) {
        result.push(key);
      }
    }

    return result;
  }

  var objectProto$3 = Object.prototype;

  function isPrototype(value) {
    var Ctor = value && value.constructor,
        proto = typeof Ctor == 'function' && Ctor.prototype || objectProto$3;
    return value === proto;
  }

  function overArg(func, transform) {
    return function (arg) {
      return func(transform(arg));
    };
  }

  var nativeKeys = overArg(Object.keys, Object);
  var nativeKeys$1 = nativeKeys;
  var objectProto$2 = Object.prototype;
  var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

  function baseKeys(object) {
    if (!isPrototype(object)) {
      return nativeKeys$1(object);
    }

    var result = [];

    for (var key in Object(object)) {
      if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
        result.push(key);
      }
    }

    return result;
  }

  function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
  }

  function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
  }

  function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols$1);
  }

  var COMPARE_PARTIAL_FLAG$1 = 1;
  var objectProto$1 = Object.prototype;
  var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

  function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
        objProps = getAllKeys(object),
        objLength = objProps.length,
        othProps = getAllKeys(other),
        othLength = othProps.length;

    if (objLength != othLength && !isPartial) {
      return false;
    }

    var index = objLength;

    while (index--) {
      var key = objProps[index];

      if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
        return false;
      }
    }

    var objStacked = stack.get(object);
    var othStacked = stack.get(other);

    if (objStacked && othStacked) {
      return objStacked == other && othStacked == object;
    }

    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;

    while (++index < objLength) {
      key = objProps[index];
      var objValue = object[key],
          othValue = other[key];

      if (customizer) {
        var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
      }

      if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
        result = false;
        break;
      }

      skipCtor || (skipCtor = key == 'constructor');
    }

    if (result && !skipCtor) {
      var objCtor = object.constructor,
          othCtor = other.constructor;

      if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
        result = false;
      }
    }

    stack['delete'](object);
    stack['delete'](other);
    return result;
  }

  var DataView$1 = getNative(root$1, 'DataView');
  var DataView$2 = DataView$1;
  var Promise$1 = getNative(root$1, 'Promise');
  var Promise$2 = Promise$1;
  var Set = getNative(root$1, 'Set');
  var Set$1 = Set;
  var WeakMap = getNative(root$1, 'WeakMap');
  var WeakMap$1 = WeakMap;
  var mapTag = '[object Map]',
      objectTag$1 = '[object Object]',
      promiseTag = '[object Promise]',
      setTag = '[object Set]',
      weakMapTag = '[object WeakMap]';
  var dataViewTag = '[object DataView]';
  var dataViewCtorString = toSource(DataView$2),
      mapCtorString = toSource(Map$1),
      promiseCtorString = toSource(Promise$2),
      setCtorString = toSource(Set$1),
      weakMapCtorString = toSource(WeakMap$1);
  var getTag = baseGetTag;

  if (DataView$2 && getTag(new DataView$2(new ArrayBuffer(1))) != dataViewTag || Map$1 && getTag(new Map$1()) != mapTag || Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$1 && getTag(new Set$1()) != setTag || WeakMap$1 && getTag(new WeakMap$1()) != weakMapTag) {
    getTag = function getTag(value) {
      var result = baseGetTag(value),
          Ctor = result == objectTag$1 ? value.constructor : undefined,
          ctorString = Ctor ? toSource(Ctor) : '';

      if (ctorString) {
        switch (ctorString) {
          case dataViewCtorString:
            return dataViewTag;

          case mapCtorString:
            return mapTag;

          case promiseCtorString:
            return promiseTag;

          case setCtorString:
            return setTag;

          case weakMapCtorString:
            return weakMapTag;
        }
      }

      return result;
    };
  }

  var getTag$1 = getTag;
  var COMPARE_PARTIAL_FLAG = 1;
  var argsTag = '[object Arguments]',
      arrayTag = '[object Array]',
      objectTag = '[object Object]';
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;

  function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray$1(object),
        othIsArr = isArray$1(other),
        objTag = objIsArr ? arrayTag : getTag$1(object),
        othTag = othIsArr ? arrayTag : getTag$1(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag,
        othIsObj = othTag == objectTag,
        isSameTag = objTag == othTag;

    if (isSameTag && isBuffer$1(object)) {
      if (!isBuffer$1(other)) {
        return false;
      }

      objIsArr = true;
      objIsObj = false;
    }

    if (isSameTag && !objIsObj) {
      stack || (stack = new Stack());
      return objIsArr || isTypedArray$1(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }

    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
      var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
          othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

      if (objIsWrapped || othIsWrapped) {
        var objUnwrapped = objIsWrapped ? object.value() : object,
            othUnwrapped = othIsWrapped ? other.value() : other;
        stack || (stack = new Stack());
        return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
      }
    }

    if (!isSameTag) {
      return false;
    }

    stack || (stack = new Stack());
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
  }

  function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) {
      return true;
    }

    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
      return value !== value && other !== other;
    }

    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
  }

  function isEqual(value, other) {
    return baseIsEqual(value, other);
  }

  var RendererManager = function () {
    function RendererManager(_a) {
      var game = _a.game,
          rendererSystem = _a.rendererSystem;
      this.renderers = [];
      this.game = game;
      this.rendererSystem = rendererSystem;
    }

    RendererManager.prototype.register = function () {
      var e_1, _a;

      var renderers = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        renderers[_i] = arguments[_i];
      }

      try {
        for (var renderers_1 = __values(renderers), renderers_1_1 = renderers_1.next(); !renderers_1_1.done; renderers_1_1 = renderers_1.next()) {
          var renderer = renderers_1_1.value;
          renderer.game = this.game;
          renderer.rendererManager = this.rendererSystem.rendererManager;
          renderer.containerManager = this.rendererSystem.containerManager;
          this.renderers.push(renderer);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (renderers_1_1 && !renderers_1_1.done && (_a = renderers_1.return)) _a.call(renderers_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };

    RendererManager.prototype.componentChanged = function (changes) {
      var e_2, _a;

      var _loop_1 = function _loop_1(changed) {
        var e_3, _a;

        try {
          for (var _b = (e_3 = void 0, __values(this_1.renderers)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var renderer = _c.value;
            var props = renderer.observerInfo[changed.componentName];

            if (props) {
              if ([eva_js.OBSERVER_TYPE.ADD, eva_js.OBSERVER_TYPE.REMOVE].indexOf(changed.type) > -1) {
                try {
                  renderer.componentChanged && renderer.componentChanged(changed);
                } catch (e) {
                  console.error("gameObject: " + changed.gameObject.name + ", " + changed.componentName + " is error.", changed, e);
                }

                continue;
              }

              var index = props.findIndex(function (prop) {
                return isEqual(prop, changed.prop);
              });

              if (index > -1) {
                try {
                  renderer.componentChanged && renderer.componentChanged(changed);
                } catch (e) {
                  console.error("gameObject: " + (changed.gameObject && changed.gameObject.name) + ", " + changed.componentName + " is componentChanged error.", changed, e);
                }
              }
            }
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
          } finally {
            if (e_3) throw e_3.error;
          }
        }
      };

      var this_1 = this;

      try {
        for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
          var changed = changes_1_1.value;

          _loop_1(changed);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    };

    RendererManager.prototype.update = function (gameObject) {
      var e_4, _a, e_5, _b;

      try {
        for (var _c = __values(gameObject.components), _d = _c.next(); !_d.done; _d = _c.next()) {
          var component = _d.value;

          try {
            for (var _e = (e_5 = void 0, __values(this.renderers)), _f = _e.next(); !_f.done; _f = _e.next()) {
              var renderer = _f.value;
              var cache = [];
              var props = renderer.observerInfo[component.name];

              if (props && cache.indexOf(gameObject) === -1) {
                cache.push(gameObject);

                try {
                  renderer.rendererUpdate && renderer.rendererUpdate(gameObject);
                } catch (e) {
                  console.info("gameObject: " + gameObject.name + ", " + component.name + " is update error", e);
                }
              }
            }
          } catch (e_5_1) {
            e_5 = {
              error: e_5_1
            };
          } finally {
            try {
              if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            } finally {
              if (e_5) throw e_5.error;
            }
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        } finally {
          if (e_4) throw e_4.error;
        }
      }
    };

    return RendererManager;
  }();

  var RendererManager$1 = RendererManager;

  var ContainerManager = function () {
    function ContainerManager() {
      this.containerMap = {};
    }

    ContainerManager.prototype.addContainer = function (_a) {
      var name = _a.name,
          container = _a.container;
      this.containerMap[name] = container;
    };

    ContainerManager.prototype.getContainer = function (name) {
      return this.containerMap[name];
    };

    ContainerManager.prototype.removeContainer = function (name) {
      var _a;

      (_a = this.containerMap[name]) === null || _a === void 0 ? void 0 : _a.destroy({
        children: true
      });
      delete this.containerMap[name];
    };

    ContainerManager.prototype.updateTransform = function (_a) {
      var name = _a.name,
          transform = _a.transform;
      var container = this.containerMap[name];
      if (!container || !transform) return;
      var anchor = transform.anchor,
          origin = transform.origin,
          position = transform.position,
          rotation = transform.rotation,
          scale = transform.scale,
          size = transform.size,
          skew = transform.skew;
      container.rotation = rotation;
      container.scale = scale;
      container.pivot.x = size.width * origin.x;
      container.pivot.y = size.height * origin.y;
      container.skew = skew;
      var x = position.x;
      var y = position.y;

      if (transform.parent) {
        var parent_1 = transform.parent;
        x = x + parent_1.size.width * anchor.x;
        y = y + parent_1.size.height * anchor.y;
      }

      container.position = {
        x: x,
        y: y
      };
    };

    return ContainerManager;
  }();

  var ContainerManager$1 = ContainerManager;

  function createCommonjsModule(fn) {
    var module = {
      exports: {}
    };
    return fn(module, module.exports), module.exports;
  }

  var eventemitter3 = createCommonjsModule(function (module) {
    var has = Object.prototype.hasOwnProperty,
        prefix = '~';

    function Events() {}

    if (Object.create) {
      Events.prototype = Object.create(null);
      if (!new Events().__proto__) prefix = false;
    }

    function EE(fn, context, once) {
      this.fn = fn;
      this.context = context;
      this.once = once || false;
    }

    function addListener(emitter, event, fn, context, once) {
      if (typeof fn !== 'function') {
        throw new TypeError('The listener must be a function');
      }

      var listener = new EE(fn, context || emitter, once),
          evt = prefix ? prefix + event : event;
      if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);else emitter._events[evt] = [emitter._events[evt], listener];
      return emitter;
    }

    function clearEvent(emitter, evt) {
      if (--emitter._eventsCount === 0) emitter._events = new Events();else delete emitter._events[evt];
    }

    function EventEmitter() {
      this._events = new Events();
      this._eventsCount = 0;
    }

    EventEmitter.prototype.eventNames = function eventNames() {
      var names = [],
          events,
          name;
      if (this._eventsCount === 0) return names;

      for (name in events = this._events) {
        if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
      }

      if (Object.getOwnPropertySymbols) {
        return names.concat(Object.getOwnPropertySymbols(events));
      }

      return names;
    };

    EventEmitter.prototype.listeners = function listeners(event) {
      var evt = prefix ? prefix + event : event,
          handlers = this._events[evt];
      if (!handlers) return [];
      if (handlers.fn) return [handlers.fn];

      for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
        ee[i] = handlers[i].fn;
      }

      return ee;
    };

    EventEmitter.prototype.listenerCount = function listenerCount(event) {
      var evt = prefix ? prefix + event : event,
          listeners = this._events[evt];
      if (!listeners) return 0;
      if (listeners.fn) return 1;
      return listeners.length;
    };

    EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return false;
      var listeners = this._events[evt],
          len = arguments.length,
          args,
          i;

      if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

        switch (len) {
          case 1:
            return listeners.fn.call(listeners.context), true;

          case 2:
            return listeners.fn.call(listeners.context, a1), true;

          case 3:
            return listeners.fn.call(listeners.context, a1, a2), true;

          case 4:
            return listeners.fn.call(listeners.context, a1, a2, a3), true;

          case 5:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;

          case 6:
            return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }

        for (i = 1, args = new Array(len - 1); i < len; i++) {
          args[i - 1] = arguments[i];
        }

        listeners.fn.apply(listeners.context, args);
      } else {
        var length = listeners.length,
            j;

        for (i = 0; i < length; i++) {
          if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

          switch (len) {
            case 1:
              listeners[i].fn.call(listeners[i].context);
              break;

            case 2:
              listeners[i].fn.call(listeners[i].context, a1);
              break;

            case 3:
              listeners[i].fn.call(listeners[i].context, a1, a2);
              break;

            case 4:
              listeners[i].fn.call(listeners[i].context, a1, a2, a3);
              break;

            default:
              if (!args) for (j = 1, args = new Array(len - 1); j < len; j++) {
                args[j - 1] = arguments[j];
              }
              listeners[i].fn.apply(listeners[i].context, args);
          }
        }
      }

      return true;
    };

    EventEmitter.prototype.on = function on(event, fn, context) {
      return addListener(this, event, fn, context, false);
    };

    EventEmitter.prototype.once = function once(event, fn, context) {
      return addListener(this, event, fn, context, true);
    };

    EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
      var evt = prefix ? prefix + event : event;
      if (!this._events[evt]) return this;

      if (!fn) {
        clearEvent(this, evt);
        return this;
      }

      var listeners = this._events[evt];

      if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
          clearEvent(this, evt);
        }
      } else {
        for (var i = 0, events = [], length = listeners.length; i < length; i++) {
          if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
            events.push(listeners[i]);
          }
        }

        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;else clearEvent(this, evt);
      }

      return this;
    };

    EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
      var evt;

      if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
      } else {
        this._events = new Events();
        this._eventsCount = 0;
      }

      return this;
    };

    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.addListener = EventEmitter.prototype.on;
    EventEmitter.prefixed = prefix;
    EventEmitter.EventEmitter = EventEmitter;
    {
      module.exports = EventEmitter;
    }
  });
  var EventEmitter = eventemitter3;

  var Transform = function (_super) {
    __extends(Transform, _super);

    function Transform(_a) {
      var system = _a.system,
          containerManager = _a.containerManager;

      var _this = _super.call(this) || this;

      _this.name = 'Transform';
      _this.waitRemoveIds = [];
      _this.waitChangeScenes = [];
      _this.containerManager = containerManager;

      _this.init(system);

      return _this;
    }

    Transform.prototype.init = function (system) {
      var _this = this;

      this.system = system;
      this.on('changeScene', function (_a) {
        var scene = _a.scene,
            mode = _a.mode,
            application = _a.application;

        _this.waitChangeScenes.push({
          scene: scene,
          mode: mode,
          application: application
        });
      });
    };

    Transform.prototype.update = function () {
      var e_1, _a, e_2, _b;

      try {
        for (var _c = __values(this.waitRemoveIds), _d = _c.next(); !_d.done; _d = _c.next()) {
          var id = _d.value;
          this.containerManager.removeContainer(id);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      this.waitRemoveIds = [];

      try {
        for (var _e = __values(this.waitChangeScenes), _f = _e.next(); !_f.done; _f = _e.next()) {
          var sceneInfo = _f.value;
          var container = this.containerManager.getContainer(sceneInfo.scene.id);

          if (container) {
            sceneInfo.application.stage.removeChildren();
            sceneInfo.application.stage.addChild(container);
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
        } finally {
          if (e_2) throw e_2.error;
        }
      }

      this.waitChangeScenes = [];
    };

    Transform.prototype.componentChanged = function (changed) {
      if (changed.type === eva_js.OBSERVER_TYPE.ADD) {
        this.addContainer(changed);
      } else if (changed.type === eva_js.OBSERVER_TYPE.CHANGE) {
        this.change(changed);
      } else if (changed.type === eva_js.OBSERVER_TYPE.REMOVE) {
        this.waitRemoveIds.push(changed.gameObject.id);
      }
    };

    Transform.prototype.addContainer = function (changed) {
      var container = new rendererAdapter.Container();
      container.name = changed.gameObject.name;
      this.containerManager.addContainer({
        name: changed.gameObject.id,
        container: container
      });
      var transform = changed.component;
      transform.worldTransform = container.transform.worldTransform;
    };

    Transform.prototype.change = function (changed) {
      var transform = changed.component;

      if (transform.parent) {
        var parentContainer = this.containerManager.getContainer(transform.parent.gameObject.id);
        parentContainer.addChild(this.containerManager.getContainer(changed.gameObject.id));
        var render = changed.gameObject.transform.parent && changed.gameObject.transform.parent.gameObject.getComponent('Render');

        if (render) {
          render.sortDirty = true;
        }
      } else {
        var container = this.containerManager.getContainer(changed.gameObject.id);
        delete transform.worldTransform;
        container.parent && container.parent.removeChild(container);
      }
    };

    Transform.prototype.destroy = function () {
      this.removeAllListeners();
      this.waitRemoveIds = null;
      this.waitChangeScenes = null;
      this.system = null;
      this.containerManager = null;
    };

    Transform = __decorate([eva_js.decorators.componentObserver({
      Transform: ['_parent']
    })], Transform);
    return Transform;
  }(EventEmitter);

  var Transform$1 = Transform;
  var result = undefined;

  function getSuportCompressedTextureFormats(gl) {
    if (result) return result;

    if (!gl) {
      console.warn('WebGL not available for compressed textures. Silently failing.');
      return {
        s3tc: false,
        etc: false,
        etc1: false,
        pvrtc: false,
        atc: false,
        astc: false
      };
    }

    result = {
      s3tc: !!gl.getExtension('WEBGL_compressed_texture_s3tc'),
      etc: !!gl.getExtension('WEBGL_compressed_texture_etc'),
      etc1: !!gl.getExtension('WEBGL_compressed_texture_etc1'),
      pvrtc: !!gl.getExtension('WEBGL_compressed_texture_pvrtc') || !!gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc'),
      atc: !!gl.getExtension('WEBGL_compressed_texture_atc'),
      astc: !!gl.getExtension('WEBGL_compressed_texture_astc')
    };

    try {
      console.log('Eva.js Supported Compressed Texture Format List: ' + Object.keys(result).filter(function (type) {
        return result[type];
      }).join(', '));
    } catch (e) {}

    return result;
  }

  var XLS = eva_js.resourceLoader.XhrLoadStrategy;
  var XhrLoadStrategy = XLS;

  var _a, _b;

  var INTERNAL_FORMATS;

  (function (INTERNAL_FORMATS) {
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGB_S3TC_DXT1_EXT"] = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_S3TC_DXT1_EXT"] = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_S3TC_DXT3_EXT"] = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_S3TC_DXT5_EXT"] = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT"] = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT"] = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT"] = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB_S3TC_DXT1_EXT"] = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_R11_EAC"] = 37488] = "COMPRESSED_R11_EAC";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SIGNED_R11_EAC"] = 37489] = "COMPRESSED_SIGNED_R11_EAC";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RG11_EAC"] = 37490] = "COMPRESSED_RG11_EAC";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SIGNED_RG11_EAC"] = 37491] = "COMPRESSED_SIGNED_RG11_EAC";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGB8_ETC2"] = 37492] = "COMPRESSED_RGB8_ETC2";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA8_ETC2_EAC"] = 37496] = "COMPRESSED_RGBA8_ETC2_EAC";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ETC2"] = 37493] = "COMPRESSED_SRGB8_ETC2";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ETC2_EAC"] = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2"] = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGB_PVRTC_4BPPV1_IMG"] = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_PVRTC_4BPPV1_IMG"] = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGB_PVRTC_2BPPV1_IMG"] = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_PVRTC_2BPPV1_IMG"] = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGB_ETC1_WEBGL"] = 36196] = "COMPRESSED_RGB_ETC1_WEBGL";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGB_ATC_WEBGL"] = 35986] = "COMPRESSED_RGB_ATC_WEBGL";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL"] = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"] = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_10x10_KHR"] = 37819] = "COMPRESSED_RGBA_ASTC_10x10_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_10x5_KHR"] = 37816] = "COMPRESSED_RGBA_ASTC_10x5_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_10x6_KHR"] = 37817] = "COMPRESSED_RGBA_ASTC_10x6_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_10x8_KHR"] = 37818] = "COMPRESSED_RGBA_ASTC_10x8_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_12x10_KHR"] = 37820] = "COMPRESSED_RGBA_ASTC_12x10_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_12x12_KHR"] = 37821] = "COMPRESSED_RGBA_ASTC_12x12_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_4x4_KHR"] = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_5x4_KHR"] = 37809] = "COMPRESSED_RGBA_ASTC_5x4_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_5x5_KHR"] = 37810] = "COMPRESSED_RGBA_ASTC_5x5_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_6x5_KHR"] = 37811] = "COMPRESSED_RGBA_ASTC_6x5_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_6x6_KHR"] = 37812] = "COMPRESSED_RGBA_ASTC_6x6_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_8x5_KHR"] = 37813] = "COMPRESSED_RGBA_ASTC_8x5_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_8x6_KHR"] = 37814] = "COMPRESSED_RGBA_ASTC_8x6_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_RGBA_ASTC_8x8_KHR"] = 37815] = "COMPRESSED_RGBA_ASTC_8x8_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR"] = 3781] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR"] = 37847] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR"] = 37849] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR"] = 37850] = "COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR"] = 37852] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR"] = 37853] = "COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR"] = 37840] = "COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR"] = 37841] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR"] = 37842] = "COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR"] = 37843] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR"] = 37844] = "COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR"] = 37845] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR"] = 37846] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR";
    INTERNAL_FORMATS[INTERNAL_FORMATS["COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR"] = 37847] = "COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR";
  })(INTERNAL_FORMATS || (INTERNAL_FORMATS = {}));

  var INTERNAL_FORMAT_TO_BLOCK_SIZE = (_a = {}, _a[INTERNAL_FORMATS.COMPRESSED_RGB_S3TC_DXT1_EXT] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SRGB_S3TC_DXT1_EXT] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_R11_EAC] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SIGNED_R11_EAC] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RG11_EAC] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SIGNED_RG11_EAC] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGB8_ETC2] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA8_ETC2_EAC] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SRGB8_ETC2] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = [8, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = [8, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGB_ETC1_WEBGL] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGB_ATC_WEBGL] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_4x4_KHR] = [4, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_5x5_KHR] = [5, 5], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_6x6_KHR] = [6, 6], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_8x8_KHR] = [8, 8], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_10x10_KHR] = [10, 10], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_12x12_KHR] = [12, 12], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_10x5_KHR] = [10, 5], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_10x6_KHR] = [10, 6], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_10x8_KHR] = [10, 8], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_12x10_KHR] = [12, 10], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_5x4_KHR] = [5, 4], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_6x5_KHR] = [6, 5], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_8x5_KHR] = [8, 5], _a[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_8x6_KHR] = [8, 6], _a);
  var INTERNAL_FORMATS_TO_EXTENSION_NAME = (_b = {}, _b[INTERNAL_FORMATS.COMPRESSED_RGB_S3TC_DXT1_EXT] = 'WEBGL_compressed_texture_s3tc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT1_EXT] = 'WEBGL_compressed_texture_s3tc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT3_EXT] = 'WEBGL_compressed_texture_s3tc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_S3TC_DXT5_EXT] = 'WEBGL_compressed_texture_s3tc', _b[INTERNAL_FORMATS.COMPRESSED_SRGB_S3TC_DXT1_EXT] = 'WEBGL_compressed_texture_s3tc_srgb', _b[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT] = 'WEBGL_compressed_texture_s3tc_srgb', _b[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT] = 'WEBGL_compressed_texture_s3tc_srgb', _b[INTERNAL_FORMATS.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT] = 'WEBGL_compressed_texture_s3tc_srgb', _b[INTERNAL_FORMATS.COMPRESSED_R11_EAC] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_SIGNED_R11_EAC] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_RG11_EAC] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_SIGNED_RG11_EAC] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_RGB8_ETC2] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA8_ETC2_EAC] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_SRGB8_ETC2] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2] = 'WEBGL_compressed_texture_etc', _b[INTERNAL_FORMATS.COMPRESSED_RGB_PVRTC_4BPPV1_IMG] = 'WEBGL_compressed_texture_pvrtc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG] = 'WEBGL_compressed_texture_pvrtc', _b[INTERNAL_FORMATS.COMPRESSED_RGB_PVRTC_2BPPV1_IMG] = 'WEBGL_compressed_texture_pvrtc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG] = 'WEBGL_compressed_texture_pvrtc', _b[INTERNAL_FORMATS.COMPRESSED_RGB_ETC1_WEBGL] = 'WEBGL_compressed_texture_etc1', _b[INTERNAL_FORMATS.COMPRESSED_RGB_ATC_WEBGL] = 'WEBGL_compressed_texture_atc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL] = 'WEBGL_compressed_texture_atc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL] = 'WEBGL_compressed_texture_atc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_4x4_KHR] = 'WEBGL_compressed_texture_astc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_5x5_KHR] = 'WEBGL_compressed_texture_astc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_6x6_KHR] = 'WEBGL_compressed_texture_astc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_8x8_KHR] = 'WEBGL_compressed_texture_astc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_10x10_KHR] = 'WEBGL_compressed_texture_astc', _b[INTERNAL_FORMATS.COMPRESSED_RGBA_ASTC_12x12_KHR] = 'WEBGL_compressed_texture_astc', _b);

  var CompressedTextureResource = function () {
    function CompressedTextureResource() {
      this.levelBuffers = [];
    }

    CompressedTextureResource.prototype.upload = function (gl) {
      var levels = this.levels;
      var name = INTERNAL_FORMATS_TO_EXTENSION_NAME[this.internalFormat];

      if (!gl[name]) {
        gl[name] = true;

        if (name === 'WEBGL_compressed_texture_pvrtc') {
          gl.getExtension(name) || gl.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        } else {
          gl.getExtension(name);
        }
      }

      for (var i = 0; i < this.levels; ++i) {
        var _a = this.levelBuffers[i],
            levelWidth = _a.levelWidth,
            levelHeight = _a.levelHeight,
            levelBuffer = _a.levelBuffer;
        gl.compressedTexImage2D(gl.TEXTURE_2D, i, this.internalFormat, levelWidth, levelHeight, 0, levelBuffer);
      }

      if (levels > 1) {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_NEAREST);
      } else {
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      }
    };

    return CompressedTextureResource;
  }();

  var FILE_HEADER_SIZE = 64;
  var KTX_FIELDS = {
    FILE_IDENTIFIER: 0,
    ENDIANNESS: 12,
    GL_TYPE: 16,
    GL_TYPE_SIZE: 20,
    GL_FORMAT: 24,
    GL_INTERNAL_FORMAT: 28,
    GL_BASE_INTERNAL_FORMAT: 32,
    PIXEL_WIDTH: 36,
    PIXEL_HEIGHT: 40,
    PIXEL_DEPTH: 44,
    NUMBER_OF_ARRAY_ELEMENTS: 48,
    NUMBER_OF_FACES: 52,
    NUMBER_OF_MIPMAP_LEVELS: 56,
    BYTES_OF_KEY_VALUE_DATA: 60
  };
  var FILE_IDENTIFIER = [0xAB, 0x4B, 0x54, 0x58, 0x20, 0x31, 0x31, 0xBB, 0x0D, 0x0A, 0x1A, 0x0A];
  var ENDIANNESS = 0x04030201;

  var KTXTextureResource = function (_super) {
    __extends(KTXTextureResource, _super);

    function KTXTextureResource(source, config) {
      var _a;

      var _this = _super.call(this) || this;

      _this.complete = true;
      _this.src = config.url;
      var dataView = new DataView(source);

      if (!validateKTX(dataView)) {
        throw new Error('Not a valid KTX Texture');
      }

      var littleEndian = dataView.getUint32(KTX_FIELDS.ENDIANNESS, true) === ENDIANNESS;
      _this.internalFormat = dataView.getUint32(KTX_FIELDS.GL_INTERNAL_FORMAT, littleEndian);
      var pixelWidth = _this.formerWidth = dataView.getUint32(KTX_FIELDS.PIXEL_WIDTH, littleEndian);
      var pixelHeight = _this.formerHeight = dataView.getUint32(KTX_FIELDS.PIXEL_HEIGHT, littleEndian) || 1;
      var size = INTERNAL_FORMAT_TO_BLOCK_SIZE[_this.internalFormat];
      _this.width = pixelWidth % size[0] === 0 ? pixelWidth : pixelWidth + size[0] - pixelWidth % size[0];
      _this.height = pixelHeight % size[1] === 0 ? pixelHeight : pixelHeight + size[1] - pixelHeight % size[1];
      var src = eva_js.resource.resourcesMap[config.metadata.name].src[config.metadata.key];

      var _b = (_a = src === null || src === void 0 ? void 0 : src.size) !== null && _a !== void 0 ? _a : {},
          width = _b.width,
          height = _b.height;

      if (width && height) {
        _this.naturalWidth = width;
        _this.naturalHeight = height;
      }

      var pixelDepth = dataView.getUint32(KTX_FIELDS.PIXEL_DEPTH, littleEndian) || 1;
      var numberOfArrayElements = dataView.getUint32(KTX_FIELDS.NUMBER_OF_ARRAY_ELEMENTS, littleEndian) || 1;
      var numberOfFaces = dataView.getUint32(KTX_FIELDS.NUMBER_OF_FACES, littleEndian);
      var numberOfMipmapLevels = _this.levels = dataView.getUint32(KTX_FIELDS.NUMBER_OF_MIPMAP_LEVELS, littleEndian);
      var bytesOfKeyValueData = dataView.getUint32(KTX_FIELDS.BYTES_OF_KEY_VALUE_DATA, littleEndian);

      if (pixelHeight === 0 || pixelDepth !== 1) {
        throw new Error('Only 2D textures are supported!');
      }

      if (numberOfFaces !== 1) {
        throw new Error('CubeTextures are not supported!');
      }

      if (numberOfArrayElements !== 1) {
        throw new Error('It does not support array textures!');
      }

      var mipWidth = pixelWidth;
      var mipHeight = pixelHeight;
      var imageOffset = FILE_HEADER_SIZE + bytesOfKeyValueData;

      for (var mipmapLevel = 0; mipmapLevel < numberOfMipmapLevels; mipmapLevel++) {
        var imageSize = dataView.getUint32(imageOffset, littleEndian);
        imageOffset += 4;
        var size_1 = INTERNAL_FORMAT_TO_BLOCK_SIZE[_this.internalFormat];
        var levelWidth = mipWidth % size_1[0] === 0 ? mipWidth : mipWidth + size_1[0] - mipWidth % size_1[0];
        var levelHeight = mipHeight % size_1[1] === 0 ? mipHeight : mipHeight + size_1[1] - mipHeight % size_1[1];
        var mip = {
          levelID: mipmapLevel,
          levelWidth: levelWidth,
          levelHeight: levelHeight,
          levelBuffer: new Uint8Array(source, imageOffset, imageSize)
        };

        _this.levelBuffers.push(mip);

        imageOffset += imageSize;
        imageOffset += 3 - (imageOffset + 3) % 4;
        mipWidth = mipWidth >> 1 || 1;
        mipHeight = mipHeight >> 1 || 1;
      }

      return _this;
    }

    return KTXTextureResource;
  }(CompressedTextureResource);

  function validateKTX(dataView) {
    for (var i = 0; i < FILE_IDENTIFIER.length; i++) {
      if (dataView.getUint8(i) !== FILE_IDENTIFIER[i]) {
        return false;
      }
    }

    return true;
  }

  var KTXLoadStrategy = function (_super) {
    __extends(KTXLoadStrategy, _super);

    function KTXLoadStrategy() {
      return _super !== null && _super.apply(this, arguments) || this;
    }

    KTXLoadStrategy.prototype._complete = function (type, data) {
      _super.prototype._complete.call(this, type, new KTXTextureResource(data, this.config));
    };

    return KTXLoadStrategy;
  }(XhrLoadStrategy);

  var KTXLoadStrategy$1 = KTXLoadStrategy;
  var XhrResponseType = eva_js.resourceLoader.XhrResponseType;

  function addPreProcessResourceHandler(resource, gl) {
    resource.addPreProcessResourceHandler(function normalizeResource(resource) {
      var _a, _b, _c;

      var textures = (_b = (_a = resource.src) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.texture;
      if (!textures) return;

      if (!Array.isArray(textures)) {
        textures = [textures];
      }

      var formats = (_c = getSuportCompressedTextureFormats(gl)) !== null && _c !== void 0 ? _c : {};
      var target = textures.find(function (texture) {
        return formats[texture.type];
      });

      if (target) {
        _extends(resource.src.image, target);
      }
    });
  }

  function addKTXStragetyAndRegister() {
    _extends(eva_js.RESOURCE_TYPE_STRATEGY, {
      astc: KTXLoadStrategy$1,
      etc: KTXLoadStrategy$1,
      pvrtc: KTXLoadStrategy$1,
      s3tc: KTXLoadStrategy$1,
      atc: KTXLoadStrategy$1
    });

    KTXLoadStrategy$1.setExtensionXhrType('ktx', XhrResponseType.Buffer);
  }

  var GLTexture = pixi_js.glCore.GLTexture;
  var GLTextureMixin = {
    isCompressed: false,
    uploadNotCompressed: GLTexture.prototype.upload,
    upload: function upload(source) {
      if (!(source instanceof CompressedTextureResource)) {
        return this.uploadNotCompressed(source);
      }

      this.bind();
      var gl = this.gl;
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST_MIPMAP_NEAREST);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      this.isCompressed = true;
      source.upload(gl);
    },
    enableMipmap: function enableMipmap() {
      if (this.isCompressed) {
        return;
      }

      var gl = this.gl;
      this.bind();
      this.mipmap = true;
      gl.generateMipmap(gl.TEXTURE_2D);
    }
  };
  var TextureMixin = {
    oldFrom: pixi_js.Texture.from,
    from: function from(source) {
      if (!(source instanceof CompressedTextureResource)) {
        return this.oldFrom(source);
      }

      return new pixi_js.Texture(pixi_js.BaseTexture.from(source));
    }
  };
  var BaseTextureMixin = {
    oldFrom: pixi_js.BaseTexture.from,
    from: function from(source, scaleMode, sourceScale) {
      if (!(source instanceof CompressedTextureResource)) {
        return this.oldFrom(source, scaleMode, sourceScale);
      }

      var imageUrl = source.src;
      var baseTexture = pixi_js.utils.BaseTextureCache[imageUrl];

      if (!baseTexture) {
        baseTexture = new pixi_js.BaseTexture(source, scaleMode);
        baseTexture.imageUrl = imageUrl;

        if (sourceScale) {
          baseTexture.sourceScale = sourceScale;
        }

        pixi_js.BaseTexture.addToCache(baseTexture, imageUrl);
      }

      return baseTexture;
    }
  };

  function registerCompressedTexture(gl) {
    addPreProcessResourceHandler(eva_js.resource, gl);
    addKTXStragetyAndRegister();

    _extends(pixi_js.glCore.GLTexture.prototype, GLTextureMixin);

    _extends(pixi_js.Texture, TextureMixin);

    _extends(pixi_js.BaseTexture, BaseTextureMixin);
  }

  exports.RENDERER_TYPE = void 0;

  (function (RENDERER_TYPE) {
    RENDERER_TYPE[RENDERER_TYPE["UNKNOWN"] = 0] = "UNKNOWN";
    RENDERER_TYPE[RENDERER_TYPE["WEBGL"] = 1] = "WEBGL";
    RENDERER_TYPE[RENDERER_TYPE["CANVAS"] = 2] = "CANVAS";
  })(exports.RENDERER_TYPE || (exports.RENDERER_TYPE = {}));

  var disableScroll = function disableScroll(renderer) {
    renderer.plugins.interaction.autoPreventDefault = true;
    renderer.view.style.touchAction = 'none';
  };

  var enableScroll = function enableScroll(renderer) {
    renderer.plugins.interaction.autoPreventDefault = false;
    renderer.view.style.touchAction = 'auto';
  };

  var Renderer$2 = function (_super) {
    __extends(Renderer, _super);

    function Renderer() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.multiApps = [];
      return _this;
    }

    Renderer.prototype.init = function (params) {
      var _this = this;

      this.params = params;
      this.application = this.createApplication(params);
      this.containerManager = new ContainerManager$1();
      this.rendererManager = new RendererManager$1({
        game: this.game,
        rendererSystem: this
      });
      this.game.canvas = this.application.view;
      this.transform = new Transform$1({
        system: this,
        containerManager: this.containerManager
      });
      this.game.on('sceneChanged', function (_a) {
        var scene = _a.scene,
            mode = _a.mode,
            params = _a.params;
        var application;

        switch (mode) {
          case eva_js.LOAD_SCENE_MODE.SINGLE:
            application = _this.application;
            break;

          case eva_js.LOAD_SCENE_MODE.MULTI_CANVAS:
            application = _this.createMultiApplication({
              params: params
            });
            break;
        }

        scene.canvas = application.view;

        _this.transform.emit('changeScene', {
          scene: scene,
          mode: mode,
          application: application
        });
      });
      var gl = this.application.renderer.gl;

      if (gl) {
        this.suportedCompressedTextureFormats = getSuportCompressedTextureFormats(gl);
        registerCompressedTexture(gl);
      }
    };

    Renderer.prototype.registerObserver = function (observerInfo) {
      var _a;

      var thisObserverInfo = this.constructor.observerInfo;

      for (var key in observerInfo) {
        if (!thisObserverInfo[key]) {
          thisObserverInfo[key] = [];
        }

        (_a = thisObserverInfo[key]).push.apply(_a, __spread(observerInfo[key]));
      }
    };

    Renderer.prototype.createMultiApplication = function (_a) {
      var params = _a.params;
      var app = this.createApplication(params);
      this.multiApps.push(app);
      return app;
    };

    Renderer.prototype.createApplication = function (params) {
      params.view = params.canvas;

      if (params.renderType === exports.RENDERER_TYPE.CANVAS) {
        params.forceCanvas = true;
      }

      var app = new rendererAdapter.Application(_assign({
        sharedTicker: true
      }, params));
      pixi_js.ticker.shared.stop();
      pixi_js.ticker.shared.autoStart = false;

      if (params.preventScroll !== undefined) {
        console.warn('PreventScroll property will deprecate at next major version, please use enableEnable instead. https://eva.js.org/#/tutorials/game');
        params.preventScroll ? enableScroll(app.renderer) : disableScroll(app.renderer);
      }

      if (params.enableScroll !== undefined) {
        params.enableScroll ? enableScroll(app.renderer) : disableScroll(app.renderer);
      }

      if (params.preventScroll === undefined && params.enableScroll === undefined) {
        enableScroll(app.renderer);
      }

      return app;
    };

    Renderer.prototype.update = function () {
      var e_1, _a, e_2, _b;

      var changes = this.componentObserver.clear();

      try {
        for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
          var changed = changes_1_1.value;
          this.transform.componentChanged(changed);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }

      try {
        for (var _c = __values(this.game.gameObjects), _d = _c.next(); !_d.done; _d = _c.next()) {
          var gameObject = _d.value;
          this.containerManager.updateTransform({
            name: gameObject.id,
            transform: gameObject.transform
          });
          this.rendererManager.update(gameObject);
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
        } finally {
          if (e_2) throw e_2.error;
        }
      }
    };

    Renderer.prototype.lateUpdate = function (e) {
      this.transform.update();
      this.application.ticker.update(e.time);
    };

    Renderer.prototype.onDestroy = function () {
      var e_3, _a;

      this.application.destroy();

      try {
        for (var _b = __values(this.multiApps), _c = _b.next(); !_c.done; _c = _b.next()) {
          var app = _c.value;
          app && app.destroy();
        }
      } catch (e_3_1) {
        e_3 = {
          error: e_3_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        } finally {
          if (e_3) throw e_3.error;
        }
      }

      this.transform.destroy();
      this.transform = null;
      this.params = null;
      this.rendererManager = null;
      this.containerManager = null;
      this.application = null;
      this.game = null;
      this.multiApps = null;
    };

    Renderer.prototype.resize = function (width, height) {
      this.params.width = width;
      this.params.height = height;
      this.application.renderer.resize(width, height);
    };

    Renderer.systemName = 'Renderer';
    Renderer = __decorate([eva_js.decorators.componentObserver({
      Transform: ['_parent']
    })], Renderer);
    return Renderer;
  }(eva_js.System);

  var Renderer$3 = Renderer$2;

  var Renderer = function (_super) {
    __extends(Renderer, _super);

    function Renderer(params) {
      var _this = _super.call(this, params) || this;

      _this.observerInfo = _this.constructor.observerInfo;
      return _this;
    }

    Renderer.prototype.componentChanged = function (_changed) {};

    Renderer.prototype.rendererUpdate = function (_gameObject) {};

    Renderer.prototype.update = function (e) {
      var e_1, _a;

      var changes = this.componentObserver.clear();

      try {
        for (var changes_1 = __values(changes), changes_1_1 = changes_1.next(); !changes_1_1.done; changes_1_1 = changes_1.next()) {
          var changed = changes_1_1.value;
          this.componentChanged(changed);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (changes_1_1 && !changes_1_1.done && (_a = changes_1.return)) _a.call(changes_1);
        } finally {
          if (e_1) throw e_1.error;
        }
      }
    };

    return Renderer;
  }(eva_js.System);

  var Renderer$1 = Renderer;

  var mixinPIXI = function mixinPIXI() {
    pixi_js.BaseTexture.prototype.destroy = function () {
      if (this.imageUrl) {
        delete pixi_js.utils.TextureCache[this.imageUrl];
        this.imageUrl = null;
      }

      this.source = null;
      this.dispose();
      pixi_js.BaseTexture.removeFromCache(this);
      this.textureCacheIds = null;
      this._destroyed = true;
    };
  };

  mixinPIXI();
  exports.ContainerManager = ContainerManager$1;
  exports.Renderer = Renderer$1;
  exports.RendererManager = RendererManager$1;
  exports.RendererSystem = Renderer$3;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
}({}, EVA, EVA.rendererAdapter, PIXI);

window.EVA.plugin.renderer = window.EVA.plugin.renderer || _EVA_IIFE_renderer;
