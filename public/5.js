(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/extension/account/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/extension/account/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_Action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../partials/Action */ "./resources/assets/js/components/extension/partials/Action.vue");
/* harmony import */ var _partials_Editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../partials/Editor */ "./resources/assets/js/components/extension/partials/Editor.vue");
/* harmony import */ var _partials_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../partials/Error */ "./resources/assets/js/components/partials/Error.vue");
/* harmony import */ var _partials_Extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../partials/Extension */ "./resources/assets/js/components/extension/partials/Extension.vue");
/* harmony import */ var _partials_Predicate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../partials/Predicate */ "./resources/assets/js/components/extension/partials/Predicate.vue");
/* harmony import */ var _mixins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins */ "./resources/assets/js/components/extension/mixins/index.js");
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
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    Action: _partials_Action__WEBPACK_IMPORTED_MODULE_0__["default"],
    Extension: _partials_Extension__WEBPACK_IMPORTED_MODULE_3__["default"],
    Predicate: _partials_Predicate__WEBPACK_IMPORTED_MODULE_4__["default"],
    Editor: _partials_Editor__WEBPACK_IMPORTED_MODULE_1__["default"],
    Error: _partials_Error__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      actions: Object,
      extensions: this.initialExtensions,
      predicates: Object
    };
  },
  methods: {
    addExtension: function addExtension() {
      this.extensions.push({
        id: this.getRandomInt(),
        dirty: true,
        actions: [{
          id: this.getRandomInt(),
          dirty: true,
          "function": this.compress("function fn() {\n    // Add logic here\n}")
        }],
        pivot: {
          enabled_at: new Date(new Date().getTime() - 1000)
        },
        predicates: [{
          id: this.getRandomInt(),
          dirty: true,
          "function": this.compress("function fn() {\n    // Add logic here\n}")
        }]
      });
    },
    getRandomInt: function getRandomInt() {
      var max = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 999999999;
      return Math.floor(Math.random() * Math.floor(max));
    },
    handleExtensionUpdated: function handleExtensionUpdated(data) {
      var id = data.id,
          extension = data.extension;
      var index = this.extensions.findIndex(function (extension) {
        return extension.id === id;
      });

      if (index) {
        this.$set(this.extensions, index, extension);
      }
    },
    handleExtensionDeleted: function handleExtensionDeleted(id) {
      var index = this.extensions.findIndex(function (extension) {
        return extension.id === id;
      });

      if (index) {
        this.extensions.splice(index, 1);
      }
    }
  },
  mixins: [_mixins__WEBPACK_IMPORTED_MODULE_5__["extensionMixin"]],
  props: {
    initialExtensions: Array,
    i8n: Object,
    site: Object
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/extension/account/Index.vue?vue&type=template&id=81baea8e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/extension/account/Index.vue?vue&type=template&id=81baea8e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "features" }, [
    _c(
      "div",
      { staticClass: "card" },
      [
        _vm.extensions
          ? _c(
              "div",
              _vm._l(_vm.extensions, function(extension) {
                return _c(
                  "div",
                  { key: extension.id, staticClass: "col-sm-12" },
                  [
                    _c("extension", {
                      attrs: {
                        "initial-extension": extension,
                        i8n: _vm.i8n,
                        site: _vm.site
                      },
                      on: {
                        update: _vm.handleExtensionUpdated,
                        delete: _vm.handleExtensionDeleted
                      }
                    })
                  ],
                  1
                )
              }),
              0
            )
          : _vm._e(),
        _vm._v(" "),
        _c("div", [
          _c("a", { attrs: { href: "#" } }, [
            _c(
              "button",
              {
                staticClass: "btn btn-primary m-3 ml-4",
                on: { click: _vm.addExtension }
              },
              [
                _vm._v(
                  "\n          " + _vm._s(_vm.i8n.add_new_button) + "\n        "
                )
              ]
            )
          ])
        ]),
        _vm._v(" "),
        _c("error", {
          attrs: { error: _vm.error, "is-loading": _vm.isLoading }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/extension/account/Index.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/components/extension/account/Index.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_81baea8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=81baea8e& */ "./resources/assets/js/components/extension/account/Index.vue?vue&type=template&id=81baea8e&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/extension/account/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_81baea8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_81baea8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/extension/account/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/extension/account/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/components/extension/account/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/extension/account/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/extension/account/Index.vue?vue&type=template&id=81baea8e&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/components/extension/account/Index.vue?vue&type=template&id=81baea8e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_81baea8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=81baea8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/extension/account/Index.vue?vue&type=template&id=81baea8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_81baea8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_81baea8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);