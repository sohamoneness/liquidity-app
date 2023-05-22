(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"], {
    /***/
    "./src/app/services/common.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/common.service.ts ***!
      \********************************************/

    /*! exports provided: CommonProvider */

    /***/
    function srcAppServicesCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CommonProvider", function () {
        return CommonProvider;
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

      var CommonProvider = /*#__PURE__*/function () {
        function CommonProvider(http, loadingCtrl, navCtrl, helper) {
          _classCallCheck(this, CommonProvider);

          this.http = http;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.helper = helper; // serviceurl = "https://liquiditybars.in/backend/admin/api/";

          this.serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
        }
        /**
         * This method is for fetching home page data
         * @returns
         */


        _createClass(CommonProvider, [{
          key: "fetchHomePageData",
          value: function fetchHomePageData() {
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
                      _this.http.get(_this.serviceurl + 'fetchHomePageData/', {
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
           * This method is for fetching sub categories
           * @param category_id
           * @returns
           */

        }, {
          key: "fetchSubCategories",
          value: function fetchSubCategories(category_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this2 = this;

              var headers;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context2.abrupt("return", new Promise(function (resolve, reject) {
                      _this2.http.get(_this2.serviceurl + 'fetchSubCategories/' + category_id, {
                        headers: headers
                      }).subscribe(function (res) {
                        resolve(res);
                      }, function (err) {
                        reject(err);
                      });
                    }));

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
          }
          /**
           * This method is for fetching products shop and category wise
           * @param category_id
           * @param shop_id
           * @returns
           */

        }, {
          key: "fetchOtherProductsByCategory",
          value: function fetchOtherProductsByCategory(category_id, shop_id, userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this3 = this;

              var loading, headers;
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
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context3.abrupt("return", new Promise(function (resolve, reject) {
                      _this3.http.get(_this3.serviceurl + 'fetchOtherProductsByCategory/' + category_id + '/' + shop_id + '/' + userId, {
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
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
          /**
           * This method is to add multiple items in cart
           * @param data
           * @returns
           */

        }, {
          key: "addMultipleCartItems",
          value: function addMultipleCartItems(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _this4 = this;

              var loading, headers, body;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context4.sent;
                    _context4.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    body = 'device_id=' + data.device_id + '&cartProductIds=' + data.cartProductIds + '&cartProductsNames=' + data.cartProductsNames + '&cartProductPrices=' + data.cartProductPrices + '&cartQuantities=' + data.cartQuantities + '&cartIsLiquors=' + data.cartIsLiquors;
                    return _context4.abrupt("return", new Promise(function (resolve, reject) {
                      _this4.http.post(_this4.serviceurl + 'addMultipleCartItems/', body, {
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
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
          /**
           * This method is for clearing the cart
           * @param device_id
           * @returns
           */

        }, {
          key: "clearCart",
          value: function clearCart(device_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var _this5 = this;

              var headers;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context5.abrupt("return", new Promise(function (resolve, reject) {
                      _this5.http.get(_this5.serviceurl + 'clearCart/' + device_id, {
                        headers: headers
                      }).subscribe(function (res) {
                        resolve(res);
                      }, function (err) {
                        reject(err);
                      });
                    }));

                  case 2:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
          }
          /**
           * This method is for fetching product compare data
           * @param data
           * @returns
           */

        }, {
          key: "compareProduct",
          value: function compareProduct(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var _this6 = this;

              var loading, headers, body;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context6.sent;
                    _context6.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    body = 'product_name=' + data.product_name;
                    return _context6.abrupt("return", new Promise(function (resolve, reject) {
                      _this6.http.post(_this6.serviceurl + 'compareProduct/', body, {
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
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
          /**
           * This method is for fetching events data
           * @returns
           */

        }, {
          key: "fetchEvents",
          value: function fetchEvents() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              var _this7 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context7.sent;
                    _context7.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context7.abrupt("return", new Promise(function (resolve, reject) {
                      _this7.http.get(_this7.serviceurl + 'fetchEvents/', {
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
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "fetchProducts",
          value: function fetchProducts(sub_category_id, shop_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this8 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                while (1) switch (_context8.prev = _context8.next) {
                  case 0:
                    _context8.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context8.sent;
                    _context8.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context8.abrupt("return", new Promise(function (resolve, reject) {
                      _this8.http.get(_this8.serviceurl + 'fetchProducts/' + sub_category_id + '/' + shop_id, {
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
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "getSearchProducts",
          value: function getSearchProducts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this9 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                while (1) switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context9.sent;
                    _context9.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context9.abrupt("return", new Promise(function (resolve, reject) {
                      _this9.http.get(_this9.serviceurl + 'getSearchProducts/', {
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
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
          /*map*/

        }, {
          key: "getDistanceResult",
          value: function getDistanceResult(userId, lat, lng, distance) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this10 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context10.sent;
                    _context10.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context10.abrupt("return", new Promise(function (resolve, reject) {
                      _this10.http.get(_this10.serviceurl + 'filterShops?user_id=' + userId + '&lat=' + lat + '&lng=' + lng + '&distance=' + distance, {
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
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(data) {
            var _this11 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'id=' + data.id + '&name=' + data.name + '&email=' + data.email + '&gender=' + data.gender;
            return new Promise(function (resolve, reject) {
              _this11.http.post(_this11.serviceurl + 'updateProfile/', body, {
                headers: headers
              }).subscribe(function (res) {
                // loading.dismiss();
                resolve(res);
              }, function (err) {
                // loading.dismiss();
                reject(err);
              });
            });
          }
          /*
              call api to get search history
          */

        }, {
          key: "getUserSearchHistory",
          value: function getUserSearchHistory(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
              var _this12 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                while (1) switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context11.sent;
                    _context11.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context11.abrupt("return", new Promise(function (resolve, reject) {
                      _this12.http.get(_this12.serviceurl + 'getUserSearchHistory/' + userId, {
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
                    return _context11.stop();
                }
              }, _callee11, this);
            }));
          }
          /*
              call api to delete data frm history
          */

        }, {
          key: "deleteKeyWord",
          value: function deleteKeyWord(keywrdId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
              var _this13 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                while (1) switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context12.sent;
                    _context12.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context12.abrupt("return", new Promise(function (resolve, reject) {
                      _this13.http.get(_this13.serviceurl + 'deleteSearchData/' + keywrdId, {
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
                    return _context12.stop();
                }
              }, _callee12, this);
            }));
          }
          /*
              call api to get search result
          */

        }, {
          key: "getSearchResult",
          value: function getSearchResult(text, userId, lat, lng) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
              var _this14 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context13.sent;
                    _context13.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({});
                    return _context13.abrupt("return", new Promise(function (resolve, reject) {
                      _this14.http.get(_this14.serviceurl + 'searchData?keyword=' + text + '&user_id=' + userId + '&lat=' + lat + '&lng=' + lng, {
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
                    return _context13.stop();
                }
              }, _callee13, this);
            }));
          }
          /*
              call api to save store in watchList
          */

        }, {
          key: "favouriteShop",
          value: function favouriteShop(userId, storeId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
              var _this15 = this;

              var loading, headers, body;
              return _regeneratorRuntime().wrap(function _callee14$(_context14) {
                while (1) switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context14.sent;
                    _context14.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    body = 'store_id=' + storeId + '&user_id=' + userId;
                    return _context14.abrupt("return", new Promise(function (resolve, reject) {
                      _this15.http.post(_this15.serviceurl + 'addToWatchList', body, {
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
                    return _context14.stop();
                }
              }, _callee14, this);
            }));
          }
          /*
              call api to unsave store from watchList
          */

        }, {
          key: "deleteFrmfavouriteShop",
          value: function deleteFrmfavouriteShop(userId, storeId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
              var _this16 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee15$(_context15) {
                while (1) switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context15.sent;
                    _context15.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    return _context15.abrupt("return", new Promise(function (resolve, reject) {
                      _this16.http.get(_this16.serviceurl + 'removeFromWatchList/' + storeId + '/' + userId, {
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
                    return _context15.stop();
                }
              }, _callee15, this);
            }));
          }
          /*
              call api to get watchList for user
          */

        }, {
          key: "getwatchList",
          value: function getwatchList(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
              var _this17 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee16$(_context16) {
                while (1) switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context16.sent;
                    _context16.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    return _context16.abrupt("return", new Promise(function (resolve, reject) {
                      _this17.http.get(_this17.serviceurl + 'viewWatchList/' + userId, {
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
                    return _context16.stop();
                }
              }, _callee16, this);
            }));
          } // *********************************************************** //

          /*
             call api to save product in favourite
          */

        }, {
          key: "favouriteProducts",
          value: function favouriteProducts(userId, product_id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
              var _this18 = this;

              var loading, headers, body;
              return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                while (1) switch (_context17.prev = _context17.next) {
                  case 0:
                    _context17.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context17.sent;
                    _context17.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    body = 'product_id=' + product_id + '&user_id=' + userId;
                    return _context17.abrupt("return", new Promise(function (resolve, reject) {
                      _this18.http.post(_this18.serviceurl + 'addToFavourite', body, {
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
                    return _context17.stop();
                }
              }, _callee17, this);
            }));
          }
          /*
              call api to unsave product from favourite
          */

        }, {
          key: "deleteFrmfavouriteProducts",
          value: function deleteFrmfavouriteProducts(userId, productId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
              var _this19 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee18$(_context18) {
                while (1) switch (_context18.prev = _context18.next) {
                  case 0:
                    _context18.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context18.sent;
                    _context18.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    return _context18.abrupt("return", new Promise(function (resolve, reject) {
                      _this19.http.get(_this19.serviceurl + 'removeFromFavourite/' + productId + '/' + userId, {
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
                    return _context18.stop();
                }
              }, _callee18, this);
            }));
          }
          /*
              call api to get favouritelist for user
          */

        }, {
          key: "getfavouriteList",
          value: function getfavouriteList(userId) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee19() {
              var _this20 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee19$(_context19) {
                while (1) switch (_context19.prev = _context19.next) {
                  case 0:
                    _context19.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context19.sent;
                    _context19.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    return _context19.abrupt("return", new Promise(function (resolve, reject) {
                      _this20.http.get(_this20.serviceurl + 'favouriteList/' + userId, {
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
                    return _context19.stop();
                }
              }, _callee19, this);
            }));
          }
          /*
              call api to fetching stores from watchlist of favorite items
          */

        }, {
          key: "getwatchListForItems",
          value: function getwatchListForItems(product_name, userId, lat, lng) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
              var _this21 = this;

              var loading, headers;
              return _regeneratorRuntime().wrap(function _callee20$(_context20) {
                while (1) switch (_context20.prev = _context20.next) {
                  case 0:
                    _context20.next = 2;
                    return this.loadingCtrl.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context20.sent;
                    _context20.next = 5;
                    return loading.present();

                  case 5:
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    return _context20.abrupt("return", new Promise(function (resolve, reject) {
                      _this21.http.get(_this21.serviceurl + 'watchListPrice?' + 'product_name=' + product_name + '&user_id=' + userId + '&lat=' + lat + '&lng=' + lng, {
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
                    return _context20.stop();
                }
              }, _callee20, this);
            }));
          }
        }]);

        return CommonProvider;
      }();

      CommonProvider.ctorParameters = function () {
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

      CommonProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], CommonProvider);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da-es5.js.map