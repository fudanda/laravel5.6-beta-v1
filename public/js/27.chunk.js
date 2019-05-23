(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/ajax.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/babel-loader/lib??ref--12-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/form/ajax.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BaseForm',
  data: function data() {
    return {
      value1: 'http://www.sarlboroapp.com/app/index.php?act=sign&op=add_sign&timestamp=1558600006&sign=efbb37e08cd214456bc2fd67c2bab936&token=hkp7kcXQfj0MgH-R4h6gK26SPOe4u40ZUzqmK5a3EGl3UJRodCiZaJPaZId8YDgZUbSwDA1U3a-fYh-zE4En2aHkW7LY7w5j0lAeAUQtWk7iJgRfq8yklOQwlGW==e10adc3949ba59abbe56e057f20f883e',
      value2: 'http://www.sarlboroapp.com/app/index.php?act=lottery&op=participate&timestamp=1558600044&sign=c197cff13f3ed19b7f997d8d3c1187b4&token=hkp7kcXQfj0MgH-R4h6gK26SPOe4u40ZUzqmK5a3EGl3UJRodCiZaJPaZId8YDgZUbSwDA1U3a-fYh-zE4En2aHkW7LY7w5j0lAeAUQtWk7iJgRfq8yklOQwlGW==e10adc3949ba59abbe56e057f20f883e'
    };
  },
  methods: {
    ajax1: function ajax1(e) {
      var that = this;
      console.log('签到：' + that.value1);

      for (var index = 0; index < 10; index++) {
        console.log(that.value1);
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(that.value1).then(function (result) {
          console.log(result.data.msg);
        });
      }
    },
    ajax2: function ajax2(e) {
      var that = this;
      console.log('抽奖：' + that.value2);

      for (var index = 0; index < 10; index++) {
        console.log(that.value2);
        axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(that.value2).then(function (result) {
          console.log(result.data.msg);
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/ajax.vue?vue&type=template&id=7baf15c8&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/form/ajax.vue?vue&type=template&id=7baf15c8& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("a-button", { attrs: { type: "primary" }, on: { click: _vm.ajax1 } }, [
        _vm._v("签到")
      ]),
      _vm._v(" "),
      _c("a-button", { attrs: { type: "primary" }, on: { click: _vm.ajax2 } }, [
        _vm._v("抽奖")
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/form/ajax.vue":
/*!******************************************!*\
  !*** ./resources/js/views/form/ajax.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ajax_vue_vue_type_template_id_7baf15c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ajax.vue?vue&type=template&id=7baf15c8& */ "./resources/js/views/form/ajax.vue?vue&type=template&id=7baf15c8&");
/* harmony import */ var _ajax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ajax.vue?vue&type=script&lang=js& */ "./resources/js/views/form/ajax.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ajax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ajax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ajax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ajax_vue_vue_type_template_id_7baf15c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ajax_vue_vue_type_template_id_7baf15c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/form/ajax.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/form/ajax.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/form/ajax.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ajax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/babel-loader/lib??ref--12-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ajax.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/ajax.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_babel_loader_lib_index_js_ref_12_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ajax_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/form/ajax.vue?vue&type=template&id=7baf15c8&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/form/ajax.vue?vue&type=template&id=7baf15c8& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ajax_vue_vue_type_template_id_7baf15c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ajax.vue?vue&type=template&id=7baf15c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/form/ajax.vue?vue&type=template&id=7baf15c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ajax_vue_vue_type_template_id_7baf15c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ajax_vue_vue_type_template_id_7baf15c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);