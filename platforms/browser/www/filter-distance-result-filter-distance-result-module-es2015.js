(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["filter-distance-result-filter-distance-result-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance-result/filter-distance-result.page.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance-result/filter-distance-result.page.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>Nearest Shop</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"changeView()\"><ion-icon slot=\"icon-only\" [name]=\"buttonIcon\"></ion-icon></ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"map_main_div\">\n    <div #map id=\"map\" *ngIf=\"view=='map'\"></div>\n    <div class=\"address_sec\" *ngIf=showMarker>\n      <span (click)=\"closeWindow()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </span>\n     \n      <ion-item *ngIf=\"mapMarkers\"> \n        <ion-thumbnail slot=\"start\">\n          <ion-img src={{mapMarkers.image}}></ion-img>\n        </ion-thumbnail>\n        <ion-label (click)=\"gotoDetials(mapMarkers.id)\">\n        <h4> {{mapMarkers.title}}</h4>\n        <p>{{mapMarkers.address}}</p>\n        <small>{{ mapMarkers.distance }}</small>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n\t<div class=\"list-area\" *ngIf=\"view=='list'\">\n\t\t<ion-list>\n      <ion-item *ngFor = \"let shop of shopList\">\n        <ion-thumbnail slot=\"start\">\n          <ion-img src=\"{{shop.image}}\"></ion-img>\n        </ion-thumbnail>\n        <ion-label>\n          <h4 class=\"shopTitle\"><strong (click)=\"gotoshopproduct(shop.id,shop)\">{{shop.name}}</strong>\n            <span (click)=\"save(shop.id,shop.is_in_watchlist)\">\n              <ion-icon name=\"bookmark-outline\" *ngIf=\"shop.is_in_watchlist==0\"></ion-icon>\n              <ion-icon name=\"bookmark\" class=\"active\" *ngIf=\"shop.is_in_watchlist==1\"></ion-icon>\n            </span>\n          </h4>\n          <p (click)=\"gotoshopproduct(shop.id,shop)\">{{shop.address}}</p>\n          <div class=\"distance_sec\">\n            <p >\n              <small><ion-icon name=\"compass-outline\"></ion-icon>\n                {{shop.distance}}</small>\n              <small><ion-icon name=\"time-outline\"></ion-icon> {{shop.time}}min</small>\n            </p>\n            <!-- <span class=\"distance_btn\" (click)=\"showDistance()\">\n              <ion-icon name=\"navigate-circle-outline\"></ion-icon>Distance\n            </span>  -->\n            <a href=\"https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination={{shop.lat}},{{shop.lng}}\" class=\"distance_btn\">\n              <ion-icon name=\"navigate-circle-outline\"></ion-icon>Distance\n            </a>\n          </div>\n                \n        </ion-label>\n      </ion-item>\n    </ion-list>\n\t</div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/filter-distance-result/filter-distance-result-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/filter-distance-result/filter-distance-result-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: FilterDistanceResultPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDistanceResultPageRoutingModule", function() { return FilterDistanceResultPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _filter_distance_result_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filter-distance-result.page */ "./src/app/filter-distance-result/filter-distance-result.page.ts");




const routes = [
    {
        path: '',
        component: _filter_distance_result_page__WEBPACK_IMPORTED_MODULE_3__["FilterDistanceResultPage"]
    }
];
let FilterDistanceResultPageRoutingModule = class FilterDistanceResultPageRoutingModule {
};
FilterDistanceResultPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FilterDistanceResultPageRoutingModule);



/***/ }),

/***/ "./src/app/filter-distance-result/filter-distance-result.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/filter-distance-result/filter-distance-result.module.ts ***!
  \*************************************************************************/
/*! exports provided: FilterDistanceResultPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDistanceResultPageModule", function() { return FilterDistanceResultPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _filter_distance_result_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter-distance-result-routing.module */ "./src/app/filter-distance-result/filter-distance-result-routing.module.ts");
/* harmony import */ var _filter_distance_result_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter-distance-result.page */ "./src/app/filter-distance-result/filter-distance-result.page.ts");







let FilterDistanceResultPageModule = class FilterDistanceResultPageModule {
};
FilterDistanceResultPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _filter_distance_result_routing_module__WEBPACK_IMPORTED_MODULE_5__["FilterDistanceResultPageRoutingModule"]
        ],
        declarations: [_filter_distance_result_page__WEBPACK_IMPORTED_MODULE_6__["FilterDistanceResultPage"]]
    })
], FilterDistanceResultPageModule);



/***/ }),

/***/ "./src/app/filter-distance-result/filter-distance-result.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/filter-distance-result/filter-distance-result.page.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map {\n  height: calc(100vh - 56px);\n  width: 100%;\n}\n\nion-thumbnail {\n  width: 90px;\n  height: 70px;\n  margin: 0 10px 0 0;\n}\n\nion-thumbnail ion-img {\n  border-radius: 10px;\n}\n\nion-label {\n  white-space: normal;\n}\n\nion-label p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  max-height: 80px;\n}\n\nion-list ion-thumbnail {\n  width: 90px;\n  height: 70px;\n}\n\nion-list ion-thumbnail ion-img {\n  border-radius: 10px;\n}\n\nion-list ion-label {\n  white-space: normal;\n}\n\nion-list ion-label p {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  max-height: 80px;\n}\n\n.distance_sec {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.distance_sec small {\n  margin-right: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1;\n}\n\n.distance_sec small ion-icon {\n  margin-right: 3px;\n  vertical-align: text-top;\n}\n\n.distance_sec .distance_btn {\n  display: inline-block;\n  padding: 0 10px;\n  padding-top: 4px;\n  vertical-align: middle;\n  margin: 0 5px;\n  background-color: #dcc88d;\n  color: #000;\n  border-radius: 20px;\n  text-decoration: none;\n  font-size: 10px;\n  line-height: 20px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.distance_sec .distance_btn ion-icon {\n  font-size: 13px;\n  vertical-align: sub;\n  margin-right: 3px;\n}\n\n.shopTitle {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.shopTitle strong {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 200px;\n}\n\n.shopTitle span {\n  color: #49432f;\n}\n\n.shopTitle span .active {\n  color: #dcc88d;\n}\n\n.map_main_div {\n  position: relative;\n}\n\n.map_main_div .address_sec {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #ffffff;\n  padding: 20px;\n  height: 150px;\n  z-index: 1;\n  border-radius: 8px 8px 0 0;\n  box-shadow: 0 2px 7px 1px rgba(0, 0, 0, 0.3);\n}\n\n.map_main_div .address_sec span {\n  text-align: right;\n  color: #494949;\n  padding: 10px;\n  font-size: 18px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 2;\n}\n\n.item-inner {\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLWRpc3RhbmNlLXJlc3VsdC9maWx0ZXItZGlzdGFuY2UtcmVzdWx0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDBCQUFBO0VBQ0EsV0FBQTtBQUNEOztBQUNBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVEOztBQUFDO0VBQ0MsbUJBQUE7QUFFRjs7QUFDQTtFQUNDLG1CQUFBO0FBRUQ7O0FBQUM7RUFDQyx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFFQztFQUNDLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0U7RUFDQyxtQkFBQTtBQUNIOztBQUVDO0VBQ0MsbUJBQUE7QUFBRjs7QUFFRTtFQUNDLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFIOztBQUlBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFERDs7QUFFQztFQUNDLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUNFO0VBQ0MsaUJBQUE7RUFDRyx3QkFBQTtBQUNOOztBQUVDO0VBQ0MscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQUFGOztBQUNFO0VBQ0MsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFDSDs7QUFHQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQUQ7O0FBQ0M7RUFDQyx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUFFO0VBQ0EsY0FBQTtBQUVGOztBQURFO0VBQ0MsY0FBQTtBQUdIOztBQUNBO0VBQ0Msa0JBQUE7QUFFRDs7QUFEQztFQUNDLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLDRDQUFBO0FBR0Y7O0FBRkU7RUFDQyxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBSUg7O0FBQ0E7RUFDQyxZQUFBO0FBRUQiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXItZGlzdGFuY2UtcmVzdWx0L2ZpbHRlci1kaXN0YW5jZS1yZXN1bHQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcCB7XHJcblx0aGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn1cclxuaW9uLXRodW1ibmFpbCB7XHJcblx0d2lkdGg6IDkwcHg7XHJcblx0aGVpZ2h0OiA3MHB4O1xyXG5cdG1hcmdpbjogMCAxMHB4IDAgMDtcclxuXHJcblx0aW9uLWltZyB7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdH1cclxufVxyXG5pb24tbGFiZWwge1xyXG5cdHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcblxyXG5cdHAge1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0bWF4LWhlaWdodDogODBweDtcclxuXHR9XHJcbn1cclxuaW9uLWxpc3Qge1xyXG5cdGlvbi10aHVtYm5haWwge1xyXG5cdFx0d2lkdGg6IDkwcHg7XHJcblx0XHRoZWlnaHQ6IDcwcHg7XHJcblxyXG5cdFx0aW9uLWltZyB7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHR9XHJcblx0fVxyXG5cdGlvbi1sYWJlbCB7XHJcblx0XHR3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG5cclxuXHRcdHAge1xyXG5cdFx0XHR0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuXHRcdFx0ZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcblx0XHRcdC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuXHRcdFx0LXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuXHRcdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdFx0bWF4LWhlaWdodDogODBweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLmRpc3RhbmNlX3NlY3tcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdHNtYWxse1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRcdGxpbmUtaGVpZ2h0OiAxO1xyXG5cdFx0aW9uLWljb257XHJcblx0XHRcdG1hcmdpbi1yaWdodDogM3B4O1xyXG4gICAgXHRcdHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuXHRcdH1cclxuXHR9XHJcblx0LmRpc3RhbmNlX2J0bntcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHBhZGRpbmc6IDAgMTBweDtcclxuXHRcdHBhZGRpbmctdG9wOiA0cHg7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0bWFyZ2luOiAwIDVweDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNkY2M4OGQ7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjBweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHRcdGlvbi1pY29ue1xyXG5cdFx0XHRmb250LXNpemU6IDEzcHg7XHJcblx0XHRcdHZlcnRpY2FsLWFsaWduOiBzdWI7XHJcblx0XHRcdG1hcmdpbi1yaWdodDogM3B4O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4uc2hvcFRpdGxle1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0c3Ryb25ne1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0d2lkdGg6IDIwMHB4O1xyXG5cdH1zcGFue1xyXG5cdFx0Y29sb3I6ICM0OTQzMmY7XHJcblx0XHQuYWN0aXZle1xyXG5cdFx0XHRjb2xvcjogI2RjYzg4ZDtcclxuXHRcdH1cdFxyXG5cdH1cclxufVxyXG4ubWFwX21haW5fZGl2e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQuYWRkcmVzc19zZWN7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHRib3R0b206IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG5cdFx0cGFkZGluZzogMjBweDtcclxuXHRcdGhlaWdodDogMTUwcHg7XHJcblx0XHR6LWluZGV4OiAxO1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogOHB4IDhweCAgMCAwO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAycHggN3B4IDFweCByZ2IoMCAwIDAgLyAzMCUpO1xyXG5cdFx0c3BhbntcclxuXHRcdFx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcblx0XHRcdGNvbG9yOiAjNDk0OTQ5O1xyXG5cdFx0XHRwYWRkaW5nOiAxMHB4O1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdFx0ei1pbmRleDogMjtcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn1cclxuLml0ZW0taW5uZXJ7XHJcblx0Ym9yZGVyOiBub25lO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/filter-distance-result/filter-distance-result.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/filter-distance-result/filter-distance-result.page.ts ***!
  \***********************************************************************/
/*! exports provided: FilterDistanceResultPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterDistanceResultPage", function() { return FilterDistanceResultPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/helper.service */ "./src/app/services/helper.service.ts");








let FilterDistanceResultPage = class FilterDistanceResultPage {
    constructor(_helper, _api, router, navCtrl) {
        this._helper = _helper;
        this._api = _api;
        this.router = router;
        this.navCtrl = navCtrl;
        this.buttonIcon = "list";
        this.shopList = [];
        this.imagePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production;
        this.infoWindows = [];
        this.markers = [];
        this.userId = '';
        this.mapMarkers = {};
        this.showMarker = false;
        this.view = 'map';
    }
    ngOnInit() {
        this.userId = localStorage.getItem("user_id");
        this.fetchNearByResturents();
    }
    /**
     * this method is calling for getting shop list filter by distance
    */
    fetchNearByResturents() {
        // get distance choose by user
        let getDistance = localStorage.getItem('setDistance');
        // get latitude and longitude of user
        // let currentPosition = JSON.parse(localStorage.getItem('currentAddress'));
        let currentPosition = {
            lat: 43.6532,
            long: -79.3832
        };
        console.log('currentPosition', currentPosition);
        if (currentPosition == null) {
        }
        else {
            this._api.getDistanceResult(this.userId, currentPosition.lat, currentPosition.long, getDistance).then((res) => {
                console.log(res);
                if (res["status"] == '1') {
                    this._helper.dismissLoader();
                    this.shopList = res["shops"];
                    this.markers = this.shopList;
                    console.log('shopList', this.shopList);
                    this.showMap();
                }
                else {
                }
            });
        }
    }
    /**
     * This method is calling for change view of the page(List / Map)
    */
    changeView() {
        if (this.view == 'map') {
            this.view = 'list';
            this.buttonIcon = "map-outline";
        }
        else {
            this.view = 'map';
            this.buttonIcon = "list";
            this.fetchNearByResturents();
        }
    }
    /**
     * This method is calling for handling the map view in page
    */
    showMap() {
        // const location = new google.maps.LatLng(-37.3,144.3);
        let currentPosition = {
            lat: 43.6532,
            long: -79.3832
        };
        console.log(currentPosition);
        const location = new google.maps.LatLng(currentPosition.lat, currentPosition.long);
        const icon = {
            url: '../assets/icon/map_icon.png',
            scaledSize: new google.maps.Size(30, 30),
        };
        const options = {
            center: location,
            zoom: 18,
            DisableDefaultUI: true,
            icon: icon
        };
        this.map = new google.maps.Map(this.mapRef.nativeElement, options);
        this.addMarkersToMap(this.markers);
    }
    /**
     * This method is calling for add markeers in map view
    */
    addMarkersToMap(markers) {
        for (let marker of markers) {
            let iconBase = '../assets/icon/map_icon.png';
            let position = new google.maps.LatLng(marker.lat, marker.lng);
            let mapMarker = new google.maps.Marker({
                position: position,
                title: marker.name,
                latitude: marker.lat,
                longitude: marker.lng,
                address: marker.address,
                distance: marker.distance,
                image: marker.image,
                icon: iconBase,
                id: marker.id
            });
            mapMarker.setMap(this.map);
            this.addInfoWindowsToMap(mapMarker);
        }
    }
    /**
     * This method is calling for adding infomation of marker in map view
    */
    addInfoWindowsToMap(marker) {
        let infoWindowContent = '<ion-item>' +
            '<ion-thumbnail slot="start">' +
            '<ion-img src="' + marker.image + '"></ion-img>' +
            '</ion-thumbnail>' +
            '<ion-label >' +
            '<h4 onClick="gotoshopproduct(marker.id, marker)">' + marker.title + '</h4>' +
            '<p>' + marker.address + '</p>' +
            '<small>' + marker.distance + '</small>' +
            '</ion-label>' +
            '</ion-item>';
        let infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        marker.addListener('click', () => {
            this.closeAllInfoWindows();
            console.log('click');
            this.showMarker = true;
            this.mapMarkers = marker;
            //infoWindow.open(this.map, marker);
        });
        this.infoWindows.push(infoWindow);
    }
    /**
    * This method is calling for closing infomation of marker in map view
   */
    closeAllInfoWindows() {
        for (let window of this.infoWindows) {
            window.close();
        }
    }
    /**
     * This method is calling for save shop in watchlist or unsave shop from watchlist
     * @param shop id, watchlist(0,1)
    */
    save(storeId, watchList) {
        if (watchList == 0) {
            this._helper.presentLoading();
            /**
            * call api to save store
            */
            this._api.favouriteShop(this.userId, storeId).then(res => {
                if (res["status"] == '1') {
                    this._helper.dismissLoader();
                    this.fetchNearByResturents();
                }
                else {
                }
            });
        }
        else {
            /**
            * call api to unsave store
            */
            this._api.deleteFrmfavouriteShop(this.userId, storeId).then(res => {
                if (res["status"] == '1') {
                    this.fetchNearByResturents();
                }
                else {
                }
            });
        }
    }
    /**
     * This method is calling to go to outlet menu of shop
    */
    gotoshopproduct(liquorshopid, item) {
        localStorage.setItem("liquorshopid", liquorshopid);
        localStorage.setItem('shopDetails', JSON.stringify(item));
        this.navCtrl.navigateForward('/outlet-ordering-menu');
    }
    /**
     * This method is calling for show distance from user to shop in map view
    */
    closeWindow() {
        this.showMarker = false;
    }
    gotoDetials(liquorshopid) {
        let item = this.shopList.find(el => el.id == liquorshopid);
        localStorage.setItem("liquorshopid", liquorshopid);
        localStorage.setItem('shopDetails', JSON.stringify(item));
        this.navCtrl.navigateForward('/outlet-ordering-menu');
    }
};
FilterDistanceResultPage.ctorParameters = () => [
    { type: _services_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperProvider"] },
    { type: _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonProvider"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] }
];
FilterDistanceResultPage.propDecorators = {
    mapRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['map', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: false },] }]
};
FilterDistanceResultPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-distance-result',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./filter-distance-result.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance-result/filter-distance-result.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./filter-distance-result.page.scss */ "./src/app/filter-distance-result/filter-distance-result.page.scss")).default]
    })
], FilterDistanceResultPage);



/***/ })

}]);
//# sourceMappingURL=filter-distance-result-filter-distance-result-module-es2015.js.map