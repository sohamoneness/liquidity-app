(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js", "common", 0],
        "./ion-alert.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert.entry.js", "common", 1],
        "./ion-app_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8.entry.js", "common", 2],
        "./ion-avatar_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js", "common", 3],
        "./ion-back-button.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button.entry.js", "common", 4],
        "./ion-backdrop.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js", 5],
        "./ion-button_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2.entry.js", "common", 6],
        "./ion-card_5.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5.entry.js", "common", 7],
        "./ion-checkbox.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js", "common", 8],
        "./ion-chip.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip.entry.js", "common", 9],
        "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 10],
        "./ion-datetime_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js", "common", 11],
        "./ion-fab_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js", "common", 12],
        "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 13],
        "./ion-infinite-scroll_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js", 14],
        "./ion-input.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input.entry.js", "common", 15],
        "./ion-item-option_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js", "common", 16],
        "./ion-item_8.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8.entry.js", "common", 17],
        "./ion-loading.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading.entry.js", "common", 18],
        "./ion-menu_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js", "common", 19],
        "./ion-modal.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal.entry.js", "common", 20],
        "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 21],
        "./ion-popover.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover.entry.js", "common", 22],
        "./ion-progress-bar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js", "common", 23],
        "./ion-radio_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js", "common", 24],
        "./ion-range.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range.entry.js", "common", 25],
        "./ion-refresher_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js", "common", 26],
        "./ion-reorder_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js", "common", 27],
        "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 28],
        "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 29],
        "./ion-searchbar.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js", "common", 30],
        "./ion-segment_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js", "common", 31],
        "./ion-select_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3.entry.js", "common", 32],
        "./ion-slide_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js", 33],
        "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 34],
        "./ion-split-pane.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js", 35],
        "./ion-tab-bar_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js", "common", 36],
        "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 37],
        "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 38],
        "./ion-textarea.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea.entry.js", "common", 39],
        "./ion-toast.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast.entry.js", "common", 40],
        "./ion-toggle.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle.entry.js", "common", 41],
        "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n\n    <ion-menu contentId=\"main-content\" type=\"overlay\"  menuId=\"content\">\n      <ion-content>\n         <div class=\"menu__header\">\n          <a class=\"edit_button\" (click)=\"editProfile()\" href=\"javascript:void(0)\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-edit-2\"><path d=\"M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z\"></path></svg>\n          </a>\n          <figure class=\"user__image\">\n            <img src=\"assets/user.jpg\" />\n          </figure>\n          <figcaption>\n            <h6>{{user_name}}</h6>\n            <p>{{user_mail}}</p>\n          </figcaption>\n        </div>\n\n        <div class=\"wallet_area\">\n          <a class=\"wallet_btn\" (click)=\"wallet()\">\n            <svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" xmlns:svgjs=\"http://svgjs.com/svgjs\" width=\"512\" height=\"512\" x=\"0\" y=\"0\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 512 512\" xml:space=\"preserve\" class=\"\"><g><g fill-rule=\"evenodd\" clip-rule=\"evenodd\"><path d=\"M6.25 9A.75.75 0 0 1 7 8.25h6a.75.75 0 0 1 0 1.5H7A.75.75 0 0 1 6.25 9zM18.92 10.7c-.359 0-.675.14-.902.373l-.014.014c-.266.26-.415.63-.377 1.022v.009c.054.635.664 1.182 1.413 1.182h1.943a.276.276 0 0 0 .267-.27v-2.06a.276.276 0 0 0-.267-.27zm-1.97-.68a2.743 2.743 0 0 1 1.97-.82h2.107a1.777 1.777 0 0 1 1.723 1.77v2.06A1.777 1.777 0 0 1 21 14.8h-1.96c-1.41 0-2.777-1.03-2.907-2.553a2.759 2.759 0 0 1 .816-2.227z\" fill=\"\" data-original=\"\" class=\"\"></path><path d=\"M7 4.25c-.244 0-.476.017-.696.051l-.02.003c-1.108.14-1.978.613-2.574 1.313-.598.7-.96 1.676-.96 2.883v7c0 1.33.44 2.38 1.155 3.095S5.67 19.75 7 19.75h9c1.33 0 2.38-.44 3.095-1.155S20.25 16.83 20.25 15.5v-.7h-1.21c-1.41 0-2.778-1.03-2.907-2.553a2.758 2.758 0 0 1 .816-2.227 2.743 2.743 0 0 1 1.971-.82h1.33v-.7c0-1.215-.368-2.197-.975-2.9-.606-.702-1.49-1.175-2.612-1.305A3.849 3.849 0 0 0 16 4.25zm-.914-1.433c.297-.045.602-.067.914-.067h9c.27 0 .56.01.855.057 1.45.173 2.685.804 3.555 1.813.873 1.012 1.34 2.355 1.34 3.88v1.45a.75.75 0 0 1-.75.75h-2.08c-.36 0-.675.14-.903.373l-.013.014c-.266.26-.415.63-.377 1.022v.009c.053.635.664 1.182 1.413 1.182H21a.75.75 0 0 1 .75.75v1.45c0 1.67-.56 3.12-1.595 4.155S17.67 21.25 16 21.25H7c-1.67 0-3.12-.56-4.155-1.595S1.25 17.17 1.25 15.5v-7c0-1.513.458-2.848 1.318-3.857.86-1.008 2.08-1.643 3.518-1.826z\" fill=\"\" data-original=\"\" class=\"\"></path></g></g></svg>\n            Test Fund: <span class=\"currency\">$</span> {{wallet_balance | number : '.2-2'}}</a>\n        </div>\n\n        <!-- <a class=\"menu__button\" (click)=\"editProfile()\"><ion-icon name=\"pencil-sharp\" (click)=\"editProfile()\"></ion-icon> Edit Profile</a> -->\n          \n\n        <ion-list id=\"inbox-list\">\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-outline'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          \n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app>\n\n\n<!-- <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item> -->\n\n<!-- <ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"reveal\" side=\"start\" (ionWillOpen)=\"openMenu()\">\n      <ion-content>\n        <ion-card routerLink=\"/profile\" routerDirection=\"root\">\n          <ion-item class=\"name-card\">\n            <ion-avatar slot=\"start\">\n              <img src=\"assets/user.jpg\" />\n\n            </ion-avatar>\n            <ion-label>\n              <h6>{{user_name}}</h6>\n              <p>{{user_mail}}</p>\n            </ion-label>\n          </ion-item>\n        </ion-card>\n        \n        <ion-list id=\"inbox-list\" >\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of manuList; let i = index\">\n            <ion-item routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" routerLinkActive=\"selected\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n      </ion-content>\n      <ion-footer>\n        <ion-toolbar>\n          <ion-item (click)=\"logOut()\">\n            <ion-icon slot=\"start\" name=\"power\"></ion-icon>\n            <ion-label>\n              Log Out\n            </ion-label>\n          </ion-item>\n        </ion-toolbar>\n      </ion-footer>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app> -->\n\n\n\n<!-- <ion-app>\n  <ion-split-pane contentId=\"main-content\">\n\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n\n      <ion-content>\n\n        <ion-list id=\"inbox-list\">\n          <ion-list-header>cccInbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note>\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\"\n              detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list>\n\n      </ion-content>\n\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n</ion-app> -->";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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

      var routes = [{
        path: '',
        redirectTo: 'login-otp',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-login-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null,
          /*! ./login/login.module */
          "./src/app/login/login.module.ts")).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'folder/:id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | folder-folder-module */
          "folder-folder-module").then(__webpack_require__.bind(null,
          /*! ./folder/folder.module */
          "./src/app/folder/folder.module.ts")).then(function (m) {
            return m.FolderPageModule;
          });
        }
      }, {
        path: 'signup',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | signup-signup-module */
          [__webpack_require__.e("common"), __webpack_require__.e("signup-signup-module")]).then(__webpack_require__.bind(null,
          /*! ./signup/signup.module */
          "./src/app/signup/signup.module.ts")).then(function (m) {
            return m.SignupPageModule;
          });
        }
      }, {
        path: 'otpverification',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | otpverification-otpverification-module */
          [__webpack_require__.e("common"), __webpack_require__.e("otpverification-otpverification-module")]).then(__webpack_require__.bind(null,
          /*! ./otpverification/otpverification.module */
          "./src/app/otpverification/otpverification.module.ts")).then(function (m) {
            return m.OtpverificationPageModule;
          });
        }
      }, {
        path: 'main',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | main-main-module */
          "main-main-module").then(__webpack_require__.bind(null,
          /*! ./main/main.module */
          "./src/app/main/main.module.ts")).then(function (m) {
            return m.MainPageModule;
          });
        }
      }, {
        path: 'orders',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orders-orders-module */
          "orders-orders-module").then(__webpack_require__.bind(null,
          /*! ./orders/orders.module */
          "./src/app/orders/orders.module.ts")).then(function (m) {
            return m.OrdersPageModule;
          });
        }
      }, {
        path: 'ordersummary',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | ordersummary-ordersummary-module */
          "ordersummary-ordersummary-module").then(__webpack_require__.bind(null,
          /*! ./ordersummary/ordersummary.module */
          "./src/app/ordersummary/ordersummary.module.ts")).then(function (m) {
            return m.OrdersummaryPageModule;
          });
        }
      }, {
        path: 'orderdetails',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orderdetails-orderdetails-module */
          "orderdetails-orderdetails-module").then(__webpack_require__.bind(null,
          /*! ./orderdetails/orderdetails.module */
          "./src/app/orderdetails/orderdetails.module.ts")).then(function (m) {
            return m.OrderdetailsPageModule;
          });
        }
      }, {
        path: 'mywallet',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | mywallet-mywallet-module */
          "mywallet-mywallet-module").then(__webpack_require__.bind(null,
          /*! ./mywallet/mywallet.module */
          "./src/app/mywallet/mywallet.module.ts")).then(function (m) {
            return m.MywalletPageModule;
          });
        }
      }, {
        path: 'homenew',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | homenew-homenew-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("common"), __webpack_require__.e("homenew-homenew-module")]).then(__webpack_require__.bind(null,
          /*! ./homenew/homenew.module */
          "./src/app/homenew/homenew.module.ts")).then(function (m) {
            return m.HomenewPageModule;
          });
        }
      }, {
        path: 'detectlocation',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | detectlocation-detectlocation-module */
          "detectlocation-detectlocation-module").then(__webpack_require__.bind(null,
          /*! ./detectlocation/detectlocation.module */
          "./src/app/detectlocation/detectlocation.module.ts")).then(function (m) {
            return m.DetectlocationPageModule;
          });
        }
      }, {
        path: 'orderredeemed',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orderredeemed-orderredeemed-module */
          "orderredeemed-orderredeemed-module").then(__webpack_require__.bind(null,
          /*! ./orderredeemed/orderredeemed.module */
          "./src/app/orderredeemed/orderredeemed.module.ts")).then(function (m) {
            return m.OrderredeemedPageModule;
          });
        }
      }, {
        path: 'outlethome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | outlethome-outlethome-module */
          "outlethome-outlethome-module").then(__webpack_require__.bind(null,
          /*! ./outlethome/outlethome.module */
          "./src/app/outlethome/outlethome.module.ts")).then(function (m) {
            return m.OutlethomePageModule;
          });
        }
      }, {
        path: 'outlethomecompare',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | outlethomecompare-outlethomecompare-module */
          "outlethomecompare-outlethomecompare-module").then(__webpack_require__.bind(null,
          /*! ./outlethomecompare/outlethomecompare.module */
          "./src/app/outlethomecompare/outlethomecompare.module.ts")).then(function (m) {
            return m.OutlethomecomparePageModule;
          });
        }
      }, {
        path: 'vaulthome',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | vaulthome-vaulthome-module */
          "vaulthome-vaulthome-module").then(__webpack_require__.bind(null,
          /*! ./vaulthome/vaulthome.module */
          "./src/app/vaulthome/vaulthome.module.ts")).then(function (m) {
            return m.VaulthomePageModule;
          });
        }
      }, {
        path: 'orderdetailsredeemed',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | orderdetailsredeemed-orderdetailsredeemed-module */
          "orderdetailsredeemed-orderdetailsredeemed-module").then(__webpack_require__.bind(null,
          /*! ./orderdetailsredeemed/orderdetailsredeemed.module */
          "./src/app/orderdetailsredeemed/orderdetailsredeemed.module.ts")).then(function (m) {
            return m.OrderdetailsredeemedPageModule;
          });
        }
      }, {
        path: 'vaultselected',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vaultselected-vaultselected-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("common"), __webpack_require__.e("vaultselected-vaultselected-module")]).then(__webpack_require__.bind(null,
          /*! ./vaultselected/vaultselected.module */
          "./src/app/vaultselected/vaultselected.module.ts")).then(function (m) {
            return m.VaultselectedPageModule;
          });
        }
      }, {
        path: 'vaultcart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | vaultcart-vaultcart-module */
          "vaultcart-vaultcart-module").then(__webpack_require__.bind(null,
          /*! ./vaultcart/vaultcart.module */
          "./src/app/vaultcart/vaultcart.module.ts")).then(function (m) {
            return m.VaultcartPageModule;
          });
        }
      }, {
        path: 'cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | cart-cart-module */
          "cart-cart-module").then(__webpack_require__.bind(null,
          /*! ./cart/cart.module */
          "./src/app/cart/cart.module.ts")).then(function (m) {
            return m.CartPageModule;
          });
        }
      }, {
        path: 'vaultcompare',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vaultcompare-vaultcompare-module */
          [__webpack_require__.e("common"), __webpack_require__.e("vaultcompare-vaultcompare-module")]).then(__webpack_require__.bind(null,
          /*! ./vaultcompare/vaultcompare.module */
          "./src/app/vaultcompare/vaultcompare.module.ts")).then(function (m) {
            return m.VaultcomparePageModule;
          });
        }
      }, {
        path: 'vaultbalance',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vaultbalance-vaultbalance-module */
          [__webpack_require__.e("common"), __webpack_require__.e("vaultbalance-vaultbalance-module")]).then(__webpack_require__.bind(null,
          /*! ./vaultbalance/vaultbalance.module */
          "./src/app/vaultbalance/vaultbalance.module.ts")).then(function (m) {
            return m.VaultbalancePageModule;
          });
        }
      }, {
        path: 'editprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | editprofile-editprofile-module */
          "editprofile-editprofile-module").then(__webpack_require__.bind(null,
          /*! ./editprofile/editprofile.module */
          "./src/app/editprofile/editprofile.module.ts")).then(function (m) {
            return m.EditprofilePageModule;
          });
        }
      }, {
        path: 'liquororderhistroy',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | liquororderhistroy-liquororderhistroy-module */
          [__webpack_require__.e("common"), __webpack_require__.e("liquororderhistroy-liquororderhistroy-module")]).then(__webpack_require__.bind(null,
          /*! ./liquororderhistroy/liquororderhistroy.module */
          "./src/app/liquororderhistroy/liquororderhistroy.module.ts")).then(function (m) {
            return m.LiquororderhistroyPageModule;
          });
        }
      }, {
        path: 'myprofile',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | myprofile-myprofile-module */
          "myprofile-myprofile-module").then(__webpack_require__.bind(null,
          /*! ./myprofile/myprofile.module */
          "./src/app/myprofile/myprofile.module.ts")).then(function (m) {
            return m.MyprofilePageModule;
          });
        }
      }, {
        path: 'liquororderhistroy-details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | liquororderhistroy-details-liquororderhistroy-details-module */
          [__webpack_require__.e("common"), __webpack_require__.e("liquororderhistroy-details-liquororderhistroy-details-module")]).then(__webpack_require__.bind(null,
          /*! ./liquororderhistroy-details/liquororderhistroy-details.module */
          "./src/app/liquororderhistroy-details/liquororderhistroy-details.module.ts")).then(function (m) {
            return m.LiquororderhistroyDetailsPageModule;
          });
        }
      }, {
        path: 'vault-redeem/:vaultOrderId',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vault-redeem-vault-redeem-module */
          [__webpack_require__.e("common"), __webpack_require__.e("vault-redeem-vault-redeem-module")]).then(__webpack_require__.bind(null,
          /*! ./vault-redeem/vault-redeem.module */
          "./src/app/vault-redeem/vault-redeem.module.ts")).then(function (m) {
            return m.VaultRedeemPageModule;
          });
        }
      }, {
        path: 'vault-order-history',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | vault-order-history-vault-order-history-module */
          [__webpack_require__.e("common"), __webpack_require__.e("vault-order-history-vault-order-history-module")]).then(__webpack_require__.bind(null,
          /*! ./vault-order-history/vault-order-history.module */
          "./src/app/vault-order-history/vault-order-history.module.ts")).then(function (m) {
            return m.VaultOrderHistoryPageModule;
          });
        }
      }, {
        path: 'order-success',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | order-success-order-success-module */
          "order-success-order-success-module").then(__webpack_require__.bind(null,
          /*! ./order-success/order-success.module */
          "./src/app/order-success/order-success.module.ts")).then(function (m) {
            return m.OrderSuccessPageModule;
          });
        }
      }, {
        path: 'slide',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | slide-slide-module */
          "slide-slide-module").then(__webpack_require__.bind(null,
          /*! ./slide/slide.module */
          "./src/app/slide/slide.module.ts")).then(function (m) {
            return m.SlidePageModule;
          });
        }
      }, {
        path: 'food/cart',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | outlethome-food-item-cart-food-item-cart-module */
          "food-item-cart-food-item-cart-module").then(__webpack_require__.bind(null,
          /*! ./outlethome/food-item-cart/food-item-cart.module */
          "./src/app/outlethome/food-item-cart/food-item-cart.module.ts")).then(function (m) {
            return m.FoodItemCartPageModule;
          });
        }
      }, {
        path: 'outlet-ordering-menu',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | outlet-ordering-menu-outlet-ordering-menu-module */
          "outlet-ordering-menu-outlet-ordering-menu-module").then(__webpack_require__.bind(null,
          /*! ./outlet-ordering-menu/outlet-ordering-menu.module */
          "./src/app/outlet-ordering-menu/outlet-ordering-menu.module.ts")).then(function (m) {
            return m.OutletOrderingMenuPageModule;
          });
        }
      }, {
        path: 'terms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | terms-terms-module */
          "terms-terms-module").then(__webpack_require__.bind(null,
          /*! ./terms/terms.module */
          "./src/app/terms/terms.module.ts")).then(function (m) {
            return m.TermsPageModule;
          });
        }
      }, {
        path: 'faq',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | faq-faq-module */
          "faq-faq-module").then(__webpack_require__.bind(null,
          /*! ./faq/faq.module */
          "./src/app/faq/faq.module.ts")).then(function (m) {
            return m.FaqPageModule;
          });
        }
      }, {
        path: 'vault-order-details',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | vault-order-details-vault-order-details-module */
          "vault-order-details-vault-order-details-module").then(__webpack_require__.bind(null,
          /*! ./vault-order-details/vault-order-details.module */
          "./src/app/vault-order-details/vault-order-details.module.ts")).then(function (m) {
            return m.VaultOrderDetailsPageModule;
          });
        }
      }, {
        path: 'privacy',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | privacy-privacy-module */
          "privacy-privacy-module").then(__webpack_require__.bind(null,
          /*! ./privacy/privacy.module */
          "./src/app/privacy/privacy.module.ts")).then(function (m) {
            return m.PrivacyPageModule;
          });
        }
      }, {
        path: 'general-terms',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | general-terms-general-terms-module */
          "general-terms-general-terms-module").then(__webpack_require__.bind(null,
          /*! ./general-terms/general-terms.module */
          "./src/app/general-terms/general-terms.module.ts")).then(function (m) {
            return m.GeneralTermsPageModule;
          });
        }
      }, {
        path: 'wallet',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | wallet-wallet-module */
          [__webpack_require__.e("common"), __webpack_require__.e("wallet-wallet-module")]).then(__webpack_require__.bind(null,
          /*! ./wallet/wallet.module */
          "./src/app/wallet/wallet.module.ts")).then(function (m) {
            return m.WalletPageModule;
          });
        }
      }, {
        path: 'vault-order-success',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | vault-order-success-vault-order-success-module */
          "vault-order-success-vault-order-success-module").then(__webpack_require__.bind(null,
          /*! ./vault-order-success/vault-order-success.module */
          "./src/app/vault-order-success/vault-order-success.module.ts")).then(function (m) {
            return m.VaultOrderSuccessPageModule;
          });
        }
      }, {
        path: 'forgot-pass',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | forgot-pass-forgot-pass-module */
          "forgot-pass-forgot-pass-module").then(__webpack_require__.bind(null,
          /*! ./forgot-pass/forgot-pass.module */
          "./src/app/forgot-pass/forgot-pass.module.ts")).then(function (m) {
            return m.ForgotPassPageModule;
          });
        }
      }, {
        path: 'notification',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | notification-notification-module */
          [__webpack_require__.e("common"), __webpack_require__.e("notification-notification-module")]).then(__webpack_require__.bind(null,
          /*! ./notification/notification.module */
          "./src/app/notification/notification.module.ts")).then(function (m) {
            return m.NotificationPageModule;
          });
        }
      }, {
        path: 'outletmenu',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | outletmenu-outletmenu-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("outletmenu-outletmenu-module")]).then(__webpack_require__.bind(null,
          /*! ./outletmenu/outletmenu.module */
          "./src/app/outletmenu/outletmenu.module.ts")).then(function (m) {
            return m.OutletmenuPageModule;
          });
        }
      }, {
        path: 'compare',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | compare-compare-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("compare-compare-module")]).then(__webpack_require__.bind(null,
          /*! ./compare/compare.module */
          "./src/app/compare/compare.module.ts")).then(function (m) {
            return m.ComparePageModule;
          });
        }
      }, {
        path: 'event',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | event-event-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("event-event-module")]).then(__webpack_require__.bind(null,
          /*! ./event/event.module */
          "./src/app/event/event.module.ts")).then(function (m) {
            return m.EventPageModule;
          });
        }
      }, {
        path: 'eventdetails',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | eventdetails-eventdetails-module */
          "eventdetails-eventdetails-module").then(__webpack_require__.bind(null,
          /*! ./eventdetails/eventdetails.module */
          "./src/app/eventdetails/eventdetails.module.ts")).then(function (m) {
            return m.EventdetailsPageModule;
          });
        }
      }, {
        path: 'search',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | search-search-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("search-search-module")]).then(__webpack_require__.bind(null,
          /*! ./search/search.module */
          "./src/app/search/search.module.ts")).then(function (m) {
            return m.SearchPageModule;
          });
        }
      }, {
        path: 'searchresult',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | searchresult-searchresult-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("searchresult-searchresult-module")]).then(__webpack_require__.bind(null,
          /*! ./searchresult/searchresult.module */
          "./src/app/searchresult/searchresult.module.ts")).then(function (m) {
            return m.SearchresultPageModule;
          });
        }
      }, {
        path: 'login-otp',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | login-otp-login-otp-module */
          [__webpack_require__.e("common"), __webpack_require__.e("login-otp-login-otp-module")]).then(__webpack_require__.bind(null,
          /*! ./login-otp/login-otp.module */
          "./src/app/login-otp/login-otp.module.ts")).then(function (m) {
            return m.LoginOtpPageModule;
          });
        }
      }, {
        path: 'filter-distance-result',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | filter-distance-result-filter-distance-result-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("filter-distance-result-filter-distance-result-module")]).then(__webpack_require__.bind(null,
          /*! ./filter-distance-result/filter-distance-result.module */
          "./src/app/filter-distance-result/filter-distance-result.module.ts")).then(function (m) {
            return m.FilterDistanceResultPageModule;
          });
        }
      }, {
        path: 'new-account',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | new-account-new-account-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("new-account-new-account-module")]).then(__webpack_require__.bind(null,
          /*! ./new-account/new-account.module */
          "./src/app/new-account/new-account.module.ts")).then(function (m) {
            return m.NewAccountPageModule;
          });
        }
      }, {
        path: 'favourite',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | favourite-favourite-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("favourite-favourite-module")]).then(__webpack_require__.bind(null,
          /*! ./favourite/favourite.module */
          "./src/app/favourite/favourite.module.ts")).then(function (m) {
            return m.FavouritePageModule;
          });
        }
      }, {
        path: 'watch-list-store',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | watch-list-store-watch-list-store-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("watch-list-store-watch-list-store-module")]).then(__webpack_require__.bind(null,
          /*! ./watch-list-store/watch-list-store.module */
          "./src/app/watch-list-store/watch-list-store.module.ts")).then(function (m) {
            return m.WatchListStorePageModule;
          });
        }
      }, {
        path: 'watchlist-fav',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() | watchlist-fav-watchlist-fav-module */
          [__webpack_require__.e("default~compare-compare-module~event-event-module~favourite-favourite-module~filter-distance-result-~5a4332da"), __webpack_require__.e("watchlist-fav-watchlist-fav-module")]).then(__webpack_require__.bind(null,
          /*! ./watchlist-fav/watchlist-fav.module */
          "./src/app/watchlist-fav/watchlist-fav.module.ts")).then(function (m) {
            return m.WatchlistFavPageModule;
          });
        }
      }];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "./src/app/app.component.scss":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: url('menu_bg.png') left center no-repeat !important;\n  position: relative;\n}\n\n.wallet_area {\n  width: 100%;\n  display: block;\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  padding: 0 20px 30px;\n}\n\n.wallet_area .wallet_btn {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  width: 100%;\n  border-radius: 12px;\n  padding: 10px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n}\n\n.wallet_area .wallet_btn svg {\n  width: 30px;\n  height: 30px;\n  fill: #dcc88d;\n  margin-right: 10px;\n}\n\n.wallet_area .wallet_btn span {\n  margin-left: auto;\n}\n\n.menu__header {\n  background: rgba(0, 0, 0, 0.7);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  padding: 30px 20px;\n  box-sizing: border-box;\n  color: #ffffff;\n  text-align: center;\n  position: relative;\n  z-index: 999;\n  display: flex;\n  align-items: center;\n}\n\n.menu__header h6 {\n  font-size: 16px;\n  margin: 0;\n  text-align: left;\n}\n\n.menu__header p {\n  margin: 0;\n  font-size: 14px;\n}\n\n.menu__header .edit_button {\n  position: absolute;\n  top: 10px;\n  left: auto;\n  right: 10px;\n}\n\n.menu__header .edit_button svg {\n  width: 20px;\n  height: 20px;\n}\n\n.menu__header .menu__button {\n  display: inline-block;\n  padding: 0 10px;\n  padding-top: 4px;\n  vertical-align: middle;\n  margin: 0 5px;\n  background-color: #dcc88d;\n  color: #000;\n  border-radius: 20px;\n  text-decoration: none;\n  font-size: 10px;\n  line-height: 20px;\n  font-weight: 600;\n  text-transform: uppercase;\n}\n\n.menu__header .user__image {\n  display: block;\n  border-radius: 50%;\n  width: 60px;\n  height: 60px;\n  margin: 0 20px 0 0;\n  position: relative;\n}\n\n.menu__header .user__image:before {\n  width: 66px;\n  height: 66px;\n  border-radius: 50%;\n  border: 1px solid #dcc88d;\n  position: absolute;\n  pointer-events: none;\n  content: \"\";\n  top: -4px;\n  left: -4px;\n}\n\n.menu__header .user__image img {\n  border-radius: 50%;\n  max-width: 100%;\n}\n\n#inbox-list ion-icon {\n  color: #dcc88d;\n}\n\n#inbox-list ion-label {\n  font-size: 16px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdIRTtFQUNFLGlFQUFBO0VBQ0Esa0JBQUE7QUF2SEo7O0FBdUlBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxvQkFBQTtBQXBJRjs7QUFzSUU7RUFDRSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFwSUo7O0FBc0lJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFwSU47O0FBdUlJO0VBQ0UsaUJBQUE7QUFySU47O0FBMElBO0VBQ0UsOEJBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQXZJRjs7QUF5SUU7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBdklKOztBQXlJRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBdklKOztBQTBJRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBeElKOztBQTBJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBeElOOztBQTRJRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUExSUo7O0FBNklFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBM0lKOztBQTZJSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUEzSU47O0FBNklJO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0FBM0lOOztBQWlKRTtFQUNFLGNBQUE7QUE5SUo7O0FBZ0pFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBOUlKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuLy8gICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbi8vICAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4vLyAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbi8vICAgLS1wYWRkaW5nLXRvcDogMjBweDtcbi8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuLy8gICBwYWRkaW5nOiAyMHB4IDA7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbi8vICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuLy8gaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuLy8gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuLy8gICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbi8vIH1cblxuLy8gaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuLy8gICBmb250LXNpemU6IDIycHg7XG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgbWFyZ2luLWJvdHRvbTogMThweDtcbi8vICAgY29sb3I6ICM3NTc1NzU7XG4vLyAgIG1pbi1oZWlnaHQ6IDI2cHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbi8vICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuLy8gICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuLy8gICBib3JkZXItcmFkaXVzOiA0cHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbi8vICAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4vLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbi8vICAgY29sb3I6ICM2NjY2NjY7XG4vLyAgIHdpZHRoOiAxOHB4O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4vLyAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgIGZvbnQtc2l6ZTogMTRweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbi8vICAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbi8vICAgcGFkZGluZzogMjBweCAwIDAgMDtcbi8vIH1cblxuLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbi8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4vLyAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4vLyB9XG5cbi8vIGlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4vLyAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbi8vICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbi8vICAgLS1taW4taGVpZ2h0OiA1MHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuLy8gICBmb250LXNpemU6IDI0cHg7XG4vLyAgIGNvbG9yOiAjNzM4NDlhO1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbi8vICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuLy8gaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbi8vICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuLy8gICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuLy8gfVxuXG4vLyBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuLy8gICBtYXJnaW4tYm90dG9tOiA4cHg7XG4vLyB9XG5cbi8vIGlvbi1ub3RlIHtcbi8vICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuLy8gICBmb250LXNpemU6IDE2cHg7XG5cbi8vICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuLy8gfVxuXG4vLyBpb24taXRlbS5zZWxlY3RlZCB7XG4vLyAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vIH1cblxuaW9uLW1lbnUge1xuICBpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL21lbnVfYmcucG5nKSBsZWZ0IGNlbnRlciBuby1yZXBlYXQgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAvLyAmOmJlZm9yZSB7XG4gICAgLy8gICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjUpO1xuICAgIC8vICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgLy8gICBjb250ZW50OiAnJztcbiAgICAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvLyAgIHRvcDogMDtcbiAgICAvLyAgIGxlZnQ6IDA7XG4gICAgLy8gICB3aWR0aDogMTAwJTtcbiAgICAvLyAgIGhlaWdodDogMTAwJTtcbiAgICAvLyAgIHotaW5kZXg6IDE7XG4gICAgLy8gfVxuICB9XG59XG5cbi53YWxsZXRfYXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYmFja2dyb3VuZDogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMC43KTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDVweCk7XG4gIHBhZGRpbmc6IDAgMjBweCAzMHB4O1xuXG4gIC53YWxsZXRfYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogI2ZmZmZmZiwgJGFscGhhOiAwLjEpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuMyk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHN2ZyB7XG4gICAgICB3aWR0aDogMzBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGZpbGw6ICNkY2M4OGQ7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICB9XG4gIH1cbn1cblxuLm1lbnVfX2hlYWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAjMDAwMDAwLCAkYWxwaGE6IDAuNyk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cig1cHgpO1xuICBwYWRkaW5nOiAzMHB4IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogOTk5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gIGg2IHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5lZGl0X2J1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICBsZWZ0OiBhdXRvO1xuICAgIHJpZ2h0OiAxMHB4O1xuXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tZW51X19idXR0b24ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbjogMCA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjYzg4ZDtcbiAgICBjb2xvcjogIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgLnVzZXJfX2ltYWdlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICB3aWR0aDogNjZweDtcbiAgICAgIGhlaWdodDogNjZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkY2M4OGQ7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgdG9wOiAtNHB4O1xuICAgICAgbGVmdDogLTRweDtcbiAgICB9XG4gICAgaW1nIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuI2luYm94LWxpc3Qge1xuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNkY2M4OGQ7XG4gIH1cbiAgaW9uLWxhYmVsIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/services/user-details.service */
      "./src/app/services/user-details.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      var AppComponent = /*#__PURE__*/function () {
        // currentPageTitle = 'Dashboard';
        // appPages = [
        //   {
        //     title: 'Dashboard',
        //     url: '',
        //     icon: 'easel'
        //   },
        //   {
        //     title: 'Timeline',
        //     url: '/timeline',
        //     icon: 'film'
        //   },
        //   {
        //     title: 'Settings',
        //     url: '/settings',
        //     icon: 'settings'
        //   }
        // ];
        function AppComponent(platform, splashScreen, statusBar, alertCtrl, navCtrl, auth, router, helper, _location, userDetails, geolocation) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.splashScreen = splashScreen;
          this.statusBar = statusBar;
          this.alertCtrl = alertCtrl;
          this.navCtrl = navCtrl;
          this.auth = auth;
          this.router = router;
          this.helper = helper;
          this._location = _location;
          this.userDetails = userDetails;
          this.geolocation = geolocation;
          this.selectedIndex = 0;
          this.user_name = [];
          this.user_mail = [];
          this.user_mobile = [];
          this.user = [];
          this.wallet_balance = [];
          this.labels = [];
          this.latitude = '';
          this.longitude = '';
          this.appPages = [{
            title: 'Home',
            url: '/homenew',
            icon: 'home'
          }, {
            title: 'Liquidity Vault',
            url: '/vaulthome',
            icon: 'shield'
          }, {
            title: 'My Profile',
            url: '/myprofile',
            icon: 'person'
          }, {
            title: 'Order History',
            url: '/liquororderhistroy',
            icon: 'time'
          }, {
            title: 'Test Funds',
            url: '/wallet',
            icon: 'wallet'
          }, {
            title: 'Notification',
            url: '/notification',
            icon: 'notifications'
          }, {
            title: 'Events',
            url: '/event',
            icon: 'calendar'
          }, {
            title: 'WatchList',
            url: '/watch-list-store',
            icon: 'bookmark'
          }, {
            title: 'Favourite List',
            url: '/favourite',
            icon: 'heart'
          }, {
            title: 'Help',
            url: '/homenew',
            icon: 'help-buoy'
          }, {
            title: 'Privacy Policy',
            url: '/privacy',
            icon: 'lock-closed'
          }, {
            title: 'Terms of Use',
            url: '/terms',
            icon: 'document-text'
          }, {
            title: 'General Terms & Conditions',
            url: '/general-terms',
            icon: 'newspaper'
          }, {
            title: 'Faq',
            url: '/faq',
            icon: 'help-circle'
          }, {
            title: 'Logout',
            url: '',
            icon: 'power'
          }];
          this.initializeApp();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this = this;

            this.platform.ready().then(function () {
              _this.statusBar.styleDefault();

              _this.splashScreen.hide();

              if (localStorage.getItem("userDetails")) {
                _this.user = JSON.parse(localStorage.getItem('userDetails'));
                console.log(_this.user);
                _this.user_mail = _this.user.email;
                _this.user_name = _this.user.name;
                _this.user_mobile = _this.user.mobile; // this.wallet_balance=this.user.wallet_balance;
                // const id = JSON.parse(localStorage.getItem("userDetails")).id;
                // this.mySubscription = interval(5000).subscribe((x => {
                //   this.userDetails.fetchWalletTransactions(id).then((res) => {
                //     // console.log("call_function", res)
                //     if (res["status"] == "1") {
                //       this.wallet_balance = res["wallet_balance"];
                //       localStorage.setItem('wallet_balance', this.wallet_balance);
                //     } else {
                //       this.helper.showErrorCustom(res["message"])
                //     }
                //   }).catch((err) => {
                //     this.helper.showErrorCustom('Please try again later')
                //   })
                // }));

                /**
                 * call this to get recent location of a user
                 */
                // this.geolocation.getCurrentPosition().then((resp) => {
                //   this.latitude = resp.coords.latitude;
                //   this.longitude = resp.coords.longitude;
                //   let currentAddress = {
                //     lat : this.latitude,
                //     long : this.longitude
                //   }
                //   //****  current position is saved in localStorage  **** //
                //   localStorage.setItem('currentAddress',JSON.stringify(currentAddress))
                // }).catch((error) => {
                //   console.log('Error getting location', error);
                // });

                _this.navCtrl.navigateRoot('/homenew');
              } else {
                console.log("i am in");

                _this.router.navigate(['/slide']);
              }
            });
            this.platform.backButton.subscribeWithPriority(10, function (processNextHandler) {
              console.log('Back press handler!');

              if (_this._location.isCurrentPathEqualTo('/homenew')) {
                console.log('Show Exit Alert!');

                _this.showExitConfirm();

                processNextHandler();
              } else {
                console.log('Navigate to back page');

                _this._location.back();
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var path = window.location.pathname.split('folder/')[1];

            if (path !== undefined) {
              this.selectedIndex = this.appPages.findIndex(function (page) {
                return page.title.toLowerCase() === path.toLowerCase();
              });
            }
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {
            var _this2 = this;

            var id = JSON.parse(localStorage.getItem("userDetails")).id;
            this.mySubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["interval"])(5000).subscribe(function (x) {
              _this2.userDetails.fetchWalletTransactions(id).then(function (res) {
                // console.log("call_function", res)
                if (res["status"] == "1") {
                  _this2.wallet_balance = res["wallet_balance"];
                  localStorage.setItem('wallet_balance', _this2.wallet_balance);
                } else {
                  _this2.helper.showErrorCustom(res["message"]);
                }
              })["catch"](function (err) {
                _this2.helper.showErrorCustom('Please try again later');
              });
            });
          }
        }, {
          key: "editProfile",
          value: function editProfile() {
            console.log("myprofile");
            this.navCtrl.navigateRoot('/myprofile');
            this.router.navigate(['/myprofile']);
          }
        }, {
          key: "wallet",
          value: function wallet() {
            console.log("wallet");
            this.navCtrl.navigateRoot('/wallet');
            this.router.navigate(['/wallet']);
          }
        }, {
          key: "showExitConfirm",
          value: function showExitConfirm() {
            this.alertCtrl.create({
              header: 'Liquidity App',
              message: 'Do you want to close the app?',
              backdropDismiss: false,
              buttons: [{
                text: 'Stay',
                role: 'cancel',
                handler: function handler() {
                  console.log('Application exit prevented!');
                }
              }, {
                text: 'Exit',
                handler: function handler() {
                  navigator['app'].exitApp();
                }
              }]
            }).then(function (alert) {
              alert.present();
            });
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            console.log('click'); // this.list=JSON.parse(localStorage.getItem('userInfo'));
            // this.profilelist(this.list._id);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
        }, {
          type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }, {
          type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _services_helper_service__WEBPACK_IMPORTED_MODULE_5__["HelperProvider"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
        }, {
          type: src_app_services_user_details_service__WEBPACK_IMPORTED_MODULE_9__["UserDetailsService"]
        }, {
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_11__["Geolocation"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./app.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./app.component.scss */
        "./src/app/app.component.scss"))["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/fire */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _services_helper_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic-native/unique-device-id/ngx */
      "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic-native/call-number/ngx */
      "./node_modules/@ionic-native/call-number/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_11__["AngularFirestoreModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_13__["AngularFireStorageModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"]],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
        }, _services_helper_service__WEBPACK_IMPORTED_MODULE_14__["HelperProvider"], _angular_common__WEBPACK_IMPORTED_MODULE_15__["DatePipe"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_18__["UniqueDeviceID"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_19__["CallNumber"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_20__["Geolocation"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "./src/app/services/authentication.service.ts":
    /*!****************************************************!*\
      !*** ./src/app/services/authentication.service.ts ***!
      \****************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/auth */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(plt, afAuth, afs, loadingController) {
          var _this3 = this;

          _classCallCheck(this, AuthenticationService);

          this.plt = plt;
          this.afAuth = afAuth;
          this.afs = afs;
          this.loadingController = loadingController;
          this.authenticationState = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
          this.authState = null;
          this.id = 0;
          this.plt.ready().then(function () {
            _this3.afAuth.authState.subscribe(function (auth) {
              _this3.authState = auth; // console.log('Authservice AuthState : ', this.authState.email);

              localStorage.setItem("mail", _this3.authState.email);

              _this3.authenticationState.next(auth !== null);
            });
          });
        }

        _createClass(AuthenticationService, [{
          key: "isAuthenticated",
          value: function isAuthenticated() {
            return this.authenticationState.value;
          }
        }, {
          key: "currentAuthState",
          get: function get() {
            return this.afAuth.authState;
          }
          /**
           * @function{{signUpWithEmail}}
           * @description{{Sign up with email password}}
           */

        }, {
          key: "emailSignUp",
          value: function emailSignUp(body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var _this4 = this;

              var loading;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context.sent;
                    _context.next = 5;
                    return loading.present();

                  case 5:
                    return _context.abrupt("return", new Promise(function (resolve, reject) {
                      _this4.afAuth.createUserWithEmailAndPassword(body.email, body.createPassword).then(function (res) {
                        loading.dismiss();
                        _this4.authState = res.user;
                        _this4.id = new Date().getTime();

                        _this4.afs.doc("/userProfile/".concat(_this4.authState.uid)).set({
                          email: body.email,
                          id: _this4.authState.uid,
                          createdAt: +new Date(),
                          name: body.name,
                          mobile: body.mobile
                        }, {
                          merge: true
                        });

                        resolve({
                          status: 1,
                          user: _this4.authState
                        });
                      })["catch"](function (error) {
                        // return { status: 0, error: error };
                        loading.dismiss();
                        resolve({
                          status: 0,
                          error: error
                        });
                      });
                    }));

                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
          /**
           * @function{{loginWithEmail}}
           * @description{{Login with email password}}
           */

        }, {
          key: "loginWithEmail",
          value: function loginWithEmail(email, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _this5 = this;

              var loading;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...'
                    });

                  case 2:
                    loading = _context2.sent;
                    _context2.next = 5;
                    return loading.present();

                  case 5:
                    return _context2.abrupt("return", this.afAuth.signInWithEmailAndPassword(email, password).then(function (res) {
                      // console.log(res);
                      loading.dismiss();
                      _this5.authState = res.user;
                      return {
                        status: 1,
                        user: res.user
                      };
                    })["catch"](function (error) {
                      loading.dismiss();
                      return {
                        status: 0,
                        error: error
                      };
                    }));

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getUserId",
          value: function getUserId() {
            if (this.authState) {
              // console.log("userId",this.authState.uid)
              return this.authState.uid;
            } else {
              return null;
            }
          }
        }, {
          key: "getUserById",
          value: function getUserById(id) {
            return this.afs.collection("userProfile").doc(id).valueChanges();
          } // =======================================
          // Sends email allowing user to reset password

        }, {
          key: "resetPassword",
          value: function resetPassword(email) {
            return this.afAuth.sendPasswordResetEmail(email).then(function (res) {
              return {
                status: 1,
                res: res
              };
            })["catch"](function (error) {
              return {
                status: 0,
                error: error
              };
            });
          } // =======================================
          // Sign Out

        }, {
          key: "signOut",
          value: function signOut() {
            return this.afAuth.signOut();
          } // =======================================
          // Add Profile Image

        }, {
          key: "addProfileImage",
          value: function addProfileImage(url) {
            var id = this.getUserId();
            return this.afs.doc("/userProfile/".concat(id)).update({
              profileImage: url
            }).then(function (res) {
              return {
                status: 1,
                data: res
              };
            })["catch"](function (err) {
              return {
                status: 0,
                error: err
              };
            });
          } // googleAuth(token) {
          //   let gplusCredential = firebase.auth.GoogleAuthProvider.credential(token);
          //   return this.afAuth.signInAndRetrieveDataWithCredential(gplusCredential);
          // }
          // facebookAuth(token) {
          //   let facebookCredential = firebase.auth.FacebookAuthProvider.credential(token);
          //   return firebase.auth().signInAndRetrieveDataWithCredential(facebookCredential);
          // }
          // =======================================
          // Add Vision Image
          // addVisionImage(url){
          //   let id =   this.getUserId()
          //   console.log("id ", id)
          //   return this.afs.doc(`/userProfile/${id}`).update({profileImage: url})
          //         .then(res => {
          //           return {status : 1, data : res}
          //         })
          //         .catch(err => {
          //           return {status: 0, error:err}
          //         })
          // }
          //   addUser(user: any) {
          //   //console.log('service',user);
          //   return this.afs.collection('userProfile').doc(`${user.id}`).set(user)
          // }

        }, {
          key: "addUser",
          value: function addUser(user_id, dob, gender, address, image) {
            // this.id=new Date().getTime();
            this.afs.doc("/userProfile/".concat(user_id)).set({
              dob: dob,
              gender: gender,
              address: address,
              id: user_id,
              image: image
            }, {
              merge: true
            });
          }
        }, {
          key: "AddLiquorShops",
          value: function AddLiquorShops(liquorShopOwner, liquorShopName, liquorLocation, liquorName, liquorPrice, liquorSize, liquorLocationLatitude, liquorLocationLongitude, liquorShopOwnerEmail, phone, website, fb_link, twitter_link, youtube_link) {
            this.id = new Date().getTime();
            this.afs.doc("/liquorshops/".concat(this.id)).set({
              liquorShopOwner: liquorShopOwner,
              liquorShopName: liquorShopName,
              liquorLocation: liquorLocation,
              liquorName: liquorName,
              liquorPrice: liquorPrice,
              liquorSize: liquorSize,
              id: this.id,
              liquorLocationLatitude: liquorLocationLatitude,
              liquorLocationLongitude: liquorLocationLongitude,
              liquorShopOwnerEmail: liquorShopOwnerEmail,
              phone: phone,
              website: website,
              fb_link: fb_link,
              twitter_link: twitter_link,
              youtube_link: youtube_link
            }, {
              merge: true
            });
          }
        }, {
          key: "AddLiquorWithPrice",
          value: function AddLiquorWithPrice(liquorShopId, liquorShopOwner, image, liquorCategory, liquorName, SmallLiquorMinPrice, SmallLiquorMaxPrice, SmallLiquorNormalPrice, BigLiquorMinPrice, BigLiquorMaxPrice, BigLiquorNormalPrice) {
            this.id = new Date().getTime();
            this.afs.doc("/liquorPrice/".concat(this.id)).set({
              id: this.id,
              liquorShopId: liquorShopId,
              image: image,
              liquorShopOwner: liquorShopOwner,
              liquorName: liquorCategory,
              liquorCategory: liquorName,
              SmallLiquorMinPrice: SmallLiquorMinPrice,
              SmallLiquorMaxPrice: SmallLiquorMaxPrice,
              SmallLiquorNormalPrice: SmallLiquorNormalPrice,
              BigLiquorMinPrice: BigLiquorMinPrice,
              BigLiquorMaxPrice: BigLiquorMaxPrice,
              BigLiquorNormalPrice: BigLiquorNormalPrice
            }, {
              merge: true
            });
          }
        }, {
          key: "addOrder",
          value: function addOrder(name, mail, price, order_date, orderid, shop_name) {
            this.id = new Date().getTime();
            this.afs.doc("/orderHistory/".concat(this.id)).set({
              name: name,
              mail: mail,
              price: price,
              order_date: order_date,
              orderid: orderid,
              shop_name: shop_name,
              id: this.id
            }, {
              merge: true
            });
          }
        }, {
          key: "liquorOrderHistory",
          value: function liquorOrderHistory(user_id, liqudityOrderCode, liquorShopId, orderDate, orderId, paidUsing, orderSummary, subtotal, restrurentPromo, tax, total, shopImg, shopName) {
            this.id = new Date().getTime();
            localStorage.setItem("liquorOrderId", String(this.id));
            this.afs.doc("/liquorOrderHistory/".concat(this.id)).set({
              liqudityOrderCode: liqudityOrderCode,
              orderDate: orderDate,
              liquorShopId: liquorShopId,
              id: this.id,
              orderId: orderId,
              paidUsing: paidUsing,
              orderSummary: orderSummary,
              subtotal: subtotal,
              restrurentPromo: restrurentPromo,
              tax: tax,
              total: total,
              user_id: user_id,
              shopImg: shopImg,
              shopName: shopName
            }, {
              merge: true
            });
          }
        }, {
          key: "addCart",
          value: function addCart(user_id, final_cart, total_value) {
            this.id = new Date().getTime();
            this.afs.doc("/cartItem/".concat(this.id)).set({
              user_id: user_id,
              id: this.id,
              cart_items: final_cart,
              totalCost: total_value
            }, {
              merge: true
            });
          } // deleteSelectedItemforUserFromCart(itemObject,userId){
          //   return this.afs.collection('/valultCartItem', ref =>
          //         ref.where('userId', '==', userId).where('itemId', '==', itemObject.id)
          //   ).delete();
          // }
          // addSelectedItemToCart(itemObject,valueSelected,userId) {
          //     let id =new Date().getTime();
          //     this.afs.doc(`/valultCartItem/${id}`).set({
          //         id : id,
          //         itemId : itemObject.id,
          //         userId : userId,
          //         liquorCategoryId : itemObject.liquorCategoryId,
          //         itemsCount : valueSelected,
          //         BigLiquorMaxPrice : itemObject.BigLiquorMaxPrice,
          //         BigLiquorMinPrice : itemObject.BigLiquorMinPrice,
          //         BigLiquorNormalPrice : itemObject.BigLiquorNormalPrice,
          //         liquorCategory : itemObject.liquorCategory,
          //         liquorShopId : itemObject.liquorShopId,
          //         liquorName : itemObject.liquorName,
          //     }, { merge: true });
          // }
          //get date now function

        }, {
          key: "getNowDate",
          value: function getNowDate() {
            var returnDate = "";
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
              returnDate += "0".concat(dd, ".");
            } else {
              returnDate += "".concat(dd, ".");
            }

            if (mm < 10) {
              returnDate += "0".concat(mm, ".");
            } else {
              returnDate += "".concat(mm, ".");
            }

            returnDate += yyyy;
            return returnDate;
          }
        }, {
          key: "addVoultOrder",
          value: function addVoultOrder(cartData) {
            var id = new Date().getTime();
            this.afs.doc("/voultOrderHistory/".concat(id)).set({
              id: id,
              itemId: cartData.itemId,
              totalUnit: cartData.itemsCount,
              price: parseFloat(cartData.itemsCount) * parseFloat(cartData.BigLiquorNormalPrice),
              redeemed: '0',
              liquorName: cartData.liquorName,
              liquorShopId: cartData.liquorShopId,
              userId: cartData.userId,
              orderedDate: this.getNowDate(),
              liquorCategory: cartData.liquorCategory,
              liquorCategoryId: cartData.liquorCategoryId
            });
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }, {
          type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationService);
      /***/
    },

    /***/
    "./src/app/services/helper.service.ts":
    /*!********************************************!*\
      !*** ./src/app/services/helper.service.ts ***!
      \********************************************/

    /*! exports provided: HelperProvider */

    /***/
    function srcAppServicesHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelperProvider", function () {
        return HelperProvider;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import { HTTP } from "@ionic-native/http";
      // import { Device } from "@ionic-native/device";
      // import { InAppBrowser } from "@ionic-native/in-app-browser";
      // import { PhotoViewer } from "@ionic-native/photo-viewer";
      // import { SocialSharing } from "@ionic-native/social-sharing";
      // import { EmailComposer } from "@ionic-native/email-composer";
      // import * as Credentials from "../../app/credentials";
      // import { BrowserTab } from "@ionic-native/browser-tab";

      /*
        Generated class for the HelperProvider provider.
      
        See https://angular.io/guide/dependency-injection for more info on providers
        and Angular DI.
      */


      var HelperProvider = /*#__PURE__*/function () {
        function HelperProvider( // public http: HTTP,
        toastCtrl, alertCtrl, loadingController, location) {
          _classCallCheck(this, HelperProvider);

          this.toastCtrl = toastCtrl;
          this.alertCtrl = alertCtrl;
          this.loadingController = loadingController;
          this.location = location;
          console.log('Hello HelperProvider Provider');
        }

        _createClass(HelperProvider, [{
          key: "showError",
          value: function showError(code) {
            console.log('code', code);
            var msg = 'Something went wrong';

            if (code === 'auth/user-not-found') {
              msg = 'User not found';
            } else if (code === 'auth/wrong-password') {
              msg = 'Incorrect Password';
            } else if (code === 'auth/invalid-email') {
              msg = 'Invalid email';
            } else if (code === 'auth/network-request-failed') {
              msg = 'No internet connection';
            } else if (code === 'storage/retry-limit-exceeded') {
              msg = 'No internet connection';
            } else if (code === 'auth/email-already-in-use') {
              msg = 'Email already registered';
            }

            this.presentToast(msg);
          }
        }, {
          key: "showErrorCustom",
          value: function showErrorCustom(code) {
            console.log('code', code);
            var msg = 'Something went wrong';
            this.presentToast(code);
          }
        }, {
          key: "presentToast",
          value: function presentToast(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.toastCtrl.create({
                      message: msg,
                      duration: 2000
                    });

                  case 2:
                    toast = _context3.sent;
                    toast.present();

                  case 4:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertCtrl.create({
                      header: 'warning!',
                      message: msg,
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "suucessAlert",
          value: function suucessAlert(msg) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: 'Success!',
                      message: msg,
                      buttons: [{
                        text: 'Ok',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {}
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.loadingController.create({
                      message: 'Loading...'
                    });

                  case 2:
                    this.loading = _context6.sent;
                    _context6.next = 5;
                    return this.loading.present();

                  case 5:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "dismissLoader",
          value: function dismissLoader() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    if (!this.loading) {
                      _context7.next = 3;
                      break;
                    }

                    _context7.next = 3;
                    return this.loading.dismiss();

                  case 3:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "sendBack",
          value: function sendBack() {
            this.location.back();
          }
        }]);

        return HelperProvider;
      }();

      HelperProvider.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
        }];
      };

      HelperProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], HelperProvider);
      /***/
    },

    /***/
    "./src/app/services/user-details.service.ts":
    /*!**************************************************!*\
      !*** ./src/app/services/user-details.service.ts ***!
      \**************************************************/

    /*! exports provided: UserDetailsService */

    /***/
    function srcAppServicesUserDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserDetailsService", function () {
        return UserDetailsService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
      /* harmony import */


      var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/fire/storage */
      "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-storage.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");

      var UserDetailsService = /*#__PURE__*/function () {
        function UserDetailsService(afs, storage, authService, http, loadingCtrl, navCtrl, helper) {
          _classCallCheck(this, UserDetailsService);

          this.afs = afs;
          this.storage = storage;
          this.authService = authService;
          this.http = http;
          this.loadingCtrl = loadingCtrl;
          this.navCtrl = navCtrl;
          this.helper = helper;
          this.serviceurl = "http://liquiditybars.com/canada/backend/admin/api/";
        }

        _createClass(UserDetailsService, [{
          key: "uploadProfileImages",
          value: function uploadProfileImages(image, myId) {
            var _this6 = this;

            var date = new Date();
            return new Promise(function (resolve, reject) {
              if (image) {
                var file = image;
                var filePath = "profile_img/img-".concat(myId);

                var ref = _this6.storage.ref(filePath);

                var task = ref.putString(file, 'data_url').then(function () {
                  ref.getDownloadURL().subscribe(function (url) {
                    console.log('url : ', url);
                    resolve({
                      status: true,
                      url: url
                    });
                  }, function (err) {
                    console.log(err);
                    reject({
                      status: false,
                      err: err
                    });
                  });
                })["catch"](function (err) {
                  reject({
                    status: false,
                    err: err
                  });
                });
              }
            });
          }
        }, {
          key: "addUserData",
          value: function addUserData(collection, userId, user_name, user_age, user_city, user_country, dream_job, about_me) {
            return this.afs.collection("/".concat(collection)).doc(userId).update({
              name: user_name,
              age: user_age,
              user_city: user_city,
              user_country: user_country,
              dream_job: dream_job,
              about_me: about_me
            });
          }
        }, {
          key: "getLiquorShops",
          value: function getLiquorShops() {
            return this.afs.collection('/liquorshops').valueChanges();
          }
        }, {
          key: "getOrderList",
          value: function getOrderList() {
            return this.afs.collection('/orderHistory').valueChanges();
          }
        }, {
          key: "getLiquorList",
          value: function getLiquorList() {
            return this.afs.collection('/outletCategory').valueChanges();
          }
        }, {
          key: "getLiquorListWithPrice",
          value: function getLiquorListWithPrice() {
            return this.afs.collection('/liquorPrice').valueChanges();
          }
        }, {
          key: "fetchShop",
          value: function fetchShop(collection, shop_id) {
            return this.afs.collection("/".concat(collection), function (ref) {
              return ref.where('id', '==', shop_id);
            }).valueChanges();
          } // getUserbyId(user_id) {
          //     return this.afs.collection('/userProfile'), ref =>
          //     ref.where('id', '==', user_id)
          // .valueChanges();
          // }

        }, {
          key: "promptsAnswer",
          value: function promptsAnswer(collection, userId, promptArr) {
            return this.afs.collection("/".concat(collection)).doc(userId).update({
              prompts: promptArr
            });
          }
        }, {
          key: "getUserbyId",
          value: function getUserbyId(collection, user_id) {
            console.log("user_id?????", user_id);
            return this.afs.collection("/".concat(collection), function (ref) {
              return ref.where('id', '==', user_id);
            }).valueChanges();
          }
        }, {
          key: "getVisions",
          value: function getVisions() {
            return this.afs.collection('/visions').valueChanges();
          }
        }, {
          key: "uploadVisionImages",
          value: function uploadVisionImages(image, myId, visionId) {
            var _this7 = this;

            var date = new Date();
            return new Promise(function (resolve, reject) {
              if (image) {
                var file = image;
                var filePath = "vision_img/img-".concat(myId, "-").concat(visionId);

                var ref = _this7.storage.ref(filePath);

                var task = ref.putString(file, 'data_url').then(function () {
                  ref.getDownloadURL().subscribe(function (url) {
                    console.log('url : ', url);
                    resolve({
                      status: true,
                      url: url
                    });
                  }, function (err) {
                    console.log(err);
                    reject({
                      status: false,
                      err: err
                    });
                  });
                })["catch"](function (err) {
                  reject({
                    status: false,
                    err: err
                  });
                });
              }
            });
          }
        }, {
          key: "visionsAnswer",
          value: function visionsAnswer(collection, userId, visionArr) {
            return this.afs.collection("/".concat(collection)).doc(userId).update({
              visions: visionArr
            });
          }
        }, {
          key: "getPrograms",
          value: function getPrograms() {
            return this.afs.collection('/programs').valueChanges();
          }
        }, {
          key: "getYourself_date",
          value: function getYourself_date() {
            return this.afs.collection('/dates').valueChanges();
          }
        }, {
          key: "UpdateUserData",
          value: function UpdateUserData(collection, itemid, name, mail, mobile, dob, gender, address) {
            return this.afs.collection("/".concat(collection)).doc(itemid.toString()).update({
              id: itemid,
              name: name,
              mail: mail,
              mobile: mobile,
              dob: dob,
              gender: gender,
              address: address
            });
          }
        }, {
          key: "deleteUserData",
          value: function deleteUserData(pid) {
            return this.afs.collection('/userProfile').doc(pid.toString())["delete"]();
          }
        }, {
          key: "UpdateLiquorShopData",
          value: function UpdateLiquorShopData(collection, itemid, liquorShopOwner, liquorShopName, liquorLocation, liquorName, liquorSize, liquorPrice, liquorLocationLatitude, liquorLocationLongitude, liquorShopOwnerEmail, phone, website, fb_link, twitter_link, youtube_link) {
            return this.afs.collection("/".concat(collection)).doc(itemid.toString()).update({
              liquorShopOwner: liquorShopOwner,
              liquorLocation: liquorLocation,
              liquorShopName: liquorShopName,
              liquorName: liquorName,
              liquorSize: liquorSize,
              liquorPrice: liquorPrice,
              liquorLocationLatitude: liquorLocationLatitude,
              liquorLocationLongitude: liquorLocationLongitude,
              liquorShopOwnerEmail: liquorShopOwnerEmail,
              phone: phone,
              website: website,
              fb_link: fb_link,
              twitter_link: twitter_link,
              youtube_link: youtube_link
            });
          }
        }, {
          key: "deleteLiquorShop",
          value: function deleteLiquorShop(pid) {
            return this.afs.collection('/liquorshops').doc(pid.toString())["delete"]();
          }
        }, {
          key: "UpdateLiquorWithPrice",
          value: function UpdateLiquorWithPrice(collection, liquorShopOwner, liquorLocation, id, liquorName, liquorCategory, SmallLiquorMinPrice, SmallLiquorMaxPrice, SmallLiquorNormalPrice, BigLiquorMinPrice, BigLiquorMaxPrice, BigLiquorNormalPrice, liquorShopId) {
            return this.afs.collection("/".concat(collection)).doc(id.toString()).update({
              liquorShopId: liquorShopId,
              liquorShopOwner: liquorShopOwner,
              liquorName: liquorCategory,
              liquorCategory: liquorName,
              SmallLiquorMinPrice: SmallLiquorMinPrice,
              SmallLiquorMaxPrice: SmallLiquorMaxPrice,
              SmallLiquorNormalPrice: SmallLiquorNormalPrice,
              BigLiquorMinPrice: BigLiquorMinPrice,
              BigLiquorMaxPrice: BigLiquorMaxPrice,
              BigLiquorNormalPrice: BigLiquorNormalPrice
            });
          }
        }, {
          key: "deleteLiquorWithPrice",
          value: function deleteLiquorWithPrice(pid) {
            return this.afs.collection('/liquorPrice').doc(pid.toString())["delete"]();
          }
        }, {
          key: "UpdateOrderData",
          value: function UpdateOrderData(collection, itemid, name, mail, price, order_date, orderid, shop_name) {
            return this.afs.collection("/".concat(collection)).doc(itemid.toString()).update({
              id: itemid,
              name: name,
              mail: mail,
              price: price,
              order_date: order_date,
              orderid: orderid,
              shop_name: shop_name
            });
          }
        }, {
          key: "deleteOrder",
          value: function deleteOrder(pid) {
            return this.afs.collection('/orderHistory').doc(pid.toString())["delete"]();
          }
        }, {
          key: "deleteEnquiryList",
          value: function deleteEnquiryList(pid) {
            return this.afs.collection('/enquiryList').doc(pid.toString())["delete"]();
          }
        }, {
          key: "UpdateLiquor",
          value: function UpdateLiquor(collection, itemid, liquorName) {
            return this.afs.collection("/".concat(collection)).doc(itemid.toString()).update({
              liquorName: liquorName
            });
          }
        }, {
          key: "deleteLiquor",
          value: function deleteLiquor(pid) {
            return this.afs.collection('/liquorName').doc(pid.toString())["delete"]();
          }
        }, {
          key: "UpdateVisions",
          value: function UpdateVisions(collection, itemid, visions) {
            return this.afs.collection("/".concat(collection)).doc(itemid.toString()).update({
              vision: visions
            });
          }
        }, {
          key: "deleteVisions",
          value: function deleteVisions(pid) {
            return this.afs.collection('/visions').doc(pid.toString())["delete"]();
          }
        }, {
          key: "getAllliquorshops",
          value: function getAllliquorshops() {
            return this.afs.collection('/liquorshops').valueChanges();
          }
        }, {
          key: "getAllliquorCategory",
          value: function getAllliquorCategory() {
            return this.afs.collection('/liquorCategory').valueChanges();
          }
        }, {
          key: "getLiquorData",
          value: function getLiquorData(id) {
            return this.afs.collection('/liquorPrice', function (ref) {
              return ref.where('liquorShopId', '==', id);
            }).valueChanges();
          }
        }, {
          key: "getLiquorShopById",
          value: function getLiquorShopById(id) {
            return this.afs.collection('/liquorshops', function (ref) {
              return ref.where('id', '==', id);
            }).valueChanges();
          }
        }, {
          key: "fetchDataByCollectionId",
          value: function fetchDataByCollectionId(collection, shopid, categoryid) {
            return this.afs.collection("/".concat(collection), function (ref) {
              return ref.where('liquorShopId', '==', Number(shopid)).where('liquorCategoryId', '==', categoryid);
            }).valueChanges();
          }
        }, {
          key: "fetchFoodBycategory",
          value: function fetchFoodBycategory(collection, shopid) {
            return this.afs.collection("/".concat(collection), function (ref) {
              return ref.where('liquorShopId', '==', shopid);
            }).valueChanges();
          }
        }, {
          key: "fetchOrderbyOrderId",
          value: function fetchOrderbyOrderId(collection, orderId) {
            return this.afs.collection("/".concat(collection), function (ref) {
              return ref.where('id', '==', Number(orderId));
            }).valueChanges();
          }
        }, {
          key: "getCartData",
          value: function getCartData(id) {
            return this.afs.collection('/cartItem', function (ref) {
              return ref.where('user_id', '==', id);
            }).valueChanges();
          }
        }, {
          key: "UpdateCartData",
          value: function UpdateCartData(collection, itemid, final_cart, total_value) {
            return this.afs.collection("/".concat(collection)).doc(itemid.toString()).update({
              cart_items: final_cart,
              totalCost: total_value
            });
          }
        }, {
          key: "getLiquorMainCategory",
          value: function getLiquorMainCategory() {
            return this.afs.collection('/liquorCategory').valueChanges();
          }
        }, {
          key: "getLiquorItemsByCatgory",
          value: function getLiquorItemsByCatgory(categoryMainId) {
            return this.afs.collection('/liquorPrice', function (ref) {
              return ref.where('liquorCategoryId', '==', categoryMainId);
            }).valueChanges();
          }
        }, {
          key: "getLiquorOrderHistory",
          value: function getLiquorOrderHistory(user_id) {
            return this.afs.collection('/liquorOrderHistory', function (ref) {
              return ref.where('user_id', '==', user_id);
            }).valueChanges();
          }
        }, {
          key: "deleteSelectedItemforUserFromCart",
          value: function deleteSelectedItemforUserFromCart() {
            return this.afs.collection('/cartItem').valueChanges();
          }
        }, {
          key: "addSelectedItemToCart",
          value: function addSelectedItemToCart(itemObject, quantity, userId) {
            var id = new Date().getTime();
            this.afs.doc("/cartItem/".concat(id)).set({
              id: id,
              itemId: itemObject.itemId,
              userId: userId,
              liquorCategoryId: itemObject.liquorCategoryId,
              itemsCount: quantity,
              BigLiquorMaxPrice: itemObject.BigLiquorMaxPrice,
              BigLiquorMinPrice: itemObject.BigLiquorMinPrice,
              BigLiquorNormalPrice: itemObject.BigLiquorNormalPrice,
              liquorCategory: itemObject.liquorCategory,
              liquorShopId: itemObject.liquorShopId,
              liquorName: itemObject.liquorName
            }, {
              merge: true
            });
          }
        }, {
          key: "getVaultOrderHistory",
          value: function getVaultOrderHistory(userId) {
            return this.afs.collection('/voultOrderHistory', function (ref) {
              return ref.where('userId', '==', userId);
            }).valueChanges();
          }
        }, {
          key: "getVaultOrderDetailsById",
          value: function getVaultOrderDetailsById(orderId, userId) {
            return this.afs.collection('/voultOrderHistory', function (ref) {
              return ref.where('id', '==', orderId).where('userId', '==', userId);
            }).valueChanges();
          }
        }, {
          key: "updateVaultLiquorBalance",
          value: function updateVaultLiquorBalance(orderDetails, totalRedeemed, cartPrice, bookingData) {
            return this.afs.collection('/voultOrderHistory').doc(orderDetails.id.toString()).update({
              redeemed: totalRedeemed
            });
          }
        }, {
          key: "updateLiquorPriceAfterPurchase",
          value: function updateLiquorPriceAfterPurchase(itemId, newPrice) {
            // the Details is the Parameter which is hold all the Information of Liquor price and The New price is Holding the new Price increase or Decrease
            // here the BigLiquorActualPrice is the base column or for Price Calculation
            return this.afs.collection('/liquorPrice').doc(itemId.toString()).update({
              BigLiquorActualPrice: newPrice
            });
          }
        }, {
          key: "getLiquorDataExceptTheseIds",
          value: function getLiquorDataExceptTheseIds(Ids) {
            return this.afs.collection('/liquorPrice').valueChanges();
          }
        }, {
          key: "getFoodCategory",
          value: function getFoodCategory(shopId) {
            return this.afs.collection('/foodCategory', function (ref) {
              return ref.where('shopId', '==', shopId);
            }).valueChanges();
          }
        }, {
          key: "getFoodItemByCategory",
          value: function getFoodItemByCategory(categoryId) {
            return this.afs.collection('/foodItem', function (ref) {
              return ref.where('foodCategoryId', '==', categoryId.toString());
            }).valueChanges();
          }
        }, {
          key: "addFoodOrderDetails",
          value: function addFoodOrderDetails(orderData, userData, logeedInUserId) {
            var id = new Date().getTime();
            this.afs.doc("/foodOrder/".concat(id)).set({
              id: id,
              userId: logeedInUserId,
              foodCategoryId: orderData.categoryId,
              foodCategoryName: orderData.categoryName,
              foodItemId: orderData.foodItemId,
              foodItemName: orderData.itemName,
              foodItemType: orderData.itemType,
              price: orderData.price,
              shopId: orderData.shopId,
              quantity: orderData.quantity,
              bookingFor: userData.bookingfor,
              date: userData.date,
              time: userData.time,
              email: userData.email,
              mobile: userData.mobile,
              created_at: ''
            }, {
              merge: true
            });
            return id;
          }
        }, {
          key: "pay_email",
          value: function pay_email(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
              var _this8 = this;

              var loading, headers, body;
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
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    body = 'customer_name=' + data.customer_name + '&customer_email=' + data.customer_email + '&customer_mobile=' + data.customer_mobile + '&store_name=' + data.store_name + '&store_email=' + data.store_email + '&order_id=' + data.order_id + '&order_amount=' + data.order_amount + '&order_date=' + data.order_date;
                    return _context8.abrupt("return", new Promise(function (resolve, reject) {
                      _this8.http.post("http://demo90.co.in/dev/liquidity/mail.php?action=order_email", body, {
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
                    return _context8.stop();
                }
              }, _callee8, this);
            }));
          }
        }, {
          key: "register_email",
          value: function register_email(data) {
            var _this9 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'email=' + data.email + '&name=' + data.name;
            return new Promise(function (resolve, reject) {
              _this9.http.post("http://demo90.co.in/dev/liquidity/mail.php?action=register_mail", body, {
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
          /* ---------------------------------------------- Api Hiting --------------------------------------------*/

          /*----------------------------------------Date:15/02/2021 -----------------------------------------------*/

          /**
              * This method is to get city list
              */

        }, {
          key: "fetchCities",
          value: function fetchCities() {
            var _this10 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this10.http.get(_this10.serviceurl + 'fetchCities', {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
              * This method is to get Category list
              */

        }, {
          key: "fetchCategories",
          value: function fetchCategories() {
            var _this11 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this11.http.get(_this11.serviceurl + 'fetchCategories', {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
              * This method is to get Shop list
              */

        }, {
          key: "fetchShops",
          value: function fetchShops(city_id) {
            var _this12 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this12.http.get(_this12.serviceurl + 'fetchShops/' + city_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
              * This method is to get SubCategory list
              */

        }, {
          key: "fetchSubCategories",
          value: function fetchSubCategories(category_id) {
            var _this13 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this13.http.get(_this13.serviceurl + 'fetchSubCategories/' + category_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
              * This method is to get SubCategory list
              */

        }, {
          key: "fetchProducts",
          value: function fetchProducts(sub_category_id, shop_id) {
            var _this14 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this14.http.get(_this14.serviceurl + 'fetchProducts/' + sub_category_id + '/' + shop_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "addToCart",
          value: function addToCart(data) {
            var _this15 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'device_id=' + data.device_id + '&product_id=' + data.product_id + '&product_name=' + data.product_name + '&price=' + data.price + '&quantity=' + data.quantity + '&is_liquor=' + data.is_liquor;
            return new Promise(function (resolve, reject) {
              _this15.http.post(_this15.serviceurl + 'addToCart/', body, {
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
        }, {
          key: "getCartDetails",
          value: function getCartDetails(data) {
            var _this16 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'device_id=' + data.device_id;
            return new Promise(function (resolve, reject) {
              _this16.http.post(_this16.serviceurl + 'getCartDetails/', body, {
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
        }, {
          key: "userRegistration",
          value: function userRegistration(data) {
            var _this17 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'name=' + data.name + '&email=' + data.email + '&mobile=' + data.mobile + '&password=' + data.password;
            return new Promise(function (resolve, reject) {
              _this17.http.post(_this17.serviceurl + 'userRegistration/', body, {
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
        }, {
          key: "verifyUser",
          value: function verifyUser(data) {
            var _this18 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'id=' + data.id + '&otp=' + data.otp;
            return new Promise(function (resolve, reject) {
              _this18.http.post(_this18.serviceurl + 'verifyUser/', body, {
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
        }, {
          key: "userLogin",
          value: function userLogin(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
              var _this19 = this;

              var loading, headers, body;
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
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    body = 'email=' + data.email + '&password=' + data.password;
                    return _context9.abrupt("return", new Promise(function (resolve, reject) {
                      _this19.http.post(_this19.serviceurl + 'userLogin/', body, {
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
                    return _context9.stop();
                }
              }, _callee9, this);
            }));
          }
        }, {
          key: "createOrder",
          value: function createOrder(data) {
            var _this20 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'name=' + data.customer_name + '&email=' + data.customer_email + '&mobile=' + data.customer_mobile + '&user_id=' + data.user_id + '&payment_type=' + data.payment_type + '&transaction_id=' + data.transaction_id + '&order_time=' + data.order_time + '&device_id=' + data.device_id + '&order_date=' + data.order_date + '&shop_id=' + data.shop_id;
            return new Promise(function (resolve, reject) {
              _this20.http.post(_this20.serviceurl + 'createOrder/', body, {
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
          /**
          * This method is to get SubCategory list
          */

        }, {
          key: "fetchOrderHistroy",
          value: function fetchOrderHistroy(user_id) {
            var _this21 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this21.http.get(_this21.serviceurl + 'orderList/' + user_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
              * This method is to get SubCategory list
              */

        }, {
          key: "fetchOrderHistroydetails",
          value: function fetchOrderHistroydetails(order_id) {
            var _this22 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this22.http.get(_this22.serviceurl + 'orderDetails/' + order_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
              * This method is to get SubCategory list
              */

        }, {
          key: "fetchOtherProductsByCategory",
          value: function fetchOtherProductsByCategory(category_id, shop_id) {
            var _this23 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this23.http.get(_this23.serviceurl + 'fetchOtherProductsByCategory/' + category_id + '/' + shop_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
              * This method is to get SubCategory list
              */

        }, {
          key: "deleteFromCart",
          value: function deleteFromCart(cart_item_id) {
            var _this24 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this24.http.get(_this24.serviceurl + 'deleteFromCart/' + cart_item_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
              * This method is to get SubCategory list
              */

        }, {
          key: "deleteFromVaultCart",
          value: function deleteFromVaultCart(cart_item_id) {
            var _this25 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this25.http.get(_this25.serviceurl + 'deleteFromVaultCart/' + cart_item_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "updateProfile",
          value: function updateProfile(data) {
            var _this26 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'id=' + data.id + '&name=' + data.name + '&mobile=' + data.mobile + '&gender=' + data.gender + '&dob=' + data.dob;
            return new Promise(function (resolve, reject) {
              _this26.http.post(_this26.serviceurl + 'updateProfile/', body, {
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
          /**********************************Vault Work******************************************************/

          /**
          * This method is to get SubCategory list
          */

        }, {
          key: "fetchVaultCategories",
          value: function fetchVaultCategories() {
            var _this27 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this27.http.get(_this27.serviceurl + 'fetchVaultCategories/', {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
          * This method is to get SubCategory list
          */

        }, {
          key: "fetchVaultProducts",
          value: function fetchVaultProducts(sub_category_id) {
            var _this28 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this28.http.get(_this28.serviceurl + 'fetchVaultProducts/' + sub_category_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "addToVaultCart",
          value: function addToVaultCart(data) {
            var _this29 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'device_id=' + data.device_id + '&product_id=' + data.product_id + '&product_name=' + data.product_name + '&price=' + data.price + '&quantity=' + data.quantity + '&vault_category_id=' + data.vault_category_id;
            return new Promise(function (resolve, reject) {
              _this29.http.post(_this29.serviceurl + 'addToVaultCart/', body, {
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
        }, {
          key: "getVaultCartDetails",
          value: function getVaultCartDetails(data) {
            var _this30 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'device_id=' + data.device_id;
            return new Promise(function (resolve, reject) {
              _this30.http.post(_this30.serviceurl + 'fetchVaultCartItems/', body, {
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
        }, {
          key: "createVaultOrder",
          value: function createVaultOrder(data) {
            var _this31 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'name=' + data.customer_name + '&email=' + data.customer_email + '&mobile=' + data.customer_mobile + '&user_id=' + data.user_id + '&payment_type=' + data.payment_type + '&transaction_id=' + data.transaction_id + '&device_id=' + data.device_id;
            return new Promise(function (resolve, reject) {
              _this31.http.post(_this31.serviceurl + 'createVaultOrder/', body, {
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
          /**
          * This method is to get SubCategory list
          */

        }, {
          key: "getVaultOrderList",
          value: function getVaultOrderList(user_id) {
            var _this32 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this32.http.get(_this32.serviceurl + 'fetchUserVaultItems/' + user_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
          * This method is to get SubCategory list
          */

        }, {
          key: "fetchVaultShops",
          value: function fetchVaultShops(outletCategory) {
            var _this33 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this33.http.get(_this33.serviceurl + 'fetchVaultShops/' + outletCategory, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "redeemItemFromVault",
          value: function redeemItemFromVault(data) {
            var _this34 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'order_id=' + data.order_id + '&quantiy=' + data.quantiy + '&shop_id=' + data.shop_id + '&user_id=' + data.user_id + '&redeem_date=' + data.redeem_date + '&redeem_time=' + data.redeem_time;
            return new Promise(function (resolve, reject) {
              _this34.http.post(_this34.serviceurl + 'redeemItemFromVault/', body, {
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
          /**
              * This method is to get SubCategory list
              */

        }, {
          key: "fetchVaultOrderHistroydetails",
          value: function fetchVaultOrderHistroydetails(order_id) {
            var _this35 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this35.http.get(_this35.serviceurl + 'fetchVaultOrderDetails/' + order_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
          /**
          * This method is to get SubCategory list
          */

        }, {
          key: "getVaultOrderListt",
          value: function getVaultOrderListt(user_id) {
            var _this36 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this36.http.get(_this36.serviceurl + 'getVaultOrderList/' + user_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "cancelOrder",
          value: function cancelOrder(data) {
            var _this37 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'id=' + data.id;
            return new Promise(function (resolve, reject) {
              _this37.http.post(_this37.serviceurl + 'cancelOrder/', body, {
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
        }, {
          key: "cancelVaultOrder",
          value: function cancelVaultOrder(data) {
            var _this38 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'id=' + data.id;
            return new Promise(function (resolve, reject) {
              _this38.http.post(_this38.serviceurl + 'cancelVaultOrder/', body, {
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
          /**
          * This method is to get SubCategory list
          */

        }, {
          key: "fetchWalletTransactions",
          value: function fetchWalletTransactions(user_id) {
            var _this39 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({});
            return new Promise(function (resolve, reject) {
              _this39.http.get(_this39.serviceurl + 'fetch_wallet_balance/' + user_id, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "addWalletBalance",
          value: function addWalletBalance(data) {
            var _this40 = this;

            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
              'Content-Type': 'application/x-www-form-urlencoded',
              'Accept': 'application/json'
            });
            var body = 'amount=' + data.amount + '&user_id=' + data.user_id;
            return new Promise(function (resolve, reject) {
              _this40.http.post(_this40.serviceurl + "add_wallet_balance", body, {
                headers: headers
              }).subscribe(function (res) {
                resolve(res);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "forgotPass",
          value: function forgotPass(data) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
              var _this41 = this;

              var loading, headers, body;
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
                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                      'Content-Type': 'application/x-www-form-urlencoded',
                      'Accept': 'application/json'
                    });
                    body = 'email=' + data.email;
                    return _context10.abrupt("return", new Promise(function (resolve, reject) {
                      _this41.http.post(_this41.serviceurl + 'forgetPassword', body, {
                        headers: headers
                      }).subscribe(function (res) {
                        loading.dismiss();
                        resolve(res);

                        _this41.helper.showErrorCustom('Please Check your Mail to reset your password');
                      }, function (err) {
                        loading.dismiss();
                        reject(err);

                        _this41.navCtrl.navigateRoot('/login');

                        _this41.helper.showErrorCustom('Please Check your Mail to reset your password');
                      });
                    }));

                  case 8:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10, this);
            }));
          }
        }]);

        return UserDetailsService;
      }();

      UserDetailsService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }, {
          type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]
        }, {
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperProvider"]
        }];
      };

      UserDetailsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])({
        providedIn: 'root'
      })], UserDetailsService);
      /***/
    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyA1NASOM_u2IMWmrqxxxcZsK0ULtC-2QSs",
          authDomain: "liquidity-app-6d8cb.firebaseapp.com",
          projectId: "liquidity-app-6d8cb",
          storageBucket: "liquidity-app-6d8cb.appspot.com",
          messagingSenderId: "932729812346",
          appId: "1:932729812346:web:b7a643e7b8e4b41fe752c3"
        }
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/oneness/Oneness_Rupali/All_projects/Liquidity-Canada/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map