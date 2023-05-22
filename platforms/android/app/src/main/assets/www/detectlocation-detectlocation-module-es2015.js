(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detectlocation-detectlocation-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detectlocation/detectlocation.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detectlocation/detectlocation.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n      </ion-buttons>\n    <ion-title>Select Location</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"location_detect\">\n\t\t<div class=\"location_detect_inner\">\n\t\t\t<p>Detect My Location</p>\n\t\t</div>\n\t</div>\n\t<ion-searchbar showCancelButton=\"focus\" placeholder=\"Enter a location manually...\"></ion-searchbar>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/detectlocation/detectlocation-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/detectlocation/detectlocation-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DetectlocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectlocationPageRoutingModule", function() { return DetectlocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _detectlocation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detectlocation.page */ "./src/app/detectlocation/detectlocation.page.ts");




const routes = [
    {
        path: '',
        component: _detectlocation_page__WEBPACK_IMPORTED_MODULE_3__["DetectlocationPage"]
    }
];
let DetectlocationPageRoutingModule = class DetectlocationPageRoutingModule {
};
DetectlocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetectlocationPageRoutingModule);



/***/ }),

/***/ "./src/app/detectlocation/detectlocation.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/detectlocation/detectlocation.module.ts ***!
  \*********************************************************/
/*! exports provided: DetectlocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectlocationPageModule", function() { return DetectlocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _detectlocation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detectlocation-routing.module */ "./src/app/detectlocation/detectlocation-routing.module.ts");
/* harmony import */ var _detectlocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detectlocation.page */ "./src/app/detectlocation/detectlocation.page.ts");







let DetectlocationPageModule = class DetectlocationPageModule {
};
DetectlocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detectlocation_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetectlocationPageRoutingModule"]
        ],
        declarations: [_detectlocation_page__WEBPACK_IMPORTED_MODULE_6__["DetectlocationPage"]]
    })
], DetectlocationPageModule);



/***/ }),

/***/ "./src/app/detectlocation/detectlocation.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/detectlocation/detectlocation.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #eceff1;\n}\nion-content ion-searchbar {\n  padding: 0;\n  --box-shadow: none;\n  height: 53px;\n  background-color: #fff;\n  --placeholder-color: #808080;\n  --placeholder-font-weight: 600;\n  --placeholder-font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0ZWN0bG9jYXRpb24vZGV0ZWN0bG9jYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7QUFDRDtBQUNDO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSw4QkFBQTtFQUNBLDZCQUFBO0FBQ0wiLCJmaWxlIjoic3JjL2FwcC9kZXRlY3Rsb2NhdGlvbi9kZXRlY3Rsb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogI2VjZWZmMTtcblxuXHRpb24tc2VhcmNoYmFyIHtcblx0ICAgIHBhZGRpbmc6IDA7XG5cdCAgICAtLWJveC1zaGFkb3c6IG5vbmU7XG5cdCAgICBoZWlnaHQ6IDUzcHg7XG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHQgICAgLS1wbGFjZWhvbGRlci1jb2xvcjogIzgwODA4MDtcblx0ICAgIC0tcGxhY2Vob2xkZXItZm9udC13ZWlnaHQ6IDYwMDtcblx0ICAgIC0tcGxhY2Vob2xkZXItZm9udC1zaXplOiAxM3B4O1xuXHR9XG59Il19 */");

/***/ }),

/***/ "./src/app/detectlocation/detectlocation.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/detectlocation/detectlocation.page.ts ***!
  \*******************************************************/
/*! exports provided: DetectlocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetectlocationPage", function() { return DetectlocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let DetectlocationPage = class DetectlocationPage {
    constructor() { }
    ngOnInit() {
    }
};
DetectlocationPage.ctorParameters = () => [];
DetectlocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detectlocation',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./detectlocation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detectlocation/detectlocation.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./detectlocation.page.scss */ "./src/app/detectlocation/detectlocation.page.scss")).default]
    })
], DetectlocationPage);



/***/ })

}]);
//# sourceMappingURL=detectlocation-detectlocation-module-es2015.js.map