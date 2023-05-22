(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlet-ordering-menu-outlet-ordering-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-ordering-menu/outlet-ordering-menu.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-ordering-menu/outlet-ordering-menu.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header [translucent]=\"true\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t  <ion-back-button icon=\"chevron-back-outline\" text=\"\" defaultHref=\"\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"cart()\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-bag\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path></svg>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\t  \n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\t<div class=\"resturant_img_wrap\" *ngIf=\"shopDetails\">\n\t\t<img src=\"{{shopDetails.image}}\">\n\t\t<!-- <div class=\"rating_number\">\n\t\t\t<img src=\"../../assets/fav.svg\">\n\t\t\t<p>{{shopDetails.rating}}</p>\n\t\t</div> -->\n\t</div>\n\t<div class=\"resturant_title_wrap\" *ngIf=\"shopDetails\">\n\t\t<h1 class=\"heading\">{{shopDetails.name}}</h1>\n\t\t<p class=\"address\"><img src=\"../../assets/res_pin.svg\"> {{shopDetails.address}}</p>\n\t\t<div class=\"br-1\"></div>\n\t\t<div class=\"btn_group\">\n\t\t\t<ion-button class=\"btn-outlet\" (click)=\"callNow(shopDetails.phone)\">CONTACT OUTLET</ion-button>\n\t\t\t<ion-button class=\"btn-outlet\" (click)=\"callHousingRules()\">VIEW HOUSE RULES</ion-button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"res_content\">\n\t\t<p>More than just a bar; our services include Virtual Mixology Workshops, Cocktail Catering, Team-building events and more. We strive to make every event an immersive cocktail experience, working closely with our clients to ensure that we integrate our cocktail selections with the theme, season and/or style.</p>\n\t\t<p>Warmly decorated, straightforward rooms come with Wi-Fi access, as well as cable TV, and tea and coffeemaking facilities.</p>\n\t\t<p>There's a relaxed restaurant and a business centre. A generator is on-site. Parking is available.</p>\n\t</div>\n\n\t<div class=\"resturant_title_wrap mt-24\">\n\t\t<div class=\"rebate_tag\">{{shopDetails.offer_rate}}% OFF</div>\n\t\t<p class=\"content-2\">{{shopDetails.offer_text}}</p>\n\t\t<p class=\"content-2\">{{shopDetails.house_rules}}</p>\n\t\t<p class=\"content content-mod\">Auto applied during checkout</p>\n\t</div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n  \t<div class=\"footer_item_end\" (click)=\"gotoOutLet()\">\n  \t\t<p>VIEW ONLINE ORDERING MENU</p>\n  \t\t<img src=\"assets/arrow-right.png\">\n  \t</div>\n  </div>\n</ion-footer>");

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
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\nion-header ion-button {\n  --background: #fff;\n  --border-radius: 50%;\n  margin: 0;\n  margin-right: 10px;\n  --padding-start: 9px;\n  --padding-end: 9px;\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n  height: 38px;\n  line-height: 0;\n}\nion-header ion-button svg {\n  width: 20px;\n  height: 20px;\n}\nion-header ion-back-button {\n  --background: #fff;\n  --border-radius: 50%;\n  margin: 0;\n  margin-left: 6px;\n  --padding-start: 7px;\n  --padding-end: 7px;\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n  height: 38px;\n  min-width: 38px;\n  line-height: 0;\n}\nion-content {\n  --background: #fff;\n}\nion-content .resturant_img_wrap {\n  margin-bottom: 0;\n  background-color: #fff;\n  padding: 0;\n  line-height: 0;\n}\nion-content .resturant_img_wrap img {\n  width: 100%;\n  position: relative;\n  margin-top: -56px;\n  border-radius: 0 0 10px 10px;\n}\nion-content .res_content {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  padding: 10px 20px;\n  font-weight: 500;\n  margin-bottom: 50px;\n}\nion-content .res_content p {\n  margin-bottom: 16px;\n  font-size: 13px;\n  line-height: 1.5;\n  text-align: justify;\n}\nion-content .resturant_title_wrap {\n  width: calc(100% - 20px);\n  margin: -30px auto 0;\n  position: relative;\n  z-index: 9;\n  background: #fff;\n  padding: 10px 20px 20px;\n  border-radius: 10px;\n}\nion-content .resturant_title_wrap:after {\n  width: 96%;\n  height: 20px;\n  border-radius: 50%;\n  background: #fff;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  transform: translate(-50%, 10.7px);\n  z-index: -1;\n}\nion-content .address {\n  font-size: 13px;\n  font-weight: 500;\n  color: #888;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\nion-content .address img {\n  margin-right: 5px;\n}\nion-content .br-1 {\n  margin: 10px 0 10px;\n  background: #f8f8f8;\n}\nion-content .btn_group .btn-outlet {\n  width: calc(50% - 10px);\n  margin: 0;\n  font-size: 13px;\n  height: 36px;\n}\nion-footer .footer_item_end {\n  background-color: #dcc88d;\n  justify-content: center;\n  padding-right: 0;\n}\nion-footer .footer_item_end p {\n  font-family: \"Outfit\" !important;\n  text-transform: uppercase;\n}\n.star-icon {\n  color: #fff;\n}\n.rating_number {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 6px;\n  position: absolute;\n  top: 10px;\n  left: auto;\n  right: 10px;\n  z-index: 9;\n  background: #fff;\n  border-radius: 24px;\n}\n.rating_number img {\n  width: 16px;\n  height: auto;\n  margin: auto !important;\n  margin-right: 6px !important;\n}\n.rating_number p {\n  margin: 0;\n  font-size: 16px;\n}\n.resturant_title_wrap .content {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bGV0LW9yZGVyaW5nLW1lbnUvb3V0bGV0LW9yZGVyaW5nLW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtBQUFSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURSO0FBR1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURaO0FBSUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFGUjtBQUtBO0VBQ0Msa0JBQUE7QUFGRDtBQUlDO0VBQ0ksZ0JBQUE7RUFDRyxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRlI7QUFJUTtFQUNDLFdBQUE7RUFDRyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFGWjtBQU1JO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFNUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQVFJO0VBQ0ksd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5SO0FBUVE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQU5aO0FBVUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVVRO0VBQ0ksaUJBQUE7QUFSWjtBQVlDO0VBQ0MsbUJBQUE7RUFDTSxtQkFBQTtBQVZSO0FBYVE7RUFDSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVhaO0FBZ0JDO0VBQ0kseUJBQUE7RUFDRyx1QkFBQTtFQUNBLGdCQUFBO0FBYlI7QUFlUTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7QUFiWjtBQWtCQTtFQUNJLFdBQUE7QUFmSjtBQWlCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWdCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQWRSO0FBaUJJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFmUjtBQWtCQTtFQUNJLGVBQUE7QUFmSiIsImZpbGUiOiJzcmMvYXBwL291dGxldC1vcmRlcmluZy1tZW51L291dGxldC1vcmRlcmluZy1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOXB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA5cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICBcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDdweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgbWluLXdpZHRoOiAzOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG59XG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogI2ZmZjtcblxuXHQucmVzdHVyYW50X2ltZ193cmFwIHtcblx0ICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgIFx0d2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgICAgIH1cblx0fVxuXG4gICAgLnJlc19jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlc3R1cmFudF90aXRsZV93cmFwIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBtYXJnaW46IC0zMHB4IGF1dG8gMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDEwLjdweCk7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRyZXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LmJyLTEge1xuXHRcdG1hcmdpbjogMTBweCAwIDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG5cdH1cbiAgICAuYnRuX2dyb3VwIHtcbiAgICAgICAgLmJ0bi1vdXRsZXQge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tZm9vdGVyIHtcblx0LmZvb3Rlcl9pdGVtX2VuZCB7XG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNjODhkO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk91dGZpdFwiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cdH1cbn1cblxuLnN0YXItaWNvbntcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5yYXRpbmdfbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cbi5yZXN0dXJhbnRfdGl0bGVfd3JhcCAuY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */");

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
        this.showToolbar = false;
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
    onScroll(event) {
        console.log(event);
        console.log('details-', event.detail);
        if (event && event.detail && event.detail.scrollTop) {
            const scrollTop = event.detail.scrollTop;
            this.showToolbar = scrollTop >= 225;
        }
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