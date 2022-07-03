var T = Object.defineProperty;
var O = Object.getOwnPropertySymbols;
var k = Object.prototype.hasOwnProperty,
  A = Object.prototype.propertyIsEnumerable;
var _ = (r, e, t) =>
    e in r
      ? T(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (r[e] = t),
  y = (r, e) => {
    for (var t in e || (e = {})) k.call(e, t) && _(r, t, e[t]);
    if (O) for (var t of O(e)) A.call(e, t) && _(r, t, e[t]);
    return r;
  };
import { w as j, k as N } from './iframe.99391157.js';
import { r as d } from './index.d1b1a1f8.js';
import { r as v, R as M } from './index.cf63e054.js';
import { j as l } from './jsx-runtime.bd940121.js';
function w(r) {
  return (
    (w =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (e) {
            return typeof e;
          }
        : function (e) {
            return e &&
              typeof Symbol == 'function' &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e;
          }),
    w(r)
  );
}
function F(r, e) {
  if (!(r instanceof e))
    throw new TypeError('Cannot call a class as a function');
}
function P(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(r, n.key, n);
  }
}
function I(r, e, t) {
  return (
    e && P(r.prototype, e),
    t && P(r, t),
    Object.defineProperty(r, 'prototype', { writable: !1 }),
    r
  );
}
function W(r, e) {
  if (typeof e != 'function' && e !== null)
    throw new TypeError('Super expression must either be null or a function');
  (r.prototype = Object.create(e && e.prototype, {
    constructor: { value: r, writable: !0, configurable: !0 }
  })),
    Object.defineProperty(r, 'prototype', { writable: !1 }),
    e && R(r, e);
}
function R(r, e) {
  return (
    (R =
      Object.setPrototypeOf ||
      function (n, o) {
        return (n.__proto__ = o), n;
      }),
    R(r, e)
  );
}
function B(r) {
  var e = $();
  return function () {
    var n = h(r),
      o;
    if (e) {
      var i = h(this).constructor;
      o = Reflect.construct(n, arguments, i);
    } else o = n.apply(this, arguments);
    return C(this, o);
  };
}
function C(r, e) {
  if (e && (w(e) === 'object' || typeof e == 'function')) return e;
  if (e !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined'
    );
  return U(r);
}
function U(r) {
  if (r === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return r;
}
function $() {
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
function h(r) {
  return (
    (h = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }),
    h(r)
  );
}
function S(r, e, t, n, o, i, a) {
  try {
    var u = r[i](a),
      c = u.value;
  } catch (f) {
    t(f);
    return;
  }
  u.done ? e(c) : Promise.resolve(c).then(n, o);
}
function b(r) {
  return function () {
    var e = this,
      t = arguments;
    return new Promise(function (n, o) {
      var i = r.apply(e, t);
      function a(c) {
        S(i, n, o, a, u, 'next', c);
      }
      function u(c) {
        S(i, n, o, a, u, 'throw', c);
      }
      a(void 0);
    });
  };
}
var s = j.FRAMEWORK_OPTIONS,
  m = new Map(),
  ee = function (e, t) {
    var n = t.id,
      o = t.component;
    if (!o)
      throw new Error(
        'Unable to render story '.concat(
          n,
          ' as the component annotation is missing from the default export'
        )
      );
    return l(o, y({}, e));
  },
  G = (function () {
    var r = b(
      regeneratorRuntime.mark(function e(t, n) {
        var o;
        return regeneratorRuntime.wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                return (a.next = 2), V(n);
              case 2:
                return (
                  (o = a.sent),
                  a.abrupt(
                    'return',
                    new Promise(function (u) {
                      o
                        ? (o.render(t),
                          setTimeout(function () {
                            u(null);
                          }, 0))
                        : M.render(t, n, function () {
                            return u(null);
                          });
                    })
                  )
                );
              case 4:
              case 'end':
                return a.stop();
            }
        }, e);
      })
    );
    return function (t, n) {
      return r.apply(this, arguments);
    };
  })(),
  K =
    v.exports.version &&
    (v.exports.version.startsWith('18') ||
      v.exports.version.startsWith('0.0.0')),
  z = (s == null ? void 0 : s.legacyRootApi) !== !0,
  D = z && K,
  L = function (e) {
    var t = m.get(e);
    t && D ? (t.unmount(), m.delete(e)) : M.unmountComponentAtNode(e);
  },
  V = (function () {
    var r = b(
      regeneratorRuntime.mark(function e(t) {
        var n, o;
        return regeneratorRuntime.wrap(function (a) {
          for (;;)
            switch ((a.prev = a.next)) {
              case 0:
                if (D) {
                  a.next = 2;
                  break;
                }
                return a.abrupt('return', null);
              case 2:
                if (((n = m.get(t)), n)) {
                  a.next = 9;
                  break;
                }
                return (
                  (a.next = 6),
                  N(
                    () =>
                      import('./client.07e82a22.js').then(function (u) {
                        return u.c;
                      }),
                    [
                      'assets/client.07e82a22.js',
                      'assets/index.cf63e054.js',
                      'assets/index.d1b1a1f8.js'
                    ]
                  )
                );
              case 6:
                (o = a.sent.default), (n = o.createRoot(t)), m.set(t, n);
              case 9:
                return a.abrupt('return', n);
              case 10:
              case 'end':
                return a.stop();
            }
        }, e);
      })
    );
    return function (t) {
      return r.apply(this, arguments);
    };
  })(),
  q = (function (r) {
    W(t, r);
    var e = B(t);
    function t() {
      var n;
      F(this, t);
      for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++)
        i[a] = arguments[a];
      return (
        (n = e.call.apply(e, [this].concat(i))), (n.state = { hasError: !1 }), n
      );
    }
    return (
      I(
        t,
        [
          {
            key: 'componentDidMount',
            value: function () {
              var o = this.state.hasError,
                i = this.props.showMain;
              o || i();
            }
          },
          {
            key: 'componentDidCatch',
            value: function (o) {
              var i = this.props.showException;
              i(o);
            }
          },
          {
            key: 'render',
            value: function () {
              var o = this.state.hasError,
                i = this.props.children;
              return o ? null : i;
            }
          }
        ],
        [
          {
            key: 'getDerivedStateFromError',
            value: function () {
              return { hasError: !0 };
            }
          }
        ]
      ),
      t
    );
  })(d.exports.Component),
  x = s != null && s.strictMode ? d.exports.StrictMode : d.exports.Fragment;
function re(r, e) {
  return g.apply(this, arguments);
}
function g() {
  return (
    (g = b(
      regeneratorRuntime.mark(function r(e, t) {
        var n, o, i, a, u, c, f, E;
        return regeneratorRuntime.wrap(function (p) {
          for (;;)
            switch ((p.prev = p.next)) {
              case 0:
                return (
                  (n = e.storyContext),
                  (o = e.unboundStoryFn),
                  (i = e.showMain),
                  (a = e.showException),
                  (u = e.forceRemount),
                  (c = o),
                  (f = l(q, {
                    showMain: i,
                    showException: a,
                    children: l(c, y({}, n))
                  })),
                  (E = x ? l(x, { children: f }) : f),
                  u && L(t),
                  (p.next = 7),
                  G(E, t)
                );
              case 7:
              case 'end':
                return p.stop();
            }
        }, r);
      })
    )),
    g.apply(this, arguments)
  );
}
var te = { framework: 'react' };
export { te as parameters, ee as render, re as renderToDOM };
//# sourceMappingURL=config.ccf30da1.js.map
