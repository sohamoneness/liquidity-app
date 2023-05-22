(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["homenew-homenew-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance/filter-distance.component.html":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance/filter-distance.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppFilterDistanceFilterDistanceComponentHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Choose Distance\n    </ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"close()\">\n        <ion-icon slot=\"icon-only\" name=\"close-circle-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"event_form\">\n    <ion-list>\n      <ion-item *ngFor=\"let distance of distanceArray\">\n        <ion-label (click)=\"chooseDistance(distance.value)\"><ion-icon name=\"locate-outline\"></ion-icon>\n          {{distance.name}}</ion-label>\n      </ion-item>\n          \n      <!-- <ion-item>\n        <ion-label (click)=\"chooseDistance('10')\">10 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label (click)=\"chooseDistance('15')\">15 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>20 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>25 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>30 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>35 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>40 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>45 KM</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>50 KM</ion-label>\n      </ion-item> -->\n    </ion-list>\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/homenew/homenew.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homenew/homenew.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppHomenewHomenewPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"openMenu()\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M0 3.38462C0 3.13981 0.0972524 2.90502 0.270363 2.73191C0.443473 2.5588 0.678262 2.46155 0.923077 2.46155H16.9231C17.1679 2.46155 17.4027 2.5588 17.5758 2.73191C17.7489 2.90502 17.8462 3.13981 17.8462 3.38462C17.8462 3.62944 17.7489 3.86423 17.5758 4.03734C17.4027 4.21045 17.1679 4.3077 16.9231 4.3077H0.923077C0.678262 4.3077 0.443473 4.21045 0.270363 4.03734C0.0972524 3.86423 0 3.62944 0 3.38462ZM23.0769 11.0769H0.923077C0.678262 11.0769 0.443473 11.1742 0.270363 11.3473C0.0972524 11.5204 0 11.7552 0 12C0 12.2448 0.0972524 12.4796 0.270363 12.6527C0.443473 12.8258 0.678262 12.9231 0.923077 12.9231H23.0769C23.3217 12.9231 23.5565 12.8258 23.7296 12.6527C23.9027 12.4796 24 12.2448 24 12C24 11.7552 23.9027 11.5204 23.7296 11.3473C23.5565 11.1742 23.3217 11.0769 23.0769 11.0769ZM12 19.6923H0.923077C0.678262 19.6923 0.443473 19.7896 0.270363 19.9627C0.0972524 20.1358 0 20.3706 0 20.6154C0 20.8602 0.0972524 21.095 0.270363 21.2681C0.443473 21.4412 0.678262 21.5385 0.923077 21.5385H12C12.2448 21.5385 12.4796 21.4412 12.6527 21.2681C12.8258 21.095 12.9231 20.8602 12.9231 20.6154C12.9231 20.3706 12.8258 20.1358 12.6527 19.9627C12.4796 19.7896 12.2448 19.6923 12 19.6923Z\" fill=\"#28303F\"/>\n          </svg>\n          \n      </ion-button>\n    </ion-buttons>\n    <ion-title>\n        Liquidity\n\t\t\t<!-- <ion-label position=\"floating\">Select </ion-label>\n\t\t\t<ion-select [(ngModel)]=\"city\">\n       \n        <ion-select-option selected value=\"{{item.id}}\" *ngFor=\"let item of cities; let i = index\">{{item.name}}</ion-select-option>\n      </ion-select> -->\n\t  </ion-title>\n    <ion-buttons slot=\"end\">\n      <!-- <ion-button routerLink=\"/notification/{{ notificationdetails._id }}\" routerDirection=\"forward\" (click)=\"cancel(list._id)\"> -->\n      <ion-button (click)=\"search()\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <g clip-path=\"url(#clip0_21_31)\">\n          <path d=\"M10.5691 0C4.74145 0 0 4.74145 0 10.5691C0 16.3971 4.74145 21.1382 10.5691 21.1382C16.3971 21.1382 21.1382 16.3971 21.1382 10.5691C21.1382 4.74145 16.3971 0 10.5691 0ZM10.5691 19.187C5.81723 19.187 1.95122 15.321 1.95122 10.5691C1.95122 5.81728 5.81723 1.95122 10.5691 1.95122C15.321 1.95122 19.187 5.81723 19.187 10.5691C19.187 15.321 15.321 19.187 10.5691 19.187Z\" fill=\"#28303F\"/>\n          <path d=\"M23.7142 22.3347L18.1207 16.7412C17.7395 16.36 17.1223 16.36 16.7411 16.7412C16.36 17.122 16.36 17.7399 16.7411 18.1207L22.3346 23.7142C22.4251 23.805 22.5326 23.8769 22.651 23.926C22.7694 23.975 22.8963 24.0002 23.0244 24.0001C23.1525 24.0002 23.2794 23.975 23.3978 23.9259C23.5162 23.8769 23.6237 23.8049 23.7142 23.7142C24.0953 23.3334 24.0953 22.7155 23.7142 22.3347Z\" fill=\"#28303F\"/>\n          </g>\n          <defs>\n          <clipPath id=\"clip0_21_31\">\n          <rect width=\"24\" height=\"24\" fill=\"white\"/>\n          </clipPath>\n          </defs>\n        </svg>\n\n      </ion-button>\n      <ion-button (click)=\"filterDistance()\">\n        <svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n          <path d=\"M0.923077 4.92302C0.678262 4.92302 0.443473 5.02027 0.270363 5.19338C0.0972524 5.36649 0 5.60128 0 5.8461C0 6.09091 0.0972524 6.3257 0.270363 6.49881C0.443473 6.67192 0.678262 6.76918 0.923077 6.76918V4.92302ZM0.923077 17.2307C0.678262 17.2307 0.443473 17.328 0.270363 17.5011C0.0972524 17.6742 0 17.909 0 18.1538C0 18.3986 0.0972524 18.6334 0.270363 18.8065C0.443473 18.9796 0.678262 19.0769 0.923077 19.0769V17.2307ZM8.30769 19.0769C8.55251 19.0769 8.7873 18.9796 8.96041 18.8065C9.13352 18.6334 9.23077 18.3986 9.23077 18.1538C9.23077 17.909 9.13352 17.6742 8.96041 17.5011C8.7873 17.328 8.55251 17.2307 8.30769 17.2307V19.0769ZM23.0769 19.0769C23.3217 19.0769 23.5565 18.9796 23.7296 18.8065C23.9027 18.6334 24 18.3986 24 18.1538C24 17.909 23.9027 17.6742 23.7296 17.5011C23.5565 17.328 23.3217 17.2307 23.0769 17.2307V19.0769ZM15.6923 4.92302C15.4475 4.92302 15.2127 5.02027 15.0396 5.19338C14.8665 5.36649 14.7692 5.60128 14.7692 5.8461C14.7692 6.09091 14.8665 6.3257 15.0396 6.49881C15.2127 6.67192 15.4475 6.76918 15.6923 6.76918V4.92302ZM23.0769 6.76918C23.3217 6.76918 23.5565 6.67192 23.7296 6.49881C23.9027 6.3257 24 6.09091 24 5.8461C24 5.60128 23.9027 5.36649 23.7296 5.19338C23.5565 5.02027 23.3217 4.92302 23.0769 4.92302V6.76918ZM0.923077 6.76918H4.61538V4.92302H0.923077V6.76918ZM0.923077 19.0769H8.30769V17.2307H0.923077V19.0769ZM19.3846 19.0769H23.0769V17.2307H19.3846V19.0769ZM15.6923 6.76918H23.0769V4.92302H15.6923V6.76918ZM18.4615 18.1538C18.4615 18.8882 18.1698 19.5926 17.6504 20.1119C17.1311 20.6313 16.4268 20.923 15.6923 20.923V22.7692C16.9164 22.7692 18.0903 22.2829 18.9559 21.4174C19.8214 20.5518 20.3077 19.3779 20.3077 18.1538H18.4615ZM15.6923 20.923C14.9579 20.923 14.2535 20.6313 13.7342 20.1119C13.2148 19.5926 12.9231 18.8882 12.9231 18.1538H11.0769C11.0769 19.3779 11.5632 20.5518 12.4287 21.4174C13.2943 22.2829 14.4682 22.7692 15.6923 22.7692V20.923ZM12.9231 18.1538C12.9231 17.4193 13.2148 16.715 13.7342 16.1957C14.2535 15.6763 14.9579 15.3846 15.6923 15.3846V13.5384C14.4682 13.5384 13.2943 14.0247 12.4287 14.8902C11.5632 15.7558 11.0769 16.9297 11.0769 18.1538H12.9231ZM15.6923 15.3846C16.4268 15.3846 17.1311 15.6763 17.6504 16.1957C18.1698 16.715 18.4615 17.4193 18.4615 18.1538H20.3077C20.3077 16.9297 19.8214 15.7558 18.9559 14.8902C18.0903 14.0247 16.9164 13.5384 15.6923 13.5384V15.3846ZM11.0769 5.8461C11.0769 6.58054 10.7852 7.28491 10.2658 7.80424C9.7465 8.32357 9.04214 8.61533 8.30769 8.61533V10.4615C9.53177 10.4615 10.7057 9.97522 11.5713 9.10967C12.4368 8.24412 12.9231 7.07017 12.9231 5.8461H11.0769ZM8.30769 8.61533C7.57325 8.61533 6.86888 8.32357 6.34955 7.80424C5.83022 7.28491 5.53846 6.58054 5.53846 5.8461H3.69231C3.69231 7.07017 4.17857 8.24412 5.04412 9.10967C5.90968 9.97522 7.08362 10.4615 8.30769 10.4615V8.61533ZM5.53846 5.8461C5.53846 5.11165 5.83022 4.40729 6.34955 3.88796C6.86888 3.36862 7.57325 3.07687 8.30769 3.07687V1.23071C7.08362 1.23071 5.90968 1.71698 5.04412 2.58253C4.17857 3.44808 3.69231 4.62202 3.69231 5.8461H5.53846ZM8.30769 3.07687C9.04214 3.07687 9.7465 3.36862 10.2658 3.88796C10.7852 4.40729 11.0769 5.11165 11.0769 5.8461H12.9231C12.9231 4.62202 12.4368 3.44808 11.5713 2.58253C10.7057 1.71698 9.53177 1.23071 8.30769 1.23071V3.07687Z\" fill=\"#28303F\"/>\n          </svg>\n                \n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"true\">\n  <div class=\"banner_wraper\">\n    <!-- <img src=\"assets/banner-home.png\"> -->\n    <ion-slides class=\"collection_banner\" pager=\"true\" [options]=\"slideOpts\">\n      <ion-slide *ngFor=\"let item of banners\">\n        <img src=\"{{item.image}}\">\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n  <ion-item-divider>\n    Favourite Drinks\n  </ion-item-divider>\n\n  <ion-slides class=\"favourite_items\" pager=\"false\" [options]=\"favourite\">\n    <ion-slide>\n      <figure style=\"background-color: #5b352e;\">\n        <img src=\"../../assets/15yo-single-malt-scotch-whisky.png\">\n        <span>Glenfiddich</span>\n      </figure>\n    </ion-slide>\n    <ion-slide>\n      <figure style=\"background-color: #808000;\">\n        <img src=\"../../assets/wine_PNG9461.png\">\n        <span>First Press</span>\n      </figure>\n    </ion-slide>\n    <ion-slide>\n      <figure>\n        <img src=\"../../assets/corona_extra_355ml_sml.png\">\n        <span>Corona</span>\n      </figure>\n    </ion-slide>\n    <ion-slide>\n      <figure style=\"background-color: #a82b30;\"> \n        <img src=\"../../assets/SmirnoffVodka.png\">\n        <span>Smirnoff</span>\n      </figure>\n    </ion-slide>\n    <ion-slide>\n      <figure style=\"background-color: #357305;\">\n        <img src=\"../../assets/Tanqueray-Ten-Gin-750ml-1.png\">\n        <span>Tanqueray</span>\n      </figure>\n    </ion-slide>\n  </ion-slides>\n\n  <ion-item-divider>\n    Watch Lists\n  </ion-item-divider>\n\n  <ion-slides class=\"wishlist_banner\" pager=\"false\" [options]=\"wishlists\">\n    <ion-slide>\n      <img src=\"../../assets/aberlour_132.jpeg\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/ailsabay_132.jpeg\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/balblair_132.jpeg\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/ardbeg_132.jpeg\">\n    </ion-slide>\n    <ion-slide>\n      <img src=\"../../assets/bladnoch_132.jpeg\">\n    </ion-slide>\n  </ion-slides>\n\n\n  <ion-item-divider>\n    Categories\n  </ion-item-divider>\n\n  <ion-slides class=\"category_banner\" pager=\"false\" [options]=\"categories\">\n    <ion-slide>\n      <figure style=\"background-color: #cec2c0;\">\n        <div class=\"category_text\">\n          <span>Whisky</span>\n          <span>16 Brands</span>\n        </div>\n        <img src=\"../../assets/15yo-single-malt-scotch-whisky.png\">\n      </figure>\n    </ion-slide>\n    <ion-slide>\n      <figure style=\"background-color: #d9d9b3;\">\n        <div class=\"category_text\">\n          <span>Wine</span>\n          <span>16 Brands</span>\n        </div>\n        <img src=\"../../assets/wine_PNG9461.png\">\n      </figure>\n    </ion-slide>\n    <ion-slide>\n      <figure style=\"background-color: #fff3b3;\">\n        <div class=\"category_text\">\n          <span>Beer</span>\n          <span>16 Brands</span>\n        </div>\n        <img src=\"../../assets/corona_extra_355ml_sml.png\">\n      </figure>\n    </ion-slide>\n    <ion-slide>\n      <figure style=\"background-color: #e5bfc1;\"> \n        <div class=\"category_text\">\n          <span>Smirnoff</span>\n          <span>16 Brands</span>\n        </div>\n        <img src=\"../../assets/SmirnoffVodka.png\">\n      </figure>\n    </ion-slide>\n    <ion-slide>\n      <figure style=\"background-color: #c2d5b4;\">\n        <div class=\"category_text\">\n          <span>Gin</span>\n          <span>16 Brands</span>\n        </div>\n        <img src=\"../../assets/Tanqueray-Ten-Gin-750ml-1.png\">\n      </figure>\n    </ion-slide>\n  </ion-slides>\n\n\n\n<div class=\"liquidity_vault_button\" (click)=\"gotoliqudityVault()\">\n  <!-- <img src=\"assets/vault.svg\"> -->\n  <h4>Try<br/>Liquidity Vault</h4>\n  <!-- <div class=\"bottom_button\">\n    <p>Lorem ipsum dolor sit amet, quas commodo aliquam id sit, eos probo prima molestie cu, partiendo intellegebat an est.</p>\n  </div> -->\n</div>\n\n<ion-item-divider>\n  Outlets\n</ion-item-divider>\n\n<div class=\"store_list\">\n  <div class=\"store_item\" *ngFor=\"let item of shops\" (click)=\"gotoshopproduct(item.id,item)\">\n    <figure>\n      <ion-img src=\"{{item.image}}\"></ion-img>\n    </figure>\n    <figcaption>\n      <div class=\"outlet_distance\">\n        <h4 class=\"shopTitle\"><strong>{{item.name}}</strong></h4>\n        <p>{{item.address}}</p>\n      </div>\n      <div class=\"distance_sec\">\n        <small><ion-icon name=\"star\"></ion-icon> {{item.rating}}</small>\n      </div>\n    </figcaption>\n  </div>\n</div>\n\n\n<!-- <ul class=\"store_list\">\n  <li *ngFor=\"let item of shops\" (click)=\"gotoshopproduct(item.id,item)\">\n    <div class=\"img_wrap\" style=\"background: url({{item.image}}) no-repeat center; background-size: cover;\">\n      <span class=\"rating\">{{item.rating}}</span>\n      <div class=\"box_content\">\n        <h2>{{item.name}}</h2>\n        <p>{{item.address}}</p>\n      </div>\n    </div>\n  </li>\n</ul> -->\n<!-- <ion-fab vertical=\"bottom\" slot=\"fixed\" side=\"bottom\" horizontal=\"end\">\n    <ion-fab-button><img src=\"assets/filter.png\"></ion-fab-button>\n </ion-fab> -->\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/filter-distance/filter-distance.component.scss":
    /*!****************************************************************!*\
      !*** ./src/app/filter-distance/filter-distance.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppFilterDistanceFilterDistanceComponentScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #ffffff;\n  --padding-top: 35px;\n}\nion-content .ion-header {\n  display: flex;\n  padding: 0 30px;\n  margin: 65px auto 0;\n  align-items: center;\n  justify-content: space-between;\n}\nion-content .ion-header .logo {\n  display: block;\n}\nion-content .ion-header .back_button {\n  display: flex;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  background-color: #202c40;\n  align-items: center;\n  justify-content: center;\n}\nion-content .ion-header .cross_button {\n  display: flex;\n  width: 36px;\n  height: 36px;\n  border-radius: 18px;\n  background-color: #202c40;\n  align-items: center;\n  justify-content: center;\n}\nion-content .ion-header h4 {\n  margin: 0;\n  color: #fff;\n  font-size: 18px;\n}\nion-content .event_form {\n  padding: 0 10px;\n}\nion-content .event_form ion-item {\n  --background: transparent;\n  --border-width: 0;\n  --min-height: 1px;\n  --padding-start: 0;\n  --padding-end: 0;\n  --inner-padding-end: 0;\n  --highlight-color-focused: transparent;\n  margin-bottom: 5px;\n}\nion-content .event_form ion-item ion-label {\n  font-size: 15px;\n  color: #000000;\n  font-weight: 600;\n  transform: translateY(0) scale(1);\n  margin: 0;\n  padding: 12px;\n}\nion-content .event_form ion-item ion-label ion-icon {\n  margin-right: 8px;\n  vertical-align: sub;\n  font-size: 18px;\n}\nion-content .event_form ion-item ion-input {\n  font-size: 15px;\n  width: 100%;\n  min-height: 45px;\n  border-radius: 10px;\n  background-color: rgba(231, 231, 231, 0.48);\n  border: 1px solid rgba(255, 212, 212, 0.5);\n  line-height: 45px;\n  --padding-top: 0;\n  --padding-start: 10px;\n  --padding-end: 10px;\n  --padding-bottom: 0;\n}\nion-content .event_form ion-button {\n  margin: 35px auto 15px;\n  max-width: 170px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyLWRpc3RhbmNlL2ZpbHRlci1kaXN0YW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0YsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjtBQUNFO0VBQ0MsY0FBQTtBQUNIO0FBQ0U7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNIO0FBQ0U7RUFDQyxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNIO0FBQ0U7RUFDQyxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFDSDtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBRVE7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGtCQUFBO0FBQVo7QUFFWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUVBLFNBQUE7RUFDQSxhQUFBO0FBRGhCO0FBRWdCO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFBcEI7QUFJWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsMENBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRmhCO0FBS1E7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBSFoiLCJmaWxlIjoic3JjL2FwcC9maWx0ZXItZGlzdGFuY2UvZmlsdGVyLWRpc3RhbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgLS1wYWRkaW5nLXRvcDogMzVweDtcclxuXHJcbiAgICAuaW9uLWhlYWRlciB7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZzogMCAzMHB4O1xyXG5cdFx0bWFyZ2luOiA2NXB4IGF1dG8gMDtcclxuXHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcblx0XHQubG9nbyB7XHJcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0fVxyXG5cdFx0LmJhY2tfYnV0dG9uIHtcclxuXHRcdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdFx0d2lkdGg6IDM2cHg7XHJcblx0XHRcdGhlaWdodDogMzZweDtcclxuXHRcdFx0Ym9yZGVyLXJhZGl1czogMThweDtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzIwMmM0MDtcclxuXHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdH1cclxuXHRcdC5jcm9zc19idXR0b24ge1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHR3aWR0aDogMzZweDtcclxuXHRcdFx0aGVpZ2h0OiAzNnB4O1xyXG5cdFx0XHRib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyYzQwO1xyXG5cdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0fVxyXG5cdFx0aDQge1xyXG5cdFx0XHRtYXJnaW46IDA7XHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHRmb250LXNpemU6IDE4cHg7XHJcblx0XHR9XHJcblx0fVxyXG4gICAgLmV2ZW50X2Zvcm0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBcclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gICAgICAgICAgICAtLW1pbi1oZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG5cclxuICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1YjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMSwyMzEsMjMxLDAuNDgpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjEyLDIxMiwwLjUpO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTBweDtcclxuICAgICAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzVweCBhdXRvIDE1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTcwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */";
      /***/
    },

    /***/
    "./src/app/filter-distance/filter-distance.component.ts":
    /*!**************************************************************!*\
      !*** ./src/app/filter-distance/filter-distance.component.ts ***!
      \**************************************************************/

    /*! exports provided: FilterDistanceComponent */

    /***/
    function srcAppFilterDistanceFilterDistanceComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FilterDistanceComponent", function () {
        return FilterDistanceComponent;
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

      var FilterDistanceComponent = /*#__PURE__*/function () {
        function FilterDistanceComponent(modalController, navCtrl) {
          _classCallCheck(this, FilterDistanceComponent);

          this.modalController = modalController;
          this.navCtrl = navCtrl;
          this.distanceArray = [{
            name: '5 KM',
            value: 5
          }, {
            name: '10 KM',
            value: 10
          }, {
            name: '15 KM',
            value: 15
          }, {
            name: '20 KM',
            value: 20
          }, {
            name: '25 KM',
            value: 25
          }, {
            name: '30 KM',
            value: 30
          }, {
            name: '35 KM',
            value: 35
          }, {
            name: '40 KM',
            value: 40
          }, {
            name: '45 KM',
            value: 45
          }, {
            name: '50 KM',
            value: 50
          }];
        }

        _createClass(FilterDistanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "chooseDistance",
          value: function chooseDistance(distance) {
            console.log('d=' + distance);
            localStorage.setItem('setDistance', distance);
            this.modalController.dismiss();
            this.navCtrl.navigateForward('/filter-distance-result');
          }
          /**
           * This method is calling for close modal
          */

        }, {
          key: "close",
          value: function close() {
            this.modalController.dismiss();
          }
        }]);

        return FilterDistanceComponent;
      }();

      FilterDistanceComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
        }];
      };

      FilterDistanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-filter-distance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./filter-distance.component.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/filter-distance/filter-distance.component.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./filter-distance.component.scss */
        "./src/app/filter-distance/filter-distance.component.scss"))["default"]]
      })], FilterDistanceComponent);
      /***/
    },

    /***/
    "./src/app/homenew/homenew-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/homenew/homenew-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: HomenewPageRoutingModule */

    /***/
    function srcAppHomenewHomenewRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomenewPageRoutingModule", function () {
        return HomenewPageRoutingModule;
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


      var _homenew_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./homenew.page */
      "./src/app/homenew/homenew.page.ts");
      /* harmony import */


      var _filter_distance_filter_distance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../filter-distance/filter-distance.component */
      "./src/app/filter-distance/filter-distance.component.ts");

      var routes = [{
        path: '',
        component: _homenew_page__WEBPACK_IMPORTED_MODULE_3__["HomenewPage"]
      }, {
        path: '/filter',
        component: _filter_distance_filter_distance_component__WEBPACK_IMPORTED_MODULE_4__["FilterDistanceComponent"]
      }];

      var HomenewPageRoutingModule = /*#__PURE__*/_createClass(function HomenewPageRoutingModule() {
        _classCallCheck(this, HomenewPageRoutingModule);
      });

      HomenewPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], HomenewPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/homenew/homenew.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/homenew/homenew.module.ts ***!
      \*******************************************/

    /*! exports provided: HomenewPageModule */

    /***/
    function srcAppHomenewHomenewModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomenewPageModule", function () {
        return HomenewPageModule;
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


      var _homenew_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./homenew-routing.module */
      "./src/app/homenew/homenew-routing.module.ts");
      /* harmony import */


      var _homenew_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./homenew.page */
      "./src/app/homenew/homenew.page.ts");
      /* harmony import */


      var _filter_distance_filter_distance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../filter-distance/filter-distance.component */
      "./src/app/filter-distance/filter-distance.component.ts");

      var HomenewPageModule = /*#__PURE__*/_createClass(function HomenewPageModule() {
        _classCallCheck(this, HomenewPageModule);
      });

      HomenewPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _homenew_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomenewPageRoutingModule"]],
        declarations: [_homenew_page__WEBPACK_IMPORTED_MODULE_6__["HomenewPage"], _filter_distance_filter_distance_component__WEBPACK_IMPORTED_MODULE_7__["FilterDistanceComponent"]]
      })], HomenewPageModule);
      /***/
    },

    /***/
    "./src/app/homenew/homenew.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/homenew/homenew.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppHomenewHomenewPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #ffffff;\n}\nion-content .banner_wraper {\n  padding: 10px 0;\n}\nion-content .banner_wraper img {\n  border-radius: 10px;\n  max-height: 120px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content ion-item-divider {\n  --padding-start: 10px;\n  --background: transparent;\n  font-size: 20px;\n  letter-spacing: 0.5px;\n  font-weight: 500;\n  margin-bottom: 10px;\n  border: none;\n}\nion-content .wishlist_banner {\n  padding-left: 10px;\n  margin-bottom: 20px;\n}\nion-content .wishlist_banner img {\n  border: 1px solid #FFD700;\n  border-radius: 50%;\n  width: 76px;\n  height: 66px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n}\nion-content .favourite_items {\n  padding-left: 10px;\n  margin-bottom: 20px;\n}\nion-content .favourite_items figure {\n  margin: 0;\n  background: #FFD700;\n  height: 150px;\n  border-radius: 8px;\n  width: 100%;\n  margin-top: 60px;\n}\nion-content .favourite_items figure img {\n  position: relative;\n  height: 160px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  top: -60px;\n  max-height: 160px;\n}\nion-content .favourite_items figure span {\n  font-family: \"Barlow Condensed\", sans-serif;\n  display: inline-block;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  margin: 0 0 10px;\n  padding: 5px 0;\n  position: relative;\n  top: -60px;\n  font-size: 20px;\n  text-transform: uppercase;\n  font-weight: 600;\n}\nion-content .category_banner {\n  padding-left: 10px;\n  margin-bottom: 20px;\n}\nion-content .category_banner ion-slide:last-child {\n  margin-right: 10px;\n}\nion-content .category_banner figure {\n  margin: 0;\n  background: #FFD700;\n  height: 80px;\n  border-radius: 6px;\n  width: 100%;\n  padding: 16px 16px 20px;\n  display: flex;\n  justify-content: space-between;\n  margin-top: 40px;\n}\nion-content .category_banner figure img {\n  position: relative;\n  height: 120px;\n  -o-object-fit: scale-down;\n     object-fit: scale-down;\n  top: -50px;\n  max-height: 120px;\n}\nion-content .category_banner figure .category_text {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n}\nion-content .category_banner figure .category_text span:first-child {\n  margin-bottom: auto;\n  font-size: 16px;\n  line-height: 1;\n  font-family: \"Barlow Condensed\", sans-serif;\n  font-weight: 600;\n}\nion-content .category_banner figure .category_text span:last-child {\n  font-size: 14px;\n  line-height: 1;\n  font-family: \"Barlow Condensed\", sans-serif;\n}\nion-content .store_list {\n  display: flex;\n  padding: 0 10px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\nion-content .store_list .store_item {\n  display: block;\n  width: calc((100% - 16px) / 2);\n}\nion-content .store_list .store_item figure {\n  margin: 0;\n  border-radius: 10px;\n  overflow: hidden;\n  margin: 10px 0;\n  position: relative;\n}\nion-content .store_list .store_item figure ion-img {\n  width: 100%;\n  height: 120px;\n  --border-radius: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .store_list .store_item figure ion-img image {\n  width: 100%;\n  height: 120px;\n  --border-radius: 10px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .store_list .store_item figure img {\n  width: 100%;\n  height: 100px;\n  border-radius: 15px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\nion-content .store_list .store_item figure span {\n  background: rgba(255, 255, 255, 0.7);\n  -webkit-backdrop-filter: blur(5px);\n          backdrop-filter: blur(5px);\n  display: block;\n  padding: 6px;\n  border-top-right-radius: 10px;\n  border-bottom-left-radius: 10px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 9;\n  line-height: 1;\n}\nion-content .store_list .store_item figcaption {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n}\nion-content .store_list .store_item figcaption h4 {\n  font-size: 16px;\n  font-weight: 500;\n  margin: 0 0 5px;\n}\nion-content .store_list .store_item figcaption p {\n  margin: 0;\n}\nion-content .store_list .store_item figcaption .distance_sec {\n  flex: 0 0 auto;\n}\nion-content .store_list .store_item figcaption .distance_sec small {\n  display: flex;\n  align-items: center;\n}\nion-content .store_list .store_item figcaption .distance_sec small ion-icon {\n  margin-right: 5px;\n  color: #FFD700;\n}\nion-content .liquidity_vault_button {\n  width: calc(100% - 20px);\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  height: 100px;\n  padding: 30px 30px;\n  border-radius: 10px;\n  margin-bottom: 20px;\n  background: url('try_vault.png') right center no-repeat;\n  background-size: cover;\n}\nion-content .liquidity_vault_button img {\n  width: auto;\n  max-height: 80px;\n  flex: 0 0 auto;\n}\nion-content .liquidity_vault_button h4 {\n  font-size: 24px;\n  flex: 1 0 0%;\n  margin: 0;\n  position: relative;\n  color: #FFD700;\n}\nion-content .slide_item .slide_box .box_content h2 {\n  font-size: 12px;\n  font-weight: 700;\n  margin-bottom: 0px;\n  line-height: 1.2;\n}\nion-content .slide_item .slide_box .box_content p {\n  color: #808080;\n  font-size: 8px;\n  font-family: \"Nexa\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZW5ldy9ob21lbmV3LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHFCQUFBO0FBQ0Q7QUFDQztFQUNDLGVBQUE7QUFDRjtBQUNFO0VBQ0MsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBQ0g7QUFHQztFQUNDLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQURGO0FBR0M7RUFDQyxrQkFBQTtFQUNBLG1CQUFBO0FBREY7QUFHRTtFQUNDLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7QUFESDtBQUtDO0VBQ0Msa0JBQUE7RUFDQSxtQkFBQTtBQUhGO0FBS0U7RUFDQyxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFISDtBQUtHO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUhKO0FBTUc7RUFDQywyQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBSko7QUFTQztFQUNDLGtCQUFBO0VBQ0EsbUJBQUE7QUFQRjtBQVVHO0VBQ0Msa0JBQUE7QUFSSjtBQVlFO0VBQ0MsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFWSDtBQVlHO0VBQ0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQVZKO0FBYUc7RUFDQyxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQVhKO0FBY0s7RUFDQyxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQVpOO0FBZUs7RUFDQyxlQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0FBYk47QUFxQkM7RUFDQyxhQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQW5CRjtBQXFCRTtFQUNDLGNBQUE7RUFDQSw4QkFBQTtBQW5CSDtBQXFCRztFQUNDLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBbkJKO0FBcUJJO0VBQ0MsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0tBQUEsaUJBQUE7QUFuQkw7QUFxQks7RUFDQyxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7S0FBQSxpQkFBQTtBQW5CTjtBQXVCSTtFQUNDLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0FBckJMO0FBd0JJO0VBQ0Msb0NBQUE7RUFDQSxrQ0FBQTtVQUFBLDBCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FBdEJMO0FBeUJHO0VBQ0MsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsOEJBQUE7QUF2Qko7QUF5Qkk7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBdkJMO0FBeUJJO0VBQ0MsU0FBQTtBQXZCTDtBQTBCSTtFQUNDLGNBQUE7QUF4Qkw7QUEwQks7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7QUF4Qk47QUEwQk07RUFDQyxpQkFBQTtFQUNBLGNBQUE7QUF4QlA7QUFpQ0M7RUFDQyx3QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBTUEsdURBQUE7RUFDQSxzQkFBQTtBQXBDRjtBQXNDRTtFQUNDLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFwQ0g7QUFzQ0U7RUFDQyxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDRyxrQkFBQTtFQUNILGNBQUE7QUFwQ0g7QUE0Q0k7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBMUNMO0FBNENJO0VBQ0MsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQTFDTCIsImZpbGUiOiJzcmMvYXBwL2hvbWVuZXcvaG9tZW5ldy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG5cdC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcblxuXHQuYmFubmVyX3dyYXBlciB7XG5cdFx0cGFkZGluZzogMTBweCAwO1xuXG5cdFx0aW1nIHtcblx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRtYXgtaGVpZ2h0OiAxMjBweDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cdFx0fVxuXHR9XG5cblx0aW9uLWl0ZW0tZGl2aWRlciB7XG5cdFx0LS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuXHRcdC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cdFx0Zm9udC1zaXplOiAyMHB4O1xuXHRcdGxldHRlci1zcGFjaW5nOiAwLjVweDtcblx0XHRmb250LXdlaWdodDogNTAwO1xuXHRcdG1hcmdpbi1ib3R0b206IDEwcHg7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHR9XG5cdC53aXNobGlzdF9iYW5uZXIge1xuXHRcdHBhZGRpbmctbGVmdDogMTBweDtcblx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG5cdFx0aW1nIHtcblx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNGRkQ3MDA7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0XHR3aWR0aDogNzZweDtcblx0XHRcdGhlaWdodDogNjZweDtcblx0XHRcdG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG5cdFx0fVxuXHR9XG5cblx0LmZhdm91cml0ZV9pdGVtcyB7XG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cblx0XHRmaWd1cmUge1xuXHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0YmFja2dyb3VuZDogI0ZGRDcwMDtcblx0XHRcdGhlaWdodDogMTUwcHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiA4cHg7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdG1hcmdpbi10b3A6IDYwcHg7XG5cblx0XHRcdGltZyB7XG5cdFx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdFx0aGVpZ2h0OiAxNjBweDtcblx0XHRcdFx0b2JqZWN0LWZpdDogc2NhbGUtZG93bjtcblx0XHRcdFx0dG9wOiAtNjBweDtcblx0XHRcdFx0bWF4LWhlaWdodDogMTYwcHg7XG5cdFx0XHR9XG5cblx0XHRcdHNwYW4ge1xuXHRcdFx0XHRmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNik7XG5cdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRtYXJnaW46IDAgMCAxMHB4O1xuXHRcdFx0XHRwYWRkaW5nOiA1cHggMDtcblx0XHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0XHR0b3A6IC02MHB4O1xuXHRcdFx0XHRmb250LXNpemU6IDIwcHg7XG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHRcdGZvbnQtd2VpZ2h0OiA2MDA7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LmNhdGVnb3J5X2Jhbm5lciB7XG5cdFx0cGFkZGluZy1sZWZ0OiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cblx0XHRpb24tc2xpZGUge1xuXHRcdFx0JjpsYXN0LWNoaWxkIHtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZpZ3VyZSB7XG5cdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRiYWNrZ3JvdW5kOiAjRkZENzAwO1xuXHRcdFx0aGVpZ2h0OiA4MHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogNnB4O1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRwYWRkaW5nOiAxNnB4IDE2cHggMjBweDtcblx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0XHRtYXJnaW4tdG9wOiA0MHB4O1xuXG5cdFx0XHRpbWcge1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0XHRcdGhlaWdodDogMTIwcHg7XG5cdFx0XHRcdG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG5cdFx0XHRcdHRvcDogLTUwcHg7XG5cdFx0XHRcdG1heC1oZWlnaHQ6IDEyMHB4O1xuXHRcdFx0fVxuXG5cdFx0XHQuY2F0ZWdvcnlfdGV4dCB7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdHRleHQtYWxpZ246IGxlZnQ7XG5cblx0XHRcdFx0c3BhbiB7XG5cdFx0XHRcdFx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiBhdXRvO1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQmOmxhc3QtY2hpbGQge1xuXHRcdFx0XHRcdFx0Zm9udC1zaXplOiAxNHB4O1xuXHRcdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdFx0XHRmb250LWZhbWlseTogJ0JhcmxvdyBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdFxuXHQuc3RvcmVfbGlzdCB7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRwYWRkaW5nOiAwIDEwcHg7XG5cdFx0ZmxleC13cmFwOiB3cmFwO1xuXHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXHRcdC5zdG9yZV9pdGVtIHtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0d2lkdGg6IGNhbGMoKDEwMCUgLSAxNnB4KSAvIDIpO1xuXG5cdFx0XHRmaWd1cmUge1xuXHRcdFx0XHRtYXJnaW46IDA7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0XHRcdG1hcmdpbjogMTBweCAwO1xuXHRcdFx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cblx0XHRcdFx0aW9uLWltZyB7XG5cdFx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdFx0aGVpZ2h0OiAxMjBweDtcblx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0b2JqZWN0LWZpdDogY292ZXI7XG5cblx0XHRcdFx0XHRpbWFnZSB7XG5cdFx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0XHRcdGhlaWdodDogMTIwcHg7XG5cdFx0XHRcdFx0XHQtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0XHRcdGhlaWdodDogMTAwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHRcdFx0XHRvYmplY3QtZml0OiBjb3Zlcjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHNwYW4ge1xuXHRcdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcblx0XHRcdFx0XHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNXB4KTtcblx0XHRcdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRcdFx0XHRwYWRkaW5nOiA2cHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcblx0XHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdFx0dG9wOiAwO1xuXHRcdFx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0XHRcdHotaW5kZXg6IDk7XG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDE7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZpZ2NhcHRpb24ge1xuXHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblx0XHRcdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG5cdFx0XHRcdGg0IHtcblx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG5cdFx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0XHRtYXJnaW46IDAgMCA1cHg7XG5cdFx0XHRcdH1cblx0XHRcdFx0cCB7XG5cdFx0XHRcdFx0bWFyZ2luOiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0LmRpc3RhbmNlX3NlYyB7XG5cdFx0XHRcdFx0ZmxleDogMCAwIGF1dG87XG5cblx0XHRcdFx0XHRzbWFsbCB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblxuXHRcdFx0XHRcdFx0aW9uLWljb24ge1xuXHRcdFx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDVweDtcblx0XHRcdFx0XHRcdFx0Y29sb3I6ICNGRkQ3MDA7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblxuXHQubGlxdWlkaXR5X3ZhdWx0X2J1dHRvbiB7XG5cdFx0d2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuXHRcdG1hcmdpbjogMCBhdXRvO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDEwMHB4O1xuXHRcdHBhZGRpbmc6IDMwcHggMzBweDtcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdFx0Ly8gYmFja2dyb3VuZDogI2ZlZTJhMTtcblx0XHQvLyBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgI2ZlZTJhMSAwJSwgI2VjYzk3OCAxMDAlKTtcblx0XHQvLyBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAgI2ZlZTJhMSAwJSwjZWNjOTc4IDEwMCUpO1xuXHRcdC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgICNmZWUyYTEgMCUsI2VjYzk3OCAxMDAlKTtcblx0XHQvLyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nI2ZlZTJhMScsIGVuZENvbG9yc3RyPScjZWNjOTc4JyxHcmFkaWVudFR5cGU9MSApO1xuXHRcdGJhY2tncm91bmQ6IHVybCguLi8uLi9hc3NldHMvdHJ5X3ZhdWx0LnBuZykgcmlnaHQgY2VudGVyIG5vLXJlcGVhdDtcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXG5cdFx0aW1nIHtcblx0XHRcdHdpZHRoOiBhdXRvO1xuXHRcdFx0bWF4LWhlaWdodDogODBweDtcblx0XHRcdGZsZXg6IDAgMCBhdXRvO1xuXHRcdH1cblx0XHRoNCB7XG5cdFx0XHRmb250LXNpemU6IDI0cHg7XG5cdFx0XHRmbGV4OiAxIDAgMCU7XG5cdFx0XHRtYXJnaW46IDA7XG4gICAgXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGNvbG9yOiAjRkZENzAwO1xuXHRcdH1cblx0fVxuXG5cdC5zbGlkZV9pdGVtIHtcblx0XHQuc2xpZGVfYm94IHtcblx0XHRcdC5ib3hfY29udGVudCB7XG5cdFx0XHRcdC8vIG1pbi1oZWlnaHQ6IDg5cHg7XG5cdFx0XHRcdGgye1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNzAwO1xuXHRcdFx0XHRcdG1hcmdpbi1ib3R0b206IDBweDtcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMS4yO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHAge1xuXHRcdFx0XHRcdGNvbG9yOiAjODA4MDgwO1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogOHB4O1xuXHRcdFx0XHRcdGZvbnQtZmFtaWx5OiAnTmV4YSc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "./src/app/homenew/homenew.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/homenew/homenew.page.ts ***!
      \*****************************************/

    /*! exports provided: HomenewPage */

    /***/
    function srcAppHomenewHomenewPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomenewPage", function () {
        return HomenewPage;
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


      var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/common.service */
      "./src/app/services/common.service.ts");
      /* harmony import */


      var src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/helper.service */
      "./src/app/services/helper.service.ts");
      /* harmony import */


      var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/authentication.service */
      "./src/app/services/authentication.service.ts");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/unique-device-id/ngx */
      "./node_modules/@ionic-native/unique-device-id/__ivy_ngcc__/ngx/index.js");
      /* harmony import */


      var _filter_distance_filter_distance_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../filter-distance/filter-distance.component */
      "./src/app/filter-distance/filter-distance.component.ts");

      var HomenewPage = /*#__PURE__*/function () {
        function HomenewPage(authService, navCtrl, accountProvider, commonProvider, alertCtrl, helper, plt, uniqueDeviceID, modalController, menu) {
          _classCallCheck(this, HomenewPage);

          this.authService = authService;
          this.navCtrl = navCtrl;
          this.accountProvider = accountProvider;
          this.commonProvider = commonProvider;
          this.alertCtrl = alertCtrl;
          this.helper = helper;
          this.plt = plt;
          this.uniqueDeviceID = uniqueDeviceID;
          this.modalController = modalController;
          this.menu = menu;
          this.shops = [];
          this.cities = [];
          this.banners = [];
          this.city = '1';
          this.slideOpts = {
            initialSlide: 0,
            speed: 600,
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 1.1,
            autoplay: true,
            loop: true
          };
          this.wishlists = {
            initialSlide: 0,
            speed: 600,
            spaceBetween: 16,
            centeredSlides: false,
            slidesPerView: 4.1,
            autoplay: false,
            loop: false
          };
          this.favourite = {
            initialSlide: 0,
            speed: 600,
            spaceBetween: 16,
            centeredSlides: false,
            slidesPerView: 3.1,
            autoplay: false,
            loop: false
          };
          this.categories = {
            initialSlide: 0,
            speed: 600,
            spaceBetween: 16,
            centeredSlides: false,
            slidesPerView: 2.8,
            autoplay: false,
            loop: false
          };
        }

        _createClass(HomenewPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.getUniqueDeviceID();
            var id = JSON.parse(localStorage.getItem("userDetails")).id; //Fetching wallet transactions

            this.accountProvider.fetchWalletTransactions(id).then(function (res) {
              if (res["status"] == "1") {
                localStorage.setItem('wallet_balance', res["wallet_balance"]);
                console.log(res);
              }
            })["catch"](function (err) {
              console.log(err);
            }); //fetching cities, banners, outlet list

            this.commonProvider.fetchHomePageData().then(function (res) {
              console.log(res);

              if (res["status"] == 1) {
                _this.cities = res["cities"];
                _this.shops = res["shops"];
                _this.banners = res["banners"];
              }
            })["catch"](function (err) {
              console.log(err);
            });
          }
        }, {
          key: "gotoshopproduct",
          value: function gotoshopproduct(liquorshopid, item) {
            localStorage.setItem("liquorshopid", liquorshopid);
            localStorage.setItem('shopDetails', JSON.stringify(item));
            this.navCtrl.navigateForward('/outlet-ordering-menu');
          }
        }, {
          key: "gotoliqudityVault",
          value: function gotoliqudityVault() {
            var uId = this.authService.getUserId();
            this.navCtrl.navigateForward('/vaulthome');
          }
        }, {
          key: "getUniqueDeviceID",
          value: function getUniqueDeviceID() {
            var _this2 = this;

            this.uniqueDeviceID.get().then(function (uuid) {
              console.log(uuid);
              _this2.UniqueDeviceID = uuid;
              localStorage.setItem('uniqueDeviceID', _this2.UniqueDeviceID); // this.helper.showErrorCustom(this.UniqueDeviceID);

              console.log(_this2.UniqueDeviceID);
            })["catch"](function (error) {
              console.log(error);
              _this2.UniqueDeviceID = "Error! ${error}";
            });
          }
        }, {
          key: "cart",
          value: function cart() {
            this.navCtrl.navigateForward('/cart');
          }
        }, {
          key: "search",
          value: function search() {
            this.navCtrl.navigateForward('/search');
          }
          /**
           * This method is for calling to show distance list
           */

        }, {
          key: "filterDistance",
          value: function filterDistance() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var modal;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: _filter_distance_filter_distance_component__WEBPACK_IMPORTED_MODULE_8__["FilterDistanceComponent"],
                      // breakpoints: [0.80],
                      // initialBreakpoint: 0.80,
                      cssClass: 'half-modal'
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      if (data['data'] != undefined) {
                        var user = data['data'];
                        console.log(user);
                        localStorage.setItem('addExtendedData', JSON.stringify(user));
                      }
                    });
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "openMenu",
          value: function openMenu() {
            this.menu.enable(true, 'content');
            this.menu.open('content');
          }
        }]);

        return HomenewPage;
      }();

      HomenewPage.ctorParameters = function () {
        return [{
          type: src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]
        }, {
          type: src_app_services_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountProvider"]
        }, {
          type: src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }, {
          type: src_app_services_helper_service__WEBPACK_IMPORTED_MODULE_3__["HelperProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"]
        }, {
          type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_7__["UniqueDeviceID"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
        }];
      };

      HomenewPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-homenew',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./homenew.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/homenew/homenew.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./homenew.page.scss */
        "./src/app/homenew/homenew.page.scss"))["default"]]
      })], HomenewPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=homenew-homenew-module-es5.js.map