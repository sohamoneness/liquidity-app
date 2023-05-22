(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-otp-login-otp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-otp/login-otp.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login-otp/login-otp.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content padding>\n\t<div class=\"login_section\">\n\t\t<div class=\"logo_wrap\">\n\t\t\t<img src=\"../../assets/logo.png\">\n\t\t</div>\n\t\t<div class=\"login_block\">\n\t\t\t<div class=\"form_wrap\">\n\t\t\t\t<p>Sign in to have a unique experience and<br><span class=\"spare\">COMPARE</span><span class=\"spare\">RESERVE</span><span class=\"spare\">REDEEM</span></p>\n         <ion-input type=\"tel\" [(ngModel)]=\"phone\" maxlength=\"10\" minlength=\"10\" placeholder=\"Enter Mobile Number.\"></ion-input>\n\t\t\t\t<ion-button class=\"btn-submit\" expand=\"block\" shape=\"round\" routerDirection=\"forward\" (click)=\"loginViaMobile()\">Sign In</ion-button>\n\t\t\t\t<p>By using our mobile app, you agree to our<br/>\n\t\t\t\t\tPrivacy Policy and Terms of Use</p>\n\t\t\t\t<!-- <ion-button class=\"btn-submit\" expand=\"block\" shape=\"round\" routerDirection=\"forward\" >Sign Up</ion-button> -->\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/login-otp/login-otp-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/login-otp/login-otp-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoginOtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOtpPageRoutingModule", function() { return LoginOtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-otp.page */ "./src/app/login-otp/login-otp.page.ts");




const routes = [
    {
        path: '',
        component: _login_otp_page__WEBPACK_IMPORTED_MODULE_3__["LoginOtpPage"]
    }
];
let LoginOtpPageRoutingModule = class LoginOtpPageRoutingModule {
};
LoginOtpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginOtpPageRoutingModule);



/***/ }),

/***/ "./src/app/login-otp/login-otp.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login-otp/login-otp.module.ts ***!
  \***********************************************/
/*! exports provided: LoginOtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOtpPageModule", function() { return LoginOtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-otp-routing.module */ "./src/app/login-otp/login-otp-routing.module.ts");
/* harmony import */ var _login_otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-otp.page */ "./src/app/login-otp/login-otp.page.ts");







let LoginOtpPageModule = class LoginOtpPageModule {
};
LoginOtpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginOtpPageRoutingModule"]
        ],
        declarations: [_login_otp_page__WEBPACK_IMPORTED_MODULE_6__["LoginOtpPage"]]
    })
], LoginOtpPageModule);



/***/ }),

/***/ "./src/app/login-otp/login-otp.page.scss":
/*!***********************************************!*\
  !*** ./src/app/login-otp/login-otp.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('login_bg.jpg') no-repeat center center / cover;\n}\nion-content .login_section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nion-content .login_section .logo_wrap {\n  padding: 40px 0;\n  text-align: center;\n  display: block;\n}\nion-content .login_section .logo_wrap img {\n  max-width: 240px;\n}\nion-content .login_section .login_block {\n  display: block;\n  width: 100%;\n  max-width: calc(100% - 32px);\n  background: rgba(255, 255, 255, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 20px;\n  margin: auto 0 16px;\n  padding: 30px;\n  color: #000;\n}\nion-content .login_section .login_block .form_wrap {\n  max-width: 100%;\n}\nion-content .login_section .login_block .form_wrap p {\n  font-size: 14px;\n  line-height: 1.6;\n  color: #000;\n}\nion-content .login_section .login_block .form_wrap p:last-child {\n  margin: 0;\n}\nion-content .login_section .login_block .form_wrap p span.spare {\n  display: inline-block;\n  position: relative;\n  padding: 0 6px;\n  font-weight: 400;\n}\nion-content .login_section .login_block .form_wrap p span.spare:after {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 45%;\n  right: 0;\n  transform: translate(50%, -50%);\n  background: #000;\n  content: \"\";\n}\nion-content .login_section .login_block .form_wrap p span.spare:last-child:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tb3RwL2xvZ2luLW90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpRUFBQTtBQUNEO0FBQ0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDQyxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0g7QUFDRztFQUNDLGdCQUFBO0FBQ0o7QUFHRTtFQUNDLGNBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFESDtBQUdHO0VBQ0MsZUFBQTtBQURKO0FBR0k7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBREw7QUFHSztFQUNDLFNBQUE7QUFETjtBQUlLO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUZOO0FBSU07RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFGUDtBQUtNO0VBQ0MsYUFBQTtBQUhQIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tb3RwL2xvZ2luLW90cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcblx0LS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2xvZ2luX2JnLmpwZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcclxuXHJcblx0LmxvZ2luX3NlY3Rpb24ge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRoZWlnaHQ6IDEwMCU7XHJcblxyXG5cdFx0LmxvZ29fd3JhcCB7XHJcblx0XHRcdHBhZGRpbmc6IDQwcHggMDtcclxuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHJcblx0XHRcdGltZyB7XHJcblx0XHRcdFx0bWF4LXdpZHRoOiAyNDBweDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdC5sb2dpbl9ibG9jayB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0bWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuXHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG5cdFx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRcdG1hcmdpbjogYXV0byAwIDE2cHg7XHJcblx0XHRcdHBhZGRpbmc6IDMwcHg7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cclxuXHRcdFx0LmZvcm1fd3JhcCB7XHJcblx0XHRcdFx0bWF4LXdpZHRoOiAxMDAlO1xyXG5cclxuXHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjY7XHJcblx0XHRcdFx0XHRjb2xvcjogIzAwMDtcclxuXHJcblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xyXG5cdFx0XHRcdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0c3Bhbi5zcGFyZSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDZweDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA0cHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0cHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0dG9wOiA0NSU7XHJcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjMDAwO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXkgOm5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/login-otp/login-otp.page.ts":
/*!*********************************************!*\
  !*** ./src/app/login-otp/login-otp.page.ts ***!
  \*********************************************/
/*! exports provided: LoginOtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginOtpPage", function() { return LoginOtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");





let LoginOtpPage = class LoginOtpPage {
    constructor(authProvider, helper, navCtrl) {
        this.authProvider = authProvider;
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.phone = '';
    }
    ngOnInit() {
    }
    /**
     * This method is for calling handling login via mobile number
    */
    loginViaMobile() {
        //Validation checking
        if (this.phone == '') {
            this.helper.presentToast('Please enter your contact number');
        }
        if (this.phone.length != 10) {
            this.helper.presentToast('Please enter 10 digit contact number');
        }
        else {
            this.helper.presentLoading();
            this.authProvider.userLoginviaMobile(this.phone).then(res => {
                console.log(res);
                if (res["status"] == '1') {
                    this.helper.dismissLoader();
                    // navigate to page for otp verification and save ph number
                    localStorage.setItem('phnumber', this.phone);
                    this.navCtrl.navigateForward("/otpverification");
                }
                else {
                    this.helper.dismissLoader();
                    this.helper.presentAlert('Please enter valid contact number');
                }
            });
        }
    }
};
LoginOtpPage.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthProvider"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
LoginOtpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-otp',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login-otp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login-otp/login-otp.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login-otp.page.scss */ "./src/app/login-otp/login-otp.page.scss")).default]
    })
], LoginOtpPage);



/***/ })

}]);
//# sourceMappingURL=login-otp-login-otp-module-es2015.js.map