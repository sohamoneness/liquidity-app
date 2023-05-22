(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-account-new-account-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/new-account/new-account.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-account/new-account.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNewAccountNewAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content padding>\n\t<div class=\"login_section\">\n\t\t<div class=\"login_block\">\n\t\t\t<div class=\"logo_wrap\">\n\t\t\t\t<img src=\"../../assets/logo.png\">\n\t\t\t</div>\n\t\t\t<div class=\"form_wrap\">\n\t\t\t\t<ion-input type=\"text\" placeholder=\"Full Name\" [(ngModel)]=\"name\"></ion-input>\n\t\t\t\t<ion-input type=\"email\" placeholder=\"Email Id\" [(ngModel)]=\"mail\"></ion-input>\n        <!-- <ion-list> -->\n          <ion-radio-group [(ngModel)]=\"gender\">\n            <ion-list-header>\n              <ion-label>Gender</ion-label>\n            </ion-list-header>\n        \n            <ion-item>\n              <ion-label>Male</ion-label>\n              <ion-radio slot=\"start\" value=\"male\"></ion-radio>\n            </ion-item>\n        \n            <ion-item>\n              <ion-label>Female</ion-label>\n              <ion-radio slot=\"start\" value=\"female\"></ion-radio>\n            </ion-item>\n          </ion-radio-group>\n        <!-- </ion-list> -->\n\t\t\t  <ion-button class=\"btn-submit\" expand=\"block\" shape=\"round\" (click)=\"submitRegistration()\">SIGN UP</ion-button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/new-account/new-account-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/new-account/new-account-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: NewAccountPageRoutingModule */

    /***/
    function srcAppNewAccountNewAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAccountPageRoutingModule", function () {
        return NewAccountPageRoutingModule;
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


      var _new_account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-account.page */
      "./src/app/new-account/new-account.page.ts");

      var routes = [{
        path: '',
        component: _new_account_page__WEBPACK_IMPORTED_MODULE_3__["NewAccountPage"]
      }];

      var NewAccountPageRoutingModule = /*#__PURE__*/_createClass(function NewAccountPageRoutingModule() {
        _classCallCheck(this, NewAccountPageRoutingModule);
      });

      NewAccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewAccountPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/new-account/new-account.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/new-account/new-account.module.ts ***!
      \***************************************************/

    /*! exports provided: NewAccountPageModule */

    /***/
    function srcAppNewAccountNewAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAccountPageModule", function () {
        return NewAccountPageModule;
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


      var _new_account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-account-routing.module */
      "./src/app/new-account/new-account-routing.module.ts");
      /* harmony import */


      var _new_account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-account.page */
      "./src/app/new-account/new-account.page.ts");

      var NewAccountPageModule = /*#__PURE__*/_createClass(function NewAccountPageModule() {
        _classCallCheck(this, NewAccountPageModule);
      });

      NewAccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_account_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewAccountPageRoutingModule"]],
        declarations: [_new_account_page__WEBPACK_IMPORTED_MODULE_6__["NewAccountPage"]]
      })], NewAccountPageModule);
      /***/
    },

    /***/
    "./src/app/new-account/new-account.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/new-account/new-account.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNewAccountNewAccountPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('banner-1.png') no-repeat center center / cover;\n}\nion-content .login_section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n}\nion-content .login_section .login_block {\n  display: block;\n  width: 100%;\n}\nion-content .login_section .login_block .logo_wrap {\n  padding: 0 0 37px;\n  text-align: center;\n  display: block;\n}\nion-content .login_section .login_block .logo_wrap img {\n  max-width: 240px;\n}\nion-content .login_section .login_block .form_wrap ion-list-header {\n  padding-left: 0;\n}\nion-content .login_section .login_block .form_wrap ion-list-header ion-label {\n  padding: 0;\n  margin: 0;\n  font-size: 14px;\n  text-align: center;\n}\nion-content .login_section .login_block .form_wrap ion-item {\n  --background: rgba(255, 255, 255, 0.5);\n  height: 50px;\n  border-radius: 33px;\n  margin-bottom: 15px;\n}\nion-content .login_section .login_block .form_wrap ion-item ion-radio {\n  margin-right: 0;\n}\nion-content .login_section .login_block .form_wrap ion-item ion-label {\n  margin: 15px 0;\n  color: #fff;\n}\nion-content .login_section .login_block .form_wrap p {\n  font-size: 13px;\n  line-height: 1.6;\n}\nion-content .login_section .login_block .form_wrap p.terms {\n  font-size: 9px;\n}\nion-content .login_section .login_block .form_wrap p span.spare {\n  display: inline-block;\n  position: relative;\n  padding: 0 6px;\n  font-weight: 400;\n}\nion-content .login_section .login_block .form_wrap p span.spare:after {\n  width: 4px;\n  height: 4px;\n  border-radius: 50%;\n  display: inline-block;\n  position: absolute;\n  top: 45%;\n  right: 0;\n  transform: translate(50%, -50%);\n  background: #fff;\n  content: \"\";\n}\nion-content .login_section .login_block .form_wrap p span.spare:last-child:after {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWFjY291bnQvbmV3LWFjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUVBQUE7QUFDRDtBQUNDO0VBQ0MsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDRjtBQUNFO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUFDSDtBQUNHO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFDUDtBQUNPO0VBQ0MsZ0JBQUE7QUFDUjtBQUlJO0VBQ0MsZUFBQTtBQUZMO0FBSUs7RUFDQyxVQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQUZOO0FBS0k7RUFDQyxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBSEw7QUFLSztFQUNDLGVBQUE7QUFITjtBQUtLO0VBQ0MsY0FBQTtFQUNBLFdBQUE7QUFITjtBQU1JO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBSkw7QUFNSztFQUNDLGNBQUE7QUFKTjtBQU9LO0VBQ0MscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUxOO0FBT007RUFDQyxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFMUDtBQVFNO0VBQ0MsYUFBQTtBQU5QIiwiZmlsZSI6InNyYy9hcHAvbmV3LWFjY291bnQvbmV3LWFjY291bnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9iYW5uZXItMS5wbmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyIC8gY292ZXI7XHJcblxyXG5cdC5sb2dpbl9zZWN0aW9uIHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cclxuXHRcdC5sb2dpbl9ibG9jayB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHR3aWR0aDogMTAwJTtcclxuXHJcblx0XHRcdC5sb2dvX3dyYXAge1xyXG5cdFx0XHQgICAgcGFkZGluZzogMCAwIDM3cHg7XHJcblx0XHRcdCAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdCAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcblx0XHRcdCAgICBpbWcge1xyXG5cdFx0XHQgICAgXHRtYXgtd2lkdGg6IDI0MHB4O1xyXG5cdFx0XHQgICAgfVxyXG5cdFx0XHR9XHJcblx0XHRcdC5mb3JtX3dyYXAge1xyXG5cclxuXHRcdFx0XHRpb24tbGlzdC1oZWFkZXIge1xyXG5cdFx0XHRcdFx0cGFkZGluZy1sZWZ0OiAwO1xyXG5cclxuXHRcdFx0XHRcdGlvbi1sYWJlbCB7XHJcblx0XHRcdFx0XHRcdHBhZGRpbmc6IDA7XHJcblx0XHRcdFx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0XHRcdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlvbi1pdGVtIHtcclxuXHRcdFx0XHRcdC0tYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OiA1MHB4O1xyXG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMzNweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDE1cHg7XHJcblxyXG5cdFx0XHRcdFx0aW9uLXJhZGlvIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aW9uLWxhYmVsIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luOiAxNXB4IDA7XHJcblx0XHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwIHtcclxuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTNweDtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxLjY7XHJcblxyXG5cdFx0XHRcdFx0Ji50ZXJtcyB7XHJcblx0XHRcdFx0XHRcdGZvbnQtc2l6ZTogOXB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdHNwYW4uc3BhcmUge1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFx0cGFkZGluZzogMCA2cHg7XHJcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblxyXG5cdFx0XHRcdFx0XHQmOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNHB4O1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0XHRcdFx0XHRcdHRvcDogNDUlO1xyXG5cdFx0XHRcdFx0XHRcdHJpZ2h0OiAwO1xyXG5cdFx0XHRcdFx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgLTUwJSk7XHJcblx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAnJztcclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcdFx0JjpsYXN0LWNoaWxkOmFmdGVyIHtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5IDpub25lO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/new-account/new-account.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/new-account/new-account.page.ts ***!
      \*************************************************/

    /*! exports provided: NewAccountPage */

    /***/
    function srcAppNewAccountNewAccountPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewAccountPage", function () {
        return NewAccountPage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/helper.service */
      "./src/app/services/helper.service.ts");

      var NewAccountPage = /*#__PURE__*/function () {
        function NewAccountPage(helper, commonService, navCtrl) {
          _classCallCheck(this, NewAccountPage);

          this.helper = helper;
          this.commonService = commonService;
          this.navCtrl = navCtrl;
          this.name = '';
          this.mail = '';
          this.gender = '';
        }

        _createClass(NewAccountPage, [{
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
            } else if (this.mail == "") {
              this.helper.presentAlert("Please enter your email id");
            } else {
              var data = {
                "id": localStorage.getItem("user_id"),
                "name": this.name,
                "email": this.mail,
                "gender": this.gender
              };
              this.commonService.updateProfile(data).then(function (res) {
                console.log(res);

                if (res["status"] == '1') {
                  _this.helper.suucessAlert(res["message"]);

                  localStorage.setItem("userDetails", JSON.stringify(res['user']));

                  _this.navCtrl.navigateRoot('/homenew');

                  console.log(res);
                } else {
                  _this.helper.presentAlert(res["message"]);
                }
              });
            }
          }
        }]);

        return NewAccountPage;
      }();

      NewAccountPage.ctorParameters = function () {
        return [{
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      NewAccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./new-account.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/new-account/new-account.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./new-account.page.scss */
        "./src/app/new-account/new-account.page.scss"))["default"]]
      })], NewAccountPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=new-account-new-account-module-es5.js.map