(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlethomecompare-outlethomecompare-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/outlethomecompare/outlethomecompare.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlethomecompare/outlethomecompare.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>outlethomecompare</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-slides pager=\"false\">\n    <ion-slide>\n      <img src=\"assets/img-4.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/img-4.png\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/img-4.png\">\n    </ion-slide>\n  </ion-slides>\n\n  <div class=\"outlet_details\">\n    <span>4.0</span>\n    <h2>Orko'ss Restaurant</h2>\n    <p>E Block, 306, 307, Level 3, Kolkata, Welt Bengal-700121</p>\n\n    <hr />\n\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\">\n          <a href=\"#\">Contact Outlet</a>\n        </ion-col>\n        <ion-col size=\"6\">\n          <a href=\"#\">View house rules</a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"outlet_details\">\n    <span class=\"off_text\">10% off</span>\n    <p class=\"large\">Get 10% off on all online orders placed through Liquidity above $ 1000</p>\n    <h6>Auto applied during checkout</h6>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <a href=\"#\">View online ordering menu <ion-icon name=\"chevron-forward-sharp\"></ion-icon></a>\n  </ion-toolbar>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/outlethomecompare/outlethomecompare-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/outlethomecompare/outlethomecompare-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: OutlethomecomparePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlethomecomparePageRoutingModule", function() { return OutlethomecomparePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _outlethomecompare_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlethomecompare.page */ "./src/app/outlethomecompare/outlethomecompare.page.ts");




const routes = [
    {
        path: '',
        component: _outlethomecompare_page__WEBPACK_IMPORTED_MODULE_3__["OutlethomecomparePage"]
    }
];
let OutlethomecomparePageRoutingModule = class OutlethomecomparePageRoutingModule {
};
OutlethomecomparePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutlethomecomparePageRoutingModule);



/***/ }),

/***/ "./src/app/outlethomecompare/outlethomecompare.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/outlethomecompare/outlethomecompare.module.ts ***!
  \***************************************************************/
/*! exports provided: OutlethomecomparePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlethomecomparePageModule", function() { return OutlethomecomparePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _outlethomecompare_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlethomecompare-routing.module */ "./src/app/outlethomecompare/outlethomecompare-routing.module.ts");
/* harmony import */ var _outlethomecompare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlethomecompare.page */ "./src/app/outlethomecompare/outlethomecompare.page.ts");







let OutlethomecomparePageModule = class OutlethomecomparePageModule {
};
OutlethomecomparePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outlethomecompare_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutlethomecomparePageRoutingModule"]
        ],
        declarations: [_outlethomecompare_page__WEBPACK_IMPORTED_MODULE_6__["OutlethomecomparePage"]]
    })
], OutlethomecomparePageModule);



/***/ }),

/***/ "./src/app/outlethomecompare/outlethomecompare.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/outlethomecompare/outlethomecompare.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #ebeff2;\n}\nion-content .outlet_details {\n  display: block;\n  padding: 20px 25px 10px;\n  background-color: #ffffff;\n  text-align: center;\n  margin-bottom: 30px;\n}\nion-content .outlet_details p {\n  font-size: 10px;\n  color: #828282;\n  font-weight: 600;\n  margin: 0;\n}\nion-content .outlet_details p.large {\n  font-size: 12px;\n}\nion-content .outlet_details span {\n  display: block;\n  border-radius: 50%;\n  background-color: #5ba728;\n  color: #fff;\n  width: 40px;\n  height: 40px;\n  margin: 0 auto;\n  line-height: 40px;\n  font-size: 14px;\n  font-weight: bold;\n  margin-top: -40px;\n  position: relative;\n  z-index: 99;\n}\nion-content .outlet_details h2 {\n  font-size: 20px;\n  color: #33373a;\n  font-weight: bold;\n  margin: 10px 0 5px;\n}\nion-content .outlet_details hr {\n  background-color: #b2b2b2;\n  margin: 15px 0 5px;\n}\nion-content .outlet_details a {\n  display: block;\n  width: 100%;\n  background-color: #dcc88d;\n  color: #000000;\n  border-radius: 4px;\n  font-size: 11px;\n  text-align: center;\n  line-height: 40px;\n  height: 40px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n}\nion-content .outlet_details .off_text {\n  display: block;\n  background-color: #dcc88d;\n  color: #000000;\n  border-radius: 4px;\n  font-size: 13px;\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bold;\n  width: 80px;\n  margin: 0 auto 10px;\n  margin-top: -36px;\n}\nion-content .outlet_details h6 {\n  font-size: 13px;\n  font-weight: bold;\n  color: #5ba728;\n  margin: 5px 0 0;\n}\nion-footer a {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #dcc88d;\n  color: #000000;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-weight: bolder;\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bGV0aG9tZWNvbXBhcmUvb3V0bGV0aG9tZWNvbXBhcmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjtBQUNJO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQ1o7QUFDWTtFQUNJLGVBQUE7QUFDaEI7QUFHUTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFEWjtBQUlRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBRlo7QUFJUTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFGWjtBQUtRO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUhaO0FBS1E7RUFDSSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUhaO0FBS1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUhaO0FBUUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUxSIiwiZmlsZSI6InNyYy9hcHAvb3V0bGV0aG9tZWNvbXBhcmUvb3V0bGV0aG9tZWNvbXBhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2ViZWZmMjtcblxuICAgIC5vdXRsZXRfZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDI1cHggMTBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgICBcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICYubGFyZ2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWJhNzI4O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgIH1cblxuICAgICAgICBoMiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMzczYTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgIGhyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmIyYjI7XG4gICAgICAgICAgICBtYXJnaW46IDE1cHggMCA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNjODhkO1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgICAub2ZmX3RleHQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNjODhkO1xuICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcbiAgICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0zNnB4O1xuICAgICAgICB9XG4gICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6ICM1YmE3Mjg7XG4gICAgICAgICAgICBtYXJnaW46IDVweCAwIDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tZm9vdGVyIHtcbiAgICBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2M4OGQ7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwOyAgICAgICBcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/outlethomecompare/outlethomecompare.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/outlethomecompare/outlethomecompare.page.ts ***!
  \*************************************************************/
/*! exports provided: OutlethomecomparePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutlethomecomparePage", function() { return OutlethomecomparePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let OutlethomecomparePage = class OutlethomecomparePage {
    constructor() { }
    ngOnInit() {
    }
};
OutlethomecomparePage.ctorParameters = () => [];
OutlethomecomparePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-outlethomecompare',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outlethomecompare.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/outlethomecompare/outlethomecompare.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./outlethomecompare.page.scss */ "./src/app/outlethomecompare/outlethomecompare.page.scss")).default]
    })
], OutlethomecomparePage);



/***/ })

}]);
//# sourceMappingURL=outlethomecompare-outlethomecompare-module-es2015.js.map