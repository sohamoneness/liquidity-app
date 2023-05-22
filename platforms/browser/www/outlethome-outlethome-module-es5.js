(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlethome-outlethome-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/outlethome/outlethome.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlethome/outlethome.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOutlethomeOutlethomePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n\t\t  </ion-buttons>\n      <!-- <ion-title>SELECTED LOCATION</ion-title> -->\n      <ion-title>{{this.shopName}}</ion-title>\n\t\t<ion-icon slot=\"end\" class=\"search_item\" name=\"search-outline\"></ion-icon>\n\t\t  <ion-icon slot=\"end\" class=\"search_item\" name=\"cart-outline\" (click)=\"cart()\"></ion-icon>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div>\n\t  <ion-segment [(ngModel)]=\"drinks\" scrollable=\"true\">\n\t    <ion-segment-button value=\"liquor\" (click)=LiquorSections()>\n\t      LIQUOR\n\t    </ion-segment-button>\n\t    <ion-segment-button value=\"food\" (click)=\"FoodSection()\">\n\t      FOOD\n\t    </ion-segment-button>\n\t    <ion-segment-button value=\"soft-beverage\" (click)=\"SoftSection()\">\n\t      SOFT BEVERAGE\n\t    </ion-segment-button>\n\t    <ion-segment-button value=\"combo\" (click)=\"ComboSection()\">\n\t      COMBO\n\t    </ion-segment-button>\n\t  </ion-segment>\n\t</div>\n\n\t<div [ngSwitch]=\"drinks\">\n\t\t<ion-list *ngSwitchCase=\"'liquor'\" class=\"segment_2\">\n\t\t\t<div padding>\n\t\t\t\t<ion-segment [(ngModel)]=\"scotch\">\n\t\t\t\t\t<ion-segment-button  *ngFor=\"let item of liquorCategory\" value=\"{{item.name}}\" (click)=\"liquorSegmentPremium(item)\" >\n\t\t\t\t\t<img src=\"{{item.image}}\">\n\t\t\t\t\t<ion-button class=\"\" shape=\"round\">{{item.name}}</ion-button>\n\t\t\t\t\t</ion-segment-button>\n\t\t\t\t\t<!-- <ion-segment-button value=\"regular-scotch\" (click)=\"liquorSegmentRegular()\">\n\t\t\t\t\t<img src=\"assets/img-6.png\">\n\t\t\t\t\t<ion-button class=\"\" shape=\"round\">Regular Scotch</ion-button>\n\t\t\t\t\t</ion-segment-button>\n\t\t\t\t\t<ion-segment-button value=\"scotch-whisky\" (click)=\"liquorSegmentWhisky()\">\n\t\t\t\t\t<img src=\"assets/img-7.png\">\n\t\t\t\t\t<ion-button class=\"\" shape=\"round\">Scotch Whisky</ion-button>\n\t\t\t\t\t</ion-segment-button> -->\n\t\t\t\t</ion-segment>\n\t\t\t</div>\n\n\t\t\t<div [ngSwitch]=\"scotch\">\n\t\t\t<ion-list *ngSwitchCase=this.scotch class=\"drink_items\">\n\t\t\t\t<ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n\t\t\t\t<ion-grid>\n\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t\t<ion-col size=\"7\">\n\t\t\t\t\t\t\t<div class=\"drink_content\">\n\t\t\t\t\t\t\t\t<h3>{{item.name}}</h3>\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li>HIGH: <span class=\"price_hike d-block\">$ {{item.highest_price | number : '.2-2'}}<img src=\"assets/green-arrow.png\"></span></li>\n\t\t\t\t\t\t\t\t\t<li>LOW: <span class=\"price_down d-block\">$ {{item.lowest_price | number : '.2-2'}}<img src=\"assets/red-arrow.png\"></span></li>\n\t\t\t\t\t\t\t\t\t<li>NOW: <span class=\"price_now d-block\">$ {{item.current_price | number : '.2-2'}}</span></li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t<div class=\"quantity\">\n\t\t\t\t\t\t\t<div (click)=\"plusss(item)\">\n\t\t\t\t\t\t\t\t<span class=\"plus\" >+</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!-- <p>{{getthisCounter(item)}}</p> -->\n\t\t\t\t\t\t\t<p>{{item.counter}}</p>\n\n\t\t\t\t\t\t\t<div (click)=\"minusss(item)\">\n\t\t\t\t\t\t\t\t<span class=\"minus\" >-</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCarts(item)\">\n\t\t\t\t\t\t\t<ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n\t\t\t\t\t\t\t<!-- <ion-icon name=\"bag-add\"></ion-icon> -->\n\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t</ion-row>\n\t\t\t\t</ion-grid>\n\t\t\t\t</ion-item>\n\n\t\t\t</ion-list>\n\t\t\t</div>\n\t\t</ion-list>\n\n\t\t<ion-list *ngSwitchCase=\"'food'\" class=\"ion-no-padding\">\n\t\t\t<!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n\t\t\t\t<!-- <div class=\"title_bar\">\n\t\t\t\t\t<h2 class=\"title\">{{category.category_name}}</h2>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"drink_items\">\n\t\t\t\t\t<ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t<ion-col size=\"7\" class=\"pl-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"drink_content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"no-margin\">{{item.name}}</h3>\n\t\t\t\t\t\t\t\t\t\t<p class=\"net\">$ {{item.food_price | number : '.2-2'}}</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>{{item.description}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t\t\t\t<div class=\"quantity\">\n\t\t\t\t\t\t\t\t\t\t<div (click)=\"plusss(item)\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"plus\" >+</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <p>{{getthisCounter(item)}}</p> -->\n\t\t\t\t\t\t\t\t\t\t<p>{{item.counter}}</p>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div (click)=\"minusss(item)\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"minus\" >-</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCarts(item)\">\n\t\t\t\t\t\t\t\t\t\t<!-- <img src=\"assets/cart.png\" style=\"padding-top: 5px;\"> -->\n\t\t\t\t\t\t\t\t\t\t<ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t<!-- </div> -->\n\t\t\t</div>\n\t\t</ion-list>\n\n\t\t<ion-list *ngSwitchCase=\"'soft-beverage'\" class=\"ion-no-padding\">\n\t\t\t<!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n\t\t\t\t<!-- <div class=\"title_bar\">\n\t\t\t\t\t<h2 class=\"title\">{{category.category_name}}</h2>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"drink_items\">\n\t\t\t\t\t<ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t<ion-col size=\"7\" class=\"pl-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"drink_content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"no-margin\">{{item.name}}</h3>\n\t\t\t\t\t\t\t\t\t\t<p class=\"net\">$ {{item.food_price | number : '.2-2'}}</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>{{item.description}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t\t\t\t<div class=\"quantity\">\n\t\t\t\t\t\t\t\t\t\t<div (click)=\"plusss(item)\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"plus\" >+</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <p>{{getthisCounter(item)}}</p> -->\n\t\t\t\t\t\t\t\t\t\t<p>{{item.counter}}</p>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div (click)=\"minusss(item)\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"minus\" >-</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCarts(item)\">\n\t\t\t\t\t\t\t\t\t\t<!-- <img src=\"assets/cart.png\" style=\"padding-top: 5px;\"> -->\n\t\t\t\t\t\t\t\t\t\t<ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t<!-- </div> -->\n\t\t\t</div>\n\t\t</ion-list>\n\n\t\t<ion-list *ngSwitchCase=\"'combo'\" class=\"ion-no-padding\">\n\t\t\t<!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n\t\t\t\t<!-- <div class=\"title_bar\">\n\t\t\t\t\t<h2 class=\"title\">{{category.category_name}}</h2>\n\t\t\t\t</div> -->\n\t\t\t\t<div class=\"drink_items\">\n\t\t\t\t\t<ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n\t\t\t\t\t\t<ion-grid>\n\t\t\t\t\t\t\t<ion-row class=\"ion-align-items-center\">\n\t\t\t\t\t\t\t\t<ion-col size=\"7\" class=\"pl-0\">\n\t\t\t\t\t\t\t\t\t<div class=\"drink_content\">\n\t\t\t\t\t\t\t\t\t\t<h3 class=\"no-margin\">{{item.name}}</h3>\n\t\t\t\t\t\t\t\t\t\t<p class=\"net\">$ {{item.food_price | number : '.2-2'}}</p>\n\t\t\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t\t\t<li>{{item.description}}</li>\n\t\t\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t<ion-col size=\"3\">\n\t\t\t\t\t\t\t\t\t<div class=\"quantity\">\n\t\t\t\t\t\t\t\t\t\t<div (click)=\"plusss(item)\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"plus\" >+</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<!-- <p>{{getthisCounter(item)}}</p> -->\n\t\t\t\t\t\t\t\t\t\t<p>{{item.counter}}</p>\n\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div (click)=\"minusss(item)\">\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"minus\" >-</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t\t\t<ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCarts(item)\">\n\t\t\t\t\t\t\t\t\t\t<!-- <img src=\"assets/cart.png\" style=\"padding-top: 5px;\"> -->\n\t\t\t\t\t\t\t\t\t\t<ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n\t\t\t\t\t\t\t\t\t</ion-col>\n\t\t\t\t\t\t\t</ion-row>\n\t\t\t\t\t\t</ion-grid>\n\t\t\t\t\t</ion-item>\n\n\t\t\t\t<!-- </div> -->\n\t\t\t</div>\n\t\t</ion-list>\n\t</div>\n</ion-content>\n\n<div [ngSwitch]=\"drinks\">\n\t<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'liquor'\">\n\t\t<div class=\"footer_content\">\n\t\t\t<div class=\"footer_item_start\">\n\t\t\t\t<img src=\"assets/cart.png\">\n\t\t\t\t<div class=\"item_total\">\n\t\t\t\t\t<p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n\t\t\t\t\t<p class=\"price_end\">$ {{final_cart_value | number : '.2-2'}}</p>\n\t\t\t\t\t<p><small>plus taxes*</small></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer_item_end mw_230\" (click)=\"gotoCart()\">\n\t\t\t\t<p>View Cart</p>\n\t\t\t\t<img src=\"assets/arrow-right.png\">\n\t\t\t</div>\n\t\t</div>\n\t</ion-footer>\n\n\t<!-- <ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'food'\">\n\t\t<div class=\"footer_content\">\n\t\t\t<div class=\"footer_item_start\">\n\t\t\t\t<img src=\"assets/cart.png\">\n\t\t\t\t<div class=\"item_total\">\n\t\t\t\t\t<p><small>{{addToFoodCart.foodCart.length}} ITEM IN CART</small></p>\n\t\t\t\t\t<p class=\"price_end\">$ {{foodCartValue | number : '.2-2'}}</p>\n\t\t\t\t\t<p><small>plus taxes*</small></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer_item_end mw_230\" (click)=\"gotoFoodCart()\">\n\t\t\t\t<p>View Cart</p>\n\t\t\t\t<img src=\"assets/arrow-right.png\">\n\t\t\t</div>\n\t\t</div>\n\t</ion-footer> -->\n\t<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'food'\">\n\t\t<div class=\"footer_content\">\n\t\t\t<div class=\"footer_item_start\">\n\t\t\t\t<img src=\"assets/cart.png\">\n\t\t\t\t<div class=\"item_total\">\n\t\t\t\t\t<p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n\t\t\t\t\t<p class=\"price_end\">$ {{final_cart_value | number : '.2-2'}}</p>\n\t\t\t\t\t<p><small>plus taxes*</small></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer_item_end mw_230\" (click)=\"gotoCart()\">\n\t\t\t\t<p>View Cart</p>\n\t\t\t\t<img src=\"assets/arrow-right.png\">\n\t\t\t</div>\n\t\t</div>\n\t</ion-footer>\n\t<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'soft-beverage'\">\n\t\t<div class=\"footer_content\">\n\t\t\t<div class=\"footer_item_start\">\n\t\t\t\t<img src=\"assets/cart.png\">\n\t\t\t\t<div class=\"item_total\">\n\t\t\t\t\t<p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n\t\t\t\t\t<p class=\"price_end\">$ {{final_cart_value | number : '.2-2'}}</p>\n\t\t\t\t\t<p><small>plus taxes*</small></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer_item_end mw_230\" (click)=\"gotoCart()\">\n\t\t\t\t<p>View Cart</p>\n\t\t\t\t<img src=\"assets/arrow-right.png\">\n\t\t\t</div>\n\t\t</div>\n\t</ion-footer>\n\t<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'combo'\">\n\t\t<div class=\"footer_content\">\n\t\t\t<div class=\"footer_item_start\">\n\t\t\t\t<img src=\"assets/cart.png\">\n\t\t\t\t<div class=\"item_total\">\n\t\t\t\t\t<p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n\t\t\t\t\t<p class=\"price_end\">$ {{final_cart_value | number : '.2-2'}}</p>\n\t\t\t\t\t<p><small>plus taxes*</small></p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"footer_item_end mw_230\" (click)=\"gotoCart()\">\n\t\t\t\t<p>View Cart</p>\n\t\t\t\t<img src=\"assets/arrow-right.png\">\n\t\t\t</div>\n\t\t</div>\n\t</ion-footer>\n</div>\n\n";
      /***/
    },

    /***/
    "./src/app/outlethome/outlethome-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/outlethome/outlethome-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: OutlethomePageRoutingModule */

    /***/
    function srcAppOutlethomeOutlethomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutlethomePageRoutingModule", function () {
        return OutlethomePageRoutingModule;
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


      var _outlethome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./outlethome.page */
      "./src/app/outlethome/outlethome.page.ts");

      var routes = [{
        path: '',
        component: _outlethome_page__WEBPACK_IMPORTED_MODULE_3__["OutlethomePage"]
      }, {
        path: 'food-item-cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | food-item-cart-food-item-cart-module */
          "food-item-cart-food-item-cart-module").then(__webpack_require__.bind(null,
          /*! ./food-item-cart/food-item-cart.module */
          "./src/app/outlethome/food-item-cart/food-item-cart.module.ts")).then(function (m) {
            return m.FoodItemCartPageModule;
          });
        }
      }];

      var OutlethomePageRoutingModule = /*#__PURE__*/_createClass(function OutlethomePageRoutingModule() {
        _classCallCheck(this, OutlethomePageRoutingModule);
      });

      OutlethomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OutlethomePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/outlethome/outlethome.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/outlethome/outlethome.module.ts ***!
      \*************************************************/

    /*! exports provided: OutlethomePageModule */

    /***/
    function srcAppOutlethomeOutlethomeModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutlethomePageModule", function () {
        return OutlethomePageModule;
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


      var _outlethome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./outlethome-routing.module */
      "./src/app/outlethome/outlethome-routing.module.ts");
      /* harmony import */


      var _outlethome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./outlethome.page */
      "./src/app/outlethome/outlethome.page.ts");

      var OutlethomePageModule = /*#__PURE__*/_createClass(function OutlethomePageModule() {
        _classCallCheck(this, OutlethomePageModule);
      });

      OutlethomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outlethome_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutlethomePageRoutingModule"]],
        declarations: [_outlethome_page__WEBPACK_IMPORTED_MODULE_6__["OutlethomePage"]]
      })], OutlethomePageModule);
      /***/
    },

    /***/
    "./src/app/outlethome/outlethome.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/outlethome/outlethome.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOutlethomeOutlethomePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".d-block {\n  display: block;\n  line-height: 18px;\n}\n\n.quantity {\n  margin-top: 22px;\n}\n\n.cardAdd ion-button {\n  font-size: 11px;\n  font-weight: 600;\n  box-shadow: none !important;\n  color: #000;\n  text-transform: capitalize;\n  margin-top: 24px;\n  height: 25px;\n  line-height: 24px;\n}\n\n.cardAdd ion-button img {\n  margin-right: 5px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bGV0aG9tZS9vdXRsZXRob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7QUFFSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFUjs7QUFEUTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7QUFHWiIsImZpbGUiOiJzcmMvYXBwL291dGxldGhvbWUvb3V0bGV0aG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1ibG9ja3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuLnF1YW50aXR5e1xyXG4gICAgbWFyZ2luLXRvcDogMjJweDtcclxufVxyXG4uY2FyZEFkZHtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIGltZ3tcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/outlethome/outlethome.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/outlethome/outlethome.page.ts ***!
      \***********************************************/

    /*! exports provided: OutlethomePage */

    /***/
    function srcAppOutlethomeOutlethomePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutlethomePage", function () {
        return OutlethomePage;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/unique-device-id/ngx */
      "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");

      var OutlethomePage = /*#__PURE__*/function () {
        function OutlethomePage(authService, navCtrl, userDetails, alertCtrl, helper, plt, _router, uniqueDeviceID) {
          _classCallCheck(this, OutlethomePage);

          this.authService = authService;
          this.navCtrl = navCtrl;
          this.userDetails = userDetails;
          this.alertCtrl = alertCtrl;
          this.helper = helper;
          this.plt = plt;
          this._router = _router;
          this.uniqueDeviceID = uniqueDeviceID;
          this.liquor = [];
          this.all_liquor = [];
          this.all_liquor_category = [];
          this.all_liquor_categorywise = [];
          this.liquorshopid = '';
          this.liquor_quantity_unit = [];
          this.cartPrice = [];
          this.cartTotal_unit0 = [];
          this.cartTotal_unit25 = [];
          this.cartTotal_unit50 = [];
          this.liquorName = [];
          this.count_CartItem = 0;
          this.final_cart_price = 0;
          this.final_cart_count = 0;
          this.checkout = [];
          this.checkout_final = [];
          this.cart_items = [];
          this.items_count = 0;
          this.cart_price = 0;
          this.final_cart_items = [];
          this.update_cart = [];
          this.liquorCategory = [];
          this.drinks = [];
          this.scotch = [];
          this.all_sub_categories = [];
          this.UniqueDeviceids = '12345678';
          this.food = [];
          this.sub_categories = [];
          this.sections = '';
          this.shopDetails = [];
          this.shopName = [];
          this.final_cart_value = 0; // public addToLiquorCart: {liquorCart: FOODITEMCART[];};

          this.foodCartValue = 0;
          this.drinks = 'liquor';
          this.addToCart = {
            carts: []
          };
          this.addToFoodItem = {
            foodItem: []
          }; // Store the Food DATA

          this.addToFoodCart = {
            foodCart: []
          }; // add To Food Cart

          this.addToLiquorItem = {
            liquorItem: []
          }; // Store the Liquor DATA
          // this.addToLiquorCart = {liquorCart : []}; // add To Food Cart

          this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
          console.log('shopDetails: ', this.shopDetails);
          this.shopName = this.shopDetails.name;
        }

        _createClass(OutlethomePage, [{
          key: "getUniqueDeviceID",
          value: function getUniqueDeviceID() {
            var _this = this;

            this.uniqueDeviceID.get().then(function (uuid) {
              console.log(uuid);
              _this.UniqueDeviceids = uuid;
            })["catch"](function (error) {
              console.log(error);
              _this.UniqueDeviceids = "Error! ${error}";
            });
          }
        }, {
          key: "cart",
          value: function cart() {
            this.navCtrl.navigateForward('/cart');
          }
        }, {
          key: "FoodSection",
          value: function FoodSection() {
            var _this2 = this;

            this.sections = "1";
            this.liquorshopid = localStorage.getItem("liquorshopid");
            this.userDetails.fetchOtherProductsByCategory("2", this.liquorshopid).then(function (res) {
              if (res["status"] == 1) {
                _this2.all_liquor_categorywise = res["products"];
                console.log(res["products"]);

                _this2.pushDataIntoLiquorCATEGORYClass(res);

                _this2.addToLiquorItem.liquorItem.forEach(function (elem1, index) {
                  elem1;

                  _this2.addToCart.carts.forEach(function (elem2, index) {
                    elem2;

                    if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                      console.log(_this2.addToLiquorItem.liquorItem);
                      index = _this2.addToLiquorItem.liquorItem.findIndex(function (x) {
                        return x.itemId === elem2.itemId;
                      });
                      _this2.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                      console.log("counter", index);
                      console.log(_this2.addToCart.carts);
                      console.log(_this2.addToLiquorItem.liquorItem);
                    } else {
                      console.log(_this2.addToCart.carts);
                      console.log(_this2.addToLiquorItem.liquorItem);
                    }
                  });
                });

                console.log(_this2.addToCart.carts);
                console.log(_this2.addToLiquorItem.liquorItem);
              }
            });
          }
        }, {
          key: "LiquorSections",
          value: function LiquorSections() {
            var _this3 = this;

            this.drinks = 'liquor';
            this.sections = "0";
            this.liquorshopid = localStorage.getItem("liquorshopid");
            this.userDetails.fetchProducts("1", this.liquorshopid).then(function (res) {
              if (res["status"] == 1) {
                _this3.all_liquor_categorywise = res["products"];
                console.log(_this3.all_liquor_categorywise);

                _this3.pushDataIntoLiquorCATEGORYClass(res);

                console.log("<<<<<<<<<<<<>>>>>>>>>>>>>", _this3.addToLiquorItem.liquorItem);

                _this3.addToLiquorItem.liquorItem.forEach(function (elem1, index) {
                  elem1;

                  _this3.addToCart.carts.forEach(function (elem2, index) {
                    elem2;

                    if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                      console.log(_this3.addToLiquorItem.liquorItem);
                      index = _this3.addToLiquorItem.liquorItem.findIndex(function (x) {
                        return x.itemId === elem2.itemId;
                      });
                      _this3.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                      console.log("counter", index);
                      console.log(_this3.addToCart.carts);
                      console.log(_this3.addToLiquorItem.liquorItem);
                    } else {
                      console.log(_this3.addToCart.carts);
                      console.log(_this3.addToLiquorItem.liquorItem);
                    }
                  });
                });

                console.log(_this3.addToCart.carts);
                console.log(_this3.addToLiquorItem.liquorItem);
              }
            });
          }
        }, {
          key: "SoftSection",
          value: function SoftSection() {
            var _this4 = this;

            this.sections = "2";
            this.liquorshopid = localStorage.getItem("liquorshopid");
            this.userDetails.fetchOtherProductsByCategory("3", this.liquorshopid).then(function (res) {
              if (res["status"] == 1) {
                _this4.all_liquor_categorywise = res["products"];
                console.log(_this4.all_liquor_categorywise);

                _this4.pushDataIntoLiquorCATEGORYClass(res);

                console.log("<<<<<<<<<<<<>>>>>>>>>>>>>", _this4.addToLiquorItem.liquorItem);

                _this4.addToLiquorItem.liquorItem.forEach(function (elem1, index) {
                  elem1;

                  _this4.addToCart.carts.forEach(function (elem2, index) {
                    elem2;

                    if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                      console.log(_this4.addToLiquorItem.liquorItem);
                      index = _this4.addToLiquorItem.liquorItem.findIndex(function (x) {
                        return x.itemId === elem2.itemId;
                      });
                      _this4.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                      console.log("counter", index);
                      console.log(_this4.addToCart.carts);
                      console.log(_this4.addToLiquorItem.liquorItem);
                    } else {
                      console.log(_this4.addToCart.carts);
                      console.log(_this4.addToLiquorItem.liquorItem);
                    }
                  });
                });

                console.log(_this4.addToCart.carts);
                console.log(_this4.addToLiquorItem.liquorItem);
              }
            });
          }
        }, {
          key: "ComboSection",
          value: function ComboSection() {
            var _this5 = this;

            this.sections = "3";
            this.liquorshopid = localStorage.getItem("liquorshopid");
            this.userDetails.fetchOtherProductsByCategory("4", this.liquorshopid).then(function (res) {
              if (res["status"] == 1) {
                _this5.all_liquor_categorywise = res["products"];
                console.log(_this5.all_liquor_categorywise);

                _this5.pushDataIntoLiquorCATEGORYClass(res);

                console.log("<<<<<<<<<<<<>>>>>>>>>>>>>", _this5.addToLiquorItem.liquorItem);

                _this5.addToLiquorItem.liquorItem.forEach(function (elem1, index) {
                  elem1;

                  _this5.addToCart.carts.forEach(function (elem2, index) {
                    elem2;

                    if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                      console.log(_this5.addToLiquorItem.liquorItem);
                      index = _this5.addToLiquorItem.liquorItem.findIndex(function (x) {
                        return x.itemId === elem2.itemId;
                      });
                      _this5.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                      console.log("counter", index);
                      console.log(_this5.addToCart.carts);
                      console.log(_this5.addToLiquorItem.liquorItem);
                    } else {
                      console.log(_this5.addToCart.carts);
                      console.log(_this5.addToLiquorItem.liquorItem);
                    }
                  });
                });

                console.log(_this5.addToCart.carts);
                console.log(_this5.addToLiquorItem.liquorItem);
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.liquorshopid = localStorage.getItem("liquorshopid");
            this.userDetails.fetchCategories().then(function (res) {
              if (res["status"] == 1) {
                // this.all_categories = res["categories"];
                console.log(res);
              }
            });
            this.userDetails.fetchSubCategories("1").then(function (res) {
              if (res["status"] == 1) {
                _this6.liquorCategory = res["sub_categories"];
                _this6.scotch = _this6.liquorCategory[0].name;
                console.log(_this6.scotch);
              }
            });
            this.userDetails.fetchProducts("1", this.liquorshopid).then(function (res) {
              if (res["status"] == 1) {
                _this6.all_liquor_categorywise = res["products"];
                console.log(_this6.all_liquor_categorywise);
                _this6.sections = "0";

                _this6.pushDataIntoLiquorCATEGORYClass(res);

                console.log("<<<<<<<<<<<<>>>>>>>>>>>>>", _this6.addToLiquorItem.liquorItem);
              }
            });
            /*---------------------------------------------The End------------------------------------------------*/

            console.log(">>>", this.liquorshopid);
            this.userDetails.getLiquorData(this.liquorshopid).subscribe(function (data) {
              _this6.all_liquor = data;
              console.log(data);

              _this6.helper.dismissLoader();
            }, function (err) {
              console.log(err);

              _this6.helper.dismissLoader();
            });
            this.userDetails.getLiquorList().subscribe(function (data) {
              _this6.all_liquor_category = data;
              console.log(data);

              _this6.helper.dismissLoader();
            }, function (err) {
              console.log(err);

              _this6.helper.dismissLoader();
            });
            var uId = this.authService.getUserId();
            this.userDetails.getCartData(uId).subscribe(function (data) {
              _this6.cart_items = data;
              console.log(data);

              _this6.helper.dismissLoader();

              console.log(">>>>>>>", _this6.cart_items.length);
            }, function (err) {
              console.log(err);

              _this6.helper.dismissLoader();
            });
            this.userDetails.getAllliquorCategory().subscribe(function (data) {
              // this.liquorCategory = data;
              // console.log('liquorCategory',this.liquorCategory)
              _this6.helper.dismissLoader();
            }, function (err) {
              console.log(err);

              _this6.helper.dismissLoader();
            });
            this.userDetails.fetchFoodBycategory('allFood', this.liquorshopid).subscribe(function (data) {
              _this6.helper.dismissLoader(); // this.all_liquor_categorywise = data;  


              console.log('liquor Premium data.................', data);
            }, function (err) {
              console.log(err);

              _this6.helper.dismissLoader();
            });
            this.userDetails.fetchDataByCollectionId('liquorPrice', this.liquorshopid, "1611290839").subscribe(function (data) {
              _this6.helper.dismissLoader();

              _this6.all_liquor_categorywise = data; // this.all_liquor_categorywise.forEach(element => {
              //   this.all_liquor_categorywise[element].push({
              //     counterrrr:"500"
              //   })
              // });
              // this.final_items=this.all_liquor_categorywise;
              // console.log(this.final_items);

              console.log('liquor Premium data.................', _this6.all_liquor_categorywise);
            }, function (err) {
              console.log(err);

              _this6.helper.dismissLoader();
            });
          }
        }, {
          key: "liquorSegmentPremium",
          value: function liquorSegmentPremium(item) {
            var _this7 = this;

            this.scotch = item.categoryName;
            this.userDetails.fetchProducts(item.id, this.liquorshopid).then(function (res) {
              if (res["status"] == 1) {
                _this7.all_liquor_categorywise = res["products"];
                console.log(_this7.all_liquor_categorywise);

                _this7.pushDataIntoLiquorCATEGORYClass(res);

                _this7.addToLiquorItem.liquorItem.forEach(function (elem1, index) {
                  elem1;

                  _this7.addToCart.carts.forEach(function (elem2, index) {
                    elem2;

                    if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                      console.log(_this7.addToLiquorItem.liquorItem);
                      index = _this7.addToLiquorItem.liquorItem.findIndex(function (x) {
                        return x.itemId === elem2.itemId;
                      });
                      _this7.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                      console.log("counter", index);
                    } else {}
                  });
                });

                console.log(_this7.addToCart.carts);
                console.log(_this7.addToLiquorItem.liquorItem);
              }
            });
          }
        }, {
          key: "optionsliquorShopOwner",
          value: function optionsliquorShopOwner(value, index) {}
        }, {
          key: "checkout_btn",
          value: function checkout_btn() {
            var _this8 = this;

            var uId = this.authService.getUserId();
            localStorage.setItem("user_id", uId);
            this.userDetails.getCartData(uId).subscribe(function (data) {
              _this8.cart_items = data;
              console.log(data);
              console.log("arrLength>>", _this8.cart_items.length);

              _this8.helper.dismissLoader();
            }, function (err) {
              console.log(err);

              _this8.helper.dismissLoader();
            });

            if (this.cart_items.length == 0) {
              this.authService.addCart(uId, this.checkout_final, this.final_cart_price);
              this.checkout_final = [];
              this.navCtrl.navigateForward('/vaultcart');
            } else {
              this.userDetails.UpdateCartData('cartItem', this.cart_items[0].id, this.checkout_final, this.final_cart_price);
              this.navCtrl.navigateForward('/vaultcart');
            }
          }
        }, {
          key: "plusss",
          value: function plusss(item) {
            this.final_cart_value = 0;
            this.addToCart.carts = this.addToCart.carts.filter(function (_ref) {
              var itemId = _ref.itemId;
              return itemId !== item.itemId;
            }); // removing the Duplicasy or 0 selected from Local variable

            if (item.counter <= 0) {} else {
              item.counter -= 1;
              this.addToCart.carts.push({
                counter: item.counter,
                itemId: item.itemId,
                highest_price: item.highest_price,
                name: item.name,
                total: String(parseFloat(item.counter) * parseFloat(item.current_price)),
                // total:String( parseFloat(item.counter) * parseFloat(item.total)),
                current_price: item.current_price,
                lowest_price: item.lowest_price,
                category_id: item.category_id,
                shop_id: item.shop_id,
                sub_category_id: item.sub_category_id,
                description: item.description,
                food_total: String(parseFloat(item.counter) * parseFloat(item.food_price)),
                food_price: item.food_price
              });
            }

            var calculatePrice = 0;
            this.addToCart.carts.forEach(function (value) {
              if (value.category_id === "1") {
                calculatePrice += value.counter * parseFloat(value.current_price);
              } else if (value.category_id != "1") {
                calculatePrice += value.counter * parseFloat(value.food_price);
              }
            });
            this.final_cart_value = calculatePrice;
            console.log(">>>", this.addToCart.carts);
          }
        }, {
          key: "gotoCart",
          value: function gotoCart() {
            localStorage.setItem("totalCartValue", this.final_cart_value); // Put the object into storage

            localStorage.setItem('cartItem', JSON.stringify(this.addToCart.carts));
            this.navCtrl.navigateForward('/cart');
          }
        }, {
          key: "minusss",
          value: function minusss(item) {
            console.log(item);
            this.final_cart_value = 0;
            this.addToCart.carts = this.addToCart.carts.filter(function (_ref2) {
              var itemId = _ref2.itemId;
              return itemId !== item.itemId;
            }); // removing the Duplicasy or 0 selected from Local variable

            item.counter = parseInt(item.counter) + 1;
            this.addToCart.carts.push({
              counter: item.counter,
              itemId: item.itemId,
              highest_price: item.highest_price,
              name: item.name,
              total: String(parseFloat(item.counter) * parseFloat(item.current_price)),
              // total:String( parseFloat(item.counter) * parseFloat(item.total)),
              current_price: item.current_price,
              lowest_price: item.lowest_price,
              category_id: item.category_id,
              shop_id: item.shop_id,
              sub_category_id: item.sub_category_id,
              description: item.description,
              food_total: String(parseFloat(item.counter) * parseFloat(item.food_price)),
              food_price: item.food_price
            });
            var calculatePrice = 0; // if(this.sections==="0"){

            this.addToCart.carts.forEach(function (value) {
              if (value.category_id === "1") {
                calculatePrice += value.counter * parseFloat(value.current_price);
              } else if (value.category_id != "1") {
                calculatePrice += value.counter * parseFloat(value.food_price);
              }
            }); // }else{
            //   this.addToCart.carts.forEach(function (value) {
            //     calculatePrice += value.counter * parseFloat(value.food_price);
            //   });
            // }
            // this.addToCart.carts.forEach(function (value) {
            //   calculatePrice +=  parseFloat(value.food_total);
            // });

            this.final_cart_value = calculatePrice;
            console.log(this.addToCart.carts);
            console.log(this.addToLiquorItem.liquorItem);
            console.log(this.sections);
          }
        }, {
          key: "getthisCounter",
          value: function getthisCounter(item) {
            var value = this.addToCart.carts.find(function (_ref3) {
              var itemId = _ref3.itemId;
              return itemId === item.id;
            });

            if (value == undefined) {
              return 0;
            } else {
              return value.counter;
            }
          }
          /*----------------------------add to Cart Work----------------------------------------------- */

        }, {
          key: "addToCarts",
          value: function addToCarts(item) {
            var _this9 = this;

            console.log(item);

            if (this.UniqueDeviceids === "") {
              this.UniqueDeviceids = "12345678";
            }

            if (this.sections == "0") {
              if (item.counter == "0") {
                this.helper.presentToast("Sorry you didnot select any item");
              } else {
                var data = {
                  "device_id": localStorage.getItem('uniqueDeviceID'),
                  "product_id": item.itemId,
                  "product_name": item.name,
                  "price": item.current_price,
                  "quantity": item.counter,
                  "is_liquor": "1"
                };
                this.userDetails.addToCart(data).then(function (res) {
                  if (res["status"] == '1') {
                    _this9.helper.presentToast(res["message"]);

                    console.log(res);
                  }
                });
              }
            } else {
              if (item.counter == "0") {
                this.helper.presentToast("Sorry you didnot select any item");
              } else {
                var _data = {
                  "device_id": localStorage.getItem('uniqueDeviceID'),
                  "product_id": item.itemId,
                  "product_name": item.name,
                  "price": item.food_price,
                  "quantity": item.counter,
                  "is_liquor": "0"
                };
                this.userDetails.addToCart(_data).then(function (res) {
                  if (res["status"] == '1') {
                    _this9.helper.presentToast(res["message"]);

                    console.log(res);
                  }
                });
              }
            }
          }
          /**************************Liquor Category and Liquor Item Work *******************/

        }, {
          key: "pushDataIntoLiquorCATEGORYClass",
          value: function pushDataIntoLiquorCATEGORYClass(response) {
            var _this10 = this;

            this.addToLiquorItem.liquorItem = []; // doing empty the Interface Class

            this.all_liquor = response.products;
            console.log(this.all_liquor);
            this.all_liquor.forEach(function (categoryResponse) {
              if (_this10.all_liquor.length > 0) {
                var liquorItem = response; // pusing the data in to FoodCategory Interface

                _this10.addToLiquorItem.liquorItem.push({
                  counter: 0,
                  itemId: categoryResponse.id,
                  highest_price: categoryResponse.highest_price,
                  name: categoryResponse.name,
                  total: categoryResponse.total,
                  current_price: categoryResponse.current_price,
                  lowest_price: categoryResponse.lowest_price,
                  category_id: categoryResponse.category_id,
                  shop_id: categoryResponse.shop_id,
                  sub_category_id: categoryResponse.sub_category_id,
                  description: categoryResponse.description,
                  food_total: categoryResponse.food_total,
                  food_price: categoryResponse.price
                });
              }
            });
            console.log("addToLiquorItem", this.addToLiquorItem.liquorItem);
          }
          /**************************Food Category and Food Item Work *******************/
          // getFoodCategoryandFoodItem(){
          //   let shopId = localStorage.getItem('liquorshopid');
          //   this.userDetails.getFoodCategory(shopId).subscribe(
          //     res => {
          //       this.pushDataIntoFOODCATEGORYClass(res);
          //     },
          //     err => {console.log(err)},
          //   )
          // }

        }, {
          key: "pushDataIntoFOODCATEGORYClass",
          value: function pushDataIntoFOODCATEGORYClass(response) {
            var _this11 = this;

            this.addToFoodItem.foodItem = []; // doing empty the Interface Class

            response.forEach(function (categoryResponse) {
              _this11.addToFoodItem.foodItem.push({
                id: categoryResponse.id,
                category_id: categoryResponse.category_id,
                category_name: categoryResponse.name,
                products: categoryResponse.products
              });
            });
            console.log(this.addToFoodItem.foodItem);
          }
        }, {
          key: "getFoodQuantity",
          value: function getFoodQuantity(foodItem) {
            var value = this.addToFoodCart.foodCart.find(function (_ref4) {
              var itemId = _ref4.itemId;
              return itemId === foodItem.id;
            });

            if (value == undefined) {
              return 0;
            } else {
              return value.counter;
            }
          }
        }, {
          key: "foodItemPlus",
          value: function foodItemPlus(foodItem, category) {
            var shopId = localStorage.getItem('liquorshopid');
            this.foodCartValue = 0; // finding the main Cart 

            var value = this.addToFoodCart.foodCart.find(function (_ref5) {
              var itemId = _ref5.itemId;
              return itemId === foodItem.itemId;
            });

            if (value == undefined) {
              this.addToFoodCart.foodCart.push({
                counter: foodItem.counter,
                itemId: foodItem.itemId,
                highest_price: foodItem.highest_price,
                name: foodItem.name,
                total: String(parseFloat(foodItem.counter) * parseFloat(foodItem.current_price)),
                price: foodItem.price,
                lowest_price: foodItem.lowest_price,
                category_id: foodItem.category_id,
                shop_id: foodItem.shop_id,
                sub_category_id: foodItem.sub_category_id
              });
            } else {
              value.counter = (parseInt(String(value.counter)) - 1).toString();

              if (String(value.counter) == '0') {
                // removing the FoodCart
                this.addToFoodCart.foodCart = this.addToFoodCart.foodCart.filter(function (_ref6) {
                  var itemId = _ref6.itemId;
                  return itemId !== foodItem.itemId;
                });
              }
            }

            var calculatePrice = 0;
            this.addToFoodCart.foodCart.forEach(function (value) {
              calculatePrice += parseInt(String(value.counter)) * parseFloat(String(value.price));
            });
            this.foodCartValue = calculatePrice;
            console.log(this.addToFoodCart.foodCart);
          }
        }, {
          key: "foodItemMinus",
          value: function foodItemMinus(foodItem, category) {
            var shopId = localStorage.getItem('liquorshopid');
            this.foodCartValue = 0; // finding the main Cart 

            console.log(this.addToFoodCart.foodCart);
            console.log(foodItem);
            var value = this.addToFoodCart.foodCart.find(function (_ref7) {
              var itemId = _ref7.itemId;
              return itemId === foodItem.id;
            });

            if (value == undefined) {
              this.addToFoodCart.foodCart.push({
                counter: '1',
                itemId: foodItem.id,
                highest_price: foodItem.highest_price,
                name: foodItem.name,
                total: String(parseFloat(foodItem.counter) * parseFloat(foodItem.current_price)),
                price: foodItem.price,
                lowest_price: foodItem.lowest_price,
                category_id: foodItem.category_id,
                shop_id: foodItem.shop_id,
                sub_category_id: foodItem.sub_category_id
              });
            } else {
              value.counter = (parseInt(value.counter) + 1).toString();
            } // this.addToFoodCart.foodCart = this.addToFoodCart.foodCart.filter(({ foodItemId }) => foodItemId !== foodItem.id); // removing the Duplicasy or 0 selected from Local variable


            var calculatePrice = 0;
            this.addToFoodCart.foodCart.forEach(function (value) {
              calculatePrice += parseInt(value.counter) * parseFloat(value.price);
            });
            this.foodCartValue = calculatePrice;
            console.log(this.addToFoodCart.foodCart);
          }
        }, {
          key: "gotoFoodCart",
          value: function gotoFoodCart() {
            if (this.addToFoodCart.foodCart.length > 0) {
              // total Item in cart
              // console.log('Total Item in Cart',this.addToFoodCart.foodCart);
              localStorage.setItem('foodItemCart', JSON.stringify(this.addToFoodCart.foodCart));

              this._router.navigate(['/food/cart']);
            } else {
              this.helper.showErrorCustom('Please select any Item');
            }
          }
        }]);

        return OutlethomePage;
      }();

      OutlethomePage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__["UniqueDeviceID"]
        }];
      };

      OutlethomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-outlethome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./outlethome.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/outlethome/outlethome.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./outlethome.page.scss */
        "./src/app/outlethome/outlethome.page.scss"))["default"]]
      })], OutlethomePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=outlethome-outlethome-module-es5.js.map