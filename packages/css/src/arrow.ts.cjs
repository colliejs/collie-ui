"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pseudoArrow = exports.arrow = void 0;
var _placement = require("./layout/placement");
var _excluded = ["border"];
function _wrapRegExp() { _wrapRegExp = function _wrapRegExp(re, groups) { return new BabelRegExp(re, void 0, groups); }; var _super = RegExp.prototype, _groups = new WeakMap(); function BabelRegExp(re, flags, groups) { var _this = new RegExp(re, flags); return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype); } function buildGroups(result, re) { var g = _groups.get(re); return Object.keys(g).reduce(function (groups, name) { var i = g[name]; if ("number" == typeof i) groups[name] = result[i];else { for (var k = 0; void 0 === result[i[k]] && k + 1 < i.length;) k++; groups[name] = result[i[k]]; } return groups; }, Object.create(null)); } return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function (str) { var result = _super.exec.call(this, str); if (result) { result.groups = buildGroups(result, this); var indices = result.indices; indices && (indices.groups = buildGroups(indices, this)); } return result; }, BabelRegExp.prototype[Symbol.replace] = function (str, substitution) { if ("string" == typeof substitution) { var groups = _groups.get(this); return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function (_, name) { var group = groups[name]; return "$" + (Array.isArray(group) ? group.join("$") : group); })); } if ("function" == typeof substitution) { var _this = this; return _super[Symbol.replace].call(this, str, function () { var args = arguments; return "object" != _typeof(args[args.length - 1]) && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args); }); } return _super[Symbol.replace].call(this, str, substitution); }, _wrapRegExp.apply(this, arguments); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var arrow = function arrow(direction) {
  var polygon;
  switch (direction) {
    case "top":
      polygon = "50% 0%, 0% 100%, 100% 100%";
      break;
    case "bottom":
      polygon = "0% 0%, 50% 100%, 100% 0%";
      break;
    case "left":
      polygon = "100% 0%, 0% 50%, 100% 100%";
      break;
    case "right":
      polygon = "0% 0%, 0% 100%, 100% 50%";
      break;
    default:
      throw new Error("TypeError:direction must be one of top, bottom, left, right");
  }
  return {
    clipPath: "polygon(".concat(polygon, ")")
  };
};

//=====================================================================================================
// pseudoArrow:
// color of border of arrow is same as the border color of parent element
//=====================================================================================================
exports.arrow = arrow;
var pseudoArrow = function pseudoArrow(direction, width, height, css) {
  var _ref = css || {},
    border = _ref.border,
    restCss = _objectWithoutProperties(_ref, _excluded);
  if (!border) {
    return {
      _before: _objectSpread(_objectSpread(_objectSpread({
        w: width,
        h: height
      }, (0, _placement.getPopoverPos)(direction)), arrow(direction)), {}, {
        background: "inherit"
      }, css)
    };
  }
  var res = border.match( /*#__PURE__*/_wrapRegExp(/(\d+?)p?x? (\w+?) (.+)/, {
    size: 1,
    type: 2,
    color: 3
  }));
  // only support solid
  if (!res) {
    throw new Error("invalid border: ".concat(border));
  }
  //@ts-ignore
  var _res$groups = res.groups,
    _res$groups$size = _res$groups.size,
    size = _res$groups$size === void 0 ? 1 : _res$groups$size,
    color = _res$groups.color;
  var w = width - +size - 1;
  var h = height - +size - 1;
  return {
    _before: _objectSpread(_objectSpread(_objectSpread({
      w: width,
      h: height
    }, (0, _placement.getPopoverPos)(direction)), arrow(direction)), {}, {
      background: color
    }, restCss),
    _after: _objectSpread(_objectSpread(_objectSpread({
      w: w,
      h: h
    }, (0, _placement.getPopoverPos)(direction)), arrow(direction)), {}, {
      background: "inherit"
    }, restCss)
  };
};
exports.pseudoArrow = pseudoArrow;