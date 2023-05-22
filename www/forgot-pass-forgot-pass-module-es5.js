(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["forgot-pass-forgot-pass-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-pass/forgot-pass.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-pass/forgot-pass.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppForgotPassForgotPassPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<!-- <ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n  \t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/login\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Forgot Password</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content padding>\n\t<div class=\"login_section\">\n\t\t\t<div class=\"login_block\">\n\t\t\t\t<div class=\"logo_wrap\">\n\t\t\t\t\t<img src=\"../../assets/logo.png\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"form_wrap\">\n\t\t\t\t\t<p>Please enter your email address below and we will send you information to change your password.</p>\n\t\t\t\t\t<ion-input type=\"email\" placeholder=\"Email Address\" [(ngModel)]=\"usermail\"></ion-input>\n\t\t\t\t\t\n\t\t\t\t\t<ion-button class=\"btn-submit\" expand=\"block\" shape=\"round\" (click)=\"submitValues()\">Reset Password</ion-button>\n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/forgot-pass/forgot-pass-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/forgot-pass/forgot-pass-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ForgotPassPageRoutingModule */

    /***/
    function srcAppForgotPassForgotPassRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPassPageRoutingModule", function () {
        return ForgotPassPageRoutingModule;
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


      var _forgot_pass_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot-pass.page */
      "./src/app/forgot-pass/forgot-pass.page.ts");

      var routes = [{
        path: '',
        component: _forgot_pass_page__WEBPACK_IMPORTED_MODULE_3__["ForgotPassPage"]
      }];

      var ForgotPassPageRoutingModule = /*#__PURE__*/_createClass(function ForgotPassPageRoutingModule() {
        _classCallCheck(this, ForgotPassPageRoutingModule);
      });

      ForgotPassPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ForgotPassPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/forgot-pass/forgot-pass.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/forgot-pass/forgot-pass.module.ts ***!
      \***************************************************/

    /*! exports provided: ForgotPassPageModule */

    /***/
    function srcAppForgotPassForgotPassModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPassPageModule", function () {
        return ForgotPassPageModule;
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


      var _forgot_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./forgot-pass-routing.module */
      "./src/app/forgot-pass/forgot-pass-routing.module.ts");
      /* harmony import */


      var _forgot_pass_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./forgot-pass.page */
      "./src/app/forgot-pass/forgot-pass.page.ts");

      var ForgotPassPageModule = /*#__PURE__*/_createClass(function ForgotPassPageModule() {
        _classCallCheck(this, ForgotPassPageModule);
      });

      ForgotPassPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgot_pass_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotPassPageRoutingModule"]],
        declarations: [_forgot_pass_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPassPage"]]
      })], ForgotPassPageModule);
      /***/
    },

    /***/
    "./src/app/forgot-pass/forgot-pass.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/forgot-pass/forgot-pass.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppForgotPassForgotPassPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('banner-1.png') no-repeat center center / cover;\n}\nion-content .login_section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nion-content .login_section .login_block {\n  display: block;\n  width: 100%;\n}\nion-content .login_section .login_block .logo_wrap {\n  padding: 0 0 37px;\n  text-align: center;\n  display: block;\n}\nion-content .login_section .login_block .logo_wrap img {\n  max-width: 240px;\n}\nion-content .login_section .login_block .form_wrap p {\n  font-size: 13px;\n  line-height: 1.6;\n}\nion-content .login_section .login_block .form_wrap p span.spare {\n  display: inline-block;\n  position: relative;\n  padding: 0 6px;\n  font-weight: 400;\n}\nion-content .login_section .login_block .form_wrap p span.spare:after {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 45%;\n  right: 0;\n  transform: translate(50%, -50%);\n  background: #fff;\n  content: \"\";\n}\nion-content .login_section .login_block .form_wrap p span.spare:last-child:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3MvZm9yZ290LXBhc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUVBQUE7QUFDRDtBQUNDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUFDSDtBQUNHO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDUDtBQUNPO0VBQ0MsZ0JBQUE7QUFDUjtBQUdJO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBREw7QUFHSztFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUdNO0VBQ0MsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBRFA7QUFJTTtFQUNDLGFBQUE7QUFGUCIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzL2ZvcmdvdC1wYXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFubmVyLTEucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxuXHQubG9naW5fc2VjdGlvbiB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGhlaWdodDogMTAwJTtcclxuXHJcblx0XHQubG9naW5fYmxvY2sge1xyXG5cdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0d2lkdGg6IDEwMCU7XHJcblxyXG5cdFx0XHQubG9nb193cmFwIHtcclxuXHRcdFx0ICAgIHBhZGRpbmc6IDAgMCAzN3B4O1xyXG5cdFx0XHQgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHQgICAgZGlzcGxheTogYmxvY2s7XHJcblxyXG5cdFx0XHQgICAgaW1nIHtcclxuXHRcdFx0ICAgIFx0bWF4LXdpZHRoOiAyNDBweDtcclxuXHRcdFx0ICAgIH1cclxuXHRcdFx0fVxyXG5cdFx0XHQuZm9ybV93cmFwIHtcclxuXHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjY7XHJcblxyXG5cdFx0XHRcdFx0c3Bhbi5zcGFyZSB7XHJcblx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHRwYWRkaW5nOiAwIDZweDtcclxuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcblx0XHRcdFx0XHRcdCY6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOiA0cHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0cHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRcdFx0XHRcdFx0dG9wOiA0NSU7XHJcblx0XHRcdFx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0XHRcdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAtNTAlKTtcclxuXHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0XHQmOmxhc3QtY2hpbGQ6YWZ0ZXIge1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXkgOm5vbmU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/forgot-pass/forgot-pass.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/forgot-pass/forgot-pass.page.ts ***!
      \*************************************************/

    /*! exports provided: ForgotPassPage */

    /***/
    function srcAppForgotPassForgotPassPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotPassPage", function () {
        return ForgotPassPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/user-details.service */
      "./src/app/services/user-details.service.ts");

      var ForgotPassPage = /*#__PURE__*/function () {
        function ForgotPassPage(authService, navCtrl, toastController, helper, router, platform, cdr, modalController, location, alertController, menuCtrl, userDetails) {
          _classCallCheck(this, ForgotPassPage);

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
          this.userDetails = userDetails;
          this.usermail = '';
        }

        _createClass(ForgotPassPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "submitValues",
          value: function submitValues() {
            var _this = this;

            var data = {
              "email": this.usermail
            };
            this.userDetails.forgotPass(data).then(function (res) {
              if (res["status"] == '1') {
                _this.helper.presentToast(res["message"]);

                _this.navCtrl.navigateRoot('/login');

                _this.helper.showErrorCustom('Please Check your Mail to reset your password');
              } else {
                _this.helper.presentToast(res["message"]);

                _this.navCtrl.navigateRoot('/login');

                _this.helper.showErrorCustom('Please Check your Mail to reset your password');
              }
            });
          }
        }]);

        return ForgotPassPage;
      }();

      ForgotPassPage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ToastController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["ModalController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["MenuController"]
        }, {
          type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_7__["UserDetailsService"]
        }];
      };

      ForgotPassPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-forgot-pass',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./forgot-pass.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-pass/forgot-pass.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./forgot-pass.page.scss */
        "./src/app/forgot-pass/forgot-pass.page.scss"))["default"]]
      })], ForgotPassPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=forgot-pass-forgot-pass-module-es5.js.map