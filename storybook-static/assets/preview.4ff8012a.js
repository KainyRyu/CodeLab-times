import { w as u, u as C } from './iframe.99391157.js';
function k() {
  var t = u.document.documentElement,
    i = Math.max(t.scrollHeight, t.offsetHeight),
    o = Math.max(t.scrollWidth, t.offsetWidth);
  return { width: o, height: i };
}
function K() {
  var t = u.document.createElement('canvas');
  t.id = 'storybook-addon-measure';
  var i = t.getContext('2d'),
    o = k(),
    e = o.width,
    r = o.height;
  return (
    H(t, i, { width: e, height: r }),
    (t.style.position = 'absolute'),
    (t.style.left = '0'),
    (t.style.top = '0'),
    (t.style.zIndex = '2147483647'),
    (t.style.pointerEvents = 'none'),
    u.document.body.appendChild(t),
    { canvas: t, context: i, width: e, height: r }
  );
}
function H(t, i, o) {
  var e = o.width,
    r = o.height;
  (t.style.width = ''.concat(e, 'px')), (t.style.height = ''.concat(r, 'px'));
  var n = u.window.devicePixelRatio;
  (t.width = Math.floor(e * n)), (t.height = Math.floor(r * n)), i.scale(n, n);
}
var p = {};
function U() {
  p.canvas || (p = K());
}
function D() {
  p.context && p.context.clearRect(0, 0, p.width, p.height);
}
function V(t) {
  D(), t(p.context);
}
function G() {
  H(p.canvas, p.context, { width: 0, height: 0 });
  var t = k(),
    i = t.width,
    o = t.height;
  H(p.canvas, p.context, { width: i, height: o }),
    (p.width = i),
    (p.height = o);
}
function J() {
  p.canvas && (D(), p.canvas.parentNode.removeChild(p.canvas), (p = {}));
}
var v = {
    margin: '#f6b26b',
    border: '#ffe599',
    padding: '#93c47d',
    content: '#6fa8dc',
    text: '#232020'
  },
  b = 6;
function X(t, i) {
  var o = i.x,
    e = i.y,
    r = i.w,
    n = i.h,
    a = i.r;
  (o = o - r / 2),
    (e = e - n / 2),
    r < 2 * a && (a = r / 2),
    n < 2 * a && (a = n / 2),
    t.beginPath(),
    t.moveTo(o + a, e),
    t.arcTo(o + r, e, o + r, e + n, a),
    t.arcTo(o + r, e + n, o, e + n, a),
    t.arcTo(o, e + n, o, e, a),
    t.arcTo(o, e, o + r, e, a),
    t.closePath();
}
function Q(t, i) {
  var o = i.padding,
    e = i.border,
    r = i.width,
    n = i.height,
    a = i.top,
    d = i.left,
    l = r - e.left - e.right - o.left - o.right,
    h = n - o.top - o.bottom - e.top - e.bottom,
    f = d + e.left + o.left,
    g = a + e.top + o.top;
  return (
    t === 'top'
      ? (f += l / 2)
      : t === 'right'
      ? ((f += l), (g += h / 2))
      : t === 'bottom'
      ? ((f += l / 2), (g += h))
      : t === 'left'
      ? (g += h / 2)
      : t === 'center' && ((f += l / 2), (g += h / 2)),
    { x: f, y: g }
  );
}
function _(t, i, o, e, r) {
  var n = o.margin,
    a = o.border,
    d = o.padding,
    l = function (s) {
      return 0;
    },
    h = 0,
    f = 0,
    g = r ? 1 : 0.5,
    c = r ? e * 2 : 0;
  return (
    t === 'padding'
      ? (l = function (s) {
          return d[s] * g + c;
        })
      : t === 'border'
      ? (l = function (s) {
          return d[s] + a[s] * g + c;
        })
      : t === 'margin' &&
        (l = function (s) {
          return d[s] + a[s] + n[s] * g + c;
        }),
    i === 'top'
      ? (f = -l('top'))
      : i === 'right'
      ? (h = l('right'))
      : i === 'bottom'
      ? (f = l('bottom'))
      : i === 'left' && (h = -l('left')),
    { offsetX: h, offsetY: f }
  );
}
function tt(t, i) {
  return (
    Math.abs(t.x - i.x) < Math.abs(t.w + i.w) / 2 &&
    Math.abs(t.y - i.y) < Math.abs(t.h + i.h) / 2
  );
}
function ot(t, i, o) {
  return (
    t === 'top'
      ? (i.y = o.y - o.h - b)
      : t === 'right'
      ? (i.x = o.x + o.w / 2 + b + i.w / 2)
      : t === 'bottom'
      ? (i.y = o.y + o.h + b)
      : t === 'left' && (i.x = o.x - o.w / 2 - b - i.w / 2),
    { x: i.x, y: i.y }
  );
}
function z(t, i, o, e) {
  var r = o.x,
    n = o.y,
    a = o.w,
    d = o.h;
  return (
    X(t, { x: r, y: n, w: a, h: d, r: 3 }),
    (t.fillStyle = ''.concat(v[i], 'dd')),
    t.fill(),
    (t.strokeStyle = v[i]),
    t.stroke(),
    (t.fillStyle = v.text),
    t.fillText(e, r, n),
    X(t, { x: r, y: n, w: a, h: d, r: 3 }),
    (t.fillStyle = ''.concat(v[i], 'dd')),
    t.fill(),
    (t.strokeStyle = v[i]),
    t.stroke(),
    (t.fillStyle = v.text),
    t.fillText(e, r, n),
    { x: r, y: n, w: a, h: d }
  );
}
function N(t, i) {
  (t.font = '600 12px monospace'),
    (t.textBaseline = 'middle'),
    (t.textAlign = 'center');
  var o = t.measureText(i),
    e = o.actualBoundingBoxAscent + o.actualBoundingBoxDescent,
    r = o.width + b * 2,
    n = e + b * 2;
  return { w: r, h: n };
}
function it(t, i, o, e) {
  var r = o.type,
    n = o.position,
    a = n === void 0 ? 'center' : n,
    d = o.text,
    l = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1,
    h = Q(a, i),
    f = h.x,
    g = h.y,
    c = _(r, a, i, b + 1, l),
    w = c.offsetX,
    s = c.offsetY;
  (f += w), (g += s);
  var E = N(t, d),
    x = E.w,
    A = E.h;
  if (e && tt({ x: f, y: g, w: x, h: A }, e)) {
    var T = ot(a, { x: f, y: g, w: x, h: A }, e);
    (f = T.x), (g = T.y);
  }
  return z(t, r, { x: f, y: g, w: x, h: A }, d);
}
function et(t, i) {
  var o = i.w,
    e = i.h,
    r = o * 0.5 + b,
    n = e * 0.5 + b;
  return {
    offsetX: (t.x === 'left' ? -1 : 1) * r,
    offsetY: (t.y === 'top' ? -1 : 1) * n
  };
}
function rt(t, i, o) {
  var e = o.type,
    r = o.text,
    n = i.floatingAlignment,
    a = i.extremities,
    d = a[n.x],
    l = a[n.y],
    h = N(t, r),
    f = h.w,
    g = h.h,
    c = et(n, { w: f, h: g }),
    w = c.offsetX,
    s = c.offsetY;
  return (d += w), (l += s), z(t, e, { x: d, y: l, w: f, h: g }, r);
}
function S(t, i, o, e) {
  var r = [];
  o.forEach(function (n, a) {
    var d =
      e && n.position === 'center' ? rt(t, i, n) : it(t, i, n, r[a - 1], e);
    r[a] = d;
  });
}
function nt(t, i, o, e) {
  var r = o.reduce(function (n, a) {
    return (
      Object.prototype.hasOwnProperty.call(n, a.position) ||
        (n[a.position] = []),
      n[a.position].push(a),
      n
    );
  }, {});
  r.top && S(t, i, r.top, e),
    r.right && S(t, i, r.right, e),
    r.bottom && S(t, i, r.bottom, e),
    r.left && S(t, i, r.left, e),
    r.center && S(t, i, r.center, e);
}
function W(t) {
  return ht(t) || lt(t) || dt(t) || at();
}
function at() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function dt(t, i) {
  if (!!t) {
    if (typeof t == 'string') return R(t, i);
    var o = Object.prototype.toString.call(t).slice(8, -1);
    if (
      (o === 'Object' && t.constructor && (o = t.constructor.name),
      o === 'Map' || o === 'Set')
    )
      return Array.from(t);
    if (o === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))
      return R(t, i);
  }
}
function lt(t) {
  if (
    (typeof Symbol != 'undefined' && t[Symbol.iterator] != null) ||
    t['@@iterator'] != null
  )
    return Array.from(t);
}
function ht(t) {
  if (Array.isArray(t)) return R(t);
}
function R(t, i) {
  (i == null || i > t.length) && (i = t.length);
  for (var o = 0, e = new Array(i); o < i; o++) e[o] = t[o];
  return e;
}
var B = {
    margin: '#f6b26ba8',
    border: '#ffe599a8',
    padding: '#93c47d8c',
    content: '#6fa8dca8'
  },
  O = 30;
function m(t) {
  return parseInt(t.replace('px', ''), 10);
}
function y(t) {
  return Number.isInteger(t) ? t : t.toFixed(2);
}
function L(t) {
  return t.filter(function (i) {
    return i.text !== 0 && i.text !== '0';
  });
}
function ft(t) {
  var i = {
      top: u.window.scrollY,
      bottom: u.window.scrollY + u.window.innerHeight,
      left: u.window.scrollX,
      right: u.window.scrollX + u.window.innerWidth
    },
    o = {
      top: Math.abs(i.top - t.top),
      bottom: Math.abs(i.bottom - t.bottom),
      left: Math.abs(i.left - t.left),
      right: Math.abs(i.right - t.right)
    };
  return {
    x: o.left > o.right ? 'left' : 'right',
    y: o.top > o.bottom ? 'top' : 'bottom'
  };
}
function gt(t) {
  var i = u.getComputedStyle(t),
    o = t.getBoundingClientRect(),
    e = o.top,
    r = o.left,
    n = o.right,
    a = o.bottom,
    d = o.width,
    l = o.height,
    h = i.marginTop,
    f = i.marginBottom,
    g = i.marginLeft,
    c = i.marginRight,
    w = i.paddingTop,
    s = i.paddingBottom,
    E = i.paddingLeft,
    x = i.paddingRight,
    A = i.borderBottomWidth,
    T = i.borderTopWidth,
    q = i.borderLeftWidth,
    $ = i.borderRightWidth;
  (e = e + u.window.scrollY),
    (r = r + u.window.scrollX),
    (a = a + u.window.scrollY),
    (n = n + u.window.scrollX);
  var M = { top: m(h), bottom: m(f), left: m(g), right: m(c) },
    j = { top: m(w), bottom: m(s), left: m(E), right: m(x) },
    Z = { top: m(T), bottom: m(A), left: m(q), right: m($) },
    Y = {
      top: e - M.top,
      bottom: a + M.bottom,
      left: r - M.left,
      right: n + M.right
    };
  return {
    margin: M,
    padding: j,
    border: Z,
    top: e,
    left: r,
    bottom: a,
    right: n,
    width: d,
    height: l,
    extremities: Y,
    floatingAlignment: ft(Y)
  };
}
function pt(t, i) {
  var o = i.margin,
    e = i.width,
    r = i.height,
    n = i.top,
    a = i.left,
    d = i.bottom,
    l = i.right,
    h = r + o.bottom + o.top;
  (t.fillStyle = B.margin),
    t.fillRect(a, n - o.top, e, o.top),
    t.fillRect(l, n - o.top, o.right, h),
    t.fillRect(a, d, e, o.bottom),
    t.fillRect(a - o.left, n - o.top, o.left, h);
  var f = [
    { type: 'margin', text: y(o.top), position: 'top' },
    { type: 'margin', text: y(o.right), position: 'right' },
    { type: 'margin', text: y(o.bottom), position: 'bottom' },
    { type: 'margin', text: y(o.left), position: 'left' }
  ];
  return L(f);
}
function ut(t, i) {
  var o = i.padding,
    e = i.border,
    r = i.width,
    n = i.height,
    a = i.top,
    d = i.left,
    l = i.bottom,
    h = i.right,
    f = r - e.left - e.right,
    g = n - o.top - o.bottom - e.top - e.bottom;
  (t.fillStyle = B.padding),
    t.fillRect(d + e.left, a + e.top, f, o.top),
    t.fillRect(h - o.right - e.right, a + o.top + e.top, o.right, g),
    t.fillRect(d + e.left, l - o.bottom - e.bottom, f, o.bottom),
    t.fillRect(d + e.left, a + o.top + e.top, o.left, g);
  var c = [
    { type: 'padding', text: o.top, position: 'top' },
    { type: 'padding', text: o.right, position: 'right' },
    { type: 'padding', text: o.bottom, position: 'bottom' },
    { type: 'padding', text: o.left, position: 'left' }
  ];
  return L(c);
}
function st(t, i) {
  var o = i.border,
    e = i.width,
    r = i.height,
    n = i.top,
    a = i.left,
    d = i.bottom,
    l = i.right,
    h = r - o.top - o.bottom;
  (t.fillStyle = B.border),
    t.fillRect(a, n, e, o.top),
    t.fillRect(a, d - o.bottom, e, o.bottom),
    t.fillRect(a, n + o.top, o.left, h),
    t.fillRect(l - o.right, n + o.top, o.right, h);
  var f = [
    { type: 'border', text: o.top, position: 'top' },
    { type: 'border', text: o.right, position: 'right' },
    { type: 'border', text: o.bottom, position: 'bottom' },
    { type: 'border', text: o.left, position: 'left' }
  ];
  return L(f);
}
function ct(t, i) {
  var o = i.padding,
    e = i.border,
    r = i.width,
    n = i.height,
    a = i.top,
    d = i.left,
    l = r - e.left - e.right - o.left - o.right,
    h = n - o.top - o.bottom - e.top - e.bottom;
  return (
    (t.fillStyle = B.content),
    t.fillRect(d + e.left + o.left, a + e.top + o.top, l, h),
    [
      {
        type: 'content',
        position: 'center',
        text: ''.concat(y(l), ' x ').concat(y(h))
      }
    ]
  );
}
function mt(t) {
  return function (i) {
    if (t && i) {
      var o = gt(t),
        e = pt(i, o),
        r = ut(i, o),
        n = st(i, o),
        a = ct(i, o),
        d = o.width <= O * 3 || o.height <= O;
      nt(i, o, [].concat(W(a), W(r), W(n), W(e)), d);
    }
  };
}
function wt(t) {
  V(mt(t));
}
var bt = function (i, o) {
    var e = u.document.elementFromPoint(i, o),
      r = function a(d) {
        if (d && d.shadowRoot) {
          var l = d.shadowRoot.elementFromPoint(i, o);
          return d.isEqualNode(l) ? d : l.shadowRoot ? a(l) : l;
        }
        return d;
      },
      n = r(e);
    return n || e;
  },
  F,
  P = { x: 0, y: 0 };
function I(t, i) {
  (F = bt(t, i)), wt(F);
}
var vt = function (i, o) {
    var e = o.globals.measureEnabled;
    return (
      C(function () {
        var r = function (a) {
          window.requestAnimationFrame(function () {
            a.stopPropagation(), (P.x = a.clientX), (P.y = a.clientY);
          });
        };
        return (
          document.addEventListener('mousemove', r),
          function () {
            document.removeEventListener('mousemove', r);
          }
        );
      }, []),
      C(
        function () {
          var r = function (d) {
              window.requestAnimationFrame(function () {
                d.stopPropagation(), I(d.clientX, d.clientY);
              });
            },
            n = function () {
              window.requestAnimationFrame(function () {
                G();
              });
            };
          return (
            e &&
              (document.addEventListener('mouseover', r),
              U(),
              window.addEventListener('resize', n),
              I(P.x, P.y)),
            function () {
              window.removeEventListener('resize', n), J();
            }
          );
        },
        [e]
      ),
      i()
    );
  },
  yt = 'measureEnabled';
function xt(t, i, o) {
  return (
    i in t
      ? Object.defineProperty(t, i, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (t[i] = o),
    t
  );
}
var Mt = [vt],
  St = xt({}, yt, !1);
export { Mt as decorators, St as globals };
//# sourceMappingURL=preview.4ff8012a.js.map
