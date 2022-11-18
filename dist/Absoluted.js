"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _jsxRuntime = require("react/jsx-runtime");
var Absoluted = function Absoluted(_ref) {
  var children = _ref.children;
  var absolutedRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var reqAnimation = requestAnimationFrame(updatePosition);
    return function () {
      return cancelAnimationFrame(reqAnimation);
    };
  }, []);
  var updatePosition = function updatePosition() {
    if (absolutedRef.current && absolutedRef.current.parentElement) {
      var absoluted = absolutedRef.current;
      var parent = absoluted.parentElement;
      var _parent$getBoundingCl = parent.getBoundingClientRect(),
        top = _parent$getBoundingCl.top,
        left = _parent$getBoundingCl.left;
      absoluted.style.top = "".concat(top, "px");
      absoluted.style.left = "".concat(left, "px");
    }
    requestAnimationFrame(updatePosition);
  };
  var absolutedStyles = {
    top: "0px",
    left: "0px",
    width: "0px",
    height: "0px",
    position: "fixed"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: absolutedStyles,
    ref: absolutedRef,
    children: children
  });
};
var _default = Absoluted;
exports["default"] = _default;