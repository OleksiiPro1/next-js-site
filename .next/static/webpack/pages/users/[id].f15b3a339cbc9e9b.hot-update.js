"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ User; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/user.module.scss */ \"./styles/user.module.scss\");\n/* harmony import */ var _styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction User(param) {\n    var user = param.user;\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)().query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_user_module_scss__WEBPACK_IMPORTED_MODULE_2___default().user),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \"User with id \",\n                    query.id\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ukrto\\\\projects\\\\next-js-site\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"User name - \",\n                    query.name\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ukrto\\\\projects\\\\next-js-site\\\\pages\\\\users\\\\[id].js\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ukrto\\\\projects\\\\next-js-site\\\\pages\\\\users\\\\[id].js\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n_s(User, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = User;\nvar _c;\n$RefreshReg$(_c, \"User\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDVztBQUVwQyxTQUFTRSxJQUFJLENBQUMsS0FBUSxFQUFFO1FBQVYsSUFBTSxHQUFOLEtBQVEsQ0FBTkMsSUFBSTs7SUFDakMsSUFBTSxLQUFPLEdBQUtILHNEQUFTLEVBQUUsQ0FBckJJLEtBQUs7SUFDYixxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVMLHNFQUFXOzswQkFDekIsOERBQUNNLElBQUU7O29CQUFDLGVBQWE7b0JBQUNILEtBQUssQ0FBQ0ksRUFBRTs7Ozs7O29CQUFNOzBCQUNoQyw4REFBQ0gsS0FBRzs7b0JBQUMsY0FBWTtvQkFBQ0QsS0FBSyxDQUFDSyxJQUFJOzs7Ozs7b0JBQU87Ozs7OztZQUMvQixDQUNOO0FBQ0osQ0FBQztHQVJ1QlAsSUFBSTs7UUFDUkYsa0RBQVM7OztBQURMRSxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXJzL1tpZF0uanM/MTc4NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3VzZXIubW9kdWxlLnNjc3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIgfSkge1xyXG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVzZXJ9PlxyXG4gICAgICA8aDE+VXNlciB3aXRoIGlkIHtxdWVyeS5pZH08L2gxPlxyXG4gICAgICA8ZGl2PlVzZXIgbmFtZSAtIHtxdWVyeS5uYW1lfTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwic3R5bGVzIiwiVXNlciIsInVzZXIiLCJxdWVyeSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiaWQiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/[id].js\n"));

/***/ })

});