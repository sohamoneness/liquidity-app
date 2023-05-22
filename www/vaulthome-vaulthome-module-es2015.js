(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vaulthome-vaulthome-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vaulthome/vaulthome.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vaulthome/vaulthome.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n  \t\t\t<ion-back-button icon=\"chevron-back-outline\" text=\"\" defaultHref=\"/homenew\"></ion-back-button>\n\t\t</ion-buttons>\n        <!-- <ion-label>SELECTED LOCATION</ion-label>\n      \t<ion-item>\n\t\t  <ion-select value=\"kolkata\">\n\t\t    <ion-select-option selected value=\"kolkata\">kolkata</ion-select-option>\n\t\t    <ion-select-option value=\"mumbai\">mumbai</ion-select-option>\n\t\t    <ion-select-option value=\"bangalore\">bangalore</ion-select-option>\n\t\t    <ion-select-option value=\"delhi\">delhi</ion-select-option>\n\t\t  </ion-select>\n\t\t</ion-item> -->\n\t\t<ion-title>\n\t\t\tLiquidity\n\t\t</ion-title>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<!-- <ion-button routerLink=\"/notification/{{ notificationdetails._id }}\" routerDirection=\"forward\" (click)=\"cancel(list._id)\"> -->\n\t\t\t<ion-button (click)=\"search()\">\n\t\t\t  <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n\t\t\t\t<g clip-path=\"url(#clip0_21_31)\">\n\t\t\t\t<path d=\"M10.5691 0C4.74145 0 0 4.74145 0 10.5691C0 16.3971 4.74145 21.1382 10.5691 21.1382C16.3971 21.1382 21.1382 16.3971 21.1382 10.5691C21.1382 4.74145 16.3971 0 10.5691 0ZM10.5691 19.187C5.81723 19.187 1.95122 15.321 1.95122 10.5691C1.95122 5.81728 5.81723 1.95122 10.5691 1.95122C15.321 1.95122 19.187 5.81723 19.187 10.5691C19.187 15.321 15.321 19.187 10.5691 19.187Z\" fill=\"#28303F\"/>\n\t\t\t\t<path d=\"M23.7142 22.3347L18.1207 16.7412C17.7395 16.36 17.1223 16.36 16.7411 16.7412C16.36 17.122 16.36 17.7399 16.7411 18.1207L22.3346 23.7142C22.4251 23.805 22.5326 23.8769 22.651 23.926C22.7694 23.975 22.8963 24.0002 23.0244 24.0001C23.1525 24.0002 23.2794 23.975 23.3978 23.9259C23.5162 23.8769 23.6237 23.8049 23.7142 23.7142C24.0953 23.3334 24.0953 22.7155 23.7142 22.3347Z\" fill=\"#28303F\"/>\n\t\t\t\t</g>\n\t\t\t\t<defs>\n\t\t\t\t<clipPath id=\"clip0_21_31\">\n\t\t\t\t<rect width=\"24\" height=\"24\" fill=\"white\"/>\n\t\t\t\t</clipPath>\n\t\t\t\t</defs>\n\t\t\t  </svg>\n\t  \n\t\t\t</ion-button>\n\t\t  </ion-buttons>\n\t\t<!-- <ion-icon (click)=\"search()\" slot=\"end\" class=\"search_item\" name=\"search-outline\"></ion-icon> -->\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"vaultlogo_wrap\">\n\t\t<!-- <img src=\"assets/vault-logo.png\"> -->\n\t\t<p>Through <b>Liquidity Vault</b>, reserve your favorite brands at a special price and redeem your reserved product  across the outlets in the category of your choice. </p>\n\t</div>\n\t<div class=\"vault_menu\">\n\t\t<div class=\"vault_item\" (click)=\"gotoCategoryOutlet()\" style=\"background-image: url(assets/category_outlet.png);\">\n\t\t\t<h4>Category<br/>and outlets</h4>\n\t\t</div>\n\t\t<div class=\"vault_item\" (click)=\"gotoReserveValut()\" style=\"background-image: url(assets/WVmini2_1800x1800.jpeg);\">\n\t\t\t<h4>Reserve<br/>at vault</h4>\n\t\t</div>\n\t\t<div class=\"vault_item\" (click)=\"gotoRedeemANDBalance()\" style=\"background-image: url(assets/redeem_balance.png);\">\n\t\t\t<h4>Redeem<br/>and balance</h4>\n\t\t</div>\n\t\t<div class=\"vault_item\" (click)=\"gotoVaultOrderHistory()\" style=\"background-image: url(assets/order_history.jpeg);\">\n\t\t\t<h4>Order<br/>History</h4>\n\t\t</div>\n\t\t<div class=\"vault_item\" (click)=\"gotoFAQ()\" style=\"background-image: url(assets/faq-banner.jpeg);\">\n\t\t\t<h4>Frequently<br/>Asked Questions</h4>\n\t\t</div>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/vaulthome/vaulthome-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/vaulthome/vaulthome-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: VaulthomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaulthomePageRoutingModule", function() { return VaulthomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vaulthome_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaulthome.page */ "./src/app/vaulthome/vaulthome.page.ts");




const routes = [
    {
        path: '',
        component: _vaulthome_page__WEBPACK_IMPORTED_MODULE_3__["VaulthomePage"]
    }
];
let VaulthomePageRoutingModule = class VaulthomePageRoutingModule {
};
VaulthomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VaulthomePageRoutingModule);



/***/ }),

/***/ "./src/app/vaulthome/vaulthome.module.ts":
/*!***********************************************!*\
  !*** ./src/app/vaulthome/vaulthome.module.ts ***!
  \***********************************************/
/*! exports provided: VaulthomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaulthomePageModule", function() { return VaulthomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vaulthome_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaulthome-routing.module */ "./src/app/vaulthome/vaulthome-routing.module.ts");
/* harmony import */ var _vaulthome_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaulthome.page */ "./src/app/vaulthome/vaulthome.page.ts");







let VaulthomePageModule = class VaulthomePageModule {
};
VaulthomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vaulthome_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaulthomePageRoutingModule"]
        ],
        declarations: [_vaulthome_page__WEBPACK_IMPORTED_MODULE_6__["VaulthomePage"]]
    })
], VaulthomePageModule);



/***/ }),

/***/ "./src/app/vaulthome/vaulthome.page.scss":
/*!***********************************************!*\
  !*** ./src/app/vaulthome/vaulthome.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background-size: 100% auto;\n  width: 100%;\n  height: 100%;\n  --padding-top: 10px;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 10px;\n}\nion-content .vault_menu .vault_item {\n  display: flex;\n  border-radius: 10px;\n  height: 120px;\n  margin-bottom: 16px;\n  align-items: center;\n  padding: 30px 100px 30px 30px;\n  background-size: cover;\n}\nion-content .vault_menu .vault_item img {\n  height: 100px;\n  width: auto;\n  margin-right: 30px;\n}\nion-content .vault_menu .vault_item h4 {\n  position: relative;\n  color: #fff;\n  font-size: 26px;\n  font-weight: 700;\n}\nion-content p {\n  color: #000;\n  text-align: left;\n  font-size: 16px;\n}\nion-content p strong {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF1bHRob21lL3ZhdWx0aG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyw0QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFBRDtBQUdFO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0FBREg7QUFHRztFQUNDLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFESjtBQUdHO0VBQ0Msa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBREo7QUFNQztFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFKRjtBQU1FO0VBQ0MsZ0JBQUE7QUFKSCIsImZpbGUiOiJzcmMvYXBwL3ZhdWx0aG9tZS92YXVsdGhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuXHQvLyAtLWJhY2tncm91bmQ6ICNmZmYgdXJsKC4uLy4uL2Fzc2V0cy92YXVsdF9iZy5zdmcpIGJvdHRvbSAtNDBweCBjZW50ZXIgbm8tcmVwZWF0O1xuXHQtLWJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHQtLXBhZGRpbmctdG9wOiAxMHB4O1xuXHQtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG5cdC0tcGFkZGluZy1lbmQ6IDEwcHg7XG5cdC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG5cblx0LnZhdWx0X21lbnUge1xuXHRcdC52YXVsdF9pdGVtIHtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRcdG1hcmdpbi1ib3R0b206IDE2cHg7XG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdFx0cGFkZGluZzogMzBweCAxMDBweCAzMHB4IDMwcHg7XG5cdFx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdFx0XHR3aWR0aDogYXV0bztcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzMHB4O1xuXHRcdFx0fVxuXHRcdFx0aDQge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRmb250LXNpemU6IDI2cHg7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cCB7XG5cdFx0Y29sb3I6ICMwMDA7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRmb250LXNpemU6IDE2cHg7XG5cblx0XHRzdHJvbmcge1xuXHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHR9XG5cdH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/vaulthome/vaulthome.page.ts":
/*!*********************************************!*\
  !*** ./src/app/vaulthome/vaulthome.page.ts ***!
  \*********************************************/
/*! exports provided: VaulthomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaulthomePage", function() { return VaulthomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let VaulthomePage = class VaulthomePage {
    constructor(
    // private authService: AuthenticationService,
    // private navCtrl: NavController,
    // private userDetails: UserDetailsService,
    // private alertCtrl: AlertController,
    // private helper: HelperProvider,
    // private plt: Platform,
    _router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    gotoReserveValut() {
        this._router.navigate(['/vaultselected']);
    }
    gotoCategoryOutlet() {
        this._router.navigate(['/category']);
    }
    gotoRedeemANDBalance() {
        this._router.navigate(['/vaultbalance']);
    }
    gotoVaultOrderHistory() {
        this._router.navigate(['/vault-order-history']);
    }
    gotoFAQ() {
        this._router.navigate(['/faq']);
    }
    search() {
        this._router.navigate(['/search']);
    }
};
VaulthomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
VaulthomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vaulthome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vaulthome.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vaulthome/vaulthome.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vaulthome.page.scss */ "./src/app/vaulthome/vaulthome.page.scss")).default]
    })
], VaulthomePage);



/***/ })

}]);
//# sourceMappingURL=vaulthome-vaulthome-module-es2015.js.map