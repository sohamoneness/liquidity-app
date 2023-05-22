(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["food-item-cart-food-item-cart-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/outlethome/food-item-cart/food-item-cart.page.html":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlethome/food-item-cart/food-item-cart.page.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOutlethomeFoodItemCartFoodItemCartPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Food Cart</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\t<div class=\"drink_items\">\n\t\t<ion-item *ngFor=\"let foodCart of addToFoodCart.foodCart;let i =index\">\n\t\t    <ion-grid>\n\t\t      \t<ion-row class=\"ion-align-items-center\">\n\t\t    \t\t<ion-col size=\"7\">\n\t\t    \t\t\t<div class=\"drink_content\">\n\t\t    \t\t\t\t<h3 class=\"m-0\">{{foodCart.itemName}}</h3>\n\t\t    \t\t\t</div>\n\t\t\t\t    </ion-col>\n\t\t\t\t    <ion-col size=\"5\" class=\"ion-no-padding\">\n\t\t\t\t    \t<div class=\"drink_content\">\n\t\t\t\t      \t\t<h3 class=\"m-0 ion-text-right\"></h3>\n\t\t\t\t      \t</div>\n\t\t\t\t    </ion-col>\n\t\t\t\t</ion-row>\n\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t    \t\t<ion-col size=\"7\">\n\t\t    \t\t\t<div class=\"drink_content drink_content--mod\">\n\t\t    \t\t\t\t<p class=\"short_count ion-text-left\">{{foodCart.quantity}} x $ {{foodCart.price}}</p>\n\t\t    \t\t\t\t<button (click)=\"removeItem(foodCart)\"><img src=\"assets/remove.png\"></button>\n\t\t    \t\t\t</div>\n\t\t\t\t    </ion-col>\n\t\t\t\t</ion-row>\n\t\t    </ion-grid>\n\t\t</ion-item>\n\n\t\t<ion-item>\n\t\t    <ion-grid>\n\t\t      \t<ion-row class=\"ion-align-items-center\">\n\t\t    \t\t<ion-col size=\"7\">\n\t\t    \t\t\t<div class=\"drink_content\">\n\t\t    \t\t\t\t<h3 class=\"m-0\">Subtotal</h3>\n\t\t    \t\t\t</div>\n\t\t\t\t    </ion-col>\n\t\t\t\t    <ion-col size=\"5\" class=\"ion-no-padding\">\n\t\t\t\t    \t<div class=\"drink_content\">\n\t\t\t\t      \t\t<h3 class=\"m-0 ion-text-right\">$ {{totalPrice | number : '.2-2'}}</h3>\n\t\t\t\t      \t</div>\n\t\t\t\t    </ion-col>\n\t\t\t\t</ion-row>\n\t\t    </ion-grid>\n\t\t</ion-item>\n\t\t<ion-item>\n\t\t    <ion-grid>\n\t\t      \t<ion-row class=\"ion-align-items-center\">\n\t\t    \t\t<ion-col size=\"7\">\n\t\t    \t\t\t<div class=\"drink_content\">\n\t\t    \t\t\t\t<h3 class=\"m-0\">Grand Total</h3>\n\t\t    \t\t\t</div>\n\t\t\t\t    </ion-col>\n\t\t\t\t    <ion-col size=\"5\" class=\"ion-no-padding\">\n\t\t\t\t    \t<div class=\"drink_content\">\n\t\t\t\t      \t\t<h3 class=\"m-0 ion-text-right\">$ {{totalPrice | number : '.2-2'}}</h3>\n\t\t\t\t      \t</div>\n\t\t\t\t    </ion-col>\n\t\t\t\t</ion-row>\n\t\t    </ion-grid>\n\t\t</ion-item>\n\t</div>\n\t<div class=\"title_bar\">\n\t\t<h2 class=\"title\">Booking for</h2>\n\t</div>\n\t<div class=\"select_form\">\n\t\t<div class=\"row\">\n\t\t\t<ion-list class=\"drink_items\">\n\t\t\t  <ion-item>\n\t\t\t\t<ion-grid>\n\t\t\t\t  <ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t<input type=\"radio\" name=\"bookingfor\" value=\"myself\" [(ngModel)]=\"bookingData.bookingfor\">Myself\n\t\t\t\t\t<input type=\"radio\" name=\"bookingfor\" value=\"someoneelse\" [(ngModel)]=\"bookingData.bookingfor\">Someone else\n\t\t\t\t  </ion-row>\n\t\t\t\t</ion-grid>\n\t\t\t  </ion-item>\n\t\t\t  \t<ion-row>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t   <ion-item class=\"circle\">\n\t\t\t\t\t  <ion-label>+91</ion-label>\n\t\t\t\t\t  <ion-input placeholder=\"mobile\" [(ngModel)]=\"bookingData.mobile\"></ion-input>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-item class=\"circle\">\n\t\t\t\t\t\t   <ion-input placeholder=\"youremail@email.com\" [(ngModel)]=\"bookingData.email\"></ion-input>\n\t\t\t\t\t   </ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t   <ion-item class=\"circle\">\n\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t<img src=\"assets/calender.png\">\n\t\t\t\t\t\t  </ion-avatar>\n\t\t\t\t\t\t  <ion-label>Order Date*</ion-label>\n\t\t\t\t\t\t  <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"bookingData.date\"></ion-datetime>\n\t\t\t\t\t\t   <!-- <ion-input placeholder=\"14/02/2018\"></ion-input> -->\n\t\t\t\t\t   </ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t<ion-col size=\"6\">\n\t\t\t\t\t<ion-item class=\"circle\">\n\t\t\t\t\t\t<ion-avatar slot=\"start\">\n\t\t\t\t\t\t\t<img src=\"assets/clock.png\">\n\t\t\t\t\t\t  </ion-avatar>\n\t\t\t\t\t\t  <ion-label>Time</ion-label>\n\t\t\t\t\t\t  <ion-datetime displayFormat=\"hh-mm-A\" [(ngModel)]=\"bookingData.time\"></ion-datetime>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t\t</ion-row>\n\t\t\t</ion-list>\n\t\t  </div>\n\t</div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n  \t<div class=\"footer_item_end mw_230\" (click)=\"payforFood()\">\n  \t\t<p>Select Payment Method</p>\n  \t\t<img src=\"assets/arrow-right.png\">\n  \t</div>\n  </div>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/outlethome/food-item-cart/food-item-cart-routing.module.ts":
    /*!****************************************************************************!*\
      !*** ./src/app/outlethome/food-item-cart/food-item-cart-routing.module.ts ***!
      \****************************************************************************/

    /*! exports provided: FoodItemCartPageRoutingModule */

    /***/
    function srcAppOutlethomeFoodItemCartFoodItemCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodItemCartPageRoutingModule", function () {
        return FoodItemCartPageRoutingModule;
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


      var _food_item_cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./food-item-cart.page */
      "./src/app/outlethome/food-item-cart/food-item-cart.page.ts");

      var routes = [{
        path: '',
        component: _food_item_cart_page__WEBPACK_IMPORTED_MODULE_3__["FoodItemCartPage"]
      }];

      var FoodItemCartPageRoutingModule = /*#__PURE__*/_createClass(function FoodItemCartPageRoutingModule() {
        _classCallCheck(this, FoodItemCartPageRoutingModule);
      });

      FoodItemCartPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FoodItemCartPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/outlethome/food-item-cart/food-item-cart.module.ts":
    /*!********************************************************************!*\
      !*** ./src/app/outlethome/food-item-cart/food-item-cart.module.ts ***!
      \********************************************************************/

    /*! exports provided: FoodItemCartPageModule */

    /***/
    function srcAppOutlethomeFoodItemCartFoodItemCartModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodItemCartPageModule", function () {
        return FoodItemCartPageModule;
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


      var _food_item_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./food-item-cart-routing.module */
      "./src/app/outlethome/food-item-cart/food-item-cart-routing.module.ts");
      /* harmony import */


      var _food_item_cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./food-item-cart.page */
      "./src/app/outlethome/food-item-cart/food-item-cart.page.ts");

      var FoodItemCartPageModule = /*#__PURE__*/_createClass(function FoodItemCartPageModule() {
        _classCallCheck(this, FoodItemCartPageModule);
      });

      FoodItemCartPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _food_item_cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["FoodItemCartPageRoutingModule"]],
        declarations: [_food_item_cart_page__WEBPACK_IMPORTED_MODULE_6__["FoodItemCartPage"]]
      })], FoodItemCartPageModule);
      /***/
    },

    /***/
    "./src/app/outlethome/food-item-cart/food-item-cart.page.scss":
    /*!********************************************************************!*\
      !*** ./src/app/outlethome/food-item-cart/food-item-cart.page.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOutlethomeFoodItemCartFoodItemCartPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".drink_items ion-item {\n  --background: #ffffff;\n}\n\n.select_form ion-item {\n  --background: #ffffff;\n  color: #000;\n  --min-height: 20px;\n  --inner-border-width: 0;\n  font-size: 14px;\n  --padding-start: 0;\n}\n\n.select_form ion-item ion-label {\n  margin: 0;\n  font-size: 14px;\n}\n\n.select_form ion-item.circle {\n  --border-radius: 20px;\n  --border-width: 2px;\n  --border-color: #dcc88d;\n  --inner-border-width: 0;\n  --padding-start: 10px;\n}\n\n.select_form ion-item ion-radio {\n  margin-right: 10px;\n  --color-checked: #dcc88d;\n}\n\n.select_form ion-item ion-radio .radio-icon {\n  border-color: #000;\n}\n\n.select_form ion-item ion-radio .radio-icon .radio-inner {\n  background: #dcc88d;\n}\n\n.select_form ion-item ion-avatar {\n  --border-radius: 0;\n  width: 16px;\n  height: 16px;\n  margin: 0 10px 0 0;\n}\n\n.select_form ion-item ion-input {\n  --padding-top: 3px;\n  --padding-bottom: 3px;\n}\n\nion-footer .footer_content .footer_item_end {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bGV0aG9tZS9mb29kLWl0ZW0tY2FydC9mb29kLWl0ZW0tY2FydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0M7RUFDQyxxQkFBQTtBQUFGOztBQUlDO0VBQ0MscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdFO0VBQ0MsU0FBQTtFQUNBLGVBQUE7QUFESDs7QUFJRTtFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFGSDs7QUFLRTtFQUNDLGtCQUFBO0VBU0Esd0JBQUE7QUFYSDs7QUFJRztFQUNDLGtCQUFBO0FBRko7O0FBSUk7RUFDQyxtQkFBQTtBQUZMOztBQVFFO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBTkg7O0FBU0U7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0FBUEg7O0FBYUU7RUFDSSx1QkFBQTtBQVZOIiwiZmlsZSI6InNyYy9hcHAvb3V0bGV0aG9tZS9mb29kLWl0ZW0tY2FydC9mb29kLWl0ZW0tY2FydC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZHJpbmtfaXRlbXMge1xyXG5cdGlvbi1pdGVtIHtcclxuXHRcdC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuXHR9XHJcbn1cclxuLnNlbGVjdF9mb3JtIHtcclxuXHRpb24taXRlbSB7XHJcblx0XHQtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdC0tbWluLWhlaWdodDogMjBweDtcclxuXHRcdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0XHJcblx0XHRpb24tbGFiZWwge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdH1cclxuXHJcblx0XHQmLmNpcmNsZSB7XHJcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHRcdFx0LS1ib3JkZXItd2lkdGg6IDJweDtcclxuXHRcdFx0LS1ib3JkZXItY29sb3I6ICNkY2M4OGQ7XHJcblx0XHRcdC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG5cdFx0XHQtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLXJhZGlvIHtcclxuXHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuXHRcdFx0LnJhZGlvLWljb24ge1xyXG5cdFx0XHRcdGJvcmRlci1jb2xvcjogIzAwMDtcclxuXHJcblx0XHRcdFx0LnJhZGlvLWlubmVyIHtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6ICNkY2M4OGQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC0tY29sb3ItY2hlY2tlZDogI2RjYzg4ZDtcclxuXHRcdH1cclxuXHJcblx0XHRpb24tYXZhdGFyIHtcclxuXHRcdFx0LS1ib3JkZXItcmFkaXVzOiAwO1xyXG5cdFx0XHR3aWR0aDogMTZweDtcclxuXHRcdFx0aGVpZ2h0OiAxNnB4O1xyXG5cdFx0XHRtYXJnaW46IDAgMTBweCAwIDA7XHJcblx0XHR9XHJcblxyXG5cdFx0aW9uLWlucHV0IHtcclxuXHRcdFx0LS1wYWRkaW5nLXRvcDogM3B4O1xyXG5cdFx0XHQtLXBhZGRpbmctYm90dG9tOiAzcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbmlvbi1mb290ZXIge1xyXG5cdC5mb290ZXJfY29udGVudCB7XHJcblx0XHQuZm9vdGVyX2l0ZW1fZW5kIHtcclxuXHRcdCAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/outlethome/food-item-cart/food-item-cart.page.ts":
    /*!******************************************************************!*\
      !*** ./src/app/outlethome/food-item-cart/food-item-cart.page.ts ***!
      \******************************************************************/

    /*! exports provided: FoodItemCartPage */

    /***/
    function srcAppOutlethomeFoodItemCartFoodItemCartPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FoodItemCartPage", function () {
        return FoodItemCartPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/user-details.service */
      "./src/app/services/user-details.service.ts");

      var FoodItemCartPage = /*#__PURE__*/function () {
        function FoodItemCartPage(helper, navCtrl, userDetails, platform) {
          _classCallCheck(this, FoodItemCartPage);

          this.helper = helper;
          this.navCtrl = navCtrl;
          this.userDetails = userDetails;
          this.platform = platform;
          this.user = [];
          this.user_name = [];
          this.mail = [];
          this.mobile = [];
          this.amm1 = [];
          this.transaction_id = [];
          this.shopDetails = [];
          this.id = 0;
          this.totalPrice = 0;
          this.bookingData = {
            mobile: '',
            email: '',
            date: '',
            time: '',
            bookingfor: 'myself'
          };
          this.addToFoodCart = {
            foodCart: []
          }; // add To Food Cart
        }

        _createClass(FoodItemCartPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addToFoodCart.foodCart = JSON.parse(localStorage.getItem('foodItemCart'));
            var price = 0;
            this.addToFoodCart.foodCart.forEach(function (value) {
              price += parseFloat(value.price) * parseFloat(value.quantity);
            });
            this.totalPrice = price; // console.log(this.addToFoodCart.foodCart);

            this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
            console.log('shopDetails: ', this.shopDetails);
            var date = new Date(); // console.log(this.datePipe.transform(date,"dd-MM-yyyy")); //output : 2018-02-13
            // this.today_date=String(this.datePipe.transform(date,"dd-MM-yyyy"));

            this.user = JSON.parse(localStorage.getItem('user_Detais'));
            console.log(this.user);
            this.mail = this.user.email;
            this.user_name = this.user.name;
            this.mobile = this.user.mobile;
            this.bookingData.mobile = this.mobile;
            this.bookingData.email = this.mail;
          }
        }, {
          key: "removeItem",
          value: function removeItem(foodCart) {
            this.addToFoodCart.foodCart = this.addToFoodCart.foodCart.filter(function (_ref) {
              var foodItemId = _ref.foodItemId;
              return foodItemId !== foodCart.foodItemId;
            }); // removing the Duplicasy or 0 selected from Local variable

            var price = 0;
            this.addToFoodCart.foodCart.forEach(function (value) {
              price += parseFloat(value.price) * parseFloat(value.quantity);
            });
            this.totalPrice = price;
          }
        }, {
          key: "payforFood",
          value: function payforFood() {
            if (this.addToFoodCart.foodCart.length <= 0) {
              this.helper.showErrorCustom('Please select at least one Unit');
            } else if (this.bookingData.mobile == '' || this.bookingData.email == '' || this.bookingData.date == '' || this.bookingData.time == '') {
              this.helper.showErrorCustom('Please fill your details');
            } else {
              // this.saveDataTotheTable();
              // this.navCtrl.navigateForward('/order-success');
              this.payment();
            }
          }
        }, {
          key: "saveDataTotheTable",
          value: function saveDataTotheTable() {
            var _this = this;

            var UserId = localStorage.getItem('user_id'); // console.log('Items in Cart',this.addToFoodCart.foodCart);
            // console.log('UsrId',UserId);
            // console.log('Booking Data',this.bookingData);

            this.addToFoodCart.foodCart.forEach(function (value) {
              _this.userDetails.addFoodOrderDetails(value, _this.bookingData, UserId);
            });
          }
        }, {
          key: "payment",
          value: function payment() {
            var _this2 = this;

            //this.amm = Number(this.wallet_amount)*100;
            this.amm1 = (Number(this.totalPrice) * 100).toFixed(0);
            console.log('check>>', this.amm1);
            var options = {
              description: 'Liquidity',
              image: "https://firebasestorage.googleapis.com/v0/b/liquidity-app-6d8cb.appspot.com/o/Home%20page%20icon_02.png?alt=media&token=d6da71bd-66aa-48fa-bd55-446e23170fef",
              currency: 'C$',
              key: 'rzp_test_1DP5mmOlF5G5ag',
              amount: this.amm1,
              name: "Liquidity",
              prefill: {
                email: '',
                contact: '',
                name: 'a'
              },
              theme: {
                color: '#DD0023'
              },
              modal: {
                ondismiss: function ondismiss() {
                  alert('dismissed');
                }
              }
            };

            var successCallback = function successCallback(payment_id) {
              _this2.saveDataTotheTable();

              _this2.navCtrl.navigateForward('/order-success'); // callApi(payment_id);

            };

            var cancelCallback = function cancelCallback(error) {
              alert(error.description + ' (Error ' + error.code + ')');
            };

            var callApi = function callApi(payment_id) {
              _this2.id = new Date().getTime();
              var data2 = {
                "customer_name": _this2.user_name,
                "customer_email": _this2.mail,
                "customer_mobile": _this2.mobile,
                "store_name": _this2.shopDetails.liquorShopName,
                "store_email": _this2.shopDetails.liquorShopOwnerEmail,
                "order_id": "liq" + _this2.id,
                "order_amount": _this2.totalPrice,
                "order_date": _this2.bookingData.date
              };

              _this2.userDetails.pay_email(data2).then(function (res) {
                if (res["status"] == '1') {
                  _this2.helper.presentToast(res["message"]);

                  console.log(_this2.transaction_id); // this.navCtrl.push(TabsPage);
                } else {
                  _this2.helper.presentToast(res["message"]);
                }
              }, function (error) {
                _this2.helper.presentToast("Invalid Data");
              });
            };

            this.platform.ready().then(function () {
              RazorpayCheckout.open(options, successCallback, cancelCallback);
            });
          }
        }]);

        return FoodItemCartPage;
      }();

      FoodItemCartPage.ctorParameters = function () {
        return [{
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_4__["UserDetailsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }];
      };

      FoodItemCartPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-food-item-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./food-item-cart.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/outlethome/food-item-cart/food-item-cart.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./food-item-cart.page.scss */
        "./src/app/outlethome/food-item-cart/food-item-cart.page.scss"))["default"]]
      })], FoodItemCartPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=food-item-cart-food-item-cart-module-es5.js.map