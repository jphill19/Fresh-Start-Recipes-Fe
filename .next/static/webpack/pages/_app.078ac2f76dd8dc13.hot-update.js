"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/header/header.component.jsx":
/*!************************************************!*\
  !*** ./components/header/header.component.jsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_StoreLocationContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/StoreLocationContext */ \"./context/StoreLocationContext.js\");\n/* harmony import */ var _search_box_searchBox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../search-box/searchBox.component */ \"./components/search-box/searchBox.component.jsx\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header() {\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_6__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), 2), showSearch = _useState[0], setShowSearch = _useState[1];\n    var locationData = (0,_context_StoreLocationContext__WEBPACK_IMPORTED_MODULE_4__.useStoreLocation)().locationData;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var isHomePage = router.asPath === '/';\n    var toggleSearch = function() {\n        setShowSearch(!showSearch);\n    };\n    var handleHomeClick = function() {\n        router.push('/');\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"Header.useEffect\": function() {\n            if (!isHomePage) {\n                setShowSearch(false);\n            }\n        }\n    }[\"Header.useEffect\"], [\n        isHomePage\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n            className: \"bg-white  border-b-2 border-orange-400 p-1 py-2 md:rounded-none\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"flex items-center justify-between px-0 md:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center flex-1 justify-start\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"/site-logo.png\",\n                                    alt: \"Site Logo\",\n                                    className: \"max-w-[220px] md:max-w-[300px]\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                lineNumber: 34,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center justify-end \".concat(locationData.name ? 'gap-2' : 'gap-6'),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: \"/location\",\n                                    className: \"flex items-center gap-1 cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/geo-alt-fill.svg\",\n                                            alt: \"location-icon\",\n                                            className: \"w-7 h-7 md:w-12 md:h-12\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        locationData.name && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-xs text-gray-500 truncate max-w-[60px] md:max-w-[120px]\",\n                                            children: locationData.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                isHomePage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-0 m-0 bg-transparent border-none outline-none cursor-pointer flex-shrink-0\",\n                                    onClick: toggleSearch,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/search.svg\",\n                                        alt: \"search-icon\",\n                                        className: \"w-7 h-7 md:w-12 md:h-12 \".concat(showSearch ? 'animate-rotateOnce' : '')\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"p-0 m-0 bg-transparent border-none outline-none cursor-pointer flex-shrink-0\",\n                                    onClick: handleHomeClick,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: \"/house.svg\",\n                                        alt: \"home-icon\",\n                                        className: \"w-7 h-7 md:w-12 md:h-12\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                        lineNumber: 83,\n                                        columnNumber: 17\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                                    lineNumber: 79,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_search_box_searchBox_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    showSearch: showSearch,\n                    toggleSearch: toggleSearch\n                }, void 0, false, {\n                    fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/johnhill/Documents/mod_3/fresh-start-recipes/fresh-start-recipes-fe/components/header/header.component.jsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"dvsapWHgH0eCCt4Szhepqj93GQA=\", false, function() {\n    return [\n        _context_StoreLocationContext__WEBPACK_IMPORTED_MODULE_4__.useStoreLocation,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Header;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBcUQ7QUFDZDtBQUNYO0FBQ3lDO0FBQ1o7QUFFekQsU0FBU087O0lBQ1AsSUFBb0NOLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxZQUF0Q08sYUFBNkJQLGNBQWpCUSxnQkFBaUJSO0lBQ3BDLElBQU0sZUFBbUJJLCtFQUFnQkEsR0FBakNLO0lBQ1IsSUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCLElBQU1TLGFBQWFELE9BQU9FLE1BQU0sS0FBSztJQUVyQyxJQUFNQyxlQUFlO1FBQ25CTCxjQUFjLENBQUNEO0lBQ2pCO0lBRUEsSUFBTU8sa0JBQWtCO1FBQ3RCSixPQUFPSyxJQUFJLENBQUM7SUFDZDtJQUVBZCxnREFBU0E7NEJBQUM7WUFDUixJQUFJLENBQUNVLFlBQVk7Z0JBQ2ZILGNBQWM7WUFDaEI7UUFDRjsyQkFBRztRQUFDRztLQUFXO0lBRWYscUJBQ0UsOERBQUNaLDJDQUFRQTtrQkFDUCw0RUFBQ2lCO1lBQU9DLFdBQVU7OzhCQUNoQiw4REFBQ0M7b0JBQUlELFdBQVU7O3NDQUViLDhEQUFDRTs0QkFBSUYsV0FBVTtzQ0FDYiw0RUFBQ2Qsa0RBQUlBO2dDQUFDaUIsTUFBSzswQ0FDVCw0RUFBQ0M7b0NBQ0NDLEtBQUk7b0NBQ0pDLEtBQUk7b0NBQ0pOLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBTWhCLDhEQUFDRTs0QkFDQ0YsV0FBVyxpQ0FFVixPQURDUixhQUFhZSxJQUFJLEdBQUcsVUFBVTs7OENBR2hDLDhEQUFDckIsa0RBQUlBO29DQUNIaUIsTUFBSztvQ0FDTEgsV0FBVTs7c0RBRVYsOERBQUNJOzRDQUNDQyxLQUFJOzRDQUNKQyxLQUFJOzRDQUNKTixXQUFVOzs7Ozs7d0NBRVhSLGFBQWFlLElBQUksa0JBQ2hCLDhEQUFDQzs0Q0FBS1IsV0FBVTtzREFDYlIsYUFBYWUsSUFBSTs7Ozs7Ozs7Ozs7O2dDQUt2QmIsMkJBQ0MsOERBQUNlO29DQUNDVCxXQUFVO29DQUNWVSxTQUFTZDs4Q0FFVCw0RUFBQ1E7d0NBQ0NDLEtBQUk7d0NBQ0pDLEtBQUk7d0NBQ0pOLFdBQVcsMkJBRVYsT0FEQ1YsYUFBYSx1QkFBdUI7Ozs7Ozs7Ozs7eURBSzFDLDhEQUFDbUI7b0NBQ0NULFdBQVU7b0NBQ1ZVLFNBQVNiOzhDQUVULDRFQUFDTzt3Q0FDQ0MsS0FBSTt3Q0FDSkMsS0FBSTt3Q0FDSk4sV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBT3BCLDhEQUFDWix1RUFBU0E7b0JBQUNFLFlBQVlBO29CQUFZTSxjQUFjQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekQ7R0ExRlNQOztRQUVrQkYsMkVBQWdCQTtRQUMxQkYsa0RBQVNBOzs7S0FIakJJO0FBNEZULGlFQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyIvVXNlcnMvam9obmhpbGwvRG9jdW1lbnRzL21vZF8zL2ZyZXNoLXN0YXJ0LXJlY2lwZXMvZnJlc2gtc3RhcnQtcmVjaXBlcy1mZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyB1c2VTdG9yZUxvY2F0aW9uIH0gZnJvbSAnLi4vLi4vY29udGV4dC9TdG9yZUxvY2F0aW9uQ29udGV4dCdcbmltcG9ydCBTZWFyY2hCb3ggZnJvbSAnLi4vc2VhcmNoLWJveC9zZWFyY2hCb3guY29tcG9uZW50J1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IFtzaG93U2VhcmNoLCBzZXRTaG93U2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCB7IGxvY2F0aW9uRGF0YSB9ID0gdXNlU3RvcmVMb2NhdGlvbigpXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgaXNIb21lUGFnZSA9IHJvdXRlci5hc1BhdGggPT09ICcvJ1xuXG4gIGNvbnN0IHRvZ2dsZVNlYXJjaCA9ICgpID0+IHtcbiAgICBzZXRTaG93U2VhcmNoKCFzaG93U2VhcmNoKVxuICB9XG5cbiAgY29uc3QgaGFuZGxlSG9tZUNsaWNrID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKCcvJylcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFpc0hvbWVQYWdlKSB7XG4gICAgICBzZXRTaG93U2VhcmNoKGZhbHNlKVxuICAgIH1cbiAgfSwgW2lzSG9tZVBhZ2VdKVxuXG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJiZy13aGl0ZSAgYm9yZGVyLWItMiBib3JkZXItb3JhbmdlLTQwMCBwLTEgcHktMiBtZDpyb3VuZGVkLW5vbmVcIj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMCBtZDpweC04XCI+XG4gICAgICAgICAgey8qIExlZnQgU2lkZTogTG9nbyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGZsZXgtMSBqdXN0aWZ5LXN0YXJ0XCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPVwiL3NpdGUtbG9nby5wbmdcIlxuICAgICAgICAgICAgICAgIGFsdD1cIlNpdGUgTG9nb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWF4LXctWzIyMHB4XSBtZDptYXgtdy1bMzAwcHhdXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBSaWdodCBTaWRlOiBMb2NhdGlvbiBhbmQgU2VhcmNoL0hvbWUgQnV0dG9uICovfVxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kICR7XG4gICAgICAgICAgICAgIGxvY2F0aW9uRGF0YS5uYW1lID8gJ2dhcC0yJyA6ICdnYXAtNidcbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGhyZWY9XCIvbG9jYXRpb25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMSBjdXJzb3ItcG9pbnRlciB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0yMDAgZWFzZS1pbi1vdXQgaG92ZXI6c2NhbGUtMTA1XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cIi9nZW8tYWx0LWZpbGwuc3ZnXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJsb2NhdGlvbi1pY29uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03IG1kOnctMTIgbWQ6aC0xMlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtsb2NhdGlvbkRhdGEubmFtZSAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXktNTAwIHRydW5jYXRlIG1heC13LVs2MHB4XSBtZDptYXgtdy1bMTIwcHhdXCI+XG4gICAgICAgICAgICAgICAgICB7bG9jYXRpb25EYXRhLm5hbWV9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICB7aXNIb21lUGFnZSA/IChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMCBtLTAgYmctdHJhbnNwYXJlbnQgYm9yZGVyLW5vbmUgb3V0bGluZS1ub25lIGN1cnNvci1wb2ludGVyIGZsZXgtc2hyaW5rLTBcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNlYXJjaH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9zZWFyY2guc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInNlYXJjaC1pY29uXCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHctNyBoLTcgbWQ6dy0xMiBtZDpoLTEyICR7XG4gICAgICAgICAgICAgICAgICAgIHNob3dTZWFyY2ggPyAnYW5pbWF0ZS1yb3RhdGVPbmNlJyA6ICcnXG4gICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwLTAgbS0wIGJnLXRyYW5zcGFyZW50IGJvcmRlci1ub25lIG91dGxpbmUtbm9uZSBjdXJzb3ItcG9pbnRlciBmbGV4LXNocmluay0wXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVIb21lQ2xpY2t9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9XCIvaG91c2Uuc3ZnXCJcbiAgICAgICAgICAgICAgICAgIGFsdD1cImhvbWUtaWNvblwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgaC03IG1kOnctMTIgbWQ6aC0xMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8U2VhcmNoQm94IHNob3dTZWFyY2g9e3Nob3dTZWFyY2h9IHRvZ2dsZVNlYXJjaD17dG9nZ2xlU2VhcmNofSAvPlxuICAgICAgPC9oZWFkZXI+XG4gICAgPC9GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiTGluayIsInVzZVN0b3JlTG9jYXRpb24iLCJTZWFyY2hCb3giLCJIZWFkZXIiLCJzaG93U2VhcmNoIiwic2V0U2hvd1NlYXJjaCIsImxvY2F0aW9uRGF0YSIsInJvdXRlciIsImlzSG9tZVBhZ2UiLCJhc1BhdGgiLCJ0b2dnbGVTZWFyY2giLCJoYW5kbGVIb21lQ2xpY2siLCJwdXNoIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibmF2IiwiZGl2IiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsIm5hbWUiLCJzcGFuIiwiYnV0dG9uIiwib25DbGljayJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/header/header.component.jsx\n"));

/***/ })

});