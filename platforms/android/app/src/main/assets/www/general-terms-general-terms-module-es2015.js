(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["general-terms-general-terms-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-terms/general-terms.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/general-terms/general-terms.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n  \t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>General Terms</ion-title>\n  <ion-icon slot=\"end\" class=\"search_item\" name=\"search-outline\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/general-terms/general-terms-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/general-terms/general-terms-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: GeneralTermsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTermsPageRoutingModule", function() { return GeneralTermsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _general_terms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general-terms.page */ "./src/app/general-terms/general-terms.page.ts");




const routes = [
    {
        path: '',
        component: _general_terms_page__WEBPACK_IMPORTED_MODULE_3__["GeneralTermsPage"]
    }
];
let GeneralTermsPageRoutingModule = class GeneralTermsPageRoutingModule {
};
GeneralTermsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GeneralTermsPageRoutingModule);



/***/ }),

/***/ "./src/app/general-terms/general-terms.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/general-terms/general-terms.module.ts ***!
  \*******************************************************/
/*! exports provided: GeneralTermsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTermsPageModule", function() { return GeneralTermsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _general_terms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./general-terms-routing.module */ "./src/app/general-terms/general-terms-routing.module.ts");
/* harmony import */ var _general_terms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./general-terms.page */ "./src/app/general-terms/general-terms.page.ts");







let GeneralTermsPageModule = class GeneralTermsPageModule {
};
GeneralTermsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _general_terms_routing_module__WEBPACK_IMPORTED_MODULE_5__["GeneralTermsPageRoutingModule"]
        ],
        declarations: [_general_terms_page__WEBPACK_IMPORTED_MODULE_6__["GeneralTermsPage"]]
    })
], GeneralTermsPageModule);



/***/ }),

/***/ "./src/app/general-terms/general-terms.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/general-terms/general-terms.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYWwtdGVybXMvZ2VuZXJhbC10ZXJtcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/general-terms/general-terms.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/general-terms/general-terms.page.ts ***!
  \*****************************************************/
/*! exports provided: GeneralTermsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralTermsPage", function() { return GeneralTermsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let GeneralTermsPage = class GeneralTermsPage {
    constructor() { }
    ngOnInit() {
    }
};
GeneralTermsPage.ctorParameters = () => [];
GeneralTermsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-general-terms',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./general-terms.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/general-terms/general-terms.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./general-terms.page.scss */ "./src/app/general-terms/general-terms.page.scss")).default]
    })
], GeneralTermsPage);



/***/ })

}]);
//# sourceMappingURL=general-terms-general-terms-module-es2015.js.map