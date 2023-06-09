(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["input-shims-ce03ee9f-js"], {
    /***/
    "./node_modules/@ionic/core/dist/esm/input-shims-ce03ee9f.js":
    /*!*******************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/input-shims-ce03ee9f.js ***!
      \*******************************************************************/

    /*! exports provided: startInputShims */

    /***/
    function node_modulesIonicCoreDistEsmInputShimsCe03ee9fJs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "startInputShims", function () {
        return startInputShims;
      });
      /* harmony import */


      var _helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./helpers-1457892a.js */
      "./node_modules/@ionic/core/dist/esm/helpers-1457892a.js");

      var cloneMap = new WeakMap();

      var relocateInput = function relocateInput(componentEl, inputEl, shouldRelocate) {
        var inputRelativeY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

        if (cloneMap.has(componentEl) === shouldRelocate) {
          return;
        }

        if (shouldRelocate) {
          addClone(componentEl, inputEl, inputRelativeY);
        } else {
          removeClone(componentEl, inputEl);
        }
      };

      var isFocused = function isFocused(input) {
        return input === input.getRootNode().activeElement;
      };

      var addClone = function addClone(componentEl, inputEl, inputRelativeY) {
        // this allows for the actual input to receive the focus from
        // the user's touch event, but before it receives focus, it
        // moves the actual input to a location that will not screw
        // up the app's layout, and does not allow the native browser
        // to attempt to scroll the input into place (messing up headers/footers)
        // the cloned input fills the area of where native input should be
        // while the native input fakes out the browser by relocating itself
        // before it receives the actual focus event
        // We hide the focused input (with the visible caret) invisible by making it scale(0),
        var parentEl = inputEl.parentNode; // DOM WRITES

        var clonedEl = inputEl.cloneNode(false);
        clonedEl.classList.add('cloned-input');
        clonedEl.tabIndex = -1;
        parentEl.appendChild(clonedEl);
        cloneMap.set(componentEl, clonedEl);
        var doc = componentEl.ownerDocument;
        var tx = doc.dir === 'rtl' ? 9999 : -9999;
        componentEl.style.pointerEvents = 'none';
        inputEl.style.transform = "translate3d(".concat(tx, "px,").concat(inputRelativeY, "px,0) scale(0)");
      };

      var removeClone = function removeClone(componentEl, inputEl) {
        var clone = cloneMap.get(componentEl);

        if (clone) {
          cloneMap["delete"](componentEl);
          clone.remove();
        }

        componentEl.style.pointerEvents = '';
        inputEl.style.transform = '';
      };

      var enableHideCaretOnScroll = function enableHideCaretOnScroll(componentEl, inputEl, scrollEl) {
        if (!scrollEl || !inputEl) {
          return function () {
            return;
          };
        }

        var scrollHideCaret = function scrollHideCaret(shouldHideCaret) {
          if (isFocused(inputEl)) {
            relocateInput(componentEl, inputEl, shouldHideCaret);
          }
        };

        var onBlur = function onBlur() {
          return relocateInput(componentEl, inputEl, false);
        };

        var hideCaret = function hideCaret() {
          return scrollHideCaret(true);
        };

        var showCaret = function showCaret() {
          return scrollHideCaret(false);
        };

        Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollStart', hideCaret);
        Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["a"])(scrollEl, 'ionScrollEnd', showCaret);
        inputEl.addEventListener('blur', onBlur);
        return function () {
          Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollStart', hideCaret);
          Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["b"])(scrollEl, 'ionScrollEnd', showCaret);
          inputEl.addEventListener('ionBlur', onBlur);
        };
      };

      var SKIP_SELECTOR = 'input, textarea, [no-blur], [contenteditable]';

      var enableInputBlurring = function enableInputBlurring() {
        var focused = true;
        var didScroll = false;
        var doc = document;

        var onScroll = function onScroll() {
          didScroll = true;
        };

        var onFocusin = function onFocusin() {
          focused = true;
        };

        var onTouchend = function onTouchend(ev) {
          // if app did scroll return early
          if (didScroll) {
            didScroll = false;
            return;
          }

          var active = doc.activeElement;

          if (!active) {
            return;
          } // only blur if the active element is a text-input or a textarea


          if (active.matches(SKIP_SELECTOR)) {
            return;
          } // if the selected target is the active element, do not blur


          var tapped = ev.target;

          if (tapped === active) {
            return;
          }

          if (tapped.matches(SKIP_SELECTOR) || tapped.closest(SKIP_SELECTOR)) {
            return;
          }

          focused = false; // TODO: find a better way, why 50ms?

          setTimeout(function () {
            if (!focused) {
              active.blur();
            }
          }, 50);
        };

        Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["a"])(doc, 'ionScrollStart', onScroll);
        doc.addEventListener('focusin', onFocusin, true);
        doc.addEventListener('touchend', onTouchend, false);
        return function () {
          Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["b"])(doc, 'ionScrollStart', onScroll, true);
          doc.removeEventListener('focusin', onFocusin, true);
          doc.removeEventListener('touchend', onTouchend, false);
        };
      };

      var SCROLL_ASSIST_SPEED = 0.3;

      var getScrollData = function getScrollData(componentEl, contentEl, keyboardHeight) {
        var itemEl = componentEl.closest('ion-item,[ion-item]') || componentEl;
        return calcScrollData(itemEl.getBoundingClientRect(), contentEl.getBoundingClientRect(), keyboardHeight, componentEl.ownerDocument.defaultView.innerHeight);
      };

      var calcScrollData = function calcScrollData(inputRect, contentRect, keyboardHeight, platformHeight) {
        // compute input's Y values relative to the body
        var inputTop = inputRect.top;
        var inputBottom = inputRect.bottom; // compute visible area

        var visibleAreaTop = contentRect.top;
        var visibleAreaBottom = Math.min(contentRect.bottom, platformHeight - keyboardHeight); // compute safe area

        var safeAreaTop = visibleAreaTop + 15;
        var safeAreaBottom = visibleAreaBottom * 0.75; // figure out if each edge of the input is within the safe area

        var distanceToBottom = safeAreaBottom - inputBottom;
        var distanceToTop = safeAreaTop - inputTop; // desiredScrollAmount is the negated distance to the safe area according to our calculations.

        var desiredScrollAmount = Math.round(distanceToBottom < 0 ? -distanceToBottom : distanceToTop > 0 ? -distanceToTop : 0); // our calculations make some assumptions that aren't always true, like the keyboard being closed when an input
        // gets focus, so make sure we don't scroll the input above the visible area

        var scrollAmount = Math.min(desiredScrollAmount, inputTop - visibleAreaTop);
        var distance = Math.abs(scrollAmount);
        var duration = distance / SCROLL_ASSIST_SPEED;
        var scrollDuration = Math.min(400, Math.max(150, duration));
        return {
          scrollAmount: scrollAmount,
          scrollDuration: scrollDuration,
          scrollPadding: keyboardHeight,
          inputSafeY: -(inputTop - safeAreaTop) + 4
        };
      };

      var enableScrollAssist = function enableScrollAssist(componentEl, inputEl, contentEl, footerEl, keyboardHeight) {
        var coord;

        var touchStart = function touchStart(ev) {
          coord = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev);
        };

        var touchEnd = function touchEnd(ev) {
          // input cover touchend/mouseup
          if (!coord) {
            return;
          } // get where the touchend/mouseup ended


          var endCoord = Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["p"])(ev); // focus this input if the pointer hasn't moved XX pixels
          // and the input doesn't already have focus

          if (!hasPointerMoved(6, coord, endCoord) && !isFocused(inputEl)) {
            ev.stopPropagation(); // begin the input focus process

            jsSetFocus(componentEl, inputEl, contentEl, footerEl, keyboardHeight);
          }
        };

        componentEl.addEventListener('touchstart', touchStart, true);
        componentEl.addEventListener('touchend', touchEnd, true);
        return function () {
          componentEl.removeEventListener('touchstart', touchStart, true);
          componentEl.removeEventListener('touchend', touchEnd, true);
        };
      };

      var jsSetFocus = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(componentEl, inputEl, contentEl, footerEl, keyboardHeight) {
          var scrollData, scrollContentTimeout, scrollContent, doubleKeyboardEventListener, scrollEl, totalScrollAmount;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!(!contentEl && !footerEl)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                scrollData = getScrollData(componentEl, contentEl || footerEl, keyboardHeight);

                if (!(contentEl && Math.abs(scrollData.scrollAmount) < 4)) {
                  _context2.next = 6;
                  break;
                }

                // the text input is in a safe position that doesn't
                // require it to be scrolled into view, just set focus now
                inputEl.focus();
                return _context2.abrupt("return");

              case 6:
                // temporarily move the focus to the focus holder so the browser
                // doesn't freak out while it's trying to get the input in place
                // at this point the native text input still does not have focus
                relocateInput(componentEl, inputEl, true, scrollData.inputSafeY);
                inputEl.focus();
                /**
                 * Relocating/Focusing input causes the
                 * click event to be cancelled, so
                 * manually fire one here.
                 */

                Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["r"])(function () {
                  return componentEl.click();
                });
                /* tslint:disable-next-line */

                if (!(typeof window !== 'undefined')) {
                  _context2.next = 22;
                  break;
                }

                scrollContent = /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          // clean up listeners and timeouts
                          if (scrollContentTimeout !== undefined) {
                            clearTimeout(scrollContentTimeout);
                          }

                          window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
                          window.removeEventListener('ionKeyboardDidShow', scrollContent); // scroll the input into place

                          if (!contentEl) {
                            _context.next = 6;
                            break;
                          }

                          _context.next = 6;
                          return contentEl.scrollByPoint(0, scrollData.scrollAmount, scrollData.scrollDuration);

                        case 6:
                          // the scroll view is in the correct position now
                          // give the native text input focus
                          relocateInput(componentEl, inputEl, false, scrollData.inputSafeY); // ensure this is the focused input

                          inputEl.focus();

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee);
                  }));

                  return function scrollContent() {
                    return _ref2.apply(this, arguments);
                  };
                }();

                doubleKeyboardEventListener = function doubleKeyboardEventListener() {
                  window.removeEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
                  window.addEventListener('ionKeyboardDidShow', scrollContent);
                };

                if (!contentEl) {
                  _context2.next = 21;
                  break;
                }

                _context2.next = 15;
                return contentEl.getScrollElement();

              case 15:
                scrollEl = _context2.sent;

                /**
                 * scrollData will only consider the amount we need
                 * to scroll in order to properly bring the input
                 * into view. It will not consider the amount
                 * we can scroll in the content element.
                 * As a result, scrollData may request a greater
                 * scroll position than is currently available
                 * in the DOM. If this is the case, we need to
                 * wait for the webview to resize/the keyboard
                 * to show in order for additional scroll
                 * bandwidth to become available.
                 */
                totalScrollAmount = scrollEl.scrollHeight - scrollEl.clientHeight;

                if (!(scrollData.scrollAmount > totalScrollAmount - scrollEl.scrollTop)) {
                  _context2.next = 21;
                  break;
                }

                /**
                 * On iOS devices, the system will show a "Passwords" bar above the keyboard
                 * after the initial keyboard is shown. This prevents the webview from resizing
                 * until the "Passwords" bar is shown, so we need to wait for that to happen first.
                 */
                if (inputEl.type === 'password') {
                  // Add 50px to account for the "Passwords" bar
                  scrollData.scrollAmount += 50;
                  window.addEventListener('ionKeyboardDidShow', doubleKeyboardEventListener);
                } else {
                  window.addEventListener('ionKeyboardDidShow', scrollContent);
                }
                /**
                 * This should only fire in 2 instances:
                 * 1. The app is very slow.
                 * 2. The app is running in a browser on an old OS
                 * that does not support Ionic Keyboard Events
                 */


                scrollContentTimeout = setTimeout(scrollContent, 1000);
                return _context2.abrupt("return");

              case 21:
                scrollContent();

              case 22:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));

        return function jsSetFocus(_x, _x2, _x3, _x4, _x5) {
          return _ref.apply(this, arguments);
        };
      }();

      var hasPointerMoved = function hasPointerMoved(threshold, startCoord, endCoord) {
        if (startCoord && endCoord) {
          var deltaX = startCoord.x - endCoord.x;
          var deltaY = startCoord.y - endCoord.y;
          var distance = deltaX * deltaX + deltaY * deltaY;
          return distance > threshold * threshold;
        }

        return false;
      };

      var PADDING_TIMER_KEY = '$ionPaddingTimer';

      var enableScrollPadding = function enableScrollPadding(keyboardHeight) {
        var doc = document;

        var onFocusin = function onFocusin(ev) {
          setScrollPadding(ev.target, keyboardHeight);
        };

        var onFocusout = function onFocusout(ev) {
          setScrollPadding(ev.target, 0);
        };

        doc.addEventListener('focusin', onFocusin);
        doc.addEventListener('focusout', onFocusout);
        return function () {
          doc.removeEventListener('focusin', onFocusin);
          doc.removeEventListener('focusout', onFocusout);
        };
      };

      var setScrollPadding = function setScrollPadding(input, keyboardHeight) {
        if (input.tagName !== 'INPUT') {
          return;
        }

        if (input.parentElement && input.parentElement.tagName === 'ION-INPUT') {
          return;
        }

        if (input.parentElement && input.parentElement.parentElement && input.parentElement.parentElement.tagName === 'ION-SEARCHBAR') {
          return;
        }

        var el = input.closest('ion-content');

        if (el === null) {
          return;
        }

        var timer = el[PADDING_TIMER_KEY];

        if (timer) {
          clearTimeout(timer);
        }

        if (keyboardHeight > 0) {
          el.style.setProperty('--keyboard-offset', "".concat(keyboardHeight, "px"));
        } else {
          el[PADDING_TIMER_KEY] = setTimeout(function () {
            el.style.setProperty('--keyboard-offset', '0px');
          }, 120);
        }
      };

      var INPUT_BLURRING = true;
      var SCROLL_PADDING = true;

      var startInputShims = function startInputShims(config) {
        var doc = document;
        var keyboardHeight = config.getNumber('keyboardHeight', 290);
        var scrollAssist = config.getBoolean('scrollAssist', true);
        var hideCaret = config.getBoolean('hideCaretOnScroll', true);
        var inputBlurring = config.getBoolean('inputBlurring', true);
        var scrollPadding = config.getBoolean('scrollPadding', true);
        var inputs = Array.from(doc.querySelectorAll('ion-input, ion-textarea'));
        var hideCaretMap = new WeakMap();
        var scrollAssistMap = new WeakMap();

        var registerInput = /*#__PURE__*/function () {
          var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(componentEl) {
            var inputRoot, inputEl, scrollEl, footerEl, rmFn, _rmFn;

            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return new Promise(function (resolve) {
                    return Object(_helpers_1457892a_js__WEBPACK_IMPORTED_MODULE_0__["c"])(componentEl, resolve);
                  });

                case 2:
                  inputRoot = componentEl.shadowRoot || componentEl;
                  inputEl = inputRoot.querySelector('input') || inputRoot.querySelector('textarea');
                  scrollEl = componentEl.closest('ion-content');
                  footerEl = !scrollEl ? componentEl.closest('ion-footer') : null;

                  if (inputEl) {
                    _context3.next = 8;
                    break;
                  }

                  return _context3.abrupt("return");

                case 8:
                  if (!!scrollEl && hideCaret && !hideCaretMap.has(componentEl)) {
                    rmFn = enableHideCaretOnScroll(componentEl, inputEl, scrollEl);
                    hideCaretMap.set(componentEl, rmFn);
                  }

                  if ((!!scrollEl || !!footerEl) && scrollAssist && !scrollAssistMap.has(componentEl)) {
                    _rmFn = enableScrollAssist(componentEl, inputEl, scrollEl, footerEl, keyboardHeight);
                    scrollAssistMap.set(componentEl, _rmFn);
                  }

                case 10:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));

          return function registerInput(_x6) {
            return _ref3.apply(this, arguments);
          };
        }();

        var unregisterInput = function unregisterInput(componentEl) {
          if (hideCaret) {
            var fn = hideCaretMap.get(componentEl);

            if (fn) {
              fn();
            }

            hideCaretMap["delete"](componentEl);
          }

          if (scrollAssist) {
            var _fn = scrollAssistMap.get(componentEl);

            if (_fn) {
              _fn();
            }

            scrollAssistMap["delete"](componentEl);
          }
        };

        if (inputBlurring && INPUT_BLURRING) {
          enableInputBlurring();
        }

        if (scrollPadding && SCROLL_PADDING) {
          enableScrollPadding(keyboardHeight);
        } // Input might be already loaded in the DOM before ion-device-hacks did.
        // At this point we need to look for all of the inputs not registered yet
        // and register them.


        for (var _i = 0, _inputs = inputs; _i < _inputs.length; _i++) {
          var input = _inputs[_i];
          registerInput(input);
        }

        doc.addEventListener('ionInputDidLoad', function (ev) {
          registerInput(ev.detail);
        });
        doc.addEventListener('ionInputDidUnload', function (ev) {
          unregisterInput(ev.detail);
        });
      };
      /***/

    }
  }]);
})();
//# sourceMappingURL=input-shims-ce03ee9f-js-es5.js.map