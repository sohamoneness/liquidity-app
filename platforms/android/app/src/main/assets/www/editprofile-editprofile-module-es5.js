(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editprofile-editprofile-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppEditprofileEditprofilePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/myprofile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\t<!-- <div class=\"logo_wrap\">\n\t\t<img src=\"../../assets/logo.png\">\n\t</div> -->\n\t<div class=\"form_wrap pt-25\">\n\t\t<ion-input type=\"text\" placeholder=\"Full Name\" [(ngModel)]=\"user_name\"></ion-input>\n\t\t<ion-input type=\"Number\" placeholder=\"Your Mobile Number\"  [(ngModel)]=\"user_mobile\"></ion-input>\n    <ion-input type=\"email\" placeholder=\"Your Email Id\" [(ngModel)]=\"user_mail\" readonly></ion-input>\n\t\t<!-- <ion-label> {{this.user_mail}}</ion-label> -->\n    <ion-label>Choose Gender*</ion-label>\n    <ion-select value=\"kolkata\" [(ngModel)]=\"genderId\" multiple=\"false\" (ionChange)=\"optionsgender();\">\n    <ion-select-option *ngFor=\"let item of gender\" [value]=\"item.id\" placeholder=\"Please select Gender\" selected value=\"kolkata\">{{item.name}}</ion-select-option>\n    </ion-select>\n    <ion-label>Choose Date of Birth</ion-label>\n    <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"date\" (ionChange)=\"setDate()\" placeholder=\"Select Date of Birth\"></ion-datetime>\n\t\t<!-- <ion-input type=\"password\" placeholder=\"Password\" [(ngModel)]=\"password\"></ion-input>\n\t\t<ion-input type=\"password\" placeholder=\"Confirm Password\"></ion-input>\n\t\t<p class=\"terms\">By Signing up you agree to our <span>Terms of Use</span> & <span>Privacy Policy</span>.</p>\n        <ion-checkbox slot=\"start\"></ion-checkbox>\n        <ion-label>I confirm, I have reached the eligible age as per State laws for purchase & consumption of alcoholic beverages.</ion-label> -->\n\t\t<ion-button class=\"btn-submit\" expand=\"block\" shape=\"round\" (click)=\"submitValues()\">Update Profile</ion-button>\n\t\t<!-- <p class=\"sign_in\">Have an account? <span routerLink=\"/login\" routerDirection=\"forward\">Sign In</span></p> -->\n\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/editprofile/editprofile-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/editprofile/editprofile-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: EditprofilePageRoutingModule */

    /***/
    function srcAppEditprofileEditprofileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePageRoutingModule", function () {
        return EditprofilePageRoutingModule;
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


      var _editprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editprofile.page */
      "./src/app/editprofile/editprofile.page.ts");

      var routes = [{
        path: '',
        component: _editprofile_page__WEBPACK_IMPORTED_MODULE_3__["EditprofilePage"]
      }];

      var EditprofilePageRoutingModule = /*#__PURE__*/_createClass(function EditprofilePageRoutingModule() {
        _classCallCheck(this, EditprofilePageRoutingModule);
      });

      EditprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditprofilePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/editprofile/editprofile.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/editprofile/editprofile.module.ts ***!
      \***************************************************/

    /*! exports provided: EditprofilePageModule */

    /***/
    function srcAppEditprofileEditprofileModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function () {
        return EditprofilePageModule;
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


      var _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editprofile-routing.module */
      "./src/app/editprofile/editprofile-routing.module.ts");
      /* harmony import */


      var _editprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editprofile.page */
      "./src/app/editprofile/editprofile.page.ts");

      var EditprofilePageModule = /*#__PURE__*/_createClass(function EditprofilePageModule() {
        _classCallCheck(this, EditprofilePageModule);
      });

      EditprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditprofilePageRoutingModule"]],
        declarations: [_editprofile_page__WEBPACK_IMPORTED_MODULE_6__["EditprofilePage"]]
      })], EditprofilePageModule);
      /***/
    },

    /***/
    "./src/app/editprofile/editprofile.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/editprofile/editprofile.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppEditprofileEditprofilePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: url('banner-1.png') no-repeat center center / cover;\n}\nion-content .logo_wrap {\n  padding: 35px 60px 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdHByb2ZpbGUvZWRpdHByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUVBQUE7QUFDRDtBQUNDO0VBQ0ksdUJBQUE7QUFDTCIsImZpbGUiOiJzcmMvYXBwL2VkaXRwcm9maWxlL2VkaXRwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuXHQtLWJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvYmFubmVyLTEucG5nKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xyXG5cclxuXHQubG9nb193cmFwIHtcclxuXHQgICAgcGFkZGluZzogMzVweCA2MHB4IDMycHg7XHJcblx0fVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/editprofile/editprofile.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/editprofile/editprofile.page.ts ***!
      \*************************************************/

    /*! exports provided: EditprofilePage */

    /***/
    function srcAppEditprofileEditprofilePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditprofilePage", function () {
        return EditprofilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user-details.service */
      "./src/app/services/user-details.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var EditprofilePage = /*#__PURE__*/function () {
        function EditprofilePage(authService, navCtrl, userDetails, helper, datePipe, platform) {
          _classCallCheck(this, EditprofilePage);

          this.authService = authService;
          this.navCtrl = navCtrl;
          this.userDetails = userDetails;
          this.helper = helper;
          this.datePipe = datePipe;
          this.platform = platform;
          this.gender = [];
          this.user = [];
          this.user_name = [];
          this.user_mail = [];
          this.user_mobile = [];
          this.date = [];
          this.today_date = [];
          this.genderId = [];
          this.gender.push({
            id: '1',
            name: 'male'
          }, {
            id: '2',
            name: 'female'
          });
        }

        _createClass(EditprofilePage, [{
          key: "optionsgender",
          value: function optionsgender() {
            console.log(this.genderId);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = JSON.parse(localStorage.getItem('userDetails'));
            console.log('edit', this.user);
            this.user_mail = this.user.email;
            this.user_name = this.user.name;
            this.user_mobile = this.user.mobile;
            this.genderId = this.user.gender;
            this.date = this.user.dob; // this.today_date = String(this.datePipe.transform(date, "yyyy-MM-dd"));

            console.log(this.today_date);
          }
        }, {
          key: "submitValues",
          value: function submitValues() {
            var _this = this;

            // var date = new Date();
            // console.log(this.datePipe.transform(date,"dd-MM-yyyy")); //output : 2018-02-13
            this.today_date = String(this.datePipe.transform(this.date, "yyyy-MM-dd"));
            console.log(this.today_date);

            if (this.user_mail == '') {
              this.helper.presentToast("Please enter your mail");
            } else if (this.user_mobile == '') {
              this.helper.presentToast("Please enter your mobile");
            } else if (this.user_name == '') {
              this.helper.presentToast("Please enter your name");
            } else {
              var data = {
                "id": this.user.id,
                "name": this.user_name,
                "mobile": this.user_mobile,
                "gender": this.genderId,
                "dob": this.today_date
              };
              this.userDetails.updateProfile(data).then(function (res) {
                if (res["status"] == '1') {
                  _this.helper.presentToast(res["message"]);

                  localStorage.setItem("userDetails", JSON.stringify(res['user']));

                  _this.navCtrl.pop();

                  _this.navCtrl.navigateForward('/homenew');
                } else {
                  _this.helper.presentToast(res["message"]);
                }
              });
            }
          }
        }, {
          key: "setDate",
          value: function setDate() {
            // var date = new Date();
            // console.log(this.datePipe.transform(date,"dd-MM-yyyy")); //output : 2018-02-13
            this.today_date = String(this.datePipe.transform(this.date, "yyyy-MM-dd"));
            console.log(this.today_date);
          }
        }]);

        return EditprofilePage;
      }();

      EditprofilePage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }];
      };

      EditprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-editprofile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./editprofile.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/editprofile/editprofile.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./editprofile.page.scss */
        "./src/app/editprofile/editprofile.page.scss"))["default"]]
      })], EditprofilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=editprofile-editprofile-module-es5.js.map