(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderdetailsredeemed-orderdetailsredeemed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetailsredeemed/orderdetailsredeemed.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetailsredeemed/orderdetailsredeemed.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n\t<div class=\"resturant_img_wrap\">\n\t\t<ion-buttons slot=\"start\">\n      \t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n      \t</ion-buttons>\n\t\t<img src=\"assets/img-4.png\">\n\t</div>\n\t<div class=\"order_feedback ion-padding\">\n\t\t<h3 class=\"heading\">Order successfully placed at Orko’ss Restaurant</h3>\n\t\t<p class=\"content\">The order was placed on 29/01/2018 at 04:30 pm.</p>\n\t\t<div class=\"br-1\"></div>\n\t\t<h3 class=\"heading ion-text-center\">Please Rate Your Experience</h3>\n\t\t<ul class=\"rating\">\n\t\t\t<li class=\"active\"><ion-icon name=\"star\"></ion-icon></li>\n\t\t\t<li class=\"active\"><ion-icon name=\"star\"></ion-icon></li>\n\t\t\t<li class=\"active\"><ion-icon name=\"star\"></ion-icon></li>\n\t\t\t<li><ion-icon name=\"star\"></ion-icon></li>\n\t\t\t<li><ion-icon name=\"star\"></ion-icon></li>\n\t\t</ul>\n\t\t<!-- <ion-button class=\"btn-continue btn-continue-mod\" shape=\"round\" routerLink=\"/main\" routerDirection=\"forward\">SUBMIT RATING</ion-button> -->\n\t\t<ion-list class=\"link_wrapper\">\n\t\t\t<ion-item>\n\t          \t<ion-icon slot=\"end\" name=\"chevron-forward\"></ion-icon>\n\t          \t<ion-label>\n\t          \t\t<img slot=\"start\" src=\"assets/cart.png\">\n\t          \t\tView Order Summary\n\t          \t</ion-label>\n\t        </ion-item>\n\t        <ion-item>\n\t          \t<ion-icon slot=\"end\" name=\"chevron-forward\"></ion-icon>\n\t          \t<ion-label>\n\t          \t\t<img slot=\"start\" src=\"assets/support.png\">\n\t          \t\tNeed help? Contact Liquidity Support\n\t          \t</ion-label>\n\t        </ion-item>\n\t    </ion-list>\n\t</div>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/orderdetailsredeemed/orderdetailsredeemed-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/orderdetailsredeemed/orderdetailsredeemed-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OrderdetailsredeemedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsredeemedPageRoutingModule", function() { return OrderdetailsredeemedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orderdetailsredeemed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderdetailsredeemed.page */ "./src/app/orderdetailsredeemed/orderdetailsredeemed.page.ts");




const routes = [
    {
        path: '',
        component: _orderdetailsredeemed_page__WEBPACK_IMPORTED_MODULE_3__["OrderdetailsredeemedPage"]
    }
];
let OrderdetailsredeemedPageRoutingModule = class OrderdetailsredeemedPageRoutingModule {
};
OrderdetailsredeemedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderdetailsredeemedPageRoutingModule);



/***/ }),

/***/ "./src/app/orderdetailsredeemed/orderdetailsredeemed.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/orderdetailsredeemed/orderdetailsredeemed.module.ts ***!
  \*********************************************************************/
/*! exports provided: OrderdetailsredeemedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsredeemedPageModule", function() { return OrderdetailsredeemedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orderdetailsredeemed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderdetailsredeemed-routing.module */ "./src/app/orderdetailsredeemed/orderdetailsredeemed-routing.module.ts");
/* harmony import */ var _orderdetailsredeemed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderdetailsredeemed.page */ "./src/app/orderdetailsredeemed/orderdetailsredeemed.page.ts");







let OrderdetailsredeemedPageModule = class OrderdetailsredeemedPageModule {
};
OrderdetailsredeemedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orderdetailsredeemed_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderdetailsredeemedPageRoutingModule"]
        ],
        declarations: [_orderdetailsredeemed_page__WEBPACK_IMPORTED_MODULE_6__["OrderdetailsredeemedPage"]]
    })
], OrderdetailsredeemedPageModule);



/***/ }),

/***/ "./src/app/orderdetailsredeemed/orderdetailsredeemed.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/orderdetailsredeemed/orderdetailsredeemed.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVyZGV0YWlsc3JlZGVlbWVkL29yZGVyZGV0YWlsc3JlZGVlbWVkLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/orderdetailsredeemed/orderdetailsredeemed.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/orderdetailsredeemed/orderdetailsredeemed.page.ts ***!
  \*******************************************************************/
/*! exports provided: OrderdetailsredeemedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderdetailsredeemedPage", function() { return OrderdetailsredeemedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderdetailsredeemedPage = class OrderdetailsredeemedPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderdetailsredeemedPage.ctorParameters = () => [];
OrderdetailsredeemedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderdetailsredeemed',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderdetailsredeemed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderdetailsredeemed/orderdetailsredeemed.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderdetailsredeemed.page.scss */ "./src/app/orderdetailsredeemed/orderdetailsredeemed.page.scss")).default]
    })
], OrderdetailsredeemedPage);



/***/ })

}]);
//# sourceMappingURL=orderdetailsredeemed-orderdetailsredeemed-module-es2015.js.map