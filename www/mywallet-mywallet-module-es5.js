(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mywallet-mywallet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/mywallet/mywallet.page.html":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mywallet/mywallet.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppMywalletMywalletPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>my wallet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\t<div class=\"credit_balance\">\n\t\t<h3 class=\"title\">Available Liquidity Credits</h3>\n\t\t<p>1 liquidity credit is equal to `1</p>\n\t\t<h2>$ 200.00</h2>\n\t</div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/mywallet/mywallet-routing.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/mywallet/mywallet-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: MywalletPageRoutingModule */

    /***/
    function srcAppMywalletMywalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MywalletPageRoutingModule", function () {
        return MywalletPageRoutingModule;
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


      var _mywallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mywallet.page */
      "./src/app/mywallet/mywallet.page.ts");

      var routes = [{
        path: '',
        component: _mywallet_page__WEBPACK_IMPORTED_MODULE_3__["MywalletPage"]
      }];

      var MywalletPageRoutingModule = /*#__PURE__*/_createClass(function MywalletPageRoutingModule() {
        _classCallCheck(this, MywalletPageRoutingModule);
      });

      MywalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MywalletPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/mywallet/mywallet.module.ts":
    /*!*********************************************!*\
      !*** ./src/app/mywallet/mywallet.module.ts ***!
      \*********************************************/

    /*! exports provided: MywalletPageModule */

    /***/
    function srcAppMywalletMywalletModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MywalletPageModule", function () {
        return MywalletPageModule;
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


      var _mywallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./mywallet-routing.module */
      "./src/app/mywallet/mywallet-routing.module.ts");
      /* harmony import */


      var _mywallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./mywallet.page */
      "./src/app/mywallet/mywallet.page.ts");

      var MywalletPageModule = /*#__PURE__*/_createClass(function MywalletPageModule() {
        _classCallCheck(this, MywalletPageModule);
      });

      MywalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _mywallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["MywalletPageRoutingModule"]],
        declarations: [_mywallet_page__WEBPACK_IMPORTED_MODULE_6__["MywalletPage"]]
      })], MywalletPageModule);
      /***/
    },

    /***/
    "./src/app/mywallet/mywallet.page.scss":
    /*!*********************************************!*\
      !*** ./src/app/mywallet/mywallet.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function srcAppMywalletMywalletPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #eceff1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXl3YWxsZXQvbXl3YWxsZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MscUJBQUE7QUFDRCIsImZpbGUiOiJzcmMvYXBwL215d2FsbGV0L215d2FsbGV0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcblx0LS1iYWNrZ3JvdW5kOiAjZWNlZmYxO1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/mywallet/mywallet.page.ts":
    /*!*******************************************!*\
      !*** ./src/app/mywallet/mywallet.page.ts ***!
      \*******************************************/

    /*! exports provided: MywalletPage */

    /***/
    function srcAppMywalletMywalletPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MywalletPage", function () {
        return MywalletPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var MywalletPage = /*#__PURE__*/function () {
        function MywalletPage() {
          _classCallCheck(this, MywalletPage);
        }

        _createClass(MywalletPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MywalletPage;
      }();

      MywalletPage.ctorParameters = function () {
        return [];
      };

      MywalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mywallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./mywallet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/mywallet/mywallet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./mywallet.page.scss */
        "./src/app/mywallet/mywallet.page.scss"))["default"]]
      })], MywalletPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=mywallet-mywallet-module-es5.js.map