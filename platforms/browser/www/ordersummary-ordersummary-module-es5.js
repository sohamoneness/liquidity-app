(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ordersummary-ordersummary-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/ordersummary/ordersummary.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ordersummary/ordersummary.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOrdersummaryOrdersummaryPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>ordersummary</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/ordersummary/ordersummary-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/ordersummary/ordersummary-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: OrdersummaryPageRoutingModule */

    /***/
    function srcAppOrdersummaryOrdersummaryRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersummaryPageRoutingModule", function () {
        return OrdersummaryPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ordersummary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ordersummary.page */
      "./src/app/ordersummary/ordersummary.page.ts");

      var routes = [{
        path: '',
        component: _ordersummary_page__WEBPACK_IMPORTED_MODULE_3__["OrdersummaryPage"]
      }];

      var OrdersummaryPageRoutingModule = /*#__PURE__*/_createClass(function OrdersummaryPageRoutingModule() {
        _classCallCheck(this, OrdersummaryPageRoutingModule);
      });

      OrdersummaryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OrdersummaryPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/ordersummary/ordersummary.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/ordersummary/ordersummary.module.ts ***!
      \*****************************************************/

    /*! exports provided: OrdersummaryPageModule */

    /***/
    function srcAppOrdersummaryOrdersummaryModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersummaryPageModule", function () {
        return OrdersummaryPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ordersummary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ordersummary-routing.module */
      "./src/app/ordersummary/ordersummary-routing.module.ts");
      /* harmony import */


      var _ordersummary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ordersummary.page */
      "./src/app/ordersummary/ordersummary.page.ts");

      var OrdersummaryPageModule = /*#__PURE__*/_createClass(function OrdersummaryPageModule() {
        _classCallCheck(this, OrdersummaryPageModule);
      });

      OrdersummaryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ordersummary_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrdersummaryPageRoutingModule"]],
        declarations: [_ordersummary_page__WEBPACK_IMPORTED_MODULE_6__["OrdersummaryPage"]]
      })], OrdersummaryPageModule);
      /***/
    },

    /***/
    "./src/app/ordersummary/ordersummary.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/ordersummary/ordersummary.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOrdersummaryOrdersummaryPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyc3VtbWFyeS9vcmRlcnN1bW1hcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/ordersummary/ordersummary.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/ordersummary/ordersummary.page.ts ***!
      \***************************************************/

    /*! exports provided: OrdersummaryPage */

    /***/
    function srcAppOrdersummaryOrdersummaryPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OrdersummaryPage", function () {
        return OrdersummaryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var OrdersummaryPage = /*#__PURE__*/function () {
        function OrdersummaryPage() {
          _classCallCheck(this, OrdersummaryPage);
        }

        _createClass(OrdersummaryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return OrdersummaryPage;
      }();

      OrdersummaryPage.ctorParameters = function () {
        return [];
      };

      OrdersummaryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ordersummary',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./ordersummary.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/ordersummary/ordersummary.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./ordersummary.page.scss */
        "./src/app/ordersummary/ordersummary.page.scss"))["default"]]
      })], OrdersummaryPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=ordersummary-ordersummary-module-es5.js.map