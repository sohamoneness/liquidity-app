(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["liquororderhistroy-details-liquororderhistroy-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/liquororderhistroy-details/liquororderhistroy-details.page.html":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/liquororderhistroy-details/liquororderhistroy-details.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppLiquororderhistroyDetailsLiquororderhistroyDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Order Summary</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"shop_details\">\n    <ion-avatar slot=\"start\">\n      <img src=\"{{shop_details.image}}\" />\n    </ion-avatar>\n    <ion-label *ngIf=\"shop_details\">\n      <h5>{{shop_details.name}}</h5>\n      {{shop_details.address}}\n    </ion-label>\n  </ion-item>\n\n  <div class=\"title_bar\">\n\t\t<h2 class=\"title\">Order Details</h2>\n  </div>\n  \n  <div class=\"order-summary flex\" *ngIf=\"all_order\">\n    <div class=\"order-content\">\n      <p><span>Order ID:</span> {{all_order.unique_id}}</p>\n      <p *ngIf=\"payment_type == '1'\"><span>Transation Reference:</span> Online</p>\n    <p *ngIf=\"payment_type == '2'\"><span>Transation Reference:</span> Wallet</p>\n      <ion-grid no-padding>\n        <ion-row>\n          <ion-col size=\"12\"><p><span>Order Date:</span> {{all_order.created_at}}</p></ion-col>\n          <!-- <ion-col size=\"6\"><p><span>Time:</span> 02:24 PM</p></ion-col> -->\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\"><p><span>Scheduled Date:</span> {{all_order.order_date}}</p></ion-col>\n          <!-- <ion-col size=\"6\"><p><span>Time:</span> 02:24 PM</p></ion-col> -->\n        </ion-row>\n      </ion-grid>\n      <p><span>liquidity order code</span> {{all_order.unique_id}}</p>\n    </div>\n    <div>\n      <img src=\"https://chart.apis.google.com/chart?cht=qr&chs=300x300&chld=L|0&chl={{all_order.id}}\" />\n    </div>\n  </div>\n\n  <div class=\"title_bar\">\n\t\t<h2 class=\"title\">Order Summary</h2>\n  </div>\n  \n  <div class=\"order-summary\" >\n    <ion-grid no-padding>\n      <ion-row *ngFor=\"let item of all_liquor_order_summary\">\n        <ion-col size=\"8\">\n          <h6>{{item.product_name}}</h6>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <p><span>{{item.quantity}} <ion-icon name=\"close-sharp\"></ion-icon> <span class=\"currency\">$</span> {{item.price}}</span></p>\n        </ion-col>\n      </ion-row>\n      <hr/>\n      <ion-row>\n        <ion-col size=\"8\">\n          <h6>Subtotal</h6>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <h6><span class=\"currency\">$</span> {{all_order.amount}}</h6>\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6>Restaurant Promo</h6>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <h6>- <span class=\"currency\">$</span> {{all_order.deduct_amount}}</h6>\n        </ion-col>\n        <ion-col size=\"8\">\n          <p><span>Taxes and charges</span></p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <p><span><span class=\"currency\">$</span> {{all_order.tax_amount}}</span></p>\n        </ion-col>\n      </ion-row>\n      <hr/>\n      <ion-row>\n        <ion-col size=\"8\">\n          <h6>Total</h6>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <h6><span class=\"currency\">$</span> {{all_order.total_amount}}</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"title_bar\">\n\t\t<h2 class=\"title\">Contact Outlet</h2>\n  </div>\n  \n  <div class=\"order-summary\" *ngIf=\"shop_details\"> \n    <p><ion-icon name=\"call-sharp\"></ion-icon> {{shop_details.phone}}</p>\n    <hr/>\n    <!-- <p><ion-icon name=\"call-sharp\"></ion-icon> +91 8978975465</p> -->\n  </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/liquororderhistroy-details/liquororderhistroy-details-routing.module.ts":
    /*!*****************************************************************************************!*\
      !*** ./src/app/liquororderhistroy-details/liquororderhistroy-details-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: LiquororderhistroyDetailsPageRoutingModule */

    /***/
    function srcAppLiquororderhistroyDetailsLiquororderhistroyDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiquororderhistroyDetailsPageRoutingModule", function () {
        return LiquororderhistroyDetailsPageRoutingModule;
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


      var _liquororderhistroy_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./liquororderhistroy-details.page */
      "./src/app/liquororderhistroy-details/liquororderhistroy-details.page.ts");

      var routes = [{
        path: '',
        component: _liquororderhistroy_details_page__WEBPACK_IMPORTED_MODULE_3__["LiquororderhistroyDetailsPage"]
      }];

      var LiquororderhistroyDetailsPageRoutingModule = /*#__PURE__*/_createClass(function LiquororderhistroyDetailsPageRoutingModule() {
        _classCallCheck(this, LiquororderhistroyDetailsPageRoutingModule);
      });

      LiquororderhistroyDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LiquororderhistroyDetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/liquororderhistroy-details/liquororderhistroy-details.module.ts":
    /*!*********************************************************************************!*\
      !*** ./src/app/liquororderhistroy-details/liquororderhistroy-details.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: LiquororderhistroyDetailsPageModule */

    /***/
    function srcAppLiquororderhistroyDetailsLiquororderhistroyDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiquororderhistroyDetailsPageModule", function () {
        return LiquororderhistroyDetailsPageModule;
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


      var _liquororderhistroy_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./liquororderhistroy-details-routing.module */
      "./src/app/liquororderhistroy-details/liquororderhistroy-details-routing.module.ts");
      /* harmony import */


      var _liquororderhistroy_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./liquororderhistroy-details.page */
      "./src/app/liquororderhistroy-details/liquororderhistroy-details.page.ts");

      var LiquororderhistroyDetailsPageModule = /*#__PURE__*/_createClass(function LiquororderhistroyDetailsPageModule() {
        _classCallCheck(this, LiquororderhistroyDetailsPageModule);
      });

      LiquororderhistroyDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _liquororderhistroy_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["LiquororderhistroyDetailsPageRoutingModule"]],
        declarations: [_liquororderhistroy_details_page__WEBPACK_IMPORTED_MODULE_6__["LiquororderhistroyDetailsPage"]]
      })], LiquororderhistroyDetailsPageModule);
      /***/
    },

    /***/
    "./src/app/liquororderhistroy-details/liquororderhistroy-details.page.scss":
    /*!*********************************************************************************!*\
      !*** ./src/app/liquororderhistroy-details/liquororderhistroy-details.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppLiquororderhistroyDetailsLiquororderhistroyDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-item {\n  --background: #fff;\n  --inner-border-width: 0;\n}\nion-content ion-item ion-avatar {\n  --border-radius: 5px;\n}\nion-content ion-item ion-label {\n  font-size: 10px;\n  color: #828282;\n}\nion-content ion-item ion-label h5 {\n  font-size: 12px;\n  font-weight: 900;\n  color: #000;\n}\nion-content .order-summary {\n  padding: 15px 20px;\n}\nion-content .order-summary .order-content {\n  flex: 1 0 0%;\n}\nion-content .order-summary.flex {\n  display: flex;\n}\nion-content .order-summary.flex img {\n  max-width: 100px;\n}\nion-content .order-summary p {\n  color: #bf9f4c;\n  margin: 0;\n  font-weight: 600;\n  line-height: 20px;\n}\nion-content .order-summary p span {\n  color: #828282;\n}\nion-content .order-summary ion-grid {\n  --ion-grid-padding: 0;\n}\nion-content .order-summary ion-grid ion-col {\n  --ion-grid-column-padding: 0;\n}\nion-content .order-summary hr {\n  background-color: #b2b2b2;\n  margin: 10px 0;\n}\nion-content .order-summary h6 {\n  font-weight: 800;\n  color: #111;\n  font-size: 12px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlxdW9yb3JkZXJoaXN0cm95LWRldGFpbHMvbGlxdW9yb3JkZXJoaXN0cm95LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtBQUFSO0FBRVE7RUFDSSxvQkFBQTtBQUFaO0FBRVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUFaO0FBRVk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBQWhCO0FBSUk7RUFDSSxrQkFBQTtBQUZSO0FBSVE7RUFDSSxZQUFBO0FBRlo7QUFLUTtFQUNJLGFBQUE7QUFIWjtBQUtZO0VBQ0ksZ0JBQUE7QUFIaEI7QUFPUTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUxaO0FBT1k7RUFDSSxjQUFBO0FBTGhCO0FBUVE7RUFDSSxxQkFBQTtBQU5aO0FBUVk7RUFDSSw0QkFBQTtBQU5oQjtBQVNRO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBUFo7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBUFoiLCJmaWxlIjoic3JjL2FwcC9saXF1b3JvcmRlcmhpc3Ryb3ktZGV0YWlscy9saXF1b3JvcmRlcmhpc3Ryb3ktZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuXG4gICAgICAgIGlvbi1hdmF0YXIge1xuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuXG4gICAgICAgICAgICBoNSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm9yZGVyLXN1bW1hcnkge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG5cbiAgICAgICAgLm9yZGVyLWNvbnRlbnQge1xuICAgICAgICAgICAgZmxleDogMSAwIDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6ICNiZjlmNGM7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xuICAgIFxuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBociB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiMmIyO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMTExO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/liquororderhistroy-details/liquororderhistroy-details.page.ts":
    /*!*******************************************************************************!*\
      !*** ./src/app/liquororderhistroy-details/liquororderhistroy-details.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: LiquororderhistroyDetailsPage */

    /***/
    function srcAppLiquororderhistroyDetailsLiquororderhistroyDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LiquororderhistroyDetailsPage", function () {
        return LiquororderhistroyDetailsPage;
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

      var LiquororderhistroyDetailsPage = /*#__PURE__*/function () {
        function LiquororderhistroyDetailsPage(navCtrl, orderProvider, alertCtrl, helper, plt) {
          _classCallCheck(this, LiquororderhistroyDetailsPage);

          this.navCtrl = navCtrl;
          this.orderProvider = orderProvider;
          this.alertCtrl = alertCtrl;
          this.helper = helper;
          this.plt = plt;
          this.all_liquor_order_summary = [];
          this.all_order = [];
          this.shop_details = [];
          this.payment_type = [];
        }

        _createClass(LiquororderhistroyDetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.orderProvider.fetchOrderDetails(localStorage.getItem("order_id")).then(function (res) {
              if (res["status"] == 1) {
                console.log('res', res);
                _this.all_order = res["order"];
                console.log(_this.all_order);
                _this.all_liquor_order_summary = res["order"]["products"];
                _this.shop_details = res["order"]["shop"];
                _this.payment_type = res["order"]['payment_type'];
                console.log(_this.payment_type);
              }
            });
          }
        }]);

        return LiquororderhistroyDetailsPage;
      }();

      LiquororderhistroyDetailsPage.ctorParameters = function () {
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

      LiquororderhistroyDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-liquororderhistroy-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./liquororderhistroy-details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/liquororderhistroy-details/liquororderhistroy-details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./liquororderhistroy-details.page.scss */
        "./src/app/liquororderhistroy-details/liquororderhistroy-details.page.scss"))["default"]]
      })], LiquororderhistroyDetailsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=liquororderhistroy-details-liquororderhistroy-details-module-es5.js.map