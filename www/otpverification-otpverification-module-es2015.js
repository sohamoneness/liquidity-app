(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otpverification-otpverification-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<!-- <ion-content class=\"ion-padding\">\n\t<div>\n\t\t<p class=\"otp_title\">Enter the OTP your received</p>\n\t\t<div class=\"otp_wrapper\">\n\t\t\t<ion-input placeholder=\"Enter Your OTP\" required=\"true\" maxLength=\"6\" [(ngModel)]=\"otp\"></ion-input>\n\t\t</div>\n\t\t<p class=\"otp_content\">We will never share your number or spam you!</p>\n\t\t<ion-button class=\"btn-continue\" shape=\"round\" routerLink=\"/login\" routerDirection=\"forward\" (click)=\"verify_otp()\">Submit</ion-button>\n\t\t<p class=\"sign_in\" (click)=\"send_otp()\">Didn’t receive the OTP? <span>Send Again</span></p>\n\t</div>\n</ion-content> -->\n\n<ion-header>\n\t<ion-toolbar>\n\t\t<ion-title>OTP</ion-title>\n\t</ion-toolbar>\n  </ion-header>\n\n<ion-content>\n\t<div class=\"login_section\">\n\t\t<div class=\"otp_section\">\n\t\t\t<img src=\"../../assets/otp-icon.svg\">\n\t\t\t<h3>Verification Code</h3>\n\t\t\t<p class=\"otp_title\">We have sent verification code to<br/>your mobile number.</p>\n\t\t\t<ion-input type=\"tel\" placeholder=\"Enter Your OTP\" required=\"true\" maxlength=\"6\" maxlength=\"6\" [(ngModel)]=\"otp\" class=\"custom-class\"></ion-input>\n\t\t\t<ion-button class=\"btn-continue\" shape=\"round\" routerDirection=\"forward\" (click)=\"submitOtpVerification()\">Submit</ion-button>\n\t\t\t<p class=\"otp_content\">We will never share your number or spam you!</p>\n\t\t</div>\n\t\t<p class=\"sign_in\" (click)=\"resendOtp()\">Didn’t receive the OTP? <span>Send Again</span></p>\n\t</div>\n\t\n</ion-content>\n");

/***/ }),

/***/ "./src/app/otpverification/otpverification-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/otpverification/otpverification-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: OtpverificationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpverificationPageRoutingModule", function() { return OtpverificationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _otpverification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otpverification.page */ "./src/app/otpverification/otpverification.page.ts");




const routes = [
    {
        path: '',
        component: _otpverification_page__WEBPACK_IMPORTED_MODULE_3__["OtpverificationPage"]
    }
];
let OtpverificationPageRoutingModule = class OtpverificationPageRoutingModule {
};
OtpverificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtpverificationPageRoutingModule);



/***/ }),

/***/ "./src/app/otpverification/otpverification.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/otpverification/otpverification.module.ts ***!
  \***********************************************************/
/*! exports provided: OtpverificationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpverificationPageModule", function() { return OtpverificationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _otpverification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otpverification-routing.module */ "./src/app/otpverification/otpverification-routing.module.ts");
/* harmony import */ var _otpverification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otpverification.page */ "./src/app/otpverification/otpverification.page.ts");







let OtpverificationPageModule = class OtpverificationPageModule {
};
OtpverificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _otpverification_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpverificationPageRoutingModule"]
        ],
        declarations: [_otpverification_page__WEBPACK_IMPORTED_MODULE_6__["OtpverificationPage"]]
    })
], OtpverificationPageModule);



/***/ }),

/***/ "./src/app/otpverification/otpverification.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/otpverification/otpverification.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n}\nion-content .login_section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nion-content .login_section .otp_section {\n  display: block;\n  width: 100%;\n  max-width: calc(100% - 32px);\n  margin: auto 0 0;\n  color: #000;\n  text-align: center;\n}\nion-content .login_section .otp_section img {\n  max-width: 240px;\n}\nion-content .login_section .otp_section .button {\n  height: 52px;\n  width: 100%;\n}\nion-content .login_section .otp_section h3 {\n  font-size: 24px;\n}\nion-content .login_section .otp_section p {\n  line-height: 1.6;\n  color: #888;\n}\nion-content .login_section .otp_section p.sign_in {\n  margin: 32px 0;\n}\nion-content .login_section .otp_section p.sign_in span {\n  color: #dcc88d;\n}\nion-content ion-input {\n  --background: #f7f7f7;\n  margin-bottom: 16px;\n  border-radius: 30px;\n  line-height: 20px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n  --padding-start: 0;\n}\nion-content .btn-continue {\n  margin-bottom: 0;\n}\nion-content p.sign_in {\n  margin: 32px 0;\n}\nion-content p.sign_in span {\n  color: #dcc88d;\n}\nion-content p.otp_title {\n  font-size: 20px;\n  line-height: 1.2;\n}\nion-content .otpbg {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\nion-content .otpbg .col {\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n  padding: 35px 15px;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\nion-content .otp_title {\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  color: #fff;\n}\nion-content .otp_wrapper {\n  max-width: 237px;\n  margin: 0 auto;\n}\nion-content .otp_wrapper ion-input {\n  border: 1px solid #eee;\n  background: #f7f7f7;\n  color: #000;\n  text-align: center;\n  --padding-top: 5px;\n  --padding-end: 0;\n  --padding-bottom: 5px;\n  --padding-start: 0;\n  font-size: 26px;\n  line-height: 25px;\n  font-weight: 500;\n}\nion-content p.otp_content {\n  margin-top: 28px;\n  color: #fff;\n  font-weight: 400;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n}\nion-header ion-title {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwdmVyaWZpY2F0aW9uL290cHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxrQkFBQTtBQUNEO0FBTUM7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUpGO0FBTUU7RUFDQyxjQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFKSDtBQU1HO0VBQ0MsZ0JBQUE7QUFKSjtBQU9HO0VBQ0MsWUFBQTtFQUNBLFdBQUE7QUFMSjtBQU9HO0VBQ0MsZUFBQTtBQUxKO0FBT0c7RUFDQyxnQkFBQTtFQUNBLFdBQUE7QUFMSjtBQU9JO0VBQ0MsY0FBQTtBQUxMO0FBTUs7RUFDQyxjQUFBO0FBSk47QUFXQztFQUNDLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBVEY7QUFXQztFQUNDLGdCQUFBO0FBVEY7QUFZQztFQUNDLGNBQUE7QUFWRjtBQVlFO0VBQ0MsY0FBQTtBQVZIO0FBYUM7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFYRjtBQWNDO0VBQ0MsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBWkY7QUFjRTtFQUNDLG9DQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtBQVpIO0FBZUM7RUFDQyxlQUFBO0VBQ0csZ0JBQUE7RUFDSCxrQkFBQTtFQUNBLFdBQUE7QUFiRjtBQWdCQztFQUNJLGdCQUFBO0VBQ0gsY0FBQTtBQWRGO0FBZ0JFO0VBQ0ksc0JBQUE7RUFDSCxtQkFBQTtFQUNHLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFkTjtBQW1CRTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNHLHFCQUFBO0FBakJOO0FBd0JDO0VBQ0Msa0JBQUE7QUFyQkYiLCJmaWxlIjoic3JjL2FwcC9vdHB2ZXJpZmljYXRpb24vb3RwdmVyaWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiAjZmZmO1xuXHQvLy0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9nbGFzcy13aGlza2V5LWJvdXJib24tb25seS13aXRoLWljZS5qcGcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XG5cdC8vIC0tcGFkZGluZy10b3A6IDgwcHg7XG5cdC8vIC0tcGFkZGluZy1zdGFydDogNDBweDtcblx0Ly8gLS1wYWRkaW5nLWVuZDogNDBweDtcblx0Ly8gLS1wYWRkaW5nLWJvdHRvbTogMjVweDtcblxuXHQubG9naW5fc2VjdGlvbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXG5cdFx0Lm90cF9zZWN0aW9uIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuXHRcdFx0bWFyZ2luOiBhdXRvIDAgMDtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHRtYXgtd2lkdGg6IDI0MHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuYnV0dG9uIHtcblx0XHRcdFx0aGVpZ2h0OiA1MnB4O1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdH1cblx0XHRcdGgzIHtcblx0XHRcdFx0Zm9udC1zaXplOiAyNHB4O1xuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjY7XG5cdFx0XHRcdGNvbG9yOiAjODg4O1xuXG5cdFx0XHRcdCYuc2lnbl9pbiB7XG5cdFx0XHRcdFx0bWFyZ2luOiAzMnB4IDA7XG5cdFx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0XHRjb2xvcjogI2RjYzg4ZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRpb24taW5wdXQge1xuXHRcdC0tYmFja2dyb3VuZDogI2Y3ZjdmNztcblx0XHRtYXJnaW4tYm90dG9tOiAxNnB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDMwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XG5cdFx0LS1wYWRkaW5nLXRvcDogMTZweDtcblx0XHQtLXBhZGRpbmctYm90dG9tOiAxNnB4O1xuXHRcdC0tcGFkZGluZy1zdGFydDogMDtcblx0fVxuXHQuYnRuLWNvbnRpbnVlIHtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHR9XG5cblx0cC5zaWduX2luIHtcblx0XHRtYXJnaW46IDMycHggMDtcblxuXHRcdHNwYW4ge1xuXHRcdFx0Y29sb3I6ICNkY2M4OGQ7XG5cdFx0fVxuXHR9XG5cdHAub3RwX3RpdGxlIHtcblx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0bGluZS1oZWlnaHQ6IDEuMjtcblx0fVxuXG5cdC5vdHBiZ3tcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0LmNvbHtcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRwYWRkaW5nOiAzNXB4IDE1cHg7XG5cdFx0XHRib3gtc2hhZG93OiAwIDFyZW0gM3JlbSByZ2JhKDAsMCwwLC4xNzUpO1xuXHRcdFx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xuXHRcdH1cblx0fVxuXHQub3RwX3RpdGxlIHtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cdCAgICBmb250LXdlaWdodDogNTAwO1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRjb2xvcjogI2ZmZjtcblx0fVxuXG5cdC5vdHBfd3JhcHBlciB7XG5cdCAgICBtYXgtd2lkdGg6IDIzN3B4O1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXG5cdFx0aW9uLWlucHV0IHtcblx0XHQgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcblx0XHRcdGJhY2tncm91bmQ6ICNmN2Y3Zjc7XG5cdFx0ICAgIGNvbG9yOiAjMDAwO1xuXHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0ICAgIC0tcGFkZGluZy10b3A6IDVweDtcblx0XHQgICAgLS1wYWRkaW5nLWVuZDogMDtcblx0XHQgICAgLS1wYWRkaW5nLWJvdHRvbTogNXB4O1xuXHRcdCAgICAtLXBhZGRpbmctc3RhcnQ6IDA7XG5cdFx0ICAgIGZvbnQtc2l6ZTogMjZweDtcblx0XHQgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG5cdFx0ICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0fVxuXHR9XG5cblx0cCB7XG5cdFx0Ji5vdHBfY29udGVudCB7XG5cdFx0XHRtYXJnaW4tdG9wOiAyOHB4O1xuXHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xuXHRcdFx0Zm9udC1zaXplOiAxMXB4O1xuICAgIFx0XHRsZXR0ZXItc3BhY2luZzogMC41cHg7XG5cdFx0fVxuXHRcdFxuXHR9XG59XG5cbmlvbi1oZWFkZXIge1xuXHRpb24tdGl0bGUge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/otpverification/otpverification.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/otpverification/otpverification.page.ts ***!
  \*********************************************************/
/*! exports provided: OtpverificationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpverificationPage", function() { return OtpverificationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");










let OtpverificationPage = class OtpverificationPage {
    constructor(authService, navCtrl, toastController, helper, router, platform, cdr, modalController, location, alertController, menuCtrl, authProvider, geolocation) {
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
        this.authProvider = authProvider;
        this.geolocation = geolocation;
        this.otp = '';
        this.ph_number = '';
        this.latitude = '';
        this.longitude = '';
    }
    ngOnInit() {
        this.ph_number = localStorage.getItem("phnumber");
    }
    resendOtp() {
    }
    /**
     * This method is for calling handling login through submit otp and mobile number
    */
    submitOtpVerification() {
        //Validation check
        if (this.otp == '') {
            this.helper.presentAlert("Please enter OTP");
        }
        else {
            let data = {
                "mobile": this.ph_number,
                "otp": this.otp,
            };
            this.authProvider.verifyMobileUser(data).then((res) => {
                if (res["status"] == '1') {
                    this.helper.suucessAlert(res["message"]);
                    console.log(res);
                    if (res["status"] == '1') {
                        localStorage.setItem("user_id", res["user"].id);
                        // this.geolocation.getCurrentPosition().then((resp) => {
                        //   this.latitude = resp.coords.latitude;
                        //   this.longitude = resp.coords.longitude;
                        //   let currentAddress = {
                        //     lat : this.latitude,
                        //     long : this.longitude
                        //   }
                        //   //****  current position is saved in localStorage  **** //
                        //   localStorage.setItem('currentAddress',JSON.stringify(currentAddress))
                        // }).catch((error) => {
                        //   console.log('Error getting location', error);
                        // });
                        if (res["user"].name == '') {
                            this.navCtrl.navigateRoot('/new-account');
                        }
                        else {
                            localStorage.setItem("userDetails", JSON.stringify(res['user']));
                            this.navCtrl.navigateRoot('/homenew');
                        }
                    }
                }
                else {
                    this.helper.presentAlert(res["message"]);
                }
            });
        }
    }
};
OtpverificationPage.ctorParameters = () => [
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
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthProvider"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"] }
];
OtpverificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-otpverification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./otpverification.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./otpverification.page.scss */ "./src/app/otpverification/otpverification.page.scss")).default]
    })
], OtpverificationPage);



/***/ })

}]);
//# sourceMappingURL=otpverification-otpverification-module-es2015.js.map