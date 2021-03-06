import {
  w as m,
  q as K,
  h as W,
  F as j,
  p as G,
  r as F,
  I as H
} from './iframe.99391157.js';
var b;
(function (n) {
  (n.DONE = 'done'),
    (n.ERROR = 'error'),
    (n.ACTIVE = 'active'),
    (n.WAITING = 'waiting');
})(b || (b = {}));
var R;
function T(n) {
  return (
    (T =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    T(n)
  );
}
function V(n, t) {
  if (n == null) return {};
  var r = z(n, t),
    e,
    u;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (u = 0; u < o.length; u++)
      (e = o[u]),
        !(t.indexOf(e) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(n, e) || (r[e] = n[e]));
  }
  return r;
}
function z(n, t) {
  if (n == null) return {};
  var r = {},
    e = Object.keys(n),
    u,
    o;
  for (o = 0; o < e.length; o++)
    (u = e[o]), !(t.indexOf(u) >= 0) && (r[u] = n[u]);
  return r;
}
function X(n) {
  var t = q(n, 'string');
  return T(t) === 'symbol' ? t : String(t);
}
function q(n, t) {
  if (T(n) !== 'object' || n === null) return n;
  var r = n[Symbol.toPrimitive];
  if (r !== void 0) {
    var e = r.call(n, t || 'default');
    if (T(e) !== 'object') return e;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(n);
}
function E(n) {
  return Z(n) || Q(n) || L(n) || J();
}
function J() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Q(n) {
  if (
    (typeof Symbol != 'undefined' && n[Symbol.iterator] != null) ||
    n['@@iterator'] != null
  )
    return Array.from(n);
}
function Z(n) {
  if (Array.isArray(n)) return C(n);
}
function N(n, t, r) {
  return (
    t in n
      ? Object.defineProperty(n, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (n[t] = r),
    n
  );
}
function tt(n, t) {
  if (!(n instanceof t))
    throw new TypeError('Cannot call a class as a function');
}
function P(n, t) {
  for (var r = 0; r < t.length; r++) {
    var e = t[r];
    (e.enumerable = e.enumerable || !1),
      (e.configurable = !0),
      'value' in e && (e.writable = !0),
      Object.defineProperty(n, e.key, e);
  }
}
function et(n, t, r) {
  return (
    t && P(n.prototype, t),
    r && P(n, r),
    Object.defineProperty(n, 'prototype', { writable: !1 }),
    n
  );
}
function B(n, t) {
  return it(n) || rt(n, t) || L(n, t) || nt();
}
function nt() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L(n, t) {
  if (!!n) {
    if (typeof n == 'string') return C(n, t);
    var r = Object.prototype.toString.call(n).slice(8, -1);
    if (
      (r === 'Object' && n.constructor && (r = n.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(n);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return C(n, t);
  }
}
function C(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var r = 0, e = new Array(t); r < t; r++) e[r] = n[r];
  return e;
}
function rt(n, t) {
  var r =
    n == null
      ? null
      : (typeof Symbol != 'undefined' && n[Symbol.iterator]) || n['@@iterator'];
  if (r != null) {
    var e = [],
      u = !0,
      o = !1,
      v,
      g;
    try {
      for (
        r = r.call(n);
        !(u = (v = r.next()).done) && (e.push(v.value), !(t && e.length === t));
        u = !0
      );
    } catch (d) {
      (o = !0), (g = d);
    } finally {
      try {
        !u && r.return != null && r.return();
      } finally {
        if (o) throw g;
      }
    }
    return e;
  }
}
function it(n) {
  if (Array.isArray(n)) return n;
}
var O = {
    CALL: 'instrumenter/call',
    SYNC: 'instrumenter/sync',
    START: 'instrumenter/start',
    BACK: 'instrumenter/back',
    GOTO: 'instrumenter/goto',
    NEXT: 'instrumenter/next',
    END: 'instrumenter/end'
  },
  M =
    ((R = m.FEATURES) === null || R === void 0
      ? void 0
      : R.interactionsDebugger) !== !0,
  k = { debugger: !M, start: !1, back: !1, goto: !1, next: !1, end: !1 },
  x = new Error(
    'This function ran after the play function completed. Did you forget to `await` it?'
  ),
  U = function (t) {
    return Object.prototype.toString.call(t) === '[object Object]';
  },
  at = function (t) {
    return Object.prototype.toString.call(t) === '[object Module]';
  },
  st = function (t) {
    if (!U(t) && !at(t)) return !1;
    if (t.constructor === void 0) return !0;
    var r = t.constructor.prototype;
    return !(
      !U(r) || Object.prototype.hasOwnProperty.call(r, 'isPrototypeOf') === !1
    );
  },
  ot = function (t) {
    try {
      return new t.constructor();
    } catch {
      return {};
    }
  },
  A = function () {
    return {
      renderPhase: void 0,
      isDebugging: !1,
      isPlaying: !1,
      isLocked: !1,
      cursor: 0,
      calls: [],
      shadowCalls: [],
      callRefsByResult: new Map(),
      chainedCallIds: new Set(),
      parentId: void 0,
      playUntil: void 0,
      resolvers: {},
      syncTimeout: void 0,
      forwardedException: void 0
    };
  },
  $ = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
      e = (r ? t.shadowCalls : t.calls).filter(function (o) {
        return o.retain;
      });
    if (!!e.length) {
      var u = new Map(
        Array.from(t.callRefsByResult.entries()).filter(function (o) {
          var v = B(o, 2),
            g = v[1];
          return g.retain;
        })
      );
      return { cursor: e.length, calls: e, callRefsByResult: u };
    }
  },
  ut = (function () {
    function n() {
      var t = this;
      tt(this, n),
        (this.channel = void 0),
        (this.initialized = !1),
        (this.state = void 0),
        (this.channel = W.getChannel()),
        (this.state =
          m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ ||
          {});
      var r = function (s) {
        var i = s.storyId,
          l = s.isPlaying,
          h = l === void 0 ? !0 : l,
          f = s.isDebugging,
          a = f === void 0 ? !1 : f,
          c = t.getState(i);
        t.setState(
          i,
          Object.assign({}, A(), $(c, a), {
            shadowCalls: a ? c.shadowCalls : [],
            chainedCallIds: a ? c.chainedCallIds : new Set(),
            playUntil: a ? c.playUntil : void 0,
            isPlaying: h,
            isDebugging: a
          })
        ),
          a || t.sync(i);
      };
      this.channel.on(j, r),
        this.channel.on(G, function (d) {
          var s = d.storyId,
            i = d.newPhase,
            l = t.getState(s),
            h = l.isDebugging,
            f = l.forwardedException;
          if (
            (t.setState(s, { renderPhase: i }),
            i === 'playing' && r({ storyId: s, isDebugging: h }),
            i === 'played' &&
              (t.setState(s, {
                isLocked: !1,
                isPlaying: !1,
                isDebugging: !1,
                forwardedException: void 0
              }),
              f))
          )
            throw f;
        }),
        this.channel.on(F, function () {
          t.initialized ? t.cleanup() : (t.initialized = !0);
        });
      var e = function (s) {
          var i = s.storyId,
            l = s.playUntil;
          t.getState(i).isDebugging ||
            t.setState(i, function (f) {
              var a = f.calls;
              return {
                calls: [],
                shadowCalls: a.map(function (c) {
                  return Object.assign({}, c, { status: b.WAITING });
                }),
                isDebugging: !0
              };
            });
          var h = t.getLog(i);
          t.setState(i, function (f) {
            var a,
              c = f.shadowCalls,
              _ = c.findIndex(function (y) {
                return y.id === h[0].callId;
              });
            return {
              playUntil:
                l ||
                ((a = c
                  .slice(0, _)
                  .filter(function (y) {
                    return y.interceptable;
                  })
                  .slice(-1)[0]) === null || a === void 0
                  ? void 0
                  : a.id)
            };
          }),
            t.channel.emit(j, { storyId: i, isDebugging: !0 });
        },
        u = function (s) {
          var i,
            l = s.storyId,
            h = t.getState(l),
            f = h.isDebugging,
            a = t.getLog(l),
            c = f
              ? a.findIndex(function (_) {
                  var y = _.status;
                  return y === b.WAITING;
                })
              : a.length;
          e({
            storyId: l,
            playUntil:
              (i = a[c - 2]) === null || i === void 0 ? void 0 : i.callId
          });
        },
        o = function (s) {
          var i = s.storyId,
            l = s.callId,
            h = t.getState(i),
            f = h.calls,
            a = h.shadowCalls,
            c = h.resolvers,
            _ = f.find(function (I) {
              var w = I.id;
              return w === l;
            }),
            y = a.find(function (I) {
              var w = I.id;
              return w === l;
            });
          if (!_ && y && Object.values(c).length > 0) {
            var p,
              S =
                (p = t.getLog(i).find(function (I) {
                  return I.status === b.WAITING;
                })) === null || p === void 0
                  ? void 0
                  : p.callId;
            y.id !== S && t.setState(i, { playUntil: y.id }),
              Object.values(c).forEach(function (I) {
                return I();
              });
          } else e({ storyId: i, playUntil: l });
        },
        v = function (s) {
          var i = s.storyId,
            l = t.getState(i),
            h = l.resolvers;
          if (Object.values(h).length > 0)
            Object.values(h).forEach(function (c) {
              return c();
            });
          else {
            var f,
              a =
                (f = t.getLog(i).find(function (c) {
                  return c.status === b.WAITING;
                })) === null || f === void 0
                  ? void 0
                  : f.callId;
            a ? e({ storyId: i, playUntil: a }) : g({ storyId: i });
          }
        },
        g = function (s) {
          var i = s.storyId;
          t.setState(i, { playUntil: void 0, isDebugging: !1 }),
            Object.values(t.getState(i).resolvers).forEach(function (l) {
              return l();
            });
        };
      this.channel.on(O.START, e),
        this.channel.on(O.BACK, u),
        this.channel.on(O.GOTO, o),
        this.channel.on(O.NEXT, v),
        this.channel.on(O.END, g);
    }
    return (
      et(n, [
        {
          key: 'getState',
          value: function (r) {
            return this.state[r] || A();
          }
        },
        {
          key: 'setState',
          value: function (r, e) {
            var u = this.getState(r),
              o = typeof e == 'function' ? e(u) : e;
            (this.state = Object.assign(
              {},
              this.state,
              N({}, r, Object.assign({}, u, o))
            )),
              (m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
                this.state);
          }
        },
        {
          key: 'cleanup',
          value: function () {
            (this.state = Object.entries(this.state).reduce(function (r, e) {
              var u = B(e, 2),
                o = u[0],
                v = u[1],
                g = $(v);
              return g && (r[o] = Object.assign(A(), g)), r;
            }, {})),
              this.channel.emit(O.SYNC, { controlStates: k, logItems: [] }),
              (m.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ =
                this.state);
          }
        },
        {
          key: 'getLog',
          value: function (r) {
            var e = this.getState(r),
              u = e.calls,
              o = e.shadowCalls,
              v = E(o);
            u.forEach(function (d, s) {
              v[s] = d;
            });
            var g = new Set();
            return v.reduceRight(function (d, s) {
              return (
                s.args.forEach(function (i) {
                  i != null && i.__callId__ && g.add(i.__callId__);
                }),
                s.path.forEach(function (i) {
                  i.__callId__ && g.add(i.__callId__);
                }),
                s.interceptable &&
                  !g.has(s.id) &&
                  (d.unshift({ callId: s.id, status: s.status }), g.add(s.id)),
                d
              );
            }, []);
          }
        },
        {
          key: 'instrument',
          value: function (r, e) {
            var u = this;
            if (!st(r)) return r;
            var o = e.mutate,
              v = o === void 0 ? !1 : o,
              g = e.path,
              d = g === void 0 ? [] : g;
            return Object.keys(r).reduce(
              function (s, i) {
                var l = r[i];
                return typeof l != 'function'
                  ? ((s[i] = u.instrument(
                      l,
                      Object.assign({}, e, { path: d.concat(i) })
                    )),
                    s)
                  : typeof l.__originalFn__ == 'function'
                  ? ((s[i] = l), s)
                  : ((s[i] = function () {
                      for (
                        var h = arguments.length, f = new Array(h), a = 0;
                        a < h;
                        a++
                      )
                        f[a] = arguments[a];
                      return u.track(i, l, f, e);
                    }),
                    (s[i].__originalFn__ = l),
                    Object.defineProperty(s[i], 'name', {
                      value: i,
                      writable: !1
                    }),
                    Object.keys(l).length > 0 &&
                      Object.assign(
                        s[i],
                        u.instrument(
                          Object.assign({}, l),
                          Object.assign({}, e, { path: d.concat(i) })
                        )
                      ),
                    s);
              },
              v ? r : ot(r)
            );
          }
        },
        {
          key: 'track',
          value: function (r, e, u, o) {
            var v,
              g,
              d,
              s,
              i =
                (u == null || (v = u[0]) === null || v === void 0
                  ? void 0
                  : v.__storyId__) ||
                ((g = m.window.__STORYBOOK_PREVIEW__) === null ||
                g === void 0 ||
                (d = g.urlStore) === null ||
                d === void 0 ||
                (s = d.selection) === null ||
                s === void 0
                  ? void 0
                  : s.storyId),
              l = this.getState(i),
              h = l.cursor,
              f = l.parentId;
            this.setState(i, { cursor: h + 1 });
            var a = ''
                .concat(f || i, ' [')
                .concat(h, '] ')
                .concat(r),
              c = o.path,
              _ = c === void 0 ? [] : c,
              y = o.intercept,
              p = y === void 0 ? !1 : y,
              S = o.retain,
              I = S === void 0 ? !1 : S,
              w = typeof p == 'function' ? p(r, _) : p,
              D = {
                id: a,
                parentId: f,
                storyId: i,
                cursor: h,
                path: _,
                method: r,
                args: u,
                interceptable: w,
                retain: I
              },
              Y = (w ? this.intercept : this.invoke).call(this, e, D, o);
            return this.instrument(
              Y,
              Object.assign({}, o, { mutate: !0, path: [{ __callId__: D.id }] })
            );
          }
        },
        {
          key: 'intercept',
          value: function (r, e, u) {
            var o = this,
              v = this.getState(e.storyId),
              g = v.chainedCallIds,
              d = v.isDebugging,
              s = v.playUntil,
              i = g.has(e.id);
            return !d || i || s
              ? (s === e.id && this.setState(e.storyId, { playUntil: void 0 }),
                this.invoke(r, e, u))
              : new Promise(function (l) {
                  o.setState(e.storyId, function (h) {
                    var f = h.resolvers;
                    return {
                      isLocked: !1,
                      resolvers: Object.assign({}, f, N({}, e.id, l))
                    };
                  });
                }).then(function () {
                  return (
                    o.setState(e.storyId, function (l) {
                      var h = l.resolvers,
                        f = e.id;
                      h[f];
                      var a = V(h, [f].map(X));
                      return { isLocked: !0, resolvers: a };
                    }),
                    o.invoke(r, e, u)
                  );
                });
          }
        },
        {
          key: 'invoke',
          value: function (r, e, u) {
            var o = this,
              v = this.getState(e.storyId),
              g = v.callRefsByResult,
              d = v.forwardedException,
              s = v.renderPhase,
              i = Object.assign({}, e, {
                args: e.args.map(function (a) {
                  if (g.has(a)) return g.get(a);
                  if (a instanceof m.window.HTMLElement) {
                    var c = a.prefix,
                      _ = a.localName,
                      y = a.id,
                      p = a.classList,
                      S = a.innerText,
                      I = Array.from(p);
                    return {
                      __element__: {
                        prefix: c,
                        localName: _,
                        id: y,
                        classNames: I,
                        innerText: S
                      }
                    };
                  }
                  return a;
                })
              });
            e.path.forEach(function (a) {
              a != null &&
                a.__callId__ &&
                o.setState(e.storyId, function (c) {
                  var _ = c.chainedCallIds;
                  return {
                    chainedCallIds: new Set(Array.from(_).concat(a.__callId__))
                  };
                });
            });
            var l = function (c) {
              if (c instanceof Error) {
                var _ = c.name,
                  y = c.message,
                  p = c.stack,
                  S = { name: _, message: y, stack: p };
                if (
                  (o.update(
                    Object.assign({}, i, { status: b.ERROR, exception: S })
                  ),
                  o.setState(e.storyId, function (I) {
                    return {
                      callRefsByResult: new Map(
                        [].concat(E(Array.from(I.callRefsByResult.entries())), [
                          [c, { __callId__: e.id, retain: e.retain }]
                        ])
                      )
                    };
                  }),
                  e.interceptable && c !== x)
                )
                  throw H;
                return o.setState(e.storyId, { forwardedException: c }), c;
              }
              throw c;
            };
            try {
              if (d)
                throw (
                  (this.setState(e.storyId, { forwardedException: void 0 }), d)
                );
              if (s === 'played' && !e.retain) throw x;
              var h = u.getArgs
                  ? u.getArgs(e, this.getState(e.storyId))
                  : e.args,
                f = r.apply(
                  void 0,
                  E(
                    h.map(function (a) {
                      return typeof a != 'function' || Object.keys(a).length
                        ? a
                        : function () {
                            var c = o.getState(e.storyId),
                              _ = c.cursor,
                              y = c.parentId;
                            o.setState(e.storyId, {
                              cursor: 0,
                              parentId: e.id
                            });
                            var p = function () {
                                return o.setState(e.storyId, {
                                  cursor: _,
                                  parentId: y
                                });
                              },
                              S = a.apply(void 0, arguments);
                            return S instanceof Promise ? S.then(p, p) : p(), S;
                          };
                    })
                  )
                );
              return (
                f &&
                  ['object', 'function', 'symbol'].includes(T(f)) &&
                  this.setState(e.storyId, function (a) {
                    return {
                      callRefsByResult: new Map(
                        [].concat(E(Array.from(a.callRefsByResult.entries())), [
                          [f, { __callId__: e.id, retain: e.retain }]
                        ])
                      )
                    };
                  }),
                this.update(
                  Object.assign({}, i, {
                    status: f instanceof Promise ? b.ACTIVE : b.DONE
                  })
                ),
                f instanceof Promise
                  ? f.then(function (a) {
                      return (
                        o.update(Object.assign({}, i, { status: b.DONE })), a
                      );
                    }, l)
                  : f
              );
            } catch (a) {
              return l(a);
            }
          }
        },
        {
          key: 'update',
          value: function (r) {
            var e = this;
            clearTimeout(this.getState(r.storyId).syncTimeout),
              this.channel.emit(O.CALL, r),
              this.setState(r.storyId, function (u) {
                var o = u.calls,
                  v = o.concat(r).reduce(function (g, d) {
                    return Object.assign(g, N({}, d.id, d));
                  }, {});
                return {
                  calls: Object.values(v).sort(function (g, d) {
                    return g.id.localeCompare(d.id, void 0, { numeric: !0 });
                  }),
                  syncTimeout: setTimeout(function () {
                    return e.sync(r.storyId);
                  }, 0)
                };
              });
          }
        },
        {
          key: 'sync',
          value: function (r) {
            var e = this.getState(r),
              u = e.isLocked,
              o = e.isPlaying,
              v = this.getLog(r),
              g = v.some(function (i) {
                return i.status === b.ACTIVE;
              });
            if (M || u || g || v.length === 0) {
              this.channel.emit(O.SYNC, { controlStates: k, logItems: v });
              return;
            }
            var d = v.some(function (i) {
                return [b.DONE, b.ERROR].includes(i.status);
              }),
              s = {
                debugger: !0,
                start: d,
                back: d,
                goto: !0,
                next: o,
                end: o
              };
            this.channel.emit(O.SYNC, { controlStates: s, logItems: v });
          }
        }
      ]),
      n
    );
  })();
function ct(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  try {
    if (m.window.parent === m.window) return n;
    m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ ||
      (m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new ut());
    var r = m.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;
    return r.instrument(n, t);
  } catch (e) {
    return K.warn(e), n;
  }
}
export { ct as i };
//# sourceMappingURL=instrumenter.4d3b6f19.js.map
