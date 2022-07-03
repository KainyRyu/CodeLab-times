var Wo = Object.defineProperty,
  Bo = Object.defineProperties;
var Fo = Object.getOwnPropertyDescriptors;
var Js = Object.getOwnPropertySymbols;
var Uo = Object.prototype.hasOwnProperty,
  Qo = Object.prototype.propertyIsEnumerable;
var Xs = (le, U, sr) =>
    U in le
      ? Wo(le, U, { enumerable: !0, configurable: !0, writable: !0, value: sr })
      : (le[U] = sr),
  Zs = (le, U) => {
    for (var sr in U || (U = {})) Uo.call(U, sr) && Xs(le, sr, U[sr]);
    if (Js) for (var sr of Js(U)) Qo.call(U, sr) && Xs(le, sr, U[sr]);
    return le;
  },
  $s = (le, U) => Bo(le, Fo(U));
import { Z as Vo, X as qo } from './Props.48585ce3.js';
import { r as cn } from './index.d1b1a1f8.js';
import './iframe.99391157.js';
import { a as Ko, j as wa } from './jsx-runtime.bd940121.js';
import './string.bf3fd91c.js';
function Ma(le) {
  return (
    (Ma =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (U) {
            return typeof U;
          }
        : function (U) {
            return U &&
              typeof Symbol == 'function' &&
              U.constructor === Symbol &&
              U !== Symbol.prototype
              ? 'symbol'
              : typeof U;
          }),
    Ma(le)
  );
}
var eo = { exports: {} };
/*!
 * OverlayScrollbars
 * https://github.com/KingSora/OverlayScrollbars
 *
 * Version: 1.13.0
 *
 * Copyright KingSora | Rene Haas.
 * https://github.com/KingSora
 *
 * Released under the MIT license.
 * Date: 02.08.2020
 */ (function (le) {
  (function (U, sr) {
    le.exports = sr(U, U.document, void 0);
  })(typeof window != 'undefined' ? window : Vo, function (U, sr, z) {
    var zt = 'OverlayScrollbars',
      _ = {
        o: 'object',
        f: 'function',
        a: 'array',
        s: 'string',
        b: 'boolean',
        n: 'number',
        u: 'undefined',
        z: 'null'
      },
      i = {
        c: 'class',
        s: 'style',
        i: 'id',
        l: 'length',
        p: 'prototype',
        ti: 'tabindex',
        oH: 'offsetHeight',
        cH: 'clientHeight',
        sH: 'scrollHeight',
        oW: 'offsetWidth',
        cW: 'clientWidth',
        sW: 'scrollWidth',
        hOP: 'hasOwnProperty',
        bCR: 'getBoundingClientRect'
      },
      Se = (function () {
        var A = {},
          O = {},
          x = ['-webkit-', '-moz-', '-o-', '-ms-'],
          e = ['WebKit', 'Moz', 'O', 'MS'];
        function u(f) {
          return f.charAt(0).toUpperCase() + f.slice(1);
        }
        return {
          _cssPrefixes: x,
          _jsPrefixes: e,
          _cssProperty: function (d) {
            var B = O[d];
            if (O[i.hOP](d)) return B;
            for (
              var or = u(d), w = sr.createElement('div')[i.s], M, ur = 0, R, Sr;
              ur < x.length;
              ur++
            )
              for (
                Sr = x[ur].replace(/-/g, ''),
                  M = [d, x[ur] + d, Sr + or, u(Sr) + or],
                  R = 0;
                R < M[i.l];
                R++
              )
                if (w[M[R]] !== z) {
                  B = M[R];
                  break;
                }
            return (O[d] = B), B;
          },
          _cssPropertyValue: function (d, B, or) {
            var w = d + ' ' + B,
              M = O[w];
            if (O[i.hOP](w)) return M;
            for (
              var ur = sr.createElement('div')[i.s],
                R = B.split(' '),
                Sr = or || '',
                H = 0,
                J = -1,
                G;
              H < R[i.l];
              H++
            )
              for (; J < Se._cssPrefixes[i.l]; J++)
                if (
                  ((G = J < 0 ? R[H] : Se._cssPrefixes[J] + R[H]),
                  (ur.cssText = d + ':' + G + Sr),
                  ur[i.l])
                ) {
                  M = G;
                  break;
                }
            return (O[w] = M), M;
          },
          _jsAPI: function (d, B, or) {
            var w = 0,
              M = A[d];
            if (!A[i.hOP](d)) {
              for (M = U[d]; w < e[i.l]; w++)
                M = M || U[(B ? e[w] : e[w].toLowerCase()) + u(d)];
              A[d] = M;
            }
            return M || or;
          }
        };
      })(),
      S = (function () {
        function A(x) {
          return x
            ? U.innerWidth || sr.documentElement[i.cW] || sr.body[i.cW]
            : U.innerHeight || sr.documentElement[i.cH] || sr.body[i.cH];
        }
        function O(x, e) {
          if (Ma(x) != _.f) throw "Can't bind function!";
          var u = i.p,
            f = Array[u].slice.call(arguments, 2),
            d = function () {},
            B = function () {
              return x.apply(
                this instanceof d ? this : e,
                f.concat(Array[u].slice.call(arguments))
              );
            };
          return x[u] && (d[u] = x[u]), (B[u] = new d()), B;
        }
        return {
          wW: O(A, 0, !0),
          wH: O(A, 0),
          mO: O(Se._jsAPI, 0, 'MutationObserver', !0),
          rO: O(Se._jsAPI, 0, 'ResizeObserver', !0),
          rAF: O(Se._jsAPI, 0, 'requestAnimationFrame', !1, function (x) {
            return U.setTimeout(x, 1e3 / 60);
          }),
          cAF: O(Se._jsAPI, 0, 'cancelAnimationFrame', !1, function (x) {
            return U.clearTimeout(x);
          }),
          now: function () {
            return (Date.now && Date.now()) || new Date().getTime();
          },
          stpP: function (e) {
            e.stopPropagation ? e.stopPropagation() : (e.cancelBubble = !0);
          },
          prvD: function (e) {
            e.preventDefault && e.cancelable
              ? e.preventDefault()
              : (e.returnValue = !1);
          },
          page: function (e) {
            e = e.originalEvent || e;
            var u = 'page',
              f = 'client',
              d = 'X',
              B = 'Y',
              or = e.target || e.srcElement || sr,
              w = or.ownerDocument || sr,
              M = w.documentElement,
              ur = w.body;
            if (e.touches !== z) {
              var R = e.touches[0];
              return { x: R[u + d], y: R[u + B] };
            }
            return !e[u + d] && e[f + d] && e[f + d] != null
              ? {
                  x:
                    e[f + d] +
                    ((M && M.scrollLeft) || (ur && ur.scrollLeft) || 0) -
                    ((M && M.clientLeft) || (ur && ur.clientLeft) || 0),
                  y:
                    e[f + B] +
                    ((M && M.scrollTop) || (ur && ur.scrollTop) || 0) -
                    ((M && M.clientTop) || (ur && ur.clientTop) || 0)
                }
              : { x: e[u + d], y: e[u + B] };
          },
          mBtn: function (e) {
            var u = e.button;
            return !e.which && u !== z
              ? u & 1
                ? 1
                : u & 2
                ? 3
                : u & 4
                ? 2
                : 0
              : e.which;
          },
          inA: function (e, u) {
            for (var f = 0; f < u[i.l]; f++)
              try {
                if (u[f] === e) return f;
              } catch {}
            return -1;
          },
          isA: function (e) {
            var u = Array.isArray;
            return u ? u(e) : this.type(e) == _.a;
          },
          type: function (e) {
            return e === z || e === null
              ? e + ''
              : Object[i.p].toString
                  .call(e)
                  .replace(/^\[object (.+)\]$/, '$1')
                  .toLowerCase();
          },
          bind: O
        };
      })(),
      I = Math,
      vt = U.jQuery,
      ao = (function () {
        var A = {
          p: I.PI,
          c: I.cos,
          s: I.sin,
          w: I.pow,
          t: I.sqrt,
          n: I.asin,
          a: I.abs,
          o: 1.70158
        };
        return {
          swing: function (x, e, u, f, d) {
            return 0.5 - A.c(x * A.p) / 2;
          },
          linear: function (x, e, u, f, d) {
            return x;
          },
          easeInQuad: function (x, e, u, f, d) {
            return f * (e /= d) * e + u;
          },
          easeOutQuad: function (x, e, u, f, d) {
            return -f * (e /= d) * (e - 2) + u;
          },
          easeInOutQuad: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e + u
              : (-f / 2) * (--e * (e - 2) - 1) + u;
          },
          easeInCubic: function (x, e, u, f, d) {
            return f * (e /= d) * e * e + u;
          },
          easeOutCubic: function (x, e, u, f, d) {
            return f * ((e = e / d - 1) * e * e + 1) + u;
          },
          easeInOutCubic: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e + u
              : (f / 2) * ((e -= 2) * e * e + 2) + u;
          },
          easeInQuart: function (x, e, u, f, d) {
            return f * (e /= d) * e * e * e + u;
          },
          easeOutQuart: function (x, e, u, f, d) {
            return -f * ((e = e / d - 1) * e * e * e - 1) + u;
          },
          easeInOutQuart: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e * e + u
              : (-f / 2) * ((e -= 2) * e * e * e - 2) + u;
          },
          easeInQuint: function (x, e, u, f, d) {
            return f * (e /= d) * e * e * e * e + u;
          },
          easeOutQuint: function (x, e, u, f, d) {
            return f * ((e = e / d - 1) * e * e * e * e + 1) + u;
          },
          easeInOutQuint: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (f / 2) * e * e * e * e * e + u
              : (f / 2) * ((e -= 2) * e * e * e * e + 2) + u;
          },
          easeInSine: function (x, e, u, f, d) {
            return -f * A.c((e / d) * (A.p / 2)) + f + u;
          },
          easeOutSine: function (x, e, u, f, d) {
            return f * A.s((e / d) * (A.p / 2)) + u;
          },
          easeInOutSine: function (x, e, u, f, d) {
            return (-f / 2) * (A.c((A.p * e) / d) - 1) + u;
          },
          easeInExpo: function (x, e, u, f, d) {
            return e == 0 ? u : f * A.w(2, 10 * (e / d - 1)) + u;
          },
          easeOutExpo: function (x, e, u, f, d) {
            return e == d ? u + f : f * (-A.w(2, (-10 * e) / d) + 1) + u;
          },
          easeInOutExpo: function (x, e, u, f, d) {
            return e == 0
              ? u
              : e == d
              ? u + f
              : (e /= d / 2) < 1
              ? (f / 2) * A.w(2, 10 * (e - 1)) + u
              : (f / 2) * (-A.w(2, -10 * --e) + 2) + u;
          },
          easeInCirc: function (x, e, u, f, d) {
            return -f * (A.t(1 - (e /= d) * e) - 1) + u;
          },
          easeOutCirc: function (x, e, u, f, d) {
            return f * A.t(1 - (e = e / d - 1) * e) + u;
          },
          easeInOutCirc: function (x, e, u, f, d) {
            return (e /= d / 2) < 1
              ? (-f / 2) * (A.t(1 - e * e) - 1) + u
              : (f / 2) * (A.t(1 - (e -= 2) * e) + 1) + u;
          },
          easeInElastic: function (x, e, u, f, d) {
            var B = A.o,
              or = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d) == 1
              ? u + f
              : (or || (or = d * 0.3),
                w < A.a(f)
                  ? ((w = f), (B = or / 4))
                  : (B = (or / (2 * A.p)) * A.n(f / w)),
                -(
                  w *
                  A.w(2, 10 * (e -= 1)) *
                  A.s(((e * d - B) * (2 * A.p)) / or)
                ) + u);
          },
          easeOutElastic: function (x, e, u, f, d) {
            var B = A.o,
              or = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d) == 1
              ? u + f
              : (or || (or = d * 0.3),
                w < A.a(f)
                  ? ((w = f), (B = or / 4))
                  : (B = (or / (2 * A.p)) * A.n(f / w)),
                w * A.w(2, -10 * e) * A.s(((e * d - B) * (2 * A.p)) / or) +
                  f +
                  u);
          },
          easeInOutElastic: function (x, e, u, f, d) {
            var B = A.o,
              or = 0,
              w = f;
            return e == 0
              ? u
              : (e /= d / 2) == 2
              ? u + f
              : (or || (or = d * (0.3 * 1.5)),
                w < A.a(f)
                  ? ((w = f), (B = or / 4))
                  : (B = (or / (2 * A.p)) * A.n(f / w)),
                e < 1
                  ? -0.5 *
                      (w *
                        A.w(2, 10 * (e -= 1)) *
                        A.s(((e * d - B) * (2 * A.p)) / or)) +
                    u
                  : w *
                      A.w(2, -10 * (e -= 1)) *
                      A.s(((e * d - B) * (2 * A.p)) / or) *
                      0.5 +
                    f +
                    u);
          },
          easeInBack: function (x, e, u, f, d, B) {
            return (B = B || A.o), f * (e /= d) * e * ((B + 1) * e - B) + u;
          },
          easeOutBack: function (x, e, u, f, d, B) {
            return (
              (B = B || A.o),
              f * ((e = e / d - 1) * e * ((B + 1) * e + B) + 1) + u
            );
          },
          easeInOutBack: function (x, e, u, f, d, B) {
            return (
              (B = B || A.o),
              (e /= d / 2) < 1
                ? (f / 2) * (e * e * (((B *= 1.525) + 1) * e - B)) + u
                : (f / 2) * ((e -= 2) * e * (((B *= 1.525) + 1) * e + B) + 2) +
                  u
            );
          },
          easeInBounce: function (x, e, u, f, d) {
            return f - this.easeOutBounce(x, d - e, 0, f, d) + u;
          },
          easeOutBounce: function (x, e, u, f, d) {
            var B = 7.5625;
            return (e /= d) < 1 / 2.75
              ? f * (B * e * e) + u
              : e < 2 / 2.75
              ? f * (B * (e -= 1.5 / 2.75) * e + 0.75) + u
              : e < 2.5 / 2.75
              ? f * (B * (e -= 2.25 / 2.75) * e + 0.9375) + u
              : f * (B * (e -= 2.625 / 2.75) * e + 0.984375) + u;
          },
          easeInOutBounce: function (x, e, u, f, d) {
            return e < d / 2
              ? this.easeInBounce(x, e * 2, 0, f, d) * 0.5 + u
              : this.easeOutBounce(x, e * 2 - d, 0, f, d) * 0.5 + f * 0.5 + u;
          }
        };
      })(),
      q = (function () {
        var A = /[^\x20\t\r\n\f]+/g,
          O = ' ',
          x = '',
          e = 'scrollLeft',
          u = 'scrollTop',
          f = [],
          d = S.type,
          B = {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
          };
        function or() {
          var v,
            n,
            s,
            c,
            p,
            y,
            T = arguments[0] || {},
            D = 1,
            K = arguments[i.l],
            N = !1;
          for (
            d(T) == _.b && ((N = T), (T = arguments[1] || {}), (D = 2)),
              d(T) != _.o && !d(T) == _.f && (T = {}),
              K === D && ((T = rr), --D);
            D < K;
            D++
          )
            if ((p = arguments[D]) != null)
              for (c in p)
                (v = T[c]),
                  (s = p[c]),
                  T !== s &&
                    (N && s && (R(s) || (n = S.isA(s)))
                      ? (n
                          ? ((n = !1), (y = v && S.isA(v) ? v : []))
                          : (y = v && R(v) ? v : {}),
                        (T[c] = or(N, y, s)))
                      : s !== z && (T[c] = s));
          return T;
        }
        function w(v, n, s) {
          for (var c = s || 0; c < n[i.l]; c++) if (n[c] === v) return c;
          return -1;
        }
        function M(v) {
          return d(v) == _.f;
        }
        function ur(v) {
          for (var n in v) return !1;
          return !0;
        }
        function R(v) {
          if (!v || d(v) != _.o) return !1;
          var n,
            s = i.p,
            c = Object[s].hasOwnProperty,
            p = c.call(v, 'constructor'),
            y =
              v.constructor &&
              v.constructor[s] &&
              c.call(v.constructor[s], 'isPrototypeOf');
          if (v.constructor && !p && !y) return !1;
          for (n in v);
          return d(n) == _.u || c.call(v, n);
        }
        function Sr(v, n) {
          var s = 0;
          if (H(v)) for (; s < v[i.l] && n.call(v[s], s, v[s]) !== !1; s++);
          else for (s in v) if (n.call(v[s], s, v[s]) === !1) break;
          return v;
        }
        function H(v) {
          var n = !!v && [i.l] in v && v[i.l],
            s = d(v);
          return M(s)
            ? !1
            : s == _.a || n === 0 || (d(n) == _.n && n > 0 && n - 1 in v);
        }
        function J(v) {
          var n = v.match(A) || [];
          return n.join(O);
        }
        function G(v, n) {
          for (
            var s = (v.parentNode || sr).querySelectorAll(n) || [], c = s[i.l];
            c--;

          )
            if (s[c] == v) return !0;
          return !1;
        }
        function L(v, n, s) {
          if (S.isA(s)) for (var c = 0; c < s[i.l]; c++) L(v, n, s[c]);
          else
            d(s) == _.s
              ? v.insertAdjacentHTML(n, s)
              : v.insertAdjacentElement(n, s.nodeType ? s : s[0]);
        }
        function fr(v, n, s) {
          try {
            v[i.s][n] !== z && (v[i.s][n] = ze(n, s));
          } catch {}
        }
        function ze(v, n) {
          return !B[v.toLowerCase()] && d(n) == _.n && (n += 'px'), n;
        }
        function $(v, n) {
          var s, c;
          n !== !1 && v.q.splice(0, 1),
            v.q[i.l] > 0
              ? ((c = v.q[0]),
                k(v.el, c.props, c.duration, c.easing, c.complete, !0))
              : ((s = w(v, f)), s > -1 && f.splice(s, 1));
        }
        function Gr(v, n, s) {
          n === e || n === u ? (v[n] = s) : fr(v, n, s);
        }
        function k(v, n, s, c, p, y) {
          var T = R(s),
            D = {},
            K = {},
            N = 0,
            er,
            Hr,
            Pr,
            Tr,
            Vr,
            Dr;
          for (
            T
              ? ((c = s.easing),
                (Pr = s.progress),
                (Tr = s.step),
                (Vr = s.specialEasing),
                (p = s.complete),
                (Dr = s.duration))
              : (Dr = s),
              Vr = Vr || {},
              Dr = Dr || 400,
              c = c || 'swing',
              y = y || !1;
            N < f[i.l];
            N++
          )
            if (f[N].el === v) {
              Hr = f[N];
              break;
            }
          Hr || ((Hr = { el: v, q: [] }), f.push(Hr));
          for (er in n)
            er === e || er === u ? (D[er] = v[er]) : (D[er] = rr(v).css(er));
          for (er in D) D[er] !== n[er] && n[er] !== z && (K[er] = n[er]);
          if (ur(K)) y && $(Hr);
          else {
            var Te,
              Fe,
              Me,
              xr,
              me,
              hr,
              Cr,
              fa,
              Je,
              ha = y ? 0 : w(pr, Hr.q),
              pr = { props: K, duration: T ? s : Dr, easing: c, complete: p };
            if ((ha === -1 && ((ha = Hr.q[i.l]), Hr.q.push(pr)), ha === 0))
              if (Dr > 0)
                (Cr = S.now()),
                  (fa = function () {
                    (Te = S.now()),
                      (Je = Te - Cr),
                      (Fe = pr.stop || Je >= Dr),
                      (Me = 1 - (I.max(0, Cr + Dr - Te) / Dr || 0));
                    for (er in K)
                      (xr = parseFloat(D[er])),
                        (me = parseFloat(K[er])),
                        (hr =
                          (me - xr) * ao[Vr[er] || c](Me, Me * Dr, 0, 1, Dr) +
                          xr),
                        Gr(v, er, hr),
                        M(Tr) &&
                          Tr(hr, {
                            elem: v,
                            prop: er,
                            start: xr,
                            now: hr,
                            end: me,
                            pos: Me,
                            options: {
                              easing: c,
                              speacialEasing: Vr,
                              duration: Dr,
                              complete: p,
                              step: Tr
                            },
                            startTime: Cr
                          });
                    M(Pr) && Pr({}, Me, I.max(0, Dr - Je)),
                      Fe ? ($(Hr), M(p) && p()) : (pr.frame = S.rAF()(fa));
                  }),
                  (pr.frame = S.rAF()(fa));
              else {
                for (er in K) Gr(v, er, K[er]);
                $(Hr);
              }
          }
        }
        function dr(v, n, s) {
          for (var c, p, y, T = 0; T < f[i.l]; T++)
            if (((c = f[T]), c.el === v)) {
              if (c.q[i.l] > 0) {
                if (
                  ((p = c.q[0]),
                  (p.stop = !0),
                  S.cAF()(p.frame),
                  c.q.splice(0, 1),
                  s)
                )
                  for (y in p.props) Gr(v, y, p.props[y]);
                n ? (c.q = []) : $(c, !1);
              }
              break;
            }
        }
        function yr(v) {
          return !!(v[i.oW] || v[i.oH] || v.getClientRects()[i.l]);
        }
        function rr(v) {
          if (arguments[i.l] === 0) return this;
          var n = new rr(),
            s = v,
            c = 0,
            p,
            y;
          if (d(v) == _.s)
            for (
              s = [],
                v.charAt(0) === '<'
                  ? ((y = sr.createElement('div')),
                    (y.innerHTML = v),
                    (p = y.children))
                  : (p = sr.querySelectorAll(v));
              c < p[i.l];
              c++
            )
              s.push(p[c]);
          if (s) {
            for (
              d(s) != _.s && (!H(s) || s === U || s === s.self) && (s = [s]),
                c = 0;
              c < s[i.l];
              c++
            )
              n[c] = s[c];
            n[i.l] = s[i.l];
          }
          return n;
        }
        return (
          (rr[i.p] = {
            on: function (n, s) {
              n = (n || x).match(A) || [x];
              var c = n[i.l],
                p = 0,
                y;
              return this.each(function () {
                y = this;
                try {
                  if (y.addEventListener)
                    for (; p < c; p++) y.addEventListener(n[p], s);
                  else if (y.detachEvent)
                    for (; p < c; p++) y.attachEvent('on' + n[p], s);
                } catch {}
              });
            },
            off: function (n, s) {
              n = (n || x).match(A) || [x];
              var c = n[i.l],
                p = 0,
                y;
              return this.each(function () {
                y = this;
                try {
                  if (y.removeEventListener)
                    for (; p < c; p++) y.removeEventListener(n[p], s);
                  else if (y.detachEvent)
                    for (; p < c; p++) y.detachEvent('on' + n[p], s);
                } catch {}
              });
            },
            one: function (n, s) {
              return (
                (n = (n || x).match(A) || [x]),
                this.each(function () {
                  var c = rr(this);
                  rr.each(n, function (p, y) {
                    var T = function D(K) {
                      s.call(this, K), c.off(y, D);
                    };
                    c.on(y, T);
                  });
                })
              );
            },
            trigger: function (n) {
              var s, c;
              return this.each(function () {
                (s = this),
                  sr.createEvent
                    ? ((c = sr.createEvent('HTMLEvents')),
                      c.initEvent(n, !0, !1),
                      s.dispatchEvent(c))
                    : s.fireEvent('on' + n);
              });
            },
            append: function (n) {
              return this.each(function () {
                L(this, 'beforeend', n);
              });
            },
            prepend: function (n) {
              return this.each(function () {
                L(this, 'afterbegin', n);
              });
            },
            before: function (n) {
              return this.each(function () {
                L(this, 'beforebegin', n);
              });
            },
            after: function (n) {
              return this.each(function () {
                L(this, 'afterend', n);
              });
            },
            remove: function () {
              return this.each(function () {
                var n = this,
                  s = n.parentNode;
                s != null && s.removeChild(n);
              });
            },
            unwrap: function () {
              var n = [],
                s,
                c,
                p;
              for (
                this.each(function () {
                  (p = this.parentNode), w(p, n) === -1 && n.push(p);
                }),
                  s = 0;
                s < n[i.l];
                s++
              ) {
                for (c = n[s], p = c.parentNode; c.firstChild; )
                  p.insertBefore(c.firstChild, c);
                p.removeChild(c);
              }
              return this;
            },
            wrapAll: function (n) {
              for (
                var s,
                  c = this,
                  p = rr(n)[0],
                  y = p,
                  T = c[0].parentNode,
                  D = c[0].previousSibling;
                y.childNodes[i.l] > 0;

              )
                y = y.childNodes[0];
              for (s = 0; c[i.l] - s; y.firstChild === c[0] && s++)
                y.appendChild(c[s]);
              var K = D ? D.nextSibling : T.firstChild;
              return T.insertBefore(p, K), this;
            },
            wrapInner: function (n) {
              return this.each(function () {
                var s = rr(this),
                  c = s.contents();
                c[i.l] ? c.wrapAll(n) : s.append(n);
              });
            },
            wrap: function (n) {
              return this.each(function () {
                rr(this).wrapAll(n);
              });
            },
            css: function (n, s) {
              var c,
                p,
                y,
                T = U.getComputedStyle;
              return d(n) == _.s
                ? s === z
                  ? ((c = this[0]),
                    (y = T ? T(c, null) : c.currentStyle[n]),
                    T ? (y != null ? y.getPropertyValue(n) : c[i.s][n]) : y)
                  : this.each(function () {
                      fr(this, n, s);
                    })
                : this.each(function () {
                    for (p in n) fr(this, p, n[p]);
                  });
            },
            hasClass: function (n) {
              for (var s, c = 0, p = O + n + O, y; (s = this[c++]); ) {
                if (((y = s.classList), y && y.contains(n))) return !0;
                if (
                  s.nodeType === 1 &&
                  (O + J(s.className + x) + O).indexOf(p) > -1
                )
                  return !0;
              }
              return !1;
            },
            addClass: function (n) {
              var s,
                c,
                p,
                y,
                T,
                D,
                K,
                N,
                er = 0,
                Hr = 0;
              if (n) {
                for (s = n.match(A) || []; (c = this[er++]); )
                  if (((N = c.classList), K === z && (K = N !== z), K))
                    for (; (T = s[Hr++]); ) N.add(T);
                  else if (
                    ((y = c.className + x),
                    (p = c.nodeType === 1 && O + J(y) + O),
                    p)
                  ) {
                    for (; (T = s[Hr++]); )
                      p.indexOf(O + T + O) < 0 && (p += T + O);
                    (D = J(p)), y !== D && (c.className = D);
                  }
              }
              return this;
            },
            removeClass: function (n) {
              var s,
                c,
                p,
                y,
                T,
                D,
                K,
                N,
                er = 0,
                Hr = 0;
              if (n) {
                for (s = n.match(A) || []; (c = this[er++]); )
                  if (((N = c.classList), K === z && (K = N !== z), K))
                    for (; (T = s[Hr++]); ) N.remove(T);
                  else if (
                    ((y = c.className + x),
                    (p = c.nodeType === 1 && O + J(y) + O),
                    p)
                  ) {
                    for (; (T = s[Hr++]); )
                      for (; p.indexOf(O + T + O) > -1; )
                        p = p.replace(O + T + O, O);
                    (D = J(p)), y !== D && (c.className = D);
                  }
              }
              return this;
            },
            hide: function () {
              return this.each(function () {
                this[i.s].display = 'none';
              });
            },
            show: function () {
              return this.each(function () {
                this[i.s].display = 'block';
              });
            },
            attr: function (n, s) {
              for (var c = 0, p; (p = this[c++]); ) {
                if (s === z) return p.getAttribute(n);
                p.setAttribute(n, s);
              }
              return this;
            },
            removeAttr: function (n) {
              return this.each(function () {
                this.removeAttribute(n);
              });
            },
            offset: function () {
              var n = this[0],
                s = n[i.bCR](),
                c = U.pageXOffset || sr.documentElement[e],
                p = U.pageYOffset || sr.documentElement[u];
              return { top: s.top + p, left: s.left + c };
            },
            position: function () {
              var n = this[0];
              return { top: n.offsetTop, left: n.offsetLeft };
            },
            scrollLeft: function (n) {
              for (var s = 0, c; (c = this[s++]); ) {
                if (n === z) return c[e];
                c[e] = n;
              }
              return this;
            },
            scrollTop: function (n) {
              for (var s = 0, c; (c = this[s++]); ) {
                if (n === z) return c[u];
                c[u] = n;
              }
              return this;
            },
            val: function (n) {
              var s = this[0];
              return n ? ((s.value = n), this) : s.value;
            },
            first: function () {
              return this.eq(0);
            },
            last: function () {
              return this.eq(-1);
            },
            eq: function (n) {
              return rr(this[n >= 0 ? n : this[i.l] + n]);
            },
            find: function (n) {
              var s = [],
                c;
              return (
                this.each(function () {
                  var p = this,
                    y = p.querySelectorAll(n);
                  for (c = 0; c < y[i.l]; c++) s.push(y[c]);
                }),
                rr(s)
              );
            },
            children: function (n) {
              var s = [],
                c,
                p,
                y;
              return (
                this.each(function () {
                  for (p = this.children, y = 0; y < p[i.l]; y++)
                    (c = p[y]),
                      n
                        ? ((c.matches && c.matches(n)) || G(c, n)) && s.push(c)
                        : s.push(c);
                }),
                rr(s)
              );
            },
            parent: function (n) {
              var s = [],
                c;
              return (
                this.each(function () {
                  (c = this.parentNode), (!n || rr(c).is(n)) && s.push(c);
                }),
                rr(s)
              );
            },
            is: function (n) {
              var s, c;
              for (c = 0; c < this[i.l]; c++) {
                if (((s = this[c]), n === ':visible')) return yr(s);
                if (n === ':hidden') return !yr(s);
                if ((s.matches && s.matches(n)) || G(s, n)) return !0;
              }
              return !1;
            },
            contents: function () {
              var n = [],
                s,
                c;
              return (
                this.each(function () {
                  for (s = this.childNodes, c = 0; c < s[i.l]; c++)
                    n.push(s[c]);
                }),
                rr(n)
              );
            },
            each: function (n) {
              return Sr(this, n);
            },
            animate: function (n, s, c, p) {
              return this.each(function () {
                k(this, n, s, c, p);
              });
            },
            stop: function (n, s) {
              return this.each(function () {
                dr(this, n, s);
              });
            }
          }),
          or(rr, {
            extend: or,
            inArray: w,
            isEmptyObject: ur,
            isPlainObject: R,
            each: Sr
          }),
          rr
        );
      })(),
      Ra = (function () {
        var A = [],
          O = '__overlayScrollbars__';
        return function (x, e) {
          var u = arguments[i.l];
          if (u < 1) return A;
          if (e) (x[O] = e), A.push(x);
          else {
            var f = S.inA(x, A);
            if (f > -1)
              if (u > 1) delete x[O], A.splice(f, 1);
              else return A[f][O];
          }
        };
      })(),
      zn = (function () {
        var A,
          O,
          x,
          e = [],
          u = (function () {
            var w = S.type,
              M = [_.b, _.n, _.s, _.a, _.o, _.f, _.z],
              ur = ' ',
              R = ':',
              Sr = [_.z, _.s],
              H = _.n,
              J = [_.z, _.b],
              G = [!0, _.b],
              L = [!1, _.b],
              fr = [null, [_.z, _.f]],
              ze = [['img'], [_.s, _.a, _.z]],
              $ = [
                ['style', 'class'],
                [_.s, _.a, _.z]
              ],
              Gr = 'n:none b:both h:horizontal v:vertical',
              k = 'v-h:visible-hidden v-s:visible-scroll s:scroll h:hidden',
              dr = 'v:visible h:hidden a:auto',
              yr = 'n:never s:scroll l:leave m:move',
              rr = {
                className: ['os-theme-dark', Sr],
                resize: ['none', Gr],
                sizeAutoCapable: G,
                clipAlways: G,
                normalizeRTL: G,
                paddingAbsolute: L,
                autoUpdate: [null, J],
                autoUpdateInterval: [33, H],
                updateOnLoad: ze,
                nativeScrollbarsOverlaid: {
                  showNativeScrollbars: L,
                  initialize: G
                },
                overflowBehavior: { x: ['scroll', k], y: ['scroll', k] },
                scrollbars: {
                  visibility: ['auto', dr],
                  autoHide: ['never', yr],
                  autoHideDelay: [800, H],
                  dragScrolling: G,
                  clickScrolling: L,
                  touchSupport: G,
                  snapHandle: L
                },
                textarea: { dynWidth: L, dynHeight: L, inheritedAttrs: $ },
                callbacks: {
                  onInitialized: fr,
                  onInitializationWithdrawn: fr,
                  onDestroyed: fr,
                  onScrollStart: fr,
                  onScroll: fr,
                  onScrollStop: fr,
                  onOverflowChanged: fr,
                  onOverflowAmountChanged: fr,
                  onDirectionChanged: fr,
                  onContentSizeChanged: fr,
                  onHostSizeChanged: fr,
                  onUpdated: fr
                }
              },
              v = function (s) {
                var c = function p(y) {
                  var T, D, K;
                  for (T in y)
                    !y[i.hOP](T) ||
                      ((D = y[T]),
                      (K = w(D)),
                      K == _.a
                        ? (y[T] = D[s ? 1 : 0])
                        : K == _.o && (y[T] = p(D)));
                  return y;
                };
                return c(q.extend(!0, {}, rr));
              };
            return {
              _defaults: v(),
              _template: v(!0),
              _validate: function (s, c, p, y) {
                var T = {},
                  D = {},
                  K = q.extend(!0, {}, s),
                  N = q.inArray,
                  er = q.isEmptyObject,
                  Hr = function Pr(Tr, Vr, Dr, Te, Fe, Me) {
                    for (var xr in Vr)
                      if (Vr[i.hOP](xr) && Tr[i.hOP](xr)) {
                        var me = !1,
                          hr = !1,
                          Cr = Vr[xr],
                          fa = w(Cr),
                          Je = fa == _.o,
                          ha = S.isA(Cr) ? Cr : [Cr],
                          pr = Dr[xr],
                          xe = Tr[xr],
                          ut = w(xe),
                          ve = Me ? Me + '.' : '',
                          Re =
                            'The option "' + ve + xr + `" wasn't set, because`,
                          Xe = [],
                          qr = [],
                          ue,
                          fe,
                          br,
                          We,
                          da,
                          X,
                          gr,
                          ge;
                        if (((pr = pr === z ? {} : pr), Je && ut == _.o))
                          (Te[xr] = {}),
                            (Fe[xr] = {}),
                            Pr(xe, Cr, pr, Te[xr], Fe[xr], ve + xr),
                            q.each([Tr, Te, Fe], function (Y, zr) {
                              er(zr[xr]) && delete zr[xr];
                            });
                        else if (!Je) {
                          for (X = 0; X < ha[i.l]; X++)
                            if (
                              ((da = ha[X]),
                              (fa = w(da)),
                              (br = fa == _.s && N(da, M) === -1),
                              br)
                            )
                              for (
                                Xe.push(_.s),
                                  ue = da.split(ur),
                                  qr = qr.concat(ue),
                                  gr = 0;
                                gr < ue[i.l];
                                gr++
                              ) {
                                for (
                                  fe = ue[gr].split(R), We = fe[0], ge = 0;
                                  ge < fe[i.l];
                                  ge++
                                )
                                  if (xe === fe[ge]) {
                                    me = !0;
                                    break;
                                  }
                                if (me) break;
                              }
                            else if ((Xe.push(da), ut === da)) {
                              me = !0;
                              break;
                            }
                          me
                            ? ((hr = xe !== pr),
                              hr && (Te[xr] = xe),
                              (br ? N(pr, fe) < 0 : hr) &&
                                (Fe[xr] = br ? We : xe))
                            : p &&
                              console.warn(
                                Re +
                                  " it doesn't accept the type [ " +
                                  ut.toUpperCase() +
                                  ' ] with the value of "' +
                                  xe +
                                  `".\r
Accepted types are: [ ` +
                                  Xe.join(', ').toUpperCase() +
                                  ' ].' +
                                  (qr[length] > 0
                                    ? `\r
Valid strings are: [ ` +
                                      qr.join(', ').split(R).join(', ') +
                                      ' ].'
                                    : '')
                              ),
                            delete Tr[xr];
                        }
                      }
                  };
                return (
                  Hr(K, c, y || {}, T, D),
                  !er(K) &&
                    p &&
                    console.warn(
                      `The following options are discarded due to invalidity:\r
` + U.JSON.stringify(K, null, 2)
                    ),
                  { _default: T, _prepared: D }
                );
              }
            };
          })();
        function f() {
          O || (O = new d(u._defaults)), x || (x = new B(O));
        }
        function d(w) {
          var M = this,
            ur = 'overflow',
            R = 'hidden',
            Sr = 'scroll',
            H = q('body'),
            J = q('<div id="os-dummy-scrollbar-size"><div></div></div>'),
            G = J[0],
            L = q(J.children('div').eq(0));
          H.append(J), J.hide().show();
          var fr = Gr(G),
            ze = { x: fr.x === 0, y: fr.y === 0 },
            $ = (function () {
              var k = U.navigator.userAgent,
                dr = 'indexOf',
                yr = 'substring',
                rr = k[dr]('MSIE '),
                v = k[dr]('Trident/'),
                n = k[dr]('Edge/'),
                s = k[dr]('rv:'),
                c,
                p = parseInt;
              return (
                rr > 0
                  ? (c = p(k[yr](rr + 5, k[dr]('.', rr)), 10))
                  : v > 0
                  ? (c = p(k[yr](s + 3, k[dr]('.', s)), 10))
                  : n > 0 && (c = p(k[yr](n + 5, k[dr]('.', n)), 10)),
                c
              );
            })();
          q.extend(M, {
            defaultOptions: w,
            msie: $,
            autoUpdateLoop: !1,
            autoUpdateRecommended: !S.mO(),
            nativeScrollbarSize: fr,
            nativeScrollbarIsOverlaid: ze,
            nativeScrollbarStyling: (function () {
              var k = !1;
              J.addClass('os-viewport-native-scrollbars-invisible');
              try {
                k =
                  (J.css('scrollbar-width') === 'none' && ($ > 9 || !$)) ||
                  U.getComputedStyle(G, '::-webkit-scrollbar').getPropertyValue(
                    'display'
                  ) === 'none';
              } catch {}
              return k;
            })(),
            overlayScrollbarDummySize: { x: 30, y: 30 },
            cssCalc: Se._cssPropertyValue('width', 'calc', '(1px)') || null,
            restrictedMeasuring: (function () {
              J.css(ur, R);
              var k = { w: G[i.sW], h: G[i.sH] };
              J.css(ur, 'visible');
              var dr = { w: G[i.sW], h: G[i.sH] };
              return k.w - dr.w !== 0 || k.h - dr.h !== 0;
            })(),
            rtlScrollBehavior: (function () {
              J.css({
                'overflow-y': R,
                'overflow-x': Sr,
                direction: 'rtl'
              }).scrollLeft(0);
              var k = J.offset(),
                dr = L.offset();
              J.scrollLeft(-999);
              var yr = L.offset();
              return { i: k.left === dr.left, n: dr.left !== yr.left };
            })(),
            supportTransform: !!Se._cssProperty('transform'),
            supportTransition: !!Se._cssProperty('transition'),
            supportPassiveEvents: (function () {
              var k = !1;
              try {
                U.addEventListener(
                  'test',
                  null,
                  Object.defineProperty({}, 'passive', {
                    get: function () {
                      k = !0;
                    }
                  })
                );
              } catch {}
              return k;
            })(),
            supportResizeObserver: !!S.rO(),
            supportMutationObserver: !!S.mO()
          }),
            J.removeAttr(i.s).remove(),
            (function () {
              if (ze.x && ze.y) return;
              var k = I.abs,
                dr = S.wW(),
                yr = S.wH(),
                rr = s(),
                v = function () {
                  if (Ra().length > 0) {
                    var p = S.wW(),
                      y = S.wH(),
                      T = p - dr,
                      D = y - yr;
                    if (T === 0 && D === 0) return;
                    var K = I.round(p / (dr / 100)),
                      N = I.round(y / (yr / 100)),
                      er = k(T),
                      Hr = k(D),
                      Pr = k(K),
                      Tr = k(N),
                      Vr = s(),
                      Dr = er > 2 && Hr > 2,
                      Te = !n(Pr, Tr),
                      Fe = Vr !== rr && rr > 0,
                      Me = Dr && Te && Fe,
                      xr = M.nativeScrollbarSize,
                      me;
                    Me &&
                      (H.append(J),
                      (me = M.nativeScrollbarSize = Gr(J[0])),
                      J.remove(),
                      (xr.x !== me.x || xr.y !== me.y) &&
                        q.each(Ra(), function () {
                          Ra(this) && Ra(this).update('zoom');
                        })),
                      (dr = p),
                      (yr = y),
                      (rr = Vr);
                  }
                };
              function n(c, p) {
                var y = k(c),
                  T = k(p);
                return !(y === T || y + 1 === T || y - 1 === T);
              }
              function s() {
                var c = U.screen.deviceXDPI || 0,
                  p = U.screen.logicalXDPI || 1;
                return U.devicePixelRatio || c / p;
              }
              q(U).on('resize', v);
            })();
          function Gr(k) {
            return { x: k[i.oH] - k[i.cH], y: k[i.oW] - k[i.cW] };
          }
        }
        function B(w) {
          var M = this,
            ur = q.inArray,
            R = S.now,
            Sr = 'autoUpdate',
            H = Sr + 'Interval',
            J = i.l,
            G = [],
            L = [],
            fr = !1,
            ze = 33,
            $ = ze,
            Gr = R(),
            k,
            dr = function yr() {
              if (G[J] > 0 && fr) {
                k = S.rAF()(function () {
                  yr();
                });
                var rr = R(),
                  v = rr - Gr,
                  n,
                  s,
                  c,
                  p,
                  y,
                  T;
                if (v > $) {
                  (Gr = rr - (v % $)), (n = ze);
                  for (var D = 0; D < G[J]; D++)
                    (s = G[D]),
                      s !== z &&
                        ((c = s.options()),
                        (p = c[Sr]),
                        (y = I.max(1, c[H])),
                        (T = R()),
                        (p === !0 || p === null) &&
                          T - L[D] > y &&
                          (s.update('auto'), (L[D] = new Date((T += y)))),
                        (n = I.max(1, I.min(n, y))));
                  $ = n;
                }
              } else $ = ze;
            };
          (M.add = function (yr) {
            ur(yr, G) === -1 &&
              (G.push(yr),
              L.push(R()),
              G[J] > 0 && !fr && ((fr = !0), (w.autoUpdateLoop = fr), dr()));
          }),
            (M.remove = function (yr) {
              var rr = ur(yr, G);
              rr > -1 &&
                (L.splice(rr, 1),
                G.splice(rr, 1),
                G[J] === 0 &&
                  fr &&
                  ((fr = !1),
                  (w.autoUpdateLoop = fr),
                  k !== z && (S.cAF()(k), (k = -1))));
            });
        }
        function or(w, M, ur, R, Sr) {
          var H = S.type,
            J = q.inArray,
            G = q.each,
            L = new A(),
            fr = q[i.p];
          if (!Ms(w)) return;
          if (Ra(w)) {
            var ze = Ra(w);
            return ze.options(M), ze;
          }
          var $,
            Gr,
            k,
            dr,
            yr,
            rr,
            v,
            n,
            s,
            c,
            p,
            y,
            T,
            D,
            K,
            N,
            er,
            Hr,
            Pr,
            Tr,
            Vr,
            Dr,
            Te,
            Fe,
            Me,
            xr,
            me,
            hr,
            Cr,
            fa = {},
            Je = {},
            ha = {},
            pr = {},
            xe = {},
            ut = '-hidden',
            ve = 'margin-',
            Re = 'padding-',
            Xe = 'border-',
            qr = 'top',
            ue = 'right',
            fe = 'bottom',
            br = 'left',
            We = 'min-',
            da = 'max-',
            X = 'width',
            gr = 'height',
            ge = 'float',
            Y = '',
            zr = 'auto',
            Mn = 'sync',
            Ue = 'scroll',
            Wa = '100%',
            Mt = 'x',
            Rt = 'y',
            Qe = '.',
            he = ' ',
            Rn = 'scrollbar',
            Wn = '-horizontal',
            Bn = '-vertical',
            de = Ue + 'Left',
            pe = Ue + 'Top',
            Et = 'mousedown touchstart',
            Wt = 'mouseup touchend touchcancel',
            Bt = 'mousemove touchmove',
            Di = 'mouseenter',
            zi = 'mouseleave',
            Fn = 'keydown',
            Un = 'keyup',
            Ft = 'selectstart',
            Qn = 'transitionend webkitTransitionEnd oTransitionEnd',
            Vn = '__overlayScrollbarsRO__',
            Le = 'os-',
            Mi = Le + 'html',
            Ce = Le + 'host',
            vn = Ce + '-foreign',
            qn = Ce + '-textarea',
            Ri = Ce + '-' + Rn + Wn + ut,
            Wi = Ce + '-' + Rn + Bn + ut,
            Bi = Ce + '-transition',
            Fi = Ce + '-rtl',
            Kn = Ce + '-resize-disabled',
            un = Ce + '-scrolling',
            Ut = Ce + '-overflow',
            Ut = Ce + '-overflow',
            Ui = Ut + '-x',
            Qi = Ut + '-y',
            fn = Le + 'textarea',
            to = fn + '-cover',
            Yn = Le + 'padding',
            hn = Le + 'viewport',
            jn = hn + '-native-scrollbars-invisible',
            Vi = hn + '-native-scrollbars-overlaid',
            Gn = Le + 'content',
            no = Le + 'content-arrange',
            io = Le + 'content-glue',
            so = Le + 'size-auto-observer',
            ft = Le + 'resize-observer',
            dn = Le + 'resize-observer-item',
            qi = dn + '-final',
            pn = Le + 'text-inherit',
            Ba = Le + Rn,
            Ki = Ba + '-track',
            Yi = Ki + '-off',
            ji = Ba + '-handle',
            Gi = ji + '-off',
            Ji = Ba + '-unusable',
            Qt = Ba + '-' + zr + ut,
            Jn = Ba + '-corner',
            Vt = Jn + '-resize',
            Xi = Vt + '-both',
            Zi = Vt + Wn,
            $i = Vt + Bn,
            oo = Ba + Wn,
            co = Ba + Bn,
            ht = Le + 'dragging',
            _n = Le + 'theme-none',
            Xn = [jn, Vi, Yi, Gi, Ji, Qt, Vt, Xi, Zi, $i, ht].join(he),
            Zn = [],
            $n = [i.ti],
            rs,
            qt,
            ae,
            Fa = {},
            lo = 'added removed on contract',
            es,
            dt = {},
            as,
            ts = 42,
            ri = 'load',
            Kt = [],
            bn,
            ka,
            St,
            pt,
            cr,
            j,
            pa,
            _a,
            Ze,
            tr,
            Mr,
            Ua,
            Ae,
            Qa,
            He,
            _t,
            yn,
            Yt,
            bt,
            mn,
            jt,
            Gt,
            Tt,
            rt,
            Ve,
            xn,
            gn,
            et,
            yt,
            ba,
            Jt,
            mt,
            ns,
            Ea,
            Xt,
            $e,
            at,
            is,
            ei,
            ss,
            os,
            cs,
            ls,
            vs,
            us,
            fs,
            Lt,
            Ht,
            ai,
            ti,
            hs,
            ds,
            ps,
            _s,
            bs,
            ys,
            ni,
            ms,
            Va,
            Zt,
            ii,
            Cn,
            si,
            xs,
            gs,
            Cs,
            tt,
            As = {},
            An,
            On,
            oi,
            ci,
            Sa,
            Os = ['wrap', 'cols', 'rows'],
            li = [i.i, i.c, i.s, 'open'].concat($n),
            vi = [],
            ui,
            ws,
            ks,
            fi,
            hi,
            nt,
            ra,
            xt,
            di,
            it,
            wn,
            kn,
            pi,
            _i;
          function Be(r, a, t, o, l) {
            var h = S.isA(a) && S.isA(t),
              b = o ? 'removeEventListener' : 'addEventListener',
              g = o ? 'off' : 'on',
              m = h ? !1 : a.split(he),
              C = 0,
              V = q.isPlainObject(l),
              P = (p && (V ? l._passive : l)) || !1,
              ar = V && (l._capture || !1),
              nr = p ? { passive: P, capture: ar } : ar;
            if (h) for (; C < a[i.l]; C++) Be(r, a[C], t[C], o, l);
            else
              for (; C < m[i.l]; C++) p ? r[0][b](m[C], t, nr) : r[g](m[C], t);
          }
          function ya(r, a, t, o) {
            Be(r, a, t, !1, o), vi.push(S.bind(Be, 0, r, a, t, !0, o));
          }
          function En(r, a) {
            if (r) {
              var t = S.rO(),
                o =
                  'animationstart mozAnimationStart webkitAnimationStart MSAnimationStart',
                l = 'childNodes',
                h = 3333333,
                b = function () {
                  r[pe](h)[de](hr ? (k.n ? -h : k.i ? 0 : h) : h), a();
                };
              if (a) {
                if (y) {
                  var g = r.addClass('observed').append(Ke(ft)).contents()[0],
                    m = (g[Vn] = new t(b));
                  m.observe(g);
                } else if (yr > 9 || !dr) {
                  r.prepend(
                    Ke(
                      ft,
                      Ke(
                        { c: dn, dir: 'ltr' },
                        Ke(dn, Ke(qi)) +
                          Ke(
                            dn,
                            Ke({ c: qi, style: 'width: 200%; height: 200%' })
                          )
                      )
                    )
                  );
                  var C = r[0][l][0][l][0],
                    V = q(C[l][1]),
                    P = q(C[l][0]),
                    ar = q(P[0][l][0]),
                    nr = C[i.oW],
                    _r = C[i.oH],
                    Q,
                    lr,
                    Z,
                    kr,
                    ie = 2,
                    Kr = R.nativeScrollbarSize,
                    Ne = function () {
                      P[de](h)[pe](h), V[de](h)[pe](h);
                    },
                    se = function () {
                      (lr = 0), Q && ((nr = Z), (_r = kr), b());
                    },
                    Xr = function (E) {
                      return (
                        (Z = C[i.oW]),
                        (kr = C[i.oH]),
                        (Q = Z != nr || kr != _r),
                        E && Q && !lr
                          ? (S.cAF()(lr), (lr = S.rAF()(se)))
                          : E || se(),
                        Ne(),
                        E && (S.prvD(E), S.stpP(E)),
                        !1
                      );
                    },
                    Zr = {},
                    te = {};
                  gt(te, Y, [
                    -((Kr.y + 1) * ie),
                    Kr.x * -ie,
                    Kr.y * -ie,
                    -((Kr.x + 1) * ie)
                  ]),
                    q(C).css(te),
                    P.on(Ue, Xr),
                    V.on(Ue, Xr),
                    r.on(o, function () {
                      Xr(!1);
                    }),
                    (Zr[X] = h),
                    (Zr[gr] = h),
                    ar.css(Zr),
                    Ne();
                } else {
                  var Pe = Tt.attachEvent,
                    $r = yr !== z;
                  if (Pe)
                    r.prepend(Ke(ft)),
                      It(r, Qe + ft)[0].attachEvent('onresize', b);
                  else {
                    var Rr = Tt.createElement(_.o);
                    Rr.setAttribute(i.ti, '-1'),
                      Rr.setAttribute(i.c, ft),
                      (Rr.onload = function () {
                        var Ir = this.contentDocument.defaultView;
                        Ir.addEventListener('resize', b),
                          (Ir.document.documentElement.style.display = 'none');
                      }),
                      (Rr.type = 'text/html'),
                      $r && r.prepend(Rr),
                      (Rr.data = 'about:blank'),
                      $r || r.prepend(Rr),
                      r.on(o, b);
                  }
                }
                if (r[0] === gn) {
                  var ta = function () {
                    var E = j.css('direction'),
                      Or = {},
                      Er = 0,
                      Oe = !1;
                    return (
                      E !== ls &&
                        (E === 'ltr'
                          ? ((Or[br] = 0), (Or[ue] = zr), (Er = h))
                          : ((Or[br] = zr),
                            (Or[ue] = 0),
                            (Er = k.n ? -h : k.i ? 0 : h)),
                        _a.children().eq(0).css(Or),
                        _a[de](Er)[pe](h),
                        (ls = E),
                        (Oe = !0)),
                      Oe
                    );
                  };
                  ta(),
                    ya(r, Ue, function (Ir) {
                      return ta() && ma(), S.prvD(Ir), S.stpP(Ir), !1;
                    });
                }
              } else if (y) {
                var g = r.contents()[0],
                  Ar = g[Vn];
                Ar && (Ar.disconnect(), delete g[Vn]);
              } else Ka(r.children(Qe + ft).eq(0));
            }
          }
          function vo() {
            if (T) {
              var r = 11,
                a = S.mO(),
                t = S.now(),
                o,
                l,
                h,
                b,
                g,
                m,
                C,
                V,
                P,
                ar;
              (oi = function (_r) {
                var Q = !1,
                  lr = !1,
                  Z,
                  kr = [];
                return (
                  D &&
                    !Cr &&
                    (G(_r, function () {
                      (Z = this),
                        (o = Z.target),
                        (l = Z.attributeName),
                        (h = l === i.c),
                        (b = Z.oldValue),
                        (g = o.className),
                        Pr &&
                          h &&
                          !lr &&
                          b.indexOf(vn) > -1 &&
                          g.indexOf(vn) < 0 &&
                          ((m = zs(!0)),
                          (Ve.className = g
                            .split(he)
                            .concat(
                              b.split(he).filter(function (ie) {
                                return ie.match(m);
                              })
                            )
                            .join(he)),
                          (Q = lr = !0)),
                        Q ||
                          (Q = h
                            ? Hs(b, g)
                            : l === i.s
                            ? b !== o[i.s].cssText
                            : !0),
                        kr.push(l);
                    }),
                    xi(kr),
                    Q && L.update(lr || zr)),
                  Q
                );
              }),
                (ci = function (_r) {
                  var Q = !1,
                    lr;
                  return (
                    D &&
                      !Cr &&
                      (G(_r, function () {
                        return (lr = this), (Q = ho(lr)), !Q;
                      }),
                      Q &&
                        ((V = S.now()),
                        (P = at || $e),
                        (ar = function () {
                          K || ((t = V), N && gi(), P ? ma() : L.update(zr));
                        }),
                        clearTimeout(C),
                        r <= 0 || V - t > r || !P
                          ? ar()
                          : (C = setTimeout(ar, r)))),
                    Q
                  );
                }),
                (An = new a(oi)),
                (On = new a(ci));
            }
          }
          function Es() {
            T &&
              !Sa &&
              (An.observe(Ve, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: li
              }),
              On.observe(N ? rt : ba, {
                attributes: !0,
                attributeOldValue: !0,
                subtree: !N,
                childList: !N,
                characterData: !N,
                attributeFilter: N ? Os : li
              }),
              (Sa = !0));
          }
          function bi() {
            T && Sa && (An.disconnect(), On.disconnect(), (Sa = !1));
          }
          function uo() {
            if (!Cr) {
              var r,
                a = { w: gn[i.sW], h: gn[i.sH] };
              (r = Ct(a, ps)), (ps = a), r && ma({ _hostSizeChanged: !0 });
            }
          }
          function Ss() {
            xt && Ta(!0);
          }
          function Ts() {
            xt && !pt.hasClass(ht) && Ta(!1);
          }
          function fo() {
            ra &&
              (Ta(!0),
              clearTimeout(ks),
              (ks = setTimeout(function () {
                ra && !K && Ta(!1);
              }, 100)));
          }
          function $t(r) {
            return S.prvD(r), !1;
          }
          function yi(r) {
            var a = q(r.target);
            Ws(function (t, o) {
              a.is(o) && ma({ _contentSizeChanged: !0 });
            });
          }
          function mi(r) {
            r || mi(!0),
              Be(j, Bt.split(he)[0], fo, !ra || r, !0),
              Be(j, [Di, zi], [Ss, Ts], !xt || r, !0),
              !D && !r && j.one('mouseover', Ss);
          }
          function Ls() {
            var r = {};
            return (
              er &&
                Ua &&
                ((r.w = La(Ua.css(We + X))),
                (r.h = La(Ua.css(We + gr))),
                (r.c = Ct(r, tt)),
                (r.f = !0)),
              (tt = r),
              !!r.c
            );
          }
          function Hs(r, a) {
            var t = Ma(a) == _.s ? a.split(he) : [],
              o = Ma(r) == _.s ? r.split(he) : [],
              l = go(o, t),
              h = J(_n, l),
              b,
              g;
            if ((h > -1 && l.splice(h, 1), l[i.l] > 0)) {
              for (g = zs(!0, !0), b = 0; b < l.length; b++)
                if (!l[b].match(g)) return !0;
            }
            return !1;
          }
          function ho(r) {
            var a = r.attributeName,
              t = r.target,
              o = r.type,
              l = 'closest';
            if (t === ba) return a === null;
            if (o === 'attributes' && (a === i.c || a === i.s) && !N) {
              if (a === i.c && q(t).hasClass(Ce))
                return Hs(r.oldValue, t.className);
              if (Ma(t[l]) != _.f) return !0;
              if (
                t[l](Qe + ft) !== null ||
                t[l](Qe + Ba) !== null ||
                t[l](Qe + Jn) !== null
              )
                return !1;
            }
            return !0;
          }
          function po() {
            if (Cr) return !1;
            var r = Rs(),
              a = N && $e && !Cn ? cr.val().length : 0,
              t = !Sa && $e && !N,
              o = {},
              l,
              h,
              b,
              g;
            return (
              t &&
                ((l = Mr.css(ge)),
                (o[ge] = hr ? ue : br),
                (o[X] = zr),
                Mr.css(o)),
              (g = { w: r[i.sW] + a, h: r[i.sH] + a }),
              t && ((o[ge] = l), (o[X] = Wa), Mr.css(o)),
              (h = Ls()),
              (b = Ct(g, ds)),
              (ds = g),
              b || h
            );
          }
          function _o() {
            if (!(Cr || Sa)) {
              var r,
                a,
                t,
                o = [],
                l = [
                  { _elem: j, _attrs: li.concat(':visible') },
                  { _elem: N ? cr : z, _attrs: Os }
                ];
              return (
                G(l, function (h, b) {
                  (r = b._elem),
                    r &&
                      G(b._attrs, function (g, m) {
                        (a = m.charAt(0) === ':' ? r.is(m) : r.attr(m)),
                          (t = As[m]),
                          Ct(a, t) && o.push(m),
                          (As[m] = a);
                      });
                }),
                xi(o),
                o[i.l] > 0
              );
            }
          }
          function bo(r) {
            if (!D) return !0;
            var a = 'flex-grow',
              t = 'flex-shrink',
              o = 'flex-basis',
              l = [
                X,
                We + X,
                da + X,
                ve + br,
                ve + ue,
                br,
                ue,
                'font-weight',
                'word-spacing',
                a,
                t,
                o
              ],
              h = [Re + br, Re + ue, Xe + br + X, Xe + ue + X],
              b = [
                gr,
                We + gr,
                da + gr,
                ve + qr,
                ve + fe,
                qr,
                fe,
                'line-height',
                a,
                t,
                o
              ],
              g = [Re + qr, Re + fe, Xe + qr + X, Xe + fe + X],
              m = 's',
              C = 'v-s',
              V = Lt.x === m || Lt.x === C,
              P = Lt.y === m || Lt.y === C,
              ar = !1,
              nr = function (Q, lr) {
                for (var Z = 0; Z < Q[i.l]; Z++) if (Q[Z] === lr) return !0;
                return !1;
              };
            return (
              P && ((ar = nr(b, r)), !ar && !Tr && (ar = nr(g, r))),
              V && !ar && ((ar = nr(l, r)), !ar && !Tr && (ar = nr(h, r))),
              ar
            );
          }
          function xi(r) {
            (r = r || $n),
              G(r, function (a, t) {
                if (S.inA(t, $n) > -1) {
                  var o = cr.attr(t);
                  H(o) == _.s ? tr.attr(t, o) : tr.removeAttr(t);
                }
              });
          }
          function gi() {
            if (!Cr) {
              var r = !Cn,
                a = pr.w,
                t = pr.h,
                o = {},
                l = $e || r,
                h,
                b,
                g,
                m;
              return (
                (o[We + X] = Y),
                (o[We + gr] = Y),
                (o[X] = zr),
                cr.css(o),
                (h = rt[i.oW]),
                (b = l ? I.max(h, rt[i.sW] - 1) : 1),
                (o[X] = $e ? zr : Wa),
                (o[We + X] = Wa),
                (o[gr] = zr),
                cr.css(o),
                (g = rt[i.oH]),
                (m = I.max(g, rt[i.sH] - 1)),
                (o[X] = b),
                (o[gr] = m),
                Qa.css(o),
                (o[We + X] = a),
                (o[We + gr] = t),
                cr.css(o),
                {
                  _originalWidth: h,
                  _originalHeight: g,
                  _dynamicWidth: b,
                  _dynamicHeight: m
                }
              );
            }
          }
          function ma(r) {
            clearTimeout(as),
              (r = r || {}),
              (dt._hostSizeChanged |= r._hostSizeChanged),
              (dt._contentSizeChanged |= r._contentSizeChanged),
              (dt._force |= r._force);
            var a = S.now(),
              t = !!dt._hostSizeChanged,
              o = !!dt._contentSizeChanged,
              l = !!dt._force,
              h = r._changedOptions,
              b = D && !K && !l && !h && a - es < ts && !at && !$e,
              g;
            if (
              (b && (as = setTimeout(ma, ts)),
              !(
                K ||
                b ||
                (Cr && !h) ||
                (D && !l && (g = j.is(':hidden'))) ||
                j.css('display') === 'inline'
              ))
            ) {
              (es = a),
                (dt = {}),
                rr && !($.x && $.y)
                  ? ((n.x = 0), (n.y = 0))
                  : (n = Ie({}, R.nativeScrollbarSize)),
                (xe = {
                  x: (n.x + ($.x ? 0 : 3)) * 3,
                  y: (n.y + ($.y ? 0 : 3)) * 3
                }),
                (h = h || {});
              var m = function () {
                  return Ct.apply(this, [].slice.call(arguments).concat([l]));
                },
                C = { x: tr[de](), y: tr[pe]() },
                V = ae.scrollbars,
                P = ae.textarea,
                ar = V.visibility,
                nr = m(ar, _s),
                _r = V.autoHide,
                Q = m(_r, bs),
                lr = V.clickScrolling,
                Z = m(lr, ys),
                kr = V.dragScrolling,
                ie = m(kr, ni),
                Kr = ae.className,
                Ne = m(Kr, Zt),
                se = ae.resize,
                Xr = m(se, ms) && !er,
                Zr = ae.paddingAbsolute,
                te = m(Zr, vs),
                Pe = ae.clipAlways,
                $r = m(Pe, us),
                Rr = ae.sizeAutoCapable && !er,
                ta = m(Rr, hs),
                Ar = ae.nativeScrollbarsOverlaid.showNativeScrollbars,
                Ir = m(Ar, ai),
                E = ae.autoUpdate,
                Or = m(E, ti),
                Er = ae.overflowBehavior,
                Oe = m(Er, Lt, l),
                Ya = P.dynWidth,
                At = m(Cs, Ya),
                De = P.dynHeight,
                Ha = m(gs, De);
              if (
                ((hi = _r === 'n'),
                (nt = _r === 's'),
                (ra = _r === 'm'),
                (xt = _r === 'l'),
                (fi = V.autoHideDelay),
                (ii = Zt),
                (wn = se === 'n'),
                (kn = se === 'b'),
                (pi = se === 'h'),
                (_i = se === 'v'),
                (Va = ae.normalizeRTL),
                (Ar = Ar && $.x && $.y),
                (_s = ar),
                (bs = _r),
                (ys = lr),
                (ni = kr),
                (Zt = Kr),
                (ms = se),
                (vs = Zr),
                (us = Pe),
                (hs = Rr),
                (ai = Ar),
                (ti = E),
                (Lt = Ie({}, Er)),
                (Cs = Ya),
                (gs = De),
                (Ea = Ea || { x: !1, y: !1 }),
                Ne &&
                  (_e(j, ii + he + _n),
                  Jr(j, Kr !== z && Kr !== null && Kr.length > 0 ? Kr : _n)),
                Or &&
                  (E === !0 || (E === null && dr)
                    ? (bi(), Sr.add(L))
                    : (Sr.remove(L), Es())),
                ta)
              )
                if (Rr)
                  if ((Ae ? Ae.show() : ((Ae = q(Ke(io))), Ze.before(Ae)), Vr))
                    pa.show();
                  else {
                    (pa = q(Ke(so))), (xn = pa[0]), Ae.before(pa);
                    var Ia = { w: -1, h: -1 };
                    En(pa, function () {
                      var za = { w: xn[i.oW], h: xn[i.oH] };
                      Ct(za, Ia) &&
                        ((D && at && za.h > 0) ||
                          ($e && za.w > 0) ||
                          (D && !at && za.h === 0) ||
                          (!$e && za.w === 0)) &&
                        ma(),
                        (Ia = za);
                    }),
                      (Vr = !0),
                      v !== null && pa.css(gr, v + '(100% + 1px)');
                  }
                else Vr && pa.hide(), Ae && Ae.hide();
              l && (_a.find('*').trigger(Ue), Vr && pa.find('*').trigger(Ue)),
                (g = g === z ? j.is(':hidden') : g);
              var Ye = N ? cr.attr('wrap') !== 'off' : !1,
                en = m(Ye, Cn),
                je = j.css('direction'),
                we = m(je, cs),
                ja = j.css('box-sizing'),
                Ge = m(ja, is),
                Wr = Ei(Re),
                na;
              try {
                na = Vr ? xn[i.bCR]() : null;
              } catch {
                return;
              }
              (hr = je === 'rtl'), (Tr = ja === 'border-box');
              var re = hr ? br : ue,
                ir = hr ? ue : br,
                Ga = !1,
                Ja =
                  Vr && j.css(ge) !== 'none'
                    ? I.round(na.right - na.left) === 0 &&
                      (Zr ? !0 : Ve[i.cW] - Dr > 0)
                    : !1;
              if (Rr && !Ja) {
                var Xa = Ve[i.oW],
                  Ot = Ae.css(X);
                Ae.css(X, zr);
                var ia = Ve[i.oW];
                Ae.css(X, Ot),
                  (Ga = Xa !== ia),
                  Ga ||
                    (Ae.css(X, Xa + 1),
                    (ia = Ve[i.oW]),
                    Ae.css(X, Ot),
                    (Ga = Xa !== ia));
              }
              var Yr = (Ja || Ga) && Rr && !g,
                mr = m(Yr, $e),
                sa = !Yr && $e,
                Br = Vr && Rr && !g ? I.round(na.bottom - na.top) === 0 : !1,
                ne = m(Br, at),
                oa = !Br && at,
                Nt = (Yr && Tr) || !Tr,
                wt = (Br && Tr) || !Tr,
                ca = Ei(Xe, '-' + X, !Nt, !wt),
                Na = Ei(ve),
                F = {},
                W = {},
                Fr = function () {
                  return { w: Ve[i.cW], h: Ve[i.cH] };
                },
                ke = function () {
                  return {
                    w: et[i.oW] + I.max(0, ba[i.cW] - ba[i.sW]),
                    h: et[i.oH] + I.max(0, ba[i.cH] - ba[i.sH])
                  };
                },
                Ur = (Dr = Wr.l + Wr.r),
                oe = (Te = Wr.t + Wr.b);
              if (
                ((Ur *= Zr ? 1 : 0),
                (oe *= Zr ? 1 : 0),
                (Wr.c = m(Wr, ei)),
                (Fe = ca.l + ca.r),
                (Me = ca.t + ca.b),
                (ca.c = m(ca, ss)),
                (xr = Na.l + Na.r),
                (me = Na.t + Na.b),
                (Na.c = m(Na, os)),
                (Cn = Ye),
                (cs = je),
                (is = ja),
                ($e = Yr),
                (at = Br),
                (ei = Wr),
                (ss = ca),
                (os = Na),
                we && Vr && pa.css(ge, ir),
                Wr.c || we || te || mr || ne || Ge || ta)
              ) {
                var ee = {},
                  Ee = {},
                  st = [Wr.t, Wr.r, Wr.b, Wr.l];
                gt(W, ve, [-Wr.t, -Wr.r, -Wr.b, -Wr.l]),
                  Zr
                    ? (gt(ee, Y, st), gt(N ? Ee : F, Re))
                    : (gt(ee, Y), gt(N ? Ee : F, Re, st)),
                  Ze.css(ee),
                  cr.css(Ee);
              }
              pr = ke();
              var Nr = N ? gi() : !1,
                Za = N && m(Nr, xs),
                la =
                  N && Nr
                    ? {
                        w: Ya ? Nr._dynamicWidth : Nr._originalWidth,
                        h: De ? Nr._dynamicHeight : Nr._originalHeight
                      }
                    : {};
              if (
                ((xs = Nr),
                Br && (ne || te || Ge || Wr.c || ca.c)
                  ? (F[gr] = zr)
                  : (ne || te) && (F[gr] = Wa),
                Yr && (mr || te || Ge || Wr.c || ca.c || we)
                  ? ((F[X] = zr), (W[da + X] = Wa))
                  : (mr || te) && ((F[X] = Wa), (F[ge] = Y), (W[da + X] = Y)),
                Yr
                  ? ((W[X] = zr),
                    (F[X] =
                      Se._cssPropertyValue(X, 'max-content intrinsic') || zr),
                    (F[ge] = ir))
                  : (W[X] = Y),
                Br ? (W[gr] = la.h || ba[i.cH]) : (W[gr] = Y),
                Rr && Ae.css(W),
                Mr.css(F),
                (F = {}),
                (W = {}),
                t ||
                  o ||
                  Za ||
                  we ||
                  Ge ||
                  te ||
                  mr ||
                  Yr ||
                  ne ||
                  Br ||
                  Ir ||
                  Oe ||
                  $r ||
                  Xr ||
                  nr ||
                  Q ||
                  ie ||
                  Z ||
                  At ||
                  Ha ||
                  en)
              ) {
                var be = 'overflow',
                  ga = be + '-x',
                  Ca = be + '-y',
                  ot = 'hidden',
                  va = 'visible';
                if (!rr) {
                  var Aa = {},
                    an = Ea.y && Xt.ys && !Ar ? ($.y ? tr.css(re) : -n.y) : 0,
                    wo = Ea.x && Xt.xs && !Ar ? ($.x ? tr.css(fe) : -n.x) : 0;
                  gt(Aa, Y), tr.css(Aa);
                }
                var ct = Rs(),
                  tn = { w: la.w || ct[i.cW], h: la.h || ct[i.cH] },
                  Bs = { w: ct[i.sW], h: ct[i.sH] };
                rr ||
                  ((Aa[fe] = oa ? Y : wo), (Aa[re] = sa ? Y : an), tr.css(Aa)),
                  (pr = ke());
                var nn = Fr(),
                  Li = {
                    w: nn.w - xr - Fe - (Tr ? 0 : Dr),
                    h: nn.h - me - Me - (Tr ? 0 : Te)
                  },
                  Pt = {
                    w: I.max((Yr ? tn.w : Bs.w) + Ur, Li.w),
                    h: I.max((Br ? tn.h : Bs.h) + oe, Li.h)
                  };
                if (((Pt.c = m(Pt, fs)), (fs = Pt), Rr)) {
                  (Pt.c || Br || Yr) &&
                    ((W[X] = Pt.w),
                    (W[gr] = Pt.h),
                    N || (tn = { w: ct[i.cW], h: ct[i.cH] }));
                  var Fs = {},
                    Us = function (jr) {
                      var ye = ea(jr),
                        ua = ye._w_h,
                        Qr = ye._width_height,
                        vr = jr ? Yr : Br,
                        Oa = jr ? Fe : Me,
                        kt = jr ? Dr : Te,
                        Pn = jr ? xr : me,
                        Dn = pr[ua] - Oa - Pn - (Tr ? 0 : kt);
                      (!vr || (!vr && ca.c)) && (W[Qr] = Li[ua] - 1),
                        vr &&
                          tn[ua] < Dn &&
                          (jr && N ? !Ye : !0) &&
                          (N && (Fs[Qr] = La(Qa.css(Qr)) - 1), (W[Qr] -= 1)),
                        tn[ua] > 0 && (W[Qr] = I.max(1, W[Qr]));
                    };
                  Us(!0), Us(!1), N && Qa.css(Fs), Ae.css(W);
                }
                Yr && (F[X] = Wa),
                  Yr && !Tr && !Sa && (F[ge] = 'none'),
                  Mr.css(F),
                  (F = {});
                var lt = { w: ct[i.sW], h: ct[i.sH] };
                (lt.c = o = m(lt, mt)),
                  (mt = lt),
                  (pr = ke()),
                  (nn = Fr()),
                  (t = m(nn, Jt)),
                  (Jt = nn);
                var Hi = N && (pr.w === 0 || pr.h === 0),
                  Sn = Ht,
                  Dt = {},
                  sn = {},
                  Qs = {},
                  Pa = {},
                  Lr = {},
                  wr = {},
                  on = {},
                  Vs = et[i.bCR](),
                  qs = function (jr) {
                    var ye = ea(jr),
                      ua = ea(!jr),
                      Qr = ua._x_y,
                      vr = ye._x_y,
                      Oa = ye._w_h,
                      kt = ye._width_height,
                      Pn = Ue + ye._Left_Top + 'Max',
                      Dn = Vs[kt] ? I.abs(Vs[kt] - pr[Oa]) : 0,
                      Ro = Sn && Sn[vr] > 0 && yt[Pn] === 0;
                    (Dt[vr] = Er[vr] === 'v-s'),
                      (sn[vr] = Er[vr] === 'v-h'),
                      (Qs[vr] = Er[vr] === 's'),
                      (Pa[vr] = I.max(
                        0,
                        I.round((lt[Oa] - pr[Oa]) * 100) / 100
                      )),
                      (Pa[vr] *= Hi || (Ro && Dn > 0 && Dn < 1) ? 0 : 1),
                      (Lr[vr] = Pa[vr] > 0),
                      (wr[vr] =
                        Dt[vr] || sn[vr]
                          ? Lr[Qr] && !Dt[Qr] && !sn[Qr]
                          : Lr[vr]),
                      (wr[vr + 's'] = wr[vr] ? Qs[vr] || Dt[vr] : !1),
                      (on[vr] = Lr[vr] && wr[vr + 's']);
                  };
                if (
                  (qs(!0),
                  qs(!1),
                  (Pa.c = m(Pa, Ht)),
                  (Ht = Pa),
                  (Lr.c = m(Lr, Ea)),
                  (Ea = Lr),
                  (wr.c = m(wr, Xt)),
                  (Xt = wr),
                  $.x || $.y)
                ) {
                  var ko = 'px solid transparent',
                    Ii = {},
                    $a = {},
                    Tn = l,
                    Ni;
                  (Lr.x || Lr.y) &&
                    (($a.w = $.y && Lr.y ? lt.w + Gr.y : Y),
                    ($a.h = $.x && Lr.x ? lt.h + Gr.x : Y),
                    (Tn = m($a, ns)),
                    (ns = $a)),
                    (Lr.c ||
                      wr.c ||
                      lt.c ||
                      we ||
                      mr ||
                      ne ||
                      Yr ||
                      Br ||
                      Ir) &&
                      ((F[ve + ir] = F[Xe + ir] = Y),
                      (Ni = function (jr) {
                        var ye = ea(jr),
                          ua = ea(!jr),
                          Qr = ye._x_y,
                          vr = jr ? fe : re,
                          Oa = jr ? Br : Yr;
                        $[Qr] && Lr[Qr] && wr[Qr + 's']
                          ? ((F[ve + vr] = Oa ? (Ar ? Y : Gr[Qr]) : Y),
                            (F[Xe + vr] =
                              (jr ? !Oa : !0) && !Ar ? Gr[Qr] + ko : Y))
                          : (($a[ua._w_h] = F[ve + vr] = F[Xe + vr] = Y),
                            (Tn = !0));
                      }),
                      rr ? aa(tr, jn, !Ar) : (Ni(!0), Ni(!1))),
                    Ar && (($a.w = $a.h = Y), (Tn = !0)),
                    Tn &&
                      !rr &&
                      ((Ii[X] = wr.y ? $a.w : Y),
                      (Ii[gr] = wr.x ? $a.h : Y),
                      Ua || ((Ua = q(Ke(no))), tr.prepend(Ua)),
                      Ua.css(Ii)),
                    Mr.css(F);
                }
                var ce = {},
                  ee = {},
                  Pi;
                if (
                  (t ||
                    Lr.c ||
                    wr.c ||
                    lt.c ||
                    Oe ||
                    Ge ||
                    Ir ||
                    we ||
                    $r ||
                    ne) &&
                  ((ce[ir] = Y),
                  (Pi = function (jr) {
                    var ye = ea(jr),
                      ua = ea(!jr),
                      Qr = ye._x_y,
                      vr = ye._X_Y,
                      Oa = jr ? fe : re,
                      kt = function () {
                        (ce[Oa] = Y), (fa[ua._w_h] = 0);
                      };
                    Lr[Qr] && wr[Qr + 's']
                      ? ((ce[be + vr] = Ue),
                        Ar || rr
                          ? kt()
                          : ((ce[Oa] = -($[Qr] ? Gr[Qr] : n[Qr])),
                            (fa[ua._w_h] = $[Qr] ? Gr[ua._x_y] : 0)))
                      : ((ce[be + vr] = Y), kt());
                  }),
                  Pi(!0),
                  Pi(!1),
                  !rr &&
                  (pr.h < xe.x || pr.w < xe.y) &&
                  ((Lr.x && wr.x && !$.x) || (Lr.y && wr.y && !$.y))
                    ? ((ce[Re + qr] = xe.x),
                      (ce[ve + qr] = -xe.x),
                      (ce[Re + ir] = xe.y),
                      (ce[ve + ir] = -xe.y))
                    : (ce[Re + qr] =
                        ce[ve + qr] =
                        ce[Re + ir] =
                        ce[ve + ir] =
                          Y),
                  (ce[Re + re] = ce[ve + re] = Y),
                  (Lr.x && wr.x) || (Lr.y && wr.y) || Hi
                    ? N && Hi && (ee[ga] = ee[Ca] = ot)
                    : (!Pe || sn.x || Dt.x || sn.y || Dt.y) &&
                      (N && (ee[ga] = ee[Ca] = Y), (ce[ga] = ce[Ca] = va)),
                  Ze.css(ee),
                  tr.css(ce),
                  (ce = {}),
                  (Lr.c || Ge || mr || ne) && !($.x && $.y))
                ) {
                  var Ln = ba[i.s];
                  (Ln.webkitTransform = 'scale(1)'),
                    (Ln.display = 'run-in'),
                    (Ln.display = Y),
                    (Ln.webkitTransform = Y);
                }
                if (((F = {}), we || mr || ne))
                  if (hr && Yr) {
                    var Eo = Mr.css(ge),
                      Ks = I.round(Mr.css(ge, Y).css(br, Y).position().left);
                    Mr.css(ge, Eo);
                    var So = I.round(Mr.position().left);
                    Ks !== So && (F[br] = Ks);
                  } else F[br] = Y;
                if ((Mr.css(F), N && o)) {
                  var Da = Co();
                  if (Da) {
                    var Ys = si === z ? !0 : Da._rows !== si._rows,
                      js = Da._cursorRow,
                      To = Da._cursorColumn,
                      Lo = Da._widestRow,
                      Ho = Da._rows,
                      Io = Da._columns,
                      No = Da._cursorPosition,
                      Po = Da._cursorMax,
                      Gs = No >= Po && ui,
                      Hn = {
                        x: !Ye && To === Io && js === Lo ? Ht.x : -1,
                        y: (
                          Ye
                            ? Gs || (Ys && (Sn ? C.y === Sn.y : !1))
                            : (Gs || Ys) && js === Ho
                        )
                          ? Ht.y
                          : -1
                      };
                    (C.x = Hn.x > -1 ? (hr && Va && k.i ? 0 : Hn.x) : C.x),
                      (C.y = Hn.y > -1 ? Hn.y : C.y);
                  }
                  si = Da;
                }
                hr && k.i && $.y && Lr.x && Va && (C.x += fa.w || 0),
                  Yr && j[de](0),
                  Br && j[pe](0),
                  tr[de](C.x)[pe](C.y);
                var Do = ar === 'v',
                  zo = ar === 'h',
                  Mo = ar === 'a',
                  In = function (jr, ye) {
                    (ye = ye === z ? jr : ye),
                      Ps(!0, jr, on.x),
                      Ps(!1, ye, on.y);
                  };
                aa(j, Ut, wr.x || wr.y),
                  aa(j, Ui, wr.x),
                  aa(j, Qi, wr.y),
                  we && !er && aa(j, Fi, hr),
                  er && Jr(j, Kn),
                  Xr &&
                    (aa(j, Kn, wn),
                    aa(He, Vt, !wn),
                    aa(He, Xi, kn),
                    aa(He, Zi, pi),
                    aa(He, $i, _i)),
                  (nr || Oe || wr.c || Lr.c || Ir) &&
                    (Ar
                      ? Ir && (_e(j, un), Ar && In(!1))
                      : Mo
                      ? In(on.x, on.y)
                      : Do
                      ? In(!0)
                      : zo && In(!1)),
                  (Q || Ir) && (mi(!xt && !ra), Ta(hi, !hi)),
                  (t || Pa.c || ne || mr || Xr || Ge || te || Ir || we) &&
                    (wi(!0), xa(!0), wi(!1), xa(!1)),
                  Z && Ds(!0, lr),
                  ie && Ds(!1, kr),
                  qe('onDirectionChanged', { isRTL: hr, dir: je }, we),
                  qe('onHostSizeChanged', { width: Jt.w, height: Jt.h }, t),
                  qe('onContentSizeChanged', { width: mt.w, height: mt.h }, o),
                  qe(
                    'onOverflowChanged',
                    {
                      x: Lr.x,
                      y: Lr.y,
                      xScrollable: wr.xs,
                      yScrollable: wr.ys,
                      clipped: wr.x || wr.y
                    },
                    Lr.c || wr.c
                  ),
                  qe('onOverflowAmountChanged', { x: Pa.x, y: Pa.y }, Pa.c);
              }
              er &&
                tt &&
                (Ea.c || tt.c) &&
                (tt.f || Ls(),
                $.y && Ea.x && Mr.css(We + X, tt.w + Gr.y),
                $.x && Ea.y && Mr.css(We + gr, tt.h + Gr.x),
                (tt.c = !1)),
                D && h.updateOnLoad && Is(),
                qe('onUpdated', { forced: l });
            }
          }
          function Is() {
            N ||
              Ws(function (r, a) {
                Mr.find(a).each(function (t, o) {
                  S.inA(o, Kt) < 0 && (Kt.push(o), q(o).off(ri, yi).on(ri, yi));
                });
              });
          }
          function Ci(r) {
            var a = u._validate(r, u._template, !0, qt);
            return (
              (qt = Ie({}, qt, a._default)),
              (ae = Ie({}, ae, a._prepared)),
              a._prepared
            );
          }
          function Ai(r) {
            var a = 'parent',
              t = 'os-resize-observer-host',
              o = fn + he + pn,
              l = N ? he + pn : Y,
              h = ae.textarea.inheritedAttrs,
              b = {},
              g = function () {
                var P = r ? cr : j;
                G(b, function (ar, nr) {
                  H(nr) == _.s && (ar == i.c ? P.addClass(nr) : P.attr(ar, nr));
                });
              },
              m = [
                Ce,
                vn,
                qn,
                Kn,
                Fi,
                Ri,
                Wi,
                Bi,
                un,
                Ut,
                Ui,
                Qi,
                _n,
                fn,
                pn,
                Zt
              ].join(he),
              C = {};
            (j = j || (N ? (Pr ? cr[a]()[a]()[a]()[a]() : q(Ke(qn))) : cr)),
              (Mr = Mr || qa(Gn + l)),
              (tr = tr || qa(hn + l)),
              (Ze = Ze || qa(Yn + l)),
              (_a = _a || qa(t)),
              (Qa = Qa || (N ? qa(to) : z)),
              Pr && Jr(j, vn),
              r && _e(j, m),
              (h = H(h) == _.s ? h.split(he) : h),
              S.isA(h) &&
                N &&
                G(h, function (V, P) {
                  H(P) == _.s && (b[P] = r ? j.attr(P) : cr.attr(P));
                }),
              r
                ? (Pr && D
                    ? (_a.children().remove(),
                      G([Ze, tr, Mr, Qa], function (V, P) {
                        P && _e(P.removeAttr(i.s), Xn);
                      }),
                      Jr(j, N ? qn : Ce))
                    : (Ka(_a),
                      Mr.contents().unwrap().unwrap().unwrap(),
                      N && (cr.unwrap(), Ka(j), Ka(Qa), g())),
                  N && cr.removeAttr(i.s),
                  er && _e(St, Mi))
                : (N &&
                    (ae.sizeAutoCapable ||
                      ((C[X] = cr.css(X)), (C[gr] = cr.css(gr))),
                    Pr || cr.addClass(pn).wrap(j),
                    (j = cr[a]().css(C))),
                  Pr ||
                    (Jr(cr, N ? o : Ce),
                    j.wrapInner(Mr).wrapInner(tr).wrapInner(Ze).prepend(_a),
                    (Mr = It(j, Qe + Gn)),
                    (tr = It(j, Qe + hn)),
                    (Ze = It(j, Qe + Yn)),
                    N && (Mr.prepend(Qa), g())),
                  rr && Jr(tr, jn),
                  $.x && $.y && Jr(tr, Vi),
                  er && Jr(St, Mi),
                  (gn = _a[0]),
                  (Ve = j[0]),
                  (et = Ze[0]),
                  (yt = tr[0]),
                  (ba = Mr[0]),
                  xi());
          }
          function yo() {
            var r = [
                112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 123, 33, 34,
                37, 38, 39, 40, 16, 17, 18, 19, 20, 144
              ],
              a = [],
              t,
              o,
              l = 175,
              h = 'focus';
            function b(Q) {
              gi(), L.update(zr), Q && dr && clearInterval(t);
            }
            function g(Q) {
              return (
                cr[de](k.i && Va ? 9999999 : 0),
                cr[pe](0),
                S.prvD(Q),
                S.stpP(Q),
                !1
              );
            }
            function m(Q) {
              setTimeout(function () {
                K || b();
              }, 50);
            }
            function C() {
              (ui = !0), Jr(j, h);
            }
            function V() {
              (ui = !1), (a = []), _e(j, h), b(!0);
            }
            function P(Q) {
              var lr = Q.keyCode;
              J(lr, r) < 0 &&
                (a[i.l] || (b(), (t = setInterval(b, 1e3 / 60))),
                J(lr, a) < 0 && a.push(lr));
            }
            function ar(Q) {
              var lr = Q.keyCode,
                Z = J(lr, a);
              J(lr, r) < 0 && (Z > -1 && a.splice(Z, 1), a[i.l] || b(!0));
            }
            function nr(Q) {
              ti !== !0 &&
                ((Q = Q.originalEvent || Q),
                bo(Q.propertyName) && L.update(zr));
            }
            function _r(Q) {
              Cr ||
                (o !== z
                  ? clearTimeout(o)
                  : ((nt || ra) && Ta(!0),
                    rn() || Jr(j, un),
                    qe('onScrollStart', Q)),
                it || (xa(!0), xa(!1)),
                qe('onScroll', Q),
                (o = setTimeout(function () {
                  K ||
                    (clearTimeout(o),
                    (o = z),
                    (nt || ra) && Ta(!1),
                    rn() || _e(j, un),
                    qe('onScrollStop', Q));
                }, l)));
            }
            N
              ? (yr > 9 || !dr ? ya(cr, 'input', b) : ya(cr, [Fn, Un], [P, ar]),
                ya(cr, [Ue, 'drop', h, h + 'out'], [g, m, C, V]))
              : ya(Mr, Qn, nr),
              ya(tr, Ue, _r, !0);
          }
          function Oi(r) {
            var a = function (b) {
              var g = b ? oo : co,
                m = qa(Ba + he + g, !0),
                C = qa(Ki, m),
                V = qa(ji, m);
              return (
                !Pr && !r && (m.append(C), C.append(V)),
                { _scrollbar: m, _track: C, _handle: V }
              );
            };
            function t(h) {
              var b = ea(h),
                g = b._scrollbar,
                m = b._track,
                C = b._handle;
              Pr && D
                ? G([g, m, C], function (V, P) {
                    _e(P.removeAttr(i.s), Xn);
                  })
                : Ka(g || a(h)._scrollbar);
            }
            var o, l;
            r
              ? (t(!0), t())
              : ((o = a(!0)),
                (l = a()),
                (_t = o._scrollbar),
                (yn = o._track),
                (Yt = o._handle),
                (bt = l._scrollbar),
                (mn = l._track),
                (jt = l._handle),
                Pr || (Ze.after(bt), Ze.after(_t)));
          }
          function Ns(r) {
            var a = ea(r),
              t = a._info,
              o = Gt.top !== Gt,
              l = a._x_y,
              h = a._X_Y,
              b = Ue + a._Left_Top,
              g = 'active',
              m = 'snapHandle',
              C = 'click',
              V = 1,
              P = [16, 17],
              ar,
              nr,
              _r,
              Q;
            function lr(E) {
              return yr && o ? E['screen' + h] : S.page(E)[l];
            }
            function Z(E) {
              return ae.scrollbars[E];
            }
            function kr() {
              V = 0.5;
            }
            function ie() {
              V = 1;
            }
            function Kr(E) {
              S.stpP(E);
            }
            function Ne(E) {
              J(E.keyCode, P) > -1 && kr();
            }
            function se(E) {
              J(E.keyCode, P) > -1 && ie();
            }
            function Xr(E) {
              var Or = E.originalEvent || E,
                Er = Or.touches !== z;
              return Cr || K || rn() || !ni || (Er && !Z('touchSupport'))
                ? !1
                : S.mBtn(E) === 1 || Er;
            }
            function Zr(E) {
              if (Xr(E)) {
                var Or = t._trackLength,
                  Er = t._handleLength,
                  Oe = t._maxScroll,
                  Ya = (lr(E) - _r) * Q,
                  At = Ya / (Or - Er),
                  De = Oe * At;
                (De = isFinite(De) ? De : 0),
                  hr && r && !k.i && (De *= -1),
                  tr[b](I.round(nr + De)),
                  it && xa(r, nr + De),
                  p || S.prvD(E);
              } else te(E);
            }
            function te(E) {
              if (
                ((E = E || E.originalEvent),
                Be(ka, [Bt, Wt, Fn, Un, Ft], [Zr, te, Ne, se, $t], !0),
                S.rAF()(function () {
                  Be(ka, C, Kr, !0, { _capture: !0 });
                }),
                it && xa(r, !0),
                (it = !1),
                _e(pt, ht),
                _e(a._handle, g),
                _e(a._track, g),
                _e(a._scrollbar, g),
                (nr = z),
                (_r = z),
                (Q = 1),
                ie(),
                ar !== z && (L.scrollStop(), clearTimeout(ar), (ar = z)),
                E)
              ) {
                var Or = Ve[i.bCR](),
                  Er =
                    E.clientX >= Or.left &&
                    E.clientX <= Or.right &&
                    E.clientY >= Or.top &&
                    E.clientY <= Or.bottom;
                Er || Ts(), (nt || ra) && Ta(!1);
              }
            }
            function Pe(E) {
              Xr(E) && $r(E);
            }
            function $r(E) {
              (nr = tr[b]()),
                (nr = isNaN(nr) ? 0 : nr),
                ((hr && r && !k.n) || !hr) && (nr = nr < 0 ? 0 : nr),
                (Q = Si()[l]),
                (_r = lr(E)),
                (it = !Z(m)),
                Jr(pt, ht),
                Jr(a._handle, g),
                Jr(a._scrollbar, g),
                Be(ka, [Bt, Wt, Ft], [Zr, te, $t]),
                S.rAF()(function () {
                  Be(ka, C, Kr, !1, { _capture: !0 });
                }),
                (yr || !Hr) && S.prvD(E),
                S.stpP(E);
            }
            function Rr(E) {
              if (Xr(E)) {
                var Or =
                    a._info._handleLength /
                    Math.round(
                      I.min(1, pr[a._w_h] / mt[a._w_h]) * a._info._trackLength
                    ),
                  Er = I.round(pr[a._w_h] * Or),
                  Oe = 270 * Or,
                  Ya = 400 * Or,
                  At = a._track.offset()[a._left_top],
                  De = E.ctrlKey,
                  Ha = E.shiftKey,
                  Ia = Ha && De,
                  Ye = !0,
                  en = 'linear',
                  je,
                  we,
                  ja = function (re) {
                    it && xa(r, re);
                  },
                  Ge = function () {
                    ja(), $r(E);
                  },
                  Wr = function na() {
                    if (!K) {
                      var re = (_r - At) * Q,
                        ir = t._handleOffset,
                        Ga = t._trackLength,
                        Ja = t._handleLength,
                        Xa = t._maxScroll,
                        Ot = t._currentScroll,
                        ia = Oe * V,
                        Yr = Ye ? I.max(Ya, ia) : ia,
                        mr = Xa * ((re - Ja / 2) / (Ga - Ja)),
                        sa = hr && r && ((!k.i && !k.n) || Va),
                        Br = sa ? ir < re : ir > re,
                        ne = {},
                        oa = {
                          easing: en,
                          step: function (wt) {
                            it && (tr[b](wt), xa(r, wt));
                          }
                        };
                      (mr = isFinite(mr) ? mr : 0),
                        (mr = hr && r && !k.i ? Xa - mr : mr),
                        Ha
                          ? (tr[b](mr),
                            Ia
                              ? ((mr = tr[b]()),
                                tr[b](Ot),
                                (mr = sa && k.i ? Xa - mr : mr),
                                (mr = sa && k.n ? -mr : mr),
                                (ne[l] = mr),
                                L.scroll(
                                  ne,
                                  Ie(oa, { duration: 130, complete: Ge })
                                ))
                              : Ge())
                          : ((je = Ye ? Br : je),
                            (we = sa
                              ? je
                                ? ir + Ja >= re
                                : ir <= re
                              : je
                              ? ir <= re
                              : ir + Ja >= re),
                            we
                              ? (clearTimeout(ar),
                                L.scrollStop(),
                                (ar = z),
                                ja(!0))
                              : ((ar = setTimeout(na, Yr)),
                                (ne[l] = (je ? '-=' : '+=') + Er),
                                L.scroll(ne, Ie(oa, { duration: ia }))),
                            (Ye = !1));
                    }
                  };
                De && kr(),
                  (Q = Si()[l]),
                  (_r = S.page(E)[l]),
                  (it = !Z(m)),
                  Jr(pt, ht),
                  Jr(a._track, g),
                  Jr(a._scrollbar, g),
                  Be(ka, [Wt, Fn, Un, Ft], [te, Ne, se, $t]),
                  Wr(),
                  S.prvD(E),
                  S.stpP(E);
              }
            }
            function ta(E) {
              (di = !0), (nt || ra) && Ta(!0);
            }
            function Ar(E) {
              (di = !1), (nt || ra) && Ta(!1);
            }
            function Ir(E) {
              S.stpP(E);
            }
            ya(a._handle, Et, Pe),
              ya(a._track, [Et, Di, zi], [Rr, ta, Ar]),
              ya(a._scrollbar, Et, Ir),
              s &&
                ya(a._scrollbar, Qn, function (E) {
                  E.target === a._scrollbar[0] && (wi(r), xa(r));
                });
          }
          function Ps(r, a, t) {
            var o = r ? Ri : Wi,
              l = r ? _t : bt;
            aa(j, o, !a), aa(l, Ji, !t);
          }
          function Ta(r, a) {
            if ((clearTimeout(ws), r)) _e(_t, Qt), _e(bt, Qt);
            else {
              var t,
                o = 'active',
                l = function () {
                  !di &&
                    !K &&
                    ((t = Yt.hasClass(o) || jt.hasClass(o)),
                    !t && (nt || ra || xt) && Jr(_t, Qt),
                    !t && (nt || ra || xt) && Jr(bt, Qt));
                };
              fi > 0 && a !== !0 ? (ws = setTimeout(l, fi)) : l();
            }
          }
          function wi(r) {
            var a = {},
              t = ea(r),
              o = t._info,
              l = 1e6,
              h = I.min(1, pr[t._w_h] / mt[t._w_h]);
            (a[t._width_height] = I.floor(h * 100 * l) / l + '%'),
              rn() || t._handle.css(a),
              (o._handleLength = t._handle[0]['offset' + t._Width_Height]),
              (o._handleLengthRatio = h);
          }
          function xa(r, a) {
            var t = H(a) == _.b,
              o = 250,
              l = hr && r,
              h = ea(r),
              b = h._info,
              g = 'translate(',
              m = Se._cssProperty('transform'),
              C = Se._cssProperty('transition'),
              V = r ? tr[de]() : tr[pe](),
              P = a === z || t ? V : a,
              ar = b._handleLength,
              nr = h._track[0]['offset' + h._Width_Height],
              _r = nr - ar,
              Q = {},
              lr,
              Z,
              kr =
                (yt[Ue + h._Width_Height] - yt['client' + h._Width_Height]) *
                (k.n && l ? -1 : 1),
              ie = function (Pe) {
                return isNaN(Pe / kr) ? 0 : I.max(0, I.min(1, Pe / kr));
              },
              Kr = function (Pe) {
                var $r = _r * Pe;
                return (
                  ($r = isNaN($r) ? 0 : $r),
                  ($r = l && !k.i ? nr - ar - $r : $r),
                  ($r = I.max(0, $r)),
                  $r
                );
              },
              Ne = ie(V),
              se = ie(P),
              Xr = Kr(se),
              Zr = Kr(Ne);
            (b._maxScroll = kr),
              (b._currentScroll = V),
              (b._currentScrollRatio = Ne),
              c
                ? ((lr = l ? -(nr - ar - Xr) : Xr),
                  (Z = r ? g + lr + 'px, 0)' : g + '0, ' + lr + 'px)'),
                  (Q[m] = Z),
                  s &&
                    (Q[C] =
                      t && I.abs(Xr - b._handleOffset) > 1
                        ? xo(h._handle) + ', ' + (m + he + o + 'ms')
                        : Y))
                : (Q[h._left_top] = Xr),
              rn() ||
                (h._handle.css(Q),
                c &&
                  s &&
                  t &&
                  h._handle.one(Qn, function () {
                    K || h._handle.css(C, Y);
                  })),
              (b._handleOffset = Xr),
              (b._snappedHandleOffset = Zr),
              (b._trackLength = nr);
          }
          function Ds(r, a) {
            var t = a ? 'removeClass' : 'addClass',
              o = r ? yn : Yt,
              l = r ? mn : jt,
              h = r ? Yi : Gi;
            o[t](h), l[t](h);
          }
          function ea(r) {
            return {
              _width_height: r ? X : gr,
              _Width_Height: r ? 'Width' : 'Height',
              _left_top: r ? br : qr,
              _Left_Top: r ? 'Left' : 'Top',
              _x_y: r ? Mt : Rt,
              _X_Y: r ? 'X' : 'Y',
              _w_h: r ? 'w' : 'h',
              _l_t: r ? 'l' : 't',
              _track: r ? yn : mn,
              _handle: r ? Yt : jt,
              _scrollbar: r ? _t : bt,
              _info: r ? Je : ha
            };
          }
          function ki(r) {
            (He = He || qa(Jn, !0)),
              r
                ? Pr && D
                  ? _e(He.removeAttr(i.s), Xn)
                  : Ka(He)
                : Pr || j.append(He);
          }
          function mo() {
            var r = Gt.top !== Gt,
              a = {},
              t = {},
              o = {},
              l;
            function h(C) {
              if (g(C)) {
                var V = m(C),
                  P = {};
                (pi || kn) && (P[X] = t.w + (V.x - a.x) * o.x),
                  (_i || kn) && (P[gr] = t.h + (V.y - a.y) * o.y),
                  j.css(P),
                  S.stpP(C);
              } else b(C);
            }
            function b(C) {
              var V = C !== z;
              Be(ka, [Ft, Bt, Wt], [$t, h, b], !0),
                _e(pt, ht),
                He.releaseCapture && He.releaseCapture(),
                V && (l && Es(), L.update(zr)),
                (l = !1);
            }
            function g(C) {
              var V = C.originalEvent || C,
                P = V.touches !== z;
              return Cr || K ? !1 : S.mBtn(C) === 1 || P;
            }
            function m(C) {
              return yr && r ? { x: C.screenX, y: C.screenY } : S.page(C);
            }
            ya(He, Et, function (C) {
              g(C) &&
                !wn &&
                (Sa && ((l = !0), bi()),
                (a = m(C)),
                (t.w = Ve[i.oW] - (Tr ? 0 : Dr)),
                (t.h = Ve[i.oH] - (Tr ? 0 : Te)),
                (o = Si()),
                Be(ka, [Ft, Bt, Wt], [$t, h, b]),
                Jr(pt, ht),
                He.setCapture && He.setCapture(),
                S.prvD(C),
                S.stpP(C));
            });
          }
          function qe(r, a, t) {
            if (t !== !1)
              if (D) {
                var o = ae.callbacks[r],
                  l = r,
                  h;
                l.substr(0, 2) === 'on' &&
                  (l = l.substr(2, 1).toLowerCase() + l.substr(3)),
                  H(o) == _.f && o.call(L, a),
                  G(Fa, function () {
                    (h = this), H(h.on) == _.f && h.on(l, a);
                  });
              } else K || Zn.push({ n: r, a });
          }
          function gt(r, a, t) {
            (a = a || Y),
              (t = t || [Y, Y, Y, Y]),
              (r[a + qr] = t[0]),
              (r[a + ue] = t[1]),
              (r[a + fe] = t[2]),
              (r[a + br] = t[3]);
          }
          function Ei(r, a, t, o) {
            return (
              (a = a || Y),
              (r = r || Y),
              {
                t: o ? 0 : La(j.css(r + qr + a)),
                r: t ? 0 : La(j.css(r + ue + a)),
                b: o ? 0 : La(j.css(r + fe + a)),
                l: t ? 0 : La(j.css(r + br + a))
              }
            );
          }
          function xo(r) {
            var a = Se._cssProperty('transition'),
              t = r.css(a);
            if (t) return t;
            for (
              var o = '\\s*(([^,(]+(\\(.+?\\))?)+)[\\s,]*',
                l = new RegExp(o),
                h = new RegExp('^(' + o + ')+$'),
                b = 'property duration timing-function delay'.split(' '),
                g = [],
                m,
                C,
                V = 0,
                P,
                ar = function (_r) {
                  if (((m = []), !_r.match(h))) return _r;
                  for (; _r.match(l); )
                    m.push(RegExp.$1), (_r = _r.replace(l, Y));
                  return m;
                };
              V < b[i.l];
              V++
            )
              for (C = ar(r.css(a + '-' + b[V])), P = 0; P < C[i.l]; P++)
                g[P] = (g[P] ? g[P] + he : Y) + C[P];
            return g.join(', ');
          }
          function zs(r, a) {
            var t,
              o,
              l,
              h = function (g, m) {
                if (((l = ''), m && Ma(g) == _.s))
                  for (o = g.split(he), t = 0; t < o[i.l]; t++)
                    l += '|' + o[t] + '$';
                return l;
              };
            return new RegExp(
              '(^' + Ce + '([-_].+|)$)' + h(Zt, r) + h(ii, a),
              'g'
            );
          }
          function Si() {
            var r = et[i.bCR]();
            return {
              x: (c && 1 / (I.round(r.width) / et[i.oW])) || 1,
              y: (c && 1 / (I.round(r.height) / et[i.oH])) || 1
            };
          }
          function Ms(r) {
            var a = 'ownerDocument',
              t = 'HTMLElement',
              o = (r && r[a] && r[a].parentWindow) || U;
            return Ma(o[t]) == _.o
              ? r instanceof o[t]
              : r &&
                  Ma(r) == _.o &&
                  r !== null &&
                  r.nodeType === 1 &&
                  Ma(r.nodeName) == _.s;
          }
          function go(r, a) {
            var t = [],
              o = [],
              l,
              h;
            for (l = 0; l < r.length; l++) t[r[l]] = !0;
            for (l = 0; l < a.length; l++)
              t[a[l]] ? delete t[a[l]] : (t[a[l]] = !0);
            for (h in t) o.push(h);
            return o;
          }
          function La(r, a) {
            var t = a ? parseFloat(r) : parseInt(r, 10);
            return isNaN(t) ? 0 : t;
          }
          function Co() {
            var r = rt.selectionStart;
            if (r !== z) {
              var a = cr.val(),
                t = a[i.l],
                o = a.split(`
`),
                l = o[i.l],
                h = a.substr(0, r).split(`
`),
                b = 0,
                g = 0,
                m = h[i.l],
                C = h[h[i.l] - 1][i.l],
                V,
                P;
              for (P = 0; P < o[i.l]; P++)
                (V = o[P][i.l]), V > g && ((b = P + 1), (g = V));
              return {
                _cursorRow: m,
                _cursorColumn: C,
                _rows: l,
                _columns: g,
                _widestRow: b,
                _cursorPosition: r,
                _cursorMax: t
              };
            }
          }
          function rn() {
            return ai && $.x && $.y;
          }
          function Rs() {
            return N ? Qa[0] : ba;
          }
          function Ke(r, a) {
            return (
              '<div ' +
              (r
                ? H(r) == _.s
                  ? 'class="' + r + '"'
                  : (function () {
                      var t,
                        o = Y;
                      if (q.isPlainObject(r))
                        for (t in r)
                          o += (t === 'c' ? 'class' : t) + '="' + r[t] + '" ';
                      return o;
                    })()
                : Y) +
              '>' +
              (a || Y) +
              '</div>'
            );
          }
          function qa(r, a) {
            var t = H(a) == _.b,
              o = t ? j : a || j;
            return Pr && !o[i.l]
              ? null
              : Pr
              ? o[t ? 'children' : 'find'](Qe + r.replace(/\s/g, Qe)).eq(0)
              : q(Ke(r));
          }
          function Ti(r, a) {
            for (var t = a.split(Qe), o = 0, l; o < t.length; o++) {
              if (!r[i.hOP](t[o])) return;
              (l = r[t[o]]), o < t.length && H(l) == _.o && (r = l);
            }
            return l;
          }
          function Ao(r, a, t) {
            for (
              var o = a.split(Qe), l = o.length, h = 0, b = {}, g = b;
              h < l;
              h++
            )
              b = b[o[h]] = h + 1 < l ? {} : t;
            q.extend(r, g, !0);
          }
          function Ws(r) {
            var a = ae.updateOnLoad;
            (a = H(a) == _.s ? a.split(he) : a), S.isA(a) && !K && G(a, r);
          }
          function Ct(r, a, t) {
            if (t) return t;
            if (H(r) == _.o && H(a) == _.o) {
              for (var o in r)
                if (o !== 'c')
                  if (r[i.hOP](o) && a[i.hOP](o)) {
                    if (Ct(r[o], a[o])) return !0;
                  } else return !0;
            } else return r !== a;
            return !1;
          }
          function Ie() {
            return q.extend.apply(this, [!0].concat([].slice.call(arguments)));
          }
          function Jr(r, a) {
            return fr.addClass.call(r, a);
          }
          function _e(r, a) {
            return fr.removeClass.call(r, a);
          }
          function aa(r, a, t) {
            return t ? Jr(r, a) : _e(r, a);
          }
          function Ka(r) {
            return fr.remove.call(r);
          }
          function It(r, a) {
            return fr.find.call(r, a).eq(0);
          }
          (L.sleep = function () {
            Cr = !0;
          }),
            (L.update = function (r) {
              if (!K) {
                var a,
                  t,
                  o = H(r) == _.s,
                  l,
                  h,
                  b;
                return (
                  o
                    ? r === zr
                      ? ((a = _o()),
                        (t = po()),
                        (l = a || t),
                        l &&
                          ma({
                            _contentSizeChanged: t,
                            _changedOptions: D ? z : ae
                          }))
                      : r === Mn
                      ? Sa
                        ? ((h = oi(An.takeRecords())),
                          (b = ci(On.takeRecords())))
                        : (h = L.update(zr))
                      : r === 'zoom' &&
                        ma({ _hostSizeChanged: !0, _contentSizeChanged: !0 })
                    : ((r = Cr || r),
                      (Cr = !1),
                      (!L.update(Mn) || r) && ma({ _force: r })),
                  Is(),
                  l || h || b
                );
              }
            }),
            (L.options = function (r, a) {
              var t = {},
                o;
              if (q.isEmptyObject(r) || !q.isPlainObject(r))
                if (H(r) == _.s)
                  if (arguments.length > 1) Ao(t, r, a), (o = Ci(t));
                  else return Ti(qt, r);
                else return qt;
              else o = Ci(r);
              q.isEmptyObject(o) || ma({ _changedOptions: o });
            }),
            (L.destroy = function () {
              if (!K) {
                Sr.remove(L), bi(), En(_a), En(pa);
                for (var r in Fa) L.removeExt(r);
                for (; vi[i.l] > 0; ) vi.pop()();
                mi(!0),
                  Ae && Ka(Ae),
                  Ua && Ka(Ua),
                  Vr && Ka(pa),
                  Oi(!0),
                  ki(!0),
                  Ai(!0);
                for (var a = 0; a < Kt[i.l]; a++) q(Kt[a]).off(ri, yi);
                (Kt = z), (K = !0), (Cr = !0), Ra(w, 0), qe('onDestroyed');
              }
            }),
            (L.scroll = function (r, a, t, o) {
              if (arguments.length === 0 || r === z) {
                var l = Je,
                  h = ha,
                  b = Va && hr && k.i,
                  g = Va && hr && k.n,
                  m = l._currentScroll,
                  C = l._currentScrollRatio,
                  V = l._maxScroll;
                return (
                  (C = b ? 1 - C : C),
                  (m = b ? V - m : m),
                  (m *= g ? -1 : 1),
                  (V *= g ? -1 : 1),
                  {
                    position: { x: m, y: h._currentScroll },
                    ratio: { x: C, y: h._currentScrollRatio },
                    max: { x: V, y: h._maxScroll },
                    handleOffset: { x: l._handleOffset, y: h._handleOffset },
                    handleLength: { x: l._handleLength, y: h._handleLength },
                    handleLengthRatio: {
                      x: l._handleLengthRatio,
                      y: h._handleLengthRatio
                    },
                    trackLength: { x: l._trackLength, y: h._trackLength },
                    snappedHandleOffset: {
                      x: l._snappedHandleOffset,
                      y: h._snappedHandleOffset
                    },
                    isRTL: hr,
                    isRTLNormalized: Va
                  }
                );
              }
              L.update(Mn);
              var P = Va,
                ar = [Mt, br, 'l'],
                nr = [Rt, qr, 't'],
                _r = ['+=', '-=', '*=', '/='],
                Q = H(a) == _.o,
                lr = Q ? a.complete : o,
                Z,
                kr = {},
                ie = {},
                Kr,
                Ne,
                se,
                Xr = 'end',
                Zr = 'begin',
                te = 'center',
                Pe = 'nearest',
                $r = 'always',
                Rr = 'never',
                ta = 'ifneeded',
                Ar = i.l,
                Ir,
                E,
                Or,
                Er,
                Oe,
                Ya = [Mt, Rt, 'xy', 'yx'],
                At = [Zr, Xr, te, Pe],
                De = [$r, Rr, ta],
                Ha = r[i.hOP]('el'),
                Ia = Ha ? r.el : r,
                Ye = Ia instanceof q || vt ? Ia instanceof vt : !1,
                en = Ye ? !1 : Ms(Ia),
                je = function () {
                  Kr && xa(!0), Ne && xa(!1);
                },
                we =
                  H(lr) != _.f
                    ? z
                    : function () {
                        je(), lr();
                      };
              function ja(F, W) {
                for (Z = 0; Z < W[Ar]; Z++) if (F === W[Z]) return !0;
                return !1;
              }
              function Ge(F, W) {
                var Fr = F ? ar : nr;
                if (((W = H(W) == _.s || H(W) == _.n ? [W, W] : W), S.isA(W)))
                  return F ? W[0] : W[1];
                if (H(W) == _.o) {
                  for (Z = 0; Z < Fr[Ar]; Z++) if (Fr[Z] in W) return W[Fr[Z]];
                }
              }
              function Wr(F, W) {
                var Fr = H(W) == _.s,
                  ke,
                  Ur,
                  oe = F ? Je : ha,
                  ee = oe._currentScroll,
                  Ee = oe._maxScroll,
                  st = ' * ',
                  Nr,
                  Za = hr && F,
                  la = Za && k.n && !P,
                  be = 'replace',
                  ga = eval,
                  Ca;
                if (
                  (Fr
                    ? (W[Ar] > 2 &&
                        ((Ca = W.substr(0, 2)), J(Ca, _r) > -1 && (ke = Ca)),
                      (W = ke ? W.substr(2) : W),
                      (W = W[be](/min/g, 0)
                        [be](/</g, 0)
                        [be](/max/g, (la ? '-' : Y) + Wa)
                        [be](/>/g, (la ? '-' : Y) + Wa)
                        [be](/px/g, Y)
                        [be](/%/g, st + (Ee * (Za && k.n ? -1 : 1)) / 100)
                        [be](/vw/g, st + pr.w)
                        [be](/vh/g, st + pr.h)),
                      (Ur = La(isNaN(W) ? La(ga(W), !0).toFixed() : W)))
                    : (Ur = W),
                  Ur !== z && !isNaN(Ur) && H(Ur) == _.n)
                ) {
                  var ot = P && Za,
                    va = ee * (ot && k.n ? -1 : 1),
                    Aa = ot && k.i,
                    an = ot && k.n;
                  switch (((va = Aa ? Ee - va : va), ke)) {
                    case '+=':
                      Nr = va + Ur;
                      break;
                    case '-=':
                      Nr = va - Ur;
                      break;
                    case '*=':
                      Nr = va * Ur;
                      break;
                    case '/=':
                      Nr = va / Ur;
                      break;
                    default:
                      Nr = Ur;
                      break;
                  }
                  (Nr = Aa ? Ee - Nr : Nr),
                    (Nr *= an ? -1 : 1),
                    (Nr =
                      Za && k.n
                        ? I.min(0, I.max(Ee, Nr))
                        : I.max(0, I.min(Ee, Nr)));
                }
                return Nr === ee ? z : Nr;
              }
              function na(F, W, Fr, ke) {
                var Ur = [Fr, Fr],
                  oe = H(F),
                  ee,
                  Ee;
                if (oe == W) F = [F, F];
                else if (oe == _.a) {
                  if (((ee = F[Ar]), ee > 2 || ee < 1)) F = Ur;
                  else
                    for (ee === 1 && (F[1] = Fr), Z = 0; Z < ee; Z++)
                      if (((Ee = F[Z]), H(Ee) != W || !ja(Ee, ke))) {
                        F = Ur;
                        break;
                      }
                } else oe == _.o ? (F = [F[Mt] || Fr, F[Rt] || Fr]) : (F = Ur);
                return { x: F[0], y: F[1] };
              }
              function re(F) {
                var W = [],
                  Fr,
                  ke,
                  Ur = [qr, ue, fe, br];
                for (Z = 0; Z < F[Ar] && Z !== Ur[Ar]; Z++)
                  (Fr = F[Z]),
                    (ke = H(Fr)),
                    ke == _.b
                      ? W.push(Fr ? La(Oe.css(ve + Ur[Z])) : 0)
                      : W.push(ke == _.n ? Fr : 0);
                return W;
              }
              if (Ye || en) {
                var ir = Ha ? r.margin : 0,
                  Ga = Ha ? r.axis : 0,
                  Ja = Ha ? r.scroll : 0,
                  Xa = Ha ? r.block : 0,
                  Ot = [0, 0, 0, 0],
                  ia = H(ir),
                  Yr;
                if (((Oe = Ye ? Ia : q(Ia)), Oe[Ar] > 0)) {
                  ia == _.n || ia == _.b
                    ? (ir = re([ir, ir, ir, ir]))
                    : ia == _.a
                    ? ((Yr = ir[Ar]),
                      Yr === 2
                        ? (ir = re([ir[0], ir[1], ir[0], ir[1]]))
                        : Yr >= 4
                        ? (ir = re(ir))
                        : (ir = Ot))
                    : ia == _.o
                    ? (ir = re([ir[qr], ir[ue], ir[fe], ir[br]]))
                    : (ir = Ot),
                    (Ir = ja(Ga, Ya) ? Ga : 'xy'),
                    (E = na(Ja, _.s, $r, De)),
                    (Or = na(Xa, _.s, Zr, At)),
                    (Er = ir);
                  var mr = { l: Je._currentScroll, t: ha._currentScroll },
                    sa = Ze.offset(),
                    Br = Oe.offset(),
                    ne = { x: E.x == Rr || Ir == Rt, y: E.y == Rr || Ir == Mt };
                  (Br[qr] -= Er[0]), (Br[br] -= Er[3]);
                  var oa = {
                    x: I.round(Br[br] - sa[br] + mr.l),
                    y: I.round(Br[qr] - sa[qr] + mr.t)
                  };
                  if (
                    (hr &&
                      (!k.n && !k.i && (oa.x = I.round(sa[br] - Br[br] + mr.l)),
                      k.n && P && (oa.x *= -1),
                      k.i &&
                        P &&
                        (oa.x = I.round(
                          sa[br] - Br[br] + (Je._maxScroll - mr.l)
                        ))),
                    Or.x != Zr || Or.y != Zr || E.x == ta || E.y == ta || hr)
                  ) {
                    var Nt = Oe[0],
                      wt = c
                        ? Nt[i.bCR]()
                        : { width: Nt[i.oW], height: Nt[i.oH] },
                      ca = {
                        w: wt[X] + Er[3] + Er[1],
                        h: wt[gr] + Er[0] + Er[2]
                      },
                      Na = function (W) {
                        var Fr = ea(W),
                          ke = Fr._w_h,
                          Ur = Fr._left_top,
                          oe = Fr._x_y,
                          ee = Or[oe] == (W && hr ? Zr : Xr),
                          Ee = Or[oe] == te,
                          st = Or[oe] == Pe,
                          Nr = E[oe] == Rr,
                          Za = E[oe] == ta,
                          la = pr[ke],
                          be = sa[Ur],
                          ga = ca[ke],
                          Ca = Br[Ur],
                          ot = Ee ? 2 : 1,
                          va = Ca + ga / 2,
                          Aa = be + la / 2,
                          an = ga <= la && Ca >= be && Ca + ga <= be + la;
                        Nr
                          ? (ne[oe] = !0)
                          : ne[oe] ||
                            ((st || Za) &&
                              ((ne[oe] = Za ? an : !1),
                              (ee = ga < la ? va > Aa : va < Aa)),
                            (oa[oe] -=
                              ee || Ee
                                ? (la / ot - ga / ot) * (W && hr && P ? -1 : 1)
                                : 0));
                      };
                    Na(!0), Na(!1);
                  }
                  ne.y && delete oa.y, ne.x && delete oa.x, (r = oa);
                }
              }
              (kr[de] = Wr(!0, Ge(!0, r))),
                (kr[pe] = Wr(!1, Ge(!1, r))),
                (Kr = kr[de] !== z),
                (Ne = kr[pe] !== z),
                (Kr || Ne) && (a > 0 || Q)
                  ? Q
                    ? ((a.complete = we), tr.animate(kr, a))
                    : ((se = { duration: a, complete: we }),
                      S.isA(t) || q.isPlainObject(t)
                        ? ((ie[de] = t[0] || t.x),
                          (ie[pe] = t[1] || t.y),
                          (se.specialEasing = ie))
                        : (se.easing = t),
                      tr.animate(kr, se))
                  : (Kr && tr[de](kr[de]), Ne && tr[pe](kr[pe]), je());
            }),
            (L.scrollStop = function (r, a, t) {
              return tr.stop(r, a, t), L;
            }),
            (L.getElements = function (r) {
              var a = {
                target: rt,
                host: Ve,
                padding: et,
                viewport: yt,
                content: ba,
                scrollbarHorizontal: {
                  scrollbar: _t[0],
                  track: yn[0],
                  handle: Yt[0]
                },
                scrollbarVertical: {
                  scrollbar: bt[0],
                  track: mn[0],
                  handle: jt[0]
                },
                scrollbarCorner: He[0]
              };
              return H(r) == _.s ? Ti(a, r) : a;
            }),
            (L.getState = function (r) {
              function a(o) {
                if (!q.isPlainObject(o)) return o;
                var l = Ie({}, o),
                  h = function (g, m) {
                    l[i.hOP](g) && ((l[m] = l[g]), delete l[g]);
                  };
                return h('w', X), h('h', gr), delete l.c, l;
              }
              var t = {
                destroyed: !!a(K),
                sleeping: !!a(Cr),
                autoUpdate: a(!Sa),
                widthAuto: a($e),
                heightAuto: a(at),
                padding: a(ei),
                overflowAmount: a(Ht),
                hideOverflow: a(Xt),
                hasOverflow: a(Ea),
                contentScrollSize: a(mt),
                viewportSize: a(pr),
                hostSize: a(Jt),
                documentMixed: a(Hr)
              };
              return H(r) == _.s ? Ti(t, r) : t;
            }),
            (L.ext = function (r) {
              var a,
                t = lo.split(' '),
                o = 0;
              if (H(r) == _.s) {
                if (Fa[i.hOP](r))
                  for (a = Ie({}, Fa[r]); o < t.length; o++) delete a[t[o]];
              } else {
                a = {};
                for (o in Fa) a[o] = Ie({}, L.ext(o));
              }
              return a;
            }),
            (L.addExt = function (r, a) {
              var t = A.extension(r),
                o,
                l,
                h,
                b,
                g = !0;
              if (t) {
                if (Fa[i.hOP](r)) return L.ext(r);
                if (
                  ((o = t.extensionFactory.call(
                    L,
                    Ie({}, t.defaultOptions),
                    q,
                    S
                  )),
                  o &&
                    ((h = o.contract),
                    H(h) == _.f && ((b = h(U)), (g = H(b) == _.b ? b : g)),
                    g))
                )
                  return (
                    (Fa[r] = o), (l = o.added), H(l) == _.f && l(a), L.ext(r)
                  );
              } else
                console.warn(
                  'A extension with the name "' + r + `" isn't registered.`
                );
            }),
            (L.removeExt = function (r) {
              var a = Fa[r],
                t;
              return a
                ? (delete Fa[r], (t = a.removed), H(t) == _.f && t(), !0)
                : !1;
            });
          function Oo(r, a, t) {
            (rs = R.defaultOptions),
              (rr = R.nativeScrollbarStyling),
              (n = Ie({}, R.nativeScrollbarSize)),
              ($ = Ie({}, R.nativeScrollbarIsOverlaid)),
              (Gr = Ie({}, R.overlayScrollbarDummySize)),
              (k = Ie({}, R.rtlScrollBehavior)),
              Ci(Ie({}, rs, a)),
              (v = R.cssCalc),
              (yr = R.msie),
              (dr = R.autoUpdateRecommended),
              (s = R.supportTransition),
              (c = R.supportTransform),
              (p = R.supportPassiveEvents),
              (y = R.supportResizeObserver),
              (T = R.supportMutationObserver),
              (ka = q(r.ownerDocument)),
              (Tt = ka[0]),
              (bn = q(Tt.defaultView || Tt.parentWindow)),
              (Gt = bn[0]),
              (St = It(ka, 'html')),
              (pt = It(St, 'body')),
              (cr = q(r)),
              (rt = cr[0]),
              (N = cr.is('textarea')),
              (er = cr.is('body')),
              (Hr = Tt !== sr),
              (Pr = N
                ? cr.hasClass(fn) && cr.parent().hasClass(Gn)
                : cr.hasClass(Ce) && cr.children(Qe + Yn)[i.l]);
            var o, l;
            return $.x && $.y && !ae.nativeScrollbarsOverlaid.initialize
              ? (qe('onInitializationWithdrawn'),
                Pr && (Ai(!0), Oi(!0), ki(!0)),
                (K = !0),
                (Cr = !0),
                L)
              : (er &&
                  ((o = {}),
                  (o.l = I.max(cr[de](), St[de](), bn[de]())),
                  (o.t = I.max(cr[pe](), St[pe](), bn[pe]())),
                  (l = function () {
                    tr.removeAttr(i.ti), Be(tr, Et, l, !0, !0);
                  })),
                Ai(),
                Oi(),
                ki(),
                yo(),
                Ns(!0),
                Ns(!1),
                mo(),
                vo(),
                En(_a, uo),
                er &&
                  (tr[de](o.l)[pe](o.t),
                  sr.activeElement == r &&
                    yt.focus &&
                    (tr.attr(i.ti, '-1'), yt.focus(), Be(tr, Et, l, !1, !0))),
                L.update(zr),
                (D = !0),
                qe('onInitialized'),
                G(Zn, function (h, b) {
                  qe(b.n, b.a);
                }),
                (Zn = []),
                H(t) == _.s && (t = [t]),
                S.isA(t)
                  ? G(t, function (h, b) {
                      L.addExt(b);
                    })
                  : q.isPlainObject(t) &&
                    G(t, function (h, b) {
                      L.addExt(h, b);
                    }),
                setTimeout(function () {
                  s && !K && Jr(j, Bi);
                }, 333),
                L);
          }
          return A.valid(Oo(w, M, ur)) && Ra(w, L), L;
        }
        return (
          (A = U[zt] =
            function (w, M, ur) {
              if (arguments[i.l] === 0) return this;
              var R = [],
                Sr = q.isPlainObject(M),
                H,
                J;
              return w
                ? ((w = w[i.l] != z ? w : [w[0] || w]),
                  f(),
                  w[i.l] > 0 &&
                    (Sr
                      ? q.each(w, function (G, L) {
                          (H = L), H !== z && R.push(or(H, M, ur, O, x));
                        })
                      : q.each(w, function (G, L) {
                          (H = Ra(L)),
                            ((M === '!' && A.valid(H)) ||
                              (S.type(M) == _.f && M(L, H)) ||
                              M === z) &&
                              R.push(H);
                        }),
                    (J = R[i.l] === 1 ? R[0] : R)),
                  J)
                : Sr || !M
                ? J
                : R;
            }),
          (A.globals = function () {
            f();
            var w = q.extend(!0, {}, O);
            return delete w.msie, w;
          }),
          (A.defaultOptions = function (w) {
            f();
            var M = O.defaultOptions;
            if (w === z) return q.extend(!0, {}, M);
            O.defaultOptions = q.extend(
              !0,
              {},
              M,
              u._validate(w, u._template, !0, M)._default
            );
          }),
          (A.valid = function (w) {
            return w instanceof A && !w.getState().destroyed;
          }),
          (A.extension = function (w, M, ur) {
            var R = S.type(w) == _.s,
              Sr = arguments[i.l],
              H = 0;
            if (Sr < 1 || !R) return q.extend(!0, { length: e[i.l] }, e);
            if (R) {
              if (S.type(M) == _.f)
                e.push({ name: w, extensionFactory: M, defaultOptions: ur });
              else
                for (; H < e[i.l]; H++)
                  if (e[H].name === w)
                    if (Sr > 1) e.splice(H, 1);
                    else return q.extend(!0, {}, e[H]);
            }
          }),
          A
        );
      })();
    return (
      vt &&
        vt.fn &&
        (vt.fn.overlayScrollbars = function (A, O) {
          var x = this;
          return vt.isPlainObject(A)
            ? (vt.each(x, function () {
                zn(this, A, O);
              }),
              x)
            : zn(x, A);
        }),
      zn
    );
  });
})(eo);
var ln = eo.exports,
  $o = function (U) {
    var sr = U.options,
      z = sr === void 0 ? {} : sr,
      zt = U.extensions,
      _ = U.className,
      i = U.children,
      Se = qo(U, ['options', 'extensions', 'className', 'children']),
      S = cn.exports.useRef(),
      I = cn.exports.useRef();
    return (
      cn.exports.useEffect(function () {
        return (
          (I.current = ln(S.current, z, zt)),
          ro(I.current, _),
          function () {
            ln.valid(I.current) && (I.current.destroy(), (I.current = null));
          }
        );
      }, []),
      cn.exports.useEffect(
        function () {
          ln.valid(I.current) && I.current.options(z);
        },
        [z]
      ),
      cn.exports.useEffect(
        function () {
          ln.valid(I.current) && ro(I.current, _);
        },
        [_]
      ),
      Ko(
        'div',
        $s(Zs({}, Object.assign({ className: 'os-host' }, Se, { ref: S })), {
          children: [
            wa('div', { className: 'os-resize-observer-host' }),
            wa('div', {
              className: 'os-padding',
              children: wa('div', {
                className: 'os-viewport',
                children: wa('div', { className: 'os-content', children: i })
              })
            }),
            wa('div', {
              className: 'os-scrollbar os-scrollbar-horizontal ',
              children: wa('div', {
                className: 'os-scrollbar-track',
                children: wa('div', { className: 'os-scrollbar-handle' })
              })
            }),
            wa('div', {
              className: 'os-scrollbar os-scrollbar-vertical',
              children: wa('div', {
                className: 'os-scrollbar-track',
                children: wa('div', { className: 'os-scrollbar-handle' })
              })
            }),
            wa('div', { className: 'os-scrollbar-corner' })
          ]
        })
      )
    );
  };
function ro(le, U) {
  if (ln.valid(le)) {
    var sr = le.getElements(),
      z = sr.host,
      zt = new RegExp(
        '(^os-host([-_].+|)$)|'.concat(
          le.options().className.replace(/\s/g, '$|'),
          '$'
        ),
        'g'
      ),
      _ = z.className
        .split(' ')
        .filter(function (i) {
          return i.match(zt);
        })
        .join(' ');
    z.className = ''.concat(_, ' ').concat(U || '');
  }
}
export { $o as OverlayScrollbarsComponent, $o as default };
//# sourceMappingURL=OverlayScrollbars-26c4a78d.40984546.js.map
