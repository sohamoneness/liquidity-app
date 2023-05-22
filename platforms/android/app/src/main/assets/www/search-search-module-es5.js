(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["search-search-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppSearchSearchPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"\" icon=\"chevron-back-outline\" defaultHref=\"\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Searchbar</ion-title>\n  </ion-toolbar>\n  <ion-toolbar>\n    <!-- <ion-searchbar [(ngModel)]=\"txt\" (ionInput)=\"search()\"></ion-searchbar> -->\n    <div class=\"search_bar\">\n      <ion-input type=\"text\" [(ngModel)]=\"txt\" placeholder=\"Search here..\"></ion-input>\n      <span (click)=\"search()\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g clip-path=\"url(#clip0_21_31)\">\n          <path d=\"M10.5691 0C4.74145 0 0 4.74145 0 10.5691C0 16.3971 4.74145 21.1382 10.5691 21.1382C16.3971 21.1382 21.1382 16.3971 21.1382 10.5691C21.1382 4.74145 16.3971 0 10.5691 0ZM10.5691 19.187C5.81723 19.187 1.95122 15.321 1.95122 10.5691C1.95122 5.81728 5.81723 1.95122 10.5691 1.95122C15.321 1.95122 19.187 5.81723 19.187 10.5691C19.187 15.321 15.321 19.187 10.5691 19.187Z\" fill=\"#28303F\"/>\n          <path d=\"M23.7142 22.3347L18.1207 16.7412C17.7395 16.36 17.1223 16.36 16.7411 16.7412C16.36 17.122 16.36 17.7399 16.7411 18.1207L22.3346 23.7142C22.4251 23.805 22.5326 23.8769 22.651 23.926C22.7694 23.975 22.8963 24.0002 23.0244 24.0001C23.1525 24.0002 23.2794 23.975 23.3978 23.9259C23.5162 23.8769 23.6237 23.8049 23.7142 23.7142C24.0953 23.3334 24.0953 22.7155 23.7142 22.3347Z\" fill=\"#28303F\"/>\n          </g>\n          <defs>\n          <clipPath id=\"clip0_21_31\">\n          <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </clipPath>\n          </defs>\n        </svg>\n      </span>\n    </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <ion-list class=\"search_list\" *ngIf=\"searchHistory && searchHistory.length>0\">\n    <ion-item *ngFor=\"let item of searchHistory\">\n      <span (click)=\"oldSearch(item.keyword)\">{{item.keyword}}</span>\n      <ion-icon slot=\"end\" name=\"close-outline\" (click)=\"delete(item.id)\"></ion-icon>\n    </ion-item>   \n  </ion-list>\n\n  <ion-list class=\"search_list\" *ngIf=\"products1 && products1.length>0\">\n    <ion-item *ngFor=\"let item of products1\" (click)=\"gotoSearchDetails(item)\">{{item.name}}\n      <!-- <span slot=\"end\" (click)=\"gotounsave(fav.id)\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </span> -->\n    </ion-item>\n  </ion-list>\n\n\n  <div class=\"store_list\" *ngIf=\"shopList && shopList.length>0\">\n    <ion-item-divider>Stores</ion-item-divider>\n\n    <div class=\"store_item\" *ngFor = \"let shop of shopList\">\n      <figure>\n        <ion-img src=\"{{shop.image}}\"></ion-img>\n        <span (click)=\"save(shop.id,shop.is_in_watchlist)\">\n          <ion-icon name=\"bookmark-outline\" *ngIf=\"shop.is_in_watchlist==0\"></ion-icon>\n          <ion-icon name=\"bookmark\" class=\"active\" *ngIf=\"shop.is_in_watchlist==1\"></ion-icon>\n        </span>\n      </figure>\n      <figcaption>\n        <div class=\"outlet_distance\">\n          <h4 class=\"shopTitle\"><strong (click)=\"gotoshopproduct(shop.id,shop)\">{{shop.name}}</strong></h4>\n          <p (click)=\"gotoshopproduct(shop.id,shop)\">{{shop.address}}</p>\n        </div>\n        <div class=\"distance_sec\">\n          <small><ion-icon name=\"compass-outline\"></ion-icon>{{shop.distance}}</small>\n          <small><ion-icon name=\"time-outline\"></ion-icon> {{shop.time}}min</small>\n        </div>\n      </figcaption>\n    </div>\n  </div>\n\n  <!-- <ion-list *ngIf=\"shopList && shopList.length>0\">\n    <ion-list-header>\n      <ion-label>Stores</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor = \"let shop of shopList\">\n      <ion-thumbnail slot=\"start\">\n        <ion-img src=\"{{shop.image}}\"></ion-img>\n      </ion-thumbnail>\n      <ion-label>\n        \n        <p (click)=\"gotoshopproduct(shop.id,shop)\">{{shop.address}}</p>\n        <div class=\"distance_sec\">\n          <p >\n            <small><ion-icon name=\"compass-outline\"></ion-icon>\n              {{shop.distance}}</small>\n            <small><ion-icon name=\"time-outline\"></ion-icon> {{shop.time}}min</small>\n          </p>\n        </div>\n      </ion-label>\n    </ion-item>\n  </ion-list> -->\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/search/search-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/search/search-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: SearchPageRoutingModule */

    /***/
    function srcAppSearchSearchRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageRoutingModule", function () {
        return SearchPageRoutingModule;
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


      var _search_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./search.page */
      "./src/app/search/search.page.ts");

      var routes = [{
        path: '',
        component: _search_page__WEBPACK_IMPORTED_MODULE_3__["SearchPage"]
      }];

      var SearchPageRoutingModule = /*#__PURE__*/_createClass(function SearchPageRoutingModule() {
        _classCallCheck(this, SearchPageRoutingModule);
      });

      SearchPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SearchPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/search/search.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/search/search.module.ts ***!
      \*****************************************/

    /*! exports provided: SearchPageModule */

    /***/
    function srcAppSearchSearchModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPageModule", function () {
        return SearchPageModule;
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


      var _search_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./search-routing.module */
      "./src/app/search/search-routing.module.ts");
      /* harmony import */


      var _search_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./search.page */
      "./src/app/search/search.page.ts");

      var SearchPageModule = /*#__PURE__*/_createClass(function SearchPageModule() {
        _classCallCheck(this, SearchPageModule);
      });

      SearchPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _search_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchPageRoutingModule"]],
        declarations: [_search_page__WEBPACK_IMPORTED_MODULE_6__["SearchPage"]]
      })], SearchPageModule);
      /***/
    },

    /***/
    "./src/app/search/search.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/search/search.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppSearchSearchPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".distance_sec {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.distance_sec small {\n  margin-right: 10px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1;\n}\n.distance_sec small ion-icon {\n  margin-right: 3px;\n  vertical-align: text-top;\n}\n.distance_sec .distance_btn {\n  display: inline-block;\n  padding: 0 10px;\n  padding-top: 4px;\n  vertical-align: middle;\n  margin: 0 5px;\n  background-color: #dcc88d;\n  color: #000;\n  border-radius: 20px;\n  text-decoration: none;\n  font-size: 10px;\n  line-height: 20px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.distance_sec .distance_btn ion-icon {\n  font-size: 13px;\n  vertical-align: sub;\n  margin-right: 3px;\n}\n.search_bar {\n  width: 100%;\n  position: relative;\n  background: #ebebeb;\n  border-radius: 6px;\n  width: calc(100% - 12px);\n  margin: 0 6px;\n}\n.search_bar ion-input {\n  --padding-start: 24px;\n  --padding-end: 60px;\n  --padding-top: 12px;\n  --padding-bottom: 12px;\n  line-height: 24px;\n  --min-height: 44px;\n  --border-radius: 6px;\n}\n.search_bar span {\n  display: inline-block;\n  vertical-align: top;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 10px;\n  z-index: 99;\n  line-height: 0;\n  font-size: 0;\n}\nion-list.search_list {\n  padding: 0 10px;\n}\nion-list.search_list ion-item {\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n}\nion-list.search_list ion-item ion-icon {\n  margin: 0;\n}\nion-item-divider {\n  --padding-start: 0;\n  --background: transparent;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  margin-bottom: 10px;\n}\n.store_list {\n  display: block;\n  padding: 0 10px;\n}\n.store_list .store_item {\n  display: block;\n}\n.store_list .store_item figure {\n  margin: 0;\n  border-radius: 10px;\n  overflow: hidden;\n  margin: 10px 0;\n  position: relative;\n}\n.store_list .store_item figure ion-img {\n  width: 100%;\n  height: 120px;\n  --border-radius: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.store_list .store_item figure ion-img image {\n  width: 100%;\n  height: 120px;\n  --border-radius: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.store_list .store_item figure img {\n  width: 100%;\n  height: 100px;\n  border-radius: 15px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.store_list .store_item figure span {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: block;\n  padding: 6px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 9;\n  line-height: 1;\n}\n.store_list .store_item figcaption {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  border-bottom: 1px solid #f8f8f8;\n  padding-bottom: 10px;\n}\n.store_list .store_item figcaption h4 {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 5px;\n}\n.store_list .store_item figcaption p {\n  margin: 0;\n}\n.store_list .store_item figcaption .distance_sec {\n  flex: 0 0 auto;\n}\n.store_list .store_item figcaption .distance_sec small {\n  display: flex;\n  align-items: center;\n}\n.shopTitle {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.shopTitle strong {\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  width: 200px;\n}\n.shopTitle span {\n  color: #49432f;\n}\n.shopTitle span .active {\n  color: #dcc88d;\n}\n.search_input {\n  position: relative;\n  padding: 0 20px;\n}\n.search_input ion-input {\n  background-color: #cdba82;\n  --padding-end: 55px;\n}\n.search_input span {\n  position: absolute;\n  top: 0px;\n  right: 20px;\n  padding: 10px 10px 4px 10px;\n  z-index: 6;\n  border-left: 1px solid #b79d52;\n  background: #b7a46e;\n}\n.search_input span ion-icon {\n  color: #fff;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNEO0FBQ0M7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjtBQUFFO0VBQ0MsaUJBQUE7RUFDRyx3QkFBQTtBQUVOO0FBQ0M7RUFDQyxxQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBQ0Y7QUFBRTtFQUNDLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBRUg7QUFHQTtFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGFBQUE7QUFBRDtBQUVDO0VBQ0MscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFBRjtBQUdDO0VBQ0MscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQURGO0FBS0E7RUFDQyxlQUFBO0FBRkQ7QUFJQztFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUZGO0FBSUU7RUFDQyxTQUFBO0FBRkg7QUFPQTtFQUNDLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSkQ7QUFPQTtFQUNDLGNBQUE7RUFDQSxlQUFBO0FBSkQ7QUFNQztFQUNDLGNBQUE7QUFKRjtBQU1FO0VBQ0MsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFKSDtBQU1HO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFKSjtBQU1JO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFKTDtBQVFHO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFOSjtBQVNHO0VBQ0Msb0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBUEo7QUFVRTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQkFBQTtBQVJIO0FBVUc7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBUko7QUFVRztFQUNDLFNBQUE7QUFSSjtBQVdHO0VBQ0MsY0FBQTtBQVRKO0FBV0k7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUFUTDtBQWdCQTtFQUNDLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBYkQ7QUFjQztFQUNDLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBWkY7QUFhRTtFQUNBLGNBQUE7QUFYRjtBQVlFO0VBQ0MsY0FBQTtBQVZIO0FBY0E7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUFYRDtBQVlDO0VBQ0MseUJBQUE7RUFDQSxtQkFBQTtBQVZGO0FBWUM7RUFDQyxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQVZGO0FBV0U7RUFDQyxXQUFBO0VBQ0EsZUFBQTtBQVRIIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGlzdGFuY2Vfc2VjIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuXHRzbWFsbHtcclxuXHRcdG1hcmdpbi1yaWdodDogMTBweDtcclxuXHRcdGZvbnQtc2l6ZTogMTJweDtcclxuXHRcdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdGlvbi1pY29ue1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgIFx0XHR2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcblx0XHR9XHJcblx0fVxyXG5cdC5kaXN0YW5jZV9idG57XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRwYWRkaW5nOiAwIDEwcHg7XHJcblx0XHRwYWRkaW5nLXRvcDogNHB4O1xyXG5cdFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHRcdG1hcmdpbjogMCA1cHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGNjODhkO1xyXG5cdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDIwcHg7XHJcblx0XHRmb250LXdlaWdodDogNjAwO1xyXG5cdFx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblx0XHRpb24taWNvbntcclxuXHRcdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0XHR2ZXJ0aWNhbC1hbGlnbjogc3ViO1xyXG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDNweDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5zZWFyY2hfYmFyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0YmFja2dyb3VuZDogI2ViZWJlYjtcclxuXHRib3JkZXItcmFkaXVzOiA2cHg7XHJcblx0d2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xyXG5cdG1hcmdpbjogMCA2cHg7XHJcblxyXG5cdGlvbi1pbnB1dCB7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XHJcblx0XHQtLXBhZGRpbmctZW5kOiA2MHB4O1xyXG5cdFx0LS1wYWRkaW5nLXRvcDogMTJweDtcclxuXHRcdC0tcGFkZGluZy1ib3R0b206IDEycHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjRweDtcclxuXHRcdC0tbWluLWhlaWdodDogNDRweDtcclxuXHRcdC0tYm9yZGVyLXJhZGl1czogNnB4O1xyXG5cdH1cclxuXHJcblx0c3BhbiB7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcblx0XHRyaWdodDogMTBweDtcclxuXHRcdHotaW5kZXg6IDk5O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDA7XHJcblx0XHRmb250LXNpemU6IDA7XHJcblx0fVxyXG59XHJcblxyXG5pb24tbGlzdC5zZWFyY2hfbGlzdCB7XHJcblx0cGFkZGluZzogMCAxMHB4O1xyXG5cclxuXHRpb24taXRlbSB7XHJcblx0XHQtLXBhZGRpbmctc3RhcnQ6IDA7XHJcblx0XHQtLXBhZGRpbmctZW5kOiAwO1xyXG5cdFx0LS1pbm5lci1wYWRkaW5nLWVuZDogMDtcclxuXHJcblx0XHRpb24taWNvbiB7XHJcblx0XHRcdG1hcmdpbjogMDtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlvbi1pdGVtLWRpdmlkZXIge1xyXG5cdC0tcGFkZGluZy1zdGFydDogMDtcclxuXHQtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uc3RvcmVfbGlzdCB7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcblx0cGFkZGluZzogMCAxMHB4O1xyXG5cclxuXHQuc3RvcmVfaXRlbSB7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHJcblx0XHRmaWd1cmUge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0XHRcdG92ZXJmbG93OiBoaWRkZW47XHJcblx0XHRcdG1hcmdpbjogMTBweCAwO1xyXG5cdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG5cdFx0XHRpb24taW1nIHtcclxuXHRcdFx0XHR3aWR0aDogMTAwJTtcclxuXHRcdFx0XHRoZWlnaHQ6IDEyMHB4O1xyXG5cdFx0XHRcdC0tYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHJcblx0XHRcdFx0aW1hZ2Uge1xyXG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6IDEyMHB4O1xyXG5cdFx0XHRcdFx0LS1ib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpbWcge1xyXG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0XHRcdGhlaWdodDogMTAwcHg7XHJcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcclxuXHRcdFx0XHRvYmplY3QtZml0OiBjb3ZlcjtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3BhbiB7XHJcblx0XHRcdFx0YmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjcpO1xyXG5cdFx0XHRcdGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xyXG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDZweDtcclxuXHRcdFx0XHRib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTBweDtcclxuXHRcdFx0XHRib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xyXG5cdFx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdFx0XHR0b3A6IDA7XHJcblx0XHRcdFx0cmlnaHQ6IDA7XHJcblx0XHRcdFx0ei1pbmRleDogOTtcclxuXHRcdFx0XHRsaW5lLWhlaWdodDogMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZmlnY2FwdGlvbiB7XHJcblx0XHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRcdGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRcdGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjhmOGY4O1xyXG5cdFx0XHRwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuXHJcblx0XHRcdGg0IHtcclxuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcclxuXHRcdFx0XHRtYXJnaW46IDAgMCA1cHg7XHJcblx0XHRcdH1cclxuXHRcdFx0cCB7XHJcblx0XHRcdFx0bWFyZ2luOiAwO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHQuZGlzdGFuY2Vfc2VjIHtcclxuXHRcdFx0XHRmbGV4OiAwIDAgYXV0bztcclxuXHJcblx0XHRcdFx0c21hbGwge1xyXG5cdFx0XHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG4uc2hvcFRpdGxle1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0c3Ryb25ne1xyXG5cdFx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcblx0XHRkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuXHRcdC13ZWJraXQtbGluZS1jbGFtcDogMTtcclxuXHRcdC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0d2lkdGg6IDIwMHB4O1xyXG5cdH1zcGFue1xyXG5cdFx0Y29sb3I6ICM0OTQzMmY7XHJcblx0XHQuYWN0aXZle1xyXG5cdFx0XHRjb2xvcjogI2RjYzg4ZDtcclxuXHRcdH1cdFxyXG5cdH1cclxufVxyXG4uc2VhcmNoX2lucHV0e1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nIDogMCAyMHB4O1xyXG5cdGlvbi1pbnB1dHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNjZGJhODI7XHJcblx0XHQtLXBhZGRpbmctZW5kOiA1NXB4O1xyXG5cdH1cclxuXHRzcGFue1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwcHg7XHJcblx0XHRyaWdodDogMjBweDtcclxuXHRcdHBhZGRpbmc6IDEwcHggMTBweCA0cHggMTBweDtcclxuXHRcdHotaW5kZXg6IDY7XHJcblx0XHRib3JkZXItbGVmdDogMXB4IHNvbGlkICNiNzlkNTI7XHJcblx0XHRiYWNrZ3JvdW5kOiAjYjdhNDZlO1xyXG5cdFx0aW9uLWljb257XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHR9XHJcblx0fVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/search/search.page.ts":
    /*!***************************************!*\
      !*** ./src/app/search/search.page.ts ***!
      \***************************************/

    /*! exports provided: SearchPage */

    /***/
    function srcAppSearchSearchPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPage", function () {
        return SearchPage;
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


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/services/common.service */
      "./src/app/services/common.service.ts");

      var SearchPage = /*#__PURE__*/function () {
        function SearchPage(navCtrl, alertCtrl, helper, plt, _router, commonProvider) {
          _classCallCheck(this, SearchPage);

          this.navCtrl = navCtrl;
          this.alertCtrl = alertCtrl;
          this.helper = helper;
          this.plt = plt;
          this._router = _router;
          this.commonProvider = commonProvider;
          this.products = [];
          this.products1 = [];
          this.shopList = [];
          this.txt = '';
          this.userId = '';
          this.searchHistory = [];
          this.imagePath = 'https://liquiditybars.com/backend/assets/upload/shops/';
        }

        _createClass(SearchPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.commonProvider.getSearchProducts().then((res) => {
            //   if (res["status"] == 1) {
            //     this.products = res["products"];
            //     this.products1 = this.products;
            //   }
            // })
            this.userId = localStorage.getItem("user_id");
            this.getsearchHistory();
          }
          /**
           * method is call to fetch serch history data
          */

        }, {
          key: "getsearchHistory",
          value: function getsearchHistory() {
            var _this = this;

            this.commonProvider.getUserSearchHistory(this.userId).then(function (res) {
              if (res["status"] == 1) {
                _this.searchHistory = res["user_search_keywords"];
              }
            });
          } // search() {
          //   console.log('products1',this.products1);
          //   console.log("txt length"+this.txt)
          //   this.products1 = [];
          //   if (this.txt.length > 2) {
          //     console.log("txt>>"+this.txt)
          //     for (let i = 0; i < this.products.length; i++) {
          //       let name = this.products[i].name.toLowerCase();
          //        console.log('products1',this.products1);
          //       if (name.indexOf(this.txt.toLowerCase()) != -1) {
          //         this.products1.push(this.products[i]);
          //       }
          //     }
          //     this.products1 = this.products.filter((item) => {
          //       return (item.name.toLowerCase().indexOf(this.txt.toLowerCase()) > -1);
          //     })
          //     console.log('products1',this.products1);
          //   } else{ //if (this.txt.length == 0) {
          //     console.log('else products1',this.products);
          //     this.products1 = this.products;
          //   }
          // }

          /**
           * method is calling to search products or store
           */

        }, {
          key: "search",
          value: function search() {
            var _this2 = this;

            if (this.txt != '') {
              var currentPosition = {
                lat: 43.6532,
                "long": -79.3832
              };
              this.commonProvider.getSearchResult(this.txt, this.userId, currentPosition.lat, currentPosition["long"]).then(function (res) {
                if (res["status"] == 1) {
                  _this2.shopList = res["stores"];
                  _this2.products1 = res["items"];
                  _this2.searchHistory = [];
                } else {}
              });
            }
          }
          /**
           * method is calling to search products from searchHistory
          */

        }, {
          key: "oldSearch",
          value: function oldSearch(itemData) {
            this.txt = itemData;
            this.search();
          }
          /**
           * method is calling to go to store list of this particular product page
           * @ param item(product)
          */

        }, {
          key: "gotoSearchDetails",
          value: function gotoSearchDetails(item) {
            localStorage.setItem('product_name', item.name);
            this.navCtrl.navigateForward('/searchresult');
          }
          /**
           * method is calling to delete search keyword
           * @param keyword id
           */

        }, {
          key: "delete",
          value: function _delete(keyId) {
            var _this3 = this;

            this.commonProvider.deleteKeyWord(keyId).then(function (res) {
              console.log(res);

              if (res["status"] == 1) {
                _this3.getsearchHistory();
              }
            });
          }
          /**
           * This method is calling for save shop in watchlist or unsave shop from watchlist
           * @param shop id, watchlist(0,1)
          */

        }, {
          key: "save",
          value: function save(storeId, watchList) {
            var _this4 = this;

            if (watchList == 0) {
              this.helper.presentLoading();
              /**
              * call api to save store
              */

              this.commonProvider.favouriteShop(this.userId, storeId).then(function (res) {
                if (res["status"] == '1') {
                  _this4.helper.dismissLoader();

                  _this4.search();
                } else {}
              });
            } else {
              /**
              * call api to unsave store
              */
              this.commonProvider.deleteFrmfavouriteShop(this.userId, storeId).then(function (res) {
                if (res["status"] == '1') {
                  _this4.search();
                } else {}
              });
            }
          }
          /**
           * This method is calling to go to outlet menu of shop
          */

        }, {
          key: "gotoshopproduct",
          value: function gotoshopproduct(liquorshopid, item) {
            localStorage.setItem("liquorshopid", liquorshopid);
            localStorage.setItem('shopDetails', JSON.stringify(item));
            this.navCtrl.navigateForward('/outlet-ordering-menu');
          }
          /**
           * This method is for add favorite product
           * @param productId
           */

        }, {
          key: "addToFavrite",
          value: function addToFavrite(productId, is_fav) {
            var _this5 = this;

            if (is_fav == 0) {
              this.commonProvider.favouriteProducts(this.userId, productId).then(function (res) {
                console.log(res);

                if (res["status"] == '1') {
                  _this5.helper.dismissLoader();

                  _this5.search();
                }
              });
            } else {
              /**
              * call api to unsave product
              */
              this.commonProvider.deleteFrmfavouriteProducts(this.userId, productId).then(function (res) {
                if (res["status"] == '1') {
                  _this5.search();
                } else {}
              });
            }
          }
        }]);

        return SearchPage;
      }();

      SearchPage.ctorParameters = function () {
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
          type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonProvider"]
        }];
      };

      SearchPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./search.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/search/search.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./search.page.scss */
        "./src/app/search/search.page.scss"))["default"]]
      })], SearchPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=search-search-module-es5.js.map