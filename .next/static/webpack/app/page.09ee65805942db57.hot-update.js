"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/comps/Menu/Example.js":
/*!***********************************!*\
  !*** ./src/comps/Menu/Example.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/utils/use-cycle.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _use_dimensions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./use-dimensions */ \"(app-pages-browser)/./src/comps/Menu/use-dimensions.js\");\n/* harmony import */ var _MenuToggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuToggle */ \"(app-pages-browser)/./src/comps/Menu/MenuToggle.js\");\n/* harmony import */ var _Navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navigation */ \"(app-pages-browser)/./src/comps/Menu/Navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst sidebar = {\n    open: function() {\n        let height = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1000;\n        return {\n            clipPath: \"circle(\".concat(height * 2 + 200, \"px at 40px 40px)\"),\n            transition: {\n                type: \"spring\",\n                stiffness: 20,\n                restDelta: 2\n            }\n        };\n    },\n    closed: {\n        clipPath: \"circle(30px at 40px 40px)\",\n        transition: {\n            delay: 0.5,\n            type: \"spring\",\n            stiffness: 400,\n            damping: 40\n        }\n    }\n};\nconst debounce = (func, delay)=>{\n    let timeoutId;\n    return function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        clearTimeout(timeoutId);\n        timeoutId = setTimeout(()=>func.apply(this, args), delay);\n    };\n};\nconst Example = ()=>{\n    _s();\n    const [isOpen, toggleOpen] = (0,framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle)(false, true);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { height } = (0,_use_dimensions__WEBPACK_IMPORTED_MODULE_2__.useDimensions)(containerRef);\n    const [isToggling, setIsToggling] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const debouncedToggle = debounce(()=>{\n        toggleOpen();\n        setIsToggling(false); // Reset isToggling state after debounce delay\n    }, 300);\n    const handleToggle = ()=>{\n        if (!isToggling) {\n            // Check if not already toggling\n            setIsToggling(true); // Set isToggling to true to indicate toggle started\n            debouncedToggle(); // Call debouncedToggle function\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.nav, {\n        initial: false,\n        animate: isOpen ? \"open\" : \"closed\",\n        custom: height,\n        ref: containerRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_6__.motion.div, {\n                className: \"background1\",\n                variants: sidebar\n            }, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Navigation__WEBPACK_IMPORTED_MODULE_4__.Navigation, {}, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MenuToggle__WEBPACK_IMPORTED_MODULE_3__.MenuToggle, {\n                toggle: handleToggle,\n                disabled: isToggling\n            }, void 0, false, {\n                fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/nyam-erdene/Desktop/VistaV2/src/comps/Menu/Example.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Example, \"iJluUD/skTw6qbOSuMQXQABPEuY=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_5__.useCycle,\n        _use_dimensions__WEBPACK_IMPORTED_MODULE_2__.useDimensions\n    ];\n});\n_c = Example;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);\nvar _c;\n$RefreshReg$(_c, \"Example\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wcy9NZW51L0V4YW1wbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0I7QUFDVTtBQUNjO0FBQ047QUFDUDtBQUNBO0FBRTFDLE1BQU1TLFVBQVU7SUFDZEMsTUFBTTtZQUFDQywwRUFBUztlQUFVO1lBQ3hCQyxVQUFVLFVBQTJCLE9BQWpCRCxTQUFTLElBQUksS0FBSTtZQUNyQ0UsWUFBWTtnQkFDVkMsTUFBTTtnQkFDTkMsV0FBVztnQkFDWEMsV0FBVztZQUNiO1FBQ0Y7O0lBQ0FDLFFBQVE7UUFDTkwsVUFBVTtRQUNWQyxZQUFZO1lBQ1ZLLE9BQU87WUFDUEosTUFBTTtZQUNOQyxXQUFXO1lBQ1hJLFNBQVM7UUFDWDtJQUNGO0FBQ0Y7QUFFQSxNQUFNQyxXQUFXLENBQUNDLE1BQU1IO0lBQ3RCLElBQUlJO0lBQ0osT0FBTztRQUFVO1lBQUdDLEtBQUgsdUJBQU87O1FBQ3RCQyxhQUFhRjtRQUNiQSxZQUFZRyxXQUFXLElBQU1KLEtBQUtLLEtBQUssQ0FBQyxJQUFJLEVBQUVILE9BQU9MO0lBQ3ZEO0FBQ0Y7QUFFQSxNQUFNUyxVQUFVOztJQUNkLE1BQU0sQ0FBQ0MsUUFBUUMsV0FBVyxHQUFHeEIsdURBQVFBLENBQUMsT0FBTztJQUM3QyxNQUFNeUIsZUFBZTdCLDZDQUFNQSxDQUFDO0lBQzVCLE1BQU0sRUFBRVUsTUFBTSxFQUFFLEdBQUdMLDhEQUFhQSxDQUFDd0I7SUFDakMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUc5QiwrQ0FBUUEsQ0FBQztJQUU3QyxNQUFNK0Isa0JBQWtCYixTQUFTO1FBQy9CUztRQUNBRyxjQUFjLFFBQVEsOENBQThDO0lBQ3RFLEdBQUc7SUFFSCxNQUFNRSxlQUFlO1FBQ25CLElBQUksQ0FBQ0gsWUFBWTtZQUNmLGdDQUFnQztZQUNoQ0MsY0FBYyxPQUFPLG9EQUFvRDtZQUN6RUMsbUJBQW1CLGdDQUFnQztRQUNyRDtJQUNGO0lBRUEscUJBQ0UsOERBQUM5QixpREFBTUEsQ0FBQ2dDLEdBQUc7UUFDVEMsU0FBUztRQUNUQyxTQUFTVCxTQUFTLFNBQVM7UUFDM0JVLFFBQVEzQjtRQUNSNEIsS0FBS1Q7OzBCQUVMLDhEQUFDM0IsaURBQU1BLENBQUNxQyxHQUFHO2dCQUFDQyxXQUFVO2dCQUFjQyxVQUFVakM7Ozs7OzswQkFDOUMsOERBQUNELG1EQUFVQTs7Ozs7MEJBQ1gsOERBQUNELG1EQUFVQTtnQkFBQ29DLFFBQVFUO2dCQUFjVSxVQUFVYjs7Ozs7Ozs7Ozs7O0FBR2xEO0dBL0JNSjs7UUFDeUJ0QixtREFBUUE7UUFFbEJDLDBEQUFhQTs7O0tBSDVCcUI7QUFpQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBzL01lbnUvRXhhbXBsZS5qcz84MzNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgbW90aW9uLCBzeW5jLCB1c2VDeWNsZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VEaW1lbnNpb25zIH0gZnJvbSBcIi4vdXNlLWRpbWVuc2lvbnNcIjtcbmltcG9ydCB7IE1lbnVUb2dnbGUgfSBmcm9tIFwiLi9NZW51VG9nZ2xlXCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcIi4vTmF2aWdhdGlvblwiO1xuXG5jb25zdCBzaWRlYmFyID0ge1xuICBvcGVuOiAoaGVpZ2h0ID0gMTAwMCkgPT4gKHtcbiAgICBjbGlwUGF0aDogYGNpcmNsZSgke2hlaWdodCAqIDIgKyAyMDB9cHggYXQgNDBweCA0MHB4KWAsXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgIHN0aWZmbmVzczogMjAsXG4gICAgICByZXN0RGVsdGE6IDIsXG4gICAgfSxcbiAgfSksXG4gIGNsb3NlZDoge1xuICAgIGNsaXBQYXRoOiBcImNpcmNsZSgzMHB4IGF0IDQwcHggNDBweClcIixcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICBkZWxheTogMC41LFxuICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgIHN0aWZmbmVzczogNDAwLFxuICAgICAgZGFtcGluZzogNDAsXG4gICAgfSxcbiAgfSxcbn07XG5cbmNvbnN0IGRlYm91bmNlID0gKGZ1bmMsIGRlbGF5KSA9PiB7XG4gIGxldCB0aW1lb3V0SWQ7XG4gIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4gZnVuYy5hcHBseSh0aGlzLCBhcmdzKSwgZGVsYXkpO1xuICB9O1xufTtcblxuY29uc3QgRXhhbXBsZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzT3BlbiwgdG9nZ2xlT3Blbl0gPSB1c2VDeWNsZShmYWxzZSwgdHJ1ZSk7XG4gIGNvbnN0IGNvbnRhaW5lclJlZiA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgeyBoZWlnaHQgfSA9IHVzZURpbWVuc2lvbnMoY29udGFpbmVyUmVmKTtcbiAgY29uc3QgW2lzVG9nZ2xpbmcsIHNldElzVG9nZ2xpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGRlYm91bmNlZFRvZ2dsZSA9IGRlYm91bmNlKCgpID0+IHtcbiAgICB0b2dnbGVPcGVuKCk7XG4gICAgc2V0SXNUb2dnbGluZyhmYWxzZSk7IC8vIFJlc2V0IGlzVG9nZ2xpbmcgc3RhdGUgYWZ0ZXIgZGVib3VuY2UgZGVsYXlcbiAgfSwgMzAwKTtcblxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgaWYgKCFpc1RvZ2dsaW5nKSB7XG4gICAgICAvLyBDaGVjayBpZiBub3QgYWxyZWFkeSB0b2dnbGluZ1xuICAgICAgc2V0SXNUb2dnbGluZyh0cnVlKTsgLy8gU2V0IGlzVG9nZ2xpbmcgdG8gdHJ1ZSB0byBpbmRpY2F0ZSB0b2dnbGUgc3RhcnRlZFxuICAgICAgZGVib3VuY2VkVG9nZ2xlKCk7IC8vIENhbGwgZGVib3VuY2VkVG9nZ2xlIGZ1bmN0aW9uXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5uYXZcbiAgICAgIGluaXRpYWw9e2ZhbHNlfVxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gXCJvcGVuXCIgOiBcImNsb3NlZFwifVxuICAgICAgY3VzdG9tPXtoZWlnaHR9XG4gICAgICByZWY9e2NvbnRhaW5lclJlZn1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kMVwiIHZhcmlhbnRzPXtzaWRlYmFyfSAvPlxuICAgICAgPE5hdmlnYXRpb24gLz5cbiAgICAgIDxNZW51VG9nZ2xlIHRvZ2dsZT17aGFuZGxlVG9nZ2xlfSBkaXNhYmxlZD17aXNUb2dnbGluZ30gLz5cbiAgICA8L21vdGlvbi5uYXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJtb3Rpb24iLCJzeW5jIiwidXNlQ3ljbGUiLCJ1c2VEaW1lbnNpb25zIiwiTWVudVRvZ2dsZSIsIk5hdmlnYXRpb24iLCJzaWRlYmFyIiwib3BlbiIsImhlaWdodCIsImNsaXBQYXRoIiwidHJhbnNpdGlvbiIsInR5cGUiLCJzdGlmZm5lc3MiLCJyZXN0RGVsdGEiLCJjbG9zZWQiLCJkZWxheSIsImRhbXBpbmciLCJkZWJvdW5jZSIsImZ1bmMiLCJ0aW1lb3V0SWQiLCJhcmdzIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImFwcGx5IiwiRXhhbXBsZSIsImlzT3BlbiIsInRvZ2dsZU9wZW4iLCJjb250YWluZXJSZWYiLCJpc1RvZ2dsaW5nIiwic2V0SXNUb2dnbGluZyIsImRlYm91bmNlZFRvZ2dsZSIsImhhbmRsZVRvZ2dsZSIsIm5hdiIsImluaXRpYWwiLCJhbmltYXRlIiwiY3VzdG9tIiwicmVmIiwiZGl2IiwiY2xhc3NOYW1lIiwidmFyaWFudHMiLCJ0b2dnbGUiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/comps/Menu/Example.js\n"));

/***/ })

});