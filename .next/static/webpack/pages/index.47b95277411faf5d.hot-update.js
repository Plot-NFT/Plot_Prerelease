/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[6].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[6].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[4]!./components/Header/Header.module.scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[6].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[6].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[4]!./components/Header/Header.module.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Header_header__Z8PUO {\\n  padding: 0.75rem 1rem;\\n  width: 90%;\\n  height: 80px;\\n}\\n.Header_header__Z8PUO img {\\n  height: 100%;\\n}\\n.Header_header__Z8PUO img:hover {\\n  cursor: pointer;\\n  -webkit-animation-name: Header_pin__TM8Cv;\\n          animation-name: Header_pin__TM8Cv;\\n  -webkit-animation-duration: 1s;\\n          animation-duration: 1s;\\n}\\n\\n.Header_wrapper__KxwYn {\\n  background: #789971;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.Header_button__fzu3_ {\\n  border-radius: 20px;\\n  background: #231f20;\\n  border: 0;\\n  width: 300px;\\n  padding: 0.5rem 1rem;\\n  color: #fafafa;\\n}\\n\\n.Header_button__fzu3_:hover {\\n  background: #141212;\\n  cursor: pointer;\\n}\\n\\n@-webkit-keyframes Header_pin__TM8Cv {\\n  50% {\\n    -webkit-transform: rotate(-26deg);\\n            transform: rotate(-26deg);\\n  }\\n  75% {\\n    -webkit-transform: translateY(-10%);\\n            transform: translateY(-10%);\\n  }\\n  100% {\\n    -webkit-transform: translateY(0%);\\n            transform: translateY(0%);\\n  }\\n}\\n\\n@keyframes Header_pin__TM8Cv {\\n  50% {\\n    -webkit-transform: rotate(-26deg);\\n            transform: rotate(-26deg);\\n  }\\n  75% {\\n    -webkit-transform: translateY(-10%);\\n            transform: translateY(-10%);\\n  }\\n  100% {\\n    -webkit-transform: translateY(0%);\\n            transform: translateY(0%);\\n  }\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://Header.module.scss\",\"webpack://../../scss/_variable.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,qBAAA;EACA,UAAA;EACA,YAAA;AADF;AAGE;EACE,YAAA;AADJ;AAIE;EACE,eAAA;EACA,yCAAA;UAAA,iCAAA;EACA,8BAAA;UAAA,sBAAA;AAFJ;;AAMA;EACE,mBCnBW;EDoBX,aAAA;EACA,uBAAA;AAHF;;AAMA;EACE,mBAAA;EACA,mBCxBY;EDyBZ,SAAA;EACA,YAAA;EACA,oBAAA;EACA,cCtBe;ADmBjB;;AAMA;EACE,mBC/BkB;EDgClB,eAAA;AAHF;;AAMA;EACE;IACE,iCAAA;YAAA,yBAAA;EAHF;EAKA;IACE,mCAAA;YAAA,2BAAA;EAHF;EAKA;IACE,iCAAA;YAAA,yBAAA;EAHF;AACF;;AANA;EACE;IACE,iCAAA;YAAA,yBAAA;EAHF;EAKA;IACE,mCAAA;YAAA,2BAAA;EAHF;EAKA;IACE,iCAAA;YAAA,yBAAA;EAHF;AACF\",\"sourcesContent\":[\"@use \\\"../../scss/variable\\\";\\n\\n.header {\\n  padding: 0.75rem 1rem;\\n  width: 90%;\\n  height: 80px;\\n\\n  img {\\n    height: 100%;\\n  }\\n\\n  img:hover {\\n    cursor: pointer;\\n    animation-name: pin;\\n    animation-duration: 1s;\\n  }\\n}\\n\\n.wrapper {\\n  background: variable.$bg-primary;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.button {\\n  border-radius: 20px;\\n  background: variable.$btn-primary;\\n  border: 0;\\n  width: 300px;\\n  padding: 0.5rem 1rem;\\n  color: variable.$text-secondary;\\n}\\n\\n.button:hover {\\n  background: variable.$btn-primary-hover;\\n  cursor: pointer;\\n}\\n\\n@keyframes pin {\\n  50% {\\n    transform: rotate(-26deg);\\n  }\\n  75% {\\n    transform: translateY(-10%);\\n  }\\n  100% {\\n    transform: translateY(0%);\\n  }\\n}\\n\",\"$bg-primary: #789971;\\n$bg-secondary: #231f20;\\n$btn-primary: #231f20;\\n$btn-primary-hover: #141212;\\n$btn-primary-disabled: #231f2081;\\n$font-family: \\\"Poppins\\\", sans-serif;\\n$font-size: 16px;\\n$text-primary: #1f1f1f;\\n$text-secondary: #fafafa;\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"header\": \"Header_header__Z8PUO\",\n\t\"pin\": \"Header_pin__TM8Cv\",\n\t\"wrapper\": \"Header_wrapper__KxwYn\",\n\t\"button\": \"Header_button__fzu3_\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzNdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9zYXNzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzRdIS4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLm1vZHVsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0tBQWtGO0FBQzVIO0FBQ0E7QUFDQSxpRUFBaUUsMEJBQTBCLGVBQWUsaUJBQWlCLEdBQUcsNkJBQTZCLGlCQUFpQixHQUFHLG1DQUFtQyxvQkFBb0IsOENBQThDLDhDQUE4QyxtQ0FBbUMsbUNBQW1DLEdBQUcsNEJBQTRCLHdCQUF3QixrQkFBa0IsNEJBQTRCLEdBQUcsMkJBQTJCLHdCQUF3Qix3QkFBd0IsY0FBYyxpQkFBaUIseUJBQXlCLG1CQUFtQixHQUFHLGlDQUFpQyx3QkFBd0Isb0JBQW9CLEdBQUcsMENBQTBDLFNBQVMsd0NBQXdDLHdDQUF3QyxLQUFLLFNBQVMsMENBQTBDLDBDQUEwQyxLQUFLLFVBQVUsd0NBQXdDLHdDQUF3QyxLQUFLLEdBQUcsa0NBQWtDLFNBQVMsd0NBQXdDLHdDQUF3QyxLQUFLLFNBQVMsMENBQTBDLDBDQUEwQyxLQUFLLFVBQVUsd0NBQXdDLHdDQUF3QyxLQUFLLEdBQUcsT0FBTyx5SEFBeUgsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsWUFBWSxXQUFXLFVBQVUsV0FBVyxXQUFXLFFBQVEsS0FBSyxhQUFhLFlBQVksTUFBTSxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsS0FBSyxzREFBc0QsYUFBYSwwQkFBMEIsZUFBZSxpQkFBaUIsV0FBVyxtQkFBbUIsS0FBSyxpQkFBaUIsc0JBQXNCLDBCQUEwQiw2QkFBNkIsS0FBSyxHQUFHLGNBQWMscUNBQXFDLGtCQUFrQiw0QkFBNEIsR0FBRyxhQUFhLHdCQUF3QixzQ0FBc0MsY0FBYyxpQkFBaUIseUJBQXlCLG9DQUFvQyxHQUFHLG1CQUFtQiw0Q0FBNEMsb0JBQW9CLEdBQUcsb0JBQW9CLFNBQVMsZ0NBQWdDLEtBQUssU0FBUyxrQ0FBa0MsS0FBSyxVQUFVLGdDQUFnQyxLQUFLLEdBQUcsMEJBQTBCLHlCQUF5Qix3QkFBd0IsOEJBQThCLG1DQUFtQyx3Q0FBd0MsbUJBQW1CLHlCQUF5QiwyQkFBMkIscUJBQXFCO0FBQ2gvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSGVhZGVyL0hlYWRlci5tb2R1bGUuc2Nzcz82OGNmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuSGVhZGVyX2hlYWRlcl9fWjhQVU8ge1xcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogODBweDtcXG59XFxuLkhlYWRlcl9oZWFkZXJfX1o4UFVPIGltZyB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5IZWFkZXJfaGVhZGVyX19aOFBVTyBpbWc6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogSGVhZGVyX3Bpbl9fVE04Q3Y7XFxuICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBIZWFkZXJfcGluX19UTThDdjtcXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG59XFxuXFxuLkhlYWRlcl93cmFwcGVyX19LeHdZbiB7XFxuICBiYWNrZ3JvdW5kOiAjNzg5OTcxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uSGVhZGVyX2J1dHRvbl9fZnp1M18ge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6ICMyMzFmMjA7XFxuICBib3JkZXI6IDA7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG4uSGVhZGVyX2J1dHRvbl9fZnp1M186aG92ZXIge1xcbiAgYmFja2dyb3VuZDogIzE0MTIxMjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIEhlYWRlcl9waW5fX1RNOEN2IHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTI2ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjZkZWcpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIEhlYWRlcl9waW5fX1RNOEN2IHtcXG4gIDUwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTI2ZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMjZkZWcpO1xcbiAgfVxcbiAgNzUlIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMCUpO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xcbiAgfVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vSGVhZGVyLm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi4vLi4vc2Nzcy9fdmFyaWFibGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFERjtBQUdFO0VBQ0UsWUFBQTtBQURKO0FBSUU7RUFDRSxlQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7QUFGSjs7QUFNQTtFQUNFLG1CQ25CVztFRG9CWCxhQUFBO0VBQ0EsdUJBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsbUJDeEJZO0VEeUJaLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQ3RCZTtBRG1CakI7O0FBTUE7RUFDRSxtQkMvQmtCO0VEZ0NsQixlQUFBO0FBSEY7O0FBTUE7RUFDRTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUFIRjtFQUtBO0lBQ0UsbUNBQUE7WUFBQSwyQkFBQTtFQUhGO0VBS0E7SUFDRSxpQ0FBQTtZQUFBLHlCQUFBO0VBSEY7QUFDRjs7QUFOQTtFQUNFO0lBQ0UsaUNBQUE7WUFBQSx5QkFBQTtFQUhGO0VBS0E7SUFDRSxtQ0FBQTtZQUFBLDJCQUFBO0VBSEY7RUFLQTtJQUNFLGlDQUFBO1lBQUEseUJBQUE7RUFIRjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4uLy4uL3Njc3MvdmFyaWFibGVcXFwiO1xcblxcbi5oZWFkZXIge1xcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogODBweDtcXG5cXG4gIGltZyB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gIH1cXG5cXG4gIGltZzpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYW5pbWF0aW9uLW5hbWU6IHBpbjtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcXG4gIH1cXG59XFxuXFxuLndyYXBwZXIge1xcbiAgYmFja2dyb3VuZDogdmFyaWFibGUuJGJnLXByaW1hcnk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5idXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IHZhcmlhYmxlLiRidG4tcHJpbWFyeTtcXG4gIGJvcmRlcjogMDtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xcbiAgY29sb3I6IHZhcmlhYmxlLiR0ZXh0LXNlY29uZGFyeTtcXG59XFxuXFxuLmJ1dHRvbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXJpYWJsZS4kYnRuLXByaW1hcnktaG92ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbkBrZXlmcmFtZXMgcGluIHtcXG4gIDUwJSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC0yNmRlZyk7XFxuICB9XFxuICA3NSUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwJSk7XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcXG4gIH1cXG59XFxuXCIsXCIkYmctcHJpbWFyeTogIzc4OTk3MTtcXG4kYmctc2Vjb25kYXJ5OiAjMjMxZjIwO1xcbiRidG4tcHJpbWFyeTogIzIzMWYyMDtcXG4kYnRuLXByaW1hcnktaG92ZXI6ICMxNDEyMTI7XFxuJGJ0bi1wcmltYXJ5LWRpc2FibGVkOiAjMjMxZjIwODE7XFxuJGZvbnQtZmFtaWx5OiBcXFwiUG9wcGluc1xcXCIsIHNhbnMtc2VyaWY7XFxuJGZvbnQtc2l6ZTogMTZweDtcXG4kdGV4dC1wcmltYXJ5OiAjMWYxZjFmO1xcbiR0ZXh0LXNlY29uZGFyeTogI2ZhZmFmYTtcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX19aOFBVT1wiLFxuXHRcInBpblwiOiBcIkhlYWRlcl9waW5fX1RNOEN2XCIsXG5cdFwid3JhcHBlclwiOiBcIkhlYWRlcl93cmFwcGVyX19LeHdZblwiLFxuXHRcImJ1dHRvblwiOiBcIkhlYWRlcl9idXR0b25fX2Z6dTNfXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[6].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[6].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[4]!./components/Header/Header.module.scss\n");

/***/ })

});