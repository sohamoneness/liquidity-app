(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vault-order-details-vault-order-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vault-order-details/vault-order-details.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vault-order-details/vault-order-details.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Order Summary</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <ion-item *ngIf=\"shop_details\">\n    <ion-avatar slot=\"start\">\n      <img src=\"{{shop_details.image}}\" />\n    </ion-avatar>\n    <ion-label *ngIf=\"shop_details\">\n      <h5>{{shop_details.name}}</h5>\n      {{shop_details.address}}\n    </ion-label>\n  </ion-item> -->\n\n  <div class=\"title_bar\">\n\t\t<h2 class=\"title\">Order Details</h2>\n  </div>\n  \n  <div class=\"order-summary\" *ngIf=\"all_order\">\n    <!-- <p><span>Product Name:</span> </p>\n    <p><span>Order ID:</span> </p>\n    <p><span>Transation Reference:</span> wallet</p> -->\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"6\"><p><span>Product Name:</span></p></ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\"><p>{{all_order.product_name}}</p></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\"><p><span>Order ID:</span></p></ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\"><p>{{all_order.order_id}}</p></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\"><p><span>Transation Reference:</span></p></ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\"><p>Wallet</p></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\"><p><span>Date:</span></p></ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\"><p>{{all_order.created_at}}</p></ion-col>\n        <!-- <ion-col size=\"6\"><p><span>Time:</span> 02:24 PM</p></ion-col> -->\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"6\"><p><span>Scheduled Date:</span></p></ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\"><p>{{all_order.order_date}}</p></ion-col>\n        <!-- <ion-col size=\"6\"><p><span>Time:</span> 02:24 PM</p></ion-col> -->\n      </ion-row>\n    </ion-grid>\n    <hr/>\n    <!-- <p><span>Paid Using:</span> wallet</p>\n    <hr/> -->\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"6\"><p><span>liquidity order code</span></p></ion-col>\n        <ion-col size=\"6\" class=\"ion-text-right\"><p>{{all_order.unique_id}}</p></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"title_bar\" *ngIf=\"all_liquor_order_summary!=''\">\n\t\t<h2 class=\"title\">Redeemed Summary</h2>\n  </div>\n  \n  <div class=\"order-summary\" >\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"7\"><h6 class=\"title\">Outlet</h6></ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\"><h6 class=\"title text-center\">Qty</h6></ion-col>\n        <ion-col size=\"3\" class=\"ion-text-right\"><h6 class=\"title text-center\">Date</h6></ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of all_liquor_order_summary\">\n        <ion-col size=\"7\">\n          <h6>{{item.shop_name}}</h6>\n        </ion-col>\n        <ion-col size=\"2\" class=\"ion-text-center\">\n          <p><span>{{item.quantiy}}</span></p>\n        </ion-col>\n        <ion-col size=\"3\" class=\"ion-text-right\">\n          <p><span>{{item.redeem_date}}</span></p>\n        </ion-col>\n      </ion-row>\n      <hr/>\n      <ion-row>\n        <ion-col size=\"8\">\n          <h6>Total Quantity</h6>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <h6>{{all_order.quantity}} unit</h6>\n        </ion-col>\n        <ion-col size=\"8\">\n          <h6>Total Quantity Used</h6>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <h6>{{all_order.total_quantity_used}} unit</h6>\n        </ion-col>\n        <ion-col size=\"8\">\n          <p><span>Remainning Quantity</span></p>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <p><span>{{all_order.balance_quantity}} unit</span></p>\n        </ion-col>\n      </ion-row>\n      <hr/>\n      <ion-row>\n        <ion-col size=\"8\">\n          <h6>Total Amount</h6>\n        </ion-col>\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <h6><span class=\"currency\">$</span> {{all_order.total_amount}}</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n  <div class=\"title_bar\">\n\t\t<h2 class=\"title\">Contact Outlet</h2>\n  </div>\n  \n  <!-- <div class=\"order-summary\" *ngIf=\"shop_details\"> \n    <p><ion-icon name=\"call-sharp\"></ion-icon> {{shop_details.phone}}</p>\n    <hr/> -->\n    <!-- <p><ion-icon name=\"call-sharp\"></ion-icon> +91 8978975465</p> -->\n  <!-- </div> -->\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/vault-order-details/vault-order-details-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/vault-order-details/vault-order-details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: VaultOrderDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultOrderDetailsPageRoutingModule", function() { return VaultOrderDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vault_order_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault-order-details.page */ "./src/app/vault-order-details/vault-order-details.page.ts");




const routes = [
    {
        path: '',
        component: _vault_order_details_page__WEBPACK_IMPORTED_MODULE_3__["VaultOrderDetailsPage"]
    }
];
let VaultOrderDetailsPageRoutingModule = class VaultOrderDetailsPageRoutingModule {
};
VaultOrderDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VaultOrderDetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/vault-order-details/vault-order-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/vault-order-details/vault-order-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: VaultOrderDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultOrderDetailsPageModule", function() { return VaultOrderDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vault_order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vault-order-details-routing.module */ "./src/app/vault-order-details/vault-order-details-routing.module.ts");
/* harmony import */ var _vault_order_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vault-order-details.page */ "./src/app/vault-order-details/vault-order-details.page.ts");







let VaultOrderDetailsPageModule = class VaultOrderDetailsPageModule {
};
VaultOrderDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vault_order_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaultOrderDetailsPageRoutingModule"]
        ],
        declarations: [_vault_order_details_page__WEBPACK_IMPORTED_MODULE_6__["VaultOrderDetailsPage"]]
    })
], VaultOrderDetailsPageModule);



/***/ }),

/***/ "./src/app/vault-order-details/vault-order-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/vault-order-details/vault-order-details.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-item {\n  --background: #fff;\n  --inner-border-width: 0;\n}\nion-content ion-item ion-avatar {\n  --border-radius: 5px;\n}\nion-content ion-item ion-label {\n  font-size: 10px;\n  color: #828282;\n}\nion-content ion-item ion-label h5 {\n  font-size: 12px;\n  font-weight: 900;\n  color: #000;\n}\nion-content .order-summary {\n  padding: 15px 20px;\n}\nion-content .order-summary p {\n  color: #bf9f4c;\n  margin: 0;\n  font-weight: 600;\n  line-height: 20px;\n}\nion-content .order-summary p span {\n  color: #828282;\n}\nion-content .order-summary ion-grid {\n  --ion-grid-padding: 0;\n}\nion-content .order-summary ion-grid ion-col {\n  --ion-grid-column-padding: 0;\n}\nion-content .order-summary hr {\n  background-color: #b2b2b2;\n  margin: 10px 0;\n}\nion-content .order-summary h6 {\n  font-weight: 800;\n  color: #111;\n  font-size: 12px;\n  margin: 0;\n}\nion-content .order-summary h6.title {\n  margin-bottom: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmF1bHQtb3JkZXItZGV0YWlscy92YXVsdC1vcmRlci1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUVRO0VBQ0ksb0JBQUE7QUFBWjtBQUVRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFBWjtBQUVZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFoQjtBQUlJO0VBQ0ksa0JBQUE7QUFGUjtBQUlRO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRlo7QUFJWTtFQUNJLGNBQUE7QUFGaEI7QUFLUTtFQUNJLHFCQUFBO0FBSFo7QUFLWTtFQUNJLDRCQUFBO0FBSGhCO0FBTVE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUFKWjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFKWjtBQU1ZO0VBQ0ksa0JBQUE7QUFKaEIiLCJmaWxlIjoic3JjL2FwcC92YXVsdC1vcmRlci1kZXRhaWxzL3ZhdWx0LW9yZGVyLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcclxuXHJcbiAgICAgICAgaW9uLWF2YXRhciB7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xyXG5cclxuICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9yZGVyLXN1bW1hcnkge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmY5ZjRjO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICM4MjgyODI7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1ncmlkIHtcclxuICAgICAgICAgICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmIyYjI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMTExO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICYudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/vault-order-details/vault-order-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vault-order-details/vault-order-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: VaultOrderDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultOrderDetailsPage", function() { return VaultOrderDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




let VaultOrderDetailsPage = class VaultOrderDetailsPage {
    constructor(navCtrl, alertCtrl, helper, plt) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.plt = plt;
        this.all_liquor_order_summary = [];
        this.all_order = [];
        this.shop_details = [];
    }
    ngOnInit() {
        var retrievedObject = JSON.parse(localStorage.getItem('VaultOrderDetails'));
        console.log('retrievedObject: ', retrievedObject);
        this.all_order = retrievedObject;
        console.log(this.all_order);
        this.all_liquor_order_summary = retrievedObject["redeems"];
    }
};
VaultOrderDetailsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_1__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] }
];
VaultOrderDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-vault-order-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vault-order-details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vault-order-details/vault-order-details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vault-order-details.page.scss */ "./src/app/vault-order-details/vault-order-details.page.scss")).default]
    })
], VaultOrderDetailsPage);



/***/ })

}]);
//# sourceMappingURL=vault-order-details-vault-order-details-module-es2015.js.map