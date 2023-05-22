(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eventdetails-eventdetails-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/eventdetails/eventdetails.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eventdetails/eventdetails.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{eventDetails.title}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"resturant_img_wrap\" *ngIf=\"eventDetails\">\n\t\t<img src=\"{{eventDetails.image}}\">\n\t\t\n\t</div>\n\t<div class=\"resturant_title_wrap\" *ngIf=\"eventDetails\">\n\t\t<h1 class=\"heading\">{{eventDetails.title}}</h1>\n\t\t<p class=\"content\">{{eventDetails.event_place}}</p>\n\t\t\n\t</div>\n\n\t<div class=\"resturant_title_wrap mt-24\">\n    <p class=\"content-2\">Event Date : {{eventDetails.event_date}}</p>\n    <p class=\"content-2\">Event Time : {{eventDetails.event_time}}</p>\n\t\t<p class=\"content-2\">{{eventDetails.description}}</p>\n\t</div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/eventdetails/eventdetails-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/eventdetails/eventdetails-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EventdetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdetailsPageRoutingModule", function() { return EventdetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _eventdetails_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./eventdetails.page */ "./src/app/eventdetails/eventdetails.page.ts");




const routes = [
    {
        path: '',
        component: _eventdetails_page__WEBPACK_IMPORTED_MODULE_3__["EventdetailsPage"]
    }
];
let EventdetailsPageRoutingModule = class EventdetailsPageRoutingModule {
};
EventdetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EventdetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/eventdetails/eventdetails.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.module.ts ***!
  \*****************************************************/
/*! exports provided: EventdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdetailsPageModule", function() { return EventdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _eventdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eventdetails-routing.module */ "./src/app/eventdetails/eventdetails-routing.module.ts");
/* harmony import */ var _eventdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./eventdetails.page */ "./src/app/eventdetails/eventdetails.page.ts");







let EventdetailsPageModule = class EventdetailsPageModule {
};
EventdetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _eventdetails_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventdetailsPageRoutingModule"]
        ],
        declarations: [_eventdetails_page__WEBPACK_IMPORTED_MODULE_6__["EventdetailsPage"]]
    })
], EventdetailsPageModule);



/***/ }),

/***/ "./src/app/eventdetails/eventdetails.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #eceff1;\n}\nion-content .resturant_img_wrap {\n  margin-bottom: 0;\n  background-color: #fff;\n  padding: 10px;\n}\nion-content .resturant_img_wrap img {\n  width: 100%;\n}\nion-content .br-1 {\n  margin: 11px 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXZlbnRkZXRhaWxzL2V2ZW50ZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxxQkFBQTtBQUNEO0FBQ0M7RUFDSSxnQkFBQTtFQUNHLHNCQUFBO0VBQ0EsYUFBQTtBQUNSO0FBQ1E7RUFDQyxXQUFBO0FBQ1Q7QUFHQztFQUNDLG1CQUFBO0FBREYiLCJmaWxlIjoic3JjL2FwcC9ldmVudGRldGFpbHMvZXZlbnRkZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiAjZWNlZmYxO1xuXG5cdC5yZXN0dXJhbnRfaW1nX3dyYXAge1xuXHQgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICBcdHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cdH1cblxuXHQuYnItMSB7XG5cdFx0bWFyZ2luOiAxMXB4IDAgMTVweDtcblx0fVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/eventdetails/eventdetails.page.ts":
/*!***************************************************!*\
  !*** ./src/app/eventdetails/eventdetails.page.ts ***!
  \***************************************************/
/*! exports provided: EventdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventdetailsPage", function() { return EventdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EventdetailsPage = class EventdetailsPage {
    constructor() { }
    ngOnInit() {
        this.eventDetails = JSON.parse(localStorage.getItem('eventDetails'));
    }
};
EventdetailsPage.ctorParameters = () => [];
EventdetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-eventdetails',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./eventdetails.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/eventdetails/eventdetails.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./eventdetails.page.scss */ "./src/app/eventdetails/eventdetails.page.scss")).default]
    })
], EventdetailsPage);



/***/ })

}]);
//# sourceMappingURL=eventdetails-eventdetails-module-es2015.js.map