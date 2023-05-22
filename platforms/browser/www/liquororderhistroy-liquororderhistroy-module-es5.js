(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["liquororderhistroy-liquororderhistroy-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/liquororderhistroy/liquororderhistroy.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liquororderhistroy/liquororderhistroy.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLiquororderhistroyLiquororderhistroyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Order Histroy</ion-title>\n    <!-- <ion-label>SELECTED LOCATION</ion-label>\n    <ion-item>\n    <ion-select value=\"kolkata\">\n      <ion-select-option selected value=\"kolkata\">kolkata</ion-select-option>\n      <ion-select-option value=\"mumbai\">mumbai</ion-select-option>\n      <ion-select-option value=\"bangalore\">bangalore</ion-select-option>\n      <ion-select-option value=\"delhi\">delhi</ion-select-option>\n    </ion-select>\n  </ion-item> -->\n    <!-- <ion-icon slot=\"end\" class=\"search_item\" name=\"search-outline\"></ion-icon> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"title_bar\">\n    <h2 class=\"title\">Orders</h2>\n  </div>\n  <div class=\"order_list\">\n    <ion-item *ngFor=\"let item of orders\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{item.shop.image}}\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{item.shop.name}}</h3>\n        <p>Order ID: <span class=\"bold_count\">{{item.unique_id}}</span></p>\n        <p>Order Date: <span class=\"bold_count\">{{item.created_at}}</span></p>\n        <div class=\"btn_grp\">\n          <ion-button fill=\"outline\" (click)=\"orderDetails(item)\">ORDER DETAILS</ion-button>\n          <!-- <ion-button fill=\"outline\" (click)=\"cancelOrder(item)\">CANCEL ORDER</ion-button> -->\n        </div>\n      </ion-label>\n    </ion-item>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/liquororderhistroy/liquororderhistroy-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/liquororderhistroy/liquororderhistroy-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: LiquororderhistroyPageRoutingModule */

    /***/
    function srcAppLiquororderhistroyLiquororderhistroyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiquororderhistroyPageRoutingModule", function () {
        return LiquororderhistroyPageRoutingModule;
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


      var _liquororderhistroy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./liquororderhistroy.page */
      "./src/app/liquororderhistroy/liquororderhistroy.page.ts");

      var routes = [{
        path: '',
        component: _liquororderhistroy_page__WEBPACK_IMPORTED_MODULE_3__["LiquororderhistroyPage"]
      }];

      var LiquororderhistroyPageRoutingModule = /*#__PURE__*/_createClass(function LiquororderhistroyPageRoutingModule() {
        _classCallCheck(this, LiquororderhistroyPageRoutingModule);
      });

      LiquororderhistroyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LiquororderhistroyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/liquororderhistroy/liquororderhistroy.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/liquororderhistroy/liquororderhistroy.module.ts ***!
      \*****************************************************************/

    /*! exports provided: LiquororderhistroyPageModule */

    /***/
    function srcAppLiquororderhistroyLiquororderhistroyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiquororderhistroyPageModule", function () {
        return LiquororderhistroyPageModule;
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


      var _liquororderhistroy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./liquororderhistroy-routing.module */
      "./src/app/liquororderhistroy/liquororderhistroy-routing.module.ts");
      /* harmony import */


      var _liquororderhistroy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./liquororderhistroy.page */
      "./src/app/liquororderhistroy/liquororderhistroy.page.ts");

      var LiquororderhistroyPageModule = /*#__PURE__*/_createClass(function LiquororderhistroyPageModule() {
        _classCallCheck(this, LiquororderhistroyPageModule);
      });

      LiquororderhistroyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _liquororderhistroy_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiquororderhistroyPageRoutingModule"]],
        declarations: [_liquororderhistroy_page__WEBPACK_IMPORTED_MODULE_6__["LiquororderhistroyPage"]]
      })], LiquororderhistroyPageModule);
      /***/
    },

    /***/
    "./src/app/liquororderhistroy/liquororderhistroy.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/liquororderhistroy/liquororderhistroy.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLiquororderhistroyLiquororderhistroyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xpcXVvcm9yZGVyaGlzdHJveS9saXF1b3JvcmRlcmhpc3Ryb3kucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/liquororderhistroy/liquororderhistroy.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/liquororderhistroy/liquororderhistroy.page.ts ***!
      \***************************************************************/

    /*! exports provided: LiquororderhistroyPage */

    /***/
    function srcAppLiquororderhistroyLiquororderhistroyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiquororderhistroyPage", function () {
        return LiquororderhistroyPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/order.service */
      "./src/app/services/order.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var LiquororderhistroyPage = /*#__PURE__*/function () {
        function LiquororderhistroyPage(navCtrl, orderProvider, alertCtrl, helper, plt) {
          _classCallCheck(this, LiquororderhistroyPage);

          this.navCtrl = navCtrl;
          this.orderProvider = orderProvider;
          this.alertCtrl = alertCtrl;
          this.helper = helper;
          this.plt = plt;
          this.all_liquor = [];
          this.liquorshopid = '';
          this.orders = [];
        }

        _createClass(LiquororderhistroyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            console.log(localStorage.getItem("user_id"));
            this.orderProvider.fetchOrderHistroy(localStorage.getItem("user_id")).then(function (res) {
              if (res["status"] == 1) {
                _this.orders = res["orders"];
              }
            });
          }
        }, {
          key: "orderDetails",
          value: function orderDetails(item) {
            localStorage.setItem("order_id", item.id);
            this.navCtrl.navigateForward('/liquororderhistroy-details');
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder(item) {
            console.log(item); // let data = {
            //   "id": item.id,
            // }
            // this.userDetails.cancelOrder(data).then((res) => {
            //   if (res["status"] == '1') {
            //     this.helper.presentToast('Item cancelled successfully');
            //     console.log(res);
            //   }
            // })
          }
        }]);

        return LiquororderhistroyPage;
      }();

      LiquororderhistroyPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: src_app_services_order_service__WEBPACK_IMPORTED_MODULE_1__["OrderProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }];
      };

      LiquororderhistroyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-liquororderhistroy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./liquororderhistroy.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/liquororderhistroy/liquororderhistroy.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./liquororderhistroy.page.scss */
        "./src/app/liquororderhistroy/liquororderhistroy.page.scss"))["default"]]
      })], LiquororderhistroyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=liquororderhistroy-liquororderhistroy-module-es5.js.map