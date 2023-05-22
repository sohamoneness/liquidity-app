(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vault-order-history-vault-order-history-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/vault-order-history/vault-order-history.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vault-order-history/vault-order-history.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Vault Order History</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"title_bar\">\n    <h2 class=\"title\">List Of Orders</h2>\n  </div>\n  <div class=\"order_list\">\n    <ion-item *ngFor=\"let item of orderDetails\">\n      <ion-thumbnail slot=\"start\">\n        <img src=\"{{item.product_image}}\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>{{item.product_name}}</h3>\n        <p>Order ID: <span class=\"bold_count\">{{item.unique_id}}</span></p>\n        <p>Order Date: <span class=\"bold_count\">{{item.order_date}}</span></p>\n        <div class=\"btn_grp\">\n          <ion-button fill=\"outline\" (click)=\"orderDetailss(item)\">ORDER DETAILS</ion-button>\n          <!-- <ion-button fill=\"outline\" (click)=\"cancelVaultOrder(item)\">CANCEL ORDER</ion-button> -->\n        </div>\n      </ion-label>\n    </ion-item>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/vault-order-history/vault-order-history-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/vault-order-history/vault-order-history-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: VaultOrderHistoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultOrderHistoryPageRoutingModule", function() { return VaultOrderHistoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _vault_order_history_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vault-order-history.page */ "./src/app/vault-order-history/vault-order-history.page.ts");




const routes = [
    {
        path: '',
        component: _vault_order_history_page__WEBPACK_IMPORTED_MODULE_3__["VaultOrderHistoryPage"]
    }
];
let VaultOrderHistoryPageRoutingModule = class VaultOrderHistoryPageRoutingModule {
};
VaultOrderHistoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VaultOrderHistoryPageRoutingModule);



/***/ }),

/***/ "./src/app/vault-order-history/vault-order-history.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/vault-order-history/vault-order-history.module.ts ***!
  \*******************************************************************/
/*! exports provided: VaultOrderHistoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultOrderHistoryPageModule", function() { return VaultOrderHistoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _vault_order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vault-order-history-routing.module */ "./src/app/vault-order-history/vault-order-history-routing.module.ts");
/* harmony import */ var _vault_order_history_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vault-order-history.page */ "./src/app/vault-order-history/vault-order-history.page.ts");







let VaultOrderHistoryPageModule = class VaultOrderHistoryPageModule {
};
VaultOrderHistoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _vault_order_history_routing_module__WEBPACK_IMPORTED_MODULE_5__["VaultOrderHistoryPageRoutingModule"]
        ],
        declarations: [_vault_order_history_page__WEBPACK_IMPORTED_MODULE_6__["VaultOrderHistoryPage"]]
    })
], VaultOrderHistoryPageModule);



/***/ }),

/***/ "./src/app/vault-order-history/vault-order-history.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/vault-order-history/vault-order-history.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhdWx0LW9yZGVyLWhpc3RvcnkvdmF1bHQtb3JkZXItaGlzdG9yeS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/vault-order-history/vault-order-history.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/vault-order-history/vault-order-history.page.ts ***!
  \*****************************************************************/
/*! exports provided: VaultOrderHistoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VaultOrderHistoryPage", function() { return VaultOrderHistoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _services_vault_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/vault.service */ "./src/app/services/vault.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");






let VaultOrderHistoryPage = class VaultOrderHistoryPage {
    constructor(vaultProvider, helper, _router, navCtrl) {
        this.vaultProvider = vaultProvider;
        this.helper = helper;
        this._router = _router;
        this.navCtrl = navCtrl;
        this.userId = 0;
        this.orderDetails = [];
        this.userId = localStorage.getItem('user_id');
    }
    ngOnInit() {
        // this.getOrderDetails(this.userId);
        console.log(localStorage.getItem("user_id"));
        this.vaultProvider.getVaultOrderList(localStorage.getItem("user_id")).then((res) => {
            if (res["status"] == 1) {
                this.orderDetails = res["products"];
                console.log(res);
            }
        });
    }
    orderDetailss(item) {
        console.log(item);
        localStorage.setItem('VaultOrderDetails', JSON.stringify(item));
        localStorage.setItem("order_id", item.id);
        this.navCtrl.navigateForward('/vault-order-details');
    }
    cancelVaultOrder(item) {
        console.log(item);
        // let data = {
        //   "id": item.id,
        // }
        // this._userDetails.cancelVaultOrder(data).then((res) => {
        //   if (res["status"] == '1') {
        //     this.helper.presentToast('Item cancelled successfully');
        //     console.log(res);
        //   }
        // })
    }
};
VaultOrderHistoryPage.ctorParameters = () => [
    { type: _services_vault_service__WEBPACK_IMPORTED_MODULE_3__["VaultProvider"] },
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
VaultOrderHistoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-vault-order-history',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vault-order-history.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/vault-order-history/vault-order-history.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vault-order-history.page.scss */ "./src/app/vault-order-history/vault-order-history.page.scss")).default]
    })
], VaultOrderHistoryPage);



/***/ })

}]);
//# sourceMappingURL=vault-order-history-vault-order-history-module-es2015.js.map