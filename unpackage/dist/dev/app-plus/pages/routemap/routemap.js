"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/*!**********************************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/main.js?{"type":"appStyle"} ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("Vue.prototype.__$appStyle__ = {}\nVue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkRBQTJELG1CQUFPLENBQUMsa0RBQTJDIiwiZmlsZSI6IjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18gPSB7fVxuVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIikuZGVmYXVsdCxWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!**********************************************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/editcode/vue/HbuilderProject/Logistics/App.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "round": {
    "borderRadius": "5000upx"
  },
  "radius": {
    "borderRadius": "6upx"
  },
  "response": {
    "width": 100
  },
  "switch-sex": {
    "content::after": "\"\\e71c\"",
    "content::before": "\"\\e71a\""
  },
  "solid": {
    "position": "relative",
    "content::after": "\" \"",
    "width::after": 200,
    "height::after": 200,
    "position::after": "absolute",
    "top::after": 0,
    "left::after": 0,
    "transform::after": "scale(0.5)",
    "transformOrigin::after": "0 0",
    "pointerEvents::after": "none",
    "boxSizing::after": "border-box",
    "border::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-top": {
    "position": "relative",
    "content::after::after": "\" \"",
    "width::after::after": 200,
    "height::after::after": 200,
    "position::after::after": "absolute",
    "top::after::after": 0,
    "left::after::after": 0,
    "transform::after::after": "scale(0.5)",
    "transformOrigin::after::after": "0 0",
    "pointerEvents::after::after": "none",
    "boxSizing::after::after": "border-box",
    "borderTop::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-right": {
    "position": "relative",
    "content::after::after::after": "\" \"",
    "width::after::after::after": 200,
    "height::after::after::after": 200,
    "position::after::after::after": "absolute",
    "top::after::after::after": 0,
    "left::after::after::after": 0,
    "transform::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after": "0 0",
    "pointerEvents::after::after::after": "none",
    "boxSizing::after::after::after": "border-box",
    "borderRight::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-bottom": {
    "position": "relative",
    "content::after::after::after::after": "\" \"",
    "width::after::after::after::after": 200,
    "height::after::after::after::after": 200,
    "position::after::after::after::after": "absolute",
    "top::after::after::after::after": 0,
    "left::after::after::after::after": 0,
    "transform::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after": "none",
    "boxSizing::after::after::after::after": "border-box",
    "borderBottom::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solid-left": {
    "position": "relative",
    "content::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after": 200,
    "height::after::after::after::after::after": 200,
    "position::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after": 0,
    "left::after::after::after::after::after": 0,
    "transform::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after": "border-box",
    "borderLeft::after": "1upx solid rgba(0, 0, 0, 0.1)"
  },
  "solids": {
    "position": "relative",
    "content::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after": "border-box",
    "border::after": "8upx solid #eee"
  },
  "solids-top": {
    "position": "relative",
    "content::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after": "border-box",
    "borderTop::after": "8upx solid #eee"
  },
  "solids-right": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after": "border-box",
    "borderRight::after": "8upx solid #eee"
  },
  "solids-bottom": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after": "border-box",
    "borderBottom::after": "8upx solid #eee"
  },
  "solids-left": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderLeft::after": "8upx solid #eee"
  },
  "dashed": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "border::after": "1upx dashed #ddd"
  },
  "dashed-top": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderTop::after": "1upx dashed #ddd"
  },
  "dashed-right": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderRight::after": "1upx dashed #ddd"
  },
  "dashed-bottom": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderBottom::after": "1upx dashed #ddd"
  },
  "dashed-left": {
    "position": "relative",
    "content::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "\" \"",
    "width::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "height::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 200,
    "position::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "absolute",
    "top::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "left::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": 0,
    "transform::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "scale(0.5)",
    "transformOrigin::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "0 0",
    "pointerEvents::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "none",
    "boxSizing::after::after::after::after::after::after::after::after::after::after::after::after::after::after::after": "border-box",
    "borderLeft::after": "1upx dashed #ddd"
  },
  "shadow-lg": {
    "--ShadowSize": "0upx 40upx 100upx 0upx"
  },
  "shadow-warp": {
    "position": "relative",
    "boxShadow": "0 0 10upx rgba(0, 0, 0, 0.1)",
    "position:before": "absolute",
    "content:before": "\"\"",
    "top:before": "20upx",
    "bottom:before": "30upx",
    "left:before": "20upx",
    "width:before": 50,
    "boxShadow:before": "0 30upx 20upx rgba(0, 0, 0, 0.2)",
    "transform:before": "rotate(-3deg)",
    "zIndex:before": -1,
    "position:before:after": "absolute",
    "content:before:after": "\"\"",
    "top:before:after": "20upx",
    "bottom:before:after": "30upx",
    "left:before:after": "20upx",
    "width:before:after": 50,
    "boxShadow:before:after": "0 30upx 20upx rgba(0, 0, 0, 0.2)",
    "transform:before:after": "rotate(-3deg)",
    "zIndex:before:after": -1,
    "right:after": "20upx",
    "transform:after": "rotate(3deg)"
  },
  "shadow-blur": {
    "position": "relative",
    "content::before": "\"\"",
    "display::before": "block",
    "background::before": "inherit",
    "filter::before": "blur(10upx)",
    "position::before": "absolute",
    "width::before": 100,
    "height::before": 100,
    "top::before": "10upx",
    "left::before": "10upx",
    "zIndex::before": -1,
    "opacity::before": 0.4,
    "transformOrigin::before": "0 0",
    "transform::before": "scale(1, 1)"
  },
  "cu-btn": {
    "position": "relative",
    "border": "0upx",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "boxSizing": "border-box",
    "paddingTop": 0,
    "paddingRight": "30upx",
    "paddingBottom": 0,
    "paddingLeft": "30upx",
    "fontSize": "28upx",
    "height": "64upx",
    "lineHeight": 1,
    "textAlign": "center",
    "textDecoration": "none",
    "transform": "translate(0upx, 0upx)",
    "display::after": "none"
  },
  "block": {
    "display": "block"
  },
  "cu-tag": {
    "fontSize": "24upx",
    "verticalAlign": "middle",
    "position": "relative",
    "display": "inline-flex",
    "alignItems": "center",
    "justifyContent": "center",
    "boxSizing": "border-box",
    "paddingTop": "0upx",
    "paddingRight": "16upx",
    "paddingBottom": "0upx",
    "paddingLeft": "16upx",
    "height": "48upx",
    "fontFamily": "Helvetica Neue, Helvetica, sans-serif",
    "whiteSpace": "nowrap"
  },
  "cu-capsule": {
    "display": "inline-flex",
    "verticalAlign": "middle"
  },
  "cu-avatar": {
    "fontVariant": "small-caps",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "display": "inline-flex",
    "textAlign": "center",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#cccccc",
    "color": "#ffffff",
    "whiteSpace": "nowrap",
    "position": "relative",
    "width": "64upx",
    "height": "64upx",
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "verticalAlign": "middle",
    "fontSize": 1.5
  },
  "cu-avatar-group": {
    "direction": "rtl",
    "unicodeBidi": "bidi-override",
    "paddingTop": 0,
    "paddingRight": "10upx",
    "paddingBottom": 0,
    "paddingLeft": "40upx",
    "display": "inline-block"
  },
  "cu-progress": {
    "overflow": "hidden",
    "height": "28upx",
    "backgroundColor": "#ebeef5",
    "display": "inline-flex",
    "alignItems": "center",
    "width": 100
  },
  "cu-load": {
    "display": "block",
    "lineHeight": 3,
    "textAlign": "center",
    "fontFamily::before": "\"cuIcon\"",
    "display::before": "inline-block",
    "marginRight::before": "6upx"
  },
  "load-progress": {
    "pointerEvents": "none",
    "top": 0,
    "position": "fixed",
    "width": 100,
    "left": 0,
    "zIndex": 2000
  },
  "grayscale": {
    "filter": "grayscale(1)"
  },
  "cu-bar": {
    "display": "flex",
    "position": "relative",
    "alignItems": "center",
    "minHeight": "100upx",
    "justifyContent": "space-between"
  },
  "cu-tabbar-height": {
    "minHeight": "100upx"
  },
  "cu-custom": {
    "display": "block",
    "position": "relative"
  },
  "nav": {
    "whiteSpace": "nowrap"
  },
  "cu-timeline": {
    "display": "block",
    "backgroundColor": "#ffffff"
  },
  "cu-chat": {
    "display": "flex",
    "flexDirection": "column"
  },
  "cu-card": {
    "display": "block",
    "overflow": "hidden"
  },
  "cu-form-group": {
    "backgroundColor": "#ffffff",
    "paddingTop": "1upx",
    "paddingRight": "30upx",
    "paddingBottom": "1upx",
    "paddingLeft": "30upx",
    "display": "flex",
    "alignItems": "center",
    "minHeight": "100upx",
    "justifyContent": "space-between"
  },
  "cu-modal": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "zIndex": 1110,
    "opacity": 0,
    "outline": 0,
    "textAlign": "center",
    "MsTransform": "scale(1.185)",
    "transform": "scale(1.185)",
    "backfaceVisibility": "hidden",
    "perspective": "2000upx",
    "background": "rgba(0, 0, 0, 0.6)",
    "transitionDuration": 300,
    "transitionTimingFunction": "ease-in-out",
    "transitionDelay": 0,
    "pointerEvents": "none",
    "content::before": "\"\\200B\"",
    "display::before": "inline-block",
    "height::before": 100,
    "verticalAlign::before": "middle"
  },
  "@TRANSITION": {
    "cu-modal": {
      "duration": 300,
      "timingFunction": "ease-in-out",
      "delay": 0
    }
  },
  "cu-dialog": {
    "position": "relative",
    "display": "inline-block",
    "verticalAlign": "middle",
    "width": "680upx",
    "maxWidth": 100,
    "backgroundColor": "#f8f8f8",
    "borderRadius": "10upx",
    "overflow": "hidden"
  },
  "screen-swiper": {
    "minHeight": "375upx"
  },
  "card-swiper": {
    "height": "420upx"
  },
  "tower-swiper": {
    "height": "420upx",
    "position": "relative",
    "maxWidth": "750upx",
    "overflow": "hidden"
  },
  "cu-steps": {
    "display": "flex"
  },
  "flex": {
    "display": "flex"
  },
  "basis-xs": {
    "flexBasis": 20
  },
  "basis-sm": {
    "flexBasis": 40
  },
  "basis-df": {
    "flexBasis": 50
  },
  "basis-lg": {
    "flexBasis": 60
  },
  "basis-xl": {
    "flexBasis": 80
  },
  "flex-sub": {
    "flex": 1
  },
  "flex-twice": {
    "flex": 2
  },
  "flex-treble": {
    "flex": 3
  },
  "flex-direction": {
    "flexDirection": "column"
  },
  "flex-wrap": {
    "flexWrap": "wrap"
  },
  "align-start": {
    "alignItems": "flex-start"
  },
  "align-end": {
    "alignItems": "flex-end"
  },
  "align-center": {
    "alignItems": "center"
  },
  "align-stretch": {
    "alignItems": "stretch"
  },
  "self-start": {
    "alignSelf": "flex-start"
  },
  "self-center": {
    "alignSelf": "flex-center"
  },
  "self-end": {
    "alignSelf": "flex-end"
  },
  "self-stretch": {
    "alignSelf": "stretch"
  },
  "justify-start": {
    "justifyContent": "flex-start"
  },
  "justify-end": {
    "justifyContent": "flex-end"
  },
  "justify-center": {
    "justifyContent": "center"
  },
  "justify-between": {
    "justifyContent": "space-between"
  },
  "justify-around": {
    "justifyContent": "space-around"
  },
  "grid": {
    "display": "flex",
    "flexWrap": "wrap"
  },
  "margin-0": {
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0
  },
  "margin-xs": {
    "marginTop": "10upx",
    "marginRight": "10upx",
    "marginBottom": "10upx",
    "marginLeft": "10upx"
  },
  "margin-sm": {
    "marginTop": "20upx",
    "marginRight": "20upx",
    "marginBottom": "20upx",
    "marginLeft": "20upx"
  },
  "margin": {
    "marginTop": "30upx",
    "marginRight": "30upx",
    "marginBottom": "30upx",
    "marginLeft": "30upx"
  },
  "margin-lg": {
    "marginTop": "40upx",
    "marginRight": "40upx",
    "marginBottom": "40upx",
    "marginLeft": "40upx"
  },
  "margin-xl": {
    "marginTop": "50upx",
    "marginRight": "50upx",
    "marginBottom": "50upx",
    "marginLeft": "50upx"
  },
  "margin-top-xs": {
    "marginTop": "10upx"
  },
  "margin-top-sm": {
    "marginTop": "20upx"
  },
  "margin-top": {
    "marginTop": "30upx"
  },
  "margin-top-lg": {
    "marginTop": "40upx"
  },
  "margin-top-xl": {
    "marginTop": "50upx"
  },
  "margin-right-xs": {
    "marginRight": "10upx"
  },
  "margin-right-sm": {
    "marginRight": "20upx"
  },
  "margin-right": {
    "marginRight": "30upx"
  },
  "margin-right-lg": {
    "marginRight": "40upx"
  },
  "margin-right-xl": {
    "marginRight": "50upx"
  },
  "margin-bottom-xs": {
    "marginBottom": "10upx"
  },
  "margin-bottom-sm": {
    "marginBottom": "20upx"
  },
  "margin-bottom": {
    "marginBottom": "30upx"
  },
  "margin-bottom-lg": {
    "marginBottom": "40upx"
  },
  "margin-bottom-xl": {
    "marginBottom": "50upx"
  },
  "margin-left-xs": {
    "marginLeft": "10upx"
  },
  "margin-left-sm": {
    "marginLeft": "20upx"
  },
  "margin-left": {
    "marginLeft": "30upx"
  },
  "margin-left-lg": {
    "marginLeft": "40upx"
  },
  "margin-left-xl": {
    "marginLeft": "50upx"
  },
  "margin-lr-xs": {
    "marginLeft": "10upx",
    "marginRight": "10upx"
  },
  "margin-lr-sm": {
    "marginLeft": "20upx",
    "marginRight": "20upx"
  },
  "margin-lr": {
    "marginLeft": "30upx",
    "marginRight": "30upx"
  },
  "margin-lr-lg": {
    "marginLeft": "40upx",
    "marginRight": "40upx"
  },
  "margin-lr-xl": {
    "marginLeft": "50upx",
    "marginRight": "50upx"
  },
  "margin-tb-xs": {
    "marginTop": "10upx",
    "marginBottom": "10upx"
  },
  "margin-tb-sm": {
    "marginTop": "20upx",
    "marginBottom": "20upx"
  },
  "margin-tb": {
    "marginTop": "30upx",
    "marginBottom": "30upx"
  },
  "margin-tb-lg": {
    "marginTop": "40upx",
    "marginBottom": "40upx"
  },
  "margin-tb-xl": {
    "marginTop": "50upx",
    "marginBottom": "50upx"
  },
  "padding-0": {
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0
  },
  "padding-xs": {
    "paddingTop": "10upx",
    "paddingRight": "10upx",
    "paddingBottom": "10upx",
    "paddingLeft": "10upx"
  },
  "padding-sm": {
    "paddingTop": "20upx",
    "paddingRight": "20upx",
    "paddingBottom": "20upx",
    "paddingLeft": "20upx"
  },
  "padding": {
    "paddingTop": "30upx",
    "paddingRight": "30upx",
    "paddingBottom": "30upx",
    "paddingLeft": "30upx"
  },
  "padding-lg": {
    "paddingTop": "40upx",
    "paddingRight": "40upx",
    "paddingBottom": "40upx",
    "paddingLeft": "40upx"
  },
  "padding-xl": {
    "paddingTop": "50upx",
    "paddingRight": "50upx",
    "paddingBottom": "50upx",
    "paddingLeft": "50upx"
  },
  "padding-top-xs": {
    "paddingTop": "10upx"
  },
  "padding-top-sm": {
    "paddingTop": "20upx"
  },
  "padding-top": {
    "paddingTop": "30upx"
  },
  "padding-top-lg": {
    "paddingTop": "40upx"
  },
  "padding-top-xl": {
    "paddingTop": "50upx"
  },
  "padding-right-xs": {
    "paddingRight": "10upx"
  },
  "padding-right-sm": {
    "paddingRight": "20upx"
  },
  "padding-right": {
    "paddingRight": "30upx"
  },
  "padding-right-lg": {
    "paddingRight": "40upx"
  },
  "padding-right-xl": {
    "paddingRight": "50upx"
  },
  "padding-bottom-xs": {
    "paddingBottom": "10upx"
  },
  "padding-bottom-sm": {
    "paddingBottom": "20upx"
  },
  "padding-bottom": {
    "paddingBottom": "30upx"
  },
  "padding-bottom-lg": {
    "paddingBottom": "40upx"
  },
  "padding-bottom-xl": {
    "paddingBottom": "50upx"
  },
  "padding-left-xs": {
    "paddingLeft": "10upx"
  },
  "padding-left-sm": {
    "paddingLeft": "20upx"
  },
  "padding-left": {
    "paddingLeft": "30upx"
  },
  "padding-left-lg": {
    "paddingLeft": "40upx"
  },
  "padding-left-xl": {
    "paddingLeft": "50upx"
  },
  "padding-lr-xs": {
    "paddingLeft": "10upx",
    "paddingRight": "10upx"
  },
  "padding-lr-sm": {
    "paddingLeft": "20upx",
    "paddingRight": "20upx"
  },
  "padding-lr": {
    "paddingLeft": "30upx",
    "paddingRight": "30upx"
  },
  "padding-lr-lg": {
    "paddingLeft": "40upx",
    "paddingRight": "40upx"
  },
  "padding-lr-xl": {
    "paddingLeft": "50upx",
    "paddingRight": "50upx"
  },
  "padding-tb-xs": {
    "paddingTop": "10upx",
    "paddingBottom": "10upx"
  },
  "padding-tb-sm": {
    "paddingTop": "20upx",
    "paddingBottom": "20upx"
  },
  "padding-tb": {
    "paddingTop": "30upx",
    "paddingBottom": "30upx"
  },
  "padding-tb-lg": {
    "paddingTop": "40upx",
    "paddingBottom": "40upx"
  },
  "padding-tb-xl": {
    "paddingTop": "50upx",
    "paddingBottom": "50upx"
  },
  "cf": {
    "content::after": "\" \"",
    "display::after": "table",
    "content::after::before": "\" \"",
    "display::after::before": "table",
    "clear::after": "both"
  },
  "fl": {
    "float": "left"
  },
  "fr": {
    "float": "right"
  },
  "line-red": {
    "borderColor::after": "#e54d42",
    "color": "#e54d42"
  },
  "lines-red": {
    "borderColor::after::after": "#e54d42",
    "color": "#e54d42"
  },
  "line-orange": {
    "borderColor::after": "#f37b1d",
    "color": "#f37b1d"
  },
  "lines-orange": {
    "borderColor::after::after": "#f37b1d",
    "color": "#f37b1d"
  },
  "line-yellow": {
    "borderColor::after": "#fbbd08",
    "color": "#fbbd08"
  },
  "lines-yellow": {
    "borderColor::after::after": "#fbbd08",
    "color": "#fbbd08"
  },
  "line-olive": {
    "borderColor::after": "#8dc63f",
    "color": "#8dc63f"
  },
  "lines-olive": {
    "borderColor::after::after": "#8dc63f",
    "color": "#8dc63f"
  },
  "line-green": {
    "borderColor::after": "#39b54a",
    "color": "#39b54a"
  },
  "lines-green": {
    "borderColor::after::after": "#39b54a",
    "color": "#39b54a"
  },
  "line-cyan": {
    "borderColor::after": "#1cbbb4",
    "color": "#1cbbb4"
  },
  "lines-cyan": {
    "borderColor::after::after": "#1cbbb4",
    "color": "#1cbbb4"
  },
  "line-blue": {
    "borderColor::after": "#0081ff",
    "color": "#0081ff"
  },
  "lines-blue": {
    "borderColor::after::after": "#0081ff",
    "color": "#0081ff"
  },
  "line-purple": {
    "borderColor::after": "#6739b6",
    "color": "#6739b6"
  },
  "lines-purple": {
    "borderColor::after::after": "#6739b6",
    "color": "#6739b6"
  },
  "line-mauve": {
    "borderColor::after": "#9c26b0",
    "color": "#9c26b0"
  },
  "lines-mauve": {
    "borderColor::after::after": "#9c26b0",
    "color": "#9c26b0"
  },
  "line-pink": {
    "borderColor::after": "#e03997",
    "color": "#e03997"
  },
  "lines-pink": {
    "borderColor::after::after": "#e03997",
    "color": "#e03997"
  },
  "line-brown": {
    "borderColor::after": "#a5673f",
    "color": "#a5673f"
  },
  "lines-brown": {
    "borderColor::after::after": "#a5673f",
    "color": "#a5673f"
  },
  "line-grey": {
    "borderColor::after": "#8799a3",
    "color": "#8799a3"
  },
  "lines-grey": {
    "borderColor::after::after": "#8799a3",
    "color": "#8799a3"
  },
  "line-gray": {
    "borderColor::after": "#aaaaaa",
    "color": "#aaaaaa"
  },
  "lines-gray": {
    "borderColor::after::after": "#aaaaaa",
    "color": "#aaaaaa"
  },
  "line-black": {
    "borderColor::after": "#333333",
    "color": "#333333"
  },
  "lines-black": {
    "borderColor::after::after": "#333333",
    "color": "#333333"
  },
  "line-white": {
    "borderColor::after": "#ffffff",
    "color": "#ffffff"
  },
  "lines-white": {
    "borderColor::after::after": "#ffffff",
    "color": "#ffffff"
  },
  "bg-red": {
    "backgroundColor": "#e54d42",
    "color": "#ffffff"
  },
  "bg-orange": {
    "backgroundColor": "#f37b1d",
    "color": "#ffffff"
  },
  "bg-yellow": {
    "backgroundColor": "#fbbd08",
    "color": "#333333"
  },
  "bg-olive": {
    "backgroundColor": "#8dc63f",
    "color": "#ffffff"
  },
  "bg-green": {
    "backgroundColor": "#39b54a",
    "color": "#ffffff"
  },
  "bg-cyan": {
    "backgroundColor": "#1cbbb4",
    "color": "#ffffff"
  },
  "bg-blue": {
    "backgroundColor": "#0081ff",
    "color": "#ffffff"
  },
  "bg-purple": {
    "backgroundColor": "#6739b6",
    "color": "#ffffff"
  },
  "bg-mauve": {
    "backgroundColor": "#9c26b0",
    "color": "#ffffff"
  },
  "bg-pink": {
    "backgroundColor": "#e03997",
    "color": "#ffffff"
  },
  "bg-brown": {
    "backgroundColor": "#a5673f",
    "color": "#ffffff"
  },
  "bg-grey": {
    "backgroundColor": "#8799a3",
    "color": "#ffffff"
  },
  "bg-gray": {
    "backgroundColor": "#f0f0f0",
    "color": "#333333"
  },
  "bg-black": {
    "backgroundColor": "#333333",
    "color": "#ffffff"
  },
  "bg-white": {
    "backgroundColor": "#ffffff",
    "color": "#666666"
  },
  "bg-shadeTop": {
    "backgroundImage": "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.01))",
    "color": "#ffffff"
  },
  "bg-shadeBottom": {
    "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.01), rgba(0, 0, 0, 1))",
    "color": "#ffffff"
  },
  "bg-gradual-red": {
    "backgroundImage": "linear-gradient(45deg, #f43f3b, #ec008c)",
    "color": "#ffffff"
  },
  "bg-gradual-orange": {
    "backgroundImage": "linear-gradient(45deg, #ff9700, #ed1c24)",
    "color": "#ffffff"
  },
  "bg-gradual-green": {
    "backgroundImage": "linear-gradient(45deg, #39b54a, #8dc63f)",
    "color": "#ffffff"
  },
  "bg-gradual-purple": {
    "backgroundImage": "linear-gradient(45deg, #9000ff, #5e00ff)",
    "color": "#ffffff"
  },
  "bg-gradual-pink": {
    "backgroundImage": "linear-gradient(45deg, #ec008c, #6739b6)",
    "color": "#ffffff"
  },
  "bg-gradual-blue": {
    "backgroundImage": "linear-gradient(45deg, #0081ff, #1cbbb4)",
    "color": "#ffffff"
  },
  "bg-img": {
    "backgroundSize": "cover",
    "backgroundPosition": "center",
    "backgroundRepeat": "no-repeat"
  },
  "bg-mask": {
    "backgroundColor": "#333333",
    "position": "relative",
    "content::after": "\"\"",
    "width::after": 100,
    "height::after": 100,
    "display::after": "block",
    "backgroundColor::after": "rgba(0,0,0,0.4)",
    "position::after": "absolute",
    "left::after": 0,
    "right::after": 0,
    "bottom::after": 0,
    "top::after": 0
  },
  "bg-video": {
    "position": "relative"
  },
  "text-xs": {
    "fontSize": "20upx"
  },
  "text-sm": {
    "fontSize": "24upx"
  },
  "text-df": {
    "fontSize": "28upx"
  },
  "text-lg": {
    "fontSize": "32upx"
  },
  "text-xl": {
    "fontSize": "36upx"
  },
  "text-xxl": {
    "fontSize": "44upx"
  },
  "text-sl": {
    "fontSize": "80upx"
  },
  "text-xsl": {
    "fontSize": "120upx"
  },
  "text-Abc": {
    "textTransform": "Capitalize"
  },
  "text-ABC": {
    "textTransform": "Uppercase"
  },
  "text-abc": {
    "textTransform": "Lowercase"
  },
  "text-price": {
    "content::before": "\"¥\"",
    "fontSize::before": 80,
    "marginRight::before": "4upx"
  },
  "text-cut": {
    "textOverflow": "ellipsis",
    "whiteSpace": "nowrap",
    "overflow": "hidden"
  },
  "text-bold": {
    "fontWeight": "bold"
  },
  "text-center": {
    "textAlign": "center"
  },
  "text-content": {
    "lineHeight": 1.6
  },
  "text-left": {
    "textAlign": "left"
  },
  "text-right": {
    "textAlign": "right"
  },
  "text-red": {
    "color": "#e54d42"
  },
  "text-orange": {
    "color": "#f37b1d"
  },
  "text-yellow": {
    "color": "#fbbd08"
  },
  "text-olive": {
    "color": "#8dc63f"
  },
  "text-green": {
    "color": "#39b54a"
  },
  "text-cyan": {
    "color": "#1cbbb4"
  },
  "text-blue": {
    "color": "#0081ff"
  },
  "text-purple": {
    "color": "#6739b6"
  },
  "text-mauve": {
    "color": "#9c26b0"
  },
  "text-pink": {
    "color": "#e03997"
  },
  "text-brown": {
    "color": "#a5673f"
  },
  "text-grey": {
    "color": "#8799a3"
  },
  "text-gray": {
    "color": "#aaaaaa"
  },
  "text-black": {
    "color": "#333333"
  },
  "text-white": {
    "color": "#ffffff"
  },
  "cuIconfont-spin": {
    "WebkitAnimation": "cuIcon-spin 2s infinite linear",
    "animation": "cuIcon-spin 2s infinite linear",
    "display": "inline-block"
  },
  "cuIconfont-pulse": {
    "WebkitAnimation": "cuIcon-spin 1s infinite steps(8)",
    "animation": "cuIcon-spin 1s infinite steps(8)",
    "display": "inline-block"
  },
  "@FONT-FACE": [
    {
      "fontFamily": "cuIcon",
      "src": "url('//at.alicdn.com/t/font_533566_yfq2d9wdij.eot?t=1545239985831#iefix') format('embedded-opentype'),\n\t\t\n\t\turl('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),\n\t\turl('//at.alicdn.com/t/font_533566_yfq2d9wdij.ttf?t=1545239985831') format('truetype'),\n\t\t\n\t\turl('//at.alicdn.com/t/font_533566_yfq2d9wdij.svg?t=1545239985831#cuIconfont') format('svg')"
    }
  ],
  "cuIcon-appreciate": {
    "content:before": "\"\\e644\""
  },
  "cuIcon-check": {
    "content:before": "\"\\e645\""
  },
  "cuIcon-close": {
    "content:before": "\"\\e646\""
  },
  "cuIcon-edit": {
    "content:before": "\"\\e649\""
  },
  "cuIcon-emoji": {
    "content:before": "\"\\e64a\""
  },
  "cuIcon-favorfill": {
    "content:before": "\"\\e64b\""
  },
  "cuIcon-favor": {
    "content:before": "\"\\e64c\""
  },
  "cuIcon-loading": {
    "content:before": "\"\\e64f\""
  },
  "cuIcon-locationfill": {
    "content:before": "\"\\e650\""
  },
  "cuIcon-location": {
    "content:before": "\"\\e651\""
  },
  "cuIcon-phone": {
    "content:before": "\"\\e652\""
  },
  "cuIcon-roundcheckfill": {
    "content:before": "\"\\e656\""
  },
  "cuIcon-roundcheck": {
    "content:before": "\"\\e657\""
  },
  "cuIcon-roundclosefill": {
    "content:before": "\"\\e658\""
  },
  "cuIcon-roundclose": {
    "content:before": "\"\\e659\""
  },
  "cuIcon-roundrightfill": {
    "content:before": "\"\\e65a\""
  },
  "cuIcon-roundright": {
    "content:before": "\"\\e65b\""
  },
  "cuIcon-search": {
    "content:before": "\"\\e65c\""
  },
  "cuIcon-taxi": {
    "content:before": "\"\\e65d\""
  },
  "cuIcon-timefill": {
    "content:before": "\"\\e65e\""
  },
  "cuIcon-time": {
    "content:before": "\"\\e65f\""
  },
  "cuIcon-unfold": {
    "content:before": "\"\\e661\""
  },
  "cuIcon-warnfill": {
    "content:before": "\"\\e662\""
  },
  "cuIcon-warn": {
    "content:before": "\"\\e663\""
  },
  "cuIcon-camerafill": {
    "content:before": "\"\\e664\""
  },
  "cuIcon-camera": {
    "content:before": "\"\\e665\""
  },
  "cuIcon-commentfill": {
    "content:before": "\"\\e666\""
  },
  "cuIcon-comment": {
    "content:before": "\"\\e667\""
  },
  "cuIcon-likefill": {
    "content:before": "\"\\e668\""
  },
  "cuIcon-like": {
    "content:before": "\"\\e669\""
  },
  "cuIcon-notificationfill": {
    "content:before": "\"\\e66a\""
  },
  "cuIcon-notification": {
    "content:before": "\"\\e66b\""
  },
  "cuIcon-order": {
    "content:before": "\"\\e66c\""
  },
  "cuIcon-samefill": {
    "content:before": "\"\\e66d\""
  },
  "cuIcon-same": {
    "content:before": "\"\\e66e\""
  },
  "cuIcon-deliver": {
    "content:before": "\"\\e671\""
  },
  "cuIcon-evaluate": {
    "content:before": "\"\\e672\""
  },
  "cuIcon-pay": {
    "content:before": "\"\\e673\""
  },
  "cuIcon-send": {
    "content:before": "\"\\e675\""
  },
  "cuIcon-shop": {
    "content:before": "\"\\e676\""
  },
  "cuIcon-ticket": {
    "content:before": "\"\\e677\""
  },
  "cuIcon-back": {
    "content:before": "\"\\e679\""
  },
  "cuIcon-cascades": {
    "content:before": "\"\\e67c\""
  },
  "cuIcon-discover": {
    "content:before": "\"\\e67e\""
  },
  "cuIcon-list": {
    "content:before": "\"\\e682\""
  },
  "cuIcon-more": {
    "content:before": "\"\\e684\""
  },
  "cuIcon-scan": {
    "content:before": "\"\\e689\""
  },
  "cuIcon-settings": {
    "content:before": "\"\\e68a\""
  },
  "cuIcon-questionfill": {
    "content:before": "\"\\e690\""
  },
  "cuIcon-question": {
    "content:before": "\"\\e691\""
  },
  "cuIcon-shopfill": {
    "content:before": "\"\\e697\""
  },
  "cuIcon-form": {
    "content:before": "\"\\e699\""
  },
  "cuIcon-pic": {
    "content:before": "\"\\e69b\""
  },
  "cuIcon-filter": {
    "content:before": "\"\\e69c\""
  },
  "cuIcon-footprint": {
    "content:before": "\"\\e69d\""
  },
  "cuIcon-top": {
    "content:before": "\"\\e69e\""
  },
  "cuIcon-pulldown": {
    "content:before": "\"\\e69f\""
  },
  "cuIcon-pullup": {
    "content:before": "\"\\e6a0\""
  },
  "cuIcon-right": {
    "content:before": "\"\\e6a3\""
  },
  "cuIcon-refresh": {
    "content:before": "\"\\e6a4\""
  },
  "cuIcon-moreandroid": {
    "content:before": "\"\\e6a5\""
  },
  "cuIcon-deletefill": {
    "content:before": "\"\\e6a6\""
  },
  "cuIcon-refund": {
    "content:before": "\"\\e6ac\""
  },
  "cuIcon-cart": {
    "content:before": "\"\\e6af\""
  },
  "cuIcon-qrcode": {
    "content:before": "\"\\e6b0\""
  },
  "cuIcon-remind": {
    "content:before": "\"\\e6b2\""
  },
  "cuIcon-delete": {
    "content:before": "\"\\e6b4\""
  },
  "cuIcon-profile": {
    "content:before": "\"\\e6b7\""
  },
  "cuIcon-home": {
    "content:before": "\"\\e6b8\""
  },
  "cuIcon-cartfill": {
    "content:before": "\"\\e6b9\""
  },
  "cuIcon-discoverfill": {
    "content:before": "\"\\e6ba\""
  },
  "cuIcon-homefill": {
    "content:before": "\"\\e6bb\""
  },
  "cuIcon-message": {
    "content:before": "\"\\e6bc\""
  },
  "cuIcon-addressbook": {
    "content:before": "\"\\e6bd\""
  },
  "cuIcon-link": {
    "content:before": "\"\\e6bf\""
  },
  "cuIcon-lock": {
    "content:before": "\"\\e6c0\""
  },
  "cuIcon-unlock": {
    "content:before": "\"\\e6c2\""
  },
  "cuIcon-vip": {
    "content:before": "\"\\e6c3\""
  },
  "cuIcon-weibo": {
    "content:before": "\"\\e6c4\""
  },
  "cuIcon-activity": {
    "content:before": "\"\\e6c5\""
  },
  "cuIcon-friendaddfill": {
    "content:before": "\"\\e6c9\""
  },
  "cuIcon-friendadd": {
    "content:before": "\"\\e6ca\""
  },
  "cuIcon-friendfamous": {
    "content:before": "\"\\e6cb\""
  },
  "cuIcon-friend": {
    "content:before": "\"\\e6cc\""
  },
  "cuIcon-goods": {
    "content:before": "\"\\e6cd\""
  },
  "cuIcon-selection": {
    "content:before": "\"\\e6ce\""
  },
  "cuIcon-explore": {
    "content:before": "\"\\e6d2\""
  },
  "cuIcon-present": {
    "content:before": "\"\\e6d3\""
  },
  "cuIcon-squarecheckfill": {
    "content:before": "\"\\e6d4\""
  },
  "cuIcon-square": {
    "content:before": "\"\\e6d5\""
  },
  "cuIcon-squarecheck": {
    "content:before": "\"\\e6d6\""
  },
  "cuIcon-round": {
    "content:before": "\"\\e6d7\""
  },
  "cuIcon-roundaddfill": {
    "content:before": "\"\\e6d8\""
  },
  "cuIcon-roundadd": {
    "content:before": "\"\\e6d9\""
  },
  "cuIcon-add": {
    "content:before": "\"\\e6da\""
  },
  "cuIcon-notificationforbidfill": {
    "content:before": "\"\\e6db\""
  },
  "cuIcon-explorefill": {
    "content:before": "\"\\e6dd\""
  },
  "cuIcon-fold": {
    "content:before": "\"\\e6de\""
  },
  "cuIcon-game": {
    "content:before": "\"\\e6df\""
  },
  "cuIcon-redpacket": {
    "content:before": "\"\\e6e0\""
  },
  "cuIcon-selectionfill": {
    "content:before": "\"\\e6e1\""
  },
  "cuIcon-similar": {
    "content:before": "\"\\e6e2\""
  },
  "cuIcon-appreciatefill": {
    "content:before": "\"\\e6e3\""
  },
  "cuIcon-infofill": {
    "content:before": "\"\\e6e4\""
  },
  "cuIcon-info": {
    "content:before": "\"\\e6e5\""
  },
  "cuIcon-forwardfill": {
    "content:before": "\"\\e6ea\""
  },
  "cuIcon-forward": {
    "content:before": "\"\\e6eb\""
  },
  "cuIcon-rechargefill": {
    "content:before": "\"\\e6ec\""
  },
  "cuIcon-recharge": {
    "content:before": "\"\\e6ed\""
  },
  "cuIcon-vipcard": {
    "content:before": "\"\\e6ee\""
  },
  "cuIcon-voice": {
    "content:before": "\"\\e6ef\""
  },
  "cuIcon-voicefill": {
    "content:before": "\"\\e6f0\""
  },
  "cuIcon-friendfavor": {
    "content:before": "\"\\e6f1\""
  },
  "cuIcon-wifi": {
    "content:before": "\"\\e6f2\""
  },
  "cuIcon-share": {
    "content:before": "\"\\e6f3\""
  },
  "cuIcon-wefill": {
    "content:before": "\"\\e6f4\""
  },
  "cuIcon-we": {
    "content:before": "\"\\e6f5\""
  },
  "cuIcon-lightauto": {
    "content:before": "\"\\e6f6\""
  },
  "cuIcon-lightforbid": {
    "content:before": "\"\\e6f7\""
  },
  "cuIcon-lightfill": {
    "content:before": "\"\\e6f8\""
  },
  "cuIcon-camerarotate": {
    "content:before": "\"\\e6f9\""
  },
  "cuIcon-light": {
    "content:before": "\"\\e6fa\""
  },
  "cuIcon-barcode": {
    "content:before": "\"\\e6fb\""
  },
  "cuIcon-flashlightclose": {
    "content:before": "\"\\e6fc\""
  },
  "cuIcon-flashlightopen": {
    "content:before": "\"\\e6fd\""
  },
  "cuIcon-searchlist": {
    "content:before": "\"\\e6fe\""
  },
  "cuIcon-service": {
    "content:before": "\"\\e6ff\""
  },
  "cuIcon-sort": {
    "content:before": "\"\\e700\""
  },
  "cuIcon-down": {
    "content:before": "\"\\e703\""
  },
  "cuIcon-mobile": {
    "content:before": "\"\\e704\""
  },
  "cuIcon-mobilefill": {
    "content:before": "\"\\e705\""
  },
  "cuIcon-copy": {
    "content:before": "\"\\e706\""
  },
  "cuIcon-countdownfill": {
    "content:before": "\"\\e707\""
  },
  "cuIcon-countdown": {
    "content:before": "\"\\e708\""
  },
  "cuIcon-noticefill": {
    "content:before": "\"\\e709\""
  },
  "cuIcon-notice": {
    "content:before": "\"\\e70a\""
  },
  "cuIcon-upstagefill": {
    "content:before": "\"\\e70e\""
  },
  "cuIcon-upstage": {
    "content:before": "\"\\e70f\""
  },
  "cuIcon-babyfill": {
    "content:before": "\"\\e710\""
  },
  "cuIcon-baby": {
    "content:before": "\"\\e711\""
  },
  "cuIcon-brandfill": {
    "content:before": "\"\\e712\""
  },
  "cuIcon-brand": {
    "content:before": "\"\\e713\""
  },
  "cuIcon-choicenessfill": {
    "content:before": "\"\\e714\""
  },
  "cuIcon-choiceness": {
    "content:before": "\"\\e715\""
  },
  "cuIcon-clothesfill": {
    "content:before": "\"\\e716\""
  },
  "cuIcon-clothes": {
    "content:before": "\"\\e717\""
  },
  "cuIcon-creativefill": {
    "content:before": "\"\\e718\""
  },
  "cuIcon-creative": {
    "content:before": "\"\\e719\""
  },
  "cuIcon-female": {
    "content:before": "\"\\e71a\""
  },
  "cuIcon-keyboard": {
    "content:before": "\"\\e71b\""
  },
  "cuIcon-male": {
    "content:before": "\"\\e71c\""
  },
  "cuIcon-newfill": {
    "content:before": "\"\\e71d\""
  },
  "cuIcon-new": {
    "content:before": "\"\\e71e\""
  },
  "cuIcon-pullleft": {
    "content:before": "\"\\e71f\""
  },
  "cuIcon-pullright": {
    "content:before": "\"\\e720\""
  },
  "cuIcon-rankfill": {
    "content:before": "\"\\e721\""
  },
  "cuIcon-rank": {
    "content:before": "\"\\e722\""
  },
  "cuIcon-bad": {
    "content:before": "\"\\e723\""
  },
  "cuIcon-cameraadd": {
    "content:before": "\"\\e724\""
  },
  "cuIcon-focus": {
    "content:before": "\"\\e725\""
  },
  "cuIcon-friendfill": {
    "content:before": "\"\\e726\""
  },
  "cuIcon-cameraaddfill": {
    "content:before": "\"\\e727\""
  },
  "cuIcon-apps": {
    "content:before": "\"\\e729\""
  },
  "cuIcon-paintfill": {
    "content:before": "\"\\e72a\""
  },
  "cuIcon-paint": {
    "content:before": "\"\\e72b\""
  },
  "cuIcon-picfill": {
    "content:before": "\"\\e72c\""
  },
  "cuIcon-refresharrow": {
    "content:before": "\"\\e72d\""
  },
  "cuIcon-colorlens": {
    "content:before": "\"\\e6e6\""
  },
  "cuIcon-markfill": {
    "content:before": "\"\\e730\""
  },
  "cuIcon-mark": {
    "content:before": "\"\\e731\""
  },
  "cuIcon-presentfill": {
    "content:before": "\"\\e732\""
  },
  "cuIcon-repeal": {
    "content:before": "\"\\e733\""
  },
  "cuIcon-album": {
    "content:before": "\"\\e734\""
  },
  "cuIcon-peoplefill": {
    "content:before": "\"\\e735\""
  },
  "cuIcon-people": {
    "content:before": "\"\\e736\""
  },
  "cuIcon-servicefill": {
    "content:before": "\"\\e737\""
  },
  "cuIcon-repair": {
    "content:before": "\"\\e738\""
  },
  "cuIcon-file": {
    "content:before": "\"\\e739\""
  },
  "cuIcon-repairfill": {
    "content:before": "\"\\e73a\""
  },
  "cuIcon-taoxiaopu": {
    "content:before": "\"\\e73b\""
  },
  "cuIcon-weixin": {
    "content:before": "\"\\e612\""
  },
  "cuIcon-attentionfill": {
    "content:before": "\"\\e73c\""
  },
  "cuIcon-attention": {
    "content:before": "\"\\e73d\""
  },
  "cuIcon-commandfill": {
    "content:before": "\"\\e73e\""
  },
  "cuIcon-command": {
    "content:before": "\"\\e73f\""
  },
  "cuIcon-communityfill": {
    "content:before": "\"\\e740\""
  },
  "cuIcon-community": {
    "content:before": "\"\\e741\""
  },
  "cuIcon-read": {
    "content:before": "\"\\e742\""
  },
  "cuIcon-calendar": {
    "content:before": "\"\\e74a\""
  },
  "cuIcon-cut": {
    "content:before": "\"\\e74b\""
  },
  "cuIcon-magic": {
    "content:before": "\"\\e74c\""
  },
  "cuIcon-backwardfill": {
    "content:before": "\"\\e74d\""
  },
  "cuIcon-playfill": {
    "content:before": "\"\\e74f\""
  },
  "cuIcon-stop": {
    "content:before": "\"\\e750\""
  },
  "cuIcon-tagfill": {
    "content:before": "\"\\e751\""
  },
  "cuIcon-tag": {
    "content:before": "\"\\e752\""
  },
  "cuIcon-group": {
    "content:before": "\"\\e753\""
  },
  "cuIcon-all": {
    "content:before": "\"\\e755\""
  },
  "cuIcon-backdelete": {
    "content:before": "\"\\e756\""
  },
  "cuIcon-hotfill": {
    "content:before": "\"\\e757\""
  },
  "cuIcon-hot": {
    "content:before": "\"\\e758\""
  },
  "cuIcon-post": {
    "content:before": "\"\\e759\""
  },
  "cuIcon-radiobox": {
    "content:before": "\"\\e75b\""
  },
  "cuIcon-rounddown": {
    "content:before": "\"\\e75c\""
  },
  "cuIcon-upload": {
    "content:before": "\"\\e75d\""
  },
  "cuIcon-writefill": {
    "content:before": "\"\\e760\""
  },
  "cuIcon-write": {
    "content:before": "\"\\e761\""
  },
  "cuIcon-radioboxfill": {
    "content:before": "\"\\e763\""
  },
  "cuIcon-punch": {
    "content:before": "\"\\e764\""
  },
  "cuIcon-shake": {
    "content:before": "\"\\e765\""
  },
  "cuIcon-move": {
    "content:before": "\"\\e768\""
  },
  "cuIcon-safe": {
    "content:before": "\"\\e769\""
  },
  "cuIcon-activityfill": {
    "content:before": "\"\\e775\""
  },
  "cuIcon-crownfill": {
    "content:before": "\"\\e776\""
  },
  "cuIcon-crown": {
    "content:before": "\"\\e777\""
  },
  "cuIcon-goodsfill": {
    "content:before": "\"\\e778\""
  },
  "cuIcon-messagefill": {
    "content:before": "\"\\e779\""
  },
  "cuIcon-profilefill": {
    "content:before": "\"\\e77a\""
  },
  "cuIcon-sound": {
    "content:before": "\"\\e77b\""
  },
  "cuIcon-sponsorfill": {
    "content:before": "\"\\e77c\""
  },
  "cuIcon-sponsor": {
    "content:before": "\"\\e77d\""
  },
  "cuIcon-upblock": {
    "content:before": "\"\\e77e\""
  },
  "cuIcon-weblock": {
    "content:before": "\"\\e77f\""
  },
  "cuIcon-weunblock": {
    "content:before": "\"\\e780\""
  },
  "cuIcon-my": {
    "content:before": "\"\\e78b\""
  },
  "cuIcon-myfill": {
    "content:before": "\"\\e78c\""
  },
  "cuIcon-emojifill": {
    "content:before": "\"\\e78d\""
  },
  "cuIcon-emojiflashfill": {
    "content:before": "\"\\e78e\""
  },
  "cuIcon-flashbuyfill": {
    "content:before": "\"\\e78f\""
  },
  "cuIcon-text": {
    "content:before": "\"\\e791\""
  },
  "cuIcon-goodsfavor": {
    "content:before": "\"\\e794\""
  },
  "cuIcon-musicfill": {
    "content:before": "\"\\e795\""
  },
  "cuIcon-musicforbidfill": {
    "content:before": "\"\\e796\""
  },
  "cuIcon-card": {
    "content:before": "\"\\e624\""
  },
  "cuIcon-triangledownfill": {
    "content:before": "\"\\e79b\""
  },
  "cuIcon-triangleupfill": {
    "content:before": "\"\\e79c\""
  },
  "cuIcon-roundleftfill-copy": {
    "content:before": "\"\\e79e\""
  },
  "cuIcon-font": {
    "content:before": "\"\\e76a\""
  },
  "cuIcon-title": {
    "content:before": "\"\\e82f\""
  },
  "cuIcon-recordfill": {
    "content:before": "\"\\e7a4\""
  },
  "cuIcon-record": {
    "content:before": "\"\\e7a6\""
  },
  "cuIcon-cardboardfill": {
    "content:before": "\"\\e7a9\""
  },
  "cuIcon-cardboard": {
    "content:before": "\"\\e7aa\""
  },
  "cuIcon-formfill": {
    "content:before": "\"\\e7ab\""
  },
  "cuIcon-coin": {
    "content:before": "\"\\e7ac\""
  },
  "cuIcon-cardboardforbid": {
    "content:before": "\"\\e7af\""
  },
  "cuIcon-circlefill": {
    "content:before": "\"\\e7b0\""
  },
  "cuIcon-circle": {
    "content:before": "\"\\e7b1\""
  },
  "cuIcon-attentionforbid": {
    "content:before": "\"\\e7b2\""
  },
  "cuIcon-attentionforbidfill": {
    "content:before": "\"\\e7b3\""
  },
  "cuIcon-attentionfavorfill": {
    "content:before": "\"\\e7b4\""
  },
  "cuIcon-attentionfavor": {
    "content:before": "\"\\e7b5\""
  },
  "cuIcon-titles": {
    "content:before": "\"\\e701\""
  },
  "cuIcon-icloading": {
    "content:before": "\"\\e67a\""
  },
  "cuIcon-full": {
    "content:before": "\"\\e7bc\""
  },
  "cuIcon-mail": {
    "content:before": "\"\\e7bd\""
  },
  "cuIcon-peoplelist": {
    "content:before": "\"\\e7be\""
  },
  "cuIcon-goodsnewfill": {
    "content:before": "\"\\e7bf\""
  },
  "cuIcon-goodsnew": {
    "content:before": "\"\\e7c0\""
  },
  "cuIcon-medalfill": {
    "content:before": "\"\\e7c1\""
  },
  "cuIcon-medal": {
    "content:before": "\"\\e7c2\""
  },
  "cuIcon-newsfill": {
    "content:before": "\"\\e7c3\""
  },
  "cuIcon-newshotfill": {
    "content:before": "\"\\e7c4\""
  },
  "cuIcon-newshot": {
    "content:before": "\"\\e7c5\""
  },
  "cuIcon-news": {
    "content:before": "\"\\e7c6\""
  },
  "cuIcon-videofill": {
    "content:before": "\"\\e7c7\""
  },
  "cuIcon-video": {
    "content:before": "\"\\e7c8\""
  },
  "cuIcon-exit": {
    "content:before": "\"\\e7cb\""
  },
  "cuIcon-skinfill": {
    "content:before": "\"\\e7cc\""
  },
  "cuIcon-skin": {
    "content:before": "\"\\e7cd\""
  },
  "cuIcon-moneybagfill": {
    "content:before": "\"\\e7ce\""
  },
  "cuIcon-usefullfill": {
    "content:before": "\"\\e7cf\""
  },
  "cuIcon-usefull": {
    "content:before": "\"\\e7d0\""
  },
  "cuIcon-moneybag": {
    "content:before": "\"\\e7d1\""
  },
  "cuIcon-redpacket_fill": {
    "content:before": "\"\\e7d3\""
  },
  "cuIcon-subscription": {
    "content:before": "\"\\e7d4\""
  },
  "cuIcon-loading1": {
    "content:before": "\"\\e633\""
  },
  "cuIcon-github": {
    "content:before": "\"\\e692\""
  },
  "cuIcon-global": {
    "content:before": "\"\\e7eb\""
  },
  "cuIcon-settingsfill": {
    "content:before": "\"\\e6ab\""
  },
  "cuIcon-back_android": {
    "content:before": "\"\\e7ed\""
  },
  "cuIcon-expressman": {
    "content:before": "\"\\e7ef\""
  },
  "cuIcon-evaluate_fill": {
    "content:before": "\"\\e7f0\""
  },
  "cuIcon-group_fill": {
    "content:before": "\"\\e7f5\""
  },
  "cuIcon-play_forward_fill": {
    "content:before": "\"\\e7f6\""
  },
  "cuIcon-deliver_fill": {
    "content:before": "\"\\e7f7\""
  },
  "cuIcon-notice_forbid_fill": {
    "content:before": "\"\\e7f8\""
  },
  "cuIcon-fork": {
    "content:before": "\"\\e60c\""
  },
  "cuIcon-pick": {
    "content:before": "\"\\e7fa\""
  },
  "cuIcon-wenzi": {
    "content:before": "\"\\e6a7\""
  },
  "cuIcon-ellipse": {
    "content:before": "\"\\e600\""
  },
  "cuIcon-qr_code": {
    "content:before": "\"\\e61b\""
  },
  "cuIcon-dianhua": {
    "content:before": "\"\\e64d\""
  },
  "cuIcon-cuIcon": {
    "content:before": "\"\\e602\""
  },
  "cuIcon-loading2": {
    "content:before": "\"\\e7f1\""
  },
  "cuIcon-btn": {
    "content:before": "\"\\e601\""
  }
}

/***/ }),
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var r = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),r = {},o = r.lib = {},s = o.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = o.WordArray = s.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,r = this.sigBytes,o = e.sigBytes;if (this.clamp(), r % 4) for (var s = 0; s < o; s++) {var i = n[s >>> 2] >>> 24 - s % 4 * 8 & 255;t[r + s >>> 2] |= i << 24 - (r + s) % 4 * 8;} else for (s = 0; s < o; s += 4) {t[r + s >>> 2] = n[s >>> 2];}return this.sigBytes += o, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = s.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, r = [], o = function o(t) {t = t;var n = 987654321,r = 4294967295;return function () {var o = ((n = 36969 * (65535 & n) + (n >> 16) & r) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & r) & r;return o /= 4294967296, (o += .5) * (e.random() > .5 ? 1 : -1);};}, s = 0; s < t; s += 4) {var a = o(4294967296 * (n || e.random()));n = 987654071 * a(), r.push(4294967296 * a() | 0);}return new i.init(r, t);} }),a = r.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push((s >>> 4).toString(16)), r.push((15 & s).toString(16));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r += 2) {n[r >>> 3] |= parseInt(e.substr(r, 2), 16) << 24 - r % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, r = [], o = 0; o < n; o++) {var s = t[o >>> 2] >>> 24 - o % 4 * 8 & 255;r.push(String.fromCharCode(s));}return r.join("");}, parse: function parse(e) {for (var t = e.length, n = [], r = 0; r < t; r++) {n[r >>> 2] |= (255 & e.charCodeAt(r)) << 24 - r % 4 * 8;}return new i.init(n, t);} },l = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },h = o.BufferedBlockAlgorithm = s.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = l.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,r = n.words,o = n.sigBytes,s = this.blockSize,a = o / (4 * s),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * s,u = e.min(4 * c, o);if (c) {for (var l = 0; l < c; l += s) {this._doProcessBlock(r, l);}var h = r.splice(0, c);n.sigBytes -= u;}return new i.init(h, u);}, clone: function clone() {var e = s.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),f = (o.Hasher = h.extend({ cfg: s.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {h.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new f.HMAC.init(e, n).finalize(t);};} }), r.algo = {});return r;}(Math), n);}),o = (n(function (e, t) {var n;e.exports = (n = r, function (e) {var t = n,r = t.lib,o = r.WordArray,s = r.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = s.extend({ _doReset: function _doReset() {this._hash = new o.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var r = t + n,o = e[r];e[r] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8);}var s = this._hash.words,i = e[t + 0],c = e[t + 1],p = e[t + 2],d = e[t + 3],y = e[t + 4],g = e[t + 5],v = e[t + 6],_ = e[t + 7],m = e[t + 8],b = e[t + 9],w = e[t + 10],T = e[t + 11],S = e[t + 12],E = e[t + 13],k = e[t + 14],O = e[t + 15],A = s[0],P = s[1],I = s[2],N = s[3];A = u(A, P, I, N, i, 7, a[0]), N = u(N, A, P, I, c, 12, a[1]), I = u(I, N, A, P, p, 17, a[2]), P = u(P, I, N, A, d, 22, a[3]), A = u(A, P, I, N, y, 7, a[4]), N = u(N, A, P, I, g, 12, a[5]), I = u(I, N, A, P, v, 17, a[6]), P = u(P, I, N, A, _, 22, a[7]), A = u(A, P, I, N, m, 7, a[8]), N = u(N, A, P, I, b, 12, a[9]), I = u(I, N, A, P, w, 17, a[10]), P = u(P, I, N, A, T, 22, a[11]), A = u(A, P, I, N, S, 7, a[12]), N = u(N, A, P, I, E, 12, a[13]), I = u(I, N, A, P, k, 17, a[14]), A = l(A, P = u(P, I, N, A, O, 22, a[15]), I, N, c, 5, a[16]), N = l(N, A, P, I, v, 9, a[17]), I = l(I, N, A, P, T, 14, a[18]), P = l(P, I, N, A, i, 20, a[19]), A = l(A, P, I, N, g, 5, a[20]), N = l(N, A, P, I, w, 9, a[21]), I = l(I, N, A, P, O, 14, a[22]), P = l(P, I, N, A, y, 20, a[23]), A = l(A, P, I, N, b, 5, a[24]), N = l(N, A, P, I, k, 9, a[25]), I = l(I, N, A, P, d, 14, a[26]), P = l(P, I, N, A, m, 20, a[27]), A = l(A, P, I, N, E, 5, a[28]), N = l(N, A, P, I, p, 9, a[29]), I = l(I, N, A, P, _, 14, a[30]), A = h(A, P = l(P, I, N, A, S, 20, a[31]), I, N, g, 4, a[32]), N = h(N, A, P, I, m, 11, a[33]), I = h(I, N, A, P, T, 16, a[34]), P = h(P, I, N, A, k, 23, a[35]), A = h(A, P, I, N, c, 4, a[36]), N = h(N, A, P, I, y, 11, a[37]), I = h(I, N, A, P, _, 16, a[38]), P = h(P, I, N, A, w, 23, a[39]), A = h(A, P, I, N, E, 4, a[40]), N = h(N, A, P, I, i, 11, a[41]), I = h(I, N, A, P, d, 16, a[42]), P = h(P, I, N, A, v, 23, a[43]), A = h(A, P, I, N, b, 4, a[44]), N = h(N, A, P, I, S, 11, a[45]), I = h(I, N, A, P, O, 16, a[46]), A = f(A, P = h(P, I, N, A, p, 23, a[47]), I, N, i, 6, a[48]), N = f(N, A, P, I, _, 10, a[49]), I = f(I, N, A, P, k, 15, a[50]), P = f(P, I, N, A, g, 21, a[51]), A = f(A, P, I, N, S, 6, a[52]), N = f(N, A, P, I, d, 10, a[53]), I = f(I, N, A, P, w, 15, a[54]), P = f(P, I, N, A, c, 21, a[55]), A = f(A, P, I, N, m, 6, a[56]), N = f(N, A, P, I, O, 10, a[57]), I = f(I, N, A, P, v, 15, a[58]), P = f(P, I, N, A, E, 21, a[59]), A = f(A, P, I, N, y, 6, a[60]), N = f(N, A, P, I, T, 10, a[61]), I = f(I, N, A, P, p, 15, a[62]), P = f(P, I, N, A, b, 21, a[63]), s[0] = s[0] + A | 0, s[1] = s[1] + P | 0, s[2] = s[2] + I | 0, s[3] = s[3] + N | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,r = 8 * this._nDataBytes,o = 8 * t.sigBytes;n[o >>> 5] |= 128 << 24 - o % 32;var s = e.floor(r / 4294967296),i = r;n[15 + (o + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), n[14 + (o + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var l = c[u];c[u] = 16711935 & (l << 8 | l >>> 24) | 4278255360 & (l << 24 | l >>> 8);}return a;}, clone: function clone() {var e = s.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, r, o, s, i) {var a = e + (t & n | ~t & r) + o + i;return (a << s | a >>> 32 - s) + t;}function l(e, t, n, r, o, s, i) {var a = e + (t & r | n & ~r) + o + i;return (a << s | a >>> 32 - s) + t;}function h(e, t, n, r, o, s, i) {var a = e + (t ^ n ^ r) + o + i;return (a << s | a >>> 32 - s) + t;}function f(e, t, n, r, o, s, i) {var a = e + (n ^ (t | ~r)) + o + i;return (a << s | a >>> 32 - s) + t;}t.MD5 = s._createHelper(c), t.HmacMD5 = s._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, o, s;e.exports = (o = (n = r).lib.Base, s = n.enc.Utf8, void (n.algo.HMAC = o.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = s.parse(t));var n = e.blockSize,r = 4 * n;t.sigBytes > r && (t = e.finalize(t)), t.clamp();for (var o = this._oKey = t.clone(), i = this._iKey = t.clone(), a = o.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}o.sigBytes = i.sigBytes = r, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = r.HmacMD5;}));function s(e) {return function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}).catch(function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var i = /*#__PURE__*/function (_Error) {_inherits(i, _Error);var _super = _createSuper(i);function i(e) {var _this;_classCallCheck(this, i);_this = _super.call(this, e.message), _this.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this;}return i;}( /*#__PURE__*/_wrapNativeSuper(Error));var a;try {a = __webpack_require__(/*! uni-stat-config */ 10).default || __webpack_require__(/*! uni-stat-config */ 10);} catch (e) {a = { appid: "" };}var c, u;function l() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function h() {if ("n" === f()) {try {c = plus.runtime.getDCloudId();} catch (e) {c = "";}return c;}return c || (c = l(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: c })), c;}function f() {return { "app-plus": "n", h5: "h5", "mp-weixin": "wx", "mp-alipay": "ali", "mp-baidu": "bd", "mp-toutiao": "tt", "mp-qq": "qq", "quickapp-native": "qn" }["app-plus"];}var p = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), o(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, r) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}),  false && false;var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return r(new i({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var o = e.data;if (o.error) return r(new i({ code: o.error.code, message: o.error.message, requestId: t }));o.result = o.data, o.requestId = t, delete o.data, n(o);} }));});} };var d = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var y = /*#__PURE__*/function () {function y(e) {_classCallCheck(this, y);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error("缺少参数" + t);}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = d;}_createClass(y, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return p.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this2 = this;return this.hasAccessToken ? t ? this.requestWrapped(e) : this.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this2.getAccessToken();}).then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});}) : this.getAccessToken().then(function () {var t = _this2.rebuildRequest(e);return _this2.request(t, !0);});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = p.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),r = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, r["x-basement-token"] = this.accessToken), r["x-serverless-sign"] = p.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: r };} }, { key: "getAccessToken", value: function getAccessToken() {var _this3 = this;return this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this3.setAccessToken(e.result.accessToken), t(_this3.accessToken)) : n(new i({ code: "AUTH_FAILED", message: "获取accessToken失败" }));});});} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this4 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,r = _ref.filePath,o = _ref.fileType,s = _ref.onUploadProgress;return new Promise(function (a, c) {var u = _this4.adapter.uploadFile({ url: e, formData: t, name: n, filePath: r, fileType: o, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? a(e) : c(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {c(e);} });"function" == typeof s && u && "function" == typeof u.onProgressUpdate && u.onProgressUpdate(function (e) {s({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this5 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,r = _ref2.onUploadProgress,o = _ref2.config;if (!t) throw new i({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var s = o && o.envType || this.config.envType;var a, c;return this.getOSSUploadOptionsFromPath({ env: s, filename: t }).then(function (t) {var o = t.result;a = o.id, c = "https://" + o.cdnDomain + "/" + o.ossPath;var s = { url: "https://" + o.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: o.accessKeyId, Signature: o.signature, host: o.host, id: a, key: o.ossPath, policy: o.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this5.uploadFileToOSS(Object.assign({}, s, { onUploadProgress: r }));}).then(function () {return _this5.reportOSSUpload({ id: a });}).then(function (t) {return new Promise(function (n, r) {t.success ? n({ success: !0, filePath: e, fileID: c }) : r(new i({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return y;}();var g = { init: function init(e) {var t = new y(e);["deleteFile"].forEach(function (e) {t[e] = s(t[e]).bind(t);});var n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t;} };var v,_,m = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.getQuery = function (e, t) {if ("undefined" == typeof window) return !1;var n = t || window.location.search,r = new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),o = n.substr(n.indexOf("?") + 1).match(r);return null != o ? o[2] : "";}, t.getHash = function (e) {var t = window.location.hash.match(new RegExp("[#?&/]" + e + "=([^&#]*)"));return t ? t[1] : "";}, t.removeParam = function (e, t) {var n = t.split("?")[0],r = [],o = -1 !== t.indexOf("?") ? t.split("?")[1] : "";if ("" !== o) {for (var s = (r = o.split("&")).length - 1; s >= 0; s -= 1) {r[s].split("=")[0] === e && r.splice(s, 1);}n = n + "?" + r.join("&");}return n;}, t.createPromiseCallback = function () {var e;if (!Promise) {(e = function e() {}).promise = {};var t = function t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: t }), Object.defineProperty(e.promise, "catch", { get: t }), e;}var n = new Promise(function (t, n) {e = function e(_e, r) {return _e ? n(_e) : t(r);};});return e.promise = n, e;}, t.getWeixinCode = function () {return t.getQuery("code") || t.getHash("code");}, t.getMiniAppCode = function () {return new Promise(function (e, t) {wx.login({ success: function success(t) {e(t.code);}, fail: function fail(e) {t(e);} });});}, t.isArray = function (e) {return "[object Array]" === Object.prototype.toString.call(e);}, t.isString = function (e) {return "string" == typeof e;}, t.isUndefined = function (e) {return void 0 === e;}, t.isInstanceOf = function (e, t) {return e instanceof t;}, t.isFormData = function (e) {return "[object FormData]" === Object.prototype.toString.call(e);}, t.genSeqId = function () {return Math.random().toString(16).slice(2);}, t.getArgNames = function (e) {var t = e.toString();return t.slice(t.indexOf("(") + 1, t.indexOf(")")).match(/([^\s,]+)/g);}, t.formatUrl = function (e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;};}),b = "dist/index.js",w = "./dist/index.d.ts",T = { build: "npm run tsc && webpack", tsc: "tsc -p tsconfig.json", "tsc:w": "tsc -p tsconfig.json -w", test: "jest --verbose false -i", e2e: 'NODE_ENV=e2e webpack && jest --config="./jest.e2e.config.js"  --verbose false -i "e2e"', start: "webpack-dev-server --hot --open", eslint: 'eslint "./**/*.js" "./**/*.ts"', "eslint-fix": 'eslint --fix "./**/*.js" "./**/*.ts"', test_web: "npm run tsc && webpack-dev-server --devtool eval-source-map --progress --colors --hot --inline --content-base ./dist --host jimmytest-088bef.tcb.qcloud.la --port 80 --disableHostCheck true --mode development --config webpack.test.js" },S = { type: "git", url: "https://github.com/TencentCloudBase/tcb-js-sdk" },E = ["tcb", "js-sdk"],k = { "@cloudbase/adapter-interface": "^0.2.0", "@cloudbase/adapter-wx_mp": "^0.2.1", "@cloudbase/database": "^0.9.8" },O = { "@babel/core": "^7.6.2", "@babel/plugin-proposal-class-properties": "^7.5.5", "@babel/plugin-proposal-object-rest-spread": "^7.6.2", "@babel/plugin-transform-runtime": "^7.6.2", "@babel/preset-env": "^7.6.2", "@babel/preset-typescript": "^7.6.0", "@babel/runtime": "^7.6.2", "@types/jest": "^23.1.4", "@types/node": "^10.14.4", "@types/superagent": "^4.1.4", axios: "^0.19.0", "babel-eslint": "^10.0.1", "babel-loader": "^8.0.6", "babel-polyfill": "^6.26.0", eslint: "^5.16.0", "eslint-config-alloy": "^1.4.2", "eslint-config-prettier": "^4.1.0", "eslint-plugin-prettier": "^3.0.1", "eslint-plugin-typescript": "^1.0.0-rc.3", express: "^4.17.1", husky: "^3.1.0", jest: "^24.7.1", "jest-puppeteer": "^4.3.0", "lint-staged": "^9.5.0", "power-assert": "^1.6.1", puppeteer: "^1.20.0", "serve-static": "^1.14.1", "ts-jest": "^23.10.4", "ts-loader": "^6.2.1", typescript: "^3.4.3", "typescript-eslint-parser": "^22.0.0", webpack: "^4.41.3", "webpack-bundle-analyzer": "^3.4.1", "webpack-cli": "^3.3.0", "webpack-dev-server": "^3.3.1", "webpack-merge": "^4.2.2", "webpack-visualizer-plugin": "^0.1.11" },A = { hooks: { "pre-commit": "lint-staged" } },P = { name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: b, types: w, scripts: T, repository: S, keywords: E, author: "jimmyjzhang", license: "ISC", dependencies: k, devDependencies: O, husky: A, "lint-staged": { "*.{js,ts}": ["eslint --fix", "git add"] } },I = (v = Object.freeze({ __proto__: null, name: "tcb-js-sdk", version: "1.3.5", description: "js sdk for tcb", main: b, types: w, scripts: T, repository: S, keywords: E, author: "jimmyjzhang", license: "ISC", dependencies: k, devDependencies: O, husky: A, default: P })) && v.default || v,N = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o = r(I);n.SDK_VERISON = o.version, n.ACCESS_TOKEN = "access_token", n.ACCESS_TOKEN_Expire = "access_token_expire", n.REFRESH_TOKEN = "refresh_token", n.ANONYMOUS_UUID = "anonymous_uuid", n.LOGIN_TYPE_KEY = "login_type", n.protocol = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:", n.BASE_URL =  false ? undefined : "//tcb-api.tencentcloudapi.com/web";});!function (e) {e.local = "local", e.none = "none", e.session = "session";}(_ || (_ = {}));var C = function C() {},x = function x() {};var R = Object.freeze({ __proto__: null, get StorageType() {return _;}, AbstractSDKRequest: C, AbstractStorage: x, formatUrl: function formatUrl(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?\:\/\//.test(t += o) ? t : "" + e + t;} }),q = n(function (t, n) {var _r,o = e && e.__extends || (_r = function r(e, t) {return (_r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var c = function (e) {function t() {return null !== e && e.apply(this, arguments) || this;}return o(t, e), t.prototype.get = function (e) {return this._request(s(s({}, e), { method: "get" }));}, t.prototype.post = function (e) {return this._request(s(s({}, e), { method: "post" }));}, t.prototype.upload = function (e) {var t = e.data,n = e.file,r = e.name,o = new FormData();for (var i in t) {o.append(i, t[i]);}return o.append("key", r), o.append("file", n), this._request(s(s({}, e), { data: o, method: "post" }));}, t.prototype.download = function (e) {return i(this, void 0, void 0, function () {var t, n;return a(this, function (r) {return t = decodeURIComponent(new URL(e.url).pathname.split("/").pop() || ""), (n = document.createElement("a")).href = e.url, n.setAttribute("download", t), n.setAttribute("target", "_blank"), document.body.appendChild(n), n.click(), [2, new Promise(function (t) {t({ statusCode: 200, tempFilePath: e.url });})];});});}, t.prototype._request = function (e) {var t = String(e.method).toLowerCase() || "get";return new Promise(function (n) {var r = e.url,o = e.headers,s = void 0 === o ? {} : o,i = e.data,a = e.responseType,c = m.formatUrl(N.protocol, r, "get" === t ? i : {}),u = new XMLHttpRequest();for (var l in u.open(t, c), a && (u.responseType = a), s) {u.setRequestHeader(l, s[l]);}u.onreadystatechange = function () {if (4 === u.readyState) {var e = { statusCode: u.status };try {e.data = JSON.parse(u.responseText);} catch (e) {}n(e);}}, u.send("post" === t && m.isFormData(i) ? i : JSON.stringify(i || {}));});}, t;}(R.AbstractSDKRequest);n.WebRequest = c, n.genAdapter = function () {return { root: window, reqClass: c, wsClass: WebSocket, localStorage: localStorage, sessionStorage: sessionStorage };};}),U = n(function (t, n) {var r = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var o,s = r(q);!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(o = n.RUNTIME || (n.RUNTIME = {})), n.useAdapters = function (e) {for (var t = 0, n = m.isArray(e) ? e : [e]; t < n.length; t++) {var r = n[t],o = r.isMatch,s = r.genAdapter,i = r.runtime;if (o()) return { adapter: s(), runtime: i };}}, n.useDefaultAdapter = function () {return { adapter: s.genAdapter(), runtime: o.WEB };}, n.Adapter = { adapter: null, runtime: void 0 };}),j = n(function (t, n) {var _r2,o = e && e.__extends || (_r2 = function r(e, t) {return (_r2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r2(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());});Object.defineProperty(n, "__esModule", { value: !0 });var s = function () {function e(e) {switch (U.Adapter.adapter.primaryStorage || e) {case "local":this.storageClass = U.Adapter.adapter.localStorage || new i();break;case "none":this.storageClass = new i();break;default:this.storageClass = U.Adapter.adapter.sessionStorage || new i();}}return e.prototype.setStore = function (e, t, n) {try {if (!this.storageClass) return;} catch (e) {return;}var r,o = {};o.version = n || "localCachev1", o.content = t, r = JSON.stringify(o);try {this.storageClass.setItem(e, r);} catch (e) {return;}}, e.prototype.getStore = function (e, t) {try {if (!this.storageClass) return;} catch (e) {return "";}t = t || "localCachev1";var n = this.storageClass.getItem(e);return n && n.indexOf(t) >= 0 ? JSON.parse(n).content : "";}, e.prototype.removeStore = function (e) {this.storageClass.removeItem(e);}, e;}();n.Cache = s;var i = function (e) {function t() {var t = e.call(this) || this;return U.Adapter.adapter.root.tcbObject || (U.Adapter.adapter.root.tcbObject = {}), t;}return o(t, e), t.prototype.setItem = function (e, t) {U.Adapter.adapter.root.tcbObject[e] = t;}, t.prototype.getItem = function (e) {return U.Adapter.adapter.root.tcbObject[e];}, t.prototype.removeItem = function (e) {delete U.Adapter.adapter.root.tcbObject[e];}, t.prototype.clear = function () {delete U.Adapter.adapter.root.tcbObject;}, t;}(R.AbstractStorage);}),L = n(function (t, n) {var _r3,o = e && e.__extends || (_r3 = function r(e, t) {return (_r3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r3(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__spreadArrays || function () {for (var e = 0, t = 0, n = arguments.length; t < n; t++) {e += arguments[t].length;}var r = Array(e),o = 0;for (t = 0; t < n; t++) {for (var s = arguments[t], i = 0, a = s.length; i < a; i++, o++) {r[o] = s[i];}}return r;};Object.defineProperty(n, "__esModule", { value: !0 });var i = function i(e, t) {this.data = t || null, this.name = e;};n.IEvent = i;var a = function (e) {function t(t, n) {var r = e.call(this, "error", { error: t, data: n }) || this;return r.error = t, r;}return o(t, e), t;}(i);n.IErrorEvent = a;var c = function () {function e() {this._listeners = {};}return e.prototype.on = function (e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;}, e.prototype.off = function (e, t) {return function (e, t, n) {if (n && n[e]) {var r = n[e].indexOf(t);-1 !== r && n[e].splice(r, 1);}}(e, t, this._listeners), this;}, e.prototype.fire = function (e, t) {if (m.isInstanceOf(e, a)) return console.error(e.error), this;var n = m.isString(e) ? new i(e, t || {}) : e,r = n.name;if (this._listens(r)) {n.target = this;for (var o = 0, c = this._listeners[r] ? s(this._listeners[r]) : []; o < c.length; o++) {c[o].call(this, n);}}return this;}, e.prototype._listens = function (e) {return this._listeners[e] && this._listeners[e].length > 0;}, e;}();n.IEventEmitter = c;var u = new c();n.addEventListener = function (e, t) {u.on(e, t);}, n.activateEvent = function (e, t) {void 0 === t && (t = {}), u.fire(e, t);}, n.removeEventListener = function (e, t) {u.off(e, t);}, n.EVENTS = { LOGIN_STATE_CHANGED: "loginStateChanged", LOGIN_STATE_EXPIRE: "loginStateExpire", LOGIN_TYPE_CHANGE: "loginTypeChanged", ANONYMOUS_CONVERTED: "anonymousConverted", REFRESH_ACCESS_TOKEN: "refreshAccessToken" };}),D = n(function (t, n) {var r = e && e.__assign || function () {return (r = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 });var i = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously"],a = { "X-SDK-Version": N.SDK_VERISON };function c(e, t, n) {var o = e[t];e[t] = function (t) {var s = {},i = {};n.forEach(function (n) {var r = n.call(e, t),o = r.data,a = r.headers;Object.assign(s, o), Object.assign(i, a);});var a = t.data;return a && function () {if (m.isFormData(a)) for (var e in s) {a.append(e, s[e]);} else t.data = r(r({}, a), s);}(), t.headers = r(r({}, t.headers || {}), i), o.call(e, t);};}function u() {var e = m.genSeqId();return { data: { seqId: e }, headers: r(r({}, a), { "x-seqid": e }) };}var l = function () {function e(e) {void 0 === e && (e = {}), this.config = e, this.cache = new j.Cache(e.persistence), this.accessTokenKey = N.ACCESS_TOKEN + "_" + e.env, this.accessTokenExpireKey = N.ACCESS_TOKEN_Expire + "_" + e.env, this.refreshTokenKey = N.REFRESH_TOKEN + "_" + e.env, this.anonymousUuidKey = N.ANONYMOUS_UUID + "_" + e.env, this.loginTypeKey = N.LOGIN_TYPE_KEY + "_" + e.env, this._reqClass = new U.Adapter.adapter.reqClass(), c(this._reqClass, "post", [u]), c(this._reqClass, "upload", [u]), c(this._reqClass, "download", [u]);}return e.prototype.post = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.post(e)];case 1:return [2, t.sent()];}});});}, e.prototype.upload = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.upload(e)];case 1:return [2, t.sent()];}});});}, e.prototype.download = function (e) {return o(this, void 0, void 0, function () {return s(this, function (t) {switch (t.label) {case 0:return [4, this._reqClass.download(e)];case 1:return [2, t.sent()];}});});}, e.prototype.refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n;return s(this, function (r) {switch (r.label) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, this._refreshAccessTokenPromise];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t) throw t;return [2, e];}});});}, e.prototype._refreshAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:if (this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), !(e = this.cache.getStore(this.refreshTokenKey))) throw new Error("[tcb-js-sdk] 未登录CloudBase");return t = { refresh_token: e }, this.cache.getStore(this.loginTypeKey) === M.LOGINTYPE.ANONYMOUS && (t.anonymous_uuid = this.cache.getStore(this.anonymousUuidKey)), [4, this.request("auth.getJwt", t)];case 1:if ((n = o.sent()).data.code) throw "SIGN_PARAM_INVALID" !== (r = n.data.code) && "REFRESH_TOKEN_EXPIRED" !== r && "INVALID_REFRESH_TOKEN" !== r || (L.activateEvent(L.EVENTS.LOGIN_STATE_EXPIRE), this.cache.removeStore(this.refreshTokenKey)), new Error("[tcb-js-sdk] 刷新access token失败：" + n.data.code);return n.data.access_token ? (L.activateEvent(L.EVENTS.REFRESH_ACCESS_TOKEN), this.cache.setStore(this.accessTokenKey, n.data.access_token), this.cache.setStore(this.accessTokenExpireKey, n.data.access_token_expire + Date.now()), L.activateEvent(L.EVENTS.LOGIN_TYPE_CHANGE, n.data.login_type), [2, { accessToken: n.data.access_token, accessTokenExpire: n.data.access_token_expire }]) : (n.data.refresh_token && (this.cache.removeStore(this.refreshTokenKey), this.cache.setStore(this.refreshTokenKey, n.data.refresh_token), this._refreshAccessToken()), [2]);}});});}, e.prototype.getAccessToken = function () {return o(this, void 0, void 0, function () {var e, t, n, r;return s(this, function (o) {switch (o.label) {case 0:return e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), n = !0, (r = this._shouldRefreshAccessTokenHook) ? [4, this._shouldRefreshAccessTokenHook(e, t)] : [3, 2];case 1:r = !o.sent(), o.label = 2;case 2:return r && (n = !1), (!e || !t || t < Date.now()) && n ? [2, this.refreshAccessToken()] : [2, { accessToken: e, accessTokenExpire: t }];}});});}, e.prototype.request = function (e, t, n) {return o(this, void 0, void 0, function () {var o, a, c, u, l, h, f, p, d, y, g, v;return s(this, function (s) {switch (s.label) {case 0:return o = "application/x-www-form-urlencoded", a = r({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t), -1 !== i.indexOf(e) ? [3, 2] : (c = a, [4, this.getAccessToken()]);case 1:c.access_token = s.sent().accessToken, s.label = 2;case 2:if ("storage.uploadFile" === e) {for (l in u = new FormData()) {u.hasOwnProperty(l) && void 0 !== u[l] && u.append(l, a[l]);}o = "multipart/form-data";} else o = "application/json;charset=UTF-8", u = a;return h = { headers: { "content-type": o } }, n && n.onUploadProgress && (h.onUploadProgress = n.onUploadProgress), f = t.parse, p = t.query, d = t.search, y = { env: this.config.env }, f && (y.parse = !0), p && (y = r(r({}, p), y)), g = m.formatUrl(N.protocol, N.BASE_URL, y), d && (g += d), [4, this.post(r({ url: g, data: u }, h))];case 3:if (v = s.sent(), 200 !== Number(v.status) && 200 !== Number(v.statusCode) || !v.data) throw new Error("network request error");return [2, v];}});});}, e.prototype.send = function (e, t) {return void 0 === t && (t = {}), o(this, void 0, void 0, function () {var n, r;return s(this, function (o) {switch (o.label) {case 0:return [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 1:return n = o.sent(), clearTimeout(void 0), "ACCESS_TOKEN_EXPIRED" !== n.data.code || -1 !== i.indexOf(e) ? [3, 4] : [4, this.refreshAccessToken()];case 2:return o.sent(), [4, this.request(e, t, { onUploadProgress: t.onUploadProgress })];case 3:if ((r = o.sent()).data.code) throw new Error("[" + r.data.code + "] " + r.data.message);return [2, r.data];case 4:if (n.data.code) throw new Error("[" + n.data.code + "] " + n.data.message);return [2, n.data];}});});}, e;}();n.Request = l;}),M = n(function (t, n) {var r,o = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},s = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.CUSTOM = "CUSTOM", e.NULL = "NULL";}(r = n.LOGINTYPE || (n.LOGINTYPE = {}));var i = function () {function e(e) {this._loginType = r.NULL, this.config = e, this.onLoginTypeChanged = this.onLoginTypeChanged.bind(this), L.addEventListener(L.EVENTS.LOGIN_TYPE_CHANGE, this.onLoginTypeChanged);}return e.prototype.init = function () {this.httpRequest = new D.Request(this.config), this.cache = new j.Cache(this.config.persistence), this.accessTokenKey = N.ACCESS_TOKEN + "_" + this.config.env, this.accessTokenExpireKey = N.ACCESS_TOKEN_Expire + "_" + this.config.env, this.refreshTokenKey = N.REFRESH_TOKEN + "_" + this.config.env, this.loginTypeKey = N.LOGIN_TYPE_KEY + "_" + this.config.env;}, e.prototype.onLoginTypeChanged = function (e) {this._loginType = e.data, this.cache.setStore(this.loginTypeKey, this._loginType);}, Object.defineProperty(e.prototype, "loginType", { get: function get() {return this._loginType;}, enumerable: !0, configurable: !0 }), e.prototype.setRefreshToken = function (e) {this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey), this.cache.setStore(this.refreshTokenKey, e);}, e.prototype.getRefreshTokenByWXCode = function (e, t, n) {return o(this, void 0, void 0, function () {var r;return s(this, function (o) {return "auth.getJwt", r = U.Adapter.runtime === U.RUNTIME.WX_MP ? "1" : "0", [2, this.httpRequest.send("auth.getJwt", { appid: e, loginType: t, code: n, hybridMiniapp: r }).then(function (e) {if (e.code) throw new Error("[tcb-js-sdk] 微信登录失败: " + e.code);if (e.refresh_token) return { refreshToken: e.refresh_token, accessToken: e.access_token, accessTokenExpire: e.access_token_expire };throw new Error("[tcb-js-sdk] getJwt未返回refreshToken");})];});});}, e;}();n.default = i;}),K = n(function (t, n) {var _r4,o = e && e.__extends || (_r4 = function r(e, t) {return (_r4 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r4(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},i = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},a = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var c,u,l = a(m),h = a(M);!function (e) {e.snsapi_base = "snsapi_base", e.snsapi_userinfo = "snsapi_userinfo", e.snsapi_login = "snsapi_login";}(c || (c = {})), function (e) {e.redirect = "redirect", e.prompt = "prompt";}(u || (u = {}));var f = {},p = function (e) {function t(t, n, r, o, s) {var i = e.call(this, t) || this;return i.config = t, i.appid = n, i.scope = U.Adapter.runtime === U.RUNTIME.WX_MP ? "snsapi_base" : r, i.state = s || "weixin", i.loginMode = o || "redirect", i;}return o(t, e), t.prototype.signIn = function () {return s(this, void 0, void 0, function () {var e, t, n;return i(this, function (r) {switch (r.label) {case 0:f[this.config.env] || (f[this.config.env] = this._signIn()), r.label = 1;case 1:return r.trys.push([1, 3,, 4]), [4, f[this.config.env]];case 2:return e = r.sent(), [3, 4];case 3:return n = r.sent(), t = n, [3, 4];case 4:if (f[this.config.env] = null, t) throw t;return [2, e];}});});}, t.prototype._signIn = function () {return s(this, void 0, void 0, function () {var e, t, n, r, o, s;return i(this, function (i) {switch (i.label) {case 0:if (e = this.cache.getStore(this.accessTokenKey), t = this.cache.getStore(this.accessTokenExpireKey), e) {if (t && t > Date.now()) return [2, { credential: { accessToken: e, refreshToken: this.cache.getStore(this.refreshTokenKey) } }];this.cache.removeStore(this.accessTokenKey), this.cache.removeStore(this.accessTokenExpireKey);}if (!1 === Object.values(c).includes(c[this.scope])) throw new Error("错误的scope类型");return U.Adapter.runtime !== U.RUNTIME.WX_MP ? [3, 2] : [4, l.getMiniAppCode()];case 1:return n = i.sent(), [3, 4];case 2:return [4, l.getWeixinCode()];case 3:if (!(n = i.sent())) return [2, this.redirect()];i.label = 4;case 4:return r = function (e) {switch (e) {case c.snsapi_login:return "WECHAT-OPEN";default:return "WECHAT-PUBLIC";}}(this.scope), [4, this.getRefreshTokenByWXCode(this.appid, r, n)];case 5:return o = i.sent(), s = o.refreshToken, this.cache.setStore(this.refreshTokenKey, s), o.accessToken && this.cache.setStore(this.accessTokenKey, o.accessToken), o.accessTokenExpire && this.cache.setStore(this.accessTokenExpireKey, o.accessTokenExpire + Date.now()), L.activateEvent(L.EVENTS.LOGIN_STATE_CHANGED), L.activateEvent(L.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.WECHAT), [2, { credential: { refreshToken: s } }];}});});}, t.prototype.redirect = function () {var e = l.removeParam("code", location.href);e = l.removeParam("state", e), e = encodeURIComponent(e);var t = "//open.weixin.qq.com/connect/oauth2/authorize";"snsapi_login" === this.scope && (t = "//open.weixin.qq.com/connect/qrconnect"), "redirect" === u[this.loginMode] && (location.href = t + "?appid=" + this.appid + "&redirect_uri=" + e + "&response_type=code&scope=" + this.scope + "&state=" + this.state + "#wechat_redirect");}, t;}(h.default);n.default = p;}),F = n(function (t, n) {var _r5,o = e && e.__extends || (_r5 = function r(e, t) {return (_r5 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r5(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},c = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var u = c(M),l = function (e) {function t(t) {var n = e.call(this, s(s({}, t), { persistence: "local" })) || this;return n._anonymousUuidKey = N.ANONYMOUS_UUID + "_" + n.config.env, n._loginTypeKey = N.LOGIN_TYPE_KEY + "_" + n.config.env, n;}return o(t, e), t.prototype.init = function () {e.prototype.init.call(this);}, t.prototype.signIn = function () {return i(this, void 0, void 0, function () {var e, t, n;return a(this, function (r) {switch (r.label) {case 0:return e = this.cache.getStore(this._anonymousUuidKey) || void 0, t = this.cache.getStore(this.refreshTokenKey) || void 0, [4, this.httpRequest.send("auth.signInAnonymously", { anonymous_uuid: e, refresh_token: t })];case 1:return (n = r.sent()).uuid && n.refresh_token ? (this._setAnonymousUUID(n.uuid), this.setRefreshToken(n.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return r.sent(), L.activateEvent(L.EVENTS.LOGIN_STATE_CHANGED), L.activateEvent(L.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.ANONYMOUS), [2, { credential: { refreshToken: n.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名登录失败");}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return i(this, void 0, void 0, function () {var t, n, r;return a(this, function (o) {switch (o.label) {case 0:return t = this.cache.getStore(this._anonymousUuidKey), n = this.cache.getStore(this.refreshTokenKey), [4, this.httpRequest.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: t, refresh_token: n, ticket: e })];case 1:return (r = o.sent()).refresh_token ? (this._clearAnonymousUUID(), this.setRefreshToken(r.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return o.sent(), L.activateEvent(L.EVENTS.ANONYMOUS_CONVERTED, { refresh_token: r.refresh_token }), L.activateEvent(L.EVENTS.LOGIN_TYPE_CHANGE, u.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: r.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 匿名转化失败");}});});}, t.prototype.getAllStore = function () {var e = {};return e[this.refreshTokenKey] = this.cache.getStore(this.refreshTokenKey) || "", e[this._loginTypeKey] = this.cache.getStore(this._loginTypeKey) || "", e[this.accessTokenKey] = this.cache.getStore(this.accessTokenKey) || "", e[this.accessTokenExpireKey] = this.cache.getStore(this.accessTokenExpireKey) || "", e;}, t.prototype._setAnonymousUUID = function (e) {this.cache.removeStore(this._anonymousUuidKey), this.cache.setStore(this._anonymousUuidKey, e), this.cache.setStore(this._loginTypeKey, u.LOGINTYPE.ANONYMOUS);}, t.prototype._clearAnonymousUUID = function () {this.cache.removeStore(this._anonymousUuidKey);}, t;}(u.default);n.AnonymousAuthProvider = l;}),G = n(function (t, n) {var _r6,o = e && e.__extends || (_r6 = function r(e, t) {return (_r6 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {e.__proto__ = t;} || function (e, t) {for (var n in t) {t.hasOwnProperty(n) && (e[n] = t[n]);}})(e, t);}, function (e, t) {function n() {this.constructor = e;}_r6(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n());}),s = e && e.__assign || function () {return (s = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},i = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},a = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}},c = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},u = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;};Object.defineProperty(n, "__esModule", { value: !0 });var l = c(K),h = u(M),f = function (e) {function t(t) {var n = e.call(this, t) || this;return n.config = t, n;}return o(t, e), t.prototype.init = function () {e.prototype.init.call(this), this.customAuthProvider = new h.default(this.config), this.customAuthProvider.init();}, t.prototype.weixinAuthProvider = function (e) {var t = e.appid,n = e.scope,r = e.loginMode,o = e.state,s = new l.default(this.config, t, n, r, o);return s.init(), s;}, t.prototype.signInAnonymously = function () {return i(this, void 0, void 0, function () {var e = this;return a(this, function (t) {switch (t.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new F.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), L.addEventListener(L.EVENTS.LOGIN_TYPE_CHANGE, function (t) {if (t && t.data === h.LOGINTYPE.ANONYMOUS) {var n = e._anonymousAuthProvider.getAllStore();for (var r in n) {n[r] && e.httpRequest.cache.setStore(r, n[r]);}}}), [4, this._anonymousAuthProvider.signIn()];case 1:return [2, t.sent()];}});});}, t.prototype.linkAndRetrieveDataWithTicket = function (e) {return i(this, void 0, void 0, function () {var t = this;return a(this, function (n) {switch (n.label) {case 0:return this._anonymousAuthProvider || (this._anonymousAuthProvider = new F.AnonymousAuthProvider(this.config), this._anonymousAuthProvider.init()), L.addEventListener(L.EVENTS.ANONYMOUS_CONVERTED, function (e) {var n = e.data.refresh_token;n && t.httpRequest.cache.setStore(t.refreshTokenKey, n);}), [4, this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e)];case 1:return [2, n.sent()];}});});}, t.prototype.signOut = function () {return i(this, void 0, void 0, function () {var e, t, n, r, o, s, i;return a(this, function (a) {switch (a.label) {case 0:if (this.loginType === h.LOGINTYPE.ANONYMOUS) throw new Error("[tcb-js-sdk] 匿名用户不支持登出操作");return e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, o = e.accessTokenExpireKey, "auth.logout", (s = t.getStore(n)) ? [4, this.httpRequest.send("auth.logout", { refresh_token: s })] : [2];case 1:return i = a.sent(), t.removeStore(n), t.removeStore(r), t.removeStore(o), L.activateEvent(L.EVENTS.LOGIN_STATE_CHANGED), L.activateEvent(L.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.NULL), [2, i];}});});}, t.prototype.getAccessToken = function () {return i(this, void 0, void 0, function () {var e;return a(this, function (t) {switch (t.label) {case 0:return e = {}, [4, this.httpRequest.getAccessToken()];case 1:return [2, (e.accessToken = t.sent().accessToken, e.env = this.config.env, e)];}});});}, t.prototype.onLoginStateExpire = function (e) {L.addEventListener("loginStateExpire", e);}, t.prototype.getLoginState = function () {return i(this, void 0, void 0, function () {var e, t, n, r, o;return a(this, function (s) {switch (s.label) {case 0:if (e = this.httpRequest, t = e.cache, n = e.refreshTokenKey, r = e.accessTokenKey, !(o = t.getStore(n))) return [3, 5];s.label = 1;case 1:return s.trys.push([1, 3,, 4]), [4, this.httpRequest.refreshAccessToken()];case 2:return s.sent(), [3, 4];case 3:return s.sent(), [2, null];case 4:return [2, { isAnonymous: this.loginType === h.LOGINTYPE.ANONYMOUS, credential: { refreshToken: o, accessToken: t.getStore(r) } }];case 5:return [2, null];}});});}, t.prototype.signInWithTicket = function (e) {return i(this, void 0, void 0, function () {var t, n, r, o;return a(this, function (s) {switch (s.label) {case 0:if ("string" != typeof e) throw new Error("ticket must be a string");return t = this.httpRequest, n = t.cache, r = t.refreshTokenKey, [4, this.httpRequest.send("auth.signInWithTicket", { ticket: e, refresh_token: n.getStore(r) || "" })];case 1:return (o = s.sent()).refresh_token ? (this.customAuthProvider.setRefreshToken(o.refresh_token), [4, this.httpRequest.refreshAccessToken()]) : [3, 3];case 2:return s.sent(), L.activateEvent(L.EVENTS.LOGIN_STATE_CHANGED), L.activateEvent(L.EVENTS.LOGIN_TYPE_CHANGE, h.LOGINTYPE.CUSTOM), [2, { credential: { refreshToken: o.refresh_token } }];case 3:throw new Error("[tcb-js-sdk] 自定义登录失败");}});});}, t.prototype.shouldRefreshAccessToken = function (e) {this.httpRequest._shouldRefreshAccessTokenHook = e.bind(this);}, t.prototype.getUserInfo = function () {return this.httpRequest.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : s(s({}, e.data), { requestId: e.seqId });});}, t;}(h.default);n.default = f;}),H = n(function (t, n) {var r = e && e.__awaiter || function (e, t, n, r) {return new (n || (n = Promise))(function (o, s) {function i(e) {try {c(r.next(e));} catch (e) {s(e);}}function a(e) {try {c(r.throw(e));} catch (e) {s(e);}}function c(e) {var t;e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n(function (e) {e(t);})).then(i, a);}c((r = r.apply(e, t || [])).next());});},o = e && e.__generator || function (e, t) {var n,r,o,s,i = { label: 0, sent: function sent() {if (1 & o[0]) throw o[1];return o[1];}, trys: [], ops: [] };return s = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function () {return this;}), s;function a(s) {return function (a) {return function (s) {if (n) throw new TypeError("Generator is already executing.");for (; i;) {try {if (n = 1, r && (o = 2 & s[0] ? r.return : s[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, s[1])).done) return o;switch (r = 0, o && (s = [2 & s[0], o.value]), s[0]) {case 0:case 1:o = s;break;case 4:return i.label++, { value: s[1], done: !1 };case 5:i.label++, r = s[1], s = [0];continue;case 7:s = i.ops.pop(), i.trys.pop();continue;default:if (!(o = i.trys, (o = o.length > 0 && o[o.length - 1]) || 6 !== s[0] && 2 !== s[0])) {i = 0;continue;}if (3 === s[0] && (!o || s[1] > o[0] && s[1] < o[3])) {i.label = s[1];break;}if (6 === s[0] && i.label < o[1]) {i.label = o[1], o = s;break;}if (o && i.label < o[2]) {i.label = o[2], i.ops.push(s);break;}o[2] && i.ops.pop(), i.trys.pop();continue;}s = t.call(e, i);} catch (e) {s = [6, e], r = 0;} finally {n = o = 0;}}if (5 & s[0]) throw s[1];return { value: s[0] ? s[1] : void 0, done: !0 };}([s, a]);};}};Object.defineProperty(n, "__esModule", { value: !0 }), n.uploadFile = function (e, t) {t = t || m.createPromiseCallback();var n = new D.Request(this.config),r = e.cloudPath,o = e.filePath,s = e.onUploadProgress,i = e.fileType || "image";return n.send("storage.getUploadMetadata", { path: r }).then(function (e) {var a = e.data,c = a.url,u = a.authorization,l = a.token,h = a.fileId,f = a.cosFileId,p = e.requestId,d = { key: r, signature: u, "x-cos-meta-fileid": f, success_action_status: "201", "x-cos-security-token": l };n.upload({ url: c, data: d, file: o, name: r, fileType: i, onUploadProgress: s }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: p }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;}, n.deleteFile = function (e, t) {var n = e.fileList;if (t = t || m.createPromiseCallback(), !n || !Array.isArray(n)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };for (var r = 0, o = n; r < o.length; r++) {var s = o[r];if (!s || "string" != typeof s) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}var i = { fileid_list: n };return new D.Request(this.config).send("storage.batchDeleteFile", i).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.getTempFileURL = function (e, t) {var n = e.fileList;t = t || m.createPromiseCallback(), n && Array.isArray(n) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });for (var r = [], o = 0, s = n; o < s.length; o++) {var i = s[o];"object" == typeof i ? (i.hasOwnProperty("fileID") && i.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), r.push({ fileid: i.fileID, max_age: i.maxAge })) : "string" == typeof i ? r.push({ fileid: i }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}var a = { file_list: r };return new D.Request(this.config).send("storage.batchGetDownloadUrl", a).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;}, n.downloadFile = function (e, t) {var s = e.fileID;return r(this, void 0, void 0, function () {var e, r, i, a, c;return o(this, function (o) {switch (o.label) {case 0:return [4, n.getTempFileURL.call(this, { fileList: [{ fileID: s, maxAge: 600 }] })];case 1:return e = o.sent(), "SUCCESS" !== (r = e.fileList[0]).code ? [2, t ? t(r) : new Promise(function (e) {e(r);})] : (i = r.download_url, i = encodeURI(i), a = new D.Request(this.config), t ? [4, a.download({ url: i })] : [3, 3]);case 2:return c = o.sent(), t(c), [3, 4];case 3:return [2, a.download({ url: i })];case 4:return [2];}});});};}),Y = n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 }), t.callFunction = function (e, t) {var n,r = e.name,o = e.data,s = e.query,i = e.parse,a = e.search,c = t || m.createPromiseCallback();try {n = o ? JSON.stringify(o) : "";} catch (e) {return Promise.reject(e);}if (!r) return Promise.reject(new Error("函数名不能为空"));var u = { query: s, parse: i, search: a, function_name: r, request_data: n };return new D.Request(this.config).send("functions.invokeFunction", u).then(function (e) {if (e.code) c(null, e);else {var t = e.data.response_data;if (i) c(null, { result: t, requestId: e.requestId });else try {t = JSON.parse(e.data.response_data), c(null, { result: t, requestId: e.requestId });} catch (e) {c(new Error("response data must be json"));}}return c.promise;}).catch(function (e) {c(e);}), c.promise;};}),V = t(n(function (t) {var n = e && e.__assign || function () {return (n = Object.assign || function (e) {for (var t, n = 1, r = arguments.length; n < r; n++) {for (var o in t = arguments[n]) {Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);}}return e;}).apply(this, arguments);},r = e && e.__importDefault || function (e) {return e && e.__esModule ? e : { default: e };},o = e && e.__importStar || function (e) {if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);}return t.default = e, t;},s = r(G),i = o(H),a = o(Y),c = { timeout: 15e3 },u = new (function () {function e(e) {var t = this;this.config = e || this.config, this.authObj = void 0, L.addEventListener(L.EVENTS.LOGIN_TYPE_CHANGE, function (e) {e.data === M.LOGINTYPE.ANONYMOUS && (t.config.persistence = "local");});}return e.prototype.init = function (t) {return this.config = n(n({}, c), t), U.Adapter.adapter || this._useDefaultAdapter(), new e(this.config);}, e.prototype.auth = function (e) {var t = (void 0 === e ? {} : e).persistence;return this.authObj || (this.config = n(n({}, this.config), { persistence: t || U.Adapter.adapter.primaryStorage || "session" }), this.authObj = new s.default(this.config), this.authObj.init()), this.authObj;}, e.prototype.on = function (e, t) {return L.addEventListener.apply(this, [e, t]);}, e.prototype.off = function (e, t) {return L.removeEventListener.apply(this, [e, t]);}, e.prototype.callFunction = function (e, t) {return a.callFunction.apply(this, [e, t]);}, e.prototype.deleteFile = function (e, t) {return i.deleteFile.apply(this, [e, t]);}, e.prototype.getTempFileURL = function (e, t) {return i.getTempFileURL.apply(this, [e, t]);}, e.prototype.downloadFile = function (e, t) {return i.downloadFile.apply(this, [e, t]);}, e.prototype.uploadFile = function (e, t) {return i.uploadFile.apply(this, [e, t]);}, e.prototype.useAdapters = function (e) {var t = U.useAdapters(e) || {},n = t.adapter,r = t.runtime;n && (U.Adapter.adapter = n), r && (U.Adapter.runtime = r);}, e.prototype._useDefaultAdapter = function () {var e = U.useDefaultAdapter(),t = e.adapter,n = e.runtime;U.Adapter.adapter = t, U.Adapter.runtime = n;}, e;}())();try {window.tcb = u;} catch (e) {}t.exports = u;}));function B(e, t, n) {void 0 === n && (n = {});var r = /\?/.test(t),o = "";for (var s in n) {"" === o ? !r && (t += "?") : o += "&", o += s + "=" + encodeURIComponent(n[s]);}return /^http(s)?:\/\//.test(t += o) ? t : "" + e + t;}var W = /*#__PURE__*/function () {function W() {_classCallCheck(this, W);}_createClass(W, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,r = e.headers;return new Promise(function (e, o) {d.request({ url: B("https:", t), data: n, method: "POST", header: r, success: function success(t) {e(t);}, fail: function fail(e) {o(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var r = e.url,o = e.file,s = e.data,i = e.headers,a = e.fileType,c = d.uploadFile({ url: B("https:", r), name: "file", formData: Object.assign({}, s), filePath: o, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && s.success_action_status && (n.statusCode = parseInt(s.success_action_status, 10)), t(n);}, fail: function fail(e) { false && false, n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return W;}();var z = { setItem: function setItem(e, t) {d.setStorageSync(e, t);}, getItem: function getItem(e) {return d.getStorageSync(e);}, removeItem: function removeItem(e) {d.removeStorageSync(e);}, clear: function clear() {d.clearStorageSync();} };var J = { genAdapter: function genAdapter() {return { root: {}, reqClass: W, localStorage: z, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };V.useAdapters(J);var X = V,$ = X.init;X.init = function (e) {e.env = e.spaceId;var t = $.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = s(t[e]).bind(t);}), t;};return ["deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {t[e] = s(t[e]).bind(t);}), t;};var Q, Z;function ee(e) {Q || (Q = { PLATFORM: "app-plus", OS: u, APPID: a.appid, CLIENT_SDK_VERSION: "1.0.0" }, Z = { ak: a.appid, p: "android" === u ? "a" : "i", ut: f(), uuid: h() });var t = JSON.parse(JSON.stringify(e.data || {})),n = e.name,r = this.config.spaceId,o = { tencent: "t", aliyun: "a" }[this.config.provider],s = Object.assign({}, Z, { fn: n, sid: r, pvd: o });Object.assign(t, { clientInfo: Q, uniCloudClientInfo: encodeURIComponent(JSON.stringify(s)) });var i = d.getStorageSync("uni_id_token") || d.getStorageSync("uniIdToken");return i && (t.uniIdToken = i), e.data = t, e;}var te = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);}_createClass(_class, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && "development" === "development" && ( false || "app-plus" === "app-plus");switch (e.provider) {case "tencent":t = X.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = g.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}t.isReady = !1;var r = t.auth();return t.initSignIn = r.getLoginState().then(function (e) {return e ? Promise.resolve() : r.signInAnonymously();}).then(function () {return new Promise(function (e) { false ? (undefined) : setTimeout(function () {u = uni.getSystemInfoSync().platform, c = uni.getStorageSync("__DC_CLOUD_UUID") || l(32), e();}, 0);});}).then(function () {t.isReady = !0;}), function (e) {var t = e.callFunction;e.callFunction = function (e) {var _this6 = this;var n;return n = this.isReady ? Promise.resolve() : this.initSignIn, n.then(function () {var n = ee.call(_this6, e),r = { aliyun: "aliyun", tencent: "tcb" }[_this6.config.provider];return new Promise(function (o, s) {t.call(_this6, n).then(function (t) {if (_this6.config.useDebugFunction && t && t.requestId) {var _n = JSON.stringify({ spaceId: _this6.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[".concat(r, "-request]").concat(_n, "[/").concat(r, "-request]"));}o(t);}).catch(function (t) {if (_this6.config.useDebugFunction && t && t.requestId) {var _n2 = JSON.stringify({ spaceId: _this6.config.spaceId, functionName: e.name, requestId: t.requestId });console.log("[".concat(r, "-request]").concat(_n2, "[/").concat(r, "-request]"));}t && t.message && (t.message = "[".concat(e.name, "]: ").concat(t.message)), s(t);});});});};var n = e.callFunction;e.callFunction = function (e) {return s(n).call(this, e);};}(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this7 = this;var n;return n = this.isReady ? Promise.resolve() : this.initSignIn, n.then(function () {return t.call(_this7, e);});};var n = e.uploadFile;e.uploadFile = function (e) {return s(n).call(this, e);};}(t), t.init = this.init, t;} }]);return _class;}())();try {var _e2 = {};1 === [{"provider":"aliyun","spaceName":"logistics","spaceId":"ae770067-27eb-4c02-b5cd-9620231fb68e","clientSecret":"oMapkLpnnbdCXC18mpTWpA==","endpoint":"https://api.bspapp.com"}].length && (_e2 = [{"provider":"aliyun","spaceName":"logistics","spaceId":"ae770067-27eb-4c02-b5cd-9620231fb68e","clientSecret":"oMapkLpnnbdCXC18mpTWpA==","endpoint":"https://api.bspapp.com"}][0]), te = te.init(_e2);} catch (e) {["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile"].forEach(function (e) {te[e] = function () {var e = [{"provider":"aliyun","spaceName":"logistics","spaceId":"ae770067-27eb-4c02-b5cd-9620231fb68e","clientSecret":"oMapkLpnnbdCXC18mpTWpA==","endpoint":"https://api.bspapp.com"}].length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : "应用未关联服务空间，请在cloudfunctions目录右键关联服务空间";return console.error(e), Promise.reject(new i({ code: "SYS_ERR", message: e }));};});}var ne = te;var _default = ne;exports.default = _default;

/***/ }),
/* 10 */
/*!*********************************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/pages.json?{"type":"stat"} ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"appid":"__UNI__B4701DC"});

/***/ }),
/* 11 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/*!*****************************************************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/main.js?{"page":"pages%2Froutemap%2Froutemap"} ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);\n/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_routemap_routemap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/routemap/routemap.nvue?mpType=page */ 22);\n\n        \n        \n        \n        if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {\n          Promise.prototype.finally = function(callback) {\n            var promise = this.constructor\n            return this.then(function(value) {\n              return promise.resolve(callback()).then(function() {\n                return value\n              })\n            }, function(reason) {\n              return promise.resolve(callback()).then(function() {\n                throw reason\n              })\n            })\n          }\n        }\n        _pages_routemap_routemap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].mpType = 'page'\n        _pages_routemap_routemap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].route = 'pages/routemap/routemap'\n        _pages_routemap_routemap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"].el = '#root'\n        new Vue(_pages_routemap_routemap_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n        //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLFFBQThCO0FBQzlCLFFBQW9FO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLGVBQWU7QUFDZixhQUFhO0FBQ2I7QUFDQTtBQUNBLFFBQVEsaUZBQUc7QUFDWCxRQUFRLGlGQUFHO0FBQ1gsUUFBUSxpRkFBRztBQUNYLGdCQUFnQixpRkFBRyIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvcm91dGVtYXAvcm91dGVtYXAubnZ1ZT9tcFR5cGU9cGFnZSdcbiAgICAgICAgaWYgKHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJyAmJiAhUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSkge1xuICAgICAgICAgIFByb21pc2UucHJvdG90eXBlLmZpbmFsbHkgPSBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLmNvbnN0cnVjdG9yXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWVcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKHJlYXNvbikge1xuICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgcmVhc29uXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBBcHAubXBUeXBlID0gJ3BhZ2UnXG4gICAgICAgIEFwcC5yb3V0ZSA9ICdwYWdlcy9yb3V0ZW1hcC9yb3V0ZW1hcCdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!***********************************************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/pages/routemap/routemap.nvue?mpType=page ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routemap.nvue?vue&type=template&id=742c4148&scoped=true&mpType=page */ 23);\n/* harmony import */ var _routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routemap.nvue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 14);\n\nvar renderjs\n\n\nfunction injectStyles (context) {\n  \n  if(!this.options.style){\n          this.options.style = {}\n      }\n      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){\n        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)\n      }\n      if(Vue.prototype.__merge_style){\n                Vue.prototype.__merge_style(__webpack_require__(/*! ./routemap.nvue?vue&type=style&index=0&id=742c4148&scoped=true&lang=css&mpType=page */ 28).default, this.options.style)\n            }else{\n                Object.assign(this.options.style,__webpack_require__(/*! ./routemap.nvue?vue&type=style&index=0&id=742c4148&scoped=true&lang=css&mpType=page */ 28).default)\n            }\n\n}\n\n/* normalize component */\n\nvar component = Object(_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"742c4148\",\n  \"715b7800\",\n  false,\n  _routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ninjectStyles.call(component)\ncomponent.options.__file = \"pages/routemap/routemap.nvue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkk7QUFDN0k7QUFDd0U7QUFDTDtBQUNuRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxtQkFBTyxDQUFDLDZGQUFxRjtBQUN6SSxhQUFhO0FBQ2IsaURBQWlELG1CQUFPLENBQUMsNkZBQXFGO0FBQzlJOztBQUVBOztBQUVBO0FBQ3VNO0FBQ3ZNLGdCQUFnQiwyTUFBVTtBQUMxQixFQUFFLDBGQUFNO0FBQ1IsRUFBRSwyR0FBTTtBQUNSLEVBQUUsb0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDZSxnRiIsImZpbGUiOiIyMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vcm91dGVtYXAubnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NDJjNDE0OCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcm91dGVtYXAubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9yb3V0ZW1hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmZ1bmN0aW9uIGluamVjdFN0eWxlcyAoY29udGV4dCkge1xuICBcbiAgaWYoIXRoaXMub3B0aW9ucy5zdHlsZSl7XG4gICAgICAgICAgdGhpcy5vcHRpb25zLnN0eWxlID0ge31cbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18pe1xuICAgICAgICBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUoVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fLCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICB9XG4gICAgICBpZihWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUpe1xuICAgICAgICAgICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShyZXF1aXJlKFwiLi9yb3V0ZW1hcC5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzQyYzQxNDgmc2NvcGVkPXRydWUmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIikuZGVmYXVsdCwgdGhpcy5vcHRpb25zLnN0eWxlKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMuc3R5bGUscmVxdWlyZShcIi4vcm91dGVtYXAubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc0MmM0MTQ4JnNjb3BlZD10cnVlJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi43LjUuMjAyMDA1MTkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzQyYzQxNDhcIixcbiAgXCI3MTViNzgwMFwiLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuaW5qZWN0U3R5bGVzLmNhbGwoY29tcG9uZW50KVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9yb3V0ZW1hcC9yb3V0ZW1hcC5udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*****************************************************************************************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/pages/routemap/routemap.nvue?vue&type=template&id=742c4148&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./routemap.nvue?vue&type=template&id=742c4148&scoped=true&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_template_id_742c4148_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/editcode/vue/HbuilderProject/Logistics/pages/routemap/routemap.nvue?vue&type=template&id=742c4148&scoped=true&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c(
        "view",
        { staticClass: ["map"] },
        [
          _vm.isshow
            ? _c("map", {
                ref: "my-map",
                staticClass: ["my-map"],
                style: { height: _vm.allScreen - 84 + "px" },
                attrs: {
                  id: "my-map",
                  latitude: _vm.myLatitude,
                  longitude: _vm.myLongitude,
                  markers: _vm.markers,
                  enable3D: "true",
                  showCompass: "true",
                  showLocation: "true",
                  polyline: _vm.myPolyline
                }
              })
            : _vm._e(),
          _c(
            "cover-view",
            { staticClass: ["control-btn"] },
            [
              _c(
                "cover-view",
                { staticClass: ["location"], on: { click: _vm.recLocation } },
                [
                  _c("cover-image", {
                    staticClass: ["control-btn-location-img"],
                    attrs: { src: "../../static/imgs/location.png" }
                  })
                ],
                1
              ),
              _c(
                "cover-view",
                { staticClass: ["assemble"], on: { click: _vm.endRec } },
                [
                  _c("cover-image", {
                    staticClass: ["control-btn-assemble-img"],
                    attrs: { src: "../../static/imgs/assemble.png" }
                  })
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 25 */
/*!***********************************************************************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/pages/routemap/routemap.nvue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./routemap.nvue?vue&type=script&lang=js&mpType=page */ 26);\n/* harmony import */ var _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStoQixDQUFnQixrakJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNy41LjIwMjAwNTE5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNy41LjIwMjAwNTE5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi43LjUuMjAyMDA1MTkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3V0ZW1hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNy41LjIwMjAwNTE5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYLjIuNy41LjIwMjAwNTE5LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQnVpbGRlclguMi43LjUuMjAyMDA1MTkuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3V0ZW1hcC5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/editcode/vue/HbuilderProject/Logistics/pages/routemap/routemap.nvue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, uniCloud) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nvar amapFile = __webpack_require__(/*! @/util/amap-uni.js */ 27);\nvar myAmapFun = new amapFile.AMapWX({ key: '987291d2667a1c38f9ab946ce94f071f' });\nvar key = '987291d2667a1c38f9ab946ce94f071f';var _default =\n{\n  data: function data() {\n    return {\n      id: 0,\n      allScreen: '',\n      myLatitude: '', //纬度\n      myLongitude: '', //经度\n      isshow: true,\n      markers: [\n      {\n        id: 1,\n        latitude: '45.721625',\n        longitude: '126.634945',\n        title: '测试点'\n        // iconPath: '/static/imgs/start.png'\n        // width: '50px',\n        // height: '50px'\n      }],\n\n      point: [\n      {\n        Lat: 'null',\n        Log: 'null' }],\n\n\n      weather: '', //天气\n      temperature: '', //温度\n      myPolyline: [], //路线\n      timer: null,\n      count: 0,\n      isEnd: false };\n\n  },\n  onLoad: function onLoad() {\n    var that = this;\n    that.getMyLocation();\n    uni.getSystemInfo({\n      success: function success(e) {\n        that.allScreen = e.screenHeight;\n      },\n      fail: function fail(e) {\n        __f__(\"log\", e, \" at pages/routemap/routemap.nvue:73\");\n      } });\n\n    myAmapFun.getWeather({\n      success: function success(data) {\n        that.weather = data.weather.data;\n        that.temperature = data.temperature.data;\n        __f__(\"log\", data.weather.data, \" at pages/routemap/routemap.nvue:80\");\n      },\n      fail: function fail(info) {\n        //失败回调\n        __f__(\"log\", info, \" at pages/routemap/routemap.nvue:84\");\n      } });\n\n  },\n  onReady: function onReady(res) {\n    this.mapContext = uni.createMapContext('my-map', this);\n  },\n  methods: {\n    // getRoute() {\n    // \tlet that = this;\n    // \tvar myAmapFun = new amapFile.AMapWX({ key: that.$store.state.amapKey });\n    // \tthat.mapContext.includePoints({\n    // \t\t//缩放视野展示所有经纬度\n    // \t\tpoints: [\n    // \t\t\t{\n    // \t\t\t\tlatitude: that.myLatitude,\n    // \t\t\t\tlongitude: that.myLongitude\n    // \t\t\t},\n    // \t\t\t{\n    // \t\t\t\tlatitude: that.markers[0].latitude,\n    // \t\t\t\tlongitude: that.markers[0].longitude\n    // \t\t\t}\n    // \t\t]\n    // \t});\n    // \tvar myLocal = that.myLongitude + ',' + that.myLatitude;\n    // \tvar target = that.markers[0].longitude + ',' + that.markers[0].latitude;\n    // \tmyAmapFun.getWalkingRoute({\n    // \t\t//获取步行线路\n    // \t\torigin: myLocal,\n    // \t\tdestination: target,\n    // \t\tsuccess: function(data) {\n    // \t\t\tconsole.log(data);\n    // \t\t\t//获取线路规划的数据，后面还需要在地图上画出来，未完成，完成后会发新博客\n    // \t\t},\n    // \t\tfail: function(info) {\n    // \t\t\tconsole.log(info);\n    // \t\t}\n    // \t});\n    // },\n    getMyLocation: function getMyLocation() {\n      var that = this;\n      uni.getLocation({\n        type: 'gcj02',\n        success: function success(res) {\n          that.myLatitude = res.latitude;\n          that.myLongitude = res.longitude;\n          __f__(\"log\", 'myLatitude为' + that.myLatitude, \" at pages/routemap/routemap.nvue:130\");\n          __f__(\"log\", 'myLongitude为' + that.myLongitude, \" at pages/routemap/routemap.nvue:131\");\n          var point = [];\n          var curloc = {\n            Lat: that.myLatitude,\n            Log: that.myLongitude };\n\n          var markerpoint = {\n            id: that.markers.length + 1,\n            latitude: that.myLatitude.toString(),\n            longitude: that.myLongitude.toString(),\n            title: '123'\n            // iconPath: '/static/logo.png'\n          };\n          that.point.push(curloc);\n          // var markers = [];\n          that.markers.push(markerpoint);\n          // that.isshow = false;\n          // setTimeout(() => {\n          // \tthat.isshow = true;\n          // }, 100);\n          __f__(\"log\", that.markers, \" at pages/routemap/routemap.nvue:151\");\n        },\n        fail: function fail(e) {\n          __f__(\"log\", e, \" at pages/routemap/routemap.nvue:154\");\n        } });\n\n    },\n    recLocation: function recLocation() {var _this = this;\n      __f__(\"log\", Date.now(), \" at pages/routemap/routemap.nvue:159\");\n      this.isEnd = false;\n      this.timer = setInterval(function () {\n        var that = _this;\n        // setTimeout(() => {\n        // \t\n        // },2000);\n        that.getMyLocation();\n        that.count += 1;\n        if (that.isEnd === true) {\n          clearInterval(that.timer);\n          __f__(\"log\", that.count, \" at pages/routemap/routemap.nvue:170\");\n        }\n      }, 2000);\n      // this.getMyLocation();\n    },\n    endRec: function endRec() {\n      this.isEnd = true;\n\n      // },\n      // add() {\n      uni.showLoading({\n        title: '处理中...' });\n\n      uniCloud.callFunction({\n        name: 'add',\n        data: {\n          markers: this.markers,\n          createTime: Date.now() } }).\n\n      then(function (res) {\n        uni.hideLoading();\n        uni.showModal({\n          content: \"\\u6210\\u529F\\u6DFB\\u52A0\\u4E00\\u6761\\u6570\\u636E\\uFF0C\\u6587\\u6863id\\u4E3A\\uFF1A\".concat(res.result.id),\n          showCancel: false });\n\n        __f__(\"log\", res, \" at pages/routemap/routemap.nvue:195\");\n      }).catch(function (err) {\n        uni.hideLoading();\n        uni.showModal({\n          content: \"\\u6DFB\\u52A0\\u6570\\u636E\\u5931\\u8D25\\uFF0C\\u9519\\u8BEF\\u4FE1\\u606F\\u4E3A\\uFF1A\".concat(err.message),\n          showCancel: false });\n\n        __f__(\"error\", err, \" at pages/routemap/routemap.nvue:202\");\n      });\n      this.markers = [];\n    },\n    locationClick: function locationClick() {\n      __f__(\"log\", 'location', \" at pages/routemap/routemap.nvue:207\");\n      var that = this;\n      that.getMyLocation();\n      that.mapContext.moveToLocation({\n        longitude: that.myLongitude,\n        latitude: that.myLatitude,\n        success: function success(res) {\n          __f__(\"log\", '刷新成功', \" at pages/routemap/routemap.nvue:214\");\n        },\n        fail: function fail(e) {\n          __f__(\"log\", '调用失败', \" at pages/routemap/routemap.nvue:217\");\n          __f__(\"log\", e, \" at pages/routemap/routemap.nvue:218\");\n        },\n        complete: function complete() {\n          __f__(\"log\", '调用结束', \" at pages/routemap/routemap.nvue:221\");\n        } });\n\n    },\n    assembleClick: function assembleClick() {\n      uni.chooseLocation({\n        success: function success(res) {\n          __f__(\"log\", '位置名称：' + res.name, \" at pages/routemap/routemap.nvue:228\");\n          __f__(\"log\", '详细地址：' + res.address, \" at pages/routemap/routemap.nvue:229\");\n          __f__(\"log\", '纬度：' + res.latitude, \" at pages/routemap/routemap.nvue:230\");\n          __f__(\"log\", '经度：' + res.longitude, \" at pages/routemap/routemap.nvue:231\");\n        } });\n\n    }\n    // getWay(point) {\n    // \tlet that = this;\n    // \tvar startPoi = that.longitude + ',' + that.latitude;\n    // \tvar endPoi = point;\n    // \t//画路线\n    // \tthat.getLine(startPoi, endPoi, function(res, data) {\n    // \t\tthat.polyline.push(res); //返回的路线，添加到路线数组中\n    // \t});\n    // \t//画起始点\n    // \tthat.getMarkers(startPoi, endPoi, function(res) {\n    // \t\tthat.markers.push.apply(that.markers, res); //返回包括起点和终点marker的数组，将这个数组与markers数组合并\n    // \t});\n    // },\n    // getLine(start, end, result, fail) {\n    // \tlet that = this;\n    // \tvar myAmapFun = new amapFile.AMapWX({\n    // \t\tkey: key\n    // \t});\n\n    // \tmyAmapFun.getWalkingRoute({\n    // \t\t//获取步行路线规划\n    // \t\t//需要其他方式的可以参考官方文档改success里的方法，逻辑差不多\n    // \t\t//官方文档https://lbs.amap.com/api/wx/reference/core\n    // \t\torigin: start,\n    // \t\tdestination: end,\n    // \t\tsuccess: function(data) {\n    // \t\t\tconsole.log(data);\n    // \t\t\tvar points = [];\n    // \t\t\tif (data.paths && data.paths[0] && data.paths[0].steps) {\n    // \t\t\t\tvar steps = data.paths[0].steps;\n    // \t\t\t\tfor (var i = 0; i < steps.length; i++) {\n    // \t\t\t\t\t//将每一步的数据放到points数组中\n    // \t\t\t\t\tvar poLen = steps[i].polyline.split(';');\n    // \t\t\t\t\tfor (var j = 0; j < poLen.length; j++) {\n    // \t\t\t\t\t\tpoints.push({\n    // \t\t\t\t\t\t\tlongitude: parseFloat(poLen[j].split(',')[0]),\n    // \t\t\t\t\t\t\tlatitude: parseFloat(poLen[j].split(',')[1])\n    // \t\t\t\t\t\t});\n    // \t\t\t\t\t}\n    // \t\t\t\t}\n    // \t\t\t}\n    // \t\t\tresult(\n    // \t\t\t\t{\n    // \t\t\t\t\tpoints: points,\n    // \t\t\t\t\tcolor: '#0898ef',\n    // \t\t\t\t\twidth: 8\n    // \t\t\t\t},\n    // \t\t\t\tdata\n    // \t\t\t); //返回data是为了添加路线详情的步骤，不需要可以去掉\n    // \t\t},\n    // \t\tfail: function(info) {\n    // \t\t\tfail(info);\n    // \t\t}\n    // \t});\n    // },\n    // getMarkers(startpoi, endpoi, success) {\n    // \tlet markers = [];\n\n    // \t//起点\n    // \tlet start = {\n    // \t\ticonPath: '/static/imgs/start.png', //起点图片\n    // \t\tid: 0,\n    // \t\tlongitude: startpoi.split(',')[0],\n    // \t\tlatitude: startpoi.split(',')[1],\n    // \t\twidth: 28,\n    // \t\theight: 33\n    // \t};\n    // \tmarkers.push(start);\n    // \t//终点\n    // \tlet end = {\n    // \t\ticonPath: '/static/imgs/end.png', //重点图片\n    // \t\tid: 1,\n    // \t\tlongitude: endpoi.split(',')[0],\n    // \t\tlatitude: endpoi.split(',')[1],\n    // \t\twidth: 28,\n    // \t\theight: 33,\n    // \t\tcallout: {\n    // \t\t\t//终点的点击气泡\n    // \t\t\tcontent: '集合点',\n    // \t\t\tborderRadius: 6,\n    // \t\t\tbgColor: '#ffffff',\n    // \t\t\tdisplay: 'BYCLICK',\n    // \t\t\ttextAlign: 'center'\n    // \t\t}\n    // \t};\n    // \tmarkers.push(end);\n\n    // \tsuccess(markers);\n    // }\n  }\n  // computed: {\n  // \tweatherImg: function() {\n  // \t\t//返回天气图片，未完善\n  // \t\t//全部天气类型在https://lbs.amap.com/api/webservice/guide/tools/weather-code/\n  // \t\tswitch (this.weather) {\n  // \t\t\tcase '晴':\n  // \t\t\t\treturn 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-tourism/fd3680c0-797a-11ea-b997-9918a5dda011.png';\n  // \t\t\t\tbreak;\n  // \t\t\tcase '多云':\n  // \t\t\t\treturn 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-tourism/fd29d690-797a-11ea-b94e-47f67ecf8268.png';\n  // \t\t\t\tbreak;\n  // \t\t\tdefault:\n  // \t\t\t\treturn 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-tourism/fd34fa20-797a-11ea-b94e-47f67ecf8268.png';\n  // \t\t}\n  // \t}\n  // }\n};exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 11)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 9)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvcm91dGVtYXAvcm91dGVtYXAubnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0E7QUFDQSw2QztBQUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsV0FEQTtBQUVBLG1CQUZBO0FBR0Esb0JBSEEsRUFHQTtBQUNBLHFCQUpBLEVBSUE7QUFDQSxrQkFMQTtBQU1BO0FBQ0E7QUFDQSxhQURBO0FBRUEsNkJBRkE7QUFHQSwrQkFIQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBUEEsT0FEQSxDQU5BOztBQWlCQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxtQkFGQSxFQURBLENBakJBOzs7QUF1QkEsaUJBdkJBLEVBdUJBO0FBQ0EscUJBeEJBLEVBd0JBO0FBQ0Esb0JBekJBLEVBeUJBO0FBQ0EsaUJBMUJBO0FBMkJBLGNBM0JBO0FBNEJBLGtCQTVCQTs7QUE4QkEsR0FoQ0E7QUFpQ0EsUUFqQ0Esb0JBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSEE7QUFJQTtBQUNBO0FBQ0EsT0FOQTs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBLE9BVEE7O0FBV0EsR0F2REE7QUF3REE7QUFDQTtBQUNBLEdBMURBO0FBMkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFoQ0EsMkJBZ0NBO0FBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLGlDQUZBOztBQUlBO0FBQ0EsdUNBREE7QUFFQSxnREFGQTtBQUdBLGtEQUhBO0FBSUE7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBM0JBO0FBNEJBO0FBQ0E7QUFDQSxTQTlCQTs7QUFnQ0EsS0FsRUE7QUFtRUEsZUFuRUEseUJBbUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVhBLEVBV0EsSUFYQTtBQVlBO0FBQ0EsS0FuRkE7QUFvRkEsVUFwRkEsb0JBb0ZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBREE7O0FBR0E7QUFDQSxtQkFEQTtBQUVBO0FBQ0EsK0JBREE7QUFFQSxnQ0FGQSxFQUZBOztBQU1BLFVBTkEsQ0FNQTtBQUNBO0FBQ0E7QUFDQSwySEFEQTtBQUVBLDJCQUZBOztBQUlBO0FBQ0EsT0FiQSxFQWFBLEtBYkEsQ0FhQTtBQUNBO0FBQ0E7QUFDQSx1SEFEQTtBQUVBLDJCQUZBOztBQUlBO0FBQ0EsT0FwQkE7QUFxQkE7QUFDQSxLQWxIQTtBQW1IQSxpQkFuSEEsMkJBbUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FEQTtBQUVBLGlDQUZBO0FBR0E7QUFDQTtBQUNBLFNBTEE7QUFNQTtBQUNBO0FBQ0E7QUFDQSxTQVRBO0FBVUE7QUFDQTtBQUNBLFNBWkE7O0FBY0EsS0FySUE7QUFzSUEsaUJBdElBLDJCQXNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBTkE7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBeE9BO0FBME9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcFRBLEMiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJtYXBcIj5cclxuXHRcdDxtYXBcclxuXHRcdFx0aWQ9XCJteS1tYXBcIlxyXG5cdFx0XHRyZWY9XCJteS1tYXBcIlxyXG5cdFx0XHRjbGFzcz1cIm15LW1hcFwiXHJcblx0XHRcdDpzdHlsZT1cInsgaGVpZ2h0OiBhbGxTY3JlZW4gLSA4NCArICdweCcgfVwiXHJcblx0XHRcdDpsYXRpdHVkZT1cIm15TGF0aXR1ZGVcIlxyXG5cdFx0XHQ6bG9uZ2l0dWRlPVwibXlMb25naXR1ZGVcIlxyXG5cdFx0XHQ6bWFya2Vycz1cIm1hcmtlcnNcIlxyXG5cdFx0XHRlbmFibGUtM0Q9XCJ0cnVlXCJcclxuXHRcdFx0c2hvdy1jb21wYXNzPVwidHJ1ZVwiXHJcblx0XHRcdHNob3ctbG9jYXRpb249XCJ0cnVlXCJcclxuXHRcdFx0di1pZj1cImlzc2hvd1wiXHJcblx0XHRcdDpwb2x5bGluZT1cIm15UG9seWxpbmVcIlxyXG5cdFx0PjwvbWFwPlxyXG5cdFx0PCEtLSDmoLflvI/ph4zlh480NHB45piv5Zug5Li66buY6K6k55qE5a+86Iiq5qCP6auY5bqm5Li6NDRweCAtLT5cclxuXHRcdDxjb3Zlci12aWV3IGNsYXNzPVwiY29udHJvbC1idG5cIj5cclxuXHRcdFx0PGNvdmVyLXZpZXcgY2xhc3M9XCJsb2NhdGlvblwiIEB0YXA9XCJyZWNMb2NhdGlvblwiPjxjb3Zlci1pbWFnZSBjbGFzcz1cImNvbnRyb2wtYnRuLWxvY2F0aW9uLWltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWdzL2xvY2F0aW9uLnBuZ1wiPjwvY292ZXItaW1hZ2U+PC9jb3Zlci12aWV3PlxyXG5cdFx0XHQ8Y292ZXItdmlldyBjbGFzcz1cImFzc2VtYmxlXCIgQHRhcD1cImVuZFJlY1wiPlxyXG5cdFx0XHRcdDxjb3Zlci1pbWFnZSBjbGFzcz1cImNvbnRyb2wtYnRuLWFzc2VtYmxlLWltZ1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWdzL2Fzc2VtYmxlLnBuZ1wiPjwvY292ZXItaW1hZ2U+XHJcblx0XHRcdDwvY292ZXItdmlldz5cclxuXHRcdDwvY292ZXItdmlldz5cclxuXHRcdDwhLS0gPHZpZXcgc3R5bGU9XCJtYXJnaW46IDE1cnB4O1wiPuW9k+WJjeS9jee9ruS/oeaBr++8mmxuZzp7eyBwb2ludFsxXS5MYXQgfX0gLCBsYXQ6e3sgcG9pbnRbMV0uTGF0IH19PC92aWV3PiAtLT5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG52YXIgYW1hcEZpbGUgPSByZXF1aXJlKCdAL3V0aWwvYW1hcC11bmkuanMnKTtcclxudmFyIG15QW1hcEZ1biA9IG5ldyBhbWFwRmlsZS5BTWFwV1goeyBrZXk6ICc5ODcyOTFkMjY2N2ExYzM4ZjlhYjk0NmNlOTRmMDcxZicgfSk7XHJcbmNvbnN0IGtleSA9ICc5ODcyOTFkMjY2N2ExYzM4ZjlhYjk0NmNlOTRmMDcxZic7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRkYXRhKCkge1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0aWQ6IDAsXHJcblx0XHRcdGFsbFNjcmVlbjogJycsXHJcblx0XHRcdG15TGF0aXR1ZGU6ICcnLCAvL+e6rOW6plxyXG5cdFx0XHRteUxvbmdpdHVkZTogJycsIC8v57uP5bqmXHJcblx0XHRcdGlzc2hvdzogdHJ1ZSxcclxuXHRcdFx0bWFya2VyczogW1xyXG5cdFx0XHRcdHtcclxuXHRcdFx0XHRcdGlkOiAxLFxyXG5cdFx0XHRcdFx0bGF0aXR1ZGU6ICc0NS43MjE2MjUnLFxyXG5cdFx0XHRcdFx0bG9uZ2l0dWRlOiAnMTI2LjYzNDk0NScsXHJcblx0XHRcdFx0XHR0aXRsZTogJ+a1i+ivleeCuScsXHJcblx0XHRcdFx0XHQvLyBpY29uUGF0aDogJy9zdGF0aWMvaW1ncy9zdGFydC5wbmcnXHJcblx0XHRcdFx0XHQvLyB3aWR0aDogJzUwcHgnLFxyXG5cdFx0XHRcdFx0Ly8gaGVpZ2h0OiAnNTBweCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdF0sXHJcblx0XHRcdHBvaW50OiBbXHJcblx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0TGF0OiAnbnVsbCcsXHJcblx0XHRcdFx0XHRMb2c6ICdudWxsJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XSxcclxuXHRcdFx0d2VhdGhlcjogJycsIC8v5aSp5rCUXHJcblx0XHRcdHRlbXBlcmF0dXJlOiAnJywgLy/muKnluqZcclxuXHRcdFx0bXlQb2x5bGluZTogW10sIC8v6Lev57q/XHJcblx0XHRcdHRpbWVyOiBudWxsLFxyXG5cdFx0XHRjb3VudDogMCxcclxuXHRcdFx0aXNFbmQ6IGZhbHNlLFxyXG5cdFx0fTtcclxuXHR9LFxyXG5cdG9uTG9hZCgpIHtcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdHRoYXQuZ2V0TXlMb2NhdGlvbigpO1xyXG5cdFx0dW5pLmdldFN5c3RlbUluZm8oe1xyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0dGhhdC5hbGxTY3JlZW4gPSBlLnNjcmVlbkhlaWdodDtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG15QW1hcEZ1bi5nZXRXZWF0aGVyKHtcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0XHRcdHRoYXQud2VhdGhlciA9IGRhdGEud2VhdGhlci5kYXRhO1xyXG5cdFx0XHRcdHRoYXQudGVtcGVyYXR1cmUgPSBkYXRhLnRlbXBlcmF0dXJlLmRhdGE7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coZGF0YS53ZWF0aGVyLmRhdGEpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOiBmdW5jdGlvbihpbmZvKSB7XHJcblx0XHRcdFx0Ly/lpLHotKXlm57osINcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhpbmZvKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fSxcclxuXHRvblJlYWR5OiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdHRoaXMubWFwQ29udGV4dCA9IHVuaS5jcmVhdGVNYXBDb250ZXh0KCdteS1tYXAnLCB0aGlzKTtcclxuXHR9LFxyXG5cdG1ldGhvZHM6IHtcclxuXHRcdC8vIGdldFJvdXRlKCkge1xyXG5cdFx0Ly8gXHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHQvLyBcdHZhciBteUFtYXBGdW4gPSBuZXcgYW1hcEZpbGUuQU1hcFdYKHsga2V5OiB0aGF0LiRzdG9yZS5zdGF0ZS5hbWFwS2V5IH0pO1xyXG5cdFx0Ly8gXHR0aGF0Lm1hcENvbnRleHQuaW5jbHVkZVBvaW50cyh7XHJcblx0XHQvLyBcdFx0Ly/nvKnmlL7op4bph47lsZXnpLrmiYDmnInnu4/nuqzluqZcclxuXHRcdC8vIFx0XHRwb2ludHM6IFtcclxuXHRcdC8vIFx0XHRcdHtcclxuXHRcdC8vIFx0XHRcdFx0bGF0aXR1ZGU6IHRoYXQubXlMYXRpdHVkZSxcclxuXHRcdC8vIFx0XHRcdFx0bG9uZ2l0dWRlOiB0aGF0Lm15TG9uZ2l0dWRlXHJcblx0XHQvLyBcdFx0XHR9LFxyXG5cdFx0Ly8gXHRcdFx0e1xyXG5cdFx0Ly8gXHRcdFx0XHRsYXRpdHVkZTogdGhhdC5tYXJrZXJzWzBdLmxhdGl0dWRlLFxyXG5cdFx0Ly8gXHRcdFx0XHRsb25naXR1ZGU6IHRoYXQubWFya2Vyc1swXS5sb25naXR1ZGVcclxuXHRcdC8vIFx0XHRcdH1cclxuXHRcdC8vIFx0XHRdXHJcblx0XHQvLyBcdH0pO1xyXG5cdFx0Ly8gXHR2YXIgbXlMb2NhbCA9IHRoYXQubXlMb25naXR1ZGUgKyAnLCcgKyB0aGF0Lm15TGF0aXR1ZGU7XHJcblx0XHQvLyBcdHZhciB0YXJnZXQgPSB0aGF0Lm1hcmtlcnNbMF0ubG9uZ2l0dWRlICsgJywnICsgdGhhdC5tYXJrZXJzWzBdLmxhdGl0dWRlO1xyXG5cdFx0Ly8gXHRteUFtYXBGdW4uZ2V0V2Fsa2luZ1JvdXRlKHtcclxuXHRcdC8vIFx0XHQvL+iOt+WPluatpeihjOe6v+i3r1xyXG5cdFx0Ly8gXHRcdG9yaWdpbjogbXlMb2NhbCxcclxuXHRcdC8vIFx0XHRkZXN0aW5hdGlvbjogdGFyZ2V0LFxyXG5cdFx0Ly8gXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKGRhdGEpO1xyXG5cdFx0Ly8gXHRcdFx0Ly/ojrflj5bnur/ot6/op4TliJLnmoTmlbDmja7vvIzlkI7pnaLov5jpnIDopoHlnKjlnLDlm77kuIrnlLvlh7rmnaXvvIzmnKrlrozmiJDvvIzlrozmiJDlkI7kvJrlj5HmlrDljZrlrqJcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHRcdGZhaWw6IGZ1bmN0aW9uKGluZm8pIHtcclxuXHRcdC8vIFx0XHRcdGNvbnNvbGUubG9nKGluZm8pO1xyXG5cdFx0Ly8gXHRcdH1cclxuXHRcdC8vIFx0fSk7XHJcblx0XHQvLyB9LFxyXG5cdFx0Z2V0TXlMb2NhdGlvbigpIHtcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHR1bmkuZ2V0TG9jYXRpb24oe1xyXG5cdFx0XHRcdHR5cGU6ICdnY2owMicsXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHR0aGF0Lm15TGF0aXR1ZGUgPSByZXMubGF0aXR1ZGU7XHJcblx0XHRcdFx0XHR0aGF0Lm15TG9uZ2l0dWRlID0gcmVzLmxvbmdpdHVkZTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdteUxhdGl0dWRl5Li6JyArIHRoYXQubXlMYXRpdHVkZSk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnbXlMb25naXR1ZGXkuLonICsgdGhhdC5teUxvbmdpdHVkZSk7XHJcblx0XHRcdFx0XHR2YXIgcG9pbnQgPSBbXTtcclxuXHRcdFx0XHRcdGxldCBjdXJsb2MgPSB7XHJcblx0XHRcdFx0XHRcdExhdDogdGhhdC5teUxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRMb2c6IHRoYXQubXlMb25naXR1ZGVcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRsZXQgbWFya2VycG9pbnQgPSB7XHJcblx0XHRcdFx0XHRcdGlkOiB0aGF0Lm1hcmtlcnMubGVuZ3RoICsgMSxcclxuXHRcdFx0XHRcdFx0bGF0aXR1ZGU6IHRoYXQubXlMYXRpdHVkZS50b1N0cmluZygpLFxyXG5cdFx0XHRcdFx0XHRsb25naXR1ZGU6IHRoYXQubXlMb25naXR1ZGUudG9TdHJpbmcoKSxcclxuXHRcdFx0XHRcdFx0dGl0bGU6ICcxMjMnLFxyXG5cdFx0XHRcdFx0XHQvLyBpY29uUGF0aDogJy9zdGF0aWMvbG9nby5wbmcnXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0dGhhdC5wb2ludC5wdXNoKGN1cmxvYyk7XHJcblx0XHRcdFx0XHQvLyB2YXIgbWFya2VycyA9IFtdO1xyXG5cdFx0XHRcdFx0dGhhdC5tYXJrZXJzLnB1c2gobWFya2VycG9pbnQpO1xyXG5cdFx0XHRcdFx0Ly8gdGhhdC5pc3Nob3cgPSBmYWxzZTtcclxuXHRcdFx0XHRcdC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gXHR0aGF0Lmlzc2hvdyA9IHRydWU7XHJcblx0XHRcdFx0XHQvLyB9LCAxMDApO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5tYXJrZXJzKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGZhaWw6IGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cdFx0cmVjTG9jYXRpb24oKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKERhdGUubm93KCkpO1xyXG5cdFx0XHR0aGlzLmlzRW5kPWZhbHNlO1xyXG5cdFx0XHR0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG5cdFx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHQvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHRcdFx0XHQvLyBcdFxyXG5cdFx0XHRcdC8vIH0sMjAwMCk7XHJcblx0XHRcdFx0dGhhdC5nZXRNeUxvY2F0aW9uKCk7XHJcblx0XHRcdFx0dGhhdC5jb3VudCArPSAxO1xyXG5cdFx0XHRcdGlmICh0aGF0LmlzRW5kID09PSB0cnVlKSB7XHJcblx0XHRcdFx0XHRjbGVhckludGVydmFsKHRoYXQudGltZXIpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2codGhhdC5jb3VudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCAyMDAwKTtcclxuXHRcdFx0Ly8gdGhpcy5nZXRNeUxvY2F0aW9uKCk7XHJcblx0XHR9LFxyXG5cdFx0ZW5kUmVjKCl7XHJcblx0XHRcdHRoaXMuaXNFbmQ9dHJ1ZTtcclxuXHRcdFx0XHJcblx0XHQvLyB9LFxyXG5cdFx0Ly8gYWRkKCkge1xyXG5cdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdHRpdGxlOiAn5aSE55CG5LitLi4uJ1xyXG5cdFx0XHR9KVxyXG5cdFx0XHR1bmlDbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG5cdFx0XHRcdG5hbWU6ICdhZGQnLFxyXG5cdFx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRcdG1hcmtlcnM6dGhpcy5tYXJrZXJzLFxyXG5cdFx0XHRcdFx0Y3JlYXRlVGltZTogRGF0ZS5ub3coKVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSkudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKClcclxuXHRcdFx0XHR1bmkuc2hvd01vZGFsKHtcclxuXHRcdFx0XHRcdGNvbnRlbnQ6IGDmiJDlip/mt7vliqDkuIDmnaHmlbDmja7vvIzmlofmoaNpZOS4uu+8miR7cmVzLnJlc3VsdC5pZH1gLFxyXG5cdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHJlcylcclxuXHRcdFx0fSkuY2F0Y2goKGVycikgPT4ge1xyXG5cdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpXHJcblx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRjb250ZW50OiBg5re75Yqg5pWw5o2u5aSx6LSl77yM6ZSZ6K+v5L+h5oGv5Li677yaJHtlcnIubWVzc2FnZX1gLFxyXG5cdFx0XHRcdFx0c2hvd0NhbmNlbDogZmFsc2VcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyKVxyXG5cdFx0XHR9KVxyXG5cdFx0XHR0aGlzLm1hcmtlcnM9W107XHJcblx0XHR9LFxyXG5cdFx0bG9jYXRpb25DbGljaygpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coJ2xvY2F0aW9uJyk7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dGhhdC5nZXRNeUxvY2F0aW9uKCk7XHJcblx0XHRcdHRoYXQubWFwQ29udGV4dC5tb3ZlVG9Mb2NhdGlvbih7XHJcblx0XHRcdFx0bG9uZ2l0dWRlOiB0aGF0Lm15TG9uZ2l0dWRlLFxyXG5cdFx0XHRcdGxhdGl0dWRlOiB0aGF0Lm15TGF0aXR1ZGUsXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5Yi35paw5oiQ5YqfJyk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsOiBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn6LCD55So5aSx6LSlJyk7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfosIPnlKjnu5PmnZ8nKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHRcdGFzc2VtYmxlQ2xpY2soKSB7XHJcblx0XHRcdHVuaS5jaG9vc2VMb2NhdGlvbih7XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5L2N572u5ZCN56ew77yaJyArIHJlcy5uYW1lKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfor6bnu4blnLDlnYDvvJonICsgcmVzLmFkZHJlc3MpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+e6rOW6pu+8micgKyByZXMubGF0aXR1ZGUpO1xyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+e7j+W6pu+8micgKyByZXMubG9uZ2l0dWRlKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0Ly8gZ2V0V2F5KHBvaW50KSB7XHJcblx0XHQvLyBcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdC8vIFx0dmFyIHN0YXJ0UG9pID0gdGhhdC5sb25naXR1ZGUgKyAnLCcgKyB0aGF0LmxhdGl0dWRlO1xyXG5cdFx0Ly8gXHR2YXIgZW5kUG9pID0gcG9pbnQ7XHJcblx0XHQvLyBcdC8v55S76Lev57q/XHJcblx0XHQvLyBcdHRoYXQuZ2V0TGluZShzdGFydFBvaSwgZW5kUG9pLCBmdW5jdGlvbihyZXMsIGRhdGEpIHtcclxuXHRcdC8vIFx0XHR0aGF0LnBvbHlsaW5lLnB1c2gocmVzKTsgLy/ov5Tlm57nmoTot6/nur/vvIzmt7vliqDliLDot6/nur/mlbDnu4TkuK1cclxuXHRcdC8vIFx0fSk7XHJcblx0XHQvLyBcdC8v55S76LW35aeL54K5XHJcblx0XHQvLyBcdHRoYXQuZ2V0TWFya2VycyhzdGFydFBvaSwgZW5kUG9pLCBmdW5jdGlvbihyZXMpIHtcclxuXHRcdC8vIFx0XHR0aGF0Lm1hcmtlcnMucHVzaC5hcHBseSh0aGF0Lm1hcmtlcnMsIHJlcyk7IC8v6L+U5Zue5YyF5ous6LW354K55ZKM57uI54K5bWFya2Vy55qE5pWw57uE77yM5bCG6L+Z5Liq5pWw57uE5LiObWFya2Vyc+aVsOe7hOWQiOW5tlxyXG5cdFx0Ly8gXHR9KTtcclxuXHRcdC8vIH0sXHJcblx0XHQvLyBnZXRMaW5lKHN0YXJ0LCBlbmQsIHJlc3VsdCwgZmFpbCkge1xyXG5cdFx0Ly8gXHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHQvLyBcdHZhciBteUFtYXBGdW4gPSBuZXcgYW1hcEZpbGUuQU1hcFdYKHtcclxuXHRcdC8vIFx0XHRrZXk6IGtleVxyXG5cdFx0Ly8gXHR9KTtcclxuXHJcblx0XHQvLyBcdG15QW1hcEZ1bi5nZXRXYWxraW5nUm91dGUoe1xyXG5cdFx0Ly8gXHRcdC8v6I635Y+W5q2l6KGM6Lev57q/6KeE5YiSXHJcblx0XHQvLyBcdFx0Ly/pnIDopoHlhbbku5bmlrnlvI/nmoTlj6/ku6Xlj4LogIPlrpjmlrnmlofmoaPmlLlzdWNjZXNz6YeM55qE5pa55rOV77yM6YC76L6R5beu5LiN5aSaXHJcblx0XHQvLyBcdFx0Ly/lrpjmlrnmlofmoaNodHRwczovL2xicy5hbWFwLmNvbS9hcGkvd3gvcmVmZXJlbmNlL2NvcmVcclxuXHRcdC8vIFx0XHRvcmlnaW46IHN0YXJ0LFxyXG5cdFx0Ly8gXHRcdGRlc3RpbmF0aW9uOiBlbmQsXHJcblx0XHQvLyBcdFx0c3VjY2VzczogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0Ly8gXHRcdFx0Y29uc29sZS5sb2coZGF0YSk7XHJcblx0XHQvLyBcdFx0XHR2YXIgcG9pbnRzID0gW107XHJcblx0XHQvLyBcdFx0XHRpZiAoZGF0YS5wYXRocyAmJiBkYXRhLnBhdGhzWzBdICYmIGRhdGEucGF0aHNbMF0uc3RlcHMpIHtcclxuXHRcdC8vIFx0XHRcdFx0dmFyIHN0ZXBzID0gZGF0YS5wYXRoc1swXS5zdGVwcztcclxuXHRcdC8vIFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdGVwcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0Ly8gXHRcdFx0XHRcdC8v5bCG5q+P5LiA5q2l55qE5pWw5o2u5pS+5YiwcG9pbnRz5pWw57uE5LitXHJcblx0XHQvLyBcdFx0XHRcdFx0dmFyIHBvTGVuID0gc3RlcHNbaV0ucG9seWxpbmUuc3BsaXQoJzsnKTtcclxuXHRcdC8vIFx0XHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IHBvTGVuLmxlbmd0aDsgaisrKSB7XHJcblx0XHQvLyBcdFx0XHRcdFx0XHRwb2ludHMucHVzaCh7XHJcblx0XHQvLyBcdFx0XHRcdFx0XHRcdGxvbmdpdHVkZTogcGFyc2VGbG9hdChwb0xlbltqXS5zcGxpdCgnLCcpWzBdKSxcclxuXHRcdC8vIFx0XHRcdFx0XHRcdFx0bGF0aXR1ZGU6IHBhcnNlRmxvYXQocG9MZW5bal0uc3BsaXQoJywnKVsxXSlcclxuXHRcdC8vIFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0Ly8gXHRcdFx0XHRcdH1cclxuXHRcdC8vIFx0XHRcdFx0fVxyXG5cdFx0Ly8gXHRcdFx0fVxyXG5cdFx0Ly8gXHRcdFx0cmVzdWx0KFxyXG5cdFx0Ly8gXHRcdFx0XHR7XHJcblx0XHQvLyBcdFx0XHRcdFx0cG9pbnRzOiBwb2ludHMsXHJcblx0XHQvLyBcdFx0XHRcdFx0Y29sb3I6ICcjMDg5OGVmJyxcclxuXHRcdC8vIFx0XHRcdFx0XHR3aWR0aDogOFxyXG5cdFx0Ly8gXHRcdFx0XHR9LFxyXG5cdFx0Ly8gXHRcdFx0XHRkYXRhXHJcblx0XHQvLyBcdFx0XHQpOyAvL+i/lOWbnmRhdGHmmK/kuLrkuobmt7vliqDot6/nur/or6bmg4XnmoTmraXpqqTvvIzkuI3pnIDopoHlj6/ku6XljrvmjolcclxuXHRcdC8vIFx0XHR9LFxyXG5cdFx0Ly8gXHRcdGZhaWw6IGZ1bmN0aW9uKGluZm8pIHtcclxuXHRcdC8vIFx0XHRcdGZhaWwoaW5mbyk7XHJcblx0XHQvLyBcdFx0fVxyXG5cdFx0Ly8gXHR9KTtcclxuXHRcdC8vIH0sXHJcblx0XHQvLyBnZXRNYXJrZXJzKHN0YXJ0cG9pLCBlbmRwb2ksIHN1Y2Nlc3MpIHtcclxuXHRcdC8vIFx0bGV0IG1hcmtlcnMgPSBbXTtcclxuXHJcblx0XHQvLyBcdC8v6LW354K5XHJcblx0XHQvLyBcdGxldCBzdGFydCA9IHtcclxuXHRcdC8vIFx0XHRpY29uUGF0aDogJy9zdGF0aWMvaW1ncy9zdGFydC5wbmcnLCAvL+i1t+eCueWbvueJh1xyXG5cdFx0Ly8gXHRcdGlkOiAwLFxyXG5cdFx0Ly8gXHRcdGxvbmdpdHVkZTogc3RhcnRwb2kuc3BsaXQoJywnKVswXSxcclxuXHRcdC8vIFx0XHRsYXRpdHVkZTogc3RhcnRwb2kuc3BsaXQoJywnKVsxXSxcclxuXHRcdC8vIFx0XHR3aWR0aDogMjgsXHJcblx0XHQvLyBcdFx0aGVpZ2h0OiAzM1xyXG5cdFx0Ly8gXHR9O1xyXG5cdFx0Ly8gXHRtYXJrZXJzLnB1c2goc3RhcnQpO1xyXG5cdFx0Ly8gXHQvL+e7iOeCuVxyXG5cdFx0Ly8gXHRsZXQgZW5kID0ge1xyXG5cdFx0Ly8gXHRcdGljb25QYXRoOiAnL3N0YXRpYy9pbWdzL2VuZC5wbmcnLCAvL+mHjeeCueWbvueJh1xyXG5cdFx0Ly8gXHRcdGlkOiAxLFxyXG5cdFx0Ly8gXHRcdGxvbmdpdHVkZTogZW5kcG9pLnNwbGl0KCcsJylbMF0sXHJcblx0XHQvLyBcdFx0bGF0aXR1ZGU6IGVuZHBvaS5zcGxpdCgnLCcpWzFdLFxyXG5cdFx0Ly8gXHRcdHdpZHRoOiAyOCxcclxuXHRcdC8vIFx0XHRoZWlnaHQ6IDMzLFxyXG5cdFx0Ly8gXHRcdGNhbGxvdXQ6IHtcclxuXHRcdC8vIFx0XHRcdC8v57uI54K555qE54K55Ye75rCU5rOhXHJcblx0XHQvLyBcdFx0XHRjb250ZW50OiAn6ZuG5ZCI54K5JyxcclxuXHRcdC8vIFx0XHRcdGJvcmRlclJhZGl1czogNixcclxuXHRcdC8vIFx0XHRcdGJnQ29sb3I6ICcjZmZmZmZmJyxcclxuXHRcdC8vIFx0XHRcdGRpc3BsYXk6ICdCWUNMSUNLJyxcclxuXHRcdC8vIFx0XHRcdHRleHRBbGlnbjogJ2NlbnRlcidcclxuXHRcdC8vIFx0XHR9XHJcblx0XHQvLyBcdH07XHJcblx0XHQvLyBcdG1hcmtlcnMucHVzaChlbmQpO1xyXG5cclxuXHRcdC8vIFx0c3VjY2VzcyhtYXJrZXJzKTtcclxuXHRcdC8vIH1cclxuXHR9LFxyXG5cdC8vIGNvbXB1dGVkOiB7XHJcblx0Ly8gXHR3ZWF0aGVySW1nOiBmdW5jdGlvbigpIHtcclxuXHQvLyBcdFx0Ly/ov5Tlm57lpKnmsJTlm77niYfvvIzmnKrlrozlloRcclxuXHQvLyBcdFx0Ly/lhajpg6jlpKnmsJTnsbvlnovlnKhodHRwczovL2xicy5hbWFwLmNvbS9hcGkvd2Vic2VydmljZS9ndWlkZS90b29scy93ZWF0aGVyLWNvZGUvXHJcblx0Ly8gXHRcdHN3aXRjaCAodGhpcy53ZWF0aGVyKSB7XHJcblx0Ly8gXHRcdFx0Y2FzZSAn5pm0JzpcclxuXHQvLyBcdFx0XHRcdHJldHVybiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS10b3VyaXNtL2ZkMzY4MGMwLTc5N2EtMTFlYS1iOTk3LTk5MThhNWRkYTAxMS5wbmcnO1xyXG5cdC8vIFx0XHRcdFx0YnJlYWs7XHJcblx0Ly8gXHRcdFx0Y2FzZSAn5aSa5LqRJzpcclxuXHQvLyBcdFx0XHRcdHJldHVybiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS10b3VyaXNtL2ZkMjlkNjkwLTc5N2EtMTFlYS1iOTRlLTQ3ZjY3ZWNmODI2OC5wbmcnO1xyXG5cdC8vIFx0XHRcdFx0YnJlYWs7XHJcblx0Ly8gXHRcdFx0ZGVmYXVsdDpcclxuXHQvLyBcdFx0XHRcdHJldHVybiAnaHR0cHM6Ly92a2NleXVndS5jZG4uYnNwYXBwLmNvbS9WS0NFWVVHVS10b3VyaXNtL2ZkMzRmYTIwLTc5N2EtMTFlYS1iOTRlLTQ3ZjY3ZWNmODI2OC5wbmcnO1xyXG5cdC8vIFx0XHR9XHJcblx0Ly8gXHR9XHJcblx0Ly8gfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi8qIG52dWXlpb3lg4/kuI3og73nlKhzY3NzICovXHJcbi5teS1tYXAge1xyXG5cdHdpZHRoOiA3NTBycHg7XHJcbn1cclxuLmNvbnRyb2wtYnRuIHtcclxuXHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR0b3A6IDQwMHJweDtcclxuXHRsZWZ0OiAyMHJweDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdC8qIGJhY2tncm91bmQtY29sb3I6ICNmMDA7ICovXHJcbn1cclxuLmxvY2F0aW9uIHtcclxuXHRtYXJnaW4tYm90dG9tOiAzMHJweDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmFzc2VtYmxlIHtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmNvbnRyb2wtYnRuLWxvY2F0aW9uLWltZyB7XHJcblx0d2lkdGg6IDYwcnB4O1xyXG5cdGhlaWdodDogNjBycHg7XHJcbn1cclxuLmNvbnRyb2wtYnRuLWFzc2VtYmxlLWltZyB7XHJcblx0d2lkdGg6IDgwcnB4O1xyXG5cdGhlaWdodDogODBycHg7XHJcbn1cclxuLmNvbnRyb2wtYnRuLXR4dCB7XHJcblx0Zm9udC1zaXplOiAxOXJweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndlYXRoZXIge1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRib3R0b206IDEwcnB4O1xyXG5cdHJpZ2h0OiA1MHJweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4ud2VhdGhlci1pbWcge1xyXG5cdHdpZHRoOiA1MHJweDtcclxuXHRoZWlnaHQ6IDUwcnB4O1xyXG59XHJcbi53ZWFydGgtdHh0IHtcclxuXHRjb2xvcjogIzk5OTk5OTtcclxuXHRmb250LXNpemU6IDMycnB4O1xyXG59XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!***********************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/util/amap-uni.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function AMapWX(a) {\n  this.key = a.key, this.requestConfig = {\n    key: a.key,\n    s: \"rsx\",\n    platform: \"WXJS\",\n    appname: a.key,\n    sdkversion: \"1.2.0\",\n    logversion: \"2.0\" };\n\n}\nAMapWX.prototype.getWxLocation = function (a, b) {\n  uni.getLocation({\n    type: \"gcj02\",\n    success: function success(a) {\n      var c = a.longitude + \",\" + a.latitude;\n      uni.setStorage({\n        key: \"userLocation\",\n        data: c }),\n      b(c);\n    },\n    fail: function fail(c) {\n      uni.getStorage({\n        key: \"userLocation\",\n        success: function success(a) {\n          a.data && b(a.data);\n        } }),\n      a.fail({\n        errCode: \"0\",\n        errMsg: c.errMsg || \"\" });\n\n    } });\n\n}, AMapWX.prototype.getRegeo = function (a) {\n  function c(c) {\n    var d = b.requestConfig;\n    uni.request({\n      url: \"https://restapi.amap.com/v3/geocode/regeo\",\n      data: {\n        key: b.key,\n        location: c,\n        extensions: \"all\",\n        s: d.s,\n        platform: d.platform,\n        appname: b.key,\n        sdkversion: d.sdkversion,\n        logversion: d.logversion },\n\n      method: \"GET\",\n      header: {\n        \"content-type\": \"application/json\" },\n\n      success: function success(b) {\n        var d, e, f, g, h, i, j, k, l;\n        b.data.status && \"1\" == b.data.status ? (d = b.data.regeocode, e = d.addressComponent, f = [], g = \"\", d && d.roads[\n        0] && d.roads[0].name && (g = d.roads[0].name + \"附近\"), h = c.split(\",\")[0], i = c.split(\",\")[1], d.pois && d.\n        pois[0] && (g = d.pois[0].name + \"附近\", j = d.pois[0].location, j && (h = parseFloat(j.split(\",\")[0]), i =\n        parseFloat(j.split(\",\")[1]))), e.provice && f.push(e.provice), e.city && f.push(e.city), e.district && f.push(\n        e.district), e.streetNumber && e.streetNumber.street && e.streetNumber.number ? (f.push(e.streetNumber.street),\n        f.push(e.streetNumber.number)) : (k = \"\", d && d.roads[0] && d.roads[0].name && (k = d.roads[0].name), f.push(\n        k)), f = f.join(\"\"), l = [{\n          iconPath: a.iconPath,\n          width: a.iconWidth,\n          height: a.iconHeight,\n          name: f,\n          desc: g,\n          longitude: h,\n          latitude: i,\n          id: 0,\n          regeocodeData: d }],\n        a.success(l)) : a.fail({\n          errCode: b.data.infocode,\n          errMsg: b.data.info });\n\n      },\n      fail: function fail(b) {\n        a.fail({\n          errCode: \"0\",\n          errMsg: b.errMsg || \"\" });\n\n      } });\n\n  }\n  var b = this;\n  a.location ? c(a.location) : b.getWxLocation(a, function (a) {\n    c(a);\n  });\n}, AMapWX.prototype.getWeather = function (a) {\n  function d(d) {\n    var e = \"base\";\n    a.type && \"forecast\" == a.type && (e = \"all\"), uni.request({\n      url: \"https://restapi.amap.com/v3/weather/weatherInfo\",\n      data: {\n        key: b.key,\n        city: d,\n        extensions: e,\n        s: c.s,\n        platform: c.platform,\n        appname: b.key,\n        sdkversion: c.sdkversion,\n        logversion: c.logversion },\n\n      method: \"GET\",\n      header: {\n        \"content-type\": \"application/json\" },\n\n      success: function success(b) {\n        function c(a) {\n          var b = {\n            city: {\n              text: \"城市\",\n              data: a.city },\n\n            weather: {\n              text: \"天气\",\n              data: a.weather },\n\n            temperature: {\n              text: \"温度\",\n              data: a.temperature },\n\n            winddirection: {\n              text: \"风向\",\n              data: a.winddirection + \"风\" },\n\n            windpower: {\n              text: \"风力\",\n              data: a.windpower + \"级\" },\n\n            humidity: {\n              text: \"湿度\",\n              data: a.humidity + \"%\" } };\n\n\n          return b;\n        }\n        var d, e;\n        b.data.status && \"1\" == b.data.status ? b.data.lives ? (d = b.data.lives, d && d.length > 0 && (d = d[0], e = c(\n        d), e[\"liveData\"] = d, a.success(e))) : b.data.forecasts && b.data.forecasts[0] && a.success({\n          forecast: b.data.forecasts[0] }) :\n        a.fail({\n          errCode: b.data.infocode,\n          errMsg: b.data.info });\n\n      },\n      fail: function fail(b) {\n        a.fail({\n          errCode: \"0\",\n          errMsg: b.errMsg || \"\" });\n\n      } });\n\n  }\n\n  function e(e) {\n    uni.request({\n      url: \"https://restapi.amap.com/v3/geocode/regeo\",\n      data: {\n        key: b.key,\n        location: e,\n        extensions: \"all\",\n        s: c.s,\n        platform: c.platform,\n        appname: b.key,\n        sdkversion: c.sdkversion,\n        logversion: c.logversion },\n\n      method: \"GET\",\n      header: {\n        \"content-type\": \"application/json\" },\n\n      success: function success(b) {\n        var c, e;\n        b.data.status && \"1\" == b.data.status ? (e = b.data.regeocode, e.addressComponent ? c = e.addressComponent.adcode :\n        e.aois && e.aois.length > 0 && (c = e.aois[0].adcode), d(c)) : a.fail({\n          errCode: b.data.infocode,\n          errMsg: b.data.info });\n\n      },\n      fail: function fail(b) {\n        a.fail({\n          errCode: \"0\",\n          errMsg: b.errMsg || \"\" });\n\n      } });\n\n  }\n  var b = this,\n  c = b.requestConfig;\n  a.city ? d(a.city) : b.getWxLocation(a, function (a) {\n    e(a);\n  });\n}, AMapWX.prototype.getPoiAround = function (a) {\n  function d(d) {\n    var e = {\n      key: b.key,\n      location: d,\n      s: c.s,\n      platform: c.platform,\n      appname: b.key,\n      sdkversion: c.sdkversion,\n      logversion: c.logversion };\n\n    a.querytypes && (e[\"types\"] = a.querytypes), a.querykeywords && (e[\"keywords\"] = a.querykeywords), uni.request({\n      url: \"https://restapi.amap.com/v3/place/around\",\n      data: e,\n      method: \"GET\",\n      header: {\n        \"content-type\": \"application/json\" },\n\n      success: function success(b) {\n        var c, d, e, f;\n        if (b.data.status && \"1\" == b.data.status) {\n          if (b = b.data, b && b.pois) {\n            for (c = [], d = 0; d < b.pois.length; d++) {e = 0 == d ? a.iconPathSelected : a.iconPath, c.push({\n                latitude: parseFloat(b.pois[d].location.split(\",\")[1]),\n                longitude: parseFloat(b.pois[d].location.split(\",\")[0]),\n                iconPath: e,\n                width: 22,\n                height: 32,\n                id: d,\n                name: b.pois[d].name,\n                address: b.pois[d].address });}\n\n            f = {\n              markers: c,\n              poisData: b.pois },\n            a.success(f);\n          }\n        } else a.fail({\n          errCode: b.data.infocode,\n          errMsg: b.data.info });\n\n      },\n      fail: function fail(b) {\n        a.fail({\n          errCode: \"0\",\n          errMsg: b.errMsg || \"\" });\n\n      } });\n\n  }\n  var b = this,\n  c = b.requestConfig;\n  a.location ? d(a.location) : b.getWxLocation(a, function (a) {\n    d(a);\n  });\n}, AMapWX.prototype.getStaticmap = function (a) {\n  function f(b) {\n    c.push(\"location=\" + b), a.zoom && c.push(\"zoom=\" + a.zoom), a.size && c.push(\"size=\" + a.size), a.scale && c.push(\n    \"scale=\" + a.scale), a.markers && c.push(\"markers=\" + a.markers), a.labels && c.push(\"labels=\" + a.labels), a.paths &&\n    c.push(\"paths=\" + a.paths), a.traffic && c.push(\"traffic=\" + a.traffic);\n    var e = d + c.join(\"&\");\n    a.success({\n      url: e });\n\n  }\n  var e,b = this,\n  c = [],\n  d = \"https://restapi.amap.com/v3/staticmap?\";\n  c.push(\"key=\" + b.key), e = b.requestConfig, c.push(\"s=\" + e.s), c.push(\"platform=\" + e.platform), c.push(\"appname=\" +\n  e.appname), c.push(\"sdkversion=\" + e.sdkversion), c.push(\"logversion=\" + e.logversion), a.location ? f(a.location) :\n  b.getWxLocation(a, function (a) {\n    f(a);\n  });\n}, AMapWX.prototype.getInputtips = function (a) {\n  var b = this,\n  c = b.requestConfig,\n  d = {\n    key: b.key,\n    s: c.s,\n    platform: c.platform,\n    appname: b.key,\n    sdkversion: c.sdkversion,\n    logversion: c.logversion };\n\n  a.location && (d[\"location\"] = a.location), a.keywords && (d[\"keywords\"] = a.keywords), a.type && (d[\"type\"] = a.type),\n  a.city && (d[\"city\"] = a.city), a.citylimit && (d[\"citylimit\"] = a.citylimit), uni.request({\n    url: \"https://restapi.amap.com/v3/assistant/inputtips\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\" },\n\n    success: function success(b) {\n      b && b.data && b.data.tips && a.success({\n        tips: b.data.tips });\n\n    },\n    fail: function fail(b) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: b.errMsg || \"\" });\n\n    } });\n\n}, AMapWX.prototype.getDrivingRoute = function (a) {\n  var b = this,\n  c = b.requestConfig,\n  d = {\n    key: b.key,\n    s: c.s,\n    platform: c.platform,\n    appname: b.key,\n    sdkversion: c.sdkversion,\n    logversion: c.logversion };\n\n  a.origin && (d[\"origin\"] = a.origin),\n  a.destination && (d[\"destination\"] = a.destination),\n  a.strategy && (d[\"strategy\"] = a.strategy),\n  a.waypoints && (d[\"waypoints\"] = a.waypoints),\n  a.avoidpolygons && (d[\"avoidpolygons\"] = a.avoidpolygons),\n  a.avoidroad && (d[\"avoidroad\"] = a.avoidroad),\n  uni.request({\n    url: \"https://restapi.amap.com/v3/direction/driving\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\" },\n\n    success: function success(b) {\n      b && b.data && b.data.route && a.success({\n        paths: b.data.route.paths,\n        taxi_cost: b.data.route.taxi_cost || \"\" });\n\n    },\n    fail: function fail(b) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: b.errMsg || \"\" });\n\n    } });\n\n}, AMapWX.prototype.getWalkingRoute = function (a) {\n  var b = this,\n  c = b.requestConfig,\n  d = {\n    key: b.key,\n    s: c.s,\n    platform: c.platform,\n    appname: b.key,\n    sdkversion: c.sdkversion,\n    logversion: c.logversion };\n\n  a.origin && (d[\"origin\"] = a.origin), a.destination && (d[\"destination\"] = a.destination), uni.request({\n    url: \"https://restapi.amap.com/v3/direction/walking\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\" },\n\n    success: function success(b) {\n      b && b.data && b.data.route && a.success({\n        paths: b.data.route.paths });\n\n    },\n    fail: function fail(b) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: b.errMsg || \"\" });\n\n    } });\n\n}, AMapWX.prototype.getTransitRoute = function (a) {\n  var b = this,\n  c = b.requestConfig,\n  d = {\n    key: b.key,\n    s: c.s,\n    platform: c.platform,\n    appname: b.key,\n    sdkversion: c.sdkversion,\n    logversion: c.logversion };\n\n  a.origin && (d[\"origin\"] = a.origin), a.destination && (d[\"destination\"] = a.destination), a.strategy && (d[\n  \"strategy\"] = a.strategy), a.city && (d[\"city\"] = a.city), a.cityd && (d[\"cityd\"] = a.cityd), uni.request({\n    url: \"https://restapi.amap.com/v3/direction/transit/integrated\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\" },\n\n    success: function success(b) {\n      if (b && b.data && b.data.route) {\n        var c = b.data.route;\n        a.success({\n          distance: c.distance || \"\",\n          taxi_cost: c.taxi_cost || \"\",\n          transits: c.transits });\n\n      }\n    },\n    fail: function fail(b) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: b.errMsg || \"\" });\n\n    } });\n\n}, AMapWX.prototype.getRidingRoute = function (a) {\n  var b = this,\n  c = b.requestConfig,\n  d = {\n    key: b.key,\n    s: c.s,\n    platform: c.platform,\n    appname: b.key,\n    sdkversion: c.sdkversion,\n    logversion: c.logversion };\n\n  a.origin && (d[\"origin\"] = a.origin), a.destination && (d[\"destination\"] = a.destination), uni.request({\n    url: \"https://restapi.amap.com/v4/direction/bicycling\",\n    data: d,\n    method: \"GET\",\n    header: {\n      \"content-type\": \"application/json\" },\n\n    success: function success(b) {\n      b && b.data && b.data.data && a.success({\n        paths: b.data.data.paths });\n\n    },\n    fail: function fail(b) {\n      a.fail({\n        errCode: \"0\",\n        errMsg: b.errMsg || \"\" });\n\n    } });\n\n}, module.exports.AMapWX = AMapWX;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vdXRpbC9hbWFwLXVuaS5qcyJdLCJuYW1lcyI6WyJBTWFwV1giLCJhIiwia2V5IiwicmVxdWVzdENvbmZpZyIsInMiLCJwbGF0Zm9ybSIsImFwcG5hbWUiLCJzZGt2ZXJzaW9uIiwibG9ndmVyc2lvbiIsInByb3RvdHlwZSIsImdldFd4TG9jYXRpb24iLCJiIiwidW5pIiwiZ2V0TG9jYXRpb24iLCJ0eXBlIiwic3VjY2VzcyIsImMiLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInNldFN0b3JhZ2UiLCJkYXRhIiwiZmFpbCIsImdldFN0b3JhZ2UiLCJlcnJDb2RlIiwiZXJyTXNnIiwiZ2V0UmVnZW8iLCJkIiwicmVxdWVzdCIsInVybCIsImxvY2F0aW9uIiwiZXh0ZW5zaW9ucyIsIm1ldGhvZCIsImhlYWRlciIsImUiLCJmIiwiZyIsImgiLCJpIiwiaiIsImsiLCJsIiwic3RhdHVzIiwicmVnZW9jb2RlIiwiYWRkcmVzc0NvbXBvbmVudCIsInJvYWRzIiwibmFtZSIsInNwbGl0IiwicG9pcyIsInBhcnNlRmxvYXQiLCJwcm92aWNlIiwicHVzaCIsImNpdHkiLCJkaXN0cmljdCIsInN0cmVldE51bWJlciIsInN0cmVldCIsIm51bWJlciIsImpvaW4iLCJpY29uUGF0aCIsIndpZHRoIiwiaWNvbldpZHRoIiwiaGVpZ2h0IiwiaWNvbkhlaWdodCIsImRlc2MiLCJpZCIsInJlZ2VvY29kZURhdGEiLCJpbmZvY29kZSIsImluZm8iLCJnZXRXZWF0aGVyIiwidGV4dCIsIndlYXRoZXIiLCJ0ZW1wZXJhdHVyZSIsIndpbmRkaXJlY3Rpb24iLCJ3aW5kcG93ZXIiLCJodW1pZGl0eSIsImxpdmVzIiwibGVuZ3RoIiwiZm9yZWNhc3RzIiwiZm9yZWNhc3QiLCJhZGNvZGUiLCJhb2lzIiwiZ2V0UG9pQXJvdW5kIiwicXVlcnl0eXBlcyIsInF1ZXJ5a2V5d29yZHMiLCJpY29uUGF0aFNlbGVjdGVkIiwiYWRkcmVzcyIsIm1hcmtlcnMiLCJwb2lzRGF0YSIsImdldFN0YXRpY21hcCIsInpvb20iLCJzaXplIiwic2NhbGUiLCJsYWJlbHMiLCJwYXRocyIsInRyYWZmaWMiLCJnZXRJbnB1dHRpcHMiLCJrZXl3b3JkcyIsImNpdHlsaW1pdCIsInRpcHMiLCJnZXREcml2aW5nUm91dGUiLCJvcmlnaW4iLCJkZXN0aW5hdGlvbiIsInN0cmF0ZWd5Iiwid2F5cG9pbnRzIiwiYXZvaWRwb2x5Z29ucyIsImF2b2lkcm9hZCIsInJvdXRlIiwidGF4aV9jb3N0IiwiZ2V0V2Fsa2luZ1JvdXRlIiwiZ2V0VHJhbnNpdFJvdXRlIiwiY2l0eWQiLCJkaXN0YW5jZSIsInRyYW5zaXRzIiwiZ2V0UmlkaW5nUm91dGUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxNQUFULENBQWdCQyxDQUFoQixFQUFtQjtBQUNsQixPQUFLQyxHQUFMLEdBQVdELENBQUMsQ0FBQ0MsR0FBYixFQUFrQixLQUFLQyxhQUFMLEdBQXFCO0FBQ3RDRCxPQUFHLEVBQUVELENBQUMsQ0FBQ0MsR0FEK0I7QUFFdENFLEtBQUMsRUFBRSxLQUZtQztBQUd0Q0MsWUFBUSxFQUFFLE1BSDRCO0FBSXRDQyxXQUFPLEVBQUVMLENBQUMsQ0FBQ0MsR0FKMkI7QUFLdENLLGNBQVUsRUFBRSxPQUwwQjtBQU10Q0MsY0FBVSxFQUFFLEtBTjBCLEVBQXZDOztBQVFBO0FBQ0RSLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQkMsYUFBakIsR0FBaUMsVUFBU1QsQ0FBVCxFQUFZVSxDQUFaLEVBQWU7QUFDL0NDLEtBQUcsQ0FBQ0MsV0FBSixDQUFnQjtBQUNmQyxRQUFJLEVBQUUsT0FEUztBQUVmQyxXQUFPLEVBQUUsaUJBQVNkLENBQVQsRUFBWTtBQUNwQixVQUFJZSxDQUFDLEdBQUdmLENBQUMsQ0FBQ2dCLFNBQUYsR0FBYyxHQUFkLEdBQW9CaEIsQ0FBQyxDQUFDaUIsUUFBOUI7QUFDQU4sU0FBRyxDQUFDTyxVQUFKLENBQWU7QUFDZGpCLFdBQUcsRUFBRSxjQURTO0FBRWRrQixZQUFJLEVBQUVK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ZW50IjpbImZ1bmN0aW9uIEFNYXBXWChhKSB7XHJcblx0dGhpcy5rZXkgPSBhLmtleSwgdGhpcy5yZXF1ZXN0Q29uZmlnID0ge1xyXG5cdFx0a2V5OiBhLmtleSxcclxuXHRcdHM6IFwicnN4XCIsXHJcblx0XHRwbGF0Zm9ybTogXCJXWEpTXCIsXHJcblx0XHRhcHBuYW1lOiBhLmtleSxcclxuXHRcdHNka3ZlcnNpb246IFwiMS4yLjBcIixcclxuXHRcdGxvZ3ZlcnNpb246IFwiMi4wXCJcclxuXHR9XHJcbn1cclxuQU1hcFdYLnByb3RvdHlwZS5nZXRXeExvY2F0aW9uID0gZnVuY3Rpb24oYSwgYikge1xyXG5cdHVuaS5nZXRMb2NhdGlvbih7XHJcblx0XHR0eXBlOiBcImdjajAyXCIsXHJcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihhKSB7XHJcblx0XHRcdHZhciBjID0gYS5sb25naXR1ZGUgKyBcIixcIiArIGEubGF0aXR1ZGU7XHJcblx0XHRcdHVuaS5zZXRTdG9yYWdlKHtcclxuXHRcdFx0XHRrZXk6IFwidXNlckxvY2F0aW9uXCIsXHJcblx0XHRcdFx0ZGF0YTogY1xyXG5cdFx0XHR9KSwgYihjKVxyXG5cdFx0fSxcclxuXHRcdGZhaWw6IGZ1bmN0aW9uKGMpIHtcclxuXHRcdFx0dW5pLmdldFN0b3JhZ2Uoe1xyXG5cdFx0XHRcdGtleTogXCJ1c2VyTG9jYXRpb25cIixcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihhKSB7XHJcblx0XHRcdFx0XHRhLmRhdGEgJiYgYihhLmRhdGEpXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KSwgYS5mYWlsKHtcclxuXHRcdFx0XHRlcnJDb2RlOiBcIjBcIixcclxuXHRcdFx0XHRlcnJNc2c6IGMuZXJyTXNnIHx8IFwiXCJcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KVxyXG59LCBBTWFwV1gucHJvdG90eXBlLmdldFJlZ2VvID0gZnVuY3Rpb24oYSkge1xyXG5cdGZ1bmN0aW9uIGMoYykge1xyXG5cdFx0dmFyIGQgPSBiLnJlcXVlc3RDb25maWc7XHJcblx0XHR1bmkucmVxdWVzdCh7XHJcblx0XHRcdHVybDogXCJodHRwczovL3Jlc3RhcGkuYW1hcC5jb20vdjMvZ2VvY29kZS9yZWdlb1wiLFxyXG5cdFx0XHRkYXRhOiB7XHJcblx0XHRcdFx0a2V5OiBiLmtleSxcclxuXHRcdFx0XHRsb2NhdGlvbjogYyxcclxuXHRcdFx0XHRleHRlbnNpb25zOiBcImFsbFwiLFxyXG5cdFx0XHRcdHM6IGQucyxcclxuXHRcdFx0XHRwbGF0Zm9ybTogZC5wbGF0Zm9ybSxcclxuXHRcdFx0XHRhcHBuYW1lOiBiLmtleSxcclxuXHRcdFx0XHRzZGt2ZXJzaW9uOiBkLnNka3ZlcnNpb24sXHJcblx0XHRcdFx0bG9ndmVyc2lvbjogZC5sb2d2ZXJzaW9uXHJcblx0XHRcdH0sXHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oYikge1xyXG5cdFx0XHRcdHZhciBkLCBlLCBmLCBnLCBoLCBpLCBqLCBrLCBsO1xyXG5cdFx0XHRcdGIuZGF0YS5zdGF0dXMgJiYgXCIxXCIgPT0gYi5kYXRhLnN0YXR1cyA/IChkID0gYi5kYXRhLnJlZ2VvY29kZSwgZSA9IGQuYWRkcmVzc0NvbXBvbmVudCwgZiA9IFtdLCBnID0gXCJcIiwgZCAmJiBkLnJvYWRzW1xyXG5cdFx0XHRcdFx0XHQwXSAmJiBkLnJvYWRzWzBdLm5hbWUgJiYgKGcgPSBkLnJvYWRzWzBdLm5hbWUgKyBcIumZhOi/kVwiKSwgaCA9IGMuc3BsaXQoXCIsXCIpWzBdLCBpID0gYy5zcGxpdChcIixcIilbMV0sIGQucG9pcyAmJiBkXHJcblx0XHRcdFx0XHQucG9pc1swXSAmJiAoZyA9IGQucG9pc1swXS5uYW1lICsgXCLpmYTov5FcIiwgaiA9IGQucG9pc1swXS5sb2NhdGlvbiwgaiAmJiAoaCA9IHBhcnNlRmxvYXQoai5zcGxpdChcIixcIilbMF0pLCBpID1cclxuXHRcdFx0XHRcdFx0cGFyc2VGbG9hdChqLnNwbGl0KFwiLFwiKVsxXSkpKSwgZS5wcm92aWNlICYmIGYucHVzaChlLnByb3ZpY2UpLCBlLmNpdHkgJiYgZi5wdXNoKGUuY2l0eSksIGUuZGlzdHJpY3QgJiYgZi5wdXNoKFxyXG5cdFx0XHRcdFx0XHRlLmRpc3RyaWN0KSwgZS5zdHJlZXROdW1iZXIgJiYgZS5zdHJlZXROdW1iZXIuc3RyZWV0ICYmIGUuc3RyZWV0TnVtYmVyLm51bWJlciA/IChmLnB1c2goZS5zdHJlZXROdW1iZXIuc3RyZWV0KSxcclxuXHRcdFx0XHRcdFx0Zi5wdXNoKGUuc3RyZWV0TnVtYmVyLm51bWJlcikpIDogKGsgPSBcIlwiLCBkICYmIGQucm9hZHNbMF0gJiYgZC5yb2Fkc1swXS5uYW1lICYmIChrID0gZC5yb2Fkc1swXS5uYW1lKSwgZi5wdXNoKFxyXG5cdFx0XHRcdFx0XHRrKSksIGYgPSBmLmpvaW4oXCJcIiksIGwgPSBbe1xyXG5cdFx0XHRcdFx0XHRpY29uUGF0aDogYS5pY29uUGF0aCxcclxuXHRcdFx0XHRcdFx0d2lkdGg6IGEuaWNvbldpZHRoLFxyXG5cdFx0XHRcdFx0XHRoZWlnaHQ6IGEuaWNvbkhlaWdodCxcclxuXHRcdFx0XHRcdFx0bmFtZTogZixcclxuXHRcdFx0XHRcdFx0ZGVzYzogZyxcclxuXHRcdFx0XHRcdFx0bG9uZ2l0dWRlOiBoLFxyXG5cdFx0XHRcdFx0XHRsYXRpdHVkZTogaSxcclxuXHRcdFx0XHRcdFx0aWQ6IDAsXHJcblx0XHRcdFx0XHRcdHJlZ2VvY29kZURhdGE6IGRcclxuXHRcdFx0XHRcdH1dLCBhLnN1Y2Nlc3MobCkpIDogYS5mYWlsKHtcclxuXHRcdFx0XHRcdGVyckNvZGU6IGIuZGF0YS5pbmZvY29kZSxcclxuXHRcdFx0XHRcdGVyck1zZzogYi5kYXRhLmluZm9cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRmYWlsOiBmdW5jdGlvbihiKSB7XHJcblx0XHRcdFx0YS5mYWlsKHtcclxuXHRcdFx0XHRcdGVyckNvZGU6IFwiMFwiLFxyXG5cdFx0XHRcdFx0ZXJyTXNnOiBiLmVyck1zZyB8fCBcIlwiXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblx0dmFyIGIgPSB0aGlzO1xyXG5cdGEubG9jYXRpb24gPyBjKGEubG9jYXRpb24pIDogYi5nZXRXeExvY2F0aW9uKGEsIGZ1bmN0aW9uKGEpIHtcclxuXHRcdGMoYSlcclxuXHR9KVxyXG59LCBBTWFwV1gucHJvdG90eXBlLmdldFdlYXRoZXIgPSBmdW5jdGlvbihhKSB7XHJcblx0ZnVuY3Rpb24gZChkKSB7XHJcblx0XHR2YXIgZSA9IFwiYmFzZVwiO1xyXG5cdFx0YS50eXBlICYmIFwiZm9yZWNhc3RcIiA9PSBhLnR5cGUgJiYgKGUgPSBcImFsbFwiKSwgdW5pLnJlcXVlc3Qoe1xyXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL3dlYXRoZXIvd2VhdGhlckluZm9cIixcclxuXHRcdFx0ZGF0YToge1xyXG5cdFx0XHRcdGtleTogYi5rZXksXHJcblx0XHRcdFx0Y2l0eTogZCxcclxuXHRcdFx0XHRleHRlbnNpb25zOiBlLFxyXG5cdFx0XHRcdHM6IGMucyxcclxuXHRcdFx0XHRwbGF0Zm9ybTogYy5wbGF0Zm9ybSxcclxuXHRcdFx0XHRhcHBuYW1lOiBiLmtleSxcclxuXHRcdFx0XHRzZGt2ZXJzaW9uOiBjLnNka3ZlcnNpb24sXHJcblx0XHRcdFx0bG9ndmVyc2lvbjogYy5sb2d2ZXJzaW9uXHJcblx0XHRcdH0sXHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oYikge1xyXG5cdFx0XHRcdGZ1bmN0aW9uIGMoYSkge1xyXG5cdFx0XHRcdFx0dmFyIGIgPSB7XHJcblx0XHRcdFx0XHRcdGNpdHk6IHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIuWfjuW4glwiLFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IGEuY2l0eVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR3ZWF0aGVyOiB7XHJcblx0XHRcdFx0XHRcdFx0dGV4dDogXCLlpKnmsJRcIixcclxuXHRcdFx0XHRcdFx0XHRkYXRhOiBhLndlYXRoZXJcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0dGVtcGVyYXR1cmU6IHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIua4qeW6plwiLFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IGEudGVtcGVyYXR1cmVcclxuXHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0d2luZGRpcmVjdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwi6aOO5ZCRXCIsXHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogYS53aW5kZGlyZWN0aW9uICsgXCLpo45cIlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR3aW5kcG93ZXI6IHtcclxuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIumjjuWKm1wiLFxyXG5cdFx0XHRcdFx0XHRcdGRhdGE6IGEud2luZHBvd2VyICsgXCLnuqdcIlxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRodW1pZGl0eToge1xyXG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwi5rm/5bqmXCIsXHJcblx0XHRcdFx0XHRcdFx0ZGF0YTogYS5odW1pZGl0eSArIFwiJVwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRyZXR1cm4gYlxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR2YXIgZCwgZTtcclxuXHRcdFx0XHRiLmRhdGEuc3RhdHVzICYmIFwiMVwiID09IGIuZGF0YS5zdGF0dXMgPyBiLmRhdGEubGl2ZXMgPyAoZCA9IGIuZGF0YS5saXZlcywgZCAmJiBkLmxlbmd0aCA+IDAgJiYgKGQgPSBkWzBdLCBlID0gYyhcclxuXHRcdFx0XHRcdGQpLCBlW1wibGl2ZURhdGFcIl0gPSBkLCBhLnN1Y2Nlc3MoZSkpKSA6IGIuZGF0YS5mb3JlY2FzdHMgJiYgYi5kYXRhLmZvcmVjYXN0c1swXSAmJiBhLnN1Y2Nlc3Moe1xyXG5cdFx0XHRcdFx0Zm9yZWNhc3Q6IGIuZGF0YS5mb3JlY2FzdHNbMF1cclxuXHRcdFx0XHR9KSA6IGEuZmFpbCh7XHJcblx0XHRcdFx0XHRlcnJDb2RlOiBiLmRhdGEuaW5mb2NvZGUsXHJcblx0XHRcdFx0XHRlcnJNc2c6IGIuZGF0YS5pbmZvXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogZnVuY3Rpb24oYikge1xyXG5cdFx0XHRcdGEuZmFpbCh7XHJcblx0XHRcdFx0XHRlcnJDb2RlOiBcIjBcIixcclxuXHRcdFx0XHRcdGVyck1zZzogYi5lcnJNc2cgfHwgXCJcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBlKGUpIHtcclxuXHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9nZW9jb2RlL3JlZ2VvXCIsXHJcblx0XHRcdGRhdGE6IHtcclxuXHRcdFx0XHRrZXk6IGIua2V5LFxyXG5cdFx0XHRcdGxvY2F0aW9uOiBlLFxyXG5cdFx0XHRcdGV4dGVuc2lvbnM6IFwiYWxsXCIsXHJcblx0XHRcdFx0czogYy5zLFxyXG5cdFx0XHRcdHBsYXRmb3JtOiBjLnBsYXRmb3JtLFxyXG5cdFx0XHRcdGFwcG5hbWU6IGIua2V5LFxyXG5cdFx0XHRcdHNka3ZlcnNpb246IGMuc2RrdmVyc2lvbixcclxuXHRcdFx0XHRsb2d2ZXJzaW9uOiBjLmxvZ3ZlcnNpb25cclxuXHRcdFx0fSxcclxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XHRcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihiKSB7XHJcblx0XHRcdFx0dmFyIGMsIGU7XHJcblx0XHRcdFx0Yi5kYXRhLnN0YXR1cyAmJiBcIjFcIiA9PSBiLmRhdGEuc3RhdHVzID8gKGUgPSBiLmRhdGEucmVnZW9jb2RlLCBlLmFkZHJlc3NDb21wb25lbnQgPyBjID0gZS5hZGRyZXNzQ29tcG9uZW50LmFkY29kZSA6XHJcblx0XHRcdFx0XHRlLmFvaXMgJiYgZS5hb2lzLmxlbmd0aCA+IDAgJiYgKGMgPSBlLmFvaXNbMF0uYWRjb2RlKSwgZChjKSkgOiBhLmZhaWwoe1xyXG5cdFx0XHRcdFx0ZXJyQ29kZTogYi5kYXRhLmluZm9jb2RlLFxyXG5cdFx0XHRcdFx0ZXJyTXNnOiBiLmRhdGEuaW5mb1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IGZ1bmN0aW9uKGIpIHtcclxuXHRcdFx0XHRhLmZhaWwoe1xyXG5cdFx0XHRcdFx0ZXJyQ29kZTogXCIwXCIsXHJcblx0XHRcdFx0XHRlcnJNc2c6IGIuZXJyTXNnIHx8IFwiXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHR2YXIgYiA9IHRoaXMsXHJcblx0XHRjID0gYi5yZXF1ZXN0Q29uZmlnO1xyXG5cdGEuY2l0eSA/IGQoYS5jaXR5KSA6IGIuZ2V0V3hMb2NhdGlvbihhLCBmdW5jdGlvbihhKSB7XHJcblx0XHRlKGEpXHJcblx0fSlcclxufSwgQU1hcFdYLnByb3RvdHlwZS5nZXRQb2lBcm91bmQgPSBmdW5jdGlvbihhKSB7XHJcblx0ZnVuY3Rpb24gZChkKSB7XHJcblx0XHR2YXIgZSA9IHtcclxuXHRcdFx0a2V5OiBiLmtleSxcclxuXHRcdFx0bG9jYXRpb246IGQsXHJcblx0XHRcdHM6IGMucyxcclxuXHRcdFx0cGxhdGZvcm06IGMucGxhdGZvcm0sXHJcblx0XHRcdGFwcG5hbWU6IGIua2V5LFxyXG5cdFx0XHRzZGt2ZXJzaW9uOiBjLnNka3ZlcnNpb24sXHJcblx0XHRcdGxvZ3ZlcnNpb246IGMubG9ndmVyc2lvblxyXG5cdFx0fTtcclxuXHRcdGEucXVlcnl0eXBlcyAmJiAoZVtcInR5cGVzXCJdID0gYS5xdWVyeXR5cGVzKSwgYS5xdWVyeWtleXdvcmRzICYmIChlW1wia2V5d29yZHNcIl0gPSBhLnF1ZXJ5a2V5d29yZHMpLCB1bmkucmVxdWVzdCh7XHJcblx0XHRcdHVybDogXCJodHRwczovL3Jlc3RhcGkuYW1hcC5jb20vdjMvcGxhY2UvYXJvdW5kXCIsXHJcblx0XHRcdGRhdGE6IGUsXHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oYikge1xyXG5cdFx0XHRcdHZhciBjLCBkLCBlLCBmO1xyXG5cdFx0XHRcdGlmIChiLmRhdGEuc3RhdHVzICYmIFwiMVwiID09IGIuZGF0YS5zdGF0dXMpIHtcclxuXHRcdFx0XHRcdGlmIChiID0gYi5kYXRhLCBiICYmIGIucG9pcykge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGMgPSBbXSwgZCA9IDA7IGQgPCBiLnBvaXMubGVuZ3RoOyBkKyspIGUgPSAwID09IGQgPyBhLmljb25QYXRoU2VsZWN0ZWQgOiBhLmljb25QYXRoLCBjLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdGxhdGl0dWRlOiBwYXJzZUZsb2F0KGIucG9pc1tkXS5sb2NhdGlvbi5zcGxpdChcIixcIilbMV0pLFxyXG5cdFx0XHRcdFx0XHRcdGxvbmdpdHVkZTogcGFyc2VGbG9hdChiLnBvaXNbZF0ubG9jYXRpb24uc3BsaXQoXCIsXCIpWzBdKSxcclxuXHRcdFx0XHRcdFx0XHRpY29uUGF0aDogZSxcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogMjIsXHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiAzMixcclxuXHRcdFx0XHRcdFx0XHRpZDogZCxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBiLnBvaXNbZF0ubmFtZSxcclxuXHRcdFx0XHRcdFx0XHRhZGRyZXNzOiBiLnBvaXNbZF0uYWRkcmVzc1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0ZiA9IHtcclxuXHRcdFx0XHRcdFx0XHRtYXJrZXJzOiBjLFxyXG5cdFx0XHRcdFx0XHRcdHBvaXNEYXRhOiBiLnBvaXNcclxuXHRcdFx0XHRcdFx0fSwgYS5zdWNjZXNzKGYpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIGEuZmFpbCh7XHJcblx0XHRcdFx0XHRlcnJDb2RlOiBiLmRhdGEuaW5mb2NvZGUsXHJcblx0XHRcdFx0XHRlcnJNc2c6IGIuZGF0YS5pbmZvXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fSxcclxuXHRcdFx0ZmFpbDogZnVuY3Rpb24oYikge1xyXG5cdFx0XHRcdGEuZmFpbCh7XHJcblx0XHRcdFx0XHRlcnJDb2RlOiBcIjBcIixcclxuXHRcdFx0XHRcdGVyck1zZzogYi5lcnJNc2cgfHwgXCJcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdHZhciBiID0gdGhpcyxcclxuXHRcdGMgPSBiLnJlcXVlc3RDb25maWc7XHJcblx0YS5sb2NhdGlvbiA/IGQoYS5sb2NhdGlvbikgOiBiLmdldFd4TG9jYXRpb24oYSwgZnVuY3Rpb24oYSkge1xyXG5cdFx0ZChhKVxyXG5cdH0pXHJcbn0sIEFNYXBXWC5wcm90b3R5cGUuZ2V0U3RhdGljbWFwID0gZnVuY3Rpb24oYSkge1xyXG5cdGZ1bmN0aW9uIGYoYikge1xyXG5cdFx0Yy5wdXNoKFwibG9jYXRpb249XCIgKyBiKSwgYS56b29tICYmIGMucHVzaChcInpvb209XCIgKyBhLnpvb20pLCBhLnNpemUgJiYgYy5wdXNoKFwic2l6ZT1cIiArIGEuc2l6ZSksIGEuc2NhbGUgJiYgYy5wdXNoKFxyXG5cdFx0XHRcdFwic2NhbGU9XCIgKyBhLnNjYWxlKSwgYS5tYXJrZXJzICYmIGMucHVzaChcIm1hcmtlcnM9XCIgKyBhLm1hcmtlcnMpLCBhLmxhYmVscyAmJiBjLnB1c2goXCJsYWJlbHM9XCIgKyBhLmxhYmVscyksIGEucGF0aHMgJiZcclxuXHRcdFx0Yy5wdXNoKFwicGF0aHM9XCIgKyBhLnBhdGhzKSwgYS50cmFmZmljICYmIGMucHVzaChcInRyYWZmaWM9XCIgKyBhLnRyYWZmaWMpO1xyXG5cdFx0dmFyIGUgPSBkICsgYy5qb2luKFwiJlwiKTtcclxuXHRcdGEuc3VjY2Vzcyh7XHJcblx0XHRcdHVybDogZVxyXG5cdFx0fSlcclxuXHR9XHJcblx0dmFyIGUsIGIgPSB0aGlzLFxyXG5cdFx0YyA9IFtdLFxyXG5cdFx0ZCA9IFwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL3N0YXRpY21hcD9cIjtcclxuXHRjLnB1c2goXCJrZXk9XCIgKyBiLmtleSksIGUgPSBiLnJlcXVlc3RDb25maWcsIGMucHVzaChcInM9XCIgKyBlLnMpLCBjLnB1c2goXCJwbGF0Zm9ybT1cIiArIGUucGxhdGZvcm0pLCBjLnB1c2goXCJhcHBuYW1lPVwiICtcclxuXHRcdFx0ZS5hcHBuYW1lKSwgYy5wdXNoKFwic2RrdmVyc2lvbj1cIiArIGUuc2RrdmVyc2lvbiksIGMucHVzaChcImxvZ3ZlcnNpb249XCIgKyBlLmxvZ3ZlcnNpb24pLCBhLmxvY2F0aW9uID8gZihhLmxvY2F0aW9uKSA6XHJcblx0XHRiLmdldFd4TG9jYXRpb24oYSwgZnVuY3Rpb24oYSkge1xyXG5cdFx0XHRmKGEpXHJcblx0XHR9KVxyXG59LCBBTWFwV1gucHJvdG90eXBlLmdldElucHV0dGlwcyA9IGZ1bmN0aW9uKGEpIHtcclxuXHR2YXIgYiA9IHRoaXMsXHJcblx0XHRjID0gYi5yZXF1ZXN0Q29uZmlnLFxyXG5cdFx0ZCA9IHtcclxuXHRcdFx0a2V5OiBiLmtleSxcclxuXHRcdFx0czogYy5zLFxyXG5cdFx0XHRwbGF0Zm9ybTogYy5wbGF0Zm9ybSxcclxuXHRcdFx0YXBwbmFtZTogYi5rZXksXHJcblx0XHRcdHNka3ZlcnNpb246IGMuc2RrdmVyc2lvbixcclxuXHRcdFx0bG9ndmVyc2lvbjogYy5sb2d2ZXJzaW9uXHJcblx0XHR9O1xyXG5cdGEubG9jYXRpb24gJiYgKGRbXCJsb2NhdGlvblwiXSA9IGEubG9jYXRpb24pLCBhLmtleXdvcmRzICYmIChkW1wia2V5d29yZHNcIl0gPSBhLmtleXdvcmRzKSwgYS50eXBlICYmIChkW1widHlwZVwiXSA9IGEudHlwZSksXHJcblx0XHRhLmNpdHkgJiYgKGRbXCJjaXR5XCJdID0gYS5jaXR5KSwgYS5jaXR5bGltaXQgJiYgKGRbXCJjaXR5bGltaXRcIl0gPSBhLmNpdHlsaW1pdCksIHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9hc3Npc3RhbnQvaW5wdXR0aXBzXCIsXHJcblx0XHRcdGRhdGE6IGQsXHJcblx0XHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdFx0aGVhZGVyOiB7XHJcblx0XHRcdFx0XCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24oYikge1xyXG5cdFx0XHRcdGIgJiYgYi5kYXRhICYmIGIuZGF0YS50aXBzICYmIGEuc3VjY2Vzcyh7XHJcblx0XHRcdFx0XHR0aXBzOiBiLmRhdGEudGlwc1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IGZ1bmN0aW9uKGIpIHtcclxuXHRcdFx0XHRhLmZhaWwoe1xyXG5cdFx0XHRcdFx0ZXJyQ29kZTogXCIwXCIsXHJcblx0XHRcdFx0XHRlcnJNc2c6IGIuZXJyTXNnIHx8IFwiXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG59LCBBTWFwV1gucHJvdG90eXBlLmdldERyaXZpbmdSb3V0ZSA9IGZ1bmN0aW9uKGEpIHtcclxuXHR2YXIgYiA9IHRoaXMsXHJcblx0XHRjID0gYi5yZXF1ZXN0Q29uZmlnLFxyXG5cdFx0ZCA9IHtcclxuXHRcdFx0a2V5OiBiLmtleSxcclxuXHRcdFx0czogYy5zLFxyXG5cdFx0XHRwbGF0Zm9ybTogYy5wbGF0Zm9ybSxcclxuXHRcdFx0YXBwbmFtZTogYi5rZXksXHJcblx0XHRcdHNka3ZlcnNpb246IGMuc2RrdmVyc2lvbixcclxuXHRcdFx0bG9ndmVyc2lvbjogYy5sb2d2ZXJzaW9uXHJcblx0XHR9O1xyXG5cdGEub3JpZ2luICYmIChkW1wib3JpZ2luXCJdID0gYS5vcmlnaW4pLFxyXG5cdFx0YS5kZXN0aW5hdGlvbiAmJiAoZFtcImRlc3RpbmF0aW9uXCJdID0gYS5kZXN0aW5hdGlvbiksXHJcblx0XHRhLnN0cmF0ZWd5ICYmIChkW1wic3RyYXRlZ3lcIl0gPSBhLnN0cmF0ZWd5KSxcclxuXHRcdGEud2F5cG9pbnRzICYmIChkW1wid2F5cG9pbnRzXCJdID0gYS53YXlwb2ludHMpLFxyXG5cdFx0YS5hdm9pZHBvbHlnb25zICYmIChkW1wiYXZvaWRwb2x5Z29uc1wiXSA9IGEuYXZvaWRwb2x5Z29ucyksXHJcblx0XHRhLmF2b2lkcm9hZCAmJiAoZFtcImF2b2lkcm9hZFwiXSA9IGEuYXZvaWRyb2FkKSxcclxuXHRcdHVuaS5yZXF1ZXN0KHtcclxuXHRcdFx0dXJsOiBcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9kaXJlY3Rpb24vZHJpdmluZ1wiLFxyXG5cdFx0XHRkYXRhOiBkLFxyXG5cdFx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcdFwiY29udGVudC10eXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGIpIHtcclxuXHRcdFx0XHRiICYmIGIuZGF0YSAmJiBiLmRhdGEucm91dGUgJiYgYS5zdWNjZXNzKHtcclxuXHRcdFx0XHRcdHBhdGhzOiBiLmRhdGEucm91dGUucGF0aHMsXHJcblx0XHRcdFx0XHR0YXhpX2Nvc3Q6IGIuZGF0YS5yb3V0ZS50YXhpX2Nvc3QgfHwgXCJcIlxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdGZhaWw6IGZ1bmN0aW9uKGIpIHtcclxuXHRcdFx0XHRhLmZhaWwoe1xyXG5cdFx0XHRcdFx0ZXJyQ29kZTogXCIwXCIsXHJcblx0XHRcdFx0XHRlcnJNc2c6IGIuZXJyTXNnIHx8IFwiXCJcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG59LCBBTWFwV1gucHJvdG90eXBlLmdldFdhbGtpbmdSb3V0ZSA9IGZ1bmN0aW9uKGEpIHtcclxuXHR2YXIgYiA9IHRoaXMsXHJcblx0XHRjID0gYi5yZXF1ZXN0Q29uZmlnLFxyXG5cdFx0ZCA9IHtcclxuXHRcdFx0a2V5OiBiLmtleSxcclxuXHRcdFx0czogYy5zLFxyXG5cdFx0XHRwbGF0Zm9ybTogYy5wbGF0Zm9ybSxcclxuXHRcdFx0YXBwbmFtZTogYi5rZXksXHJcblx0XHRcdHNka3ZlcnNpb246IGMuc2RrdmVyc2lvbixcclxuXHRcdFx0bG9ndmVyc2lvbjogYy5sb2d2ZXJzaW9uXHJcblx0XHR9O1xyXG5cdGEub3JpZ2luICYmIChkW1wib3JpZ2luXCJdID0gYS5vcmlnaW4pLCBhLmRlc3RpbmF0aW9uICYmIChkW1wiZGVzdGluYXRpb25cIl0gPSBhLmRlc3RpbmF0aW9uKSwgdW5pLnJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBcImh0dHBzOi8vcmVzdGFwaS5hbWFwLmNvbS92My9kaXJlY3Rpb24vd2Fsa2luZ1wiLFxyXG5cdFx0ZGF0YTogZCxcclxuXHRcdG1ldGhvZDogXCJHRVRcIixcclxuXHRcdGhlYWRlcjoge1xyXG5cdFx0XHRcImNvbnRlbnQtdHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxyXG5cdFx0fSxcclxuXHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGIpIHtcclxuXHRcdFx0YiAmJiBiLmRhdGEgJiYgYi5kYXRhLnJvdXRlICYmIGEuc3VjY2Vzcyh7XHJcblx0XHRcdFx0cGF0aHM6IGIuZGF0YS5yb3V0ZS5wYXRoc1xyXG5cdFx0XHR9KVxyXG5cdFx0fSxcclxuXHRcdGZhaWw6IGZ1bmN0aW9uKGIpIHtcclxuXHRcdFx0YS5mYWlsKHtcclxuXHRcdFx0XHRlcnJDb2RlOiBcIjBcIixcclxuXHRcdFx0XHRlcnJNc2c6IGIuZXJyTXNnIHx8IFwiXCJcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KVxyXG59LCBBTWFwV1gucHJvdG90eXBlLmdldFRyYW5zaXRSb3V0ZSA9IGZ1bmN0aW9uKGEpIHtcclxuXHR2YXIgYiA9IHRoaXMsXHJcblx0XHRjID0gYi5yZXF1ZXN0Q29uZmlnLFxyXG5cdFx0ZCA9IHtcclxuXHRcdFx0a2V5OiBiLmtleSxcclxuXHRcdFx0czogYy5zLFxyXG5cdFx0XHRwbGF0Zm9ybTogYy5wbGF0Zm9ybSxcclxuXHRcdFx0YXBwbmFtZTogYi5rZXksXHJcblx0XHRcdHNka3ZlcnNpb246IGMuc2RrdmVyc2lvbixcclxuXHRcdFx0bG9ndmVyc2lvbjogYy5sb2d2ZXJzaW9uXHJcblx0XHR9O1xyXG5cdGEub3JpZ2luICYmIChkW1wib3JpZ2luXCJdID0gYS5vcmlnaW4pLCBhLmRlc3RpbmF0aW9uICYmIChkW1wiZGVzdGluYXRpb25cIl0gPSBhLmRlc3RpbmF0aW9uKSwgYS5zdHJhdGVneSAmJiAoZFtcclxuXHRcdFwic3RyYXRlZ3lcIl0gPSBhLnN0cmF0ZWd5KSwgYS5jaXR5ICYmIChkW1wiY2l0eVwiXSA9IGEuY2l0eSksIGEuY2l0eWQgJiYgKGRbXCJjaXR5ZFwiXSA9IGEuY2l0eWQpLCB1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3YzL2RpcmVjdGlvbi90cmFuc2l0L2ludGVncmF0ZWRcIixcclxuXHRcdGRhdGE6IGQsXHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdH0sXHJcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihiKSB7XHJcblx0XHRcdGlmIChiICYmIGIuZGF0YSAmJiBiLmRhdGEucm91dGUpIHtcclxuXHRcdFx0XHR2YXIgYyA9IGIuZGF0YS5yb3V0ZTtcclxuXHRcdFx0XHRhLnN1Y2Nlc3Moe1xyXG5cdFx0XHRcdFx0ZGlzdGFuY2U6IGMuZGlzdGFuY2UgfHwgXCJcIixcclxuXHRcdFx0XHRcdHRheGlfY29zdDogYy50YXhpX2Nvc3QgfHwgXCJcIixcclxuXHRcdFx0XHRcdHRyYW5zaXRzOiBjLnRyYW5zaXRzXHJcblx0XHRcdFx0fSlcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGZhaWw6IGZ1bmN0aW9uKGIpIHtcclxuXHRcdFx0YS5mYWlsKHtcclxuXHRcdFx0XHRlcnJDb2RlOiBcIjBcIixcclxuXHRcdFx0XHRlcnJNc2c6IGIuZXJyTXNnIHx8IFwiXCJcclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KVxyXG59LCBBTWFwV1gucHJvdG90eXBlLmdldFJpZGluZ1JvdXRlID0gZnVuY3Rpb24oYSkge1xyXG5cdHZhciBiID0gdGhpcyxcclxuXHRcdGMgPSBiLnJlcXVlc3RDb25maWcsXHJcblx0XHRkID0ge1xyXG5cdFx0XHRrZXk6IGIua2V5LFxyXG5cdFx0XHRzOiBjLnMsXHJcblx0XHRcdHBsYXRmb3JtOiBjLnBsYXRmb3JtLFxyXG5cdFx0XHRhcHBuYW1lOiBiLmtleSxcclxuXHRcdFx0c2RrdmVyc2lvbjogYy5zZGt2ZXJzaW9uLFxyXG5cdFx0XHRsb2d2ZXJzaW9uOiBjLmxvZ3ZlcnNpb25cclxuXHRcdH07XHJcblx0YS5vcmlnaW4gJiYgKGRbXCJvcmlnaW5cIl0gPSBhLm9yaWdpbiksIGEuZGVzdGluYXRpb24gJiYgKGRbXCJkZXN0aW5hdGlvblwiXSA9IGEuZGVzdGluYXRpb24pLCB1bmkucmVxdWVzdCh7XHJcblx0XHR1cmw6IFwiaHR0cHM6Ly9yZXN0YXBpLmFtYXAuY29tL3Y0L2RpcmVjdGlvbi9iaWN5Y2xpbmdcIixcclxuXHRcdGRhdGE6IGQsXHJcblx0XHRtZXRob2Q6IFwiR0VUXCIsXHJcblx0XHRoZWFkZXI6IHtcclxuXHRcdFx0XCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdH0sXHJcblx0XHRzdWNjZXNzOiBmdW5jdGlvbihiKSB7XHJcblx0XHRcdGIgJiYgYi5kYXRhICYmIGIuZGF0YS5kYXRhICYmIGEuc3VjY2Vzcyh7XHJcblx0XHRcdFx0cGF0aHM6IGIuZGF0YS5kYXRhLnBhdGhzXHJcblx0XHRcdH0pXHJcblx0XHR9LFxyXG5cdFx0ZmFpbDogZnVuY3Rpb24oYikge1xyXG5cdFx0XHRhLmZhaWwoe1xyXG5cdFx0XHRcdGVyckNvZGU6IFwiMFwiLFxyXG5cdFx0XHRcdGVyck1zZzogYi5lcnJNc2cgfHwgXCJcIlxyXG5cdFx0XHR9KVxyXG5cdFx0fVxyXG5cdH0pXHJcbn0sIG1vZHVsZS5leHBvcnRzLkFNYXBXWCA9IEFNYXBXWDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!*******************************************************************************************************************************************************!*\
  !*** D:/code/editcode/vue/HbuilderProject/Logistics/pages/routemap/routemap.nvue?vue&type=style&index=0&id=742c4148&scoped=true&lang=css&mpType=page ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_style_index_0_id_742c4148_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../HBuilderX.2.7.5.20200519.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./routemap.nvue?vue&type=style&index=0&id=742c4148&scoped=true&lang=css&mpType=page */ 29);
/* harmony import */ var _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_style_index_0_id_742c4148_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_style_index_0_id_742c4148_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_style_index_0_id_742c4148_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_style_index_0_id_742c4148_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_HBuilderX_2_7_5_20200519_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_routemap_nvue_vue_type_style_index_0_id_742c4148_scoped_true_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/code/editcode/vue/HbuilderProject/Logistics/pages/routemap/routemap.nvue?vue&type=style&index=0&id=742c4148&scoped=true&lang=css&mpType=page ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "my-map": {
    "width": "750rpx"
  },
  "control-btn": {
    "position": "fixed",
    "flexDirection": "column",
    "top": "400rpx",
    "left": "20rpx",
    "alignItems": "center"
  },
  "location": {
    "marginBottom": "30rpx",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "assemble": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "control-btn-location-img": {
    "width": "60rpx",
    "height": "60rpx"
  },
  "control-btn-assemble-img": {
    "width": "80rpx",
    "height": "80rpx"
  },
  "control-btn-txt": {
    "fontSize": "19rpx",
    "textAlign": "center"
  },
  "weather": {
    "position": "fixed",
    "bottom": "10rpx",
    "right": "50rpx",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "weather-img": {
    "width": "50rpx",
    "height": "50rpx"
  },
  "wearth-txt": {
    "color": "#999999",
    "fontSize": "32rpx"
  }
}

/***/ })
/******/ ]);