(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["favourite-favourite-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/favourite/favourite.page.html":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favourite/favourite.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFavouriteFavouritePageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Favourite List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <ion-list>\n    <ion-item *ngFor=\"let fav of fvrtList\" >\n      <span (click)=\"gotoshop(fav.name)\">{{fav.name}}</span>\n      <span slot=\"end\" (click)=\"gotounsave(fav.id)\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </span>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/favourite/favourite-routing.module.ts":
    /*!*******************************************************!*\
      !*** ./src/app/favourite/favourite-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: FavouritePageRoutingModule */

    /***/
    function srcAppFavouriteFavouriteRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePageRoutingModule", function () {
        return FavouritePageRoutingModule;
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


      var _favourite_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./favourite.page */
      "./src/app/favourite/favourite.page.ts");

      var routes = [{
        path: '',
        component: _favourite_page__WEBPACK_IMPORTED_MODULE_3__["FavouritePage"]
      }];

      var FavouritePageRoutingModule = /*#__PURE__*/_createClass(function FavouritePageRoutingModule() {
        _classCallCheck(this, FavouritePageRoutingModule);
      });

      FavouritePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], FavouritePageRoutingModule);
      /***/
    },

    /***/
    "./src/app/favourite/favourite.module.ts":
    /*!***********************************************!*\
      !*** ./src/app/favourite/favourite.module.ts ***!
      \***********************************************/

    /*! exports provided: FavouritePageModule */

    /***/
    function srcAppFavouriteFavouriteModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePageModule", function () {
        return FavouritePageModule;
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


      var _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./favourite-routing.module */
      "./src/app/favourite/favourite-routing.module.ts");
      /* harmony import */


      var _favourite_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./favourite.page */
      "./src/app/favourite/favourite.page.ts");

      var FavouritePageModule = /*#__PURE__*/_createClass(function FavouritePageModule() {
        _classCallCheck(this, FavouritePageModule);
      });

      FavouritePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _favourite_routing_module__WEBPACK_IMPORTED_MODULE_5__["FavouritePageRoutingModule"]],
        declarations: [_favourite_page__WEBPACK_IMPORTED_MODULE_6__["FavouritePage"]]
      })], FavouritePageModule);
      /***/
    },

    /***/
    "./src/app/favourite/favourite.page.scss":
    /*!***********************************************!*\
      !*** ./src/app/favourite/favourite.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function srcAppFavouriteFavouritePageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm91cml0ZS9mYXZvdXJpdGUucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "./src/app/favourite/favourite.page.ts":
    /*!*********************************************!*\
      !*** ./src/app/favourite/favourite.page.ts ***!
      \*********************************************/

    /*! exports provided: FavouritePage */

    /***/
    function srcAppFavouriteFavouritePageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FavouritePage", function () {
        return FavouritePage;
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/helper.service */
      "./src/app/services/helper.service.ts");

      var FavouritePage = /*#__PURE__*/function () {
        function FavouritePage(_helper, _api, navCtrl) {
          _classCallCheck(this, FavouritePage);

          this._helper = _helper;
          this._api = _api;
          this.navCtrl = navCtrl;
          this.userId = '';
          this.fvrtList = [];
        }

        _createClass(FavouritePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userId = localStorage.getItem("user_id");
            this.favListProduct();
            localStorage.removeItem("product_name");
          }
          /**
           * Method call to get favlist of product
          */

        }, {
          key: "favListProduct",
          value: function favListProduct() {
            var _this = this;

            this._api.getfavouriteList(this.userId).then(function (res) {
              console.log(res);

              if (res["status"] == '1') {
                _this._helper.dismissLoader();

                _this.fvrtList = res["items"];
              }
            });
          }
          /**
           * This method is calling for unsave product  from favourite List
           * @param product id
          */

        }, {
          key: "gotounsave",
          value: function gotounsave(productId) {
            var _this2 = this;

            /**
            * call api to unsave store
            */
            this._api.deleteFrmfavouriteProducts(this.userId, productId).then(function (res) {
              if (res["status"] == '1') {
                _this2.favListProduct();
              }
            });
          }
          /**
           * This method is calling to go to watchList page
           * @param product name
          */

        }, {
          key: "gotoshop",
          value: function gotoshop(name) {
            localStorage.setItem("product_name", name);
            this.navCtrl.navigateForward('/watchlist-fav');
          }
        }]);

        return FavouritePage;
      }();

      FavouritePage.ctorParameters = function () {
        return [{
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"]
        }, {
          type: _services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      FavouritePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-favourite',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./favourite.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/favourite/favourite.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./favourite.page.scss */
        "./src/app/favourite/favourite.page.scss"))["default"]]
      })], FavouritePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=favourite-favourite-module-es5.js.map