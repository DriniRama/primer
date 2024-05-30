"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Button.jsx":
/*!***********************************!*\
  !*** ./src/components/Button.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"ButtonLink\": function() { return /* binding */ ButtonLink; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\nvar baseStyles = {\n    solid: \"inline-flex justify-center rounded-md py-1 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none\",\n    outline: \"inline-flex justify-center rounded-md border py-[calc(theme(spacing.1)-1px)] px-[calc(theme(spacing.4)-1px)] text-base font-semibold tracking-tight focus:outline-none\"\n};\nvar variantStyles = {\n    solid: {\n        slate: \"bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900\",\n        green: \"bg-violet-600 text-white hover:bg-green-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:bg-green-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-green-600\",\n        white: \"bg-white text-violet-600 hover:text-green-700 focus-visible:text-green-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:bg-green-50 active:text-green-900/80 disabled:opacity-40 disabled:hover:text-green-600\"\n    },\n    outline: {\n        slate: \"border-slate-200 text-slate-900 hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600 active:border-slate-200 active:bg-slate-50 active:text-slate-900/70 disabled:opacity-40 disabled:hover:border-slate-200 disabled:hover:bg-transparent\",\n        green: \"border-green-300 text-green-600 hover:border-green-400 hover:bg-green-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:text-green-600/70 disabled:opacity-40 disabled:hover:border-green-300 disabled:hover:bg-transparent\"\n    }\n};\nfunction Button(_param) {\n    var _variant = _param.variant, variant = _variant === void 0 ? \"solid\" : _variant, _color = _param.color, color = _color === void 0 ? \"slate\" : _color, className = _param.className, props = _objectWithoutProperties(_param, [\n        \"variant\",\n        \"color\",\n        \"className\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", _objectSpread({\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(baseStyles[variant], variantStyles[variant][color], className)\n    }, props), void 0, false, {\n        fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/Button.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_c = Button;\nfunction ButtonLink(_param) {\n    var _variant = _param.variant, variant = _variant === void 0 ? \"solid\" : _variant, _color = _param.color, color = _color === void 0 ? \"slate\" : _color, href = _param.href, className = _param.className, props = _objectWithoutProperties(_param, [\n        \"variant\",\n        \"color\",\n        \"href\",\n        \"className\"\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: href,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", _objectSpread({\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(baseStyles[variant], variantStyles[variant][color], className)\n        }, props), void 0, false, {\n            fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/Button.jsx\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/Button.jsx\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_c1 = ButtonLink;\nvar _c, _c1;\n$RefreshReg$(_c, \"Button\");\n$RefreshReg$(_c1, \"ButtonLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CdXR0b24uanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDTDtBQUV2QixJQUFNRSxVQUFVLEdBQUc7SUFDakJDLEtBQUssRUFDSCxxSEFBcUg7SUFDdkhDLE9BQU8sRUFDTCx3S0FBd0s7Q0FDM0s7QUFFRCxJQUFNQyxhQUFhLEdBQUc7SUFDcEJGLEtBQUssRUFBRTtRQUNMRyxLQUFLLEVBQ0gsNE5BQTROO1FBQzlOQyxLQUFLLEVBQUUsNk5BQTZOO1FBQ3BPQyxLQUFLLEVBQ0gsNlBBQTZQO0tBQ2hRO0lBQ0RKLE9BQU8sRUFBRTtRQUNQRSxLQUFLLEVBQ0gsdVRBQXVUO1FBQ3pUQyxLQUFLLEVBQUUsNFFBQTRRO0tBQ3BSO0NBQ0Y7QUFFTSxTQUFTRSxNQUFNLENBQUMsTUFLdEIsRUFBRTttQkFMb0IsTUFLdEIsQ0FKQ0MsT0FBTyxFQUFQQSxPQUFPLHlCQUFHLE9BQU8sc0JBREksTUFLdEIsQ0FIQ0MsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLE9BQU8sV0FDZkMsU0FBUyxHQUhZLE1BS3RCLENBRkNBLFNBQVMsRUFDTkMsS0FBSyw0QkFKYSxNQUt0QjtRQUpDSCxTQUFPO1FBQ1BDLE9BQUs7UUFDTEMsV0FBUzs7SUFHVCxxQkFDRSw4REFBQ0UsUUFBTTtRQUNMRixTQUFTLEVBQUVYLGdEQUFJLENBQ2JDLFVBQVUsQ0FBQ1EsT0FBTyxDQUFDLEVBQ25CTCxhQUFhLENBQUNLLE9BQU8sQ0FBQyxDQUFDQyxLQUFLLENBQUMsRUFDN0JDLFNBQVMsQ0FDVjtPQUNHQyxLQUFLOzs7O1lBQ1QsQ0FDSDtDQUNGO0FBaEJlSixLQUFBQSxNQUFNO0FBa0JmLFNBQVNNLFVBQVUsQ0FBQyxNQU0xQixFQUFFO21CQU53QixNQU0xQixDQUxDTCxPQUFPLEVBQVBBLE9BQU8seUJBQUcsT0FBTyxzQkFEUSxNQU0xQixDQUpDQyxLQUFLLEVBQUxBLEtBQUssdUJBQUcsT0FBTyxXQUNmSyxJQUFJLEdBSHFCLE1BTTFCLENBSENBLElBQUksRUFDSkosU0FBUyxHQUpnQixNQU0xQixDQUZDQSxTQUFTLEVBQ05DLEtBQUssNEJBTGlCLE1BTTFCO1FBTENILFNBQU87UUFDUEMsT0FBSztRQUNMSyxNQUFJO1FBQ0pKLFdBQVM7O0lBR1QscUJBQ0UsOERBQUNaLGtEQUFJO1FBQUNnQixJQUFJLEVBQUVBLElBQUk7a0JBQ2QsNEVBQUNDLEdBQUM7WUFDQUwsU0FBUyxFQUFFWCxnREFBSSxDQUNiQyxVQUFVLENBQUNRLE9BQU8sQ0FBQyxFQUNuQkwsYUFBYSxDQUFDSyxPQUFPLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEVBQzdCQyxTQUFTLENBQ1Y7V0FDR0MsS0FBSzs7OztnQkFDVDs7Ozs7WUFDRyxDQUNSO0NBQ0Y7QUFuQmVFLE1BQUFBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQnV0dG9uLmpzeD80ZTFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5cbmNvbnN0IGJhc2VTdHlsZXMgPSB7XG4gIHNvbGlkOlxuICAgICdpbmxpbmUtZmxleCBqdXN0aWZ5LWNlbnRlciByb3VuZGVkLW1kIHB5LTEgcHgtNCB0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCB0cmFja2luZy10aWdodCBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lJyxcbiAgb3V0bGluZTpcbiAgICAnaW5saW5lLWZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBib3JkZXIgcHktW2NhbGModGhlbWUoc3BhY2luZy4xKS0xcHgpXSBweC1bY2FsYyh0aGVtZShzcGFjaW5nLjQpLTFweCldIHRleHQtYmFzZSBmb250LXNlbWlib2xkIHRyYWNraW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZScsXG59XG5cbmNvbnN0IHZhcmlhbnRTdHlsZXMgPSB7XG4gIHNvbGlkOiB7XG4gICAgc2xhdGU6XG4gICAgICAnYmctc2xhdGUtOTAwIHRleHQtd2hpdGUgaG92ZXI6Ymctc2xhdGUtNzAwIGZvY3VzLXZpc2libGU6b3V0bGluZS0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtc2xhdGUtOTAwIGFjdGl2ZTpiZy1zbGF0ZS03MDAgYWN0aXZlOnRleHQtd2hpdGUvODAgZGlzYWJsZWQ6b3BhY2l0eS0zMCBkaXNhYmxlZDpob3ZlcjpiZy1zbGF0ZS05MDAnLFxuICAgIGdyZWVuOiAnYmctdmlvbGV0LTYwMCB0ZXh0LXdoaXRlIGhvdmVyOmJnLWdyZWVuLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWdyZWVuLTYwMCBhY3RpdmU6YmctZ3JlZW4tNzAwIGFjdGl2ZTp0ZXh0LXdoaXRlLzgwIGRpc2FibGVkOm9wYWNpdHktMzAgZGlzYWJsZWQ6aG92ZXI6YmctZ3JlZW4tNjAwJyxcbiAgICB3aGl0ZTpcbiAgICAgICdiZy13aGl0ZSB0ZXh0LXZpb2xldC02MDAgaG92ZXI6dGV4dC1ncmVlbi03MDAgZm9jdXMtdmlzaWJsZTp0ZXh0LWdyZWVuLTkwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLXdoaXRlIGFjdGl2ZTpiZy1ncmVlbi01MCBhY3RpdmU6dGV4dC1ncmVlbi05MDAvODAgZGlzYWJsZWQ6b3BhY2l0eS00MCBkaXNhYmxlZDpob3Zlcjp0ZXh0LWdyZWVuLTYwMCcsXG4gIH0sXG4gIG91dGxpbmU6IHtcbiAgICBzbGF0ZTpcbiAgICAgICdib3JkZXItc2xhdGUtMjAwIHRleHQtc2xhdGUtOTAwIGhvdmVyOmJvcmRlci1zbGF0ZS0zMDAgaG92ZXI6Ymctc2xhdGUtNTAgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1zbGF0ZS02MDAgYWN0aXZlOmJvcmRlci1zbGF0ZS0yMDAgYWN0aXZlOmJnLXNsYXRlLTUwIGFjdGl2ZTp0ZXh0LXNsYXRlLTkwMC83MCBkaXNhYmxlZDpvcGFjaXR5LTQwIGRpc2FibGVkOmhvdmVyOmJvcmRlci1zbGF0ZS0yMDAgZGlzYWJsZWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQnLFxuICAgIGdyZWVuOiAnYm9yZGVyLWdyZWVuLTMwMCB0ZXh0LWdyZWVuLTYwMCBob3Zlcjpib3JkZXItZ3JlZW4tNDAwIGhvdmVyOmJnLWdyZWVuLTUwIGZvY3VzLXZpc2libGU6b3V0bGluZS0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1vZmZzZXQtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtZ3JlZW4tNjAwIGFjdGl2ZTp0ZXh0LWdyZWVuLTYwMC83MCBkaXNhYmxlZDpvcGFjaXR5LTQwIGRpc2FibGVkOmhvdmVyOmJvcmRlci1ncmVlbi0zMDAgZGlzYWJsZWQ6aG92ZXI6YmctdHJhbnNwYXJlbnQnLFxuICB9LFxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKHtcbiAgdmFyaWFudCA9ICdzb2xpZCcsXG4gIGNvbG9yID0gJ3NsYXRlJyxcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17Y2xzeChcbiAgICAgICAgYmFzZVN0eWxlc1t2YXJpYW50XSxcbiAgICAgICAgdmFyaWFudFN0eWxlc1t2YXJpYW50XVtjb2xvcl0sXG4gICAgICAgIGNsYXNzTmFtZVxuICAgICAgKX1cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBCdXR0b25MaW5rKHtcbiAgdmFyaWFudCA9ICdzb2xpZCcsXG4gIGNvbG9yID0gJ3NsYXRlJyxcbiAgaHJlZixcbiAgY2xhc3NOYW1lLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gKFxuICAgIDxMaW5rIGhyZWY9e2hyZWZ9PlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgIGJhc2VTdHlsZXNbdmFyaWFudF0sXG4gICAgICAgICAgdmFyaWFudFN0eWxlc1t2YXJpYW50XVtjb2xvcl0sXG4gICAgICAgICAgY2xhc3NOYW1lXG4gICAgICAgICl9XG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgIC8+XG4gICAgPC9MaW5rPlxuICApXG59XG4iXSwibmFtZXMiOlsiTGluayIsImNsc3giLCJiYXNlU3R5bGVzIiwic29saWQiLCJvdXRsaW5lIiwidmFyaWFudFN0eWxlcyIsInNsYXRlIiwiZ3JlZW4iLCJ3aGl0ZSIsIkJ1dHRvbiIsInZhcmlhbnQiLCJjb2xvciIsImNsYXNzTmFtZSIsInByb3BzIiwiYnV0dG9uIiwiQnV0dG9uTGluayIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Button.jsx\n");

/***/ })

});