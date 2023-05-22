(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["watch-list-store-watch-list-store-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/watch-list-store/watch-list-store.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/watch-list-store/watch-list-store.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Watch List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"list-area\">\n    <ion-list>\n      <ion-item *ngFor = \"let shop of watchListShop\">\n        <ion-thumbnail slot=\"start\">\n          <ion-img src=\"{{shop.image}}\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n          <h4 class=\"shopTitle\"><strong (click)=\"gotoshopproduct(shop.id,shop)\">{{shop.name}}</strong>\n            <span (click)=\"unsave(shop.id)\">\n              <ion-icon name=\"bookmark\" class=\"active\"></ion-icon>\n            </span>\n          </h4>\n          <p (click)=\"gotoshopproduct(shop.id,shop)\">{{shop.address}}</p>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\t</div>\n</ion-content>\n\n");

/***/ }),

/***/ "./src/app/watch-list-store/watch-list-store-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/watch-list-store/watch-list-store-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: WatchListStorePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListStorePageRoutingModule", function() { return WatchListStorePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _watch_list_store_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watch-list-store.page */ "./src/app/watch-list-store/watch-list-store.page.ts");




const routes = [
    {
        path: '',
        component: _watch_list_store_page__WEBPACK_IMPORTED_MODULE_3__["WatchListStorePage"]
    }
];
let WatchListStorePageRoutingModule = class WatchListStorePageRoutingModule {
};
WatchListStorePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WatchListStorePageRoutingModule);



/***/ }),

/***/ "./src/app/watch-list-store/watch-list-store.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/watch-list-store/watch-list-store.module.ts ***!
  \*************************************************************/
/*! exports provided: WatchListStorePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListStorePageModule", function() { return WatchListStorePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _watch_list_store_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watch-list-store-routing.module */ "./src/app/watch-list-store/watch-list-store-routing.module.ts");
/* harmony import */ var _watch_list_store_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watch-list-store.page */ "./src/app/watch-list-store/watch-list-store.page.ts");







let WatchListStorePageModule = class WatchListStorePageModule {
};
WatchListStorePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _watch_list_store_routing_module__WEBPACK_IMPORTED_MODULE_5__["WatchListStorePageRoutingModule"]
        ],
        declarations: [_watch_list_store_page__WEBPACK_IMPORTED_MODULE_6__["WatchListStorePage"]]
    })
], WatchListStorePageModule);



/***/ }),

/***/ "./src/app/watch-list-store/watch-list-store.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/watch-list-store/watch-list-store.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-list ion-thumbnail {\n  width: 90px;\n  height: 70px;\n}\nion-list ion-thumbnail ion-img {\n  border-radius: 10px;\n}\nion-list ion-label {\n  white-space: normal;\n}\nion-list ion-label p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  max-height: 80px;\n}\n.distance_sec {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.distance_sec small {\n  margin-right: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1;\n}\n.distance_sec small ion-icon {\n  margin-right: 3px;\n  vertical-align: text-top;\n}\n.distance_sec .distance_btn {\n  display: inline-block;\n  padding: 0 10px;\n  padding-top: 4px;\n  vertical-align: middle;\n  margin: 0 5px;\n  background-color: #dcc88d;\n  color: #000;\n  border-radius: 20px;\n  text-decoration: none;\n  font-size: 10px;\n  line-height: 20px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.distance_sec .distance_btn ion-icon {\n  font-size: 13px;\n  vertical-align: sub;\n  margin-right: 3px;\n}\n.shopTitle {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.shopTitle strong {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 200px;\n}\n.shopTitle span {\n  color: #49432f;\n}\n.shopTitle span .active {\n  color: #dcc88d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2gtbGlzdC1zdG9yZS93YXRjaC1saXN0LXN0b3JlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQUY7QUFFRTtFQUNDLG1CQUFBO0FBQUg7QUFHQztFQUNDLG1CQUFBO0FBREY7QUFHRTtFQUNDLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURIO0FBS0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUZEO0FBR0M7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFERjtBQUVFO0VBQ0MsaUJBQUE7RUFDRyx3QkFBQTtBQUFOO0FBR0M7RUFDQyxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBREY7QUFFRTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBQUg7QUFJQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBREQ7QUFFQztFQUNDLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQUY7QUFDRTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0MsY0FBQTtBQUVIIiwiZmlsZSI6InNyYy9hcHAvd2F0Y2gtbGlzdC1zdG9yZS93YXRjaC1saXN0LXN0b3JlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1saXN0IHtcclxuXHRpb24tdGh1bWJuYWlsIHtcclxuXHRcdHdpZHRoOiA5MHB4O1xyXG5cdFx0aGVpZ2h0OiA3MHB4O1xyXG5cclxuXHRcdGlvbi1pbWcge1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHRpb24tbGFiZWwge1xyXG5cdFx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcclxuXHJcblx0XHRwIHtcclxuXHRcdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRcdGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG5cdFx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcblx0XHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdG1heC1oZWlnaHQ6IDgwcHg7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcbi5kaXN0YW5jZV9zZWN7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRzbWFsbHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGlvbi1pY29ue1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIFx0XHR2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5kaXN0YW5jZV9idG57XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdG1hcmdpbjogMCA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNjODhkO1xyXG5cdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRpb24taWNvbntcclxuXHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLnNob3BUaXRsZXtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdHN0cm9uZ3tcclxuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG5cdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHQtd2Via2l0LWxpbmUtY2xhbXA6IDE7XHJcblx0XHQtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHdpZHRoOiAyMDBweDtcclxuXHR9c3BhbntcclxuXHRcdGNvbG9yOiAjNDk0MzJmO1xyXG5cdFx0LmFjdGl2ZXtcclxuXHRcdFx0Y29sb3I6ICNkY2M4OGQ7XHJcblx0XHR9XHRcclxuXHR9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/watch-list-store/watch-list-store.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/watch-list-store/watch-list-store.page.ts ***!
  \***********************************************************/
/*! exports provided: WatchListStorePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchListStorePage", function() { return WatchListStorePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");





let WatchListStorePage = class WatchListStorePage {
    constructor(_helper, _api, navCtrl) {
        this._helper = _helper;
        this._api = _api;
        this.navCtrl = navCtrl;
        this.userId = '';
        this.watchListShop = [];
        this.imagePath = 'https://liquiditybars.com/backend/assets/upload/shops/';
    }
    ngOnInit() {
        this.userId = localStorage.getItem("user_id");
        this.watchListStore();
    }
    /**
     * Method call to get wishlist of shop
    */
    watchListStore() {
        this._api.getwatchList(this.userId).then(res => {
            console.log(res);
            if (res["status"] == '1') {
                this._helper.dismissLoader();
                this.watchListShop = res["stores"];
            }
        });
    }
    /**
     * This method is calling for unsave shop from watchlist
     * @param shop id
    */
    unsave(storeId) {
        /**
        * call api to unsave store
        */
        this._api.deleteFrmfavouriteShop(this.userId, storeId).then(res => {
            if (res["status"] == '1') {
                this.watchListStore();
            }
        });
    }
    /**
     * This method is calling to go to outlet menu of shop
    */
    gotoshopproduct(liquorshopid, item) {
        localStorage.setItem("liquorshopid", liquorshopid);
        localStorage.setItem('shopDetails', JSON.stringify(item));
        this.navCtrl.navigateForward('/outlet-ordering-menu');
    }
};
WatchListStorePage.ctorParameters = () => [
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
WatchListStorePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watch-list-store',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./watch-list-store.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/watch-list-store/watch-list-store.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./watch-list-store.page.scss */ "./src/app/watch-list-store/watch-list-store.page.scss")).default]
    })
], WatchListStorePage);



/***/ })

}]);
//# sourceMappingURL=watch-list-store-watch-list-store-module-es2015.js.map