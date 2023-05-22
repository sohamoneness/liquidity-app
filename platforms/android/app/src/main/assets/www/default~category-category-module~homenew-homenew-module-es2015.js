(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~category-category-module~homenew-homenew-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance/filter-distance.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance/filter-distance.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Choose Distance\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"event_form\">\n    <ion-list>\n      <ion-item *ngFor=\"let distance of distanceArray\">\n        <ion-label (click)=\"chooseDistance(distance.value)\"><ion-icon name=\"locate-outline\"></ion-icon>\n          {{distance.name}}</ion-label>\n      </ion-item>\n          \n      <!-- <ion-item>\n        <ion-label (click)=\"chooseDistance('10')\">10 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label (click)=\"chooseDistance('15')\">15 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>20 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>25 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>30 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>35 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>40 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>45 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>50 KM</ion-label>\n      </ion-item> -->\n    </ion-list>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/filter-distance/filter-distance.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/filter-distance/filter-distance.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #ffffff;\n  --padding-top: 35px;\n}\nion-content .ion-header {\n  display: flex;\n  padding: 0 30px;\n  margin: 65px auto 0;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content .ion-header .logo {\n  display: block;\n}\nion-content .ion-header .back_button {\n  display: flex;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  background-color: #202c40;\n  align-items: center;\n  justify-content: center;\n}\nion-content .ion-header .cross_button {\n  display: flex;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  background-color: #202c40;\n  align-items: center;\n  justify-content: center;\n}\nion-content .ion-header h4 {\n  margin: 0;\n  color: #fff;\n  font-size: 18px;\n}\nion-content .event_form {\n  padding: 0 10px;\n}\nion-content .event_form ion-item {\n  --background: transparent;\n  --border-width: 0;\n  --min-height: 1px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  --highlight-color-focused: transparent;\n  margin-bottom: 5px;\n}\nion-content .event_form ion-item ion-label {\n  font-size: 15px;\n  color: #000000;\n  font-weight: 600;\n  transform: translateY(0) scale(1);\n  margin: 0;\n  padding: 12px;\n}\nion-content .event_form ion-item ion-label ion-icon {\n  margin-right: 8px;\n  vertical-align: sub;\n  font-size: 18px;\n}\nion-content .event_form ion-item ion-input {\n  font-size: 15px;\n  width: 100%;\n  min-height: 45px;\n  border-radius: 10px;\n  background-color: rgba(231, 231, 231, 0.48);\n  border: 1px solid rgba(255, 212, 212, 0.5);\n  line-height: 45px;\n  --padding-top: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 0;\n}\nion-content .event_form ion-button {\n  margin: 35px auto 15px;\n  max-width: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLWRpc3RhbmNlL2ZpbHRlci1kaXN0YW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0YsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0MsY0FBQTtBQUNIO0FBQ0U7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNIO0FBQ0U7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNIO0FBQ0U7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSDtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBRVE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBQVo7QUFFWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUVBLFNBQUE7RUFDQSxhQUFBO0FBRGhCO0FBRWdCO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBcEI7QUFJWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRmhCO0FBS1E7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBSFoiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXItZGlzdGFuY2UvZmlsdGVyLWRpc3RhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMzVweDtcclxuXHJcbiAgICAuaW9uLWhlYWRlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZzogMCAzMHB4O1xyXG5cdFx0bWFyZ2luOiA2NXB4IGF1dG8gMDtcclxuXHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0XHQubG9nbyB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cdFx0LmJhY2tfYnV0dG9uIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0d2lkdGg6IDM2cHg7XHJcblx0XHRcdGhlaWdodDogMzZweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMThweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzIwMmM0MDtcclxuXHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdC5jcm9zc19idXR0b24ge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHR3aWR0aDogMzZweDtcclxuXHRcdFx0aGVpZ2h0OiAzNnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyYzQwO1xyXG5cdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0aDQge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHR9XHJcblx0fVxyXG4gICAgLmV2ZW50X2Zvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwyMzEsMjMxLDAuNDgpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjEyLDIxMiwwLjUpO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzVweCBhdXRvIDE1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/filter-distance/filter-distance.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/filter-distance/filter-distance.component.ts ***!
  \**************************************************************/
/*! exports provided: FilterDistanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDistanceComponent", function() { return FilterDistanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");



let FilterDistanceComponent = class FilterDistanceComponent {
    constructor(modalController, navCtrl) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.distanceArray = [
            { name: '5 KM', value: 5 },
            { name: '10 KM', value: 10 },
            { name: '15 KM', value: 15 },
            { name: '20 KM', value: 20 },
            { name: '25 KM', value: 25 },
            { name: '30 KM', value: 30 },
            { name: '35 KM', value: 35 },
            { name: '40 KM', value: 40 },
            { name: '45 KM', value: 45 },
            { name: '50 KM', value: 50 }
        ];
    }
    ngOnInit() { }
    chooseDistance(distance) {
        console.log('d=' + distance);
        localStorage.setItem('setDistance', distance);
        this.modalController.dismiss();
        this.navCtrl.navigateForward('/filter-distance-result');
    }
    /**
     * This method is calling for close modal
    */
    close() {
        this.modalController.dismiss();
    }
};
FilterDistanceComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] }
];
FilterDistanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-distance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter-distance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance/filter-distance.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter-distance.component.scss */ "./src/app/filter-distance/filter-distance.component.scss")).default]
    })
], FilterDistanceComponent);



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountProvider", function() { return AccountProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");





let AccountProvider = class AccountProvider {
    constructor(http, loadingCtrl, navCtrl, helper) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.helper = helper;
        // serviceurl = "http://liquiditybars.com/canada/backend/admin/api";
        this.serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
    }
    /**
     * This method is for fetching notification list
     * @param user_id
     * @returns
     */
    fetchNotificationList(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'notificationList/' + user_id, {
                    headers
                })
                    .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
            });
        });
    }
    /**
     * This method is for fetching walllet transaction list
     * @param user_id
     * @returns
     */
    fetchWalletTransactions(user_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'fetch_wallet_balance/' + user_id, {
                    headers
                })
                    .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
            });
        });
    }
    /**
     * This method is for adding wallet balance
     * @param data
     * @returns
     */
    addWalletBalance(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            let body = 'amount=' + data.amount + '&user_id=' + data.user_id;
            return new Promise((resolve, reject) => {
                this.http.post(this.serviceurl + "add_wallet_balance", body, {
                    headers
                })
                    .subscribe(res => {
                    loading.dismiss();
                    resolve(res);
                }, (err) => {
                    loading.dismiss();
                    reject(err);
                });
            });
        });
    }
};
AccountProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"] }
];
AccountProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], AccountProvider);



/***/ })

}]);
//# sourceMappingURL=default~category-category-module~homenew-homenew-module-es2015.js.map