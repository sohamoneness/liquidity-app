(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-main-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n      <!-- <ion-buttons slot=\"start\">\n        <ion-menu-button ></ion-menu-button>\n\t  </ion-buttons> -->\n\t  <ion-buttons slot=\"start\">\n\t\t<ion-button (click)=\"openMenu()\">\n\t\t  <ion-icon slot=\"icon-only\" name=\"menu-outline\"></ion-icon>\n\t\t</ion-button>\n\t  </ion-buttons>\n      <!-- <ion-title>SELECTED LOCATION</ion-title> -->\n      <ion-label>SELECTED LOCATION</ion-label>\n      <ion-item>\n\t\t  <ion-select value=\"kolkata\">\n\t\t    <ion-select-option selected value=\"kolkata\">kolkata</ion-select-option>\n\t\t    <ion-select-option value=\"mumbai\">mumbai</ion-select-option>\n\t\t    <ion-select-option value=\"bangalore\">bangalore</ion-select-option>\n\t\t    <ion-select-option value=\"delhi\">delhi</ion-select-option>\n\t\t  </ion-select>\n\t\t</ion-item>\n\t\t<!-- <ion-icon slot=\"end\" class=\"search_item\" name=\"search-outline\"></ion-icon> -->\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\t<div class=\"title_bar\">\n\t\t<h2 class=\"title\">restaurants delivery</h2>\n\t</div>\n\t<div class=\"slide_item\">\n\t\t<!-- <ion-slides pager=\"false\" [options]=\"slideOpts\"> -->\n\t\t<ion-slides pager=\"false\">\n\n\t        <ion-slide *ngFor=\"let item of all_liquor_shop\" (click)=\"gotoshopproduct(item.id)\">\n\t          <div class=\"slide_box\">\n\t          \t<span class=\"rating\">3.4</span>\n\t            <div class=\"img_wrap\" style=\"background: url({{item.image}}) no-repeat center; background-size: cover;\"></div>\n\t            <div class=\"box_content\">\n\t            \t<h2>{{item.liquorShopName}}</h2>\n\t\t            <p>{{item.liquorLocation}}</p>\n\t            </div>\n\t          </div>\n\t        </ion-slide>\n\n\t        <!-- <ion-slide>\n\t          <div class=\"slide_box\">\n\t          \t<span class=\"rating\">3.4</span>\n\t            <div class=\"img_wrap\"style=\"background: url(assets/img-2.png) no-repeat center; background-size: cover;\"></div>\n\t            <div class=\"box_content\">\n\t            \t<h2>Orko’ss Restaurant</h2>\n\t\t            <p>E Block, 306, 307, Level 3, Kolkata, West Bengal-700064</p>\n\t            </div>\n\t          </div>\n\t        </ion-slide>\n\n\t        <ion-slide>\n\t          <div class=\"slide_box\">\n\t          \t<span class=\"rating\">3.4</span>\n\t            <div class=\"img_wrap\"style=\"background: url(assets/img-1.png) no-repeat center; background-size: cover;\"></div>\n\t            <div class=\"box_content\">\n\t            \t<h2>Orko’ss Restaurant</h2>\n\t\t            <p>E Block, 306, 307, Level 3, Kolkata, West Bengal-700064</p>\n\t            </div>\n\t          </div>\n\t        </ion-slide>\n\n\t        <ion-slide>\n\t          <div class=\"slide_box\">\n\t          \t<span class=\"rating\">3.4</span>\n\t            <div class=\"img_wrap\"style=\"background: url(assets/img-2.png) no-repeat center; background-size: cover;\"></div>\n\t            <div class=\"box_content\">\n\t            \t<h2>Orko’ss Restaurant</h2>\n\t\t            <p>E Block, 306, 307, Level 3, Kolkata, West Bengal-700064</p>\n\t            </div>\n\t          </div>\n\t        </ion-slide> -->\n\n      \t</ion-slides>\t\n\t</div>\n\t<div class=\"title_bar\">\n\t\t<h2 class=\"title\">All restaurants</h2>\n\t</div>\n\t<div class=\"slide_item slide_item--mod\">\n\t\t<ion-row class=\"ion-no-padding\">\n\t\t    <ion-col size=\"4\" class=\"ion-no-padding\" *ngFor=\"let item of all_liquor_shop\">\n\t\t    \t<div class=\"slide_box\">\n\t\t          \t<span class=\"rating\">3.4</span>\n\t\t            <div class=\"img_wrap\" style=\"background: url({{item.image}}) no-repeat center; background-size: cover;\"></div>\n\t\t            <div class=\"box_content\">\n\t\t            \t<h2>{{item.liquorShopName}}</h2>\n\t\t\t            <p>{{item.liquorLocation}}</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </ion-col>\n<!-- \t\t    <ion-col size=\"4\" class=\"ion-no-padding\">\n\t\t    \t<div class=\"slide_box\">\n\t\t          \t<span class=\"rating\">3.4</span>\n\t\t            <div class=\"img_wrap\" style=\"background: url(assets/img-2.png) no-repeat center; background-size: cover;\"></div>\n\t\t            <div class=\"box_content\">\n\t\t            \t<h2>Orko’ss Restaurant</h2>\n\t\t\t            <p>E Block, 306, 307, Level 3, Kolkata, West Bengal-700064</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </ion-col>\n\t\t    <ion-col size=\"4\" class=\"ion-no-padding\">\n\t\t    \t<div class=\"slide_box\">\n\t\t          \t<span class=\"rating\">3.4</span>\n\t\t            <div class=\"img_wrap\" style=\"background: url(assets/img-3.png) no-repeat center; background-size: cover;\"></div>\n\t\t            <div class=\"box_content\">\n\t\t            \t<h2>Orko’ss Restaurant</h2>\n\t\t\t            <p>E Block, 306, 307, Level 3, Kolkata, West Bengal-700064</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </ion-col>\n\t\t    <ion-col size=\"4\" class=\"ion-no-padding\">\n\t\t    \t<div class=\"slide_box\">\n\t\t          \t<span class=\"rating\">3.4</span>\n\t\t            <div class=\"img_wrap\" style=\"background: url(assets/img-1.png) no-repeat center; background-size: cover;\"></div>\n\t\t            <div class=\"box_content\">\n\t\t            \t<h2>Orko’ss Restaurant</h2>\n\t\t\t            <p>E Block, 306, 307, Level 3, Kolkata, West Bengal-700064</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </ion-col>\n\t\t    <ion-col size=\"4\" class=\"ion-no-padding\">\n\t\t    \t<div class=\"slide_box\">\n\t\t          \t<span class=\"rating\">3.4</span>\n\t\t            <div class=\"img_wrap\" style=\"background: url(assets/img-2.png) no-repeat center; background-size: cover;\"></div>\n\t\t            <div class=\"box_content\">\n\t\t            \t<h2>Orko’ss Restaurant</h2>\n\t\t\t            <p>E Block, 306, 307, Level 3, Kolkata, West Bengal-700064</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </ion-col>\n\t\t    <ion-col size=\"4\" class=\"ion-no-padding\">\n\t\t    \t<div class=\"slide_box\">\n\t\t          \t<span class=\"rating\">3.4</span>\n\t\t            <div class=\"img_wrap\" style=\"background: url(assets/img-3.png) no-repeat center; background-size: cover;\"></div>\n\t\t            <div class=\"box_content\">\n\t\t            \t<h2>Orko’ss Restaurant</h2>\n\t\t\t            <p>E Block, 306, 307, Level 3, Kolkata, West Bengal-700064</p>\n\t\t            </div>\n\t\t        </div>\n\t\t    </ion-col> -->\n\t\t</ion-row>\n\t</div>\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n  \t<div class=\"footer_item_start\">\n  \t\t<img src=\"assets/search.png\">\n  \t\t<p>Search</p>\n  \t</div>\n  \t<div class=\"footer_item_end mw_230\">\n  \t\t<img src=\"assets/cart.png\">\n  \t\t<p>CART</p>\n  \t\t<img src=\"assets/arrow-right.png\">\n  \t</div>\n  </div>\n</ion-footer>\n\n");

/***/ }),

/***/ "./src/app/main/main-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/main/main-routing.module.ts ***!
  \*********************************************/
/*! exports provided: MainPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageRoutingModule", function() { return MainPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_3__["MainPage"]
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MainPageRoutingModule);



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageModule", function() { return MainPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-routing.module */ "./src/app/main/main-routing.module.ts");
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.page */ "./src/app/main/main.page.ts");







let MainPageModule = class MainPageModule {
};
MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _main_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainPageRoutingModule"]
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
    })
], MainPageModule);



/***/ }),

/***/ "./src/app/main/main.page.scss":
/*!*************************************!*\
  !*** ./src/app/main/main.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/main/main.page.ts":
/*!***********************************!*\
  !*** ./src/app/main/main.page.ts ***!
  \***********************************/
/*! exports provided: MainPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPage", function() { return MainPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-details.service */ "./src/app/services/user-details.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let MainPage = class MainPage {
    constructor(authService, navCtrl, userDetails, alertCtrl, helper, plt, menu) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.userDetails = userDetails;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.plt = plt;
        this.menu = menu;
        this.all_liquor_shop = [];
    }
    ngOnInit() {
        let uId = this.authService.getUserId();
        localStorage.setItem("user_id", uId);
        this.userDetails.getAllliquorshops().subscribe((data) => {
            this.all_liquor_shop = data;
            console.log(this.all_liquor_shop);
            this.helper.dismissLoader();
        }, (err) => {
            console.log(err);
        });
    }
    gotoshopproduct(liquorshopid) {
        this.navCtrl.navigateForward('/outlethome');
        localStorage.setItem("liquorshopid", liquorshopid);
    }
    openMenu() {
        this.menu.enable(true, 'content');
        this.menu.open('content');
    }
};
MainPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.page.scss */ "./src/app/main/main.page.scss")).default]
    })
], MainPage);



/***/ })

}]);
//# sourceMappingURL=main-main-module-es2015.js.map