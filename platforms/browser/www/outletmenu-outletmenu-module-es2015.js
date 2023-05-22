(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outletmenu-outletmenu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/outletmenu/outletmenu.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outletmenu/outletmenu.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <!-- <ion-title>SELECTED LOCATION</ion-title> -->\n    <ion-title>{{this.shopName}}</ion-title>\n    <ion-icon slot=\"end\" class=\"search_item\" name=\"cart-outline\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div>\n  <ion-segment [(ngModel)]=\"drinks\" scrollable=\"true\">\n    <ion-segment-button value=\"liquor\" (click)=\"LiquorSections()\">\n      LIQUOR\n    </ion-segment-button>\n    <ion-segment-button value=\"food\" (click)=\"FoodSection()\">\n      FOOD\n    </ion-segment-button>\n    <ion-segment-button value=\"soft-beverage\" (click)=\"SoftSection()\">\n      SOFT BEVERAGE\n    </ion-segment-button>\n    <ion-segment-button value=\"combo\" (click)=\"ComboSection()\">\n      COMBO\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div [ngSwitch]=\"drinks\">\n  <ion-list *ngSwitchCase=\"'liquor'\" class=\"segment_2\">\n    <!-- <div padding>\n      <ion-segment [(ngModel)]=\"scotch\">\n        <ion-segment-button  *ngFor=\"let item of liquorCategory\" value=\"{{item.name}}\" (click)=\"liquorSegmentPremium(item)\" >\n         <img src=\"{{item.image}}\">\n        <ion-button class=\"\" shape=\"round\">{{item.name}}</ion-button>\n        </ion-segment-button>\n      </ion-segment>\n    </div> -->\n      <ion-slides [options]=\"slideOpts\">\n        <!-- <ion-slide *ngFor=\"let item of liquorCategory\" value=\"{{item.name}}\" (click)=\"liquorSegmentPremium(item)\"> -->\n        <ion-slide *ngFor=\"let item of liquorCategory\" (click)=\"liquorSegmentPremium(item)\">\n          <ion-col>\n            <img src=\"{{item.image}}\">\n            <ion-button class=\"\" shape=\"round\">{{item.name}}</ion-button>\n          </ion-col>\n        </ion-slide>\n      </ion-slides>\n\n    <div [ngSwitch]=\"scotch\">\n    <ion-list *ngSwitchCase=this.scotch class=\"drink_items\">\n      <ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n      <ion-grid>\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"12\">\n            <div class=\"drink_content fav_sec\">\n              <h3>{{item.name}}</h3>\n              <span (click)=\"addToFavrite(item.itemId,item.is_fav)\"  *ngIf=\"sections =='0'\">\n                <ion-icon name=\"heart-outline\" *ngIf=\"item.is_fav==0\"></ion-icon>\n                <ion-icon name=\"heart\" class=\"active\" *ngIf=\"item.is_fav==1\"></ion-icon>\n              </span> \n            </div>\n          </ion-col>\n          <ion-col size=\"8\">\n            <div class=\"drink_content\">\n              <ul>\n                <li>HIGH: <span class=\"price_hike d-block\"><span class=\"currency\">$</span> {{item.highest_price | number : '.2-2'}} <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#5ba829\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-up\"><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline></svg></span></li>\n                <li>LOW: <span class=\"price_down d-block\"><span class=\"currency\">$</span> {{item.lowest_price | number : '.2-2'}} <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#da1c33\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-down\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline></svg></span></li>\n                <li>NOW: <span class=\"price_now d-block\"><span class=\"currency\">$</span> {{item.current_price | number : '.2-2'}}</span></li>\n              </ul>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"quantity\">\n              <div (click)=\"plusss(item)\">\n                <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n              </div>\n              <!-- <p>{{getthisCounter(item)}}</p> -->\n              <p>{{item.counter}}</p>\n              <div (click)=\"minusss(item)\">\n                <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n              </div>\n            </div>\n            <span (click)=\"addToCompare(item)\"  *ngIf=\"sections =='0'\" class=\"cmop\">\n              <img src=\"assets/compare_btn.png\">\n            </span>\n          <!-- <ion-button small class=\"conpare_btn\" (click)=\"addToCompare(item)\"  *ngIf=\"sections =='0'\"><img src=\"assets/compare_btn.png\"></ion-button>  -->\n          \n          </ion-col>\n          <!-- <ion-col size=\"2\" class=\"ion-no-padding cardAdd\">\n            \n            <ion-icon name=\"bag-add\"></ion-icon>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n      </ion-item>\n\n    </ion-list>\n    </div>\n  </ion-list>\n\n  <ion-list *ngSwitchCase=\"'food'\" class=\"ion-no-padding\">\n    <!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n      <!-- <div class=\"title_bar\">\n        <h2 class=\"title\">{{category.category_name}}</h2>\n      </div> -->\n      <div class=\"drink_items\">\n        <ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"8\" class=\"pl-0\">\n                <div class=\"drink_content\">\n                  <h3 class=\"no-margin\">{{item.name}}</h3>\n                  <p class=\"net\"><span class=\"currency\">$</span> {{item.food_price | number : '.2-2'}}</p>\n                  <ul>\n                    <li>{{item.description}}</li>\n                  </ul>\n                </div>\n              </ion-col>\n              <ion-col size=\"4\">\n                <div class=\"quantity\">\n                  <div (click)=\"plusss(item)\">\n                    <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                  </div>\n                  <!-- <p>{{getthisCounter(item)}}</p> -->\n                  <p>{{item.counter}}</p>\n    \n                  <div (click)=\"minusss(item)\">\n                    <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                  </div>\n                </div>\n                <ion-button small class=\"conpare_btn\" (click)=\"addToCompare(item)\" *ngIf=\"sections =='0'\"><img src=\"assets/compare_btn.png\"></ion-button> \n                </ion-col>\n                <!-- <ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCompare(item)\">\n                  <img src=\"assets/cart.png\" style=\"padding-top: 5px;\">\n                  <ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n                </ion-col> -->\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n      <!-- </div> -->\n    </div>\n  </ion-list>\n\n  <ion-list *ngSwitchCase=\"'soft-beverage'\" class=\"ion-no-padding\">\n    <!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n      <!-- <div class=\"title_bar\">\n        <h2 class=\"title\">{{category.category_name}}</h2>\n      </div> -->\n      <div class=\"drink_items\">\n        <ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"8\" class=\"pl-0\">\n                <div class=\"drink_content\">\n                  <h3 class=\"no-margin\">{{item.name}}</h3>\n                  <p class=\"net\"><span class=\"currency\">$</span> {{item.food_price | number : '.2-2'}}</p>\n                  <ul>\n                    <li>{{item.description}}</li>\n                  </ul>\n                </div>\n              </ion-col>\n              <ion-col size=\"4\">\n                <div class=\"quantity\">\n                  <div (click)=\"plusss(item)\">\n                    <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                  </div>\n                  <!-- <p>{{getthisCounter(item)}}</p> -->\n                  <p>{{item.counter}}</p>\n    \n                  <div (click)=\"minusss(item)\">\n                    <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                  </div>\n                </div>\n                <ion-button small class=\"conpare_btn\" (click)=\"addToCompare(item)\" *ngIf=\"sections =='0'\"><img src=\"assets/compare_btn.png\"></ion-button> \n                </ion-col>\n                <!-- <ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCompare(item)\">\n                  <img src=\"assets/cart.png\" style=\"padding-top: 5px;\">\n                  <ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n                </ion-col> -->\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n      <!-- </div> -->\n    </div>\n  </ion-list>\n\n  <ion-list *ngSwitchCase=\"'combo'\" class=\"ion-no-padding\">\n    <!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n      <!-- <div class=\"title_bar\">\n        <h2 class=\"title\">{{category.category_name}}</h2>\n      </div> -->\n      <div class=\"drink_items\">\n        <ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"8\" class=\"pl-0\">\n                <div class=\"drink_content\">\n                  <h3 class=\"no-margin\">{{item.name}}</h3>\n                  <p class=\"net\"><span class=\"currency\">$</span> {{item.food_price | number : '.2-2'}}</p>\n                  <ul>\n                    <li>{{item.description}}</li>\n                  </ul>\n                </div>\n              </ion-col>\n              <ion-col size=\"4\">\n                <div class=\"quantity\">\n                  <div (click)=\"plusss(item)\">\n                    <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                  </div>\n                  <!-- <p>{{getthisCounter(item)}}</p> -->\n                  <p>{{item.counter}}</p>\n    \n                  <div (click)=\"minusss(item)\">\n                    <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                  </div>\n                </div>\n                <ion-button small class=\"conpare_btn\" (click)=\"addToCompare(item)\" *ngIf=\"sections =='0'\"><img src=\"assets/compare_btn.png\"></ion-button> \n                </ion-col>\n                <!-- <ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCompare(item)\">\n                  <img src=\"assets/cart.png\" style=\"padding-top: 5px;\">\n                  <ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n                </ion-col> -->\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n\n      <!-- </div> -->\n    </div>\n  </ion-list>\n</div>\n</ion-content>\n\n<div [ngSwitch]=\"drinks\">\n<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'liquor'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"assets/cart.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\"><span class=\"currency\">$</span> {{final_cart_value | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\" (click)=\"gotoCart()\">\n      <p>View Cart</p>\n      <img src=\"assets/arrow-right.png\">\n    </div>\n  </div>\n</ion-footer>\n\n<!-- <ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'food'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"assets/cart.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToFoodCart.foodCart.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\">₹ {{foodCartValue | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\" (click)=\"gotoFoodCart()\">\n      <p>View Cart</p>\n      <img src=\"assets/arrow-right.png\">\n    </div>\n  </div>\n</ion-footer> -->\n<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'food'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"assets/cart.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\"><span class=\"currency\">$</span> {{final_cart_value | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\" (click)=\"gotoCart()\">\n      <p>View Cart</p>\n      <img src=\"assets/arrow-right.png\">\n    </div>\n  </div>\n</ion-footer>\n<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'soft-beverage'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"assets/cart.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\"><span class=\"currency\">$</span> {{final_cart_value | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\" (click)=\"gotoCart()\">\n      <p>View Cart</p>\n      <img src=\"assets/arrow-right.png\">\n    </div>\n  </div>\n</ion-footer>\n<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'combo'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"assets/cart.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\"><span class=\"currency\">$</span> {{final_cart_value | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\" (click)=\"gotoCart()\">\n      <p>View Cart</p>\n      <img src=\"assets/arrow-right.png\">\n    </div>\n  </div>\n</ion-footer>\n</div>\n\n");

/***/ }),

/***/ "./src/app/outletmenu/outletmenu-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/outletmenu/outletmenu-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: OutletmenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletmenuPageRoutingModule", function() { return OutletmenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _outletmenu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outletmenu.page */ "./src/app/outletmenu/outletmenu.page.ts");




const routes = [
    {
        path: '',
        component: _outletmenu_page__WEBPACK_IMPORTED_MODULE_3__["OutletmenuPage"]
    }
];
let OutletmenuPageRoutingModule = class OutletmenuPageRoutingModule {
};
OutletmenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutletmenuPageRoutingModule);



/***/ }),

/***/ "./src/app/outletmenu/outletmenu.module.ts":
/*!*************************************************!*\
  !*** ./src/app/outletmenu/outletmenu.module.ts ***!
  \*************************************************/
/*! exports provided: OutletmenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletmenuPageModule", function() { return OutletmenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _outletmenu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outletmenu-routing.module */ "./src/app/outletmenu/outletmenu-routing.module.ts");
/* harmony import */ var _outletmenu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outletmenu.page */ "./src/app/outletmenu/outletmenu.page.ts");







let OutletmenuPageModule = class OutletmenuPageModule {
};
OutletmenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outletmenu_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletmenuPageRoutingModule"]
        ],
        declarations: [_outletmenu_page__WEBPACK_IMPORTED_MODULE_6__["OutletmenuPage"]]
    })
], OutletmenuPageModule);



/***/ }),

/***/ "./src/app/outletmenu/outletmenu.page.scss":
/*!*************************************************!*\
  !*** ./src/app/outletmenu/outletmenu.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .button.conpare_btn {\n  --background: #fff;\n  --box-shadow: none;\n  border: 2px solid #dcc88d;\n  width: 28px;\n  height: 28px;\n  border-radius: 3px;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n}\nion-content .button.conpare_btn img {\n  max-width: 20px;\n}\nion-content .quantity {\n  display: inline-flex;\n  vertical-align: top;\n}\nion-content .drink_items {\n  padding: 5px;\n}\nion-content .drink_items ion-grid {\n  --ion-grid-padding: 0;\n}\n.fav_sec {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.fav_sec .active {\n  color: #dcc88d;\n}\nion-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 117px;\n  height: 24px;\n  --background: #212121;\n  --background-activated: #212121;\n  font-family: \"Outfit\" !important;\n  color: #dcc88d;\n  font-size: 11px;\n  letter-spacing: -0.01px;\n  --box-shadow: none;\n  --padding-top: 3px;\n  font-weight: 900;\n  text-transform: capitalize;\n}\nion-slides {\n  background-color: #f9f9f9;\n  padding: 10px 0;\n}\n.cmop {\n  position: absolute;\n  top: 5px;\n  width: 30px;\n  padding: 5px;\n  border: 2px solid #d5c289;\n  height: 28px;\n  background: #dcc88d;\n}\n.swiper-slide img {\n  width: auto;\n  max-width: 90px;\n  height: auto;\n  max-height: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bGV0bWVudS9vdXRsZXRtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUU7RUFDQyxlQUFBO0FBQUg7QUFHQztFQUNDLG9CQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdDO0VBQ0MsWUFBQTtBQURGO0FBR0U7RUFDQyxxQkFBQTtBQURIO0FBS0E7RUFDQyxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUZEO0FBR0M7RUFDQyxjQUFBO0FBREY7QUFLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFGSjtBQUlBO0VBQ0MseUJBQUE7RUFDRyxlQUFBO0FBREo7QUFHQTtFQUNDLGtCQUFBO0VBQ0csUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBQUoiLCJmaWxlIjoic3JjL2FwcC9vdXRsZXRtZW51L291dGxldG1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC5idXR0b24uY29ucGFyZV9idG4ge1xyXG5cdFx0LS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0LS1ib3gtc2hhZG93OiBub25lO1xyXG5cdFx0Ym9yZGVyOiAycHggc29saWQgI2RjYzg4ZDtcclxuXHRcdHdpZHRoOiAyOHB4O1xyXG5cdFx0aGVpZ2h0OiAyOHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG5cdFx0LS1wYWRkaW5nLWVuZDogMDtcclxuXHRcdG1hcmdpbjogMDtcclxuXHJcblx0XHRpbWcge1xyXG5cdFx0XHRtYXgtd2lkdGg6IDIwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5xdWFudGl0eSB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuXHRcdHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0fVxyXG5cdC5kcmlua19pdGVtcyB7XHJcblx0XHRwYWRkaW5nOiA1cHg7XHJcblxyXG5cdFx0aW9uLWdyaWQge1xyXG5cdFx0XHQtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5mYXZfc2Vje1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0LmFjdGl2ZXtcclxuXHRcdGNvbG9yOiAjZGNjODhkO1xyXG5cdH1cclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDExN3B4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMjEyMTIxO1xyXG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzIxMjEyMTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk91dGZpdFwiICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2RjYzg4ZDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMXB4O1xyXG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogM3B4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbmlvbi1zbGlkZXN7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uY21vcHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2Q1YzI4OTtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6ICNkY2M4OGQ7XHJcbn1cclxuXHJcbi5zd2lwZXItc2xpZGUgaW1nIHtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA5MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogOTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/outletmenu/outletmenu.page.ts":
/*!***********************************************!*\
  !*** ./src/app/outletmenu/outletmenu.page.ts ***!
  \***********************************************/
/*! exports provided: OutletmenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletmenuPage", function() { return OutletmenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");






let OutletmenuPage = class OutletmenuPage {
    constructor(navCtrl, alertCtrl, helper, plt, _router, commonProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.plt = plt;
        this._router = _router;
        this.commonProvider = commonProvider;
        this.device_id = '';
        this.shopName = '';
        this.liquorCategory = [];
        this.liquorshopid = '';
        this.sections = '';
        this.drinks = '';
        this.all_liquor = [];
        this.cartProductsNames = '';
        this.cartProductPrices = '';
        this.cartIsLiquors = '';
        this.cartQuantities = '';
        this.cartProductIds = '';
        this.scotch = '';
        this.userId = '';
        this.slideOpts = {
            slidesPerView: 3,
            spaceBetween: 10,
            watchSlidesProgress: true,
            initialSlide: 1,
            centeredSlides: true,
            loop: false,
        };
        this.final_cart_value = 0;
        // this.device_id = localStorage.getItem("uniqueDeviceID");
        // this.addToCart = { carts: [] };
        // this.addToLiquorItem = { liquorItem: [] }; // Store the Liquor DATA
        // // this.addToLiquorCart = {liquorCart : []}; // add To Food Cart
        // this.shopName = JSON.parse(localStorage.getItem('shopDetails')).name;
    }
    ngOnInit() {
        this.device_id = localStorage.getItem("uniqueDeviceID");
        this.addToCart = { carts: [] };
        this.addToLiquorItem = { liquorItem: [] }; // Store the Liquor DATA
        // this.addToLiquorCart = {liquorCart : []}; // add To Food Cart
        this.shopName = JSON.parse(localStorage.getItem('shopDetails')).name;
        this.userId = localStorage.getItem("user_id");
        this.drinks = 'liquor';
        this.commonProvider.fetchSubCategories("1").then((res) => {
            if (res["status"] == 1) {
                this.liquorCategory = res["sub_categories"];
            }
        });
        this.commonProvider.clearCart(this.device_id).then((res) => {
            if (res["status"] == 1) {
            }
        });
        this.LiquorSections();
    }
    /**
     * This method is for loading food section products
     * @param category_id
     */
    FoodSection() {
        this.sections = "1";
        this.liquorshopid = localStorage.getItem("liquorshopid");
        this.commonProvider.fetchOtherProductsByCategory("2", this.liquorshopid, this.userId).then((res) => {
            if (res["status"] == 1) {
                // this.all_liquor_categorywise = res["products"];
                console.log(res["products"]);
                this.pushDataIntoLiquorCATEGORYClass(res);
                this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
                    elem1;
                    this.addToCart.carts.forEach((elem2, index) => {
                        elem2;
                        if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                            console.log(this.addToLiquorItem.liquorItem);
                            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
                            this.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                        }
                    });
                });
            }
        });
    }
    /**
     * This method is for loading liquor section products
     * @param category_id
     */
    LiquorSections() {
        this.drinks = 'liquor';
        this.sections = "0";
        this.liquorshopid = localStorage.getItem("liquorshopid");
        this.commonProvider.fetchOtherProductsByCategory("1", this.liquorshopid, this.userId).then((res) => {
            if (res["status"] == 1) {
                this.pushDataIntoLiquorCATEGORYClass(res);
                this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
                    elem1;
                    this.addToCart.carts.forEach((elem2, index) => {
                        elem2;
                        if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                            console.log(this.addToLiquorItem.liquorItem);
                            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
                            this.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                        }
                    });
                });
            }
        });
    }
    /**
     * This method is for loading soft bevarage section products
     * @param category_id
     */
    SoftSection() {
        this.sections = "2";
        this.liquorshopid = localStorage.getItem("liquorshopid");
        this.commonProvider.fetchOtherProductsByCategory("3", this.liquorshopid, this.userId).then((res) => {
            if (res["status"] == 1) {
                this.pushDataIntoLiquorCATEGORYClass(res);
                this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
                    elem1;
                    this.addToCart.carts.forEach((elem2, index) => {
                        elem2;
                        if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                            console.log(this.addToLiquorItem.liquorItem);
                            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
                            this.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                        }
                    });
                });
            }
        });
    }
    /**
     * This method is for loading combo section products
     * @param category_id
     */
    ComboSection() {
        this.sections = "3";
        this.liquorshopid = localStorage.getItem("liquorshopid");
        this.commonProvider.fetchOtherProductsByCategory("4", this.liquorshopid, this.userId).then((res) => {
            if (res["status"] == 1) {
                this.pushDataIntoLiquorCATEGORYClass(res);
                this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
                    elem1;
                    this.addToCart.carts.forEach((elem2, index) => {
                        elem2;
                        if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                            console.log(this.addToLiquorItem.liquorItem);
                            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
                            this.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                        }
                    });
                });
            }
        });
    }
    /**
     * This method is for adding item to cart
     * @param item
     */
    plusss(item) {
        console.log('item', item);
        this.final_cart_value = 0;
        this.addToCart.carts = this.addToCart.carts.filter(({ itemId }) => itemId !== item.itemId); // removing the Duplicasy or 0 selected from Local variable
        if (item.counter <= 0) { }
        else {
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
                food_price: item.food_price,
                is_fav: item.is_fav
            });
        }
        let calculatePrice = 0;
        this.addToCart.carts.forEach(function (value) {
            if (value.category_id === "1") {
                calculatePrice += value.counter * parseFloat(value.current_price);
            }
            else if (value.category_id != "1") {
                calculatePrice += value.counter * parseFloat(value.food_price);
            }
        });
        this.final_cart_value = calculatePrice;
        console.log(">>>", this.addToCart.carts);
    }
    /**
     * This method is for removing item from cart
     * @param item
     */
    minusss(item) {
        console.log(item);
        this.final_cart_value = 0;
        this.addToCart.carts = this.addToCart.carts.filter(({ itemId }) => itemId !== item.itemId); // removing the Duplicasy or 0 selected from Local variable
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
            food_price: item.food_price,
            is_fav: item.is_fav
        });
        let calculatePrice = 0;
        // if(this.sections==="0"){
        this.addToCart.carts.forEach(function (value) {
            if (value.category_id === "1") {
                calculatePrice += value.counter * parseFloat(value.current_price);
            }
            else if (value.category_id != "1") {
                calculatePrice += value.counter * parseFloat(value.food_price);
            }
        });
        this.final_cart_value = calculatePrice;
    }
    liquorSegmentPremium(item) {
        //this.scotch=item.categoryName;
        this.commonProvider.fetchProducts(item.id, this.liquorshopid).then((res) => {
            if (res["status"] == 1) {
                //this.all_liquor_categorywise = res["products"];
                //console.log(this.all_liquor_categorywise);
                this.pushDataIntoLiquorCATEGORYClass(res);
                this.addToLiquorItem.liquorItem.forEach((elem1, index) => {
                    elem1;
                    this.addToCart.carts.forEach((elem2, index) => {
                        elem2;
                        if (elem1.itemId === elem2.itemId && elem1.category_id === elem2.category_id) {
                            console.log(this.addToLiquorItem.liquorItem);
                            index = this.addToLiquorItem.liquorItem.findIndex(x => x.itemId === elem2.itemId);
                            this.addToLiquorItem.liquorItem[index].counter = elem2.counter;
                            console.log("counter", index);
                        }
                        else {
                        }
                    });
                });
            }
        });
    }
    /**
     * This method is for navigate to cart page
     */
    gotoCart() {
        this.cartProductIds = '';
        this.cartProductsNames = '';
        this.cartProductPrices = '';
        this.cartQuantities = '';
        this.cartIsLiquors = '';
        localStorage.setItem("totalCartValue", this.final_cart_value);
        // Put the object into storage
        console.log(this.addToCart.carts);
        localStorage.setItem('cartItem', JSON.stringify(this.addToCart.carts));
        for (let i = 0; i < this.addToCart.carts.length; i++) {
            let is_liquor = '0';
            if (this.addToCart.carts[i].category_id == '1') {
                is_liquor = '1';
            }
            else {
                is_liquor = '0';
            }
            if (this.cartProductsNames != '') {
                this.cartProductsNames += '*' + this.addToCart.carts[i].name;
            }
            else {
                this.cartProductsNames += this.addToCart.carts[i].name;
            }
            if (this.cartProductIds != '') {
                this.cartProductIds += '*' + this.addToCart.carts[i].itemId;
            }
            else {
                this.cartProductIds += this.addToCart.carts[i].itemId;
            }
            if (this.cartQuantities != '') {
                this.cartQuantities += '*' + this.addToCart.carts[i].counter;
            }
            else {
                this.cartQuantities += this.addToCart.carts[i].counter;
            }
            if (this.cartProductPrices != '') {
                this.cartProductPrices += '*' + this.addToCart.carts[i].current_price;
            }
            else {
                this.cartProductPrices += this.addToCart.carts[i].current_price;
            }
            if (this.cartIsLiquors != '') {
                this.cartIsLiquors += '*' + is_liquor;
            }
            else {
                this.cartIsLiquors += is_liquor;
            }
        }
        console.log('cart', this.cartQuantities);
        if (this.cartQuantities == '') {
            this.helper.presentAlert('Please add a item');
        }
        else {
            console.log("cartProductsNames>>" + this.cartProductsNames);
            let data = {
                "device_id": this.device_id,
                "cartProductIds": this.cartProductIds,
                "cartProductsNames": this.cartProductsNames,
                "cartProductPrices": this.cartProductPrices,
                "cartQuantities": this.cartQuantities,
                "cartIsLiquors": this.cartIsLiquors,
            };
            this.commonProvider.addMultipleCartItems(data).then((res) => {
                if (res["status"] == '1') {
                    this.helper.suucessAlert(res["message"]);
                    this.navCtrl.navigateForward('/cart');
                }
                else {
                    this.helper.presentAlert(res["message"]);
                }
            });
        }
        //this.navCtrl.navigateForward('/cart');
    }
    addToCompare(item) {
        localStorage.setItem("product_name", item.name);
        this.navCtrl.navigateForward('/compare');
    }
    /**
     * This method is for add favorite product
     * @param productId
     */
    addToFavrite(productId, is_fav) {
        if (is_fav == 0) {
            this.commonProvider.favouriteProducts(this.userId, productId).then(res => {
                console.log(res);
                if (res["status"] == '1') {
                    this.helper.dismissLoader();
                    this.LiquorSections();
                }
            });
        }
        else {
            /**
            * call api to unsave product
            */
            this.commonProvider.deleteFrmfavouriteProducts(this.userId, productId).then(res => {
                if (res["status"] == '1') {
                    this.LiquorSections();
                }
                else {
                }
            });
        }
    }
    /**
     * This method is for storing product data and arrange the array
     * @param response
     */
    pushDataIntoLiquorCATEGORYClass(response) {
        this.addToLiquorItem.liquorItem = []; // doing empty the Interface Class
        this.all_liquor = response.products;
        console.log(this.all_liquor);
        this.all_liquor.forEach((categoryResponse) => {
            if (this.all_liquor.length > 0) {
                let liquorItem = response;
                // pusing the data in to FoodCategory Interface
                this.addToLiquorItem.liquorItem.push({
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
                    food_price: categoryResponse.price,
                    is_fav: categoryResponse.is_fav
                });
            }
        });
        console.log("addToLiquorItem", this.addToLiquorItem.liquorItem);
    }
};
OutletmenuPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonProvider"] }
];
OutletmenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outletmenu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outletmenu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/outletmenu/outletmenu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./outletmenu.page.scss */ "./src/app/outletmenu/outletmenu.page.scss")).default]
    })
], OutletmenuPage);



/***/ })

}]);
//# sourceMappingURL=outletmenu-outletmenu-module-es2015.js.map