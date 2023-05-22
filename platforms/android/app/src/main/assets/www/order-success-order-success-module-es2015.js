(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-success-order-success-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <img class=\"success_icon\" src=\"assets/success-icon.svg\" />\n  <h2>Hurrah!</h2>\n  <h6>Your Order has been Successfully Placed</h6>\n\n  <hr/>\n\n  <h4>Booked By</h4>\n  <p><span>Name:</span> {{user_name}}</p>\n\n  <h4>Booked For</h4>\n  <p *ngIf=\"selectData=='someoneelse';else elseBlck\"><span>Email-id:</span> {{OrderDetails.email}}</p>\n  <ng-template #elseBlck>\n    <p>Myself</p>\n  </ng-template>\n  \n  <p><span>Phone:</span> {{OrderDetails.mobile}}</p>\n  \n  <h4>Order Details</h4>\n  <p *ngIf=\"OrderDetails !== ''\"><span>Order ID:</span> {{OrderDetails.unique_id}}</p>\n  <p *ngIf=\"payment_type == '1'\"><span>Transation Reference:</span> Online</p>\n  <p *ngIf=\"payment_type == '2'\"><span>Transation Reference:</span> Wallet</p>\n\n  <ion-grid no-padding *ngIf=\"is_vault !== '1'\">\n      <ion-row>\n          <ion-col size=\"12\"><p><span>Order Date & Time:</span> {{OrderDetails.created_at}}</p></ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col size=\"8\"><p><span>Scheduled Date:</span> {{OrderDetails.order_date}}</p></ion-col>\n          <ion-col size=\"4\"><p><span>Time:</span> {{OrderDetails.order_time}}</p></ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col size=\"12\"><p><span>Outlet Name:</span> {{shopDetails.name}}</p></ion-col>\n      </ion-row>\n       \n      <ion-row>\n          <ion-col size=\"12\"><p><span>Outlet Address:</span> {{shopDetails.address}}</p></ion-col>\n      </ion-row>\n\n  </ion-grid>\n\n  <h4>Product</h4>\n  <div class=\"ptoduct-item\" *ngFor=\"let item of OrderDetails.products ; let i = index\">\n    <h5 class=\"m-0\">{{item.product_name}}</h5>\n    <p><span class=\"short_count ion-text-left\">{{item.quantity}} x <span class=\"currency\">$</span> {{item.price | number : '.2-2'}}</span></p>\n  </div>\n  <!-- <ion-item *ngFor=\"let item of OrderDetails.products ; let i = index\" ion-no-border class=\"ptoduct-item\">\n    \n    <ion-grid>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"7\">\n          <div class=\"drink_content\">\n            <h3 class=\"m-0\">{{item.product_name}}</h3>\n          </div>\n        </ion-col>\n        <ion-col size=\"5\" class=\"ion-no-padding\">\n          <div class=\"drink_content\">\n            <h3 class=\"m-0 ion-text-right\"></h3>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"7\">\n          <div class=\"drink_content drink_content--mod\">\n            <p class=\"short_count ion-text-left\">{{item.quantity}} x ₹ {{item.price | number : '.2-2'}}</p>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-item> -->\n  <ion-grid class=\"cart_prodetails\">\n    <ion-row *ngIf=\"OrderDetails !== ''\">\n      <ion-col size=\"6\">\n        <span>Total Amount:</span>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <span class=\"price\"><span class=\"currency\">$</span> {{OrderDetails.total_amount | number : '.2-2'}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"OrderDetails !== ''\">\n      <ion-col size=\"6\">\n        <span>Tax and Charges:</span>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <span class=\"price\"><span class=\"currency\">$</span> {{OrderDetails.tax_amount | number : '.2-2'}}</span>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"OrderDetails !== ''\">\n      <ion-col size=\"6\">\n        <span>Total and Paid:</span>\n      </ion-col>\n      <ion-col size=\"6\" class=\"ion-text-end\">\n        <span class=\"price\"><span class=\"currency\">$</span> {{OrderDetails.total_amount | number : '.2-2'}}</span>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <h6 class=\"grey\">Please note your liquidity order code</h6>\n  <div class=\"code_area\" >\n    <div>liquidity order code</div>\n    <span *ngIf=\"OrderDetails !== ''\">{{OrderDetails.unique_id}}</span>\n  </div>\n  <!-- <p class=\"ion-text-center\"><span>Total Reservation for</span> 2</p> \n  <p class=\"ion-text-center\"><a  class=\"place_order_button\" (click)=\"gotoHome()\">Place a new order</a></p>-->\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n    <div class=\"footer_item_end\" (click)=\"gotoHome()\">\n      <p>Place a new order</p>\n      <img src=\"assets/arrow-right.png\">\n    </div>\n  </div>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/order-success/order-success-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/order-success/order-success-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: OrderSuccessPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPageRoutingModule", function() { return OrderSuccessPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-success.page */ "./src/app/order-success/order-success.page.ts");




const routes = [
    {
        path: '',
        component: _order_success_page__WEBPACK_IMPORTED_MODULE_3__["OrderSuccessPage"]
    }
];
let OrderSuccessPageRoutingModule = class OrderSuccessPageRoutingModule {
};
OrderSuccessPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrderSuccessPageRoutingModule);



/***/ }),

/***/ "./src/app/order-success/order-success.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/order-success/order-success.module.ts ***!
  \*******************************************************/
/*! exports provided: OrderSuccessPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPageModule", function() { return OrderSuccessPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _order_success_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-success-routing.module */ "./src/app/order-success/order-success-routing.module.ts");
/* harmony import */ var _order_success_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./order-success.page */ "./src/app/order-success/order-success.page.ts");







let OrderSuccessPageModule = class OrderSuccessPageModule {
};
OrderSuccessPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _order_success_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrderSuccessPageRoutingModule"]
        ],
        declarations: [_order_success_page__WEBPACK_IMPORTED_MODULE_6__["OrderSuccessPage"]]
    })
], OrderSuccessPageModule);



/***/ }),

/***/ "./src/app/order-success/order-success.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/order-success/order-success.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --padding-top: 16px;\n  --padding-bottom: 16px;\n}\nion-content .success_icon {\n  max-width: 100px;\n  height: auto;\n  margin: 20px auto 20px;\n  display: block;\n}\nion-content h2 {\n  color: #5ba728;\n  font-size: 30px;\n  text-align: center;\n  font-weight: 900;\n  text-transform: uppercase;\n  margin-bottom: 10px;\n}\nion-content h6 {\n  text-align: center;\n  font-weight: 800;\n  color: #34373c;\n  font-size: 14px;\n  margin-top: 0;\n}\nion-content h6.grey {\n  color: #828282;\n  text-transform: uppercase;\n  margin-top: 50px;\n  font-size: 11px;\n}\nion-content hr {\n  background-color: #b2b2b2;\n  margin: 20px 0;\n}\nion-content h4 {\n  color: #000;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin-bottom: 10px;\n  font-weight: 600;\n}\nion-content p {\n  color: #bf9f4c;\n  margin: 0;\n  font-weight: 600;\n  line-height: 20px;\n}\nion-content p span {\n  color: #828282;\n}\nion-content ion-grid {\n  --ion-grid-padding: 0;\n}\nion-content ion-grid ion-col {\n  --ion-grid-column-padding: 0;\n}\nion-content .cart_prodetails {\n  font-size: 12px;\n  color: #828282;\n}\nion-content .cart_prodetails .price {\n  color: #bf9f4c;\n  font-weight: 600;\n}\nion-content .ptoduct-item {\n  border-bottom: 1px solid #eee;\n  margin-bottom: 5px;\n}\nion-content .ptoduct-item h5 {\n  font-size: 11px;\n  font-weight: 600;\n  color: #000;\n}\nion-content .code_area {\n  display: flex;\n  width: 100%;\n  max-width: 260px;\n  border: 2px solid #dcc88d;\n  margin: 0 auto;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-align: center;\n  font-size: 12px;\n  color: #dcc88d;\n  font-weight: 900;\n  line-height: 26px;\n}\nion-content .code_area div {\n  flex: 1 0 0%;\n  padding-top: 3px;\n}\nion-content .code_area span {\n  display: inline-block;\n  padding: 9px 10px 3px;\n  background-color: #e5e5e5;\n  line-height: 16px;\n  color: #070707;\n  font-weight: 900;\n  float: right;\n  border-radius: 0 4px 4px 0;\n}\nion-content .place_order_button {\n  display: inline-block;\n  background-color: #dcc88d;\n  color: #000000;\n  padding: 9px 20px 5px;\n  border-radius: 20px;\n  text-transform: uppercase;\n  text-decoration: none;\n  font-weight: 800;\n  font-size: 18px;\n  line-height: 1;\n  margin-top: 40px;\n}\nion-footer .footer_content .footer_item_end {\n  justify-content: center;\n}\n.ptoduct-item h4 {\n  color: #828282;\n  text-transform: capitalize;\n  font-size: 14px;\n  margin-bottom: 20px !important;\n  font-weight: 600;\n}\n.ptoduct-item h4 span {\n  color: #bf9f4c !important;\n  margin: 0;\n  font-weight: 600;\n  line-height: 20px;\n  margin-left: 8px !important;\n}\n.ptoduct-item h5 {\n  color: #828282;\n  text-transform: uppercase;\n  font-size: 14px;\n  margin: 15px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXItc3VjY2Vzcy9vcmRlci1zdWNjZXNzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQUNSO0FBQ0k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFDUjtBQUNRO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ1o7QUFHSTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQURSO0FBSUk7RUFDSSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS0k7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFIUjtBQUtRO0VBQ0ksY0FBQTtBQUhaO0FBTUk7RUFDSSxxQkFBQTtBQUpSO0FBTVE7RUFDSSw0QkFBQTtBQUpaO0FBT0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQUxSO0FBT1E7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFMWjtBQVFJO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtBQU5SO0FBUVE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBTlo7QUFTSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFQUjtBQVNRO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0FBUFo7QUFTUTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FBUFo7QUFVSTtFQUNJLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFSUjtBQWVRO0VBQ0ksdUJBQUE7QUFaWjtBQWtCSTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBZlI7QUFnQlE7RUFDSSx5QkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFkWjtBQWlCSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBZlIiLCJmaWxlIjoic3JjL2FwcC9vcmRlci1zdWNjZXNzL29yZGVyLXN1Y2Nlc3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tcGFkZGluZy10b3A6IDE2cHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcblxuICAgIC5zdWNjZXNzX2ljb24ge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvIDIwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGNvbG9yOiAjNWJhNzI4O1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgaDYge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgICAgIGNvbG9yOiAjMzQzNzNjO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAgICAgJi5ncmV5IHtcbiAgICAgICAgICAgIGNvbG9yOiAjODI4MjgyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBociB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmIyYjI7XG4gICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgICAgY29sb3I6ICNiZjlmNGM7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgfSAgICAgICBcbiAgICB9XG4gICAgaW9uLWdyaWQge1xuICAgICAgICAtLWlvbi1ncmlkLXBhZGRpbmc6IDA7XG5cbiAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAtLWlvbi1ncmlkLWNvbHVtbi1wYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJ0X3Byb2RldGFpbHMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjODI4MjgyO1xuXG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBjb2xvcjogI2JmOWY0YztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnB0b2R1Y3QtaXRlbSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICAgaDUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb2RlX2FyZWEge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNjBweDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2RjYzg4ZDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjZGNjODhkO1xuICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcbiAgICAgICAgXG4gICAgICAgIGRpdiB7XG4gICAgICAgICAgICBmbGV4OiAxIDAgMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogM3B4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgcGFkZGluZzogOXB4IDEwcHggM3B4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U1ZTVlNTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICMwNzA3MDc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA0cHggNHB4IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBsYWNlX29yZGVyX2J1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjYzg4ZDtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIHBhZGRpbmc6IDlweCAyMHB4IDVweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cbn1cblxuXG5pb24tZm9vdGVyIHtcbiAgICAuZm9vdGVyX2NvbnRlbnQge1xuICAgICAgICAuZm9vdGVyX2l0ZW1fZW5kIHtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucHRvZHVjdC1pdGVte1xuICAgIGg0e1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgY29sb3I6ICNiZjlmNGMgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OjhweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIGg1e1xuICAgICAgICBjb2xvcjogIzgyODI4MjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW46IDE1cHggMDtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/order-success/order-success.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/order-success/order-success.page.ts ***!
  \*****************************************************/
/*! exports provided: OrderSuccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSuccessPage", function() { return OrderSuccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-details.service */ "./src/app/services/user-details.service.ts");
/* harmony import */ var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/helper.service */ "./src/app/services/helper.service.ts");
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let OrderSuccessPage = class OrderSuccessPage {
    constructor(authService, navCtrl, userDetails, alertCtrl, helper, plt, _router) {
        this.authService = authService;
        this.navCtrl = navCtrl;
        this.userDetails = userDetails;
        this.alertCtrl = alertCtrl;
        this.helper = helper;
        this.plt = plt;
        this._router = _router;
        this.user = [];
        this.user_name = [];
        this.order_data = [];
        this.OrderDetails = [];
        this.shopDetails = [];
        this.mail = [];
        this.mobile = [];
        this.is_vault = [];
        this.payment_type = [];
        this.final_order_id = '';
        this.selectData = '';
    }
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('userDetails'));
        this.selectData = localStorage.getItem("selectedRadioData");
        console.log(this.user);
        this.mail = this.user.email;
        this.user_name = this.user.name;
        this.mobile = this.user.mobile;
        this.is_vault = localStorage.getItem('vault');
        this.final_order_id = localStorage.getItem('orderrr_id');
        console.log(this.is_vault);
        // if(localStorage.getItem('vault')=='0'){
        this.userDetails.fetchOrderHistroydetails(localStorage.getItem("orderrr_id")).then((res) => {
            if (res["status"] == 1) {
                console.log('res', res);
                this.OrderDetails = res["order"];
                this.shopDetails = res["order"]["shop"];
                this.payment_type = res["order"]['payment_type'];
                console.log(this.payment_type);
            }
        });
        console.log(localStorage.getItem("liquorOrderId"));
    }
    gotoHome() {
        this.navCtrl.navigateRoot('/homenew');
    }
};
OrderSuccessPage.ctorParameters = () => [
    { type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
OrderSuccessPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-order-success',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./order-success.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/order-success/order-success.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./order-success.page.scss */ "./src/app/order-success/order-success.page.scss")).default]
    })
], OrderSuccessPage);



/***/ })

}]);
//# sourceMappingURL=order-success-order-success-module-es2015.js.map