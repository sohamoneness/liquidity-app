(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content padding>\n\t<div class=\"login_section\">\n\t\t<div class=\"login_block\">\n\t\t\t<div class=\"logo_wrap\">\n\t\t\t\t<img src=\"../../assets/logo.png\">\n\t\t\t</div>\n\t\t\t<div class=\"form_wrap\">\n\t\t\t\t<p>Sign in to have a unique experience and<br><span class=\"spare\">COMPARE</span><span class=\"spare\">RESERVE</span><span class=\"spare\">REDEEM</span></p>\n\t\t\t\t<ion-input placeholder=\"Enter Your Email Id\" [(ngModel)]=\"usermail\"></ion-input>\n\t\t\t\t<ion-input placeholder=\"Enter Your Password\" type=\"password\" [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t<ion-button class=\"btn-submit\" expand=\"block\" shape=\"round\" routerDirection=\"forward\" (click)=\"submitLogin()\">Sign In</ion-button>\n\t\t\t\t<p class=\"signup_text\"> <a (click)=\"goToForgetPassword()\">Forgot your password?</a></p>\n\t\t\t\t<p class=\"signup_text\">Don't have an account? <span (click)=\"goToSignUp()\">Sign Up</span></p>\n\t\t\t\t<ion-button class=\"btn-submit\" expand=\"block\" shape=\"round\" routerDirection=\"forward\" (click)=\"goToMbile()\">Sig</ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('banner-1.png') no-repeat center center / cover;\n}\nion-content .login_section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nion-content .login_section .login_block {\n  display: block;\n  width: 100%;\n}\nion-content .login_section .login_block .logo_wrap {\n  padding: 0 0 37px;\n  text-align: center;\n  display: block;\n}\nion-content .login_section .login_block .logo_wrap img {\n  max-width: 240px;\n}\nion-content .login_section .login_block .form_wrap p {\n  font-size: 13px;\n  line-height: 1.6;\n}\nion-content .login_section .login_block .form_wrap p span.spare {\n  display: inline-block;\n  position: relative;\n  padding: 0 6px;\n  font-weight: 400;\n}\nion-content .login_section .login_block .form_wrap p span.spare:after {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 45%;\n  right: 0;\n  transform: translate(50%, -50%);\n  background: #fff;\n  content: \"\";\n}\nion-content .login_section .login_block .form_wrap p span.spare:last-child:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUVBQUE7QUFDRDtBQUNDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUFDSDtBQUNHO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDUDtBQUNPO0VBQ0MsZ0JBQUE7QUFDUjtBQUdJO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBREw7QUFHSztFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdNO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRFA7QUFJTTtFQUNDLGFBQUE7QUFGUCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2Jhbm5lci0xLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcblxuXHQubG9naW5fc2VjdGlvbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXG5cdFx0LmxvZ2luX2Jsb2NrIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdC5sb2dvX3dyYXAge1xuXHRcdFx0ICAgIHBhZGRpbmc6IDAgMCAzN3B4O1xuXHRcdFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdCAgICBkaXNwbGF5OiBibG9jaztcblxuXHRcdFx0ICAgIGltZyB7XG5cdFx0XHQgICAgXHRtYXgtd2lkdGg6IDI0MHB4O1xuXHRcdFx0ICAgIH1cblx0XHRcdH1cblx0XHRcdC5mb3JtX3dyYXAge1xuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNjtcblxuXHRcdFx0XHRcdHNwYW4uc3BhcmUge1xuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHRcdFx0cGFkZGluZzogMCA2cHg7XG5cdFx0XHRcdFx0XHRmb250LXdlaWdodDogNDAwO1xuXG5cdFx0XHRcdFx0XHQmOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0d2lkdGg6IDRweDtcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0cHg7XG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0XHRcdHRvcDogNDUlO1xuXHRcdFx0XHRcdFx0XHRyaWdodDogMDtcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdCY6bGFzdC1jaGlsZDphZnRlciB7XG5cdFx0XHRcdFx0XHRcdGRpc3BsYXkgOm5vbmU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");









let LoginPage = class LoginPage {
    constructor(authService, navCtrl, toastController, helper, router, platform, cdr, modalController, location, alertController, menuCtrl, authProvider) {
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
        this.lastTimeBackPress = 0;
        this.timePeriodToExit = 2000;
        this.usermail = '';
        this.password = '';
        this.cpassword = '';
        this.isSubmitted = false;
        this.isSignUpSubmitted = false;
        this.isPasswordVisible = false;
        this.confirmPasswordType = "password";
    }
    ngOnInit() {
        this.menuCtrl.close();
        this.menuCtrl.enable(false);
        localStorage.clear();
        console.log('storage clear');
    }
    /**
     * This method is for calling handling login functionality
     */
    submitLogin() {
        this.isSubmitted = true;
        //Validation checking
        if (this.usermail == '') {
            this.helper.presentAlert("Please enter your email id");
        }
        else if (this.password == '') {
            this.helper.presentAlert("Please enter your password");
        }
        else {
            let data = {
                "email": this.usermail,
                "password": this.password,
            };
            this.authProvider.userLogin(data).then((res) => {
                if (res["status"] == '1') {
                    this.helper.presentToast(res["message"]);
                    console.log(res["user"].id);
                    localStorage.setItem("userDetails", JSON.stringify(res['user']));
                    localStorage.setItem("user_id", res["user"].id);
                    window.location.reload();
                    this.navCtrl.navigateRoot('/homenew');
                }
                else {
                    this.helper.presentAlert(res["message"]);
                }
            });
        }
    }
    onBack() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.navCtrl.navigateBack('/getstarted');
        });
    }
    /**
     * This method is for back handling
     */
    backButtonEvent() {
        this.platform.backButton.subscribeWithPriority(0, () => {
            this.routerOutlets.forEach((outlet) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (this.router.url != '/home') {
                    // await this.router.navigate(['/']);
                    yield this.location.back();
                }
                else if (this.router.url === '/home') {
                    if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                        this.lastTimeBackPress = new Date().getTime();
                        this.presentAlertConfirm();
                    }
                    else {
                        navigator['app'].exitApp();
                    }
                }
            }));
        });
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // header: 'Confirm!',
                message: 'Are you sure you want to exit the app?',
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }, {
                        text: 'Close App',
                        handler: () => {
                            navigator['app'].exitApp();
                        }
                    }]
            });
            yield alert.present();
        });
    }
    /**
     * This method is for route the app to sign up
     */
    goToSignUp() {
        this.navCtrl.navigateForward('/signup');
    }
    /**
     * This method is for route the app to sign up
     */
    goToForgetPassword() {
        this.navCtrl.navigateForward('/forgot-pass');
    }
    goToMbile() {
        this.navCtrl.navigateForward('/login-otp');
    }
};
LoginPage.ctorParameters = () => [
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
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthProvider"] }
];
LoginPage.propDecorators = {
    routerOutlets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonRouterOutlet"],] }]
};
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")).default]
    })
], LoginPage);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map