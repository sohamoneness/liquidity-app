(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["outlet-ordering-menu-outlet-ordering-menu-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-ordering-menu/outlet-ordering-menu.page.html":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-ordering-menu/outlet-ordering-menu.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppOutletOrderingMenuOutletOrderingMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-header [translucent]=\"true\">\n\t<ion-toolbar>\n\t\t<ion-buttons slot=\"start\">\n\t\t  <ion-back-button icon=\"chevron-back-outline\" text=\"\" defaultHref=\"\"></ion-back-button>\n\t\t</ion-buttons>\n\t\t<ion-buttons slot=\"end\">\n\t\t\t<ion-button (click)=\"cart()\">\n\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-bag\"><path d=\"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z\"></path><line x1=\"3\" y1=\"6\" x2=\"21\" y2=\"6\"></line><path d=\"M16 10a4 4 0 0 1-8 0\"></path></svg>\n\t\t\t</ion-button>\n\t\t</ion-buttons>\t  \n\t</ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n\t<div class=\"resturant_img_wrap\" *ngIf=\"shopDetails\">\n\t\t<img src=\"{{shopDetails.image}}\">\n\t\t<!-- <div class=\"rating_number\">\n\t\t\t<img src=\"../../assets/fav.svg\">\n\t\t\t<p>{{shopDetails.rating}}</p>\n\t\t</div> -->\n\t</div>\n\t<div class=\"resturant_title_wrap\" *ngIf=\"shopDetails\">\n\t\t<h1 class=\"heading\">{{shopDetails.name}}</h1>\n\t\t<p class=\"address\"><img src=\"../../assets/res_pin.svg\"> {{shopDetails.address}}</p>\n\t\t<div class=\"br-1\"></div>\n\t\t<div class=\"btn_group\">\n\t\t\t<ion-button class=\"btn-outlet\" (click)=\"callNow(shopDetails.phone)\">CONTACT OUTLET</ion-button>\n\t\t\t<ion-button class=\"btn-outlet\" (click)=\"callHousingRules()\">VIEW HOUSE RULES</ion-button>\n\t\t</div>\n\t</div>\n\n\t<div class=\"res_content\">\n\t\t<p>More than just a bar; our services include Virtual Mixology Workshops, Cocktail Catering, Team-building events and more. We strive to make every event an immersive cocktail experience, working closely with our clients to ensure that we integrate our cocktail selections with the theme, season and/or style.</p>\n\t\t<p>Warmly decorated, straightforward rooms come with Wi-Fi access, as well as cable TV, and tea and coffeemaking facilities.</p>\n\t\t<p>There's a relaxed restaurant and a business centre. A generator is on-site. Parking is available.</p>\n\t</div>\n\n\t<div class=\"resturant_title_wrap mt-24\">\n\t\t<div class=\"rebate_tag\">{{shopDetails.offer_rate}}% OFF</div>\n\t\t<p class=\"content-2\">{{shopDetails.offer_text}}</p>\n\t\t<p class=\"content-2\">{{shopDetails.house_rules}}</p>\n\t\t<p class=\"content content-mod\">Auto applied during checkout</p>\n\t</div>\n\n</ion-content>\n\n<ion-footer class=\"ion-no-border\">\n  <div class=\"footer_content\">\n  \t<div class=\"footer_item_end\" (click)=\"gotoOutLet()\">\n  \t\t<p>VIEW ONLINE ORDERING MENU</p>\n  \t\t<img src=\"assets/arrow-right.png\">\n  \t</div>\n  </div>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/outlet-ordering-menu/outlet-ordering-menu-routing.module.ts":
    /*!*****************************************************************************!*\
      !*** ./src/app/outlet-ordering-menu/outlet-ordering-menu-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: OutletOrderingMenuPageRoutingModule */

    /***/
    function srcAppOutletOrderingMenuOutletOrderingMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletOrderingMenuPageRoutingModule", function () {
        return OutletOrderingMenuPageRoutingModule;
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


      var _outlet_ordering_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./outlet-ordering-menu.page */
      "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.ts");

      var routes = [{
        path: '',
        component: _outlet_ordering_menu_page__WEBPACK_IMPORTED_MODULE_3__["OutletOrderingMenuPage"]
      }];

      var OutletOrderingMenuPageRoutingModule = /*#__PURE__*/_createClass(function OutletOrderingMenuPageRoutingModule() {
        _classCallCheck(this, OutletOrderingMenuPageRoutingModule);
      });

      OutletOrderingMenuPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], OutletOrderingMenuPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/outlet-ordering-menu/outlet-ordering-menu.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/outlet-ordering-menu/outlet-ordering-menu.module.ts ***!
      \*********************************************************************/

    /*! exports provided: OutletOrderingMenuPageModule */

    /***/
    function srcAppOutletOrderingMenuOutletOrderingMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletOrderingMenuPageModule", function () {
        return OutletOrderingMenuPageModule;
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


      var _outlet_ordering_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./outlet-ordering-menu-routing.module */
      "./src/app/outlet-ordering-menu/outlet-ordering-menu-routing.module.ts");
      /* harmony import */


      var _outlet_ordering_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./outlet-ordering-menu.page */
      "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.ts");

      var OutletOrderingMenuPageModule = /*#__PURE__*/_createClass(function OutletOrderingMenuPageModule() {
        _classCallCheck(this, OutletOrderingMenuPageModule);
      });

      OutletOrderingMenuPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _outlet_ordering_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["OutletOrderingMenuPageRoutingModule"]],
        declarations: [_outlet_ordering_menu_page__WEBPACK_IMPORTED_MODULE_6__["OutletOrderingMenuPage"]]
      })], OutletOrderingMenuPageModule);
      /***/
    },

    /***/
    "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.scss":
    /*!*********************************************************************!*\
      !*** ./src/app/outlet-ordering-menu/outlet-ordering-menu.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppOutletOrderingMenuOutletOrderingMenuPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header ion-toolbar {\n  --background: transparent;\n  --ion-color-base: transparent !important;\n}\nion-header ion-button {\n  --background: #fff;\n  --border-radius: 50%;\n  margin: 0;\n  margin-right: 10px;\n  --padding-start: 9px;\n  --padding-end: 9px;\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n  height: 38px;\n  line-height: 0;\n}\nion-header ion-button svg {\n  width: 20px;\n  height: 20px;\n}\nion-header ion-back-button {\n  --background: #fff;\n  --border-radius: 50%;\n  margin: 0;\n  margin-left: 6px;\n  --padding-start: 7px;\n  --padding-end: 7px;\n  --padding-top: 2px;\n  --padding-bottom: 2px;\n  height: 38px;\n  min-width: 38px;\n  line-height: 0;\n}\nion-content {\n  --background: #fff;\n}\nion-content .resturant_img_wrap {\n  margin-bottom: 0;\n  background-color: #fff;\n  padding: 0;\n  line-height: 0;\n}\nion-content .resturant_img_wrap img {\n  width: 100%;\n  position: relative;\n  margin-top: -56px;\n  border-radius: 0 0 10px 10px;\n}\nion-content .res_content {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  padding: 10px 20px;\n  font-weight: 500;\n  margin-bottom: 50px;\n}\nion-content .res_content p {\n  margin-bottom: 16px;\n  font-size: 13px;\n  line-height: 1.5;\n  text-align: justify;\n}\nion-content .resturant_title_wrap {\n  width: calc(100% - 20px);\n  margin: -30px auto 0;\n  position: relative;\n  z-index: 9;\n  background: #fff;\n  padding: 10px 20px 20px;\n  border-radius: 10px;\n}\nion-content .resturant_title_wrap:after {\n  width: 96%;\n  height: 20px;\n  border-radius: 50%;\n  background: #fff;\n  content: \"\";\n  position: absolute;\n  left: 50%;\n  bottom: 100%;\n  transform: translate(-50%, 10.7px);\n  z-index: -1;\n}\nion-content .address {\n  font-size: 13px;\n  font-weight: 500;\n  color: #888;\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\nion-content .address img {\n  margin-right: 5px;\n}\nion-content .br-1 {\n  margin: 10px 0 10px;\n  background: #f8f8f8;\n}\nion-content .btn_group .btn-outlet {\n  width: calc(50% - 10px);\n  margin: 0;\n  font-size: 13px;\n  height: 36px;\n}\nion-footer .footer_item_end {\n  background-color: #dcc88d;\n  justify-content: center;\n  padding-right: 0;\n}\nion-footer .footer_item_end p {\n  font-family: \"Outfit\" !important;\n  text-transform: uppercase;\n}\n.star-icon {\n  color: #fff;\n}\n.rating_number {\n  display: inline-flex;\n  align-items: center;\n  padding: 4px 6px;\n  position: absolute;\n  top: 10px;\n  left: auto;\n  right: 10px;\n  z-index: 9;\n  background: #fff;\n  border-radius: 24px;\n}\n.rating_number img {\n  width: 16px;\n  height: auto;\n  margin: auto !important;\n  margin-right: 6px !important;\n}\n.rating_number p {\n  margin: 0;\n  font-size: 16px;\n}\n.resturant_title_wrap .content {\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3V0bGV0LW9yZGVyaW5nLW1lbnUvb3V0bGV0LW9yZGVyaW5nLW1lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0kseUJBQUE7RUFDQSx3Q0FBQTtBQUFSO0FBR0k7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQURSO0FBR1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQURaO0FBSUk7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFGUjtBQUtBO0VBQ0Msa0JBQUE7QUFGRDtBQUlDO0VBQ0ksZ0JBQUE7RUFDRyxzQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBRlI7QUFJUTtFQUNDLFdBQUE7RUFDRyxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7QUFGWjtBQU1JO0VBQ0ksd0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSlI7QUFNUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKWjtBQVFJO0VBQ0ksd0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU5SO0FBUVE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsV0FBQTtBQU5aO0FBVUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFSUjtBQVVRO0VBQ0ksaUJBQUE7QUFSWjtBQVlDO0VBQ0MsbUJBQUE7RUFDTSxtQkFBQTtBQVZSO0FBYVE7RUFDSSx1QkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQVhaO0FBZ0JDO0VBQ0kseUJBQUE7RUFDRyx1QkFBQTtFQUNBLGdCQUFBO0FBYlI7QUFlUTtFQUNJLGdDQUFBO0VBQ0EseUJBQUE7QUFiWjtBQWtCQTtFQUNJLFdBQUE7QUFmSjtBQWlCQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFkSjtBQWdCSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtBQWRSO0FBaUJJO0VBQ0ksU0FBQTtFQUNBLGVBQUE7QUFmUjtBQWtCQTtFQUNJLGVBQUE7QUFmSiIsImZpbGUiOiJzcmMvYXBwL291dGxldC1vcmRlcmluZy1tZW51L291dGxldC1vcmRlcmluZy1tZW51LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogOXB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiA5cHg7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDJweDtcbiAgICAgICAgLS1wYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICBoZWlnaHQ6IDM4cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgICAgICBcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA3cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDdweDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDogMnB4O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgbWluLXdpZHRoOiAzOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICB9XG59XG5pb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogI2ZmZjtcblxuXHQucmVzdHVyYW50X2ltZ193cmFwIHtcblx0ICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgIFx0d2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDEwcHg7XG4gICAgICAgIH1cblx0fVxuXG4gICAgLnJlc19jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJlc3R1cmFudF90aXRsZV93cmFwIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgICBtYXJnaW46IC0zMHB4IGF1dG8gMDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiA5O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHggMjBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICBib3R0b206IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLDEwLjdweCk7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGRyZXNzIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjb2xvcjogIzg4ODtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICB9XG5cblx0LmJyLTEge1xuXHRcdG1hcmdpbjogMTBweCAwIDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG5cdH1cbiAgICAuYnRuX2dyb3VwIHtcbiAgICAgICAgLmJ0bi1vdXRsZXQge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5pb24tZm9vdGVyIHtcblx0LmZvb3Rlcl9pdGVtX2VuZCB7XG5cdCAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGNjODhkO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk91dGZpdFwiICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG5cdH1cbn1cblxuLnN0YXItaWNvbntcbiAgICBjb2xvcjogI2ZmZjtcbn1cbi5yYXRpbmdfbnVtYmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHotaW5kZXg6IDk7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cbn1cbi5yZXN0dXJhbnRfdGl0bGVfd3JhcCAuY29udGVudCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/outlet-ordering-menu/outlet-ordering-menu.page.ts ***!
      \*******************************************************************/

    /*! exports provided: OutletOrderingMenuPage */

    /***/
    function srcAppOutletOrderingMenuOutletOrderingMenuPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OutletOrderingMenuPage", function () {
        return OutletOrderingMenuPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/user-details.service */
      "./src/app/services/user-details.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");

      var OutletOrderingMenuPage = /*#__PURE__*/function () {
        function OutletOrderingMenuPage(authService, navCtrl, userDetails, alertCtrl, helper, plt, callNumber) {
          _classCallCheck(this, OutletOrderingMenuPage);

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

        _createClass(OutletOrderingMenuPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.shopDetails = JSON.parse(localStorage.getItem('shopDetails'));
            console.log('shopDetails: ', this.shopDetails);
          }
        }, {
          key: "gotoOutLet",
          value: function gotoOutLet() {
            this.navCtrl.navigateForward('/outletmenu');
          }
        }, {
          key: "cart",
          value: function cart() {
            this.navCtrl.navigateForward('/cart');
          }
          /**
           * This method for calling outlet number
           * @param number
           */

        }, {
          key: "callNow",
          value: function callNow(number) {
            console.log(number);
            this.callNumber.callNumber(number, true).then(function (res) {
              return console.log('Launched dialer!', res);
            })["catch"](function (err) {
              return console.log('Error launching dialer', err);
            });
          }
        }, {
          key: "onScroll",
          value: function onScroll(event) {
            console.log(event);
            console.log('details-', event.detail);

            if (event && event.detail && event.detail.scrollTop) {
              var scrollTop = event.detail.scrollTop;
              this.showToolbar = scrollTop >= 225;
            }
          }
          /**
           * This method is for showing house rules
           */

        }, {
          key: "callHousingRules",
          value: function callHousingRules() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'House Rules',
                      message: this.shopDetails.house_rules,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }]);

        return OutletOrderingMenuPage;
      }();

      OutletOrderingMenuPage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_1__["UserDetailsService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_2__["HelperProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_6__["CallNumber"]
        }];
      };

      OutletOrderingMenuPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-outlet-ordering-menu',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./outlet-ordering-menu.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/outlet-ordering-menu/outlet-ordering-menu.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./outlet-ordering-menu.page.scss */
        "./src/app/outlet-ordering-menu/outlet-ordering-menu.page.scss"))["default"]]
      })], OutletOrderingMenuPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=outlet-ordering-menu-outlet-ordering-menu-module-es5.js.map