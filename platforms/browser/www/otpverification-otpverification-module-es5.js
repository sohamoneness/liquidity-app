(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["otpverification-otpverification-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOtpverificationOtpverificationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<!-- <ion-content class=\"ion-padding\">\n\t<div>\n\t\t<p class=\"otp_title\">Enter the OTP your received</p>\n\t\t<div class=\"otp_wrapper\">\n\t\t\t<ion-input placeholder=\"Enter Your OTP\" required=\"true\" maxLength=\"6\" [(ngModel)]=\"otp\"></ion-input>\n\t\t</div>\n\t\t<p class=\"otp_content\">We will never share your number or spam you!</p>\n\t\t<ion-button class=\"btn-continue\" shape=\"round\" routerLink=\"/login\" routerDirection=\"forward\" (click)=\"verify_otp()\">Submit</ion-button>\n\t\t<p class=\"sign_in\" (click)=\"send_otp()\">Didn’t receive the OTP? <span>Send Again</span></p>\n\t</div>\n</ion-content> -->\n\n<ion-content>\n\t<div class=\"row otpbg\">\n\t\t<div >\n\t\t\t<div class=\"col\">\n\t\t\t\t<p class=\"otp_title\">Enter the OTP you have received</p>\n\t\t\t\t<div class=\"otp_wrapper\">\n\t\t\t\t\t<ion-input type=\"tel\" placeholder=\"Enter Your OTP\" required=\"true\" maxlength=\"6\" maxlength=\"6\" [(ngModel)]=\"otp\" class=\"custom-class\"></ion-input>\n\t\t\t\t</div>\n\t\t\t\t<p class=\"otp_content\">We will never share your number or spam you!</p>\n\t\t\t\t<ion-button class=\"btn-continue\" shape=\"round\" routerDirection=\"forward\" (click)=\"submitOtpVerification()\">Submit</ion-button>\n\t\t\t</div>\n\t\t\t<p class=\"sign_in\" (click)=\"resendOtp()\">Didn’t receive the OTP? <span>Send Again</span></p>\n\t\t</div>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/otpverification/otpverification-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/otpverification/otpverification-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: OtpverificationPageRoutingModule */

    /***/
    function srcAppOtpverificationOtpverificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpverificationPageRoutingModule", function () {
        return OtpverificationPageRoutingModule;
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


      var _otpverification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./otpverification.page */
      "./src/app/otpverification/otpverification.page.ts");

      var routes = [{
        path: '',
        component: _otpverification_page__WEBPACK_IMPORTED_MODULE_3__["OtpverificationPage"]
      }];

      var OtpverificationPageRoutingModule = /*#__PURE__*/_createClass(function OtpverificationPageRoutingModule() {
        _classCallCheck(this, OtpverificationPageRoutingModule);
      });

      OtpverificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OtpverificationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/otpverification/otpverification.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/otpverification/otpverification.module.ts ***!
      \***********************************************************/

    /*! exports provided: OtpverificationPageModule */

    /***/
    function srcAppOtpverificationOtpverificationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpverificationPageModule", function () {
        return OtpverificationPageModule;
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


      var _otpverification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./otpverification-routing.module */
      "./src/app/otpverification/otpverification-routing.module.ts");
      /* harmony import */


      var _otpverification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./otpverification.page */
      "./src/app/otpverification/otpverification.page.ts");

      var OtpverificationPageModule = /*#__PURE__*/_createClass(function OtpverificationPageModule() {
        _classCallCheck(this, OtpverificationPageModule);
      });

      OtpverificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _otpverification_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpverificationPageRoutingModule"]],
        declarations: [_otpverification_page__WEBPACK_IMPORTED_MODULE_6__["OtpverificationPage"]]
      })], OtpverificationPageModule);
      /***/
    },

    /***/
    "./src/app/otpverification/otpverification.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/otpverification/otpverification.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOtpverificationOtpverificationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('banner-1.png') no-repeat center center / cover;\n}\nion-content .otpbg {\n  display: flex;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n}\nion-content .otpbg .col {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 10px;\n  padding: 35px 15px;\n  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);\n}\nion-content .otp_title {\n  font-size: 16px;\n  font-weight: 500;\n  text-align: center;\n  color: #fff;\n}\nion-content .otp_wrapper {\n  max-width: 237px;\n  margin: 0 auto;\n}\nion-content .otp_wrapper ion-input {\n  border: 1px dashed #dcc88d;\n  color: #fff;\n  text-align: center;\n  --padding-top: 5px;\n  --padding-end: 0;\n  --padding-bottom: 5px;\n  --padding-start: 0;\n  font-size: 26px;\n  line-height: 25px;\n  font-weight: 500;\n}\nion-content p.otp_content {\n  margin-top: 28px;\n  color: #fff;\n  font-weight: 400;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n}\nion-content p.sign_in {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3RwdmVyaWZpY2F0aW9uL290cHZlcmlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpRUFBQTtBQUNEO0FBSUM7RUFDQyxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGRjtBQUlFO0VBQ0MscUNBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNENBQUE7QUFGSDtBQUtDO0VBQ0MsZUFBQTtFQUNHLGdCQUFBO0VBQ0gsa0JBQUE7RUFDQSxXQUFBO0FBSEY7QUFNQztFQUNJLGdCQUFBO0VBQ0gsY0FBQTtBQUpGO0FBS0U7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFITjtBQVFFO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0cscUJBQUE7QUFOTjtBQVFFO0VBQ0MsZ0JBQUE7QUFOSCIsImZpbGUiOiJzcmMvYXBwL290cHZlcmlmaWNhdGlvbi9vdHB2ZXJpZmljYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFubmVyLTEucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuXHQvLyAtLXBhZGRpbmctdG9wOiA4MHB4O1xuXHQvLyAtLXBhZGRpbmctc3RhcnQ6IDQwcHg7XG5cdC8vIC0tcGFkZGluZy1lbmQ6IDQwcHg7XG5cdC8vIC0tcGFkZGluZy1ib3R0b206IDI1cHg7XG5cdC5vdHBiZ3tcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXG5cdFx0LmNvbHtcblx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0cGFkZGluZzogMzVweCAxNXB4O1xuXHRcdFx0Ym94LXNoYWRvdzogMCAxcmVtIDNyZW0gcmdiYSgwLDAsMCwuMTc1KTtcblx0XHR9XG5cdH1cblx0Lm90cF90aXRsZSB7XG5cdFx0Zm9udC1zaXplOiAxNnB4O1xuXHQgICAgZm9udC13ZWlnaHQ6IDUwMDtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0Y29sb3I6ICNmZmY7XG5cdH1cblxuXHQub3RwX3dyYXBwZXIge1xuXHQgICAgbWF4LXdpZHRoOiAyMzdweDtcblx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRpb24taW5wdXQge1xuXHRcdCAgICBib3JkZXI6IDFweCBkYXNoZWQgI2RjYzg4ZDtcblx0XHQgICAgY29sb3I6ICNmZmY7XG5cdFx0ICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHQgICAgLS1wYWRkaW5nLXRvcDogNXB4O1xuXHRcdCAgICAtLXBhZGRpbmctZW5kOiAwO1xuXHRcdCAgICAtLXBhZGRpbmctYm90dG9tOiA1cHg7XG5cdFx0ICAgIC0tcGFkZGluZy1zdGFydDogMDtcblx0XHQgICAgZm9udC1zaXplOiAyNnB4O1xuXHRcdCAgICBsaW5lLWhlaWdodDogMjVweDtcblx0XHQgICAgZm9udC13ZWlnaHQ6IDUwMDtcblx0XHR9XG5cdH1cblxuXHRwIHtcblx0XHQmLm90cF9jb250ZW50IHtcblx0XHRcdG1hcmdpbi10b3A6IDI4cHg7XG5cdFx0XHRjb2xvcjogI2ZmZjtcblx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRmb250LXNpemU6IDExcHg7XG4gICAgXHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHR9XG5cdFx0Ji5zaWduX2luIHtcblx0XHRcdG1hcmdpbi10b3A6IDUwcHg7XG5cdFx0fVxuXHR9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/otpverification/otpverification.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/otpverification/otpverification.page.ts ***!
      \*********************************************************/

    /*! exports provided: OtpverificationPage */

    /***/
    function srcAppOtpverificationOtpverificationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpverificationPage", function () {
        return OtpverificationPage;
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


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/auth.service */
      "./src/app/services/auth.service.ts");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      var OtpverificationPage = /*#__PURE__*/function () {
        function OtpverificationPage(authService, navCtrl, toastController, helper, router, platform, cdr, modalController, location, alertController, menuCtrl, authProvider, geolocation) {
          _classCallCheck(this, OtpverificationPage);

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

        _createClass(OtpverificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.ph_number = localStorage.getItem("phnumber");
          }
        }, {
          key: "resendOtp",
          value: function resendOtp() {}
          /**
           * This method is for calling handling login through submit otp and mobile number
          */

        }, {
          key: "submitOtpVerification",
          value: function submitOtpVerification() {
            var _this = this;

            //Validation check
            if (this.otp == '') {
              this.helper.presentAlert("Please enter OTP");
            } else {
              var data = {
                "mobile": this.ph_number,
                "otp": this.otp
              };
              this.authProvider.verifyMobileUser(data).then(function (res) {
                if (res["status"] == '1') {
                  _this.helper.suucessAlert(res["message"]);

                  console.log(res);

                  if (res["status"] == '1') {
                    localStorage.setItem("user_id", res["user"].id); // this.geolocation.getCurrentPosition().then((resp) => {
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
                      _this.navCtrl.navigateRoot('/new-account');
                    } else {
                      localStorage.setItem("userDetails", JSON.stringify(res['user']));

                      _this.navCtrl.navigateRoot('/homenew');
                    }
                  }
                } else {
                  _this.helper.presentAlert(res["message"]);
                }
              });
            }
          }
        }]);

        return OtpverificationPage;
      }();

      OtpverificationPage.ctorParameters = function () {
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
          type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthProvider"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__["Geolocation"]
        }];
      };

      OtpverificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-otpverification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./otpverification.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/otpverification/otpverification.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./otpverification.page.scss */
        "./src/app/otpverification/otpverification.page.scss"))["default"]]
      })], OtpverificationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=otpverification-otpverification-module-es5.js.map