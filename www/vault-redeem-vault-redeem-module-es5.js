(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vault-redeem-vault-redeem-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/vault-redeem/vault-redeem.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vault-redeem/vault-redeem.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppVaultRedeemVaultRedeemPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" text=\"\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>SELECTED LOCATION</ion-title> -->\n    <ion-label>SELECTED LOCATION</ion-label>\n    <ion-item>\n    <ion-select value=\"kolkata\">\n      <ion-select-option selected value=\"kolkata\">kolkata</ion-select-option>\n      <ion-select-option value=\"mumbai\">mumbai</ion-select-option>\n      <ion-select-option value=\"bangalore\">bangalore</ion-select-option>\n      <ion-select-option value=\"delhi\">delhi</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <!-- <ion-icon slot=\"end\" class=\"search_item\" name=\"search-outline\"></ion-icon> -->\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"title_bar\">\n    <h2 class=\"title\">Orders</h2>\n  </div>\n  <div class=\"row\">\n    <div class=\"segment_2 align-center\">\n      <div>\n        <div class=\"bottle\">\n          <div class=\"inner\">\n            <div class=\"fill\">\n              <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"300px\" height=\"300px\" viewBox=\"0 0 300 300\" enable-background=\"new 0 0 300 300\" xml:space=\"preserve\">\n                <path class=\"waveShape\" d=\"M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4\n            c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9\n            c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z\"></path>\n              </svg>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <ion-list class=\"drink_items\">\n        <ion-item>\n          <p>{{orderDetails.product_name}}</p>\n        </ion-item>\n        <ion-item>\n          <p>OrderId : {{orderDetails.unique_id}}</p>\n        </ion-item>\n        <ion-item>\n          <ion-grid class=\"ion-no-padding\">\n            <ion-row class=\"ion-align-items-center ion-no-padding\">\n              <ion-col size=\"9\" class=\"ion-no-padding\"><p>Select the number of Units you wish to redeem</p></ion-col>\n            <ion-col size=\"3\">\n              <div class=\"quantity\">\n                <div (click)=\"minusss()\">\n                  <span class=\"minus\" >-</span>\n                </div>\n                <!-- <p>{{getthisCounter(item)}}</p> -->\n                <p>{{itemCount}}</p>\n  \n                \n                <div (click)=\"plusss()\">\n                  <span class=\"plus\" >+</span>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-list>\n    </div>\n    \n\n    \n  </div>\n\n  <div class=\"title_bar\">\n    <h2 class=\"title\">Select the outlet to redeem</h2>\n  </div>\n  <div class=\"row\">\n    <!-- <ion-list class=\"drink_items drink_items_mod\">\n      <ion-item>\n        <ion-grid *ngFor=\"let outlet of orderDetails.vault_shops\">\n          <ion-row class=\"ion-align-items-center\">\n            <img src=\"{{outlet.image}}\">\n            <input type=\"checkbox\" value=\"{{outlet.id}}\" multiple=\"false\"  (change)=\"selectedOutlet($event,outlet)\">\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list> -->\n    <div class=\"slide_item\">\n      <ion-slides pager=\"false\" [options]=\"slideOpts\">\n        <ion-slide *ngFor=\"let outlet of orderDetails.vault_shops\">\n          <div class=\"slide_box checklist\">\n            <label for=\"{{outlet.id}}\">\n              <input type=\"radio\" value=\"\" name=\"select_resturant\" id=\"{{outlet.id}}\" value=\"{{outlet.id}}\" multiple=\"false\"  (change)=\"selectedOutlet($event,outlet)\">\n              <span>\n                <span class=\"rating\">{{outlet.rating}}</span>\n                <div class=\"img_wrap\" style=\"background: url({{outlet.image}}) no-repeat center; background-size: cover;\"></div>\n                <div class=\"box_content\">\n                  <h2>{{outlet.name}}</h2>\n                  <p>{{outlet.address}}</p>\n                </div>\n              </span>\n            </label>\n          </div>\n        </ion-slide>\n\n       \n\n      </ion-slides> \n    </div>\n  </div>\n\n  <div class=\"title_bar\">\n    <h2 class=\"title\">Booking Details</h2>\n  </div>\n  <div class=\"row\">\n    <ion-list class=\"drink_items drink_items_mod\">\n      <!-- <ion-item>\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-radio-group>\n              <ion-item>\n                <ion-label>Myself</ion-label>\n                <ion-radio slot=\"start\" value=\"biff\" checked></ion-radio>\n              </ion-item>\n\n              <ion-item>\n                <ion-label>Someone else</ion-label>\n                <ion-radio slot=\"start\" value=\"griff\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>   \n          </ion-row>\n        </ion-grid>\n      </ion-item> -->\n      <ion-item>\n        <ion-grid>\n          <!-- <ion-row class=\"ion-align-items-center\">\n            <ion-input type=\"text\" placeholder=\"+91 \" #mobile=\"ngModel\" [(ngModel)]=\"bookingData.mobile\" name=\"mobile\"></ion-input>\n            <ion-input placeholder=\"youremail@email.com\" type=\"email\" #email=\"ngModel\" [(ngModel)]=\"bookingData.email\" name=\"email\"></ion-input>\n          </ion-row>\n          <ion-row>\n            <ion-input type=\"text\" placeholder=\"date\" #date=\"ngModel\" [(ngModel)]=\"bookingData.date\" name=\"text\"></ion-input>\n            <ion-input placeholder=\"time\" type=\"text\" #time=\"ngModel\" [(ngModel)]=\"bookingData.time\" name=\"text\"></ion-input>\n          </ion-row> -->\n\n\n          <ion-row>\n            <!-- <ion-col size=\"6\">\n               <ion-item class=\"circle placeholder_border\">\n                <ion-label>+91</ion-label>\n                <ion-input placeholder=\"mobile\" [(ngModel)]=\"mobile\"></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"circle placeholder_border\">\n                 <ion-input placeholder=\"youremail@email.com \" [(ngModel)]=\"mail\"></ion-input>\n               </ion-item>\n            </ion-col> -->\n            <ion-col size=\"6\">\n               <ion-item class=\"circle placeholder_border\">\n                <ion-thumbnail slot=\"start\">\n                  <img src=\"assets/calender.png\">\n                </ion-thumbnail>\n                <!-- <ion-label>Order Date*</ion-label> -->\n                <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\" placeholder=\"Date\" max=\"{{scheduled_date}}\" min=\"{{today_date}}\"></ion-datetime>\n                 <!-- <ion-input placeholder=\"14/02/2018\"></ion-input> -->\n               </ion-item>\n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-item class=\"circle placeholder_border\">\n                <ion-thumbnail slot=\"start\">\n                  <img src=\"assets/clock.png\">\n                </ion-thumbnail>\n                <!-- <ion-label>Time</ion-label> -->\n                <ion-datetime displayFormat=\"hh-mm-A\" [(ngModel)]=\"time\" placeholder=\"Time\"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"assets/cart.png\">\n      <div class=\"item_total\">\n        <p><small>{{itemCount}} ITEM IN CART</small></p>\n        <!-- <p class=\"price_end\">₹ {{cartPrice}}.00</p> -->\n        <p><small>30ounce per unit</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\" (click)=\"confirmBooking()\">\n      <p>Confirm Booking</p>\n      <img src=\"assets/arrow-right.png\">\n    </div>\n  </div>\n</ion-footer>\n\n<!-- http://localhost:8100/vault-redeem/1611398447292 -->\n";
      /***/
    },

    /***/
    "./src/app/vault-redeem/vault-redeem-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/vault-redeem/vault-redeem-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: VaultRedeemPageRoutingModule */

    /***/
    function srcAppVaultRedeemVaultRedeemRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaultRedeemPageRoutingModule", function () {
        return VaultRedeemPageRoutingModule;
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


      var _vault_redeem_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vault-redeem.page */
      "./src/app/vault-redeem/vault-redeem.page.ts");

      var routes = [{
        path: '',
        component: _vault_redeem_page__WEBPACK_IMPORTED_MODULE_3__["VaultRedeemPage"]
      }];

      var VaultRedeemPageRoutingModule = /*#__PURE__*/_createClass(function VaultRedeemPageRoutingModule() {
        _classCallCheck(this, VaultRedeemPageRoutingModule);
      });

      VaultRedeemPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VaultRedeemPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/vault-redeem/vault-redeem.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/vault-redeem/vault-redeem.module.ts ***!
      \*****************************************************/

    /*! exports provided: VaultRedeemPageModule */

    /***/
    function srcAppVaultRedeemVaultRedeemModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaultRedeemPageModule", function () {
        return VaultRedeemPageModule;
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


      var _vault_redeem_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./vault-redeem-routing.module */
      "./src/app/vault-redeem/vault-redeem-routing.module.ts");
      /* harmony import */


      var _vault_redeem_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vault-redeem.page */
      "./src/app/vault-redeem/vault-redeem.page.ts");

      var VaultRedeemPageModule = /*#__PURE__*/_createClass(function VaultRedeemPageModule() {
        _classCallCheck(this, VaultRedeemPageModule);
      });

      VaultRedeemPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _vault_redeem_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaultRedeemPageRoutingModule"]],
        declarations: [_vault_redeem_page__WEBPACK_IMPORTED_MODULE_6__["VaultRedeemPage"]]
      })], VaultRedeemPageModule);
      /***/
    },

    /***/
    "./src/app/vault-redeem/vault-redeem.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/vault-redeem/vault-redeem.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppVaultRedeemVaultRedeemPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  padding-bottom: 75px !important;\n}\n\n.segment_2 {\n  display: flex;\n  padding: 0 10px;\n}\n\n.segment_2 .bottle {\n  width: 60px;\n  height: 127px;\n  background: url('liquor_bottle.png') bottom center no-repeat;\n  background-size: 100% auto;\n  display: flex;\n  align-items: flex-end;\n}\n\n.segment_2 .bottle .inner {\n  width: 60px;\n  height: 105px;\n  overflow: hidden;\n  -webkit-mask-image: url('liquor_bottle.png');\n  -webkit-mask-size: 100% auto;\n  -webkit-mask-repeat: no-repeat;\n  mix-blend-mode: multiply;\n  -webkit-mask-position: bottom center;\n}\n\n.bottle .fill {\n  animation-name: fillAction;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.2, 0.6, 0.8, 0.4);\n  animation-duration: 8s;\n  animation-fill-mode: forwards;\n}\n\n.bottle .waveShape {\n  animation-name: waveAction;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-duration: 0.5s;\n  width: 300px;\n  height: 150px;\n  fill: #f2d340;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF1bHQtcmVkZWVtL3ZhdWx0LXJlZGVlbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQywrQkFBQTtBQUNEOztBQUVBO0VBQ0MsYUFBQTtFQUNBLGVBQUE7QUFDRDs7QUFDQztFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUNFO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7QUFDSDs7QUFJQTtFQUNDLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyREFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFERDs7QUFHRTtFQUNELDBCQUFBO0VBQ0EsbUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBQUQiLCJmaWxlIjoic3JjL2FwcC92YXVsdC1yZWRlZW0vdmF1bHQtcmVkZWVtLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHRwYWRkaW5nLWJvdHRvbTogNzVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VnbWVudF8yIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdHBhZGRpbmc6IDAgMTBweDtcclxuXHJcblx0LmJvdHRsZSB7XHJcblx0XHR3aWR0aDogNjBweDtcclxuXHRcdGhlaWdodDogMTI3cHg7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2xpcXVvcl9ib3R0bGUucG5nKSBib3R0b20gY2VudGVyIG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuXHJcblx0XHQuaW5uZXIge1xyXG5cdFx0XHR3aWR0aDogNjBweDtcclxuXHRcdFx0aGVpZ2h0OiAxMDVweDtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0LXdlYmtpdC1tYXNrLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2xpcXVvcl9ib3R0bGUucG5nKTtcclxuXHRcdFx0LXdlYmtpdC1tYXNrLXNpemU6IDEwMCUgYXV0bztcclxuXHRcdFx0LXdlYmtpdC1tYXNrLXJlcGVhdDogbm8tcmVwZWF0O1xyXG5cdFx0XHRtaXgtYmxlbmQtbW9kZTogbXVsdGlwbHk7XHJcblx0XHRcdC13ZWJraXQtbWFzay1wb3NpdGlvbjogYm90dG9tIGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5ib3R0bGUgLmZpbGwge1xyXG5cdGFuaW1hdGlvbi1uYW1lOiBmaWxsQWN0aW9uO1xyXG5cdGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XHJcblx0YW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMiwgMC42LCAwLjgsIDAuNCk7XHJcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiA4cztcclxuXHRhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcclxuICB9XHJcbiAgLmJvdHRsZSAud2F2ZVNoYXBlIHtcclxuXHRhbmltYXRpb24tbmFtZTogd2F2ZUFjdGlvbjtcclxuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuXHRhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG5cdHdpZHRoOiAzMDBweDtcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdGZpbGw6ICNmMmQzNDA7XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/vault-redeem/vault-redeem.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/vault-redeem/vault-redeem.page.ts ***!
      \***************************************************/

    /*! exports provided: VaultRedeemPage */

    /***/
    function srcAppVaultRedeemVaultRedeemPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaultRedeemPage", function () {
        return VaultRedeemPage;
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


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _services_vault_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/vault.service */
      "./src/app/services/vault.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var VaultRedeemPage = /*#__PURE__*/function () {
        function VaultRedeemPage(vaultProvider, _router, _activatedRoute, helper, datePipe, navCtrl) {
          _classCallCheck(this, VaultRedeemPage);

          this.vaultProvider = vaultProvider;
          this._router = _router;
          this._activatedRoute = _activatedRoute;
          this.helper = helper;
          this.datePipe = datePipe;
          this.navCtrl = navCtrl;
          this.OrderId = '';
          this.userId = '';
          this.shop_id = '';
          this.itemCount = 0;
          this.orderDetails = {};
          this.redeemDetails = {};
          this.Outlets = [];
          this.mail = [];
          this.mobile = [];
          this.date = [];
          this.time = '';
          this.today_date = '';
          this.scheduled_date = '';
          this.user = [];
          this.user_name = [];
          this.slideOpts = {
            slidesPerView: 2.3
          };
          this.highest_item = 0;
          this.cartPrice = 0;
          this.bookingData = {
            mobile: '',
            email: '',
            date: '',
            time: '',
            selectedOutlet: [],
            bookingfor: 'myself'
          };
        }

        _createClass(VaultRedeemPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.OrderId = this._activatedRoute.snapshot.paramMap.get('vaultOrderId');
            this.orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

            if (Number(this.orderDetails.balance_quantity) > 10) {
              this.highest_item = 10;
            } else {
              this.highest_item = Number(this.orderDetails.balance_quantity);

              if (this.highest_item < 5) {
                this.helper.presentAlert("You have only " + this.highest_item + " unit stored in your vault. Recharge your vault again and enjoy your drink");
              }
            }

            console.log(this.orderDetails);
            var date = new Date();
            this.today_date = String(this.datePipe.transform(date, "yyyy-MM-dd"));
            var hours = date.getHours();
            var minutes = date.getMinutes();
            this.time = hours + ':' + minutes;
            console.log(hours + ':' + minutes);
            this.user = JSON.parse(localStorage.getItem('userDetails'));
            console.log(this.user);
            this.mail = this.user.email;
            this.user_name = this.user.name;
            this.mobile = this.user.mobile;
            this.date = this.today_date;
            var someDate = new Date();
            var numberOfDaysToAdd = 29;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            var dd = someDate.getDate();
            var mm = someDate.getMonth() + 1;
            var y = someDate.getFullYear();
            var someFormattedDate = y + '-' + mm + '-' + dd;
            this.scheduled_date = String(this.datePipe.transform(someFormattedDate, "yyyy-MM-dd"));
          }
        }, {
          key: "plusss",
          value: function plusss() {
            console.log("minus");

            if (this.itemCount <= 0) {
              this.itemCount = 0;
            } else {
              this.itemCount -= 1;
            }

            this.updateCartPrice();
          }
        }, {
          key: "minusss",
          value: function minusss() {
            if (this.itemCount >= this.highest_item) {} else {
              this.itemCount += 1;
            }

            this.updateCartPrice();
          }
        }, {
          key: "updateCartPrice",
          value: function updateCartPrice() {
            this.cartPrice = 0;
            this.cartPrice = this.itemCount * this.orderDetails.price;
          }
          /**
           * This method is to select the outlet
           * @param event
           * @param outletDetails
           */

        }, {
          key: "selectedOutlet",
          value: function selectedOutlet(event, outletDetails) {
            if (event.target.checked) {
              this.bookingData.selectedOutlet.push(outletDetails.id);
              console.log(outletDetails);
              this.shop_id = outletDetails.id;
            } else {
              var index = this.bookingData.selectedOutlet.indexOf(outletDetails.id);
              this.bookingData.selectedOutlet.splice(index, 1);
            }
          }
          /**
           * This method is for connecting vault booking api
           */

        }, {
          key: "confirmBooking",
          value: function confirmBooking() {
            var _this = this;

            if (Number(this.itemCount <= 0)) {
              this.helper.presentAlert('Please select the quantity to continue');
            } else if (this.shop_id == '') {
              this.helper.presentAlert('Please select an outlet to continue');
            } else if (this.today_date == '') {
              this.helper.presentAlert('Please select a redeem date to continue');
            } else if (this.time == '') {
              this.helper.presentAlert('Please select a redeem time to continue');
            } else {
              var data2 = {
                "order_id": this.orderDetails.id,
                "quantiy": this.itemCount,
                "shop_id": this.shop_id,
                "user_id": localStorage.getItem("user_id"),
                "redeem_date": this.date,
                "redeem_time": this.time
              };
              this.vaultProvider.redeemItemFromVault(data2).then(function (res) {
                if (res["status"] == '1') {
                  _this.helper.suucessAlert(res["message"]);

                  console.log(res); // localStorage.setItem("order_id",res["order_id"])

                  _this.navCtrl.navigateForward('/vaulthome');
                } else {
                  _this.helper.presentAlert(res["message"]);
                }
              }, function (error) {
                console.log("Some error occurred");
              });
            }
          }
        }]);

        return VaultRedeemPage;
      }();

      VaultRedeemPage.ctorParameters = function () {
        return [{
          type: _services_vault_service__WEBPACK_IMPORTED_MODULE_4__["VaultProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperProvider"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }];
      };

      VaultRedeemPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vault-redeem',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./vault-redeem.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/vault-redeem/vault-redeem.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./vault-redeem.page.scss */
        "./src/app/vault-redeem/vault-redeem.page.scss"))["default"]]
      })], VaultRedeemPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=vault-redeem-vault-redeem-module-es5.js.map