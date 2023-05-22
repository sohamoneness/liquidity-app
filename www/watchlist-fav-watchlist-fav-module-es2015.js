(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["watchlist-fav-watchlist-fav-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/watchlist-fav/watchlist-fav.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/watchlist-fav/watchlist-fav.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Search Result</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"title_bar\">\n    <h2 class=\"title\">{{product_name}}</h2>\n  </div>\n  <div class=\"order_list\">\n    <ion-item *ngFor=\"let item of shopList\">\n      <!-- <ion-avatar slot=\"start\">\n        <img src=\"{{item.shop.image}}\">\n      </ion-avatar> -->\n      <ion-label>\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"12\">\n              <h3>{{item.shop.name}}</h3>\n              <p class=\"address_text\">{{item.shop.address}}</p>      \n            </ion-col>\n            <ion-col size=\"8\">\n              <div class=\"drink_content\">\n                <ul>\n                  <li>HIGH: <span class=\"price_hike d-block\"><span class=\"currency\">$</span> {{item.highest_price | number : '.2-2'}} <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#5ba829\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-up\"><line x1=\"12\" y1=\"19\" x2=\"12\" y2=\"5\"></line><polyline points=\"5 12 12 5 19 12\"></polyline></svg></span></li>\n                  <li>LOW: <span class=\"price_down d-block\"><span class=\"currency\">$</span> {{item.lowest_price | number : '.2-2'}} <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#da1c33\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-arrow-down\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><polyline points=\"19 12 12 19 5 12\"></polyline></svg></span></li>\n                  <li>NOW: <span class=\"price_now d-block\"><span class=\"currency\">$</span> {{item.current_price | number : '.2-2'}}</span></li>\n                </ul>\n              </div>\n            </ion-col>\n            <ion-col size=\"4\">\n              <div class=\"quantity\">\n                <div (click)=\"minuses(item)\">\n                  <span class=\"minus\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-minus\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                </div>\n                <p>{{item.count}}</p>\n                <div (click)=\"pluses(item)\">\n                  <span class=\"plus\" ><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#000000\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus\"><line x1=\"12\" y1=\"5\" x2=\"12\" y2=\"19\"></line><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line></svg></span>\n                </div>\n              </div>\n              <span small class=\"cart_ic\" (click)=\"goToaddToCart(item)\">\n                <ion-icon slot=\"end\" class=\"cart_btn\" name=\"cart-outline\"></ion-icon>\n              </span> \n              <small *ngIf=\"item.count!=0\">{{total}}</small>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-label>\n    </ion-item>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/watchlist-fav/watchlist-fav-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/watchlist-fav/watchlist-fav-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: WatchlistFavPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistFavPageRoutingModule", function() { return WatchlistFavPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _watchlist_fav_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./watchlist-fav.page */ "./src/app/watchlist-fav/watchlist-fav.page.ts");




const routes = [
    {
        path: '',
        component: _watchlist_fav_page__WEBPACK_IMPORTED_MODULE_3__["WatchlistFavPage"]
    }
];
let WatchlistFavPageRoutingModule = class WatchlistFavPageRoutingModule {
};
WatchlistFavPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WatchlistFavPageRoutingModule);



/***/ }),

/***/ "./src/app/watchlist-fav/watchlist-fav.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/watchlist-fav/watchlist-fav.module.ts ***!
  \*******************************************************/
/*! exports provided: WatchlistFavPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistFavPageModule", function() { return WatchlistFavPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _watchlist_fav_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./watchlist-fav-routing.module */ "./src/app/watchlist-fav/watchlist-fav-routing.module.ts");
/* harmony import */ var _watchlist_fav_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./watchlist-fav.page */ "./src/app/watchlist-fav/watchlist-fav.page.ts");







let WatchlistFavPageModule = class WatchlistFavPageModule {
};
WatchlistFavPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _watchlist_fav_routing_module__WEBPACK_IMPORTED_MODULE_5__["WatchlistFavPageRoutingModule"]
        ],
        declarations: [_watchlist_fav_page__WEBPACK_IMPORTED_MODULE_6__["WatchlistFavPage"]]
    })
], WatchlistFavPageModule);



/***/ }),

/***/ "./src/app/watchlist-fav/watchlist-fav.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/watchlist-fav/watchlist-fav.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-grid {\n  --ion-grid-padding: 0;\n}\nion-content ion-grid ul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content ion-grid ul li {\n  color: #808080;\n  font-size: 10px;\n  letter-spacing: 0.02px;\n  font-weight: 500;\n  flex: 0 0 auto;\n}\nion-content ion-grid ul li .price_hike {\n  color: #5ba829;\n  display: block;\n  font-weight: 700;\n  font-size: 12px;\n}\nion-content ion-grid ul li .price_hike img {\n  margin-left: 1px;\n  width: 4px;\n}\nion-content ion-grid ul li .price_hike svg {\n  max-width: 10px;\n  vertical-align: sub;\n  display: inline-block;\n}\nion-content ion-grid ul li .price_down {\n  color: #da1c33;\n  display: block;\n  font-weight: 700;\n  font-size: 12px;\n}\nion-content ion-grid ul li .price_down img {\n  margin-left: 1px;\n  width: 4px;\n}\nion-content ion-grid ul li .price_down svg {\n  max-width: 10px;\n  vertical-align: sub;\n  display: inline-block;\n}\nion-content ion-grid ul li .price_now {\n  color: #000;\n  display: block;\n  font-weight: 700;\n  font-size: 12px;\n}\nion-content ion-grid .button.cart_btn {\n  --background: #fff;\n  --box-shadow: none;\n  border: 2px solid #dcc88d;\n  width: 28px;\n  height: 28px;\n  border-radius: 3px;\n  --padding-start: 0;\n  --padding-end: 0;\n  margin: 0;\n}\nion-content ion-grid .button.cart_btn img {\n  max-width: 20px;\n}\nion-content ion-grid .quantity {\n  display: inline-flex;\n  vertical-align: top;\n  align-items: center;\n  width: 72px;\n  height: 28px;\n  border: 2px solid #dcc88d;\n  border-radius: 3px;\n  margin-left: auto;\n  margin-right: 5px;\n}\nion-content ion-grid .quantity p {\n  margin: 0;\n  color: #be9d4e;\n  font-size: 11px;\n  letter-spacing: -0.01px;\n  text-transform: uppercase;\n  font-weight: 600;\n  flex: 1 0 0%;\n  text-align: center;\n  height: 100%;\n  line-height: 26px;\n  font-family: \"Outfit\" !important;\n}\nion-content ion-grid .quantity .minus {\n  flex: 0 0 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-grid .quantity .plus {\n  flex: 0 0 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nion-content ion-grid .quantity div {\n  display: flex;\n  background: #e5e5e5;\n  flex: 1 0 0%;\n  height: 100%;\n}\nion-content ion-grid .cart_ic {\n  vertical-align: bottom;\n  padding: 8px;\n}\nion-content ion-grid .address_text {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2F0Y2hsaXN0LWZhdi93YXRjaGxpc3QtZmF2LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLHFCQUFBO0FBQUY7QUFFRTtFQUNDLFNBQUE7RUFDQSxVQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUFIO0FBRUc7RUFDQyxjQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQUo7QUFFSTtFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQUw7QUFFSztFQUNDLGdCQUFBO0VBQ0EsVUFBQTtBQUFOO0FBRUs7RUFDQyxlQUFBO0VBQ0csbUJBQUE7RUFDSCxxQkFBQTtBQUFOO0FBR0k7RUFDQyxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURMO0FBR0s7RUFDQyxnQkFBQTtFQUNBLFVBQUE7QUFETjtBQUdLO0VBQ0MsZUFBQTtFQUNHLG1CQUFBO0VBQ0gscUJBQUE7QUFETjtBQUlJO0VBQ0MsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGTDtBQU9RO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBTFo7QUFPWTtFQUNJLGVBQUE7QUFMaEI7QUFRUTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFOWjtBQU9ZO0VBQ0ksU0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFMaEI7QUFPWTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUxoQjtBQU9ZO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBTGhCO0FBT1k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUxoQjtBQVNRO0VBQ0ksc0JBQUE7RUFDQSxZQUFBO0FBUFo7QUFTUTtFQUNJLG1CQUFBO0FBUFoiLCJmaWxlIjoic3JjL2FwcC93YXRjaGxpc3QtZmF2L3dhdGNobGlzdC1mYXYucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG5cdGlvbi1ncmlkIHtcclxuXHRcdC0taW9uLWdyaWQtcGFkZGluZzogMDtcclxuXHJcblx0XHR1bCB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdFx0cGFkZGluZzogMDtcclxuXHRcdFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5cdFx0XHRsaSB7XHJcblx0XHRcdFx0Y29sb3I6ICM4MDgwODA7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0XHRcdGxldHRlci1zcGFjaW5nOiAwLjAycHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRmbGV4OiAwIDAgYXV0bztcclxuXHJcblx0XHRcdFx0LnByaWNlX2hpa2Uge1xyXG5cdFx0XHRcdFx0Y29sb3I6ICM1YmE4Mjk7XHJcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0XHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblxyXG5cdFx0XHRcdFx0aW1nIHtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6IDFweDtcclxuXHRcdFx0XHRcdFx0d2lkdGg6IDRweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHN2ZyB7XHJcblx0XHRcdFx0XHRcdG1heC13aWR0aDogMTBweDtcclxuXHRcdFx0XHRcdCAgICB2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5wcmljZV9kb3duIHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjZGExYzMzO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cclxuXHRcdFx0XHRcdGltZyB7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OiAxcHg7XHJcblx0XHRcdFx0XHRcdHdpZHRoOiA0cHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRzdmcge1xyXG5cdFx0XHRcdFx0XHRtYXgtd2lkdGg6IDEwcHg7XHJcblx0XHRcdFx0XHQgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuXHRcdFx0XHRcdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQucHJpY2Vfbm93IHtcclxuXHRcdFx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogYmxvY2s7XHJcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xyXG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJ1dHRvbi5jYXJ0X2J0biB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZGNjODhkO1xyXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1YW50aXR5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNkY2M4OGQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjYmU5ZDRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDEgMCAwJTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiT3V0Zml0XCIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWludXMge1xyXG4gICAgICAgICAgICAgICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbHVzIHtcclxuICAgICAgICAgICAgICAgIGZsZXg6IDAgMCAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJ0X2lje1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hZGRyZXNzX3RleHR7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/watchlist-fav/watchlist-fav.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/watchlist-fav/watchlist-fav.page.ts ***!
  \*****************************************************/
/*! exports provided: WatchlistFavPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WatchlistFavPage", function() { return WatchlistFavPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/user-details.service */ "./src/app/services/user-details.service.ts");






let WatchlistFavPage = class WatchlistFavPage {
    constructor(helper, navCtrl, commonProvider, userDetails) {
        this.helper = helper;
        this.navCtrl = navCtrl;
        this.commonProvider = commonProvider;
        this.userDetails = userDetails;
        this.product_name = '';
        this.userId = '';
        this.shopList = [];
        this.addToCart = [];
        this.final_cart_value = 0;
        this.deviceId = '';
    }
    ngOnInit() {
        this.product_name = localStorage.getItem("product_name");
        this.userId = localStorage.getItem("user_id");
        let currentPosition = {
            lat: 43.6532,
            long: -79.3832
        };
        let latitude = currentPosition == null ? '' : currentPosition.lat;
        let longitude = currentPosition == null ? '' : currentPosition.long;
        this.deviceId = localStorage.getItem('uniqueDeviceID');
        /**
         * api is calling to fetch stores from watchlist of favorite items
         * @param, product name, user id, users' current position
        */
        this.commonProvider.getwatchListForItems(this.product_name, this.userId, latitude, longitude).then((res) => {
            console.log(res);
            if (res["status"] == 1) {
                this.shopList = res["products"];
                this.shopList.forEach(element => {
                    element.count = 0;
                });
            }
        });
        let data = {
            "device_id": this.deviceId,
        };
        this.userDetails.getCartDetails(data).then((res) => {
            if (res["status"] == '1') {
                console.log('cart', res);
            }
        });
    }
    /**
     * This method is for adding item to cart
     * @param item
     */
    pluses(item) {
        this.final_cart_value = 0;
        this.addToCart = this.addToCart.filter(({ itemId }) => itemId !== item.id); // removing the Duplicasy or 0 selected from Local variable
        // if (item.count==item.stock_count) {
        //   this.helper.presentToast('Out of stock')
        // } else {
        item.count = parseInt(item.count) + 1;
        this.total = String(parseFloat(item.count) * parseFloat(item.current_price));
        // this.addToCart.push({
        //   count: item.count,
        //   itemId: item.itemId,
        //   highest_price: item.highest_price,
        //   name: item.name,
        //   total: String(parseFloat(item.count) * parseFloat(item.current_price)),
        //   current_price: item.current_price,
        //   lowest_price: item.lowest_price,
        //   category_id: item.category_id,
        //   shop_id: item.shop_id,
        //   sub_category_id: item.sub_category_id,
        //   description: item.description,
        // });
        // }
    }
    /**
     * This method is for removing item from cart
     * @param item
     */
    minuses(item) {
        this.addToCart = this.addToCart.filter(({ itemId }) => itemId !== item.id); // removing the Duplicasy or 0 selected from Local variable
        if (item.count <= 0) { }
        else {
            item.count -= 1;
            this.total = String(parseFloat(item.count) * parseFloat(item.current_price));
        }
    }
    /**
     * This method is for navigate to cart page
    */
    goToaddToCart(item) {
        if (item.count != 0) {
            console.log('addToCart', item);
            let data = {
                "device_id": this.deviceId,
                "cartProductIds": item.id,
                "cartProductsNames": item.name,
                "cartProductPrices": item.current_price,
                "cartQuantities": item.count,
                "cartIsLiquors": '1' //this.addToCart[0].cartIsLiquors,
            };
            this.commonProvider.addMultipleCartItems(data).then((res) => {
                if (res["status"] == '1') {
                    this.helper.suucessAlert(res["message"]);
                    this.navCtrl.navigateForward('/cart');
                }
                else {
                    this.helper.presentAlert(res["message"]);
                }
            });
        }
    }
};
WatchlistFavPage.ctorParameters = () => [
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonProvider"] },
    { type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_5__["UserDetailsService"] }
];
WatchlistFavPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-watchlist-fav',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./watchlist-fav.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/watchlist-fav/watchlist-fav.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./watchlist-fav.page.scss */ "./src/app/watchlist-fav/watchlist-fav.page.scss")).default]
    })
], WatchlistFavPage);



/***/ })

}]);
//# sourceMappingURL=watchlist-fav-watchlist-fav-module-es2015.js.map