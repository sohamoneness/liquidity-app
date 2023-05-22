(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-slide-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen class=\"ion-padding\" scroll-y=\"false\">\n  <!-- <ion-slides pager=\"true\" [options]=\"slideOpts\"> -->\n  <ion-slides pager=\"true\">\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"assets/compare.png\"/>\n          <h2>COMPARE</h2>\n          <p>Compare LIVE prices of your drinks at multiple outlets & buy at lowest price.</p>\n          <ion-button class=\"btn-continue\" shape=\"round\" (click)=\"continue()\">SKIP</ion-button>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"assets/reserve.png\"/>\n          <h2>RESERVE</h2>\n          <p>Reserve drinks, food and table at lowest rate across multiple outlets in your city.</p>\n          <ion-button class=\"btn-continue\" shape=\"round\" (click)=\"continue()\">SKIP</ion-button>\n        </div>\n      </ion-slide>\n\n      <ion-slide>\n        <div class=\"slide\">\n          <img src=\"assets/redeem.png\"/>\n          <h2>REDEEM</h2>\n          <p>Redeem your reserved drink & food and enjoy hassle free experience only through Liquidity.</p>\n          <ion-button class=\"btn-continue\" shape=\"round\" (click)=\"continue()\">Continue</ion-button>\n        </div>\n      </ion-slide>\n\n  </ion-slides>\n</ion-content>");

/***/ }),

/***/ "./src/app/slide/slide-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/slide/slide-routing.module.ts ***!
  \***********************************************/
/*! exports provided: SlidePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePageRoutingModule", function() { return SlidePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _slide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slide.page */ "./src/app/slide/slide.page.ts");




const routes = [
    {
        path: '',
        component: _slide_page__WEBPACK_IMPORTED_MODULE_3__["SlidePage"]
    }
];
let SlidePageRoutingModule = class SlidePageRoutingModule {
};
SlidePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SlidePageRoutingModule);



/***/ }),

/***/ "./src/app/slide/slide.module.ts":
/*!***************************************!*\
  !*** ./src/app/slide/slide.module.ts ***!
  \***************************************/
/*! exports provided: SlidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePageModule", function() { return SlidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _slide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slide-routing.module */ "./src/app/slide/slide-routing.module.ts");
/* harmony import */ var _slide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide.page */ "./src/app/slide/slide.page.ts");







let SlidePageModule = class SlidePageModule {
};
SlidePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _slide_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidePageRoutingModule"]
        ],
        declarations: [_slide_page__WEBPACK_IMPORTED_MODULE_6__["SlidePage"]]
    })
], SlidePageModule);



/***/ }),

/***/ "./src/app/slide/slide.page.scss":
/*!***************************************!*\
  !*** ./src/app/slide/slide.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('BG.png') no-repeat center center / cover;\n}\nion-content ion-slides {\n  height: 100%;\n}\nion-content .slide {\n  padding: 0 25px 50px;\n  display: block;\n}\nion-content .slide img {\n  display: block;\n  margin: 98px auto 50px;\n  width: auto;\n  height: 250px;\n}\nion-content .slide h2 {\n  color: #dcc88d;\n  font-size: 19px;\n  text-transform: uppercase;\n  font-family: \"Outfit\";\n  font-weight: 900;\n}\nion-content .slide p {\n  color: #ffffff;\n  font-size: 12px;\n  font-family: \"Outfit\";\n  margin: 21px 0 20px;\n  font-weight: normal;\n}\nion-content .swiper-pagination-bullets {\n  bottom: 109px !important;\n  --bullet-background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGUvc2xpZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMkRBQUE7QUFDRDtBQUNDO0VBQ0MsWUFBQTtBQUNGO0FBQ0M7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUFDTDtBQUNFO0VBQ0MsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDSDtBQUVFO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFBSDtBQUVFO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNHLG1CQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUdDO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtBQURMIiwiZmlsZSI6InNyYy9hcHAvc2xpZGUvc2xpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvQkcucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuXG5cdGlvbi1zbGlkZXMge1xuXHRcdGhlaWdodDogMTAwJTtcblx0fVxuXHQuc2xpZGUge1xuXHQgICAgcGFkZGluZzogMCAyNXB4IDUwcHg7XG5cdCAgICBkaXNwbGF5OiBibG9jaztcblxuXHRcdGltZyB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdG1hcmdpbjogOThweCBhdXRvIDUwcHg7XG5cdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdGhlaWdodDogMjUwcHg7XG5cdFx0fVxuXG5cdFx0aDIge1xuXHRcdFx0Y29sb3I6ICNkY2M4OGQ7XG5cdFx0XHRmb250LXNpemU6IDE5cHg7XG5cdFx0XHR0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiT3V0Zml0XCI7XG5cdFx0XHRmb250LXdlaWdodDogOTAwO1xuXHRcdH1cblx0XHRwIHtcblx0XHRcdGNvbG9yOiAjZmZmZmZmO1xuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdFx0Zm9udC1mYW1pbHk6IFwiT3V0Zml0XCI7XG5cdFx0ICAgIG1hcmdpbjogMjFweCAwIDIwcHg7XG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdFx0fVxuXHR9XG5cdC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcblx0ICAgIGJvdHRvbTogMTA5cHggIWltcG9ydGFudDtcblx0ICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6ICNmZmY7XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/slide/slide.page.ts":
/*!*************************************!*\
  !*** ./src/app/slide/slide.page.ts ***!
  \*************************************/
/*! exports provided: SlidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePage", function() { return SlidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







// import { FormGroup, Validators, FormBuilder } from '@angular/forms';

let SlidePage = class SlidePage {
    constructor(authService, navCtrl, 
    // public formBuilder: FormBuilder,
    toastController, helper, router, platform, cdr, modalController, location, alertController, menuCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.helper = helper;
        this.router = router;
        this.platform = platform;
        this.cdr = cdr;
        this.modalController = modalController;
        this.location = location;
        this.alertController = alertController;
        this.menuCtrl = menuCtrl;
        this.slideOpts = [];
    }
    ngOnInit() {
    }
    continue() {
        // this.navCtrl.navigateRoot("/login")
        this.navCtrl.navigateRoot("/login-otp");
    }
};
SlidePage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] }
];
SlidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-slide',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./slide.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./slide.page.scss */ "./src/app/slide/slide.page.scss")).default]
    })
], SlidePage);



/***/ })

}]);
//# sourceMappingURL=slide-slide-module-es2015.js.map