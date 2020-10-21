/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_dynamic_system_host_app2"] = self["webpackChunk_dynamic_system_host_app2"] || []).push([["src_bootstrap_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _Widget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Widget */ \"./src/Widget.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?2849\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst App = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h1\", null, \"Dynamic System Host\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"h2\", null, \"App 2\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Widget__WEBPACK_IMPORTED_MODULE_0__.default, null));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://@dynamic-system-host/app2/./src/App.js?");

/***/ }),

/***/ "./src/Widget.js":
/*!***********************!*\
  !*** ./src/Widget.js ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ App\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?2849\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _makeData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeData */ \"./src/makeData.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n // export default function Widget() {\n//   return (\n//     <div\n//       style={{\n//         borderRadius: \"4px\",\n//         padding: \"2em\",\n//         backgroundColor: \"red\",\n//         color: \"white\",\n//       }}\n//     >\n//       <h2>App 2 Widget</h2>\n//       <p>App2 Moment Dep: {moment().format(\"MMMM Do YYYY, h:mm:ss a\")}</p>\n//     </div>\n//   );\n// }\n\nconst Styles = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div`\n  padding: 1rem;\n\n  table {\n    border-spacing: 0;\n    border: 1px solid black;\n\n    tr {\n      :last-child {\n        td {\n          border-bottom: 0;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      padding: 0.5rem;\n      border-bottom: 1px solid black;\n      border-right: 1px solid black;\n\n      :last-child {\n        border-right: 0;\n      }\n    }\n  }\n`;\n\nfunction Table({\n  columns,\n  data\n}) {\n  const {\n    getTableProps,\n    getTableBodyProps,\n    headerGroups,\n    rows,\n    prepareRow,\n    state: {\n      groupBy,\n      expanded\n    }\n  } = (0,react_table__WEBPACK_IMPORTED_MODULE_1__.useTable)({\n    columns,\n    data\n  }, react_table__WEBPACK_IMPORTED_MODULE_1__.useGroupBy, react_table__WEBPACK_IMPORTED_MODULE_1__.useExpanded // useGroupBy would be pretty useless without useExpanded ;)\n  ); // We don't want to render all of the rows for this example, so cap\n  // it at 100 for this use case\n\n  const firstPageRows = rows.slice(0, 100);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"pre\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"code\", null, JSON.stringify({\n    groupBy,\n    expanded\n  }, null, 2))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Legend, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"table\", getTableProps(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"thead\", null, headerGroups.map(headerGroup => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(column => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"th\", column.getHeaderProps(), column.canGroupBy ?\n  /*#__PURE__*/\n  // If the column can be grouped, let's add a toggle\n  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", column.getGroupByToggleProps(), column.isGrouped ? '🛑 ' : '👊 ') : null, column.render('Header')))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tbody\", getTableBodyProps(), firstPageRows.map((row, i) => {\n    prepareRow(row);\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tr\", row.getRowProps(), row.cells.map(cell => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"td\", _extends({}, cell.getCellProps(), {\n        style: {\n          background: cell.isGrouped ? '#0aff0082' : cell.isAggregated ? '#ffa50078' : cell.isPlaceholder ? '#ff000042' : 'white'\n        }\n      }), cell.isGrouped ?\n      /*#__PURE__*/\n      // If it's a grouped cell, add an expander and row count\n      react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", row.getToggleRowExpandedProps(), row.isExpanded ? '👇' : '👉'), ' ', cell.render('Cell'), \" (\", row.subRows.length, \")\") : cell.isAggregated ? // If the cell is aggregated, use the Aggregated\n      // renderer for cell\n      cell.render('Aggregated') : cell.isPlaceholder ? null : // For cells with repeated values, render null\n      // Otherwise, just render the regular cell\n      cell.render('Cell'));\n    }));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Showing the first 100 results of \", rows.length, \" rows\"));\n}\n\nfunction Legend() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      padding: '0.5rem 0'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      display: 'inline-block',\n      background: '#0aff0082',\n      padding: '0.5rem'\n    }\n  }, \"Grouped\"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      display: 'inline-block',\n      background: '#ffa50078',\n      padding: '0.5rem'\n    }\n  }, \"Aggregated\"), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", {\n    style: {\n      display: 'inline-block',\n      background: '#ff000042',\n      padding: '0.5rem'\n    }\n  }, \"Repeated Value\"));\n} // This is a custom aggregator that\n// takes in an array of leaf values and\n// returns the rounded median\n\n\nfunction roundedMedian(leafValues) {\n  let min = leafValues[0] || 0;\n  let max = leafValues[0] || 0;\n  leafValues.forEach(value => {\n    min = Math.min(min, value);\n    max = Math.max(max, value);\n  });\n  return Math.round((min + max) / 2);\n}\n\nfunction App() {\n  const columns = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => [{\n    Header: 'Name',\n    columns: [{\n      Header: 'First Name',\n      accessor: 'firstName',\n      // Use a two-stage aggregator here to first\n      // count the total rows being aggregated,\n      // then sum any of those counts if they are\n      // aggregated further\n      aggregate: 'count',\n      Aggregated: ({\n        value\n      }) => `${value} Names`\n    }, {\n      Header: 'Last Name',\n      accessor: 'lastName',\n      // Use another two-stage aggregator here to\n      // first count the UNIQUE values from the rows\n      // being aggregated, then sum those counts if\n      // they are aggregated further\n      aggregate: 'uniqueCount',\n      Aggregated: ({\n        value\n      }) => `${value} Unique Names`\n    }]\n  }, {\n    Header: 'Info',\n    columns: [{\n      Header: 'Age',\n      accessor: 'age',\n      // Aggregate the average age of visitors\n      aggregate: 'average',\n      Aggregated: ({\n        value\n      }) => `${Math.round(value * 100) / 100} (avg)`\n    }, {\n      Header: 'Visits',\n      accessor: 'visits',\n      // Aggregate the sum of all visits\n      aggregate: 'sum',\n      Aggregated: ({\n        value\n      }) => `${value} (total)`\n    }, {\n      Header: 'Status',\n      accessor: 'status'\n    }, {\n      Header: 'Profile Progress',\n      accessor: 'progress',\n      // Use our custom roundedMedian aggregator\n      aggregate: roundedMedian,\n      Aggregated: ({\n        value\n      }) => `${value} (med)`\n    }]\n  }], []);\n  const data = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => (0,_makeData__WEBPACK_IMPORTED_MODULE_2__.default)(10000), []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Styles, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Table, {\n    columns: columns,\n    data: data\n  }));\n}\n\n//# sourceURL=webpack://@dynamic-system-host/app2/./src/Widget.js?");

/***/ }),

/***/ "./src/bootstrap.js":
/*!**************************!*\
  !*** ./src/bootstrap.js ***!
  \**************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App */ \"./src/App.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react?2849\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_2___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_App__WEBPACK_IMPORTED_MODULE_0__.default, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://@dynamic-system-host/app2/./src/bootstrap.js?");

/***/ }),

/***/ "./src/makeData.js":
/*!*************************!*\
  !*** ./src/makeData.js ***!
  \*************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ makeData\n/* harmony export */ });\n/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! namor */ \"./node_modules/namor/dist/index.js\");\n/* harmony import */ var namor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(namor__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst range = len => {\n  const arr = [];\n\n  for (let i = 0; i < len; i++) {\n    arr.push(i);\n  }\n\n  return arr;\n};\n\nconst newPerson = () => {\n  const statusChance = Math.random();\n  return {\n    firstName: namor__WEBPACK_IMPORTED_MODULE_0___default().generate({\n      words: 1,\n      numbers: 0\n    }),\n    lastName: namor__WEBPACK_IMPORTED_MODULE_0___default().generate({\n      words: 1,\n      numbers: 0\n    }),\n    age: Math.floor(Math.random() * 30),\n    visits: Math.floor(Math.random() * 100),\n    progress: Math.floor(Math.random() * 100),\n    status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single'\n  };\n};\n\nfunction makeData(...lens) {\n  const makeDataLevel = (depth = 0) => {\n    const len = lens[depth];\n    return range(len).map(d => {\n      return { ...newPerson(),\n        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined\n      };\n    });\n  };\n\n  return makeDataLevel();\n}\n\n//# sourceURL=webpack://@dynamic-system-host/app2/./src/makeData.js?");

/***/ }),

/***/ "?e7a9":
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://@dynamic-system-host/app2/buffer_(ignored)?");

/***/ }),

/***/ "?8465":
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://@dynamic-system-host/app2/crypto_(ignored)?");

/***/ }),

/***/ "?0bed":
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://@dynamic-system-host/app2/util_(ignored)?");

/***/ })

}]);