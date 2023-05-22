(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["event-event-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n<div class=\"slide_item slide_item--mod-2\">\n  <ion-grid>\n      <ion-row>\n        <ion-col size=\"6\" *ngFor=\"let item of events\" (click)=\"gotoEventDetails(item)\">\n            <div class=\"slide_box\" >\n                <div class=\"img_wrap\" style=\"background: url({{item.image}}) no-repeat center; background-size: cover;\"></div>\n                <div class=\"box_content\">\n                  <h2>{{item.title}}</h2>\n                  <p>{{item.event_place}}</p>\n                </div>\n            </div>\n        </ion-col>\n      </ion-row>\n  </ion-grid>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/event/event-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/event/event-routing.module.ts ***!
  \***********************************************/
/*! exports provided: EventPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageRoutingModule", function() { return EventPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./event.page */ "./src/app/event/event.page.ts");




const routes = [
    {
        path: '',
        component: _event_page__WEBPACK_IMPORTED_MODULE_3__["EventPage"]
    }
];
let EventPageRoutingModule = class EventPageRoutingModule {
};
EventPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventPageRoutingModule);



/***/ }),

/***/ "./src/app/event/event.module.ts":
/*!***************************************!*\
  !*** ./src/app/event/event.module.ts ***!
  \***************************************/
/*! exports provided: EventPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPageModule", function() { return EventPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _event_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-routing.module */ "./src/app/event/event-routing.module.ts");
/* harmony import */ var _event_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./event.page */ "./src/app/event/event.page.ts");







let EventPageModule = class EventPageModule {
};
EventPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _event_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventPageRoutingModule"]
        ],
        declarations: [_event_page__WEBPACK_IMPORTED_MODULE_6__["EventPage"]]
    })
], EventPageModule);



/***/ }),

/***/ "./src/app/event/event.page.scss":
/*!***************************************!*\
  !*** ./src/app/event/event.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50L2V2ZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/event/event.page.ts":
/*!*************************************!*\
  !*** ./src/app/event/event.page.ts ***!
  \*************************************/
/*! exports provided: EventPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventPage", function() { return EventPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");






let EventPage = class EventPage {
    constructor(navCtrl, alertCtrl, helper, plt, _router, commonProvider) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.plt = plt;
        this._router = _router;
        this.commonProvider = commonProvider;
        this.events = [];
    }
    ngOnInit() {
        this.commonProvider.fetchEvents().then((res) => {
            if (res["status"] == 1) {
                this.events = res["events"];
            }
        });
    }
    gotoEventDetails(item) {
        localStorage.setItem('eventDetails', JSON.stringify(item));
        this.navCtrl.navigateForward('/eventdetails');
    }
};
EventPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonProvider"] }
];
EventPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-event',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./event.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/event/event.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./event.page.scss */ "./src/app/event/event.page.scss")).default]
    })
], EventPage);



/***/ })

}]);
//# sourceMappingURL=event-event-module-es2015.js.map