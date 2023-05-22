(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vaultselected-vaultselected-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vaultselected/vaultselected.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vaultselected/vaultselected.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back-outline\" text=\"\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Liquidity</ion-title>\n    <ion-buttons slot=\"end\">\n\t\t<ion-button (click)=\"search()\">\n      <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <g clip-path=\"url(#clip0_21_31)\">\n        <path d=\"M10.5691 0C4.74145 0 0 4.74145 0 10.5691C0 16.3971 4.74145 21.1382 10.5691 21.1382C16.3971 21.1382 21.1382 16.3971 21.1382 10.5691C21.1382 4.74145 16.3971 0 10.5691 0ZM10.5691 19.187C5.81723 19.187 1.95122 15.321 1.95122 10.5691C1.95122 5.81728 5.81723 1.95122 10.5691 1.95122C15.321 1.95122 19.187 5.81723 19.187 10.5691C19.187 15.321 15.321 19.187 10.5691 19.187Z\" fill=\"#28303F\"/>\n        <path d=\"M23.7142 22.3347L18.1207 16.7412C17.7395 16.36 17.1223 16.36 16.7411 16.7412C16.36 17.122 16.36 17.7399 16.7411 18.1207L22.3346 23.7142C22.4251 23.805 22.5326 23.8769 22.651 23.926C22.7694 23.975 22.8963 24.0002 23.0244 24.0001C23.1525 24.0002 23.2794 23.975 23.3978 23.9259C23.5162 23.8769 23.6237 23.8049 23.7142 23.7142C24.0953 23.3334 24.0953 22.7155 23.7142 22.3347Z\" fill=\"#28303F\"/>\n        </g>\n        <defs>\n        <clipPath id=\"clip0_21_31\">\n        <rect width=\"24\" height=\"24\" fill=\"white\"/>\n        </clipPath>\n        </defs>\n      </svg>\n\n    </ion-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"banner_wraper\">\n    <!-- <img src=\"assets/banner-home.png\"> -->\n    <ion-slides class=\"collection_banner\" pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide>\n        <img src=\"assets/banner-home1.png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"assets/banner-home2.png\">\n      </ion-slide>\n      <ion-slide>\n        <img src=\"assets/banner-home3.png\">\n      </ion-slide>\n    </ion-slides>\n  </div>\n  <div class=\"segment_2\">\n    <!-- <div>\n        <ion-segment class=\"ion-no-padding\" >\n          <ion-segment-button *ngFor=\"let categoryMain of liquorCategory;\">\n            <ion-button shape=\"round\" (click)=\"getCategoryItem(categoryMain.id)\">{{categoryMain.name}}</ion-button>\n          </ion-segment-button>\n        </ion-segment>\n    </div> -->\n    <ion-slides [options]=\"slideOpts1\" class=\"sec1\">\n      <ion-slide *ngFor=\"let categoryMain of liquorCategory;\">\n        <ion-button shape=\"round\" (click)=\"getCategoryItem(categoryMain.id)\">{{categoryMain.name}}</ion-button>\n      </ion-slide>\n    </ion-slides>\n    <div class=\"note\">\n      <p><span>*</span>You can rrder only 1 transaction</p>\n    </div>\n    <div>\n      <ion-list class=\"liquor_items\">\n        <ion-item *ngFor=\"let categoryItem of categoryItems;\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{categoryItem.image}}\">\n          </ion-thumbnail>\n          <div class=\"drink_content\">\n            <h3>{{categoryItem.name}}</h3>\n            <div class=\"select_area\">\n              <div class=\"select_box\">\n                <label>Select Unit</label>\n                <ul>\n                  <!-- <li>\n                    <input type=\"radio\" value=\"0\" id=\"name0{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,0)\" />\n                    <label for=\"name0{{categoryItem.id}}\">0<span>units</span></label>\n                  </li> -->\n                  <li>\n                    <input type=\"radio\" value=\"25\" id=\"name25{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,25)\" />\n                    <label for=\"name25{{categoryItem.id}}\">25 <span>units</span></label>\n                  </li>\n                  <li>\n                    <input type=\"radio\" value=\"50\" id=\"name50{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,50)\" />\n                    <label for=\"name50{{categoryItem.id}}\">50 <span>units</span></label>\n                  </li>\n                </ul>\n              </div>\n  \n              <div class=\"select_box outlet\">\n                <select placeholder=\"Select Category\" (change)=\"selectVaultCategory($event,categoryItem.vault_product_prices,categoryItem)\">\n                  <option value=\"\">Add to Reserve</option>\n                  <option *ngFor=\"let item of categoryItem.vault_product_prices\"  value=\"{{item.vault_category_id}}\">{{item.vault_category_name}}</option>\n                </select>\n              </div>\n            </div>\n            \n            <!-- <div class=\"unit_category\">\n              <ion-col size=\"5\">\n                \n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-item>\n                  <select placeholder=\"Select Category\" (change)=\"selectVaultCategory($event,categoryItem.vault_product_prices,categoryItem)\">\n                    <option value=\"\">Select Outlet</option>\n                    <option *ngFor=\"let item of categoryItem.vault_product_prices\"  value=\"{{item.vault_category_id}}\">{{item.vault_category_name}}</option>\n                  </select>\n                  <ion-button small slot=\"end\" (click)=\"addToCarts(categoryItem)\">\n                    <ion-icon name=\"cart\"></ion-icon>\n                  </ion-button>\n                </ion-item>\n              </ion-col>\n            </div> -->\n            <!-- <div class=\"unit_category\">\n              <ion-col size=\"9\">\n                 <ul>\n                  <li>\n                    <input type=\"radio\" value=\"0\" id=\"name0{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,0)\" />\n                    <label for=\"name0{{categoryItem.id}}\">0<span>units</span></label>\n                  </li>\n                  <li>\n                    <input type=\"radio\" value=\"25\" id=\"name25{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,25)\" />\n                    <label for=\"name25{{categoryItem.id}}\">25 <span>units</span></label>\n                  </li>\n                  <li>\n                    <input type=\"radio\" value=\"50\" id=\"name50{{categoryItem.id}}\" name=\"name{{categoryItem.id}}\" (click)=\"radioButtonSelect(categoryItem,50)\" />\n                    <label for=\"name50{{categoryItem.id}}\">50 <span>units</span></label>\n                  </li>\n                </ul>\n                <ul class=\"p-price\">   \n                  <li *ngFor=\"let item of categoryItem.vault_product_prices\">\n                    <input type=\"radio\" value=\"{{item.id}}\" id=\"name01{{item.id}}\" name=\"name1{{categoryItem.id}}\" (click)=\"select(item);\" />\n                    <label for=\"name01{{item.id}}\">{{item.vault_category_name}}</label>\n                  </li> \n                </ul> \n              </ion-col>\n              <ion-col size=\"3\" class=\"ion-no-padding cardAdd\" (click)=\"addToCarts(categoryItem)\">\n                <img src=\"assets/cart.png\" style=\"padding-top: 5px;\">\n                <ion-button small> Buy Now</ion-button> \n              </ion-col>\n            </div> -->\n          </div>\n        </ion-item>\n    </ion-list>\n    <div class=\"note\">\n      <p><span>*</span>30ounce per unit</p>\n    </div>\n  </div>\n</div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_start\">\n      <svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M5.68789 4.90039L16.6211 4.92188V18.0469C16.6211 18.9098 15.9215 19.6094 15.0586 19.6094H7.24609C6.3832 19.6094 5.68359 18.9098 5.68359 18.0469V4.9082L5.68789 4.90039Z\" fill=\"#95E7EE\"/>\n        <path d=\"M5.68359 18.0469V4.9082L5.68789 4.90039L16.6211 4.92188V18.0469H5.68359Z\" fill=\"#FEC652\"/>\n        <path d=\"M1.77734 8.24219V14.9219C1.77734 15.7848 2.47695 16.4844 3.33984 16.4844H5.68359V14.9219H3.33984V8.24219H5.68359V6.67969H3.33984C2.47695 6.67969 1.77734 7.3793 1.77734 8.24219Z\" fill=\"#95E7EE\"/>\n        <path d=\"M4.94336 3.1918C4.64609 4.51105 6.00691 5.56656 7.28516 4.91641V8.21445C7.28516 8.6457 7.63477 8.9957 8.06641 8.9957C8.49805 8.9957 8.84766 8.6457 8.84766 8.21445V6.65195C8.84766 6.1125 8.82812 5.11719 10.5664 5.11719C10.7074 5.11719 10.8422 5.17422 10.9398 5.27539C11.2949 5.64258 11.7926 5.8707 12.3438 5.8707C12.877 5.8707 13.3602 5.65703 13.7125 5.31055C13.8387 5.18672 14.0086 5.11719 14.1938 5.11719C14.3426 5.11719 14.4785 5.20195 14.5438 5.33555C14.9211 6.1082 15.7051 6.64414 16.6211 6.65195V9.76836C16.6406 10.2082 16.9902 10.5582 17.4219 10.5582C17.8535 10.5582 18.2227 10.2082 18.2227 9.77695V5.08945C18.2227 3.23125 16.5816 1.75195 14.6773 1.99609C14.1441 1.0457 13.1238 0.390625 11.9531 0.390625C11.0273 0.390625 10.1957 0.804297 9.62344 1.44414C9.3875 1.29492 9.10781 1.21094 8.80859 1.21094C8.12695 1.21094 7.54727 1.64727 7.33398 2.25586C6.99844 2.03086 6.5707 1.93242 6.11953 2.0293C5.54609 2.15195 5.07187 2.61992 4.94336 3.1918Z\" fill=\"#FFE5CB\"/>\n        <path d=\"M8.82812 17.6284C9.04375 17.6284 9.21875 17.8034 9.21875 18.019C9.21875 18.2347 9.04375 18.4097 8.82812 18.4097C8.6125 18.4097 8.4375 18.2347 8.4375 18.019C8.4375 17.8034 8.6125 17.6284 8.82812 17.6284ZM14.3164 7.82373C14.5321 7.82373 14.707 7.99861 14.707 8.21436V15.6753C14.707 15.891 14.5321 16.0659 14.3164 16.0659C14.1007 16.0659 13.9258 15.891 13.9258 15.6753V8.21436C13.9258 7.99861 14.1007 7.82373 14.3164 7.82373ZM11.1914 7.82373C11.4071 7.82373 11.582 7.99861 11.582 8.21436V15.6753C11.582 15.891 11.4071 16.0659 11.1914 16.0659C10.9757 16.0659 10.8008 15.891 10.8008 15.6753V8.21436C10.8008 7.99861 10.9757 7.82373 11.1914 7.82373Z\" fill=\"black\"/>\n        <path d=\"M15.0586 20H7.24609C6.16914 20 5.29297 19.1238 5.29297 18.0469V16.875H3.33984C2.26289 16.875 1.38672 15.9988 1.38672 14.9219V8.24219C1.38672 7.16523 2.26289 6.28906 3.33984 6.28906H5.29297V5.10707C4.68066 4.64805 4.38965 3.87219 4.56223 3.10613C4.72367 2.38777 5.31664 1.80152 6.03754 1.64734C6.42078 1.56512 6.80676 1.59422 7.15844 1.72793C7.51109 1.17195 8.13039 0.820312 8.80859 0.820312C9.06422 0.820312 9.31402 0.869883 9.545 0.965273C10.1988 0.348516 11.0608 0 11.9531 0C13.1334 0 14.2342 0.601289 14.884 1.58512C16.9258 1.47215 18.6133 3.09203 18.6133 5.08945V9.77695C18.6133 10.4231 18.0788 10.9488 17.4219 10.9488C17.2778 10.9488 17.1397 10.9226 17.0117 10.8749V18.0469C17.0117 19.1238 16.1355 20 15.0586 20ZM7.24609 19.2188H15.0586C15.5678 19.2188 16.002 18.8921 16.1633 18.4375H10.3902C10.1745 18.4375 9.99961 18.2626 9.99961 18.0469C9.99961 17.8311 10.1745 17.6562 10.3902 17.6562H16.2305V7.01195C15.353 6.87949 14.5932 6.32688 14.1938 5.50785C14.1123 5.50785 14.0405 5.53605 13.9864 5.58914C13.5455 6.02266 12.9621 6.26137 12.3438 6.26137C11.7028 6.26137 11.1045 6.00766 10.6588 5.54672C10.6468 5.5344 10.6324 5.52462 10.6165 5.51794C10.6007 5.51127 10.5836 5.50784 10.5664 5.50785C9.95832 5.50785 9.56043 5.63773 9.38371 5.89383C9.23805 6.10496 9.23816 6.39832 9.23828 6.63406V8.21449C9.23828 8.72371 8.91168 9.15793 8.45703 9.31918V15.6754C8.45703 15.8912 8.28215 16.0661 8.06641 16.0661C7.85066 16.0661 7.67578 15.8912 7.67578 15.6754V9.31914C7.22113 9.15789 6.89453 8.72371 6.89453 8.21445V5.46195C6.6209 5.51656 6.34164 5.51691 6.07422 5.46223V17.6562H7.26602C7.48176 17.6562 7.65664 17.8311 7.65664 18.0469C7.65664 18.2626 7.48176 18.4336 7.26602 18.4336H6.14141C6.30266 18.8882 6.73687 19.2188 7.24609 19.2188ZM5.29297 8.63281H3.73047V14.5312H5.29297V8.63281ZM3.33984 7.07031C2.69367 7.07031 2.16797 7.59602 2.16797 8.24219V14.9219C2.16797 15.568 2.69367 16.0938 3.33984 16.0938H5.29297V15.3125H3.33984C3.1241 15.3125 2.94922 15.1376 2.94922 14.9219V8.24219C2.94922 8.02645 3.1241 7.85156 3.33984 7.85156H5.29297V7.07031H3.33984ZM17.4219 10.1676C17.6442 10.1676 17.832 9.98867 17.832 9.77695V5.08945C17.832 3.5818 16.5984 2.36086 15.0818 2.36086C14.9639 2.36086 14.8454 2.36836 14.727 2.38355C14.6498 2.39346 14.5714 2.38006 14.5018 2.34507C14.4323 2.31009 14.3748 2.25513 14.3367 2.18723C13.8501 1.32 12.9368 0.78125 11.9531 0.78125C11.1824 0.78125 10.4394 1.11777 9.91457 1.70457C9.85296 1.77348 9.76891 1.8183 9.67737 1.83106C9.58582 1.84383 9.49272 1.82372 9.41461 1.7743C9.23598 1.66129 9.02641 1.60156 8.80859 1.60156C8.31133 1.60156 7.86688 1.91645 7.70262 2.38504C7.68289 2.44133 7.65054 2.49235 7.60804 2.5342C7.56554 2.57605 7.51402 2.60761 7.45743 2.62646C7.40084 2.64531 7.34069 2.65095 7.28158 2.64295C7.22248 2.63496 7.16599 2.61353 7.11645 2.58031C6.8502 2.4018 6.52527 2.34176 6.20125 2.41129C5.77938 2.50152 5.41883 2.8577 5.32445 3.27766C5.10211 4.26453 6.11371 5.07406 7.10809 4.56824C7.16764 4.53794 7.23396 4.52342 7.30073 4.52607C7.36749 4.52872 7.43246 4.54845 7.48942 4.58338C7.54638 4.61831 7.59343 4.66727 7.62607 4.72558C7.6587 4.78389 7.67583 4.84959 7.67582 4.91641V8.21445C7.67582 8.42984 7.85105 8.60508 8.06645 8.60508C8.28184 8.60508 8.45707 8.42984 8.45707 8.21445V6.6343C8.45695 6.32664 8.45676 5.86168 8.7407 5.45012C9.07191 4.97 9.68617 4.72656 10.5664 4.72656C10.8121 4.72656 11.0506 4.8277 11.2207 5.00387C11.5176 5.31098 11.9165 5.48008 12.3438 5.48008C12.756 5.48008 13.1448 5.32098 13.4389 5.03176C13.6394 4.83492 13.9075 4.72656 14.1938 4.72656C14.4898 4.72656 14.765 4.89832 14.8948 5.16414C15.2222 5.83461 15.885 6.25504 16.6245 6.26137C16.8389 6.2632 17.0118 6.43754 17.0118 6.65199V9.75844C17.0255 9.98848 17.2044 10.1676 17.4219 10.1676Z\" fill=\"black\"/>\n      </svg>        \n      <div class=\"item_total\">\n        <!-- <p><small>{{cart_item}} ITEM IN CART</small></p> -->\n                <p *ngIf=\"total_prices=='0'\"><small>0 ITEM IN CART</small></p>\n        <p *ngIf=\"total_prices!='0'\"><small>{{cart_length.length}} ITEM IN CART</small></p>\n        <p class=\"price_end\">$ 0{{total_prices | number : '.2-2'}}</p>\n        <!-- <p class=\"price_end\">$ {{total_prices | number : '.2-2'}}</p> -->\n\n        <!-- <p><small>30ounce per unit</small></p> -->\n      </div>\n    </div>\n    <div class=\"footer_item_end mw_230\">\n      <div class=\"reserve_btn\" (click)=\"compareNDreview()\">\n        <p>Reserve</p>\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n      </div>\n    </div>\n  </div>\n</ion-footer>\n\n\n\n\n\n<!-- <ion-content>\n  <div class=\"banner_wraper\"><img src=\"assets/banner-home.png\"></div>\n  <div class=\"segment_2\">\n    <div>\n        <ion-segment [(ngModel)]=\"scotch\" class=\"ion-no-padding\" >\n          <ion-segment-button value=\"premium-scotch\" (click)=\"liquorSegmentPremium()\">\n            <ion-button class=\"\" shape=\"round\">Premium Scotch</ion-button>\n          </ion-segment-button>\n          <ion-segment-button value=\"regular-scotch\" (click)=\"liquorSegmentRegular()\">\n            <ion-button class=\"\" shape=\"round\">Regular Scotch</ion-button>\n          </ion-segment-button>\n          <ion-segment-button value=\"scotch-whisky\" (click)=\"liquorSegmentWhisky()\">\n            <ion-button class=\"\" shape=\"round\">Scotch Whisky</ion-button>\n          </ion-segment-button>\n        </ion-segment>\n    </div>\n\n  <div [ngSwitch]=\"scotch\" >\n    <ion-list *ngSwitchCase=\"'premium-scotch'\" class=\"drink_items\" >\n      <ion-item *ngFor=\"let item of all_liquor_categorywise\">\n        <div >\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\" >\n          <ion-col size=\"7\">\n            <div class=\"drink_content\">\n              <h3>{{item.liquorName}}</h3>\n              <ul>\n                <li>HIGH: <span class=\"price_hike\">$ {{item.BigLiquorMaxPrice}}<img src=\"assets/green-arrow.png\"></span></li>\n                <li>LOW: <span class=\"price_down\">$ {{item.BigLiquorMinPrice}}<img src=\"assets/red-arrow.png\"></span></li>\n                <li>NOW: <span class=\"price_now\">$ {{item.BigLiquorNormalPrice}}</span></li>\n              </ul>\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"quantity\">\n              <span class=\"plus\">+</span>\n              <p>1</p>\n              <span class=\"minus\">-</span>\n            </div>\n          </ion-col>\n          <ion-col size=\"1\" class=\"ion-no-padding\">\n            <img src=\"assets/copy.png\" style=\"padding-top: 5px;\">\n          </ion-col>\n        </ion-row>\n        </ion-grid>\n        </div>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase=\"'regular-scotch'\" class=\"liquor_items\">\n      <ion-item *ngFor=\"let item of all_liquor_categorywise\">\n          <ion-thumbnail slot=\"start\">\n            <img src=\"{{item.image}}\">\n          </ion-thumbnail>\n            <div class=\"drink_content\">\n        <h3>{{item.liquorName}}</h3>\n        <div class=\"unit_category\">\n          <ul>\n            <li class=\"active\" (click)=\"unit0(0,item.SmallLiquorNormalPrice,item.liquorName)\">0 <span>units</span></li>\n            <li (click)=\"unit25(25,item.SmallLiquorNormalPrice,item.liquorName)\">25 <span>units</span></li>\n            <li (click)=\"unit50(50,item.SmallLiquorNormalPrice,item.liquorName)\">50 <span>units</span></li>\n          </ul>\n          <ion-select multiple=\"false\" (ionChange)=\"optionsliquorShopOwner($event,i);\" cancelText=\"cancel\" okText=\"ok\">\n            <ion-select-option *ngFor=\"let item of all_liquor_category\" [value]=\"item.id\">{{item.liquorName}}\n            </ion-select-option>\n            </ion-select>\n        </div>\n      </div>\n        </ion-item>\n    </ion-list>\n    <ion-list *ngSwitchCase=\"'scotch-whisky'\">\n      \n    </ion-list>\n  </div>\n</div>\n</ion-content> -->\n\n\n");

/***/ }),

/***/ "./src/app/vaultselected/vaultselected-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/vaultselected/vaultselected-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: VaultselectedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultselectedPageRoutingModule", function() { return VaultselectedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vaultselected_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaultselected.page */ "./src/app/vaultselected/vaultselected.page.ts");




const routes = [
    {
        path: '',
        component: _vaultselected_page__WEBPACK_IMPORTED_MODULE_3__["VaultselectedPage"]
    }
];
let VaultselectedPageRoutingModule = class VaultselectedPageRoutingModule {
};
VaultselectedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VaultselectedPageRoutingModule);



/***/ }),

/***/ "./src/app/vaultselected/vaultselected.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/vaultselected/vaultselected.module.ts ***!
  \*******************************************************/
/*! exports provided: VaultselectedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultselectedPageModule", function() { return VaultselectedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vaultselected_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaultselected-routing.module */ "./src/app/vaultselected/vaultselected-routing.module.ts");
/* harmony import */ var _vaultselected_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaultselected.page */ "./src/app/vaultselected/vaultselected.page.ts");







let VaultselectedPageModule = class VaultselectedPageModule {
};
VaultselectedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vaultselected_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaultselectedPageRoutingModule"]
        ],
        declarations: [_vaultselected_page__WEBPACK_IMPORTED_MODULE_6__["VaultselectedPage"]]
    })
], VaultselectedPageModule);



/***/ }),

/***/ "./src/app/vaultselected/vaultselected.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/vaultselected/vaultselected.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-button {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 32px;\n  --background: #212121;\n  --background-activated: #212121;\n  font-family: \"Outfit\" !important;\n  color: #dcc88d;\n  font-size: 11px;\n  letter-spacing: -0.01px;\n  --box-shadow: none;\n  --padding-top: 3px;\n  font-weight: 900;\n  text-transform: capitalize;\n}\nion-content .sec1 {\n  padding-left: 10px;\n  margin-bottom: 10px;\n}\nion-content .collection_banner {\n  padding: 10px 0;\n}\nion-content .collection_banner img {\n  border-radius: 10px;\n  max-height: 120px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .liquor_items img {\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\n.liquor_items {\n  padding: 0 10px;\n  margin: 0 0 10px;\n}\n.liquor_items ion-item {\n  --padding-start: 0;\n  --inner-border-width: 0;\n  --inner-padding-end: 0;\n  border-bottom: 1px solid #eee;\n}\n.liquor_items ion-item ion-thumbnail {\n  background: #f7f7f7;\n  border-radius: 6px;\n  width: 80px;\n  height: 80px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.liquor_items ion-item ion-thumbnail img {\n  width: 60px;\n  height: 110px;\n  position: relative;\n  display: block;\n  margin: 0 auto;\n  top: -20px;\n}\n.liquor_items ion-item .drink_content h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin: 0;\n}\n.note {\n  padding: 0 10px;\n  color: #58151c;\n}\n.note:last-child {\n  margin-bottom: 10px;\n}\n.note span {\n  color: #f00;\n}\n.note p {\n  margin: 0;\n}\n.select_area {\n  display: flex;\n  align-items: flex-end;\n}\n.select_box {\n  display: flex;\n  align-items: flex-start;\n  margin-top: 10px;\n  flex-direction: column;\n  justify-content: flex-start;\n}\n.select_box.outlet {\n  margin-left: auto;\n}\n.select_box label {\n  flex: 1 0 0%;\n  font-size: 12px;\n  margin-bottom: 5px;\n  color: #898989;\n}\n.select_box select {\n  border: none;\n  padding: 3px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #898989;\n  background: #be9d4e;\n  color: #000;\n  margin-left: auto;\n  -moz-appearance: none;\n  -o-appearance: none;\n  -webkit-appearance: none;\n  -ms-appearance: none;\n  line-height: 17px;\n}\n.select_box select:focus {\n  outline: none;\n  box-shadow: none;\n}\n.select_box ul {\n  display: flex;\n  align-items: center;\n  margin: 0;\n  padding: 0;\n}\n.select_box ul li {\n  display: inline-block;\n  vertical-align: top;\n  margin-right: 10px;\n}\n.select_box ul li:last-child {\n  margin-right: 0;\n}\n.select_box ul li label {\n  display: inline-block;\n  vertical-align: top;\n  border: 1px solid #ccc;\n  padding: 3px 6px;\n  border-radius: 4px;\n  font-size: 12px;\n  color: #898989;\n  margin: 0;\n}\n.select_box ul li input {\n  position: absolute;\n  opacity: 0;\n}\n.select_box ul li input:checked + label {\n  border-color: #be9d4e;\n  color: #be9d4e;\n}\n.select_box ul li span {\n  text-transform: uppercase;\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF1bHRzZWxlY3RlZC92YXVsdHNlbGVjdGVkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxSkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBcEpSO0FBc0pJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQXBKUjtBQXNKSTtFQUNGLGVBQUE7QUFwSkY7QUFzSkU7RUFDQyxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFwSkg7QUF3Skk7RUFDSSx5QkFBQTtLQUFBLHNCQUFBO0FBdEpSO0FBcUtBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBbEtKO0FBb0tJO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFsS1I7QUFvS1E7RUFDSSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBbEtaO0FBb0tZO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQWxLaEI7QUFzS1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBcEtoQjtBQXlLQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBdEtKO0FBd0tJO0VBQ0ksbUJBQUE7QUF0S1I7QUF5S0k7RUFDSSxXQUFBO0FBdktSO0FBMEtJO0VBQ0ksU0FBQTtBQXhLUjtBQTJLQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtBQXhLSjtBQTBLQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQkFBQTtBQXZLSjtBQXlLSTtFQUNJLGlCQUFBO0FBdktSO0FBMEtJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUF4S1I7QUEyS0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBektSO0FBMktRO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBektaO0FBNktJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUEzS1I7QUE2S1E7RUFDSSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEzS1o7QUE2S1k7RUFDSSxlQUFBO0FBM0toQjtBQThLWTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUE1S2hCO0FBK0tZO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FBN0toQjtBQStLZ0I7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUE3S3BCO0FBaUxZO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0FBL0toQiIsImZpbGUiOiJzcmMvYXBwL3ZhdWx0c2VsZWN0ZWQvdmF1bHRzZWxlY3RlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuc2VnbWVudF8yIGlvbi1zZWdtZW50e1xyXG4vLyAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC5saXF1b3JfaXRlbXMge1xyXG4vLyAgICAgcGFkZGluZzogMDtcclxuXHJcbi8vICAgICBpb24taXRlbSB7XHJcbi8vICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHg7XHJcbi8vICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5kcmlua19jb250ZW50IHtcclxuLy8gICAgIGgzIHtcclxuLy8gICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbi8vICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuLy8gICAgIH1cclxuLy8gICAgICYuZHJpbmtfY29udGVudC0tbW9kIHtcclxuLy8gICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5kcmlua19jb250ZW50LmRyaW5rX2NvbnRlbnQtLW1vZCB7XHJcbi8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4vLyB9XHJcbi8vIC5kcmlua19jb250ZW50IC51bml0X2NhdGVnb3J5e1xyXG5cclxuLy8gICAgIGlvbi1pdGVtIHtcclxuLy8gICAgICAgICAtLW1pbi1oZWlnaHQ6IDMycHg7XHJcbi8vICAgICAgICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XHJcbi8vICAgICAgICAgLS1pbm5lci1ib3gtc2hhZG93OiBub25lO1xyXG4vLyAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4vLyAgICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbi8vICAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBpb24tY29sIHtcclxuLy8gICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xyXG5cclxuLy8gICAgICAgICAuYnV0dG9uIHtcclxuLy8gICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4vLyAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYmU5ZDRlO1xyXG4vLyAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XHJcbi8vICAgICAgICAgICAgIC0tY29sb3I6ICMwMDA7XHJcbi8vICAgICAgICAgICAgIGhlaWdodDogMzJweDtcclxuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4vLyAgICAgICAgIH1cclxuXHJcbi8vICAgICAgICAgLml0ZW0taGFzLXZhbHVlIHtcclxuLy8gICAgICAgICAgICAgaW9uLXNlbGVjdCB7XHJcbi8vICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjYmU5ZDRlO1xyXG4vLyAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vICAgICBzZWxlY3Qge1xyXG4vLyAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkY2M4OGQ7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbi8vICAgICAgICAgY29sb3I6ICNkY2M4OGQ7XHJcbi8vICAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4vLyAgICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbi8vICAgICB9XHJcbi8vICAgICB1bHtcclxuLy8gICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDVweCk7XHJcbi8vICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbjogMCA1cHggMCAwO1xyXG4vLyAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbi8vICAgICAgICAgbGl7XHJcbi8vICAgICAgICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM4ODg7XHJcblxyXG4vLyAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4vLyAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4vLyAgICAgICAgICAgICB9XHJcblxyXG4vLyAgICAgICAgICAgICBsYWJlbHtcclxuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuXHJcbi8vICAgICAgICAgICAgICAgICBzcGFue1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAycHg7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweCA7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgLnAtcHJpY2V7XHJcbi8vICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuLy8gICAgICAgICB1bHtcclxuLy8gICAgICAgICAgICAgbGl7XHJcbi8vICAgICAgICAgICAgICAgICBsYWJlbHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuICAgIFxyXG4vLyB9XHJcblxyXG4vLyAubm90ZXtcclxuLy8gICAgIHB7XHJcbi8vICAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XHJcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuLy8gICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4vLyAgICAgICAgIGNvbG9yOiAjYWFhYWFhO1xyXG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuLy8gICAgICAgICBzcGFue1xyXG4vLyAgICAgICAgICAgICBjb2xvcjogI2ZmMDAwMDtcclxuLy8gICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMnB4O1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyAuY2FyZEFkZHtcclxuLy8gICAgIGlvbi1idXR0b257XHJcbi8vICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4vLyAgICAgICAgIGZvbnQtd2VpZ2h0OjYwMDtcclxuLy8gICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbi8vICAgICAgICAgY29sb3I6ICMwMDA7XHJcbi8vICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuLy8gICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbi8vICAgICAgICAgaW1ne1xyXG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuLy8gICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9XHJcbi8vIH1cclxuLy8gLmxpcXVvcl9pdGVtc3tcclxuLy8gICAgIGlvbi10aHVtYm5haWx7XHJcbi8vICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIFxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIC5saXF1b3JfaXRlbXMgLml0ZW0gLmRyaW5rX2NvbnRlbnQgLnVuaXRfY2F0ZWdvcnkgdWwgbGkgbGFiZWx7XHJcbi8vICAgICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyAubGlxdW9yX2l0ZW1zIC5pdGVtIC5kcmlua19jb250ZW50IC51bml0X2NhdGVnb3J5IHVsIGxpIHtcclxuLy8gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuLy8gICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAyKSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogIzIxMjEyMTtcclxuICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjEyMTIxO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk91dGZpdFwiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNkY2M4OGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMXB4O1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAtLXBhZGRpbmctdG9wOiAzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIH1cclxuICAgIC5zZWMxIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5jb2xsZWN0aW9uX2Jhbm5lciB7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG5cdFx0aW1nIHtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0bWF4LWhlaWdodDogMTIwcHg7XHJcblx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdH1cclxuXHR9XHJcblxyXG4gICAgLmxpcXVvcl9pdGVtcyBpbWcge1xyXG4gICAgICAgIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIC5jbW9we1xyXG4vLyBcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgIHRvcDogNXB4O1xyXG4vLyAgICAgd2lkdGg6IDMwcHg7XHJcbi8vICAgICBwYWRkaW5nOiA1cHg7XHJcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCAjZDVjMjg5O1xyXG4vLyAgICAgaGVpZ2h0OiAyOHB4O1xyXG4vLyAgICAgYmFja2dyb3VuZDogI2RjYzg4ZDtcclxuLy8gfVxyXG5cclxuXHJcbi5saXF1b3JfaXRlbXMge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgbWFyZ2luOiAwIDAgMTBweDtcclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XHJcblxyXG4gICAgICAgIGlvbi10aHVtYm5haWwge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmRyaW5rX2NvbnRlbnQge1xyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5ub3RlIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGNvbG9yOiAjNTgxNTFjO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogI2YwMDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbn1cclxuLnNlbGVjdF9hcmVhIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbn1cclxuLnNlbGVjdF9ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgJi5vdXRsZXQge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgICBmbGV4OiAxIDAgMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICBjb2xvcjogIzg5ODk4OTtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3Qge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICM4OTg5ODk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2JlOWQ0ZTtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW8tYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW1zLWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcblxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNnB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4OTg5ODk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI2JlOWQ0ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2JlOWQ0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/vaultselected/vaultselected.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/vaultselected/vaultselected.page.ts ***!
  \*****************************************************/
/*! exports provided: VaultselectedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultselectedPage", function() { return VaultselectedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_vault_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/vault.service */ "./src/app/services/vault.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");







let VaultselectedPage = class VaultselectedPage {
    constructor(
    //private userDetails: UserDetailsService,
    vaultProvider, commonProvider, helper, navCtrl, _router) {
        this.vaultProvider = vaultProvider;
        this.commonProvider = commonProvider;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this._router = _router;
        this.liquorMainCategory = []; // liquore Main Category
        this.liquorCategory = []; // liquor Category
        this.vaultCategory = []; // vault Category
        this.vaultCategory_id = ''; // vault Category
        this.filter_vault_category = [];
        this.categoryItems = [];
        this.allItems = [];
        this.selectedMainCategory = 0;
        this.userId = 0;
        this.total_price = 0.0;
        this.vault_selected = '';
        this.UniqueDeviceids = '12345678';
        this.cart_length = [];
        this.cart_item = 0;
        this.total_prices = '';
        this.final_prices = '';
        this.vault_category_id = '';
        this.cart_price = 0;
        this.vault_selected_item_price = "0";
        this.price = 0;
        this.slideOpts = {
            initialSlide: 0,
            speed: 600,
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1.1,
            autoplay: true,
            loop: true,
        };
        this.slideOpts1 = {
            slidesPerView: 3,
            spaceBetween: 10,
            watchSlidesProgress: true,
            initialSlide: 0,
            centeredSlides: false,
            loop: false,
        };
        //this.addToCart = { carts: [] };
        this.userId = localStorage.getItem('user_id');
    }
    ionViewWillEnter() {
    }
    ngOnInit() {
        this.commonProvider.fetchSubCategories("1").then((res) => {
            if (res["status"] == 1) {
                this.liquorCategory = res["sub_categories"];
            }
        });
        this.getCategoryItem("1");
        let data = {
            "device_id": localStorage.getItem('uniqueDeviceID'),
        };
        this.vaultProvider.getVaultCartDetails(data).then((res) => {
            if (res["status"] == '1') {
                console.log(res);
                this.cart_length = res["cartItems"];
                this.cart_item = this.cart_length.length;
            }
        });
    }
    getCategoryItem(id) {
        this.vaultProvider.fetchVaultProducts(id).then((res) => {
            if (res["status"] == 1) {
                this.categoryItems = res["vault_products"];
            }
        });
    }
    // public cartPrice = 0;
    radioButtonSelect(categoryItem, valueSelected) {
        console.log(valueSelected);
        this.vault_selected = valueSelected;
        this.cart_price = Number(this.final_prices) * Number(this.vault_selected);
        // if (this.vault_category_id == "") {
        //   this.helper.showErrorCustom("Please select vault category")
        // } else {
        //   this.vault_selected = valueSelected;
        // }
    }
    compareNDreview() {
        if (this.cart_item == 0) {
            this.helper.showErrorCustom('Please select one item and click cart icon for add to cart');
        }
        else if (this.cart_item >= 1) {
            localStorage.setItem('outletCategory', this.vault_category_id);
            this.navCtrl.navigateForward('/vaultcompare');
        }
    }
    getSelectedBefore(category) {
        return 0;
    }
    select(item) {
        console.log(item);
        this.final_prices = item.price;
        this.vault_category_id = item.vault_category_id;
        this.cart_price = Number(item.price) * Number(this.vault_selected);
        console.log(this.cart_price);
        console.log(this.vault_selected);
    }
    addToCarts(item) {
        console.log('addToCarts', item);
        console.log('vault_selected', this.vault_selected);
        console.log("item>>" + this.cart_item);
        if (this.UniqueDeviceids === "") {
            this.UniqueDeviceids = "12345678";
        }
        else if (this.vault_category_id == undefined) {
            this.helper.presentAlert("Sorry you did not select the vault category");
        }
        else if (this.vault_selected == '') {
            this.helper.presentAlert("Sorry you did not select the quantity");
        }
        else if (this.vault_selected_item_price == '0') {
            this.helper.presentAlert("Sorry you did not select the vault category");
        }
        else {
            let data = {
                "device_id": localStorage.getItem('uniqueDeviceID'),
                "product_id": item.id,
                "product_name": item.name,
                "price": this.vault_selected_item_price,
                "quantity": this.vault_selected,
                "vault_category_id": this.vault_category_id
            };
            console.log("cartDAta>>" + JSON.stringify(data));
            this.vaultProvider.addToVaultCart(data).then((res) => {
                if (res["status"] == '1') {
                    //this.vault_selected_item_price= "0";
                    this.helper.suucessAlert(res["message"]);
                    console.log(res);
                    this.cart_length = res["cartItems"];
                    this.cart_item = res["cartItems"].length;
                    this.total_prices = res["total_price"];
                    //this.compareNDreview();
                }
            });
        }
    }
    /**
     * This method is for displaying category wise products
     * @param response
     */
    pushDataIntoVaultCATEGORYClass(response) {
        // this.addToLiquorItem.liquorItem = []; // doing empty the Interface Class
        this.allItems = response;
        console.log(response);
        this.allItems.forEach((categoryItem) => {
            if (this.allItems.length > 0) {
                let liquorItem = response;
                // pusing the data in to FoodCategory Interface
                this.categoryItems.push({
                    counter: 0,
                    itemId: categoryItem.id,
                    name: categoryItem.name,
                    total: categoryItem.total,
                    current_price: this.filter_vault_category.price,
                    category_id: categoryItem.category_id,
                    sub_category_id: categoryItem.sub_category_id,
                    vault_categories_id: this.filter_vault_category.vault_category_id,
                    vault_category: categoryItem.vault_product_prices,
                    image: categoryItem.image
                });
            }
        });
        console.log("addToLiquorItem", this.categoryItems);
    }
    search() {
        this._router.navigate(['/search']);
    }
    selectVaultCategory(event, item, item1) {
        console.log("val>>" + event.target.value);
        console.log("selected_item>>" + JSON.stringify(item));
        this.vault_category_id = event.target.value;
        console.log("vault_category_id>>" + this.vault_category_id);
        for (let i = 0; i < item.length; i++) {
            if (this.vault_category_id == item[i].vault_category_id) {
                this.price = item[i].price;
                console.log("price_selected>>" + this.price);
                this.vault_selected_item_price = this.price.toString();
                ;
                if (this.UniqueDeviceids === "") {
                    this.UniqueDeviceids = "12345678";
                }
                else if (this.vault_category_id == undefined) {
                    this.helper.presentAlert("Sorry you didnot select the vault category");
                }
                else if (this.vault_category_id == '') {
                    this.helper.presentAlert("Sorry you didnot select the vault category");
                }
                else if (this.vault_selected == '') {
                    this.helper.presentAlert("Sorry you didnot select the quantity");
                }
                else {
                    let data = {
                        "device_id": localStorage.getItem('uniqueDeviceID'),
                        "product_id": item1.id,
                        "product_name": item1.name,
                        "price": this.vault_selected_item_price,
                        "quantity": this.vault_selected,
                        "vault_category_id": this.vault_category_id
                    };
                    console.log("cartDAta>>" + JSON.stringify(data));
                    this.vaultProvider.addToVaultCart(data).then((res) => {
                        if (res["status"] == '1') {
                            //this.vault_selected_item_price= "0";
                            this.helper.suucessAlert(res["message"]);
                            console.log(res);
                            this.cart_length = res["cartItems"];
                            this.cart_item = res["cartItems"].length;
                            this.total_prices = res["total_price"];
                            //this.compareNDreview();
                        }
                    });
                }
                //this.vault_selected_item_price = this.price.toString();;
                break;
            }
            else {
                console.log("nothing match");
            }
        }
        //this.cart_price = Number(price) * Number(this.vault_selected);
        // console.log(event.detail.value);
        // this.vault_selected = event.detail.value;
        // this.cart_price = Number(this.final_prices) * Number(this.vault_selected);
        // if (this.vault_category_id == "") {
        //   this.helper.showErrorCustom("Please select vault category")
        // } else {
        //   this.vault_selected = event.detail.value;
        // }
        // console.log(item);
        // this.final_prices = item.price;
        // this.vault_category_id = event.detail.value;
        // this.cart_price = Number(item.price) * Number(this.vault_selected);
        // console.log(this.cart_price);
        // console.log(this.vault_selected);
        //console.log("cartprice>>"+this.cart_price);
    }
};
VaultselectedPage.ctorParameters = () => [
    { type: src_app_services_vault_service__WEBPACK_IMPORTED_MODULE_5__["VaultProvider"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonProvider"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
VaultselectedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vaultselected',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vaultselected.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vaultselected/vaultselected.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vaultselected.page.scss */ "./src/app/vaultselected/vaultselected.page.scss")).default]
    })
], VaultselectedPage);



/***/ })

}]);
//# sourceMappingURL=vaultselected-vaultselected-module-es2015.js.map