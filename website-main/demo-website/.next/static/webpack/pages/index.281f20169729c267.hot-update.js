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

/***/ "./pages/signin.jsx":
/*!**************************!*\
  !*** ./pages/signin.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nfunction signin() {\n    _s();\n    const [Email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [Pas, setpas] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // You could prevent the page from reloading by using preventDefault method in the event practice.\n    // function onLinkClick(e) {\n    //   e.preventDefault();\n    //   alert(Email + \"\\n\" + Pas);\n    //   setEmail(\"\");\n    //   setpas(\"\");\n    // }\n    //function onLinkClick(e) {\n    //e.preventDefault();\n    //further processing happens here\n    // }\n    // const [theme, setTheme] = useState(\"dark\");\n    // const element = document.documentElement;\n    // // console.log(theme, \"theme\");\n    // const options = [\n    //   {\n    //     icon: \"sunny\",\n    //     text: \"light\",\n    //   },\n    //   {\n    //     icon: \"moon\",\n    //     text: \"dark\",\n    //   },\n    // ];\n    // useEffect(() => {\n    //   switch (theme) {\n    //     case \"dark\":\n    //       element.classList.add(\"dark\");\n    //       break;\n    //     case \"light\":\n    //       element.classList.remove(\"dark\");\n    //       break;\n    //     default:\n    //       break;\n    //   }\n    // }, [theme]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"form h-auto dark:text-gray-100 dark:bg-slate-800 duration-100\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"light-mode fixed top-5 right-10 bg-gray-600 rounded\",\n                    children: options === null || options === void 0 ? void 0 : options.map((opt)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setTheme(opt.text),\n                            className: \"w-8 h-8 text-xl rounded-full  \".concat(theme === opt.text && \"text-sky-600\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ion-icon\", {\n                                name: opt.icon\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, this)\n                        }, opt.text, false, {\n                            fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"logo fixed top-4 h-4\",\n                    style: {\n                        background: \"url('/white.png')\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto mt-28\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: onLinkClick,\n                                className: \"space-y-4 w-96 overflow-hidden border-slate-300 h-[82vh] flex flex-col\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-4xl font-Poppins\",\n                                        children: \"Welcome Back\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-slate-500 font-medium font-Raleway dark:text-gray-100\",\n                                        children: \"Welcome back please enter your details\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                        lineNumber: 81,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"email\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"\",\n                                                    className: \"text-slate-500 font-Raleway font-medium dark:text-gray-100\",\n                                                    children: \"Email Address\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    name: \"email\",\n                                                    id: \"ema\",\n                                                    value: Email,\n                                                    autoComplete: \"off\",\n                                                    className: \"border border-gray-400 w-full font-sans rounded text-gray-800 pt-3 pb-3 placeholder:pl-5 dark:bg-slate-600 dark:border-transparent \",\n                                                    type: \"email\",\n                                                    placeholder: \"Enter your email\",\n                                                    required: true,\n                                                    onChange: (e)=>{\n                                                        setEmail(e.target.value);\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                    lineNumber: 95,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                lineNumber: 94,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"password\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                    htmlFor: \"\",\n                                                    className: \"text-slate-500 font-Raleway font-medium dark:text-gray-100\",\n                                                    children: \"Password\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                    lineNumber: 113,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                lineNumber: 112,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                    type: \"password\",\n                                                    placeholder: \"Enter your password\",\n                                                    id: \"pas\",\n                                                    value: Pas,\n                                                    name: \"password\",\n                                                    autoComplete: \"off\",\n                                                    className: \"border border-gray-400 w-full rounded text-gray-800 pt-3 pb-3 placeholder:pl-5 font-sans dark:bg-gray-600 dark:border-transparent \",\n                                                    required: true,\n                                                    onChange: (e)=>{\n                                                        setpas(e.target.value);\n                                                    }\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                    lineNumber: 121,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                lineNumber: 120,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                        lineNumber: 111,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"remember flex items-center\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"pl-2 \",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                        type: \"checkbox\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                        lineNumber: 148,\n                                                        columnNumber: 19\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"\",\n                                                        className: \"text-sm pl-2 font-Raleway font-medium dark:text-gray-600\",\n                                                        children: \"Remember me\"\n                                                    }, void 0, false, {\n                                                        fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                        lineNumber: 149,\n                                                        columnNumber: 19\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                lineNumber: 147,\n                                                columnNumber: 17\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"forget text-indigo-700 pl-12\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    href: \"\",\n                                                    className: \"font-medium text-sm font-Raleway dark:text-gray-600\",\n                                                    children: \"Forget password\"\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                    lineNumber: 158,\n                                                    columnNumber: 19\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                                lineNumber: 157,\n                                                columnNumber: 17\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                        lineNumber: 146,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"sign_in\",\n                                            className: \"bg-indigo-600 h-auto hover:drop-shadow-md dark:bg-gray-600 dark: hover:bg-rose-500 pt-2 pb-2 font-normal text-slate-300 font-Raleway w-1/2 rounded\",\n                                            children: \"Sign in\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                            lineNumber: 167,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                        lineNumber: 166,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"img w-1/2 h-20px overflow-hidden bg-indigo-300 dark:bg-slate-600 md:flex items-center justify-center hidden\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                            lineNumber: 177,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Bilal Shakeel\\\\Desktop\\\\server_mongodb_html\\\\website-main\\\\demo-website\\\\pages\\\\signin.jsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(signin, \"POGynd/4B7uVJczmlxccvSY4q+A=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (signin);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNiLDhEQUFDc0I7d0RBQU1JLE1BQUs7Ozs7OztrRUFDWiw4REFBQ047d0RBQ0NDLFNBQVE7d0RBQ1JyQixXQUFVO2tFQUNYOzs7Ozs7Ozs7Ozs7MERBS0gsOERBQUNDO2dEQUFJRCxXQUFVOzBEQUNiLDRFQUFDZ0M7b0RBQ0NDLE1BQUs7b0RBQ0xqQyxXQUFVOzhEQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztrREFLTCw4REFBQ0M7a0RBQ0MsNEVBQUNJOzRDQUNDcUIsTUFBSzs0Q0FDTDFCLFdBQVU7c0RBQ1g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBT1AsOERBQUNDOzRCQUFJRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3pCO0dBcExTTjtBQXNMVCwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zaWduaW4uanN4PzA1M2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5mdW5jdGlvbiBzaWduaW4oKSB7XHJcbiAgY29uc3QgW0VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbUGFzLCBzZXRwYXNdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIC8vIFlvdSBjb3VsZCBwcmV2ZW50IHRoZSBwYWdlIGZyb20gcmVsb2FkaW5nIGJ5IHVzaW5nIHByZXZlbnREZWZhdWx0IG1ldGhvZCBpbiB0aGUgZXZlbnQgcHJhY3RpY2UuXHJcblxyXG4gIC8vIGZ1bmN0aW9uIG9uTGlua0NsaWNrKGUpIHtcclxuICAvLyAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAvLyAgIGFsZXJ0KEVtYWlsICsgXCJcXG5cIiArIFBhcyk7XHJcblxyXG4gIC8vICAgc2V0RW1haWwoXCJcIik7XHJcbiAgLy8gICBzZXRwYXMoXCJcIik7XHJcbiAgLy8gfVxyXG5cclxuICAvL2Z1bmN0aW9uIG9uTGlua0NsaWNrKGUpIHtcclxuICAvL2UucHJldmVudERlZmF1bHQoKTtcclxuICAvL2Z1cnRoZXIgcHJvY2Vzc2luZyBoYXBwZW5zIGhlcmVcclxuICAvLyB9XHJcblxyXG4gIC8vIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJkYXJrXCIpO1xyXG4gIC8vIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcbiAgLy8gLy8gY29uc29sZS5sb2codGhlbWUsIFwidGhlbWVcIik7XHJcbiAgLy8gY29uc3Qgb3B0aW9ucyA9IFtcclxuICAvLyAgIHtcclxuICAvLyAgICAgaWNvbjogXCJzdW5ueVwiLFxyXG4gIC8vICAgICB0ZXh0OiBcImxpZ2h0XCIsXHJcbiAgLy8gICB9LFxyXG4gIC8vICAge1xyXG4gIC8vICAgICBpY29uOiBcIm1vb25cIixcclxuICAvLyAgICAgdGV4dDogXCJkYXJrXCIsXHJcbiAgLy8gICB9LFxyXG4gIC8vIF07XHJcblxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBzd2l0Y2ggKHRoZW1lKSB7XHJcbiAgLy8gICAgIGNhc2UgXCJkYXJrXCI6XHJcbiAgLy8gICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGFya1wiKTtcclxuICAvLyAgICAgICBicmVhaztcclxuXHJcbiAgLy8gICAgIGNhc2UgXCJsaWdodFwiOlxyXG4gIC8vICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgLy8gICAgICAgYnJlYWs7XHJcblxyXG4gIC8vICAgICBkZWZhdWx0OlxyXG4gIC8vICAgICAgIGJyZWFrO1xyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFt0aGVtZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZm9ybSBoLWF1dG8gZGFyazp0ZXh0LWdyYXktMTAwIGRhcms6Ymctc2xhdGUtODAwIGR1cmF0aW9uLTEwMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlnaHQtbW9kZSBmaXhlZCB0b3AtNSByaWdodC0xMCBiZy1ncmF5LTYwMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICB7b3B0aW9ucz8ubWFwKChvcHQpID0+IChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIGtleT17b3B0LnRleHR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGhlbWUob3B0LnRleHQpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctOCBoLTggdGV4dC14bCByb3VuZGVkLWZ1bGwgICR7XHJcbiAgICAgICAgICAgICAgICB0aGVtZSA9PT0gb3B0LnRleHQgJiYgXCJ0ZXh0LXNreS02MDBcIlxyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGlvbi1pY29uIG5hbWU9e29wdC5pY29ufT48L2lvbi1pY29uPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvIGZpeGVkIHRvcC00IGgtNFwiXHJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcInVybCgnL3doaXRlLnBuZycpXCIgfX1cclxuICAgICAgICA+PC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG10LTI4XCI+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9e29uTGlua0NsaWNrfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwYWNlLXktNCB3LTk2IG92ZXJmbG93LWhpZGRlbiBib3JkZXItc2xhdGUtMzAwICBoLVs4MnZoXSBmbGV4IGZsZXgtY29sXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LVBvcHBpbnNcIj5XZWxjb21lIEJhY2s8L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwICBmb250LW1lZGl1bSBmb250LVJhbGV3YXkgZGFyazp0ZXh0LWdyYXktMTAwXCI+XHJcbiAgICAgICAgICAgICAgICBXZWxjb21lIGJhY2sgcGxlYXNlIGVudGVyIHlvdXIgZGV0YWlsc1xyXG4gICAgICAgICAgICAgIDwvcD5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgZm9udC1SYWxld2F5IGZvbnQtbWVkaXVtIGRhcms6dGV4dC1ncmF5LTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFbWFpbCBBZGRyZXNzXHJcbiAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtFbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciAgYm9yZGVyLWdyYXktNDAwIHctZnVsbCAgZm9udC1zYW5zIHJvdW5kZWQgdGV4dC1ncmF5LTgwMCBwdC0zIHBiLTMgcGxhY2Vob2xkZXI6cGwtNSBkYXJrOmJnLXNsYXRlLTYwMCBkYXJrOmJvcmRlci10cmFuc3BhcmVudCAgICBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0RW1haWwoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd29yZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS01MDAgZm9udC1SYWxld2F5ICBmb250LW1lZGl1bSBkYXJrOnRleHQtZ3JheS0xMDBcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwicGFzXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17UGFzfVxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktNDAwIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3LWZ1bGwgcm91bmRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWdyYXktODAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHB0LTMgcGItM1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpwbC01XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2Fuc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpiZy1ncmF5LTYwMCAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFyazpib3JkZXItdHJhbnNwYXJlbnQgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldHBhcyhlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbWVtYmVyIGZsZXggIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwbC0yIFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zbSBwbC0yICBmb250LVJhbGV3YXkgZm9udC1tZWRpdW0gIGRhcms6dGV4dC1ncmF5LTYwMFwiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBSZW1lbWJlciBtZVxyXG4gICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JnZXQgdGV4dC1pbmRpZ28tNzAwIHBsLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zbSBmb250LVJhbGV3YXkgZGFyazp0ZXh0LWdyYXktNjAwXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEZvcmdldCBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwic2lnbl9pblwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWluZGlnby02MDAgaC1hdXRvIGhvdmVyOmRyb3Atc2hhZG93LW1kICAgZGFyazpiZy1ncmF5LTYwMCBkYXJrOiBob3ZlcjpiZy1yb3NlLTUwMCAgcHQtMiBwYi0yICBmb250LW5vcm1hbCB0ZXh0LXNsYXRlLTMwMCBmb250LVJhbGV3YXkgdy0xLzIgcm91bmRlZFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFNpZ24gaW5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZyB3LTEvMiBoLTIwcHggb3ZlcmZsb3ctaGlkZGVuIGJnLWluZGlnby0zMDAgZGFyazpiZy1zbGF0ZS02MDAgbWQ6ZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgaGlkZGVuXCI+XHJcbiAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cIlwiIHNyYz17c2lkZX0gYWx0PVwiXCIgLz4gKi99XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgc2lnbmluO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzaWduaW4iLCJFbWFpbCIsInNldEVtYWlsIiwiUGFzIiwic2V0cGFzIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsIm9wdGlvbnMiLCJtYXAiLCJvcHQiLCJidXR0b24iLCJvbkNsaWNrIiwic2V0VGhlbWUiLCJ0ZXh0IiwidGhlbWUiLCJpb24taWNvbiIsIm5hbWUiLCJpY29uIiwic3R5bGUiLCJiYWNrZ3JvdW5kIiwiZm9ybSIsIm9uU3VibWl0Iiwib25MaW5rQ2xpY2siLCJoMSIsInAiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidmFsdWUiLCJhdXRvQ29tcGxldGUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/signin.jsx\n"));

/***/ })

});