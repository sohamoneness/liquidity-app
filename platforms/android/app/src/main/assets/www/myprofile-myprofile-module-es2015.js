(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myprofile-myprofile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/myprofile/myprofile.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myprofile/myprofile.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>My Profile</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngIf=\"user\">\n  <div class=\"menu__header\">\n    <div class=\"user__image\">\n      <img src=\"assets/user.jpg\" />\n    </div>\n    <h6>{{user_name}}</h6>\n    <p>{{user_mail}}</p>\n    <p>+91 {{user_mobile}}</p>\n    <a  class=\"menu__button\">Wallet: &#8377;{{wallet | number : '.2-2'}}</a>\n  </div>\n\n  <div class=\"order-summary\">\n    <a class=\"edit_button\" (click)=\"editProfile()\"><ion-icon name=\"pencil-sharp\"></ion-icon> Edit</a>\n    <h6>{{user_name}}</h6>\n    <p><span>{{user_mail}}</span></p>\n    <p><span>+91 {{user_mobile}}</span></p>\n  </div>\n  <div class=\"order-summary\">\n    <a class=\"edit_button\" (click)=\"editProfile()\"><ion-icon name=\"pencil-sharp\"></ion-icon> Edit</a>\n    <p><span>Date of Birth:</span> {{user.dob|date:'dd/MM/yyyy'}}</p>\n    <p><span>Gender:</span> \n      <span *ngIf=\"user.gender=='1'\">Male</span>\n      <span *ngIf=\"user.gender=='2'\">Female</span>\n    </p>\n    <!-- <p><span>Address:</span> 2/28 Samajghar, Golf Green<br/>Kolkata - 700121 </p> -->\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/myprofile/myprofile-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/myprofile/myprofile-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: MyprofilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePageRoutingModule", function() { return MyprofilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _myprofile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./myprofile.page */ "./src/app/myprofile/myprofile.page.ts");




const routes = [
    {
        path: '',
        component: _myprofile_page__WEBPACK_IMPORTED_MODULE_3__["MyprofilePage"]
    }
];
let MyprofilePageRoutingModule = class MyprofilePageRoutingModule {
};
MyprofilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyprofilePageRoutingModule);



/***/ }),

/***/ "./src/app/myprofile/myprofile.module.ts":
/*!***********************************************!*\
  !*** ./src/app/myprofile/myprofile.module.ts ***!
  \***********************************************/
/*! exports provided: MyprofilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePageModule", function() { return MyprofilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./myprofile-routing.module */ "./src/app/myprofile/myprofile-routing.module.ts");
/* harmony import */ var _myprofile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myprofile.page */ "./src/app/myprofile/myprofile.page.ts");







let MyprofilePageModule = class MyprofilePageModule {
};
MyprofilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _myprofile_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyprofilePageRoutingModule"]
        ],
        declarations: [_myprofile_page__WEBPACK_IMPORTED_MODULE_6__["MyprofilePage"]]
    })
], MyprofilePageModule);



/***/ }),

/***/ "./src/app/myprofile/myprofile.page.scss":
/*!***********************************************!*\
  !*** ./src/app/myprofile/myprofile.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #ebeff2;\n}\nion-content .menu__header {\n  background-color: #000;\n  padding: 20px;\n  box-sizing: border-box;\n  color: #ffffff;\n  text-align: center;\n}\nion-content .menu__header h6 {\n  font-size: 12px;\n  text-transform: uppercase;\n  margin: 0;\n}\nion-content .menu__header p {\n  margin: 0 0 6px;\n}\nion-content .menu__header .menu__button {\n  display: inline-block;\n  padding: 0 10px;\n  vertical-align: middle;\n  margin: 0 5px;\n  background-color: #dcc88d;\n  color: #000;\n  border-radius: 20px;\n  text-decoration: none;\n  font-size: 10px;\n  line-height: 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\nion-content .menu__header .user__image {\n  display: block;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 20px;\n  position: relative;\n}\nion-content .menu__header .user__image:before {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  border: 1px solid #dcc88d;\n  position: absolute;\n  pointer-events: none;\n  content: \"\";\n  top: -5px;\n  left: -5px;\n}\nion-content .menu__header .user__image img {\n  border-radius: 50%;\n  max-width: 100%;\n}\nion-content .order-summary {\n  padding: 15px 20px;\n  background-color: #fff;\n  margin: 10px 0;\n}\nion-content .order-summary h6 {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #bf9f4c;\n  margin: 0;\n}\nion-content .order-summary .edit_button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  float: right;\n  color: #bf9f4c;\n  border: 1px solid #bf9f4c;\n  padding: 2px 6px;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 5px;\n  text-decoration: none;\n}\nion-content .order-summary .edit_button ion-icon {\n  margin-right: 4px;\n}\nion-content .order-summary p {\n  color: #bf9f4c;\n  margin: 0;\n  font-weight: 600;\n  line-height: 20px;\n}\nion-content .order-summary p span {\n  color: #111111;\n  display: inline-block;\n}\nion-content .order-summary ion-grid {\n  --ion-grid-padding: 0;\n}\nion-content .order-summary ion-grid ion-col {\n  --ion-grid-column-padding: 0;\n}\nion-content .order-summary hr {\n  background-color: #b2b2b2;\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXlwcm9maWxlL215cHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUNSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBQ1o7QUFDUTtFQUNJLGVBQUE7QUFDWjtBQUVRO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFBWjtBQUdRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRFo7QUFHWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFEaEI7QUFHWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQURoQjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFIUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFIWjtBQU1RO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUpaO0FBTVk7RUFDSSxpQkFBQTtBQUpoQjtBQVFRO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBTlo7QUFRWTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQU5oQjtBQVNRO0VBQ0kscUJBQUE7QUFQWjtBQVNZO0VBQ0ksNEJBQUE7QUFQaEI7QUFVUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQVJaIiwiZmlsZSI6InNyYy9hcHAvbXlwcm9maWxlL215cHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZWJlZmYyO1xuXG4gICAgLm1lbnVfX2hlYWRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBcbiAgICAgICAgaDYge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC5tZW51X19idXR0b24ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNjODhkO1xuICAgICAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIC51c2VyX19pbWFnZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIFxuICAgICAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4OHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogODhweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RjYzg4ZDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICAgICAgICAgIGxlZnQ6IC01cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm9yZGVyLXN1bW1hcnkge1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuXG4gICAgICAgIGg2IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBjb2xvcjogI2JmOWY0YztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lZGl0X2J1dHRvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiAjYmY5ZjRjO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmOWY0YztcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCA2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBjb2xvcjogI2JmOWY0YztcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICBcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMTExMTExO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaW9uLWdyaWQge1xuICAgICAgICAgICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xuICAgIFxuICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBociB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjJiMmIyO1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/myprofile/myprofile.page.ts":
/*!*********************************************!*\
  !*** ./src/app/myprofile/myprofile.page.ts ***!
  \*********************************************/
/*! exports provided: MyprofilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyprofilePage", function() { return MyprofilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-details.service */ "./src/app/services/user-details.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");







let MyprofilePage = class MyprofilePage {
    constructor(authService, navCtrl, userDetails, alertCtrl, helper, plt, menuCtrl) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.userDetails = userDetails;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.plt = plt;
        this.menuCtrl = menuCtrl;
        this.user = [];
        this.user_name = [];
        this.user_mail = [];
        this.user_mobile = [];
        this.wallet = [];
    }
    ngOnInit() {
        this.wallet = localStorage.getItem('wallet_balance');
    }
    ionViewWillEnter() {
        this.user = JSON.parse(localStorage.getItem('userDetails'));
        console.log(this.user);
        this.user_mail = this.user.email;
        this.user_name = this.user.name;
        this.user_mobile = this.user.mobile;
        this.menuCtrl.close();
        // this.menuCtrl.enable(false);
        // localStorage.clear();
        console.log('storage clear');
    }
    editProfile() {
        this.navCtrl.navigateRoot('/editprofile');
    }
};
MyprofilePage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"] }
];
MyprofilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-myprofile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./myprofile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/myprofile/myprofile.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./myprofile.page.scss */ "./src/app/myprofile/myprofile.page.scss")).default]
    })
], MyprofilePage);



/***/ })

}]);
//# sourceMappingURL=myprofile-myprofile-module-es2015.js.map