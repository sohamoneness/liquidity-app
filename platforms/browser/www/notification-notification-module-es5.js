(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notification-notification-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppNotificationNotificationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Notification List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"title_bar\">\n    <h2 class=\"title\">List of notifications</h2>\n  </div>\n  <div class=\"order_list\">\n    <ion-item *ngFor=\"let item of notifications\">\n      <ion-label>\n        <h3>{{item.notification_title}}</h3>\n        <p><span class=\"bold_count\">{{item.notification_description}}</span></p>\n        <p>{{item.created_at}}</p>\n        \n      </ion-label>\n    </ion-item>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/notification/notification-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/notification/notification-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: NotificationPageRoutingModule */

    /***/
    function srcAppNotificationNotificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationPageRoutingModule", function () {
        return NotificationPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _notification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./notification.page */
      "./src/app/notification/notification.page.ts");

      var routes = [{
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_3__["NotificationPage"]
      }];

      var NotificationPageRoutingModule = /*#__PURE__*/_createClass(function NotificationPageRoutingModule() {
        _classCallCheck(this, NotificationPageRoutingModule);
      });

      NotificationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NotificationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/notification/notification.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/notification/notification.module.ts ***!
      \*****************************************************/

    /*! exports provided: NotificationPageModule */

    /***/
    function srcAppNotificationNotificationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationPageModule", function () {
        return NotificationPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./notification-routing.module */
      "./src/app/notification/notification-routing.module.ts");
      /* harmony import */


      var _notification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notification.page */
      "./src/app/notification/notification.page.ts");

      var NotificationPageModule = /*#__PURE__*/_createClass(function NotificationPageModule() {
        _classCallCheck(this, NotificationPageModule);
      });

      NotificationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _notification_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotificationPageRoutingModule"]],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_6__["NotificationPage"]]
      })], NotificationPageModule);
      /***/
    },

    /***/
    "./src/app/notification/notification.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/notification/notification.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppNotificationNotificationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmaWNhdGlvbi9ub3RpZmljYXRpb24ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/notification/notification.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/notification/notification.page.ts ***!
      \***************************************************/

    /*! exports provided: NotificationPage */

    /***/
    function srcAppNotificationNotificationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotificationPage", function () {
        return NotificationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/account.service */
      "./src/app/services/account.service.ts");

      var NotificationPage = /*#__PURE__*/function () {
        function NotificationPage(navCtrl, alertCtrl, helper, plt, _router, accountProvider) {
          _classCallCheck(this, NotificationPage);

          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.helper = helper;
          this.plt = plt;
          this._router = _router;
          this.accountProvider = accountProvider;
          this.notifications = [];
        }

        _createClass(NotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.accountProvider.fetchNotificationList(localStorage.getItem("user_id")).then(function (res) {
              if (res["status"] == 1) {
                _this.notifications = res["notifications"];
              }
            });
          }
        }]);

        return NotificationPage;
      }();

      NotificationPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_5__["AccountProvider"]
        }];
      };

      NotificationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./notification.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./notification.page.scss */
        "./src/app/notification/notification.page.scss"))["default"]]
      })], NotificationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=notification-notification-module-es5.js.map