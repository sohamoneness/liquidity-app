(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-slide-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.page.html":
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.page.html ***!
      \*****************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSlideSlidePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content fullscreen scroll-y=\"false\">\n  <!-- <ion-slides pager=\"true\" [options]=\"slideOpts\"> -->\n  <ion-slides pager=\"true\">\n\n      <ion-slide style=\"background-image: url(../../assets/happy-hours.jpeg);\">\n        <div class=\"slide\">\n          <!-- <img src=\"assets/slide-compare.svg\"/> -->\n          <h2>COMPARE</h2>\n          <p>Compare LIVE prices of your drinks at multiple outlets & buy at lowest price.</p>\n          <ion-button class=\"btn-continue\" (click)=\"continue()\">continue</ion-button>\n        </div>\n      </ion-slide>\n\n      <ion-slide style=\"background-image: url(../../assets/VintageView-Metal-Wine-Racking-Mounted-to-Millwork-Clad-Wall.jpeg);\">\n        <div class=\"slide\">\n          <!-- <img src=\"assets/slide-vault.svg\"/> -->\n          <h2>RESERVE</h2>\n          <p>Reserve drinks, food and table at lowest rate across multiple outlets in your city.</p>\n          <ion-button class=\"btn-continue\" (click)=\"continue()\">continue</ion-button>\n        </div>\n      </ion-slide>\n\n      <ion-slide style=\"background-image: url(../../assets/redeem_bg.jpeg);\">\n        <div class=\"slide\">\n          <!-- <img src=\"assets/slide-redeem.svg\"/> -->\n          <h2>REDEEM</h2>\n          <p>Redeem your reserved drink & food and enjoy hassle free experience only through Liquidity.</p>\n          <ion-button class=\"btn-continue\" (click)=\"continue()\">continue</ion-button>\n        </div>\n      </ion-slide>\n\n  </ion-slides>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/slide/slide-routing.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/slide/slide-routing.module.ts ***!
      \***********************************************/

    /*! exports provided: SlidePageRoutingModule */

    /***/
    function srcAppSlideSlideRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidePageRoutingModule", function () {
        return SlidePageRoutingModule;
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


      var _slide_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./slide.page */
      "./src/app/slide/slide.page.ts");

      var routes = [{
        path: '',
        component: _slide_page__WEBPACK_IMPORTED_MODULE_3__["SlidePage"]
      }];

      var SlidePageRoutingModule = /*#__PURE__*/_createClass(function SlidePageRoutingModule() {
        _classCallCheck(this, SlidePageRoutingModule);
      });

      SlidePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SlidePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/slide/slide.module.ts":
    /*!***************************************!*\
      !*** ./src/app/slide/slide.module.ts ***!
      \***************************************/

    /*! exports provided: SlidePageModule */

    /***/
    function srcAppSlideSlideModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidePageModule", function () {
        return SlidePageModule;
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


      var _slide_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./slide-routing.module */
      "./src/app/slide/slide-routing.module.ts");
      /* harmony import */


      var _slide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./slide.page */
      "./src/app/slide/slide.page.ts");

      var SlidePageModule = /*#__PURE__*/_createClass(function SlidePageModule() {
        _classCallCheck(this, SlidePageModule);
      });

      SlidePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _slide_routing_module__WEBPACK_IMPORTED_MODULE_5__["SlidePageRoutingModule"]],
        declarations: [_slide_page__WEBPACK_IMPORTED_MODULE_6__["SlidePage"]]
      })], SlidePageModule);
      /***/
    },

    /***/
    "./src/app/slide/slide.page.scss":
    /*!***************************************!*\
      !*** ./src/app/slide/slide.page.scss ***!
      \***************************************/

    /*! exports provided: default */

    /***/
    function srcAppSlideSlidePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('BG.png') no-repeat center center / cover;\n  padding: 0;\n}\nion-content ion-slides {\n  height: 100%;\n  padding: 0;\n}\nion-content ion-slides ion-slide {\n  background-size: cover;\n  background-position: center;\n}\nion-content .slide {\n  display: block;\n  width: 100%;\n  max-width: calc(100% - 32px);\n  background: rgba(255, 255, 255, 0.6);\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  border-radius: 20px;\n  margin: auto 0 16px;\n  padding: 30px;\n  color: #000;\n}\nion-content .slide img {\n  display: block;\n  margin: auto auto 50px;\n  width: auto;\n  height: 150px;\n}\nion-content .slide h2 {\n  color: #000;\n  font-size: 19px;\n  text-transform: uppercase;\n  font-family: \"Outfit\";\n  font-weight: 900;\n  text-align: center;\n  margin: 0;\n}\nion-content .slide p {\n  color: #000;\n  font-size: 16px;\n  font-family: \"Outfit\";\n  margin: 21px 0 20px;\n  line-height: 1.4;\n  font-weight: normal;\n}\nion-content .slide .btn-continue {\n  width: 100%;\n  height: 52px;\n  --border-radius: 30px;\n}\nion-content .swiper-pagination-bullets {\n  bottom: 109px !important;\n  --bullet-background: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2xpZGUvc2xpZGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsMkRBQUE7RUFDQSxVQUFBO0FBQ0Q7QUFDQztFQUNDLFlBQUE7RUFDQSxVQUFBO0FBQ0Y7QUFDRTtFQUNDLHNCQUFBO0VBQ0EsMkJBQUE7QUFDSDtBQUVDO0VBQ0ksY0FBQTtFQUNILFdBQUE7RUFDQSw0QkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQUFGO0FBSUU7RUFDQyxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUZIO0FBS0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUhIO0FBS0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0csbUJBQUE7RUFDSCxnQkFBQTtFQUNHLG1CQUFBO0FBSE47QUFLRTtFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFISDtBQU1DO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtBQUpMIiwiZmlsZSI6InNyYy9hcHAvc2xpZGUvc2xpZGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvQkcucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xuXHRwYWRkaW5nOiAwO1xuXG5cdGlvbi1zbGlkZXMge1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHRwYWRkaW5nOiAwO1xuXG5cdFx0aW9uLXNsaWRlIHtcblx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5cdFx0XHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cdFx0fVxuXHR9XG5cdC5zbGlkZSB7XG5cdCAgICBkaXNwbGF5OiBibG9jaztcblx0XHR3aWR0aDogMTAwJTtcblx0XHRtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuXHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcblx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjBweDtcblx0XHRtYXJnaW46IGF1dG8gMCAxNnB4O1xuXHRcdHBhZGRpbmc6IDMwcHg7XG5cdFx0Y29sb3I6ICMwMDA7XG4gICAgXHQvLyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcblx0XHQvLyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoNzcuNjMlIDc3LjYzJSBhdCA1MCUgMCUsIHJnYmEoMCwgMCwgMCwgMCkgMCUsICMwMDAwMDAgMTAwJSk7XG5cblx0XHRpbWcge1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRtYXJnaW46IGF1dG8gYXV0byA1MHB4O1xuXHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0XHRoZWlnaHQ6IDE1MHB4O1xuXHRcdH1cblxuXHRcdGgyIHtcblx0XHRcdGNvbG9yOiAjMDAwO1xuXHRcdFx0Zm9udC1zaXplOiAxOXB4O1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdGZvbnQtZmFtaWx5OiBcIk91dGZpdFwiO1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbjogMDtcblx0XHR9XG5cdFx0cCB7XG5cdFx0XHRjb2xvcjogIzAwMDtcblx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdGZvbnQtZmFtaWx5OiBcIk91dGZpdFwiO1xuXHRcdCAgICBtYXJnaW46IDIxcHggMCAyMHB4O1xuXHRcdFx0bGluZS1oZWlnaHQ6IDEuNDtcblx0XHQgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblx0XHR9XG5cdFx0LmJ0bi1jb250aW51ZSB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGhlaWdodDogNTJweDtcblx0XHRcdC0tYm9yZGVyLXJhZGl1czogMzBweDtcblx0XHR9XG5cdH1cblx0LnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuXHQgICAgYm90dG9tOiAxMDlweCAhaW1wb3J0YW50O1xuXHQgICAgLS1idWxsZXQtYmFja2dyb3VuZDogI2ZmZjtcblx0fVxufVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/slide/slide.page.ts":
    /*!*************************************!*\
      !*** ./src/app/slide/slide.page.ts ***!
      \*************************************/

    /*! exports provided: SlidePage */

    /***/
    function srcAppSlideSlidePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SlidePage", function () {
        return SlidePage;
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
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import { FormGroup, Validators, FormBuilder } from '@angular/forms';


      var SlidePage = /*#__PURE__*/function () {
        function SlidePage(authService, navCtrl, // public formBuilder: FormBuilder,
        toastController, helper, router, platform, cdr, modalController, location, alertController, menuCtrl) {
          _classCallCheck(this, SlidePage);

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

        _createClass(SlidePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "continue",
          value: function _continue() {
            // this.navCtrl.navigateRoot("/login")
            this.navCtrl.navigateRoot("/login-otp");
          }
        }]);

        return SlidePage;
      }();

      SlidePage.ctorParameters = function () {
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
        }];
      };

      SlidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-slide',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./slide.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/slide/slide.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./slide.page.scss */
        "./src/app/slide/slide.page.scss"))["default"]]
      })], SlidePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=slide-slide-module-es5.js.map