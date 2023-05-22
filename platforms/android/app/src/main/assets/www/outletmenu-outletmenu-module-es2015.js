(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outletmenu-outletmenu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/outletmenu/outletmenu.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outletmenu/outletmenu.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t  <ion-back-button icon=\"chevron-back-outline\" text=\"\" defaultHref=\"\"></ion-back-button>\n\t\t</ion-buttons>\n    <ion-title>{{this.shopName}}</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"cart()\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-bag\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path></svg>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\t  \n\t</ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n<div>\n  <ion-segment [(ngModel)]=\"drinks\" scrollable=\"true\">\n    <ion-segment-button value=\"liquor\" (click)=\"LiquorSections()\">\n      LIQUOR\n    </ion-segment-button>\n    <ion-segment-button value=\"food\" (click)=\"FoodSection()\">\n      FOOD\n    </ion-segment-button>\n    <ion-segment-button value=\"soft-beverage\" (click)=\"SoftSection()\">\n      SOFT BEVERAGE\n    </ion-segment-button>\n    <ion-segment-button value=\"combo\" (click)=\"ComboSection()\">\n      COMBO\n    </ion-segment-button>\n  </ion-segment>\n</div>\n\n<div [ngSwitch]=\"drinks\">\n  <ion-list *ngSwitchCase=\"'liquor'\" class=\"segment_2\">\n    <!-- <div padding>\n      <ion-segment [(ngModel)]=\"scotch\">\n        <ion-segment-button  *ngFor=\"let item of liquorCategory\" value=\"{{item.name}}\" (click)=\"liquorSegmentPremium(item)\" >\n         <img src=\"{{item.image}}\">\n        <ion-button class=\"\" shape=\"round\">{{item.name}}</ion-button>\n        </ion-segment-button>\n      </ion-segment>\n    </div> -->\n      <ion-slides class=\"favourite_items\" [options]=\"slideOpts\">\n        <!-- <ion-slide *ngFor=\"let item of liquorCategory\" value=\"{{item.name}}\" (click)=\"liquorSegmentPremium(item)\"> -->\n        <ion-slide *ngFor=\"let item of liquorCategory\" (click)=\"liquorSegmentPremium(item)\">\n          <figure style=\"background-color: #5b352e;\">\n            <img src=\"{{item.image}}\">\n            <span>{{item.name}}</span>\n          </figure>\n        </ion-slide>\n      </ion-slides>\n\n    <div [ngSwitch]=\"scotch\">\n    <ion-list *ngSwitchCase=this.scotch class=\"drink_items\">\n      <ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n        <ion-thumbnail slot=\"start\">\n          <img src=\"../../assets/15yo-single-malt-scotch-whisky.png\">\n        </ion-thumbnail>\n        <ion-label>\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"8\">\n                <div class=\"drink_content fav_sec\">\n                  <span (click)=\"addToFavrite(item.itemId,item.is_fav)\" class=\"fav_btn\" *ngIf=\"sections =='0'\">\n                    <ion-icon name=\"heart-outline\" *ngIf=\"item.is_fav==0\"></ion-icon>\n                    <ion-icon name=\"heart\" class=\"active\" *ngIf=\"item.is_fav==1\"></ion-icon>\n                  </span>\n                  <h3>{{item.name}}</h3>\n                </div>\n                <div class=\"drink_content\">\n                  <ul>\n                    <li>High<span class=\"price_hike\"><span class=\"currency\">$</span> {{item.highest_price | number : '.2-2'}} <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-corner-right-up\"><polyline points=\"10 9 15 4 20 9\"></polyline><path d=\"M4 20h7a4 4 0 0 0 4-4V4\"></path></svg></span></li>\n                    <li>Low<span class=\"price_down\"><span class=\"currency\">$</span> {{item.lowest_price | number : '.2-2'}} <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-corner-right-down\"><polyline points=\"10 15 15 20 20 15\"></polyline><path d=\"M4 4h7a4 4 0 0 1 4 4v12\"></path></svg></span></li>\n                    <li>Now<span class=\"price_now\"><span class=\"currency\">$</span> {{item.current_price | number : '.2-2'}} </span></li>\n                  </ul>\n                </div>\n              </ion-col>\n              <ion-col size=\"4\">\n                <div class=\"item_btn\">\n                  <div class=\"quantity\">\n                    <div (click)=\"plusss(item)\">\n                      <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                    </div>\n                    <!-- <p>{{getthisCounter(item)}}</p> -->\n                    <p>{{item.counter}}</p>\n                    <div (click)=\"minusss(item)\">\n                      <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                    </div>\n                  </div>\n                  <span (click)=\"addToCompare(item)\"  *ngIf=\"sections =='0'\" class=\"cmop\">\n                    <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                      <path d=\"M16 12.7612V6.6674C16 5.1948 14.8066 4 13.334 4H10.9428L11.9994 2.9426L11.0566 2L8.862 4.1954C8.80009 4.2573 8.75098 4.33079 8.71747 4.41168C8.68396 4.49256 8.66671 4.57925 8.66671 4.6668C8.66671 4.75435 8.68396 4.84104 8.71747 4.92192C8.75098 5.00281 8.80009 5.0763 8.862 5.1382L11.0574 7.3336L12 6.3906L10.9428 5.3334L13.334 5.334C13.5091 5.33403 13.6824 5.36854 13.8441 5.43557C14.0058 5.5026 14.1528 5.60083 14.2765 5.72465C14.4003 5.84847 14.4984 5.99546 14.5653 6.15722C14.6323 6.31898 14.6667 6.49234 14.6666 6.6674V12.7612C13.519 13.0586 12.6666 14.0924 12.6666 15.3334C12.6666 16.806 13.8608 18 15.3334 18C16.806 18 18 16.806 18 15.3334C18 14.0924 17.1478 13.0586 16 12.7612ZM15.3334 16.6666C14.9798 16.6666 14.6406 16.5262 14.3906 16.2762C14.1405 16.0261 14 15.687 14 15.3334C14 14.9798 14.1404 14.6406 14.3904 14.3906C14.6405 14.1405 14.9796 14 15.3332 14C15.5083 14 15.6817 14.0345 15.8434 14.1015C16.0052 14.1684 16.1522 14.2666 16.276 14.3904C16.3998 14.5142 16.4981 14.6612 16.5651 14.823C16.6321 14.9847 16.6666 15.1581 16.6666 15.3332C16.6666 15.5083 16.6321 15.6817 16.5651 15.8434C16.4982 16.0052 16.4 16.1522 16.2762 16.276C16.1524 16.3998 16.0054 16.4981 15.8436 16.5651C15.6819 16.6321 15.5085 16.6666 15.3334 16.6666ZM11.138 14.862L8.9428 12.6666L8 13.6094L9.0572 14.6666L6.666 14.666C6.49094 14.666 6.3176 14.6315 6.15588 14.5644C5.99416 14.4974 5.84723 14.3992 5.72348 14.2753C5.59974 14.1515 5.50159 14.0045 5.43466 13.8428C5.36773 13.681 5.33332 13.5077 5.3334 13.3326V7.2388C6.4818 6.9414 7.3334 5.9076 7.3334 4.6666C7.3334 3.1942 6.1392 2 4.6666 2C3.194 2 2 3.1942 2 4.6666C2 5.9076 2.8516 6.9414 4 7.2388V13.3326C4 14.8052 5.1934 16 6.666 16H9.0572L8.0006 17.0572L8.9434 18L11.138 15.8046C11.1999 15.7427 11.249 15.6692 11.2825 15.5884C11.316 15.5075 11.3333 15.4208 11.3333 15.3333C11.3333 15.2458 11.316 15.1591 11.2825 15.0782C11.249 14.9974 11.1999 14.9239 11.138 14.862ZM4.6666 6C4.31296 5.99995 3.97383 5.85941 3.7238 5.60931C3.47378 5.35922 3.33335 5.02004 3.3334 4.6664C3.33345 4.31276 3.47399 3.97363 3.72409 3.7236C3.97418 3.47358 4.31336 3.33315 4.667 3.3332C5.02064 3.33325 5.35977 3.47379 5.6098 3.72389C5.85982 3.97398 6.00025 4.31316 6.0002 4.6668C6.00015 5.02044 5.85961 5.35957 5.60951 5.6096C5.35942 5.85962 5.02024 6.00005 4.6666 6Z\" fill=\"black\"/>\n                      </svg>\n                       Compare\n                  </span>\n                </div>\n              </ion-col>\n              <!-- <ion-col size=\"6\">\n                \n              </ion-col> -->\n              <!-- <ion-col size=\"6\"> -->\n                \n                \n              <!-- <ion-button small class=\"conpare_btn\" (click)=\"addToCompare(item)\"  *ngIf=\"sections =='0'\"><img src=\"assets/compare_btn.png\"></ion-button>  -->\n              \n              <!-- </ion-col> -->\n              <!-- <ion-col size=\"2\" class=\"ion-no-padding cardAdd\">\n                \n                <ion-icon name=\"bag-add\"></ion-icon>\n              </ion-col> -->\n            </ion-row>\n          </ion-grid>\n        </ion-label>\n      \n      </ion-item>\n\n    </ion-list>\n    </div>\n  </ion-list>\n\n  <ion-list *ngSwitchCase=\"'food'\" class=\"ion-no-padding\">\n    <!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n      <!-- <div class=\"title_bar\">\n        <h2 class=\"title\">{{category.category_name}}</h2>\n      </div> -->\n      <div class=\"drink_items\">\n        <ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n          <ion-thumbnail slot=\"start\" class=\"food\">\n            <img src=\"../../assets/food.png\">\n          </ion-thumbnail>\n          <ion-label>\n            <ion-grid>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"8\" class=\"pl-0\">\n                  <div class=\"drink_content\">\n                    <h3 class=\"no-margin\">{{item.name}}</h3>\n                    <ul>\n                      <li class=\"text-left\">{{item.description}}</li>\n                    </ul>\n                  </div>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <p class=\"net\"><span class=\"currency\">$</span> {{item.food_price | number : '.2-2'}}</p>\n                  <div class=\"quantity\">\n                    <div (click)=\"plusss(item)\">\n                      <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                    </div>\n                    <!-- <p>{{getthisCounter(item)}}</p> -->\n                    <p>{{item.counter}}</p>\n      \n                    <div (click)=\"minusss(item)\">\n                      <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                    </div>\n                  </div>\n                  <ion-button small class=\"conpare_btn\" (click)=\"addToCompare(item)\" *ngIf=\"sections =='0'\"><img src=\"assets/compare_btn.png\"></ion-button> \n                  </ion-col>\n                  <!-- <ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCompare(item)\">\n                    <img src=\"assets/cart.png\" style=\"padding-top: 5px;\">\n                    <ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n                  </ion-col> -->\n              </ion-row>\n            </ion-grid>\n          </ion-label>\n        </ion-item>\n\n      <!-- </div> -->\n    </div>\n  </ion-list>\n\n  <ion-list *ngSwitchCase=\"'soft-beverage'\" class=\"ion-no-padding\">\n    <!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n      <!-- <div class=\"title_bar\">\n        <h2 class=\"title\">{{category.category_name}}</h2>\n      </div> -->\n      <div class=\"drink_items\">\n        <ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n          <ion-thumbnail slot=\"start\" class=\"food\">\n            <img src=\"../../assets/lemonade.png\">\n          </ion-thumbnail>\n          <ion-label>\n            <ion-grid>\n              <ion-row class=\"ion-align-items-center\">\n                <ion-col size=\"8\" class=\"pl-0\">\n                  <div class=\"drink_content\">\n                    <h3 class=\"no-margin\">{{item.name}}</h3>\n                    <ul>\n                      <li class=\"text-left\">{{item.description}}</li>\n                    </ul>\n                  </div>\n                </ion-col>\n                <ion-col size=\"4\">\n                  <p class=\"net\"><span class=\"currency\">$</span> {{item.food_price | number : '.2-2'}}</p>\n                  <div class=\"quantity\">\n                    <div (click)=\"plusss(item)\">\n                      <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                    </div>\n                    <!-- <p>{{getthisCounter(item)}}</p> -->\n                    <p>{{item.counter}}</p>\n      \n                    <div (click)=\"minusss(item)\">\n                      <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                    </div>\n                  </div>\n                  <ion-button small class=\"conpare_btn\" (click)=\"addToCompare(item)\" *ngIf=\"sections =='0'\"><img src=\"assets/compare_btn.png\"></ion-button> \n                  </ion-col>\n                  <!-- <ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCompare(item)\">\n                    <img src=\"assets/cart.png\" style=\"padding-top: 5px;\">\n                    <ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n                  </ion-col> -->\n              </ion-row>\n            </ion-grid>\n          </ion-label>\n          \n        </ion-item>\n\n      <!-- </div> -->\n    </div>\n  </ion-list>\n\n  <ion-list *ngSwitchCase=\"'combo'\" class=\"ion-no-padding\">\n    <!-- <div *ngFor=\"let category of addToFoodItem.foodItem\"> -->\n      <!-- <div class=\"title_bar\">\n        <h2 class=\"title\">{{category.category_name}}</h2>\n      </div> -->\n      <div class=\"drink_items\">\n        <ion-item *ngFor=\"let item of addToLiquorItem.liquorItem\">\n          <ion-thumbnail slot=\"start\" class=\"food\">\n            <img src=\"../../assets/combo_offer.png\">\n          </ion-thumbnail>\n          <ion-label>\n          <ion-grid>\n            <ion-row class=\"ion-align-items-center\">\n              <ion-col size=\"8\" class=\"pl-0\">\n                <div class=\"drink_content\">\n                  <h3 class=\"no-margin\">{{item.name}}</h3>\n                  <ul>\n                    <li class=\"text-left\">{{item.description}}</li>\n                  </ul>\n                </div>\n              </ion-col>\n              <ion-col size=\"4\">\n                <p class=\"net\"><span class=\"currency\">$</span> {{item.food_price | number : '.2-2'}}</p>\n                <div class=\"quantity\">\n                  <div (click)=\"plusss(item)\">\n                    <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                  </div>\n                  <!-- <p>{{getthisCounter(item)}}</p> -->\n                  <p>{{item.counter}}</p>\n    \n                  <div (click)=\"minusss(item)\">\n                    <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                  </div>\n                </div>\n                <ion-button small class=\"conpare_btn\" (click)=\"addToCompare(item)\" *ngIf=\"sections =='0'\"><img src=\"assets/compare_btn.png\"></ion-button> \n                </ion-col>\n                <!-- <ion-col size=\"2\" class=\"ion-no-padding cardAdd\" (click)=\"addToCompare(item)\">\n                  <img src=\"assets/cart.png\" style=\"padding-top: 5px;\">\n                  <ion-button small><img src=\"assets/add-cart.png\"> Add</ion-button> \n                </ion-col> -->\n            </ion-row>\n          </ion-grid>\n          </ion-label>\n        \n        </ion-item>\n\n      <!-- </div> -->\n    </div>\n  </ion-list>\n</div>\n</ion-content>\n\n<div [ngSwitch]=\"drinks\">\n<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'liquor'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"../../assets/whiskey_peg.svg\">\n      <div class=\"item_total\">\n        <p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\"><span class=\"currency\">$</span> {{final_cart_value | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\">\n      <div class=\"reserve_btn\"  (click)=\"gotoCart()\">\n        <p>View Cart</p>\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      </div>\n    </div>\n  </div>\n</ion-footer>\n\n\n\n<!-- <ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'food'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"assets/cart.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToFoodCart.foodCart.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\">₹ {{foodCartValue | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\" (click)=\"gotoFoodCart()\">\n      <p>View Cart</p>\n      <img src=\"assets/arrow-right.png\">\n    </div>\n  </div>\n</ion-footer> -->\n<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'food'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"../../assets/food.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\"><span class=\"currency\">$</span> {{final_cart_value | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\">\n      <div class=\"reserve_btn\" (click)=\"gotoCart()\">\n        <p>View Cart</p>\n        <img src=\"assets/arrow-right.png\">\n      </div>\n    </div>\n  </div>\n</ion-footer>\n<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'soft-beverage'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"../../assets/lemonade.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\"><span class=\"currency\">$</span> {{final_cart_value | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\">\n      <div class=\"reserve_btn\" (click)=\"gotoCart()\">\n        <p>View Cart</p>\n        <img src=\"assets/arrow-right.png\">\n      </div>\n    </div>\n  </div>\n</ion-footer>\n<ion-footer class=\"ion-no-border\" *ngSwitchCase=\"'combo'\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <img src=\"../../assets/combo_offer.png\">\n      <div class=\"item_total\">\n        <p><small>{{addToCart.carts.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\"><span class=\"currency\">$</span> {{final_cart_value | number : '.2-2'}}</p>\n        <p><small>plus taxes*</small></p>\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\">\n      <div class=\"reserve_btn\" (click)=\"gotoCart()\">\n        <p>View Cart</p>\n        <img src=\"assets/arrow-right.png\">\n      </div>\n    </div>\n  </div>\n</ion-footer>\n</div>\n\n");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .button.conpare_btn {\n  --background: #fff;\n  --box-shadow: none;\n  border: 2px solid #dcc88d;\n  width: 28px;\n  height: 28px;\n  border-radius: 3px;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n}\nion-content .button.conpare_btn img {\n  max-width: 20px;\n}\nion-content .quantity {\n  display: inline-flex;\n  vertical-align: top;\n}\nion-content .drink_items {\n  padding: 5px;\n}\nion-content .drink_items ion-item {\n  --inner-border-width: 0;\n  border-bottom: 1px solid #eee;\n}\nion-content .drink_items ion-label {\n  white-space: normal;\n}\nion-content .drink_items ion-thumbnail {\n  background: #f7f7f7;\n  border-radius: 4px;\n  width: 64px;\n  height: 64px;\n  margin: 0 5px 0 0;\n}\nion-content .drink_items ion-thumbnail.food img {\n  padding: 10px;\n}\nion-content .drink_items ion-thumbnail img {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\nion-content .drink_items ion-grid {\n  --ion-grid-padding: 0;\n}\np.net {\n  text-align: center;\n  margin-bottom: 4px;\n  font-weight: 700;\n  font-family: \"Barlow Condensed\", sans-serif;\n}\n.fav_sec {\n  display: flex;\n  flex-wrap: wrap;\n}\n.fav_sec h3 {\n  font-family: \"Barlow Condensed\", sans-serif;\n  margin-bottom: 0;\n}\n.fav_sec span {\n  display: inline-block;\n  vertical-align: top;\n  line-height: 0;\n  margin-right: 6px;\n}\n.fav_sec span.fav_btn {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3px;\n}\n.fav_sec span.fav_btn span {\n  font-size: 12px;\n  margin-left: 6px;\n}\n.fav_sec .active {\n  color: #dcc88d;\n}\nion-slides {\n  background-color: #f9f9f9;\n  padding: 10px 0;\n}\n.favourite_items {\n  padding-left: 10px;\n  margin-bottom: 20px;\n}\n.favourite_items figure {\n  margin: 0;\n  background: #FFD700;\n  height: 150px;\n  border-radius: 8px;\n  width: 100%;\n  margin-top: 60px;\n}\n.favourite_items figure img {\n  position: relative;\n  height: 160px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  top: -60px;\n  max-height: 160px;\n}\n.favourite_items figure span {\n  font-family: \"Barlow Condensed\", sans-serif;\n  display: inline-block;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  margin: 0 0 10px;\n  padding: 5px 0;\n  position: relative;\n  top: -60px;\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.cmop {\n  position: relative;\n  width: auto;\n  display: inline-flex;\n  align-items: center;\n  padding: 5px;\n  height: 28px;\n  background: #dcc88d;\n  border-radius: 3px;\n  font-size: 14px;\n  justify-content: center;\n}\n.swiper-slide img {\n  width: auto;\n  max-width: 90px;\n  height: auto;\n  max-height: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.drink_items h4 {\n  font-size: 20px;\n  font-weight: 600;\n  margin: 0;\n  white-space: normal;\n}\n.item_btn {\n  display: flex;\n  justify-content: flex-end;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bGV0bWVudS9vdXRsZXRtZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUFGO0FBRUU7RUFDQyxlQUFBO0FBQUg7QUFHQztFQUNDLG9CQUFBO0VBQ0EsbUJBQUE7QUFERjtBQUdDO0VBQ0MsWUFBQTtBQURGO0FBR0U7RUFDQyx1QkFBQTtFQUNBLDZCQUFBO0FBREg7QUFHRTtFQUNDLG1CQUFBO0FBREg7QUFJRTtFQUNDLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBRkg7QUFLSTtFQUNDLGFBQUE7QUFITDtBQU9HO0VBQ0MseUJBQUE7S0FBQSxzQkFBQTtBQUxKO0FBU0U7RUFDQyxxQkFBQTtBQVBIO0FBV0E7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQ0FBQTtBQVJEO0FBVUE7RUFDQyxhQUFBO0VBQ0EsZUFBQTtBQVBEO0FBVUM7RUFDQywyQ0FBQTtFQUNBLGdCQUFBO0FBUkY7QUFVQztFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFSRjtBQVVFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSSDtBQVVHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBUko7QUFZQztFQUNDLGNBQUE7QUFWRjtBQWVBO0VBQ0MseUJBQUE7RUFDRyxlQUFBO0FBWko7QUFjQTtFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFYRDtBQWFDO0VBQ0MsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBWEY7QUFhRTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFYSDtBQWNFO0VBQ0MsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQVpIO0FBZ0JBO0VBQ0Msa0JBQUE7RUFDRyxXQUFBO0VBQ0gsb0JBQUE7RUFDQSxtQkFBQTtFQUNHLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDSCxrQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtBQWJEO0FBZ0JBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FBYko7QUFlQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQVpEO0FBY0E7RUFDQyxhQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQVhEIiwiZmlsZSI6InNyYy9hcHAvb3V0bGV0bWVudS9vdXRsZXRtZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQuYnV0dG9uLmNvbnBhcmVfYnRuIHtcclxuXHRcdC0tYmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHRcdGJvcmRlcjogMnB4IHNvbGlkICNkY2M4OGQ7XHJcblx0XHR3aWR0aDogMjhweDtcclxuXHRcdGhlaWdodDogMjhweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDNweDtcclxuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHRcdC0tcGFkZGluZy1lbmQ6IDA7XHJcblx0XHRtYXJnaW46IDA7XHJcblxyXG5cdFx0aW1nIHtcclxuXHRcdFx0bWF4LXdpZHRoOiAyMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQucXVhbnRpdHkge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cdH1cclxuXHQuZHJpbmtfaXRlbXMge1xyXG5cdFx0cGFkZGluZzogNXB4O1xyXG5cclxuXHRcdGlvbi1pdGVtIHtcclxuXHRcdFx0LS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG5cdFx0fVxyXG5cdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHRcdH1cclxuXHJcblx0XHRpb24tdGh1bWJuYWlsIHtcclxuXHRcdFx0YmFja2dyb3VuZDogI2Y3ZjdmNztcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdFx0XHR3aWR0aDogNjRweDtcclxuXHRcdFx0aGVpZ2h0OiA2NHB4O1xyXG5cdFx0XHRtYXJnaW46IDAgNXB4IDAgMDtcclxuXHJcblx0XHRcdCYuZm9vZCB7XHJcblx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdHBhZGRpbmc6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpbWcge1xyXG5cdFx0XHRcdG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpb24tZ3JpZCB7XHJcblx0XHRcdC0taW9uLWdyaWQtcGFkZGluZzogMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxucC5uZXQge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRtYXJnaW4tYm90dG9tOiA0cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mYXZfc2Vje1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0aDMge1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdCYXJsb3cgQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuXHRcdG1hcmdpbi1ib3R0b206IDA7XHJcblx0fVxyXG5cdHNwYW4ge1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0dmVydGljYWwtYWxpZ246IHRvcDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAwO1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA2cHg7XHJcblxyXG5cdFx0Ji5mYXZfYnRuIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdFx0bWFyZ2luLWJvdHRvbTogM3B4O1xyXG5cclxuXHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA2cHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0LmFjdGl2ZXtcclxuXHRcdGNvbG9yOiAjZGNjODhkO1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmlvbi1zbGlkZXN7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG4uZmF2b3VyaXRlX2l0ZW1zIHtcclxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcblx0ZmlndXJlIHtcclxuXHRcdG1hcmdpbjogMDtcclxuXHRcdGJhY2tncm91bmQ6ICNGRkQ3MDA7XHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4O1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRtYXJnaW4tdG9wOiA2MHB4O1xyXG5cclxuXHRcdGltZyB7XHJcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0aGVpZ2h0OiAxNjBweDtcclxuXHRcdFx0b2JqZWN0LWZpdDogc2NhbGUtZG93bjtcclxuXHRcdFx0dG9wOiAtNjBweDtcclxuXHRcdFx0bWF4LWhlaWdodDogMTYwcHg7XHJcblx0XHR9XHJcblxyXG5cdFx0c3BhbiB7XHJcblx0XHRcdGZvbnQtZmFtaWx5OiAnQmFybG93IENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC42KTtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdG1hcmdpbjogMCAwIDEwcHg7XHJcblx0XHRcdHBhZGRpbmc6IDVweCAwO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRcdHRvcDogLTYwcHg7XHJcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLmNtb3B7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IGF1dG87XHJcblx0ZGlzcGxheTogaW5saW5lLWZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICAgIGJhY2tncm91bmQ6ICNkY2M4OGQ7XHJcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnN3aXBlci1zbGlkZSBpbWcge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDkwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHB4O1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG4uZHJpbmtfaXRlbXMgaDQge1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG59XHJcbi5pdGVtX2J0biB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn0iXX0= */");

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
            initialSlide: 0,
            centeredSlides: false,
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