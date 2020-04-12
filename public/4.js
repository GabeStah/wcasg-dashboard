(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/orderBy */ "./node_modules/lodash/orderBy.js");
/* harmony import */ var lodash_orderBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_orderBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/pick */ "./node_modules/lodash/pick.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  props: ['endpoint'],
  data: function data() {
    return {
      response: {
        table: null,
        displayable: [],
        appendable: [],
        updateable: [],
        createable: [],
        custom_columns: [],
        data: [],
        meta: [],
        allow: {}
      },
      sort: {
        key: 'id',
        order: 'asc'
      },
      limit: 15,
      quickSearchQuery: '',
      editing: {
        id: null,
        form: {},
        errors: []
      },
      search: {
        value: '',
        operator: 'equals',
        column: 'id'
      },
      creating: {
        active: false,
        form: {},
        errors: []
      },
      selected: []
    };
  },
  computed: {
    filteredRecords: function filteredRecords() {
      var _this = this;

      var data = this.response.data;
      data = data.filter(function (row) {
        return Object.keys(row).some(function (key) {
          return String(row[key]).toLowerCase().indexOf(_this.quickSearchQuery.toLowerCase()) > -1;
        });
      });

      if (this.sort.key) {
        data = lodash_orderBy__WEBPACK_IMPORTED_MODULE_2___default()(data, function (i) {
          var value = i[_this.sort.key];

          if (!isNaN(parseFloat(value))) {
            return parseFloat(value);
          }

          return String(i[_this.sort.key]).toLowerCase();
        }, this.sort.order);
      }

      return data;
    },
    canSelectItems: function canSelectItems() {
      return this.filteredRecords.length <= 500;
    }
  },
  methods: {
    getRecords: function getRecords() {
      var _this2 = this;

      return axios.get("".concat(this.endpoint, "?").concat(this.getQueryParameters())).then(function (response) {
        _this2.response = response.data;
      });
    },
    getQueryParameters: function getQueryParameters() {
      return query_string__WEBPACK_IMPORTED_MODULE_0___default.a.stringify(_objectSpread({
        limit: this.limit
      }, this.search));
    },
    sortBy: function sortBy(column) {
      this.sort.key = column;
      this.sort.order = this.sort.order == 'asc' ? 'desc' : 'asc';
    },
    edit: function edit(record) {
      this.editing.errors = [];
      this.editing.id = record.id;
      this.editing.form = lodash_pick__WEBPACK_IMPORTED_MODULE_3___default()(record, this.response.updateable);
    },
    update: function update() {
      var _this3 = this;

      axios.put("".concat(this.endpoint, "/").concat(this.editing.id), this.editing.form).then(function () {
        _this3.getRecords().then(function () {
          _this3.editing.id = null;
          _this3.editing.form = {};
        });
      })["catch"](function (error) {
        _this3.editing.errors = error.response.data.errors;
      });
    },
    store: function store() {
      var _this4 = this;

      axios.post("".concat(this.endpoint), this.creating.form).then(function () {
        _this4.getRecords().then(function () {
          _this4.creating.active = false;
          _this4.creating.form = {};
          _this4.creating.errors = [];
        });
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this4.creating.errors = error.response.data.errors;
        }
      });
    },
    destroy: function destroy(record) {
      var _this5 = this;

      if (!window.confirm("Are you sure you want to delete this?")) {
        return;
      }

      axios["delete"]("".concat(this.endpoint, "/").concat(record)).then(function () {
        _this5.selected = [];

        _this5.getRecords();
      })["catch"](function (error) {//
      });
    },
    isColumnUpdatable: function isColumnUpdatable(column) {
      return this.response.updateable.includes(column);
    },
    toggleSelectAll: function toggleSelectAll() {
      if (this.selected.length > 0) {
        this.selected = [];
        return;
      }

      this.selected = lodash_map__WEBPACK_IMPORTED_MODULE_1___default()(this.filteredRecords, 'id');
    }
  },
  mounted: function mounted() {
    this.getRecords();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DataTable.vue?vue&type=template&id=66f0941d&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/components/DataTable.vue?vue&type=template&id=66f0941d& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-body" }, [
      _c("div", { staticClass: "card-title" }, [
        _c("strong", { staticClass: "mr-auto" }, [
          _vm._v(_vm._s(_vm.response.table))
        ]),
        _vm._v(" "),
        _vm.response.allow.creation
          ? _c(
              "a",
              {
                staticClass: "pull-right ml-auto",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.creating.active = !_vm.creating.active
                  }
                }
              },
              [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.creating.active ? "Cancel" : "Add new record") +
                    "\n            "
                )
              ]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      _vm.creating.active
        ? _c("div", { staticClass: "card card-body my-3" }, [
            _c("h5", { staticClass: "card-title" }, [_vm._v("New record")]),
            _vm._v(" "),
            _c(
              "form",
              {
                attrs: { action: "#" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.store($event)
                  }
                }
              },
              [
                _vm._l(_vm.response.createable, function(row) {
                  return _c(
                    "div",
                    {
                      staticClass: "form-group row",
                      class: { "has-error": _vm.creating.errors[row.value] }
                    },
                    [
                      _c(
                        "label",
                        {
                          staticClass: "control-label col-md-4",
                          attrs: { for: row.value }
                        },
                        [
                          _vm._v(
                            "\n                        " +
                              _vm._s(
                                _vm.response.custom_columns[row.value] ||
                                  row.value
                              ) +
                              "\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col-md-6" },
                        [
                          row.type == "text"
                            ? [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.creating.form[row.value],
                                      expression: "creating.form[row.value]"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.creating.errors[row.value]
                                  },
                                  attrs: { type: "text" },
                                  domProps: {
                                    value: _vm.creating.form[row.value]
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.creating.form,
                                        row.value,
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            : row.type == "textarea"
                            ? [
                                _c("textarea", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.creating.form[row.value],
                                      expression: "creating.form[row.value]"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  class: {
                                    "is-invalid": _vm.creating.errors[row.value]
                                  },
                                  domProps: {
                                    value: _vm.creating.form[row.value]
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.creating.form,
                                        row.value,
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ]
                            : row.type == "select"
                            ? [
                                _c(
                                  "select",
                                  {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: _vm.creating.form[row.value],
                                        expression: "creating.form[row.value]"
                                      }
                                    ],
                                    staticClass: "form-control custom-select",
                                    class: {
                                      "is-invalid":
                                        _vm.creating.errors[row.value]
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$selectedVal = Array.prototype.filter
                                          .call($event.target.options, function(
                                            o
                                          ) {
                                            return o.selected
                                          })
                                          .map(function(o) {
                                            var val =
                                              "_value" in o ? o._value : o.value
                                            return val
                                          })
                                        _vm.$set(
                                          _vm.creating.form,
                                          row.value,
                                          $event.target.multiple
                                            ? $$selectedVal
                                            : $$selectedVal[0]
                                        )
                                      }
                                    }
                                  },
                                  [
                                    _vm._l(row.options, function(option) {
                                      return [
                                        option.children.length
                                          ? [
                                              _c(
                                                "optgroup",
                                                {
                                                  attrs: { label: option.name }
                                                },
                                                _vm._l(
                                                  option.children,
                                                  function(child) {
                                                    return _c(
                                                      "option",
                                                      {
                                                        attrs: {
                                                          disabled:
                                                            String(
                                                              child.usable
                                                            ).toLowerCase() !=
                                                            "true"
                                                        },
                                                        domProps: {
                                                          value: child.value
                                                        }
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(child.name) +
                                                            "\n                                            "
                                                        )
                                                      ]
                                                    )
                                                  }
                                                ),
                                                0
                                              )
                                            ]
                                          : [
                                              _c(
                                                "option",
                                                {
                                                  attrs: {
                                                    disabled:
                                                      String(
                                                        option.usable
                                                      ).toLowerCase() != "true"
                                                  },
                                                  domProps: {
                                                    value: option.value
                                                  }
                                                },
                                                [
                                                  _vm._v(
                                                    "\n                                            " +
                                                      _vm._s(option.name) +
                                                      "\n                                        "
                                                  )
                                                ]
                                              )
                                            ]
                                      ]
                                    })
                                  ],
                                  2
                                )
                              ]
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.creating.errors[row.value]
                            ? _c("div", { staticClass: "invalid-feedback" }, [
                                _c("strong", [
                                  _vm._v(
                                    _vm._s(_vm.creating.errors[row.value][0])
                                  )
                                ])
                              ])
                            : _vm._e()
                        ],
                        2
                      )
                    ]
                  )
                }),
                _vm._v(" "),
                _vm._m(0)
              ],
              2
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          attrs: { action: "#" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.getRecords($event)
            }
          }
        },
        [
          _c("fieldset", [
            _c(
              "label",
              {
                staticClass: "control-label",
                attrs: { for: "dataTableSearch" }
              },
              [_vm._v("Search")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "form-group col-sm-3" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search.column,
                        expression: "search.column"
                      }
                    ],
                    staticClass: "form-control custom-select",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.search,
                          "column",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.response.displayable, function(column) {
                    return _c("option", { domProps: { value: column } }, [
                      _vm._v(
                        "\n                                " +
                          _vm._s(column) +
                          "\n                            "
                      )
                    ])
                  }),
                  0
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-sm-3" }, [
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search.operator,
                        expression: "search.operator"
                      }
                    ],
                    staticClass: "form-control custom-select",
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.search,
                          "operator",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  [
                    _c("option", { attrs: { value: "equals" } }, [_vm._v("=")]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "contains" } }, [
                      _vm._v("contains")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "starts_with" } }, [
                      _vm._v("starts with")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "ends_with" } }, [
                      _vm._v("ends with")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "greater_than" } }, [
                      _vm._v("greater than")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "greater_equal_to" } }, [
                      _vm._v("greater than or equal to")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "less_than" } }, [
                      _vm._v("less than")
                    ]),
                    _vm._v(" "),
                    _c("option", { attrs: { value: "less_equal_to" } }, [
                      _vm._v("less than or equal to")
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form-group col-sm-6" }, [
                _c("div", { staticClass: "input-group" }, [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.search.value,
                        expression: "search.value"
                      }
                    ],
                    staticClass: "form-control",
                    attrs: { type: "text", id: "dataTableSearch" },
                    domProps: { value: _vm.search.value },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.search, "value", $event.target.value)
                      }
                    }
                  }),
                  _vm._v(" "),
                  _vm._m(1)
                ])
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "form-group row" }, [
        _c("div", { staticClass: "col-sm-10" }, [
          _c(
            "label",
            { staticClass: "control-label", attrs: { for: "filter" } },
            [
              _vm._v(
                "\n                    Quick search current results\n                "
              )
            ]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.quickSearchQuery,
                expression: "quickSearchQuery"
              }
            ],
            staticClass: "form-control",
            attrs: { type: "text", id: "filter" },
            domProps: { value: _vm.quickSearchQuery },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.quickSearchQuery = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-2" }, [
          _c(
            "label",
            { staticClass: "control-label", attrs: { for: "limit" } },
            [_vm._v("Per page")]
          ),
          _vm._v(" "),
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.limit,
                  expression: "limit"
                }
              ],
              staticClass: "form-control custom-select",
              attrs: { id: "limit" },
              on: {
                change: [
                  function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.limit = $event.target.multiple
                      ? $$selectedVal
                      : $$selectedVal[0]
                  },
                  _vm.getRecords
                ]
              }
            },
            [
              _c("option", { attrs: { value: "15" } }, [_vm._v("15")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "25" } }, [_vm._v("25")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "50" } }, [_vm._v("50")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "100" } }, [_vm._v("100")]),
              _vm._v(" "),
              _c("option", { attrs: { value: "" } }, [_vm._v("All")])
            ]
          )
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "card-body" }, [
      !_vm.response.data.length
        ? _c("p", { staticClass: "card-text my-2" }, [
            _vm._v("No records found.")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.selected.length
        ? _c("div", { staticClass: "clearfix" }, [
            _c("div", { staticClass: "btn-group" }, [
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "dropdown-menu" }, [
                _c(
                  "a",
                  {
                    staticClass: "dropdown-item",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.destroy(_vm.selected)
                      }
                    }
                  },
                  [_vm._v("Delete")]
                )
              ])
            ])
          ])
        : _c("p", { staticClass: "card-text" }, [
            _vm._v("Select records to access more options")
          ])
    ]),
    _vm._v(" "),
    _vm.response.data.length
      ? _c(
          "table",
          {
            staticClass:
              "table table-responsive-sm table-hover table-outline mb-0"
          },
          [
            _c("thead", { staticClass: "thead-light" }, [
              _c(
                "tr",
                [
                  _vm.canSelectItems
                    ? _c("th", [
                        _c(
                          "label",
                          { staticClass: "custom-control custom-checkbox" },
                          [
                            _c("input", {
                              staticClass: "custom-control-input",
                              attrs: { type: "checkbox" },
                              domProps: {
                                checked:
                                  _vm.filteredRecords.length ===
                                  _vm.selected.length
                              },
                              on: { change: _vm.toggleSelectAll }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "custom-control-label" })
                          ]
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(_vm.response.displayable, function(column) {
                    return _c("th", [
                      _c(
                        "span",
                        {
                          staticClass: "sortable",
                          on: {
                            click: function($event) {
                              return _vm.sortBy(column)
                            }
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.response.custom_columns[column] || column
                            )
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _vm.sort.key === column
                        ? _c("div", {
                            staticClass: "arrow",
                            class: {
                              "arrow--asc": _vm.sort.order === "asc",
                              "arrow--desc": _vm.sort.order === "desc"
                            }
                          })
                        : _vm._e()
                    ])
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.response.appendable, function(column) {
                    return _c("th", [_c("span")])
                  }),
                  _vm._v(" "),
                  _vm.response.allow.updating
                    ? _c("th", [_vm._v(" ")])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.response.allow.deletion
                    ? _c("th", [_vm._v(" ")])
                    : _vm._e()
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.filteredRecords, function(record) {
                return _c(
                  "tr",
                  [
                    _vm.canSelectItems
                      ? _c("td", [
                          _c(
                            "label",
                            { staticClass: "custom-control custom-checkbox" },
                            [
                              _c("input", {
                                directives: [
                                  {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.selected,
                                    expression: "selected"
                                  }
                                ],
                                staticClass: "custom-control-input",
                                attrs: { type: "checkbox" },
                                domProps: {
                                  value: record.id,
                                  checked: Array.isArray(_vm.selected)
                                    ? _vm._i(_vm.selected, record.id) > -1
                                    : _vm.selected
                                },
                                on: {
                                  change: function($event) {
                                    var $$a = _vm.selected,
                                      $$el = $event.target,
                                      $$c = $$el.checked ? true : false
                                    if (Array.isArray($$a)) {
                                      var $$v = record.id,
                                        $$i = _vm._i($$a, $$v)
                                      if ($$el.checked) {
                                        $$i < 0 &&
                                          (_vm.selected = $$a.concat([$$v]))
                                      } else {
                                        $$i > -1 &&
                                          (_vm.selected = $$a
                                            .slice(0, $$i)
                                            .concat($$a.slice($$i + 1)))
                                      }
                                    } else {
                                      _vm.selected = $$c
                                    }
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("span", {
                                staticClass: "custom-control-label"
                              })
                            ]
                          )
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._l(record, function(columnValue, column) {
                      return _c(
                        "td",
                        [
                          _vm.editing.id === record.id &&
                          _vm.isColumnUpdatable(column)
                            ? [
                                _c(
                                  "div",
                                  {
                                    staticClass: "form-group",
                                    class: {
                                      "has-error": _vm.editing.errors[column]
                                    }
                                  },
                                  [
                                    _c("input", {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.editing.form[column],
                                          expression: "editing.form[column]"
                                        }
                                      ],
                                      staticClass: "form-control",
                                      class: {
                                        "is-invalid": _vm.editing.errors[column]
                                      },
                                      attrs: { type: "text" },
                                      domProps: {
                                        value: _vm.editing.form[column]
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.editing.form,
                                            column,
                                            $event.target.value
                                          )
                                        }
                                      }
                                    }),
                                    _vm._v(" "),
                                    _vm.editing.errors[column]
                                      ? _c(
                                          "div",
                                          { staticClass: "invalid-feedback" },
                                          [
                                            _c("strong", [
                                              _vm._v(
                                                _vm._s(
                                                  _vm.editing.errors[column][0]
                                                )
                                              )
                                            ])
                                          ]
                                        )
                                      : _vm._e()
                                  ]
                                )
                              ]
                            : [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(columnValue) +
                                    "\n                "
                                )
                              ]
                        ],
                        2
                      )
                    }),
                    _vm._v(" "),
                    _vm.response.allow.updating
                      ? _c(
                          "td",
                          [
                            _vm.editing.id !== record.id
                              ? _c(
                                  "a",
                                  {
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.edit(record)
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    Quick edit\n                "
                                    )
                                  ]
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.editing.id === record.id
                              ? [
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          return _vm.update($event)
                                        }
                                      }
                                    },
                                    [_vm._v("Save")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      attrs: { href: "#" },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.editing.id = null
                                        }
                                      }
                                    },
                                    [_vm._v("Cancel")]
                                  )
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.response.allow.deletion
                      ? _c("td", [
                          _c(
                            "a",
                            {
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.destroy(record.id)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ])
                      : _vm._e()
                  ],
                  2
                )
              }),
              0
            )
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.response.data.length
      ? _c("div", { staticClass: "card-body" }, [
          _vm._v("\n        Pagination currently not available\n    ")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-6 offset-md-4" }, [
        _c(
          "button",
          { staticClass: "btn btn-primary", attrs: { type: "submit" } },
          [_vm._v("Save")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-btn" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [_vm._v("Search")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "btn btn-outline-primary dropdown-toggle",
        attrs: {
          href: "#",
          role: "button",
          "data-toggle": "dropdown",
          "aria-haspopup": "true",
          "aria-expanded": "false"
        }
      },
      [
        _vm._v("\n                    With selected "),
        _c("span", { staticClass: "caret" })
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/components/DataTable.vue":
/*!******************************************************!*\
  !*** ./resources/assets/js/components/DataTable.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataTable_vue_vue_type_template_id_66f0941d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataTable.vue?vue&type=template&id=66f0941d& */ "./resources/assets/js/components/DataTable.vue?vue&type=template&id=66f0941d&");
/* harmony import */ var _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataTable.vue?vue&type=script&lang=js& */ "./resources/assets/js/components/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DataTable_vue_vue_type_template_id_66f0941d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataTable_vue_vue_type_template_id_66f0941d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/components/DataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/components/DataTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/components/DataTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/components/DataTable.vue?vue&type=template&id=66f0941d&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/components/DataTable.vue?vue&type=template&id=66f0941d& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_66f0941d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DataTable.vue?vue&type=template&id=66f0941d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/components/DataTable.vue?vue&type=template&id=66f0941d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_66f0941d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataTable_vue_vue_type_template_id_66f0941d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);