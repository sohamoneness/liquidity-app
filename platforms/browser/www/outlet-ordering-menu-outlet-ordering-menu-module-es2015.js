(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlet-ordering-menu-outlet-ordering-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-ordering-menu/outlet-ordering-menu.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-ordering-menu/outlet-ordering-menu.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n  \t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n  \t</ion-buttons>\n    <!-- <ion-title>SELECTED LOCATION</ion-title> -->\n    <!-- <ion-label>SELECTED LOCATION</ion-label>\n    <ion-item>\n    <ion-select value=\"kolkata\">\n      <ion-select-option selected value=\"kolkata\">kolkata</ion-select-option>\n      <ion-select-option value=\"mumbai\">Mumbai</ion-select-option>\n      \n    </ion-select>\n  </ion-item> -->\n  <!-- <ion-icon slot=\"end\" class=\"search_item\" name=\"search-outline\" (click)=\"search()\"></ion-icon> -->\n  <ion-icon slot=\"end\" class=\"search_item\" name=\"cart-outline\" (click)=\"cart()\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"resturant_img_wrap\" *ngIf=\"shopDetails\">\n\t\t<img src=\"{{shopDetails.image}}\">\n\t\t<div class=\"rating_number\">\n\t\t\t<p>{{shopDetails.rating}}</p>\n\t\t\t<ion-icon slot=\"end\" class=\"star-icon\" name=\"star\"></ion-icon>\n\t\t</div>\n\t</div>\n\t<div class=\"resturant_title_wrap\" *ngIf=\"shopDetails\">\n\t\t<h1 class=\"heading\">{{shopDetails.name}}</h1>\n\t\t<p class=\"content\">{{shopDetails.address}}</p>\n\t\t<div class=\"br-1\"></div>\n\t\t<div class=\"btn_group\">\n\t\t\t<ion-button class=\"btn-outlet\" (click)=\"callNow(shopDetails.phone)\">CONTACT OUTLET</ion-button>\n\t\t\t<ion-button class=\"btn-outlet\" (click)=\"callHousingRules()\">VIEW HOUSE RULES</ion-button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"resturant_title_wrap mt-24\">\n\t\t<div class=\"rebate_tag\">{{shopDetails.offer_rate}}% OFF</div>\n\t\t<p class=\"content-2\">{{shopDetails.offer_text}}</p>\n\t\t<p class=\"content-2\">{{shopDetails.house_rules}}</p>\n\t\t<p class=\"content content-mod\">Auto applied during checkout</p>\n\t</div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n  \t<div class=\"footer_item_end\" (click)=\"gotoOutLet()\">\n  \t\t<p>VIEW ONLINE ORDERING MENU</p>\n  \t\t<img src=\"assets/arrow-right.png\">\n  \t</div>\n  </div>\n</ion-footer>");

/***/ }),

/***/ "./src/app/outlet-ordering-menu/outlet-ordering-menu-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/outlet-ordering-menu/outlet-ordering-menu-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OutletOrderingMenuPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletOrderingMenuPageRoutingModule", function() { return OutletOrderingMenuPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _outlet_ordering_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./outlet-ordering-menu.page */ "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.ts");




const routes = [
    {
        path: '',
        component: _outlet_ordering_menu_page__WEBPACK_IMPORTED_MODULE_3__["OutletOrderingMenuPage"]
    }
];
let OutletOrderingMenuPageRoutingModule = class OutletOrderingMenuPageRoutingModule {
};
OutletOrderingMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OutletOrderingMenuPageRoutingModule);



/***/ }),

/***/ "./src/app/outlet-ordering-menu/outlet-ordering-menu.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/outlet-ordering-menu/outlet-ordering-menu.module.ts ***!
  \*********************************************************************/
/*! exports provided: OutletOrderingMenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletOrderingMenuPageModule", function() { return OutletOrderingMenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _outlet_ordering_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./outlet-ordering-menu-routing.module */ "./src/app/outlet-ordering-menu/outlet-ordering-menu-routing.module.ts");
/* harmony import */ var _outlet_ordering_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./outlet-ordering-menu.page */ "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.ts");







let OutletOrderingMenuPageModule = class OutletOrderingMenuPageModule {
};
OutletOrderingMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _outlet_ordering_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletOrderingMenuPageRoutingModule"]
        ],
        declarations: [_outlet_ordering_menu_page__WEBPACK_IMPORTED_MODULE_6__["OutletOrderingMenuPage"]]
    })
], OutletOrderingMenuPageModule);



/***/ }),

/***/ "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/outlet-ordering-menu/outlet-ordering-menu.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #eceff1;\n}\nion-content .resturant_img_wrap {\n  margin-bottom: 0;\n  background-color: #fff;\n  padding: 10px;\n}\nion-content .resturant_img_wrap img {\n  width: 100%;\n}\nion-content .br-1 {\n  margin: 11px 0 15px;\n}\nion-footer .footer_item_end {\n  background-color: #dcc88d;\n  justify-content: center;\n  padding-right: 0;\n}\nion-footer .footer_item_end p {\n  font-family: \"Outfit\" !important;\n  text-transform: uppercase;\n}\n.star-icon {\n  position: absolute;\n  top: -4px;\n  right: -4px;\n  color: #fff;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bGV0LW9yZGVyaW5nLW1lbnUvb3V0bGV0LW9yZGVyaW5nLW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7QUFDRDtBQUNDO0VBQ0ksZ0JBQUE7RUFDRyxzQkFBQTtFQUNBLGFBQUE7QUFDUjtBQUNRO0VBQ0MsV0FBQTtBQUNUO0FBR0M7RUFDQyxtQkFBQTtBQURGO0FBS0M7RUFDSSx5QkFBQTtFQUNHLHVCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlRO0VBQ0ksZ0NBQUE7RUFDQSx5QkFBQTtBQUZaO0FBT0E7RUFDQyxrQkFBQTtFQUNHLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL291dGxldC1vcmRlcmluZy1tZW51L291dGxldC1vcmRlcmluZy1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiAjZWNlZmYxO1xuXG5cdC5yZXN0dXJhbnRfaW1nX3dyYXAge1xuXHQgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICBcdHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cdH1cblxuXHQuYnItMSB7XG5cdFx0bWFyZ2luOiAxMXB4IDAgMTVweDtcblx0fVxufVxuaW9uLWZvb3RlciB7XG5cdC5mb290ZXJfaXRlbV9lbmQge1xuXHQgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjYzg4ZDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJPdXRmaXRcIiAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXHR9XG59XG5cbi5zdGFyLWljb257XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC00cHg7XG4gICAgcmlnaHQ6IC00cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/outlet-ordering-menu/outlet-ordering-menu.page.ts ***!
  \*******************************************************************/
/*! exports provided: OutletOrderingMenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutletOrderingMenuPage", function() { return OutletOrderingMenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-details.service */ "./src/app/services/user-details.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");







let OutletOrderingMenuPage = class OutletOrderingMenuPage {
    constructor(authService, navCtrl, userDetails, alertCtrl, helper, plt, callNumber) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.userDetails = userDetails;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.plt = plt;
        this.callNumber = callNumber;
        this.shopDetails = [];
    }
    ngOnInit() {
        this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
        console.log('shopDetails: ', this.shopDetails);
    }
    gotoOutLet() {
        this.navCtrl.navigateForward('/outletmenu');
    }
    cart() {
        this.navCtrl.navigateForward('/cart');
    }
    /**
     * This method for calling outlet number
     * @param number
     */
    callNow(number) {
        console.log(number);
        this.callNumber.callNumber(number, true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }
    /**
     * This method is for showing house rules
     */
    callHousingRules() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'House Rules',
                message: this.shopDetails.house_rules,
                buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => { }
                    }]
            });
            yield alert.present();
        });
    }
};
OutletOrderingMenuPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"] }
];
OutletOrderingMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-outlet-ordering-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./outlet-ordering-menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-ordering-menu/outlet-ordering-menu.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./outlet-ordering-menu.page.scss */ "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.scss")).default]
    })
], OutletOrderingMenuPage);



/***/ })

}]);
//# sourceMappingURL=outlet-ordering-menu-outlet-ordering-menu-module-es2015.js.map