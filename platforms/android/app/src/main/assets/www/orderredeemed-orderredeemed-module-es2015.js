(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["orderredeemed-orderredeemed-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderredeemed/orderredeemed.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orderredeemed/orderredeemed.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>orderredeemed</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/orderredeemed/orderredeemed-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/orderredeemed/orderredeemed-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OrderredeemedPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderredeemedPageRoutingModule", function() { return OrderredeemedPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _orderredeemed_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderredeemed.page */ "./src/app/orderredeemed/orderredeemed.page.ts");




const routes = [
    {
        path: '',
        component: _orderredeemed_page__WEBPACK_IMPORTED_MODULE_3__["OrderredeemedPage"]
    }
];
let OrderredeemedPageRoutingModule = class OrderredeemedPageRoutingModule {
};
OrderredeemedPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderredeemedPageRoutingModule);



/***/ }),

/***/ "./src/app/orderredeemed/orderredeemed.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/orderredeemed/orderredeemed.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderredeemedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderredeemedPageModule", function() { return OrderredeemedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _orderredeemed_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./orderredeemed-routing.module */ "./src/app/orderredeemed/orderredeemed-routing.module.ts");
/* harmony import */ var _orderredeemed_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orderredeemed.page */ "./src/app/orderredeemed/orderredeemed.page.ts");







let OrderredeemedPageModule = class OrderredeemedPageModule {
};
OrderredeemedPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _orderredeemed_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderredeemedPageRoutingModule"]
        ],
        declarations: [_orderredeemed_page__WEBPACK_IMPORTED_MODULE_6__["OrderredeemedPage"]]
    })
], OrderredeemedPageModule);



/***/ }),

/***/ "./src/app/orderredeemed/orderredeemed.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/orderredeemed/orderredeemed.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZGVycmVkZWVtZWQvb3JkZXJyZWRlZW1lZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/orderredeemed/orderredeemed.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/orderredeemed/orderredeemed.page.ts ***!
  \*****************************************************/
/*! exports provided: OrderredeemedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderredeemedPage", function() { return OrderredeemedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OrderredeemedPage = class OrderredeemedPage {
    constructor() { }
    ngOnInit() {
    }
};
OrderredeemedPage.ctorParameters = () => [];
OrderredeemedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-orderredeemed',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./orderredeemed.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/orderredeemed/orderredeemed.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./orderredeemed.page.scss */ "./src/app/orderredeemed/orderredeemed.page.scss")).default]
    })
], OrderredeemedPage);



/***/ })

}]);
//# sourceMappingURL=orderredeemed-orderredeemed-module-es2015.js.map