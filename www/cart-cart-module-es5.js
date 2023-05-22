(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cart-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html":
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html ***!
      \***************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button icon=\"chevron-back-outline\" text=\"\" defaultHref=\"\"></ion-back-button>\n\t\t</ion-buttons>\n\t  <ion-title>Cart</ion-title>\n\t</ion-toolbar>\n  </ion-header>\n  \n  <ion-content>\n\t  <!-- <div class=\"title_bar\">\n\t\t  <h2 class=\"title\">Cart (Orko’ss Restaurant)</h2> -->\n\t  <!-- </div> -->\n\t<ion-list class=\"drink_items padding\">\n\t\t<ion-item>\n\t\t\t<ion-label>ITEMS</ion-label>\n\t\t\t<ion-note slot=\"end\">UNITS</ion-note>\n\t\t</ion-item>\n\t\t<ion-item *ngFor=\"let item of cart_items ; let i = index\">\n\t\t\t<ion-thumbnail slot=\"start\">\n\t\t\t\t<img src=\"../../assets/15yo-single-malt-scotch-whisky.png\">\n\t\t\t</ion-thumbnail>\n\t\t\t<ion-label>\n\t\t\t\t<h5>{{item.product_name}}</h5>\n\t\t\t\t<p class=\"short_count ion-text-left\">{{item.quantity}} <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#808080\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg> <span class=\"currency\">$</span> {{item.price | number : '.2-2'}}</p>\n\t\t\t</ion-label>\n\t\t\t<ion-note slot=\"end\">\n\t\t\t\t<h3 class=\"m-0 ion-text-right price\"><span class=\"currency\">$</span> {{item.quantity * item.price | number : '.2-2'}}</h3>\n\t\t\t\t<button (click)=\"removeItem(i,cartItem)\"><img src=\"assets/remove.png\"></button>\n\t\t\t</ion-note>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label><h3 class=\"m-0\">Subtotal</h3></ion-label>\n\t\t\t<ion-note slot=\"end\"><h3 class=\"m-0 ion-text-right\">$ {{final_cart_price | number : '.2-2'}}</h3></ion-note>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label><h3 class=\"m-0\">Tax</h3></ion-label>\n\t\t\t<ion-note slot=\"end\"><h3 class=\"m-0 ion-text-right\">$ </h3></ion-note>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t\t<ion-label><h3 class=\"m-0\">Grand Total</h3></ion-label>\n\t\t\t<ion-note slot=\"end\"><h3 class=\"m-0 ion-text-right\">$ {{final_cart_price | number : '.2-2'}}</h3></ion-note>\n\t\t</ion-item>\n\t</ion-list>\n\n\n\t<div class=\"drink_items padding\">\n\t\t\n\n\n\t\t  <!-- <ion-item *ngFor=\"let item of cart_items ; let i = index\">\n\t\t\t  <ion-grid>\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t  <ion-col size=\"7\">\n\t\t\t\t\t\t  <div class=\"drink_content\">\n\t\t\t\t\t\t\t  <h3 class=\"m-0\">{{item.product_name}}</h3>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t\t  <ion-col size=\"5\" class=\"ion-no-padding\">\n\t\t\t\t\t\t  <div class=\"drink_content\">\n\t\t\t\t\t\t\t\t<h3 class=\"m-0 ion-text-right\"></h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t\t  <ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t  <ion-col size=\"9\">\n\t\t\t\t\t\t  <div class=\"drink_content drink_content--mod\">\n\t\t\t\t\t\t\t  <p class=\"short_count ion-text-left\">{{item.quantity}} <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#808080\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-x\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"></line><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"></line></svg> <span class=\"currency\">$</span> {{item.price | number : '.2-2'}}</p>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t\t  <ion-col size=\"3\" class=\"ion-no-padding\">\n\t\t\t\t\t  \t<div class=\"drink_content drink_content--mod content_right\">\n\t\t\t\t\t\t  \t<button (click)=\"removeItem(i,item)\"><img src=\"assets/remove.png\"></button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t  </ion-grid>\n\t\t  </ion-item>\n  \n\t\t  <ion-item>\n\t\t\t  <ion-grid>\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t  <ion-col size=\"7\">\n\t\t\t\t\t\t  <div class=\"drink_content\">\n\t\t\t\t\t\t\t  <h3 class=\"m-0\">Subtotal</h3>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t\t  <ion-col size=\"5\" class=\"ion-no-padding\">\n\t\t\t\t\t\t  <div class=\"drink_content\">\n\t\t\t\t\t\t\t\t<h3 class=\"m-0 ion-text-right\"><span class=\"currency\">$</span> {{final_cart_price | number : '.2-2'}}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t  </ion-grid>\n\t\t  </ion-item>\n\t\t  <ion-item>\n\t\t\t  <ion-grid>\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t  <ion-col size=\"7\">\n\t\t\t\t\t\t  <div class=\"drink_content\">\n\t\t\t\t\t\t\t  <h3 class=\"m-0\">Grand Total</h3>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t\t  <ion-col size=\"5\" class=\"ion-no-padding\">\n\t\t\t\t\t\t  <div class=\"drink_content\">\n\t\t\t\t\t\t\t\t<h3 class=\"m-0 ion-text-right\"><span class=\"currency\">$</span> {{final_cart_price | number : '.2-2'}}</h3>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t  </ion-grid>\n\t\t  </ion-item> -->\n\t  </div>\n\t   <div class=\"title_bar\">\n\t\t  <h2 class=\"title\">Using</h2>\n\t  </div>\n\t  <div class=\"select_form\">\n\t\t  <ion-grid>\n\t\t\t  <ion-radio-group value=\"booking\" (ionChange)=\"radioGroupChange($event)\">\n\t\t\t\t  <ion-row>\n\t\t\t\t\t  <ion-col size=\"4\" *ngIf=\"wallet_status==2\">\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t\t  <ion-label>Test Fund</ion-label>\n\t\t\t\t\t\t\t  <ion-radio slot=\"start\" value=\"wallet\"></ion-radio>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t\t  <ion-col size=\"6\">\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t\t  <ion-label>Online Payment</ion-label>\n\t\t\t\t\t\t\t  <ion-radio slot=\"start\" value=\"online\"></ion-radio>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t  </ion-radio-group>\n\t\t\t</ion-grid>\n\t\t</div>\n\t\t<div *ngIf=\"wallet_status==1\">\n\t\t  <h4 class=\"note-text\">Your test fund balance is low. Please use online payment to complete the transactions</h4>\n\t  </div>\n\t  <div class=\"title_bar\">\n\t\t  <h2 class=\"title\">Booking for</h2>\n\t  </div>\n\t  <div class=\"select_form\">\n\t\t  <ion-grid>\n\t\t\t  <ion-radio-group value=\"booking\"  (ionChange)=\"radioGroupMyself($event)\">\n\t\t\t\t  <ion-row>\n\t\t\t\t\t  <ion-col size=\"4\">\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t\t  <ion-label>Myself</ion-label>\n\t\t\t\t\t\t\t  <ion-radio slot=\"start\" value=\"myself\"></ion-radio>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t\t  <ion-col size=\"6\">\n\t\t\t\t\t\t  <ion-item>\n\t\t\t\t\t\t\t  <ion-label>Someone else</ion-label>\n\t\t\t\t\t\t\t  <ion-radio slot=\"start\" value=\"someoneelse\"></ion-radio>\n\t\t\t\t\t\t  </ion-item>\n\t\t\t\t\t  </ion-col>\n\t\t\t\t  </ion-row>\n\t\t\t  </ion-radio-group>\n\t\t\t  <ion-row>\n\t\t\t\t  <ion-col size=\"12\">\n\t\t\t\t\t\t <ion-item class=\"circle\">\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t\t<img src=\"assets/call.png\">\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<ion-label>+91</ion-label>\n\t\t\t\t\t\t\t<ion-input placeholder=\"mobile\" [(ngModel)]=\"mobile\"></ion-input>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col size=\"12\">\n\t\t\t\t\t  <ion-item class=\"circle\">\n\t\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t\t<img src=\"assets/e-mail.png\">\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t <ion-input placeholder=\"youremail@email.com \" [(ngModel)]=\"mail\"></ion-input>\n\t\t\t\t\t\t </ion-item>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col size=\"6\">\n\t\t\t\t\t\t <ion-item class=\"circle\">\n\t\t\t\t\t\t  <ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t  <img src=\"assets/calender.png\">\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<!-- <ion-label>Order Date*</ion-label> -->\n\t\t\t\t\t\t\t<ion-datetime displayFormat=\"DD MMM YYYY\" [(ngModel)]=\"date\" max=\"{{scheduled_date}}\" min=\"{{today_date}}\"></ion-datetime>\n\t\t\t\t\t\t\t <!-- <ion-input placeholder=\"14/02/2018\"></ion-input> -->\n\t\t\t\t\t\t </ion-item>\n\t\t\t\t  </ion-col>\n\t\t\t\t  <ion-col size=\"6\">\n\t\t\t\t\t  <ion-item class=\"circle\">\n\t\t\t\t\t\t  <ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t  <img src=\"assets/clock.png\">\n\t\t\t\t\t\t\t</ion-avatar>\n\t\t\t\t\t\t\t<!-- <ion-label>Time</ion-label> -->\n\t\t\t\t\t\t\t<ion-datetime displayFormat=\"hh-mm-A\" [(ngModel)]=\"time\" ></ion-datetime>\n\t\t\t\t\t  </ion-item>\n\t\t\t\t  </ion-col>\n\t\t\t  </ion-row>\n\t\t  </ion-grid>\n\t  </div>\n  </ion-content>\n  \n  <ion-footer class=\"ion-no-border\">\n\t<div class=\"footer_content\">\n\t\t<div class=\"footer_item_end\">\n\t\t\t<div class=\"reserve_btn\" (click)=\"pay()\">\n\t\t\t\t<p>Select Payment Method</p>\n\t\t\t\t<img src=\"assets/arrow-right.png\">\n\t\t\t</div>\n\t\t</div>\n\t</div>\n  </ion-footer>";
      /***/
    },

    /***/
    "./src/app/cart/cart-routing.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/cart/cart-routing.module.ts ***!
      \*********************************************/

    /*! exports provided: CartPageRoutingModule */

    /***/
    function srcAppCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
        return CartPageRoutingModule;
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


      var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./cart.page */
      "./src/app/cart/cart.page.ts");

      var routes = [{
        path: '',
        component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
      }];

      var CartPageRoutingModule = /*#__PURE__*/_createClass(function CartPageRoutingModule() {
        _classCallCheck(this, CartPageRoutingModule);
      });

      CartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CartPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/cart/cart.module.ts":
    /*!*************************************!*\
      !*** ./src/app/cart/cart.module.ts ***!
      \*************************************/

    /*! exports provided: CartPageModule */

    /***/
    function srcAppCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
        return CartPageModule;
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


      var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./cart-routing.module */
      "./src/app/cart/cart-routing.module.ts");
      /* harmony import */


      var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./cart.page */
      "./src/app/cart/cart.page.ts");

      var CartPageModule = /*#__PURE__*/_createClass(function CartPageModule() {
        _classCallCheck(this, CartPageModule);
      });

      CartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"]],
        declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
      })], CartPageModule);
      /***/
    },

    /***/
    "./src/app/cart/cart.page.scss":
    /*!*************************************!*\
      !*** ./src/app/cart/cart.page.scss ***!
      \*************************************/

    /*! exports provided: default */

    /***/
    function srcAppCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".drink_items.padding {\n  padding: 5px 15px;\n}\n.drink_items ion-item {\n  --background: #ffffff;\n}\n.drink_items .drink_content.drink_content--mod {\n  justify-content: flex-start;\n}\n.drink_items .drink_content.content_right {\n  justify-content: flex-end;\n}\n.drink_items .drink_content.content_right button {\n  padding-left: 0;\n  padding-right: 0;\n}\n.drink_items {\n  padding: 0 0 0 20px;\n}\n.drink_items ion-item {\n  --min-height: 40px;\n  color: #808080;\n  font-size: 12px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n  --inner-border-width: 0;\n  border-bottom: 1px solid #f8f8f8;\n}\n.drink_items ion-item ion-thumbnail {\n  background: #f7f7f7;\n  border-radius: 4px;\n}\n.drink_items ion-item ion-thumbnail img {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n.drink_items ion-item ion-label {\n  margin: 0;\n  font-family: \"Outfit\", sans-serif;\n  white-space: normal;\n  color: #000;\n  font-weight: 600;\n}\n.drink_items ion-item ion-label h5 {\n  font-size: 16px;\n  letter-spacing: 0;\n  font-weight: 600;\n}\n.drink_items ion-item ion-label p {\n  margin-top: 2px;\n  font-size: 14px;\n}\n.drink_items ion-item ion-note {\n  padding: 0;\n  color: #808080;\n  font-size: 16px;\n  letter-spacing: 1px;\n  font-weight: 600;\n  display: flex;\n  align-items: flex-end;\n  align-self: center;\n  justify-content: flex-end;\n  flex-direction: column;\n}\n.drink_items ion-item ion-note h3.price {\n  font-size: 16px;\n}\n.drink_items ion-item button {\n  height: 20px;\n  background: transparent;\n  padding: 0;\n  margin-top: 2px;\n}\n.drink_items ion-item button img {\n  height: 100%;\n  width: auto;\n}\n.drink_items ion-item h3 {\n  color: #33373d;\n  font-size: 13px;\n  letter-spacing: 0.03px;\n  font-weight: 600;\n}\n.select_form ion-item {\n  --background: #ffffff;\n  color: #000;\n  --min-height: 20px;\n  --inner-border-width: 0;\n  font-size: 14px;\n  --padding-start: 0;\n}\n.select_form ion-item ion-label {\n  margin: 0;\n  font-size: 14px;\n}\n.select_form ion-item.circle {\n  --border-radius: 20px;\n  --border-width: 2px;\n  --border-color: #dcc88d;\n  --inner-border-width: 0;\n  --padding-start: 10px;\n}\n.select_form ion-item ion-radio {\n  margin-right: 10px;\n  --color-checked: #dcc88d;\n}\n.select_form ion-item ion-radio .radio-icon {\n  border-color: #000;\n}\n.select_form ion-item ion-radio .radio-icon .radio-inner {\n  background: #dcc88d;\n}\n.select_form ion-item ion-avatar {\n  --border-radius: 0;\n  width: 16px;\n  height: 16px;\n  margin: 0 10px 0 0;\n}\n.select_form ion-item ion-input {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n}\nion-footer .footer_content .footer_item_end {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQztFQUNDLGlCQUFBO0FBREY7QUFHQztFQUNDLHFCQUFBO0FBREY7QUFJQztFQUNDLDJCQUFBO0FBRkY7QUFJQztFQUNDLHlCQUFBO0FBRkY7QUFJRTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUZIO0FBT0E7RUFDQyxtQkFBQTtBQUpEO0FBTUM7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdDQUFBO0FBSkY7QUFNRTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7QUFKSDtBQUtHO0VBQ0MseUJBQUE7S0FBQSxzQkFBQTtBQUhKO0FBT0U7RUFDQyxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUxIO0FBT0c7RUFDQyxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKO0FBT0c7RUFDQyxlQUFBO0VBQ0EsZUFBQTtBQUxKO0FBUUU7RUFDQyxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBTkg7QUFRRztFQUNDLGVBQUE7QUFOSjtBQVNFO0VBQ0MsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFQSDtBQVNHO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUFQSjtBQVVFO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBUkg7QUFnQkM7RUFDQyxxQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBYkY7QUFlRTtFQUNDLFNBQUE7RUFDQSxlQUFBO0FBYkg7QUFnQkU7RUFDQyxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBZEg7QUFpQkU7RUFDQyxrQkFBQTtFQVNBLHdCQUFBO0FBdkJIO0FBZ0JHO0VBQ0Msa0JBQUE7QUFkSjtBQWdCSTtFQUNDLG1CQUFBO0FBZEw7QUFvQkU7RUFDQyxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFsQkg7QUFxQkU7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0FBbkJIO0FBeUJFO0VBQ0ksdUJBQUE7QUF0Qk4iLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyaW5rX2l0ZW1zIHtcblxuXHQmLnBhZGRpbmcge1xuXHRcdHBhZGRpbmc6IDVweCAxNXB4O1xuXHR9XG5cdGlvbi1pdGVtIHtcblx0XHQtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG5cdH1cblxuXHQuZHJpbmtfY29udGVudC5kcmlua19jb250ZW50LS1tb2Qge1xuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcblx0fVxuXHQuZHJpbmtfY29udGVudC5jb250ZW50X3JpZ2h0IHtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1x0XG5cblx0XHRidXR0b24ge1xuXHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xuXHRcdFx0cGFkZGluZy1yaWdodDogMDtcblx0XHR9XG5cdH1cbn1cblxuLmRyaW5rX2l0ZW1zIHtcblx0cGFkZGluZzogMCAwIDAgMjBweDtcblxuXHRpb24taXRlbSB7XG5cdFx0LS1taW4taGVpZ2h0OiA0MHB4O1xuXHRcdGNvbG9yOiAjODA4MDgwO1xuXHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRsZXR0ZXItc3BhY2luZzogMXB4O1xuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0LS1wYWRkaW5nLXRvcDogMnB4O1xuXHRcdC0tcGFkZGluZy1ib3R0b206IDJweDtcblx0XHQtLWlubmVyLWJvcmRlci13aWR0aDogMDtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y4ZjhmODtcblxuXHRcdGlvbi10aHVtYm5haWwge1xuXHRcdFx0YmFja2dyb3VuZDogI2Y3ZjdmNztcblx0XHRcdGJvcmRlci1yYWRpdXM6IDRweDtcblx0XHRcdGltZyB7XG5cdFx0XHRcdG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aW9uLWxhYmVsIHtcblx0XHRcdG1hcmdpbjogMDtcblx0XHRcdGZvbnQtZmFtaWx5OiAnT3V0Zml0Jywgc2Fucy1zZXJpZjtcblx0XHRcdHdoaXRlLXNwYWNlOiBub3JtYWw7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cblx0XHRcdGg1IHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRsZXR0ZXItc3BhY2luZzogMDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdH1cblx0XHRcdHAge1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAycHg7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcblx0XHRcdH1cblx0XHR9XG5cdFx0aW9uLW5vdGUge1xuXHRcdFx0cGFkZGluZzogMDtcblx0XHRcdGNvbG9yOiAjODA4MDgwO1xuXHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0bGV0dGVyLXNwYWNpbmc6IDFweDtcblx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0YWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuXHRcdFx0YWxpZ24tc2VsZjogY2VudGVyO1xuXHRcdFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cblx0XHRcdGgzLnByaWNlIHtcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRidXR0b24ge1xuXHRcdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdFx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0XHRwYWRkaW5nOiAwO1xuXHRcdFx0bWFyZ2luLXRvcDogMnB4O1xuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRoMyB7XG5cdFx0XHRjb2xvcjogIzMzMzczZDtcblx0XHRcdGZvbnQtc2l6ZTogMTNweDtcblx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAzcHg7XG5cdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdH1cblx0fVxufVxuXG5cblxuLnNlbGVjdF9mb3JtIHtcblx0aW9uLWl0ZW0ge1xuXHRcdC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcblx0XHRjb2xvcjogIzAwMDtcblx0XHQtLW1pbi1oZWlnaHQ6IDIwcHg7XG5cdFx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG5cdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0XHRcblx0XHRpb24tbGFiZWwge1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdH1cblxuXHRcdCYuY2lyY2xlIHtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMjBweDtcblx0XHRcdC0tYm9yZGVyLXdpZHRoOiAycHg7XG5cdFx0XHQtLWJvcmRlci1jb2xvcjogI2RjYzg4ZDtcblx0XHRcdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuXHRcdFx0LS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuXHRcdH1cblxuXHRcdGlvbi1yYWRpbyB7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cblx0XHRcdC5yYWRpby1pY29uIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiAjMDAwO1xuXG5cdFx0XHRcdC5yYWRpby1pbm5lciB7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2RjYzg4ZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0LS1jb2xvci1jaGVja2VkOiAjZGNjODhkO1xuXHRcdH1cblxuXHRcdGlvbi1hdmF0YXIge1xuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAwO1xuXHRcdFx0d2lkdGg6IDE2cHg7XG5cdFx0XHRoZWlnaHQ6IDE2cHg7XG5cdFx0XHRtYXJnaW46IDAgMTBweCAwIDA7XG5cdFx0fVxuXG5cdFx0aW9uLWlucHV0IHtcblx0XHRcdC0tcGFkZGluZy10b3A6IDNweDtcblx0XHRcdC0tcGFkZGluZy1ib3R0b206IDNweDtcblx0XHR9XG5cdH1cbn1cbmlvbi1mb290ZXIge1xuXHQuZm9vdGVyX2NvbnRlbnQge1xuXHRcdC5mb290ZXJfaXRlbV9lbmQge1xuXHRcdCAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHR9XG5cdH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/cart/cart.page.ts":
    /*!***********************************!*\
      !*** ./src/app/cart/cart.page.ts ***!
      \***********************************/

    /*! exports provided: CartPage */

    /***/
    function srcAppCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CartPage", function () {
        return CartPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user-details.service */
      "./src/app/services/user-details.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var CartPage = /*#__PURE__*/function () {
        function CartPage(authService, navCtrl, userDetails, helper, datePipe, platform) {
          _classCallCheck(this, CartPage);

          this.authService = authService;
          this.navCtrl = navCtrl;
          this.userDetails = userDetails;
          this.helper = helper;
          this.datePipe = datePipe;
          this.platform = platform;
          this.cart_items = [];
          this.final_cart_items = [];
          this.final_cart_price = [];
          this.shopDetails = [];
          this.today_date = [];
          this.user = [];
          this.user_name = [];
          this.mail = [];
          this.mobile = [];
          this.time = [];
          this.amm1 = [];
          this.transaction_id = []; //Get value on ionSelect on IonRadio item

          this.id = 0;
          this.wallet_balance = '';
          this.wallet_status = 0;
          this.scheduled_date = '';
          this.minTime = '10:00';
          this.maxTime = '10:00';
          this.final_order_id = '';
          this.priceIncreaseByPercentage = 2 / 100;
          this.priceDecreaseByPercentage = 0.5 / 100;
          this.newData = [];
        }

        _createClass(CartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var data = {
              "device_id": localStorage.getItem('uniqueDeviceID')
            };
            this.userDetails.getCartDetails(data).then(function (res) {
              if (res["status"] == '1') {
                // this.helper.presentToast(res["message"]);
                console.log(res);
                _this.cart_items = res["cartItems"];
                _this.final_cart_price = res["total_price"];
                _this.wallet_balance = localStorage.getItem('wallet_balance');

                if (Number(_this.final_cart_price > Number(_this.wallet_balance))) {
                  _this.wallet_status = 1;
                } else if (Number(_this.final_cart_price < Number(_this.wallet_balance))) {
                  _this.wallet_status = 2;
                }

                console.log('wallet_balance', _this.wallet_balance);
                console.log('final_cart_price', _this.final_cart_price);
              }
            }); // Retrieve the object from storage

            this.cart_items = JSON.parse(localStorage.getItem('cartItem'));
            console.log('retrievedObject: ', this.cart_items);
            this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
            console.log('shopDetails: ', this.shopDetails);
            this.final_cart_price = localStorage.getItem('totalCartValue');
            var date = new Date(); // console.log(this.datePipe.transform(date,"dd-MM-yyyy")); //output : 2018-02-13

            this.today_date = String(this.datePipe.transform(date, "yyyy-MM-dd"));
            this.date = this.today_date;
            console.log(this.date);
            var hours = date.getHours();
            var minutes = date.getMinutes();
            this.time = hours + ':' + minutes;
            console.log(hours + ':' + minutes);
            this.user = JSON.parse(localStorage.getItem('userDetails'));
            console.log(this.user);
            this.mail = this.user.email;
            this.user_name = this.user.name;
            this.mobile = this.user.mobile; // Adding extra 3 days from today date

            var someDate = new Date();
            var numberOfDaysToAdd = 2;
            someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
            var dd = someDate.getDate();
            var mm = someDate.getMonth() + 1;
            var y = someDate.getFullYear();
            var someFormattedDate = y + '-' + mm + '-' + dd;
            this.scheduled_date = String(this.datePipe.transform(someFormattedDate, "yyyy-MM-dd"));
            console.log(this.scheduled_date);
          }
        }, {
          key: "radioGroupChange",
          value: function radioGroupChange(event) {
            console.log("radioGroupChange", event.detail.value);
            this.selectedRadioGroup = event.detail.value;
          }
        }, {
          key: "radioGroupMyself",
          value: function radioGroupMyself(event) {
            console.log("selectedRadioGroupForSomeoneElse", event.detail.value);
            this.selectedRadioGroupForSomeoneElse = event.detail.value;
            localStorage.setItem("selectedRadioData", this.selectedRadioGroupForSomeoneElse);

            if (this.selectedRadioGroupForSomeoneElse == 'someoneelse') {
              this.mobile = '';
              this.mail = '';
            } else {
              this.mail = this.user.email;
              this.user_name = this.user.name;
              this.mobile = this.user.mobile;
            }
          }
        }, {
          key: "removeItem",
          value: function removeItem(index, item) {
            var _this2 = this;

            this.cart_items.splice(index, 1);
            this.final_cart_price = Number(this.final_cart_price) - Number(item.quantity) * Number(item.price);
            this.userDetails.deleteFromCart(item.id).then(function (res) {
              if (res["status"] == 1) {
                var data = {
                  "device_id": localStorage.getItem('uniqueDeviceID')
                }; // this.userDetails.getCartDetails(data).then((res) => {
                //   if (res["status"] == '1') {
                //     // this.helper.presentToast(res["message"]);
                //     console.log(res);
                //     this.cart_items=res["cartItems"];
                //     this.final_cart_price=res["total_price"];
                //   }
                // })

                _this2.ngOnInit();
              }
            });
          }
        }, {
          key: "pay",
          value: function pay() {
            var _this3 = this;

            console.log(this.selectedRadioGroup);
            this.today_date = String(this.datePipe.transform(this.date, "yyyy-MM-dd"));

            if (this.cart_items.length > 0) {
              if (this.selectedRadioGroup == undefined) {
                this.helper.showErrorCustom("Please choose payment mode");
              } else if (this.selectedRadioGroup == 'wallet') {
                this.id = new Date().getTime(); // this.today_date=String(this.datePipe.transform(this.date,"yyyy-MM-dd"));
                // this.date=this.today_date;

                var data2 = {
                  "customer_name": this.user_name,
                  "customer_email": this.mail,
                  "customer_mobile": this.mobile,
                  "user_id": localStorage.getItem("user_id"),
                  "transaction_id": '',
                  "device_id": localStorage.getItem('uniqueDeviceID'),
                  "order_time": this.time,
                  "order_date": this.today_date,
                  "shop_id": this.shopDetails.id,
                  "payment_type": '2'
                };
                this.userDetails.createOrder(data2).then(function (res) {
                  if (res["status"] == '1') {
                    _this3.helper.presentToast(res["message"]);

                    _this3.final_order_id = res["order_id"];
                    localStorage.setItem("orderrr_id", _this3.final_order_id);

                    _this3.helper.showErrorCustom('cartPage');

                    _this3.helper.showErrorCustom(_this3.final_order_id);

                    console.log(_this3.transaction_id); // this.Order_Details();

                    _this3.navCtrl.navigateForward('/order-success');
                  } else {
                    _this3.helper.presentToast(res["message"]);
                  }
                }, function (error) {
                  _this3.helper.presentToast("Invalid Data");
                });
              } else if (this.selectedRadioGroup == 'online') {
                this.payment();
              }
            } else {
              this.helper.showErrorCustom('Please select any Order');
            }
          }
        }, {
          key: "priceIncreaseOrDecrease",
          value: function priceIncreaseOrDecrease() {
            var _this4 = this;

            var PriceIncreasingByID = []; // Containing The Id which has Price Higher so that we can skip the Id with the Price Lower

            this.cart_items.forEach(function (value) {
              // price Increasing the same Order after the Order Success
              var nowPrice = parseFloat(value.BigLiquorActualPrice) + parseFloat(value.BigLiquorActualPrice) * parseFloat(_this4.priceIncreaseByPercentage);

              _this4.updatePriceValueOfLiquor(value.itemId, nowPrice); // Price Decreasing Other Order after Order Success


              PriceIncreasingByID.push(value.itemId); // pusing the Id Which will be Skipped
            });
            this.DeceasePriceValueforTheOrderExceptThisIds(PriceIncreasingByID);
          }
        }, {
          key: "updatePriceValueOfLiquor",
          value: function updatePriceValueOfLiquor(value, updatePrice) {
            this.userDetails.updateLiquorPriceAfterPurchase(value, updatePrice);
          }
        }, {
          key: "DeceasePriceValueforTheOrderExceptThisIds",
          value: function DeceasePriceValueforTheOrderExceptThisIds(ExceptIds) {
            var _this5 = this;

            // getting the Whole Liquor Data
            this.userDetails.getLiquorDataExceptTheseIds(ExceptIds).subscribe(function (res) {
              _this5.newData = res;

              _this5.filterDataAndUpdate(ExceptIds, _this5.newData);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "filterDataAndUpdate",
          value: function filterDataAndUpdate(ExceptedID, newData) {
            var _this6 = this;

            // filtering the Ids
            newData.forEach(function (value) {
              if (ExceptedID.find(function (x) {
                return x == value.id;
              }) == undefined) {
                var nowPrice = parseFloat(value.BigLiquorActualPrice) - parseFloat(value.BigLiquorActualPrice) * parseFloat(_this6.priceDecreaseByPercentage);

                if (parseFloat(nowPrice) < parseFloat(value.BigLiquorMinPrice)) {
                  nowPrice = parseFloat(value.BigLiquorActualPrice);
                }

                _this6.updatePriceValueOfLiquor(value.id, parseFloat(nowPrice)); // console.log('Id =>'+value.id+'=>Actulal Price : =>'+parseFloat(value.BigLiquorActualPrice)+' => NowPrice: ',nowPrice+'=>Min price:=>'+value.BigLiquorMinPrice);

              }
            });
          }
        }, {
          key: "payment",
          value: function payment() {
            var _this7 = this;

            var date = new Date();
            var today_date = String(this.datePipe.transform(date, "yyyy-MM-dd"));
            this.amm1 = (Number(this.final_cart_price) * 100).toFixed(0);
            console.log('check>>', this.amm1);
            var options = {
              description: 'Liquidity',
              image: "https://firebasestorage.googleapis.com/v0/b/liquidity-app-6d8cb.appspot.com/o/Liquidity_Logo.png?alt=media&token=9b6b5894-0176-4755-aeba-66d1aa7722b6",
              currency: 'CAD',
              key: 'rzp_test_1DP5mmOlF5G5ag',
              amount: this.amm1,
              name: "Liquidity",
              prefill: {
                email: JSON.parse(localStorage.getItem("userDetails")).email,
                contact: JSON.parse(localStorage.getItem("userDetails")).mobile,
                name: JSON.parse(localStorage.getItem("userDetails")).name
              },
              theme: {
                color: '#DCC88D'
              },
              modal: {
                ondismiss: function ondismiss() {
                  alert('dismissed');
                }
              }
            };

            var successCallback = function successCallback(payment_id) {
              _this7.transaction_id = payment_id;
              _this7.today_date = String(_this7.datePipe.transform(_this7.date, "dd-MM-yyyy"));
              console.log(_this7.today_date);
              callApi(payment_id);
            };

            var cancelCallback = function cancelCallback(error) {
              alert(error.description + ' (Error ' + error.code + ')');
            };

            var callApi = function callApi(payment_id) {
              _this7.id = new Date().getTime();
              _this7.today_date = String(_this7.datePipe.transform(_this7.date, "yyyy-MM-dd"));
              _this7.date = _this7.today_date;
              var data3 = {
                "customer_name": _this7.user_name,
                "customer_email": _this7.mail,
                "customer_mobile": _this7.mobile,
                "user_id": localStorage.getItem("user_id"),
                "transaction_id": payment_id,
                "device_id": localStorage.getItem('uniqueDeviceID'),
                // "order_time":this.time,
                // "order_date":this.date,
                "order_time": _this7.time,
                "order_date": _this7.today_date,
                "shop_id": _this7.shopDetails.id,
                "payment_type": '1'
              };

              _this7.userDetails.createOrder(data3).then(function (ress) {
                if (ress["status"] == '1') {
                  _this7.helper.presentToast(ress["message"]);

                  console.log(_this7.transaction_id);
                  _this7.final_order_id = ress["order_id"];
                  localStorage.setItem("orderrr_id", _this7.final_order_id);

                  _this7.helper.showErrorCustom(_this7.final_order_id);

                  _this7.navCtrl.navigateForward('/order-success'); // this.Order_Details();

                } else {
                  _this7.helper.presentToast(ress["message"]);
                }
              }, function (error) {
                _this7.helper.presentToast("Invalid Data");
              });
            };

            this.platform.ready().then(function () {
              RazorpayCheckout.open(options, successCallback, cancelCallback);
            });
          }
        }]);

        return CartPage;
      }();

      CartPage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      CartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./cart.page.scss */
        "./src/app/cart/cart.page.scss"))["default"]]
      })], CartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=cart-cart-module-es5.js.map