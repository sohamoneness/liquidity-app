(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["signup-signup-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding>\n\t<div class=\"login_section\">\n\t\t<div class=\"login_block\">\n\t\t\t<div class=\"logo_wrap\">\n\t\t\t\t<img src=\"../../assets/logo.png\">\n\t\t\t</div>\n\t\t\t<div class=\"form_wrap\">\n\t\t\t\t<ion-input type=\"text\" placeholder=\"Full Name\" [(ngModel)]=\"name\"></ion-input>\n\t\t\t\t<ion-input type=\"tel\" placeholder=\"Your Mobile Number\"  [(ngModel)]=\"mobile\" maxLength=\"10\"></ion-input>\n\t\t\t\t<ion-input type=\"email\" placeholder=\"Email Id\" [(ngModel)]=\"mail\"></ion-input>\n\t\t\t\t<ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n\t\t\t\t<ion-input type=\"password\" placeholder=\"Confirm Password\" [(ngModel)]=\"conf_password\"></ion-input>\n\t\t\t\t<p class=\"terms\">By Signing up you agree to our <span>Terms of Use</span> & <span>Privacy Policy</span>.</p>\n\t\t        <ion-checkbox slot=\"start\"></ion-checkbox>\n\t\t        <ion-label>I confirm, I have reached the eligible age as per State laws for purchase & consumption of alcoholic beverages.</ion-label>\n\t\t\t\t<ion-button class=\"btn-submit\" expand=\"block\" shape=\"round\" (click)=\"submitRegistration()\">SIGN UP</ion-button>\n\t\t\t\t<p class=\"sign_in\">Have an account? <span routerLink=\"/login\" routerDirection=\"forward\">Sign In</span></p>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/signup/signup-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/signup/signup-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SignupPageRoutingModule */

    /***/
    function srcAppSignupSignupRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageRoutingModule", function () {
        return SignupPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var routes = [{
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_3__["SignupPage"]
      }];

      var SignupPageRoutingModule = /*#__PURE__*/_createClass(function SignupPageRoutingModule() {
        _classCallCheck(this, SignupPageRoutingModule);
      });

      SignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SignupPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.module.ts ***!
      \*****************************************/

    /*! exports provided: SignupPageModule */

    /***/
    function srcAppSignupSignupModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPageModule", function () {
        return SignupPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./signup-routing.module */
      "./src/app/signup/signup-routing.module.ts");
      /* harmony import */


      var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./signup.page */
      "./src/app/signup/signup.page.ts");

      var SignupPageModule = /*#__PURE__*/_createClass(function SignupPageModule() {
        _classCallCheck(this, SignupPageModule);
      });

      SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignupPageRoutingModule"]],
        declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
      })], SignupPageModule);
      /***/
    },

    /***/
    "./src/app/signup/signup.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/signup/signup.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppSignupSignupPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('banner-1.png') no-repeat center center / cover;\n}\nion-content .login_section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nion-content .login_section .login_block {\n  display: block;\n  width: 100%;\n}\nion-content .login_section .login_block .logo_wrap {\n  padding: 0 0 37px;\n  text-align: center;\n  display: block;\n}\nion-content .login_section .login_block .logo_wrap img {\n  max-width: 240px;\n}\nion-content .login_section .login_block .form_wrap p {\n  font-size: 13px;\n  line-height: 1.6;\n}\nion-content .login_section .login_block .form_wrap p.terms {\n  font-size: 9px;\n}\nion-content .login_section .login_block .form_wrap p span.spare {\n  display: inline-block;\n  position: relative;\n  padding: 0 6px;\n  font-weight: 400;\n}\nion-content .login_section .login_block .form_wrap p span.spare:after {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 45%;\n  right: 0;\n  transform: translate(50%, -50%);\n  background: #fff;\n  content: \"\";\n}\nion-content .login_section .login_block .form_wrap p span.spare:last-child:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpRUFBQTtBQUNEO0FBQ0M7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQUNGO0FBQ0U7RUFDQyxjQUFBO0VBQ0EsV0FBQTtBQUNIO0FBQ0c7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNQO0FBQ087RUFDQyxnQkFBQTtBQUNSO0FBR0k7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFETDtBQUdLO0VBQ0MsY0FBQTtBQUROO0FBSUs7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBRk47QUFJTTtFQUNDLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFFBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUZQO0FBS007RUFDQyxhQUFBO0FBSFAiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAvc2lnbnVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2Jhbm5lci0xLnBuZykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcblxuXHQubG9naW5fc2VjdGlvbiB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0aGVpZ2h0OiAxMDAlO1xuXG5cdFx0LmxvZ2luX2Jsb2NrIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cblx0XHRcdC5sb2dvX3dyYXAge1xuXHRcdFx0ICAgIHBhZGRpbmc6IDAgMCAzN3B4O1xuXHRcdFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdCAgICBkaXNwbGF5OiBibG9jaztcblxuXHRcdFx0ICAgIGltZyB7XG5cdFx0XHQgICAgXHRtYXgtd2lkdGg6IDI0MHB4O1xuXHRcdFx0ICAgIH1cblx0XHRcdH1cblx0XHRcdC5mb3JtX3dyYXAge1xuXHRcdFx0XHRwIHtcblx0XHRcdFx0XHRmb250LXNpemU6IDEzcHg7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEuNjtcblxuXHRcdFx0XHRcdCYudGVybXMge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiA5cHg7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0c3Bhbi5zcGFyZSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDZweDtcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xuXHRcdFx0XHRcdFx0XHR3aWR0aDogNHB4O1xuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDRweDtcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdFx0XHRcdFx0dG9wOiA0NSU7XG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIC01MCUpO1xuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJztcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0JjpsYXN0LWNoaWxkOmFmdGVyIHtcblx0XHRcdFx0XHRcdFx0ZGlzcGxheSA6bm9uZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/signup/signup.page.ts":
    /*!***************************************!*\
      !*** ./src/app/signup/signup.page.ts ***!
      \***************************************/

    /*! exports provided: SignupPage */

    /***/
    function srcAppSignupSignupPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SignupPage", function () {
        return SignupPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");

      var SignupPage = /*#__PURE__*/function () {
        function SignupPage(platform, location, alertController, router, authService, authProvider, helper, navCtrl, modalCtrl) {
          _classCallCheck(this, SignupPage);

          this.platform = platform;
          this.location = location;
          this.alertController = alertController;
          this.router = router;
          this.authService = authService;
          this.authProvider = authProvider;
          this.helper = helper;
          this.navCtrl = navCtrl;
          this.modalCtrl = modalCtrl;
          this.name = '';
          this.mail = '';
          this.mobile = '';
          this.password = '';
          this.conf_password = '';
        }

        _createClass(SignupPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
          /**
           * This method is for connecting user registration API
           */

        }, {
          key: "submitRegistration",
          value: function submitRegistration() {
            var _this = this;

            //Validation
            if (this.name == "") {
              this.helper.presentAlert("Please enter your name");
            } else if (this.mobile == "") {
              this.helper.presentAlert("Please enter your mobile number");
            } else if (this.mail == "") {
              this.helper.presentAlert("Please enter your email id");
            } else if (this.password == "") {
              this.helper.presentAlert("Please enter your password");
            } else if (this.password != this.conf_password) {
              this.helper.presentAlert("Password you have entered does not match");
            } else {
              var data = {
                "name": this.name,
                "password": this.password,
                "email": this.mail,
                "mobile": this.mobile
              };
              this.authProvider.userRegistration(data).then(function (res) {
                if (res["status"] == '1') {
                  _this.helper.suucessAlert(res["message"]);

                  localStorage.setItem("user_id", res["id"]);

                  _this.navCtrl.navigateForward('/otpverification');

                  console.log(res);
                } else {
                  _this.helper.presentAlert(res["message"]);
                }
              });
            }
          }
        }]);

        return SignupPage;
      }();

      SignupPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
        }, {
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthProvider"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
        }];
      };

      SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./signup.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./signup.page.scss */
        "./src/app/signup/signup.page.scss"))["default"]]
      })], SignupPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=signup-signup-module-es5.js.map