const p = function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o);
  new MutationObserver(o => {
    for (const a of o)
      if (a.type === 'childList')
        for (const s of a.addedNodes)
          s.tagName === 'LINK' && s.rel === 'modulepreload' && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(o) {
    const a = {};
    return (
      o.integrity && (a.integrity = o.integrity),
      o.referrerpolicy && (a.referrerPolicy = o.referrerpolicy),
      o.crossorigin === 'use-credentials'
        ? (a.credentials = 'include')
        : o.crossorigin === 'anonymous'
        ? (a.credentials = 'omit')
        : (a.credentials = 'same-origin'),
      a
    );
  }
  function n(o) {
    if (o.ep) return;
    o.ep = !0;
    const a = t(o);
    fetch(o.href, a);
  }
};
p();
const scriptRel = 'modulepreload',
  seen = {},
  base = '/',
  __vitePreload = function (r, t) {
    return !t || t.length === 0
      ? r()
      : Promise.all(
          t.map(n => {
            if (((n = `${base}${n}`), n in seen)) return;
            seen[n] = !0;
            const o = n.endsWith('.css'),
              a = o ? '[rel="stylesheet"]' : '';
            if (document.querySelector(`link[href="${n}"]${a}`)) return;
            const s = document.createElement('link');
            if (
              ((s.rel = o ? 'stylesheet' : scriptRel),
              o || ((s.as = 'script'), (s.crossOrigin = '')),
              (s.href = n),
              document.head.appendChild(s),
              o)
            )
              return new Promise((i, c) => {
                s.addEventListener('load', i),
                  s.addEventListener('error', () =>
                    c(new Error(`Unable to preload CSS for ${n}`))
                  );
              });
          })
        ).then(() => r());
  };
var commonjsGlobal =
  typeof globalThis != 'undefined'
    ? globalThis
    : typeof window != 'undefined'
    ? window
    : typeof global != 'undefined'
    ? global
    : typeof self != 'undefined'
    ? self
    : {};
function getDefaultExportFromCjs(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e;
}
function getAugmentedNamespace(e) {
  if (e.__esModule) return e;
  var r = Object.defineProperty({}, '__esModule', { value: !0 });
  return (
    Object.keys(e).forEach(function (t) {
      var n = Object.getOwnPropertyDescriptor(e, t);
      Object.defineProperty(
        r,
        t,
        n.get
          ? n
          : {
              enumerable: !0,
              get: function () {
                return e[t];
              }
            }
      );
    }),
    r
  );
}
function commonjsRequire(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
  );
}
var runtime = { exports: {} };
(function (e) {
  var r = (function (t) {
    var n = Object.prototype,
      o = n.hasOwnProperty,
      a,
      s = typeof Symbol == 'function' ? Symbol : {},
      i = s.iterator || '@@iterator',
      c = s.asyncIterator || '@@asyncIterator',
      l = s.toStringTag || '@@toStringTag';
    function u($, m, E) {
      return (
        Object.defineProperty($, m, {
          value: E,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }),
        $[m]
      );
    }
    try {
      u({}, '');
    } catch {
      u = function (m, E, C) {
        return (m[E] = C);
      };
    }
    function y($, m, E, C) {
      var O = m && m.prototype instanceof T ? m : T,
        q = Object.create(O.prototype),
        G = new N(C || []);
      return (q._invoke = I($, E, G)), q;
    }
    t.wrap = y;
    function d($, m, E) {
      try {
        return { type: 'normal', arg: $.call(m, E) };
      } catch (C) {
        return { type: 'throw', arg: C };
      }
    }
    var g = 'suspendedStart',
      h = 'suspendedYield',
      b = 'executing',
      w = 'completed',
      S = {};
    function T() {}
    function v() {}
    function _() {}
    var A = {};
    u(A, i, function () {
      return this;
    });
    var P = Object.getPrototypeOf,
      D = P && P(P(U([])));
    D && D !== n && o.call(D, i) && (A = D);
    var R = (_.prototype = T.prototype = Object.create(A));
    (v.prototype = _),
      u(R, 'constructor', _),
      u(_, 'constructor', v),
      (v.displayName = u(_, l, 'GeneratorFunction'));
    function k($) {
      ['next', 'throw', 'return'].forEach(function (m) {
        u($, m, function (E) {
          return this._invoke(m, E);
        });
      });
    }
    (t.isGeneratorFunction = function ($) {
      var m = typeof $ == 'function' && $.constructor;
      return m
        ? m === v || (m.displayName || m.name) === 'GeneratorFunction'
        : !1;
    }),
      (t.mark = function ($) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf($, _)
            : (($.__proto__ = _), u($, l, 'GeneratorFunction')),
          ($.prototype = Object.create(R)),
          $
        );
      }),
      (t.awrap = function ($) {
        return { __await: $ };
      });
    function j($, m) {
      function E(q, G, M, H) {
        var V = d($[q], $, G);
        if (V.type === 'throw') H(V.arg);
        else {
          var Y = V.arg,
            z = Y.value;
          return z && typeof z == 'object' && o.call(z, '__await')
            ? m.resolve(z.__await).then(
                function (W) {
                  E('next', W, M, H);
                },
                function (W) {
                  E('throw', W, M, H);
                }
              )
            : m.resolve(z).then(
                function (W) {
                  (Y.value = W), M(Y);
                },
                function (W) {
                  return E('throw', W, M, H);
                }
              );
        }
      }
      var C;
      function O(q, G) {
        function M() {
          return new m(function (H, V) {
            E(q, G, H, V);
          });
        }
        return (C = C ? C.then(M, M) : M());
      }
      this._invoke = O;
    }
    k(j.prototype),
      u(j.prototype, c, function () {
        return this;
      }),
      (t.AsyncIterator = j),
      (t.async = function ($, m, E, C, O) {
        O === void 0 && (O = Promise);
        var q = new j(y($, m, E, C), O);
        return t.isGeneratorFunction(m)
          ? q
          : q.next().then(function (G) {
              return G.done ? G.value : q.next();
            });
      });
    function I($, m, E) {
      var C = g;
      return function (q, G) {
        if (C === b) throw new Error('Generator is already running');
        if (C === w) {
          if (q === 'throw') throw G;
          return B();
        }
        for (E.method = q, E.arg = G; ; ) {
          var M = E.delegate;
          if (M) {
            var H = L(M, E);
            if (H) {
              if (H === S) continue;
              return H;
            }
          }
          if (E.method === 'next') E.sent = E._sent = E.arg;
          else if (E.method === 'throw') {
            if (C === g) throw ((C = w), E.arg);
            E.dispatchException(E.arg);
          } else E.method === 'return' && E.abrupt('return', E.arg);
          C = b;
          var V = d($, m, E);
          if (V.type === 'normal') {
            if (((C = E.done ? w : h), V.arg === S)) continue;
            return { value: V.arg, done: E.done };
          } else
            V.type === 'throw' &&
              ((C = w), (E.method = 'throw'), (E.arg = V.arg));
        }
      };
    }
    function L($, m) {
      var E = $.iterator[m.method];
      if (E === a) {
        if (((m.delegate = null), m.method === 'throw')) {
          if (
            $.iterator.return &&
            ((m.method = 'return'), (m.arg = a), L($, m), m.method === 'throw')
          )
            return S;
          (m.method = 'throw'),
            (m.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            ));
        }
        return S;
      }
      var C = d(E, $.iterator, m.arg);
      if (C.type === 'throw')
        return (m.method = 'throw'), (m.arg = C.arg), (m.delegate = null), S;
      var O = C.arg;
      if (!O)
        return (
          (m.method = 'throw'),
          (m.arg = new TypeError('iterator result is not an object')),
          (m.delegate = null),
          S
        );
      if (O.done)
        (m[$.resultName] = O.value),
          (m.next = $.nextLoc),
          m.method !== 'return' && ((m.method = 'next'), (m.arg = a));
      else return O;
      return (m.delegate = null), S;
    }
    k(R),
      u(R, l, 'Generator'),
      u(R, i, function () {
        return this;
      }),
      u(R, 'toString', function () {
        return '[object Generator]';
      });
    function F($) {
      var m = { tryLoc: $[0] };
      1 in $ && (m.catchLoc = $[1]),
        2 in $ && ((m.finallyLoc = $[2]), (m.afterLoc = $[3])),
        this.tryEntries.push(m);
    }
    function x($) {
      var m = $.completion || {};
      (m.type = 'normal'), delete m.arg, ($.completion = m);
    }
    function N($) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        $.forEach(F, this),
        this.reset(!0);
    }
    t.keys = function ($) {
      var m = [];
      for (var E in $) m.push(E);
      return (
        m.reverse(),
        function C() {
          for (; m.length; ) {
            var O = m.pop();
            if (O in $) return (C.value = O), (C.done = !1), C;
          }
          return (C.done = !0), C;
        }
      );
    };
    function U($) {
      if ($) {
        var m = $[i];
        if (m) return m.call($);
        if (typeof $.next == 'function') return $;
        if (!isNaN($.length)) {
          var E = -1,
            C = function O() {
              for (; ++E < $.length; )
                if (o.call($, E)) return (O.value = $[E]), (O.done = !1), O;
              return (O.value = a), (O.done = !0), O;
            };
          return (C.next = C);
        }
      }
      return { next: B };
    }
    t.values = U;
    function B() {
      return { value: a, done: !0 };
    }
    return (
      (N.prototype = {
        constructor: N,
        reset: function ($) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = a),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = a),
            this.tryEntries.forEach(x),
            !$)
          )
            for (var m in this)
              m.charAt(0) === 't' &&
                o.call(this, m) &&
                !isNaN(+m.slice(1)) &&
                (this[m] = a);
        },
        stop: function () {
          this.done = !0;
          var $ = this.tryEntries[0],
            m = $.completion;
          if (m.type === 'throw') throw m.arg;
          return this.rval;
        },
        dispatchException: function ($) {
          if (this.done) throw $;
          var m = this;
          function E(H, V) {
            return (
              (q.type = 'throw'),
              (q.arg = $),
              (m.next = H),
              V && ((m.method = 'next'), (m.arg = a)),
              !!V
            );
          }
          for (var C = this.tryEntries.length - 1; C >= 0; --C) {
            var O = this.tryEntries[C],
              q = O.completion;
            if (O.tryLoc === 'root') return E('end');
            if (O.tryLoc <= this.prev) {
              var G = o.call(O, 'catchLoc'),
                M = o.call(O, 'finallyLoc');
              if (G && M) {
                if (this.prev < O.catchLoc) return E(O.catchLoc, !0);
                if (this.prev < O.finallyLoc) return E(O.finallyLoc);
              } else if (G) {
                if (this.prev < O.catchLoc) return E(O.catchLoc, !0);
              } else if (M) {
                if (this.prev < O.finallyLoc) return E(O.finallyLoc);
              } else throw new Error('try statement without catch or finally');
            }
          }
        },
        abrupt: function ($, m) {
          for (var E = this.tryEntries.length - 1; E >= 0; --E) {
            var C = this.tryEntries[E];
            if (
              C.tryLoc <= this.prev &&
              o.call(C, 'finallyLoc') &&
              this.prev < C.finallyLoc
            ) {
              var O = C;
              break;
            }
          }
          O &&
            ($ === 'break' || $ === 'continue') &&
            O.tryLoc <= m &&
            m <= O.finallyLoc &&
            (O = null);
          var q = O ? O.completion : {};
          return (
            (q.type = $),
            (q.arg = m),
            O
              ? ((this.method = 'next'), (this.next = O.finallyLoc), S)
              : this.complete(q)
          );
        },
        complete: function ($, m) {
          if ($.type === 'throw') throw $.arg;
          return (
            $.type === 'break' || $.type === 'continue'
              ? (this.next = $.arg)
              : $.type === 'return'
              ? ((this.rval = this.arg = $.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : $.type === 'normal' && m && (this.next = m),
            S
          );
        },
        finish: function ($) {
          for (var m = this.tryEntries.length - 1; m >= 0; --m) {
            var E = this.tryEntries[m];
            if (E.finallyLoc === $)
              return this.complete(E.completion, E.afterLoc), x(E), S;
          }
        },
        catch: function ($) {
          for (var m = this.tryEntries.length - 1; m >= 0; --m) {
            var E = this.tryEntries[m];
            if (E.tryLoc === $) {
              var C = E.completion;
              if (C.type === 'throw') {
                var O = C.arg;
                x(E);
              }
              return O;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function ($, m, E) {
          return (
            (this.delegate = { iterator: U($), resultName: m, nextLoc: E }),
            this.method === 'next' && (this.arg = a),
            S
          );
        }
      }),
      t
    );
  })(e.exports);
  try {
    regeneratorRuntime = r;
  } catch {
    typeof globalThis == 'object'
      ? (globalThis.regeneratorRuntime = r)
      : Function('r', 'regeneratorRuntime = r')(r);
  }
})(runtime);
var memoizerific = { exports: {} };
(function (e, r) {
  (function (t) {
    e.exports = t();
  })(function () {
    return (function t(n, o, a) {
      function s(l, u) {
        if (!o[l]) {
          if (!n[l]) {
            var y = typeof commonjsRequire == 'function' && commonjsRequire;
            if (!u && y) return y(l, !0);
            if (i) return i(l, !0);
            var d = new Error("Cannot find module '" + l + "'");
            throw ((d.code = 'MODULE_NOT_FOUND'), d);
          }
          var g = (o[l] = { exports: {} });
          n[l][0].call(
            g.exports,
            function (h) {
              var b = n[l][1][h];
              return s(b || h);
            },
            g,
            g.exports,
            t,
            n,
            o,
            a
          );
        }
        return o[l].exports;
      }
      for (
        var i = typeof commonjsRequire == 'function' && commonjsRequire, c = 0;
        c < a.length;
        c++
      )
        s(a[c]);
      return s;
    })(
      {
        1: [
          function (t, n, o) {
            n.exports = function (a) {
              if (typeof Map != 'function' || a) {
                var s = t('./similar');
                return new s();
              } else return new Map();
            };
          },
          { './similar': 2 }
        ],
        2: [
          function (t, n, o) {
            function a() {
              return (
                (this.list = []),
                (this.lastItem = void 0),
                (this.size = 0),
                this
              );
            }
            (a.prototype.get = function (s) {
              var i;
              if (this.lastItem && this.isEqual(this.lastItem.key, s))
                return this.lastItem.val;
              if (((i = this.indexOf(s)), i >= 0))
                return (this.lastItem = this.list[i]), this.list[i].val;
            }),
              (a.prototype.set = function (s, i) {
                var c;
                return this.lastItem && this.isEqual(this.lastItem.key, s)
                  ? ((this.lastItem.val = i), this)
                  : ((c = this.indexOf(s)),
                    c >= 0
                      ? ((this.lastItem = this.list[c]),
                        (this.list[c].val = i),
                        this)
                      : ((this.lastItem = { key: s, val: i }),
                        this.list.push(this.lastItem),
                        this.size++,
                        this));
              }),
              (a.prototype.delete = function (s) {
                var i;
                if (
                  (this.lastItem &&
                    this.isEqual(this.lastItem.key, s) &&
                    (this.lastItem = void 0),
                  (i = this.indexOf(s)),
                  i >= 0)
                )
                  return this.size--, this.list.splice(i, 1)[0];
              }),
              (a.prototype.has = function (s) {
                var i;
                return this.lastItem && this.isEqual(this.lastItem.key, s)
                  ? !0
                  : ((i = this.indexOf(s)),
                    i >= 0 ? ((this.lastItem = this.list[i]), !0) : !1);
              }),
              (a.prototype.forEach = function (s, i) {
                var c;
                for (c = 0; c < this.size; c++)
                  s.call(i || this, this.list[c].val, this.list[c].key, this);
              }),
              (a.prototype.indexOf = function (s) {
                var i;
                for (i = 0; i < this.size; i++)
                  if (this.isEqual(this.list[i].key, s)) return i;
                return -1;
              }),
              (a.prototype.isEqual = function (s, i) {
                return s === i || (s !== s && i !== i);
              }),
              (n.exports = a);
          },
          {}
        ],
        3: [
          function (t, n, o) {
            var a = t('map-or-similar');
            n.exports = function (l) {
              var u = new a(void 0 === 'true'),
                y = [];
              return function (d) {
                var g = function () {
                  var h = u,
                    b,
                    w,
                    S = arguments.length - 1,
                    T = Array(S + 1),
                    v = !0,
                    _;
                  if ((g.numArgs || g.numArgs === 0) && g.numArgs !== S + 1)
                    throw new Error(
                      'Memoizerific functions should always be called with the same number of arguments'
                    );
                  for (_ = 0; _ < S; _++) {
                    if (
                      ((T[_] = { cacheItem: h, arg: arguments[_] }),
                      h.has(arguments[_]))
                    ) {
                      h = h.get(arguments[_]);
                      continue;
                    }
                    (v = !1),
                      (b = new a(void 0 === 'true')),
                      h.set(arguments[_], b),
                      (h = b);
                  }
                  return (
                    v &&
                      (h.has(arguments[S])
                        ? (w = h.get(arguments[S]))
                        : (v = !1)),
                    v ||
                      ((w = d.apply(null, arguments)), h.set(arguments[S], w)),
                    l > 0 &&
                      ((T[S] = { cacheItem: h, arg: arguments[S] }),
                      v ? s(y, T) : y.push(T),
                      y.length > l && i(y.shift())),
                    (g.wasMemoized = v),
                    (g.numArgs = S + 1),
                    w
                  );
                };
                return (
                  (g.limit = l),
                  (g.wasMemoized = !1),
                  (g.cache = u),
                  (g.lru = y),
                  g
                );
              };
            };
            function s(l, u) {
              var y = l.length,
                d = u.length,
                g,
                h,
                b;
              for (h = 0; h < y; h++) {
                for (g = !0, b = 0; b < d; b++)
                  if (!c(l[h][b].arg, u[b].arg)) {
                    g = !1;
                    break;
                  }
                if (g) break;
              }
              l.push(l.splice(h, 1)[0]);
            }
            function i(l) {
              var u = l.length,
                y = l[u - 1],
                d,
                g;
              for (
                y.cacheItem.delete(y.arg), g = u - 2;
                g >= 0 &&
                ((y = l[g]), (d = y.cacheItem.get(y.arg)), !d || !d.size);
                g--
              )
                y.cacheItem.delete(y.arg);
            }
            function c(l, u) {
              return l === u || (l !== l && u !== u);
            }
          },
          { 'map-or-similar': 1 }
        ]
      },
      {},
      [3]
    )(3);
  });
})(memoizerific);
var memoize$2 = memoizerific.exports,
  freeGlobal$1 =
    typeof commonjsGlobal == 'object' &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal,
  _freeGlobal = freeGlobal$1,
  freeGlobal = _freeGlobal,
  freeSelf = typeof self == 'object' && self && self.Object === Object && self,
  root$8 = freeGlobal || freeSelf || Function('return this')(),
  _root = root$8,
  root$7 = _root,
  Symbol$6 = root$7.Symbol,
  _Symbol = Symbol$6,
  Symbol$5 = _Symbol,
  objectProto$e = Object.prototype,
  hasOwnProperty$b = objectProto$e.hasOwnProperty,
  nativeObjectToString$1 = objectProto$e.toString,
  symToStringTag$1 = Symbol$5 ? Symbol$5.toStringTag : void 0;
function getRawTag$1(e) {
  var r = hasOwnProperty$b.call(e, symToStringTag$1),
    t = e[symToStringTag$1];
  try {
    e[symToStringTag$1] = void 0;
    var n = !0;
  } catch {}
  var o = nativeObjectToString$1.call(e);
  return n && (r ? (e[symToStringTag$1] = t) : delete e[symToStringTag$1]), o;
}
var _getRawTag = getRawTag$1,
  objectProto$d = Object.prototype,
  nativeObjectToString = objectProto$d.toString;
function objectToString$2(e) {
  return nativeObjectToString.call(e);
}
var _objectToString = objectToString$2,
  Symbol$4 = _Symbol,
  getRawTag = _getRawTag,
  objectToString$1 = _objectToString,
  nullTag = '[object Null]',
  undefinedTag = '[object Undefined]',
  symToStringTag = Symbol$4 ? Symbol$4.toStringTag : void 0;
function baseGetTag$6(e) {
  return e == null
    ? e === void 0
      ? undefinedTag
      : nullTag
    : symToStringTag && symToStringTag in Object(e)
    ? getRawTag(e)
    : objectToString$1(e);
}
var _baseGetTag = baseGetTag$6;
function isObject$8(e) {
  var r = typeof e;
  return e != null && (r == 'object' || r == 'function');
}
var isObject_1 = isObject$8,
  baseGetTag$5 = _baseGetTag,
  isObject$7 = isObject_1,
  asyncTag = '[object AsyncFunction]',
  funcTag$1 = '[object Function]',
  genTag = '[object GeneratorFunction]',
  proxyTag = '[object Proxy]';
function isFunction$3(e) {
  if (!isObject$7(e)) return !1;
  var r = baseGetTag$5(e);
  return r == funcTag$1 || r == genTag || r == asyncTag || r == proxyTag;
}
var isFunction_1$1 = isFunction$3,
  root$6 = _root,
  coreJsData$1 = root$6['__core-js_shared__'],
  _coreJsData = coreJsData$1,
  coreJsData = _coreJsData,
  maskSrcKey = (function () {
    var e = /[^.]+$/.exec(
      (coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO) || ''
    );
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function isMasked$1(e) {
  return !!maskSrcKey && maskSrcKey in e;
}
var _isMasked = isMasked$1,
  funcProto$2 = Function.prototype,
  funcToString$2 = funcProto$2.toString;
function toSource$2(e) {
  if (e != null) {
    try {
      return funcToString$2.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var _toSource = toSource$2,
  isFunction$2 = isFunction_1$1,
  isMasked = _isMasked,
  isObject$6 = isObject_1,
  toSource$1 = _toSource,
  reRegExpChar = /[\\^$.*+?()[\]{}|]/g,
  reIsHostCtor = /^\[object .+?Constructor\]$/,
  funcProto$1 = Function.prototype,
  objectProto$c = Object.prototype,
  funcToString$1 = funcProto$1.toString,
  hasOwnProperty$a = objectProto$c.hasOwnProperty,
  reIsNative = RegExp(
    '^' +
      funcToString$1
        .call(hasOwnProperty$a)
        .replace(reRegExpChar, '\\$&')
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          '$1.*?'
        ) +
      '$'
  );
function baseIsNative$1(e) {
  if (!isObject$6(e) || isMasked(e)) return !1;
  var r = isFunction$2(e) ? reIsNative : reIsHostCtor;
  return r.test(toSource$1(e));
}
var _baseIsNative = baseIsNative$1;
function getValue$1(e, r) {
  return e == null ? void 0 : e[r];
}
var _getValue = getValue$1,
  baseIsNative = _baseIsNative,
  getValue = _getValue;
function getNative$7(e, r) {
  var t = getValue(e, r);
  return baseIsNative(t) ? t : void 0;
}
var _getNative = getNative$7,
  getNative$6 = _getNative,
  defineProperty$2 = (function () {
    try {
      var e = getNative$6(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })(),
  _defineProperty$5 = defineProperty$2,
  defineProperty$1 = _defineProperty$5;
function baseAssignValue$2(e, r, t) {
  r == '__proto__' && defineProperty$1
    ? defineProperty$1(e, r, {
        configurable: !0,
        enumerable: !0,
        value: t,
        writable: !0
      })
    : (e[r] = t);
}
var _baseAssignValue = baseAssignValue$2;
function createBaseFor$1(e) {
  return function (r, t, n) {
    for (var o = -1, a = Object(r), s = n(r), i = s.length; i--; ) {
      var c = s[e ? i : ++o];
      if (t(a[c], c, a) === !1) break;
    }
    return r;
  };
}
var _createBaseFor = createBaseFor$1,
  createBaseFor = _createBaseFor,
  baseFor$1 = createBaseFor(),
  _baseFor = baseFor$1;
function baseTimes$1(e, r) {
  for (var t = -1, n = Array(e); ++t < e; ) n[t] = r(t);
  return n;
}
var _baseTimes = baseTimes$1;
function isObjectLike$6(e) {
  return e != null && typeof e == 'object';
}
var isObjectLike_1 = isObjectLike$6,
  baseGetTag$4 = _baseGetTag,
  isObjectLike$5 = isObjectLike_1,
  argsTag$2 = '[object Arguments]';
function baseIsArguments$1(e) {
  return isObjectLike$5(e) && baseGetTag$4(e) == argsTag$2;
}
var _baseIsArguments = baseIsArguments$1,
  baseIsArguments = _baseIsArguments,
  isObjectLike$4 = isObjectLike_1,
  objectProto$b = Object.prototype,
  hasOwnProperty$9 = objectProto$b.hasOwnProperty,
  propertyIsEnumerable$1 = objectProto$b.propertyIsEnumerable,
  isArguments$3 = baseIsArguments(
    (function () {
      return arguments;
    })()
  )
    ? baseIsArguments
    : function (e) {
        return (
          isObjectLike$4(e) &&
          hasOwnProperty$9.call(e, 'callee') &&
          !propertyIsEnumerable$1.call(e, 'callee')
        );
      },
  isArguments_1 = isArguments$3,
  isArray$d = Array.isArray,
  isArray_1 = isArray$d,
  isBuffer$3 = { exports: {} };
function stubFalse() {
  return !1;
}
var stubFalse_1 = stubFalse;
(function (e, r) {
  var t = _root,
    n = stubFalse_1,
    o = r && !r.nodeType && r,
    a = o && !0 && e && !e.nodeType && e,
    s = a && a.exports === o,
    i = s ? t.Buffer : void 0,
    c = i ? i.isBuffer : void 0,
    l = c || n;
  e.exports = l;
})(isBuffer$3, isBuffer$3.exports);
var MAX_SAFE_INTEGER$1 = 9007199254740991,
  reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex$3(e, r) {
  var t = typeof e;
  return (
    (r = r == null ? MAX_SAFE_INTEGER$1 : r),
    !!r &&
      (t == 'number' || (t != 'symbol' && reIsUint.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < r
  );
}
var _isIndex = isIndex$3,
  MAX_SAFE_INTEGER = 9007199254740991;
function isLength$3(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= MAX_SAFE_INTEGER;
}
var isLength_1 = isLength$3,
  baseGetTag$3 = _baseGetTag,
  isLength$2 = isLength_1,
  isObjectLike$3 = isObjectLike_1,
  argsTag$1 = '[object Arguments]',
  arrayTag$1 = '[object Array]',
  boolTag$1 = '[object Boolean]',
  dateTag$1 = '[object Date]',
  errorTag$1 = '[object Error]',
  funcTag = '[object Function]',
  mapTag$2 = '[object Map]',
  numberTag$1 = '[object Number]',
  objectTag$3 = '[object Object]',
  regexpTag$1 = '[object RegExp]',
  setTag$2 = '[object Set]',
  stringTag$1 = '[object String]',
  weakMapTag$1 = '[object WeakMap]',
  arrayBufferTag$1 = '[object ArrayBuffer]',
  dataViewTag$2 = '[object DataView]',
  float32Tag = '[object Float32Array]',
  float64Tag = '[object Float64Array]',
  int8Tag = '[object Int8Array]',
  int16Tag = '[object Int16Array]',
  int32Tag = '[object Int32Array]',
  uint8Tag = '[object Uint8Array]',
  uint8ClampedTag = '[object Uint8ClampedArray]',
  uint16Tag = '[object Uint16Array]',
  uint32Tag = '[object Uint32Array]',
  typedArrayTags = {};
typedArrayTags[float32Tag] =
  typedArrayTags[float64Tag] =
  typedArrayTags[int8Tag] =
  typedArrayTags[int16Tag] =
  typedArrayTags[int32Tag] =
  typedArrayTags[uint8Tag] =
  typedArrayTags[uint8ClampedTag] =
  typedArrayTags[uint16Tag] =
  typedArrayTags[uint32Tag] =
    !0;
typedArrayTags[argsTag$1] =
  typedArrayTags[arrayTag$1] =
  typedArrayTags[arrayBufferTag$1] =
  typedArrayTags[boolTag$1] =
  typedArrayTags[dataViewTag$2] =
  typedArrayTags[dateTag$1] =
  typedArrayTags[errorTag$1] =
  typedArrayTags[funcTag] =
  typedArrayTags[mapTag$2] =
  typedArrayTags[numberTag$1] =
  typedArrayTags[objectTag$3] =
  typedArrayTags[regexpTag$1] =
  typedArrayTags[setTag$2] =
  typedArrayTags[stringTag$1] =
  typedArrayTags[weakMapTag$1] =
    !1;
function baseIsTypedArray$1(e) {
  return (
    isObjectLike$3(e) &&
    isLength$2(e.length) &&
    !!typedArrayTags[baseGetTag$3(e)]
  );
}
var _baseIsTypedArray = baseIsTypedArray$1;
function baseUnary$1(e) {
  return function (r) {
    return e(r);
  };
}
var _baseUnary = baseUnary$1,
  _nodeUtil = { exports: {} };
(function (e, r) {
  var t = _freeGlobal,
    n = r && !r.nodeType && r,
    o = n && !0 && e && !e.nodeType && e,
    a = o && o.exports === n,
    s = a && t.process,
    i = (function () {
      try {
        var c = o && o.require && o.require('util').types;
        return c || (s && s.binding && s.binding('util'));
      } catch {}
    })();
  e.exports = i;
})(_nodeUtil, _nodeUtil.exports);
var baseIsTypedArray = _baseIsTypedArray,
  baseUnary = _baseUnary,
  nodeUtil = _nodeUtil.exports,
  nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray,
  isTypedArray$2 = nodeIsTypedArray
    ? baseUnary(nodeIsTypedArray)
    : baseIsTypedArray,
  isTypedArray_1 = isTypedArray$2,
  baseTimes = _baseTimes,
  isArguments$2 = isArguments_1,
  isArray$c = isArray_1,
  isBuffer$2 = isBuffer$3.exports,
  isIndex$2 = _isIndex,
  isTypedArray$1 = isTypedArray_1,
  objectProto$a = Object.prototype,
  hasOwnProperty$8 = objectProto$a.hasOwnProperty;
function arrayLikeKeys$2(e, r) {
  var t = isArray$c(e),
    n = !t && isArguments$2(e),
    o = !t && !n && isBuffer$2(e),
    a = !t && !n && !o && isTypedArray$1(e),
    s = t || n || o || a,
    i = s ? baseTimes(e.length, String) : [],
    c = i.length;
  for (var l in e)
    (r || hasOwnProperty$8.call(e, l)) &&
      !(
        s &&
        (l == 'length' ||
          (o && (l == 'offset' || l == 'parent')) ||
          (a && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
          isIndex$2(l, c))
      ) &&
      i.push(l);
  return i;
}
var _arrayLikeKeys = arrayLikeKeys$2,
  objectProto$9 = Object.prototype;
function isPrototype$2(e) {
  var r = e && e.constructor,
    t = (typeof r == 'function' && r.prototype) || objectProto$9;
  return e === t;
}
var _isPrototype = isPrototype$2;
function overArg$2(e, r) {
  return function (t) {
    return e(r(t));
  };
}
var _overArg = overArg$2,
  overArg$1 = _overArg,
  nativeKeys$1 = overArg$1(Object.keys, Object),
  _nativeKeys = nativeKeys$1,
  isPrototype$1 = _isPrototype,
  nativeKeys = _nativeKeys,
  objectProto$8 = Object.prototype,
  hasOwnProperty$7 = objectProto$8.hasOwnProperty;
function baseKeys$1(e) {
  if (!isPrototype$1(e)) return nativeKeys(e);
  var r = [];
  for (var t in Object(e))
    hasOwnProperty$7.call(e, t) && t != 'constructor' && r.push(t);
  return r;
}
var _baseKeys = baseKeys$1,
  isFunction$1 = isFunction_1$1,
  isLength$1 = isLength_1;
function isArrayLike$2(e) {
  return e != null && isLength$1(e.length) && !isFunction$1(e);
}
var isArrayLike_1 = isArrayLike$2,
  arrayLikeKeys$1 = _arrayLikeKeys,
  baseKeys = _baseKeys,
  isArrayLike$1 = isArrayLike_1;
function keys$3(e) {
  return isArrayLike$1(e) ? arrayLikeKeys$1(e) : baseKeys(e);
}
var keys_1 = keys$3,
  baseFor = _baseFor,
  keys$2 = keys_1;
function baseForOwn$1(e, r) {
  return e && baseFor(e, r, keys$2);
}
var _baseForOwn = baseForOwn$1;
function listCacheClear$1() {
  (this.__data__ = []), (this.size = 0);
}
var _listCacheClear = listCacheClear$1;
function eq$3(e, r) {
  return e === r || (e !== e && r !== r);
}
var eq_1 = eq$3,
  eq$2 = eq_1;
function assocIndexOf$4(e, r) {
  for (var t = e.length; t--; ) if (eq$2(e[t][0], r)) return t;
  return -1;
}
var _assocIndexOf = assocIndexOf$4,
  assocIndexOf$3 = _assocIndexOf,
  arrayProto = Array.prototype,
  splice = arrayProto.splice;
function listCacheDelete$1(e) {
  var r = this.__data__,
    t = assocIndexOf$3(r, e);
  if (t < 0) return !1;
  var n = r.length - 1;
  return t == n ? r.pop() : splice.call(r, t, 1), --this.size, !0;
}
var _listCacheDelete = listCacheDelete$1,
  assocIndexOf$2 = _assocIndexOf;
function listCacheGet$1(e) {
  var r = this.__data__,
    t = assocIndexOf$2(r, e);
  return t < 0 ? void 0 : r[t][1];
}
var _listCacheGet = listCacheGet$1,
  assocIndexOf$1 = _assocIndexOf;
function listCacheHas$1(e) {
  return assocIndexOf$1(this.__data__, e) > -1;
}
var _listCacheHas = listCacheHas$1,
  assocIndexOf = _assocIndexOf;
function listCacheSet$1(e, r) {
  var t = this.__data__,
    n = assocIndexOf(t, e);
  return n < 0 ? (++this.size, t.push([e, r])) : (t[n][1] = r), this;
}
var _listCacheSet = listCacheSet$1,
  listCacheClear = _listCacheClear,
  listCacheDelete = _listCacheDelete,
  listCacheGet = _listCacheGet,
  listCacheHas = _listCacheHas,
  listCacheSet = _listCacheSet;
function ListCache$4(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype.delete = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;
var _ListCache = ListCache$4,
  ListCache$3 = _ListCache;
function stackClear$1() {
  (this.__data__ = new ListCache$3()), (this.size = 0);
}
var _stackClear = stackClear$1;
function stackDelete$1(e) {
  var r = this.__data__,
    t = r.delete(e);
  return (this.size = r.size), t;
}
var _stackDelete = stackDelete$1;
function stackGet$1(e) {
  return this.__data__.get(e);
}
var _stackGet = stackGet$1;
function stackHas$1(e) {
  return this.__data__.has(e);
}
var _stackHas = stackHas$1,
  getNative$5 = _getNative,
  root$5 = _root,
  Map$4 = getNative$5(root$5, 'Map'),
  _Map = Map$4,
  getNative$4 = _getNative,
  nativeCreate$4 = getNative$4(Object, 'create'),
  _nativeCreate = nativeCreate$4,
  nativeCreate$3 = _nativeCreate;
function hashClear$1() {
  (this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {}), (this.size = 0);
}
var _hashClear = hashClear$1;
function hashDelete$1(e) {
  var r = this.has(e) && delete this.__data__[e];
  return (this.size -= r ? 1 : 0), r;
}
var _hashDelete = hashDelete$1,
  nativeCreate$2 = _nativeCreate,
  HASH_UNDEFINED$2 = '__lodash_hash_undefined__',
  objectProto$7 = Object.prototype,
  hasOwnProperty$6 = objectProto$7.hasOwnProperty;
function hashGet$1(e) {
  var r = this.__data__;
  if (nativeCreate$2) {
    var t = r[e];
    return t === HASH_UNDEFINED$2 ? void 0 : t;
  }
  return hasOwnProperty$6.call(r, e) ? r[e] : void 0;
}
var _hashGet = hashGet$1,
  nativeCreate$1 = _nativeCreate,
  objectProto$6 = Object.prototype,
  hasOwnProperty$5 = objectProto$6.hasOwnProperty;
function hashHas$1(e) {
  var r = this.__data__;
  return nativeCreate$1 ? r[e] !== void 0 : hasOwnProperty$5.call(r, e);
}
var _hashHas = hashHas$1,
  nativeCreate = _nativeCreate,
  HASH_UNDEFINED$1 = '__lodash_hash_undefined__';
function hashSet$1(e, r) {
  var t = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (t[e] = nativeCreate && r === void 0 ? HASH_UNDEFINED$1 : r),
    this
  );
}
var _hashSet = hashSet$1,
  hashClear = _hashClear,
  hashDelete = _hashDelete,
  hashGet = _hashGet,
  hashHas = _hashHas,
  hashSet = _hashSet;
function Hash$1(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
Hash$1.prototype.clear = hashClear;
Hash$1.prototype.delete = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;
var _Hash = Hash$1,
  Hash = _Hash,
  ListCache$2 = _ListCache,
  Map$3 = _Map;
function mapCacheClear$1() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Hash(),
      map: new (Map$3 || ListCache$2)(),
      string: new Hash()
    });
}
var _mapCacheClear = mapCacheClear$1;
function isKeyable$1(e) {
  var r = typeof e;
  return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
    ? e !== '__proto__'
    : e === null;
}
var _isKeyable = isKeyable$1,
  isKeyable = _isKeyable;
function getMapData$4(e, r) {
  var t = e.__data__;
  return isKeyable(r) ? t[typeof r == 'string' ? 'string' : 'hash'] : t.map;
}
var _getMapData = getMapData$4,
  getMapData$3 = _getMapData;
function mapCacheDelete$1(e) {
  var r = getMapData$3(this, e).delete(e);
  return (this.size -= r ? 1 : 0), r;
}
var _mapCacheDelete = mapCacheDelete$1,
  getMapData$2 = _getMapData;
function mapCacheGet$1(e) {
  return getMapData$2(this, e).get(e);
}
var _mapCacheGet = mapCacheGet$1,
  getMapData$1 = _getMapData;
function mapCacheHas$1(e) {
  return getMapData$1(this, e).has(e);
}
var _mapCacheHas = mapCacheHas$1,
  getMapData = _getMapData;
function mapCacheSet$1(e, r) {
  var t = getMapData(this, e),
    n = t.size;
  return t.set(e, r), (this.size += t.size == n ? 0 : 1), this;
}
var _mapCacheSet = mapCacheSet$1,
  mapCacheClear = _mapCacheClear,
  mapCacheDelete = _mapCacheDelete,
  mapCacheGet = _mapCacheGet,
  mapCacheHas = _mapCacheHas,
  mapCacheSet = _mapCacheSet;
function MapCache$3(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.clear(); ++r < t; ) {
    var n = e[r];
    this.set(n[0], n[1]);
  }
}
MapCache$3.prototype.clear = mapCacheClear;
MapCache$3.prototype.delete = mapCacheDelete;
MapCache$3.prototype.get = mapCacheGet;
MapCache$3.prototype.has = mapCacheHas;
MapCache$3.prototype.set = mapCacheSet;
var _MapCache = MapCache$3,
  ListCache$1 = _ListCache,
  Map$2 = _Map,
  MapCache$2 = _MapCache,
  LARGE_ARRAY_SIZE = 200;
function stackSet$1(e, r) {
  var t = this.__data__;
  if (t instanceof ListCache$1) {
    var n = t.__data__;
    if (!Map$2 || n.length < LARGE_ARRAY_SIZE - 1)
      return n.push([e, r]), (this.size = ++t.size), this;
    t = this.__data__ = new MapCache$2(n);
  }
  return t.set(e, r), (this.size = t.size), this;
}
var _stackSet = stackSet$1,
  ListCache = _ListCache,
  stackClear = _stackClear,
  stackDelete = _stackDelete,
  stackGet = _stackGet,
  stackHas = _stackHas,
  stackSet = _stackSet;
function Stack$2(e) {
  var r = (this.__data__ = new ListCache(e));
  this.size = r.size;
}
Stack$2.prototype.clear = stackClear;
Stack$2.prototype.delete = stackDelete;
Stack$2.prototype.get = stackGet;
Stack$2.prototype.has = stackHas;
Stack$2.prototype.set = stackSet;
var _Stack = Stack$2,
  HASH_UNDEFINED = '__lodash_hash_undefined__';
function setCacheAdd$1(e) {
  return this.__data__.set(e, HASH_UNDEFINED), this;
}
var _setCacheAdd = setCacheAdd$1;
function setCacheHas$1(e) {
  return this.__data__.has(e);
}
var _setCacheHas = setCacheHas$1,
  MapCache$1 = _MapCache,
  setCacheAdd = _setCacheAdd,
  setCacheHas = _setCacheHas;
function SetCache$1(e) {
  var r = -1,
    t = e == null ? 0 : e.length;
  for (this.__data__ = new MapCache$1(); ++r < t; ) this.add(e[r]);
}
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;
var _SetCache = SetCache$1;
function arraySome$1(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length; ++t < n; )
    if (r(e[t], t, e)) return !0;
  return !1;
}
var _arraySome = arraySome$1;
function cacheHas$1(e, r) {
  return e.has(r);
}
var _cacheHas = cacheHas$1,
  SetCache = _SetCache,
  arraySome = _arraySome,
  cacheHas = _cacheHas,
  COMPARE_PARTIAL_FLAG$5 = 1,
  COMPARE_UNORDERED_FLAG$3 = 2;
function equalArrays$2(e, r, t, n, o, a) {
  var s = t & COMPARE_PARTIAL_FLAG$5,
    i = e.length,
    c = r.length;
  if (i != c && !(s && c > i)) return !1;
  var l = a.get(e),
    u = a.get(r);
  if (l && u) return l == r && u == e;
  var y = -1,
    d = !0,
    g = t & COMPARE_UNORDERED_FLAG$3 ? new SetCache() : void 0;
  for (a.set(e, r), a.set(r, e); ++y < i; ) {
    var h = e[y],
      b = r[y];
    if (n) var w = s ? n(b, h, y, r, e, a) : n(h, b, y, e, r, a);
    if (w !== void 0) {
      if (w) continue;
      d = !1;
      break;
    }
    if (g) {
      if (
        !arraySome(r, function (S, T) {
          if (!cacheHas(g, T) && (h === S || o(h, S, t, n, a)))
            return g.push(T);
        })
      ) {
        d = !1;
        break;
      }
    } else if (!(h === b || o(h, b, t, n, a))) {
      d = !1;
      break;
    }
  }
  return a.delete(e), a.delete(r), d;
}
var _equalArrays = equalArrays$2,
  root$4 = _root,
  Uint8Array$2 = root$4.Uint8Array,
  _Uint8Array = Uint8Array$2;
function mapToArray$1(e) {
  var r = -1,
    t = Array(e.size);
  return (
    e.forEach(function (n, o) {
      t[++r] = [o, n];
    }),
    t
  );
}
var _mapToArray = mapToArray$1;
function setToArray$1(e) {
  var r = -1,
    t = Array(e.size);
  return (
    e.forEach(function (n) {
      t[++r] = n;
    }),
    t
  );
}
var _setToArray = setToArray$1,
  Symbol$3 = _Symbol,
  Uint8Array$1 = _Uint8Array,
  eq$1 = eq_1,
  equalArrays$1 = _equalArrays,
  mapToArray = _mapToArray,
  setToArray = _setToArray,
  COMPARE_PARTIAL_FLAG$4 = 1,
  COMPARE_UNORDERED_FLAG$2 = 2,
  boolTag = '[object Boolean]',
  dateTag = '[object Date]',
  errorTag = '[object Error]',
  mapTag$1 = '[object Map]',
  numberTag = '[object Number]',
  regexpTag = '[object RegExp]',
  setTag$1 = '[object Set]',
  stringTag = '[object String]',
  symbolTag$1 = '[object Symbol]',
  arrayBufferTag = '[object ArrayBuffer]',
  dataViewTag$1 = '[object DataView]',
  symbolProto$1 = Symbol$3 ? Symbol$3.prototype : void 0,
  symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : void 0;
function equalByTag$1(e, r, t, n, o, a, s) {
  switch (t) {
    case dataViewTag$1:
      if (e.byteLength != r.byteLength || e.byteOffset != r.byteOffset)
        return !1;
      (e = e.buffer), (r = r.buffer);
    case arrayBufferTag:
      return !(
        e.byteLength != r.byteLength ||
        !a(new Uint8Array$1(e), new Uint8Array$1(r))
      );
    case boolTag:
    case dateTag:
    case numberTag:
      return eq$1(+e, +r);
    case errorTag:
      return e.name == r.name && e.message == r.message;
    case regexpTag:
    case stringTag:
      return e == r + '';
    case mapTag$1:
      var i = mapToArray;
    case setTag$1:
      var c = n & COMPARE_PARTIAL_FLAG$4;
      if ((i || (i = setToArray), e.size != r.size && !c)) return !1;
      var l = s.get(e);
      if (l) return l == r;
      (n |= COMPARE_UNORDERED_FLAG$2), s.set(e, r);
      var u = equalArrays$1(i(e), i(r), n, o, a, s);
      return s.delete(e), u;
    case symbolTag$1:
      if (symbolValueOf) return symbolValueOf.call(e) == symbolValueOf.call(r);
  }
  return !1;
}
var _equalByTag = equalByTag$1;
function arrayPush$3(e, r) {
  for (var t = -1, n = r.length, o = e.length; ++t < n; ) e[o + t] = r[t];
  return e;
}
var _arrayPush = arrayPush$3,
  arrayPush$2 = _arrayPush,
  isArray$b = isArray_1;
function baseGetAllKeys$2(e, r, t) {
  var n = r(e);
  return isArray$b(e) ? n : arrayPush$2(n, t(e));
}
var _baseGetAllKeys = baseGetAllKeys$2;
function arrayFilter$1(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = 0, a = []; ++t < n; ) {
    var s = e[t];
    r(s, t, e) && (a[o++] = s);
  }
  return a;
}
var _arrayFilter = arrayFilter$1;
function stubArray$2() {
  return [];
}
var stubArray_1 = stubArray$2,
  arrayFilter = _arrayFilter,
  stubArray$1 = stubArray_1,
  objectProto$5 = Object.prototype,
  propertyIsEnumerable = objectProto$5.propertyIsEnumerable,
  nativeGetSymbols$1 = Object.getOwnPropertySymbols,
  getSymbols$2 = nativeGetSymbols$1
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            arrayFilter(nativeGetSymbols$1(e), function (r) {
              return propertyIsEnumerable.call(e, r);
            }));
      }
    : stubArray$1,
  _getSymbols = getSymbols$2,
  baseGetAllKeys$1 = _baseGetAllKeys,
  getSymbols$1 = _getSymbols,
  keys$1 = keys_1;
function getAllKeys$1(e) {
  return baseGetAllKeys$1(e, keys$1, getSymbols$1);
}
var _getAllKeys = getAllKeys$1,
  getAllKeys = _getAllKeys,
  COMPARE_PARTIAL_FLAG$3 = 1,
  objectProto$4 = Object.prototype,
  hasOwnProperty$4 = objectProto$4.hasOwnProperty;
function equalObjects$1(e, r, t, n, o, a) {
  var s = t & COMPARE_PARTIAL_FLAG$3,
    i = getAllKeys(e),
    c = i.length,
    l = getAllKeys(r),
    u = l.length;
  if (c != u && !s) return !1;
  for (var y = c; y--; ) {
    var d = i[y];
    if (!(s ? d in r : hasOwnProperty$4.call(r, d))) return !1;
  }
  var g = a.get(e),
    h = a.get(r);
  if (g && h) return g == r && h == e;
  var b = !0;
  a.set(e, r), a.set(r, e);
  for (var w = s; ++y < c; ) {
    d = i[y];
    var S = e[d],
      T = r[d];
    if (n) var v = s ? n(T, S, d, r, e, a) : n(S, T, d, e, r, a);
    if (!(v === void 0 ? S === T || o(S, T, t, n, a) : v)) {
      b = !1;
      break;
    }
    w || (w = d == 'constructor');
  }
  if (b && !w) {
    var _ = e.constructor,
      A = r.constructor;
    _ != A &&
      'constructor' in e &&
      'constructor' in r &&
      !(
        typeof _ == 'function' &&
        _ instanceof _ &&
        typeof A == 'function' &&
        A instanceof A
      ) &&
      (b = !1);
  }
  return a.delete(e), a.delete(r), b;
}
var _equalObjects = equalObjects$1,
  getNative$3 = _getNative,
  root$3 = _root,
  DataView$2 = getNative$3(root$3, 'DataView'),
  _DataView = DataView$2,
  getNative$2 = _getNative,
  root$2 = _root,
  Promise$2 = getNative$2(root$2, 'Promise'),
  _Promise = Promise$2,
  getNative$1 = _getNative,
  root$1 = _root,
  Set$2 = getNative$1(root$1, 'Set'),
  _Set = Set$2,
  getNative = _getNative,
  root = _root,
  WeakMap$2 = getNative(root, 'WeakMap'),
  _WeakMap = WeakMap$2,
  DataView$1 = _DataView,
  Map$1 = _Map,
  Promise$1 = _Promise,
  Set$1 = _Set,
  WeakMap$1 = _WeakMap,
  baseGetTag$2 = _baseGetTag,
  toSource = _toSource,
  mapTag = '[object Map]',
  objectTag$2 = '[object Object]',
  promiseTag = '[object Promise]',
  setTag = '[object Set]',
  weakMapTag = '[object WeakMap]',
  dataViewTag = '[object DataView]',
  dataViewCtorString = toSource(DataView$1),
  mapCtorString = toSource(Map$1),
  promiseCtorString = toSource(Promise$1),
  setCtorString = toSource(Set$1),
  weakMapCtorString = toSource(WeakMap$1),
  getTag$1 = baseGetTag$2;
((DataView$1 && getTag$1(new DataView$1(new ArrayBuffer(1))) != dataViewTag) ||
  (Map$1 && getTag$1(new Map$1()) != mapTag) ||
  (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
  (Set$1 && getTag$1(new Set$1()) != setTag) ||
  (WeakMap$1 && getTag$1(new WeakMap$1()) != weakMapTag)) &&
  (getTag$1 = function (e) {
    var r = baseGetTag$2(e),
      t = r == objectTag$2 ? e.constructor : void 0,
      n = t ? toSource(t) : '';
    if (n)
      switch (n) {
        case dataViewCtorString:
          return dataViewTag;
        case mapCtorString:
          return mapTag;
        case promiseCtorString:
          return promiseTag;
        case setCtorString:
          return setTag;
        case weakMapCtorString:
          return weakMapTag;
      }
    return r;
  });
var _getTag = getTag$1,
  Stack$1 = _Stack,
  equalArrays = _equalArrays,
  equalByTag = _equalByTag,
  equalObjects = _equalObjects,
  getTag = _getTag,
  isArray$a = isArray_1,
  isBuffer$1 = isBuffer$3.exports,
  isTypedArray = isTypedArray_1,
  COMPARE_PARTIAL_FLAG$2 = 1,
  argsTag = '[object Arguments]',
  arrayTag = '[object Array]',
  objectTag$1 = '[object Object]',
  objectProto$3 = Object.prototype,
  hasOwnProperty$3 = objectProto$3.hasOwnProperty;
function baseIsEqualDeep$1(e, r, t, n, o, a) {
  var s = isArray$a(e),
    i = isArray$a(r),
    c = s ? arrayTag : getTag(e),
    l = i ? arrayTag : getTag(r);
  (c = c == argsTag ? objectTag$1 : c), (l = l == argsTag ? objectTag$1 : l);
  var u = c == objectTag$1,
    y = l == objectTag$1,
    d = c == l;
  if (d && isBuffer$1(e)) {
    if (!isBuffer$1(r)) return !1;
    (s = !0), (u = !1);
  }
  if (d && !u)
    return (
      a || (a = new Stack$1()),
      s || isTypedArray(e)
        ? equalArrays(e, r, t, n, o, a)
        : equalByTag(e, r, c, t, n, o, a)
    );
  if (!(t & COMPARE_PARTIAL_FLAG$2)) {
    var g = u && hasOwnProperty$3.call(e, '__wrapped__'),
      h = y && hasOwnProperty$3.call(r, '__wrapped__');
    if (g || h) {
      var b = g ? e.value() : e,
        w = h ? r.value() : r;
      return a || (a = new Stack$1()), o(b, w, t, n, a);
    }
  }
  return d ? (a || (a = new Stack$1()), equalObjects(e, r, t, n, o, a)) : !1;
}
var _baseIsEqualDeep = baseIsEqualDeep$1,
  baseIsEqualDeep = _baseIsEqualDeep,
  isObjectLike$2 = isObjectLike_1;
function baseIsEqual$3(e, r, t, n, o) {
  return e === r
    ? !0
    : e == null || r == null || (!isObjectLike$2(e) && !isObjectLike$2(r))
    ? e !== e && r !== r
    : baseIsEqualDeep(e, r, t, n, baseIsEqual$3, o);
}
var _baseIsEqual = baseIsEqual$3,
  Stack = _Stack,
  baseIsEqual$2 = _baseIsEqual,
  COMPARE_PARTIAL_FLAG$1 = 1,
  COMPARE_UNORDERED_FLAG$1 = 2;
function baseIsMatch$1(e, r, t, n) {
  var o = t.length,
    a = o,
    s = !n;
  if (e == null) return !a;
  for (e = Object(e); o--; ) {
    var i = t[o];
    if (s && i[2] ? i[1] !== e[i[0]] : !(i[0] in e)) return !1;
  }
  for (; ++o < a; ) {
    i = t[o];
    var c = i[0],
      l = e[c],
      u = i[1];
    if (s && i[2]) {
      if (l === void 0 && !(c in e)) return !1;
    } else {
      var y = new Stack();
      if (n) var d = n(l, u, c, e, r, y);
      if (
        !(d === void 0
          ? baseIsEqual$2(
              u,
              l,
              COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1,
              n,
              y
            )
          : d)
      )
        return !1;
    }
  }
  return !0;
}
var _baseIsMatch = baseIsMatch$1,
  isObject$5 = isObject_1;
function isStrictComparable$2(e) {
  return e === e && !isObject$5(e);
}
var _isStrictComparable = isStrictComparable$2,
  isStrictComparable$1 = _isStrictComparable,
  keys = keys_1;
function getMatchData$1(e) {
  for (var r = keys(e), t = r.length; t--; ) {
    var n = r[t],
      o = e[n];
    r[t] = [n, o, isStrictComparable$1(o)];
  }
  return r;
}
var _getMatchData = getMatchData$1;
function matchesStrictComparable$2(e, r) {
  return function (t) {
    return t == null ? !1 : t[e] === r && (r !== void 0 || e in Object(t));
  };
}
var _matchesStrictComparable = matchesStrictComparable$2,
  baseIsMatch = _baseIsMatch,
  getMatchData = _getMatchData,
  matchesStrictComparable$1 = _matchesStrictComparable;
function baseMatches$1(e) {
  var r = getMatchData(e);
  return r.length == 1 && r[0][2]
    ? matchesStrictComparable$1(r[0][0], r[0][1])
    : function (t) {
        return t === e || baseIsMatch(t, e, r);
      };
}
var _baseMatches = baseMatches$1,
  baseGetTag$1 = _baseGetTag,
  isObjectLike$1 = isObjectLike_1,
  symbolTag = '[object Symbol]';
function isSymbol$6(e) {
  return (
    typeof e == 'symbol' || (isObjectLike$1(e) && baseGetTag$1(e) == symbolTag)
  );
}
var isSymbol_1 = isSymbol$6,
  isArray$9 = isArray_1,
  isSymbol$5 = isSymbol_1,
  reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  reIsPlainProp = /^\w*$/;
function isKey$3(e, r) {
  if (isArray$9(e)) return !1;
  var t = typeof e;
  return t == 'number' ||
    t == 'symbol' ||
    t == 'boolean' ||
    e == null ||
    isSymbol$5(e)
    ? !0
    : reIsPlainProp.test(e) ||
        !reIsDeepProp.test(e) ||
        (r != null && e in Object(r));
}
var _isKey = isKey$3,
  MapCache = _MapCache,
  FUNC_ERROR_TEXT = 'Expected a function';
function memoize$1(e, r) {
  if (typeof e != 'function' || (r != null && typeof r != 'function'))
    throw new TypeError(FUNC_ERROR_TEXT);
  var t = function () {
    var n = arguments,
      o = r ? r.apply(this, n) : n[0],
      a = t.cache;
    if (a.has(o)) return a.get(o);
    var s = e.apply(this, n);
    return (t.cache = a.set(o, s) || a), s;
  };
  return (t.cache = new (memoize$1.Cache || MapCache)()), t;
}
memoize$1.Cache = MapCache;
var memoize_1 = memoize$1,
  memoize = memoize_1,
  MAX_MEMOIZE_SIZE = 500;
function memoizeCapped$1(e) {
  var r = memoize(e, function (n) {
      return t.size === MAX_MEMOIZE_SIZE && t.clear(), n;
    }),
    t = r.cache;
  return r;
}
var _memoizeCapped = memoizeCapped$1,
  memoizeCapped = _memoizeCapped,
  rePropName$1 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  reEscapeChar$1 = /\\(\\)?/g,
  stringToPath$2 = memoizeCapped(function (e) {
    var r = [];
    return (
      e.charCodeAt(0) === 46 && r.push(''),
      e.replace(rePropName$1, function (t, n, o, a) {
        r.push(o ? a.replace(reEscapeChar$1, '$1') : n || t);
      }),
      r
    );
  }),
  _stringToPath = stringToPath$2;
function arrayMap$2(e, r) {
  for (var t = -1, n = e == null ? 0 : e.length, o = Array(n); ++t < n; )
    o[t] = r(e[t], t, e);
  return o;
}
var _arrayMap = arrayMap$2,
  Symbol$2 = _Symbol,
  arrayMap$1 = _arrayMap,
  isArray$8 = isArray_1,
  isSymbol$4 = isSymbol_1,
  INFINITY$1 = 1 / 0,
  symbolProto = Symbol$2 ? Symbol$2.prototype : void 0,
  symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString$1(e) {
  if (typeof e == 'string') return e;
  if (isArray$8(e)) return arrayMap$1(e, baseToString$1) + '';
  if (isSymbol$4(e)) return symbolToString ? symbolToString.call(e) : '';
  var r = e + '';
  return r == '0' && 1 / e == -INFINITY$1 ? '-0' : r;
}
var _baseToString = baseToString$1,
  baseToString = _baseToString;
function toString$5(e) {
  return e == null ? '' : baseToString(e);
}
var toString_1 = toString$5,
  isArray$7 = isArray_1,
  isKey$2 = _isKey,
  stringToPath$1 = _stringToPath,
  toString$4 = toString_1;
function castPath$4(e, r) {
  return isArray$7(e) ? e : isKey$2(e, r) ? [e] : stringToPath$1(toString$4(e));
}
var _castPath = castPath$4,
  isSymbol$3 = isSymbol_1,
  INFINITY = 1 / 0;
function toKey$5(e) {
  if (typeof e == 'string' || isSymbol$3(e)) return e;
  var r = e + '';
  return r == '0' && 1 / e == -INFINITY ? '-0' : r;
}
var _toKey = toKey$5,
  castPath$3 = _castPath,
  toKey$4 = _toKey;
function baseGet$3(e, r) {
  r = castPath$3(r, e);
  for (var t = 0, n = r.length; e != null && t < n; ) e = e[toKey$4(r[t++])];
  return t && t == n ? e : void 0;
}
var _baseGet = baseGet$3,
  baseGet$2 = _baseGet;
function get$1(e, r, t) {
  var n = e == null ? void 0 : baseGet$2(e, r);
  return n === void 0 ? t : n;
}
var get_1 = get$1;
function baseHasIn$1(e, r) {
  return e != null && r in Object(e);
}
var _baseHasIn = baseHasIn$1,
  castPath$2 = _castPath,
  isArguments$1 = isArguments_1,
  isArray$6 = isArray_1,
  isIndex$1 = _isIndex,
  isLength = isLength_1,
  toKey$3 = _toKey;
function hasPath$1(e, r, t) {
  r = castPath$2(r, e);
  for (var n = -1, o = r.length, a = !1; ++n < o; ) {
    var s = toKey$3(r[n]);
    if (!(a = e != null && t(e, s))) break;
    e = e[s];
  }
  return a || ++n != o
    ? a
    : ((o = e == null ? 0 : e.length),
      !!o &&
        isLength(o) &&
        isIndex$1(s, o) &&
        (isArray$6(e) || isArguments$1(e)));
}
var _hasPath = hasPath$1,
  baseHasIn = _baseHasIn,
  hasPath = _hasPath;
function hasIn$2(e, r) {
  return e != null && hasPath(e, r, baseHasIn);
}
var hasIn_1 = hasIn$2,
  baseIsEqual$1 = _baseIsEqual,
  get = get_1,
  hasIn$1 = hasIn_1,
  isKey$1 = _isKey,
  isStrictComparable = _isStrictComparable,
  matchesStrictComparable = _matchesStrictComparable,
  toKey$2 = _toKey,
  COMPARE_PARTIAL_FLAG = 1,
  COMPARE_UNORDERED_FLAG = 2;
function baseMatchesProperty$1(e, r) {
  return isKey$1(e) && isStrictComparable(r)
    ? matchesStrictComparable(toKey$2(e), r)
    : function (t) {
        var n = get(t, e);
        return n === void 0 && n === r
          ? hasIn$1(t, e)
          : baseIsEqual$1(r, n, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
      };
}
var _baseMatchesProperty = baseMatchesProperty$1;
function identity$2(e) {
  return e;
}
var identity_1 = identity$2;
function baseProperty$1(e) {
  return function (r) {
    return r == null ? void 0 : r[e];
  };
}
var _baseProperty = baseProperty$1,
  baseGet$1 = _baseGet;
function basePropertyDeep$1(e) {
  return function (r) {
    return baseGet$1(r, e);
  };
}
var _basePropertyDeep = basePropertyDeep$1,
  baseProperty = _baseProperty,
  basePropertyDeep = _basePropertyDeep,
  isKey = _isKey,
  toKey$1 = _toKey;
function property$1(e) {
  return isKey(e) ? baseProperty(toKey$1(e)) : basePropertyDeep(e);
}
var property_1 = property$1,
  baseMatches = _baseMatches,
  baseMatchesProperty = _baseMatchesProperty,
  identity$1 = identity_1,
  isArray$5 = isArray_1,
  property = property_1;
function baseIteratee$2(e) {
  return typeof e == 'function'
    ? e
    : e == null
    ? identity$1
    : typeof e == 'object'
    ? isArray$5(e)
      ? baseMatchesProperty(e[0], e[1])
      : baseMatches(e)
    : property(e);
}
var _baseIteratee = baseIteratee$2,
  baseAssignValue$1 = _baseAssignValue,
  baseForOwn = _baseForOwn,
  baseIteratee$1 = _baseIteratee;
function mapValues(e, r) {
  var t = {};
  return (
    (r = baseIteratee$1(r)),
    baseForOwn(e, function (n, o, a) {
      baseAssignValue$1(t, o, r(n, o, a));
    }),
    t
  );
}
var mapValues_1 = mapValues,
  baseAssignValue = _baseAssignValue,
  eq = eq_1,
  objectProto$2 = Object.prototype,
  hasOwnProperty$2 = objectProto$2.hasOwnProperty;
function assignValue$1(e, r, t) {
  var n = e[r];
  (!(hasOwnProperty$2.call(e, r) && eq(n, t)) || (t === void 0 && !(r in e))) &&
    baseAssignValue(e, r, t);
}
var _assignValue = assignValue$1,
  assignValue = _assignValue,
  castPath$1 = _castPath,
  isIndex = _isIndex,
  isObject$4 = isObject_1,
  toKey = _toKey;
function baseSet$1(e, r, t, n) {
  if (!isObject$4(e)) return e;
  r = castPath$1(r, e);
  for (var o = -1, a = r.length, s = a - 1, i = e; i != null && ++o < a; ) {
    var c = toKey(r[o]),
      l = t;
    if (c === '__proto__' || c === 'constructor' || c === 'prototype') return e;
    if (o != s) {
      var u = i[c];
      (l = n ? n(u, c, i) : void 0),
        l === void 0 && (l = isObject$4(u) ? u : isIndex(r[o + 1]) ? [] : {});
    }
    assignValue(i, c, l), (i = i[c]);
  }
  return e;
}
var _baseSet = baseSet$1,
  baseGet = _baseGet,
  baseSet = _baseSet,
  castPath = _castPath;
function basePickBy$2(e, r, t) {
  for (var n = -1, o = r.length, a = {}; ++n < o; ) {
    var s = r[n],
      i = baseGet(e, s);
    t(i, s) && baseSet(a, castPath(s, e), i);
  }
  return a;
}
var _basePickBy = basePickBy$2,
  basePickBy$1 = _basePickBy,
  hasIn = hasIn_1;
function basePick$1(e, r) {
  return basePickBy$1(e, r, function (t, n) {
    return hasIn(e, n);
  });
}
var _basePick = basePick$1,
  Symbol$1 = _Symbol,
  isArguments = isArguments_1,
  isArray$4 = isArray_1,
  spreadableSymbol = Symbol$1 ? Symbol$1.isConcatSpreadable : void 0;
function isFlattenable$1(e) {
  return (
    isArray$4(e) ||
    isArguments(e) ||
    !!(spreadableSymbol && e && e[spreadableSymbol])
  );
}
var _isFlattenable = isFlattenable$1,
  arrayPush$1 = _arrayPush,
  isFlattenable = _isFlattenable;
function baseFlatten$1(e, r, t, n, o) {
  var a = -1,
    s = e.length;
  for (t || (t = isFlattenable), o || (o = []); ++a < s; ) {
    var i = e[a];
    r > 0 && t(i)
      ? r > 1
        ? baseFlatten$1(i, r - 1, t, n, o)
        : arrayPush$1(o, i)
      : n || (o[o.length] = i);
  }
  return o;
}
var _baseFlatten = baseFlatten$1,
  baseFlatten = _baseFlatten;
function flatten$1(e) {
  var r = e == null ? 0 : e.length;
  return r ? baseFlatten(e, 1) : [];
}
var flatten_1 = flatten$1;
function apply$1(e, r, t) {
  switch (t.length) {
    case 0:
      return e.call(r);
    case 1:
      return e.call(r, t[0]);
    case 2:
      return e.call(r, t[0], t[1]);
    case 3:
      return e.call(r, t[0], t[1], t[2]);
  }
  return e.apply(r, t);
}
var _apply = apply$1,
  apply = _apply,
  nativeMax = Math.max;
function overRest$1(e, r, t) {
  return (
    (r = nativeMax(r === void 0 ? e.length - 1 : r, 0)),
    function () {
      for (
        var n = arguments, o = -1, a = nativeMax(n.length - r, 0), s = Array(a);
        ++o < a;

      )
        s[o] = n[r + o];
      o = -1;
      for (var i = Array(r + 1); ++o < r; ) i[o] = n[o];
      return (i[r] = t(s)), apply(e, this, i);
    }
  );
}
var _overRest = overRest$1;
function constant$1(e) {
  return function () {
    return e;
  };
}
var constant_1 = constant$1,
  constant = constant_1,
  defineProperty = _defineProperty$5,
  identity = identity_1,
  baseSetToString$1 = defineProperty
    ? function (e, r) {
        return defineProperty(e, 'toString', {
          configurable: !0,
          enumerable: !1,
          value: constant(r),
          writable: !0
        });
      }
    : identity,
  _baseSetToString = baseSetToString$1,
  HOT_COUNT = 800,
  HOT_SPAN = 16,
  nativeNow = Date.now;
function shortOut$1(e) {
  var r = 0,
    t = 0;
  return function () {
    var n = nativeNow(),
      o = HOT_SPAN - (n - t);
    if (((t = n), o > 0)) {
      if (++r >= HOT_COUNT) return arguments[0];
    } else r = 0;
    return e.apply(void 0, arguments);
  };
}
var _shortOut = shortOut$1,
  baseSetToString = _baseSetToString,
  shortOut = _shortOut,
  setToString$1 = shortOut(baseSetToString),
  _setToString = setToString$1,
  flatten = flatten_1,
  overRest = _overRest,
  setToString = _setToString;
function flatRest$1(e) {
  return setToString(overRest(e, void 0, flatten), e + '');
}
var _flatRest = flatRest$1,
  basePick = _basePick,
  flatRest = _flatRest,
  pick = flatRest(function (e, r) {
    return e == null ? {} : basePick(e, r);
  }),
  pick_1 = pick,
  win;
typeof window != 'undefined'
  ? (win = window)
  : typeof commonjsGlobal != 'undefined'
  ? (win = commonjsGlobal)
  : typeof self != 'undefined'
  ? (win = self)
  : (win = {});
var window_1 = win;
function makeArrayFrom(e) {
  return Array.prototype.slice.apply(e);
}
var PENDING = 'pending',
  RESOLVED = 'resolved',
  REJECTED = 'rejected';
function SynchronousPromise(e) {
  (this.status = PENDING),
    (this._continuations = []),
    (this._parent = null),
    (this._paused = !1),
    e && e.call(this, this._continueWith.bind(this), this._failWith.bind(this));
}
function looksLikeAPromise(e) {
  return e && typeof e.then == 'function';
}
function passThrough(e) {
  return e;
}
SynchronousPromise.prototype = {
  then: function (e, r) {
    var t = SynchronousPromise.unresolved()._setParent(this);
    if (this._isRejected()) {
      if (this._paused)
        return (
          this._continuations.push({ promise: t, nextFn: e, catchFn: r }), t
        );
      if (r)
        try {
          var n = r(this._error);
          return looksLikeAPromise(n)
            ? (this._chainPromiseData(n, t), t)
            : SynchronousPromise.resolve(n)._setParent(this);
        } catch (o) {
          return SynchronousPromise.reject(o)._setParent(this);
        }
      return SynchronousPromise.reject(this._error)._setParent(this);
    }
    return (
      this._continuations.push({ promise: t, nextFn: e, catchFn: r }),
      this._runResolutions(),
      t
    );
  },
  catch: function (e) {
    if (this._isResolved())
      return SynchronousPromise.resolve(this._data)._setParent(this);
    var r = SynchronousPromise.unresolved()._setParent(this);
    return (
      this._continuations.push({ promise: r, catchFn: e }),
      this._runRejections(),
      r
    );
  },
  finally: function (e) {
    var r = !1;
    function t(n, o) {
      if (!r) {
        (r = !0), e || (e = passThrough);
        var a = e(n);
        return looksLikeAPromise(a)
          ? a.then(function () {
              if (o) throw o;
              return n;
            })
          : n;
      }
    }
    return this.then(function (n) {
      return t(n);
    }).catch(function (n) {
      return t(null, n);
    });
  },
  pause: function () {
    return (this._paused = !0), this;
  },
  resume: function () {
    var e = this._findFirstPaused();
    return (
      e && ((e._paused = !1), e._runResolutions(), e._runRejections()), this
    );
  },
  _findAncestry: function () {
    return this._continuations.reduce(function (e, r) {
      if (r.promise) {
        var t = { promise: r.promise, children: r.promise._findAncestry() };
        e.push(t);
      }
      return e;
    }, []);
  },
  _setParent: function (e) {
    if (this._parent) throw new Error('parent already set');
    return (this._parent = e), this;
  },
  _continueWith: function (e) {
    var r = this._findFirstPending();
    r && ((r._data = e), r._setResolved());
  },
  _findFirstPending: function () {
    return this._findFirstAncestor(function (e) {
      return e._isPending && e._isPending();
    });
  },
  _findFirstPaused: function () {
    return this._findFirstAncestor(function (e) {
      return e._paused;
    });
  },
  _findFirstAncestor: function (e) {
    for (var r = this, t; r; ) e(r) && (t = r), (r = r._parent);
    return t;
  },
  _failWith: function (e) {
    var r = this._findFirstPending();
    r && ((r._error = e), r._setRejected());
  },
  _takeContinuations: function () {
    return this._continuations.splice(0, this._continuations.length);
  },
  _runRejections: function () {
    if (!(this._paused || !this._isRejected())) {
      var e = this._error,
        r = this._takeContinuations(),
        t = this;
      r.forEach(function (n) {
        if (n.catchFn)
          try {
            var o = n.catchFn(e);
            t._handleUserFunctionResult(o, n.promise);
          } catch (a) {
            n.promise.reject(a);
          }
        else n.promise.reject(e);
      });
    }
  },
  _runResolutions: function () {
    if (!(this._paused || !this._isResolved() || this._isPending())) {
      var e = this._takeContinuations();
      if (looksLikeAPromise(this._data))
        return this._handleWhenResolvedDataIsPromise(this._data);
      var r = this._data,
        t = this;
      e.forEach(function (n) {
        if (n.nextFn)
          try {
            var o = n.nextFn(r);
            t._handleUserFunctionResult(o, n.promise);
          } catch (a) {
            t._handleResolutionError(a, n);
          }
        else n.promise && n.promise.resolve(r);
      });
    }
  },
  _handleResolutionError: function (e, r) {
    if ((this._setRejected(), r.catchFn))
      try {
        r.catchFn(e);
        return;
      } catch (t) {
        e = t;
      }
    r.promise && r.promise.reject(e);
  },
  _handleWhenResolvedDataIsPromise: function (e) {
    var r = this;
    return e
      .then(function (t) {
        (r._data = t), r._runResolutions();
      })
      .catch(function (t) {
        (r._error = t), r._setRejected(), r._runRejections();
      });
  },
  _handleUserFunctionResult: function (e, r) {
    looksLikeAPromise(e) ? this._chainPromiseData(e, r) : r.resolve(e);
  },
  _chainPromiseData: function (e, r) {
    e.then(function (t) {
      r.resolve(t);
    }).catch(function (t) {
      r.reject(t);
    });
  },
  _setResolved: function () {
    (this.status = RESOLVED), this._paused || this._runResolutions();
  },
  _setRejected: function () {
    (this.status = REJECTED), this._paused || this._runRejections();
  },
  _isPending: function () {
    return this.status === PENDING;
  },
  _isResolved: function () {
    return this.status === RESOLVED;
  },
  _isRejected: function () {
    return this.status === REJECTED;
  }
};
SynchronousPromise.resolve = function (e) {
  return new SynchronousPromise(function (r, t) {
    looksLikeAPromise(e)
      ? e
          .then(function (n) {
            r(n);
          })
          .catch(function (n) {
            t(n);
          })
      : r(e);
  });
};
SynchronousPromise.reject = function (e) {
  return new SynchronousPromise(function (r, t) {
    t(e);
  });
};
SynchronousPromise.unresolved = function () {
  return new SynchronousPromise(function (e, r) {
    (this.resolve = e), (this.reject = r);
  });
};
SynchronousPromise.all = function () {
  var e = makeArrayFrom(arguments);
  return (
    Array.isArray(e[0]) && (e = e[0]),
    e.length
      ? new SynchronousPromise(function (r, t) {
          var n = [],
            o = 0,
            a = function () {
              o === e.length && r(n);
            },
            s = !1,
            i = function (c) {
              s || ((s = !0), t(c));
            };
          e.forEach(function (c, l) {
            SynchronousPromise.resolve(c)
              .then(function (u) {
                (n[l] = u), (o += 1), a();
              })
              .catch(function (u) {
                i(u);
              });
          });
        })
      : SynchronousPromise.resolve([])
  );
};
function createAggregateErrorFrom(e) {
  return typeof window != 'undefined' && 'AggregateError' in window
    ? new window.AggregateError(e)
    : { errors: e };
}
SynchronousPromise.any = function () {
  var e = makeArrayFrom(arguments);
  return (
    Array.isArray(e[0]) && (e = e[0]),
    e.length
      ? new SynchronousPromise(function (r, t) {
          var n = [],
            o = 0,
            a = function () {
              o === e.length && t(createAggregateErrorFrom(n));
            },
            s = !1,
            i = function (c) {
              s || ((s = !0), r(c));
            };
          e.forEach(function (c, l) {
            SynchronousPromise.resolve(c)
              .then(function (u) {
                i(u);
              })
              .catch(function (u) {
                (n[l] = u), (o += 1), a();
              });
          });
        })
      : SynchronousPromise.reject(createAggregateErrorFrom([]))
  );
};
SynchronousPromise.allSettled = function () {
  var e = makeArrayFrom(arguments);
  return (
    Array.isArray(e[0]) && (e = e[0]),
    e.length
      ? new SynchronousPromise(function (r) {
          var t = [],
            n = 0,
            o = function () {
              (n += 1), n === e.length && r(t);
            };
          e.forEach(function (a, s) {
            SynchronousPromise.resolve(a)
              .then(function (i) {
                (t[s] = { status: 'fulfilled', value: i }), o();
              })
              .catch(function (i) {
                (t[s] = { status: 'rejected', reason: i }), o();
              });
          });
        })
      : SynchronousPromise.resolve([])
  );
};
if (Promise === SynchronousPromise)
  throw new Error(
    'Please use SynchronousPromise.installGlobally() to install globally'
  );
var RealPromise = Promise;
SynchronousPromise.installGlobally = function (e) {
  if (Promise === SynchronousPromise) return e;
  var r = patchAwaiterIfRequired(e);
  return (Promise = SynchronousPromise), r;
};
SynchronousPromise.uninstallGlobally = function () {
  Promise === SynchronousPromise && (Promise = RealPromise);
};
function patchAwaiterIfRequired(e) {
  if (typeof e == 'undefined' || e.__patched) return e;
  var r = e;
  return (
    (e = function () {
      r.apply(this, makeArrayFrom(arguments));
    }),
    (e.__patched = !0),
    e
  );
}
var synchronousPromise = { SynchronousPromise };
function dedent(e) {
  for (var r = [], t = 1; t < arguments.length; t++) r[t - 1] = arguments[t];
  var n = Array.from(typeof e == 'string' ? [e] : e);
  n[n.length - 1] = n[n.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var o = n.reduce(function (i, c) {
    var l = c.match(/\n([\t ]+|(?!\s).)/g);
    return l
      ? i.concat(
          l.map(function (u) {
            var y, d;
            return (d =
              (y = u.match(/[\t ]/g)) === null || y === void 0
                ? void 0
                : y.length) !== null && d !== void 0
              ? d
              : 0;
          })
        )
      : i;
  }, []);
  if (o.length) {
    var a = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, o) +
        '}',
      'g'
    );
    n = n.map(function (i) {
      return i.replace(
        a,
        `
`
      );
    });
  }
  n[0] = n[0].replace(/^\r?\n/, '');
  var s = n[0];
  return (
    r.forEach(function (i, c) {
      var l = s.match(/(?:^|\n)( *)$/),
        u = l ? l[1] : '',
        y = i;
      typeof i == 'string' &&
        i.includes(`
`) &&
        (y = String(i)
          .split(
            `
`
          )
          .map(function (d, g) {
            return g === 0 ? d : '' + u + d;
          }).join(`
`)),
        (s += y + n[c + 1]);
    }),
    s
  );
}
var _templateObject$d;
function _taggedTemplateLiteral$d(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _slicedToArray$c(e, r) {
  return (
    _arrayWithHoles$d(e) ||
    _iterableToArrayLimit$c(e, r) ||
    _unsupportedIterableToArray$j(e, r) ||
    _nonIterableRest$d()
  );
}
function _nonIterableRest$d() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$j(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$j(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$j(e, r);
  }
}
function _arrayLikeToArray$j(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$c(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$d(e) {
  if (Array.isArray(e)) return e;
}
function _classCallCheck$h(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$h(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$h(e, r, t) {
  return (
    r && _defineProperties$h(e.prototype, r),
    t && _defineProperties$h(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var StoryIndexStore = (function () {
    function e() {
      var r =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { v: 3, stories: {} },
        t = r.stories;
      _classCallCheck$h(this, e),
        (this.channel = void 0),
        (this.stories = void 0),
        (this.stories = t);
    }
    return (
      _createClass$h(e, [
        {
          key: 'storyIdFromSpecifier',
          value: function (t) {
            var n = Object.keys(this.stories);
            if (t === '*') return n[0];
            if (typeof t == 'string')
              return n.indexOf(t) >= 0
                ? t
                : n.find(function (i) {
                    return i.startsWith(t);
                  });
            var o = t.name,
              a = t.title,
              s = Object.entries(this.stories).find(function (i) {
                var c = _slicedToArray$c(i, 2);
                c[0];
                var l = c[1];
                return l.name === o && l.title === a;
              });
            return s && s[0];
          }
        },
        {
          key: 'storyIdToEntry',
          value: function (t) {
            var n = this.stories[t];
            if (!n)
              throw new Error(
                dedent(
                  _templateObject$d ||
                    (_templateObject$d = _taggedTemplateLiteral$d([
                      "Couldn't find story matching '",
                      `' after HMR.
      - Did you remove it from your CSF file?
      - Are you sure a story with that id exists?
      - Please check your stories field of your main.js config.
      - Also check the browser console and terminal for error messages.`
                    ])),
                  t
                )
              );
            return n;
          }
        }
      ]),
      e
    );
  })(),
  fastDeepEqual = function e(r, t) {
    if (r === t) return !0;
    if (r && t && typeof r == 'object' && typeof t == 'object') {
      if (r.constructor !== t.constructor) return !1;
      var n, o, a;
      if (Array.isArray(r)) {
        if (((n = r.length), n != t.length)) return !1;
        for (o = n; o-- !== 0; ) if (!e(r[o], t[o])) return !1;
        return !0;
      }
      if (r.constructor === RegExp)
        return r.source === t.source && r.flags === t.flags;
      if (r.valueOf !== Object.prototype.valueOf)
        return r.valueOf() === t.valueOf();
      if (r.toString !== Object.prototype.toString)
        return r.toString() === t.toString();
      if (((a = Object.keys(r)), (n = a.length), n !== Object.keys(t).length))
        return !1;
      for (o = n; o-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, a[o])) return !1;
      for (o = n; o-- !== 0; ) {
        var s = a[o];
        if (!e(r[s], t[s])) return !1;
      }
      return !0;
    }
    return r !== r && t !== t;
  },
  LOGLEVEL = window_1.LOGLEVEL,
  console$1 = window_1.console,
  levels = { trace: 1, debug: 2, info: 3, warn: 4, error: 5, silent: 10 },
  currentLogLevelString = LOGLEVEL,
  currentLogLevelNumber = levels[currentLogLevelString] || levels.info,
  logger = {
    trace: function (r) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return (
        currentLogLevelNumber <= levels.trace &&
        console$1.trace.apply(console$1, [r].concat(n))
      );
    },
    debug: function (r) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return (
        currentLogLevelNumber <= levels.debug &&
        console$1.debug.apply(console$1, [r].concat(n))
      );
    },
    info: function (r) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return (
        currentLogLevelNumber <= levels.info &&
        console$1.info.apply(console$1, [r].concat(n))
      );
    },
    warn: function (r) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return (
        currentLogLevelNumber <= levels.warn &&
        console$1.warn.apply(console$1, [r].concat(n))
      );
    },
    error: function (r) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return (
        currentLogLevelNumber <= levels.error &&
        console$1.error.apply(console$1, [r].concat(n))
      );
    },
    log: function (r) {
      for (
        var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1;
        o < t;
        o++
      )
        n[o - 1] = arguments[o];
      return (
        currentLogLevelNumber < levels.silent &&
        console$1.log.apply(console$1, [r].concat(n))
      );
    }
  },
  logged = new Set(),
  once = function (r) {
    return function (t) {
      if (!logged.has(t)) {
        logged.add(t);
        for (
          var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1;
          a < n;
          a++
        )
          o[a - 1] = arguments[a];
        return logger[r].apply(logger, [t].concat(o));
      }
    };
  };
once.clear = function () {
  return logged.clear();
};
once.trace = once('trace');
once.debug = once('debug');
once.info = once('info');
once.warn = once('warn');
once.error = once('error');
once.log = once('log');
var pretty = function (r) {
  return function () {
    for (var t = [], n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    if (o.length) {
      var s = /<span\s+style=(['"])([^'"]*)\1\s*>/gi,
        i = /<\/span>/gi,
        c;
      for (t.push(o[0].replace(s, '%c').replace(i, '%c')); (c = s.exec(o[0])); )
        t.push(c[2]), t.push('');
      for (var l = 1; l < o.length; l++) t.push(o[l]);
    }
    logger[r].apply(logger, t);
  };
};
pretty.trace = pretty('trace');
pretty.debug = pretty('debug');
pretty.info = pretty('info');
pretty.warn = pretty('warn');
pretty.error = pretty('error');
var overArg = _overArg,
  getPrototype$2 = overArg(Object.getPrototypeOf, Object),
  _getPrototype = getPrototype$2,
  baseGetTag = _baseGetTag,
  getPrototype$1 = _getPrototype,
  isObjectLike = isObjectLike_1,
  objectTag = '[object Object]',
  funcProto = Function.prototype,
  objectProto$1 = Object.prototype,
  funcToString = funcProto.toString,
  hasOwnProperty$1 = objectProto$1.hasOwnProperty,
  objectCtorString = funcToString.call(Object);
function isPlainObject(e) {
  if (!isObjectLike(e) || baseGetTag(e) != objectTag) return !1;
  var r = getPrototype$1(e);
  if (r === null) return !0;
  var t = hasOwnProperty$1.call(r, 'constructor') && r.constructor;
  return (
    typeof t == 'function' &&
    t instanceof t &&
    funcToString.call(t) == objectCtorString
  );
}
var isPlainObject_1 = isPlainObject,
  _templateObject$c,
  _templateObject2$2;
function _taggedTemplateLiteral$c(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _toConsumableArray$a(e) {
  return (
    _arrayWithoutHoles$a(e) ||
    _iterableToArray$a(e) ||
    _unsupportedIterableToArray$i(e) ||
    _nonIterableSpread$a()
  );
}
function _nonIterableSpread$a() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArray$a(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$a(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$i(e);
}
function _defineProperty$4(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
function _slicedToArray$b(e, r) {
  return (
    _arrayWithHoles$c(e) ||
    _iterableToArrayLimit$b(e, r) ||
    _unsupportedIterableToArray$i(e, r) ||
    _nonIterableRest$c()
  );
}
function _nonIterableRest$c() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$i(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$i(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$i(e, r);
  }
}
function _arrayLikeToArray$i(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$b(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$c(e) {
  if (Array.isArray(e)) return e;
}
function _typeof$4(e) {
  return (
    (_typeof$4 =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    _typeof$4(e)
  );
}
var INCOMPATIBLE = Symbol('incompatible'),
  map$1 = function e(r, t) {
    var n = t.type;
    if (r == null || !n || t.mapping) return r;
    switch (n.name) {
      case 'string':
        return String(r);
      case 'enum':
        return r;
      case 'number':
        return Number(r);
      case 'boolean':
        return r === 'true';
      case 'array':
        return !n.value || !Array.isArray(r)
          ? INCOMPATIBLE
          : r.reduce(function (o, a, s) {
              var i = e(a, { type: n.value });
              return i !== INCOMPATIBLE && (o[s] = i), o;
            }, new Array(r.length));
      case 'object':
        return typeof r == 'string' || typeof r == 'number'
          ? r
          : !n.value || _typeof$4(r) !== 'object'
          ? INCOMPATIBLE
          : Object.entries(r).reduce(function (o, a) {
              var s = _slicedToArray$b(a, 2),
                i = s[0],
                c = s[1],
                l = e(c, { type: n.value[i] });
              return l === INCOMPATIBLE
                ? o
                : Object.assign(o, _defineProperty$4({}, i, l));
            }, {});
      default:
        return INCOMPATIBLE;
    }
  },
  mapArgsToTypes = function (r, t) {
    return Object.entries(r).reduce(function (n, o) {
      var a = _slicedToArray$b(o, 2),
        s = a[0],
        i = a[1];
      if (!t[s]) return n;
      var c = map$1(i, t[s]);
      return c === INCOMPATIBLE
        ? n
        : Object.assign(n, _defineProperty$4({}, s, c));
    }, {});
  },
  combineArgs = function e(r, t) {
    return Array.isArray(r) && Array.isArray(t)
      ? t
          .reduce(function (n, o, a) {
            return (n[a] = e(r[a], t[a])), n;
          }, _toConsumableArray$a(r))
          .filter(function (n) {
            return n !== void 0;
          })
      : !isPlainObject_1(r) || !isPlainObject_1(t)
      ? t
      : Object.keys(Object.assign({}, r, t)).reduce(function (n, o) {
          if (o in t) {
            var a = e(r[o], t[o]);
            a !== void 0 && (n[o] = a);
          } else n[o] = r[o];
          return n;
        }, {});
  },
  validateOptions = function (r, t) {
    return Object.entries(t).reduce(function (n, o) {
      var a = _slicedToArray$b(o, 2),
        s = a[0],
        i = a[1].options;
      function c() {
        return s in r && (n[s] = r[s]), n;
      }
      if (!i) return c();
      if (!Array.isArray(i))
        return (
          once.error(
            dedent(
              _templateObject$c ||
                (_templateObject$c = _taggedTemplateLiteral$c([
                  `
        Invalid argType: '`,
                  `.options' should be an array.

        More info: https://storybook.js.org/docs/react/api/argtypes
      `
                ])),
              s
            )
          ),
          c()
        );
      if (
        i.some(function (h) {
          return h && ['object', 'function'].includes(_typeof$4(h));
        })
      )
        return (
          once.error(
            dedent(
              _templateObject2$2 ||
                (_templateObject2$2 = _taggedTemplateLiteral$c([
                  `
        Invalid argType: '`,
                  `.options' should only contain primitives. Use a 'mapping' for complex values.

        More info: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
      `
                ])),
              s
            )
          ),
          c()
        );
      var l = Array.isArray(r[s]),
        u =
          l &&
          r[s].findIndex(function (h) {
            return !i.includes(h);
          }),
        y = l && u === -1;
      if (r[s] === void 0 || i.includes(r[s]) || y) return c();
      var d = l ? ''.concat(s, '[').concat(u, ']') : s,
        g = i
          .map(function (h) {
            return typeof h == 'string' ? "'".concat(h, "'") : String(h);
          })
          .join(', ');
      return (
        once.warn(
          "Received illegal value for '"
            .concat(d, "'. Supported options: ")
            .concat(g)
        ),
        n
      );
    }, {});
  },
  DEEPLY_EQUAL = Symbol('Deeply equal'),
  deepDiff = function e(r, t) {
    if (_typeof$4(r) !== _typeof$4(t)) return t;
    if (fastDeepEqual(r, t)) return DEEPLY_EQUAL;
    if (Array.isArray(r) && Array.isArray(t)) {
      var n = t.reduce(function (o, a, s) {
        var i = e(r[s], a);
        return i !== DEEPLY_EQUAL && (o[s] = i), o;
      }, new Array(t.length));
      return t.length >= r.length
        ? n
        : n.concat(new Array(r.length - t.length).fill(void 0));
    }
    return isPlainObject_1(r) && isPlainObject_1(t)
      ? Object.keys(Object.assign({}, r, t)).reduce(function (o, a) {
          var s = e(r == null ? void 0 : r[a], t == null ? void 0 : t[a]);
          return s === DEEPLY_EQUAL
            ? o
            : Object.assign(o, _defineProperty$4({}, a, s));
        }, {})
      : t;
  },
  NO_TARGET_NAME = '';
function groupArgsByTarget(e) {
  var r = e.args,
    t = e.argTypes,
    n = {};
  return (
    Object.entries(r).forEach(function (o) {
      var a = _slicedToArray$b(o, 2),
        s = a[0],
        i = a[1],
        c = t[s] || {},
        l = c.target,
        u = l === void 0 ? NO_TARGET_NAME : l;
      (n[u] = n[u] || {}), (n[u][s] = i);
    }),
    n
  );
}
function _classCallCheck$g(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$g(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$g(e, r, t) {
  return (
    r && _defineProperties$g(e.prototype, r),
    t && _defineProperties$g(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function deleteUndefined(e) {
  return (
    Object.keys(e).forEach(function (r) {
      return e[r] === void 0 && delete e[r];
    }),
    e
  );
}
var ArgsStore = (function () {
    function e() {
      _classCallCheck$g(this, e),
        (this.initialArgsByStoryId = {}),
        (this.argsByStoryId = {});
    }
    return (
      _createClass$g(e, [
        {
          key: 'get',
          value: function (t) {
            if (!(t in this.argsByStoryId))
              throw new Error(
                'No args known for '.concat(t, ' -- has it been rendered yet?')
              );
            return this.argsByStoryId[t];
          }
        },
        {
          key: 'setInitial',
          value: function (t) {
            if (!this.initialArgsByStoryId[t.id])
              (this.initialArgsByStoryId[t.id] = t.initialArgs),
                (this.argsByStoryId[t.id] = t.initialArgs);
            else if (this.initialArgsByStoryId[t.id] !== t.initialArgs) {
              var n = deepDiff(
                this.initialArgsByStoryId[t.id],
                this.argsByStoryId[t.id]
              );
              (this.initialArgsByStoryId[t.id] = t.initialArgs),
                (this.argsByStoryId[t.id] = t.initialArgs),
                n !== DEEPLY_EQUAL && this.updateFromDelta(t, n);
            }
          }
        },
        {
          key: 'updateFromDelta',
          value: function (t, n) {
            var o = validateOptions(n, t.argTypes);
            this.argsByStoryId[t.id] = combineArgs(this.argsByStoryId[t.id], o);
          }
        },
        {
          key: 'updateFromPersisted',
          value: function (t, n) {
            var o = mapArgsToTypes(n, t.argTypes);
            return this.updateFromDelta(t, o);
          }
        },
        {
          key: 'update',
          value: function (t, n) {
            if (!(t in this.argsByStoryId))
              throw new Error(
                'No args known for '.concat(t, ' -- has it been rendered yet?')
              );
            this.argsByStoryId[t] = deleteUndefined(
              Object.assign({}, this.argsByStoryId[t], n)
            );
          }
        }
      ]),
      e
    );
  })(),
  browser = deprecate;
function deprecate(e, r) {
  if (config('noDeprecation')) return e;
  var t = !1;
  function n() {
    if (!t) {
      if (config('throwDeprecation')) throw new Error(r);
      config('traceDeprecation') ? console.trace(r) : console.warn(r), (t = !0);
    }
    return e.apply(this, arguments);
  }
  return n;
}
function config(e) {
  try {
    if (!commonjsGlobal.localStorage) return !1;
  } catch {
    return !1;
  }
  var r = commonjsGlobal.localStorage[e];
  return r == null ? !1 : String(r).toLowerCase() === 'true';
}
function _slicedToArray$a(e, r) {
  return (
    _arrayWithHoles$b(e) ||
    _iterableToArrayLimit$a(e, r) ||
    _unsupportedIterableToArray$h(e, r) ||
    _nonIterableRest$b()
  );
}
function _nonIterableRest$b() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$h(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$h(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$h(e, r);
  }
}
function _arrayLikeToArray$h(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$a(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$b(e) {
  if (Array.isArray(e)) return e;
}
var getValuesFromArgTypes = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Object.entries(r).reduce(function (t, n) {
      var o = _slicedToArray$a(n, 2),
        a = o[0],
        s = o[1].defaultValue;
      return typeof s != 'undefined' && (t[a] = s), t;
    }, {});
  },
  _templateObject$b;
function _slicedToArray$9(e, r) {
  return (
    _arrayWithHoles$a(e) ||
    _iterableToArrayLimit$9(e, r) ||
    _unsupportedIterableToArray$g(e, r) ||
    _nonIterableRest$a()
  );
}
function _nonIterableRest$a() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArrayLimit$9(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$a(e) {
  if (Array.isArray(e)) return e;
}
function _toConsumableArray$9(e) {
  return (
    _arrayWithoutHoles$9(e) ||
    _iterableToArray$9(e) ||
    _unsupportedIterableToArray$g(e) ||
    _nonIterableSpread$9()
  );
}
function _nonIterableSpread$9() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$g(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$g(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$g(e, r);
  }
}
function _iterableToArray$9(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$9(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$g(e);
}
function _arrayLikeToArray$g(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _classCallCheck$f(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$f(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$f(e, r, t) {
  return (
    r && _defineProperties$f(e.prototype, r),
    t && _defineProperties$f(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _taggedTemplateLiteral$b(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
var setUndeclaredWarning = browser(
    function () {},
    dedent(
      _templateObject$b ||
        (_templateObject$b = _taggedTemplateLiteral$b([
          `
    Setting a global value that is undeclared (i.e. not in the user's initial set of globals
    or globalTypes) is deprecated and will have no effect in 7.0.
  `
        ]))
    )
  ),
  GlobalsStore = (function () {
    function e() {
      _classCallCheck$f(this, e),
        (this.allowedGlobalNames = void 0),
        (this.initialGlobals = void 0),
        (this.globals = {});
    }
    return (
      _createClass$f(e, [
        {
          key: 'set',
          value: function (t) {
            var n = t.globals,
              o = n === void 0 ? {} : n,
              a = t.globalTypes,
              s = a === void 0 ? {} : a,
              i =
                this.initialGlobals &&
                deepDiff(this.initialGlobals, this.globals);
            this.allowedGlobalNames = new Set(
              [].concat(
                _toConsumableArray$9(Object.keys(o)),
                _toConsumableArray$9(Object.keys(s))
              )
            );
            var c = getValuesFromArgTypes(s);
            (this.initialGlobals = Object.assign({}, c, o)),
              (this.globals = this.initialGlobals),
              i && i !== DEEPLY_EQUAL && this.updateFromPersisted(i);
          }
        },
        {
          key: 'filterAllowedGlobals',
          value: function (t) {
            var n = this;
            return Object.entries(t).reduce(function (o, a) {
              var s = _slicedToArray$9(a, 2),
                i = s[0],
                c = s[1];
              return n.allowedGlobalNames.has(i) && (o[i] = c), o;
            }, {});
          }
        },
        {
          key: 'updateFromPersisted',
          value: function (t) {
            var n = this.filterAllowedGlobals(t);
            this.globals = Object.assign({}, this.globals, n);
          }
        },
        {
          key: 'get',
          value: function () {
            return this.globals;
          }
        },
        {
          key: 'update',
          value: function (t) {
            var n = this;
            Object.keys(t).forEach(function (o) {
              n.allowedGlobalNames.has(o) || setUndeclaredWarning();
            }),
              (this.globals = Object.assign({}, this.globals, t));
          }
        }
      ]),
      e
    );
  })(),
  _excluded$6 = ['type', 'control'];
function _objectWithoutProperties$6(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$6(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function _objectWithoutPropertiesLoose$6(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var normalizeType = function (r) {
    return typeof r == 'string' ? { name: r } : r;
  },
  normalizeControl = function (r) {
    return typeof r == 'string' ? { type: r } : r;
  },
  normalizeInputType = function (r, t) {
    var n = r.type,
      o = r.control,
      a = _objectWithoutProperties$6(r, _excluded$6),
      s = Object.assign({ name: t }, a);
    return (
      n && (s.type = normalizeType(n)),
      o
        ? (s.control = normalizeControl(o))
        : o === !1 && (s.control = { disable: !0 }),
      s
    );
  },
  normalizeInputTypes = function (r) {
    return mapValues_1(r, normalizeInputType);
  },
  dist = {};
function arrayReduce$1(e, r, t, n) {
  var o = -1,
    a = e == null ? 0 : e.length;
  for (n && a && (t = e[++o]); ++o < a; ) t = r(t, e[o], o, e);
  return t;
}
var _arrayReduce = arrayReduce$1;
function basePropertyOf$1(e) {
  return function (r) {
    return e == null ? void 0 : e[r];
  };
}
var _basePropertyOf = basePropertyOf$1,
  basePropertyOf = _basePropertyOf,
  deburredLetters = {
    À: 'A',
    Á: 'A',
    Â: 'A',
    Ã: 'A',
    Ä: 'A',
    Å: 'A',
    à: 'a',
    á: 'a',
    â: 'a',
    ã: 'a',
    ä: 'a',
    å: 'a',
    Ç: 'C',
    ç: 'c',
    Ð: 'D',
    ð: 'd',
    È: 'E',
    É: 'E',
    Ê: 'E',
    Ë: 'E',
    è: 'e',
    é: 'e',
    ê: 'e',
    ë: 'e',
    Ì: 'I',
    Í: 'I',
    Î: 'I',
    Ï: 'I',
    ì: 'i',
    í: 'i',
    î: 'i',
    ï: 'i',
    Ñ: 'N',
    ñ: 'n',
    Ò: 'O',
    Ó: 'O',
    Ô: 'O',
    Õ: 'O',
    Ö: 'O',
    Ø: 'O',
    ò: 'o',
    ó: 'o',
    ô: 'o',
    õ: 'o',
    ö: 'o',
    ø: 'o',
    Ù: 'U',
    Ú: 'U',
    Û: 'U',
    Ü: 'U',
    ù: 'u',
    ú: 'u',
    û: 'u',
    ü: 'u',
    Ý: 'Y',
    ý: 'y',
    ÿ: 'y',
    Æ: 'Ae',
    æ: 'ae',
    Þ: 'Th',
    þ: 'th',
    ß: 'ss',
    Ā: 'A',
    Ă: 'A',
    Ą: 'A',
    ā: 'a',
    ă: 'a',
    ą: 'a',
    Ć: 'C',
    Ĉ: 'C',
    Ċ: 'C',
    Č: 'C',
    ć: 'c',
    ĉ: 'c',
    ċ: 'c',
    č: 'c',
    Ď: 'D',
    Đ: 'D',
    ď: 'd',
    đ: 'd',
    Ē: 'E',
    Ĕ: 'E',
    Ė: 'E',
    Ę: 'E',
    Ě: 'E',
    ē: 'e',
    ĕ: 'e',
    ė: 'e',
    ę: 'e',
    ě: 'e',
    Ĝ: 'G',
    Ğ: 'G',
    Ġ: 'G',
    Ģ: 'G',
    ĝ: 'g',
    ğ: 'g',
    ġ: 'g',
    ģ: 'g',
    Ĥ: 'H',
    Ħ: 'H',
    ĥ: 'h',
    ħ: 'h',
    Ĩ: 'I',
    Ī: 'I',
    Ĭ: 'I',
    Į: 'I',
    İ: 'I',
    ĩ: 'i',
    ī: 'i',
    ĭ: 'i',
    į: 'i',
    ı: 'i',
    Ĵ: 'J',
    ĵ: 'j',
    Ķ: 'K',
    ķ: 'k',
    ĸ: 'k',
    Ĺ: 'L',
    Ļ: 'L',
    Ľ: 'L',
    Ŀ: 'L',
    Ł: 'L',
    ĺ: 'l',
    ļ: 'l',
    ľ: 'l',
    ŀ: 'l',
    ł: 'l',
    Ń: 'N',
    Ņ: 'N',
    Ň: 'N',
    Ŋ: 'N',
    ń: 'n',
    ņ: 'n',
    ň: 'n',
    ŋ: 'n',
    Ō: 'O',
    Ŏ: 'O',
    Ő: 'O',
    ō: 'o',
    ŏ: 'o',
    ő: 'o',
    Ŕ: 'R',
    Ŗ: 'R',
    Ř: 'R',
    ŕ: 'r',
    ŗ: 'r',
    ř: 'r',
    Ś: 'S',
    Ŝ: 'S',
    Ş: 'S',
    Š: 'S',
    ś: 's',
    ŝ: 's',
    ş: 's',
    š: 's',
    Ţ: 'T',
    Ť: 'T',
    Ŧ: 'T',
    ţ: 't',
    ť: 't',
    ŧ: 't',
    Ũ: 'U',
    Ū: 'U',
    Ŭ: 'U',
    Ů: 'U',
    Ű: 'U',
    Ų: 'U',
    ũ: 'u',
    ū: 'u',
    ŭ: 'u',
    ů: 'u',
    ű: 'u',
    ų: 'u',
    Ŵ: 'W',
    ŵ: 'w',
    Ŷ: 'Y',
    ŷ: 'y',
    Ÿ: 'Y',
    Ź: 'Z',
    Ż: 'Z',
    Ž: 'Z',
    ź: 'z',
    ż: 'z',
    ž: 'z',
    Ĳ: 'IJ',
    ĳ: 'ij',
    Œ: 'Oe',
    œ: 'oe',
    ŉ: "'n",
    ſ: 's'
  },
  deburrLetter$1 = basePropertyOf(deburredLetters),
  _deburrLetter = deburrLetter$1,
  deburrLetter = _deburrLetter,
  toString$3 = toString_1,
  reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
  rsComboMarksRange$3 = '\\u0300-\\u036f',
  reComboHalfMarksRange$3 = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange$3 = '\\u20d0-\\u20ff',
  rsComboRange$3 =
    rsComboMarksRange$3 + reComboHalfMarksRange$3 + rsComboSymbolsRange$3,
  rsCombo$2 = '[' + rsComboRange$3 + ']',
  reComboMark = RegExp(rsCombo$2, 'g');
function deburr$1(e) {
  return (
    (e = toString$3(e)),
    e && e.replace(reLatin, deburrLetter).replace(reComboMark, '')
  );
}
var deburr_1 = deburr$1,
  reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
function asciiWords$1(e) {
  return e.match(reAsciiWord) || [];
}
var _asciiWords = asciiWords$1,
  reHasUnicodeWord =
    /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
function hasUnicodeWord$1(e) {
  return reHasUnicodeWord.test(e);
}
var _hasUnicodeWord = hasUnicodeWord$1,
  rsAstralRange$2 = '\\ud800-\\udfff',
  rsComboMarksRange$2 = '\\u0300-\\u036f',
  reComboHalfMarksRange$2 = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange$2 = '\\u20d0-\\u20ff',
  rsComboRange$2 =
    rsComboMarksRange$2 + reComboHalfMarksRange$2 + rsComboSymbolsRange$2,
  rsDingbatRange = '\\u2700-\\u27bf',
  rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
  rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
  rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
  rsPunctuationRange = '\\u2000-\\u206f',
  rsSpaceRange =
    ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
  rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
  rsVarRange$2 = '\\ufe0e\\ufe0f',
  rsBreakRange =
    rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange,
  rsApos$1 = "['\u2019]",
  rsBreak = '[' + rsBreakRange + ']',
  rsCombo$1 = '[' + rsComboRange$2 + ']',
  rsDigits = '\\d+',
  rsDingbat = '[' + rsDingbatRange + ']',
  rsLower = '[' + rsLowerRange + ']',
  rsMisc =
    '[^' +
    rsAstralRange$2 +
    rsBreakRange +
    rsDigits +
    rsDingbatRange +
    rsLowerRange +
    rsUpperRange +
    ']',
  rsFitz$1 = '\\ud83c[\\udffb-\\udfff]',
  rsModifier$1 = '(?:' + rsCombo$1 + '|' + rsFitz$1 + ')',
  rsNonAstral$1 = '[^' + rsAstralRange$2 + ']',
  rsRegional$1 = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  rsSurrPair$1 = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  rsUpper = '[' + rsUpperRange + ']',
  rsZWJ$2 = '\\u200d',
  rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
  rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
  rsOptContrLower = '(?:' + rsApos$1 + '(?:d|ll|m|re|s|t|ve))?',
  rsOptContrUpper = '(?:' + rsApos$1 + '(?:D|LL|M|RE|S|T|VE))?',
  reOptMod$1 = rsModifier$1 + '?',
  rsOptVar$1 = '[' + rsVarRange$2 + ']?',
  rsOptJoin$1 =
    '(?:' +
    rsZWJ$2 +
    '(?:' +
    [rsNonAstral$1, rsRegional$1, rsSurrPair$1].join('|') +
    ')' +
    rsOptVar$1 +
    reOptMod$1 +
    ')*',
  rsOrdLower = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
  rsOrdUpper = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
  rsSeq$1 = rsOptVar$1 + reOptMod$1 + rsOptJoin$1,
  rsEmoji =
    '(?:' + [rsDingbat, rsRegional$1, rsSurrPair$1].join('|') + ')' + rsSeq$1,
  reUnicodeWord = RegExp(
    [
      rsUpper +
        '?' +
        rsLower +
        '+' +
        rsOptContrLower +
        '(?=' +
        [rsBreak, rsUpper, '$'].join('|') +
        ')',
      rsMiscUpper +
        '+' +
        rsOptContrUpper +
        '(?=' +
        [rsBreak, rsUpper + rsMiscLower, '$'].join('|') +
        ')',
      rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
      rsUpper + '+' + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join('|'),
    'g'
  );
function unicodeWords$1(e) {
  return e.match(reUnicodeWord) || [];
}
var _unicodeWords = unicodeWords$1,
  asciiWords = _asciiWords,
  hasUnicodeWord = _hasUnicodeWord,
  toString$2 = toString_1,
  unicodeWords = _unicodeWords;
function words$1(e, r, t) {
  return (
    (e = toString$2(e)),
    (r = t ? void 0 : r),
    r === void 0
      ? hasUnicodeWord(e)
        ? unicodeWords(e)
        : asciiWords(e)
      : e.match(r) || []
  );
}
var words_1 = words$1,
  arrayReduce = _arrayReduce,
  deburr = deburr_1,
  words = words_1,
  rsApos = "['\u2019]",
  reApos = RegExp(rsApos, 'g');
function createCompounder$1(e) {
  return function (r) {
    return arrayReduce(words(deburr(r).replace(reApos, '')), e, '');
  };
}
var _createCompounder = createCompounder$1;
function baseSlice$1(e, r, t) {
  var n = -1,
    o = e.length;
  r < 0 && (r = -r > o ? 0 : o + r),
    (t = t > o ? o : t),
    t < 0 && (t += o),
    (o = r > t ? 0 : (t - r) >>> 0),
    (r >>>= 0);
  for (var a = Array(o); ++n < o; ) a[n] = e[n + r];
  return a;
}
var _baseSlice = baseSlice$1,
  baseSlice = _baseSlice;
function castSlice$1(e, r, t) {
  var n = e.length;
  return (t = t === void 0 ? n : t), !r && t >= n ? e : baseSlice(e, r, t);
}
var _castSlice = castSlice$1,
  rsAstralRange$1 = '\\ud800-\\udfff',
  rsComboMarksRange$1 = '\\u0300-\\u036f',
  reComboHalfMarksRange$1 = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange$1 = '\\u20d0-\\u20ff',
  rsComboRange$1 =
    rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
  rsVarRange$1 = '\\ufe0e\\ufe0f',
  rsZWJ$1 = '\\u200d',
  reHasUnicode = RegExp(
    '[' + rsZWJ$1 + rsAstralRange$1 + rsComboRange$1 + rsVarRange$1 + ']'
  );
function hasUnicode$2(e) {
  return reHasUnicode.test(e);
}
var _hasUnicode = hasUnicode$2;
function asciiToArray$1(e) {
  return e.split('');
}
var _asciiToArray = asciiToArray$1,
  rsAstralRange = '\\ud800-\\udfff',
  rsComboMarksRange = '\\u0300-\\u036f',
  reComboHalfMarksRange = '\\ufe20-\\ufe2f',
  rsComboSymbolsRange = '\\u20d0-\\u20ff',
  rsComboRange =
    rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
  rsVarRange = '\\ufe0e\\ufe0f',
  rsAstral = '[' + rsAstralRange + ']',
  rsCombo = '[' + rsComboRange + ']',
  rsFitz = '\\ud83c[\\udffb-\\udfff]',
  rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
  rsNonAstral = '[^' + rsAstralRange + ']',
  rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
  rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
  rsZWJ = '\\u200d',
  reOptMod = rsModifier + '?',
  rsOptVar = '[' + rsVarRange + ']?',
  rsOptJoin =
    '(?:' +
    rsZWJ +
    '(?:' +
    [rsNonAstral, rsRegional, rsSurrPair].join('|') +
    ')' +
    rsOptVar +
    reOptMod +
    ')*',
  rsSeq = rsOptVar + reOptMod + rsOptJoin,
  rsSymbol =
    '(?:' +
    [
      rsNonAstral + rsCombo + '?',
      rsCombo,
      rsRegional,
      rsSurrPair,
      rsAstral
    ].join('|') +
    ')',
  reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
function unicodeToArray$1(e) {
  return e.match(reUnicode) || [];
}
var _unicodeToArray = unicodeToArray$1,
  asciiToArray = _asciiToArray,
  hasUnicode$1 = _hasUnicode,
  unicodeToArray = _unicodeToArray;
function stringToArray$1(e) {
  return hasUnicode$1(e) ? unicodeToArray(e) : asciiToArray(e);
}
var _stringToArray = stringToArray$1,
  castSlice = _castSlice,
  hasUnicode = _hasUnicode,
  stringToArray = _stringToArray,
  toString$1 = toString_1;
function createCaseFirst$1(e) {
  return function (r) {
    r = toString$1(r);
    var t = hasUnicode(r) ? stringToArray(r) : void 0,
      n = t ? t[0] : r.charAt(0),
      o = t ? castSlice(t, 1).join('') : r.slice(1);
    return n[e]() + o;
  };
}
var _createCaseFirst = createCaseFirst$1,
  createCaseFirst = _createCaseFirst,
  upperFirst$1 = createCaseFirst('toUpperCase'),
  upperFirst_1 = upperFirst$1,
  createCompounder = _createCompounder,
  upperFirst = upperFirst_1,
  startCase = createCompounder(function (e, r, t) {
    return e + (t ? ' ' : '') + upperFirst(r);
  }),
  startCase_1 = startCase,
  includeConditionalArg$1 = {},
  baseIsEqual = _baseIsEqual;
function isEqual(e, r) {
  return baseIsEqual(e, r);
}
var isEqual_1 = isEqual;
Object.defineProperty(includeConditionalArg$1, '__esModule', { value: !0 });
includeConditionalArg$1.includeConditionalArg =
  includeConditionalArg$1.testValue = void 0;
var _isEqual = _interopRequireDefault(isEqual_1);
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var count = function (r) {
    return r
      .map(function (t) {
        return typeof t != 'undefined';
      })
      .filter(Boolean).length;
  },
  testValue = function (r, t) {
    var n = r,
      o = n.exists,
      a = n.eq,
      s = n.neq,
      i = n.truthy;
    if (count([o, a, s, i]) > 1)
      throw new Error(
        'Invalid conditional test '.concat(
          JSON.stringify({ exists: o, eq: a, neq: s })
        )
      );
    if (typeof a != 'undefined') return (0, _isEqual.default)(t, a);
    if (typeof s != 'undefined') return !(0, _isEqual.default)(t, s);
    if (typeof o != 'undefined') {
      var c = typeof t != 'undefined';
      return o ? c : !c;
    }
    var l = typeof i == 'undefined' ? !0 : i;
    return l ? !!t : !t;
  };
includeConditionalArg$1.testValue = testValue;
var includeConditionalArg = function (r, t, n) {
  if (!r.if) return !0;
  var o = r.if,
    a = o.arg,
    s = o.global;
  if (count([a, s]) !== 1)
    throw new Error(
      'Invalid conditional value '.concat(JSON.stringify({ arg: a, global: s }))
    );
  var i = a ? t[a] : n[s];
  return testValue(r.if, i);
};
includeConditionalArg$1.includeConditionalArg = includeConditionalArg;
var story = {},
  SBType = Object.freeze(
    Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
      value: 'Module'
    })
  ),
  require$$0$3 = getAugmentedNamespace(SBType);
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var r = require$$0$3;
  Object.keys(r).forEach(function (t) {
    t === 'default' ||
      t === '__esModule' ||
      Object.defineProperty(e, t, {
        enumerable: !0,
        get: function () {
          return r[t];
        }
      });
  });
})(story);
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var r = {
    sanitize: !0,
    toId: !0,
    storyNameFromExport: !0,
    isExportStory: !0,
    parseKind: !0,
    includeConditionalArg: !0
  };
  (e.isExportStory = S),
    Object.defineProperty(e, 'includeConditionalArg', {
      enumerable: !0,
      get: function () {
        return n.includeConditionalArg;
      }
    }),
    (e.parseKind = e.storyNameFromExport = e.toId = e.sanitize = void 0);
  var t = a(startCase_1),
    n = includeConditionalArg$1,
    o = story;
  Object.keys(o).forEach(function (v) {
    v === 'default' ||
      v === '__esModule' ||
      Object.prototype.hasOwnProperty.call(r, v) ||
      Object.defineProperty(e, v, {
        enumerable: !0,
        get: function () {
          return o[v];
        }
      });
  });
  function a(v) {
    return v && v.__esModule ? v : { default: v };
  }
  function s(v, _) {
    return y(v) || u(v, _) || c(v, _) || i();
  }
  function i() {
    throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  function c(v, _) {
    if (!!v) {
      if (typeof v == 'string') return l(v, _);
      var A = Object.prototype.toString.call(v).slice(8, -1);
      if (
        (A === 'Object' && v.constructor && (A = v.constructor.name),
        A === 'Map' || A === 'Set')
      )
        return Array.from(A);
      if (
        A === 'Arguments' ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)
      )
        return l(v, _);
    }
  }
  function l(v, _) {
    (_ == null || _ > v.length) && (_ = v.length);
    for (var A = 0, P = new Array(_); A < _; A++) P[A] = v[A];
    return P;
  }
  function u(v, _) {
    if (!(typeof Symbol == 'undefined' || !(Symbol.iterator in Object(v)))) {
      var A = [],
        P = !0,
        D = !1,
        R = void 0;
      try {
        for (
          var k = v[Symbol.iterator](), j;
          !(P = (j = k.next()).done) &&
          (A.push(j.value), !(_ && A.length === _));
          P = !0
        );
      } catch (I) {
        (D = !0), (R = I);
      } finally {
        try {
          !P && k.return != null && k.return();
        } finally {
          if (D) throw R;
        }
      }
      return A;
    }
  }
  function y(v) {
    if (Array.isArray(v)) return v;
  }
  var d = function (_) {
    return _.toLowerCase()
      .replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '-')
      .replace(/-+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  };
  e.sanitize = d;
  var g = function (_, A) {
      var P = d(_);
      if (P === '')
        throw new Error(
          'Invalid '
            .concat(A, " '")
            .concat(_, "', must include alphanumeric characters")
        );
      return P;
    },
    h = function (_, A) {
      return ''.concat(g(_, 'kind')).concat(A ? '--'.concat(g(A, 'name')) : '');
    };
  e.toId = h;
  var b = function (_) {
    return (0, t.default)(_);
  };
  e.storyNameFromExport = b;
  function w(v, _) {
    return Array.isArray(_) ? _.includes(v) : v.match(_);
  }
  function S(v, _) {
    var A = _.includeStories,
      P = _.excludeStories;
    return v !== '__esModule' && (!A || w(v, A)) && (!P || !w(v, P));
  }
  var T = function (_, A) {
    var P = A.rootSeparator,
      D = A.groupSeparator,
      R = _.split(P, 2),
      k = s(R, 2),
      j = k[0],
      I = k[1],
      L = (I || _).split(D).filter(function (F) {
        return !!F;
      });
    return { root: I ? j : null, groups: L };
  };
  e.parseKind = T;
})(dist);
var _templateObject$a;
function _toConsumableArray$8(e) {
  return (
    _arrayWithoutHoles$8(e) ||
    _iterableToArray$8(e) ||
    _unsupportedIterableToArray$f(e) ||
    _nonIterableSpread$8()
  );
}
function _nonIterableSpread$8() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$f(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$f(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$f(e, r);
  }
}
function _iterableToArray$8(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$8(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$f(e);
}
function _arrayLikeToArray$f(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _taggedTemplateLiteral$a(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
var deprecatedStoryAnnotation = dedent(
    _templateObject$a ||
      (_templateObject$a = _taggedTemplateLiteral$a([
        `
CSF .story annotations deprecated; annotate story functions directly:
- StoryFn.story.name => StoryFn.storyName
- StoryFn.story.(parameters|decorators) => StoryFn.(parameters|decorators)
See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#hoisted-csf-annotations for details and codemod.
`
      ]))
  ),
  deprecatedStoryAnnotationWarning = browser(function () {},
  deprecatedStoryAnnotation);
function normalizeStory(e, r, t) {
  var n, o;
  typeof r == 'function' && (n = r), (o = r);
  var a = o,
    s = a.story;
  s &&
    (logger.debug('deprecated story', s), deprecatedStoryAnnotationWarning());
  var i = dist.storyNameFromExport(e),
    c =
      (typeof o != 'function' && o.name) ||
      o.storyName ||
      (s == null ? void 0 : s.name) ||
      i,
    l = [].concat(
      _toConsumableArray$8(o.decorators || []),
      _toConsumableArray$8((s == null ? void 0 : s.decorators) || [])
    ),
    u = Object.assign({}, s == null ? void 0 : s.parameters, o.parameters),
    y = Object.assign({}, s == null ? void 0 : s.args, o.args),
    d = Object.assign({}, s == null ? void 0 : s.argTypes, o.argTypes),
    g = [].concat(
      _toConsumableArray$8(o.loaders || []),
      _toConsumableArray$8((s == null ? void 0 : s.loaders) || [])
    ),
    h = o,
    b = h.render,
    w = h.play,
    S = u.__id || dist.toId(t.id || t.title, i);
  return Object.assign(
    {
      id: S,
      name: c,
      decorators: l,
      parameters: u,
      args: y,
      argTypes: normalizeInputTypes(d),
      loaders: g
    },
    b && { render: b },
    n && { userStoryFn: n },
    w && { play: w }
  );
}
function normalizeComponentAnnotations(e) {
  var r =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e.title,
    t = arguments.length > 2 ? arguments[2] : void 0,
    n = e.id,
    o = e.argTypes;
  return Object.assign(
    { id: dist.sanitize(n || r) },
    e,
    { title: r },
    o && { argTypes: normalizeInputTypes(o) },
    { parameters: Object.assign({ fileName: t }, e.parameters) }
  );
}
var _excluded$5 = ['default', '__namedExportsOrder'];
function _objectWithoutProperties$5(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$5(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function _objectWithoutPropertiesLoose$5(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var checkGlobals = function (r) {
    var t = r.globals,
      n = r.globalTypes;
    (t || n) &&
      logger.error(
        'Global args/argTypes can only be set globally',
        JSON.stringify({ globals: t, globalTypes: n })
      );
  },
  checkStorySort = function (r) {
    var t = r.options;
    t != null &&
      t.storySort &&
      logger.error('The storySort option parameter can only be set globally');
  },
  checkDisallowedParameters = function (r) {
    !r || (checkGlobals(r), checkStorySort(r));
  };
function processCSFFile(e, r, t) {
  var n = e.default;
  e.__namedExportsOrder;
  var o = _objectWithoutProperties$5(e, _excluded$5),
    a = normalizeComponentAnnotations(n, t, r);
  checkDisallowedParameters(a.parameters);
  var s = { meta: a, stories: {} };
  return (
    Object.keys(o).forEach(function (i) {
      if (dist.isExportStory(i, a)) {
        var c = normalizeStory(i, o[i], a);
        checkDisallowedParameters(c.parameters), (s.stories[c.id] = c);
      }
    }),
    s
  );
}
function _toConsumableArray$7(e) {
  return (
    _arrayWithoutHoles$7(e) ||
    _iterableToArray$7(e) ||
    _unsupportedIterableToArray$e(e) ||
    _nonIterableSpread$7()
  );
}
function _nonIterableSpread$7() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArray$7(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$7(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$e(e);
}
function _slicedToArray$8(e, r) {
  return (
    _arrayWithHoles$9(e) ||
    _iterableToArrayLimit$8(e, r) ||
    _unsupportedIterableToArray$e(e, r) ||
    _nonIterableRest$9()
  );
}
function _nonIterableRest$9() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$e(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$e(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$e(e, r);
  }
}
function _arrayLikeToArray$e(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$8(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$9(e) {
  if (Array.isArray(e)) return e;
}
var combineParameters = function e() {
    for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
      t[n] = arguments[n];
    var o = {},
      a = t.filter(Boolean).reduce(function (s, i) {
        return (
          Object.entries(i).forEach(function (c) {
            var l = _slicedToArray$8(c, 2),
              u = l[0],
              y = l[1],
              d = s[u];
            Array.isArray(y) || typeof d == 'undefined'
              ? (s[u] = y)
              : isPlainObject_1(y) && isPlainObject_1(d)
              ? (o[u] = !0)
              : typeof y != 'undefined' && (s[u] = y);
          }),
          s
        );
      }, {});
    return (
      Object.keys(o).forEach(function (s) {
        var i = t
          .filter(Boolean)
          .map(function (c) {
            return c[s];
          })
          .filter(function (c) {
            return typeof c != 'undefined';
          });
        i.every(function (c) {
          return isPlainObject_1(c);
        })
          ? (a[s] = e.apply(void 0, _toConsumableArray$7(i)))
          : (a[s] = i[i.length - 1]);
      }),
      a
    );
  },
  events;
(function (e) {
  (e.CHANNEL_CREATED = 'channelCreated'),
    (e.CONFIG_ERROR = 'configError'),
    (e.STORY_INDEX_INVALIDATED = 'storyIndexInvalidated'),
    (e.STORY_SPECIFIED = 'storySpecified'),
    (e.SET_STORIES = 'setStories'),
    (e.SET_CURRENT_STORY = 'setCurrentStory'),
    (e.CURRENT_STORY_WAS_SET = 'currentStoryWasSet'),
    (e.FORCE_RE_RENDER = 'forceReRender'),
    (e.FORCE_REMOUNT = 'forceRemount'),
    (e.PRELOAD_STORIES = 'preloadStories'),
    (e.STORY_PREPARED = 'storyPrepared'),
    (e.STORY_CHANGED = 'storyChanged'),
    (e.STORY_UNCHANGED = 'storyUnchanged'),
    (e.STORY_RENDERED = 'storyRendered'),
    (e.STORY_MISSING = 'storyMissing'),
    (e.STORY_ERRORED = 'storyErrored'),
    (e.STORY_THREW_EXCEPTION = 'storyThrewException'),
    (e.STORY_RENDER_PHASE_CHANGED = 'storyRenderPhaseChanged'),
    (e.UPDATE_STORY_ARGS = 'updateStoryArgs'),
    (e.STORY_ARGS_UPDATED = 'storyArgsUpdated'),
    (e.RESET_STORY_ARGS = 'resetStoryArgs'),
    (e.SET_GLOBALS = 'setGlobals'),
    (e.UPDATE_GLOBALS = 'updateGlobals'),
    (e.GLOBALS_UPDATED = 'globalsUpdated'),
    (e.REGISTER_SUBSCRIPTION = 'registerSubscription'),
    (e.PREVIEW_KEYDOWN = 'previewKeydown'),
    (e.SELECT_STORY = 'selectStory'),
    (e.STORIES_COLLAPSE_ALL = 'storiesCollapseAll'),
    (e.STORIES_EXPAND_ALL = 'storiesExpandAll'),
    (e.DOCS_RENDERED = 'docsRendered'),
    (e.SHARED_STATE_CHANGED = 'sharedStateChanged'),
    (e.SHARED_STATE_SET = 'sharedStateSet'),
    (e.NAVIGATE_URL = 'navigateUrl'),
    (e.UPDATE_QUERY_PARAMS = 'updateQueryParams');
})(events || (events = {}));
var Events = events,
  CHANNEL_CREATED = events.CHANNEL_CREATED,
  CONFIG_ERROR = events.CONFIG_ERROR,
  STORY_INDEX_INVALIDATED = events.STORY_INDEX_INVALIDATED,
  STORY_SPECIFIED = events.STORY_SPECIFIED,
  SET_STORIES = events.SET_STORIES,
  SET_CURRENT_STORY = events.SET_CURRENT_STORY,
  CURRENT_STORY_WAS_SET = events.CURRENT_STORY_WAS_SET,
  FORCE_RE_RENDER = events.FORCE_RE_RENDER,
  FORCE_REMOUNT = events.FORCE_REMOUNT,
  STORY_PREPARED = events.STORY_PREPARED,
  STORY_CHANGED = events.STORY_CHANGED,
  STORY_UNCHANGED = events.STORY_UNCHANGED,
  PRELOAD_STORIES = events.PRELOAD_STORIES,
  STORY_RENDERED = events.STORY_RENDERED,
  STORY_MISSING = events.STORY_MISSING,
  STORY_ERRORED = events.STORY_ERRORED,
  STORY_THREW_EXCEPTION = events.STORY_THREW_EXCEPTION,
  STORY_RENDER_PHASE_CHANGED = events.STORY_RENDER_PHASE_CHANGED,
  UPDATE_STORY_ARGS = events.UPDATE_STORY_ARGS,
  STORY_ARGS_UPDATED = events.STORY_ARGS_UPDATED,
  RESET_STORY_ARGS = events.RESET_STORY_ARGS,
  SET_GLOBALS = events.SET_GLOBALS,
  UPDATE_GLOBALS = events.UPDATE_GLOBALS,
  GLOBALS_UPDATED = events.GLOBALS_UPDATED,
  REGISTER_SUBSCRIPTION = events.REGISTER_SUBSCRIPTION,
  PREVIEW_KEYDOWN = events.PREVIEW_KEYDOWN,
  SELECT_STORY = events.SELECT_STORY,
  STORIES_COLLAPSE_ALL = events.STORIES_COLLAPSE_ALL,
  STORIES_EXPAND_ALL = events.STORIES_EXPAND_ALL,
  DOCS_RENDERED = events.DOCS_RENDERED,
  SHARED_STATE_CHANGED = events.SHARED_STATE_CHANGED,
  SHARED_STATE_SET = events.SHARED_STATE_SET,
  NAVIGATE_URL = events.NAVIGATE_URL,
  UPDATE_QUERY_PARAMS = events.UPDATE_QUERY_PARAMS,
  IGNORED_EXCEPTION = new Error('ignoredException'),
  EVENTS = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: Events,
        CHANNEL_CREATED,
        CONFIG_ERROR,
        STORY_INDEX_INVALIDATED,
        STORY_SPECIFIED,
        SET_STORIES,
        SET_CURRENT_STORY,
        CURRENT_STORY_WAS_SET,
        FORCE_RE_RENDER,
        FORCE_REMOUNT,
        STORY_PREPARED,
        STORY_CHANGED,
        STORY_UNCHANGED,
        PRELOAD_STORIES,
        STORY_RENDERED,
        STORY_MISSING,
        STORY_ERRORED,
        STORY_THREW_EXCEPTION,
        STORY_RENDER_PHASE_CHANGED,
        UPDATE_STORY_ARGS,
        STORY_ARGS_UPDATED,
        RESET_STORY_ARGS,
        SET_GLOBALS,
        UPDATE_GLOBALS,
        GLOBALS_UPDATED,
        REGISTER_SUBSCRIPTION,
        PREVIEW_KEYDOWN,
        SELECT_STORY,
        STORIES_COLLAPSE_ALL,
        STORIES_EXPAND_ALL,
        DOCS_RENDERED,
        SHARED_STATE_CHANGED,
        SHARED_STATE_SET,
        NAVIGATE_URL,
        UPDATE_QUERY_PARAMS,
        IGNORED_EXCEPTION
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  _templateObject$9;
function _taggedTemplateLiteral$9(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _classCallCheck$e(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$e(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$e(e, r, t) {
  return (
    r && _defineProperties$e(e.prototype, r),
    t && _defineProperties$e(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var generateRandomId = function () {
    return Math.random().toString(16).slice(2);
  },
  Channel = (function () {
    function e() {
      var r = this,
        t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.transport,
        o = t.async,
        a = o === void 0 ? !1 : o;
      _classCallCheck$e(this, e),
        (this.isAsync = void 0),
        (this.sender = generateRandomId()),
        (this.events = {}),
        (this.data = {}),
        (this.transport = void 0),
        (this.addPeerListener = browser(
          function (s, i) {
            r.addListener(s, i);
          },
          dedent(
            _templateObject$9 ||
              (_templateObject$9 = _taggedTemplateLiteral$9([
                `
      channel.addPeerListener is deprecated
    `
              ]))
          )
        )),
        (this.isAsync = a),
        n &&
          ((this.transport = n),
          this.transport.setHandler(function (s) {
            return r.handleEvent(s);
          }));
    }
    return (
      _createClass$e(e, [
        {
          key: 'hasTransport',
          get: function () {
            return !!this.transport;
          }
        },
        {
          key: 'addListener',
          value: function (t, n) {
            (this.events[t] = this.events[t] || []), this.events[t].push(n);
          }
        },
        {
          key: 'emit',
          value: function (t) {
            for (
              var n = this,
                o = arguments.length,
                a = new Array(o > 1 ? o - 1 : 0),
                s = 1;
              s < o;
              s++
            )
              a[s - 1] = arguments[s];
            var i = { type: t, args: a, from: this.sender },
              c = {};
            a.length >= 1 && a[0] && a[0].options && (c = a[0].options);
            var l = function () {
              n.transport && n.transport.send(i, c), n.handleEvent(i);
            };
            this.isAsync ? setImmediate(l) : l();
          }
        },
        {
          key: 'last',
          value: function (t) {
            return this.data[t];
          }
        },
        {
          key: 'eventNames',
          value: function () {
            return Object.keys(this.events);
          }
        },
        {
          key: 'listenerCount',
          value: function (t) {
            var n = this.listeners(t);
            return n ? n.length : 0;
          }
        },
        {
          key: 'listeners',
          value: function (t) {
            var n = this.events[t];
            return n || void 0;
          }
        },
        {
          key: 'once',
          value: function (t, n) {
            var o = this.onceListener(t, n);
            this.addListener(t, o);
          }
        },
        {
          key: 'removeAllListeners',
          value: function (t) {
            t ? this.events[t] && delete this.events[t] : (this.events = {});
          }
        },
        {
          key: 'removeListener',
          value: function (t, n) {
            var o = this.listeners(t);
            o &&
              (this.events[t] = o.filter(function (a) {
                return a !== n;
              }));
          }
        },
        {
          key: 'on',
          value: function (t, n) {
            this.addListener(t, n);
          }
        },
        {
          key: 'off',
          value: function (t, n) {
            this.removeListener(t, n);
          }
        },
        {
          key: 'handleEvent',
          value: function (t) {
            var n = this.listeners(t.type);
            n &&
              n.length &&
              n.forEach(function (o) {
                o.apply(t, t.args);
              }),
              (this.data[t.type] = t.args);
          }
        },
        {
          key: 'onceListener',
          value: function (t, n) {
            var o = this,
              a = function s() {
                return o.removeListener(t, s), n.apply(void 0, arguments);
              };
            return a;
          }
        }
      ]),
      e
    );
  })(),
  Channel$1 = Channel;
function mockChannel() {
  var e = { setHandler: function () {}, send: function () {} };
  return new Channel$1({ transport: e });
}
var types;
(function (e) {
  (e.TAB = 'tab'),
    (e.PANEL = 'panel'),
    (e.TOOL = 'tool'),
    (e.TOOLEXTRA = 'toolextra'),
    (e.PREVIEW = 'preview'),
    (e.NOTES_ELEMENT = 'notes-element');
})(types || (types = {}));
function _defineProperties$d(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$d(e, r, t) {
  return (
    r && _defineProperties$d(e.prototype, r),
    t && _defineProperties$d(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _classCallCheck$d(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
var AddonStore = _createClass$d(function e() {
    var r = this;
    _classCallCheck$d(this, e),
      (this.loaders = {}),
      (this.elements = {}),
      (this.config = {}),
      (this.channel = void 0),
      (this.serverChannel = void 0),
      (this.promise = void 0),
      (this.resolve = void 0),
      (this.getChannel = function () {
        return r.channel || r.setChannel(mockChannel()), r.channel;
      }),
      (this.getServerChannel = function () {
        if (!r.serverChannel)
          throw new Error('Accessing non-existent serverChannel');
        return r.serverChannel;
      }),
      (this.ready = function () {
        return r.promise;
      }),
      (this.hasChannel = function () {
        return !!r.channel;
      }),
      (this.hasServerChannel = function () {
        return !!r.serverChannel;
      }),
      (this.setChannel = function (t) {
        (r.channel = t), r.resolve();
      }),
      (this.setServerChannel = function (t) {
        r.serverChannel = t;
      }),
      (this.getElements = function (t) {
        return r.elements[t] || (r.elements[t] = {}), r.elements[t];
      }),
      (this.addPanel = function (t, n) {
        r.add(t, Object.assign({ type: types.PANEL }, n));
      }),
      (this.add = function (t, n) {
        var o = n.type,
          a = r.getElements(o);
        a[t] = Object.assign({ id: t }, n);
      }),
      (this.setConfig = function (t) {
        Object.assign(r.config, t);
      }),
      (this.getConfig = function () {
        return r.config;
      }),
      (this.register = function (t, n) {
        r.loaders[t] &&
          logger.warn(
            ''.concat(t, ' was loaded twice, this could have bad side-effects')
          ),
          (r.loaders[t] = n);
      }),
      (this.loadAddons = function (t) {
        Object.values(r.loaders).forEach(function (n) {
          return n(t);
        });
      }),
      (this.promise = new Promise(function (t) {
        r.resolve = function () {
          return t(r.getChannel());
        };
      }));
  }),
  KEY$1 = '__STORYBOOK_ADDONS';
function getAddonsStore() {
  return (
    window_1[KEY$1] || (window_1[KEY$1] = new AddonStore()), window_1[KEY$1]
  );
}
var addons = getAddonsStore();
function _toConsumableArray$6(e) {
  return (
    _arrayWithoutHoles$6(e) ||
    _iterableToArray$6(e) ||
    _unsupportedIterableToArray$d(e) ||
    _nonIterableSpread$6()
  );
}
function _nonIterableSpread$6() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$d(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$d(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$d(e, r);
  }
}
function _iterableToArray$6(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$6(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$d(e);
}
function _arrayLikeToArray$d(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _classCallCheck$c(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$c(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$c(e, r, t) {
  return (
    r && _defineProperties$c(e.prototype, r),
    t && _defineProperties$c(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var globalWindow$2 = window_1.window,
  HooksContext = (function () {
    function e() {
      var r = this;
      _classCallCheck$c(this, e),
        (this.hookListsMap = void 0),
        (this.mountedDecorators = void 0),
        (this.prevMountedDecorators = void 0),
        (this.currentHooks = void 0),
        (this.nextHookIndex = void 0),
        (this.currentPhase = void 0),
        (this.currentEffects = void 0),
        (this.prevEffects = void 0),
        (this.currentDecoratorName = void 0),
        (this.hasUpdates = void 0),
        (this.currentContext = void 0),
        (this.renderListener = function (t) {
          t === r.currentContext.id &&
            (r.triggerEffects(),
            (r.currentContext = null),
            r.removeRenderListeners());
        }),
        this.init();
    }
    return (
      _createClass$c(e, [
        {
          key: 'init',
          value: function () {
            (this.hookListsMap = new WeakMap()),
              (this.mountedDecorators = new Set()),
              (this.prevMountedDecorators = this.mountedDecorators),
              (this.currentHooks = []),
              (this.nextHookIndex = 0),
              (this.currentPhase = 'NONE'),
              (this.currentEffects = []),
              (this.prevEffects = []),
              (this.currentDecoratorName = null),
              (this.hasUpdates = !1),
              (this.currentContext = null);
          }
        },
        {
          key: 'clean',
          value: function () {
            this.prevEffects.forEach(function (t) {
              t.destroy && t.destroy();
            }),
              this.init(),
              this.removeRenderListeners();
          }
        },
        {
          key: 'getNextHook',
          value: function () {
            var t = this.currentHooks[this.nextHookIndex];
            return (this.nextHookIndex += 1), t;
          }
        },
        {
          key: 'triggerEffects',
          value: function () {
            var t = this;
            this.prevEffects.forEach(function (n) {
              !t.currentEffects.includes(n) && n.destroy && n.destroy();
            }),
              this.currentEffects.forEach(function (n) {
                t.prevEffects.includes(n) || (n.destroy = n.create());
              }),
              (this.prevEffects = this.currentEffects),
              (this.currentEffects = []);
          }
        },
        {
          key: 'addRenderListeners',
          value: function () {
            this.removeRenderListeners();
            var t = addons.getChannel();
            t.on(STORY_RENDERED, this.renderListener);
          }
        },
        {
          key: 'removeRenderListeners',
          value: function () {
            var t = addons.getChannel();
            t.removeListener(STORY_RENDERED, this.renderListener);
          }
        }
      ]),
      e
    );
  })();
function hookify(e) {
  return function () {
    var r =
        typeof (arguments.length <= 0 ? void 0 : arguments[0]) == 'function'
          ? arguments.length <= 1
            ? void 0
            : arguments[1]
          : arguments.length <= 0
          ? void 0
          : arguments[0],
      t = r.hooks,
      n = t.currentPhase,
      o = t.currentHooks,
      a = t.nextHookIndex,
      s = t.currentDecoratorName;
    (t.currentDecoratorName = e.name),
      t.prevMountedDecorators.has(e)
        ? ((t.currentPhase = 'UPDATE'),
          (t.currentHooks = t.hookListsMap.get(e) || []))
        : ((t.currentPhase = 'MOUNT'),
          (t.currentHooks = []),
          t.hookListsMap.set(e, t.currentHooks),
          t.prevMountedDecorators.add(e)),
      (t.nextHookIndex = 0);
    var i = globalWindow$2.STORYBOOK_HOOKS_CONTEXT;
    globalWindow$2.STORYBOOK_HOOKS_CONTEXT = t;
    var c = e.apply(void 0, arguments);
    if (
      ((globalWindow$2.STORYBOOK_HOOKS_CONTEXT = i),
      t.currentPhase === 'UPDATE' && t.getNextHook() != null)
    )
      throw new Error(
        'Rendered fewer hooks than expected. This may be caused by an accidental early return statement.'
      );
    return (
      (t.currentPhase = n),
      (t.currentHooks = o),
      (t.nextHookIndex = a),
      (t.currentDecoratorName = s),
      c
    );
  };
}
var numberOfRenders = 0,
  RENDER_LIMIT = 25,
  applyHooks = function (r) {
    return function (t, n) {
      var o = r(
        hookify(t),
        n.map(function (a) {
          return hookify(a);
        })
      );
      return function (a) {
        var s = a,
          i = s.hooks;
        (i.prevMountedDecorators = i.mountedDecorators),
          (i.mountedDecorators = new Set([t].concat(_toConsumableArray$6(n)))),
          (i.currentContext = a),
          (i.hasUpdates = !1);
        var c = o(a);
        for (numberOfRenders = 1; i.hasUpdates; )
          if (
            ((i.hasUpdates = !1),
            (i.currentEffects = []),
            (c = o(a)),
            (numberOfRenders += 1),
            numberOfRenders > RENDER_LIMIT)
          )
            throw new Error(
              'Too many re-renders. Storybook limits the number of renders to prevent an infinite loop.'
            );
        return i.addRenderListeners(), c;
      };
    };
  },
  areDepsEqual = function (r, t) {
    return (
      r.length === t.length &&
      r.every(function (n, o) {
        return n === t[o];
      })
    );
  },
  invalidHooksError = function () {
    return new Error(
      'Storybook preview hooks can only be called inside decorators and story functions.'
    );
  };
function getHooksContextOrNull() {
  return globalWindow$2.STORYBOOK_HOOKS_CONTEXT || null;
}
function getHooksContextOrThrow() {
  var e = getHooksContextOrNull();
  if (e == null) throw invalidHooksError();
  return e;
}
function useHook(e, r, t) {
  var n = getHooksContextOrThrow();
  if (n.currentPhase === 'MOUNT') {
    t != null &&
      !Array.isArray(t) &&
      logger.warn(
        ''
          .concat(
            e,
            ' received a final argument that is not an array (instead, received '
          )
          .concat(t, '). When specified, the final argument must be an array.')
      );
    var o = { name: e, deps: t };
    return n.currentHooks.push(o), r(o), o;
  }
  if (n.currentPhase === 'UPDATE') {
    var a = n.getNextHook();
    if (a == null)
      throw new Error('Rendered more hooks than during the previous render.');
    return (
      a.name !== e &&
        logger.warn(
          'Storybook has detected a change in the order of Hooks'.concat(
            n.currentDecoratorName
              ? ' called by '.concat(n.currentDecoratorName)
              : '',
            '. This will lead to bugs and errors if not fixed.'
          )
        ),
      t != null &&
        a.deps == null &&
        logger.warn(
          ''.concat(
            e,
            ' received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.'
          )
        ),
      t != null &&
        a.deps != null &&
        t.length !== a.deps.length &&
        logger.warn(
          'The final argument passed to '
            .concat(
              e,
              ` changed size between renders. The order and size of this array must remain constant.
Previous: `
            )
            .concat(
              a.deps,
              `
Incoming: `
            )
            .concat(t)
        ),
      (t == null || a.deps == null || !areDepsEqual(t, a.deps)) &&
        (r(a), (a.deps = t)),
      a
    );
  }
  throw invalidHooksError();
}
function useMemoLike(e, r, t) {
  var n = useHook(
      e,
      function (a) {
        a.memoizedState = r();
      },
      t
    ),
    o = n.memoizedState;
  return o;
}
function useMemo(e, r) {
  return useMemoLike('useMemo', e, r);
}
function useEffect(e, r) {
  var t = getHooksContextOrThrow(),
    n = useMemoLike(
      'useEffect',
      function () {
        return { create: e };
      },
      r
    );
  t.currentEffects.includes(n) || t.currentEffects.push(n);
}
var _excluded$4 = [
  'componentId',
  'title',
  'kind',
  'id',
  'name',
  'story',
  'parameters',
  'initialArgs',
  'argTypes'
];
function _objectWithoutProperties$4(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$4(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function _objectWithoutPropertiesLoose$4(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function decorateStory(e, r, t) {
  var n = t(e);
  return function (o) {
    return r(n, o);
  };
}
function sanitizeStoryContextUpdate() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  e.componentId,
    e.title,
    e.kind,
    e.id,
    e.name,
    e.story,
    e.parameters,
    e.initialArgs,
    e.argTypes;
  var r = _objectWithoutProperties$4(e, _excluded$4);
  return r;
}
function defaultDecorateStory(e, r) {
  var t = {},
    n = function (s) {
      return function (i) {
        return (
          (t.value = Object.assign({}, t.value, sanitizeStoryContextUpdate(i))),
          s(t.value)
        );
      };
    },
    o = r.reduce(function (a, s) {
      return decorateStory(a, s, n);
    }, e);
  return function (a) {
    return (t.value = a), o(a);
  };
}
var _templateObject$8;
function _slicedToArray$7(e, r) {
  return (
    _arrayWithHoles$8(e) ||
    _iterableToArrayLimit$7(e, r) ||
    _unsupportedIterableToArray$c(e, r) ||
    _nonIterableRest$8()
  );
}
function _nonIterableRest$8() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArrayLimit$7(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$8(e) {
  if (Array.isArray(e)) return e;
}
function asyncGeneratorStep$5(e, r, t, n, o, a, s) {
  try {
    var i = e[a](s),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$5(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(r, t);
      function s(c) {
        asyncGeneratorStep$5(a, n, o, s, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$5(a, n, o, s, i, 'throw', c);
      }
      s(void 0);
    });
  };
}
function _toConsumableArray$5(e) {
  return (
    _arrayWithoutHoles$5(e) ||
    _iterableToArray$5(e) ||
    _unsupportedIterableToArray$c(e) ||
    _nonIterableSpread$5()
  );
}
function _nonIterableSpread$5() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$c(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$c(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$c(e, r);
  }
}
function _iterableToArray$5(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$5(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$c(e);
}
function _arrayLikeToArray$c(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _taggedTemplateLiteral$8(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
var argTypeDefaultValueWarning = browser(
  function () {},
  dedent(
    _templateObject$8 ||
      (_templateObject$8 = _taggedTemplateLiteral$8(
        [
          `
  \`argType.defaultValue\` is deprecated and will be removed in Storybook 7.0.

  https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args`
        ],
        [
          `
  \\\`argType.defaultValue\\\` is deprecated and will be removed in Storybook 7.0.

  https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#no-longer-inferring-default-values-of-args`
        ]
      ))
  )
);
function prepareStory(e, r, t) {
  var n,
    o = e.id,
    a = e.name,
    s = r.title,
    i = combineParameters(t.parameters, r.parameters, e.parameters),
    c = [].concat(
      _toConsumableArray$5(e.decorators || []),
      _toConsumableArray$5(r.decorators || []),
      _toConsumableArray$5(t.decorators || [])
    ),
    l = t.applyDecorators,
    u = l === void 0 ? defaultDecorateStory : l,
    y = t.argTypesEnhancers,
    d = y === void 0 ? [] : y,
    g = t.argsEnhancers,
    h = g === void 0 ? [] : g,
    b = [].concat(
      _toConsumableArray$5(t.loaders || []),
      _toConsumableArray$5(r.loaders || []),
      _toConsumableArray$5(e.loaders || [])
    ),
    w = e.userStoryFn || e.render || r.render || t.render,
    S = combineParameters(t.argTypes, r.argTypes, e.argTypes),
    T = i.passArgsFirst,
    v = T === void 0 ? !0 : T;
  i.__isArgsStory = v && w.length > 0;
  var _ = Object.assign({}, t.args, r.args, e.args),
    A = {
      componentId: r.id,
      title: s,
      kind: s,
      id: o,
      name: a,
      story: a,
      component: r.component,
      subcomponents: r.subcomponents,
      parameters: i,
      initialArgs: _,
      argTypes: S
    };
  A.argTypes = d.reduce(function (F, x) {
    return x(Object.assign({}, A, { argTypes: F }));
  }, A.argTypes);
  var P = getValuesFromArgTypes(A.argTypes);
  Object.keys(P).length > 0 && argTypeDefaultValueWarning();
  var D = Object.assign({}, P, _);
  (A.initialArgs = h.reduce(function (F, x) {
    return Object.assign({}, F, x(Object.assign({}, A, { initialArgs: F })));
  }, D)),
    ((n = window_1.FEATURES) !== null && n !== void 0 && n.breakingChangesV7) ||
      (A.parameters = Object.assign({}, A.parameters, {
        __id: o,
        globals: t.globals,
        globalTypes: t.globalTypes,
        args: A.initialArgs,
        argTypes: A.argTypes
      }));
  var R = (function () {
      var F = _asyncToGenerator$5(
        regeneratorRuntime.mark(function x(N) {
          var U, B;
          return regeneratorRuntime.wrap(function (m) {
            for (;;)
              switch ((m.prev = m.next)) {
                case 0:
                  return (
                    (m.next = 2),
                    Promise.all(
                      b.map(function (E) {
                        return E(N);
                      })
                    )
                  );
                case 2:
                  return (
                    (U = m.sent),
                    (B = Object.assign.apply(
                      Object,
                      [{}].concat(_toConsumableArray$5(U))
                    )),
                    m.abrupt('return', Object.assign({}, N, { loaded: B }))
                  );
                case 5:
                case 'end':
                  return m.stop();
              }
          }, x);
        })
      );
      return function (N) {
        return F.apply(this, arguments);
      };
    })(),
    k = function (x) {
      var N = Object.entries(x.args).reduce(function (E, C) {
          var O,
            q = _slicedToArray$7(C, 2),
            G = q[0],
            M = q[1],
            H =
              (O = x.argTypes[G]) === null || O === void 0 ? void 0 : O.mapping;
          return (E[G] = H && M in H ? H[M] : M), E;
        }, {}),
        U = Object.entries(N).reduce(function (E, C) {
          var O = _slicedToArray$7(C, 2),
            q = O[0],
            G = O[1],
            M = x.argTypes[q] || {};
          return dist.includeConditionalArg(M, N, x.globals) && (E[q] = G), E;
        }, {}),
        B = Object.assign({}, x, { args: U }),
        $ = x.parameters.passArgsFirst,
        m = $ === void 0 ? !0 : $;
      return m ? w(B.args, B) : w(B);
    },
    j = applyHooks(u)(k, c),
    I = function (x) {
      var N,
        U = x;
      if (
        (N = window_1.FEATURES) !== null &&
        N !== void 0 &&
        N.argTypeTargetsV7
      ) {
        var B = groupArgsByTarget(Object.assign({ args: x.args }, x));
        U = Object.assign({}, x, {
          allArgs: x.args,
          argsByTarget: B,
          args: B[NO_TARGET_NAME] || {}
        });
      }
      return j(U);
    },
    L = e.play;
  return Object.freeze(
    Object.assign({}, A, {
      originalStoryFn: w,
      undecoratedStoryFn: k,
      unboundStoryFn: I,
      applyLoaders: R,
      playFunction: L
    })
  );
}
var _templateObject$7;
function _taggedTemplateLiteral$7(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _typeof$3(e) {
  return (
    (_typeof$3 =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    _typeof$3(e)
  );
}
var inferType = function e(r, t, n) {
    var o = _typeof$3(r);
    switch (o) {
      case 'boolean':
      case 'string':
      case 'number':
      case 'function':
      case 'symbol':
        return { name: o };
    }
    if (r) {
      if (n.has(r))
        return (
          logger.warn(
            dedent(
              _templateObject$7 ||
                (_templateObject$7 = _taggedTemplateLiteral$7([
                  `
        We've detected a cycle in arg '`,
                  `'. Args should be JSON-serializable.

        Consider using the mapping feature or fully custom args:
        - Mapping: https://storybook.js.org/docs/react/writing-stories/args#mapping-to-complex-arg-values
        - Custom args: https://storybook.js.org/docs/react/essentials/controls#fully-custom-args
      `
                ])),
              t
            )
          ),
          { name: 'other', value: 'cyclic object' }
        );
      if ((n.add(r), Array.isArray(r))) {
        var a =
          r.length > 0
            ? e(r[0], t, new Set(n))
            : { name: 'other', value: 'unknown' };
        return { name: 'array', value: a };
      }
      var s = mapValues_1(r, function (i) {
        return e(i, t, new Set(n));
      });
      return { name: 'object', value: s };
    }
    return { name: 'object', value: {} };
  },
  inferArgTypes = function (r) {
    var t = r.id,
      n = r.argTypes,
      o = n === void 0 ? {} : n,
      a = r.initialArgs,
      s = a === void 0 ? {} : a,
      i = mapValues_1(s, function (l, u) {
        return {
          name: u,
          type: inferType(l, ''.concat(t, '.').concat(u), new Set())
        };
      }),
      c = mapValues_1(o, function (l, u) {
        return { name: u };
      });
    return combineParameters(i, c, o);
  };
inferArgTypes.secondPass = !0;
var arrayPush = _arrayPush,
  getPrototype = _getPrototype,
  getSymbols = _getSymbols,
  stubArray = stubArray_1,
  nativeGetSymbols = Object.getOwnPropertySymbols,
  getSymbolsIn$1 = nativeGetSymbols
    ? function (e) {
        for (var r = []; e; )
          arrayPush(r, getSymbols(e)), (e = getPrototype(e));
        return r;
      }
    : stubArray,
  _getSymbolsIn = getSymbolsIn$1;
function nativeKeysIn$1(e) {
  var r = [];
  if (e != null) for (var t in Object(e)) r.push(t);
  return r;
}
var _nativeKeysIn = nativeKeysIn$1,
  isObject$3 = isObject_1,
  isPrototype = _isPrototype,
  nativeKeysIn = _nativeKeysIn,
  objectProto = Object.prototype,
  hasOwnProperty = objectProto.hasOwnProperty;
function baseKeysIn$1(e) {
  if (!isObject$3(e)) return nativeKeysIn(e);
  var r = isPrototype(e),
    t = [];
  for (var n in e)
    (n == 'constructor' && (r || !hasOwnProperty.call(e, n))) || t.push(n);
  return t;
}
var _baseKeysIn = baseKeysIn$1,
  arrayLikeKeys = _arrayLikeKeys,
  baseKeysIn = _baseKeysIn,
  isArrayLike = isArrayLike_1;
function keysIn$1(e) {
  return isArrayLike(e) ? arrayLikeKeys(e, !0) : baseKeysIn(e);
}
var keysIn_1 = keysIn$1,
  baseGetAllKeys = _baseGetAllKeys,
  getSymbolsIn = _getSymbolsIn,
  keysIn = keysIn_1;
function getAllKeysIn$1(e) {
  return baseGetAllKeys(e, keysIn, getSymbolsIn);
}
var _getAllKeysIn = getAllKeysIn$1,
  arrayMap = _arrayMap,
  baseIteratee = _baseIteratee,
  basePickBy = _basePickBy,
  getAllKeysIn = _getAllKeysIn;
function pickBy(e, r) {
  if (e == null) return {};
  var t = arrayMap(getAllKeysIn(e), function (n) {
    return [n];
  });
  return (
    (r = baseIteratee(r)),
    basePickBy(e, t, function (n, o) {
      return r(n, o[0]);
    })
  );
}
var pickBy_1 = pickBy,
  matches = function (r, t) {
    return Array.isArray(t) ? t.includes(r) : r.match(t);
  },
  filterArgTypes = function (r, t, n) {
    return !t && !n
      ? r
      : r &&
          pickBy_1(r, function (o, a) {
            var s = o.name || a;
            return (!t || matches(s, t)) && (!n || !matches(s, n));
          });
  },
  inferControl = function (r, t, n) {
    var o = r.type,
      a = r.options;
    if (!(!o && !a)) {
      if (n.color && n.color.test(t)) {
        var s = r.type.name;
        if (s === 'string') return { control: { type: 'color' } };
        logger.warn(
          'Addon controls: Control of type color only supports string, received "'.concat(
            s,
            '" instead'
          )
        );
      }
      if (n.date && n.date.test(t)) return { control: { type: 'date' } };
      switch (o.name) {
        case 'array':
          return { control: { type: 'object' } };
        case 'boolean':
          return { control: { type: 'boolean' } };
        case 'string':
          return { control: { type: 'text' } };
        case 'number':
          return { control: { type: 'number' } };
        case 'enum': {
          var i = o,
            c = i.value;
          return {
            control: {
              type: (c == null ? void 0 : c.length) <= 5 ? 'radio' : 'select'
            },
            options: c
          };
        }
        case 'function':
        case 'symbol':
          return null;
        default:
          return { control: { type: a ? 'select' : 'object' } };
      }
    }
  },
  inferControls = function (r) {
    var t = r.argTypes,
      n = r.parameters,
      o = n.__isArgsStory,
      a = n.controls;
    a = a === void 0 ? {} : a;
    var s = a.include,
      i = s === void 0 ? null : s,
      c = a.exclude,
      l = c === void 0 ? null : c,
      u = a.matchers,
      y = u === void 0 ? {} : u;
    if (!o) return t;
    var d = filterArgTypes(t, i, l),
      g = mapValues_1(d, function (h, b) {
        return (h == null ? void 0 : h.type) && inferControl(h, b, y);
      });
    return combineParameters(g, d);
  };
inferControls.secondPass = !0;
var _excluded$3 = ['argTypes', 'globalTypes', 'argTypesEnhancers'];
function _toConsumableArray$4(e) {
  return (
    _arrayWithoutHoles$4(e) ||
    _iterableToArray$4(e) ||
    _unsupportedIterableToArray$b(e) ||
    _nonIterableSpread$4()
  );
}
function _nonIterableSpread$4() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$b(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$b(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$b(e, r);
  }
}
function _iterableToArray$4(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$4(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$b(e);
}
function _arrayLikeToArray$b(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _objectWithoutProperties$3(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$3(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function _objectWithoutPropertiesLoose$3(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function normalizeProjectAnnotations(e) {
  var r = e.argTypes,
    t = e.globalTypes,
    n = e.argTypesEnhancers,
    o = _objectWithoutProperties$3(e, _excluded$3);
  return Object.assign(
    {},
    r && { argTypes: normalizeInputTypes(r) },
    t && { globalTypes: normalizeInputTypes(t) },
    {
      argTypesEnhancers: [].concat(_toConsumableArray$4(n || []), [
        inferArgTypes,
        inferControls
      ])
    },
    o
  );
}
function _toConsumableArray$3(e) {
  return (
    _arrayWithoutHoles$3(e) ||
    _iterableToArray$3(e) ||
    _unsupportedIterableToArray$a(e) ||
    _nonIterableSpread$3()
  );
}
function _nonIterableSpread$3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$a(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$a(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$a(e, r);
  }
}
function _iterableToArray$3(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$3(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$a(e);
}
function _arrayLikeToArray$a(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function getField(e, r) {
  return e
    .map(function (t) {
      return t[r];
    })
    .filter(Boolean);
}
function getArrayField(e, r) {
  return getField(e, r).reduce(function (t, n) {
    return [].concat(_toConsumableArray$3(t), _toConsumableArray$3(n));
  }, []);
}
function getObjectField(e, r) {
  return Object.assign.apply(
    Object,
    [{}].concat(_toConsumableArray$3(getField(e, r)))
  );
}
function getSingletonField(e, r) {
  return getField(e, r).pop();
}
function composeConfigs(e) {
  var r = getArrayField(e, 'argTypesEnhancers');
  return {
    parameters: combineParameters.apply(
      void 0,
      _toConsumableArray$3(getField(e, 'parameters'))
    ),
    decorators: getArrayField(e, 'decorators'),
    args: getObjectField(e, 'args'),
    argsEnhancers: getArrayField(e, 'argsEnhancers'),
    argTypes: getObjectField(e, 'argTypes'),
    argTypesEnhancers: [].concat(
      _toConsumableArray$3(
        r.filter(function (t) {
          return !t.secondPass;
        })
      ),
      _toConsumableArray$3(
        r.filter(function (t) {
          return t.secondPass;
        })
      )
    ),
    globals: getObjectField(e, 'globals'),
    globalTypes: getObjectField(e, 'globalTypes'),
    loaders: getArrayField(e, 'loaders'),
    render: getSingletonField(e, 'render'),
    renderToDOM: getSingletonField(e, 'renderToDOM'),
    applyDecorators: getSingletonField(e, 'applyDecorators')
  };
}
function _defineProperty$3(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
function _slicedToArray$6(e, r) {
  return (
    _arrayWithHoles$7(e) ||
    _iterableToArrayLimit$6(e, r) ||
    _unsupportedIterableToArray$9(e, r) ||
    _nonIterableRest$7()
  );
}
function _nonIterableRest$7() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$9(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$9(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$9(e, r);
  }
}
function _arrayLikeToArray$9(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$6(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$7(e) {
  if (Array.isArray(e)) return e;
}
function asyncGeneratorStep$4(e, r, t, n, o, a, s) {
  try {
    var i = e[a](s),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$4(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(r, t);
      function s(c) {
        asyncGeneratorStep$4(a, n, o, s, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$4(a, n, o, s, i, 'throw', c);
      }
      s(void 0);
    });
  };
}
function _classCallCheck$b(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$b(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$b(e, r, t) {
  return (
    r && _defineProperties$b(e.prototype, r),
    t && _defineProperties$b(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var CSF_CACHE_SIZE = 1e3,
  STORY_CACHE_SIZE = 1e4,
  StoryStore = (function () {
    function e() {
      var r = this;
      _classCallCheck$b(this, e),
        (this.storyIndex = void 0),
        (this.importFn = void 0),
        (this.projectAnnotations = void 0),
        (this.globals = void 0),
        (this.args = void 0),
        (this.hooks = void 0),
        (this.cachedCSFFiles = void 0),
        (this.processCSFFileWithCache = void 0),
        (this.prepareStoryWithCache = void 0),
        (this.initializationPromise = void 0),
        (this.resolveInitializationPromise = void 0),
        (this.getStoriesJsonData = function () {
          var t = r.getSetStoriesPayload(),
            n = ['fileName', 'docsOnly', 'framework', '__id', '__isArgsStory'],
            o = mapValues_1(t.stories, function (a) {
              var s;
              return Object.assign(
                {},
                pick_1(a, ['id', 'name', 'title']),
                { importPath: r.storyIndex.stories[a.id].importPath },
                !(
                  (s = window_1.FEATURES) !== null &&
                  s !== void 0 &&
                  s.breakingChangesV7
                ) && {
                  kind: a.title,
                  story: a.name,
                  parameters: Object.assign({}, pick_1(a.parameters, n), {
                    fileName: r.storyIndex.stories[a.id].importPath
                  })
                }
              );
            });
          return { v: 3, stories: o };
        }),
        (this.globals = new GlobalsStore()),
        (this.args = new ArgsStore()),
        (this.hooks = {}),
        (this.processCSFFileWithCache =
          memoize$2(CSF_CACHE_SIZE)(processCSFFile)),
        (this.prepareStoryWithCache =
          memoize$2(STORY_CACHE_SIZE)(prepareStory)),
        (this.initializationPromise = new synchronousPromise.SynchronousPromise(
          function (t) {
            r.resolveInitializationPromise = t;
          }
        ));
    }
    return (
      _createClass$b(e, [
        {
          key: 'setProjectAnnotations',
          value: function (t) {
            this.projectAnnotations = normalizeProjectAnnotations(t);
            var n = t.globals,
              o = t.globalTypes;
            this.globals.set({ globals: n, globalTypes: o });
          }
        },
        {
          key: 'initialize',
          value: function (t) {
            var n = t.storyIndex,
              o = t.importFn,
              a = t.cache,
              s = a === void 0 ? !1 : a;
            return (
              (this.storyIndex = new StoryIndexStore(n)),
              (this.importFn = o),
              this.resolveInitializationPromise(),
              s
                ? this.cacheAllCSFFiles()
                : synchronousPromise.SynchronousPromise.resolve()
            );
          }
        },
        {
          key: 'onStoriesChanged',
          value: (function () {
            var r = _asyncToGenerator$4(
              regeneratorRuntime.mark(function n(o) {
                var a, s;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          if (
                            ((a = o.importFn),
                            (s = o.storyIndex),
                            a && (this.importFn = a),
                            s && (this.storyIndex.stories = s.stories),
                            !this.cachedCSFFiles)
                          ) {
                            c.next = 6;
                            break;
                          }
                          return (c.next = 6), this.cacheAllCSFFiles();
                        case 6:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'loadCSFFileByStoryId',
          value: function (t) {
            var n = this,
              o = this.storyIndex.storyIdToEntry(t),
              a = o.importPath,
              s = o.title;
            return this.importFn(a).then(function (i) {
              return n.processCSFFileWithCache(i, a, s);
            });
          }
        },
        {
          key: 'loadAllCSFFiles',
          value: function () {
            var t = this,
              n = {};
            Object.entries(this.storyIndex.stories).forEach(function (a) {
              var s = _slicedToArray$6(a, 2),
                i = s[0],
                c = s[1].importPath;
              n[c] = i;
            });
            var o = Object.entries(n).map(function (a) {
              var s = _slicedToArray$6(a, 2),
                i = s[0],
                c = s[1];
              return t.loadCSFFileByStoryId(c).then(function (l) {
                return { importPath: i, csfFile: l };
              });
            });
            return synchronousPromise.SynchronousPromise.all(o).then(function (
              a
            ) {
              return a.reduce(function (s, i) {
                var c = i.importPath,
                  l = i.csfFile;
                return (s[c] = l), s;
              }, {});
            });
          }
        },
        {
          key: 'cacheAllCSFFiles',
          value: function () {
            var t = this;
            return this.initializationPromise.then(function () {
              return t.loadAllCSFFiles().then(function (n) {
                t.cachedCSFFiles = n;
              });
            });
          }
        },
        {
          key: 'loadStory',
          value: (function () {
            var r = _asyncToGenerator$4(
              regeneratorRuntime.mark(function n(o) {
                var a, s;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (a = o.storyId),
                            (c.next = 3),
                            this.initializationPromise
                          );
                        case 3:
                          return (c.next = 5), this.loadCSFFileByStoryId(a);
                        case 5:
                          return (
                            (s = c.sent),
                            c.abrupt(
                              'return',
                              this.storyFromCSFFile({ storyId: a, csfFile: s })
                            )
                          );
                        case 7:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'storyFromCSFFile',
          value: function (t) {
            var n = t.storyId,
              o = t.csfFile,
              a = o.stories[n];
            if (!a)
              throw new Error(
                "Didn't find '".concat(n, "' in CSF file, this is unexpected")
              );
            var s = o.meta,
              i = this.prepareStoryWithCache(a, s, this.projectAnnotations);
            return (
              this.args.setInitial(i),
              (this.hooks[i.id] = this.hooks[i.id] || new HooksContext()),
              i
            );
          }
        },
        {
          key: 'componentStoriesFromCSFFile',
          value: function (t) {
            var n = this,
              o = t.csfFile;
            return Object.keys(this.storyIndex.stories)
              .filter(function (a) {
                return !!o.stories[a];
              })
              .map(function (a) {
                return n.storyFromCSFFile({ storyId: a, csfFile: o });
              });
          }
        },
        {
          key: 'getStoryContext',
          value: function (t) {
            return Object.assign({}, t, {
              args: this.args.get(t.id),
              globals: this.globals.get(),
              hooks: this.hooks[t.id]
            });
          }
        },
        {
          key: 'cleanupStory',
          value: function (t) {
            this.hooks[t.id].clean();
          }
        },
        {
          key: 'extract',
          value: function () {
            var t = this,
              n =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : { includeDocsOnly: !1 };
            if (!this.cachedCSFFiles)
              throw new Error(
                'Cannot call extract() unless you call cacheAllCSFFiles() first.'
              );
            return Object.entries(this.storyIndex.stories).reduce(function (
              o,
              a
            ) {
              var s = _slicedToArray$6(a, 2),
                i = s[0],
                c = s[1].importPath,
                l = t.cachedCSFFiles[c],
                u = t.storyFromCSFFile({ storyId: i, csfFile: l });
              return (
                (!n.includeDocsOnly && u.parameters.docsOnly) ||
                  (o[i] = Object.entries(u).reduce(
                    function (y, d) {
                      var g = _slicedToArray$6(d, 2),
                        h = g[0],
                        b = g[1];
                      return typeof b == 'function'
                        ? y
                        : Array.isArray(b)
                        ? Object.assign(
                            y,
                            _defineProperty$3({}, h, b.slice().sort())
                          )
                        : Object.assign(y, _defineProperty$3({}, h, b));
                    },
                    { args: u.initialArgs }
                  )),
                o
              );
            },
            {});
          }
        },
        {
          key: 'getSetStoriesPayload',
          value: function () {
            var t = this.extract({ includeDocsOnly: !0 }),
              n = Object.values(t).reduce(function (o, a) {
                var s = a.title;
                return (o[s] = {}), o;
              }, {});
            return {
              v: 2,
              globals: this.globals.get(),
              globalParameters: {},
              kindParameters: n,
              stories: t
            };
          }
        },
        {
          key: 'raw',
          value: function () {
            var t = this;
            return Object.values(this.extract()).map(function (n) {
              var o = n.id;
              return t.fromId(o);
            });
          }
        },
        {
          key: 'fromId',
          value: function (t) {
            var n = this;
            if (!this.cachedCSFFiles)
              throw new Error(
                'Cannot call fromId/raw() unless you call cacheAllCSFFiles() first.'
              );
            var o;
            try {
              var a = this.storyIndex.storyIdToEntry(t);
              o = a.importPath;
            } catch {
              return null;
            }
            var s = this.cachedCSFFiles[o],
              i = this.storyFromCSFFile({ storyId: t, csfFile: s });
            return Object.assign({}, i, {
              storyFn: function (l) {
                var u = Object.assign({}, n.getStoryContext(i), {
                  viewMode: 'story'
                });
                return i.unboundStoryFn(Object.assign({}, u, l));
              }
            });
          }
        }
      ]),
      e
    );
  })(),
  slash = e => {
    const r = /^\\\\\?\\/.test(e),
      t = /[^\u0000-\u0080]+/.test(e);
    return r || t ? e : e.replace(/\\/g, '/');
  },
  _templateObject$6;
function _taggedTemplateLiteral$6(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _toArray$1(e) {
  return (
    _arrayWithHoles$6(e) ||
    _iterableToArray$2(e) ||
    _unsupportedIterableToArray$8(e) ||
    _nonIterableRest$6()
  );
}
function _nonIterableRest$6() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _arrayWithHoles$6(e) {
  if (Array.isArray(e)) return e;
}
function _toConsumableArray$2(e) {
  return (
    _arrayWithoutHoles$2(e) ||
    _iterableToArray$2(e) ||
    _unsupportedIterableToArray$8(e) ||
    _nonIterableSpread$2()
  );
}
function _nonIterableSpread$2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$8(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$8(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$8(e, r);
  }
}
function _iterableToArray$2(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$2(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$8(e);
}
function _arrayLikeToArray$8(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
var stripExtension = function (r) {
    var t = _toConsumableArray$2(r),
      n = t[t.length - 1],
      o = n.indexOf('.'),
      a = o > 0 ? n.substr(0, o) : n;
    t[t.length - 1] = a;
    var s = t,
      i = _toArray$1(s),
      c = i[0],
      l = i.slice(1);
    return c === '' && (t = l), t;
  },
  indexRe = /^index$/i,
  removeRedundantFilename = function (r) {
    var t;
    return r.filter(function (n, o) {
      return o === r.length - 1 && (n === t || indexRe.test(n))
        ? !1
        : ((t = n), !0);
    });
  };
function pathJoin(e) {
  var r = new RegExp('/{1,}', 'g');
  return e.join('/').replace(r, '/');
}
var userOrAutoTitleFromSpecifier = function (r, t, n) {
    var o = t || {},
      a = o.directory,
      s = o.importPathMatcher,
      i = o.titlePrefix,
      c = i === void 0 ? '' : i;
    typeof r == 'number' &&
      once.warn(
        dedent(
          _templateObject$6 ||
            (_templateObject$6 = _taggedTemplateLiteral$6([
              `
      CSF Auto-title received a numeric fileName. This typically happens when
      webpack is mis-configured in production mode. To force webpack to produce
      filenames, set optimization.moduleIds = "named" in your webpack config.
    `
            ]))
        )
      );
    var l = slash(String(r));
    if (s.exec(l)) {
      if (!n) {
        var u = l.replace(a, ''),
          y = slash(pathJoin([c, u])),
          d = y.split('/');
        return (
          (d = stripExtension(d)), (d = removeRedundantFilename(d)), d.join('/')
        );
      }
      return c ? slash(pathJoin([c, n])) : n;
    }
  },
  userOrAutoTitle = function (r, t, n) {
    for (var o = 0; o < t.length; o += 1) {
      var a = userOrAutoTitleFromSpecifier(r, t[o], n);
      if (a) return a;
    }
    return n || void 0;
  },
  stable$1 = { exports: {} };
(function (e, r) {
  //! stable.js 0.1.8, https://github.com/Two-Screen/stable
  //! © 2018 Angry Bytes and contributors. MIT licensed.
  (function (t, n) {
    e.exports = n();
  })(commonjsGlobal, function () {
    var t = function (a, s) {
      return n(a.slice(), s);
    };
    t.inplace = function (a, s) {
      var i = n(a, s);
      return i !== a && o(i, null, a.length, a), a;
    };
    function n(a, s) {
      typeof s != 'function' &&
        (s = function (y, d) {
          return String(y).localeCompare(d);
        });
      var i = a.length;
      if (i <= 1) return a;
      for (var c = new Array(i), l = 1; l < i; l *= 2) {
        o(a, s, l, c);
        var u = a;
        (a = c), (c = u);
      }
      return a;
    }
    var o = function (a, s, i, c) {
      var l = a.length,
        u = 0,
        y = i * 2,
        d,
        g,
        h,
        b,
        w;
      for (d = 0; d < l; d += y)
        for (
          g = d + i,
            h = g + i,
            g > l && (g = l),
            h > l && (h = l),
            b = d,
            w = g;
          ;

        )
          if (b < g && w < h)
            s(a[b], a[w]) <= 0 ? (c[u++] = a[b++]) : (c[u++] = a[w++]);
          else if (b < g) c[u++] = a[b++];
          else if (w < h) c[u++] = a[w++];
          else break;
    };
    return t;
  });
})(stable$1);
var stable = stable$1.exports,
  STORY_KIND_PATH_SEPARATOR = /\s*\/\s*/,
  storySort = function () {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return function (t, n) {
      if (t.title === n.title && !r.includeNames) return 0;
      var o = r.method || 'configure',
        a = r.order || [],
        s = t.title.trim().split(STORY_KIND_PATH_SEPARATOR),
        i = n.title.trim().split(STORY_KIND_PATH_SEPARATOR);
      r.includeNames && (s.push(t.name), i.push(n.name));
      for (var c = 0; s[c] || i[c]; ) {
        if (!s[c]) return -1;
        if (!i[c]) return 1;
        var l = s[c],
          u = i[c];
        if (l !== u) {
          var y = a.indexOf(l),
            d = a.indexOf(u),
            g = a.indexOf('*');
          return y !== -1 || d !== -1
            ? (y === -1 && (g !== -1 ? (y = g) : (y = a.length)),
              d === -1 && (g !== -1 ? (d = g) : (d = a.length)),
              y - d)
            : o === 'configure'
            ? 0
            : l.localeCompare(u, r.locales ? r.locales : void 0, {
                numeric: !0,
                sensitivity: 'accent'
              });
        }
        var h = a.indexOf(l);
        (a = h !== -1 && Array.isArray(a[h + 1]) ? a[h + 1] : []), (c += 1);
      }
      return 0;
    };
  },
  sortStoriesCommon = function (r, t, n) {
    if (t) {
      var o;
      typeof t == 'function' ? (o = t) : (o = storySort(t)),
        stable.inplace(r, o);
    } else
      stable.inplace(r, function (a, s) {
        return n.indexOf(a.importPath) - n.indexOf(s.importPath);
      });
    return r;
  },
  toIndexEntry = function (r) {
    var t = r.id,
      n = r.title,
      o = r.name,
      a = r.parameters;
    return { id: t, title: n, name: o, importPath: a.fileName };
  },
  sortStoriesV6 = function (r, t, n) {
    if (t && typeof t == 'function')
      return (
        stable.inplace(r, t),
        r.map(function (a) {
          return toIndexEntry(a[1]);
        })
      );
    var o = r.map(function (a) {
      return toIndexEntry(a[1]);
    });
    return sortStoriesCommon(o, t, n);
  };
function asyncGeneratorStep$3(e, r, t, n, o, a, s) {
  try {
    var i = e[a](s),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$3(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(r, t);
      function s(c) {
        asyncGeneratorStep$3(a, n, o, s, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$3(a, n, o, s, i, 'throw', c);
      }
      s(void 0);
    });
  };
}
function _classCallCheck$a(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$a(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$a(e, r, t) {
  return (
    r && _defineProperties$a(e.prototype, r),
    t && _defineProperties$a(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var AbortController = window_1.AbortController;
function createController() {
  return AbortController
    ? new AbortController()
    : {
        signal: { aborted: !1 },
        abort: function () {
          this.signal.aborted = !0;
        }
      };
}
var PREPARE_ABORTED = new Error('prepareAborted'),
  StoryRender = (function () {
    function e(r, t, n, o, a, s, i) {
      _classCallCheck$a(this, e),
        (this.channel = r),
        (this.store = t),
        (this.renderToScreen = n),
        (this.callbacks = o),
        (this.id = a),
        (this.viewMode = s),
        (this.story = void 0),
        (this.phase = void 0),
        (this.abortController = void 0),
        (this.canvasElement = void 0),
        (this.notYetRendered = !0),
        (this.disableKeyListeners = !1),
        (this.abortController = createController()),
        i && ((this.story = i), (this.phase = 'preparing'));
    }
    return (
      _createClass$a(e, [
        {
          key: 'runPhase',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n(o, a, s) {
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          if (
                            ((this.phase = a),
                            this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                              newPhase: this.phase,
                              storyId: this.id
                            }),
                            !s)
                          ) {
                            c.next = 5;
                            break;
                          }
                          return (c.next = 5), s();
                        case 5:
                          o.aborted &&
                            ((this.phase = 'aborted'),
                            this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                              newPhase: this.phase,
                              storyId: this.id
                            }));
                        case 6:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n, o, a) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'prepare',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                var o = this;
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (s.next = 2),
                            this.runPhase(
                              this.abortController.signal,
                              'preparing',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function i() {
                                  return regeneratorRuntime.wrap(function (l) {
                                    for (;;)
                                      switch ((l.prev = l.next)) {
                                        case 0:
                                          return (
                                            (l.next = 2),
                                            o.store.loadStory({ storyId: o.id })
                                          );
                                        case 2:
                                          o.story = l.sent;
                                        case 3:
                                        case 'end':
                                          return l.stop();
                                      }
                                  }, i);
                                })
                              )
                            )
                          );
                        case 2:
                          if (!this.abortController.signal.aborted) {
                            s.next = 5;
                            break;
                          }
                          throw (
                            (this.store.cleanupStory(this.story),
                            PREPARE_ABORTED)
                          );
                        case 5:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'isEqual',
          value: function (t) {
            return (
              t && this.id === t.id && this.story && this.story === t.story
            );
          }
        },
        {
          key: 'isPreparing',
          value: function () {
            return ['preparing'].includes(this.phase);
          }
        },
        {
          key: 'isPending',
          value: function () {
            return ['rendering', 'playing'].includes(this.phase);
          }
        },
        {
          key: 'context',
          value: function () {
            return this.store.getStoryContext(this.story);
          }
        },
        {
          key: 'renderToElement',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n(o) {
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (
                            (this.canvasElement = o),
                            s.abrupt(
                              'return',
                              this.render({ initial: !0, forceRemount: !0 })
                            )
                          );
                        case 2:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'render',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                var o = this,
                  a,
                  s,
                  i,
                  c,
                  l,
                  u,
                  y,
                  d,
                  g,
                  h,
                  b,
                  w,
                  S,
                  T,
                  v,
                  _,
                  A,
                  P = arguments;
                return regeneratorRuntime.wrap(
                  function (R) {
                    for (;;)
                      switch ((R.prev = R.next)) {
                        case 0:
                          if (
                            ((a = P.length > 0 && P[0] !== void 0 ? P[0] : {}),
                            (s = a.initial),
                            (i = s === void 0 ? !1 : s),
                            (c = a.forceRemount),
                            (l = c === void 0 ? !1 : c),
                            this.story)
                          ) {
                            R.next = 3;
                            break;
                          }
                          throw new Error('cannot render when not prepared');
                        case 3:
                          return (
                            (u = this.story),
                            (y = u.id),
                            (d = u.componentId),
                            (g = u.title),
                            (h = u.name),
                            (b = u.applyLoaders),
                            (w = u.unboundStoryFn),
                            (S = u.playFunction),
                            l &&
                              !i &&
                              (this.cancelRender(),
                              (this.abortController = createController())),
                            (T = this.abortController.signal),
                            (R.prev = 6),
                            (R.next = 9),
                            this.runPhase(
                              T,
                              'loading',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function k() {
                                  return regeneratorRuntime.wrap(function (I) {
                                    for (;;)
                                      switch ((I.prev = I.next)) {
                                        case 0:
                                          return (
                                            (I.next = 2),
                                            b(
                                              Object.assign({}, o.context(), {
                                                viewMode: o.viewMode
                                              })
                                            )
                                          );
                                        case 2:
                                          v = I.sent;
                                        case 3:
                                        case 'end':
                                          return I.stop();
                                      }
                                  }, k);
                                })
                              )
                            )
                          );
                        case 9:
                          if (!T.aborted) {
                            R.next = 11;
                            break;
                          }
                          return R.abrupt('return');
                        case 11:
                          return (
                            (_ = Object.assign({}, v, this.context(), {
                              abortSignal: T,
                              canvasElement: this.canvasElement
                            })),
                            (A = Object.assign(
                              {
                                componentId: d,
                                title: g,
                                kind: g,
                                id: y,
                                name: h,
                                story: h
                              },
                              this.callbacks,
                              {
                                forceRemount: l || this.notYetRendered,
                                storyContext: _,
                                storyFn: function () {
                                  return w(_);
                                },
                                unboundStoryFn: w
                              }
                            )),
                            (R.next = 15),
                            this.runPhase(
                              T,
                              'rendering',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function k() {
                                  return regeneratorRuntime.wrap(function (I) {
                                    for (;;)
                                      switch ((I.prev = I.next)) {
                                        case 0:
                                          return I.abrupt(
                                            'return',
                                            o.renderToScreen(A, o.canvasElement)
                                          );
                                        case 1:
                                        case 'end':
                                          return I.stop();
                                      }
                                  }, k);
                                })
                              )
                            )
                          );
                        case 15:
                          if (((this.notYetRendered = !1), !T.aborted)) {
                            R.next = 18;
                            break;
                          }
                          return R.abrupt('return');
                        case 18:
                          if (!(l && S)) {
                            R.next = 27;
                            break;
                          }
                          return (
                            (this.disableKeyListeners = !0),
                            (R.next = 22),
                            this.runPhase(
                              T,
                              'playing',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function k() {
                                  return regeneratorRuntime.wrap(function (I) {
                                    for (;;)
                                      switch ((I.prev = I.next)) {
                                        case 0:
                                          return I.abrupt(
                                            'return',
                                            S(A.storyContext)
                                          );
                                        case 1:
                                        case 'end':
                                          return I.stop();
                                      }
                                  }, k);
                                })
                              )
                            )
                          );
                        case 22:
                          return (R.next = 24), this.runPhase(T, 'played');
                        case 24:
                          if (((this.disableKeyListeners = !1), !T.aborted)) {
                            R.next = 27;
                            break;
                          }
                          return R.abrupt('return');
                        case 27:
                          return (
                            (R.next = 29),
                            this.runPhase(
                              T,
                              'completed',
                              _asyncToGenerator$3(
                                regeneratorRuntime.mark(function k() {
                                  return regeneratorRuntime.wrap(function (I) {
                                    for (;;)
                                      switch ((I.prev = I.next)) {
                                        case 0:
                                          return I.abrupt(
                                            'return',
                                            o.channel.emit(STORY_RENDERED, y)
                                          );
                                        case 1:
                                        case 'end':
                                          return I.stop();
                                      }
                                  }, k);
                                })
                              )
                            )
                          );
                        case 29:
                          R.next = 34;
                          break;
                        case 31:
                          (R.prev = 31),
                            (R.t0 = R.catch(6)),
                            this.callbacks.showException(R.t0);
                        case 34:
                        case 'end':
                          return R.stop();
                      }
                  },
                  n,
                  this,
                  [[6, 31]]
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'rerender',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return a.abrupt('return', this.render());
                        case 1:
                        case 'end':
                          return a.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'remount',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return a.abrupt(
                            'return',
                            this.render({ forceRemount: !0 })
                          );
                        case 1:
                        case 'end':
                          return a.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'cancelRender',
          value: function () {
            this.abortController.abort();
          }
        },
        {
          key: 'teardown',
          value: (function () {
            var r = _asyncToGenerator$3(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          this.cancelRender(),
                            this.story && this.store.cleanupStory(this.story),
                            (o = 0);
                        case 4:
                          if (!(o < 3)) {
                            s.next = 12;
                            break;
                          }
                          if (this.isPending()) {
                            s.next = 7;
                            break;
                          }
                          return s.abrupt('return');
                        case 7:
                          return (
                            (s.next = 9),
                            new Promise(function (i) {
                              return setTimeout(i, 0);
                            })
                          );
                        case 9:
                          (o += 1), (s.next = 4);
                          break;
                        case 12:
                          return (
                            window_1.window.location.reload(),
                            (s.next = 15),
                            new Promise(function () {})
                          );
                        case 15:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        }
      ]),
      e
    );
  })();
StoryRender.displayName = 'StoryRender';
var _templateObject$5, _templateObject2$1;
function _toConsumableArray$1(e) {
  return (
    _arrayWithoutHoles$1(e) ||
    _iterableToArray$1(e) ||
    _unsupportedIterableToArray$7(e) ||
    _nonIterableSpread$1()
  );
}
function _nonIterableSpread$1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$7(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$7(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$7(e, r);
  }
}
function _iterableToArray$1(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles$1(e) {
  if (Array.isArray(e)) return _arrayLikeToArray$7(e);
}
function _arrayLikeToArray$7(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function asyncGeneratorStep$2(e, r, t, n, o, a, s) {
  try {
    var i = e[a](s),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$2(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(r, t);
      function s(c) {
        asyncGeneratorStep$2(a, n, o, s, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$2(a, n, o, s, i, 'throw', c);
      }
      s(void 0);
    });
  };
}
function _taggedTemplateLiteral$5(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _classCallCheck$9(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$9(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$9(e, r, t) {
  return (
    r && _defineProperties$9(e.prototype, r),
    t && _defineProperties$9(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var fetch$1 = window_1.fetch,
  STORY_INDEX_PATH = './stories.json',
  Preview = (function () {
    function e() {
      var r;
      _classCallCheck$9(this, e),
        (this.channel = void 0),
        (this.serverChannel = void 0),
        (this.storyStore = void 0),
        (this.getStoryIndex = void 0),
        (this.importFn = void 0),
        (this.renderToDOM = void 0),
        (this.storyRenders = []),
        (this.previewEntryError = void 0),
        (this.channel = addons.getChannel()),
        (r = window_1.FEATURES) !== null &&
          r !== void 0 &&
          r.storyStoreV7 &&
          addons.hasServerChannel() &&
          (this.serverChannel = addons.getServerChannel()),
        (this.storyStore = new StoryStore());
    }
    return (
      _createClass$9(e, [
        {
          key: 'initialize',
          value: function (t) {
            var n = this,
              o = t.getStoryIndex,
              a = t.importFn,
              s = t.getProjectAnnotations;
            return (
              (this.getStoryIndex = o),
              (this.importFn = a),
              this.setupListeners(),
              this.getProjectAnnotationsOrRenderError(s).then(function (i) {
                return n.initializeWithProjectAnnotations(i);
              })
            );
          }
        },
        {
          key: 'setupListeners',
          value: function () {
            var t;
            (t = this.serverChannel) === null ||
              t === void 0 ||
              t.on(
                STORY_INDEX_INVALIDATED,
                this.onStoryIndexChanged.bind(this)
              ),
              this.channel.on(UPDATE_GLOBALS, this.onUpdateGlobals.bind(this)),
              this.channel.on(UPDATE_STORY_ARGS, this.onUpdateArgs.bind(this)),
              this.channel.on(RESET_STORY_ARGS, this.onResetArgs.bind(this)),
              this.channel.on(FORCE_RE_RENDER, this.onForceReRender.bind(this)),
              this.channel.on(FORCE_REMOUNT, this.onForceRemount.bind(this));
          }
        },
        {
          key: 'getProjectAnnotationsOrRenderError',
          value: function (t) {
            var n = this;
            return synchronousPromise.SynchronousPromise.resolve()
              .then(t)
              .then(function (o) {
                if (((n.renderToDOM = o.renderToDOM), !n.renderToDOM))
                  throw new Error(
                    dedent(
                      _templateObject$5 ||
                        (_templateObject$5 = _taggedTemplateLiteral$5(
                          [
                            `
            Expected your framework's preset to export a \`renderToDOM\` field.

            Perhaps it needs to be upgraded for Storybook 6.4?

            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field          
          `
                          ],
                          [
                            `
            Expected your framework's preset to export a \\\`renderToDOM\\\` field.

            Perhaps it needs to be upgraded for Storybook 6.4?

            More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field          
          `
                          ]
                        ))
                    )
                  );
                return o;
              })
              .catch(function (o) {
                throw (
                  (n.renderPreviewEntryError('Error reading preview.js:', o), o)
                );
              });
          }
        },
        {
          key: 'initializeWithProjectAnnotations',
          value: function (t) {
            var n,
              o = this;
            this.storyStore.setProjectAnnotations(t), this.setInitialGlobals();
            var a;
            if (
              (n = window_1.FEATURES) !== null &&
              n !== void 0 &&
              n.storyStoreV7
            )
              a = this.getStoryIndexFromServer();
            else {
              if (!this.getStoryIndex)
                throw new Error('No `getStoryIndex` passed defined in v6 mode');
              a = synchronousPromise.SynchronousPromise.resolve().then(
                this.getStoryIndex
              );
            }
            return a
              .then(function (s) {
                return o.initializeWithStoryIndex(s);
              })
              .catch(function (s) {
                throw (
                  (o.renderPreviewEntryError('Error loading story index:', s),
                  s)
                );
              });
          }
        },
        {
          key: 'setInitialGlobals',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          this.emitGlobals();
                        case 1:
                        case 'end':
                          return a.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'emitGlobals',
          value: function () {
            this.channel.emit(SET_GLOBALS, {
              globals: this.storyStore.globals.get() || {},
              globalTypes: this.storyStore.projectAnnotations.globalTypes || {}
            });
          }
        },
        {
          key: 'getStoryIndexFromServer',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(function (s) {
                  for (;;)
                    switch ((s.prev = s.next)) {
                      case 0:
                        return (s.next = 2), fetch$1(STORY_INDEX_PATH);
                      case 2:
                        if (((o = s.sent), o.status !== 200)) {
                          s.next = 5;
                          break;
                        }
                        return s.abrupt('return', o.json());
                      case 5:
                        return (s.t0 = Error), (s.next = 8), o.text();
                      case 8:
                        throw ((s.t1 = s.sent), new s.t0(s.t1));
                      case 10:
                      case 'end':
                        return s.stop();
                    }
                }, n);
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'initializeWithStoryIndex',
          value: function (t) {
            var n;
            return this.storyStore.initialize({
              storyIndex: t,
              importFn: this.importFn,
              cache: !(
                (n = window_1.FEATURES) !== null &&
                n !== void 0 &&
                n.storyStoreV7
              )
            });
          }
        },
        {
          key: 'onGetProjectAnnotationsChanged',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var a, s;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (a = o.getProjectAnnotations),
                            delete this.previewEntryError,
                            (c.next = 4),
                            this.getProjectAnnotationsOrRenderError(a)
                          );
                        case 4:
                          if (
                            ((s = c.sent), this.storyStore.projectAnnotations)
                          ) {
                            c.next = 9;
                            break;
                          }
                          return (
                            (c.next = 8),
                            this.initializeWithProjectAnnotations(s)
                          );
                        case 8:
                          return c.abrupt('return');
                        case 9:
                          return (
                            (c.next = 11),
                            this.storyStore.setProjectAnnotations(s)
                          );
                        case 11:
                          this.emitGlobals();
                        case 12:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'onStoryIndexChanged',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          if (
                            (delete this.previewEntryError,
                            this.storyStore.projectAnnotations)
                          ) {
                            s.next = 3;
                            break;
                          }
                          return s.abrupt('return');
                        case 3:
                          return (
                            (s.prev = 3),
                            (s.next = 6),
                            this.getStoryIndexFromServer()
                          );
                        case 6:
                          if (((o = s.sent), this.storyStore.storyIndex)) {
                            s.next = 10;
                            break;
                          }
                          return (
                            (s.next = 10), this.initializeWithStoryIndex(o)
                          );
                        case 10:
                          return (
                            (s.next = 12),
                            this.onStoriesChanged({ storyIndex: o })
                          );
                        case 12:
                          s.next = 18;
                          break;
                        case 14:
                          throw (
                            ((s.prev = 14),
                            (s.t0 = s.catch(3)),
                            this.renderPreviewEntryError(
                              'Error loading story index:',
                              s.t0
                            ),
                            s.t0)
                          );
                        case 18:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this,
                  [[3, 14]]
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'onStoriesChanged',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var a, s;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (a = o.importFn),
                            (s = o.storyIndex),
                            (c.next = 3),
                            this.storyStore.onStoriesChanged({
                              importFn: a,
                              storyIndex: s
                            })
                          );
                        case 3:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'onUpdateGlobals',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var a;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (a = o.globals),
                            this.storyStore.globals.update(a),
                            (i.next = 4),
                            Promise.all(
                              this.storyRenders.map(function (c) {
                                return c.rerender();
                              })
                            )
                          );
                        case 4:
                          this.channel.emit(GLOBALS_UPDATED, {
                            globals: this.storyStore.globals.get(),
                            initialGlobals:
                              this.storyStore.globals.initialGlobals
                          });
                        case 5:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'onUpdateArgs',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var a, s;
                return regeneratorRuntime.wrap(
                  function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (
                            (a = o.storyId),
                            (s = o.updatedArgs),
                            this.storyStore.args.update(a, s),
                            (c.next = 4),
                            Promise.all(
                              this.storyRenders
                                .filter(function (l) {
                                  return l.id === a;
                                })
                                .map(function (l) {
                                  return l.rerender();
                                })
                            )
                          );
                        case 4:
                          this.channel.emit(STORY_ARGS_UPDATED, {
                            storyId: a,
                            args: this.storyStore.args.get(a)
                          });
                        case 5:
                        case 'end':
                          return c.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'onResetArgs',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var a, s, i, c, l, u;
                return regeneratorRuntime.wrap(
                  function (d) {
                    for (;;)
                      switch ((d.prev = d.next)) {
                        case 0:
                          if (
                            ((a = o.storyId),
                            (s = o.argNames),
                            (i = this.storyRenders.find(function (g) {
                              return g.id === a;
                            })),
                            (d.t0 = i == null ? void 0 : i.story),
                            d.t0)
                          ) {
                            d.next = 7;
                            break;
                          }
                          return (
                            (d.next = 6),
                            this.storyStore.loadStory({ storyId: a })
                          );
                        case 6:
                          d.t0 = d.sent;
                        case 7:
                          return (
                            (c = d.t0),
                            (l =
                              s ||
                              _toConsumableArray$1(
                                new Set(
                                  [].concat(
                                    _toConsumableArray$1(
                                      Object.keys(c.initialArgs)
                                    ),
                                    _toConsumableArray$1(
                                      Object.keys(this.storyStore.args.get(a))
                                    )
                                  )
                                )
                              )),
                            (u = l.reduce(function (g, h) {
                              return (g[h] = c.initialArgs[h]), g;
                            }, {})),
                            (d.next = 12),
                            this.onUpdateArgs({ storyId: a, updatedArgs: u })
                          );
                        case 12:
                        case 'end':
                          return d.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'onForceReRender',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n() {
                return regeneratorRuntime.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.next = 2),
                            Promise.all(
                              this.storyRenders.map(function (s) {
                                return s.rerender();
                              })
                            )
                          );
                        case 2:
                        case 'end':
                          return a.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'onForceRemount',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var a;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          return (
                            (a = o.storyId),
                            (i.next = 3),
                            Promise.all(
                              this.storyRenders
                                .filter(function (c) {
                                  return c.id === a;
                                })
                                .map(function (c) {
                                  return c.remount();
                                })
                            )
                          );
                        case 3:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'renderStoryToElement',
          value: function (t, n) {
            var o = this,
              a = new StoryRender(
                this.channel,
                this.storyStore,
                this.renderToDOM,
                this.inlineStoryCallbacks(t.id),
                t.id,
                'docs',
                t
              );
            return (
              a.renderToElement(n),
              this.storyRenders.push(a),
              _asyncToGenerator$2(
                regeneratorRuntime.mark(function s() {
                  return regeneratorRuntime.wrap(function (c) {
                    for (;;)
                      switch ((c.prev = c.next)) {
                        case 0:
                          return (c.next = 2), o.teardownRender(a);
                        case 2:
                        case 'end':
                          return c.stop();
                      }
                  }, s);
                })
              )
            );
          }
        },
        {
          key: 'teardownRender',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var a,
                  s,
                  i = arguments;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          return (
                            (a = i.length > 1 && i[1] !== void 0 ? i[1] : {}),
                            (s = a.viewModeChanged),
                            (this.storyRenders = this.storyRenders.filter(
                              function (u) {
                                return u !== o;
                              }
                            )),
                            (l.next = 4),
                            o == null
                              ? void 0
                              : o.teardown({ viewModeChanged: s })
                          );
                        case 4:
                        case 'end':
                          return l.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'extract',
          value: (function () {
            var r = _asyncToGenerator$2(
              regeneratorRuntime.mark(function n(o) {
                var a;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          if (!this.previewEntryError) {
                            i.next = 2;
                            break;
                          }
                          throw this.previewEntryError;
                        case 2:
                          if (this.storyStore.projectAnnotations) {
                            i.next = 4;
                            break;
                          }
                          throw new Error(
                            dedent(
                              _templateObject2$1 ||
                                (_templateObject2$1 = _taggedTemplateLiteral$5(
                                  [
                                    "Failed to initialize Storybook.\n      \n      Do you have an error in your `preview.js`? Check your Storybook's browser console for errors."
                                  ],
                                  [
                                    "Failed to initialize Storybook.\n      \n      Do you have an error in your \\`preview.js\\`? Check your Storybook's browser console for errors."
                                  ]
                                ))
                            )
                          );
                        case 4:
                          if (
                            !(
                              (a = window_1.FEATURES) !== null &&
                              a !== void 0 &&
                              a.storyStoreV7
                            )
                          ) {
                            i.next = 7;
                            break;
                          }
                          return (
                            (i.next = 7), this.storyStore.cacheAllCSFFiles()
                          );
                        case 7:
                          return i.abrupt('return', this.storyStore.extract(o));
                        case 8:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'inlineStoryCallbacks',
          value: function (t) {
            return {
              showMain: function () {},
              showError: function (o) {
                return logger.error(
                  'Error rendering docs story ('.concat(t, ')'),
                  o
                );
              },
              showException: function (o) {
                return logger.error(
                  'Error rendering docs story ('.concat(t, ')'),
                  o
                );
              }
            };
          }
        },
        {
          key: 'renderPreviewEntryError',
          value: function (t, n) {
            (this.previewEntryError = n),
              logger.error(t),
              logger.error(n),
              this.channel.emit(CONFIG_ERROR, n);
          }
        }
      ]),
      e
    );
  })(),
  shams$1 = function () {
    if (
      typeof Symbol != 'function' ||
      typeof Object.getOwnPropertySymbols != 'function'
    )
      return !1;
    if (typeof Symbol.iterator == 'symbol') return !0;
    var r = {},
      t = Symbol('test'),
      n = Object(t);
    if (
      typeof t == 'string' ||
      Object.prototype.toString.call(t) !== '[object Symbol]' ||
      Object.prototype.toString.call(n) !== '[object Symbol]'
    )
      return !1;
    var o = 42;
    r[t] = o;
    for (t in r) return !1;
    if (
      (typeof Object.keys == 'function' && Object.keys(r).length !== 0) ||
      (typeof Object.getOwnPropertyNames == 'function' &&
        Object.getOwnPropertyNames(r).length !== 0)
    )
      return !1;
    var a = Object.getOwnPropertySymbols(r);
    if (
      a.length !== 1 ||
      a[0] !== t ||
      !Object.prototype.propertyIsEnumerable.call(r, t)
    )
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == 'function') {
      var s = Object.getOwnPropertyDescriptor(r, t);
      if (s.value !== o || s.enumerable !== !0) return !1;
    }
    return !0;
  },
  origSymbol = typeof Symbol != 'undefined' && Symbol,
  hasSymbolSham = shams$1,
  hasSymbols$3 = function () {
    return typeof origSymbol != 'function' ||
      typeof Symbol != 'function' ||
      typeof origSymbol('foo') != 'symbol' ||
      typeof Symbol('bar') != 'symbol'
      ? !1
      : hasSymbolSham();
  },
  ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ',
  slice = Array.prototype.slice,
  toStr$2 = Object.prototype.toString,
  funcType = '[object Function]',
  implementation$1 = function (r) {
    var t = this;
    if (typeof t != 'function' || toStr$2.call(t) !== funcType)
      throw new TypeError(ERROR_MESSAGE + t);
    for (
      var n = slice.call(arguments, 1),
        o,
        a = function () {
          if (this instanceof o) {
            var u = t.apply(this, n.concat(slice.call(arguments)));
            return Object(u) === u ? u : this;
          } else return t.apply(r, n.concat(slice.call(arguments)));
        },
        s = Math.max(0, t.length - n.length),
        i = [],
        c = 0;
      c < s;
      c++
    )
      i.push('$' + c);
    if (
      ((o = Function(
        'binder',
        'return function (' +
          i.join(',') +
          '){ return binder.apply(this,arguments); }'
      )(a)),
      t.prototype)
    ) {
      var l = function () {};
      (l.prototype = t.prototype),
        (o.prototype = new l()),
        (l.prototype = null);
    }
    return o;
  },
  implementation = implementation$1,
  functionBind = Function.prototype.bind || implementation,
  bind$1 = functionBind,
  src = bind$1.call(Function.call, Object.prototype.hasOwnProperty),
  undefined$1,
  $SyntaxError = SyntaxError,
  $Function = Function,
  $TypeError$1 = TypeError,
  getEvalledConstructor = function (e) {
    try {
      return $Function('"use strict"; return (' + e + ').constructor;')();
    } catch {}
  },
  $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD)
  try {
    $gOPD({}, '');
  } catch {
    $gOPD = null;
  }
var throwTypeError = function () {
    throw new $TypeError$1();
  },
  ThrowTypeError = $gOPD
    ? (function () {
        try {
          return arguments.callee, throwTypeError;
        } catch {
          try {
            return $gOPD(arguments, 'callee').get;
          } catch {
            return throwTypeError;
          }
        }
      })()
    : throwTypeError,
  hasSymbols$2 = hasSymbols$3(),
  getProto =
    Object.getPrototypeOf ||
    function (e) {
      return e.__proto__;
    },
  needsEval = {},
  TypedArray =
    typeof Uint8Array == 'undefined' ? undefined$1 : getProto(Uint8Array),
  INTRINSICS = {
    '%AggregateError%':
      typeof AggregateError == 'undefined' ? undefined$1 : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%':
      typeof ArrayBuffer == 'undefined' ? undefined$1 : ArrayBuffer,
    '%ArrayIteratorPrototype%': hasSymbols$2
      ? getProto([][Symbol.iterator]())
      : undefined$1,
    '%AsyncFromSyncIteratorPrototype%': undefined$1,
    '%AsyncFunction%': needsEval,
    '%AsyncGenerator%': needsEval,
    '%AsyncGeneratorFunction%': needsEval,
    '%AsyncIteratorPrototype%': needsEval,
    '%Atomics%': typeof Atomics == 'undefined' ? undefined$1 : Atomics,
    '%BigInt%': typeof BigInt == 'undefined' ? undefined$1 : BigInt,
    '%Boolean%': Boolean,
    '%DataView%': typeof DataView == 'undefined' ? undefined$1 : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%':
      typeof Float32Array == 'undefined' ? undefined$1 : Float32Array,
    '%Float64Array%':
      typeof Float64Array == 'undefined' ? undefined$1 : Float64Array,
    '%FinalizationRegistry%':
      typeof FinalizationRegistry == 'undefined'
        ? undefined$1
        : FinalizationRegistry,
    '%Function%': $Function,
    '%GeneratorFunction%': needsEval,
    '%Int8Array%': typeof Int8Array == 'undefined' ? undefined$1 : Int8Array,
    '%Int16Array%': typeof Int16Array == 'undefined' ? undefined$1 : Int16Array,
    '%Int32Array%': typeof Int32Array == 'undefined' ? undefined$1 : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': hasSymbols$2
      ? getProto(getProto([][Symbol.iterator]()))
      : undefined$1,
    '%JSON%': typeof JSON == 'object' ? JSON : undefined$1,
    '%Map%': typeof Map == 'undefined' ? undefined$1 : Map,
    '%MapIteratorPrototype%':
      typeof Map == 'undefined' || !hasSymbols$2
        ? undefined$1
        : getProto(new Map()[Symbol.iterator]()),
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': typeof Promise == 'undefined' ? undefined$1 : Promise,
    '%Proxy%': typeof Proxy == 'undefined' ? undefined$1 : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': typeof Reflect == 'undefined' ? undefined$1 : Reflect,
    '%RegExp%': RegExp,
    '%Set%': typeof Set == 'undefined' ? undefined$1 : Set,
    '%SetIteratorPrototype%':
      typeof Set == 'undefined' || !hasSymbols$2
        ? undefined$1
        : getProto(new Set()[Symbol.iterator]()),
    '%SharedArrayBuffer%':
      typeof SharedArrayBuffer == 'undefined' ? undefined$1 : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': hasSymbols$2
      ? getProto(''[Symbol.iterator]())
      : undefined$1,
    '%Symbol%': hasSymbols$2 ? Symbol : undefined$1,
    '%SyntaxError%': $SyntaxError,
    '%ThrowTypeError%': ThrowTypeError,
    '%TypedArray%': TypedArray,
    '%TypeError%': $TypeError$1,
    '%Uint8Array%': typeof Uint8Array == 'undefined' ? undefined$1 : Uint8Array,
    '%Uint8ClampedArray%':
      typeof Uint8ClampedArray == 'undefined' ? undefined$1 : Uint8ClampedArray,
    '%Uint16Array%':
      typeof Uint16Array == 'undefined' ? undefined$1 : Uint16Array,
    '%Uint32Array%':
      typeof Uint32Array == 'undefined' ? undefined$1 : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': typeof WeakMap == 'undefined' ? undefined$1 : WeakMap,
    '%WeakRef%': typeof WeakRef == 'undefined' ? undefined$1 : WeakRef,
    '%WeakSet%': typeof WeakSet == 'undefined' ? undefined$1 : WeakSet
  },
  doEval = function e(r) {
    var t;
    if (r === '%AsyncFunction%')
      t = getEvalledConstructor('async function () {}');
    else if (r === '%GeneratorFunction%')
      t = getEvalledConstructor('function* () {}');
    else if (r === '%AsyncGeneratorFunction%')
      t = getEvalledConstructor('async function* () {}');
    else if (r === '%AsyncGenerator%') {
      var n = e('%AsyncGeneratorFunction%');
      n && (t = n.prototype);
    } else if (r === '%AsyncIteratorPrototype%') {
      var o = e('%AsyncGenerator%');
      o && (t = getProto(o.prototype));
    }
    return (INTRINSICS[r] = t), t;
  },
  LEGACY_ALIASES = {
    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
    '%ArrayPrototype%': ['Array', 'prototype'],
    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
    '%AsyncGeneratorPrototype%': [
      'AsyncGeneratorFunction',
      'prototype',
      'prototype'
    ],
    '%BooleanPrototype%': ['Boolean', 'prototype'],
    '%DataViewPrototype%': ['DataView', 'prototype'],
    '%DatePrototype%': ['Date', 'prototype'],
    '%ErrorPrototype%': ['Error', 'prototype'],
    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
    '%FunctionPrototype%': ['Function', 'prototype'],
    '%Generator%': ['GeneratorFunction', 'prototype'],
    '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
    '%JSONParse%': ['JSON', 'parse'],
    '%JSONStringify%': ['JSON', 'stringify'],
    '%MapPrototype%': ['Map', 'prototype'],
    '%NumberPrototype%': ['Number', 'prototype'],
    '%ObjectPrototype%': ['Object', 'prototype'],
    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
    '%PromisePrototype%': ['Promise', 'prototype'],
    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
    '%Promise_all%': ['Promise', 'all'],
    '%Promise_reject%': ['Promise', 'reject'],
    '%Promise_resolve%': ['Promise', 'resolve'],
    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
    '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
    '%RegExpPrototype%': ['RegExp', 'prototype'],
    '%SetPrototype%': ['Set', 'prototype'],
    '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
    '%StringPrototype%': ['String', 'prototype'],
    '%SymbolPrototype%': ['Symbol', 'prototype'],
    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
    '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
    '%URIErrorPrototype%': ['URIError', 'prototype'],
    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
    '%WeakSetPrototype%': ['WeakSet', 'prototype']
  },
  bind = functionBind,
  hasOwn$1 = src,
  $concat$1 = bind.call(Function.call, Array.prototype.concat),
  $spliceApply = bind.call(Function.apply, Array.prototype.splice),
  $replace$1 = bind.call(Function.call, String.prototype.replace),
  $strSlice = bind.call(Function.call, String.prototype.slice),
  $exec$1 = bind.call(Function.call, RegExp.prototype.exec),
  rePropName =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  reEscapeChar = /\\(\\)?/g,
  stringToPath = function (r) {
    var t = $strSlice(r, 0, 1),
      n = $strSlice(r, -1);
    if (t === '%' && n !== '%')
      throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
    if (n === '%' && t !== '%')
      throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
    var o = [];
    return (
      $replace$1(r, rePropName, function (a, s, i, c) {
        o[o.length] = i ? $replace$1(c, reEscapeChar, '$1') : s || a;
      }),
      o
    );
  },
  getBaseIntrinsic = function (r, t) {
    var n = r,
      o;
    if (
      (hasOwn$1(LEGACY_ALIASES, n) &&
        ((o = LEGACY_ALIASES[n]), (n = '%' + o[0] + '%')),
      hasOwn$1(INTRINSICS, n))
    ) {
      var a = INTRINSICS[n];
      if ((a === needsEval && (a = doEval(n)), typeof a == 'undefined' && !t))
        throw new $TypeError$1(
          'intrinsic ' +
            r +
            ' exists, but is not available. Please file an issue!'
        );
      return { alias: o, name: n, value: a };
    }
    throw new $SyntaxError('intrinsic ' + r + ' does not exist!');
  },
  getIntrinsic = function (r, t) {
    if (typeof r != 'string' || r.length === 0)
      throw new $TypeError$1('intrinsic name must be a non-empty string');
    if (arguments.length > 1 && typeof t != 'boolean')
      throw new $TypeError$1('"allowMissing" argument must be a boolean');
    if ($exec$1(/^%?[^%]*%?$/g, r) === null)
      throw new $SyntaxError(
        '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
      );
    var n = stringToPath(r),
      o = n.length > 0 ? n[0] : '',
      a = getBaseIntrinsic('%' + o + '%', t),
      s = a.name,
      i = a.value,
      c = !1,
      l = a.alias;
    l && ((o = l[0]), $spliceApply(n, $concat$1([0, 1], l)));
    for (var u = 1, y = !0; u < n.length; u += 1) {
      var d = n[u],
        g = $strSlice(d, 0, 1),
        h = $strSlice(d, -1);
      if (
        (g === '"' ||
          g === "'" ||
          g === '`' ||
          h === '"' ||
          h === "'" ||
          h === '`') &&
        g !== h
      )
        throw new $SyntaxError(
          'property names with quotes must have matching quotes'
        );
      if (
        ((d === 'constructor' || !y) && (c = !0),
        (o += '.' + d),
        (s = '%' + o + '%'),
        hasOwn$1(INTRINSICS, s))
      )
        i = INTRINSICS[s];
      else if (i != null) {
        if (!(d in i)) {
          if (!t)
            throw new $TypeError$1(
              'base intrinsic for ' +
                r +
                ' exists, but the property is not available.'
            );
          return;
        }
        if ($gOPD && u + 1 >= n.length) {
          var b = $gOPD(i, d);
          (y = !!b),
            y && 'get' in b && !('originalValue' in b.get)
              ? (i = b.get)
              : (i = i[d]);
        } else (y = hasOwn$1(i, d)), (i = i[d]);
        y && !c && (INTRINSICS[s] = i);
      }
    }
    return i;
  },
  callBind$1 = { exports: {} };
(function (e) {
  var r = functionBind,
    t = getIntrinsic,
    n = t('%Function.prototype.apply%'),
    o = t('%Function.prototype.call%'),
    a = t('%Reflect.apply%', !0) || r.call(o, n),
    s = t('%Object.getOwnPropertyDescriptor%', !0),
    i = t('%Object.defineProperty%', !0),
    c = t('%Math.max%');
  if (i)
    try {
      i({}, 'a', { value: 1 });
    } catch {
      i = null;
    }
  e.exports = function (y) {
    var d = a(r, o, arguments);
    if (s && i) {
      var g = s(d, 'length');
      g.configurable &&
        i(d, 'length', { value: 1 + c(0, y.length - (arguments.length - 1)) });
    }
    return d;
  };
  var l = function () {
    return a(r, n, arguments);
  };
  i ? i(e.exports, 'apply', { value: l }) : (e.exports.apply = l);
})(callBind$1);
var GetIntrinsic$1 = getIntrinsic,
  callBind = callBind$1.exports,
  $indexOf = callBind(GetIntrinsic$1('String.prototype.indexOf')),
  callBound$2 = function (r, t) {
    var n = GetIntrinsic$1(r, !!t);
    return typeof n == 'function' && $indexOf(r, '.prototype.') > -1
      ? callBind(n)
      : n;
  },
  __viteBrowserExternal = {},
  __viteBrowserExternal$1 = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: __viteBrowserExternal },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  require$$0$2 = getAugmentedNamespace(__viteBrowserExternal$1),
  hasMap = typeof Map == 'function' && Map.prototype,
  mapSizeDescriptor =
    Object.getOwnPropertyDescriptor && hasMap
      ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
      : null,
  mapSize =
    hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get == 'function'
      ? mapSizeDescriptor.get
      : null,
  mapForEach = hasMap && Map.prototype.forEach,
  hasSet = typeof Set == 'function' && Set.prototype,
  setSizeDescriptor =
    Object.getOwnPropertyDescriptor && hasSet
      ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
      : null,
  setSize =
    hasSet && setSizeDescriptor && typeof setSizeDescriptor.get == 'function'
      ? setSizeDescriptor.get
      : null,
  setForEach = hasSet && Set.prototype.forEach,
  hasWeakMap = typeof WeakMap == 'function' && WeakMap.prototype,
  weakMapHas = hasWeakMap ? WeakMap.prototype.has : null,
  hasWeakSet = typeof WeakSet == 'function' && WeakSet.prototype,
  weakSetHas = hasWeakSet ? WeakSet.prototype.has : null,
  hasWeakRef = typeof WeakRef == 'function' && WeakRef.prototype,
  weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null,
  booleanValueOf = Boolean.prototype.valueOf,
  objectToString = Object.prototype.toString,
  functionToString = Function.prototype.toString,
  $match = String.prototype.match,
  $slice = String.prototype.slice,
  $replace = String.prototype.replace,
  $toUpperCase = String.prototype.toUpperCase,
  $toLowerCase = String.prototype.toLowerCase,
  $test = RegExp.prototype.test,
  $concat = Array.prototype.concat,
  $join = Array.prototype.join,
  $arrSlice = Array.prototype.slice,
  $floor = Math.floor,
  bigIntValueOf = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
  gOPS = Object.getOwnPropertySymbols,
  symToString =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? Symbol.prototype.toString
      : null,
  hasShammedSymbols =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
  toStringTag =
    typeof Symbol == 'function' &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')
      ? Symbol.toStringTag
      : null,
  isEnumerable = Object.prototype.propertyIsEnumerable,
  gPO =
    (typeof Reflect == 'function'
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__;
        }
      : null);
function addNumericSeparator(e, r) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e !== e ||
    (e && e > -1e3 && e < 1e3) ||
    $test.call(/e/, r)
  )
    return r;
  var t = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof e == 'number') {
    var n = e < 0 ? -$floor(-e) : $floor(e);
    if (n !== e) {
      var o = String(n),
        a = $slice.call(r, o.length + 1);
      return (
        $replace.call(o, t, '$&_') +
        '.' +
        $replace.call($replace.call(a, /([0-9]{3})/g, '$&_'), /_$/, '')
      );
    }
  }
  return $replace.call(r, t, '$&_');
}
var utilInspect = require$$0$2,
  inspectCustom = utilInspect.custom,
  inspectSymbol = isSymbol$2(inspectCustom) ? inspectCustom : null,
  objectInspect = function e(r, t, n, o) {
    var a = t || {};
    if (
      has$4(a, 'quoteStyle') &&
      a.quoteStyle !== 'single' &&
      a.quoteStyle !== 'double'
    )
      throw new TypeError('option "quoteStyle" must be "single" or "double"');
    if (
      has$4(a, 'maxStringLength') &&
      (typeof a.maxStringLength == 'number'
        ? a.maxStringLength < 0 && a.maxStringLength !== 1 / 0
        : a.maxStringLength !== null)
    )
      throw new TypeError(
        'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
      );
    var s = has$4(a, 'customInspect') ? a.customInspect : !0;
    if (typeof s != 'boolean' && s !== 'symbol')
      throw new TypeError(
        'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
      );
    if (
      has$4(a, 'indent') &&
      a.indent !== null &&
      a.indent !== '	' &&
      !(parseInt(a.indent, 10) === a.indent && a.indent > 0)
    )
      throw new TypeError(
        'option "indent" must be "\\t", an integer > 0, or `null`'
      );
    if (has$4(a, 'numericSeparator') && typeof a.numericSeparator != 'boolean')
      throw new TypeError(
        'option "numericSeparator", if provided, must be `true` or `false`'
      );
    var i = a.numericSeparator;
    if (typeof r == 'undefined') return 'undefined';
    if (r === null) return 'null';
    if (typeof r == 'boolean') return r ? 'true' : 'false';
    if (typeof r == 'string') return inspectString(r, a);
    if (typeof r == 'number') {
      if (r === 0) return 1 / 0 / r > 0 ? '0' : '-0';
      var c = String(r);
      return i ? addNumericSeparator(r, c) : c;
    }
    if (typeof r == 'bigint') {
      var l = String(r) + 'n';
      return i ? addNumericSeparator(r, l) : l;
    }
    var u = typeof a.depth == 'undefined' ? 5 : a.depth;
    if (
      (typeof n == 'undefined' && (n = 0),
      n >= u && u > 0 && typeof r == 'object')
    )
      return isArray$3(r) ? '[Array]' : '[Object]';
    var y = getIndent(a, n);
    if (typeof o == 'undefined') o = [];
    else if (indexOf(o, r) >= 0) return '[Circular]';
    function d(F, x, N) {
      if ((x && ((o = $arrSlice.call(o)), o.push(x)), N)) {
        var U = { depth: a.depth };
        return (
          has$4(a, 'quoteStyle') && (U.quoteStyle = a.quoteStyle),
          e(F, U, n + 1, o)
        );
      }
      return e(F, a, n + 1, o);
    }
    if (typeof r == 'function' && !isRegExp$1(r)) {
      var g = nameOf(r),
        h = arrObjKeys(r, d);
      return (
        '[Function' +
        (g ? ': ' + g : ' (anonymous)') +
        ']' +
        (h.length > 0 ? ' { ' + $join.call(h, ', ') + ' }' : '')
      );
    }
    if (isSymbol$2(r)) {
      var b = hasShammedSymbols
        ? $replace.call(String(r), /^(Symbol\(.*\))_[^)]*$/, '$1')
        : symToString.call(r);
      return typeof r == 'object' && !hasShammedSymbols ? markBoxed(b) : b;
    }
    if (isElement(r)) {
      for (
        var w = '<' + $toLowerCase.call(String(r.nodeName)),
          S = r.attributes || [],
          T = 0;
        T < S.length;
        T++
      )
        w += ' ' + S[T].name + '=' + wrapQuotes(quote(S[T].value), 'double', a);
      return (
        (w += '>'),
        r.childNodes && r.childNodes.length && (w += '...'),
        (w += '</' + $toLowerCase.call(String(r.nodeName)) + '>'),
        w
      );
    }
    if (isArray$3(r)) {
      if (r.length === 0) return '[]';
      var v = arrObjKeys(r, d);
      return y && !singleLineValues(v)
        ? '[' + indentedJoin(v, y) + ']'
        : '[ ' + $join.call(v, ', ') + ' ]';
    }
    if (isError(r)) {
      var _ = arrObjKeys(r, d);
      return !('cause' in Error.prototype) &&
        'cause' in r &&
        !isEnumerable.call(r, 'cause')
        ? '{ [' +
            String(r) +
            '] ' +
            $join.call($concat.call('[cause]: ' + d(r.cause), _), ', ') +
            ' }'
        : _.length === 0
        ? '[' + String(r) + ']'
        : '{ [' + String(r) + '] ' + $join.call(_, ', ') + ' }';
    }
    if (typeof r == 'object' && s) {
      if (inspectSymbol && typeof r[inspectSymbol] == 'function' && utilInspect)
        return utilInspect(r, { depth: u - n });
      if (s !== 'symbol' && typeof r.inspect == 'function') return r.inspect();
    }
    if (isMap(r)) {
      var A = [];
      return (
        mapForEach.call(r, function (F, x) {
          A.push(d(x, r, !0) + ' => ' + d(F, r));
        }),
        collectionOf('Map', mapSize.call(r), A, y)
      );
    }
    if (isSet(r)) {
      var P = [];
      return (
        setForEach.call(r, function (F) {
          P.push(d(F, r));
        }),
        collectionOf('Set', setSize.call(r), P, y)
      );
    }
    if (isWeakMap(r)) return weakCollectionOf('WeakMap');
    if (isWeakSet(r)) return weakCollectionOf('WeakSet');
    if (isWeakRef(r)) return weakCollectionOf('WeakRef');
    if (isNumber(r)) return markBoxed(d(Number(r)));
    if (isBigInt(r)) return markBoxed(d(bigIntValueOf.call(r)));
    if (isBoolean(r)) return markBoxed(booleanValueOf.call(r));
    if (isString(r)) return markBoxed(d(String(r)));
    if (!isDate(r) && !isRegExp$1(r)) {
      var D = arrObjKeys(r, d),
        R = gPO
          ? gPO(r) === Object.prototype
          : r instanceof Object || r.constructor === Object,
        k = r instanceof Object ? '' : 'null prototype',
        j =
          !R && toStringTag && Object(r) === r && toStringTag in r
            ? $slice.call(toStr$1(r), 8, -1)
            : k
            ? 'Object'
            : '',
        I =
          R || typeof r.constructor != 'function'
            ? ''
            : r.constructor.name
            ? r.constructor.name + ' '
            : '',
        L =
          I +
          (j || k
            ? '[' + $join.call($concat.call([], j || [], k || []), ': ') + '] '
            : '');
      return D.length === 0
        ? L + '{}'
        : y
        ? L + '{' + indentedJoin(D, y) + '}'
        : L + '{ ' + $join.call(D, ', ') + ' }';
    }
    return String(r);
  };
function wrapQuotes(e, r, t) {
  var n = (t.quoteStyle || r) === 'double' ? '"' : "'";
  return n + e + n;
}
function quote(e) {
  return $replace.call(String(e), /"/g, '&quot;');
}
function isArray$3(e) {
  return (
    toStr$1(e) === '[object Array]' &&
    (!toStringTag || !(typeof e == 'object' && toStringTag in e))
  );
}
function isDate(e) {
  return (
    toStr$1(e) === '[object Date]' &&
    (!toStringTag || !(typeof e == 'object' && toStringTag in e))
  );
}
function isRegExp$1(e) {
  return (
    toStr$1(e) === '[object RegExp]' &&
    (!toStringTag || !(typeof e == 'object' && toStringTag in e))
  );
}
function isError(e) {
  return (
    toStr$1(e) === '[object Error]' &&
    (!toStringTag || !(typeof e == 'object' && toStringTag in e))
  );
}
function isString(e) {
  return (
    toStr$1(e) === '[object String]' &&
    (!toStringTag || !(typeof e == 'object' && toStringTag in e))
  );
}
function isNumber(e) {
  return (
    toStr$1(e) === '[object Number]' &&
    (!toStringTag || !(typeof e == 'object' && toStringTag in e))
  );
}
function isBoolean(e) {
  return (
    toStr$1(e) === '[object Boolean]' &&
    (!toStringTag || !(typeof e == 'object' && toStringTag in e))
  );
}
function isSymbol$2(e) {
  if (hasShammedSymbols)
    return e && typeof e == 'object' && e instanceof Symbol;
  if (typeof e == 'symbol') return !0;
  if (!e || typeof e != 'object' || !symToString) return !1;
  try {
    return symToString.call(e), !0;
  } catch {}
  return !1;
}
function isBigInt(e) {
  if (!e || typeof e != 'object' || !bigIntValueOf) return !1;
  try {
    return bigIntValueOf.call(e), !0;
  } catch {}
  return !1;
}
var hasOwn =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this;
  };
function has$4(e, r) {
  return hasOwn.call(e, r);
}
function toStr$1(e) {
  return objectToString.call(e);
}
function nameOf(e) {
  if (e.name) return e.name;
  var r = $match.call(functionToString.call(e), /^function\s*([\w$]+)/);
  return r ? r[1] : null;
}
function indexOf(e, r) {
  if (e.indexOf) return e.indexOf(r);
  for (var t = 0, n = e.length; t < n; t++) if (e[t] === r) return t;
  return -1;
}
function isMap(e) {
  if (!mapSize || !e || typeof e != 'object') return !1;
  try {
    mapSize.call(e);
    try {
      setSize.call(e);
    } catch {
      return !0;
    }
    return e instanceof Map;
  } catch {}
  return !1;
}
function isWeakMap(e) {
  if (!weakMapHas || !e || typeof e != 'object') return !1;
  try {
    weakMapHas.call(e, weakMapHas);
    try {
      weakSetHas.call(e, weakSetHas);
    } catch {
      return !0;
    }
    return e instanceof WeakMap;
  } catch {}
  return !1;
}
function isWeakRef(e) {
  if (!weakRefDeref || !e || typeof e != 'object') return !1;
  try {
    return weakRefDeref.call(e), !0;
  } catch {}
  return !1;
}
function isSet(e) {
  if (!setSize || !e || typeof e != 'object') return !1;
  try {
    setSize.call(e);
    try {
      mapSize.call(e);
    } catch {
      return !0;
    }
    return e instanceof Set;
  } catch {}
  return !1;
}
function isWeakSet(e) {
  if (!weakSetHas || !e || typeof e != 'object') return !1;
  try {
    weakSetHas.call(e, weakSetHas);
    try {
      weakMapHas.call(e, weakMapHas);
    } catch {
      return !0;
    }
    return e instanceof WeakSet;
  } catch {}
  return !1;
}
function isElement(e) {
  return !e || typeof e != 'object'
    ? !1
    : typeof HTMLElement != 'undefined' && e instanceof HTMLElement
    ? !0
    : typeof e.nodeName == 'string' && typeof e.getAttribute == 'function';
}
function inspectString(e, r) {
  if (e.length > r.maxStringLength) {
    var t = e.length - r.maxStringLength,
      n = '... ' + t + ' more character' + (t > 1 ? 's' : '');
    return inspectString($slice.call(e, 0, r.maxStringLength), r) + n;
  }
  var o = $replace.call(
    $replace.call(e, /(['\\])/g, '\\$1'),
    /[\x00-\x1f]/g,
    lowbyte
  );
  return wrapQuotes(o, 'single', r);
}
function lowbyte(e) {
  var r = e.charCodeAt(0),
    t = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[r];
  return t
    ? '\\' + t
    : '\\x' + (r < 16 ? '0' : '') + $toUpperCase.call(r.toString(16));
}
function markBoxed(e) {
  return 'Object(' + e + ')';
}
function weakCollectionOf(e) {
  return e + ' { ? }';
}
function collectionOf(e, r, t, n) {
  var o = n ? indentedJoin(t, n) : $join.call(t, ', ');
  return e + ' (' + r + ') {' + o + '}';
}
function singleLineValues(e) {
  for (var r = 0; r < e.length; r++)
    if (
      indexOf(
        e[r],
        `
`
      ) >= 0
    )
      return !1;
  return !0;
}
function getIndent(e, r) {
  var t;
  if (e.indent === '	') t = '	';
  else if (typeof e.indent == 'number' && e.indent > 0)
    t = $join.call(Array(e.indent + 1), ' ');
  else return null;
  return { base: t, prev: $join.call(Array(r + 1), t) };
}
function indentedJoin(e, r) {
  if (e.length === 0) return '';
  var t =
    `
` +
    r.prev +
    r.base;
  return (
    t +
    $join.call(e, ',' + t) +
    `
` +
    r.prev
  );
}
function arrObjKeys(e, r) {
  var t = isArray$3(e),
    n = [];
  if (t) {
    n.length = e.length;
    for (var o = 0; o < e.length; o++) n[o] = has$4(e, o) ? r(e[o], e) : '';
  }
  var a = typeof gOPS == 'function' ? gOPS(e) : [],
    s;
  if (hasShammedSymbols) {
    s = {};
    for (var i = 0; i < a.length; i++) s['$' + a[i]] = a[i];
  }
  for (var c in e)
    !has$4(e, c) ||
      (t && String(Number(c)) === c && c < e.length) ||
      (hasShammedSymbols && s['$' + c] instanceof Symbol) ||
      ($test.call(/[^\w$]/, c)
        ? n.push(r(c, e) + ': ' + r(e[c], e))
        : n.push(c + ': ' + r(e[c], e)));
  if (typeof gOPS == 'function')
    for (var l = 0; l < a.length; l++)
      isEnumerable.call(e, a[l]) &&
        n.push('[' + r(a[l]) + ']: ' + r(e[a[l]], e));
  return n;
}
var GetIntrinsic = getIntrinsic,
  callBound$1 = callBound$2,
  inspect = objectInspect,
  $TypeError = GetIntrinsic('%TypeError%'),
  $WeakMap = GetIntrinsic('%WeakMap%', !0),
  $Map = GetIntrinsic('%Map%', !0),
  $weakMapGet = callBound$1('WeakMap.prototype.get', !0),
  $weakMapSet = callBound$1('WeakMap.prototype.set', !0),
  $weakMapHas = callBound$1('WeakMap.prototype.has', !0),
  $mapGet = callBound$1('Map.prototype.get', !0),
  $mapSet = callBound$1('Map.prototype.set', !0),
  $mapHas = callBound$1('Map.prototype.has', !0),
  listGetNode = function (e, r) {
    for (var t = e, n; (n = t.next) !== null; t = n)
      if (n.key === r)
        return (t.next = n.next), (n.next = e.next), (e.next = n), n;
  },
  listGet = function (e, r) {
    var t = listGetNode(e, r);
    return t && t.value;
  },
  listSet = function (e, r, t) {
    var n = listGetNode(e, r);
    n ? (n.value = t) : (e.next = { key: r, next: e.next, value: t });
  },
  listHas = function (e, r) {
    return !!listGetNode(e, r);
  },
  sideChannel = function () {
    var r,
      t,
      n,
      o = {
        assert: function (a) {
          if (!o.has(a))
            throw new $TypeError('Side channel does not contain ' + inspect(a));
        },
        get: function (a) {
          if (
            $WeakMap &&
            a &&
            (typeof a == 'object' || typeof a == 'function')
          ) {
            if (r) return $weakMapGet(r, a);
          } else if ($Map) {
            if (t) return $mapGet(t, a);
          } else if (n) return listGet(n, a);
        },
        has: function (a) {
          if (
            $WeakMap &&
            a &&
            (typeof a == 'object' || typeof a == 'function')
          ) {
            if (r) return $weakMapHas(r, a);
          } else if ($Map) {
            if (t) return $mapHas(t, a);
          } else if (n) return listHas(n, a);
          return !1;
        },
        set: function (a, s) {
          $WeakMap && a && (typeof a == 'object' || typeof a == 'function')
            ? (r || (r = new $WeakMap()), $weakMapSet(r, a, s))
            : $Map
            ? (t || (t = new $Map()), $mapSet(t, a, s))
            : (n || (n = { key: {}, next: null }), listSet(n, a, s));
        }
      };
    return o;
  },
  replace = String.prototype.replace,
  percentTwenties = /%20/g,
  Format = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' },
  formats$3 = {
    default: Format.RFC3986,
    formatters: {
      RFC1738: function (e) {
        return replace.call(e, percentTwenties, '+');
      },
      RFC3986: function (e) {
        return String(e);
      }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
  },
  formats$2 = formats$3,
  has$3 = Object.prototype.hasOwnProperty,
  isArray$2 = Array.isArray,
  hexTable = (function () {
    for (var e = [], r = 0; r < 256; ++r)
      e.push('%' + ((r < 16 ? '0' : '') + r.toString(16)).toUpperCase());
    return e;
  })(),
  compactQueue = function (r) {
    for (; r.length > 1; ) {
      var t = r.pop(),
        n = t.obj[t.prop];
      if (isArray$2(n)) {
        for (var o = [], a = 0; a < n.length; ++a)
          typeof n[a] != 'undefined' && o.push(n[a]);
        t.obj[t.prop] = o;
      }
    }
  },
  arrayToObject = function (r, t) {
    for (
      var n = t && t.plainObjects ? Object.create(null) : {}, o = 0;
      o < r.length;
      ++o
    )
      typeof r[o] != 'undefined' && (n[o] = r[o]);
    return n;
  },
  merge = function e(r, t, n) {
    if (!t) return r;
    if (typeof t != 'object') {
      if (isArray$2(r)) r.push(t);
      else if (r && typeof r == 'object')
        ((n && (n.plainObjects || n.allowPrototypes)) ||
          !has$3.call(Object.prototype, t)) &&
          (r[t] = !0);
      else return [r, t];
      return r;
    }
    if (!r || typeof r != 'object') return [r].concat(t);
    var o = r;
    return (
      isArray$2(r) && !isArray$2(t) && (o = arrayToObject(r, n)),
      isArray$2(r) && isArray$2(t)
        ? (t.forEach(function (a, s) {
            if (has$3.call(r, s)) {
              var i = r[s];
              i && typeof i == 'object' && a && typeof a == 'object'
                ? (r[s] = e(i, a, n))
                : r.push(a);
            } else r[s] = a;
          }),
          r)
        : Object.keys(t).reduce(function (a, s) {
            var i = t[s];
            return has$3.call(a, s) ? (a[s] = e(a[s], i, n)) : (a[s] = i), a;
          }, o)
    );
  },
  assign = function (r, t) {
    return Object.keys(t).reduce(function (n, o) {
      return (n[o] = t[o]), n;
    }, r);
  },
  decode$1 = function (e, r, t) {
    var n = e.replace(/\+/g, ' ');
    if (t === 'iso-8859-1') return n.replace(/%[0-9a-f]{2}/gi, unescape);
    try {
      return decodeURIComponent(n);
    } catch {
      return n;
    }
  },
  encode$1 = function (r, t, n, o, a) {
    if (r.length === 0) return r;
    var s = r;
    if (
      (typeof r == 'symbol'
        ? (s = Symbol.prototype.toString.call(r))
        : typeof r != 'string' && (s = String(r)),
      n === 'iso-8859-1')
    )
      return escape(s).replace(/%u[0-9a-f]{4}/gi, function (u) {
        return '%26%23' + parseInt(u.slice(2), 16) + '%3B';
      });
    for (var i = '', c = 0; c < s.length; ++c) {
      var l = s.charCodeAt(c);
      if (
        l === 45 ||
        l === 46 ||
        l === 95 ||
        l === 126 ||
        (l >= 48 && l <= 57) ||
        (l >= 65 && l <= 90) ||
        (l >= 97 && l <= 122) ||
        (a === formats$2.RFC1738 && (l === 40 || l === 41))
      ) {
        i += s.charAt(c);
        continue;
      }
      if (l < 128) {
        i = i + hexTable[l];
        continue;
      }
      if (l < 2048) {
        i = i + (hexTable[192 | (l >> 6)] + hexTable[128 | (l & 63)]);
        continue;
      }
      if (l < 55296 || l >= 57344) {
        i =
          i +
          (hexTable[224 | (l >> 12)] +
            hexTable[128 | ((l >> 6) & 63)] +
            hexTable[128 | (l & 63)]);
        continue;
      }
      (c += 1),
        (l = 65536 + (((l & 1023) << 10) | (s.charCodeAt(c) & 1023))),
        (i +=
          hexTable[240 | (l >> 18)] +
          hexTable[128 | ((l >> 12) & 63)] +
          hexTable[128 | ((l >> 6) & 63)] +
          hexTable[128 | (l & 63)]);
    }
    return i;
  },
  compact = function (r) {
    for (
      var t = [{ obj: { o: r }, prop: 'o' }], n = [], o = 0;
      o < t.length;
      ++o
    )
      for (
        var a = t[o], s = a.obj[a.prop], i = Object.keys(s), c = 0;
        c < i.length;
        ++c
      ) {
        var l = i[c],
          u = s[l];
        typeof u == 'object' &&
          u !== null &&
          n.indexOf(u) === -1 &&
          (t.push({ obj: s, prop: l }), n.push(u));
      }
    return compactQueue(t), r;
  },
  isRegExp = function (r) {
    return Object.prototype.toString.call(r) === '[object RegExp]';
  },
  isBuffer = function (r) {
    return !r || typeof r != 'object'
      ? !1
      : !!(
          r.constructor &&
          r.constructor.isBuffer &&
          r.constructor.isBuffer(r)
        );
  },
  combine = function (r, t) {
    return [].concat(r, t);
  },
  maybeMap = function (r, t) {
    if (isArray$2(r)) {
      for (var n = [], o = 0; o < r.length; o += 1) n.push(t(r[o]));
      return n;
    }
    return t(r);
  },
  utils$2 = {
    arrayToObject,
    assign,
    combine,
    compact,
    decode: decode$1,
    encode: encode$1,
    isBuffer,
    isRegExp,
    maybeMap,
    merge
  },
  getSideChannel = sideChannel,
  utils$1 = utils$2,
  formats$1 = formats$3,
  has$2 = Object.prototype.hasOwnProperty,
  arrayPrefixGenerators = {
    brackets: function (r) {
      return r + '[]';
    },
    comma: 'comma',
    indices: function (r, t) {
      return r + '[' + t + ']';
    },
    repeat: function (r) {
      return r;
    }
  },
  isArray$1 = Array.isArray,
  split = String.prototype.split,
  push = Array.prototype.push,
  pushToArray = function (e, r) {
    push.apply(e, isArray$1(r) ? r : [r]);
  },
  toISO = Date.prototype.toISOString,
  defaultFormat = formats$1.default,
  defaults$2 = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: 'utf-8',
    charsetSentinel: !1,
    delimiter: '&',
    encode: !0,
    encoder: utils$1.encode,
    encodeValuesOnly: !1,
    format: defaultFormat,
    formatter: formats$1.formatters[defaultFormat],
    indices: !1,
    serializeDate: function (r) {
      return toISO.call(r);
    },
    skipNulls: !1,
    strictNullHandling: !1
  },
  isNonNullishPrimitive = function (r) {
    return (
      typeof r == 'string' ||
      typeof r == 'number' ||
      typeof r == 'boolean' ||
      typeof r == 'symbol' ||
      typeof r == 'bigint'
    );
  },
  sentinel = {},
  stringify$2 = function e(r, t, n, o, a, s, i, c, l, u, y, d, g, h, b, w) {
    for (
      var S = r, T = w, v = 0, _ = !1;
      (T = T.get(sentinel)) !== void 0 && !_;

    ) {
      var A = T.get(r);
      if (((v += 1), typeof A != 'undefined')) {
        if (A === v) throw new RangeError('Cyclic object value');
        _ = !0;
      }
      typeof T.get(sentinel) == 'undefined' && (v = 0);
    }
    if (
      (typeof c == 'function'
        ? (S = c(t, S))
        : S instanceof Date
        ? (S = y(S))
        : n === 'comma' &&
          isArray$1(S) &&
          (S = utils$1.maybeMap(S, function (m) {
            return m instanceof Date ? y(m) : m;
          })),
      S === null)
    ) {
      if (a) return i && !h ? i(t, defaults$2.encoder, b, 'key', d) : t;
      S = '';
    }
    if (isNonNullishPrimitive(S) || utils$1.isBuffer(S)) {
      if (i) {
        var P = h ? t : i(t, defaults$2.encoder, b, 'key', d);
        if (n === 'comma' && h) {
          for (
            var D = split.call(String(S), ','), R = '', k = 0;
            k < D.length;
            ++k
          )
            R +=
              (k === 0 ? '' : ',') +
              g(i(D[k], defaults$2.encoder, b, 'value', d));
          return [
            g(P) + (o && isArray$1(S) && D.length === 1 ? '[]' : '') + '=' + R
          ];
        }
        return [g(P) + '=' + g(i(S, defaults$2.encoder, b, 'value', d))];
      }
      return [g(t) + '=' + g(String(S))];
    }
    var j = [];
    if (typeof S == 'undefined') return j;
    var I;
    if (n === 'comma' && isArray$1(S))
      I = [{ value: S.length > 0 ? S.join(',') || null : void 0 }];
    else if (isArray$1(c)) I = c;
    else {
      var L = Object.keys(S);
      I = l ? L.sort(l) : L;
    }
    for (
      var F = o && isArray$1(S) && S.length === 1 ? t + '[]' : t, x = 0;
      x < I.length;
      ++x
    ) {
      var N = I[x],
        U =
          typeof N == 'object' && typeof N.value != 'undefined'
            ? N.value
            : S[N];
      if (!(s && U === null)) {
        var B = isArray$1(S)
          ? typeof n == 'function'
            ? n(F, N)
            : F
          : F + (u ? '.' + N : '[' + N + ']');
        w.set(r, v);
        var $ = getSideChannel();
        $.set(sentinel, w),
          pushToArray(j, e(U, B, n, o, a, s, i, c, l, u, y, d, g, h, b, $));
      }
    }
    return j;
  },
  normalizeStringifyOptions = function (r) {
    if (!r) return defaults$2;
    if (
      r.encoder !== null &&
      typeof r.encoder != 'undefined' &&
      typeof r.encoder != 'function'
    )
      throw new TypeError('Encoder has to be a function.');
    var t = r.charset || defaults$2.charset;
    if (
      typeof r.charset != 'undefined' &&
      r.charset !== 'utf-8' &&
      r.charset !== 'iso-8859-1'
    )
      throw new TypeError(
        'The charset option must be either utf-8, iso-8859-1, or undefined'
      );
    var n = formats$1.default;
    if (typeof r.format != 'undefined') {
      if (!has$2.call(formats$1.formatters, r.format))
        throw new TypeError('Unknown format option provided.');
      n = r.format;
    }
    var o = formats$1.formatters[n],
      a = defaults$2.filter;
    return (
      (typeof r.filter == 'function' || isArray$1(r.filter)) && (a = r.filter),
      {
        addQueryPrefix:
          typeof r.addQueryPrefix == 'boolean'
            ? r.addQueryPrefix
            : defaults$2.addQueryPrefix,
        allowDots:
          typeof r.allowDots == 'undefined'
            ? defaults$2.allowDots
            : !!r.allowDots,
        charset: t,
        charsetSentinel:
          typeof r.charsetSentinel == 'boolean'
            ? r.charsetSentinel
            : defaults$2.charsetSentinel,
        delimiter:
          typeof r.delimiter == 'undefined'
            ? defaults$2.delimiter
            : r.delimiter,
        encode: typeof r.encode == 'boolean' ? r.encode : defaults$2.encode,
        encoder:
          typeof r.encoder == 'function' ? r.encoder : defaults$2.encoder,
        encodeValuesOnly:
          typeof r.encodeValuesOnly == 'boolean'
            ? r.encodeValuesOnly
            : defaults$2.encodeValuesOnly,
        filter: a,
        format: n,
        formatter: o,
        serializeDate:
          typeof r.serializeDate == 'function'
            ? r.serializeDate
            : defaults$2.serializeDate,
        skipNulls:
          typeof r.skipNulls == 'boolean' ? r.skipNulls : defaults$2.skipNulls,
        sort: typeof r.sort == 'function' ? r.sort : null,
        strictNullHandling:
          typeof r.strictNullHandling == 'boolean'
            ? r.strictNullHandling
            : defaults$2.strictNullHandling
      }
    );
  },
  stringify_1 = function (e, r) {
    var t = e,
      n = normalizeStringifyOptions(r),
      o,
      a;
    typeof n.filter == 'function'
      ? ((a = n.filter), (t = a('', t)))
      : isArray$1(n.filter) && ((a = n.filter), (o = a));
    var s = [];
    if (typeof t != 'object' || t === null) return '';
    var i;
    r && r.arrayFormat in arrayPrefixGenerators
      ? (i = r.arrayFormat)
      : r && 'indices' in r
      ? (i = r.indices ? 'indices' : 'repeat')
      : (i = 'indices');
    var c = arrayPrefixGenerators[i];
    if (r && 'commaRoundTrip' in r && typeof r.commaRoundTrip != 'boolean')
      throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    var l = c === 'comma' && r && r.commaRoundTrip;
    o || (o = Object.keys(t)), n.sort && o.sort(n.sort);
    for (var u = getSideChannel(), y = 0; y < o.length; ++y) {
      var d = o[y];
      (n.skipNulls && t[d] === null) ||
        pushToArray(
          s,
          stringify$2(
            t[d],
            d,
            c,
            l,
            n.strictNullHandling,
            n.skipNulls,
            n.encode ? n.encoder : null,
            n.filter,
            n.sort,
            n.allowDots,
            n.serializeDate,
            n.format,
            n.formatter,
            n.encodeValuesOnly,
            n.charset,
            u
          )
        );
    }
    var g = s.join(n.delimiter),
      h = n.addQueryPrefix === !0 ? '?' : '';
    return (
      n.charsetSentinel &&
        (n.charset === 'iso-8859-1'
          ? (h += 'utf8=%26%2310003%3B&')
          : (h += 'utf8=%E2%9C%93&')),
      g.length > 0 ? h + g : ''
    );
  },
  utils = utils$2,
  has$1 = Object.prototype.hasOwnProperty,
  isArray = Array.isArray,
  defaults$1 = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: !1,
    comma: !1,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1
  },
  interpretNumericEntities = function (e) {
    return e.replace(/&#(\d+);/g, function (r, t) {
      return String.fromCharCode(parseInt(t, 10));
    });
  },
  parseArrayValue = function (e, r) {
    return e && typeof e == 'string' && r.comma && e.indexOf(',') > -1
      ? e.split(',')
      : e;
  },
  isoSentinel = 'utf8=%26%2310003%3B',
  charsetSentinel = 'utf8=%E2%9C%93',
  parseValues = function (r, t) {
    var n = {},
      o = t.ignoreQueryPrefix ? r.replace(/^\?/, '') : r,
      a = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
      s = o.split(t.delimiter, a),
      i = -1,
      c,
      l = t.charset;
    if (t.charsetSentinel)
      for (c = 0; c < s.length; ++c)
        s[c].indexOf('utf8=') === 0 &&
          (s[c] === charsetSentinel
            ? (l = 'utf-8')
            : s[c] === isoSentinel && (l = 'iso-8859-1'),
          (i = c),
          (c = s.length));
    for (c = 0; c < s.length; ++c)
      if (c !== i) {
        var u = s[c],
          y = u.indexOf(']='),
          d = y === -1 ? u.indexOf('=') : y + 1,
          g,
          h;
        d === -1
          ? ((g = t.decoder(u, defaults$1.decoder, l, 'key')),
            (h = t.strictNullHandling ? null : ''))
          : ((g = t.decoder(u.slice(0, d), defaults$1.decoder, l, 'key')),
            (h = utils.maybeMap(
              parseArrayValue(u.slice(d + 1), t),
              function (b) {
                return t.decoder(b, defaults$1.decoder, l, 'value');
              }
            ))),
          h &&
            t.interpretNumericEntities &&
            l === 'iso-8859-1' &&
            (h = interpretNumericEntities(h)),
          u.indexOf('[]=') > -1 && (h = isArray(h) ? [h] : h),
          has$1.call(n, g) ? (n[g] = utils.combine(n[g], h)) : (n[g] = h);
      }
    return n;
  },
  parseObject = function (e, r, t, n) {
    for (var o = n ? r : parseArrayValue(r, t), a = e.length - 1; a >= 0; --a) {
      var s,
        i = e[a];
      if (i === '[]' && t.parseArrays) s = [].concat(o);
      else {
        s = t.plainObjects ? Object.create(null) : {};
        var c =
            i.charAt(0) === '[' && i.charAt(i.length - 1) === ']'
              ? i.slice(1, -1)
              : i,
          l = parseInt(c, 10);
        !t.parseArrays && c === ''
          ? (s = { 0: o })
          : !isNaN(l) &&
            i !== c &&
            String(l) === c &&
            l >= 0 &&
            t.parseArrays &&
            l <= t.arrayLimit
          ? ((s = []), (s[l] = o))
          : c !== '__proto__' && (s[c] = o);
      }
      o = s;
    }
    return o;
  },
  parseKeys = function (r, t, n, o) {
    if (!!r) {
      var a = n.allowDots ? r.replace(/\.([^.[]+)/g, '[$1]') : r,
        s = /(\[[^[\]]*])/,
        i = /(\[[^[\]]*])/g,
        c = n.depth > 0 && s.exec(a),
        l = c ? a.slice(0, c.index) : a,
        u = [];
      if (l) {
        if (
          !n.plainObjects &&
          has$1.call(Object.prototype, l) &&
          !n.allowPrototypes
        )
          return;
        u.push(l);
      }
      for (
        var y = 0;
        n.depth > 0 && (c = i.exec(a)) !== null && y < n.depth;

      ) {
        if (
          ((y += 1),
          !n.plainObjects &&
            has$1.call(Object.prototype, c[1].slice(1, -1)) &&
            !n.allowPrototypes)
        )
          return;
        u.push(c[1]);
      }
      return c && u.push('[' + a.slice(c.index) + ']'), parseObject(u, t, n, o);
    }
  },
  normalizeParseOptions = function (r) {
    if (!r) return defaults$1;
    if (
      r.decoder !== null &&
      r.decoder !== void 0 &&
      typeof r.decoder != 'function'
    )
      throw new TypeError('Decoder has to be a function.');
    if (
      typeof r.charset != 'undefined' &&
      r.charset !== 'utf-8' &&
      r.charset !== 'iso-8859-1'
    )
      throw new TypeError(
        'The charset option must be either utf-8, iso-8859-1, or undefined'
      );
    var t = typeof r.charset == 'undefined' ? defaults$1.charset : r.charset;
    return {
      allowDots:
        typeof r.allowDots == 'undefined'
          ? defaults$1.allowDots
          : !!r.allowDots,
      allowPrototypes:
        typeof r.allowPrototypes == 'boolean'
          ? r.allowPrototypes
          : defaults$1.allowPrototypes,
      allowSparse:
        typeof r.allowSparse == 'boolean'
          ? r.allowSparse
          : defaults$1.allowSparse,
      arrayLimit:
        typeof r.arrayLimit == 'number' ? r.arrayLimit : defaults$1.arrayLimit,
      charset: t,
      charsetSentinel:
        typeof r.charsetSentinel == 'boolean'
          ? r.charsetSentinel
          : defaults$1.charsetSentinel,
      comma: typeof r.comma == 'boolean' ? r.comma : defaults$1.comma,
      decoder: typeof r.decoder == 'function' ? r.decoder : defaults$1.decoder,
      delimiter:
        typeof r.delimiter == 'string' || utils.isRegExp(r.delimiter)
          ? r.delimiter
          : defaults$1.delimiter,
      depth:
        typeof r.depth == 'number' || r.depth === !1
          ? +r.depth
          : defaults$1.depth,
      ignoreQueryPrefix: r.ignoreQueryPrefix === !0,
      interpretNumericEntities:
        typeof r.interpretNumericEntities == 'boolean'
          ? r.interpretNumericEntities
          : defaults$1.interpretNumericEntities,
      parameterLimit:
        typeof r.parameterLimit == 'number'
          ? r.parameterLimit
          : defaults$1.parameterLimit,
      parseArrays: r.parseArrays !== !1,
      plainObjects:
        typeof r.plainObjects == 'boolean'
          ? r.plainObjects
          : defaults$1.plainObjects,
      strictNullHandling:
        typeof r.strictNullHandling == 'boolean'
          ? r.strictNullHandling
          : defaults$1.strictNullHandling
    };
  },
  parse$2 = function (e, r) {
    var t = normalizeParseOptions(r);
    if (e === '' || e === null || typeof e == 'undefined')
      return t.plainObjects ? Object.create(null) : {};
    for (
      var n = typeof e == 'string' ? parseValues(e, t) : e,
        o = t.plainObjects ? Object.create(null) : {},
        a = Object.keys(n),
        s = 0;
      s < a.length;
      ++s
    ) {
      var i = a[s],
        c = parseKeys(i, n[i], t, typeof e == 'string');
      o = utils.merge(o, c, t);
    }
    return t.allowSparse === !0 ? o : utils.compact(o);
  },
  stringify$1 = stringify_1,
  parse$1 = parse$2,
  formats = formats$3,
  lib$1 = { formats, parse: parse$1, stringify: stringify$1 },
  _templateObject$4;
function _taggedTemplateLiteral$4(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _defineProperty$2(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
function _slicedToArray$5(e, r) {
  return (
    _arrayWithHoles$5(e) ||
    _iterableToArrayLimit$5(e, r) ||
    _unsupportedIterableToArray$6(e, r) ||
    _nonIterableRest$5()
  );
}
function _nonIterableRest$5() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$6(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$6(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$6(e, r);
  }
}
function _arrayLikeToArray$6(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$5(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$5(e) {
  if (Array.isArray(e)) return e;
}
var VALIDATION_REGEXP = /^[a-zA-Z0-9 _-]*$/,
  NUMBER_REGEXP = /^-?[0-9]+(\.[0-9]+)?$/,
  HEX_REGEXP = /^#([a-f0-9]{3,4}|[a-f0-9]{6}|[a-f0-9]{8})$/i,
  COLOR_REGEXP =
    /^(rgba?|hsla?)\(([0-9]{1,3}),\s?([0-9]{1,3})%?,\s?([0-9]{1,3})%?,?\s?([0-9](\.[0-9]{1,2})?)?\)$/i,
  validateArgs = function e() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : '',
      t = arguments.length > 1 ? arguments[1] : void 0;
    return r === null || r === '' || !VALIDATION_REGEXP.test(r)
      ? !1
      : t == null ||
        t instanceof Date ||
        typeof t == 'number' ||
        typeof t == 'boolean'
      ? !0
      : typeof t == 'string'
      ? VALIDATION_REGEXP.test(t) ||
        NUMBER_REGEXP.test(t) ||
        HEX_REGEXP.test(t) ||
        COLOR_REGEXP.test(t)
      : Array.isArray(t)
      ? t.every(function (n) {
          return e(r, n);
        })
      : isPlainObject_1(t)
      ? Object.entries(t).every(function (n) {
          var o = _slicedToArray$5(n, 2),
            a = o[0],
            s = o[1];
          return e(a, s);
        })
      : !1;
  },
  QS_OPTIONS = {
    delimiter: ';',
    allowDots: !0,
    allowSparse: !0,
    decoder: (function (e) {
      function r(t, n, o, a) {
        return e.apply(this, arguments);
      }
      return (
        (r.toString = function () {
          return e.toString();
        }),
        r
      );
    })(function (e, r, t, n) {
      if (n === 'value' && e.startsWith('!')) {
        if (e === '!undefined') return;
        if (e === '!null') return null;
        if (e.startsWith('!date(') && e.endsWith(')'))
          return new Date(e.slice(6, -1));
        if (e.startsWith('!hex(') && e.endsWith(')'))
          return '#'.concat(e.slice(5, -1));
        var o = e.slice(1).match(COLOR_REGEXP);
        if (o)
          return e.startsWith('!rgba')
            ? ''
                .concat(o[1], '(')
                .concat(o[2], ', ')
                .concat(o[3], ', ')
                .concat(o[4], ', ')
                .concat(o[5], ')')
            : e.startsWith('!hsla')
            ? ''
                .concat(o[1], '(')
                .concat(o[2], ', ')
                .concat(o[3], '%, ')
                .concat(o[4], '%, ')
                .concat(o[5], ')')
            : e.startsWith('!rgb')
            ? ''
                .concat(o[1], '(')
                .concat(o[2], ', ')
                .concat(o[3], ', ')
                .concat(o[4], ')')
            : ''
                .concat(o[1], '(')
                .concat(o[2], ', ')
                .concat(o[3], '%, ')
                .concat(o[4], '%)');
      }
      return n === 'value' && NUMBER_REGEXP.test(e) ? Number(e) : r(e, r, t);
    })
  },
  parseArgsParam = function (r) {
    var t = r.split(';').map(function (n) {
      return n.replace('=', '~').replace(':', '=');
    });
    return Object.entries(lib$1.parse(t.join(';'), QS_OPTIONS)).reduce(
      function (n, o) {
        var a = _slicedToArray$5(o, 2),
          s = a[0],
          i = a[1];
        return validateArgs(s, i)
          ? Object.assign(n, _defineProperty$2({}, s, i))
          : (once.warn(
              dedent(
                _templateObject$4 ||
                  (_templateObject$4 = _taggedTemplateLiteral$4([
                    `
      Omitted potentially unsafe URL args.

      More info: https://storybook.js.org/docs/react/writing-stories/args#setting-args-through-the-url
    `
                  ]))
              )
            ),
            n);
      },
      {}
    );
  },
  _excluded$2 = ['path', 'selectedKind', 'selectedStory'];
function _classCallCheck$8(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$8(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$8(e, r, t) {
  return (
    r && _defineProperties$8(e.prototype, r),
    t && _defineProperties$8(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _typeof$2(e) {
  return (
    (_typeof$2 =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    _typeof$2(e)
  );
}
function _objectWithoutProperties$2(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$2(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function _objectWithoutPropertiesLoose$2(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
var history = window_1.history,
  document$3 = window_1.document;
function pathToId(e) {
  var r = (e || '').match(/^\/story\/(.+)/);
  if (!r)
    throw new Error(
      "Invalid path '".concat(e, "',  must start with '/story/'")
    );
  return r[1];
}
var getQueryString = function (r) {
    var t = r.selection,
      n = r.extraParams,
      o = document$3.location.search,
      a = o === void 0 ? '' : o,
      s = lib$1.parse(a, { ignoreQueryPrefix: !0 });
    s.path, s.selectedKind, s.selectedStory;
    var i = _objectWithoutProperties$2(s, _excluded$2);
    return lib$1.stringify(
      Object.assign({}, i, n, t && { id: t.storyId, viewMode: t.viewMode }),
      { encode: !1, addQueryPrefix: !0 }
    );
  },
  setPath = function (r) {
    if (!!r) {
      var t = getQueryString({ selection: r }),
        n = document$3.location.hash,
        o = n === void 0 ? '' : n;
      (document$3.title = r.storyId),
        history.replaceState(
          {},
          '',
          ''.concat(document$3.location.pathname).concat(t).concat(o)
        );
    }
  },
  isObject$2 = function (r) {
    return r != null && _typeof$2(r) === 'object' && Array.isArray(r) === !1;
  },
  getFirstString = function e(r) {
    if (typeof r == 'string') return r;
    if (Array.isArray(r)) return e(r[0]);
    if (isObject$2(r)) return e(Object.values(r));
  },
  deprecatedLegacyQuery = browser(function () {
    return 0;
  }, 'URL formats with `selectedKind` and `selectedName` query parameters are deprecated.\nUse `id=$storyId` instead.\nSee https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#new-url-structure'),
  getSelectionSpecifierFromPath = function () {
    var r = lib$1.parse(document$3.location.search, { ignoreQueryPrefix: !0 }),
      t = typeof r.args == 'string' ? parseArgsParam(r.args) : void 0,
      n = typeof r.globals == 'string' ? parseArgsParam(r.globals) : void 0,
      o = getFirstString(r.viewMode);
    (typeof o != 'string' || !o.match(/docs|story/)) && (o = 'story');
    var a = getFirstString(r.path),
      s = a ? pathToId(a) : getFirstString(r.id);
    if (s) return { storySpecifier: s, args: t, globals: n, viewMode: o };
    var i = getFirstString(r.selectedKind),
      c = getFirstString(r.selectedStory);
    return i && c
      ? (deprecatedLegacyQuery(),
        {
          storySpecifier: { title: i, name: c },
          args: t,
          globals: n,
          viewMode: o
        })
      : null;
  },
  UrlStore = (function () {
    function e() {
      _classCallCheck$8(this, e),
        (this.selectionSpecifier = void 0),
        (this.selection = void 0),
        (this.selectionSpecifier = getSelectionSpecifierFromPath());
    }
    return (
      _createClass$8(e, [
        {
          key: 'setSelection',
          value: function (t) {
            (this.selection = t), setPath(this.selection);
          }
        },
        {
          key: 'setQueryParams',
          value: function (t) {
            var n = getQueryString({ extraParams: t }),
              o = document$3.location.hash,
              a = o === void 0 ? '' : o;
            history.replaceState(
              {},
              '',
              ''.concat(document$3.location.pathname).concat(n).concat(a)
            );
          }
        }
      ]),
      e
    );
  })(),
  lib = {},
  decode = {};
const Aacute$1 = '\xC1',
  aacute$1 = '\xE1',
  Abreve = '\u0102',
  abreve = '\u0103',
  ac = '\u223E',
  acd = '\u223F',
  acE = '\u223E\u0333',
  Acirc$1 = '\xC2',
  acirc$1 = '\xE2',
  acute$1 = '\xB4',
  Acy = '\u0410',
  acy = '\u0430',
  AElig$1 = '\xC6',
  aelig$1 = '\xE6',
  af = '\u2061',
  Afr = '\u{1D504}',
  afr = '\u{1D51E}',
  Agrave$1 = '\xC0',
  agrave$1 = '\xE0',
  alefsym = '\u2135',
  aleph = '\u2135',
  Alpha = '\u0391',
  alpha = '\u03B1',
  Amacr = '\u0100',
  amacr = '\u0101',
  amalg = '\u2A3F',
  amp$2 = '&',
  AMP$1 = '&',
  andand = '\u2A55',
  And = '\u2A53',
  and = '\u2227',
  andd = '\u2A5C',
  andslope = '\u2A58',
  andv = '\u2A5A',
  ang = '\u2220',
  ange = '\u29A4',
  angle = '\u2220',
  angmsdaa = '\u29A8',
  angmsdab = '\u29A9',
  angmsdac = '\u29AA',
  angmsdad = '\u29AB',
  angmsdae = '\u29AC',
  angmsdaf = '\u29AD',
  angmsdag = '\u29AE',
  angmsdah = '\u29AF',
  angmsd = '\u2221',
  angrt = '\u221F',
  angrtvb = '\u22BE',
  angrtvbd = '\u299D',
  angsph = '\u2222',
  angst = '\xC5',
  angzarr = '\u237C',
  Aogon = '\u0104',
  aogon = '\u0105',
  Aopf = '\u{1D538}',
  aopf = '\u{1D552}',
  apacir = '\u2A6F',
  ap = '\u2248',
  apE = '\u2A70',
  ape = '\u224A',
  apid = '\u224B',
  apos$1 = "'",
  ApplyFunction = '\u2061',
  approx = '\u2248',
  approxeq = '\u224A',
  Aring$1 = '\xC5',
  aring$1 = '\xE5',
  Ascr = '\u{1D49C}',
  ascr = '\u{1D4B6}',
  Assign = '\u2254',
  ast = '*',
  asymp = '\u2248',
  asympeq = '\u224D',
  Atilde$1 = '\xC3',
  atilde$1 = '\xE3',
  Auml$1 = '\xC4',
  auml$1 = '\xE4',
  awconint = '\u2233',
  awint = '\u2A11',
  backcong = '\u224C',
  backepsilon = '\u03F6',
  backprime = '\u2035',
  backsim = '\u223D',
  backsimeq = '\u22CD',
  Backslash = '\u2216',
  Barv = '\u2AE7',
  barvee = '\u22BD',
  barwed = '\u2305',
  Barwed = '\u2306',
  barwedge = '\u2305',
  bbrk = '\u23B5',
  bbrktbrk = '\u23B6',
  bcong = '\u224C',
  Bcy = '\u0411',
  bcy = '\u0431',
  bdquo = '\u201E',
  becaus = '\u2235',
  because = '\u2235',
  Because = '\u2235',
  bemptyv = '\u29B0',
  bepsi = '\u03F6',
  bernou = '\u212C',
  Bernoullis = '\u212C',
  Beta = '\u0392',
  beta = '\u03B2',
  beth = '\u2136',
  between = '\u226C',
  Bfr = '\u{1D505}',
  bfr = '\u{1D51F}',
  bigcap = '\u22C2',
  bigcirc = '\u25EF',
  bigcup = '\u22C3',
  bigodot = '\u2A00',
  bigoplus = '\u2A01',
  bigotimes = '\u2A02',
  bigsqcup = '\u2A06',
  bigstar = '\u2605',
  bigtriangledown = '\u25BD',
  bigtriangleup = '\u25B3',
  biguplus = '\u2A04',
  bigvee = '\u22C1',
  bigwedge = '\u22C0',
  bkarow = '\u290D',
  blacklozenge = '\u29EB',
  blacksquare = '\u25AA',
  blacktriangle = '\u25B4',
  blacktriangledown = '\u25BE',
  blacktriangleleft = '\u25C2',
  blacktriangleright = '\u25B8',
  blank = '\u2423',
  blk12 = '\u2592',
  blk14 = '\u2591',
  blk34 = '\u2593',
  block = '\u2588',
  bne = '=\u20E5',
  bnequiv = '\u2261\u20E5',
  bNot = '\u2AED',
  bnot = '\u2310',
  Bopf = '\u{1D539}',
  bopf = '\u{1D553}',
  bot = '\u22A5',
  bottom = '\u22A5',
  bowtie = '\u22C8',
  boxbox = '\u29C9',
  boxdl = '\u2510',
  boxdL = '\u2555',
  boxDl = '\u2556',
  boxDL = '\u2557',
  boxdr = '\u250C',
  boxdR = '\u2552',
  boxDr = '\u2553',
  boxDR = '\u2554',
  boxh = '\u2500',
  boxH = '\u2550',
  boxhd = '\u252C',
  boxHd = '\u2564',
  boxhD = '\u2565',
  boxHD = '\u2566',
  boxhu = '\u2534',
  boxHu = '\u2567',
  boxhU = '\u2568',
  boxHU = '\u2569',
  boxminus = '\u229F',
  boxplus = '\u229E',
  boxtimes = '\u22A0',
  boxul = '\u2518',
  boxuL = '\u255B',
  boxUl = '\u255C',
  boxUL = '\u255D',
  boxur = '\u2514',
  boxuR = '\u2558',
  boxUr = '\u2559',
  boxUR = '\u255A',
  boxv = '\u2502',
  boxV = '\u2551',
  boxvh = '\u253C',
  boxvH = '\u256A',
  boxVh = '\u256B',
  boxVH = '\u256C',
  boxvl = '\u2524',
  boxvL = '\u2561',
  boxVl = '\u2562',
  boxVL = '\u2563',
  boxvr = '\u251C',
  boxvR = '\u255E',
  boxVr = '\u255F',
  boxVR = '\u2560',
  bprime = '\u2035',
  breve = '\u02D8',
  Breve = '\u02D8',
  brvbar$1 = '\xA6',
  bscr = '\u{1D4B7}',
  Bscr = '\u212C',
  bsemi = '\u204F',
  bsim = '\u223D',
  bsime = '\u22CD',
  bsolb = '\u29C5',
  bsol = '\\',
  bsolhsub = '\u27C8',
  bull = '\u2022',
  bullet = '\u2022',
  bump = '\u224E',
  bumpE = '\u2AAE',
  bumpe = '\u224F',
  Bumpeq = '\u224E',
  bumpeq = '\u224F',
  Cacute = '\u0106',
  cacute = '\u0107',
  capand = '\u2A44',
  capbrcup = '\u2A49',
  capcap = '\u2A4B',
  cap = '\u2229',
  Cap = '\u22D2',
  capcup = '\u2A47',
  capdot = '\u2A40',
  CapitalDifferentialD = '\u2145',
  caps = '\u2229\uFE00',
  caret = '\u2041',
  caron = '\u02C7',
  Cayleys = '\u212D',
  ccaps = '\u2A4D',
  Ccaron = '\u010C',
  ccaron = '\u010D',
  Ccedil$1 = '\xC7',
  ccedil$1 = '\xE7',
  Ccirc = '\u0108',
  ccirc = '\u0109',
  Cconint = '\u2230',
  ccups = '\u2A4C',
  ccupssm = '\u2A50',
  Cdot = '\u010A',
  cdot = '\u010B',
  cedil$1 = '\xB8',
  Cedilla = '\xB8',
  cemptyv = '\u29B2',
  cent$1 = '\xA2',
  centerdot = '\xB7',
  CenterDot = '\xB7',
  cfr = '\u{1D520}',
  Cfr = '\u212D',
  CHcy = '\u0427',
  chcy = '\u0447',
  check = '\u2713',
  checkmark = '\u2713',
  Chi = '\u03A7',
  chi = '\u03C7',
  circ = '\u02C6',
  circeq = '\u2257',
  circlearrowleft = '\u21BA',
  circlearrowright = '\u21BB',
  circledast = '\u229B',
  circledcirc = '\u229A',
  circleddash = '\u229D',
  CircleDot = '\u2299',
  circledR = '\xAE',
  circledS = '\u24C8',
  CircleMinus = '\u2296',
  CirclePlus = '\u2295',
  CircleTimes = '\u2297',
  cir = '\u25CB',
  cirE = '\u29C3',
  cire = '\u2257',
  cirfnint = '\u2A10',
  cirmid = '\u2AEF',
  cirscir = '\u29C2',
  ClockwiseContourIntegral = '\u2232',
  CloseCurlyDoubleQuote = '\u201D',
  CloseCurlyQuote = '\u2019',
  clubs = '\u2663',
  clubsuit = '\u2663',
  colon = ':',
  Colon = '\u2237',
  Colone = '\u2A74',
  colone = '\u2254',
  coloneq = '\u2254',
  comma = ',',
  commat = '@',
  comp = '\u2201',
  compfn = '\u2218',
  complement = '\u2201',
  complexes = '\u2102',
  cong = '\u2245',
  congdot = '\u2A6D',
  Congruent = '\u2261',
  conint = '\u222E',
  Conint = '\u222F',
  ContourIntegral = '\u222E',
  copf = '\u{1D554}',
  Copf = '\u2102',
  coprod = '\u2210',
  Coproduct = '\u2210',
  copy$1 = '\xA9',
  COPY$1 = '\xA9',
  copysr = '\u2117',
  CounterClockwiseContourIntegral = '\u2233',
  crarr = '\u21B5',
  cross = '\u2717',
  Cross = '\u2A2F',
  Cscr = '\u{1D49E}',
  cscr = '\u{1D4B8}',
  csub = '\u2ACF',
  csube = '\u2AD1',
  csup = '\u2AD0',
  csupe = '\u2AD2',
  ctdot = '\u22EF',
  cudarrl = '\u2938',
  cudarrr = '\u2935',
  cuepr = '\u22DE',
  cuesc = '\u22DF',
  cularr = '\u21B6',
  cularrp = '\u293D',
  cupbrcap = '\u2A48',
  cupcap = '\u2A46',
  CupCap = '\u224D',
  cup = '\u222A',
  Cup = '\u22D3',
  cupcup = '\u2A4A',
  cupdot = '\u228D',
  cupor = '\u2A45',
  cups = '\u222A\uFE00',
  curarr = '\u21B7',
  curarrm = '\u293C',
  curlyeqprec = '\u22DE',
  curlyeqsucc = '\u22DF',
  curlyvee = '\u22CE',
  curlywedge = '\u22CF',
  curren$1 = '\xA4',
  curvearrowleft = '\u21B6',
  curvearrowright = '\u21B7',
  cuvee = '\u22CE',
  cuwed = '\u22CF',
  cwconint = '\u2232',
  cwint = '\u2231',
  cylcty = '\u232D',
  dagger = '\u2020',
  Dagger = '\u2021',
  daleth = '\u2138',
  darr = '\u2193',
  Darr = '\u21A1',
  dArr = '\u21D3',
  dash = '\u2010',
  Dashv = '\u2AE4',
  dashv = '\u22A3',
  dbkarow = '\u290F',
  dblac = '\u02DD',
  Dcaron = '\u010E',
  dcaron = '\u010F',
  Dcy = '\u0414',
  dcy = '\u0434',
  ddagger = '\u2021',
  ddarr = '\u21CA',
  DD = '\u2145',
  dd = '\u2146',
  DDotrahd = '\u2911',
  ddotseq = '\u2A77',
  deg$1 = '\xB0',
  Del = '\u2207',
  Delta = '\u0394',
  delta = '\u03B4',
  demptyv = '\u29B1',
  dfisht = '\u297F',
  Dfr = '\u{1D507}',
  dfr = '\u{1D521}',
  dHar = '\u2965',
  dharl = '\u21C3',
  dharr = '\u21C2',
  DiacriticalAcute = '\xB4',
  DiacriticalDot = '\u02D9',
  DiacriticalDoubleAcute = '\u02DD',
  DiacriticalGrave = '`',
  DiacriticalTilde = '\u02DC',
  diam = '\u22C4',
  diamond = '\u22C4',
  Diamond = '\u22C4',
  diamondsuit = '\u2666',
  diams = '\u2666',
  die = '\xA8',
  DifferentialD = '\u2146',
  digamma = '\u03DD',
  disin = '\u22F2',
  div = '\xF7',
  divide$1 = '\xF7',
  divideontimes = '\u22C7',
  divonx = '\u22C7',
  DJcy = '\u0402',
  djcy = '\u0452',
  dlcorn = '\u231E',
  dlcrop = '\u230D',
  dollar = '$',
  Dopf = '\u{1D53B}',
  dopf = '\u{1D555}',
  Dot = '\xA8',
  dot = '\u02D9',
  DotDot = '\u20DC',
  doteq = '\u2250',
  doteqdot = '\u2251',
  DotEqual = '\u2250',
  dotminus = '\u2238',
  dotplus = '\u2214',
  dotsquare = '\u22A1',
  doublebarwedge = '\u2306',
  DoubleContourIntegral = '\u222F',
  DoubleDot = '\xA8',
  DoubleDownArrow = '\u21D3',
  DoubleLeftArrow = '\u21D0',
  DoubleLeftRightArrow = '\u21D4',
  DoubleLeftTee = '\u2AE4',
  DoubleLongLeftArrow = '\u27F8',
  DoubleLongLeftRightArrow = '\u27FA',
  DoubleLongRightArrow = '\u27F9',
  DoubleRightArrow = '\u21D2',
  DoubleRightTee = '\u22A8',
  DoubleUpArrow = '\u21D1',
  DoubleUpDownArrow = '\u21D5',
  DoubleVerticalBar = '\u2225',
  DownArrowBar = '\u2913',
  downarrow = '\u2193',
  DownArrow = '\u2193',
  Downarrow = '\u21D3',
  DownArrowUpArrow = '\u21F5',
  DownBreve = '\u0311',
  downdownarrows = '\u21CA',
  downharpoonleft = '\u21C3',
  downharpoonright = '\u21C2',
  DownLeftRightVector = '\u2950',
  DownLeftTeeVector = '\u295E',
  DownLeftVectorBar = '\u2956',
  DownLeftVector = '\u21BD',
  DownRightTeeVector = '\u295F',
  DownRightVectorBar = '\u2957',
  DownRightVector = '\u21C1',
  DownTeeArrow = '\u21A7',
  DownTee = '\u22A4',
  drbkarow = '\u2910',
  drcorn = '\u231F',
  drcrop = '\u230C',
  Dscr = '\u{1D49F}',
  dscr = '\u{1D4B9}',
  DScy = '\u0405',
  dscy = '\u0455',
  dsol = '\u29F6',
  Dstrok = '\u0110',
  dstrok = '\u0111',
  dtdot = '\u22F1',
  dtri = '\u25BF',
  dtrif = '\u25BE',
  duarr = '\u21F5',
  duhar = '\u296F',
  dwangle = '\u29A6',
  DZcy = '\u040F',
  dzcy = '\u045F',
  dzigrarr = '\u27FF',
  Eacute$1 = '\xC9',
  eacute$1 = '\xE9',
  easter = '\u2A6E',
  Ecaron = '\u011A',
  ecaron = '\u011B',
  Ecirc$1 = '\xCA',
  ecirc$1 = '\xEA',
  ecir = '\u2256',
  ecolon = '\u2255',
  Ecy = '\u042D',
  ecy = '\u044D',
  eDDot = '\u2A77',
  Edot = '\u0116',
  edot = '\u0117',
  eDot = '\u2251',
  ee = '\u2147',
  efDot = '\u2252',
  Efr = '\u{1D508}',
  efr = '\u{1D522}',
  eg = '\u2A9A',
  Egrave$1 = '\xC8',
  egrave$1 = '\xE8',
  egs = '\u2A96',
  egsdot = '\u2A98',
  el = '\u2A99',
  Element = '\u2208',
  elinters = '\u23E7',
  ell = '\u2113',
  els = '\u2A95',
  elsdot = '\u2A97',
  Emacr = '\u0112',
  emacr = '\u0113',
  empty = '\u2205',
  emptyset = '\u2205',
  EmptySmallSquare = '\u25FB',
  emptyv = '\u2205',
  EmptyVerySmallSquare = '\u25AB',
  emsp13 = '\u2004',
  emsp14 = '\u2005',
  emsp = '\u2003',
  ENG = '\u014A',
  eng = '\u014B',
  ensp = '\u2002',
  Eogon = '\u0118',
  eogon = '\u0119',
  Eopf = '\u{1D53C}',
  eopf = '\u{1D556}',
  epar = '\u22D5',
  eparsl = '\u29E3',
  eplus = '\u2A71',
  epsi = '\u03B5',
  Epsilon = '\u0395',
  epsilon = '\u03B5',
  epsiv = '\u03F5',
  eqcirc = '\u2256',
  eqcolon = '\u2255',
  eqsim = '\u2242',
  eqslantgtr = '\u2A96',
  eqslantless = '\u2A95',
  Equal = '\u2A75',
  equals = '=',
  EqualTilde = '\u2242',
  equest = '\u225F',
  Equilibrium = '\u21CC',
  equiv = '\u2261',
  equivDD = '\u2A78',
  eqvparsl = '\u29E5',
  erarr = '\u2971',
  erDot = '\u2253',
  escr = '\u212F',
  Escr = '\u2130',
  esdot = '\u2250',
  Esim = '\u2A73',
  esim = '\u2242',
  Eta = '\u0397',
  eta = '\u03B7',
  ETH$1 = '\xD0',
  eth$1 = '\xF0',
  Euml$1 = '\xCB',
  euml$1 = '\xEB',
  euro = '\u20AC',
  excl = '!',
  exist = '\u2203',
  Exists = '\u2203',
  expectation = '\u2130',
  exponentiale = '\u2147',
  ExponentialE = '\u2147',
  fallingdotseq = '\u2252',
  Fcy = '\u0424',
  fcy = '\u0444',
  female = '\u2640',
  ffilig = '\uFB03',
  fflig = '\uFB00',
  ffllig = '\uFB04',
  Ffr = '\u{1D509}',
  ffr = '\u{1D523}',
  filig = '\uFB01',
  FilledSmallSquare = '\u25FC',
  FilledVerySmallSquare = '\u25AA',
  fjlig = 'fj',
  flat = '\u266D',
  fllig = '\uFB02',
  fltns = '\u25B1',
  fnof = '\u0192',
  Fopf = '\u{1D53D}',
  fopf = '\u{1D557}',
  forall = '\u2200',
  ForAll = '\u2200',
  fork = '\u22D4',
  forkv = '\u2AD9',
  Fouriertrf = '\u2131',
  fpartint = '\u2A0D',
  frac12$1 = '\xBD',
  frac13 = '\u2153',
  frac14$1 = '\xBC',
  frac15 = '\u2155',
  frac16 = '\u2159',
  frac18 = '\u215B',
  frac23 = '\u2154',
  frac25 = '\u2156',
  frac34$1 = '\xBE',
  frac35 = '\u2157',
  frac38 = '\u215C',
  frac45 = '\u2158',
  frac56 = '\u215A',
  frac58 = '\u215D',
  frac78 = '\u215E',
  frasl = '\u2044',
  frown = '\u2322',
  fscr = '\u{1D4BB}',
  Fscr = '\u2131',
  gacute = '\u01F5',
  Gamma = '\u0393',
  gamma = '\u03B3',
  Gammad = '\u03DC',
  gammad = '\u03DD',
  gap = '\u2A86',
  Gbreve = '\u011E',
  gbreve = '\u011F',
  Gcedil = '\u0122',
  Gcirc = '\u011C',
  gcirc = '\u011D',
  Gcy = '\u0413',
  gcy = '\u0433',
  Gdot = '\u0120',
  gdot = '\u0121',
  ge = '\u2265',
  gE = '\u2267',
  gEl = '\u2A8C',
  gel = '\u22DB',
  geq = '\u2265',
  geqq = '\u2267',
  geqslant = '\u2A7E',
  gescc = '\u2AA9',
  ges = '\u2A7E',
  gesdot = '\u2A80',
  gesdoto = '\u2A82',
  gesdotol = '\u2A84',
  gesl = '\u22DB\uFE00',
  gesles = '\u2A94',
  Gfr = '\u{1D50A}',
  gfr = '\u{1D524}',
  gg = '\u226B',
  Gg = '\u22D9',
  ggg = '\u22D9',
  gimel = '\u2137',
  GJcy = '\u0403',
  gjcy = '\u0453',
  gla = '\u2AA5',
  gl = '\u2277',
  glE = '\u2A92',
  glj = '\u2AA4',
  gnap = '\u2A8A',
  gnapprox = '\u2A8A',
  gne = '\u2A88',
  gnE = '\u2269',
  gneq = '\u2A88',
  gneqq = '\u2269',
  gnsim = '\u22E7',
  Gopf = '\u{1D53E}',
  gopf = '\u{1D558}',
  grave = '`',
  GreaterEqual = '\u2265',
  GreaterEqualLess = '\u22DB',
  GreaterFullEqual = '\u2267',
  GreaterGreater = '\u2AA2',
  GreaterLess = '\u2277',
  GreaterSlantEqual = '\u2A7E',
  GreaterTilde = '\u2273',
  Gscr = '\u{1D4A2}',
  gscr = '\u210A',
  gsim = '\u2273',
  gsime = '\u2A8E',
  gsiml = '\u2A90',
  gtcc = '\u2AA7',
  gtcir = '\u2A7A',
  gt$2 = '>',
  GT$1 = '>',
  Gt = '\u226B',
  gtdot = '\u22D7',
  gtlPar = '\u2995',
  gtquest = '\u2A7C',
  gtrapprox = '\u2A86',
  gtrarr = '\u2978',
  gtrdot = '\u22D7',
  gtreqless = '\u22DB',
  gtreqqless = '\u2A8C',
  gtrless = '\u2277',
  gtrsim = '\u2273',
  gvertneqq = '\u2269\uFE00',
  gvnE = '\u2269\uFE00',
  Hacek = '\u02C7',
  hairsp = '\u200A',
  half = '\xBD',
  hamilt = '\u210B',
  HARDcy = '\u042A',
  hardcy = '\u044A',
  harrcir = '\u2948',
  harr = '\u2194',
  hArr = '\u21D4',
  harrw = '\u21AD',
  Hat = '^',
  hbar = '\u210F',
  Hcirc = '\u0124',
  hcirc = '\u0125',
  hearts = '\u2665',
  heartsuit = '\u2665',
  hellip = '\u2026',
  hercon = '\u22B9',
  hfr = '\u{1D525}',
  Hfr = '\u210C',
  HilbertSpace = '\u210B',
  hksearow = '\u2925',
  hkswarow = '\u2926',
  hoarr = '\u21FF',
  homtht = '\u223B',
  hookleftarrow = '\u21A9',
  hookrightarrow = '\u21AA',
  hopf = '\u{1D559}',
  Hopf = '\u210D',
  horbar = '\u2015',
  HorizontalLine = '\u2500',
  hscr = '\u{1D4BD}',
  Hscr = '\u210B',
  hslash = '\u210F',
  Hstrok = '\u0126',
  hstrok = '\u0127',
  HumpDownHump = '\u224E',
  HumpEqual = '\u224F',
  hybull = '\u2043',
  hyphen = '\u2010',
  Iacute$1 = '\xCD',
  iacute$1 = '\xED',
  ic = '\u2063',
  Icirc$1 = '\xCE',
  icirc$1 = '\xEE',
  Icy = '\u0418',
  icy = '\u0438',
  Idot = '\u0130',
  IEcy = '\u0415',
  iecy = '\u0435',
  iexcl$1 = '\xA1',
  iff = '\u21D4',
  ifr = '\u{1D526}',
  Ifr = '\u2111',
  Igrave$1 = '\xCC',
  igrave$1 = '\xEC',
  ii = '\u2148',
  iiiint = '\u2A0C',
  iiint = '\u222D',
  iinfin = '\u29DC',
  iiota = '\u2129',
  IJlig = '\u0132',
  ijlig = '\u0133',
  Imacr = '\u012A',
  imacr = '\u012B',
  image = '\u2111',
  ImaginaryI = '\u2148',
  imagline = '\u2110',
  imagpart = '\u2111',
  imath = '\u0131',
  Im = '\u2111',
  imof = '\u22B7',
  imped = '\u01B5',
  Implies = '\u21D2',
  incare = '\u2105',
  infin = '\u221E',
  infintie = '\u29DD',
  inodot = '\u0131',
  intcal = '\u22BA',
  int = '\u222B',
  Int = '\u222C',
  integers = '\u2124',
  Integral = '\u222B',
  intercal = '\u22BA',
  Intersection = '\u22C2',
  intlarhk = '\u2A17',
  intprod = '\u2A3C',
  InvisibleComma = '\u2063',
  InvisibleTimes = '\u2062',
  IOcy = '\u0401',
  iocy = '\u0451',
  Iogon = '\u012E',
  iogon = '\u012F',
  Iopf = '\u{1D540}',
  iopf = '\u{1D55A}',
  Iota = '\u0399',
  iota = '\u03B9',
  iprod = '\u2A3C',
  iquest$1 = '\xBF',
  iscr = '\u{1D4BE}',
  Iscr = '\u2110',
  isin = '\u2208',
  isindot = '\u22F5',
  isinE = '\u22F9',
  isins = '\u22F4',
  isinsv = '\u22F3',
  isinv = '\u2208',
  it = '\u2062',
  Itilde = '\u0128',
  itilde = '\u0129',
  Iukcy = '\u0406',
  iukcy = '\u0456',
  Iuml$1 = '\xCF',
  iuml$1 = '\xEF',
  Jcirc = '\u0134',
  jcirc = '\u0135',
  Jcy = '\u0419',
  jcy = '\u0439',
  Jfr = '\u{1D50D}',
  jfr = '\u{1D527}',
  jmath = '\u0237',
  Jopf = '\u{1D541}',
  jopf = '\u{1D55B}',
  Jscr = '\u{1D4A5}',
  jscr = '\u{1D4BF}',
  Jsercy = '\u0408',
  jsercy = '\u0458',
  Jukcy = '\u0404',
  jukcy = '\u0454',
  Kappa = '\u039A',
  kappa = '\u03BA',
  kappav = '\u03F0',
  Kcedil = '\u0136',
  kcedil = '\u0137',
  Kcy = '\u041A',
  kcy = '\u043A',
  Kfr = '\u{1D50E}',
  kfr = '\u{1D528}',
  kgreen = '\u0138',
  KHcy = '\u0425',
  khcy = '\u0445',
  KJcy = '\u040C',
  kjcy = '\u045C',
  Kopf = '\u{1D542}',
  kopf = '\u{1D55C}',
  Kscr = '\u{1D4A6}',
  kscr = '\u{1D4C0}',
  lAarr = '\u21DA',
  Lacute = '\u0139',
  lacute = '\u013A',
  laemptyv = '\u29B4',
  lagran = '\u2112',
  Lambda = '\u039B',
  lambda = '\u03BB',
  lang = '\u27E8',
  Lang = '\u27EA',
  langd = '\u2991',
  langle = '\u27E8',
  lap = '\u2A85',
  Laplacetrf = '\u2112',
  laquo$1 = '\xAB',
  larrb = '\u21E4',
  larrbfs = '\u291F',
  larr = '\u2190',
  Larr = '\u219E',
  lArr = '\u21D0',
  larrfs = '\u291D',
  larrhk = '\u21A9',
  larrlp = '\u21AB',
  larrpl = '\u2939',
  larrsim = '\u2973',
  larrtl = '\u21A2',
  latail = '\u2919',
  lAtail = '\u291B',
  lat = '\u2AAB',
  late = '\u2AAD',
  lates = '\u2AAD\uFE00',
  lbarr = '\u290C',
  lBarr = '\u290E',
  lbbrk = '\u2772',
  lbrace = '{',
  lbrack = '[',
  lbrke = '\u298B',
  lbrksld = '\u298F',
  lbrkslu = '\u298D',
  Lcaron = '\u013D',
  lcaron = '\u013E',
  Lcedil = '\u013B',
  lcedil = '\u013C',
  lceil = '\u2308',
  lcub = '{',
  Lcy = '\u041B',
  lcy = '\u043B',
  ldca = '\u2936',
  ldquo = '\u201C',
  ldquor = '\u201E',
  ldrdhar = '\u2967',
  ldrushar = '\u294B',
  ldsh = '\u21B2',
  le = '\u2264',
  lE = '\u2266',
  LeftAngleBracket = '\u27E8',
  LeftArrowBar = '\u21E4',
  leftarrow = '\u2190',
  LeftArrow = '\u2190',
  Leftarrow = '\u21D0',
  LeftArrowRightArrow = '\u21C6',
  leftarrowtail = '\u21A2',
  LeftCeiling = '\u2308',
  LeftDoubleBracket = '\u27E6',
  LeftDownTeeVector = '\u2961',
  LeftDownVectorBar = '\u2959',
  LeftDownVector = '\u21C3',
  LeftFloor = '\u230A',
  leftharpoondown = '\u21BD',
  leftharpoonup = '\u21BC',
  leftleftarrows = '\u21C7',
  leftrightarrow = '\u2194',
  LeftRightArrow = '\u2194',
  Leftrightarrow = '\u21D4',
  leftrightarrows = '\u21C6',
  leftrightharpoons = '\u21CB',
  leftrightsquigarrow = '\u21AD',
  LeftRightVector = '\u294E',
  LeftTeeArrow = '\u21A4',
  LeftTee = '\u22A3',
  LeftTeeVector = '\u295A',
  leftthreetimes = '\u22CB',
  LeftTriangleBar = '\u29CF',
  LeftTriangle = '\u22B2',
  LeftTriangleEqual = '\u22B4',
  LeftUpDownVector = '\u2951',
  LeftUpTeeVector = '\u2960',
  LeftUpVectorBar = '\u2958',
  LeftUpVector = '\u21BF',
  LeftVectorBar = '\u2952',
  LeftVector = '\u21BC',
  lEg = '\u2A8B',
  leg = '\u22DA',
  leq = '\u2264',
  leqq = '\u2266',
  leqslant = '\u2A7D',
  lescc = '\u2AA8',
  les = '\u2A7D',
  lesdot = '\u2A7F',
  lesdoto = '\u2A81',
  lesdotor = '\u2A83',
  lesg = '\u22DA\uFE00',
  lesges = '\u2A93',
  lessapprox = '\u2A85',
  lessdot = '\u22D6',
  lesseqgtr = '\u22DA',
  lesseqqgtr = '\u2A8B',
  LessEqualGreater = '\u22DA',
  LessFullEqual = '\u2266',
  LessGreater = '\u2276',
  lessgtr = '\u2276',
  LessLess = '\u2AA1',
  lesssim = '\u2272',
  LessSlantEqual = '\u2A7D',
  LessTilde = '\u2272',
  lfisht = '\u297C',
  lfloor = '\u230A',
  Lfr = '\u{1D50F}',
  lfr = '\u{1D529}',
  lg = '\u2276',
  lgE = '\u2A91',
  lHar = '\u2962',
  lhard = '\u21BD',
  lharu = '\u21BC',
  lharul = '\u296A',
  lhblk = '\u2584',
  LJcy = '\u0409',
  ljcy = '\u0459',
  llarr = '\u21C7',
  ll = '\u226A',
  Ll = '\u22D8',
  llcorner = '\u231E',
  Lleftarrow = '\u21DA',
  llhard = '\u296B',
  lltri = '\u25FA',
  Lmidot = '\u013F',
  lmidot = '\u0140',
  lmoustache = '\u23B0',
  lmoust = '\u23B0',
  lnap = '\u2A89',
  lnapprox = '\u2A89',
  lne = '\u2A87',
  lnE = '\u2268',
  lneq = '\u2A87',
  lneqq = '\u2268',
  lnsim = '\u22E6',
  loang = '\u27EC',
  loarr = '\u21FD',
  lobrk = '\u27E6',
  longleftarrow = '\u27F5',
  LongLeftArrow = '\u27F5',
  Longleftarrow = '\u27F8',
  longleftrightarrow = '\u27F7',
  LongLeftRightArrow = '\u27F7',
  Longleftrightarrow = '\u27FA',
  longmapsto = '\u27FC',
  longrightarrow = '\u27F6',
  LongRightArrow = '\u27F6',
  Longrightarrow = '\u27F9',
  looparrowleft = '\u21AB',
  looparrowright = '\u21AC',
  lopar = '\u2985',
  Lopf = '\u{1D543}',
  lopf = '\u{1D55D}',
  loplus = '\u2A2D',
  lotimes = '\u2A34',
  lowast = '\u2217',
  lowbar = '_',
  LowerLeftArrow = '\u2199',
  LowerRightArrow = '\u2198',
  loz = '\u25CA',
  lozenge = '\u25CA',
  lozf = '\u29EB',
  lpar = '(',
  lparlt = '\u2993',
  lrarr = '\u21C6',
  lrcorner = '\u231F',
  lrhar = '\u21CB',
  lrhard = '\u296D',
  lrm = '\u200E',
  lrtri = '\u22BF',
  lsaquo = '\u2039',
  lscr = '\u{1D4C1}',
  Lscr = '\u2112',
  lsh = '\u21B0',
  Lsh = '\u21B0',
  lsim = '\u2272',
  lsime = '\u2A8D',
  lsimg = '\u2A8F',
  lsqb = '[',
  lsquo = '\u2018',
  lsquor = '\u201A',
  Lstrok = '\u0141',
  lstrok = '\u0142',
  ltcc = '\u2AA6',
  ltcir = '\u2A79',
  lt$2 = '<',
  LT$1 = '<',
  Lt = '\u226A',
  ltdot = '\u22D6',
  lthree = '\u22CB',
  ltimes = '\u22C9',
  ltlarr = '\u2976',
  ltquest = '\u2A7B',
  ltri = '\u25C3',
  ltrie = '\u22B4',
  ltrif = '\u25C2',
  ltrPar = '\u2996',
  lurdshar = '\u294A',
  luruhar = '\u2966',
  lvertneqq = '\u2268\uFE00',
  lvnE = '\u2268\uFE00',
  macr$1 = '\xAF',
  male = '\u2642',
  malt = '\u2720',
  maltese = '\u2720',
  map = '\u21A6',
  mapsto = '\u21A6',
  mapstodown = '\u21A7',
  mapstoleft = '\u21A4',
  mapstoup = '\u21A5',
  marker = '\u25AE',
  mcomma = '\u2A29',
  Mcy = '\u041C',
  mcy = '\u043C',
  mdash = '\u2014',
  mDDot = '\u223A',
  measuredangle = '\u2221',
  MediumSpace = '\u205F',
  Mellintrf = '\u2133',
  Mfr = '\u{1D510}',
  mfr = '\u{1D52A}',
  mho = '\u2127',
  micro$1 = '\xB5',
  midast = '*',
  midcir = '\u2AF0',
  mid = '\u2223',
  middot$1 = '\xB7',
  minusb = '\u229F',
  minus = '\u2212',
  minusd = '\u2238',
  minusdu = '\u2A2A',
  MinusPlus = '\u2213',
  mlcp = '\u2ADB',
  mldr = '\u2026',
  mnplus = '\u2213',
  models = '\u22A7',
  Mopf = '\u{1D544}',
  mopf = '\u{1D55E}',
  mp = '\u2213',
  mscr = '\u{1D4C2}',
  Mscr = '\u2133',
  mstpos = '\u223E',
  Mu = '\u039C',
  mu = '\u03BC',
  multimap = '\u22B8',
  mumap = '\u22B8',
  nabla = '\u2207',
  Nacute = '\u0143',
  nacute = '\u0144',
  nang = '\u2220\u20D2',
  nap = '\u2249',
  napE = '\u2A70\u0338',
  napid = '\u224B\u0338',
  napos = '\u0149',
  napprox = '\u2249',
  natural = '\u266E',
  naturals = '\u2115',
  natur = '\u266E',
  nbsp$1 = '\xA0',
  nbump = '\u224E\u0338',
  nbumpe = '\u224F\u0338',
  ncap = '\u2A43',
  Ncaron = '\u0147',
  ncaron = '\u0148',
  Ncedil = '\u0145',
  ncedil = '\u0146',
  ncong = '\u2247',
  ncongdot = '\u2A6D\u0338',
  ncup = '\u2A42',
  Ncy = '\u041D',
  ncy = '\u043D',
  ndash = '\u2013',
  nearhk = '\u2924',
  nearr = '\u2197',
  neArr = '\u21D7',
  nearrow = '\u2197',
  ne = '\u2260',
  nedot = '\u2250\u0338',
  NegativeMediumSpace = '\u200B',
  NegativeThickSpace = '\u200B',
  NegativeThinSpace = '\u200B',
  NegativeVeryThinSpace = '\u200B',
  nequiv = '\u2262',
  nesear = '\u2928',
  nesim = '\u2242\u0338',
  NestedGreaterGreater = '\u226B',
  NestedLessLess = '\u226A',
  NewLine = `
`,
  nexist = '\u2204',
  nexists = '\u2204',
  Nfr = '\u{1D511}',
  nfr = '\u{1D52B}',
  ngE = '\u2267\u0338',
  nge = '\u2271',
  ngeq = '\u2271',
  ngeqq = '\u2267\u0338',
  ngeqslant = '\u2A7E\u0338',
  nges = '\u2A7E\u0338',
  nGg = '\u22D9\u0338',
  ngsim = '\u2275',
  nGt = '\u226B\u20D2',
  ngt = '\u226F',
  ngtr = '\u226F',
  nGtv = '\u226B\u0338',
  nharr = '\u21AE',
  nhArr = '\u21CE',
  nhpar = '\u2AF2',
  ni = '\u220B',
  nis = '\u22FC',
  nisd = '\u22FA',
  niv = '\u220B',
  NJcy = '\u040A',
  njcy = '\u045A',
  nlarr = '\u219A',
  nlArr = '\u21CD',
  nldr = '\u2025',
  nlE = '\u2266\u0338',
  nle = '\u2270',
  nleftarrow = '\u219A',
  nLeftarrow = '\u21CD',
  nleftrightarrow = '\u21AE',
  nLeftrightarrow = '\u21CE',
  nleq = '\u2270',
  nleqq = '\u2266\u0338',
  nleqslant = '\u2A7D\u0338',
  nles = '\u2A7D\u0338',
  nless = '\u226E',
  nLl = '\u22D8\u0338',
  nlsim = '\u2274',
  nLt = '\u226A\u20D2',
  nlt = '\u226E',
  nltri = '\u22EA',
  nltrie = '\u22EC',
  nLtv = '\u226A\u0338',
  nmid = '\u2224',
  NoBreak = '\u2060',
  NonBreakingSpace = '\xA0',
  nopf = '\u{1D55F}',
  Nopf = '\u2115',
  Not = '\u2AEC',
  not$1 = '\xAC',
  NotCongruent = '\u2262',
  NotCupCap = '\u226D',
  NotDoubleVerticalBar = '\u2226',
  NotElement = '\u2209',
  NotEqual = '\u2260',
  NotEqualTilde = '\u2242\u0338',
  NotExists = '\u2204',
  NotGreater = '\u226F',
  NotGreaterEqual = '\u2271',
  NotGreaterFullEqual = '\u2267\u0338',
  NotGreaterGreater = '\u226B\u0338',
  NotGreaterLess = '\u2279',
  NotGreaterSlantEqual = '\u2A7E\u0338',
  NotGreaterTilde = '\u2275',
  NotHumpDownHump = '\u224E\u0338',
  NotHumpEqual = '\u224F\u0338',
  notin = '\u2209',
  notindot = '\u22F5\u0338',
  notinE = '\u22F9\u0338',
  notinva = '\u2209',
  notinvb = '\u22F7',
  notinvc = '\u22F6',
  NotLeftTriangleBar = '\u29CF\u0338',
  NotLeftTriangle = '\u22EA',
  NotLeftTriangleEqual = '\u22EC',
  NotLess = '\u226E',
  NotLessEqual = '\u2270',
  NotLessGreater = '\u2278',
  NotLessLess = '\u226A\u0338',
  NotLessSlantEqual = '\u2A7D\u0338',
  NotLessTilde = '\u2274',
  NotNestedGreaterGreater = '\u2AA2\u0338',
  NotNestedLessLess = '\u2AA1\u0338',
  notni = '\u220C',
  notniva = '\u220C',
  notnivb = '\u22FE',
  notnivc = '\u22FD',
  NotPrecedes = '\u2280',
  NotPrecedesEqual = '\u2AAF\u0338',
  NotPrecedesSlantEqual = '\u22E0',
  NotReverseElement = '\u220C',
  NotRightTriangleBar = '\u29D0\u0338',
  NotRightTriangle = '\u22EB',
  NotRightTriangleEqual = '\u22ED',
  NotSquareSubset = '\u228F\u0338',
  NotSquareSubsetEqual = '\u22E2',
  NotSquareSuperset = '\u2290\u0338',
  NotSquareSupersetEqual = '\u22E3',
  NotSubset = '\u2282\u20D2',
  NotSubsetEqual = '\u2288',
  NotSucceeds = '\u2281',
  NotSucceedsEqual = '\u2AB0\u0338',
  NotSucceedsSlantEqual = '\u22E1',
  NotSucceedsTilde = '\u227F\u0338',
  NotSuperset = '\u2283\u20D2',
  NotSupersetEqual = '\u2289',
  NotTilde = '\u2241',
  NotTildeEqual = '\u2244',
  NotTildeFullEqual = '\u2247',
  NotTildeTilde = '\u2249',
  NotVerticalBar = '\u2224',
  nparallel = '\u2226',
  npar = '\u2226',
  nparsl = '\u2AFD\u20E5',
  npart = '\u2202\u0338',
  npolint = '\u2A14',
  npr = '\u2280',
  nprcue = '\u22E0',
  nprec = '\u2280',
  npreceq = '\u2AAF\u0338',
  npre = '\u2AAF\u0338',
  nrarrc = '\u2933\u0338',
  nrarr = '\u219B',
  nrArr = '\u21CF',
  nrarrw = '\u219D\u0338',
  nrightarrow = '\u219B',
  nRightarrow = '\u21CF',
  nrtri = '\u22EB',
  nrtrie = '\u22ED',
  nsc = '\u2281',
  nsccue = '\u22E1',
  nsce = '\u2AB0\u0338',
  Nscr = '\u{1D4A9}',
  nscr = '\u{1D4C3}',
  nshortmid = '\u2224',
  nshortparallel = '\u2226',
  nsim = '\u2241',
  nsime = '\u2244',
  nsimeq = '\u2244',
  nsmid = '\u2224',
  nspar = '\u2226',
  nsqsube = '\u22E2',
  nsqsupe = '\u22E3',
  nsub = '\u2284',
  nsubE = '\u2AC5\u0338',
  nsube = '\u2288',
  nsubset = '\u2282\u20D2',
  nsubseteq = '\u2288',
  nsubseteqq = '\u2AC5\u0338',
  nsucc = '\u2281',
  nsucceq = '\u2AB0\u0338',
  nsup = '\u2285',
  nsupE = '\u2AC6\u0338',
  nsupe = '\u2289',
  nsupset = '\u2283\u20D2',
  nsupseteq = '\u2289',
  nsupseteqq = '\u2AC6\u0338',
  ntgl = '\u2279',
  Ntilde$1 = '\xD1',
  ntilde$1 = '\xF1',
  ntlg = '\u2278',
  ntriangleleft = '\u22EA',
  ntrianglelefteq = '\u22EC',
  ntriangleright = '\u22EB',
  ntrianglerighteq = '\u22ED',
  Nu = '\u039D',
  nu = '\u03BD',
  num = '#',
  numero = '\u2116',
  numsp = '\u2007',
  nvap = '\u224D\u20D2',
  nvdash = '\u22AC',
  nvDash = '\u22AD',
  nVdash = '\u22AE',
  nVDash = '\u22AF',
  nvge = '\u2265\u20D2',
  nvgt = '>\u20D2',
  nvHarr = '\u2904',
  nvinfin = '\u29DE',
  nvlArr = '\u2902',
  nvle = '\u2264\u20D2',
  nvlt = '<\u20D2',
  nvltrie = '\u22B4\u20D2',
  nvrArr = '\u2903',
  nvrtrie = '\u22B5\u20D2',
  nvsim = '\u223C\u20D2',
  nwarhk = '\u2923',
  nwarr = '\u2196',
  nwArr = '\u21D6',
  nwarrow = '\u2196',
  nwnear = '\u2927',
  Oacute$1 = '\xD3',
  oacute$1 = '\xF3',
  oast = '\u229B',
  Ocirc$1 = '\xD4',
  ocirc$1 = '\xF4',
  ocir = '\u229A',
  Ocy = '\u041E',
  ocy = '\u043E',
  odash = '\u229D',
  Odblac = '\u0150',
  odblac = '\u0151',
  odiv = '\u2A38',
  odot = '\u2299',
  odsold = '\u29BC',
  OElig = '\u0152',
  oelig = '\u0153',
  ofcir = '\u29BF',
  Ofr = '\u{1D512}',
  ofr = '\u{1D52C}',
  ogon = '\u02DB',
  Ograve$1 = '\xD2',
  ograve$1 = '\xF2',
  ogt = '\u29C1',
  ohbar = '\u29B5',
  ohm = '\u03A9',
  oint = '\u222E',
  olarr = '\u21BA',
  olcir = '\u29BE',
  olcross = '\u29BB',
  oline = '\u203E',
  olt = '\u29C0',
  Omacr = '\u014C',
  omacr = '\u014D',
  Omega = '\u03A9',
  omega = '\u03C9',
  Omicron = '\u039F',
  omicron = '\u03BF',
  omid = '\u29B6',
  ominus = '\u2296',
  Oopf = '\u{1D546}',
  oopf = '\u{1D560}',
  opar = '\u29B7',
  OpenCurlyDoubleQuote = '\u201C',
  OpenCurlyQuote = '\u2018',
  operp = '\u29B9',
  oplus = '\u2295',
  orarr = '\u21BB',
  Or = '\u2A54',
  or = '\u2228',
  ord = '\u2A5D',
  order = '\u2134',
  orderof = '\u2134',
  ordf$1 = '\xAA',
  ordm$1 = '\xBA',
  origof = '\u22B6',
  oror = '\u2A56',
  orslope = '\u2A57',
  orv = '\u2A5B',
  oS = '\u24C8',
  Oscr = '\u{1D4AA}',
  oscr = '\u2134',
  Oslash$1 = '\xD8',
  oslash$1 = '\xF8',
  osol = '\u2298',
  Otilde$1 = '\xD5',
  otilde$1 = '\xF5',
  otimesas = '\u2A36',
  Otimes = '\u2A37',
  otimes = '\u2297',
  Ouml$1 = '\xD6',
  ouml$1 = '\xF6',
  ovbar = '\u233D',
  OverBar = '\u203E',
  OverBrace = '\u23DE',
  OverBracket = '\u23B4',
  OverParenthesis = '\u23DC',
  para$1 = '\xB6',
  parallel = '\u2225',
  par = '\u2225',
  parsim = '\u2AF3',
  parsl = '\u2AFD',
  part = '\u2202',
  PartialD = '\u2202',
  Pcy = '\u041F',
  pcy = '\u043F',
  percnt = '%',
  period = '.',
  permil = '\u2030',
  perp = '\u22A5',
  pertenk = '\u2031',
  Pfr = '\u{1D513}',
  pfr = '\u{1D52D}',
  Phi = '\u03A6',
  phi = '\u03C6',
  phiv = '\u03D5',
  phmmat = '\u2133',
  phone = '\u260E',
  Pi = '\u03A0',
  pi = '\u03C0',
  pitchfork = '\u22D4',
  piv = '\u03D6',
  planck = '\u210F',
  planckh = '\u210E',
  plankv = '\u210F',
  plusacir = '\u2A23',
  plusb = '\u229E',
  pluscir = '\u2A22',
  plus = '+',
  plusdo = '\u2214',
  plusdu = '\u2A25',
  pluse = '\u2A72',
  PlusMinus = '\xB1',
  plusmn$1 = '\xB1',
  plussim = '\u2A26',
  plustwo = '\u2A27',
  pm = '\xB1',
  Poincareplane = '\u210C',
  pointint = '\u2A15',
  popf = '\u{1D561}',
  Popf = '\u2119',
  pound$1 = '\xA3',
  prap = '\u2AB7',
  Pr = '\u2ABB',
  pr = '\u227A',
  prcue = '\u227C',
  precapprox = '\u2AB7',
  prec = '\u227A',
  preccurlyeq = '\u227C',
  Precedes = '\u227A',
  PrecedesEqual = '\u2AAF',
  PrecedesSlantEqual = '\u227C',
  PrecedesTilde = '\u227E',
  preceq = '\u2AAF',
  precnapprox = '\u2AB9',
  precneqq = '\u2AB5',
  precnsim = '\u22E8',
  pre = '\u2AAF',
  prE = '\u2AB3',
  precsim = '\u227E',
  prime = '\u2032',
  Prime = '\u2033',
  primes = '\u2119',
  prnap = '\u2AB9',
  prnE = '\u2AB5',
  prnsim = '\u22E8',
  prod = '\u220F',
  Product = '\u220F',
  profalar = '\u232E',
  profline = '\u2312',
  profsurf = '\u2313',
  prop = '\u221D',
  Proportional = '\u221D',
  Proportion = '\u2237',
  propto = '\u221D',
  prsim = '\u227E',
  prurel = '\u22B0',
  Pscr = '\u{1D4AB}',
  pscr = '\u{1D4C5}',
  Psi = '\u03A8',
  psi = '\u03C8',
  puncsp = '\u2008',
  Qfr = '\u{1D514}',
  qfr = '\u{1D52E}',
  qint = '\u2A0C',
  qopf = '\u{1D562}',
  Qopf = '\u211A',
  qprime = '\u2057',
  Qscr = '\u{1D4AC}',
  qscr = '\u{1D4C6}',
  quaternions = '\u210D',
  quatint = '\u2A16',
  quest = '?',
  questeq = '\u225F',
  quot$2 = '"',
  QUOT$1 = '"',
  rAarr = '\u21DB',
  race = '\u223D\u0331',
  Racute = '\u0154',
  racute = '\u0155',
  radic = '\u221A',
  raemptyv = '\u29B3',
  rang = '\u27E9',
  Rang = '\u27EB',
  rangd = '\u2992',
  range$1 = '\u29A5',
  rangle = '\u27E9',
  raquo$1 = '\xBB',
  rarrap = '\u2975',
  rarrb = '\u21E5',
  rarrbfs = '\u2920',
  rarrc = '\u2933',
  rarr = '\u2192',
  Rarr = '\u21A0',
  rArr = '\u21D2',
  rarrfs = '\u291E',
  rarrhk = '\u21AA',
  rarrlp = '\u21AC',
  rarrpl = '\u2945',
  rarrsim = '\u2974',
  Rarrtl = '\u2916',
  rarrtl = '\u21A3',
  rarrw = '\u219D',
  ratail = '\u291A',
  rAtail = '\u291C',
  ratio = '\u2236',
  rationals = '\u211A',
  rbarr = '\u290D',
  rBarr = '\u290F',
  RBarr = '\u2910',
  rbbrk = '\u2773',
  rbrace = '}',
  rbrack = ']',
  rbrke = '\u298C',
  rbrksld = '\u298E',
  rbrkslu = '\u2990',
  Rcaron = '\u0158',
  rcaron = '\u0159',
  Rcedil = '\u0156',
  rcedil = '\u0157',
  rceil = '\u2309',
  rcub = '}',
  Rcy = '\u0420',
  rcy = '\u0440',
  rdca = '\u2937',
  rdldhar = '\u2969',
  rdquo = '\u201D',
  rdquor = '\u201D',
  rdsh = '\u21B3',
  real = '\u211C',
  realine = '\u211B',
  realpart = '\u211C',
  reals = '\u211D',
  Re = '\u211C',
  rect = '\u25AD',
  reg$1 = '\xAE',
  REG$1 = '\xAE',
  ReverseElement = '\u220B',
  ReverseEquilibrium = '\u21CB',
  ReverseUpEquilibrium = '\u296F',
  rfisht = '\u297D',
  rfloor = '\u230B',
  rfr = '\u{1D52F}',
  Rfr = '\u211C',
  rHar = '\u2964',
  rhard = '\u21C1',
  rharu = '\u21C0',
  rharul = '\u296C',
  Rho = '\u03A1',
  rho = '\u03C1',
  rhov = '\u03F1',
  RightAngleBracket = '\u27E9',
  RightArrowBar = '\u21E5',
  rightarrow = '\u2192',
  RightArrow = '\u2192',
  Rightarrow = '\u21D2',
  RightArrowLeftArrow = '\u21C4',
  rightarrowtail = '\u21A3',
  RightCeiling = '\u2309',
  RightDoubleBracket = '\u27E7',
  RightDownTeeVector = '\u295D',
  RightDownVectorBar = '\u2955',
  RightDownVector = '\u21C2',
  RightFloor = '\u230B',
  rightharpoondown = '\u21C1',
  rightharpoonup = '\u21C0',
  rightleftarrows = '\u21C4',
  rightleftharpoons = '\u21CC',
  rightrightarrows = '\u21C9',
  rightsquigarrow = '\u219D',
  RightTeeArrow = '\u21A6',
  RightTee = '\u22A2',
  RightTeeVector = '\u295B',
  rightthreetimes = '\u22CC',
  RightTriangleBar = '\u29D0',
  RightTriangle = '\u22B3',
  RightTriangleEqual = '\u22B5',
  RightUpDownVector = '\u294F',
  RightUpTeeVector = '\u295C',
  RightUpVectorBar = '\u2954',
  RightUpVector = '\u21BE',
  RightVectorBar = '\u2953',
  RightVector = '\u21C0',
  ring = '\u02DA',
  risingdotseq = '\u2253',
  rlarr = '\u21C4',
  rlhar = '\u21CC',
  rlm = '\u200F',
  rmoustache = '\u23B1',
  rmoust = '\u23B1',
  rnmid = '\u2AEE',
  roang = '\u27ED',
  roarr = '\u21FE',
  robrk = '\u27E7',
  ropar = '\u2986',
  ropf = '\u{1D563}',
  Ropf = '\u211D',
  roplus = '\u2A2E',
  rotimes = '\u2A35',
  RoundImplies = '\u2970',
  rpar = ')',
  rpargt = '\u2994',
  rppolint = '\u2A12',
  rrarr = '\u21C9',
  Rrightarrow = '\u21DB',
  rsaquo = '\u203A',
  rscr = '\u{1D4C7}',
  Rscr = '\u211B',
  rsh = '\u21B1',
  Rsh = '\u21B1',
  rsqb = ']',
  rsquo = '\u2019',
  rsquor = '\u2019',
  rthree = '\u22CC',
  rtimes = '\u22CA',
  rtri = '\u25B9',
  rtrie = '\u22B5',
  rtrif = '\u25B8',
  rtriltri = '\u29CE',
  RuleDelayed = '\u29F4',
  ruluhar = '\u2968',
  rx = '\u211E',
  Sacute = '\u015A',
  sacute = '\u015B',
  sbquo = '\u201A',
  scap = '\u2AB8',
  Scaron = '\u0160',
  scaron = '\u0161',
  Sc = '\u2ABC',
  sc = '\u227B',
  sccue = '\u227D',
  sce = '\u2AB0',
  scE = '\u2AB4',
  Scedil = '\u015E',
  scedil = '\u015F',
  Scirc = '\u015C',
  scirc = '\u015D',
  scnap = '\u2ABA',
  scnE = '\u2AB6',
  scnsim = '\u22E9',
  scpolint = '\u2A13',
  scsim = '\u227F',
  Scy = '\u0421',
  scy = '\u0441',
  sdotb = '\u22A1',
  sdot = '\u22C5',
  sdote = '\u2A66',
  searhk = '\u2925',
  searr = '\u2198',
  seArr = '\u21D8',
  searrow = '\u2198',
  sect$1 = '\xA7',
  semi = ';',
  seswar = '\u2929',
  setminus = '\u2216',
  setmn = '\u2216',
  sext = '\u2736',
  Sfr = '\u{1D516}',
  sfr = '\u{1D530}',
  sfrown = '\u2322',
  sharp = '\u266F',
  SHCHcy = '\u0429',
  shchcy = '\u0449',
  SHcy = '\u0428',
  shcy = '\u0448',
  ShortDownArrow = '\u2193',
  ShortLeftArrow = '\u2190',
  shortmid = '\u2223',
  shortparallel = '\u2225',
  ShortRightArrow = '\u2192',
  ShortUpArrow = '\u2191',
  shy$1 = '\xAD',
  Sigma = '\u03A3',
  sigma = '\u03C3',
  sigmaf = '\u03C2',
  sigmav = '\u03C2',
  sim = '\u223C',
  simdot = '\u2A6A',
  sime = '\u2243',
  simeq = '\u2243',
  simg = '\u2A9E',
  simgE = '\u2AA0',
  siml = '\u2A9D',
  simlE = '\u2A9F',
  simne = '\u2246',
  simplus = '\u2A24',
  simrarr = '\u2972',
  slarr = '\u2190',
  SmallCircle = '\u2218',
  smallsetminus = '\u2216',
  smashp = '\u2A33',
  smeparsl = '\u29E4',
  smid = '\u2223',
  smile = '\u2323',
  smt = '\u2AAA',
  smte = '\u2AAC',
  smtes = '\u2AAC\uFE00',
  SOFTcy = '\u042C',
  softcy = '\u044C',
  solbar = '\u233F',
  solb = '\u29C4',
  sol = '/',
  Sopf = '\u{1D54A}',
  sopf = '\u{1D564}',
  spades = '\u2660',
  spadesuit = '\u2660',
  spar = '\u2225',
  sqcap = '\u2293',
  sqcaps = '\u2293\uFE00',
  sqcup = '\u2294',
  sqcups = '\u2294\uFE00',
  Sqrt = '\u221A',
  sqsub = '\u228F',
  sqsube = '\u2291',
  sqsubset = '\u228F',
  sqsubseteq = '\u2291',
  sqsup = '\u2290',
  sqsupe = '\u2292',
  sqsupset = '\u2290',
  sqsupseteq = '\u2292',
  square = '\u25A1',
  Square = '\u25A1',
  SquareIntersection = '\u2293',
  SquareSubset = '\u228F',
  SquareSubsetEqual = '\u2291',
  SquareSuperset = '\u2290',
  SquareSupersetEqual = '\u2292',
  SquareUnion = '\u2294',
  squarf = '\u25AA',
  squ = '\u25A1',
  squf = '\u25AA',
  srarr = '\u2192',
  Sscr = '\u{1D4AE}',
  sscr = '\u{1D4C8}',
  ssetmn = '\u2216',
  ssmile = '\u2323',
  sstarf = '\u22C6',
  Star = '\u22C6',
  star = '\u2606',
  starf = '\u2605',
  straightepsilon = '\u03F5',
  straightphi = '\u03D5',
  strns = '\xAF',
  sub = '\u2282',
  Sub = '\u22D0',
  subdot = '\u2ABD',
  subE = '\u2AC5',
  sube = '\u2286',
  subedot = '\u2AC3',
  submult = '\u2AC1',
  subnE = '\u2ACB',
  subne = '\u228A',
  subplus = '\u2ABF',
  subrarr = '\u2979',
  subset = '\u2282',
  Subset = '\u22D0',
  subseteq = '\u2286',
  subseteqq = '\u2AC5',
  SubsetEqual = '\u2286',
  subsetneq = '\u228A',
  subsetneqq = '\u2ACB',
  subsim = '\u2AC7',
  subsub = '\u2AD5',
  subsup = '\u2AD3',
  succapprox = '\u2AB8',
  succ = '\u227B',
  succcurlyeq = '\u227D',
  Succeeds = '\u227B',
  SucceedsEqual = '\u2AB0',
  SucceedsSlantEqual = '\u227D',
  SucceedsTilde = '\u227F',
  succeq = '\u2AB0',
  succnapprox = '\u2ABA',
  succneqq = '\u2AB6',
  succnsim = '\u22E9',
  succsim = '\u227F',
  SuchThat = '\u220B',
  sum = '\u2211',
  Sum = '\u2211',
  sung = '\u266A',
  sup1$1 = '\xB9',
  sup2$1 = '\xB2',
  sup3$1 = '\xB3',
  sup = '\u2283',
  Sup = '\u22D1',
  supdot = '\u2ABE',
  supdsub = '\u2AD8',
  supE = '\u2AC6',
  supe = '\u2287',
  supedot = '\u2AC4',
  Superset = '\u2283',
  SupersetEqual = '\u2287',
  suphsol = '\u27C9',
  suphsub = '\u2AD7',
  suplarr = '\u297B',
  supmult = '\u2AC2',
  supnE = '\u2ACC',
  supne = '\u228B',
  supplus = '\u2AC0',
  supset = '\u2283',
  Supset = '\u22D1',
  supseteq = '\u2287',
  supseteqq = '\u2AC6',
  supsetneq = '\u228B',
  supsetneqq = '\u2ACC',
  supsim = '\u2AC8',
  supsub = '\u2AD4',
  supsup = '\u2AD6',
  swarhk = '\u2926',
  swarr = '\u2199',
  swArr = '\u21D9',
  swarrow = '\u2199',
  swnwar = '\u292A',
  szlig$1 = '\xDF',
  Tab = '	',
  target = '\u2316',
  Tau = '\u03A4',
  tau = '\u03C4',
  tbrk = '\u23B4',
  Tcaron = '\u0164',
  tcaron = '\u0165',
  Tcedil = '\u0162',
  tcedil = '\u0163',
  Tcy = '\u0422',
  tcy = '\u0442',
  tdot = '\u20DB',
  telrec = '\u2315',
  Tfr = '\u{1D517}',
  tfr = '\u{1D531}',
  there4 = '\u2234',
  therefore = '\u2234',
  Therefore = '\u2234',
  Theta = '\u0398',
  theta = '\u03B8',
  thetasym = '\u03D1',
  thetav = '\u03D1',
  thickapprox = '\u2248',
  thicksim = '\u223C',
  ThickSpace = '\u205F\u200A',
  ThinSpace = '\u2009',
  thinsp = '\u2009',
  thkap = '\u2248',
  thksim = '\u223C',
  THORN$1 = '\xDE',
  thorn$1 = '\xFE',
  tilde = '\u02DC',
  Tilde = '\u223C',
  TildeEqual = '\u2243',
  TildeFullEqual = '\u2245',
  TildeTilde = '\u2248',
  timesbar = '\u2A31',
  timesb = '\u22A0',
  times$1 = '\xD7',
  timesd = '\u2A30',
  tint = '\u222D',
  toea = '\u2928',
  topbot = '\u2336',
  topcir = '\u2AF1',
  top = '\u22A4',
  Topf = '\u{1D54B}',
  topf = '\u{1D565}',
  topfork = '\u2ADA',
  tosa = '\u2929',
  tprime = '\u2034',
  trade = '\u2122',
  TRADE = '\u2122',
  triangle = '\u25B5',
  triangledown = '\u25BF',
  triangleleft = '\u25C3',
  trianglelefteq = '\u22B4',
  triangleq = '\u225C',
  triangleright = '\u25B9',
  trianglerighteq = '\u22B5',
  tridot = '\u25EC',
  trie = '\u225C',
  triminus = '\u2A3A',
  TripleDot = '\u20DB',
  triplus = '\u2A39',
  trisb = '\u29CD',
  tritime = '\u2A3B',
  trpezium = '\u23E2',
  Tscr = '\u{1D4AF}',
  tscr = '\u{1D4C9}',
  TScy = '\u0426',
  tscy = '\u0446',
  TSHcy = '\u040B',
  tshcy = '\u045B',
  Tstrok = '\u0166',
  tstrok = '\u0167',
  twixt = '\u226C',
  twoheadleftarrow = '\u219E',
  twoheadrightarrow = '\u21A0',
  Uacute$1 = '\xDA',
  uacute$1 = '\xFA',
  uarr = '\u2191',
  Uarr = '\u219F',
  uArr = '\u21D1',
  Uarrocir = '\u2949',
  Ubrcy = '\u040E',
  ubrcy = '\u045E',
  Ubreve = '\u016C',
  ubreve = '\u016D',
  Ucirc$1 = '\xDB',
  ucirc$1 = '\xFB',
  Ucy = '\u0423',
  ucy = '\u0443',
  udarr = '\u21C5',
  Udblac = '\u0170',
  udblac = '\u0171',
  udhar = '\u296E',
  ufisht = '\u297E',
  Ufr = '\u{1D518}',
  ufr = '\u{1D532}',
  Ugrave$1 = '\xD9',
  ugrave$1 = '\xF9',
  uHar = '\u2963',
  uharl = '\u21BF',
  uharr = '\u21BE',
  uhblk = '\u2580',
  ulcorn = '\u231C',
  ulcorner = '\u231C',
  ulcrop = '\u230F',
  ultri = '\u25F8',
  Umacr = '\u016A',
  umacr = '\u016B',
  uml$1 = '\xA8',
  UnderBar = '_',
  UnderBrace = '\u23DF',
  UnderBracket = '\u23B5',
  UnderParenthesis = '\u23DD',
  Union = '\u22C3',
  UnionPlus = '\u228E',
  Uogon = '\u0172',
  uogon = '\u0173',
  Uopf = '\u{1D54C}',
  uopf = '\u{1D566}',
  UpArrowBar = '\u2912',
  uparrow = '\u2191',
  UpArrow = '\u2191',
  Uparrow = '\u21D1',
  UpArrowDownArrow = '\u21C5',
  updownarrow = '\u2195',
  UpDownArrow = '\u2195',
  Updownarrow = '\u21D5',
  UpEquilibrium = '\u296E',
  upharpoonleft = '\u21BF',
  upharpoonright = '\u21BE',
  uplus = '\u228E',
  UpperLeftArrow = '\u2196',
  UpperRightArrow = '\u2197',
  upsi = '\u03C5',
  Upsi = '\u03D2',
  upsih = '\u03D2',
  Upsilon = '\u03A5',
  upsilon = '\u03C5',
  UpTeeArrow = '\u21A5',
  UpTee = '\u22A5',
  upuparrows = '\u21C8',
  urcorn = '\u231D',
  urcorner = '\u231D',
  urcrop = '\u230E',
  Uring = '\u016E',
  uring = '\u016F',
  urtri = '\u25F9',
  Uscr = '\u{1D4B0}',
  uscr = '\u{1D4CA}',
  utdot = '\u22F0',
  Utilde = '\u0168',
  utilde = '\u0169',
  utri = '\u25B5',
  utrif = '\u25B4',
  uuarr = '\u21C8',
  Uuml$1 = '\xDC',
  uuml$1 = '\xFC',
  uwangle = '\u29A7',
  vangrt = '\u299C',
  varepsilon = '\u03F5',
  varkappa = '\u03F0',
  varnothing = '\u2205',
  varphi = '\u03D5',
  varpi = '\u03D6',
  varpropto = '\u221D',
  varr = '\u2195',
  vArr = '\u21D5',
  varrho = '\u03F1',
  varsigma = '\u03C2',
  varsubsetneq = '\u228A\uFE00',
  varsubsetneqq = '\u2ACB\uFE00',
  varsupsetneq = '\u228B\uFE00',
  varsupsetneqq = '\u2ACC\uFE00',
  vartheta = '\u03D1',
  vartriangleleft = '\u22B2',
  vartriangleright = '\u22B3',
  vBar = '\u2AE8',
  Vbar = '\u2AEB',
  vBarv = '\u2AE9',
  Vcy = '\u0412',
  vcy = '\u0432',
  vdash = '\u22A2',
  vDash = '\u22A8',
  Vdash = '\u22A9',
  VDash = '\u22AB',
  Vdashl = '\u2AE6',
  veebar = '\u22BB',
  vee = '\u2228',
  Vee = '\u22C1',
  veeeq = '\u225A',
  vellip = '\u22EE',
  verbar = '|',
  Verbar = '\u2016',
  vert = '|',
  Vert = '\u2016',
  VerticalBar = '\u2223',
  VerticalLine = '|',
  VerticalSeparator = '\u2758',
  VerticalTilde = '\u2240',
  VeryThinSpace = '\u200A',
  Vfr = '\u{1D519}',
  vfr = '\u{1D533}',
  vltri = '\u22B2',
  vnsub = '\u2282\u20D2',
  vnsup = '\u2283\u20D2',
  Vopf = '\u{1D54D}',
  vopf = '\u{1D567}',
  vprop = '\u221D',
  vrtri = '\u22B3',
  Vscr = '\u{1D4B1}',
  vscr = '\u{1D4CB}',
  vsubnE = '\u2ACB\uFE00',
  vsubne = '\u228A\uFE00',
  vsupnE = '\u2ACC\uFE00',
  vsupne = '\u228B\uFE00',
  Vvdash = '\u22AA',
  vzigzag = '\u299A',
  Wcirc = '\u0174',
  wcirc = '\u0175',
  wedbar = '\u2A5F',
  wedge = '\u2227',
  Wedge = '\u22C0',
  wedgeq = '\u2259',
  weierp = '\u2118',
  Wfr = '\u{1D51A}',
  wfr = '\u{1D534}',
  Wopf = '\u{1D54E}',
  wopf = '\u{1D568}',
  wp = '\u2118',
  wr = '\u2240',
  wreath = '\u2240',
  Wscr = '\u{1D4B2}',
  wscr = '\u{1D4CC}',
  xcap = '\u22C2',
  xcirc = '\u25EF',
  xcup = '\u22C3',
  xdtri = '\u25BD',
  Xfr = '\u{1D51B}',
  xfr = '\u{1D535}',
  xharr = '\u27F7',
  xhArr = '\u27FA',
  Xi = '\u039E',
  xi = '\u03BE',
  xlarr = '\u27F5',
  xlArr = '\u27F8',
  xmap = '\u27FC',
  xnis = '\u22FB',
  xodot = '\u2A00',
  Xopf = '\u{1D54F}',
  xopf = '\u{1D569}',
  xoplus = '\u2A01',
  xotime = '\u2A02',
  xrarr = '\u27F6',
  xrArr = '\u27F9',
  Xscr = '\u{1D4B3}',
  xscr = '\u{1D4CD}',
  xsqcup = '\u2A06',
  xuplus = '\u2A04',
  xutri = '\u25B3',
  xvee = '\u22C1',
  xwedge = '\u22C0',
  Yacute$1 = '\xDD',
  yacute$1 = '\xFD',
  YAcy = '\u042F',
  yacy = '\u044F',
  Ycirc = '\u0176',
  ycirc = '\u0177',
  Ycy = '\u042B',
  ycy = '\u044B',
  yen$1 = '\xA5',
  Yfr = '\u{1D51C}',
  yfr = '\u{1D536}',
  YIcy = '\u0407',
  yicy = '\u0457',
  Yopf = '\u{1D550}',
  yopf = '\u{1D56A}',
  Yscr = '\u{1D4B4}',
  yscr = '\u{1D4CE}',
  YUcy = '\u042E',
  yucy = '\u044E',
  yuml$1 = '\xFF',
  Yuml = '\u0178',
  Zacute = '\u0179',
  zacute = '\u017A',
  Zcaron = '\u017D',
  zcaron = '\u017E',
  Zcy = '\u0417',
  zcy = '\u0437',
  Zdot = '\u017B',
  zdot = '\u017C',
  zeetrf = '\u2128',
  ZeroWidthSpace = '\u200B',
  Zeta = '\u0396',
  zeta = '\u03B6',
  zfr = '\u{1D537}',
  Zfr = '\u2128',
  ZHcy = '\u0416',
  zhcy = '\u0436',
  zigrarr = '\u21DD',
  zopf = '\u{1D56B}',
  Zopf = '\u2124',
  Zscr = '\u{1D4B5}',
  zscr = '\u{1D4CF}',
  zwj = '\u200D',
  zwnj = '\u200C';
var require$$1$1 = {
  Aacute: Aacute$1,
  aacute: aacute$1,
  Abreve,
  abreve,
  ac,
  acd,
  acE,
  Acirc: Acirc$1,
  acirc: acirc$1,
  acute: acute$1,
  Acy,
  acy,
  AElig: AElig$1,
  aelig: aelig$1,
  af,
  Afr,
  afr,
  Agrave: Agrave$1,
  agrave: agrave$1,
  alefsym,
  aleph,
  Alpha,
  alpha,
  Amacr,
  amacr,
  amalg,
  amp: amp$2,
  AMP: AMP$1,
  andand,
  And,
  and,
  andd,
  andslope,
  andv,
  ang,
  ange,
  angle,
  angmsdaa,
  angmsdab,
  angmsdac,
  angmsdad,
  angmsdae,
  angmsdaf,
  angmsdag,
  angmsdah,
  angmsd,
  angrt,
  angrtvb,
  angrtvbd,
  angsph,
  angst,
  angzarr,
  Aogon,
  aogon,
  Aopf,
  aopf,
  apacir,
  ap,
  apE,
  ape,
  apid,
  apos: apos$1,
  ApplyFunction,
  approx,
  approxeq,
  Aring: Aring$1,
  aring: aring$1,
  Ascr,
  ascr,
  Assign,
  ast,
  asymp,
  asympeq,
  Atilde: Atilde$1,
  atilde: atilde$1,
  Auml: Auml$1,
  auml: auml$1,
  awconint,
  awint,
  backcong,
  backepsilon,
  backprime,
  backsim,
  backsimeq,
  Backslash,
  Barv,
  barvee,
  barwed,
  Barwed,
  barwedge,
  bbrk,
  bbrktbrk,
  bcong,
  Bcy,
  bcy,
  bdquo,
  becaus,
  because,
  Because,
  bemptyv,
  bepsi,
  bernou,
  Bernoullis,
  Beta,
  beta,
  beth,
  between,
  Bfr,
  bfr,
  bigcap,
  bigcirc,
  bigcup,
  bigodot,
  bigoplus,
  bigotimes,
  bigsqcup,
  bigstar,
  bigtriangledown,
  bigtriangleup,
  biguplus,
  bigvee,
  bigwedge,
  bkarow,
  blacklozenge,
  blacksquare,
  blacktriangle,
  blacktriangledown,
  blacktriangleleft,
  blacktriangleright,
  blank,
  blk12,
  blk14,
  blk34,
  block,
  bne,
  bnequiv,
  bNot,
  bnot,
  Bopf,
  bopf,
  bot,
  bottom,
  bowtie,
  boxbox,
  boxdl,
  boxdL,
  boxDl,
  boxDL,
  boxdr,
  boxdR,
  boxDr,
  boxDR,
  boxh,
  boxH,
  boxhd,
  boxHd,
  boxhD,
  boxHD,
  boxhu,
  boxHu,
  boxhU,
  boxHU,
  boxminus,
  boxplus,
  boxtimes,
  boxul,
  boxuL,
  boxUl,
  boxUL,
  boxur,
  boxuR,
  boxUr,
  boxUR,
  boxv,
  boxV,
  boxvh,
  boxvH,
  boxVh,
  boxVH,
  boxvl,
  boxvL,
  boxVl,
  boxVL,
  boxvr,
  boxvR,
  boxVr,
  boxVR,
  bprime,
  breve,
  Breve,
  brvbar: brvbar$1,
  bscr,
  Bscr,
  bsemi,
  bsim,
  bsime,
  bsolb,
  bsol,
  bsolhsub,
  bull,
  bullet,
  bump,
  bumpE,
  bumpe,
  Bumpeq,
  bumpeq,
  Cacute,
  cacute,
  capand,
  capbrcup,
  capcap,
  cap,
  Cap,
  capcup,
  capdot,
  CapitalDifferentialD,
  caps,
  caret,
  caron,
  Cayleys,
  ccaps,
  Ccaron,
  ccaron,
  Ccedil: Ccedil$1,
  ccedil: ccedil$1,
  Ccirc,
  ccirc,
  Cconint,
  ccups,
  ccupssm,
  Cdot,
  cdot,
  cedil: cedil$1,
  Cedilla,
  cemptyv,
  cent: cent$1,
  centerdot,
  CenterDot,
  cfr,
  Cfr,
  CHcy,
  chcy,
  check,
  checkmark,
  Chi,
  chi,
  circ,
  circeq,
  circlearrowleft,
  circlearrowright,
  circledast,
  circledcirc,
  circleddash,
  CircleDot,
  circledR,
  circledS,
  CircleMinus,
  CirclePlus,
  CircleTimes,
  cir,
  cirE,
  cire,
  cirfnint,
  cirmid,
  cirscir,
  ClockwiseContourIntegral,
  CloseCurlyDoubleQuote,
  CloseCurlyQuote,
  clubs,
  clubsuit,
  colon,
  Colon,
  Colone,
  colone,
  coloneq,
  comma,
  commat,
  comp,
  compfn,
  complement,
  complexes,
  cong,
  congdot,
  Congruent,
  conint,
  Conint,
  ContourIntegral,
  copf,
  Copf,
  coprod,
  Coproduct,
  copy: copy$1,
  COPY: COPY$1,
  copysr,
  CounterClockwiseContourIntegral,
  crarr,
  cross,
  Cross,
  Cscr,
  cscr,
  csub,
  csube,
  csup,
  csupe,
  ctdot,
  cudarrl,
  cudarrr,
  cuepr,
  cuesc,
  cularr,
  cularrp,
  cupbrcap,
  cupcap,
  CupCap,
  cup,
  Cup,
  cupcup,
  cupdot,
  cupor,
  cups,
  curarr,
  curarrm,
  curlyeqprec,
  curlyeqsucc,
  curlyvee,
  curlywedge,
  curren: curren$1,
  curvearrowleft,
  curvearrowright,
  cuvee,
  cuwed,
  cwconint,
  cwint,
  cylcty,
  dagger,
  Dagger,
  daleth,
  darr,
  Darr,
  dArr,
  dash,
  Dashv,
  dashv,
  dbkarow,
  dblac,
  Dcaron,
  dcaron,
  Dcy,
  dcy,
  ddagger,
  ddarr,
  DD,
  dd,
  DDotrahd,
  ddotseq,
  deg: deg$1,
  Del,
  Delta,
  delta,
  demptyv,
  dfisht,
  Dfr,
  dfr,
  dHar,
  dharl,
  dharr,
  DiacriticalAcute,
  DiacriticalDot,
  DiacriticalDoubleAcute,
  DiacriticalGrave,
  DiacriticalTilde,
  diam,
  diamond,
  Diamond,
  diamondsuit,
  diams,
  die,
  DifferentialD,
  digamma,
  disin,
  div,
  divide: divide$1,
  divideontimes,
  divonx,
  DJcy,
  djcy,
  dlcorn,
  dlcrop,
  dollar,
  Dopf,
  dopf,
  Dot,
  dot,
  DotDot,
  doteq,
  doteqdot,
  DotEqual,
  dotminus,
  dotplus,
  dotsquare,
  doublebarwedge,
  DoubleContourIntegral,
  DoubleDot,
  DoubleDownArrow,
  DoubleLeftArrow,
  DoubleLeftRightArrow,
  DoubleLeftTee,
  DoubleLongLeftArrow,
  DoubleLongLeftRightArrow,
  DoubleLongRightArrow,
  DoubleRightArrow,
  DoubleRightTee,
  DoubleUpArrow,
  DoubleUpDownArrow,
  DoubleVerticalBar,
  DownArrowBar,
  downarrow,
  DownArrow,
  Downarrow,
  DownArrowUpArrow,
  DownBreve,
  downdownarrows,
  downharpoonleft,
  downharpoonright,
  DownLeftRightVector,
  DownLeftTeeVector,
  DownLeftVectorBar,
  DownLeftVector,
  DownRightTeeVector,
  DownRightVectorBar,
  DownRightVector,
  DownTeeArrow,
  DownTee,
  drbkarow,
  drcorn,
  drcrop,
  Dscr,
  dscr,
  DScy,
  dscy,
  dsol,
  Dstrok,
  dstrok,
  dtdot,
  dtri,
  dtrif,
  duarr,
  duhar,
  dwangle,
  DZcy,
  dzcy,
  dzigrarr,
  Eacute: Eacute$1,
  eacute: eacute$1,
  easter,
  Ecaron,
  ecaron,
  Ecirc: Ecirc$1,
  ecirc: ecirc$1,
  ecir,
  ecolon,
  Ecy,
  ecy,
  eDDot,
  Edot,
  edot,
  eDot,
  ee,
  efDot,
  Efr,
  efr,
  eg,
  Egrave: Egrave$1,
  egrave: egrave$1,
  egs,
  egsdot,
  el,
  Element,
  elinters,
  ell,
  els,
  elsdot,
  Emacr,
  emacr,
  empty,
  emptyset,
  EmptySmallSquare,
  emptyv,
  EmptyVerySmallSquare,
  emsp13,
  emsp14,
  emsp,
  ENG,
  eng,
  ensp,
  Eogon,
  eogon,
  Eopf,
  eopf,
  epar,
  eparsl,
  eplus,
  epsi,
  Epsilon,
  epsilon,
  epsiv,
  eqcirc,
  eqcolon,
  eqsim,
  eqslantgtr,
  eqslantless,
  Equal,
  equals,
  EqualTilde,
  equest,
  Equilibrium,
  equiv,
  equivDD,
  eqvparsl,
  erarr,
  erDot,
  escr,
  Escr,
  esdot,
  Esim,
  esim,
  Eta,
  eta,
  ETH: ETH$1,
  eth: eth$1,
  Euml: Euml$1,
  euml: euml$1,
  euro,
  excl,
  exist,
  Exists,
  expectation,
  exponentiale,
  ExponentialE,
  fallingdotseq,
  Fcy,
  fcy,
  female,
  ffilig,
  fflig,
  ffllig,
  Ffr,
  ffr,
  filig,
  FilledSmallSquare,
  FilledVerySmallSquare,
  fjlig,
  flat,
  fllig,
  fltns,
  fnof,
  Fopf,
  fopf,
  forall,
  ForAll,
  fork,
  forkv,
  Fouriertrf,
  fpartint,
  frac12: frac12$1,
  frac13,
  frac14: frac14$1,
  frac15,
  frac16,
  frac18,
  frac23,
  frac25,
  frac34: frac34$1,
  frac35,
  frac38,
  frac45,
  frac56,
  frac58,
  frac78,
  frasl,
  frown,
  fscr,
  Fscr,
  gacute,
  Gamma,
  gamma,
  Gammad,
  gammad,
  gap,
  Gbreve,
  gbreve,
  Gcedil,
  Gcirc,
  gcirc,
  Gcy,
  gcy,
  Gdot,
  gdot,
  ge,
  gE,
  gEl,
  gel,
  geq,
  geqq,
  geqslant,
  gescc,
  ges,
  gesdot,
  gesdoto,
  gesdotol,
  gesl,
  gesles,
  Gfr,
  gfr,
  gg,
  Gg,
  ggg,
  gimel,
  GJcy,
  gjcy,
  gla,
  gl,
  glE,
  glj,
  gnap,
  gnapprox,
  gne,
  gnE,
  gneq,
  gneqq,
  gnsim,
  Gopf,
  gopf,
  grave,
  GreaterEqual,
  GreaterEqualLess,
  GreaterFullEqual,
  GreaterGreater,
  GreaterLess,
  GreaterSlantEqual,
  GreaterTilde,
  Gscr,
  gscr,
  gsim,
  gsime,
  gsiml,
  gtcc,
  gtcir,
  gt: gt$2,
  GT: GT$1,
  Gt,
  gtdot,
  gtlPar,
  gtquest,
  gtrapprox,
  gtrarr,
  gtrdot,
  gtreqless,
  gtreqqless,
  gtrless,
  gtrsim,
  gvertneqq,
  gvnE,
  Hacek,
  hairsp,
  half,
  hamilt,
  HARDcy,
  hardcy,
  harrcir,
  harr,
  hArr,
  harrw,
  Hat,
  hbar,
  Hcirc,
  hcirc,
  hearts,
  heartsuit,
  hellip,
  hercon,
  hfr,
  Hfr,
  HilbertSpace,
  hksearow,
  hkswarow,
  hoarr,
  homtht,
  hookleftarrow,
  hookrightarrow,
  hopf,
  Hopf,
  horbar,
  HorizontalLine,
  hscr,
  Hscr,
  hslash,
  Hstrok,
  hstrok,
  HumpDownHump,
  HumpEqual,
  hybull,
  hyphen,
  Iacute: Iacute$1,
  iacute: iacute$1,
  ic,
  Icirc: Icirc$1,
  icirc: icirc$1,
  Icy,
  icy,
  Idot,
  IEcy,
  iecy,
  iexcl: iexcl$1,
  iff,
  ifr,
  Ifr,
  Igrave: Igrave$1,
  igrave: igrave$1,
  ii,
  iiiint,
  iiint,
  iinfin,
  iiota,
  IJlig,
  ijlig,
  Imacr,
  imacr,
  image,
  ImaginaryI,
  imagline,
  imagpart,
  imath,
  Im,
  imof,
  imped,
  Implies,
  incare,
  in: '\u2208',
  infin,
  infintie,
  inodot,
  intcal,
  int,
  Int,
  integers,
  Integral,
  intercal,
  Intersection,
  intlarhk,
  intprod,
  InvisibleComma,
  InvisibleTimes,
  IOcy,
  iocy,
  Iogon,
  iogon,
  Iopf,
  iopf,
  Iota,
  iota,
  iprod,
  iquest: iquest$1,
  iscr,
  Iscr,
  isin,
  isindot,
  isinE,
  isins,
  isinsv,
  isinv,
  it,
  Itilde,
  itilde,
  Iukcy,
  iukcy,
  Iuml: Iuml$1,
  iuml: iuml$1,
  Jcirc,
  jcirc,
  Jcy,
  jcy,
  Jfr,
  jfr,
  jmath,
  Jopf,
  jopf,
  Jscr,
  jscr,
  Jsercy,
  jsercy,
  Jukcy,
  jukcy,
  Kappa,
  kappa,
  kappav,
  Kcedil,
  kcedil,
  Kcy,
  kcy,
  Kfr,
  kfr,
  kgreen,
  KHcy,
  khcy,
  KJcy,
  kjcy,
  Kopf,
  kopf,
  Kscr,
  kscr,
  lAarr,
  Lacute,
  lacute,
  laemptyv,
  lagran,
  Lambda,
  lambda,
  lang,
  Lang,
  langd,
  langle,
  lap,
  Laplacetrf,
  laquo: laquo$1,
  larrb,
  larrbfs,
  larr,
  Larr,
  lArr,
  larrfs,
  larrhk,
  larrlp,
  larrpl,
  larrsim,
  larrtl,
  latail,
  lAtail,
  lat,
  late,
  lates,
  lbarr,
  lBarr,
  lbbrk,
  lbrace,
  lbrack,
  lbrke,
  lbrksld,
  lbrkslu,
  Lcaron,
  lcaron,
  Lcedil,
  lcedil,
  lceil,
  lcub,
  Lcy,
  lcy,
  ldca,
  ldquo,
  ldquor,
  ldrdhar,
  ldrushar,
  ldsh,
  le,
  lE,
  LeftAngleBracket,
  LeftArrowBar,
  leftarrow,
  LeftArrow,
  Leftarrow,
  LeftArrowRightArrow,
  leftarrowtail,
  LeftCeiling,
  LeftDoubleBracket,
  LeftDownTeeVector,
  LeftDownVectorBar,
  LeftDownVector,
  LeftFloor,
  leftharpoondown,
  leftharpoonup,
  leftleftarrows,
  leftrightarrow,
  LeftRightArrow,
  Leftrightarrow,
  leftrightarrows,
  leftrightharpoons,
  leftrightsquigarrow,
  LeftRightVector,
  LeftTeeArrow,
  LeftTee,
  LeftTeeVector,
  leftthreetimes,
  LeftTriangleBar,
  LeftTriangle,
  LeftTriangleEqual,
  LeftUpDownVector,
  LeftUpTeeVector,
  LeftUpVectorBar,
  LeftUpVector,
  LeftVectorBar,
  LeftVector,
  lEg,
  leg,
  leq,
  leqq,
  leqslant,
  lescc,
  les,
  lesdot,
  lesdoto,
  lesdotor,
  lesg,
  lesges,
  lessapprox,
  lessdot,
  lesseqgtr,
  lesseqqgtr,
  LessEqualGreater,
  LessFullEqual,
  LessGreater,
  lessgtr,
  LessLess,
  lesssim,
  LessSlantEqual,
  LessTilde,
  lfisht,
  lfloor,
  Lfr,
  lfr,
  lg,
  lgE,
  lHar,
  lhard,
  lharu,
  lharul,
  lhblk,
  LJcy,
  ljcy,
  llarr,
  ll,
  Ll,
  llcorner,
  Lleftarrow,
  llhard,
  lltri,
  Lmidot,
  lmidot,
  lmoustache,
  lmoust,
  lnap,
  lnapprox,
  lne,
  lnE,
  lneq,
  lneqq,
  lnsim,
  loang,
  loarr,
  lobrk,
  longleftarrow,
  LongLeftArrow,
  Longleftarrow,
  longleftrightarrow,
  LongLeftRightArrow,
  Longleftrightarrow,
  longmapsto,
  longrightarrow,
  LongRightArrow,
  Longrightarrow,
  looparrowleft,
  looparrowright,
  lopar,
  Lopf,
  lopf,
  loplus,
  lotimes,
  lowast,
  lowbar,
  LowerLeftArrow,
  LowerRightArrow,
  loz,
  lozenge,
  lozf,
  lpar,
  lparlt,
  lrarr,
  lrcorner,
  lrhar,
  lrhard,
  lrm,
  lrtri,
  lsaquo,
  lscr,
  Lscr,
  lsh,
  Lsh,
  lsim,
  lsime,
  lsimg,
  lsqb,
  lsquo,
  lsquor,
  Lstrok,
  lstrok,
  ltcc,
  ltcir,
  lt: lt$2,
  LT: LT$1,
  Lt,
  ltdot,
  lthree,
  ltimes,
  ltlarr,
  ltquest,
  ltri,
  ltrie,
  ltrif,
  ltrPar,
  lurdshar,
  luruhar,
  lvertneqq,
  lvnE,
  macr: macr$1,
  male,
  malt,
  maltese,
  Map: '\u2905',
  map,
  mapsto,
  mapstodown,
  mapstoleft,
  mapstoup,
  marker,
  mcomma,
  Mcy,
  mcy,
  mdash,
  mDDot,
  measuredangle,
  MediumSpace,
  Mellintrf,
  Mfr,
  mfr,
  mho,
  micro: micro$1,
  midast,
  midcir,
  mid,
  middot: middot$1,
  minusb,
  minus,
  minusd,
  minusdu,
  MinusPlus,
  mlcp,
  mldr,
  mnplus,
  models,
  Mopf,
  mopf,
  mp,
  mscr,
  Mscr,
  mstpos,
  Mu,
  mu,
  multimap,
  mumap,
  nabla,
  Nacute,
  nacute,
  nang,
  nap,
  napE,
  napid,
  napos,
  napprox,
  natural,
  naturals,
  natur,
  nbsp: nbsp$1,
  nbump,
  nbumpe,
  ncap,
  Ncaron,
  ncaron,
  Ncedil,
  ncedil,
  ncong,
  ncongdot,
  ncup,
  Ncy,
  ncy,
  ndash,
  nearhk,
  nearr,
  neArr,
  nearrow,
  ne,
  nedot,
  NegativeMediumSpace,
  NegativeThickSpace,
  NegativeThinSpace,
  NegativeVeryThinSpace,
  nequiv,
  nesear,
  nesim,
  NestedGreaterGreater,
  NestedLessLess,
  NewLine,
  nexist,
  nexists,
  Nfr,
  nfr,
  ngE,
  nge,
  ngeq,
  ngeqq,
  ngeqslant,
  nges,
  nGg,
  ngsim,
  nGt,
  ngt,
  ngtr,
  nGtv,
  nharr,
  nhArr,
  nhpar,
  ni,
  nis,
  nisd,
  niv,
  NJcy,
  njcy,
  nlarr,
  nlArr,
  nldr,
  nlE,
  nle,
  nleftarrow,
  nLeftarrow,
  nleftrightarrow,
  nLeftrightarrow,
  nleq,
  nleqq,
  nleqslant,
  nles,
  nless,
  nLl,
  nlsim,
  nLt,
  nlt,
  nltri,
  nltrie,
  nLtv,
  nmid,
  NoBreak,
  NonBreakingSpace,
  nopf,
  Nopf,
  Not,
  not: not$1,
  NotCongruent,
  NotCupCap,
  NotDoubleVerticalBar,
  NotElement,
  NotEqual,
  NotEqualTilde,
  NotExists,
  NotGreater,
  NotGreaterEqual,
  NotGreaterFullEqual,
  NotGreaterGreater,
  NotGreaterLess,
  NotGreaterSlantEqual,
  NotGreaterTilde,
  NotHumpDownHump,
  NotHumpEqual,
  notin,
  notindot,
  notinE,
  notinva,
  notinvb,
  notinvc,
  NotLeftTriangleBar,
  NotLeftTriangle,
  NotLeftTriangleEqual,
  NotLess,
  NotLessEqual,
  NotLessGreater,
  NotLessLess,
  NotLessSlantEqual,
  NotLessTilde,
  NotNestedGreaterGreater,
  NotNestedLessLess,
  notni,
  notniva,
  notnivb,
  notnivc,
  NotPrecedes,
  NotPrecedesEqual,
  NotPrecedesSlantEqual,
  NotReverseElement,
  NotRightTriangleBar,
  NotRightTriangle,
  NotRightTriangleEqual,
  NotSquareSubset,
  NotSquareSubsetEqual,
  NotSquareSuperset,
  NotSquareSupersetEqual,
  NotSubset,
  NotSubsetEqual,
  NotSucceeds,
  NotSucceedsEqual,
  NotSucceedsSlantEqual,
  NotSucceedsTilde,
  NotSuperset,
  NotSupersetEqual,
  NotTilde,
  NotTildeEqual,
  NotTildeFullEqual,
  NotTildeTilde,
  NotVerticalBar,
  nparallel,
  npar,
  nparsl,
  npart,
  npolint,
  npr,
  nprcue,
  nprec,
  npreceq,
  npre,
  nrarrc,
  nrarr,
  nrArr,
  nrarrw,
  nrightarrow,
  nRightarrow,
  nrtri,
  nrtrie,
  nsc,
  nsccue,
  nsce,
  Nscr,
  nscr,
  nshortmid,
  nshortparallel,
  nsim,
  nsime,
  nsimeq,
  nsmid,
  nspar,
  nsqsube,
  nsqsupe,
  nsub,
  nsubE,
  nsube,
  nsubset,
  nsubseteq,
  nsubseteqq,
  nsucc,
  nsucceq,
  nsup,
  nsupE,
  nsupe,
  nsupset,
  nsupseteq,
  nsupseteqq,
  ntgl,
  Ntilde: Ntilde$1,
  ntilde: ntilde$1,
  ntlg,
  ntriangleleft,
  ntrianglelefteq,
  ntriangleright,
  ntrianglerighteq,
  Nu,
  nu,
  num,
  numero,
  numsp,
  nvap,
  nvdash,
  nvDash,
  nVdash,
  nVDash,
  nvge,
  nvgt,
  nvHarr,
  nvinfin,
  nvlArr,
  nvle,
  nvlt,
  nvltrie,
  nvrArr,
  nvrtrie,
  nvsim,
  nwarhk,
  nwarr,
  nwArr,
  nwarrow,
  nwnear,
  Oacute: Oacute$1,
  oacute: oacute$1,
  oast,
  Ocirc: Ocirc$1,
  ocirc: ocirc$1,
  ocir,
  Ocy,
  ocy,
  odash,
  Odblac,
  odblac,
  odiv,
  odot,
  odsold,
  OElig,
  oelig,
  ofcir,
  Ofr,
  ofr,
  ogon,
  Ograve: Ograve$1,
  ograve: ograve$1,
  ogt,
  ohbar,
  ohm,
  oint,
  olarr,
  olcir,
  olcross,
  oline,
  olt,
  Omacr,
  omacr,
  Omega,
  omega,
  Omicron,
  omicron,
  omid,
  ominus,
  Oopf,
  oopf,
  opar,
  OpenCurlyDoubleQuote,
  OpenCurlyQuote,
  operp,
  oplus,
  orarr,
  Or,
  or,
  ord,
  order,
  orderof,
  ordf: ordf$1,
  ordm: ordm$1,
  origof,
  oror,
  orslope,
  orv,
  oS,
  Oscr,
  oscr,
  Oslash: Oslash$1,
  oslash: oslash$1,
  osol,
  Otilde: Otilde$1,
  otilde: otilde$1,
  otimesas,
  Otimes,
  otimes,
  Ouml: Ouml$1,
  ouml: ouml$1,
  ovbar,
  OverBar,
  OverBrace,
  OverBracket,
  OverParenthesis,
  para: para$1,
  parallel,
  par,
  parsim,
  parsl,
  part,
  PartialD,
  Pcy,
  pcy,
  percnt,
  period,
  permil,
  perp,
  pertenk,
  Pfr,
  pfr,
  Phi,
  phi,
  phiv,
  phmmat,
  phone,
  Pi,
  pi,
  pitchfork,
  piv,
  planck,
  planckh,
  plankv,
  plusacir,
  plusb,
  pluscir,
  plus,
  plusdo,
  plusdu,
  pluse,
  PlusMinus,
  plusmn: plusmn$1,
  plussim,
  plustwo,
  pm,
  Poincareplane,
  pointint,
  popf,
  Popf,
  pound: pound$1,
  prap,
  Pr,
  pr,
  prcue,
  precapprox,
  prec,
  preccurlyeq,
  Precedes,
  PrecedesEqual,
  PrecedesSlantEqual,
  PrecedesTilde,
  preceq,
  precnapprox,
  precneqq,
  precnsim,
  pre,
  prE,
  precsim,
  prime,
  Prime,
  primes,
  prnap,
  prnE,
  prnsim,
  prod,
  Product,
  profalar,
  profline,
  profsurf,
  prop,
  Proportional,
  Proportion,
  propto,
  prsim,
  prurel,
  Pscr,
  pscr,
  Psi,
  psi,
  puncsp,
  Qfr,
  qfr,
  qint,
  qopf,
  Qopf,
  qprime,
  Qscr,
  qscr,
  quaternions,
  quatint,
  quest,
  questeq,
  quot: quot$2,
  QUOT: QUOT$1,
  rAarr,
  race,
  Racute,
  racute,
  radic,
  raemptyv,
  rang,
  Rang,
  rangd,
  range: range$1,
  rangle,
  raquo: raquo$1,
  rarrap,
  rarrb,
  rarrbfs,
  rarrc,
  rarr,
  Rarr,
  rArr,
  rarrfs,
  rarrhk,
  rarrlp,
  rarrpl,
  rarrsim,
  Rarrtl,
  rarrtl,
  rarrw,
  ratail,
  rAtail,
  ratio,
  rationals,
  rbarr,
  rBarr,
  RBarr,
  rbbrk,
  rbrace,
  rbrack,
  rbrke,
  rbrksld,
  rbrkslu,
  Rcaron,
  rcaron,
  Rcedil,
  rcedil,
  rceil,
  rcub,
  Rcy,
  rcy,
  rdca,
  rdldhar,
  rdquo,
  rdquor,
  rdsh,
  real,
  realine,
  realpart,
  reals,
  Re,
  rect,
  reg: reg$1,
  REG: REG$1,
  ReverseElement,
  ReverseEquilibrium,
  ReverseUpEquilibrium,
  rfisht,
  rfloor,
  rfr,
  Rfr,
  rHar,
  rhard,
  rharu,
  rharul,
  Rho,
  rho,
  rhov,
  RightAngleBracket,
  RightArrowBar,
  rightarrow,
  RightArrow,
  Rightarrow,
  RightArrowLeftArrow,
  rightarrowtail,
  RightCeiling,
  RightDoubleBracket,
  RightDownTeeVector,
  RightDownVectorBar,
  RightDownVector,
  RightFloor,
  rightharpoondown,
  rightharpoonup,
  rightleftarrows,
  rightleftharpoons,
  rightrightarrows,
  rightsquigarrow,
  RightTeeArrow,
  RightTee,
  RightTeeVector,
  rightthreetimes,
  RightTriangleBar,
  RightTriangle,
  RightTriangleEqual,
  RightUpDownVector,
  RightUpTeeVector,
  RightUpVectorBar,
  RightUpVector,
  RightVectorBar,
  RightVector,
  ring,
  risingdotseq,
  rlarr,
  rlhar,
  rlm,
  rmoustache,
  rmoust,
  rnmid,
  roang,
  roarr,
  robrk,
  ropar,
  ropf,
  Ropf,
  roplus,
  rotimes,
  RoundImplies,
  rpar,
  rpargt,
  rppolint,
  rrarr,
  Rrightarrow,
  rsaquo,
  rscr,
  Rscr,
  rsh,
  Rsh,
  rsqb,
  rsquo,
  rsquor,
  rthree,
  rtimes,
  rtri,
  rtrie,
  rtrif,
  rtriltri,
  RuleDelayed,
  ruluhar,
  rx,
  Sacute,
  sacute,
  sbquo,
  scap,
  Scaron,
  scaron,
  Sc,
  sc,
  sccue,
  sce,
  scE,
  Scedil,
  scedil,
  Scirc,
  scirc,
  scnap,
  scnE,
  scnsim,
  scpolint,
  scsim,
  Scy,
  scy,
  sdotb,
  sdot,
  sdote,
  searhk,
  searr,
  seArr,
  searrow,
  sect: sect$1,
  semi,
  seswar,
  setminus,
  setmn,
  sext,
  Sfr,
  sfr,
  sfrown,
  sharp,
  SHCHcy,
  shchcy,
  SHcy,
  shcy,
  ShortDownArrow,
  ShortLeftArrow,
  shortmid,
  shortparallel,
  ShortRightArrow,
  ShortUpArrow,
  shy: shy$1,
  Sigma,
  sigma,
  sigmaf,
  sigmav,
  sim,
  simdot,
  sime,
  simeq,
  simg,
  simgE,
  siml,
  simlE,
  simne,
  simplus,
  simrarr,
  slarr,
  SmallCircle,
  smallsetminus,
  smashp,
  smeparsl,
  smid,
  smile,
  smt,
  smte,
  smtes,
  SOFTcy,
  softcy,
  solbar,
  solb,
  sol,
  Sopf,
  sopf,
  spades,
  spadesuit,
  spar,
  sqcap,
  sqcaps,
  sqcup,
  sqcups,
  Sqrt,
  sqsub,
  sqsube,
  sqsubset,
  sqsubseteq,
  sqsup,
  sqsupe,
  sqsupset,
  sqsupseteq,
  square,
  Square,
  SquareIntersection,
  SquareSubset,
  SquareSubsetEqual,
  SquareSuperset,
  SquareSupersetEqual,
  SquareUnion,
  squarf,
  squ,
  squf,
  srarr,
  Sscr,
  sscr,
  ssetmn,
  ssmile,
  sstarf,
  Star,
  star,
  starf,
  straightepsilon,
  straightphi,
  strns,
  sub,
  Sub,
  subdot,
  subE,
  sube,
  subedot,
  submult,
  subnE,
  subne,
  subplus,
  subrarr,
  subset,
  Subset,
  subseteq,
  subseteqq,
  SubsetEqual,
  subsetneq,
  subsetneqq,
  subsim,
  subsub,
  subsup,
  succapprox,
  succ,
  succcurlyeq,
  Succeeds,
  SucceedsEqual,
  SucceedsSlantEqual,
  SucceedsTilde,
  succeq,
  succnapprox,
  succneqq,
  succnsim,
  succsim,
  SuchThat,
  sum,
  Sum,
  sung,
  sup1: sup1$1,
  sup2: sup2$1,
  sup3: sup3$1,
  sup,
  Sup,
  supdot,
  supdsub,
  supE,
  supe,
  supedot,
  Superset,
  SupersetEqual,
  suphsol,
  suphsub,
  suplarr,
  supmult,
  supnE,
  supne,
  supplus,
  supset,
  Supset,
  supseteq,
  supseteqq,
  supsetneq,
  supsetneqq,
  supsim,
  supsub,
  supsup,
  swarhk,
  swarr,
  swArr,
  swarrow,
  swnwar,
  szlig: szlig$1,
  Tab,
  target,
  Tau,
  tau,
  tbrk,
  Tcaron,
  tcaron,
  Tcedil,
  tcedil,
  Tcy,
  tcy,
  tdot,
  telrec,
  Tfr,
  tfr,
  there4,
  therefore,
  Therefore,
  Theta,
  theta,
  thetasym,
  thetav,
  thickapprox,
  thicksim,
  ThickSpace,
  ThinSpace,
  thinsp,
  thkap,
  thksim,
  THORN: THORN$1,
  thorn: thorn$1,
  tilde,
  Tilde,
  TildeEqual,
  TildeFullEqual,
  TildeTilde,
  timesbar,
  timesb,
  times: times$1,
  timesd,
  tint,
  toea,
  topbot,
  topcir,
  top,
  Topf,
  topf,
  topfork,
  tosa,
  tprime,
  trade,
  TRADE,
  triangle,
  triangledown,
  triangleleft,
  trianglelefteq,
  triangleq,
  triangleright,
  trianglerighteq,
  tridot,
  trie,
  triminus,
  TripleDot,
  triplus,
  trisb,
  tritime,
  trpezium,
  Tscr,
  tscr,
  TScy,
  tscy,
  TSHcy,
  tshcy,
  Tstrok,
  tstrok,
  twixt,
  twoheadleftarrow,
  twoheadrightarrow,
  Uacute: Uacute$1,
  uacute: uacute$1,
  uarr,
  Uarr,
  uArr,
  Uarrocir,
  Ubrcy,
  ubrcy,
  Ubreve,
  ubreve,
  Ucirc: Ucirc$1,
  ucirc: ucirc$1,
  Ucy,
  ucy,
  udarr,
  Udblac,
  udblac,
  udhar,
  ufisht,
  Ufr,
  ufr,
  Ugrave: Ugrave$1,
  ugrave: ugrave$1,
  uHar,
  uharl,
  uharr,
  uhblk,
  ulcorn,
  ulcorner,
  ulcrop,
  ultri,
  Umacr,
  umacr,
  uml: uml$1,
  UnderBar,
  UnderBrace,
  UnderBracket,
  UnderParenthesis,
  Union,
  UnionPlus,
  Uogon,
  uogon,
  Uopf,
  uopf,
  UpArrowBar,
  uparrow,
  UpArrow,
  Uparrow,
  UpArrowDownArrow,
  updownarrow,
  UpDownArrow,
  Updownarrow,
  UpEquilibrium,
  upharpoonleft,
  upharpoonright,
  uplus,
  UpperLeftArrow,
  UpperRightArrow,
  upsi,
  Upsi,
  upsih,
  Upsilon,
  upsilon,
  UpTeeArrow,
  UpTee,
  upuparrows,
  urcorn,
  urcorner,
  urcrop,
  Uring,
  uring,
  urtri,
  Uscr,
  uscr,
  utdot,
  Utilde,
  utilde,
  utri,
  utrif,
  uuarr,
  Uuml: Uuml$1,
  uuml: uuml$1,
  uwangle,
  vangrt,
  varepsilon,
  varkappa,
  varnothing,
  varphi,
  varpi,
  varpropto,
  varr,
  vArr,
  varrho,
  varsigma,
  varsubsetneq,
  varsubsetneqq,
  varsupsetneq,
  varsupsetneqq,
  vartheta,
  vartriangleleft,
  vartriangleright,
  vBar,
  Vbar,
  vBarv,
  Vcy,
  vcy,
  vdash,
  vDash,
  Vdash,
  VDash,
  Vdashl,
  veebar,
  vee,
  Vee,
  veeeq,
  vellip,
  verbar,
  Verbar,
  vert,
  Vert,
  VerticalBar,
  VerticalLine,
  VerticalSeparator,
  VerticalTilde,
  VeryThinSpace,
  Vfr,
  vfr,
  vltri,
  vnsub,
  vnsup,
  Vopf,
  vopf,
  vprop,
  vrtri,
  Vscr,
  vscr,
  vsubnE,
  vsubne,
  vsupnE,
  vsupne,
  Vvdash,
  vzigzag,
  Wcirc,
  wcirc,
  wedbar,
  wedge,
  Wedge,
  wedgeq,
  weierp,
  Wfr,
  wfr,
  Wopf,
  wopf,
  wp,
  wr,
  wreath,
  Wscr,
  wscr,
  xcap,
  xcirc,
  xcup,
  xdtri,
  Xfr,
  xfr,
  xharr,
  xhArr,
  Xi,
  xi,
  xlarr,
  xlArr,
  xmap,
  xnis,
  xodot,
  Xopf,
  xopf,
  xoplus,
  xotime,
  xrarr,
  xrArr,
  Xscr,
  xscr,
  xsqcup,
  xuplus,
  xutri,
  xvee,
  xwedge,
  Yacute: Yacute$1,
  yacute: yacute$1,
  YAcy,
  yacy,
  Ycirc,
  ycirc,
  Ycy,
  ycy,
  yen: yen$1,
  Yfr,
  yfr,
  YIcy,
  yicy,
  Yopf,
  yopf,
  Yscr,
  yscr,
  YUcy,
  yucy,
  yuml: yuml$1,
  Yuml,
  Zacute,
  zacute,
  Zcaron,
  zcaron,
  Zcy,
  zcy,
  Zdot,
  zdot,
  zeetrf,
  ZeroWidthSpace,
  Zeta,
  zeta,
  zfr,
  Zfr,
  ZHcy,
  zhcy,
  zigrarr,
  zopf,
  Zopf,
  Zscr,
  zscr,
  zwj,
  zwnj
};
const Aacute = '\xC1',
  aacute = '\xE1',
  Acirc = '\xC2',
  acirc = '\xE2',
  acute = '\xB4',
  AElig = '\xC6',
  aelig = '\xE6',
  Agrave = '\xC0',
  agrave = '\xE0',
  amp$1 = '&',
  AMP = '&',
  Aring = '\xC5',
  aring = '\xE5',
  Atilde = '\xC3',
  atilde = '\xE3',
  Auml = '\xC4',
  auml = '\xE4',
  brvbar = '\xA6',
  Ccedil = '\xC7',
  ccedil = '\xE7',
  cedil = '\xB8',
  cent = '\xA2',
  copy = '\xA9',
  COPY = '\xA9',
  curren = '\xA4',
  deg = '\xB0',
  divide = '\xF7',
  Eacute = '\xC9',
  eacute = '\xE9',
  Ecirc = '\xCA',
  ecirc = '\xEA',
  Egrave = '\xC8',
  egrave = '\xE8',
  ETH = '\xD0',
  eth = '\xF0',
  Euml = '\xCB',
  euml = '\xEB',
  frac12 = '\xBD',
  frac14 = '\xBC',
  frac34 = '\xBE',
  gt$1 = '>',
  GT = '>',
  Iacute = '\xCD',
  iacute = '\xED',
  Icirc = '\xCE',
  icirc = '\xEE',
  iexcl = '\xA1',
  Igrave = '\xCC',
  igrave = '\xEC',
  iquest = '\xBF',
  Iuml = '\xCF',
  iuml = '\xEF',
  laquo = '\xAB',
  lt$1 = '<',
  LT = '<',
  macr = '\xAF',
  micro = '\xB5',
  middot = '\xB7',
  nbsp = '\xA0',
  not = '\xAC',
  Ntilde = '\xD1',
  ntilde = '\xF1',
  Oacute = '\xD3',
  oacute = '\xF3',
  Ocirc = '\xD4',
  ocirc = '\xF4',
  Ograve = '\xD2',
  ograve = '\xF2',
  ordf = '\xAA',
  ordm = '\xBA',
  Oslash = '\xD8',
  oslash = '\xF8',
  Otilde = '\xD5',
  otilde = '\xF5',
  Ouml = '\xD6',
  ouml = '\xF6',
  para = '\xB6',
  plusmn = '\xB1',
  pound = '\xA3',
  quot$1 = '"',
  QUOT = '"',
  raquo = '\xBB',
  reg = '\xAE',
  REG = '\xAE',
  sect = '\xA7',
  shy = '\xAD',
  sup1 = '\xB9',
  sup2 = '\xB2',
  sup3 = '\xB3',
  szlig = '\xDF',
  THORN = '\xDE',
  thorn = '\xFE',
  times = '\xD7',
  Uacute = '\xDA',
  uacute = '\xFA',
  Ucirc = '\xDB',
  ucirc = '\xFB',
  Ugrave = '\xD9',
  ugrave = '\xF9',
  uml = '\xA8',
  Uuml = '\xDC',
  uuml = '\xFC',
  Yacute = '\xDD',
  yacute = '\xFD',
  yen = '\xA5',
  yuml = '\xFF';
var require$$1 = {
  Aacute,
  aacute,
  Acirc,
  acirc,
  acute,
  AElig,
  aelig,
  Agrave,
  agrave,
  amp: amp$1,
  AMP,
  Aring,
  aring,
  Atilde,
  atilde,
  Auml,
  auml,
  brvbar,
  Ccedil,
  ccedil,
  cedil,
  cent,
  copy,
  COPY,
  curren,
  deg,
  divide,
  Eacute,
  eacute,
  Ecirc,
  ecirc,
  Egrave,
  egrave,
  ETH,
  eth,
  Euml,
  euml,
  frac12,
  frac14,
  frac34,
  gt: gt$1,
  GT,
  Iacute,
  iacute,
  Icirc,
  icirc,
  iexcl,
  Igrave,
  igrave,
  iquest,
  Iuml,
  iuml,
  laquo,
  lt: lt$1,
  LT,
  macr,
  micro,
  middot,
  nbsp,
  not,
  Ntilde,
  ntilde,
  Oacute,
  oacute,
  Ocirc,
  ocirc,
  Ograve,
  ograve,
  ordf,
  ordm,
  Oslash,
  oslash,
  Otilde,
  otilde,
  Ouml,
  ouml,
  para,
  plusmn,
  pound,
  quot: quot$1,
  QUOT,
  raquo,
  reg,
  REG,
  sect,
  shy,
  sup1,
  sup2,
  sup3,
  szlig,
  THORN,
  thorn,
  times,
  Uacute,
  uacute,
  Ucirc,
  ucirc,
  Ugrave,
  ugrave,
  uml,
  Uuml,
  uuml,
  Yacute,
  yacute,
  yen,
  yuml
};
const amp = '&',
  apos = "'",
  gt = '>',
  lt = '<',
  quot = '"';
var require$$0$1 = { amp, apos, gt, lt, quot },
  decode_codepoint = {},
  require$$0 = {
    0: 65533,
    128: 8364,
    130: 8218,
    131: 402,
    132: 8222,
    133: 8230,
    134: 8224,
    135: 8225,
    136: 710,
    137: 8240,
    138: 352,
    139: 8249,
    140: 338,
    142: 381,
    145: 8216,
    146: 8217,
    147: 8220,
    148: 8221,
    149: 8226,
    150: 8211,
    151: 8212,
    152: 732,
    153: 8482,
    154: 353,
    155: 8250,
    156: 339,
    158: 382,
    159: 376
  },
  __importDefault$2 =
    (commonjsGlobal && commonjsGlobal.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(decode_codepoint, '__esModule', { value: !0 });
var decode_json_1 = __importDefault$2(require$$0),
  fromCodePoint =
    String.fromCodePoint ||
    function (e) {
      var r = '';
      return (
        e > 65535 &&
          ((e -= 65536),
          (r += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
          (e = 56320 | (e & 1023))),
        (r += String.fromCharCode(e)),
        r
      );
    };
function decodeCodePoint(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111
    ? '\uFFFD'
    : (e in decode_json_1.default && (e = decode_json_1.default[e]),
      fromCodePoint(e));
}
decode_codepoint.default = decodeCodePoint;
var __importDefault$1 =
  (commonjsGlobal && commonjsGlobal.__importDefault) ||
  function (e) {
    return e && e.__esModule ? e : { default: e };
  };
Object.defineProperty(decode, '__esModule', { value: !0 });
decode.decodeHTML = decode.decodeHTMLStrict = decode.decodeXML = void 0;
var entities_json_1$1 = __importDefault$1(require$$1$1),
  legacy_json_1 = __importDefault$1(require$$1),
  xml_json_1$1 = __importDefault$1(require$$0$1),
  decode_codepoint_1 = __importDefault$1(decode_codepoint),
  strictEntityRe = /&(?:[a-zA-Z0-9]+|#[xX][\da-fA-F]+|#\d+);/g;
decode.decodeXML = getStrictDecoder(xml_json_1$1.default);
decode.decodeHTMLStrict = getStrictDecoder(entities_json_1$1.default);
function getStrictDecoder(e) {
  var r = getReplacer(e);
  return function (t) {
    return String(t).replace(strictEntityRe, r);
  };
}
var sorter = function (e, r) {
  return e < r ? 1 : -1;
};
decode.decodeHTML = (function () {
  for (
    var e = Object.keys(legacy_json_1.default).sort(sorter),
      r = Object.keys(entities_json_1$1.default).sort(sorter),
      t = 0,
      n = 0;
    t < r.length;
    t++
  )
    e[n] === r[t] ? ((r[t] += ';?'), n++) : (r[t] += ';');
  var o = new RegExp(
      '&(?:' + r.join('|') + '|#[xX][\\da-fA-F]+;?|#\\d+;?)',
      'g'
    ),
    a = getReplacer(entities_json_1$1.default);
  function s(i) {
    return i.substr(-1) !== ';' && (i += ';'), a(i);
  }
  return function (i) {
    return String(i).replace(o, s);
  };
})();
function getReplacer(e) {
  return function (t) {
    if (t.charAt(1) === '#') {
      var n = t.charAt(2);
      return n === 'X' || n === 'x'
        ? decode_codepoint_1.default(parseInt(t.substr(3), 16))
        : decode_codepoint_1.default(parseInt(t.substr(2), 10));
    }
    return e[t.slice(1, -1)] || t;
  };
}
var encode = {},
  __importDefault =
    (commonjsGlobal && commonjsGlobal.__importDefault) ||
    function (e) {
      return e && e.__esModule ? e : { default: e };
    };
Object.defineProperty(encode, '__esModule', { value: !0 });
encode.escapeUTF8 =
  encode.escape =
  encode.encodeNonAsciiHTML =
  encode.encodeHTML =
  encode.encodeXML =
    void 0;
var xml_json_1 = __importDefault(require$$0$1),
  inverseXML = getInverseObj(xml_json_1.default),
  xmlReplacer = getInverseReplacer(inverseXML);
encode.encodeXML = getASCIIEncoder(inverseXML);
var entities_json_1 = __importDefault(require$$1$1),
  inverseHTML = getInverseObj(entities_json_1.default),
  htmlReplacer = getInverseReplacer(inverseHTML);
encode.encodeHTML = getInverse(inverseHTML, htmlReplacer);
encode.encodeNonAsciiHTML = getASCIIEncoder(inverseHTML);
function getInverseObj(e) {
  return Object.keys(e)
    .sort()
    .reduce(function (r, t) {
      return (r[e[t]] = '&' + t + ';'), r;
    }, {});
}
function getInverseReplacer(e) {
  for (var r = [], t = [], n = 0, o = Object.keys(e); n < o.length; n++) {
    var a = o[n];
    a.length === 1 ? r.push('\\' + a) : t.push(a);
  }
  r.sort();
  for (var s = 0; s < r.length - 1; s++) {
    for (
      var i = s;
      i < r.length - 1 && r[i].charCodeAt(1) + 1 === r[i + 1].charCodeAt(1);

    )
      i += 1;
    var c = 1 + i - s;
    c < 3 || r.splice(s, c, r[s] + '-' + r[i]);
  }
  return t.unshift('[' + r.join('') + ']'), new RegExp(t.join('|'), 'g');
}
var reNonASCII =
    /(?:[\x80-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/g,
  getCodePoint =
    String.prototype.codePointAt != null
      ? function (e) {
          return e.codePointAt(0);
        }
      : function (e) {
          return (
            (e.charCodeAt(0) - 55296) * 1024 + e.charCodeAt(1) - 56320 + 65536
          );
        };
function singleCharReplacer(e) {
  return (
    '&#x' +
    (e.length > 1 ? getCodePoint(e) : e.charCodeAt(0))
      .toString(16)
      .toUpperCase() +
    ';'
  );
}
function getInverse(e, r) {
  return function (t) {
    return t
      .replace(r, function (n) {
        return e[n];
      })
      .replace(reNonASCII, singleCharReplacer);
  };
}
var reEscapeChars = new RegExp(
  xmlReplacer.source + '|' + reNonASCII.source,
  'g'
);
function escape$1(e) {
  return e.replace(reEscapeChars, singleCharReplacer);
}
encode.escape = escape$1;
function escapeUTF8(e) {
  return e.replace(xmlReplacer, singleCharReplacer);
}
encode.escapeUTF8 = escapeUTF8;
function getASCIIEncoder(e) {
  return function (r) {
    return r.replace(reEscapeChars, function (t) {
      return e[t] || singleCharReplacer(t);
    });
  };
}
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.decodeXMLStrict =
      e.decodeHTML5Strict =
      e.decodeHTML4Strict =
      e.decodeHTML5 =
      e.decodeHTML4 =
      e.decodeHTMLStrict =
      e.decodeHTML =
      e.decodeXML =
      e.encodeHTML5 =
      e.encodeHTML4 =
      e.escapeUTF8 =
      e.escape =
      e.encodeNonAsciiHTML =
      e.encodeHTML =
      e.encodeXML =
      e.encode =
      e.decodeStrict =
      e.decode =
        void 0);
  var r = decode,
    t = encode;
  function n(c, l) {
    return (!l || l <= 0 ? r.decodeXML : r.decodeHTML)(c);
  }
  e.decode = n;
  function o(c, l) {
    return (!l || l <= 0 ? r.decodeXML : r.decodeHTMLStrict)(c);
  }
  e.decodeStrict = o;
  function a(c, l) {
    return (!l || l <= 0 ? t.encodeXML : t.encodeHTML)(c);
  }
  e.encode = a;
  var s = encode;
  Object.defineProperty(e, 'encodeXML', {
    enumerable: !0,
    get: function () {
      return s.encodeXML;
    }
  }),
    Object.defineProperty(e, 'encodeHTML', {
      enumerable: !0,
      get: function () {
        return s.encodeHTML;
      }
    }),
    Object.defineProperty(e, 'encodeNonAsciiHTML', {
      enumerable: !0,
      get: function () {
        return s.encodeNonAsciiHTML;
      }
    }),
    Object.defineProperty(e, 'escape', {
      enumerable: !0,
      get: function () {
        return s.escape;
      }
    }),
    Object.defineProperty(e, 'escapeUTF8', {
      enumerable: !0,
      get: function () {
        return s.escapeUTF8;
      }
    }),
    Object.defineProperty(e, 'encodeHTML4', {
      enumerable: !0,
      get: function () {
        return s.encodeHTML;
      }
    }),
    Object.defineProperty(e, 'encodeHTML5', {
      enumerable: !0,
      get: function () {
        return s.encodeHTML;
      }
    });
  var i = decode;
  Object.defineProperty(e, 'decodeXML', {
    enumerable: !0,
    get: function () {
      return i.decodeXML;
    }
  }),
    Object.defineProperty(e, 'decodeHTML', {
      enumerable: !0,
      get: function () {
        return i.decodeHTML;
      }
    }),
    Object.defineProperty(e, 'decodeHTMLStrict', {
      enumerable: !0,
      get: function () {
        return i.decodeHTMLStrict;
      }
    }),
    Object.defineProperty(e, 'decodeHTML4', {
      enumerable: !0,
      get: function () {
        return i.decodeHTML;
      }
    }),
    Object.defineProperty(e, 'decodeHTML5', {
      enumerable: !0,
      get: function () {
        return i.decodeHTML;
      }
    }),
    Object.defineProperty(e, 'decodeHTML4Strict', {
      enumerable: !0,
      get: function () {
        return i.decodeHTMLStrict;
      }
    }),
    Object.defineProperty(e, 'decodeHTML5Strict', {
      enumerable: !0,
      get: function () {
        return i.decodeHTMLStrict;
      }
    }),
    Object.defineProperty(e, 'decodeXMLStrict', {
      enumerable: !0,
      get: function () {
        return i.decodeXML;
      }
    });
})(lib);
function _classCallCheck$7(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$7(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$7(e, r, t) {
  return (
    r && _defineProperties$7(e.prototype, r), t && _defineProperties$7(e, t), e
  );
}
function _createForOfIteratorHelper(e) {
  if (typeof Symbol == 'undefined' || e[Symbol.iterator] == null) {
    if (Array.isArray(e) || (e = _unsupportedIterableToArray$5(e))) {
      var r = 0,
        t = function () {};
      return {
        s: t,
        n: function () {
          return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
        },
        e: function (c) {
          throw c;
        },
        f: t
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var n,
    o = !0,
    a = !1,
    s;
  return {
    s: function () {
      n = e[Symbol.iterator]();
    },
    n: function () {
      var c = n.next();
      return (o = c.done), c;
    },
    e: function (c) {
      (a = !0), (s = c);
    },
    f: function () {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a) throw s;
      }
    }
  };
}
function _unsupportedIterableToArray$5(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$5(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(t);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$5(e, r);
  }
}
function _arrayLikeToArray$5(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
var entities = lib,
  defaults = {
    fg: '#FFF',
    bg: '#000',
    newline: !1,
    escapeXML: !1,
    stream: !1,
    colors: getDefaultColors()
  };
function getDefaultColors() {
  var e = {
    0: '#000',
    1: '#A00',
    2: '#0A0',
    3: '#A50',
    4: '#00A',
    5: '#A0A',
    6: '#0AA',
    7: '#AAA',
    8: '#555',
    9: '#F55',
    10: '#5F5',
    11: '#FF5',
    12: '#55F',
    13: '#F5F',
    14: '#5FF',
    15: '#FFF'
  };
  return (
    range(0, 5).forEach(function (r) {
      range(0, 5).forEach(function (t) {
        range(0, 5).forEach(function (n) {
          return setStyleColor(r, t, n, e);
        });
      });
    }),
    range(0, 23).forEach(function (r) {
      var t = r + 232,
        n = toHexString(r * 10 + 8);
      e[t] = '#' + n + n + n;
    }),
    e
  );
}
function setStyleColor(e, r, t, n) {
  var o = 16 + e * 36 + r * 6 + t,
    a = e > 0 ? e * 40 + 55 : 0,
    s = r > 0 ? r * 40 + 55 : 0,
    i = t > 0 ? t * 40 + 55 : 0;
  n[o] = toColorHexString([a, s, i]);
}
function toHexString(e) {
  for (var r = e.toString(16); r.length < 2; ) r = '0' + r;
  return r;
}
function toColorHexString(e) {
  var r = [],
    t = _createForOfIteratorHelper(e),
    n;
  try {
    for (t.s(); !(n = t.n()).done; ) {
      var o = n.value;
      r.push(toHexString(o));
    }
  } catch (a) {
    t.e(a);
  } finally {
    t.f();
  }
  return '#' + r.join('');
}
function generateOutput(e, r, t, n) {
  var o;
  return (
    r === 'text'
      ? (o = pushText(t, n))
      : r === 'display'
      ? (o = handleDisplay(e, t, n))
      : r === 'xterm256'
      ? (o = pushForegroundColor(e, n.colors[t]))
      : r === 'rgb' && (o = handleRgb(e, t)),
    o
  );
}
function handleRgb(e, r) {
  r = r.substring(2).slice(0, -1);
  var t = +r.substr(0, 2),
    n = r.substring(5).split(';'),
    o = n
      .map(function (a) {
        return ('0' + Number(a).toString(16)).substr(-2);
      })
      .join('');
  return pushStyle(e, (t === 38 ? 'color:#' : 'background-color:#') + o);
}
function handleDisplay(e, r, t) {
  r = parseInt(r, 10);
  var n = {
      '-1': function () {
        return '<br/>';
      },
      0: function () {
        return e.length && resetStyles(e);
      },
      1: function () {
        return pushTag(e, 'b');
      },
      3: function () {
        return pushTag(e, 'i');
      },
      4: function () {
        return pushTag(e, 'u');
      },
      8: function () {
        return pushStyle(e, 'display:none');
      },
      9: function () {
        return pushTag(e, 'strike');
      },
      22: function () {
        return pushStyle(
          e,
          'font-weight:normal;text-decoration:none;font-style:normal'
        );
      },
      23: function () {
        return closeTag(e, 'i');
      },
      24: function () {
        return closeTag(e, 'u');
      },
      39: function () {
        return pushForegroundColor(e, t.fg);
      },
      49: function () {
        return pushBackgroundColor(e, t.bg);
      },
      53: function () {
        return pushStyle(e, 'text-decoration:overline');
      }
    },
    o;
  return (
    n[r]
      ? (o = n[r]())
      : 4 < r && r < 7
      ? (o = pushTag(e, 'blink'))
      : 29 < r && r < 38
      ? (o = pushForegroundColor(e, t.colors[r - 30]))
      : 39 < r && r < 48
      ? (o = pushBackgroundColor(e, t.colors[r - 40]))
      : 89 < r && r < 98
      ? (o = pushForegroundColor(e, t.colors[8 + (r - 90)]))
      : 99 < r &&
        r < 108 &&
        (o = pushBackgroundColor(e, t.colors[8 + (r - 100)])),
    o
  );
}
function resetStyles(e) {
  var r = e.slice(0);
  return (
    (e.length = 0),
    r
      .reverse()
      .map(function (t) {
        return '</' + t + '>';
      })
      .join('')
  );
}
function range(e, r) {
  for (var t = [], n = e; n <= r; n++) t.push(n);
  return t;
}
function notCategory(e) {
  return function (r) {
    return (e === null || r.category !== e) && e !== 'all';
  };
}
function categoryForCode(e) {
  e = parseInt(e, 10);
  var r = null;
  return (
    e === 0
      ? (r = 'all')
      : e === 1
      ? (r = 'bold')
      : 2 < e && e < 5
      ? (r = 'underline')
      : 4 < e && e < 7
      ? (r = 'blink')
      : e === 8
      ? (r = 'hide')
      : e === 9
      ? (r = 'strike')
      : (29 < e && e < 38) || e === 39 || (89 < e && e < 98)
      ? (r = 'foreground-color')
      : ((39 < e && e < 48) || e === 49 || (99 < e && e < 108)) &&
        (r = 'background-color'),
    r
  );
}
function pushText(e, r) {
  return r.escapeXML ? entities.encodeXML(e) : e;
}
function pushTag(e, r, t) {
  return (
    t || (t = ''),
    e.push(r),
    '<'.concat(r).concat(t ? ' style="'.concat(t, '"') : '', '>')
  );
}
function pushStyle(e, r) {
  return pushTag(e, 'span', r);
}
function pushForegroundColor(e, r) {
  return pushTag(e, 'span', 'color:' + r);
}
function pushBackgroundColor(e, r) {
  return pushTag(e, 'span', 'background-color:' + r);
}
function closeTag(e, r) {
  var t;
  if ((e.slice(-1)[0] === r && (t = e.pop()), t)) return '</' + r + '>';
}
function tokenize(e, r, t) {
  var n = !1,
    o = 3;
  function a() {
    return '';
  }
  function s(_, A) {
    return t('xterm256', A), '';
  }
  function i(_) {
    return r.newline ? t('display', -1) : t('text', _), '';
  }
  function c(_, A) {
    (n = !0),
      A.trim().length === 0 && (A = '0'),
      (A = A.trimRight(';').split(';'));
    var P = _createForOfIteratorHelper(A),
      D;
    try {
      for (P.s(); !(D = P.n()).done; ) {
        var R = D.value;
        t('display', R);
      }
    } catch (k) {
      P.e(k);
    } finally {
      P.f();
    }
    return '';
  }
  function l(_) {
    return t('text', _), '';
  }
  function u(_) {
    return t('rgb', _), '';
  }
  var y = [
    { pattern: /^\x08+/, sub: a },
    { pattern: /^\x1b\[[012]?K/, sub: a },
    { pattern: /^\x1b\[\(B/, sub: a },
    { pattern: /^\x1b\[[34]8;2;\d+;\d+;\d+m/, sub: u },
    { pattern: /^\x1b\[38;5;(\d+)m/, sub: s },
    { pattern: /^\n/, sub: i },
    { pattern: /^\r+\n/, sub: i },
    { pattern: /^\x1b\[((?:\d{1,3};?)+|)m/, sub: c },
    { pattern: /^\x1b\[\d?J/, sub: a },
    { pattern: /^\x1b\[\d{0,3};\d{0,3}f/, sub: a },
    { pattern: /^\x1b\[?[\d;]{0,3}/, sub: a },
    { pattern: /^(([^\x1b\x08\r\n])+)/, sub: l }
  ];
  function d(_, A) {
    (A > o && n) || ((n = !1), (e = e.replace(_.pattern, _.sub)));
  }
  var g = [],
    h = e,
    b = h.length;
  e: for (; b > 0; ) {
    for (var w = 0, S = 0, T = y.length; S < T; w = ++S) {
      var v = y[w];
      if ((d(v, w), e.length !== b)) {
        b = e.length;
        continue e;
      }
    }
    if (e.length === b) break;
    g.push(0), (b = e.length);
  }
  return g;
}
function updateStickyStack(e, r, t) {
  return (
    r !== 'text' &&
      ((e = e.filter(notCategory(categoryForCode(t)))),
      e.push({ token: r, data: t, category: categoryForCode(t) })),
    e
  );
}
var Filter = (function () {
    function e(r) {
      _classCallCheck$7(this, e),
        (r = r || {}),
        r.colors && (r.colors = Object.assign({}, defaults.colors, r.colors)),
        (this.options = Object.assign({}, defaults, r)),
        (this.stack = []),
        (this.stickyStack = []);
    }
    return (
      _createClass$7(e, [
        {
          key: 'toHtml',
          value: function (t) {
            var n = this;
            t = typeof t == 'string' ? [t] : t;
            var o = this.stack,
              a = this.options,
              s = [];
            return (
              this.stickyStack.forEach(function (i) {
                var c = generateOutput(o, i.token, i.data, a);
                c && s.push(c);
              }),
              tokenize(t.join(''), a, function (i, c) {
                var l = generateOutput(o, i, c, a);
                l && s.push(l),
                  a.stream &&
                    (n.stickyStack = updateStickyStack(n.stickyStack, i, c));
              }),
              o.length && s.push(resetStyles(o)),
              s.join('')
            );
          }
        }
      ]),
      e
    );
  })(),
  ansi_to_html = Filter,
  _templateObject$3;
function _slicedToArray$4(e, r) {
  return (
    _arrayWithHoles$4(e) ||
    _iterableToArrayLimit$4(e, r) ||
    _unsupportedIterableToArray$4(e, r) ||
    _nonIterableRest$4()
  );
}
function _nonIterableRest$4() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$4(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$4(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$4(e, r);
  }
}
function _arrayLikeToArray$4(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$4(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$4(e) {
  if (Array.isArray(e)) return e;
}
function _taggedTemplateLiteral$3(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _classCallCheck$6(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$6(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$6(e, r, t) {
  return (
    r && _defineProperties$6(e.prototype, r),
    t && _defineProperties$6(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var document$2 = window_1.document,
  PREPARING_DELAY = 100,
  layoutClassMap = {
    centered: 'sb-main-centered',
    fullscreen: 'sb-main-fullscreen',
    padded: 'sb-main-padded'
  },
  Mode;
(function (e) {
  (e.MAIN = 'MAIN'),
    (e.NOPREVIEW = 'NOPREVIEW'),
    (e.PREPARING_STORY = 'PREPARING_STORY'),
    (e.PREPARING_DOCS = 'PREPARING_DOCS'),
    (e.ERROR = 'ERROR');
})(Mode || (Mode = {}));
var classes = {
    PREPARING_STORY: 'sb-show-preparing-story',
    PREPARING_DOCS: 'sb-show-preparing-docs',
    MAIN: 'sb-show-main',
    NOPREVIEW: 'sb-show-nopreview',
    ERROR: 'sb-show-errordisplay'
  },
  ansiConverter = new ansi_to_html({ escapeXML: !0 }),
  WebView = (function () {
    function e() {
      _classCallCheck$6(this, e),
        (this.currentLayoutClass = void 0),
        (this.testing = !1),
        (this.preparingTimeout = null);
      var r = lib$1.parse(document$2.location.search, {
          ignoreQueryPrefix: !0
        }),
        t = r.__SPECIAL_TEST_PARAMETER__;
      switch (t) {
        case 'preparing-story': {
          this.showPreparingStory(), (this.testing = !0);
          break;
        }
        case 'preparing-docs': {
          this.showPreparingDocs(), (this.testing = !0);
          break;
        }
      }
    }
    return (
      _createClass$6(e, [
        {
          key: 'prepareForStory',
          value: function (t) {
            return (
              this.showStory(),
              this.applyLayout(t.parameters.layout),
              (document$2.documentElement.scrollTop = 0),
              (document$2.documentElement.scrollLeft = 0),
              this.storyRoot()
            );
          }
        },
        {
          key: 'storyRoot',
          value: function () {
            return document$2.getElementById('root');
          }
        },
        {
          key: 'prepareForDocs',
          value: function () {
            return (
              this.showMain(),
              this.showDocs(),
              this.applyLayout('fullscreen'),
              this.docsRoot()
            );
          }
        },
        {
          key: 'docsRoot',
          value: function () {
            return document$2.getElementById('docs-root');
          }
        },
        {
          key: 'applyLayout',
          value: function () {
            var t =
              arguments.length > 0 && arguments[0] !== void 0
                ? arguments[0]
                : 'padded';
            if (t === 'none') {
              document$2.body.classList.remove(this.currentLayoutClass),
                (this.currentLayoutClass = null);
              return;
            }
            this.checkIfLayoutExists(t);
            var n = layoutClassMap[t];
            document$2.body.classList.remove(this.currentLayoutClass),
              document$2.body.classList.add(n),
              (this.currentLayoutClass = n);
          }
        },
        {
          key: 'checkIfLayoutExists',
          value: function (t) {
            layoutClassMap[t] ||
              logger.warn(
                dedent(
                  _templateObject$3 ||
                    (_templateObject$3 = _taggedTemplateLiteral$3([
                      'The desired layout: ',
                      ` is not a valid option.
         The possible options are: `,
                      ', none.'
                    ])),
                  t,
                  Object.keys(layoutClassMap).join(', ')
                )
              );
          }
        },
        {
          key: 'showMode',
          value: function (t) {
            clearTimeout(this.preparingTimeout),
              Object.keys(Mode).forEach(function (n) {
                n === t
                  ? document$2.body.classList.add(classes[n])
                  : document$2.body.classList.remove(classes[n]);
              });
          }
        },
        {
          key: 'showErrorDisplay',
          value: function (t) {
            var n = t.message,
              o = n === void 0 ? '' : n,
              a = t.stack,
              s = a === void 0 ? '' : a,
              i = o,
              c = s,
              l = o.split(`
`);
            if (l.length > 1) {
              var u = _slicedToArray$4(l, 1);
              (i = u[0]),
                (c = l.slice(1).join(`
`));
            }
            (document$2.getElementById('error-message').innerHTML =
              ansiConverter.toHtml(i)),
              (document$2.getElementById('error-stack').innerHTML =
                ansiConverter.toHtml(c)),
              this.showMode(Mode.ERROR);
          }
        },
        {
          key: 'showNoPreview',
          value: function () {
            var t, n;
            this.testing ||
              (this.showMode(Mode.NOPREVIEW),
              (t = this.storyRoot()) === null ||
                t === void 0 ||
                t.setAttribute('hidden', 'true'),
              (n = this.docsRoot()) === null ||
                n === void 0 ||
                n.setAttribute('hidden', 'true'));
          }
        },
        {
          key: 'showPreparingStory',
          value: function () {
            var t = this,
              n =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : {},
              o = n.immediate,
              a = o === void 0 ? !1 : o;
            clearTimeout(this.preparingTimeout),
              a
                ? this.showMode(Mode.PREPARING_STORY)
                : (this.preparingTimeout = setTimeout(function () {
                    return t.showMode(Mode.PREPARING_STORY);
                  }, PREPARING_DELAY));
          }
        },
        {
          key: 'showPreparingDocs',
          value: function () {
            var t = this;
            clearTimeout(this.preparingTimeout),
              (this.preparingTimeout = setTimeout(function () {
                return t.showMode(Mode.PREPARING_DOCS);
              }, PREPARING_DELAY));
          }
        },
        {
          key: 'showMain',
          value: function () {
            this.showMode(Mode.MAIN);
          }
        },
        {
          key: 'showDocs',
          value: function () {
            this.storyRoot().setAttribute('hidden', 'true'),
              this.docsRoot().removeAttribute('hidden');
          }
        },
        {
          key: 'showStory',
          value: function () {
            this.docsRoot().setAttribute('hidden', 'true'),
              this.storyRoot().removeAttribute('hidden');
          }
        },
        {
          key: 'showStoryDuringRender',
          value: function () {
            document$2.body.classList.add(classes.MAIN);
          }
        }
      ]),
      e
    );
  })();
function asyncGeneratorStep$1(e, r, t, n, o, a, s) {
  try {
    var i = e[a](s),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator$1(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(r, t);
      function s(c) {
        asyncGeneratorStep$1(a, n, o, s, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep$1(a, n, o, s, i, 'throw', c);
      }
      s(void 0);
    });
  };
}
function _classCallCheck$5(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$5(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$5(e, r, t) {
  return (
    r && _defineProperties$5(e.prototype, r),
    t && _defineProperties$5(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var DocsRender = (function () {
  function e(r, t, n, o) {
    _classCallCheck$5(this, e),
      (this.channel = r),
      (this.store = t),
      (this.id = n),
      (this.story = o),
      (this.canvasElement = void 0),
      (this.context = void 0),
      (this.disableKeyListeners = !1);
  }
  return (
    _createClass$5(
      e,
      [
        {
          key: 'isPreparing',
          value: function () {
            return !1;
          }
        },
        {
          key: 'renderToElement',
          value: (function () {
            var r = _asyncToGenerator$1(
              regeneratorRuntime.mark(function n(o, a) {
                var s = this,
                  i,
                  c,
                  l,
                  u,
                  y,
                  d;
                return regeneratorRuntime.wrap(
                  function (h) {
                    for (;;)
                      switch ((h.prev = h.next)) {
                        case 0:
                          return (
                            (this.canvasElement = o),
                            (c = this.story),
                            (l = c.id),
                            (u = c.title),
                            (y = c.name),
                            (h.next = 4),
                            this.store.loadCSFFileByStoryId(this.id)
                          );
                        case 4:
                          return (
                            (d = h.sent),
                            (this.context = Object.assign(
                              {
                                id: l,
                                title: u,
                                name: y,
                                storyById: function (w) {
                                  return s.store.storyFromCSFFile({
                                    storyId: w,
                                    csfFile: d
                                  });
                                },
                                componentStories: function () {
                                  return s.store.componentStoriesFromCSFFile({
                                    csfFile: d
                                  });
                                },
                                loadStory: function (w) {
                                  return s.store.loadStory({ storyId: w });
                                },
                                renderStoryToElement: a,
                                getStoryContext: function (w) {
                                  return Object.assign(
                                    {},
                                    s.store.getStoryContext(w),
                                    { viewMode: 'docs' }
                                  );
                                }
                              },
                              !(
                                (i = window_1.FEATURES) !== null &&
                                i !== void 0 &&
                                i.breakingChangesV7
                              ) && this.store.getStoryContext(this.story)
                            )),
                            h.abrupt('return', this.render())
                          );
                        case 7:
                        case 'end':
                          return h.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t(n, o) {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'render',
          value: (function () {
            var r = _asyncToGenerator$1(
              regeneratorRuntime.mark(function n() {
                var o = this,
                  a;
                return regeneratorRuntime.wrap(
                  function (i) {
                    for (;;)
                      switch ((i.prev = i.next)) {
                        case 0:
                          if (
                            !(
                              !this.story ||
                              !this.context ||
                              !this.canvasElement
                            )
                          ) {
                            i.next = 2;
                            break;
                          }
                          throw new Error('DocsRender not ready to render');
                        case 2:
                          return (
                            (i.next = 4),
                            __vitePreload(
                              () => import('./renderDocs.3327c397.js'),
                              [
                                'assets/renderDocs.3327c397.js',
                                'assets/index.d1b1a1f8.js',
                                'assets/index.cf63e054.js'
                              ]
                            )
                          );
                        case 4:
                          (a = i.sent),
                            a.renderDocs(
                              this.story,
                              this.context,
                              this.canvasElement,
                              function () {
                                return o.channel.emit(DOCS_RENDERED, o.id);
                              }
                            );
                        case 6:
                        case 'end':
                          return i.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'rerender',
          value: (function () {
            var r = _asyncToGenerator$1(
              regeneratorRuntime.mark(function n() {
                var o;
                return regeneratorRuntime.wrap(
                  function (s) {
                    for (;;)
                      switch ((s.prev = s.next)) {
                        case 0:
                          if (
                            (o = window_1.FEATURES) !== null &&
                            o !== void 0 &&
                            o.modernInlineRender
                          ) {
                            s.next = 3;
                            break;
                          }
                          return (s.next = 3), this.render();
                        case 3:
                        case 'end':
                          return s.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        },
        {
          key: 'teardown',
          value: (function () {
            var r = _asyncToGenerator$1(
              regeneratorRuntime.mark(function n() {
                var o,
                  a,
                  s,
                  i = arguments;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          if (
                            ((o = i.length > 0 && i[0] !== void 0 ? i[0] : {}),
                            (a = o.viewModeChanged),
                            !(!a || !this.canvasElement))
                          ) {
                            l.next = 3;
                            break;
                          }
                          return l.abrupt('return');
                        case 3:
                          return (
                            (l.next = 5),
                            __vitePreload(
                              () => import('./renderDocs.3327c397.js'),
                              [
                                'assets/renderDocs.3327c397.js',
                                'assets/index.d1b1a1f8.js',
                                'assets/index.cf63e054.js'
                              ]
                            )
                          );
                        case 5:
                          (s = l.sent), s.unmountDocs(this.canvasElement);
                        case 7:
                        case 'end':
                          return l.stop();
                      }
                  },
                  n,
                  this
                );
              })
            );
            function t() {
              return r.apply(this, arguments);
            }
            return t;
          })()
        }
      ],
      [
        {
          key: 'fromStoryRender',
          value: function (t) {
            var n = t.channel,
              o = t.store,
              a = t.id,
              s = t.story;
            return new e(n, o, a, s);
          }
        }
      ]
    ),
    e
  );
})();
DocsRender.displayName = 'DocsRender';
function _typeof$1(e) {
  return (
    (_typeof$1 =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    _typeof$1(e)
  );
}
var _templateObject$2, _templateObject2, _templateObject3$1, _templateObject4$1;
function asyncGeneratorStep(e, r, t, n, o, a, s) {
  try {
    var i = e[a](s),
      c = i.value;
  } catch (l) {
    t(l);
    return;
  }
  i.done ? r(c) : Promise.resolve(c).then(n, o);
}
function _asyncToGenerator(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (n, o) {
      var a = e.apply(r, t);
      function s(c) {
        asyncGeneratorStep(a, n, o, s, i, 'next', c);
      }
      function i(c) {
        asyncGeneratorStep(a, n, o, s, i, 'throw', c);
      }
      s(void 0);
    });
  };
}
function _taggedTemplateLiteral$2(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _classCallCheck$4(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$4(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$4(e, r, t) {
  return (
    r && _defineProperties$4(e.prototype, r),
    t && _defineProperties$4(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _get() {
  return (
    typeof Reflect != 'undefined' && Reflect.get
      ? (_get = Reflect.get)
      : (_get = function (r, t, n) {
          var o = _superPropBase(r, t);
          if (!!o) {
            var a = Object.getOwnPropertyDescriptor(o, t);
            return a.get ? a.get.call(arguments.length < 3 ? r : n) : a.value;
          }
        }),
    _get.apply(this, arguments)
  );
}
function _superPropBase(e, r) {
  for (
    ;
    !Object.prototype.hasOwnProperty.call(e, r) &&
    ((e = _getPrototypeOf(e)), e !== null);

  );
  return e;
}
function _inherits(e, r) {
  if (typeof r != 'function' && r !== null)
    throw new TypeError('Super expression must either be null or a function');
  (e.prototype = Object.create(r && r.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 }
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    r && _setPrototypeOf(e, r);
}
function _setPrototypeOf(e, r) {
  return (
    (_setPrototypeOf =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    _setPrototypeOf(e, r)
  );
}
function _createSuper(e) {
  var r = _isNativeReflectConstruct();
  return function () {
    var n = _getPrototypeOf(e),
      o;
    if (r) {
      var a = _getPrototypeOf(this).constructor;
      o = Reflect.construct(n, arguments, a);
    } else o = n.apply(this, arguments);
    return _possibleConstructorReturn(this, o);
  };
}
function _possibleConstructorReturn(e, r) {
  if (r && (_typeof$1(r) === 'object' || typeof r == 'function')) return r;
  if (r !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return _assertThisInitialized(e);
}
function _assertThisInitialized(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return e;
}
function _isNativeReflectConstruct() {
  if (
    typeof Reflect == 'undefined' ||
    !Reflect.construct ||
    Reflect.construct.sham
  )
    return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return (
      Boolean.prototype.valueOf.call(
        Reflect.construct(Boolean, [], function () {})
      ),
      !0
    );
  } catch {
    return !1;
  }
}
function _getPrototypeOf(e) {
  return (
    (_getPrototypeOf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    _getPrototypeOf(e)
  );
}
var globalWindow$1 = window_1.window;
function focusInInput(e) {
  var r = e.target;
  return (
    /input|textarea/i.test(r.tagName) ||
    r.getAttribute('contenteditable') !== null
  );
}
var PreviewWeb = (function (e) {
    _inherits(t, e);
    var r = _createSuper(t);
    function t() {
      var n;
      return (
        _classCallCheck$4(this, t),
        (n = r.call(this)),
        (n.urlStore = void 0),
        (n.view = void 0),
        (n.previewEntryError = void 0),
        (n.currentSelection = void 0),
        (n.currentRender = void 0),
        (n.view = new WebView()),
        (n.urlStore = new UrlStore()),
        (n.storyStore.getSelection = browser(function () {
          return n.urlStore.selection;
        }, dedent(
          _templateObject$2 ||
            (_templateObject$2 = _taggedTemplateLiteral$2(
              [
                '\n        `__STORYBOOK_STORY_STORE__.getSelection()` is deprecated and will be removed in 7.0.\n  \n        To get the current selection, use the `useStoryContext()` hook from `@storybook/addons`.\n      '
              ],
              [
                '\n        \\`__STORYBOOK_STORY_STORE__.getSelection()\\` is deprecated and will be removed in 7.0.\n  \n        To get the current selection, use the \\`useStoryContext()\\` hook from \\`@storybook/addons\\`.\n      '
              ]
            ))
        ))),
        n
      );
    }
    return (
      _createClass$4(t, [
        {
          key: 'setupListeners',
          value: function () {
            _get(_getPrototypeOf(t.prototype), 'setupListeners', this).call(
              this
            ),
              (globalWindow$1.onkeydown = this.onKeydown.bind(this)),
              this.channel.on(
                SET_CURRENT_STORY,
                this.onSetCurrentStory.bind(this)
              ),
              this.channel.on(
                UPDATE_QUERY_PARAMS,
                this.onUpdateQueryParams.bind(this)
              ),
              this.channel.on(
                PRELOAD_STORIES,
                this.onPreloadStories.bind(this)
              );
          }
        },
        {
          key: 'initializeWithProjectAnnotations',
          value: function (o) {
            var a = this;
            return _get(
              _getPrototypeOf(t.prototype),
              'initializeWithProjectAnnotations',
              this
            )
              .call(this, o)
              .then(function () {
                return a.setInitialGlobals();
              });
          }
        },
        {
          key: 'setInitialGlobals',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a() {
                var s, i;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          (s = this.urlStore.selectionSpecifier || {}),
                            (i = s.globals),
                            i && this.storyStore.globals.updateFromPersisted(i),
                            this.emitGlobals();
                        case 3:
                        case 'end':
                          return l.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
            function o() {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'initializeWithStoryIndex',
          value: function (o) {
            var a = this;
            return _get(
              _getPrototypeOf(t.prototype),
              'initializeWithStoryIndex',
              this
            )
              .call(this, o)
              .then(function () {
                var s;
                return (
                  ((s = window_1.FEATURES) !== null &&
                    s !== void 0 &&
                    s.storyStoreV7) ||
                    a.channel.emit(
                      SET_STORIES,
                      a.storyStore.getSetStoriesPayload()
                    ),
                  a.selectSpecifiedStory()
                );
              });
          }
        },
        {
          key: 'selectSpecifiedStory',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a() {
                var s, i, c, l, u;
                return regeneratorRuntime.wrap(
                  function (d) {
                    for (;;)
                      switch ((d.prev = d.next)) {
                        case 0:
                          if (this.urlStore.selectionSpecifier) {
                            d.next = 3;
                            break;
                          }
                          return this.renderMissingStory(), d.abrupt('return');
                        case 3:
                          if (
                            ((s = this.urlStore.selectionSpecifier),
                            (i = s.storySpecifier),
                            (c = s.viewMode),
                            (l = s.args),
                            (u =
                              this.storyStore.storyIndex.storyIdFromSpecifier(
                                i
                              )),
                            u)
                          ) {
                            d.next = 8;
                            break;
                          }
                          return (
                            i === '*'
                              ? this.renderStoryLoadingException(
                                  i,
                                  new Error(
                                    dedent(
                                      _templateObject2 ||
                                        (_templateObject2 =
                                          _taggedTemplateLiteral$2([
                                            `
            Couldn't find any stories in your Storybook.
            - Please check your stories field of your main.js config.
            - Also check the browser console and terminal for error messages.
          `
                                          ]))
                                    )
                                  )
                                )
                              : this.renderStoryLoadingException(
                                  i,
                                  new Error(
                                    dedent(
                                      _templateObject3$1 ||
                                        (_templateObject3$1 =
                                          _taggedTemplateLiteral$2([
                                            `
            Couldn't find story matching '`,
                                            `'.
            - Are you sure a story with that id exists?
            - Please check your stories field of your main.js config.
            - Also check the browser console and terminal for error messages.
          `
                                          ])),
                                      i
                                    )
                                  )
                                ),
                            d.abrupt('return')
                          );
                        case 8:
                          return (
                            this.urlStore.setSelection({
                              storyId: u,
                              viewMode: c
                            }),
                            this.channel.emit(
                              STORY_SPECIFIED,
                              this.urlStore.selection
                            ),
                            this.channel.emit(
                              CURRENT_STORY_WAS_SET,
                              this.urlStore.selection
                            ),
                            (d.next = 13),
                            this.renderSelection({ persistedArgs: l })
                          );
                        case 13:
                        case 'end':
                          return d.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
            function o() {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'onGetProjectAnnotationsChanged',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a(s) {
                var i;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          return (
                            (i = s.getProjectAnnotations),
                            (l.next = 3),
                            _get(
                              _getPrototypeOf(t.prototype),
                              'onGetProjectAnnotationsChanged',
                              this
                            ).call(this, { getProjectAnnotations: i })
                          );
                        case 3:
                          this.renderSelection();
                        case 4:
                        case 'end':
                          return l.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
            function o(a) {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'onStoriesChanged',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a(s) {
                var i, c, l;
                return regeneratorRuntime.wrap(
                  function (y) {
                    for (;;)
                      switch ((y.prev = y.next)) {
                        case 0:
                          if (
                            ((c = s.importFn),
                            (l = s.storyIndex),
                            _get(
                              _getPrototypeOf(t.prototype),
                              'onStoriesChanged',
                              this
                            ).call(this, { importFn: c, storyIndex: l }),
                            (i = window_1.FEATURES) !== null &&
                              i !== void 0 &&
                              i.storyStoreV7)
                          ) {
                            y.next = 9;
                            break;
                          }
                          return (
                            (y.t0 = this.channel),
                            (y.t1 = SET_STORIES),
                            (y.next = 7),
                            this.storyStore.getSetStoriesPayload()
                          );
                        case 7:
                          (y.t2 = y.sent), y.t0.emit.call(y.t0, y.t1, y.t2);
                        case 9:
                          if (!this.urlStore.selection) {
                            y.next = 14;
                            break;
                          }
                          return (y.next = 12), this.renderSelection();
                        case 12:
                          y.next = 16;
                          break;
                        case 14:
                          return (y.next = 16), this.selectSpecifiedStory();
                        case 16:
                        case 'end':
                          return y.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
            function o(a) {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'onKeydown',
          value: function (o) {
            var a;
            if (
              !(
                (a = this.currentRender) !== null &&
                a !== void 0 &&
                a.disableKeyListeners
              ) &&
              !focusInInput(o)
            ) {
              var s = o.altKey,
                i = o.ctrlKey,
                c = o.metaKey,
                l = o.shiftKey,
                u = o.key,
                y = o.code,
                d = o.keyCode;
              this.channel.emit(PREVIEW_KEYDOWN, {
                event: {
                  altKey: s,
                  ctrlKey: i,
                  metaKey: c,
                  shiftKey: l,
                  key: u,
                  code: y,
                  keyCode: d
                }
              });
            }
          }
        },
        {
          key: 'onSetCurrentStory',
          value: function (o) {
            this.urlStore.setSelection(Object.assign({ viewMode: 'story' }, o)),
              this.channel.emit(CURRENT_STORY_WAS_SET, this.urlStore.selection),
              this.renderSelection();
          }
        },
        {
          key: 'onUpdateQueryParams',
          value: function (o) {
            this.urlStore.setQueryParams(o);
          }
        },
        {
          key: 'onUpdateGlobals',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a(s) {
                var i;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          if (
                            ((i = s.globals),
                            _get(
                              _getPrototypeOf(t.prototype),
                              'onUpdateGlobals',
                              this
                            ).call(this, { globals: i }),
                            !(this.currentRender instanceof DocsRender))
                          ) {
                            l.next = 5;
                            break;
                          }
                          return (l.next = 5), this.currentRender.rerender();
                        case 5:
                        case 'end':
                          return l.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
            function o(a) {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'onUpdateArgs',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a(s) {
                var i, c;
                return regeneratorRuntime.wrap(
                  function (u) {
                    for (;;)
                      switch ((u.prev = u.next)) {
                        case 0:
                          if (
                            ((i = s.storyId),
                            (c = s.updatedArgs),
                            _get(
                              _getPrototypeOf(t.prototype),
                              'onUpdateArgs',
                              this
                            ).call(this, { storyId: i, updatedArgs: c }),
                            !(this.currentRender instanceof DocsRender))
                          ) {
                            u.next = 5;
                            break;
                          }
                          return (u.next = 5), this.currentRender.rerender();
                        case 5:
                        case 'end':
                          return u.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
            function o(a) {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'onPreloadStories',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a(s) {
                var i = this;
                return regeneratorRuntime.wrap(function (l) {
                  for (;;)
                    switch ((l.prev = l.next)) {
                      case 0:
                        return (
                          (l.next = 2),
                          Promise.all(
                            s.map(function (u) {
                              return i.storyStore.loadStory({ storyId: u });
                            })
                          )
                        );
                      case 2:
                      case 'end':
                        return l.stop();
                    }
                }, a);
              })
            );
            function o(a) {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'renderSelection',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a() {
                var s,
                  i,
                  c,
                  l = this,
                  u,
                  y,
                  d,
                  g,
                  h,
                  b,
                  w,
                  S,
                  T,
                  v,
                  _,
                  A,
                  P,
                  D,
                  R,
                  k,
                  j = arguments;
                return regeneratorRuntime.wrap(
                  function (L) {
                    for (;;)
                      switch ((L.prev = L.next)) {
                        case 0:
                          if (
                            ((y = j.length > 0 && j[0] !== void 0 ? j[0] : {}),
                            (d = y.persistedArgs),
                            (g = this.urlStore.selection),
                            g)
                          ) {
                            L.next = 4;
                            break;
                          }
                          throw new Error(
                            'Cannot render story as no selection was made'
                          );
                        case 4:
                          if (
                            ((h = g.storyId),
                            (b =
                              ((s = this.currentSelection) === null ||
                              s === void 0
                                ? void 0
                                : s.storyId) !== h),
                            (w =
                              ((i = this.currentSelection) === null ||
                              i === void 0
                                ? void 0
                                : i.viewMode) !== g.viewMode),
                            g.viewMode === 'story'
                              ? this.view.showPreparingStory({ immediate: w })
                              : this.view.showPreparingDocs(),
                            (S = this.currentSelection),
                            (T = this.currentRender),
                            !(
                              (c = T) !== null &&
                              c !== void 0 &&
                              c.isPreparing()
                            ))
                          ) {
                            L.next = 14;
                            break;
                          }
                          return (L.next = 13), this.teardownRender(T);
                        case 13:
                          T = null;
                        case 14:
                          return (
                            (v = new StoryRender(
                              this.channel,
                              this.storyStore,
                              function () {
                                return (
                                  l.view.showStoryDuringRender(),
                                  l.renderToDOM.apply(l, arguments)
                                );
                              },
                              this.mainStoryCallbacks(h),
                              h,
                              'story'
                            )),
                            (this.currentSelection = g),
                            (this.currentRender = v),
                            (L.prev = 17),
                            (L.next = 20),
                            v.prepare()
                          );
                        case 20:
                          L.next = 29;
                          break;
                        case 22:
                          if (
                            ((L.prev = 22),
                            (L.t0 = L.catch(17)),
                            L.t0 === PREPARE_ABORTED)
                          ) {
                            L.next = 28;
                            break;
                          }
                          return (L.next = 27), this.teardownRender(T);
                        case 27:
                          this.renderStoryLoadingException(h, L.t0);
                        case 28:
                          return L.abrupt('return');
                        case 29:
                          if (
                            ((_ = !b && !v.isEqual(T)),
                            d &&
                              this.storyStore.args.updateFromPersisted(
                                v.story,
                                d
                              ),
                            (A = v.context()),
                            (P = A.parameters),
                            (D = A.initialArgs),
                            (R = A.argTypes),
                            (k = A.args),
                            !(T && !b && !_ && !w))
                          ) {
                            L.next = 37;
                            break;
                          }
                          return (
                            (this.currentRender = T),
                            this.channel.emit(STORY_UNCHANGED, h),
                            this.view.showMain(),
                            L.abrupt('return')
                          );
                        case 37:
                          return (
                            (L.next = 39),
                            this.teardownRender(T, { viewModeChanged: w })
                          );
                        case 39:
                          S && (b || w) && this.channel.emit(STORY_CHANGED, h),
                            (u = window_1.FEATURES) !== null &&
                              u !== void 0 &&
                              u.storyStoreV7 &&
                              this.channel.emit(STORY_PREPARED, {
                                id: h,
                                parameters: P,
                                initialArgs: D,
                                argTypes: R,
                                args: k
                              }),
                            (_ || d) &&
                              this.channel.emit(STORY_ARGS_UPDATED, {
                                storyId: h,
                                args: k
                              }),
                            g.viewMode === 'docs' || P.docsOnly
                              ? ((this.currentRender =
                                  DocsRender.fromStoryRender(v)),
                                this.currentRender.renderToElement(
                                  this.view.prepareForDocs(),
                                  this.renderStoryToElement.bind(this)
                                ))
                              : (this.storyRenders.push(v),
                                this.currentRender.renderToElement(
                                  this.view.prepareForStory(v.story)
                                ));
                        case 43:
                        case 'end':
                          return L.stop();
                      }
                  },
                  a,
                  this,
                  [[17, 22]]
                );
              })
            );
            function o() {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'renderStoryToElement',
          value: function (o, a) {
            var s = this,
              i = new StoryRender(
                this.channel,
                this.storyStore,
                this.renderToDOM,
                this.inlineStoryCallbacks(o.id),
                o.id,
                'docs',
                o
              );
            return (
              i.renderToElement(a),
              this.storyRenders.push(i),
              _asyncToGenerator(
                regeneratorRuntime.mark(function c() {
                  return regeneratorRuntime.wrap(function (u) {
                    for (;;)
                      switch ((u.prev = u.next)) {
                        case 0:
                          return (u.next = 2), s.teardownRender(i);
                        case 2:
                        case 'end':
                          return u.stop();
                      }
                  }, c);
                })
              )
            );
          }
        },
        {
          key: 'teardownRender',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a(s) {
                var i,
                  c,
                  l = arguments;
                return regeneratorRuntime.wrap(
                  function (y) {
                    for (;;)
                      switch ((y.prev = y.next)) {
                        case 0:
                          return (
                            (i = l.length > 1 && l[1] !== void 0 ? l[1] : {}),
                            (c = i.viewModeChanged),
                            (this.storyRenders = this.storyRenders.filter(
                              function (d) {
                                return d !== s;
                              }
                            )),
                            (y.next = 4),
                            s == null
                              ? void 0
                              : s.teardown({ viewModeChanged: c })
                          );
                        case 4:
                        case 'end':
                          return y.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
            function o(a) {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'extract',
          value: (function () {
            var n = _asyncToGenerator(
              regeneratorRuntime.mark(function a(s) {
                var i;
                return regeneratorRuntime.wrap(
                  function (l) {
                    for (;;)
                      switch ((l.prev = l.next)) {
                        case 0:
                          if (!this.previewEntryError) {
                            l.next = 2;
                            break;
                          }
                          throw this.previewEntryError;
                        case 2:
                          if (this.storyStore.projectAnnotations) {
                            l.next = 4;
                            break;
                          }
                          throw new Error(
                            dedent(
                              _templateObject4$1 ||
                                (_templateObject4$1 = _taggedTemplateLiteral$2(
                                  [
                                    "Failed to initialize Storybook.\n      \n      Do you have an error in your `preview.js`? Check your Storybook's browser console for errors."
                                  ],
                                  [
                                    "Failed to initialize Storybook.\n      \n      Do you have an error in your \\`preview.js\\`? Check your Storybook's browser console for errors."
                                  ]
                                ))
                            )
                          );
                        case 4:
                          if (
                            !(
                              (i = window_1.FEATURES) !== null &&
                              i !== void 0 &&
                              i.storyStoreV7
                            )
                          ) {
                            l.next = 7;
                            break;
                          }
                          return (
                            (l.next = 7), this.storyStore.cacheAllCSFFiles()
                          );
                        case 7:
                          return l.abrupt('return', this.storyStore.extract(s));
                        case 8:
                        case 'end':
                          return l.stop();
                      }
                  },
                  a,
                  this
                );
              })
            );
            function o(a) {
              return n.apply(this, arguments);
            }
            return o;
          })()
        },
        {
          key: 'mainStoryCallbacks',
          value: function (o) {
            var a = this;
            return {
              showMain: function () {
                return a.view.showMain();
              },
              showError: function (i) {
                return a.renderError(o, i);
              },
              showException: function (i) {
                return a.renderException(o, i);
              }
            };
          }
        },
        {
          key: 'inlineStoryCallbacks',
          value: function (o) {
            return {
              showMain: function () {},
              showError: function (s) {
                return logger.error(
                  'Error rendering docs story ('.concat(o, ')'),
                  s
                );
              },
              showException: function (s) {
                return logger.error(
                  'Error rendering docs story ('.concat(o, ')'),
                  s
                );
              }
            };
          }
        },
        {
          key: 'renderPreviewEntryError',
          value: function (o, a) {
            _get(
              _getPrototypeOf(t.prototype),
              'renderPreviewEntryError',
              this
            ).call(this, o, a),
              this.view.showErrorDisplay(a);
          }
        },
        {
          key: 'renderMissingStory',
          value: function () {
            this.view.showNoPreview(), this.channel.emit(STORY_MISSING);
          }
        },
        {
          key: 'renderStoryLoadingException',
          value: function (o, a) {
            logger.error("Unable to load story '".concat(o, "':")),
              logger.error(a),
              this.view.showErrorDisplay(a),
              this.channel.emit(STORY_MISSING, o);
          }
        },
        {
          key: 'renderException',
          value: function (o, a) {
            this.channel.emit(STORY_THREW_EXCEPTION, a),
              this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                newPhase: 'errored',
                storyId: o
              }),
              a !== IGNORED_EXCEPTION &&
                (this.view.showErrorDisplay(a),
                logger.error("Error rendering story '".concat(o, "':")),
                logger.error(a));
          }
        },
        {
          key: 'renderError',
          value: function (o, a) {
            var s = a.title,
              i = a.description;
            logger.error('Error rendering story '.concat(s, ': ').concat(i)),
              this.channel.emit(STORY_ERRORED, { title: s, description: i }),
              this.channel.emit(STORY_RENDER_PHASE_CHANGED, {
                newPhase: 'errored',
                storyId: o
              }),
              this.view.showErrorDisplay({ message: s, stack: i });
          }
        }
      ]),
      t
    );
  })(Preview),
  _excluded$1 = ['default', '__namedExportsOrder'],
  _templateObject$1;
function _objectWithoutProperties$1(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose$1(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function _objectWithoutPropertiesLoose$1(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function _taggedTemplateLiteral$1(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
function _slicedToArray$3(e, r) {
  return (
    _arrayWithHoles$3(e) ||
    _iterableToArrayLimit$3(e, r) ||
    _unsupportedIterableToArray$3(e, r) ||
    _nonIterableRest$3()
  );
}
function _nonIterableRest$3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$3(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$3(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$3(e, r);
  }
}
function _arrayLikeToArray$3(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$3(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$3(e) {
  if (Array.isArray(e)) return e;
}
function _classCallCheck$3(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$3(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$3(e, r, t) {
  return (
    r && _defineProperties$3(e.prototype, r),
    t && _defineProperties$3(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var StoryStoreFacade = (function () {
    function e() {
      _classCallCheck$3(this, e),
        (this.projectAnnotations = void 0),
        (this.stories = void 0),
        (this.csfExports = void 0),
        (this.projectAnnotations = {
          loaders: [],
          decorators: [],
          parameters: {},
          argsEnhancers: [],
          argTypesEnhancers: [],
          args: {},
          argTypes: {}
        }),
        (this.stories = {}),
        (this.csfExports = {});
    }
    return (
      _createClass$3(e, [
        {
          key: 'importFn',
          value: function (t) {
            var n = this;
            return synchronousPromise.SynchronousPromise.resolve().then(
              function () {
                var o = n.csfExports[t];
                if (!o) throw new Error('Unknown path: '.concat(t));
                return o;
              }
            );
          }
        },
        {
          key: 'getStoryIndex',
          value: function (t) {
            var n,
              o,
              a = this,
              s = Object.keys(this.csfExports),
              i =
                (n = this.projectAnnotations.parameters) === null ||
                n === void 0 ||
                (o = n.options) === null ||
                o === void 0
                  ? void 0
                  : o.storySort,
              c = Object.entries(this.stories),
              l = c.map(function (d) {
                var g = _slicedToArray$3(d, 2),
                  h = g[0],
                  b = g[1].importPath,
                  w = a.csfExports[b],
                  S = t.processCSFFileWithCache(w, b, w.default.title);
                return [
                  h,
                  t.storyFromCSFFile({ storyId: h, csfFile: S }),
                  S.meta.parameters,
                  a.projectAnnotations.parameters
                ];
              }),
              u;
            try {
              u = sortStoriesV6(l, i, s);
            } catch (d) {
              throw typeof i == 'function'
                ? new Error(
                    dedent(
                      _templateObject$1 ||
                        (_templateObject$1 = _taggedTemplateLiteral$1([
                          `
          Error sorting stories with sort parameter `,
                          `:

          > `,
                          `
          
          Are you using a V7-style sort function in V6 compatibility mode?
          
          More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
        `
                        ])),
                      i,
                      d.message
                    )
                  )
                : d;
            }
            var y = u.reduce(function (d, g) {
              return (d[g.id] = a.stories[g.id]), d;
            }, {});
            return { v: 3, stories: y };
          }
        },
        {
          key: 'clearFilenameExports',
          value: function (t) {
            var n = this;
            !this.csfExports[t] ||
              (Object.entries(this.stories).forEach(function (o) {
                var a = _slicedToArray$3(o, 2),
                  s = a[0],
                  i = a[1].importPath;
                i === t && delete n.stories[s];
              }),
              (this.csfExports[t] = {}));
          }
        },
        {
          key: 'addStoriesFromExports',
          value: function (t, n) {
            var o = this;
            if (this.csfExports[t] !== n) {
              this.clearFilenameExports(t);
              var a = n.default,
                s = n.__namedExportsOrder,
                i = _objectWithoutProperties$1(n, _excluded$1),
                c = a || {},
                l = c.id,
                u = c.title,
                y = (window_1.STORIES || []).map(function (g) {
                  return Object.assign({}, g, {
                    importPathMatcher: new RegExp(g.importPathMatcher)
                  });
                });
              if (((u = userOrAutoTitle(t, y, u)), !u)) {
                logger.info(
                  "Unexpected default export without title in '"
                    .concat(t, "': ")
                    .concat(JSON.stringify(n.default))
                );
                return;
              }
              this.csfExports[t] = Object.assign({}, n, {
                default: Object.assign({}, a, { title: u })
              });
              var d = i;
              Array.isArray(s) &&
                ((d = {}),
                s.forEach(function (g) {
                  var h = i[g];
                  h && (d[g] = h);
                })),
                Object.entries(d)
                  .filter(function (g) {
                    var h = _slicedToArray$3(g, 1),
                      b = h[0];
                    return dist.isExportStory(b, a);
                  })
                  .forEach(function (g) {
                    var h,
                      b,
                      w = _slicedToArray$3(g, 2),
                      S = w[0],
                      T = w[1],
                      v = dist.storyNameFromExport(S),
                      _ =
                        ((h = T.parameters) === null || h === void 0
                          ? void 0
                          : h.__id) || dist.toId(l || u, v),
                      A =
                        (typeof T != 'function' && T.name) ||
                        T.storyName ||
                        ((b = T.story) === null || b === void 0
                          ? void 0
                          : b.name) ||
                        v;
                    o.stories[_] = { id: _, name: A, title: u, importPath: t };
                  });
            }
          }
        }
      ]),
      e
    );
  })(),
  _excluded = ['globals', 'globalTypes'],
  _excluded2 = ['decorators', 'loaders', 'component', 'args', 'argTypes'],
  _excluded3 = ['component', 'args', 'argTypes'],
  _templateObject,
  _templateObject3,
  _templateObject4;
function _slicedToArray$2(e, r) {
  return (
    _arrayWithHoles$2(e) ||
    _iterableToArrayLimit$2(e, r) ||
    _unsupportedIterableToArray$2(e, r) ||
    _nonIterableRest$2()
  );
}
function _nonIterableRest$2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$2(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$2(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$2(e, r);
  }
}
function _arrayLikeToArray$2(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$2(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles$2(e) {
  if (Array.isArray(e)) return e;
}
function _typeof(e) {
  return (
    (_typeof =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (r) {
            return typeof r;
          }
        : function (r) {
            return r &&
              typeof Symbol == 'function' &&
              r.constructor === Symbol &&
              r !== Symbol.prototype
              ? 'symbol'
              : typeof r;
          }),
    _typeof(e)
  );
}
function _objectWithoutProperties(e, r) {
  if (e == null) return {};
  var t = _objectWithoutPropertiesLoose(e, r),
    n,
    o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (o = 0; o < a.length; o++)
      (n = a[o]),
        !(r.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (t[n] = e[n]));
  }
  return t;
}
function _objectWithoutPropertiesLoose(e, r) {
  if (e == null) return {};
  var t = {},
    n = Object.keys(e),
    o,
    a;
  for (a = 0; a < n.length; a++)
    (o = n[a]), !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
function _classCallCheck$2(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$2(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$2(e, r, t) {
  return (
    r && _defineProperties$2(e.prototype, r),
    t && _defineProperties$2(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function _taggedTemplateLiteral(e, r) {
  return (
    r || (r = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(r) } })
    )
  );
}
var warningAlternatives = {
    addDecorator:
      'Instead, use `export const decorators = [];` in your `preview.js`.',
    addParameters:
      'Instead, use `export const parameters = {};` in your `preview.js`.',
    addLoaders:
      'Instead, use `export const loaders = [];` in your `preview.js`.'
  },
  warningMessage = function (r) {
    return browser(
      function () {},
      dedent(
        _templateObject ||
          (_templateObject = _taggedTemplateLiteral(
            [
              '\n  `',
              `\` is deprecated, and will be removed in Storybook 7.0.

  `,
              `

  Read more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addparameters-and-adddecorator).`
            ],
            [
              '\n  \\`',
              `\\\` is deprecated, and will be removed in Storybook 7.0.

  `,
              `

  Read more at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-addparameters-and-adddecorator).`
            ]
          )),
        r,
        warningAlternatives[r]
      )
    );
  };
warningMessage('addDecorator'),
  warningMessage('addParameters'),
  warningMessage('addLoaders');
var invalidStoryTypes = new Set(['string', 'number', 'boolean', 'symbol']),
  ClientApi = (function () {
    function e() {
      var r = this,
        t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.storyStore;
      _classCallCheck$2(this, e),
        (this.facade = void 0),
        (this.storyStore = void 0),
        (this.addons = void 0),
        (this.onImportFnChanged = void 0),
        (this.lastFileName = 0),
        (this.setAddon = browser(
          function (o) {
            r.addons = Object.assign({}, r.addons, o);
          },
          dedent(
            _templateObject3 ||
              (_templateObject3 = _taggedTemplateLiteral(
                [
                  `
      \`setAddon\` is deprecated and will be removed in Storybook 7.0.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-setaddon
    `
                ],
                [
                  `
      \\\`setAddon\\\` is deprecated and will be removed in Storybook 7.0.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-setaddon
    `
                ]
              ))
          )
        )),
        (this.addDecorator = function (o) {
          r.facade.projectAnnotations.decorators.push(o);
        }),
        (this.clearDecorators = browser(
          function () {
            r.facade.projectAnnotations.decorators = [];
          },
          dedent(
            _templateObject4 ||
              (_templateObject4 = _taggedTemplateLiteral(
                [
                  `
      \`clearDecorators\` is deprecated and will be removed in Storybook 7.0.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-cleardecorators
    `
                ],
                [
                  `
      \\\`clearDecorators\\\` is deprecated and will be removed in Storybook 7.0.

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-cleardecorators
    `
                ]
              ))
          )
        )),
        (this.addParameters = function (o) {
          var a = o.globals,
            s = o.globalTypes,
            i = _objectWithoutProperties(o, _excluded);
          (r.facade.projectAnnotations.parameters = combineParameters(
            r.facade.projectAnnotations.parameters,
            i
          )),
            a &&
              (r.facade.projectAnnotations.globals = Object.assign(
                {},
                r.facade.projectAnnotations.globals,
                a
              )),
            s &&
              (r.facade.projectAnnotations.globalTypes = Object.assign(
                {},
                r.facade.projectAnnotations.globalTypes,
                normalizeInputTypes(s)
              ));
        }),
        (this.addLoader = function (o) {
          r.facade.projectAnnotations.loaders.push(o);
        }),
        (this.addArgs = function (o) {
          r.facade.projectAnnotations.args = Object.assign(
            {},
            r.facade.projectAnnotations.args,
            o
          );
        }),
        (this.addArgTypes = function (o) {
          r.facade.projectAnnotations.argTypes = Object.assign(
            {},
            r.facade.projectAnnotations.argTypes,
            normalizeInputTypes(o)
          );
        }),
        (this.addArgsEnhancer = function (o) {
          r.facade.projectAnnotations.argsEnhancers.push(o);
        }),
        (this.addArgTypesEnhancer = function (o) {
          r.facade.projectAnnotations.argTypesEnhancers.push(o);
        }),
        (this.storiesOf = function (o, a) {
          if (!o && typeof o != 'string')
            throw new Error(
              'Invalid or missing kind provided for stories, should be a string'
            );
          if (
            (a ||
              logger.warn(
                "Missing 'module' parameter for story with a kind of '".concat(
                  o,
                  "'. It will break your HMR"
                )
              ),
            a)
          ) {
            var s = Object.getPrototypeOf(a);
            s.exports &&
              s.exports.default &&
              logger.error(
                'Illegal mix of CSF default export and storiesOf calls in a single file: '.concat(
                  s.i
                )
              );
          }
          for (
            var i = a && a.id ? ''.concat(a.id) : (r.lastFileName++).toString(),
              c = i,
              l = 1;
            r.facade.csfExports[c] &&
            Object.keys(r.facade.csfExports[c]).length > 0;

          )
            (l += 1), (c = ''.concat(i, '-').concat(l));
          a &&
            a.hot &&
            a.hot.accept &&
            (a.hot.accept(),
            a.hot.dispose(function () {
              r.facade.clearFilenameExports(c),
                setTimeout(function () {
                  var h;
                  (h = r.onImportFnChanged) === null ||
                    h === void 0 ||
                    h.call(r, { importFn: r.importFn.bind(r) });
                }, 0);
            }));
          var u = !1,
            y = {
              kind: o.toString(),
              add: function () {
                return y;
              },
              addDecorator: function () {
                return y;
              },
              addLoader: function () {
                return y;
              },
              addParameters: function () {
                return y;
              }
            };
          Object.keys(r.addons).forEach(function (h) {
            var b = r.addons[h];
            y[h] = function () {
              for (
                var w = arguments.length, S = new Array(w), T = 0;
                T < w;
                T++
              )
                S[T] = arguments[T];
              return b.apply(y, S), y;
            };
          });
          var d = {
            id: dist.sanitize(o),
            title: o,
            decorators: [],
            loaders: [],
            parameters: {}
          };
          r.facade.csfExports[c] = { default: d };
          var g = 0;
          return (
            (y.add = function (h, b) {
              var w =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : {};
              if (((u = !0), typeof h != 'string'))
                throw new Error(
                  'Invalid or missing storyName provided for a "'.concat(
                    o,
                    '" story.'
                  )
                );
              if (!b || Array.isArray(b) || invalidStoryTypes.has(_typeof(b)))
                throw new Error(
                  'Cannot load story "'
                    .concat(h, '" in "')
                    .concat(
                      o,
                      '" due to invalid format. Storybook expected a function/object but received '
                    )
                    .concat(_typeof(b), ' instead.')
                );
              var S = w.decorators,
                T = w.loaders,
                v = w.component,
                _ = w.args,
                A = w.argTypes,
                P = _objectWithoutProperties(w, _excluded2),
                D = w.__id || dist.toId(o, h),
                R = r.facade.csfExports[c];
              return (
                (R['story'.concat(g)] = {
                  name: h,
                  parameters: Object.assign({ fileName: c, __id: D }, P),
                  decorators: S,
                  loaders: T,
                  args: _,
                  argTypes: A,
                  component: v,
                  render: b
                }),
                (g += 1),
                (r.facade.stories[D] = {
                  id: D,
                  title: R.default.title,
                  name: h,
                  importPath: c
                }),
                y
              );
            }),
            (y.addDecorator = function (h) {
              if (u)
                throw new Error(`You cannot add a decorator after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);
              return d.decorators.push(h), y;
            }),
            (y.addLoader = function (h) {
              if (u)
                throw new Error(
                  'You cannot add a loader after the first story for a kind.'
                );
              return d.loaders.push(h), y;
            }),
            (y.addParameters = function (h) {
              var b = h.component,
                w = h.args,
                S = h.argTypes,
                T = _objectWithoutProperties(h, _excluded3);
              if (u)
                throw new Error(`You cannot add parameters after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);
              return (
                (d.parameters = combineParameters(d.parameters, T)),
                b && (d.component = b),
                w && (d.args = Object.assign({}, d.args, w)),
                S && (d.argTypes = Object.assign({}, d.argTypes, S)),
                y
              );
            }),
            y
          );
        }),
        (this.getStorybook = function () {
          var o = r.storyStore.storyIndex.stories,
            a = {};
          return (
            Object.entries(o).forEach(function (s) {
              var i = _slicedToArray$2(s, 2),
                c = i[0],
                l = i[1],
                u = l.title,
                y = l.name,
                d = l.importPath;
              a[u] || (a[u] = { kind: u, fileName: d, stories: [] });
              var g = r.storyStore.fromId(c),
                h = g.storyFn;
              a[u].stories.push({ name: y, render: h });
            }),
            Object.values(a)
          );
        }),
        (this.raw = function () {
          return r.storyStore.raw();
        }),
        (this.facade = new StoryStoreFacade()),
        (this.addons = {}),
        (this.storyStore = n);
    }
    return (
      _createClass$2(e, [
        {
          key: 'importFn',
          value: function (t) {
            return this.facade.importFn(t);
          }
        },
        {
          key: 'getStoryIndex',
          value: function () {
            if (!this.storyStore)
              throw new Error(
                'Cannot get story index before setting storyStore'
              );
            return this.facade.getStoryIndex(this.storyStore);
          }
        },
        {
          key: '_storyStore',
          get: function () {
            return this.storyStore;
          }
        }
      ]),
      e
    );
  })(),
  hasSymbols$1 = shams$1,
  shams = function () {
    return hasSymbols$1() && !!Symbol.toStringTag;
  },
  callBound = callBound$2,
  hasToStringTag = shams(),
  has,
  $exec,
  isRegexMarker,
  badStringifier;
if (hasToStringTag) {
  (has = callBound('Object.prototype.hasOwnProperty')),
    ($exec = callBound('RegExp.prototype.exec')),
    (isRegexMarker = {});
  var throwRegexMarker = function () {
    throw isRegexMarker;
  };
  (badStringifier = { toString: throwRegexMarker, valueOf: throwRegexMarker }),
    typeof Symbol.toPrimitive == 'symbol' &&
      (badStringifier[Symbol.toPrimitive] = throwRegexMarker);
}
var $toString = callBound('Object.prototype.toString'),
  gOPD = Object.getOwnPropertyDescriptor,
  regexClass = '[object RegExp]',
  isRegex = hasToStringTag
    ? function (r) {
        if (!r || typeof r != 'object') return !1;
        var t = gOPD(r, 'lastIndex'),
          n = t && has(t, 'value');
        if (!n) return !1;
        try {
          $exec(r, badStringifier);
        } catch (o) {
          return o === isRegexMarker;
        }
      }
    : function (r) {
        return !r || (typeof r != 'object' && typeof r != 'function')
          ? !1
          : $toString(r) === regexClass;
      },
  isFunction_1 = isFunction,
  toString = Object.prototype.toString;
function isFunction(e) {
  if (!e) return !1;
  var r = toString.call(e);
  return (
    r === '[object Function]' ||
    (typeof e == 'function' && r !== '[object RegExp]') ||
    (typeof window != 'undefined' &&
      (e === window.setTimeout ||
        e === window.alert ||
        e === window.confirm ||
        e === window.prompt))
  );
}
var isSymbol$1 = { exports: {} },
  toStr = Object.prototype.toString,
  hasSymbols = hasSymbols$3();
if (hasSymbols) {
  var symToStr = Symbol.prototype.toString,
    symStringRegex = /^Symbol\(.*\)$/,
    isSymbolObject = function (r) {
      return typeof r.valueOf() != 'symbol'
        ? !1
        : symStringRegex.test(symToStr.call(r));
    };
  isSymbol$1.exports = function (r) {
    if (typeof r == 'symbol') return !0;
    if (toStr.call(r) !== '[object Symbol]') return !1;
    try {
      return isSymbolObject(r);
    } catch {
      return !1;
    }
  };
} else
  isSymbol$1.exports = function (r) {
    return !1;
  };
var isSymbol = isSymbol$1.exports;
/*!
 * isobject <https://github.com/jonschlinkert/isobject>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function isObject$1(e) {
  return e != null && typeof e == 'object' && Array.isArray(e) === !1;
}
function ownKeys$1(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function _objectSpread$1(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys$1(Object(t), !0).forEach(function (n) {
          _defineProperty$1(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys$1(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function _defineProperty$1(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
var eventProperties = [
    'bubbles',
    'cancelBubble',
    'cancelable',
    'composed',
    'currentTarget',
    'defaultPrevented',
    'eventPhase',
    'isTrusted',
    'returnValue',
    'srcElement',
    'target',
    'timeStamp',
    'type'
  ],
  customEventSpecificProperties = ['detail'];
function extractEventHiddenProperties(e) {
  var r = eventProperties
    .filter(function (t) {
      return e[t] !== void 0;
    })
    .reduce(function (t, n) {
      return _objectSpread$1(
        _objectSpread$1({}, t),
        {},
        _defineProperty$1({}, n, e[n])
      );
    }, {});
  return (
    e instanceof CustomEvent &&
      customEventSpecificProperties
        .filter(function (t) {
          return e[t] !== void 0;
        })
        .forEach(function (t) {
          r[t] = e[t];
        }),
    r
  );
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    r &&
      (n = n.filter(function (o) {
        return Object.getOwnPropertyDescriptor(e, o).enumerable;
      })),
      t.push.apply(t, n);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ownKeys(Object(t), !0).forEach(function (n) {
          _defineProperty(e, n, t[n]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ownKeys(Object(t)).forEach(function (n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
        });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (
    r in e
      ? Object.defineProperty(e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[r] = t),
    e
  );
}
function _slicedToArray$1(e, r) {
  return (
    _arrayWithHoles$1(e) ||
    _iterableToArrayLimit$1(e, r) ||
    _unsupportedIterableToArray$1(e, r) ||
    _nonIterableRest$1()
  );
}
function _nonIterableRest$1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray$1(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray$1(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray$1(e, r);
  }
}
function _arrayLikeToArray$1(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit$1(e, r) {
  if (!(typeof Symbol == 'undefined' || !(Symbol.iterator in Object(e)))) {
    var t = [],
      n = !0,
      o = !1,
      a = void 0;
    try {
      for (
        var s = e[Symbol.iterator](), i;
        !(n = (i = s.next()).done) && (t.push(i.value), !(r && t.length === r));
        n = !0
      );
    } catch (c) {
      (o = !0), (a = c);
    } finally {
      try {
        !n && s.return != null && s.return();
      } finally {
        if (o) throw a;
      }
    }
    return t;
  }
}
function _arrayWithHoles$1(e) {
  if (Array.isArray(e)) return e;
}
var isRunningInBrowser =
    typeof window != 'undefined' && typeof window.document != 'undefined',
  isObject = isObject$1,
  removeCodeComments = function (r) {
    var t = null,
      n = !1,
      o = !1,
      a = !1,
      s = '';
    if (r.indexOf('//') >= 0 || r.indexOf('/*') >= 0)
      for (var i = 0; i < r.length; i += 1)
        !t && !n && !o && !a
          ? r[i] === '"' || r[i] === "'" || r[i] === '`'
            ? (t = r[i])
            : r[i] === '/' && r[i + 1] === '*'
            ? (n = !0)
            : r[i] === '/' && r[i + 1] === '/'
            ? (o = !0)
            : r[i] === '/' && r[i + 1] !== '/' && (a = !0)
          : (t &&
              ((r[i] === t && r[i - 1] !== '\\') ||
                (r[i] ===
                  `
` &&
                  t !== '`')) &&
              (t = null),
            a &&
              ((r[i] === '/' && r[i - 1] !== '\\') ||
                r[i] ===
                  `
`) &&
              (a = !1),
            n && r[i - 1] === '/' && r[i - 2] === '*' && (n = !1),
            o &&
              r[i] ===
                `
` &&
              (o = !1)),
          !n && !o && (s += r[i]);
    else s = r;
    return s;
  },
  cleanCode = memoize$2(1e4)(function (e) {
    return removeCodeComments(e).replace(/\n\s*/g, '').trim();
  }),
  convertShorthandMethods = function (r, t) {
    var n = t.slice(0, t.indexOf('{')),
      o = t.slice(t.indexOf('{'));
    if (n.includes('=>') || n.includes('function')) return t;
    var a = n;
    return (a = a.replace(r, 'function')), a + o;
  },
  dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/,
  isJSON = function (r) {
    return r.match(/^[\[\{\"\}].*[\]\}\"]$/);
  };
function convertUnconventionalData(e) {
  if (!isObject(e)) return e;
  var r = e,
    t = !1;
  return (
    isRunningInBrowser &&
      e instanceof Event &&
      ((r = extractEventHiddenProperties(r)), (t = !0)),
    (r = Object.keys(r).reduce(function (n, o) {
      try {
        var a;
        (a = r[o]) === null || a === void 0 || a.toJSON, (n[o] = r[o]);
      } catch {
        t = !0;
      }
      return n;
    }, {})),
    t ? r : e
  );
}
var replacer = function (r) {
    var t, n, o, a;
    return function (i, c) {
      try {
        if (i === '')
          return (
            (a = []), (t = new Map([[c, '[]']])), (n = new Map()), (o = []), c
          );
        for (var l = n.get(this) || this; o.length && l !== o[0]; )
          o.shift(), a.pop();
        if (typeof c == 'boolean') return c;
        if (c === void 0) return r.allowUndefined ? '_undefined_' : void 0;
        if (c === null) return null;
        if (typeof c == 'number')
          return c === -1 / 0
            ? '_-Infinity_'
            : c === 1 / 0
            ? '_Infinity_'
            : Number.isNaN(c)
            ? '_NaN_'
            : c;
        if (typeof c == 'bigint') return '_bigint_'.concat(c.toString());
        if (typeof c == 'string')
          return dateFormat.test(c)
            ? r.allowDate
              ? '_date_'.concat(c)
              : void 0
            : c;
        if (isRegex(c))
          return r.allowRegExp
            ? '_regexp_'.concat(c.flags, '|').concat(c.source)
            : void 0;
        if (isFunction_1(c)) {
          if (!r.allowFunction) return;
          var u = c.name,
            y = c.toString();
          return y.match(
            /(\[native code\]|WEBPACK_IMPORTED_MODULE|__webpack_exports__|__webpack_require__)/
          )
            ? '_function_'.concat(u, '|').concat(function () {}.toString())
            : '_function_'
                .concat(u, '|')
                .concat(cleanCode(convertShorthandMethods(i, y)));
        }
        if (isSymbol(c)) {
          if (!r.allowSymbol) return;
          var d = Symbol.keyFor(c);
          return d !== void 0
            ? '_gsymbol_'.concat(d)
            : '_symbol_'.concat(c.toString().slice(7, -1));
        }
        if (o.length >= r.maxDepth)
          return Array.isArray(c)
            ? '[Array('.concat(c.length, ')]')
            : '[Object]';
        if (c === this) return '_duplicate_'.concat(JSON.stringify(a));
        if (
          c.constructor &&
          c.constructor.name &&
          c.constructor.name !== 'Object' &&
          !Array.isArray(c) &&
          !r.allowClass
        )
          return;
        var g = t.get(c);
        if (!g) {
          var h = Array.isArray(c) ? c : convertUnconventionalData(c);
          if (
            c.constructor &&
            c.constructor.name &&
            c.constructor.name !== 'Object' &&
            !Array.isArray(c) &&
            r.allowClass
          )
            try {
              Object.assign(h, { '_constructor-name_': c.constructor.name });
            } catch {}
          return (
            a.push(i),
            o.unshift(h),
            t.set(c, JSON.stringify(a)),
            c !== h && n.set(c, h),
            h
          );
        }
        return '_duplicate_'.concat(g);
      } catch {
        return;
      }
    };
  },
  reviver = function reviver(options) {
    var refs = [],
      root;
    return function revive(key, value) {
      if (
        (key === '' &&
          ((root = value),
          refs.forEach(function (e) {
            var r = e.target,
              t = e.container,
              n = e.replacement,
              o = isJSON(n) ? JSON.parse(n) : n.split('.');
            o.length === 0 ? (t[r] = root) : (t[r] = get_1(root, o));
          })),
        key === '_constructor-name_')
      )
        return value;
      if (
        isObject(value) &&
        value['_constructor-name_'] &&
        options.allowFunction
      ) {
        var name = value['_constructor-name_'];
        if (name !== 'Object') {
          var Fn = new Function(
            'return function '.concat(name.replace(/[\W_]+/g, ''), '(){}')
          )();
          Object.setPrototypeOf(value, new Fn());
        }
        return delete value['_constructor-name_'], value;
      }
      if (
        typeof value == 'string' &&
        value.startsWith('_function_') &&
        options.allowFunction
      ) {
        var _ref2 = value.match(/_function_([^|]*)\|(.*)/) || [],
          _ref3 = _slicedToArray$1(_ref2, 3),
          _name = _ref3[1],
          source = _ref3[2],
          sourceSanitized = source.replace(/[(\(\))|\\| |\]|`]*$/, '');
        if (!options.lazyEval) return eval('('.concat(sourceSanitized, ')'));
        var result = function result() {
          var f = eval('('.concat(sourceSanitized, ')'));
          return f.apply(void 0, arguments);
        };
        return (
          Object.defineProperty(result, 'toString', {
            value: function e() {
              return sourceSanitized;
            }
          }),
          Object.defineProperty(result, 'name', { value: _name }),
          result
        );
      }
      if (
        typeof value == 'string' &&
        value.startsWith('_regexp_') &&
        options.allowRegExp
      ) {
        var _ref4 = value.match(/_regexp_([^|]*)\|(.*)/) || [],
          _ref5 = _slicedToArray$1(_ref4, 3),
          flags = _ref5[1],
          _source = _ref5[2];
        return new RegExp(_source, flags);
      }
      return typeof value == 'string' &&
        value.startsWith('_date_') &&
        options.allowDate
        ? new Date(value.replace('_date_', ''))
        : typeof value == 'string' && value.startsWith('_duplicate_')
        ? (refs.push({
            target: key,
            container: this,
            replacement: value.replace(/^_duplicate_/, '')
          }),
          null)
        : typeof value == 'string' &&
          value.startsWith('_symbol_') &&
          options.allowSymbol
        ? Symbol(value.replace('_symbol_', ''))
        : typeof value == 'string' &&
          value.startsWith('_gsymbol_') &&
          options.allowSymbol
        ? Symbol.for(value.replace('_gsymbol_', ''))
        : typeof value == 'string' && value === '_-Infinity_'
        ? -1 / 0
        : typeof value == 'string' && value === '_Infinity_'
        ? 1 / 0
        : typeof value == 'string' && value === '_NaN_'
        ? NaN
        : typeof value == 'string' &&
          value.startsWith('_bigint_') &&
          typeof BigInt == 'function'
        ? BigInt(value.replace('_bigint_', ''))
        : value;
    };
  },
  defaultOptions = {
    maxDepth: 10,
    space: void 0,
    allowFunction: !0,
    allowRegExp: !0,
    allowDate: !0,
    allowClass: !0,
    allowUndefined: !0,
    allowSymbol: !0,
    lazyEval: !0
  },
  stringify = function e(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = _objectSpread(_objectSpread({}, defaultOptions), t);
    return JSON.stringify(convertUnconventionalData(r), replacer(n), t.space);
  },
  mutator = function e() {
    var r = new Map();
    return function t(n) {
      isObject(n) &&
        Object.entries(n).forEach(function (o) {
          var a = _slicedToArray$1(o, 2),
            s = a[0],
            i = a[1];
          i === '_undefined_'
            ? (n[s] = void 0)
            : r.get(i) || (r.set(i, !0), t(i));
        }),
        Array.isArray(n) &&
          n.forEach(function (o, a) {
            o === '_undefined_'
              ? (r.set(o, !0), (n[a] = void 0))
              : r.get(o) || (r.set(o, !0), t(o));
          });
    };
  },
  parse = function e(r) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = _objectSpread(_objectSpread({}, defaultOptions), t),
      o = JSON.parse(r, reviver(n));
    return mutator()(o), o;
  };
function _toArray(e) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableRest()
  );
}
function _toConsumableArray(e) {
  return (
    _arrayWithoutHoles(e) ||
    _iterableToArray(e) ||
    _unsupportedIterableToArray(e) ||
    _nonIterableSpread()
  );
}
function _nonIterableSpread() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _iterableToArray(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function _arrayWithoutHoles(e) {
  if (Array.isArray(e)) return _arrayLikeToArray(e);
}
function _slicedToArray(e, r) {
  return (
    _arrayWithHoles(e) ||
    _iterableToArrayLimit(e, r) ||
    _unsupportedIterableToArray(e, r) ||
    _nonIterableRest()
  );
}
function _nonIterableRest() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _unsupportedIterableToArray(e, r) {
  if (!!e) {
    if (typeof e == 'string') return _arrayLikeToArray(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return _arrayLikeToArray(e, r);
  }
}
function _arrayLikeToArray(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t];
  return n;
}
function _iterableToArrayLimit(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var n = [],
      o = !0,
      a = !1,
      s,
      i;
    try {
      for (
        t = t.call(e);
        !(o = (s = t.next()).done) && (n.push(s.value), !(r && n.length === r));
        o = !0
      );
    } catch (c) {
      (a = !0), (i = c);
    } finally {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (a) throw i;
      }
    }
    return n;
  }
}
function _arrayWithHoles(e) {
  if (Array.isArray(e)) return e;
}
function _classCallCheck$1(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties$1(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass$1(e, r, t) {
  return (
    r && _defineProperties$1(e.prototype, r),
    t && _defineProperties$1(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var globalWindow = window_1.window,
  document$1 = window_1.document,
  location = window_1.location,
  KEY = 'storybook-channel',
  defaultEventOptions = { allowFunction: !0, maxDepth: 25 },
  PostmsgTransport = (function () {
    function e(r) {
      if (
        (_classCallCheck$1(this, e),
        (this.config = r),
        (this.buffer = void 0),
        (this.handler = void 0),
        (this.connected = void 0),
        (this.buffer = []),
        (this.handler = null),
        globalWindow.addEventListener(
          'message',
          this.handleEvent.bind(this),
          !1
        ),
        r.page !== 'manager' && r.page !== 'preview')
      )
        throw new Error(
          'postmsg-channel: "config.page" cannot be "'.concat(r.page, '"')
        );
    }
    return (
      _createClass$1(e, [
        {
          key: 'setHandler',
          value: function (t) {
            var n = this;
            this.handler = function () {
              for (
                var o = arguments.length, a = new Array(o), s = 0;
                s < o;
                s++
              )
                a[s] = arguments[s];
              t.apply(n, a),
                !n.connected &&
                  n.getLocalFrame().length &&
                  (n.flush(), (n.connected = !0));
            };
          }
        },
        {
          key: 'send',
          value: function (t, n) {
            var o = this,
              a = n || {},
              s = a.target,
              i = a.allowRegExp,
              c = a.allowFunction,
              l = a.allowSymbol,
              u = a.allowDate,
              y = a.allowUndefined,
              d = a.allowClass,
              g = a.maxDepth,
              h = a.space,
              b = a.lazyEval,
              w = Object.fromEntries(
                Object.entries({
                  allowRegExp: i,
                  allowFunction: c,
                  allowSymbol: l,
                  allowDate: u,
                  allowUndefined: y,
                  allowClass: d,
                  maxDepth: g,
                  space: h,
                  lazyEval: b
                }).filter(function (A) {
                  var P = _slicedToArray(A, 2);
                  P[0];
                  var D = P[1];
                  return typeof D != 'undefined';
                })
              ),
              S = Object.assign(
                {},
                defaultEventOptions,
                window_1.CHANNEL_OPTIONS || {},
                w
              );
            n && Number.isInteger(n.depth) && (S.maxDepth = n.depth);
            var T = this.getFrames(s),
              v = lib$1.parse(location.search, { ignoreQueryPrefix: !0 }),
              _ = stringify({ key: KEY, event: t, refId: v.refId }, S);
            return T.length
              ? (this.buffer.length && this.flush(),
                T.forEach(function (A) {
                  try {
                    A.postMessage(_, '*');
                  } catch {
                    console.error('sending over postmessage fail');
                  }
                }),
                Promise.resolve(null))
              : new Promise(function (A, P) {
                  o.buffer.push({ event: t, resolve: A, reject: P });
                });
          }
        },
        {
          key: 'flush',
          value: function () {
            var t = this,
              n = this.buffer;
            (this.buffer = []),
              n.forEach(function (o) {
                t.send(o.event).then(o.resolve).catch(o.reject);
              });
          }
        },
        {
          key: 'getFrames',
          value: function (t) {
            if (this.config.page === 'manager') {
              var n = _toConsumableArray(
                  document$1.querySelectorAll(
                    'iframe[data-is-storybook][data-is-loaded]'
                  )
                ),
                o = n
                  .filter(function (a) {
                    try {
                      return (
                        !!a.contentWindow &&
                        a.dataset.isStorybook !== void 0 &&
                        a.id === t
                      );
                    } catch {
                      return !1;
                    }
                  })
                  .map(function (a) {
                    return a.contentWindow;
                  });
              return o.length ? o : this.getCurrentFrames();
            }
            return globalWindow &&
              globalWindow.parent &&
              globalWindow.parent !== globalWindow
              ? [globalWindow.parent]
              : [];
          }
        },
        {
          key: 'getCurrentFrames',
          value: function () {
            if (this.config.page === 'manager') {
              var t = _toConsumableArray(
                document$1.querySelectorAll('[data-is-storybook="true"]')
              );
              return t.map(function (n) {
                return n.contentWindow;
              });
            }
            return globalWindow && globalWindow.parent
              ? [globalWindow.parent]
              : [];
          }
        },
        {
          key: 'getLocalFrame',
          value: function () {
            if (this.config.page === 'manager') {
              var t = _toConsumableArray(
                document$1.querySelectorAll('#storybook-preview-iframe')
              );
              return t.map(function (n) {
                return n.contentWindow;
              });
            }
            return globalWindow && globalWindow.parent
              ? [globalWindow.parent]
              : [];
          }
        },
        {
          key: 'handleEvent',
          value: function (t) {
            try {
              var n = t.data,
                o =
                  typeof n == 'string' && isJSON(n)
                    ? parse(n, window_1.CHANNEL_OPTIONS || {})
                    : n,
                a = o.key,
                s = o.event,
                i = o.refId;
              if (a === KEY) {
                var c =
                    this.config.page === 'manager'
                      ? '<span style="color: #37D5D3; background: black"> manager </span>'
                      : '<span style="color: #1EA7FD; background: black"> preview </span>',
                  l = Object.values(EVENTS).includes(s.type)
                    ? '<span style="color: #FF4785">'.concat(s.type, '</span>')
                    : '<span style="color: #FFAE00">'.concat(s.type, '</span>');
                if (
                  (i && (s.refId = i),
                  (s.source =
                    this.config.page === 'preview'
                      ? t.origin
                      : getEventSourceUrl(t)),
                  !s.source)
                ) {
                  pretty.error(
                    ''
                      .concat(c, ' received ')
                      .concat(
                        l,
                        ' but was unable to determine the source of the event'
                      )
                  );
                  return;
                }
                var u = ''
                  .concat(c, ' received ')
                  .concat(l, ' (')
                  .concat(n.length, ')');
                pretty.debug.apply(
                  pretty,
                  [
                    location.origin !== s.source
                      ? u
                      : ''
                          .concat(u, ' <span style="color: gray">(on ')
                          .concat(location.origin, ' from ')
                          .concat(s.source, ')</span>')
                  ].concat(_toConsumableArray(s.args))
                ),
                  this.handler(s);
              }
            } catch (y) {
              logger.error(y);
            }
          }
        }
      ]),
      e
    );
  })(),
  getEventSourceUrl = function e(r) {
    var t = _toConsumableArray(
        document$1.querySelectorAll('iframe[data-is-storybook]')
      ),
      n = t.filter(function (d) {
        try {
          return d.contentWindow === r.source;
        } catch {}
        var g = d.getAttribute('src'),
          h;
        try {
          var b = new URL(g, document$1.location);
          h = b.origin;
        } catch {
          return !1;
        }
        return h === r.origin;
      }),
      o = _toArray(n),
      a = o[0],
      s = o.slice(1);
    if (a && s.length === 0) {
      var i = a.getAttribute('src'),
        c = new URL(i, document$1.location),
        l = c.protocol,
        u = c.host,
        y = c.pathname;
      return ''.concat(l, '//').concat(u).concat(y);
    }
    return (
      s.length > 0 &&
        logger.error('found multiple candidates for event source'),
      null
    );
  };
function createChannel$1(e) {
  var r = e.page,
    t = new PostmsgTransport({ page: r });
  return new Channel$1({ transport: t });
}
function _classCallCheck(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var n = r[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n);
  }
}
function _createClass(e, r, t) {
  return (
    r && _defineProperties(e.prototype, r),
    t && _defineProperties(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
var WebSocket = window_1.WebSocket,
  WebsocketTransport = (function () {
    function e(r) {
      var t = r.url,
        n = r.onError;
      _classCallCheck(this, e),
        (this.socket = void 0),
        (this.handler = void 0),
        (this.buffer = []),
        (this.isReady = !1),
        this.connect(t, n);
    }
    return (
      _createClass(e, [
        {
          key: 'setHandler',
          value: function (t) {
            this.handler = t;
          }
        },
        {
          key: 'send',
          value: function (t) {
            this.isReady ? this.sendNow(t) : this.sendLater(t);
          }
        },
        {
          key: 'sendLater',
          value: function (t) {
            this.buffer.push(t);
          }
        },
        {
          key: 'sendNow',
          value: function (t) {
            var n = stringify(t, { maxDepth: 15, allowFunction: !0 });
            this.socket.send(n);
          }
        },
        {
          key: 'flush',
          value: function () {
            var t = this,
              n = this.buffer;
            (this.buffer = []),
              n.forEach(function (o) {
                return t.send(o);
              });
          }
        },
        {
          key: 'connect',
          value: function (t, n) {
            var o = this;
            (this.socket = new WebSocket(t)),
              (this.socket.onopen = function () {
                (o.isReady = !0), o.flush();
              }),
              (this.socket.onmessage = function (a) {
                var s = a.data,
                  i = typeof s == 'string' && isJSON(s) ? parse(s) : s;
                o.handler(i);
              }),
              (this.socket.onerror = function (a) {
                n && n(a);
              });
          }
        }
      ]),
      e
    );
  })();
function createChannel(e) {
  var r = e.url,
    t = e.async,
    n = t === void 0 ? !1 : t,
    o = e.onError,
    a =
      o === void 0
        ? function (i) {
            return logger.warn(i);
          }
        : o,
    s = new WebsocketTransport({ url: r, onError: a });
  return new Channel({ transport: s, async: n });
}
const channel = createChannel$1({ page: 'preview' });
addons.setChannel(channel);
window.__STORYBOOK_ADDONS_CHANNEL__ = channel;
const { SERVER_CHANNEL_URL } = globalThis;
if (SERVER_CHANNEL_URL) {
  const e = createChannel({ url: SERVER_CHANNEL_URL });
  addons.setServerChannel(e), (window.__STORYBOOK_SERVER_CHANNEL__ = e);
}
const importers = {
  './src/stories/Introduction.stories.mdx': async () =>
    __vitePreload(
      () => import('./Introduction.stories.1da6de74.js'),
      [
        'assets/Introduction.stories.1da6de74.js',
        'assets/index.d1b1a1f8.js',
        'assets/Props.48585ce3.js',
        'assets/jsx-runtime.bd940121.js',
        'assets/string.bf3fd91c.js'
      ]
    ),
  './src/stories/Button.stories.tsx': async () =>
    __vitePreload(
      () => import('./Button.stories.b513e0df.js'),
      [
        'assets/Button.stories.b513e0df.js',
        'assets/Button.490d214f.js',
        'assets/Button.6a8aad5b.css',
        'assets/jsx-runtime.bd940121.js',
        'assets/index.d1b1a1f8.js'
      ]
    ),
  './src/stories/Header.stories.tsx': async () =>
    __vitePreload(
      () => import('./Header.stories.48f201ff.js'),
      [
        'assets/Header.stories.48f201ff.js',
        'assets/Header.7b5d5bdb.js',
        'assets/Header.006ea3b7.css',
        'assets/Button.490d214f.js',
        'assets/Button.6a8aad5b.css',
        'assets/jsx-runtime.bd940121.js',
        'assets/index.d1b1a1f8.js'
      ]
    ),
  './src/stories/Page.stories.tsx': async () =>
    __vitePreload(
      () => import('./Page.stories.4551adda.js'),
      [
        'assets/Page.stories.4551adda.js',
        'assets/Page.stories.305b066f.css',
        'assets/index.979b7f4c.js',
        'assets/instrumenter.4d3b6f19.js',
        'assets/index.d1b1a1f8.js',
        'assets/Header.7b5d5bdb.js',
        'assets/Header.006ea3b7.css',
        'assets/Button.490d214f.js',
        'assets/Button.6a8aad5b.css',
        'assets/jsx-runtime.bd940121.js'
      ]
    )
};
async function importFn(e) {
  return importers[e]();
}
const getProjectAnnotations = async () =>
    composeConfigs(
      await Promise.all([
        __vitePreload(
          () => import('./config.62b4f0eb.js'),
          [
            'assets/config.62b4f0eb.js',
            'assets/index.d1b1a1f8.js',
            'assets/index.979b7f4c.js',
            'assets/string.bf3fd91c.js',
            'assets/jsx-runtime.bd940121.js'
          ]
        ),
        __vitePreload(
          () => import('./config.ccf30da1.js'),
          [
            'assets/config.ccf30da1.js',
            'assets/index.d1b1a1f8.js',
            'assets/index.cf63e054.js',
            'assets/jsx-runtime.bd940121.js'
          ]
        ),
        __vitePreload(
          () => import('./preview.337ff7b0.js'),
          ['assets/preview.337ff7b0.js', 'assets/make-decorator.3769f4d4.js']
        ),
        __vitePreload(() => import('./preview.e0b4c37a.js'), []),
        __vitePreload(
          () => import('./preview.b1eac045.js'),
          ['assets/preview.b1eac045.js', 'assets/make-decorator.3769f4d4.js']
        ),
        __vitePreload(() => import('./preview.a6cd6463.js'), []),
        __vitePreload(() => import('./preview.4ff8012a.js'), []),
        __vitePreload(() => import('./preview.71574cf0.js'), []),
        __vitePreload(
          () => import('./preview.ca74a57c.js'),
          ['assets/preview.ca74a57c.js', 'assets/instrumenter.4d3b6f19.js']
        ),
        __vitePreload(() => import('./preview.5dfc337f.js'), [])
      ])
    ),
  preview = new PreviewWeb();
window.__STORYBOOK_PREVIEW__ = preview;
window.__STORYBOOK_STORY_STORE__ = preview.storyStore;
window.__STORYBOOK_CLIENT_API__ = new ClientApi({
  storyStore: preview.storyStore
});
preview.initialize({ importFn, getProjectAnnotations });
export {
  Events as E,
  FORCE_REMOUNT as F,
  IGNORED_EXCEPTION as I,
  NAVIGATE_URL as N,
  STORY_CHANGED as S,
  _baseGetTag as _,
  combineParameters as a,
  isObjectLike_1 as b,
  commonjsGlobal as c,
  dedent as d,
  isPlainObject_1 as e,
  isFunction_1$1 as f,
  getAugmentedNamespace as g,
  addons as h,
  isArray_1 as i,
  browser as j,
  __vitePreload as k,
  logger as l,
  mapValues_1 as m,
  SELECT_STORY as n,
  useMemo as o,
  STORY_RENDER_PHASE_CHANGED as p,
  once as q,
  SET_CURRENT_STORY as r,
  memoize$2 as s,
  dist as t,
  useEffect as u,
  lib$1 as v,
  window_1 as w,
  filterArgTypes as x,
  fastDeepEqual as y,
  getDefaultExportFromCjs as z
};
//# sourceMappingURL=iframe.99391157.js.map
