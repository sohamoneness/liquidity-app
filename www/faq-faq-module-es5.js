(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["faq-faq-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html":
    /*!*************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html ***!
      \*************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFaqFaqPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n  \t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Faq</ion-title>\n  <!-- <ion-icon slot=\"end\" class=\"search_item\" name=\"search-outline\"></ion-icon> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"terms-title\">\n    <h5>FAQ’s</h5>\n  </div>\n  <div class=\"bodycontent\">\n    <ul>\n      <li>\n        <b>1. Why am I not able to place order for alcoholic beverages? </b>\n        As per State Excise Law alcoholic product sale is prohibited, on your selected date. Please order for another day.\n      </li>\n      <li>\n        <b>2. What is a Unit?</b>\n        Why am I not able to order more than 40 units per order? Prices at outlet are attractively priced based on demand supply module. So each transaction is capped for benefit of all our customers, rather than the price benefit being lapped by only few.\n      </li>\n      <li>\n        <span>Units Capping</span>\n        You can order up to maximum of 40 units per order. Your maximum unit order per brand in each category is capped as detailed below table.<br/>\n        In general, Each Unit for any Scotch, Whisky, Single Malt, Vodka, Rum, Gin, Tequila, and Liqueur is 30 ounce. For Any Beers each unit is 330 ounce, for Wine & Champagne each unit is 150 ounce and Low Alcoholic Beverages are 275 ounce.\n      </li>\n      <li>\n        Detailed   units capping category wise is as under \n        <table class=\"table\">\n          <tr>\n            <th>Category</th>\n            <th>Units per Brand</th>\n            <th>Each Unit</th>\n          </tr>\n          <tr>\n            <td>Premium Scotch and American Scotch</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Regular Scotch Whisky</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Scotch Whisky</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Premium Scotch Whisky</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Premium Single Malt & American Whisky</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Single Malt</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Indian Whisky</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Premium Imported Vodka</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Imported Vodka</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Flavored Vodka</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Indian Vodka</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Liqueur</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Rum</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Tequila</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Imported Wine</td>\n            <td>10</td>\n            <td>150ounce</td>\n          </tr>\n          <tr>\n            <td>Indian Wine</td>\n            <td>10</td>\n            <td>150ounce</td>\n          </tr>\n          <tr>\n            <td>Champagne & Sparklings</td>\n            <td>2</td>\n            <td>750ounce</td>\n          </tr>\n          <tr>\n            <td>Indian Beer</td>\n            <td>10</td>\n            <td>330ounce</td>\n          </tr>\n          <tr>\n            <td>Premium Indian Beer</td>\n            <td>10</td>\n            <td>330ounce</td>\n          </tr>\n          <tr>\n            <td>Imported Beer</td>\n            <td>10</td>\n            <td>330ounce</td>\n          </tr>\n          <tr>\n            <td>Gin</td>\n            <td>10</td>\n            <td>30ounce</td>\n          </tr>\n          <tr>\n            <td>Low Alcoholic Beverages</td>\n            <td>10</td>\n            <td>275ounce</td>\n          </tr>\n        </table>\n      </li>\n      <li>\n        <b>3. I placed an order, now want to reschedule it?</b>\n        Go to My orders, select your Active order & press the reschedule button. You can reschedule your order only ONCE for a fee. Rescheduled orders cannot be cancelled or modified. You can only reschedule your order 4 hours prior to your scheduled arrival time.\n      </li>\n      <li>\n        <b>4. What is a Transaction fee?</b>\n        Liquidity charges a transaction fee based on your order value per order.\n      </li>\n      <li>\n        <b>5. What are the cancellation charges?</b>\n        If you cancel within 15 Minutes of your order, no cancellation fee is applicable. In case you decide to cancel after 15minutes until 1 hour of your arrival time , 25 % of the Net bill value .\n        <br/>\n        In case you decide to cancel, less than 1 hour of your scheduled time, 50 % of the order value is deducted.<br/>\n        No Refund is allowed, if order is cancelled within 30 minutes of your arrival time .\n      </li>\n      <li>\n        <b>6. How do i get my Refund amount?</b>\n        We have specially created a Liquidity wallet. All your Refunds are credited to your Liquidity wallet immediately.<br/> \n        When you order the next time, first the amount from your Wallet is used towards payment of your order.<br/> \n        On my arrival at the Outlet, what procedure is to be followed?<br/> \n        Please note, outlets have Gate and Dress polices, which differ from outlet to outlet. Please choose filters accordingly.<br/> \n        As you arrive at the outlet, please show your email and your Unique Delivery code to the outlet representative, to enable the outlet to serve you.\n      </li>\n      <li>\n        <b>7. I am unable to Reserve a table with my order?</b>\n        Certain outlets does not provide Table reservation. You may select only the outlets with Table reservation facility though the Filter button .<br/>\n        But as you have placed an order through Liquidity , the outlet will provide table on priority basis to you ,upon your arrival.\n      </li>\n      <li>\n        <b>8. I reserved a table , outlet didn’t have it available upon my arrival ?</b>\n        Some Outlets provide the facility of Reserving the table with Minimum Billing amount per person  .At time of placing of the order, please indicate number of guests accompanying, to enable the outlet to reserve the table for you .<br/>\n        To ensure that the reserved table is provided to you on your arrival , you are requested to arrive at your scheduled time, failing which the outlet may not be able to immediately provide you with the table and under this circumstances only the next available table with be provided to you . <br/>\n        For your Table reservation, you are allowed a grace time of 15 minutes between your scheduled arrival time and actual arrival time . Outlet might ,at its sole discretion , extend you  the courtesy of some more grace time for your arrival beyond the scheduled  time, upon receipt of your specific request by them .<br/>\n        The grace time but cannot be beyond the closing time of the outlet, or the last alcohol service time, whichever is earlier .\n      </li>\n      <li>\n        <b>9. Why does Prices of Alcoholic beverages keep changing ?</b>\n        We have a unique algorithm , which works on demand and supply mechanism . Thus with every order placed , the prices keeps changing .<br/>\n        Order early in the day to get the best possible price .You may also compare the prices of your favorite drink, outlet wise in your city ,before placing your order .\n      </li>\n      <li>\n        <b>10. What is an ordering time ?</b>\n        You can order anytime between 11.30 am to 11.30 pm for consumption between today, tomorrow and day after .<br/>\n        In case of last minute order, please ensure that you finish your drinks within the outlets stipulated time of consumption .<br/>\n        Also please allow the outlet sometime for servicing and preparing of your food, in case you have ordered for immediate consumption.<br/>\n        Food is always prepared fresh upon your arrival ,so please allow the outlet the time to prepare your selection .<br/>\n      </li>\n      <li>\n        <b>11. Can I delete my order History?</b>\n        You can fully or partially delete your order history. Go to order History select the order you want to delete or select all to delete full history.\n      </li>\n      <li>\n        <b>12. Can I mute the notification/delete notification?</b>\n        Yes. You can mute the notification to appear only on the notification bar & you may delete all notifications by selecting delete all from the notification option.\n      </li>\n      <li>\n        <b>13. I ordered for a particular brand & outlet didn’t have it available upon by arrival?</b>\n        Liquidity works with participating outlet, purely on guarantee that listed products in all categories are made available when a customer books the same. On alcoholic products, our system stops accepting orders if the quantity fall below desired levels. In case of an unlikely event of your chosen product being not available, the outlet will offer you selection of either similar or one grade higher product. If you are unsatisfied with the alternative choices being offered, you may claim a REFUND.<br/>\n        For claiming REFUND, please go to the HELP section & claim your refund.\n\n      </li>\n    </ul>\n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/faq/faq-routing.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/faq/faq-routing.module.ts ***!
      \*******************************************/

    /*! exports provided: FaqPageRoutingModule */

    /***/
    function srcAppFaqFaqRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function () {
        return FaqPageRoutingModule;
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


      var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./faq.page */
      "./src/app/faq/faq.page.ts");

      var routes = [{
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
      }];

      var FaqPageRoutingModule = /*#__PURE__*/_createClass(function FaqPageRoutingModule() {
        _classCallCheck(this, FaqPageRoutingModule);
      });

      FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FaqPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/faq/faq.module.ts":
    /*!***********************************!*\
      !*** ./src/app/faq/faq.module.ts ***!
      \***********************************/

    /*! exports provided: FaqPageModule */

    /***/
    function srcAppFaqFaqModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqPageModule", function () {
        return FaqPageModule;
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


      var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./faq-routing.module */
      "./src/app/faq/faq-routing.module.ts");
      /* harmony import */


      var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./faq.page */
      "./src/app/faq/faq.page.ts");

      var FaqPageModule = /*#__PURE__*/_createClass(function FaqPageModule() {
        _classCallCheck(this, FaqPageModule);
      });

      FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
      })], FaqPageModule);
      /***/
    },

    /***/
    "./src/app/faq/faq.page.scss":
    /*!***********************************!*\
      !*** ./src/app/faq/faq.page.scss ***!
      \***********************************/

    /*! exports provided: default */

    /***/
    function srcAppFaqFaqPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content .terms-title {\n  background-color: #ffffff;\n  padding: 20px 20px 0 20px;\n}\nion-content .terms-title h5 {\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n}\nion-content .bodycontent {\n  padding: 0 20px 20px 20px;\n}\nion-content .bodycontent ul {\n  padding: 0;\n}\nion-content .bodycontent ul li {\n  font-size: 13px;\n  color: #000000;\n  line-height: 20px;\n  margin-bottom: 10px;\n  list-style: decimal;\n  display: block;\n}\nion-content .bodycontent ul li b {\n  display: block;\n  margin-bottom: 8px;\n}\nion-content .bodycontent ul li .table {\n  width: 100%;\n  border: 1px solid #efefef;\n  margin: 15px 0;\n}\nion-content .bodycontent ul li .table tr th {\n  padding: 8px;\n  border: 1px solid #efefef;\n  vertical-align: middle;\n}\nion-content .bodycontent ul li .table tr td {\n  padding: 8px;\n  border: 1px solid #efefef;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUM7RUFDQyx5QkFBQTtFQUNBLHlCQUFBO0FBREY7QUFFRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FBQUg7QUFHSTtFQUNJLHlCQUFBO0FBRFI7QUFFUTtFQUNJLFVBQUE7QUFBWjtBQUNZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ2hCO0FBQWdCO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0FBRXBCO0FBQWdCO0VBQ0ksV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQUVwQjtBQURvQjtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBR3hCO0FBRG9CO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFHeEIiLCJmaWxlIjoic3JjL2FwcC9mYXEvZmFxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHJcblx0LnRlcm1zLXRpdGxle1xyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xyXG5cdFx0cGFkZGluZzoyMHB4IDIwcHggMCAyMHB4O1xyXG5cdFx0aDV7XHJcblx0XHRcdGZvbnQtc2l6ZToxNHB4O1xyXG5cdFx0XHRmb250LXdlaWdodDpib2xkO1xyXG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cdFx0fVxyXG4gICAgfVxyXG4gICAgLmJvZHljb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAyMHB4IDIwcHg7XHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxpe1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjEzcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBie1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC50YWJsZXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyIHRoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyIHRke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cdFx0XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/faq/faq.page.ts":
    /*!*********************************!*\
      !*** ./src/app/faq/faq.page.ts ***!
      \*********************************/

    /*! exports provided: FaqPage */

    /***/
    function srcAppFaqFaqPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FaqPage", function () {
        return FaqPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FaqPage = /*#__PURE__*/function () {
        function FaqPage() {
          _classCallCheck(this, FaqPage);
        }

        _createClass(FaqPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FaqPage;
      }();

      FaqPage.ctorParameters = function () {
        return [];
      };

      FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./faq.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./faq.page.scss */
        "./src/app/faq/faq.page.scss"))["default"]]
      })], FaqPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=faq-faq-module-es5.js.map