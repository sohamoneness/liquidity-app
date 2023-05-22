(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"],{

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonProvider", function() { return CommonProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");





let CommonProvider = class CommonProvider {
    constructor(http, loadingCtrl, navCtrl, helper) {
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        this.helper = helper;
        // serviceurl = "https://liquiditybars.in/backend/admin/api/";
        this.serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
    }
    /**
     * This method is for fetching home page data
     * @returns
     */
    fetchHomePageData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'fetchHomePageData/', {
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
     * This method is for fetching sub categories
     * @param category_id
     * @returns
     */
    fetchSubCategories(category_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'fetchSubCategories/' + category_id, {
                    headers
                })
                    .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            });
        });
    }
    /**
     * This method is for fetching products shop and category wise
     * @param category_id
     * @param shop_id
     * @returns
     */
    fetchOtherProductsByCategory(category_id, shop_id, userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'fetchOtherProductsByCategory/' + category_id + '/' + shop_id + '/' + userId, {
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
     * This method is to add multiple items in cart
     * @param data
     * @returns
     */
    addMultipleCartItems(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            let body = 'device_id=' + data.device_id + '&cartProductIds=' + data.cartProductIds + '&cartProductsNames=' + data.cartProductsNames
                + '&cartProductPrices=' + data.cartProductPrices + '&cartQuantities=' + data.cartQuantities
                + '&cartIsLiquors=' + data.cartIsLiquors;
            return new Promise((resolve, reject) => {
                this.http.post(this.serviceurl + 'addMultipleCartItems/', body, {
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
     * This method is for clearing the cart
     * @param device_id
     * @returns
     */
    clearCart(device_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'clearCart/' + device_id, {
                    headers
                })
                    .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            });
        });
    }
    /**
     * This method is for fetching product compare data
     * @param data
     * @returns
     */
    compareProduct(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            let body = 'product_name=' + data.product_name;
            return new Promise((resolve, reject) => {
                this.http.post(this.serviceurl + 'compareProduct/', body, {
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
     * This method is for fetching events data
     * @returns
     */
    fetchEvents() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'fetchEvents/', {
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
    fetchProducts(sub_category_id, shop_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'fetchProducts/' + sub_category_id + '/' + shop_id, {
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
    getSearchProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'getSearchProducts/', {
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
    /*map*/
    getDistanceResult(userId, lat, lng, distance) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'filterShops?user_id=' + userId + '&lat=' + lat + '&lng=' + lng + '&distance=' + distance, {
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
    updateProfile(data) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        });
        let body = 'id=' + data.id + '&name=' + data.name + '&email=' + data.email + '&gender=' + data.gender;
        return new Promise((resolve, reject) => {
            this.http.post(this.serviceurl + 'updateProfile/', body, {
                headers
            })
                .subscribe(res => {
                // loading.dismiss();
                resolve(res);
            }, (err) => {
                // loading.dismiss();
                reject(err);
            });
        });
    }
    /*
        call api to get search history
    */
    getUserSearchHistory(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'getUserSearchHistory/' + userId, {
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
    /*
        call api to delete data frm history
    */
    deleteKeyWord(keywrdId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'deleteSearchData/' + keywrdId, {
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
    /*
        call api to get search result
    */
    getSearchResult(text, userId, lat, lng) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'searchData?keyword=' + text + '&user_id=' + userId + '&lat=' + lat + '&lng=' + lng, {
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
    /*
        call api to save store in watchList
    */
    favouriteShop(userId, storeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            let body = 'store_id=' + storeId + '&user_id=' + userId;
            return new Promise((resolve, reject) => {
                this.http.post(this.serviceurl + 'addToWatchList', body, {
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
    /*
        call api to unsave store from watchList
    */
    deleteFrmfavouriteShop(userId, storeId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'removeFromWatchList/' + storeId + '/' + userId, {
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
    /*
        call api to get watchList for user
    */
    getwatchList(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'viewWatchList/' + userId, {
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
    // *********************************************************** //
    /*
       call api to save product in favourite
   */
    favouriteProducts(userId, product_id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            let body = 'product_id=' + product_id + '&user_id=' + userId;
            return new Promise((resolve, reject) => {
                this.http.post(this.serviceurl + 'addToFavourite', body, {
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
    /*
        call api to unsave product from favourite
    */
    deleteFrmfavouriteProducts(userId, productId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'removeFromFavourite/' + productId + '/' + userId, {
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
    /*
        call api to get favouritelist for user
    */
    getfavouriteList(userId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'favouriteList/' + userId, {
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
    /*
        call api to fetching stores from watchlist of favorite items
    */
    getwatchListForItems(product_name, userId, lat, lng) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Loading...'
            });
            yield loading.present();
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            });
            return new Promise((resolve, reject) => {
                this.http.get(this.serviceurl + 'watchListPrice?' + 'product_name=' + product_name +
                    '&user_id=' + userId + '&lat=' + lat + '&lng=' + lng, {
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
CommonProvider.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"] }
];
CommonProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], CommonProvider);



/***/ })

}]);
//# sourceMappingURL=default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da-es2015.js.map