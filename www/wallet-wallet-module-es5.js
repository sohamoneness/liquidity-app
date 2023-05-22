(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["wallet-wallet-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppWalletWalletPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n  \t<ion-buttons slot=\"start\">\n  \t\t<ion-back-button icon=\"arrow-back-outline\" defaultHref=\"/homenew\"></ion-back-button>\n  \t</ion-buttons>\n    <ion-title>My Test Funds</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content no-padding>\n\t<form [formGroup]=\"loginForm\">\n    <ion-card class=\"address\">\n      <ion-item>\n          <ion-label fixed>Enter Amount</ion-label>\n          <ion-input type=\"number\" formControlName=\"amount\" name=\"amount\" [(ngModel)]=\"wallet_amount\" placeholder=\"Enter Amount\"></ion-input>\n        </ion-item>\n    </ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col col-12>\n          <button ion-button block [disabled]=\"!loginForm.valid\" (click)=\"pay()\">Add Balance</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n  <ion-card  *ngFor=\"let item of walletList\">\n    <ion-row>\n      <ion-col col-7>\n        <h5>Transaction Id: {{item.transaction_id}}</h5>\n        <h4 *ngIf=\"item.type==1\">Rs.{{item.amount}}</h4>\n        <h4 *ngIf=\"item.type==2\">Rs.{{item.amount}} (Order Id : {{item.order_id}})</h4>\n      </ion-col>\n      <ion-col col-5 text-right>\n        <h6 class=\"status\" *ngIf=\"item.type==1\">Credited</h6>\n        <h6 class=\"status\" *ngIf=\"item.type==2\" style=\"color: #ff0000\">Deducted</h6>\n        <h6>{{item.date_time}}</h6>\n      </ion-col>\n      \n    </ion-row>\n  </ion-card>\n\n  <ion-card *ngIf=\"!walletList || walletList.length==0\">\n    <ion-row>\n      <ion-col col-12>\n        <h5 text-center>No records found.</h5>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n    \n</ion-content> -->\n\n<ion-content>\n  <div class=\"menu__header\">\n    <div class=\"user__image\">\n      <img src=\"assets/user.jpg\" />\n    </div>\n    <h6>{{user_name}}</h6>\n    <p>{{user_mail}}</p>\n    <p>+91 {{user_mobile}}</p>\n    <a  class=\"menu__button\">Test Fund Balance: <span class=\"currency\">&#8377;</span> {{wallet_balance  | number : '.2-2'}}</a>\n  </div>\n  <div class=\"title_bar\">\n    <h2 class=\"title\">Add Balance</h2>\n  </div>\n  <div class=\"row\">\n    <ion-list class=\"drink_items drink_items_mod\">\n      <ion-item>\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\" [formGroup]=\"loginForm\">\n            <ion-input type=\"number\" formControlName=\"amount\" name=\"amount\" [(ngModel)]=\"wallet_amount\" placeholder=\"Enter Amount\"></ion-input>\n            <button ion-button block [disabled]=\"!loginForm.valid\" (click)=\"pay()\" class=\"add_btn\">Add Balance</button>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n  </div>\n  <div class=\"title_bar\">\n    <h2 class=\"title\">Transaction History</h2>\n  </div>\n  <div class=\"order-summary\" *ngFor=\"let item of walletList\">\n    <a class=\"edit_button\" style=\"color: #3fb265; border: 1px solid #3fb265;\" *ngIf=\"item.type==1\">Credited</a>\n    <a class=\"edit_button\" style=\"color: #ff0000; border: 1px solid #ff0000;\" *ngIf=\"item.type==2\">Deducted</a>\n    <p><span>Transaction Id:</span> {{item.transaction_id}}</p>\n    <p *ngIf=\"item.type==1\"><span>Amount:</span> Rs.{{item.amount}}</p>\n    <p *ngIf=\"item.type==2\"><span>Amount:</span> Rs.{{item.amount}} (Order Id : {{item.order_id}})</p>\n    <p><span>Date & Time:</span> {{item.date_time}} </p>\n  </div>\n\n  \n</ion-content>\n\n";
      /***/
    },

    /***/
    "./src/app/services/account.service.ts":
    /*!*********************************************!*\
      !*** ./src/app/services/account.service.ts ***!
      \*********************************************/

    /*! exports provided: AccountProvider */

    /***/
    function srcAppServicesAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AccountProvider", function () {
        return AccountProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");

      var AccountProvider = /*#__PURE__*/function () {
        function AccountProvider(http, loadingCtrl, navCtrl, helper) {
          _classCallCheck(this, AccountProvider);

          this.http = http;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.helper = helper; // serviceurl = "http://liquiditybars.com/canada/backend/admin/api";

          this.serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
        }
        /**
         * This method is for fetching notification list
         * @param user_id
         * @returns
         */


        _createClass(AccountProvider, [{
          key: "fetchNotificationList",
          value: function fetchNotificationList(user_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      _this.http.get(_this.serviceurl + 'notificationList/' + user_id, {
                        headers: headers
                      }).subscribe(function (res) {
                        loading.dismiss();
                        resolve(res);
                      }, function (err) {
                        loading.dismiss();
                        reject(err);
                      });
                    }));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
          /**
           * This method is for fetching walllet transaction list
           * @param user_id
           * @returns
           */

        }, {
          key: "fetchWalletTransactions",
          value: function fetchWalletTransactions(user_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      _this2.http.get(_this2.serviceurl + 'fetch_wallet_balance/' + user_id, {
                        headers: headers
                      }).subscribe(function (res) {
                        loading.dismiss();
                        resolve(res);
                      }, function (err) {
                        loading.dismiss();
                        reject(err);
                      });
                    }));

                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
          /**
           * This method is for adding wallet balance
           * @param data
           * @returns
           */

        }, {
          key: "addWalletBalance",
          value: function addWalletBalance(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this3 = this;

              var loading, headers, body;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context3.sent;
                    _context3.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    body = 'amount=' + data.amount + '&user_id=' + data.user_id;
                    return _context3.abrupt("return", new Promise(function (resolve, reject) {
                      _this3.http.post(_this3.serviceurl + "add_wallet_balance", body, {
                        headers: headers
                      }).subscribe(function (res) {
                        loading.dismiss();
                        resolve(res);
                      }, function (err) {
                        loading.dismiss();
                        reject(err);
                      });
                    }));

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }]);

        return AccountProvider;
      }();

      AccountProvider.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_4__["HelperProvider"]
        }];
      };

      AccountProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AccountProvider);
      /***/
    },

    /***/
    "./src/app/wallet/wallet-routing.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/wallet/wallet-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: WalletPageRoutingModule */

    /***/
    function srcAppWalletWalletRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function () {
        return WalletPageRoutingModule;
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


      var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./wallet.page */
      "./src/app/wallet/wallet.page.ts");

      var routes = [{
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
      }];

      var WalletPageRoutingModule = /*#__PURE__*/_createClass(function WalletPageRoutingModule() {
        _classCallCheck(this, WalletPageRoutingModule);
      });

      WalletPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], WalletPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/wallet/wallet.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.module.ts ***!
      \*****************************************/

    /*! exports provided: WalletPageModule */

    /***/
    function srcAppWalletWalletModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPageModule", function () {
        return WalletPageModule;
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


      var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./wallet-routing.module */
      "./src/app/wallet/wallet-routing.module.ts");
      /* harmony import */


      var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./wallet.page */
      "./src/app/wallet/wallet.page.ts");

      var WalletPageModule = /*#__PURE__*/_createClass(function WalletPageModule() {
        _classCallCheck(this, WalletPageModule);
      });

      WalletPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
      })], WalletPageModule);
      /***/
    },

    /***/
    "./src/app/wallet/wallet.page.scss":
    /*!*****************************************!*\
      !*** ./src/app/wallet/wallet.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function srcAppWalletWalletPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #ebeff2;\n}\nion-content ion-card {\n  width: calc(100% - 12px);\n  margin: 6px;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 0px -1px rgba(0, 0, 0, 0.2), 0 0px 2px 0 rgba(0, 0, 0, 0.12);\n}\nion-content ion-card hr {\n  margin: 0;\n}\nion-content ion-card ion-col {\n  padding: 5px 10px;\n}\nion-content ion-card ion-col h4 {\n  color: #eb451f;\n}\nion-content ion-card ion-col h5 {\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 0.5px;\n}\nion-content ion-card ion-col h6 {\n  font-weight: 400;\n  color: #888;\n  font-size: 11px;\n  letter-spacing: 0.5px;\n  line-height: 16px;\n}\nion-content ion-card ion-col h6.status {\n  color: #3fb265;\n}\nion-content ion-card ion-col p {\n  font-size: 12px;\n  font-weight: 400;\n  color: #888;\n  letter-spacing: 0.5px;\n  line-height: 16px;\n}\nion-content ion-card ion-col .button {\n  margin: 0;\n  height: 32px;\n  background: #dd0023;\n  text-transform: capitalize;\n}\nion-content ion-card ion-col .button:hover {\n  background: #dc303b;\n}\nion-content ion-card ion-col .button:focus {\n  background: #dc303b;\n}\nion-content .button {\n  background: #dd0023;\n  color: #fff;\n  height: 44px;\n  line-height: 44px;\n  margin: 0 0;\n}\nion-content .button:hover {\n  background: #dc303b;\n}\nion-content .button:focus {\n  background: #dc303b;\n}\nion-content .menu__header {\n  background-color: #000;\n  padding: 20px;\n  box-sizing: border-box;\n  color: #ffffff;\n  text-align: center;\n}\nion-content .menu__header h6 {\n  font-size: 12px;\n  text-transform: uppercase;\n  margin: 0;\n}\nion-content .menu__header p {\n  margin: 0 0 6px;\n}\nion-content .menu__header .menu__button {\n  display: inline-block;\n  padding: 0 10px;\n  vertical-align: middle;\n  margin: 0 5px;\n  background-color: #dcc88d;\n  color: #000;\n  border-radius: 20px;\n  text-decoration: none;\n  font-size: 10px;\n  line-height: 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\nion-content .menu__header .user__image {\n  display: block;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px;\n  margin: 0 auto 20px;\n  position: relative;\n}\nion-content .menu__header .user__image:before {\n  width: 88px;\n  height: 88px;\n  border-radius: 50%;\n  border: 1px solid #dcc88d;\n  position: absolute;\n  pointer-events: none;\n  content: \"\";\n  top: -5px;\n  left: -5px;\n}\nion-content .menu__header .user__image img {\n  border-radius: 50%;\n  max-width: 100%;\n}\nion-content .order-summary {\n  padding: 15px 20px;\n  background-color: #fff;\n  margin: 10px 0;\n}\nion-content .order-summary h6 {\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #bf9f4c;\n  margin: 0;\n}\nion-content .order-summary .edit_button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  float: right;\n  color: #bf9f4c;\n  border: 1px solid #bf9f4c;\n  padding: 2px 6px;\n  font-size: 12px;\n  font-weight: bold;\n  border-radius: 5px;\n  text-decoration: none;\n}\nion-content .order-summary .edit_button ion-icon {\n  margin-right: 4px;\n}\nion-content .order-summary p {\n  color: #bf9f4c;\n  margin: 0;\n  font-weight: 600;\n  line-height: 20px;\n}\nion-content .order-summary p span {\n  color: #111111;\n  display: inline-block;\n}\nion-content .order-summary ion-grid {\n  --ion-grid-padding: 0;\n}\nion-content .order-summary ion-grid ion-col {\n  --ion-grid-column-padding: 0;\n}\nion-content .order-summary hr {\n  background-color: #b2b2b2;\n  margin: 10px 0;\n}\nion-content .add_btn {\n  display: inline-block;\n  padding: 0 10px;\n  padding-top: 4px;\n  vertical-align: middle;\n  margin: 0 5px;\n  background-color: #dcc88d;\n  color: #000;\n  border-radius: 20px;\n  text-decoration: none;\n  font-size: 10px;\n  line-height: 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDUSxxQkFBQTtBQUNSO0FBQ0k7RUFDSSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0FBQ1I7QUFDUTtFQUNJLFNBQUE7QUFDWjtBQUNRO0VBQ0ksaUJBQUE7QUFDWjtBQUNZO0VBQ0ksY0FBQTtBQUNoQjtBQUNZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFDaEI7QUFDWTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBQ2hCO0FBQ1k7RUFDSSxjQUFBO0FBQ2hCO0FBQ1k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQUNoQjtBQUNZO0VBQ0ksU0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0FBQ2hCO0FBQ2dCO0VBQ0ksbUJBQUE7QUFDcEI7QUFDZ0I7RUFDSSxtQkFBQTtBQUNwQjtBQUlJO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUZSO0FBSVE7RUFDSSxtQkFBQTtBQUZaO0FBSVE7RUFDSSxtQkFBQTtBQUZaO0FBTUk7RUFDSSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUpSO0FBTVE7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBSlo7QUFNUTtFQUNJLGVBQUE7QUFKWjtBQU9RO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFMWjtBQVFRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTlo7QUFRWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFOaEI7QUFRWTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQU5oQjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFSUjtBQVVRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUFSWjtBQVdRO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQVRaO0FBV1k7RUFDSSxpQkFBQTtBQVRoQjtBQWFRO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWFo7QUFhWTtFQUNJLGNBQUE7RUFDQSxxQkFBQTtBQVhoQjtBQWNRO0VBQ0kscUJBQUE7QUFaWjtBQWNZO0VBQ0ksNEJBQUE7QUFaaEI7QUFlUTtFQUNJLHlCQUFBO0VBQ0EsY0FBQTtBQWJaO0FBZ0JJO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQWRSIiwiZmlsZSI6InNyYy9hcHAvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZWJlZmYyO1xyXG5cclxuICAgIGlvbi1jYXJkIHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTJweCk7XHJcbiAgICAgICAgbWFyZ2luOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDBweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwcHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcbiAgICAgICAgaHIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuXHJcbiAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZWI0NTFmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDYge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDYuc3RhdHVzIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjM2ZiMjY1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGQwMDIzO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2RjMzAzYjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkYzMwM2I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZGQwMDIzO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcclxuICAgICAgICBtYXJnaW46IDAgMDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkYzMwM2I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGMzMDNiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVudV9faGVhZGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAgIGg2IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAubWVudV9fYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2M4OGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAudXNlcl9faW1hZ2Uge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0byAyMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogODhweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogODhweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2M4OGQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogLTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm9yZGVyLXN1bW1hcnkge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgICBoNiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgY29sb3I6ICNiZjlmNGM7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5lZGl0X2J1dHRvbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgICBjb2xvcjogI2JmOWY0YztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JmOWY0YztcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4IDZweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYmY5ZjRjO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMxMTExMTE7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1ncmlkIHtcclxuICAgICAgICAgICAgLS1pb24tZ3JpZC1wYWRkaW5nOiAwO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlvbi1jb2wge1xyXG4gICAgICAgICAgICAgICAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBociB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiMmIyYjI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGRfYnRuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkY2M4OGQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "./src/app/wallet/wallet.page.ts":
    /*!***************************************!*\
      !*** ./src/app/wallet/wallet.page.ts ***!
      \***************************************/

    /*! exports provided: WalletPage */

    /***/
    function srcAppWalletWalletPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalletPage", function () {
        return WalletPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/account.service */
      "./src/app/services/account.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var WalletPage = /*#__PURE__*/function () {
        function WalletPage(accountProvider, helper, _router, navCtrl, fb, platform, alert) {
          _classCallCheck(this, WalletPage);

          this.accountProvider = accountProvider;
          this.helper = helper;
          this._router = _router;
          this.navCtrl = navCtrl;
          this.fb = fb;
          this.platform = platform;
          this.alert = alert;
          this.walletList = [];
          this.wallet_balance = '0';
          this.amm = '';
          this.amm1 = 0;
          this.wallet_amount = '';
          this.user = [];
          this.user_name = [];
          this.user_mail = [];
          this.user_mobile = [];
          this.loginForm = fb.group({
            'amount': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])]
          });
        }

        _createClass(WalletPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.user = JSON.parse(localStorage.getItem('userDetails'));
            this.user_mail = this.user.email;
            this.user_name = this.user.name;
            this.user_mobile = this.user.mobile;

            if (localStorage.getItem("userDetails")) {
              var id = JSON.parse(localStorage.getItem("userDetails")).id;
              this.accountProvider.fetchWalletTransactions(id).then(function (res) {
                if (res["status"] == "1") {
                  _this4.walletList = res["wallets"];
                  _this4.wallet_balance = res["wallet_balance"];
                } else {
                  _this4.helper.presentAlert(res["message"]);
                }
              })["catch"](function (err) {
                console.log("Some error occurred");
              });
            }

            console.log('ionViewDidLoad WalletPage');
          }
        }, {
          key: "pay",
          value: function pay() {
            var _this5 = this;

            //this.amm = Number(this.wallet_amount)*100;
            this.amm1 = Number(this.wallet_amount) * 100;
            var options = {
              description: 'Liquidity App',
              image: "https://firebasestorage.googleapis.com/v0/b/liquidity-app-6d8cb.appspot.com/o/Liquidity_Logo.png?alt=media&token=9b6b5894-0176-4755-aeba-66d1aa7722b6",
              currency: 'C$',
              key: 'rzp_test_1DP5mmOlF5G5ag',
              amount: this.amm1,
              name: "Liquidity",
              prefill: {
                email: JSON.parse(localStorage.getItem("userDetails")).email,
                contact: JSON.parse(localStorage.getItem("userDetails")).mobile,
                name: JSON.parse(localStorage.getItem("userDetails")).name
              },
              theme: {
                color: '#DCC88D'
              },
              modal: {
                ondismiss: function ondismiss() {
                  alert('dismissed');
                }
              }
            };

            var successCallback = function successCallback(payment_id) {
              addToWallet(payment_id);
            };

            var cancelCallback = function cancelCallback(error) {
              alert(error.description + ' (Error ' + error.code + ')');
            };

            var addToWallet = function addToWallet(payment_id) {
              var data = _this5.loginForm.value;
              data.user_id = JSON.parse(localStorage.getItem("userDetails")).id;

              _this5.accountProvider.addWalletBalance(data).then(function (res) {
                if (res["status"] == "1") {
                  _this5.helper.presentAlert('Amount successfully added to your wallet.');

                  if (localStorage.getItem("userDetails")) {
                    var id = JSON.parse(localStorage.getItem("userDetails")).id;

                    _this5.accountProvider.fetchWalletTransactions(id).then(function (res) {
                      console.log("rohan", res);

                      if (res["status"] == "1") {
                        _this5.walletList = res["wallets"];
                        _this5.wallet_balance = res["wallet_balance"];
                        localStorage.setItem("wallet_balance", _this5.wallet_balance);
                        var _id = JSON.parse(localStorage.getItem("userDetails")).id;

                        _this5.accountProvider.fetchWalletTransactions(_id).then(function (res) {
                          // console.log("rohan", res)
                          if (res["status"] == "1") {
                            _this5.walletList = res["wallets"];
                            _this5.wallet_balance = res["wallet_balance"];
                            _this5.wallet_amount = '';

                            _this5.helper.suucessAlert(res["message"]);

                            _this5.navCtrl.navigateRoot('/homenew');
                          } else {
                            _this5.helper.presentAlert(res["message"]);
                          }
                        })["catch"](function (err) {});
                      } else {
                        _this5.helper.presentAlert(res["message"]);
                      }
                    })["catch"](function (err) {});
                  }
                } else {
                  _this5.helper.presentAlert(res["message"]);
                }
              })["catch"](function (err) {});
            }; //RazorpayCheckout.open(options, successCallback, cancelCallback);


            this.platform.ready().then(function () {
              RazorpayCheckout.open(options, successCallback, cancelCallback);
            });
          }
        }]);

        return WalletPage;
      }();

      WalletPage.ctorParameters = function () {
        return [{
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountProvider"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }];
      };

      WalletPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./wallet.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/wallet/wallet.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./wallet.page.scss */
        "./src/app/wallet/wallet.page.scss"))["default"]]
      })], WalletPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=wallet-wallet-module-es5.js.map