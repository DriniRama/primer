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

/***/ "./src/components/NavBar.jsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @headlessui/react */ \"./node_modules/@headlessui/react/dist/headlessui.esm.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nvar sections = [\n    {\n        id: \"rrethproduktit\",\n        title: \"Rreth Produktit\"\n    },\n    {\n        id: \"perdorimi\",\n        title: \"Efekti i diet\"\n    },\n    {\n        id: \"shporta\",\n        title: \"Shporta e blerjes\"\n    },\n    {\n        id: \"shkarkolibrin\",\n        title: \"Libri per humbje peshe\"\n    }, \n];\nfunction NavBar() {\n    var _this = this;\n    _s();\n    var navBarRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1), activeIndex = ref[0], setActiveIndex = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var updateActiveIndex = function() {\n            var offsets = sections.map(function(section) {\n                var element = document.getElementById(section.id);\n                return element ? element.offsetTop : 0;\n            });\n            var pageOffset = window.pageYOffset + (navBarRef.current ? navBarRef.current.offsetHeight : 0);\n            var lastIndex = offsets.length - 1;\n            var newActiveIndex = offsets.findIndex(function(offset, index) {\n                var nextOffset = index < lastIndex ? offsets[index + 1] : Number.POSITIVE_INFINITY;\n                return pageOffset >= offset && pageOffset < nextOffset;\n            });\n            setActiveIndex(newActiveIndex);\n        };\n        updateActiveIndex();\n        window.addEventListener(\"resize\", updateActiveIndex);\n        window.addEventListener(\"scroll\", updateActiveIndex, {\n            passive: true\n        });\n        return function() {\n            window.removeEventListener(\"resize\", updateActiveIndex);\n            window.removeEventListener(\"scroll\", updateActiveIndex);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: navBarRef,\n        className: \"sticky top-0 z-50\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover, {\n                className: \"sm:hidden\",\n                children: function(param1) {\n                    var open = param1.open;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"relative flex items-center py-3 px-4\", {\n                                    \"bg-white/95 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur\": !open\n                                }),\n                                children: [\n                                    !open && activeIndex !== -1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                \"aria-hidden\": \"true\",\n                                                className: \"font-mono text-sm text-green-600\",\n                                                children: (activeIndex + 1).toString().padStart(2, \"0\")\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"ml-4 text-base font-medium text-slate-900\",\n                                                children: sections[Math.max(0, activeIndex)].title\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                                lineNumber: 59,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Button, {\n                                        className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"-mr-1 ml-auto flex h-8 w-8 items-center justify-center\", {\n                                            \"relative z-10\": open\n                                        }),\n                                        children: [\n                                            !open && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute inset-0\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 27\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"sr-only\",\n                                                children: \"Toggle navigation\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                                \"aria-hidden\": \"true\",\n                                                className: \"h-6 w-6 stroke-slate-700\",\n                                                fill: \"none\",\n                                                strokeWidth: \"2\",\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                d: open ? \"M17 7 7 17M7 7l10 10\" : \"m15 16-3 3-3-3M15 8l-3-3-3 3\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                                lineNumber: 67,\n                                                columnNumber: 17\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__.Popover.Panel, {\n                                className: \"absolute inset-x-0 top-0 bg-white/95 py-3.5 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur\",\n                                children: function(param) {\n                                    var close = param.close;\n                                    return sections.map(function(section, index) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"#\".concat(section.id),\n                                            className: \"flex items-center py-1.5 px-4\",\n                                            onClick: function() {\n                                                setActiveIndex(index);\n                                                close();\n                                            },\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    \"aria-hidden\": \"true\",\n                                                    className: \"font-mono text-sm text-green-600\",\n                                                    children: (index + 1).toString().padStart(2, \"0\")\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 19\n                                                }, _this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"ml-4 text-base font-medium text-slate-900\",\n                                                    children: section.title\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                                    lineNumber: 92,\n                                                    columnNumber: 19\n                                                }, _this)\n                                            ]\n                                        }, section.id, true, {\n                                            fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                            lineNumber: 80,\n                                            columnNumber: 17\n                                        }, _this);\n                                    });\n                                }\n                            }, void 0, false, {\n                                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true);\n                }\n            }, void 0, false, {\n                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-slate-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                    className: \"-mb-[2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-slate-900 [counter-reset:section]\",\n                    children: sections.map(function(section, index) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"flex [counter-increment:section]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\".concat(section.id),\n                                className: (0,clsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"flex w-full flex-col items-center justify-center border-b-2 before:mb-2 before:font-mono before:text-sm before:content-[counter(section,decimal-leading-zero)]\", {\n                                    \"border-green-600 bg-green-50 text-green-600 before:text-green-600\": index === activeIndex,\n                                    \"border-transparent before:text-slate-500 hover:bg-green-50/40 hover:before:text-slate-900\": index !== activeIndex\n                                }),\n                                onClick: function() {\n                                    return setActiveIndex(index);\n                                },\n                                children: section.title\n                            }, void 0, false, {\n                                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                                lineNumber: 105,\n                                columnNumber: 15\n                            }, _this)\n                        }, section.id, false, {\n                            fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                            lineNumber: 104,\n                            columnNumber: 13\n                        }, _this);\n                    })\n                }, void 0, false, {\n                    fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                    lineNumber: 102,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pixendrit/Documents/GitHub/primer/src/components/NavBar.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(NavBar, \"XP75lfwjcaX8zE6C5GPJYKGfWXs=\");\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O29DQUMxRiwyRkFBMkYsRUFBRW9CLEtBQUssS0FBS3BCLFdBQVc7aUNBQ25ILENBQ0Y7Z0NBQ0RnRCxPQUFPLEVBQUU7MkNBQU0vQyxjQUFjLENBQUNtQixLQUFLLENBQUM7aUNBQUE7MENBRW5DZixPQUFPLENBQUNSLEtBQUs7Ozs7O3FDQUNaOzJCQWJHUSxPQUFPLENBQUNULEVBQUU7Ozs7aUNBY2Q7cUJBQ04sQ0FBQzs7Ozs7d0JBQ0M7Ozs7O29CQUNEOzs7Ozs7WUFDRixDQUNOO0NBQ0g7R0FoSGVFLE1BQU07QUFBTkEsS0FBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9OYXZCYXIuanN4PzkxNzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUG9wb3ZlciB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0JztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuXG5jb25zdCBzZWN0aW9ucyA9IFtcbiAgeyBpZDogJ3JyZXRocHJvZHVrdGl0JywgdGl0bGU6ICdScmV0aCBQcm9kdWt0aXQnIH0sXG4gIHsgaWQ6ICdwZXJkb3JpbWknLCB0aXRsZTogJ0VmZWt0aSBpIGRpZXQnIH0sXG4gIHsgaWQ6ICdzaHBvcnRhJywgdGl0bGU6ICdTaHBvcnRhIGUgYmxlcmplcycgfSxcbiAgeyBpZDogJ3Noa2Fya29saWJyaW4nLCB0aXRsZTogJ0xpYnJpIHBlciBodW1iamUgcGVzaGUnIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gTmF2QmFyKCkge1xuICBjb25zdCBuYXZCYXJSZWYgPSB1c2VSZWYoKTtcbiAgY29uc3QgW2FjdGl2ZUluZGV4LCBzZXRBY3RpdmVJbmRleF0gPSB1c2VTdGF0ZSgtMSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB1cGRhdGVBY3RpdmVJbmRleCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IG9mZnNldHMgPSBzZWN0aW9ucy5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzZWN0aW9uLmlkKTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQgPyBlbGVtZW50Lm9mZnNldFRvcCA6IDA7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgcGFnZU9mZnNldCA9IHdpbmRvdy5wYWdlWU9mZnNldCArIChuYXZCYXJSZWYuY3VycmVudCA/IG5hdkJhclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCA6IDApO1xuICAgICAgY29uc3QgbGFzdEluZGV4ID0gb2Zmc2V0cy5sZW5ndGggLSAxO1xuXG4gICAgICBjb25zdCBuZXdBY3RpdmVJbmRleCA9IG9mZnNldHMuZmluZEluZGV4KChvZmZzZXQsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IG5leHRPZmZzZXQgPSBpbmRleCA8IGxhc3RJbmRleCA/IG9mZnNldHNbaW5kZXggKyAxXSA6IE51bWJlci5QT1NJVElWRV9JTkZJTklUWTtcbiAgICAgICAgcmV0dXJuIHBhZ2VPZmZzZXQgPj0gb2Zmc2V0ICYmIHBhZ2VPZmZzZXQgPCBuZXh0T2Zmc2V0O1xuICAgICAgfSk7XG5cbiAgICAgIHNldEFjdGl2ZUluZGV4KG5ld0FjdGl2ZUluZGV4KTtcbiAgICB9O1xuXG4gICAgdXBkYXRlQWN0aXZlSW5kZXgoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdXBkYXRlQWN0aXZlSW5kZXgpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB1cGRhdGVBY3RpdmVJbmRleCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB1cGRhdGVBY3RpdmVJbmRleCk7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdXBkYXRlQWN0aXZlSW5kZXgpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgcmVmPXtuYXZCYXJSZWZ9IGNsYXNzTmFtZT1cInN0aWNreSB0b3AtMCB6LTUwXCI+XG4gICAgICA8UG9wb3ZlciBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIj5cbiAgICAgICAgeyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeCgncmVsYXRpdmUgZmxleCBpdGVtcy1jZW50ZXIgcHktMyBweC00Jywge1xuICAgICAgICAgICAgICAgICdiZy13aGl0ZS85NSBzaGFkb3ctc20gW0BzdXBwb3J0cyhiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSldOmJnLXdoaXRlLzgwIFtAc3VwcG9ydHMoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpXTpiYWNrZHJvcC1ibHVyJzogIW9wZW4sXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7IW9wZW4gJiYgYWN0aXZlSW5kZXggIT09IC0xICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gdGV4dC1ncmVlbi02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgeyhhY3RpdmVJbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uc1tNYXRoLm1heCgwLCBhY3RpdmVJbmRleCldLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8UG9wb3Zlci5CdXR0b24gY2xhc3NOYW1lPXtjbHN4KCctbXItMSBtbC1hdXRvIGZsZXggaC04IHctOCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXInLCB7ICdyZWxhdGl2ZSB6LTEwJzogb3BlbiB9KX0+XG4gICAgICAgICAgICAgICAgeyFvcGVuICYmIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIiAvPn1cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VG9nZ2xlIG5hdmlnYXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImgtNiB3LTYgc3Ryb2tlLXNsYXRlLTcwMFwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjJcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgZD17b3BlbiA/ICdNMTcgNyA3IDE3TTcgN2wxMCAxMCcgOiAnbTE1IDE2LTMgMy0zLTNNMTUgOGwtMy0zLTMgMyd9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Qb3BvdmVyLkJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBvcG92ZXIuUGFuZWwgY2xhc3NOYW1lPVwiYWJzb2x1dGUgaW5zZXQteC0wIHRvcC0wIGJnLXdoaXRlLzk1IHB5LTMuNSBzaGFkb3ctc20gW0BzdXBwb3J0cyhiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSldOmJnLXdoaXRlLzgwIFtAc3VwcG9ydHMoYmFja2Ryb3AtZmlsdGVyOmJsdXIoMCkpXTpiYWNrZHJvcC1ibHVyXCI+XG4gICAgICAgICAgICAgIHsoeyBjbG9zZSB9KSA9PiBzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGtleT17c2VjdGlvbi5pZH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtzZWN0aW9uLmlkfWB9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0xLjUgcHgtNFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZUluZGV4KGluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwiZm9udC1tb25vIHRleHQtc20gdGV4dC1ncmVlbi02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgeyhpbmRleCArIDEpLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgJzAnKX1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTQgdGV4dC1iYXNlIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L1BvcG92ZXIuUGFuZWw+XG4gICAgICAgICAgPC8+XG4gICAgICAgICl9XG4gICAgICA8L1BvcG92ZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhpZGRlbiBzbTpmbGV4IHNtOmgtMzIgc206anVzdGlmeS1jZW50ZXIgc206Ym9yZGVyLWIgc206Ym9yZGVyLXNsYXRlLTIwMCBzbTpiZy13aGl0ZS85NSBzbTpbQHN1cHBvcnRzKGJhY2tkcm9wLWZpbHRlcjpibHVyKDApKV06Ymctd2hpdGUvODAgc206W0BzdXBwb3J0cyhiYWNrZHJvcC1maWx0ZXI6Ymx1cigwKSldOmJhY2tkcm9wLWJsdXJcIj5cbiAgICAgICAgPG9sIGNsYXNzTmFtZT1cIi1tYi1bMnB4XSBncmlkIGF1dG8tY29scy1bbWlubWF4KDAsMTVyZW0pXSBncmlkLWZsb3ctY29sIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTkwMCBbY291bnRlci1yZXNldDpzZWN0aW9uXVwiPlxuICAgICAgICAgIHtzZWN0aW9ucy5tYXAoKHNlY3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtzZWN0aW9uLmlkfSBjbGFzc05hbWU9XCJmbGV4IFtjb3VudGVyLWluY3JlbWVudDpzZWN0aW9uXVwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtzZWN0aW9uLmlkfWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KFxuICAgICAgICAgICAgICAgICAgJ2ZsZXggdy1mdWxsIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBib3JkZXItYi0yIGJlZm9yZTptYi0yIGJlZm9yZTpmb250LW1vbm8gYmVmb3JlOnRleHQtc20gYmVmb3JlOmNvbnRlbnQtW2NvdW50ZXIoc2VjdGlvbixkZWNpbWFsLWxlYWRpbmctemVybyldJyxcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1ncmVlbi02MDAgYmctZ3JlZW4tNTAgdGV4dC1ncmVlbi02MDAgYmVmb3JlOnRleHQtZ3JlZW4tNjAwJzogaW5kZXggPT09IGFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLXRyYW5zcGFyZW50IGJlZm9yZTp0ZXh0LXNsYXRlLTUwMCBob3ZlcjpiZy1ncmVlbi01MC80MCBob3ZlcjpiZWZvcmU6dGV4dC1zbGF0ZS05MDAnOiBpbmRleCAhPT0gYWN0aXZlSW5kZXgsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJbmRleChpbmRleCl9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7c2VjdGlvbi50aXRsZX1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9vbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiUG9wb3ZlciIsImNsc3giLCJzZWN0aW9ucyIsImlkIiwidGl0bGUiLCJOYXZCYXIiLCJuYXZCYXJSZWYiLCJhY3RpdmVJbmRleCIsInNldEFjdGl2ZUluZGV4IiwidXBkYXRlQWN0aXZlSW5kZXgiLCJvZmZzZXRzIiwibWFwIiwic2VjdGlvbiIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib2Zmc2V0VG9wIiwicGFnZU9mZnNldCIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY3VycmVudCIsIm9mZnNldEhlaWdodCIsImxhc3RJbmRleCIsImxlbmd0aCIsIm5ld0FjdGl2ZUluZGV4IiwiZmluZEluZGV4Iiwib2Zmc2V0IiwiaW5kZXgiLCJuZXh0T2Zmc2V0IiwiTnVtYmVyIiwiUE9TSVRJVkVfSU5GSU5JVFkiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJvcGVuIiwic3BhbiIsImFyaWEtaGlkZGVuIiwidG9TdHJpbmciLCJwYWRTdGFydCIsIk1hdGgiLCJtYXgiLCJCdXR0b24iLCJzdmciLCJmaWxsIiwic3Ryb2tlV2lkdGgiLCJzdHJva2VMaW5lY2FwIiwic3Ryb2tlTGluZWpvaW4iLCJkIiwiUGFuZWwiLCJjbG9zZSIsImEiLCJocmVmIiwib25DbGljayIsIm9sIiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/NavBar.jsx\n");

/***/ })

});