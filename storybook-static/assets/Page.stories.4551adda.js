var Id = Object.defineProperty,
  kd = Object.defineProperties;
var Nd = Object.getOwnPropertyDescriptors;
var Fr = Object.getOwnPropertySymbols;
var Fl = Object.prototype.hasOwnProperty,
  Vl = Object.prototype.propertyIsEnumerable;
var Dl = (e, r, t) =>
    r in e
      ? Id(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[r] = t),
  X = (e, r) => {
    for (var t in r || (r = {})) Fl.call(r, t) && Dl(e, t, r[t]);
    if (Fr) for (var t of Fr(r)) Vl.call(r, t) && Dl(e, t, r[t]);
    return e;
  },
  Vr = (e, r) => kd(e, Nd(r));
var Ul = (e, r) => {
  var t = {};
  for (var a in e) Fl.call(e, a) && r.indexOf(a) < 0 && (t[a] = e[a]);
  if (e != null && Fr)
    for (var a of Fr(e)) r.indexOf(a) < 0 && Vl.call(e, a) && (t[a] = e[a]);
  return t;
};
import { g as jd, z as Ld, q as Dd, d as Fd } from './iframe.99391157.js';
import { r as Vd } from './index.979b7f4c.js';
import { i as Yi } from './instrumenter.4d3b6f19.js';
import { R as Ud } from './index.d1b1a1f8.js';
import { H as Hd } from './Header.7b5d5bdb.js';
import { a as Qe, j as Z } from './jsx-runtime.bd940121.js';
import './Button.490d214f.js';
function Wd(e, r) {
  return (
    r.forEach(function (t) {
      t &&
        typeof t != 'string' &&
        !Array.isArray(t) &&
        Object.keys(t).forEach(function (a) {
          if (a !== 'default' && !(a in e)) {
            var n = Object.getOwnPropertyDescriptor(t, a);
            Object.defineProperty(
              e,
              a,
              n.get
                ? n
                : {
                    enumerable: !0,
                    get: function () {
                      return t[a];
                    }
                  }
            );
          }
        });
    }),
    Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
    )
  );
}
function me() {
  return (
    (me = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r];
            for (var a in t)
              Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
          }
          return e;
        }),
    me.apply(this, arguments)
  );
}
function Mo(e, r) {
  if (e == null) return {};
  var t = {},
    a = Object.keys(e),
    n,
    o;
  for (o = 0; o < a.length; o++)
    (n = a[o]), !(r.indexOf(n) >= 0) && (t[n] = e[n]);
  return t;
}
var ge = {},
  Xo = { exports: {} };
(function (e) {
  const t =
      (o = 0) =>
      l =>
        `\x1B[${38 + o};5;${l}m`,
    a =
      (o = 0) =>
      (l, u, i) =>
        `\x1B[${38 + o};2;${l};${u};${i}m`;
  function n() {
    const o = new Map(),
      l = {
        modifier: {
          reset: [0, 0],
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          overline: [53, 55],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
    (l.color.gray = l.color.blackBright),
      (l.bgColor.bgGray = l.bgColor.bgBlackBright),
      (l.color.grey = l.color.blackBright),
      (l.bgColor.bgGrey = l.bgColor.bgBlackBright);
    for (const [u, i] of Object.entries(l)) {
      for (const [s, c] of Object.entries(i))
        (l[s] = { open: `\x1B[${c[0]}m`, close: `\x1B[${c[1]}m` }),
          (i[s] = l[s]),
          o.set(c[0], c[1]);
      Object.defineProperty(l, u, { value: i, enumerable: !1 });
    }
    return (
      Object.defineProperty(l, 'codes', { value: o, enumerable: !1 }),
      (l.color.close = '\x1B[39m'),
      (l.bgColor.close = '\x1B[49m'),
      (l.color.ansi256 = t()),
      (l.color.ansi16m = a()),
      (l.bgColor.ansi256 = t(10)),
      (l.bgColor.ansi16m = a(10)),
      Object.defineProperties(l, {
        rgbToAnsi256: {
          value: (u, i, s) =>
            u === i && i === s
              ? u < 8
                ? 16
                : u > 248
                ? 231
                : Math.round(((u - 8) / 247) * 24) + 232
              : 16 +
                36 * Math.round((u / 255) * 5) +
                6 * Math.round((i / 255) * 5) +
                Math.round((s / 255) * 5),
          enumerable: !1
        },
        hexToRgb: {
          value: u => {
            const i = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(
              u.toString(16)
            );
            if (!i) return [0, 0, 0];
            let { colorString: s } = i.groups;
            s.length === 3 &&
              (s = s
                .split('')
                .map(f => f + f)
                .join(''));
            const c = Number.parseInt(s, 16);
            return [(c >> 16) & 255, (c >> 8) & 255, c & 255];
          },
          enumerable: !1
        },
        hexToAnsi256: {
          value: u => l.rgbToAnsi256(...l.hexToRgb(u)),
          enumerable: !1
        }
      }),
      l
    );
  }
  Object.defineProperty(e, 'exports', { enumerable: !0, get: n });
})(Xo);
var Ee = {};
Object.defineProperty(Ee, '__esModule', { value: !0 });
Ee.printIteratorEntries = Kd;
Ee.printIteratorValues = Gd;
Ee.printListItems = Qd;
Ee.printObjectProperties = Yd;
const zd = (e, r) => {
  const t = Object.keys(e).sort(r);
  return (
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(e).forEach(a => {
        Object.getOwnPropertyDescriptor(e, a).enumerable && t.push(a);
      }),
    t
  );
};
function Kd(e, r, t, a, n, o, l = ': ') {
  let u = '',
    i = e.next();
  if (!i.done) {
    u += r.spacingOuter;
    const s = t + r.indent;
    for (; !i.done; ) {
      const c = o(i.value[0], r, s, a, n),
        f = o(i.value[1], r, s, a, n);
      (u += s + c + l + f),
        (i = e.next()),
        i.done ? r.min || (u += ',') : (u += ',' + r.spacingInner);
    }
    u += r.spacingOuter + t;
  }
  return u;
}
function Gd(e, r, t, a, n, o) {
  let l = '',
    u = e.next();
  if (!u.done) {
    l += r.spacingOuter;
    const i = t + r.indent;
    for (; !u.done; )
      (l += i + o(u.value, r, i, a, n)),
        (u = e.next()),
        u.done ? r.min || (l += ',') : (l += ',' + r.spacingInner);
    l += r.spacingOuter + t;
  }
  return l;
}
function Qd(e, r, t, a, n, o) {
  let l = '';
  if (e.length) {
    l += r.spacingOuter;
    const u = t + r.indent;
    for (let i = 0; i < e.length; i++)
      (l += u),
        i in e && (l += o(e[i], r, u, a, n)),
        i < e.length - 1 ? (l += ',' + r.spacingInner) : r.min || (l += ',');
    l += r.spacingOuter + t;
  }
  return l;
}
function Yd(e, r, t, a, n, o) {
  let l = '';
  const u = zd(e, r.compareKeys);
  if (u.length) {
    l += r.spacingOuter;
    const i = t + r.indent;
    for (let s = 0; s < u.length; s++) {
      const c = u[s],
        f = o(c, r, i, a, n),
        p = o(e[c], r, i, a, n);
      (l += i + f + ': ' + p),
        s < u.length - 1 ? (l += ',' + r.spacingInner) : r.min || (l += ',');
    }
    l += r.spacingOuter + t;
  }
  return l;
}
var xe = {};
Object.defineProperty(xe, '__esModule', { value: !0 });
xe.test = xe.serialize = xe.default = void 0;
var Hl = Ee,
  rt = (function () {
    return typeof globalThis != 'undefined'
      ? globalThis
      : typeof rt != 'undefined'
      ? rt
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : Function('return this')();
  })(),
  so = rt['jest-symbol-do-not-touch'] || rt.Symbol;
const Xd =
    typeof so == 'function' && so.for
      ? so.for('jest.asymmetricMatcher')
      : 1267621,
  Ur = ' ',
  Xi = (e, r, t, a, n, o) => {
    const l = e.toString();
    return l === 'ArrayContaining' || l === 'ArrayNotContaining'
      ? ++a > r.maxDepth
        ? '[' + l + ']'
        : l + Ur + '[' + (0, Hl.printListItems)(e.sample, r, t, a, n, o) + ']'
      : l === 'ObjectContaining' || l === 'ObjectNotContaining'
      ? ++a > r.maxDepth
        ? '[' + l + ']'
        : l +
          Ur +
          '{' +
          (0, Hl.printObjectProperties)(e.sample, r, t, a, n, o) +
          '}'
      : l === 'StringMatching' ||
        l === 'StringNotMatching' ||
        l === 'StringContaining' ||
        l === 'StringNotContaining'
      ? l + Ur + o(e.sample, r, t, a, n)
      : e.toAsymmetricMatcher();
  };
xe.serialize = Xi;
const Ji = e => e && e.$$typeof === Xd;
xe.test = Ji;
const Jd = { serialize: Xi, test: Ji };
var Zd = Jd;
xe.default = Zd;
var Me = {},
  ec = ({ onlyFirst: e = !1 } = {}) => {
    const r = [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))'
    ].join('|');
    return new RegExp(r, e ? void 0 : 'g');
  };
Object.defineProperty(Me, '__esModule', { value: !0 });
Me.test = Me.serialize = Me.default = void 0;
var Zi = eu(ec),
  D = eu(Xo.exports);
function eu(e) {
  return e && e.__esModule ? e : { default: e };
}
const rc = e =>
    e.replace((0, Zi.default)(), r => {
      switch (r) {
        case D.default.red.close:
        case D.default.green.close:
        case D.default.cyan.close:
        case D.default.gray.close:
        case D.default.white.close:
        case D.default.yellow.close:
        case D.default.bgRed.close:
        case D.default.bgGreen.close:
        case D.default.bgYellow.close:
        case D.default.inverse.close:
        case D.default.dim.close:
        case D.default.bold.close:
        case D.default.reset.open:
        case D.default.reset.close:
          return '</>';
        case D.default.red.open:
          return '<red>';
        case D.default.green.open:
          return '<green>';
        case D.default.cyan.open:
          return '<cyan>';
        case D.default.gray.open:
          return '<gray>';
        case D.default.white.open:
          return '<white>';
        case D.default.yellow.open:
          return '<yellow>';
        case D.default.bgRed.open:
          return '<bgRed>';
        case D.default.bgGreen.open:
          return '<bgGreen>';
        case D.default.bgYellow.open:
          return '<bgYellow>';
        case D.default.inverse.open:
          return '<inverse>';
        case D.default.dim.open:
          return '<dim>';
        case D.default.bold.open:
          return '<bold>';
        default:
          return '';
      }
    }),
  ru = e => typeof e == 'string' && !!e.match((0, Zi.default)());
Me.test = ru;
const tu = (e, r, t, a, n, o) => o(rc(e), r, t, a, n);
Me.serialize = tu;
const tc = { serialize: tu, test: ru };
var ac = tc;
Me.default = ac;
var Ae = {};
Object.defineProperty(Ae, '__esModule', { value: !0 });
Ae.test = Ae.serialize = Ae.default = void 0;
var Wl = Ee;
const nc = ' ',
  au = ['DOMStringMap', 'NamedNodeMap'],
  oc = /^(HTML\w*Collection|NodeList)$/,
  lc = e => au.indexOf(e) !== -1 || oc.test(e),
  nu = e =>
    e && e.constructor && !!e.constructor.name && lc(e.constructor.name);
Ae.test = nu;
const ic = e => e.constructor.name === 'NamedNodeMap',
  ou = (e, r, t, a, n, o) => {
    const l = e.constructor.name;
    return ++a > r.maxDepth
      ? '[' + l + ']'
      : (r.min ? '' : l + nc) +
          (au.indexOf(l) !== -1
            ? '{' +
              (0, Wl.printObjectProperties)(
                ic(e)
                  ? Array.from(e).reduce(
                      (u, i) => ((u[i.name] = i.value), u),
                      {}
                    )
                  : X({}, e),
                r,
                t,
                a,
                n,
                o
              ) +
              '}'
            : '[' + (0, Wl.printListItems)(Array.from(e), r, t, a, n, o) + ']');
  };
Ae.serialize = ou;
const uc = { serialize: ou, test: nu };
var sc = uc;
Ae.default = sc;
var $e = {},
  Q = {},
  Jo = {};
Object.defineProperty(Jo, '__esModule', { value: !0 });
Jo.default = dc;
function dc(e) {
  return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
Object.defineProperty(Q, '__esModule', { value: !0 });
Q.printText =
  Q.printProps =
  Q.printElementAsLeaf =
  Q.printElement =
  Q.printComment =
  Q.printChildren =
    void 0;
var lu = cc(Jo);
function cc(e) {
  return e && e.__esModule ? e : { default: e };
}
const fc = (e, r, t, a, n, o, l) => {
  const u = a + t.indent,
    i = t.colors;
  return e
    .map(s => {
      const c = r[s];
      let f = l(c, t, u, n, o);
      return (
        typeof c != 'string' &&
          (f.indexOf(`
`) !== -1 && (f = t.spacingOuter + u + f + t.spacingOuter + a),
          (f = '{' + f + '}')),
        t.spacingInner +
          a +
          i.prop.open +
          s +
          i.prop.close +
          '=' +
          i.value.open +
          f +
          i.value.close
      );
    })
    .join('');
};
Q.printProps = fc;
const pc = (e, r, t, a, n, o) =>
  e
    .map(
      l =>
        r.spacingOuter +
        t +
        (typeof l == 'string' ? iu(l, r) : o(l, r, t, a, n))
    )
    .join('');
Q.printChildren = pc;
const iu = (e, r) => {
  const t = r.colors.content;
  return t.open + (0, lu.default)(e) + t.close;
};
Q.printText = iu;
const vc = (e, r) => {
  const t = r.colors.comment;
  return t.open + '<!--' + (0, lu.default)(e) + '-->' + t.close;
};
Q.printComment = vc;
const mc = (e, r, t, a, n) => {
  const o = a.colors.tag;
  return (
    o.open +
    '<' +
    e +
    (r && o.close + r + a.spacingOuter + n + o.open) +
    (t
      ? '>' + o.close + t + a.spacingOuter + n + o.open + '</' + e
      : (r && !a.min ? '' : ' ') + '/') +
    '>' +
    o.close
  );
};
Q.printElement = mc;
const bc = (e, r) => {
  const t = r.colors.tag;
  return t.open + '<' + e + t.close + ' \u2026' + t.open + ' />' + t.close;
};
Q.printElementAsLeaf = bc;
Object.defineProperty($e, '__esModule', { value: !0 });
$e.test = $e.serialize = $e.default = void 0;
var Ye = Q;
const yc = 1,
  uu = 3,
  su = 8,
  du = 11,
  hc = /^((HTML|SVG)\w*)?Element$/,
  gc = e => {
    try {
      return typeof e.hasAttribute == 'function' && e.hasAttribute('is');
    } catch {
      return !1;
    }
  },
  Ec = e => {
    const r = e.constructor.name,
      { nodeType: t, tagName: a } = e,
      n = (typeof a == 'string' && a.includes('-')) || gc(e);
    return (
      (t === yc && (hc.test(r) || n)) ||
      (t === uu && r === 'Text') ||
      (t === su && r === 'Comment') ||
      (t === du && r === 'DocumentFragment')
    );
  },
  cu = e => {
    var r;
    return (
      (e == null || (r = e.constructor) === null || r === void 0
        ? void 0
        : r.name) && Ec(e)
    );
  };
$e.test = cu;
function _c(e) {
  return e.nodeType === uu;
}
function Rc(e) {
  return e.nodeType === su;
}
function co(e) {
  return e.nodeType === du;
}
const fu = (e, r, t, a, n, o) => {
  if (_c(e)) return (0, Ye.printText)(e.data, r);
  if (Rc(e)) return (0, Ye.printComment)(e.data, r);
  const l = co(e) ? 'DocumentFragment' : e.tagName.toLowerCase();
  return ++a > r.maxDepth
    ? (0, Ye.printElementAsLeaf)(l, r)
    : (0, Ye.printElement)(
        l,
        (0, Ye.printProps)(
          co(e)
            ? []
            : Array.from(e.attributes)
                .map(u => u.name)
                .sort(),
          co(e)
            ? {}
            : Array.from(e.attributes).reduce(
                (u, i) => ((u[i.name] = i.value), u),
                {}
              ),
          r,
          t + r.indent,
          a,
          n,
          o
        ),
        (0, Ye.printChildren)(
          Array.prototype.slice.call(e.childNodes || e.children),
          r,
          t + r.indent,
          a,
          n,
          o
        ),
        r,
        t
      );
};
$e.serialize = fu;
const wc = { serialize: fu, test: cu };
var Cc = wc;
$e.default = Cc;
var Se = {};
Object.defineProperty(Se, '__esModule', { value: !0 });
Se.test = Se.serialize = Se.default = void 0;
var _r = Ee;
const Pc = '@@__IMMUTABLE_ITERABLE__@@',
  qc = '@@__IMMUTABLE_LIST__@@',
  Oc = '@@__IMMUTABLE_KEYED__@@',
  Tc = '@@__IMMUTABLE_MAP__@@',
  zl = '@@__IMMUTABLE_ORDERED__@@',
  xc = '@@__IMMUTABLE_RECORD__@@',
  Mc = '@@__IMMUTABLE_SEQ__@@',
  Ac = '@@__IMMUTABLE_SET__@@',
  $c = '@@__IMMUTABLE_STACK__@@',
  ir = e => 'Immutable.' + e,
  dt = e => '[' + e + ']',
  Rr = ' ',
  Kl = '\u2026',
  Sc = (e, r, t, a, n, o, l) =>
    ++a > r.maxDepth
      ? dt(ir(l))
      : ir(l) +
        Rr +
        '{' +
        (0, _r.printIteratorEntries)(e.entries(), r, t, a, n, o) +
        '}';
function Bc(e) {
  let r = 0;
  return {
    next() {
      if (r < e._keys.length) {
        const t = e._keys[r++];
        return { done: !1, value: [t, e.get(t)] };
      }
      return { done: !0, value: void 0 };
    }
  };
}
const Ic = (e, r, t, a, n, o) => {
    const l = ir(e._name || 'Record');
    return ++a > r.maxDepth
      ? dt(l)
      : l + Rr + '{' + (0, _r.printIteratorEntries)(Bc(e), r, t, a, n, o) + '}';
  },
  kc = (e, r, t, a, n, o) => {
    const l = ir('Seq');
    return ++a > r.maxDepth
      ? dt(l)
      : e[Oc]
      ? l +
        Rr +
        '{' +
        (e._iter || e._object
          ? (0, _r.printIteratorEntries)(e.entries(), r, t, a, n, o)
          : Kl) +
        '}'
      : l +
        Rr +
        '[' +
        (e._iter || e._array || e._collection || e._iterable
          ? (0, _r.printIteratorValues)(e.values(), r, t, a, n, o)
          : Kl) +
        ']';
  },
  fo = (e, r, t, a, n, o, l) =>
    ++a > r.maxDepth
      ? dt(ir(l))
      : ir(l) +
        Rr +
        '[' +
        (0, _r.printIteratorValues)(e.values(), r, t, a, n, o) +
        ']',
  pu = (e, r, t, a, n, o) =>
    e[Tc]
      ? Sc(e, r, t, a, n, o, e[zl] ? 'OrderedMap' : 'Map')
      : e[qc]
      ? fo(e, r, t, a, n, o, 'List')
      : e[Ac]
      ? fo(e, r, t, a, n, o, e[zl] ? 'OrderedSet' : 'Set')
      : e[$c]
      ? fo(e, r, t, a, n, o, 'Stack')
      : e[Mc]
      ? kc(e, r, t, a, n, o)
      : Ic(e, r, t, a, n, o);
Se.serialize = pu;
const vu = e => e && (e[Pc] === !0 || e[xc] === !0);
Se.test = vu;
const Nc = { serialize: pu, test: vu };
var jc = Nc;
Se.default = jc;
var Be = {};
Object.defineProperty(Be, '__esModule', { value: !0 });
Be.test = Be.serialize = Be.default = void 0;
var Le = Lc(Vd.exports),
  Hr = Q;
function mu(e) {
  if (typeof WeakMap != 'function') return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (mu = function (a) {
    return a ? t : r;
  })(e);
}
function Lc(e, r) {
  if (!r && e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var t = mu(r);
  if (t && t.has(e)) return t.get(e);
  var a = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(a, o, l) : (a[o] = e[o]);
    }
  return (a.default = e), t && t.set(e, a), a;
}
const bu = (e, r = []) => (
    Array.isArray(e)
      ? e.forEach(t => {
          bu(t, r);
        })
      : e != null && e !== !1 && r.push(e),
    r
  ),
  Gl = e => {
    const r = e.type;
    if (typeof r == 'string') return r;
    if (typeof r == 'function') return r.displayName || r.name || 'Unknown';
    if (Le.isFragment(e)) return 'React.Fragment';
    if (Le.isSuspense(e)) return 'React.Suspense';
    if (typeof r == 'object' && r !== null) {
      if (Le.isContextProvider(e)) return 'Context.Provider';
      if (Le.isContextConsumer(e)) return 'Context.Consumer';
      if (Le.isForwardRef(e)) {
        if (r.displayName) return r.displayName;
        const t = r.render.displayName || r.render.name || '';
        return t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef';
      }
      if (Le.isMemo(e)) {
        const t = r.displayName || r.type.displayName || r.type.name || '';
        return t !== '' ? 'Memo(' + t + ')' : 'Memo';
      }
    }
    return 'UNDEFINED';
  },
  Dc = e => {
    const { props: r } = e;
    return Object.keys(r)
      .filter(t => t !== 'children' && r[t] !== void 0)
      .sort();
  },
  yu = (e, r, t, a, n, o) =>
    ++a > r.maxDepth
      ? (0, Hr.printElementAsLeaf)(Gl(e), r)
      : (0, Hr.printElement)(
          Gl(e),
          (0, Hr.printProps)(Dc(e), e.props, r, t + r.indent, a, n, o),
          (0, Hr.printChildren)(bu(e.props.children), r, t + r.indent, a, n, o),
          r,
          t
        );
Be.serialize = yu;
const hu = e => e != null && Le.isElement(e);
Be.test = hu;
const Fc = { serialize: yu, test: hu };
var Vc = Fc;
Be.default = Vc;
var Ie = {};
Object.defineProperty(Ie, '__esModule', { value: !0 });
Ie.test = Ie.serialize = Ie.default = void 0;
var Wr = Q,
  tt = (function () {
    return typeof globalThis != 'undefined'
      ? globalThis
      : typeof tt != 'undefined'
      ? tt
      : typeof self != 'undefined'
      ? self
      : typeof window != 'undefined'
      ? window
      : Function('return this')();
  })(),
  po = tt['jest-symbol-do-not-touch'] || tt.Symbol;
const Uc =
    typeof po == 'function' && po.for ? po.for('react.test.json') : 245830487,
  Hc = e => {
    const { props: r } = e;
    return r
      ? Object.keys(r)
          .filter(t => r[t] !== void 0)
          .sort()
      : [];
  },
  gu = (e, r, t, a, n, o) =>
    ++a > r.maxDepth
      ? (0, Wr.printElementAsLeaf)(e.type, r)
      : (0, Wr.printElement)(
          e.type,
          e.props
            ? (0, Wr.printProps)(Hc(e), e.props, r, t + r.indent, a, n, o)
            : '',
          e.children
            ? (0, Wr.printChildren)(e.children, r, t + r.indent, a, n, o)
            : '',
          r,
          t
        );
Ie.serialize = gu;
const Eu = e => e && e.$$typeof === Uc;
Ie.test = Eu;
const Wc = { serialize: gu, test: Eu };
var zc = Wc;
Ie.default = zc;
Object.defineProperty(ge, '__esModule', { value: !0 });
var _u = (ge.default = Mu = ge.DEFAULT_OPTIONS = void 0),
  Ru = (ge.format = Bu),
  Zo = (ge.plugins = void 0),
  Kc = Ne(Xo.exports),
  yr = Ee,
  Gc = Ne(xe),
  Qc = Ne(Me),
  Yc = Ne(Ae),
  Xc = Ne($e),
  Jc = Ne(Se),
  Zc = Ne(Be),
  ef = Ne(Ie);
function Ne(e) {
  return e && e.__esModule ? e : { default: e };
}
const wu = Object.prototype.toString,
  rf = Date.prototype.toISOString,
  tf = Error.prototype.toString,
  Ql = RegExp.prototype.toString,
  vo = e =>
    (typeof e.constructor == 'function' && e.constructor.name) || 'Object',
  af = e => typeof window != 'undefined' && e === window,
  nf = /^Symbol\((.*)\)(.*)$/,
  of = /\n/gi;
class Cu extends Error {
  constructor(r, t) {
    super(r), (this.stack = t), (this.name = this.constructor.name);
  }
}
function lf(e) {
  return (
    e === '[object Array]' ||
    e === '[object ArrayBuffer]' ||
    e === '[object DataView]' ||
    e === '[object Float32Array]' ||
    e === '[object Float64Array]' ||
    e === '[object Int8Array]' ||
    e === '[object Int16Array]' ||
    e === '[object Int32Array]' ||
    e === '[object Uint8Array]' ||
    e === '[object Uint8ClampedArray]' ||
    e === '[object Uint16Array]' ||
    e === '[object Uint32Array]'
  );
}
function uf(e) {
  return Object.is(e, -0) ? '-0' : String(e);
}
function sf(e) {
  return String(`${e}n`);
}
function Yl(e, r) {
  return r ? '[Function ' + (e.name || 'anonymous') + ']' : '[Function]';
}
function Xl(e) {
  return String(e).replace(nf, 'Symbol($1)');
}
function Jl(e) {
  return '[' + tf.call(e) + ']';
}
function Pu(e, r, t, a) {
  if (e === !0 || e === !1) return '' + e;
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  const n = typeof e;
  if (n === 'number') return uf(e);
  if (n === 'bigint') return sf(e);
  if (n === 'string')
    return a ? '"' + e.replace(/"|\\/g, '\\$&') + '"' : '"' + e + '"';
  if (n === 'function') return Yl(e, r);
  if (n === 'symbol') return Xl(e);
  const o = wu.call(e);
  return o === '[object WeakMap]'
    ? 'WeakMap {}'
    : o === '[object WeakSet]'
    ? 'WeakSet {}'
    : o === '[object Function]' || o === '[object GeneratorFunction]'
    ? Yl(e, r)
    : o === '[object Symbol]'
    ? Xl(e)
    : o === '[object Date]'
    ? isNaN(+e)
      ? 'Date { NaN }'
      : rf.call(e)
    : o === '[object Error]'
    ? Jl(e)
    : o === '[object RegExp]'
    ? t
      ? Ql.call(e).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
      : Ql.call(e)
    : e instanceof Error
    ? Jl(e)
    : null;
}
function qu(e, r, t, a, n, o) {
  if (n.indexOf(e) !== -1) return '[Circular]';
  (n = n.slice()), n.push(e);
  const l = ++a > r.maxDepth,
    u = r.min;
  if (r.callToJSON && !l && e.toJSON && typeof e.toJSON == 'function' && !o)
    return Oe(e.toJSON(), r, t, a, n, !0);
  const i = wu.call(e);
  return i === '[object Arguments]'
    ? l
      ? '[Arguments]'
      : (u ? '' : 'Arguments ') +
        '[' +
        (0, yr.printListItems)(e, r, t, a, n, Oe) +
        ']'
    : lf(i)
    ? l
      ? '[' + e.constructor.name + ']'
      : (u || (!r.printBasicPrototype && e.constructor.name === 'Array')
          ? ''
          : e.constructor.name + ' ') +
        '[' +
        (0, yr.printListItems)(e, r, t, a, n, Oe) +
        ']'
    : i === '[object Map]'
    ? l
      ? '[Map]'
      : 'Map {' +
        (0, yr.printIteratorEntries)(e.entries(), r, t, a, n, Oe, ' => ') +
        '}'
    : i === '[object Set]'
    ? l
      ? '[Set]'
      : 'Set {' + (0, yr.printIteratorValues)(e.values(), r, t, a, n, Oe) + '}'
    : l || af(e)
    ? '[' + vo(e) + ']'
    : (u || (!r.printBasicPrototype && vo(e) === 'Object') ? '' : vo(e) + ' ') +
      '{' +
      (0, yr.printObjectProperties)(e, r, t, a, n, Oe) +
      '}';
}
function df(e) {
  return e.serialize != null;
}
function Ou(e, r, t, a, n, o) {
  let l;
  try {
    l = df(e)
      ? e.serialize(r, t, a, n, o, Oe)
      : e.print(
          r,
          u => Oe(u, t, a, n, o),
          u => {
            const i = a + t.indent;
            return (
              i +
              u.replace(
                of,
                `
` + i
              )
            );
          },
          { edgeSpacing: t.spacingOuter, min: t.min, spacing: t.spacingInner },
          t.colors
        );
  } catch (u) {
    throw new Cu(u.message, u.stack);
  }
  if (typeof l != 'string')
    throw new Error(
      `pretty-format: Plugin must return type "string" but instead returned "${typeof l}".`
    );
  return l;
}
function Tu(e, r) {
  for (let t = 0; t < e.length; t++)
    try {
      if (e[t].test(r)) return e[t];
    } catch (a) {
      throw new Cu(a.message, a.stack);
    }
  return null;
}
function Oe(e, r, t, a, n, o) {
  const l = Tu(r.plugins, e);
  if (l !== null) return Ou(l, e, r, t, a, n);
  const u = Pu(e, r.printFunctionName, r.escapeRegex, r.escapeString);
  return u !== null ? u : qu(e, r, t, a, n, o);
}
const el = {
    comment: 'gray',
    content: 'reset',
    prop: 'yellow',
    tag: 'cyan',
    value: 'green'
  },
  xu = Object.keys(el),
  de = {
    callToJSON: !0,
    compareKeys: void 0,
    escapeRegex: !1,
    escapeString: !0,
    highlight: !1,
    indent: 2,
    maxDepth: 1 / 0,
    min: !1,
    plugins: [],
    printBasicPrototype: !0,
    printFunctionName: !0,
    theme: el
  };
var Mu = (ge.DEFAULT_OPTIONS = de);
function cf(e) {
  if (
    (Object.keys(e).forEach(r => {
      if (!de.hasOwnProperty(r))
        throw new Error(`pretty-format: Unknown option "${r}".`);
    }),
    e.min && e.indent !== void 0 && e.indent !== 0)
  )
    throw new Error(
      'pretty-format: Options "min" and "indent" cannot be used together.'
    );
  if (e.theme !== void 0) {
    if (e.theme === null)
      throw new Error('pretty-format: Option "theme" must not be null.');
    if (typeof e.theme != 'object')
      throw new Error(
        `pretty-format: Option "theme" must be of type "object" but instead received "${typeof e.theme}".`
      );
  }
}
const ff = e =>
    xu.reduce((r, t) => {
      const a = e.theme && e.theme[t] !== void 0 ? e.theme[t] : el[t],
        n = a && Kc.default[a];
      if (n && typeof n.close == 'string' && typeof n.open == 'string')
        r[t] = n;
      else
        throw new Error(
          `pretty-format: Option "theme" has a key "${t}" whose value "${a}" is undefined in ansi-styles.`
        );
      return r;
    }, Object.create(null)),
  pf = () =>
    xu.reduce(
      (e, r) => ((e[r] = { close: '', open: '' }), e),
      Object.create(null)
    ),
  Au = e =>
    e && e.printFunctionName !== void 0
      ? e.printFunctionName
      : de.printFunctionName,
  $u = e => (e && e.escapeRegex !== void 0 ? e.escapeRegex : de.escapeRegex),
  Su = e => (e && e.escapeString !== void 0 ? e.escapeString : de.escapeString),
  Zl = e => {
    var r;
    return {
      callToJSON: e && e.callToJSON !== void 0 ? e.callToJSON : de.callToJSON,
      colors: e && e.highlight ? ff(e) : pf(),
      compareKeys:
        e && typeof e.compareKeys == 'function'
          ? e.compareKeys
          : de.compareKeys,
      escapeRegex: $u(e),
      escapeString: Su(e),
      indent:
        e && e.min ? '' : vf(e && e.indent !== void 0 ? e.indent : de.indent),
      maxDepth: e && e.maxDepth !== void 0 ? e.maxDepth : de.maxDepth,
      min: e && e.min !== void 0 ? e.min : de.min,
      plugins: e && e.plugins !== void 0 ? e.plugins : de.plugins,
      printBasicPrototype:
        (r = e == null ? void 0 : e.printBasicPrototype) !== null &&
        r !== void 0
          ? r
          : !0,
      printFunctionName: Au(e),
      spacingInner:
        e && e.min
          ? ' '
          : `
`,
      spacingOuter:
        e && e.min
          ? ''
          : `
`
    };
  };
function vf(e) {
  return new Array(e + 1).join(' ');
}
function Bu(e, r) {
  if (r && (cf(r), r.plugins)) {
    const a = Tu(r.plugins, e);
    if (a !== null) return Ou(a, e, Zl(r), '', 0, []);
  }
  const t = Pu(e, Au(r), $u(r), Su(r));
  return t !== null ? t : qu(e, Zl(r), '', 0, []);
}
const mf = {
  AsymmetricMatcher: Gc.default,
  ConvertAnsi: Qc.default,
  DOMCollection: Yc.default,
  DOMElement: Xc.default,
  Immutable: Jc.default,
  ReactElement: Zc.default,
  ReactTestComponent: ef.default
};
Zo = ge.plugins = mf;
var bf = Bu;
_u = ge.default = bf;
var yf = Wd(
    {
      __proto__: null,
      get DEFAULT_OPTIONS() {
        return Mu;
      },
      format: Ru,
      get plugins() {
        return Zo;
      },
      get default() {
        return _u;
      }
    },
    [ge]
  ),
  hf = Object.prototype.toString;
function ei(e) {
  return typeof e == 'function' || hf.call(e) === '[object Function]';
}
function gf(e) {
  var r = Number(e);
  return isNaN(r)
    ? 0
    : r === 0 || !isFinite(r)
    ? r
    : (r > 0 ? 1 : -1) * Math.floor(Math.abs(r));
}
var Ef = Math.pow(2, 53) - 1;
function _f(e) {
  var r = gf(e);
  return Math.min(Math.max(r, 0), Ef);
}
function ce(e, r) {
  var t = Array,
    a = Object(e);
  if (e == null)
    throw new TypeError(
      'Array.from requires an array-like object - not null or undefined'
    );
  if (typeof r != 'undefined' && !ei(r))
    throw new TypeError(
      'Array.from: when provided, the second argument must be a function'
    );
  for (
    var n = _f(a.length), o = ei(t) ? Object(new t(n)) : new Array(n), l = 0, u;
    l < n;

  )
    (u = a[l]), r ? (o[l] = r(u, l)) : (o[l] = u), (l += 1);
  return (o.length = n), o;
}
function Rf(e, r) {
  if (!(e instanceof r))
    throw new TypeError('Cannot call a class as a function');
}
function ri(e, r) {
  for (var t = 0; t < r.length; t++) {
    var a = r[t];
    (a.enumerable = a.enumerable || !1),
      (a.configurable = !0),
      'value' in a && (a.writable = !0),
      Object.defineProperty(e, a.key, a);
  }
}
function wf(e, r, t) {
  return (
    r && ri(e.prototype, r),
    t && ri(e, t),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function Cf(e, r, t) {
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
var Pf = (function () {
    function e() {
      var r =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      Rf(this, e), Cf(this, 'items', void 0), (this.items = r);
    }
    return (
      wf(e, [
        {
          key: 'add',
          value: function (t) {
            return this.has(t) === !1 && this.items.push(t), this;
          }
        },
        {
          key: 'clear',
          value: function () {
            this.items = [];
          }
        },
        {
          key: 'delete',
          value: function (t) {
            var a = this.items.length;
            return (
              (this.items = this.items.filter(function (n) {
                return n !== t;
              })),
              a !== this.items.length
            );
          }
        },
        {
          key: 'forEach',
          value: function (t) {
            var a = this;
            this.items.forEach(function (n) {
              t(n, n, a);
            });
          }
        },
        {
          key: 'has',
          value: function (t) {
            return this.items.indexOf(t) !== -1;
          }
        },
        {
          key: 'size',
          get: function () {
            return this.items.length;
          }
        }
      ]),
      e
    );
  })(),
  qf = typeof Set == 'undefined' ? Set : Pf;
function Y(e) {
  var r;
  return (r = e.localName) !== null && r !== void 0
    ? r
    : e.tagName.toLowerCase();
}
var Of = {
    article: 'article',
    aside: 'complementary',
    button: 'button',
    datalist: 'listbox',
    dd: 'definition',
    details: 'group',
    dialog: 'dialog',
    dt: 'term',
    fieldset: 'group',
    figure: 'figure',
    form: 'form',
    footer: 'contentinfo',
    h1: 'heading',
    h2: 'heading',
    h3: 'heading',
    h4: 'heading',
    h5: 'heading',
    h6: 'heading',
    header: 'banner',
    hr: 'separator',
    html: 'document',
    legend: 'legend',
    li: 'listitem',
    math: 'math',
    main: 'main',
    menu: 'list',
    nav: 'navigation',
    ol: 'list',
    optgroup: 'group',
    option: 'option',
    output: 'status',
    progress: 'progressbar',
    section: 'region',
    summary: 'button',
    table: 'table',
    tbody: 'rowgroup',
    textarea: 'textbox',
    tfoot: 'rowgroup',
    td: 'cell',
    th: 'columnheader',
    thead: 'rowgroup',
    tr: 'row',
    ul: 'list'
  },
  Tf = {
    caption: new Set(['aria-label', 'aria-labelledby']),
    code: new Set(['aria-label', 'aria-labelledby']),
    deletion: new Set(['aria-label', 'aria-labelledby']),
    emphasis: new Set(['aria-label', 'aria-labelledby']),
    generic: new Set(['aria-label', 'aria-labelledby', 'aria-roledescription']),
    insertion: new Set(['aria-label', 'aria-labelledby']),
    paragraph: new Set(['aria-label', 'aria-labelledby']),
    presentation: new Set(['aria-label', 'aria-labelledby']),
    strong: new Set(['aria-label', 'aria-labelledby']),
    subscript: new Set(['aria-label', 'aria-labelledby']),
    superscript: new Set(['aria-label', 'aria-labelledby'])
  };
function xf(e, r) {
  return [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-dropeffect',
    'aria-flowto',
    'aria-grabbed',
    'aria-hidden',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription'
  ].some(function (t) {
    var a;
    return (
      e.hasAttribute(t) && !((a = Tf[r]) !== null && a !== void 0 && a.has(t))
    );
  });
}
function Iu(e, r) {
  return xf(e, r);
}
function Mf(e) {
  var r = $f(e);
  if (r === null || r === 'presentation') {
    var t = Af(e);
    if (r !== 'presentation' || Iu(e, t || '')) return t;
  }
  return r;
}
function Af(e) {
  var r = Of[Y(e)];
  if (r !== void 0) return r;
  switch (Y(e)) {
    case 'a':
    case 'area':
    case 'link':
      if (e.hasAttribute('href')) return 'link';
      break;
    case 'img':
      return e.getAttribute('alt') === '' && !Iu(e, 'img')
        ? 'presentation'
        : 'img';
    case 'input': {
      var t = e,
        a = t.type;
      switch (a) {
        case 'button':
        case 'image':
        case 'reset':
        case 'submit':
          return 'button';
        case 'checkbox':
        case 'radio':
          return a;
        case 'range':
          return 'slider';
        case 'email':
        case 'tel':
        case 'text':
        case 'url':
          return e.hasAttribute('list') ? 'combobox' : 'textbox';
        case 'search':
          return e.hasAttribute('list') ? 'combobox' : 'searchbox';
        case 'number':
          return 'spinbutton';
        default:
          return null;
      }
    }
    case 'select':
      return e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox';
  }
  return null;
}
function $f(e) {
  var r = e.getAttribute('role');
  if (r !== null) {
    var t = r.trim().split(' ')[0];
    if (t.length > 0) return t;
  }
  return null;
}
function H(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function ku(e) {
  return H(e) && Y(e) === 'caption';
}
function Jr(e) {
  return H(e) && Y(e) === 'input';
}
function Sf(e) {
  return H(e) && Y(e) === 'optgroup';
}
function Bf(e) {
  return H(e) && Y(e) === 'select';
}
function If(e) {
  return H(e) && Y(e) === 'table';
}
function kf(e) {
  return H(e) && Y(e) === 'textarea';
}
function Nf(e) {
  var r = e.ownerDocument === null ? e : e.ownerDocument,
    t = r.defaultView;
  if (t === null) throw new TypeError('no window available');
  return t;
}
function jf(e) {
  return H(e) && Y(e) === 'fieldset';
}
function Lf(e) {
  return H(e) && Y(e) === 'legend';
}
function Df(e) {
  return H(e) && Y(e) === 'slot';
}
function Ff(e) {
  return H(e) && e.ownerSVGElement !== void 0;
}
function Vf(e) {
  return H(e) && Y(e) === 'svg';
}
function Uf(e) {
  return Ff(e) && Y(e) === 'title';
}
function at(e, r) {
  if (H(e) && e.hasAttribute(r)) {
    var t = e.getAttribute(r).split(' '),
      a = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return t
      .map(function (n) {
        return a.getElementById(n);
      })
      .filter(function (n) {
        return n !== null;
      });
  }
  return [];
}
function ye(e, r) {
  return H(e) ? r.indexOf(Mf(e)) !== -1 : !1;
}
function Hf(e) {
  return e.trim().replace(/\s\s+/g, ' ');
}
function Wf(e, r) {
  if (!H(e)) return !1;
  if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true')
    return !0;
  var t = r(e);
  return (
    t.getPropertyValue('display') === 'none' ||
    t.getPropertyValue('visibility') === 'hidden'
  );
}
function zf(e) {
  return ye(e, ['button', 'combobox', 'listbox', 'textbox']) || Nu(e, 'range');
}
function Nu(e, r) {
  if (!H(e)) return !1;
  switch (r) {
    case 'range':
      return ye(e, [
        'meter',
        'progressbar',
        'scrollbar',
        'slider',
        'spinbutton'
      ]);
    default:
      throw new TypeError(
        "No knowledge about abstract role '".concat(
          r,
          "'. This is likely a bug :("
        )
      );
  }
}
function ti(e, r) {
  var t = ce(e.querySelectorAll(r));
  return (
    at(e, 'aria-owns').forEach(function (a) {
      t.push.apply(t, ce(a.querySelectorAll(r)));
    }),
    t
  );
}
function Kf(e) {
  return Bf(e)
    ? e.selectedOptions || ti(e, '[selected]')
    : ti(e, '[aria-selected="true"]');
}
function Gf(e) {
  return ye(e, ['none', 'presentation']);
}
function Qf(e) {
  return ku(e);
}
function Yf(e) {
  return ye(e, [
    'button',
    'cell',
    'checkbox',
    'columnheader',
    'gridcell',
    'heading',
    'label',
    'legend',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'option',
    'radio',
    'row',
    'rowheader',
    'switch',
    'tab',
    'tooltip',
    'treeitem'
  ]);
}
function Xf(e) {
  return !1;
}
function Jf(e) {
  return Jr(e) || kf(e) ? e.value : e.textContent || '';
}
function ai(e) {
  var r = e.getPropertyValue('content');
  return /^["'].*["']$/.test(r) ? r.slice(1, -1) : '';
}
function ju(e) {
  var r = Y(e);
  return (
    r === 'button' ||
    (r === 'input' && e.getAttribute('type') !== 'hidden') ||
    r === 'meter' ||
    r === 'output' ||
    r === 'progress' ||
    r === 'select' ||
    r === 'textarea'
  );
}
function Lu(e) {
  if (ju(e)) return e;
  var r = null;
  return (
    e.childNodes.forEach(function (t) {
      if (r === null && H(t)) {
        var a = Lu(t);
        a !== null && (r = a);
      }
    }),
    r
  );
}
function Zf(e) {
  if (e.control !== void 0) return e.control;
  var r = e.getAttribute('for');
  return r !== null ? e.ownerDocument.getElementById(r) : Lu(e);
}
function ep(e) {
  var r = e.labels;
  if (r === null) return r;
  if (r !== void 0) return ce(r);
  if (!ju(e)) return null;
  var t = e.ownerDocument;
  return ce(t.querySelectorAll('label')).filter(function (a) {
    return Zf(a) === e;
  });
}
function rp(e) {
  var r = e.assignedNodes();
  return r.length === 0 ? ce(e.childNodes) : r;
}
function Du(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = new qf(),
    a = Nf(e),
    n = r.compute,
    o = n === void 0 ? 'name' : n,
    l = r.computedStyleSupportsPseudoElements,
    u = l === void 0 ? r.getComputedStyle !== void 0 : l,
    i = r.getComputedStyle,
    s = i === void 0 ? a.getComputedStyle.bind(a) : i,
    c = r.hidden,
    f = c === void 0 ? !1 : c;
  function p(v, E) {
    var h = '';
    if (H(v) && u) {
      var _ = s(v, '::before'),
        q = ai(_);
      h = ''.concat(q, ' ').concat(h);
    }
    var x = Df(v) ? rp(v) : ce(v.childNodes).concat(at(v, 'aria-owns'));
    if (
      (x.forEach(function (R) {
        var O = P(R, {
            isEmbeddedInLabel: E.isEmbeddedInLabel,
            isReferenced: !1,
            recursion: !0
          }),
          U = H(R) ? s(R).getPropertyValue('display') : 'inline',
          d = U !== 'inline' ? ' ' : '';
        h += ''.concat(d).concat(O).concat(d);
      }),
      H(v) && u)
    ) {
      var M = s(v, '::after'),
        b = ai(M);
      h = ''.concat(h, ' ').concat(b);
    }
    return h.trim();
  }
  function y(v) {
    if (!H(v)) return null;
    function E($, B) {
      var N = $.getAttributeNode(B);
      return N !== null && !t.has(N) && N.value.trim() !== ''
        ? (t.add(N), N.value)
        : null;
    }
    if (jf(v)) {
      t.add(v);
      for (var h = ce(v.childNodes), _ = 0; _ < h.length; _ += 1) {
        var q = h[_];
        if (Lf(q))
          return P(q, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (If(v)) {
      t.add(v);
      for (var x = ce(v.childNodes), M = 0; M < x.length; M += 1) {
        var b = x[M];
        if (ku(b))
          return P(b, {
            isEmbeddedInLabel: !1,
            isReferenced: !1,
            recursion: !1
          });
      }
    } else if (Vf(v)) {
      t.add(v);
      for (var R = ce(v.childNodes), O = 0; O < R.length; O += 1) {
        var U = R[O];
        if (Uf(U)) return U.textContent;
      }
      return null;
    } else if (Y(v) === 'img' || Y(v) === 'area') {
      var d = E(v, 'alt');
      if (d !== null) return d;
    } else if (Sf(v)) {
      var ne = E(v, 'label');
      if (ne !== null) return ne;
    }
    if (
      Jr(v) &&
      (v.type === 'button' || v.type === 'submit' || v.type === 'reset')
    ) {
      var oe = E(v, 'value');
      if (oe !== null) return oe;
      if (v.type === 'submit') return 'Submit';
      if (v.type === 'reset') return 'Reset';
    }
    var w = ep(v);
    if (w !== null && w.length !== 0)
      return (
        t.add(v),
        ce(w)
          .map(function ($) {
            return P($, {
              isEmbeddedInLabel: !0,
              isReferenced: !1,
              recursion: !0
            });
          })
          .filter(function ($) {
            return $.length > 0;
          })
          .join(' ')
      );
    if (Jr(v) && v.type === 'image') {
      var m = E(v, 'alt');
      if (m !== null) return m;
      var T = E(v, 'title');
      return T !== null ? T : 'Submit Query';
    }
    if (ye(v, ['button'])) {
      var A = p(v, { isEmbeddedInLabel: !1, isReferenced: !1 });
      return A !== '' ? A : E(v, 'title');
    }
    return E(v, 'title');
  }
  function P(v, E) {
    if (t.has(v)) return '';
    if (!f && Wf(v, s) && !E.isReferenced) return t.add(v), '';
    var h = at(v, 'aria-labelledby');
    if (o === 'name' && !E.isReferenced && h.length > 0)
      return h
        .map(function (b) {
          return P(b, {
            isEmbeddedInLabel: E.isEmbeddedInLabel,
            isReferenced: !0,
            recursion: !1
          });
        })
        .join(' ');
    var _ = E.recursion && zf(v) && o === 'name';
    if (!_) {
      var q = ((H(v) && v.getAttribute('aria-label')) || '').trim();
      if (q !== '' && o === 'name') return t.add(v), q;
      if (!Gf(v)) {
        var x = y(v);
        if (x !== null) return t.add(v), x;
      }
    }
    if (ye(v, ['menu'])) return t.add(v), '';
    if (_ || E.isEmbeddedInLabel || E.isReferenced) {
      if (ye(v, ['combobox', 'listbox'])) {
        t.add(v);
        var M = Kf(v);
        return M.length === 0
          ? Jr(v)
            ? v.value
            : ''
          : ce(M)
              .map(function (b) {
                return P(b, {
                  isEmbeddedInLabel: E.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0
                });
              })
              .join(' ');
      }
      if (Nu(v, 'range'))
        return (
          t.add(v),
          v.hasAttribute('aria-valuetext')
            ? v.getAttribute('aria-valuetext')
            : v.hasAttribute('aria-valuenow')
            ? v.getAttribute('aria-valuenow')
            : v.getAttribute('value') || ''
        );
      if (ye(v, ['textbox'])) return t.add(v), Jf(v);
    }
    return Yf(v) || (H(v) && E.isReferenced) || Qf(v) || Xf()
      ? (t.add(v),
        p(v, { isEmbeddedInLabel: E.isEmbeddedInLabel, isReferenced: !1 }))
      : v.nodeType === v.TEXT_NODE
      ? (t.add(v), v.textContent || '')
      : E.recursion
      ? (t.add(v),
        p(v, { isEmbeddedInLabel: E.isEmbeddedInLabel, isReferenced: !1 }))
      : (t.add(v), '');
  }
  return Hf(
    P(e, {
      isEmbeddedInLabel: !1,
      isReferenced: o === 'description',
      recursion: !1
    })
  );
}
function ni(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    r &&
      (a = a.filter(function (n) {
        return Object.getOwnPropertyDescriptor(e, n).enumerable;
      })),
      t.push.apply(t, a);
  }
  return t;
}
function oi(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = arguments[r] != null ? arguments[r] : {};
    r % 2
      ? ni(Object(t), !0).forEach(function (a) {
          tp(e, a, t[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : ni(Object(t)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
        });
  }
  return e;
}
function tp(e, r, t) {
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
function Fu(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = at(e, 'aria-describedby')
      .map(function (n) {
        return Du(n, oi(oi({}, r), {}, { compute: 'description' }));
      })
      .join(' ');
  if (t === '') {
    var a = e.getAttribute('title');
    t = a === null ? '' : a;
  }
  return t;
}
function ap(e) {
  return ye(e, [
    'caption',
    'code',
    'deletion',
    'emphasis',
    'generic',
    'insertion',
    'paragraph',
    'presentation',
    'strong',
    'subscript',
    'superscript'
  ]);
}
function rl(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return ap(e) ? '' : Du(e, r);
}
var fe = {},
  ct = {};
Object.defineProperty(ct, '__esModule', { value: !0 });
ct.default = void 0;
function li(e, r) {
  return ip(e) || lp(e, r) || op(e, r) || np();
}
function np() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function op(e, r) {
  if (!!e) {
    if (typeof e == 'string') return ii(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ii(e, r);
  }
}
function ii(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
  return a;
}
function lp(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        t = t.call(e);
        !(n = (l = t.next()).done) && (a.push(l.value), !(r && a.length === r));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function ip(e) {
  if (Array.isArray(e)) return e;
}
var zr = [
    ['aria-activedescendant', { type: 'id' }],
    ['aria-atomic', { type: 'boolean' }],
    [
      'aria-autocomplete',
      { type: 'token', values: ['inline', 'list', 'both', 'none'] }
    ],
    ['aria-busy', { type: 'boolean' }],
    ['aria-checked', { type: 'tristate' }],
    ['aria-colcount', { type: 'integer' }],
    ['aria-colindex', { type: 'integer' }],
    ['aria-colspan', { type: 'integer' }],
    ['aria-controls', { type: 'idlist' }],
    [
      'aria-current',
      {
        type: 'token',
        values: ['page', 'step', 'location', 'date', 'time', !0, !1]
      }
    ],
    ['aria-describedby', { type: 'idlist' }],
    ['aria-details', { type: 'id' }],
    ['aria-disabled', { type: 'boolean' }],
    [
      'aria-dropeffect',
      {
        type: 'tokenlist',
        values: ['copy', 'execute', 'link', 'move', 'none', 'popup']
      }
    ],
    ['aria-errormessage', { type: 'id' }],
    ['aria-expanded', { type: 'boolean', allowundefined: !0 }],
    ['aria-flowto', { type: 'idlist' }],
    ['aria-grabbed', { type: 'boolean', allowundefined: !0 }],
    [
      'aria-haspopup',
      {
        type: 'token',
        values: [!1, !0, 'menu', 'listbox', 'tree', 'grid', 'dialog']
      }
    ],
    ['aria-hidden', { type: 'boolean', allowundefined: !0 }],
    [
      'aria-invalid',
      { type: 'token', values: ['grammar', !1, 'spelling', !0] }
    ],
    ['aria-keyshortcuts', { type: 'string' }],
    ['aria-label', { type: 'string' }],
    ['aria-labelledby', { type: 'idlist' }],
    ['aria-level', { type: 'integer' }],
    ['aria-live', { type: 'token', values: ['assertive', 'off', 'polite'] }],
    ['aria-modal', { type: 'boolean' }],
    ['aria-multiline', { type: 'boolean' }],
    ['aria-multiselectable', { type: 'boolean' }],
    [
      'aria-orientation',
      { type: 'token', values: ['vertical', 'undefined', 'horizontal'] }
    ],
    ['aria-owns', { type: 'idlist' }],
    ['aria-placeholder', { type: 'string' }],
    ['aria-posinset', { type: 'integer' }],
    ['aria-pressed', { type: 'tristate' }],
    ['aria-readonly', { type: 'boolean' }],
    [
      'aria-relevant',
      { type: 'tokenlist', values: ['additions', 'all', 'removals', 'text'] }
    ],
    ['aria-required', { type: 'boolean' }],
    ['aria-roledescription', { type: 'string' }],
    ['aria-rowcount', { type: 'integer' }],
    ['aria-rowindex', { type: 'integer' }],
    ['aria-rowspan', { type: 'integer' }],
    ['aria-selected', { type: 'boolean', allowundefined: !0 }],
    ['aria-setsize', { type: 'integer' }],
    [
      'aria-sort',
      { type: 'token', values: ['ascending', 'descending', 'none', 'other'] }
    ],
    ['aria-valuemax', { type: 'number' }],
    ['aria-valuemin', { type: 'number' }],
    ['aria-valuenow', { type: 'number' }],
    ['aria-valuetext', { type: 'string' }]
  ],
  up = {
    entries: function () {
      return zr;
    },
    get: function (r) {
      var t = zr.find(function (a) {
        return a[0] === r;
      });
      return t && t[1];
    },
    has: function (r) {
      return !!this.get(r);
    },
    keys: function () {
      return zr.map(function (r) {
        var t = li(r, 1),
          a = t[0];
        return a;
      });
    },
    values: function () {
      return zr.map(function (r) {
        var t = li(r, 2),
          a = t[1];
        return a;
      });
    }
  },
  sp = up;
ct.default = sp;
var ft = {};
Object.defineProperty(ft, '__esModule', { value: !0 });
ft.default = void 0;
function ui(e, r) {
  return pp(e) || fp(e, r) || cp(e, r) || dp();
}
function dp() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function cp(e, r) {
  if (!!e) {
    if (typeof e == 'string') return si(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return si(e, r);
  }
}
function si(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
  return a;
}
function fp(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        t = t.call(e);
        !(n = (l = t.next()).done) && (a.push(l.value), !(r && a.length === r));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function pp(e) {
  if (Array.isArray(e)) return e;
}
var Kr = [
    ['a', { reserved: !1 }],
    ['abbr', { reserved: !1 }],
    ['acronym', { reserved: !1 }],
    ['address', { reserved: !1 }],
    ['applet', { reserved: !1 }],
    ['area', { reserved: !1 }],
    ['article', { reserved: !1 }],
    ['aside', { reserved: !1 }],
    ['audio', { reserved: !1 }],
    ['b', { reserved: !1 }],
    ['base', { reserved: !0 }],
    ['bdi', { reserved: !1 }],
    ['bdo', { reserved: !1 }],
    ['big', { reserved: !1 }],
    ['blink', { reserved: !1 }],
    ['blockquote', { reserved: !1 }],
    ['body', { reserved: !1 }],
    ['br', { reserved: !1 }],
    ['button', { reserved: !1 }],
    ['canvas', { reserved: !1 }],
    ['caption', { reserved: !1 }],
    ['center', { reserved: !1 }],
    ['cite', { reserved: !1 }],
    ['code', { reserved: !1 }],
    ['col', { reserved: !0 }],
    ['colgroup', { reserved: !0 }],
    ['content', { reserved: !1 }],
    ['data', { reserved: !1 }],
    ['datalist', { reserved: !1 }],
    ['dd', { reserved: !1 }],
    ['del', { reserved: !1 }],
    ['details', { reserved: !1 }],
    ['dfn', { reserved: !1 }],
    ['dialog', { reserved: !1 }],
    ['dir', { reserved: !1 }],
    ['div', { reserved: !1 }],
    ['dl', { reserved: !1 }],
    ['dt', { reserved: !1 }],
    ['em', { reserved: !1 }],
    ['embed', { reserved: !1 }],
    ['fieldset', { reserved: !1 }],
    ['figcaption', { reserved: !1 }],
    ['figure', { reserved: !1 }],
    ['font', { reserved: !1 }],
    ['footer', { reserved: !1 }],
    ['form', { reserved: !1 }],
    ['frame', { reserved: !1 }],
    ['frameset', { reserved: !1 }],
    ['h1', { reserved: !1 }],
    ['h2', { reserved: !1 }],
    ['h3', { reserved: !1 }],
    ['h4', { reserved: !1 }],
    ['h5', { reserved: !1 }],
    ['h6', { reserved: !1 }],
    ['head', { reserved: !0 }],
    ['header', { reserved: !1 }],
    ['hgroup', { reserved: !1 }],
    ['hr', { reserved: !1 }],
    ['html', { reserved: !0 }],
    ['i', { reserved: !1 }],
    ['iframe', { reserved: !1 }],
    ['img', { reserved: !1 }],
    ['input', { reserved: !1 }],
    ['ins', { reserved: !1 }],
    ['kbd', { reserved: !1 }],
    ['keygen', { reserved: !1 }],
    ['label', { reserved: !1 }],
    ['legend', { reserved: !1 }],
    ['li', { reserved: !1 }],
    ['link', { reserved: !0 }],
    ['main', { reserved: !1 }],
    ['map', { reserved: !1 }],
    ['mark', { reserved: !1 }],
    ['marquee', { reserved: !1 }],
    ['menu', { reserved: !1 }],
    ['menuitem', { reserved: !1 }],
    ['meta', { reserved: !0 }],
    ['meter', { reserved: !1 }],
    ['nav', { reserved: !1 }],
    ['noembed', { reserved: !0 }],
    ['noscript', { reserved: !0 }],
    ['object', { reserved: !1 }],
    ['ol', { reserved: !1 }],
    ['optgroup', { reserved: !1 }],
    ['option', { reserved: !1 }],
    ['output', { reserved: !1 }],
    ['p', { reserved: !1 }],
    ['param', { reserved: !0 }],
    ['picture', { reserved: !0 }],
    ['pre', { reserved: !1 }],
    ['progress', { reserved: !1 }],
    ['q', { reserved: !1 }],
    ['rp', { reserved: !1 }],
    ['rt', { reserved: !1 }],
    ['rtc', { reserved: !1 }],
    ['ruby', { reserved: !1 }],
    ['s', { reserved: !1 }],
    ['samp', { reserved: !1 }],
    ['script', { reserved: !0 }],
    ['section', { reserved: !1 }],
    ['select', { reserved: !1 }],
    ['small', { reserved: !1 }],
    ['source', { reserved: !0 }],
    ['spacer', { reserved: !1 }],
    ['span', { reserved: !1 }],
    ['strike', { reserved: !1 }],
    ['strong', { reserved: !1 }],
    ['style', { reserved: !0 }],
    ['sub', { reserved: !1 }],
    ['summary', { reserved: !1 }],
    ['sup', { reserved: !1 }],
    ['table', { reserved: !1 }],
    ['tbody', { reserved: !1 }],
    ['td', { reserved: !1 }],
    ['textarea', { reserved: !1 }],
    ['tfoot', { reserved: !1 }],
    ['th', { reserved: !1 }],
    ['thead', { reserved: !1 }],
    ['time', { reserved: !1 }],
    ['title', { reserved: !0 }],
    ['tr', { reserved: !1 }],
    ['track', { reserved: !0 }],
    ['tt', { reserved: !1 }],
    ['u', { reserved: !1 }],
    ['ul', { reserved: !1 }],
    ['var', { reserved: !1 }],
    ['video', { reserved: !1 }],
    ['wbr', { reserved: !1 }],
    ['xmp', { reserved: !1 }]
  ],
  vp = {
    entries: function () {
      return Kr;
    },
    get: function (r) {
      var t = Kr.find(function (a) {
        return a[0] === r;
      });
      return t && t[1];
    },
    has: function (r) {
      return !!this.get(r);
    },
    keys: function () {
      return Kr.map(function (r) {
        var t = ui(r, 1),
          a = t[0];
        return a;
      });
    },
    values: function () {
      return Kr.map(function (r) {
        var t = ui(r, 2),
          a = t[1];
        return a;
      });
    }
  },
  mp = vp;
ft.default = mp;
var cr = {},
  pt = {},
  vt = {};
Object.defineProperty(vt, '__esModule', { value: !0 });
vt.default = void 0;
var bp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget']]
  },
  yp = bp;
vt.default = yp;
var mt = {};
Object.defineProperty(mt, '__esModule', { value: !0 });
mt.default = void 0;
var hp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-activedescendant': null, 'aria-disabled': null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget']]
  },
  gp = hp;
mt.default = gp;
var bt = {};
Object.defineProperty(bt, '__esModule', { value: !0 });
bt.default = void 0;
var Ep = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-disabled': null },
    relatedConcepts: [{ concept: { name: 'input' }, module: 'XForms' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget']]
  },
  _p = Ep;
bt.default = _p;
var yt = {};
Object.defineProperty(yt, '__esModule', { value: !0 });
yt.default = void 0;
var Rp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  wp = Rp;
yt.default = wp;
var ht = {};
Object.defineProperty(ht, '__esModule', { value: !0 });
ht.default = void 0;
var Cp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-valuemax': null,
      'aria-valuemin': null,
      'aria-valuenow': null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  Pp = Cp;
ht.default = Pp;
var gt = {};
Object.defineProperty(gt, '__esModule', { value: !0 });
gt.default = void 0;
var qp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {
      'aria-atomic': null,
      'aria-busy': null,
      'aria-controls': null,
      'aria-current': null,
      'aria-describedby': null,
      'aria-details': null,
      'aria-dropeffect': null,
      'aria-flowto': null,
      'aria-grabbed': null,
      'aria-hidden': null,
      'aria-keyshortcuts': null,
      'aria-label': null,
      'aria-labelledby': null,
      'aria-live': null,
      'aria-owns': null,
      'aria-relevant': null,
      'aria-roledescription': null
    },
    relatedConcepts: [
      { concept: { name: 'rel' }, module: 'HTML' },
      { concept: { name: 'role' }, module: 'XHTML' },
      { concept: { name: 'type' }, module: 'Dublin Core' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  },
  Op = qp;
gt.default = Op;
var Et = {};
Object.defineProperty(Et, '__esModule', { value: !0 });
Et.default = void 0;
var Tp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'frontmatter' }, module: 'DTB' },
      { concept: { name: 'level' }, module: 'DTB' },
      { concept: { name: 'level' }, module: 'SMIL' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  xp = Tp;
Et.default = xp;
var _t = {};
Object.defineProperty(_t, '__esModule', { value: !0 });
_t.default = void 0;
var Mp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  Ap = Mp;
_t.default = Ap;
var Rt = {};
Object.defineProperty(Rt, '__esModule', { value: !0 });
Rt.default = void 0;
var $p = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-orientation': null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite'],
      ['roletype', 'structure', 'section', 'group']
    ]
  },
  Sp = $p;
Rt.default = Sp;
var wt = {};
Object.defineProperty(wt, '__esModule', { value: !0 });
wt.default = void 0;
var Bp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype']]
  },
  Ip = Bp;
wt.default = Ip;
var Ct = {};
Object.defineProperty(Ct, '__esModule', { value: !0 });
Ct.default = void 0;
var kp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype']]
  },
  Np = kp;
Ct.default = Np;
var Pt = {};
Object.defineProperty(Pt, '__esModule', { value: !0 });
Pt.default = void 0;
var jp = {
    abstract: !0,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-modal': null },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype']]
  },
  Lp = jp;
Pt.default = Lp;
Object.defineProperty(pt, '__esModule', { value: !0 });
pt.default = void 0;
var Dp = se(vt),
  Fp = se(mt),
  Vp = se(bt),
  Up = se(yt),
  Hp = se(ht),
  Wp = se(gt),
  zp = se(Et),
  Kp = se(_t),
  Gp = se(Rt),
  Qp = se(wt),
  Yp = se(Ct),
  Xp = se(Pt);
function se(e) {
  return e && e.__esModule ? e : { default: e };
}
var Jp = [
    ['command', Dp.default],
    ['composite', Fp.default],
    ['input', Vp.default],
    ['landmark', Up.default],
    ['range', Hp.default],
    ['roletype', Wp.default],
    ['section', zp.default],
    ['sectionhead', Kp.default],
    ['select', Gp.default],
    ['structure', Qp.default],
    ['widget', Yp.default],
    ['window', Xp.default]
  ],
  Zp = Jp;
pt.default = Zp;
var qt = {},
  Ot = {};
Object.defineProperty(Ot, '__esModule', { value: !0 });
Ot.default = void 0;
var ev = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-atomic': 'true', 'aria-live': 'assertive' },
    relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  rv = ev;
Ot.default = rv;
var Tt = {};
Object.defineProperty(Tt, '__esModule', { value: !0 });
Tt.default = void 0;
var tv = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'alert'],
      ['roletype', 'window', 'dialog']
    ]
  },
  av = tv;
Tt.default = av;
var xt = {};
Object.defineProperty(xt, '__esModule', { value: !0 });
xt.default = void 0;
var nv = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-activedescendant': null,
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'Device Independence Delivery Unit' } }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  ov = nv;
xt.default = ov;
var Mt = {};
Object.defineProperty(Mt, '__esModule', { value: !0 });
Mt.default = void 0;
var lv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-posinset': null, 'aria-setsize': null },
    relatedConcepts: [{ concept: { name: 'article' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'document']]
  },
  iv = lv;
Mt.default = iv;
var At = {};
Object.defineProperty(At, '__esModule', { value: !0 });
At.default = void 0;
var uv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          constraints: ['direct descendant of document'],
          name: 'header'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  sv = uv;
At.default = sv;
var $t = {};
Object.defineProperty($t, '__esModule', { value: !0 });
$t.default = void 0;
var dv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  cv = dv;
$t.default = cv;
var St = {};
Object.defineProperty(St, '__esModule', { value: !0 });
St.default = void 0;
var fv = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-pressed': null
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'aria-pressed' },
            { name: 'type', value: 'checkbox' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ name: 'aria-expanded', value: 'false' }],
          name: 'summary'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ name: 'aria-expanded', value: 'true' }],
          constraints: [
            'direct descendant of details element with the open attribute defined'
          ],
          name: 'summary'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ name: 'type', value: 'button' }],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ name: 'type', value: 'image' }],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ name: 'type', value: 'reset' }],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ name: 'type', value: 'submit' }],
          name: 'input'
        },
        module: 'HTML'
      },
      { concept: { name: 'button' }, module: 'HTML' },
      { concept: { name: 'trigger' }, module: 'XForms' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command']]
  },
  pv = fv;
St.default = pv;
var Bt = {};
Object.defineProperty(Bt, '__esModule', { value: !0 });
Bt.default = void 0;
var vv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: ['figure', 'grid', 'table'],
    requiredContextRole: ['figure', 'grid', 'table'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  mv = vv;
Bt.default = mv;
var It = {};
Object.defineProperty(It, '__esModule', { value: !0 });
It.default = void 0;
var bv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-colindex': null,
      'aria-colspan': null,
      'aria-rowindex': null,
      'aria-rowspan': null
    },
    relatedConcepts: [
      {
        concept: { constraints: ['descendant of table'], name: 'td' },
        module: 'HTML'
      }
    ],
    requireContextRole: ['row'],
    requiredContextRole: ['row'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  yv = bv;
It.default = yv;
var kt = {};
Object.defineProperty(kt, '__esModule', { value: !0 });
kt.default = void 0;
var hv = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-checked': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'type', value: 'checkbox' }],
          name: 'input'
        },
        module: 'HTML'
      },
      { concept: { name: 'option' }, module: 'ARIA' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [['roletype', 'widget', 'input']]
  },
  gv = hv;
kt.default = gv;
var Nt = {};
Object.defineProperty(Nt, '__esModule', { value: !0 });
Nt.default = void 0;
var Ev = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  _v = Ev;
Nt.default = _v;
var jt = {};
Object.defineProperty(jt, '__esModule', { value: !0 });
jt.default = void 0;
var Rv = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-sort': null },
    relatedConcepts: [
      {
        attributes: [{ name: 'scope', value: 'col' }],
        concept: { name: 'th' },
        module: 'HTML'
      }
    ],
    requireContextRole: ['row'],
    requiredContextRole: ['row'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'cell'],
      ['roletype', 'structure', 'section', 'cell', 'gridcell'],
      ['roletype', 'widget', 'gridcell'],
      ['roletype', 'structure', 'sectionhead']
    ]
  },
  wv = Rv;
jt.default = wv;
var Lt = {};
Object.defineProperty(Lt, '__esModule', { value: !0 });
Lt.default = void 0;
var Cv = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-activedescendant': null,
      'aria-autocomplete': null,
      'aria-errormessage': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null,
      'aria-expanded': 'false',
      'aria-haspopup': 'listbox'
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'email' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'search' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'tel' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'text' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'url' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['set'], name: 'list' },
            { name: 'type', value: 'url' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'multiple' },
            { constraints: ['undefined'], name: 'size' }
          ],
          name: 'select'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'multiple' },
            { name: 'size', value: 1 }
          ],
          name: 'select'
        },
        module: 'HTML'
      },
      { concept: { name: 'select' }, module: 'XForms' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-controls': null, 'aria-expanded': 'false' },
    superClass: [['roletype', 'widget', 'input']]
  },
  Pv = Cv;
Lt.default = Pv;
var Dt = {};
Object.defineProperty(Dt, '__esModule', { value: !0 });
Dt.default = void 0;
var qv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'aside' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Ov = qv;
Dt.default = Ov;
var Ft = {};
Object.defineProperty(Ft, '__esModule', { value: !0 });
Ft.default = void 0;
var Tv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          constraints: ['direct descendant of document'],
          name: 'footer'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  xv = Tv;
Ft.default = xv;
var Vt = {};
Object.defineProperty(Vt, '__esModule', { value: !0 });
Vt.default = void 0;
var Mv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'dd' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Av = Mv;
Vt.default = Av;
var Ut = {};
Object.defineProperty(Ut, '__esModule', { value: !0 });
Ut.default = void 0;
var $v = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Sv = $v;
Ut.default = Sv;
var Ht = {};
Object.defineProperty(Ht, '__esModule', { value: !0 });
Ht.default = void 0;
var Bv = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'dialog' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'window']]
  },
  Iv = Bv;
Ht.default = Iv;
var Wt = {};
Object.defineProperty(Wt, '__esModule', { value: !0 });
Wt.default = void 0;
var kv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ module: 'DAISY Guide' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'list']]
  },
  Nv = kv;
Wt.default = Nv;
var zt = {};
Object.defineProperty(zt, '__esModule', { value: !0 });
zt.default = void 0;
var jv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'Device Independence Delivery Unit' } },
      { concept: { name: 'body' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  Lv = jv;
zt.default = Lv;
var Kt = {};
Object.defineProperty(Kt, '__esModule', { value: !0 });
Kt.default = void 0;
var Dv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Fv = Dv;
Kt.default = Fv;
var Gt = {};
Object.defineProperty(Gt, '__esModule', { value: !0 });
Gt.default = void 0;
var Vv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['article']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'list']]
  },
  Uv = Vv;
Gt.default = Uv;
var Qt = {};
Object.defineProperty(Qt, '__esModule', { value: !0 });
Qt.default = void 0;
var Hv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'figure' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Wv = Hv;
Qt.default = Wv;
var Yt = {};
Object.defineProperty(Yt, '__esModule', { value: !0 });
Yt.default = void 0;
var zv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'aria-label' }],
          name: 'form'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
          name: 'form'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'name' }],
          name: 'form'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Kv = zv;
Yt.default = Kv;
var Xt = {};
Object.defineProperty(Xt, '__esModule', { value: !0 });
Xt.default = void 0;
var Gv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [
      { concept: { name: 'span' }, module: 'HTML' },
      { concept: { name: 'div' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  Qv = Gv;
Xt.default = Qv;
var Jt = {};
Object.defineProperty(Jt, '__esModule', { value: !0 });
Jt.default = void 0;
var Yv = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-multiselectable': null, 'aria-readonly': null },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'role', value: 'grid' }],
          name: 'table'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['row'], ['row', 'rowgroup']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite'],
      ['roletype', 'structure', 'section', 'table']
    ]
  },
  Xv = Yv;
Jt.default = Xv;
var Zt = {};
Object.defineProperty(Zt, '__esModule', { value: !0 });
Zt.default = void 0;
var Jv = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null,
      'aria-selected': null
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'role', value: 'gridcell' }],
          name: 'td'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: ['row'],
    requiredContextRole: ['row'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'cell'],
      ['roletype', 'widget']
    ]
  },
  Zv = Jv;
Zt.default = Zv;
var ea = {};
Object.defineProperty(ea, '__esModule', { value: !0 });
ea.default = void 0;
var em = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-activedescendant': null, 'aria-disabled': null },
    relatedConcepts: [
      { concept: { name: 'details' }, module: 'HTML' },
      { concept: { name: 'fieldset' }, module: 'HTML' },
      { concept: { name: 'optgroup' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  rm = em;
ea.default = rm;
var ra = {};
Object.defineProperty(ra, '__esModule', { value: !0 });
ra.default = void 0;
var tm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-level': '2' },
    relatedConcepts: [
      { concept: { name: 'h1' }, module: 'HTML' },
      { concept: { name: 'h2' }, module: 'HTML' },
      { concept: { name: 'h3' }, module: 'HTML' },
      { concept: { name: 'h4' }, module: 'HTML' },
      { concept: { name: 'h5' }, module: 'HTML' },
      { concept: { name: 'h6' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-level': '2' },
    superClass: [['roletype', 'structure', 'sectionhead']]
  },
  am = tm;
ra.default = am;
var ta = {};
Object.defineProperty(ta, '__esModule', { value: !0 });
ta.default = void 0;
var nm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'alt' }],
          name: 'img'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ constraints: ['undefined'], name: 'alt' }],
          name: 'img'
        },
        module: 'HTML'
      },
      { concept: { name: 'imggroup' }, module: 'DTB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  om = nm;
ta.default = om;
var aa = {};
Object.defineProperty(aa, '__esModule', { value: !0 });
aa.default = void 0;
var lm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  im = lm;
aa.default = im;
var na = {};
Object.defineProperty(na, '__esModule', { value: !0 });
na.default = void 0;
var um = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-expanded': null,
      'aria-haspopup': null
    },
    relatedConcepts: [
      {
        concept: { attributes: [{ name: 'href' }], name: 'a' },
        module: 'HTML'
      },
      {
        concept: { attributes: [{ name: 'href' }], name: 'area' },
        module: 'HTML'
      },
      {
        concept: { attributes: [{ name: 'href' }], name: 'link' },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command']]
  },
  sm = um;
na.default = sm;
var oa = {};
Object.defineProperty(oa, '__esModule', { value: !0 });
oa.default = void 0;
var dm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'menu' }, module: 'HTML' },
      { concept: { name: 'ol' }, module: 'HTML' },
      { concept: { name: 'ul' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['listitem']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  cm = dm;
oa.default = cm;
var la = {};
Object.defineProperty(la, '__esModule', { value: !0 });
la.default = void 0;
var fm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-invalid': null,
      'aria-multiselectable': null,
      'aria-readonly': null,
      'aria-required': null,
      'aria-orientation': 'vertical'
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['>1'], name: 'size' },
            { name: 'multiple' }
          ],
          name: 'select'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ constraints: ['>1'], name: 'size' }],
          name: 'select'
        },
        module: 'HTML'
      },
      {
        concept: { attributes: [{ name: 'multiple' }], name: 'select' },
        module: 'HTML'
      },
      { concept: { name: 'datalist' }, module: 'HTML' },
      { concept: { name: 'list' }, module: 'ARIA' },
      { concept: { name: 'select' }, module: 'XForms' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['option', 'group'], ['option']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select'],
      ['roletype', 'structure', 'section', 'group', 'select']
    ]
  },
  pm = fm;
la.default = pm;
var ia = {};
Object.defineProperty(ia, '__esModule', { value: !0 });
ia.default = void 0;
var vm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-level': null, 'aria-posinset': null, 'aria-setsize': null },
    relatedConcepts: [
      {
        concept: {
          constraints: ['direct descendant of ol, ul or menu'],
          name: 'li'
        },
        module: 'HTML'
      },
      { concept: { name: 'item' }, module: 'XForms' }
    ],
    requireContextRole: ['directory', 'list'],
    requiredContextRole: ['directory', 'list'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  mm = vm;
ia.default = mm;
var ua = {};
Object.defineProperty(ua, '__esModule', { value: !0 });
ua.default = void 0;
var bm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-live': 'polite' },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  ym = bm;
ua.default = ym;
var sa = {};
Object.defineProperty(sa, '__esModule', { value: !0 });
sa.default = void 0;
var hm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'main' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  gm = hm;
sa.default = gm;
var da = {};
Object.defineProperty(da, '__esModule', { value: !0 });
da.default = void 0;
var Em = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  _m = Em;
da.default = _m;
var ca = {};
Object.defineProperty(ca, '__esModule', { value: !0 });
ca.default = void 0;
var Rm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'math' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  wm = Rm;
ca.default = wm;
var fa = {};
Object.defineProperty(fa, '__esModule', { value: !0 });
fa.default = void 0;
var Cm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-orientation': 'vertical' },
    relatedConcepts: [
      { concept: { name: 'MENU' }, module: 'JAPI' },
      { concept: { name: 'list' }, module: 'ARIA' },
      { concept: { name: 'select' }, module: 'XForms' },
      { concept: { name: 'sidebar' }, module: 'DTB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
      ['menuitem', 'group'],
      ['menuitemradio', 'group'],
      ['menuitemcheckbox', 'group'],
      ['menuitem'],
      ['menuitemcheckbox'],
      ['menuitemradio']
    ],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select'],
      ['roletype', 'structure', 'section', 'group', 'select']
    ]
  },
  Pm = Cm;
fa.default = Pm;
var pa = {};
Object.defineProperty(pa, '__esModule', { value: !0 });
pa.default = void 0;
var qm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-orientation': 'horizontal' },
    relatedConcepts: [{ concept: { name: 'toolbar' }, module: 'ARIA' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [
      ['menuitem', 'group'],
      ['menuitemradio', 'group'],
      ['menuitemcheckbox', 'group'],
      ['menuitem'],
      ['menuitemcheckbox'],
      ['menuitemradio']
    ],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select', 'menu'],
      ['roletype', 'structure', 'section', 'group', 'select', 'menu']
    ]
  },
  Om = qm;
pa.default = Om;
var va = {};
Object.defineProperty(va, '__esModule', { value: !0 });
va.default = void 0;
var Tm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-posinset': null,
      'aria-setsize': null
    },
    relatedConcepts: [
      { concept: { name: 'MENU_ITEM' }, module: 'JAPI' },
      { concept: { name: 'listitem' }, module: 'ARIA' },
      { concept: { name: 'menuitem' }, module: 'HTML' },
      { concept: { name: 'option' }, module: 'ARIA' }
    ],
    requireContextRole: ['group', 'menu', 'menubar'],
    requiredContextRole: ['group', 'menu', 'menubar'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command']]
  },
  xm = Tm;
va.default = xm;
var ma = {};
Object.defineProperty(ma, '__esModule', { value: !0 });
ma.default = void 0;
var Mm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
    requireContextRole: ['group', 'menu', 'menubar'],
    requiredContextRole: ['group', 'menu', 'menubar'],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [
      ['roletype', 'widget', 'input', 'checkbox'],
      ['roletype', 'widget', 'command', 'menuitem']
    ]
  },
  Am = Mm;
ma.default = Am;
var ba = {};
Object.defineProperty(ba, '__esModule', { value: !0 });
ba.default = void 0;
var $m = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
    requireContextRole: ['group', 'menu', 'menubar'],
    requiredContextRole: ['group', 'menu', 'menubar'],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [
      ['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
      ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
      ['roletype', 'widget', 'input', 'radio']
    ]
  },
  Sm = $m;
ba.default = Sm;
var ya = {};
Object.defineProperty(ya, '__esModule', { value: !0 });
ya.default = void 0;
var Bm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-valuetext': null,
      'aria-valuemax': '100',
      'aria-valuemin': '0'
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-valuenow': null },
    superClass: [['roletype', 'structure', 'range']]
  },
  Im = Bm;
ya.default = Im;
var ha = {};
Object.defineProperty(ha, '__esModule', { value: !0 });
ha.default = void 0;
var km = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'nav' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Nm = km;
ha.default = Nm;
var ga = {};
Object.defineProperty(ga, '__esModule', { value: !0 });
ga.default = void 0;
var jm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: [],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: []
  },
  Lm = jm;
ga.default = Lm;
var Ea = {};
Object.defineProperty(Ea, '__esModule', { value: !0 });
Ea.default = void 0;
var Dm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Fm = Dm;
Ea.default = Fm;
var _a = {};
Object.defineProperty(_a, '__esModule', { value: !0 });
_a.default = void 0;
var Vm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-checked': null,
      'aria-posinset': null,
      'aria-setsize': null,
      'aria-selected': 'false'
    },
    relatedConcepts: [
      { concept: { name: 'item' }, module: 'XForms' },
      { concept: { name: 'listitem' }, module: 'ARIA' },
      { concept: { name: 'option' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-selected': 'false' },
    superClass: [['roletype', 'widget', 'input']]
  },
  Um = Vm;
_a.default = Um;
var Ra = {};
Object.defineProperty(Ra, '__esModule', { value: !0 });
Ra.default = void 0;
var Hm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Wm = Hm;
Ra.default = Wm;
var wa = {};
Object.defineProperty(wa, '__esModule', { value: !0 });
wa.default = void 0;
var zm = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  Km = zm;
wa.default = Km;
var Ca = {};
Object.defineProperty(Ca, '__esModule', { value: !0 });
Ca.default = void 0;
var Gm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-valuetext': null },
    relatedConcepts: [
      { concept: { name: 'progress' }, module: 'HTML' },
      { concept: { name: 'status' }, module: 'ARIA' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'range'],
      ['roletype', 'widget']
    ]
  },
  Qm = Gm;
Ca.default = Qm;
var Pa = {};
Object.defineProperty(Pa, '__esModule', { value: !0 });
Pa.default = void 0;
var Ym = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-checked': null,
      'aria-posinset': null,
      'aria-setsize': null
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'type', value: 'radio' }],
          name: 'input'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [['roletype', 'widget', 'input']]
  },
  Xm = Ym;
Pa.default = Xm;
var qa = {};
Object.defineProperty(qa, '__esModule', { value: !0 });
qa.default = void 0;
var Jm = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null
    },
    relatedConcepts: [{ concept: { name: 'list' }, module: 'ARIA' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['radio']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select'],
      ['roletype', 'structure', 'section', 'group', 'select']
    ]
  },
  Zm = Jm;
qa.default = Zm;
var Oa = {};
Object.defineProperty(Oa, '__esModule', { value: !0 });
Oa.default = void 0;
var eb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'aria-label' }],
          name: 'section'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
          name: 'section'
        },
        module: 'HTML'
      },
      { concept: { name: 'Device Independence Glossart perceivable unit' } },
      { concept: { name: 'frame' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  rb = eb;
Oa.default = rb;
var Ta = {};
Object.defineProperty(Ta, '__esModule', { value: !0 });
Ta.default = void 0;
var tb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-colindex': null,
      'aria-expanded': null,
      'aria-level': null,
      'aria-posinset': null,
      'aria-rowindex': null,
      'aria-selected': null,
      'aria-setsize': null
    },
    relatedConcepts: [{ concept: { name: 'tr' }, module: 'HTML' }],
    requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
    requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
    requiredOwnedElements: [
      ['cell'],
      ['columnheader'],
      ['gridcell'],
      ['rowheader']
    ],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'group'],
      ['roletype', 'widget']
    ]
  },
  ab = tb;
Ta.default = ab;
var xa = {};
Object.defineProperty(xa, '__esModule', { value: !0 });
xa.default = void 0;
var nb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'tbody' }, module: 'HTML' },
      { concept: { name: 'tfoot' }, module: 'HTML' },
      { concept: { name: 'thead' }, module: 'HTML' }
    ],
    requireContextRole: ['grid', 'table', 'treegrid'],
    requiredContextRole: ['grid', 'table', 'treegrid'],
    requiredOwnedElements: [['row']],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  ob = nb;
xa.default = ob;
var Ma = {};
Object.defineProperty(Ma, '__esModule', { value: !0 });
Ma.default = void 0;
var lb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-sort': null },
    relatedConcepts: [
      {
        concept: { attributes: [{ name: 'scope', value: 'row' }], name: 'th' },
        module: 'HTML'
      }
    ],
    requireContextRole: ['row'],
    requiredContextRole: ['row'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'section', 'cell'],
      ['roletype', 'structure', 'section', 'cell', 'gridcell'],
      ['roletype', 'widget', 'gridcell'],
      ['roletype', 'structure', 'sectionhead']
    ]
  },
  ib = lb;
Ma.default = ib;
var Aa = {};
Object.defineProperty(Aa, '__esModule', { value: !0 });
Aa.default = void 0;
var ub = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-valuetext': null,
      'aria-orientation': 'vertical',
      'aria-valuemax': '100',
      'aria-valuemin': '0'
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-controls': null, 'aria-valuenow': null },
    superClass: [
      ['roletype', 'structure', 'range'],
      ['roletype', 'widget']
    ]
  },
  sb = ub;
Aa.default = sb;
var $a = {};
Object.defineProperty($a, '__esModule', { value: !0 });
$a.default = void 0;
var db = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  cb = db;
$a.default = cb;
var Sa = {};
Object.defineProperty(Sa, '__esModule', { value: !0 });
Sa.default = void 0;
var fb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'search' }
          ],
          name: 'input'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'input', 'textbox']]
  },
  pb = fb;
Sa.default = pb;
var Ba = {};
Object.defineProperty(Ba, '__esModule', { value: !0 });
Ba.default = void 0;
var vb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-orientation': 'horizontal',
      'aria-valuemax': '100',
      'aria-valuemin': '0',
      'aria-valuenow': null,
      'aria-valuetext': null
    },
    relatedConcepts: [{ concept: { name: 'hr' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure']]
  },
  mb = vb;
Ba.default = mb;
var Ia = {};
Object.defineProperty(Ia, '__esModule', { value: !0 });
Ia.default = void 0;
var bb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-haspopup': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-valuetext': null,
      'aria-orientation': 'horizontal',
      'aria-valuemax': '100',
      'aria-valuemin': '0'
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'type', value: 'range' }],
          name: 'input'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-valuenow': null },
    superClass: [
      ['roletype', 'widget', 'input'],
      ['roletype', 'structure', 'range']
    ]
  },
  yb = bb;
Ia.default = yb;
var ka = {};
Object.defineProperty(ka, '__esModule', { value: !0 });
ka.default = void 0;
var hb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-invalid': null,
      'aria-readonly': null,
      'aria-required': null,
      'aria-valuetext': null,
      'aria-valuenow': '0'
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [{ name: 'type', value: 'number' }],
          name: 'input'
        },
        module: 'HTML'
      }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite'],
      ['roletype', 'widget', 'input'],
      ['roletype', 'structure', 'range']
    ]
  },
  gb = hb;
ka.default = gb;
var Na = {};
Object.defineProperty(Na, '__esModule', { value: !0 });
Na.default = void 0;
var Eb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-atomic': 'true', 'aria-live': 'polite' },
    relatedConcepts: [{ concept: { name: 'output' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  _b = Eb;
Na.default = _b;
var ja = {};
Object.defineProperty(ja, '__esModule', { value: !0 });
ja.default = void 0;
var Rb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  wb = Rb;
ja.default = wb;
var La = {};
Object.defineProperty(La, '__esModule', { value: !0 });
La.default = void 0;
var Cb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Pb = Cb;
La.default = Pb;
var Da = {};
Object.defineProperty(Da, '__esModule', { value: !0 });
Da.default = void 0;
var qb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['prohibited'],
    prohibitedProps: ['aria-label', 'aria-labelledby'],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Ob = qb;
Da.default = Ob;
var Fa = {};
Object.defineProperty(Fa, '__esModule', { value: !0 });
Fa.default = void 0;
var Tb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [{ concept: { name: 'button' }, module: 'ARIA' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: { 'aria-checked': null },
    superClass: [['roletype', 'widget', 'input', 'checkbox']]
  },
  xb = Tb;
Fa.default = xb;
var Va = {};
Object.defineProperty(Va, '__esModule', { value: !0 });
Va.default = void 0;
var Mb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-posinset': null,
      'aria-setsize': null,
      'aria-selected': 'false'
    },
    relatedConcepts: [],
    requireContextRole: ['tablist'],
    requiredContextRole: ['tablist'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [
      ['roletype', 'structure', 'sectionhead'],
      ['roletype', 'widget']
    ]
  },
  Ab = Mb;
Va.default = Ab;
var Ua = {};
Object.defineProperty(Ua, '__esModule', { value: !0 });
Ua.default = void 0;
var $b = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-colcount': null, 'aria-rowcount': null },
    relatedConcepts: [{ concept: { name: 'table' }, module: 'HTML' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['row'], ['row', 'rowgroup']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Sb = $b;
Ua.default = Sb;
var Ha = {};
Object.defineProperty(Ha, '__esModule', { value: !0 });
Ha.default = void 0;
var Bb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-level': null,
      'aria-multiselectable': null,
      'aria-orientation': 'horizontal'
    },
    relatedConcepts: [{ module: 'DAISY', concept: { name: 'guide' } }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['tab']],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'composite']]
  },
  Ib = Bb;
Ha.default = Ib;
var Wa = {};
Object.defineProperty(Wa, '__esModule', { value: !0 });
Wa.default = void 0;
var kb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Nb = kb;
Wa.default = Nb;
var za = {};
Object.defineProperty(za, '__esModule', { value: !0 });
za.default = void 0;
var jb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'dfn' }, module: 'HTML' },
      { concept: { name: 'dt' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Lb = jb;
za.default = Lb;
var Ka = {};
Object.defineProperty(Ka, '__esModule', { value: !0 });
Ka.default = void 0;
var Db = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-activedescendant': null,
      'aria-autocomplete': null,
      'aria-errormessage': null,
      'aria-haspopup': null,
      'aria-invalid': null,
      'aria-multiline': null,
      'aria-placeholder': null,
      'aria-readonly': null,
      'aria-required': null
    },
    relatedConcepts: [
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'type' },
            { constraints: ['undefined'], name: 'list' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'email' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'tel' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'text' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      {
        concept: {
          attributes: [
            { constraints: ['undefined'], name: 'list' },
            { name: 'type', value: 'url' }
          ],
          name: 'input'
        },
        module: 'HTML'
      },
      { concept: { name: 'input' }, module: 'XForms' },
      { concept: { name: 'textarea' }, module: 'HTML' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'input']]
  },
  Fb = Db;
Ka.default = Fb;
var Ga = {};
Object.defineProperty(Ga, '__esModule', { value: !0 });
Ga.default = void 0;
var Vb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Ub = Vb;
Ga.default = Ub;
var Qa = {};
Object.defineProperty(Qa, '__esModule', { value: !0 });
Qa.default = void 0;
var Hb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'status']]
  },
  Wb = Hb;
Qa.default = Wb;
var Ya = {};
Object.defineProperty(Ya, '__esModule', { value: !0 });
Ya.default = void 0;
var zb = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: { 'aria-orientation': 'horizontal' },
    relatedConcepts: [{ concept: { name: 'menubar' }, module: 'ARIA' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'group']]
  },
  Kb = zb;
Ya.default = Kb;
var Xa = {};
Object.defineProperty(Xa, '__esModule', { value: !0 });
Xa.default = void 0;
var Gb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Qb = Gb;
Xa.default = Qb;
var Ja = {};
Object.defineProperty(Ja, '__esModule', { value: !0 });
Ja.default = void 0;
var Yb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-invalid': null,
      'aria-multiselectable': null,
      'aria-required': null,
      'aria-orientation': 'vertical'
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'select'],
      ['roletype', 'structure', 'section', 'group', 'select']
    ]
  },
  Xb = Yb;
Ja.default = Xb;
var Za = {};
Object.defineProperty(Za, '__esModule', { value: !0 });
Za.default = void 0;
var Jb = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['row'], ['row', 'rowgroup']],
    requiredProps: {},
    superClass: [
      ['roletype', 'widget', 'composite', 'grid'],
      ['roletype', 'structure', 'section', 'table', 'grid'],
      ['roletype', 'widget', 'composite', 'select', 'tree'],
      ['roletype', 'structure', 'section', 'group', 'select', 'tree']
    ]
  },
  Zb = Jb;
Za.default = Zb;
var en = {};
Object.defineProperty(en, '__esModule', { value: !0 });
en.default = void 0;
var ey = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-expanded': null, 'aria-haspopup': null },
    relatedConcepts: [],
    requireContextRole: ['group', 'tree'],
    requiredContextRole: ['group', 'tree'],
    requiredOwnedElements: [],
    requiredProps: { 'aria-selected': null },
    superClass: [
      ['roletype', 'structure', 'section', 'listitem'],
      ['roletype', 'widget', 'input', 'option']
    ]
  },
  ry = ey;
en.default = ry;
Object.defineProperty(qt, '__esModule', { value: !0 });
qt.default = void 0;
var ty = g(Ot),
  ay = g(Tt),
  ny = g(xt),
  oy = g(Mt),
  ly = g(At),
  iy = g($t),
  uy = g(St),
  sy = g(Bt),
  dy = g(It),
  cy = g(kt),
  fy = g(Nt),
  py = g(jt),
  vy = g(Lt),
  my = g(Dt),
  by = g(Ft),
  yy = g(Vt),
  hy = g(Ut),
  gy = g(Ht),
  Ey = g(Wt),
  _y = g(zt),
  Ry = g(Kt),
  wy = g(Gt),
  Cy = g(Qt),
  Py = g(Yt),
  qy = g(Xt),
  Oy = g(Jt),
  Ty = g(Zt),
  xy = g(ea),
  My = g(ra),
  Ay = g(ta),
  $y = g(aa),
  Sy = g(na),
  By = g(oa),
  Iy = g(la),
  ky = g(ia),
  Ny = g(ua),
  jy = g(sa),
  Ly = g(da),
  Dy = g(ca),
  Fy = g(fa),
  Vy = g(pa),
  Uy = g(va),
  Hy = g(ma),
  Wy = g(ba),
  zy = g(ya),
  Ky = g(ha),
  Gy = g(ga),
  Qy = g(Ea),
  Yy = g(_a),
  Xy = g(Ra),
  Jy = g(wa),
  Zy = g(Ca),
  eh = g(Pa),
  rh = g(qa),
  th = g(Oa),
  ah = g(Ta),
  nh = g(xa),
  oh = g(Ma),
  lh = g(Aa),
  ih = g($a),
  uh = g(Sa),
  sh = g(Ba),
  dh = g(Ia),
  ch = g(ka),
  fh = g(Na),
  ph = g(ja),
  vh = g(La),
  mh = g(Da),
  bh = g(Fa),
  yh = g(Va),
  hh = g(Ua),
  gh = g(Ha),
  Eh = g(Wa),
  _h = g(za),
  Rh = g(Ka),
  wh = g(Ga),
  Ch = g(Qa),
  Ph = g(Ya),
  qh = g(Xa),
  Oh = g(Ja),
  Th = g(Za),
  xh = g(en);
function g(e) {
  return e && e.__esModule ? e : { default: e };
}
var Mh = [
    ['alert', ty.default],
    ['alertdialog', ay.default],
    ['application', ny.default],
    ['article', oy.default],
    ['banner', ly.default],
    ['blockquote', iy.default],
    ['button', uy.default],
    ['caption', sy.default],
    ['cell', dy.default],
    ['checkbox', cy.default],
    ['code', fy.default],
    ['columnheader', py.default],
    ['combobox', vy.default],
    ['complementary', my.default],
    ['contentinfo', by.default],
    ['definition', yy.default],
    ['deletion', hy.default],
    ['dialog', gy.default],
    ['directory', Ey.default],
    ['document', _y.default],
    ['emphasis', Ry.default],
    ['feed', wy.default],
    ['figure', Cy.default],
    ['form', Py.default],
    ['generic', qy.default],
    ['grid', Oy.default],
    ['gridcell', Ty.default],
    ['group', xy.default],
    ['heading', My.default],
    ['img', Ay.default],
    ['insertion', $y.default],
    ['link', Sy.default],
    ['list', By.default],
    ['listbox', Iy.default],
    ['listitem', ky.default],
    ['log', Ny.default],
    ['main', jy.default],
    ['marquee', Ly.default],
    ['math', Dy.default],
    ['menu', Fy.default],
    ['menubar', Vy.default],
    ['menuitem', Uy.default],
    ['menuitemcheckbox', Hy.default],
    ['menuitemradio', Wy.default],
    ['meter', zy.default],
    ['navigation', Ky.default],
    ['none', Gy.default],
    ['note', Qy.default],
    ['option', Yy.default],
    ['paragraph', Xy.default],
    ['presentation', Jy.default],
    ['progressbar', Zy.default],
    ['radio', eh.default],
    ['radiogroup', rh.default],
    ['region', th.default],
    ['row', ah.default],
    ['rowgroup', nh.default],
    ['rowheader', oh.default],
    ['scrollbar', lh.default],
    ['search', ih.default],
    ['searchbox', uh.default],
    ['separator', sh.default],
    ['slider', dh.default],
    ['spinbutton', ch.default],
    ['status', fh.default],
    ['strong', ph.default],
    ['subscript', vh.default],
    ['superscript', mh.default],
    ['switch', bh.default],
    ['tab', yh.default],
    ['table', hh.default],
    ['tablist', gh.default],
    ['tabpanel', Eh.default],
    ['term', _h.default],
    ['textbox', Rh.default],
    ['time', wh.default],
    ['timer', Ch.default],
    ['toolbar', Ph.default],
    ['tooltip', qh.default],
    ['tree', Oh.default],
    ['treegrid', Th.default],
    ['treeitem', xh.default]
  ],
  Ah = Mh;
qt.default = Ah;
var rn = {},
  tn = {};
Object.defineProperty(tn, '__esModule', { value: !0 });
tn.default = void 0;
var $h = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'abstract [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Sh = $h;
tn.default = Sh;
var an = {};
Object.defineProperty(an, '__esModule', { value: !0 });
an.default = void 0;
var Bh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'acknowledgments [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Ih = Bh;
an.default = Ih;
var nn = {};
Object.defineProperty(nn, '__esModule', { value: !0 });
nn.default = void 0;
var kh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'afterword [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Nh = kh;
nn.default = Nh;
var on = {};
Object.defineProperty(on, '__esModule', { value: !0 });
on.default = void 0;
var jh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'appendix [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Lh = jh;
on.default = Lh;
var ln = {};
Object.defineProperty(ln, '__esModule', { value: !0 });
ln.default = void 0;
var Dh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'content'],
    prohibitedProps: [],
    props: { 'aria-errormessage': null, 'aria-invalid': null },
    relatedConcepts: [
      { concept: { name: 'referrer [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command', 'link']]
  },
  Fh = Dh;
ln.default = Fh;
var un = {};
Object.defineProperty(un, '__esModule', { value: !0 });
un.default = void 0;
var Vh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'EPUB biblioentry [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: ['doc-bibliography'],
    requiredContextRole: ['doc-bibliography'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'listitem']]
  },
  Uh = Vh;
un.default = Uh;
var sn = {};
Object.defineProperty(sn, '__esModule', { value: !0 });
sn.default = void 0;
var Hh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'bibliography [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['doc-biblioentry']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Wh = Hh;
sn.default = Wh;
var dn = {};
Object.defineProperty(dn, '__esModule', { value: !0 });
dn.default = void 0;
var zh = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-errormessage': null, 'aria-invalid': null },
    relatedConcepts: [
      { concept: { name: 'biblioref [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command', 'link']]
  },
  Kh = zh;
dn.default = Kh;
var cn = {};
Object.defineProperty(cn, '__esModule', { value: !0 });
cn.default = void 0;
var Gh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'chapter [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Qh = Gh;
cn.default = Qh;
var fn = {};
Object.defineProperty(fn, '__esModule', { value: !0 });
fn.default = void 0;
var Yh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'colophon [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Xh = Yh;
fn.default = Xh;
var pn = {};
Object.defineProperty(pn, '__esModule', { value: !0 });
pn.default = void 0;
var Jh = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'conclusion [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Zh = Jh;
pn.default = Zh;
var vn = {};
Object.defineProperty(vn, '__esModule', { value: !0 });
vn.default = void 0;
var eg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'cover [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'img']]
  },
  rg = eg;
vn.default = rg;
var mn = {};
Object.defineProperty(mn, '__esModule', { value: !0 });
mn.default = void 0;
var tg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'credit [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  ag = tg;
mn.default = ag;
var bn = {};
Object.defineProperty(bn, '__esModule', { value: !0 });
bn.default = void 0;
var ng = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'credits [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  og = ng;
bn.default = og;
var yn = {};
Object.defineProperty(yn, '__esModule', { value: !0 });
yn.default = void 0;
var lg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'dedication [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  ig = lg;
yn.default = ig;
var hn = {};
Object.defineProperty(hn, '__esModule', { value: !0 });
hn.default = void 0;
var ug = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'rearnote [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: ['doc-endnotes'],
    requiredContextRole: ['doc-endnotes'],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'listitem']]
  },
  sg = ug;
hn.default = sg;
var gn = {};
Object.defineProperty(gn, '__esModule', { value: !0 });
gn.default = void 0;
var dg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'rearnotes [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['doc-endnote']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  cg = dg;
gn.default = cg;
var En = {};
Object.defineProperty(En, '__esModule', { value: !0 });
En.default = void 0;
var fg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'epigraph [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  pg = fg;
En.default = pg;
var _n = {};
Object.defineProperty(_n, '__esModule', { value: !0 });
_n.default = void 0;
var vg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'epilogue [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  mg = vg;
_n.default = mg;
var Rn = {};
Object.defineProperty(Rn, '__esModule', { value: !0 });
Rn.default = void 0;
var bg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'errata [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  yg = bg;
Rn.default = yg;
var wn = {};
Object.defineProperty(wn, '__esModule', { value: !0 });
wn.default = void 0;
var hg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  gg = hg;
wn.default = gg;
var Cn = {};
Object.defineProperty(Cn, '__esModule', { value: !0 });
Cn.default = void 0;
var Eg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'footnote [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  _g = Eg;
Cn.default = _g;
var Pn = {};
Object.defineProperty(Pn, '__esModule', { value: !0 });
Pn.default = void 0;
var Rg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'foreword [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  wg = Rg;
Pn.default = wg;
var qn = {};
Object.defineProperty(qn, '__esModule', { value: !0 });
qn.default = void 0;
var Cg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'glossary [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [['definition'], ['term']],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Pg = Cg;
qn.default = Pg;
var On = {};
Object.defineProperty(On, '__esModule', { value: !0 });
On.default = void 0;
var qg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-errormessage': null, 'aria-invalid': null },
    relatedConcepts: [
      { concept: { name: 'glossref [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command', 'link']]
  },
  Og = qg;
On.default = Og;
var Tn = {};
Object.defineProperty(Tn, '__esModule', { value: !0 });
Tn.default = void 0;
var Tg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'index [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
  },
  xg = Tg;
Tn.default = xg;
var xn = {};
Object.defineProperty(xn, '__esModule', { value: !0 });
xn.default = void 0;
var Mg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'introduction [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Ag = Mg;
xn.default = Ag;
var Mn = {};
Object.defineProperty(Mn, '__esModule', { value: !0 });
Mn.default = void 0;
var $g = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author', 'contents'],
    prohibitedProps: [],
    props: { 'aria-errormessage': null, 'aria-invalid': null },
    relatedConcepts: [
      { concept: { name: 'noteref [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'widget', 'command', 'link']]
  },
  Sg = $g;
Mn.default = Sg;
var An = {};
Object.defineProperty(An, '__esModule', { value: !0 });
An.default = void 0;
var Bg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'notice [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'note']]
  },
  Ig = Bg;
An.default = Ig;
var $n = {};
Object.defineProperty($n, '__esModule', { value: !0 });
$n.default = void 0;
var kg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !0,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'pagebreak [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'separator']]
  },
  Ng = kg;
$n.default = Ng;
var Sn = {};
Object.defineProperty(Sn, '__esModule', { value: !0 });
Sn.default = void 0;
var jg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'page-list [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
  },
  Lg = jg;
Sn.default = Lg;
var Bn = {};
Object.defineProperty(Bn, '__esModule', { value: !0 });
Bn.default = void 0;
var Dg = {
    abstract: !1,
    accessibleNameRequired: !0,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [{ concept: { name: 'part [EPUB-SSV]' }, module: 'EPUB' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Fg = Dg;
Bn.default = Fg;
var In = {};
Object.defineProperty(In, '__esModule', { value: !0 });
In.default = void 0;
var Vg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'preface [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Ug = Vg;
In.default = Ug;
var kn = {};
Object.defineProperty(kn, '__esModule', { value: !0 });
kn.default = void 0;
var Hg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'prologue [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark']]
  },
  Wg = Hg;
kn.default = Wg;
var Nn = {};
Object.defineProperty(Nn, '__esModule', { value: !0 });
Nn.default = void 0;
var zg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {},
    relatedConcepts: [
      { concept: { name: 'pullquote [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['none']]
  },
  Kg = zg;
Nn.default = Kg;
var jn = {};
Object.defineProperty(jn, '__esModule', { value: !0 });
jn.default = void 0;
var Gg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [{ concept: { name: 'qna [EPUB-SSV]' }, module: 'EPUB' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section']]
  },
  Qg = Gg;
jn.default = Qg;
var Ln = {};
Object.defineProperty(Ln, '__esModule', { value: !0 });
Ln.default = void 0;
var Yg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [
      { concept: { name: 'subtitle [EPUB-SSV]' }, module: 'EPUB' }
    ],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'sectionhead']]
  },
  Xg = Yg;
Ln.default = Xg;
var Dn = {};
Object.defineProperty(Dn, '__esModule', { value: !0 });
Dn.default = void 0;
var Jg = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [{ concept: { name: 'help [EPUB-SSV]' }, module: 'EPUB' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'note']]
  },
  Zg = Jg;
Dn.default = Zg;
var Fn = {};
Object.defineProperty(Fn, '__esModule', { value: !0 });
Fn.default = void 0;
var eE = {
    abstract: !1,
    accessibleNameRequired: !1,
    baseConcepts: [],
    childrenPresentational: !1,
    nameFrom: ['author'],
    prohibitedProps: [],
    props: {
      'aria-disabled': null,
      'aria-errormessage': null,
      'aria-expanded': null,
      'aria-haspopup': null,
      'aria-invalid': null
    },
    relatedConcepts: [{ concept: { name: 'toc [EPUB-SSV]' }, module: 'EPUB' }],
    requireContextRole: [],
    requiredContextRole: [],
    requiredOwnedElements: [],
    requiredProps: {},
    superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']]
  },
  rE = eE;
Fn.default = rE;
Object.defineProperty(rn, '__esModule', { value: !0 });
rn.default = void 0;
var tE = I(tn),
  aE = I(an),
  nE = I(nn),
  oE = I(on),
  lE = I(ln),
  iE = I(un),
  uE = I(sn),
  sE = I(dn),
  dE = I(cn),
  cE = I(fn),
  fE = I(pn),
  pE = I(vn),
  vE = I(mn),
  mE = I(bn),
  bE = I(yn),
  yE = I(hn),
  hE = I(gn),
  gE = I(En),
  EE = I(_n),
  _E = I(Rn),
  RE = I(wn),
  wE = I(Cn),
  CE = I(Pn),
  PE = I(qn),
  qE = I(On),
  OE = I(Tn),
  TE = I(xn),
  xE = I(Mn),
  ME = I(An),
  AE = I($n),
  $E = I(Sn),
  SE = I(Bn),
  BE = I(In),
  IE = I(kn),
  kE = I(Nn),
  NE = I(jn),
  jE = I(Ln),
  LE = I(Dn),
  DE = I(Fn);
function I(e) {
  return e && e.__esModule ? e : { default: e };
}
var FE = [
    ['doc-abstract', tE.default],
    ['doc-acknowledgments', aE.default],
    ['doc-afterword', nE.default],
    ['doc-appendix', oE.default],
    ['doc-backlink', lE.default],
    ['doc-biblioentry', iE.default],
    ['doc-bibliography', uE.default],
    ['doc-biblioref', sE.default],
    ['doc-chapter', dE.default],
    ['doc-colophon', cE.default],
    ['doc-conclusion', fE.default],
    ['doc-cover', pE.default],
    ['doc-credit', vE.default],
    ['doc-credits', mE.default],
    ['doc-dedication', bE.default],
    ['doc-endnote', yE.default],
    ['doc-endnotes', hE.default],
    ['doc-epigraph', gE.default],
    ['doc-epilogue', EE.default],
    ['doc-errata', _E.default],
    ['doc-example', RE.default],
    ['doc-footnote', wE.default],
    ['doc-foreword', CE.default],
    ['doc-glossary', PE.default],
    ['doc-glossref', qE.default],
    ['doc-index', OE.default],
    ['doc-introduction', TE.default],
    ['doc-noteref', xE.default],
    ['doc-notice', ME.default],
    ['doc-pagebreak', AE.default],
    ['doc-pagelist', $E.default],
    ['doc-part', SE.default],
    ['doc-preface', BE.default],
    ['doc-prologue', IE.default],
    ['doc-pullquote', kE.default],
    ['doc-qna', NE.default],
    ['doc-subtitle', jE.default],
    ['doc-tip', LE.default],
    ['doc-toc', DE.default]
  ],
  VE = FE;
rn.default = VE;
Object.defineProperty(cr, '__esModule', { value: !0 });
cr.default = void 0;
var UE = tl(pt),
  HE = tl(qt),
  WE = tl(rn);
function tl(e) {
  return e && e.__esModule ? e : { default: e };
}
function zE(e, r, t) {
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
function di(e, r) {
  var t =
    (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (!t) {
    if (
      Array.isArray(e) ||
      (t = Vu(e)) ||
      (r && e && typeof e.length == 'number')
    ) {
      t && (e = t);
      var a = 0,
        n = function () {};
      return {
        s: n,
        n: function () {
          return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
        },
        e: function (s) {
          throw s;
        },
        f: n
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var o = !0,
    l = !1,
    u;
  return {
    s: function () {
      t = t.call(e);
    },
    n: function () {
      var s = t.next();
      return (o = s.done), s;
    },
    e: function (s) {
      (l = !0), (u = s);
    },
    f: function () {
      try {
        !o && t.return != null && t.return();
      } finally {
        if (l) throw u;
      }
    }
  };
}
function nt(e, r) {
  return QE(e) || GE(e, r) || Vu(e, r) || KE();
}
function KE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vu(e, r) {
  if (!!e) {
    if (typeof e == 'string') return ci(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return ci(e, r);
  }
}
function ci(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
  return a;
}
function GE(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        t = t.call(e);
        !(n = (l = t.next()).done) && (a.push(l.value), !(r && a.length === r));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function QE(e) {
  if (Array.isArray(e)) return e;
}
var Ze = [].concat(UE.default, HE.default, WE.default);
Ze.forEach(function (e) {
  var r = nt(e, 2),
    t = r[1],
    a = di(t.superClass),
    n;
  try {
    for (a.s(); !(n = a.n()).done; ) {
      var o = n.value,
        l = di(o),
        u;
      try {
        var i = function () {
          var c = u.value,
            f = Ze.find(function (E) {
              var h = nt(E, 1),
                _ = h[0];
              return _ === c;
            });
          if (f)
            for (
              var p = f[1], y = 0, P = Object.keys(p.props);
              y < P.length;
              y++
            ) {
              var v = P[y];
              Object.prototype.hasOwnProperty.call(t.props, v) ||
                Object.assign(t.props, zE({}, v, p.props[v]));
            }
        };
        for (l.s(); !(u = l.n()).done; ) i();
      } catch (s) {
        l.e(s);
      } finally {
        l.f();
      }
    }
  } catch (s) {
    a.e(s);
  } finally {
    a.f();
  }
});
var YE = {
    entries: function () {
      return Ze;
    },
    get: function (r) {
      var t = Ze.find(function (a) {
        return a[0] === r;
      });
      return t && t[1];
    },
    has: function (r) {
      return !!this.get(r);
    },
    keys: function () {
      return Ze.map(function (r) {
        var t = nt(r, 1),
          a = t[0];
        return a;
      });
    },
    values: function () {
      return Ze.map(function (r) {
        var t = nt(r, 2),
          a = t[1];
        return a;
      });
    }
  },
  XE = YE;
cr.default = XE;
var Vn = {};
Object.defineProperty(Vn, '__esModule', { value: !0 });
Vn.default = void 0;
var Uu = JE(cr);
function JE(e) {
  return e && e.__esModule ? e : { default: e };
}
function fi(e, r) {
  return t_(e) || r_(e, r) || e_(e, r) || ZE();
}
function ZE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function e_(e, r) {
  if (!!e) {
    if (typeof e == 'string') return pi(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return pi(e, r);
  }
}
function pi(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
  return a;
}
function r_(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        t = t.call(e);
        !(n = (l = t.next()).done) && (a.push(l.value), !(r && a.length === r));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function t_(e) {
  if (Array.isArray(e)) return e;
}
var er = [],
  vi = Uu.default.keys();
for (var mo = 0; mo < vi.length; mo++) {
  var bo = vi[mo],
    yo = Uu.default.get(bo);
  if (yo)
    for (
      var mi = [].concat(yo.baseConcepts, yo.relatedConcepts), ho = 0;
      ho < mi.length;
      ho++
    ) {
      var bi = mi[ho];
      if (bi.module === 'HTML') {
        var go = bi.concept;
        go &&
          (function () {
            var e = JSON.stringify(go),
              r = er.find(function (o) {
                return JSON.stringify(o[0]) === e;
              }),
              t = void 0;
            r ? (t = r[1]) : (t = []);
            for (var a = !0, n = 0; n < t.length; n++)
              if (t[n] === bo) {
                a = !1;
                break;
              }
            a && t.push(bo), er.push([go, t]);
          })();
      }
    }
}
var a_ = {
    entries: function () {
      return er;
    },
    get: function (r) {
      var t = er.find(function (a) {
        return JSON.stringify(a[0]) === JSON.stringify(r);
      });
      return t && t[1];
    },
    has: function (r) {
      return !!this.get(r);
    },
    keys: function () {
      return er.map(function (r) {
        var t = fi(r, 1),
          a = t[0];
        return a;
      });
    },
    values: function () {
      return er.map(function (r) {
        var t = fi(r, 2),
          a = t[1];
        return a;
      });
    }
  },
  n_ = a_;
Vn.default = n_;
var Un = {};
Object.defineProperty(Un, '__esModule', { value: !0 });
Un.default = void 0;
var Hu = o_(cr);
function o_(e) {
  return e && e.__esModule ? e : { default: e };
}
function yi(e, r) {
  return s_(e) || u_(e, r) || i_(e, r) || l_();
}
function l_() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function i_(e, r) {
  if (!!e) {
    if (typeof e == 'string') return hi(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return hi(e, r);
  }
}
function hi(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
  return a;
}
function u_(e, r) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var a = [],
      n = !0,
      o = !1,
      l,
      u;
    try {
      for (
        t = t.call(e);
        !(n = (l = t.next()).done) && (a.push(l.value), !(r && a.length === r));
        n = !0
      );
    } catch (i) {
      (o = !0), (u = i);
    } finally {
      try {
        !n && t.return != null && t.return();
      } finally {
        if (o) throw u;
      }
    }
    return a;
  }
}
function s_(e) {
  if (Array.isArray(e)) return e;
}
var rr = [],
  Wu = Hu.default.keys(),
  d_ = function (r) {
    var t = Wu[r],
      a = Hu.default.get(t);
    if (a)
      for (
        var n = [].concat(a.baseConcepts, a.relatedConcepts), o = 0;
        o < n.length;
        o++
      ) {
        var l = n[o];
        if (l.module === 'HTML') {
          var u = l.concept;
          if (u) {
            var i = rr.find(function (c) {
                return c[0] === t;
              }),
              s = void 0;
            i ? (s = i[1]) : (s = []), s.push(u), rr.push([t, s]);
          }
        }
      }
  };
for (var Eo = 0; Eo < Wu.length; Eo++) d_(Eo);
var c_ = {
    entries: function () {
      return rr;
    },
    get: function (r) {
      var t = rr.find(function (a) {
        return a[0] === r;
      });
      return t && t[1];
    },
    has: function (r) {
      return !!this.get(r);
    },
    keys: function () {
      return rr.map(function (r) {
        var t = yi(r, 1),
          a = t[0];
        return a;
      });
    },
    values: function () {
      return rr.map(function (r) {
        var t = yi(r, 2),
          a = t[1];
        return a;
      });
    }
  },
  f_ = c_;
Un.default = f_;
Object.defineProperty(fe, '__esModule', { value: !0 });
var zu =
    (fe.roleElements =
    Ku =
    fe.elementRoles =
    Je =
    fe.roles =
    fe.dom =
    fe.aria =
      void 0),
  p_ = Pr(ct),
  v_ = Pr(ft),
  m_ = Pr(cr),
  b_ = Pr(Vn),
  y_ = Pr(Un);
function Pr(e) {
  return e && e.__esModule ? e : { default: e };
}
var h_ = p_.default;
fe.aria = h_;
var g_ = v_.default;
fe.dom = g_;
var E_ = m_.default,
  Je = (fe.roles = E_),
  __ = b_.default,
  Ku = (fe.elementRoles = __),
  R_ = y_.default;
zu = fe.roleElements = R_;
function gi(e, r, t, a, n, o, l) {
  try {
    var u = e[o](l),
      i = u.value;
  } catch (s) {
    t(s);
    return;
  }
  u.done ? r(i) : Promise.resolve(i).then(a, n);
}
function Ao(e) {
  return function () {
    var r = this,
      t = arguments;
    return new Promise(function (a, n) {
      var o = e.apply(r, t);
      function l(i) {
        gi(o, a, n, l, u, 'next', i);
      }
      function u(i) {
        gi(o, a, n, l, u, 'throw', i);
      }
      l(void 0);
    });
  };
}
var Gu = { exports: {} },
  Qu = { exports: {} };
(function (e) {
  function r(t) {
    return (
      (e.exports = r =
        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
          ? function (a) {
              return typeof a;
            }
          : function (a) {
              return a &&
                typeof Symbol == 'function' &&
                a.constructor === Symbol &&
                a !== Symbol.prototype
                ? 'symbol'
                : typeof a;
            }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports),
      r(t)
    );
  }
  (e.exports = r), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Qu);
(function (e) {
  var r = Qu.exports.default;
  function t() {
    /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ (e.exports =
      t =
        function () {
          return a;
        }),
      (e.exports.__esModule = !0),
      (e.exports.default = e.exports);
    var a = {},
      n = Object.prototype,
      o = n.hasOwnProperty,
      l = typeof Symbol == 'function' ? Symbol : {},
      u = l.iterator || '@@iterator',
      i = l.asyncIterator || '@@asyncIterator',
      s = l.toStringTag || '@@toStringTag';
    function c(w, m, T) {
      return (
        Object.defineProperty(w, m, {
          value: T,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }),
        w[m]
      );
    }
    try {
      c({}, '');
    } catch {
      c = function (T, A, $) {
        return (T[A] = $);
      };
    }
    function f(w, m, T, A) {
      var $ = m && m.prototype instanceof P ? m : P,
        B = Object.create($.prototype),
        N = new d(A || []);
      return (
        (B._invoke = (function (k, K, S) {
          var j = 'suspendedStart';
          return function (le, jl) {
            if (j === 'executing')
              throw new Error('Generator is already running');
            if (j === 'completed') {
              if (le === 'throw') throw jl;
              return oe();
            }
            for (S.method = le, S.arg = jl; ; ) {
              var Ll = S.delegate;
              if (Ll) {
                var uo = R(Ll, S);
                if (uo) {
                  if (uo === y) continue;
                  return uo;
                }
              }
              if (S.method === 'next') S.sent = S._sent = S.arg;
              else if (S.method === 'throw') {
                if (j === 'suspendedStart') throw ((j = 'completed'), S.arg);
                S.dispatchException(S.arg);
              } else S.method === 'return' && S.abrupt('return', S.arg);
              j = 'executing';
              var br = p(k, K, S);
              if (br.type === 'normal') {
                if (
                  ((j = S.done ? 'completed' : 'suspendedYield'), br.arg === y)
                )
                  continue;
                return { value: br.arg, done: S.done };
              }
              br.type === 'throw' &&
                ((j = 'completed'), (S.method = 'throw'), (S.arg = br.arg));
            }
          };
        })(w, T, N)),
        B
      );
    }
    function p(w, m, T) {
      try {
        return { type: 'normal', arg: w.call(m, T) };
      } catch (A) {
        return { type: 'throw', arg: A };
      }
    }
    a.wrap = f;
    var y = {};
    function P() {}
    function v() {}
    function E() {}
    var h = {};
    c(h, u, function () {
      return this;
    });
    var _ = Object.getPrototypeOf,
      q = _ && _(_(ne([])));
    q && q !== n && o.call(q, u) && (h = q);
    var x = (E.prototype = P.prototype = Object.create(h));
    function M(w) {
      ['next', 'throw', 'return'].forEach(function (m) {
        c(w, m, function (T) {
          return this._invoke(m, T);
        });
      });
    }
    function b(w, m) {
      function T($, B, N, k) {
        var K = p(w[$], w, B);
        if (K.type !== 'throw') {
          var S = K.arg,
            j = S.value;
          return j && r(j) == 'object' && o.call(j, '__await')
            ? m.resolve(j.__await).then(
                function (le) {
                  T('next', le, N, k);
                },
                function (le) {
                  T('throw', le, N, k);
                }
              )
            : m.resolve(j).then(
                function (le) {
                  (S.value = le), N(S);
                },
                function (le) {
                  return T('throw', le, N, k);
                }
              );
        }
        k(K.arg);
      }
      var A;
      this._invoke = function ($, B) {
        function N() {
          return new m(function (k, K) {
            T($, B, k, K);
          });
        }
        return (A = A ? A.then(N, N) : N());
      };
    }
    function R(w, m) {
      var T = w.iterator[m.method];
      if (T === void 0) {
        if (((m.delegate = null), m.method === 'throw')) {
          if (
            w.iterator.return &&
            ((m.method = 'return'),
            (m.arg = void 0),
            R(w, m),
            m.method === 'throw')
          )
            return y;
          (m.method = 'throw'),
            (m.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            ));
        }
        return y;
      }
      var A = p(T, w.iterator, m.arg);
      if (A.type === 'throw')
        return (m.method = 'throw'), (m.arg = A.arg), (m.delegate = null), y;
      var $ = A.arg;
      return $
        ? $.done
          ? ((m[w.resultName] = $.value),
            (m.next = w.nextLoc),
            m.method !== 'return' && ((m.method = 'next'), (m.arg = void 0)),
            (m.delegate = null),
            y)
          : $
        : ((m.method = 'throw'),
          (m.arg = new TypeError('iterator result is not an object')),
          (m.delegate = null),
          y);
    }
    function O(w) {
      var m = { tryLoc: w[0] };
      1 in w && (m.catchLoc = w[1]),
        2 in w && ((m.finallyLoc = w[2]), (m.afterLoc = w[3])),
        this.tryEntries.push(m);
    }
    function U(w) {
      var m = w.completion || {};
      (m.type = 'normal'), delete m.arg, (w.completion = m);
    }
    function d(w) {
      (this.tryEntries = [{ tryLoc: 'root' }]),
        w.forEach(O, this),
        this.reset(!0);
    }
    function ne(w) {
      if (w) {
        var m = w[u];
        if (m) return m.call(w);
        if (typeof w.next == 'function') return w;
        if (!isNaN(w.length)) {
          var T = -1,
            A = function $() {
              for (; ++T < w.length; )
                if (o.call(w, T)) return ($.value = w[T]), ($.done = !1), $;
              return ($.value = void 0), ($.done = !0), $;
            };
          return (A.next = A);
        }
      }
      return { next: oe };
    }
    function oe() {
      return { value: void 0, done: !0 };
    }
    return (
      (v.prototype = E),
      c(x, 'constructor', E),
      c(E, 'constructor', v),
      (v.displayName = c(E, s, 'GeneratorFunction')),
      (a.isGeneratorFunction = function (w) {
        var m = typeof w == 'function' && w.constructor;
        return (
          !!m && (m === v || (m.displayName || m.name) === 'GeneratorFunction')
        );
      }),
      (a.mark = function (w) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(w, E)
            : ((w.__proto__ = E), c(w, s, 'GeneratorFunction')),
          (w.prototype = Object.create(x)),
          w
        );
      }),
      (a.awrap = function (w) {
        return { __await: w };
      }),
      M(b.prototype),
      c(b.prototype, i, function () {
        return this;
      }),
      (a.AsyncIterator = b),
      (a.async = function (w, m, T, A, $) {
        $ === void 0 && ($ = Promise);
        var B = new b(f(w, m, T, A), $);
        return a.isGeneratorFunction(m)
          ? B
          : B.next().then(function (N) {
              return N.done ? N.value : B.next();
            });
      }),
      M(x),
      c(x, s, 'Generator'),
      c(x, u, function () {
        return this;
      }),
      c(x, 'toString', function () {
        return '[object Generator]';
      }),
      (a.keys = function (w) {
        var m = [];
        for (var T in w) m.push(T);
        return (
          m.reverse(),
          function A() {
            for (; m.length; ) {
              var $ = m.pop();
              if ($ in w) return (A.value = $), (A.done = !1), A;
            }
            return (A.done = !0), A;
          }
        );
      }),
      (a.values = ne),
      (d.prototype = {
        constructor: d,
        reset: function (m) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = 'next'),
            (this.arg = void 0),
            this.tryEntries.forEach(U),
            !m)
          )
            for (var T in this)
              T.charAt(0) === 't' &&
                o.call(this, T) &&
                !isNaN(+T.slice(1)) &&
                (this[T] = void 0);
        },
        stop: function () {
          this.done = !0;
          var m = this.tryEntries[0].completion;
          if (m.type === 'throw') throw m.arg;
          return this.rval;
        },
        dispatchException: function (m) {
          if (this.done) throw m;
          var T = this;
          function A(S, j) {
            return (
              (N.type = 'throw'),
              (N.arg = m),
              (T.next = S),
              j && ((T.method = 'next'), (T.arg = void 0)),
              !!j
            );
          }
          for (var $ = this.tryEntries.length - 1; $ >= 0; --$) {
            var B = this.tryEntries[$],
              N = B.completion;
            if (B.tryLoc === 'root') return A('end');
            if (B.tryLoc <= this.prev) {
              var k = o.call(B, 'catchLoc'),
                K = o.call(B, 'finallyLoc');
              if (k && K) {
                if (this.prev < B.catchLoc) return A(B.catchLoc, !0);
                if (this.prev < B.finallyLoc) return A(B.finallyLoc);
              } else if (k) {
                if (this.prev < B.catchLoc) return A(B.catchLoc, !0);
              } else {
                if (!K)
                  throw new Error('try statement without catch or finally');
                if (this.prev < B.finallyLoc) return A(B.finallyLoc);
              }
            }
          }
        },
        abrupt: function (m, T) {
          for (var A = this.tryEntries.length - 1; A >= 0; --A) {
            var $ = this.tryEntries[A];
            if (
              $.tryLoc <= this.prev &&
              o.call($, 'finallyLoc') &&
              this.prev < $.finallyLoc
            ) {
              var B = $;
              break;
            }
          }
          B &&
            (m === 'break' || m === 'continue') &&
            B.tryLoc <= T &&
            T <= B.finallyLoc &&
            (B = null);
          var N = B ? B.completion : {};
          return (
            (N.type = m),
            (N.arg = T),
            B
              ? ((this.method = 'next'), (this.next = B.finallyLoc), y)
              : this.complete(N)
          );
        },
        complete: function (m, T) {
          if (m.type === 'throw') throw m.arg;
          return (
            m.type === 'break' || m.type === 'continue'
              ? (this.next = m.arg)
              : m.type === 'return'
              ? ((this.rval = this.arg = m.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : m.type === 'normal' && T && (this.next = T),
            y
          );
        },
        finish: function (m) {
          for (var T = this.tryEntries.length - 1; T >= 0; --T) {
            var A = this.tryEntries[T];
            if (A.finallyLoc === m)
              return this.complete(A.completion, A.afterLoc), U(A), y;
          }
        },
        catch: function (m) {
          for (var T = this.tryEntries.length - 1; T >= 0; --T) {
            var A = this.tryEntries[T];
            if (A.tryLoc === m) {
              var $ = A.completion;
              if ($.type === 'throw') {
                var B = $.arg;
                U(A);
              }
              return B;
            }
          }
          throw new Error('illegal catch attempt');
        },
        delegateYield: function (m, T, A) {
          return (
            (this.delegate = { iterator: ne(m), resultName: T, nextLoc: A }),
            this.method === 'next' && (this.arg = void 0),
            y
          );
        }
      }),
      a
    );
  }
  (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
})(Gu);
var Zr = Gu.exports(),
  tr = Zr;
try {
  regeneratorRuntime = Zr;
} catch {
  typeof globalThis == 'object'
    ? (globalThis.regeneratorRuntime = Zr)
    : Function('r', 'regeneratorRuntime = r')(Zr);
}
var Yu = { exports: {} };
(function (e) {
  var r = (function () {
    var t = String.fromCharCode,
      a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
      n = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
      o = {};
    function l(i, s) {
      if (!o[i]) {
        o[i] = {};
        for (var c = 0; c < i.length; c++) o[i][i.charAt(c)] = c;
      }
      return o[i][s];
    }
    var u = {
      compressToBase64: function (i) {
        if (i == null) return '';
        var s = u._compress(i, 6, function (c) {
          return a.charAt(c);
        });
        switch (s.length % 4) {
          default:
          case 0:
            return s;
          case 1:
            return s + '===';
          case 2:
            return s + '==';
          case 3:
            return s + '=';
        }
      },
      decompressFromBase64: function (i) {
        return i == null
          ? ''
          : i == ''
          ? null
          : u._decompress(i.length, 32, function (s) {
              return l(a, i.charAt(s));
            });
      },
      compressToUTF16: function (i) {
        return i == null
          ? ''
          : u._compress(i, 15, function (s) {
              return t(s + 32);
            }) + ' ';
      },
      decompressFromUTF16: function (i) {
        return i == null
          ? ''
          : i == ''
          ? null
          : u._decompress(i.length, 16384, function (s) {
              return i.charCodeAt(s) - 32;
            });
      },
      compressToUint8Array: function (i) {
        for (
          var s = u.compress(i),
            c = new Uint8Array(s.length * 2),
            f = 0,
            p = s.length;
          f < p;
          f++
        ) {
          var y = s.charCodeAt(f);
          (c[f * 2] = y >>> 8), (c[f * 2 + 1] = y % 256);
        }
        return c;
      },
      decompressFromUint8Array: function (i) {
        if (i == null) return u.decompress(i);
        for (var s = new Array(i.length / 2), c = 0, f = s.length; c < f; c++)
          s[c] = i[c * 2] * 256 + i[c * 2 + 1];
        var p = [];
        return (
          s.forEach(function (y) {
            p.push(t(y));
          }),
          u.decompress(p.join(''))
        );
      },
      compressToEncodedURIComponent: function (i) {
        return i == null
          ? ''
          : u._compress(i, 6, function (s) {
              return n.charAt(s);
            });
      },
      decompressFromEncodedURIComponent: function (i) {
        return i == null
          ? ''
          : i == ''
          ? null
          : ((i = i.replace(/ /g, '+')),
            u._decompress(i.length, 32, function (s) {
              return l(n, i.charAt(s));
            }));
      },
      compress: function (i) {
        return u._compress(i, 16, function (s) {
          return t(s);
        });
      },
      _compress: function (i, s, c) {
        if (i == null) return '';
        var f,
          p,
          y = {},
          P = {},
          v = '',
          E = '',
          h = '',
          _ = 2,
          q = 3,
          x = 2,
          M = [],
          b = 0,
          R = 0,
          O;
        for (O = 0; O < i.length; O += 1)
          if (
            ((v = i.charAt(O)),
            Object.prototype.hasOwnProperty.call(y, v) ||
              ((y[v] = q++), (P[v] = !0)),
            (E = h + v),
            Object.prototype.hasOwnProperty.call(y, E))
          )
            h = E;
          else {
            if (Object.prototype.hasOwnProperty.call(P, h)) {
              if (h.charCodeAt(0) < 256) {
                for (f = 0; f < x; f++)
                  (b = b << 1),
                    R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++;
                for (p = h.charCodeAt(0), f = 0; f < 8; f++)
                  (b = (b << 1) | (p & 1)),
                    R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
                    (p = p >> 1);
              } else {
                for (p = 1, f = 0; f < x; f++)
                  (b = (b << 1) | p),
                    R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
                    (p = 0);
                for (p = h.charCodeAt(0), f = 0; f < 16; f++)
                  (b = (b << 1) | (p & 1)),
                    R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
                    (p = p >> 1);
              }
              _--, _ == 0 && ((_ = Math.pow(2, x)), x++), delete P[h];
            } else
              for (p = y[h], f = 0; f < x; f++)
                (b = (b << 1) | (p & 1)),
                  R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
                  (p = p >> 1);
            _--,
              _ == 0 && ((_ = Math.pow(2, x)), x++),
              (y[E] = q++),
              (h = String(v));
          }
        if (h !== '') {
          if (Object.prototype.hasOwnProperty.call(P, h)) {
            if (h.charCodeAt(0) < 256) {
              for (f = 0; f < x; f++)
                (b = b << 1),
                  R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++;
              for (p = h.charCodeAt(0), f = 0; f < 8; f++)
                (b = (b << 1) | (p & 1)),
                  R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
                  (p = p >> 1);
            } else {
              for (p = 1, f = 0; f < x; f++)
                (b = (b << 1) | p),
                  R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
                  (p = 0);
              for (p = h.charCodeAt(0), f = 0; f < 16; f++)
                (b = (b << 1) | (p & 1)),
                  R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
                  (p = p >> 1);
            }
            _--, _ == 0 && ((_ = Math.pow(2, x)), x++), delete P[h];
          } else
            for (p = y[h], f = 0; f < x; f++)
              (b = (b << 1) | (p & 1)),
                R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
                (p = p >> 1);
          _--, _ == 0 && ((_ = Math.pow(2, x)), x++);
        }
        for (p = 2, f = 0; f < x; f++)
          (b = (b << 1) | (p & 1)),
            R == s - 1 ? ((R = 0), M.push(c(b)), (b = 0)) : R++,
            (p = p >> 1);
        for (;;)
          if (((b = b << 1), R == s - 1)) {
            M.push(c(b));
            break;
          } else R++;
        return M.join('');
      },
      decompress: function (i) {
        return i == null
          ? ''
          : i == ''
          ? null
          : u._decompress(i.length, 32768, function (s) {
              return i.charCodeAt(s);
            });
      },
      _decompress: function (i, s, c) {
        var f = [],
          p = 4,
          y = 4,
          P = 3,
          v = '',
          E = [],
          h,
          _,
          q,
          x,
          M,
          b,
          R,
          O = { val: c(0), position: s, index: 1 };
        for (h = 0; h < 3; h += 1) f[h] = h;
        for (q = 0, M = Math.pow(2, 2), b = 1; b != M; )
          (x = O.val & O.position),
            (O.position >>= 1),
            O.position == 0 && ((O.position = s), (O.val = c(O.index++))),
            (q |= (x > 0 ? 1 : 0) * b),
            (b <<= 1);
        switch (q) {
          case 0:
            for (q = 0, M = Math.pow(2, 8), b = 1; b != M; )
              (x = O.val & O.position),
                (O.position >>= 1),
                O.position == 0 && ((O.position = s), (O.val = c(O.index++))),
                (q |= (x > 0 ? 1 : 0) * b),
                (b <<= 1);
            R = t(q);
            break;
          case 1:
            for (q = 0, M = Math.pow(2, 16), b = 1; b != M; )
              (x = O.val & O.position),
                (O.position >>= 1),
                O.position == 0 && ((O.position = s), (O.val = c(O.index++))),
                (q |= (x > 0 ? 1 : 0) * b),
                (b <<= 1);
            R = t(q);
            break;
          case 2:
            return '';
        }
        for (f[3] = R, _ = R, E.push(R); ; ) {
          if (O.index > i) return '';
          for (q = 0, M = Math.pow(2, P), b = 1; b != M; )
            (x = O.val & O.position),
              (O.position >>= 1),
              O.position == 0 && ((O.position = s), (O.val = c(O.index++))),
              (q |= (x > 0 ? 1 : 0) * b),
              (b <<= 1);
          switch ((R = q)) {
            case 0:
              for (q = 0, M = Math.pow(2, 8), b = 1; b != M; )
                (x = O.val & O.position),
                  (O.position >>= 1),
                  O.position == 0 && ((O.position = s), (O.val = c(O.index++))),
                  (q |= (x > 0 ? 1 : 0) * b),
                  (b <<= 1);
              (f[y++] = t(q)), (R = y - 1), p--;
              break;
            case 1:
              for (q = 0, M = Math.pow(2, 16), b = 1; b != M; )
                (x = O.val & O.position),
                  (O.position >>= 1),
                  O.position == 0 && ((O.position = s), (O.val = c(O.index++))),
                  (q |= (x > 0 ? 1 : 0) * b),
                  (b <<= 1);
              (f[y++] = t(q)), (R = y - 1), p--;
              break;
            case 2:
              return E.join('');
          }
          if ((p == 0 && ((p = Math.pow(2, P)), P++), f[R])) v = f[R];
          else if (R === y) v = _ + _.charAt(0);
          else return null;
          E.push(v),
            (f[y++] = _ + v.charAt(0)),
            p--,
            (_ = v),
            p == 0 && ((p = Math.pow(2, P)), P++);
        }
      }
    };
    return u;
  })();
  e != null && (e.exports = r);
})(Yu);
function Xu(e) {
  return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
var w_ = function (r, t, a, n, o, l, u) {
    var i = n + a.indent,
      s = a.colors;
    return r
      .map(function (c) {
        var f = t[c],
          p = u(f, a, i, o, l);
        return (
          typeof f != 'string' &&
            (p.indexOf(`
`) !== -1 && (p = a.spacingOuter + i + p + a.spacingOuter + n),
            (p = '{' + p + '}')),
          a.spacingInner +
            n +
            s.prop.open +
            c +
            s.prop.close +
            '=' +
            s.value.open +
            p +
            s.value.close
        );
      })
      .join('');
  },
  C_ = 3,
  P_ = function (r, t, a, n, o, l) {
    return r
      .map(function (u) {
        var i = typeof u == 'string' ? Ju(u, t) : l(u, t, a, n, o);
        return i === '' &&
          typeof u == 'object' &&
          u !== null &&
          u.nodeType !== C_
          ? ''
          : t.spacingOuter + a + i;
      })
      .join('');
  },
  Ju = function (r, t) {
    var a = t.colors.content;
    return a.open + Xu(r) + a.close;
  },
  q_ = function (r, t) {
    var a = t.colors.comment;
    return a.open + '<!--' + Xu(r) + '-->' + a.close;
  },
  O_ = function (r, t, a, n, o) {
    var l = n.colors.tag;
    return (
      l.open +
      '<' +
      r +
      (t && l.close + t + n.spacingOuter + o + l.open) +
      (a
        ? '>' + l.close + a + n.spacingOuter + o + l.open + '</' + r
        : (t && !n.min ? '' : ' ') + '/') +
      '>' +
      l.close
    );
  },
  T_ = function (r, t) {
    var a = t.colors.tag;
    return a.open + '<' + r + a.close + ' \u2026' + a.open + ' />' + a.close;
  },
  x_ = 1,
  Zu = 3,
  es = 8,
  rs = 11,
  M_ = /^((HTML|SVG)\w*)?Element$/,
  A_ = function (r) {
    var t = r.constructor.name,
      a = r.nodeType,
      n = r.tagName,
      o =
        (typeof n == 'string' && n.includes('-')) ||
        (typeof r.hasAttribute == 'function' && r.hasAttribute('is'));
    return (
      (a === x_ && (M_.test(t) || o)) ||
      (a === Zu && t === 'Text') ||
      (a === es && t === 'Comment') ||
      (a === rs && t === 'DocumentFragment')
    );
  };
function $_(e) {
  return e.nodeType === Zu;
}
function S_(e) {
  return e.nodeType === es;
}
function _o(e) {
  return e.nodeType === rs;
}
function B_(e) {
  return {
    test: function (t) {
      var a;
      return (
        (t == null || (a = t.constructor) == null ? void 0 : a.name) && A_(t)
      );
    },
    serialize: function (t, a, n, o, l, u) {
      if ($_(t)) return Ju(t.data, a);
      if (S_(t)) return q_(t.data, a);
      var i = _o(t) ? 'DocumentFragment' : t.tagName.toLowerCase();
      return ++o > a.maxDepth
        ? T_(i, a)
        : O_(
            i,
            w_(
              _o(t)
                ? []
                : Array.from(t.attributes)
                    .map(function (s) {
                      return s.name;
                    })
                    .sort(),
              _o(t)
                ? {}
                : Array.from(t.attributes).reduce(function (s, c) {
                    return (s[c.name] = c.value), s;
                  }, {}),
              a,
              n + a.indent,
              o,
              l,
              u
            ),
            P_(
              Array.prototype.slice.call(t.childNodes || t.children).filter(e),
              a,
              n + a.indent,
              o,
              l,
              u
            ),
            a,
            n
          );
    }
  };
}
var ts = null,
  al = null,
  nl = null;
try {
  var Ro = module && module.require;
  (al = Ro.call(module, 'fs').readFileSync),
    (nl = Ro.call(module, '@babel/code-frame').codeFrameColumns),
    (ts = Ro.call(module, 'chalk'));
} catch {}
function I_(e) {
  var r = e.indexOf('(') + 1,
    t = e.indexOf(')'),
    a = e.slice(r, t),
    n = a.split(':'),
    o = [n[0], parseInt(n[1], 10), parseInt(n[2], 10)],
    l = o[0],
    u = o[1],
    i = o[2],
    s = '';
  try {
    s = al(l, 'utf-8');
  } catch {
    return '';
  }
  var c = nl(
    s,
    { start: { line: u, column: i } },
    { highlightCode: !0, linesBelow: 0 }
  );
  return (
    ts.dim(a) +
    `
` +
    c +
    `
`
  );
}
function k_() {
  if (!al || !nl) return '';
  var e = new Error(),
    r = e.stack
      .split(
        `
`
      )
      .slice(1)
      .find(function (t) {
        return !t.includes('node_modules/');
      });
  return I_(r);
}
var as = 3;
function wo() {
  return typeof jest != 'undefined' && jest !== null
    ? setTimeout._isMockFunction === !0 ||
        Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    : !1;
}
function ol() {
  if (typeof window == 'undefined')
    throw new Error('Could not find default container');
  return window.document;
}
function ns(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error(
        'It looks like the window object is not available for the provided node.'
      )
    : e.then instanceof Function
    ? new Error(
        'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?'
      )
    : Array.isArray(e)
    ? new Error(
        'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?'
      )
    : typeof e.debug == 'function' &&
      typeof e.logTestingPlaygroundURL == 'function'
    ? new Error(
        'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?'
      )
    : new Error(
        'The given node is not an Element, the node type is: ' + typeof e + '.'
      );
}
function _e(e) {
  if (
    !e ||
    typeof e.querySelector != 'function' ||
    typeof e.querySelectorAll != 'function'
  )
    throw new TypeError(
      'Expected container to be an Element, a Document or a DocumentFragment but got ' +
        r(e) +
        '.'
    );
  function r(t) {
    return typeof t == 'object'
      ? t === null
        ? 'null'
        : t.constructor.name
      : typeof t;
  }
}
var N_ = ['filterNode'],
  j_ = function () {
    return (
      typeof process != 'undefined' &&
      process.versions !== void 0 &&
      process.versions.node !== void 0
    );
  },
  L_ = Zo.DOMCollection,
  D_ = 1,
  F_ = 8;
function V_(e) {
  return (
    e.nodeType !== F_ && (e.nodeType !== D_ || !e.matches(L().defaultIgnore))
  );
}
function wr(e, r, t) {
  if (
    (t === void 0 && (t = {}),
    e || (e = ol().body),
    typeof r != 'number' &&
      (r = (typeof process != 'undefined' && {}.DEBUG_PRINT_LIMIT) || 7e3),
    r === 0)
  )
    return '';
  e.documentElement && (e = e.documentElement);
  var a = typeof e;
  if (
    (a === 'object' ? (a = e.constructor.name) : (e = {}), !('outerHTML' in e))
  )
    throw new TypeError('Expected an element or document but got ' + a);
  var n = t,
    o = n.filterNode,
    l = o === void 0 ? V_ : o,
    u = Mo(n, N_),
    i = Ru(
      e,
      me({ plugins: [B_(l), L_], printFunctionName: !1, highlight: j_() }, u)
    );
  return r !== void 0 && e.outerHTML.length > r ? i.slice(0, r) + '...' : i;
}
var $o = function () {
    var r = k_();
    console.log(
      r
        ? wr.apply(void 0, arguments) +
            `

` +
            r
        : wr.apply(void 0, arguments)
    );
  },
  ar = {
    testIdAttribute: 'data-testid',
    asyncUtilTimeout: 1e3,
    asyncWrapper: function (r) {
      return r();
    },
    unstable_advanceTimersWrapper: function (r) {
      return r();
    },
    eventWrapper: function (r) {
      return r();
    },
    defaultHidden: !1,
    defaultIgnore: 'script, style',
    showOriginalStackTrace: !1,
    throwSuggestions: !1,
    getElementError: function (r, t) {
      var a = wr(t),
        n = new Error(
          [
            r,
            `Ignored nodes: comments, <script />, <style />
` + a
          ].filter(Boolean).join(`

`)
        );
      return (n.name = 'TestingLibraryElementError'), n;
    },
    _disableExpensiveErrorDiagnostics: !1,
    computedStyleSupportsPseudoElements: !1
  };
function U_(e) {
  try {
    return (ar._disableExpensiveErrorDiagnostics = !0), e();
  } finally {
    ar._disableExpensiveErrorDiagnostics = !1;
  }
}
function H_(e) {
  typeof e == 'function' && (e = e(ar)), (ar = me({}, ar, e));
}
function L() {
  return ar;
}
var W_ = [
  'button',
  'meter',
  'output',
  'progress',
  'select',
  'textarea',
  'input'
];
function os(e) {
  return W_.includes(e.nodeName.toLowerCase())
    ? ''
    : e.nodeType === as
    ? e.textContent
    : Array.from(e.childNodes)
        .map(function (r) {
          return os(r);
        })
        .join('');
}
function So(e) {
  var r;
  return (
    e.tagName.toLowerCase() === 'label'
      ? (r = os(e))
      : (r = e.value || e.textContent),
    r
  );
}
function ls(e) {
  if (e.labels !== void 0) {
    var r;
    return (r = e.labels) != null ? r : [];
  }
  if (!z_(e)) return [];
  var t = e.ownerDocument.querySelectorAll('label');
  return Array.from(t).filter(function (a) {
    return a.control === e;
  });
}
function z_(e) {
  return (
    /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
    (e.tagName === 'INPUT' && e.getAttribute('type') !== 'hidden')
  );
}
function is(e, r, t) {
  var a = t === void 0 ? {} : t,
    n = a.selector,
    o = n === void 0 ? '*' : n,
    l = r.getAttribute('aria-labelledby'),
    u = l ? l.split(' ') : [];
  return u.length
    ? u.map(function (i) {
        var s = e.querySelector('[id="' + i + '"]');
        return s
          ? { content: So(s), formControl: null }
          : { content: '', formControl: null };
      })
    : Array.from(ls(r)).map(function (i) {
        var s = So(i),
          c = 'button, input, meter, output, progress, select, textarea',
          f = Array.from(i.querySelectorAll(c)).filter(function (p) {
            return p.matches(o);
          })[0];
        return { content: s, formControl: f };
      });
}
function us(e) {
  if (e == null)
    throw new Error(
      'It looks like ' +
        e +
        ' was passed instead of a matcher. Did you do something like getByText(' +
        e +
        ')?'
    );
}
function He(e, r, t, a) {
  if (typeof e != 'string') return !1;
  us(t);
  var n = a(e);
  return typeof t == 'string' || typeof t == 'number'
    ? n.toLowerCase().includes(t.toString().toLowerCase())
    : typeof t == 'function'
    ? t(n, r)
    : ss(t, n);
}
function he(e, r, t, a) {
  if (typeof e != 'string') return !1;
  us(t);
  var n = a(e);
  return t instanceof Function
    ? t(n, r)
    : t instanceof RegExp
    ? ss(t, n)
    : n === String(t);
}
function ll(e) {
  var r = e === void 0 ? {} : e,
    t = r.trim,
    a = t === void 0 ? !0 : t,
    n = r.collapseWhitespace,
    o = n === void 0 ? !0 : n;
  return function (l) {
    var u = l;
    return (u = a ? u.trim() : u), (u = o ? u.replace(/\s+/g, ' ') : u), u;
  };
}
function je(e) {
  var r = e.trim,
    t = e.collapseWhitespace,
    a = e.normalizer;
  if (!a) return ll({ trim: r, collapseWhitespace: t });
  if (typeof r != 'undefined' || typeof t != 'undefined')
    throw new Error(
      'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer'
    );
  return a;
}
function ss(e, r) {
  var t = e.test(r);
  return (
    e.global &&
      e.lastIndex !== 0 &&
      (console.warn(
        'To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.'
      ),
      (e.lastIndex = 0)),
    t
  );
}
function qr(e) {
  return e.matches('input[type=submit], input[type=button], input[type=reset]')
    ? e.value
    : Array.from(e.childNodes)
        .filter(function (r) {
          return r.nodeType === as && Boolean(r.textContent);
        })
        .map(function (r) {
          return r.textContent;
        })
        .join('');
}
function ds(e, r) {
  var t =
    (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t) return (t = t.call(e)).next.bind(t);
  if (
    Array.isArray(e) ||
    (t = K_(e)) ||
    (r && e && typeof e.length == 'number')
  ) {
    t && (e = t);
    var a = 0;
    return function () {
      return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K_(e, r) {
  if (!!e) {
    if (typeof e == 'string') return Ei(e, r);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return Ei(e, r);
  }
}
function Ei(e, r) {
  (r == null || r > e.length) && (r = e.length);
  for (var t = 0, a = new Array(r); t < r; t++) a[t] = e[t];
  return a;
}
var G_ = Q_(Ku);
function cs(e) {
  if (e.hidden === !0 || e.getAttribute('aria-hidden') === 'true') return !0;
  var r = e.ownerDocument.defaultView;
  return r.getComputedStyle(e).display === 'none';
}
function Hn(e, r) {
  r === void 0 && (r = {});
  var t = r,
    a = t.isSubtreeInaccessible,
    n = a === void 0 ? cs : a,
    o = e.ownerDocument.defaultView;
  if (o.getComputedStyle(e).visibility === 'hidden') return !0;
  for (var l = e; l; ) {
    if (n(l)) return !0;
    l = l.parentElement;
  }
  return !1;
}
function il(e) {
  for (var r = ds(G_), t; !(t = r()).done; ) {
    var a = t.value,
      n = a.match,
      o = a.roles;
    if (n(e)) return [].concat(o);
  }
  return [];
}
function Q_(e) {
  function r(f) {
    var p = f.name,
      y = f.attributes;
    return (
      '' +
      p +
      y
        .map(function (P) {
          var v = P.name,
            E = P.value,
            h = P.constraints,
            _ = h === void 0 ? [] : h,
            q = _.indexOf('undefined') !== -1;
          return q
            ? ':not([' + v + '])'
            : E
            ? '[' + v + '="' + E + '"]'
            : '[' + v + ']';
        })
        .join('')
    );
  }
  function t(f) {
    var p = f.attributes,
      y = p === void 0 ? [] : p;
    return y.length;
  }
  function a(f, p) {
    var y = f.specificity,
      P = p.specificity;
    return P - y;
  }
  function n(f) {
    return function (p) {
      var y = f.attributes,
        P = y === void 0 ? [] : y,
        v = P.findIndex(function (E) {
          return E.value && E.name === 'type' && E.value === 'text';
        });
      return v >= 0 &&
        ((P = [].concat(P.slice(0, v), P.slice(v + 1))), p.type !== 'text')
        ? !1
        : p.matches(r(me({}, f, { attributes: P })));
    };
  }
  for (var o = [], l = ds(e.entries()), u; !(u = l()).done; ) {
    var i = u.value,
      s = i[0],
      c = i[1];
    o = [].concat(o, [
      { match: n(s), roles: Array.from(c), specificity: t(s) }
    ]);
  }
  return o.sort(a);
}
function fs(e, r) {
  var t = r === void 0 ? {} : r,
    a = t.hidden,
    n = a === void 0 ? !1 : a;
  function o(l) {
    return [l].concat(
      Array.from(l.children).reduce(function (u, i) {
        return [].concat(u, o(i));
      }, [])
    );
  }
  return o(e)
    .filter(function (l) {
      return n === !1 ? Hn(l) === !1 : !0;
    })
    .reduce(function (l, u) {
      var i = [];
      return (
        u.hasAttribute('role')
          ? (i = u.getAttribute('role').split(' ').slice(0, 1))
          : (i = il(u)),
        i.reduce(function (s, c) {
          var f, p;
          return Array.isArray(s[c])
            ? me({}, s, ((f = {}), (f[c] = [].concat(s[c], [u])), f))
            : me({}, s, ((p = {}), (p[c] = [u]), p));
        }, l)
      );
    }, {});
}
function ps(e, r) {
  var t = r.hidden,
    a = r.includeDescription,
    n = fs(e, { hidden: t });
  return Object.entries(n)
    .filter(function (o) {
      var l = o[0];
      return l !== 'generic';
    })
    .map(function (o) {
      var l = o[0],
        u = o[1],
        i = '-'.repeat(50),
        s = u.map(function (c) {
          var f =
              'Name "' +
              rl(c, {
                computedStyleSupportsPseudoElements:
                  L().computedStyleSupportsPseudoElements
              }) +
              `":
`,
            p = wr(c.cloneNode(!1));
          if (a) {
            var y =
              'Description "' +
              Fu(c, {
                computedStyleSupportsPseudoElements:
                  L().computedStyleSupportsPseudoElements
              }) +
              `":
`;
            return '' + f + y + p;
          }
          return '' + f + p;
        }).join(`

`);
      return (
        l +
        `:

` +
        s +
        `

` +
        i
      );
    }).join(`
`);
}
var Y_ = function (r, t) {
  var a = t === void 0 ? {} : t,
    n = a.hidden,
    o = n === void 0 ? !1 : n;
  return console.log(ps(r, { hidden: o }));
};
function X_(e) {
  return e.tagName === 'OPTION' ? e.selected : Or(e, 'aria-selected');
}
function J_(e) {
  if (!('indeterminate' in e && e.indeterminate))
    return 'checked' in e ? e.checked : Or(e, 'aria-checked');
}
function Z_(e) {
  return Or(e, 'aria-pressed');
}
function eR(e) {
  var r, t;
  return (r =
    (t = Or(e, 'aria-current')) != null ? t : e.getAttribute('aria-current')) !=
    null
    ? r
    : !1;
}
function rR(e) {
  return Or(e, 'aria-expanded');
}
function Or(e, r) {
  var t = e.getAttribute(r);
  if (t === 'true') return !0;
  if (t === 'false') return !1;
}
function tR(e) {
  var r = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 },
    t = e.getAttribute('aria-level') && Number(e.getAttribute('aria-level'));
  return t || r[e.tagName];
}
var _i = ll();
function aR(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}
function Ri(e) {
  return new RegExp(aR(e.toLowerCase()), 'i');
}
function Pe(e, r, t, a) {
  var n = a.variant,
    o = a.name,
    l = '',
    u = {},
    i = [['Role', 'TestId'].includes(e) ? t : Ri(t)];
  o && (u.name = Ri(o)),
    e === 'Role' &&
      Hn(r) &&
      ((u.hidden = !0),
      (l = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
    Object.keys(u).length > 0 && i.push(u);
  var s = n + 'By' + e;
  return {
    queryName: e,
    queryMethod: s,
    queryArgs: i,
    variant: n,
    warning: l,
    toString: function () {
      l && console.warn(l);
      var f = i[0],
        p = i[1];
      return (
        (f = typeof f == 'string' ? "'" + f + "'" : f),
        (p = p
          ? ', { ' +
            Object.entries(p)
              .map(function (y) {
                var P = y[0],
                  v = y[1];
                return P + ': ' + v;
              })
              .join(', ') +
            ' }'
          : ''),
        s + '(' + f + p + ')'
      );
    }
  };
}
function qe(e, r, t) {
  return t && (!r || r.toLowerCase() === e.toLowerCase());
}
function ot(e, r, t) {
  var a, n;
  if ((r === void 0 && (r = 'get'), !e.matches(L().defaultIgnore))) {
    var o =
      (a = e.getAttribute('role')) != null
        ? a
        : (n = il(e)) == null
        ? void 0
        : n[0];
    if (o !== 'generic' && qe('Role', t, o))
      return Pe('Role', e, o, {
        variant: r,
        name: rl(e, {
          computedStyleSupportsPseudoElements:
            L().computedStyleSupportsPseudoElements
        })
      });
    var l = is(document, e)
      .map(function (p) {
        return p.content;
      })
      .join(' ');
    if (qe('LabelText', t, l)) return Pe('LabelText', e, l, { variant: r });
    var u = e.getAttribute('placeholder');
    if (qe('PlaceholderText', t, u))
      return Pe('PlaceholderText', e, u, { variant: r });
    var i = _i(qr(e));
    if (qe('Text', t, i)) return Pe('Text', e, i, { variant: r });
    if (qe('DisplayValue', t, e.value))
      return Pe('DisplayValue', e, _i(e.value), { variant: r });
    var s = e.getAttribute('alt');
    if (qe('AltText', t, s)) return Pe('AltText', e, s, { variant: r });
    var c = e.getAttribute('title');
    if (qe('Title', t, c)) return Pe('Title', e, c, { variant: r });
    var f = e.getAttribute(L().testIdAttribute);
    if (qe('TestId', t, f)) return Pe('TestId', e, f, { variant: r });
  }
}
function Gr(e, r) {
  e.stack = r.stack.replace(r.message, e.message);
}
function nR(e, r) {
  var t = r.container,
    a = t === void 0 ? ol() : t,
    n = r.timeout,
    o = n === void 0 ? L().asyncUtilTimeout : n,
    l = r.showOriginalStackTrace,
    u = l === void 0 ? L().showOriginalStackTrace : l,
    i = r.stackTraceError,
    s = r.interval,
    c = s === void 0 ? 50 : s,
    f = r.onTimeout,
    p =
      f === void 0
        ? function (v) {
            return (v.message = L().getElementError(v.message, a).message), v;
          }
        : f,
    y = r.mutationObserverOptions,
    P =
      y === void 0
        ? { subtree: !0, childList: !0, attributes: !0, characterData: !0 }
        : y;
  if (typeof e != 'function')
    throw new TypeError('Received `callback` arg must be a function');
  return new Promise(
    (function () {
      var v = Ao(
        tr.mark(function E(h, _) {
          var q, x, M, b, R, O, U, d, ne, oe, w, m, T, A, $, B;
          return tr.wrap(
            function (k) {
              for (;;)
                switch ((k.prev = k.next)) {
                  case 0:
                    if (
                      ((B = function () {
                        var S;
                        q
                          ? ((S = q),
                            !u &&
                              S.name === 'TestingLibraryElementError' &&
                              Gr(S, i))
                          : ((S = new Error('Timed out in waitFor.')),
                            u || Gr(S, i)),
                          T(p(S), null);
                      }),
                      ($ = function () {
                        if (R !== 'pending')
                          try {
                            var S = U_(e);
                            typeof (S == null ? void 0 : S.then) == 'function'
                              ? ((R = 'pending'),
                                S.then(
                                  function (j) {
                                    (R = 'resolved'), T(null, j);
                                  },
                                  function (j) {
                                    (R = 'rejected'), (q = j);
                                  }
                                ))
                              : T(null, S);
                          } catch (j) {
                            q = j;
                          }
                      }),
                      (A = function () {
                        if (wo()) {
                          var S = new Error(
                            "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
                          );
                          return u || Gr(S, i), _(S);
                        } else return $();
                      }),
                      (T = function (S, j) {
                        (b = !0),
                          clearTimeout(O),
                          U || (clearInterval(x), M.disconnect()),
                          S ? _(S) : h(j);
                      }),
                      (b = !1),
                      (R = 'idle'),
                      (O = setTimeout(B, o)),
                      (U = wo()),
                      !U)
                    ) {
                      k.next = 27;
                      break;
                    }
                    (d = L()), (ne = d.unstable_advanceTimersWrapper), $();
                  case 11:
                    if (b) {
                      k.next = 25;
                      break;
                    }
                    if (wo()) {
                      k.next = 17;
                      break;
                    }
                    return (
                      (oe = new Error(
                        "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830"
                      )),
                      u || Gr(oe, i),
                      _(oe),
                      k.abrupt('return')
                    );
                  case 17:
                    if (
                      (ne(function () {
                        jest.advanceTimersByTime(c);
                      }),
                      $(),
                      !b)
                    ) {
                      k.next = 21;
                      break;
                    }
                    return k.abrupt('break', 25);
                  case 21:
                    return (
                      (k.next = 23),
                      ne(
                        Ao(
                          tr.mark(function K() {
                            return tr.wrap(function (j) {
                              for (;;)
                                switch ((j.prev = j.next)) {
                                  case 0:
                                    return (
                                      (j.next = 2),
                                      new Promise(function (le) {
                                        setTimeout(le, 0),
                                          jest.advanceTimersByTime(0);
                                      })
                                    );
                                  case 2:
                                  case 'end':
                                    return j.stop();
                                }
                            }, K);
                          })
                        )
                      )
                    );
                  case 23:
                    k.next = 11;
                    break;
                  case 25:
                    k.next = 40;
                    break;
                  case 27:
                    (k.prev = 27), _e(a), (k.next = 35);
                    break;
                  case 31:
                    return (
                      (k.prev = 31),
                      (k.t0 = k.catch(27)),
                      _(k.t0),
                      k.abrupt('return')
                    );
                  case 35:
                    (x = setInterval(A, c)),
                      (w = ns(a)),
                      (m = w.MutationObserver),
                      (M = new m(A)),
                      M.observe(a, P),
                      $();
                  case 40:
                  case 'end':
                    return k.stop();
                }
            },
            E,
            null,
            [[27, 31]]
          );
        })
      );
      return function (E, h) {
        return v.apply(this, arguments);
      };
    })()
  );
}
function ul(e, r) {
  var t = new Error('STACK_TRACE_MESSAGE');
  return L().asyncWrapper(function () {
    return nR(e, me({ stackTraceError: t }, r));
  });
}
function Wn(e, r) {
  return L().getElementError(e, r);
}
function zn(e, r) {
  return Wn(
    e +
      '\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
    r
  );
}
function We(e, r, t, a) {
  var n = a === void 0 ? {} : a,
    o = n.exact,
    l = o === void 0 ? !0 : o,
    u = n.collapseWhitespace,
    i = n.trim,
    s = n.normalizer,
    c = l ? he : He,
    f = je({ collapseWhitespace: u, trim: i, normalizer: s });
  return Array.from(r.querySelectorAll('[' + e + ']')).filter(function (p) {
    return c(p.getAttribute(e), p, t, f);
  });
}
function vs(e, r, t, a) {
  var n = We(e, r, t, a);
  if (n.length > 1)
    throw zn('Found multiple elements by [' + e + '=' + t + ']', r);
  return n[0] || null;
}
function ur(e, r) {
  return function (t) {
    for (
      var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1;
      o < a;
      o++
    )
      n[o - 1] = arguments[o];
    var l = e.apply(void 0, [t].concat(n));
    if (l.length > 1) {
      var u = l.map(function (i) {
        return Wn(null, i).message;
      }).join(`

`);
      throw zn(
        r.apply(void 0, [t].concat(n)) +
          `

Here are the matching elements:

` +
          u,
        t
      );
    }
    return l[0] || null;
  };
}
function ms(e, r) {
  return L().getElementError(
    `A better query is available, try this:
` +
      e.toString() +
      `
`,
    r
  );
}
function sl(e, r) {
  return function (t) {
    for (
      var a = arguments.length, n = new Array(a > 1 ? a - 1 : 0), o = 1;
      o < a;
      o++
    )
      n[o - 1] = arguments[o];
    var l = e.apply(void 0, [t].concat(n));
    if (!l.length) throw L().getElementError(r.apply(void 0, [t].concat(n)), t);
    return l;
  };
}
function sr(e) {
  return function (r, t, a, n) {
    return ul(function () {
      return e(r, t, a);
    }, me({ container: r }, n));
  };
}
var ke = function (r, t, a) {
    return function (n) {
      for (
        var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), u = 1;
        u < o;
        u++
      )
        l[u - 1] = arguments[u];
      var i = r.apply(void 0, [n].concat(l)),
        s = l.slice(-1),
        c = s[0];
      c = c === void 0 ? {} : c;
      var f = c.suggest,
        p = f === void 0 ? L().throwSuggestions : f;
      if (i && p) {
        var y = ot(i, a);
        if (y && !t.endsWith(y.queryName)) throw ms(y.toString(), n);
      }
      return i;
    };
  },
  te = function (r, t, a) {
    return function (n) {
      for (
        var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), u = 1;
        u < o;
        u++
      )
        l[u - 1] = arguments[u];
      var i = r.apply(void 0, [n].concat(l)),
        s = l.slice(-1),
        c = s[0];
      c = c === void 0 ? {} : c;
      var f = c.suggest,
        p = f === void 0 ? L().throwSuggestions : f;
      if (i.length && p) {
        var y = [].concat(
          new Set(
            i.map(function (P) {
              var v;
              return (v = ot(P, a)) == null ? void 0 : v.toString();
            })
          )
        );
        if (y.length === 1 && !t.endsWith(ot(i[0], a).queryName))
          throw ms(y[0], n);
      }
      return i;
    };
  };
function Re(e, r, t) {
  var a = ke(ur(e, r), e.name, 'query'),
    n = sl(e, t),
    o = ur(n, r),
    l = ke(o, e.name, 'get'),
    u = te(n, e.name.replace('query', 'get'), 'getAll'),
    i = sr(te(n, e.name, 'findAll')),
    s = sr(ke(o, e.name, 'find'));
  return [a, u, l, i, s];
}
var oR = Object.freeze({
  __proto__: null,
  getElementError: Wn,
  wrapAllByQueryWithSuggestion: te,
  wrapSingleQueryWithSuggestion: ke,
  getMultipleElementsFoundError: zn,
  queryAllByAttribute: We,
  queryByAttribute: vs,
  makeSingleQuery: ur,
  makeGetAllQuery: sl,
  makeFindQuery: sr,
  buildQueries: Re
});
function lR(e) {
  return Array.from(e.querySelectorAll('label,input'))
    .map(function (r) {
      return { node: r, textToMatch: So(r) };
    })
    .filter(function (r) {
      var t = r.textToMatch;
      return t !== null;
    });
}
var iR = function (r, t, a) {
    var n = a === void 0 ? {} : a,
      o = n.exact,
      l = o === void 0 ? !0 : o,
      u = n.trim,
      i = n.collapseWhitespace,
      s = n.normalizer,
      c = l ? he : He,
      f = je({ collapseWhitespace: i, trim: u, normalizer: s }),
      p = lR(r);
    return p
      .filter(function (y) {
        var P = y.node,
          v = y.textToMatch;
        return c(v, P, t, f);
      })
      .map(function (y) {
        var P = y.node;
        return P;
      });
  },
  Cr = function (r, t, a) {
    var n = a === void 0 ? {} : a,
      o = n.selector,
      l = o === void 0 ? '*' : o,
      u = n.exact,
      i = u === void 0 ? !0 : u,
      s = n.collapseWhitespace,
      c = n.trim,
      f = n.normalizer;
    _e(r);
    var p = i ? he : He,
      y = je({ collapseWhitespace: s, trim: c, normalizer: f }),
      P = Array.from(r.querySelectorAll('*'))
        .filter(function (v) {
          return ls(v).length || v.hasAttribute('aria-labelledby');
        })
        .reduce(function (v, E) {
          var h = is(r, E, { selector: l });
          h.filter(function (q) {
            return Boolean(q.formControl);
          }).forEach(function (q) {
            p(q.content, q.formControl, t, y) &&
              q.formControl &&
              v.push(q.formControl);
          });
          var _ = h
            .filter(function (q) {
              return Boolean(q.content);
            })
            .map(function (q) {
              return q.content;
            });
          return (
            p(_.join(' '), E, t, y) && v.push(E),
            _.length > 1 &&
              _.forEach(function (q, x) {
                p(q, E, t, y) && v.push(E);
                var M = [].concat(_);
                M.splice(x, 1),
                  M.length > 1 && p(M.join(' '), E, t, y) && v.push(E);
              }),
            v
          );
        }, [])
        .concat(We('aria-label', r, t, { exact: i, normalizer: y }));
    return Array.from(new Set(P)).filter(function (v) {
      return v.matches(l);
    });
  },
  Ue = function (r, t) {
    for (
      var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), o = 2;
      o < a;
      o++
    )
      n[o - 2] = arguments[o];
    var l = Cr.apply(void 0, [r, t].concat(n));
    if (!l.length) {
      var u = iR.apply(void 0, [r, t].concat(n));
      if (u.length) {
        var i = u
          .map(function (s) {
            return uR(r, s);
          })
          .filter(function (s) {
            return !!s;
          });
        throw i.length
          ? L().getElementError(
              i.map(function (s) {
                return (
                  'Found a label with the text of: ' +
                  t +
                  ', however the element associated with this label (<' +
                  s +
                  ' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
                  s +
                  ' />, you can use aria-label or aria-labelledby instead.'
                );
              }).join(`

`),
              r
            )
          : L().getElementError(
              'Found a label with the text of: ' +
                t +
                `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
              r
            );
      } else
        throw L().getElementError(
          'Unable to find a label with the text of: ' + t,
          r
        );
    }
    return l;
  };
function uR(e, r) {
  var t = r.getAttribute('for');
  if (!t) return null;
  var a = e.querySelector('[id="' + t + '"]');
  return a ? a.tagName.toLowerCase() : null;
}
var bs = function (r, t) {
    return 'Found multiple elements with the text of: ' + t;
  },
  ys = ke(ur(Cr, bs), Cr.name, 'query'),
  hs = ur(Ue, bs),
  gs = sr(te(Ue, Ue.name, 'findAll')),
  Es = sr(ke(hs, Ue.name, 'find')),
  _s = te(Ue, Ue.name, 'getAll'),
  Rs = ke(hs, Ue.name, 'get'),
  ws = te(Cr, Cr.name, 'queryAll'),
  Bo = function () {
    for (var r = arguments.length, t = new Array(r), a = 0; a < r; a++)
      t[a] = arguments[a];
    return _e(t[0]), We.apply(void 0, ['placeholder'].concat(t));
  },
  sR = function (r, t) {
    return 'Found multiple elements with the placeholder text of: ' + t;
  },
  dR = function (r, t) {
    return 'Unable to find an element with the placeholder text of: ' + t;
  },
  Cs = te(Bo, Bo.name, 'queryAll'),
  Tr = Re(Bo, sR, dR),
  Ps = Tr[0],
  qs = Tr[1],
  Os = Tr[2],
  Ts = Tr[3],
  xs = Tr[4],
  Io = function (r, t, a) {
    var n = a === void 0 ? {} : a,
      o = n.selector,
      l = o === void 0 ? '*' : o,
      u = n.exact,
      i = u === void 0 ? !0 : u,
      s = n.collapseWhitespace,
      c = n.trim,
      f = n.ignore,
      p = f === void 0 ? L().defaultIgnore : f,
      y = n.normalizer;
    _e(r);
    var P = i ? he : He,
      v = je({ collapseWhitespace: s, trim: c, normalizer: y }),
      E = [];
    return (
      typeof r.matches == 'function' && r.matches(l) && (E = [r]),
      []
        .concat(E, Array.from(r.querySelectorAll(l)))
        .filter(function (h) {
          return !p || !h.matches(p);
        })
        .filter(function (h) {
          return P(qr(h), h, t, v);
        })
    );
  },
  cR = function (r, t) {
    return 'Found multiple elements with the text: ' + t;
  },
  fR = function (r, t, a) {
    a === void 0 && (a = {});
    var n = a,
      o = n.collapseWhitespace,
      l = n.trim,
      u = n.normalizer,
      i = je({ collapseWhitespace: o, trim: l, normalizer: u }),
      s = i(t.toString()),
      c = s !== t.toString();
    return (
      'Unable to find an element with the text: ' +
      (c ? s + " (normalized from '" + t + "')" : t) +
      '. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
    );
  },
  Ms = te(Io, Io.name, 'queryAll'),
  xr = Re(Io, cR, fR),
  As = xr[0],
  $s = xr[1],
  Ss = xr[2],
  Bs = xr[3],
  Is = xr[4],
  ko = function (r, t, a) {
    var n = a === void 0 ? {} : a,
      o = n.exact,
      l = o === void 0 ? !0 : o,
      u = n.collapseWhitespace,
      i = n.trim,
      s = n.normalizer;
    _e(r);
    var c = l ? he : He,
      f = je({ collapseWhitespace: u, trim: i, normalizer: s });
    return Array.from(r.querySelectorAll('input,textarea,select')).filter(
      function (p) {
        if (p.tagName === 'SELECT') {
          var y = Array.from(p.options).filter(function (P) {
            return P.selected;
          });
          return y.some(function (P) {
            return c(qr(P), P, t, f);
          });
        } else return c(p.value, p, t, f);
      }
    );
  },
  pR = function (r, t) {
    return 'Found multiple elements with the display value: ' + t + '.';
  },
  vR = function (r, t) {
    return 'Unable to find an element with the display value: ' + t + '.';
  },
  ks = te(ko, ko.name, 'queryAll'),
  Mr = Re(ko, pR, vR),
  Ns = Mr[0],
  js = Mr[1],
  Ls = Mr[2],
  Ds = Mr[3],
  Fs = Mr[4],
  mR = /^(img|input|area|.+-.+)$/i,
  No = function (r, t, a) {
    return (
      a === void 0 && (a = {}),
      _e(r),
      We('alt', r, t, a).filter(function (n) {
        return mR.test(n.tagName);
      })
    );
  },
  bR = function (r, t) {
    return 'Found multiple elements with the alt text: ' + t;
  },
  yR = function (r, t) {
    return 'Unable to find an element with the alt text: ' + t;
  },
  Vs = te(No, No.name, 'queryAll'),
  Ar = Re(No, bR, yR),
  Us = Ar[0],
  Hs = Ar[1],
  Ws = Ar[2],
  zs = Ar[3],
  Ks = Ar[4],
  hR = function (r) {
    var t;
    return (
      r.tagName.toLowerCase() === 'title' &&
      ((t = r.parentElement) == null ? void 0 : t.tagName.toLowerCase()) ===
        'svg'
    );
  },
  jo = function (r, t, a) {
    var n = a === void 0 ? {} : a,
      o = n.exact,
      l = o === void 0 ? !0 : o,
      u = n.collapseWhitespace,
      i = n.trim,
      s = n.normalizer;
    _e(r);
    var c = l ? he : He,
      f = je({ collapseWhitespace: u, trim: i, normalizer: s });
    return Array.from(r.querySelectorAll('[title], svg > title')).filter(
      function (p) {
        return (
          c(p.getAttribute('title'), p, t, f) || (hR(p) && c(qr(p), p, t, f))
        );
      }
    );
  },
  gR = function (r, t) {
    return 'Found multiple elements with the title: ' + t + '.';
  },
  ER = function (r, t) {
    return 'Unable to find an element with the title: ' + t + '.';
  },
  Gs = te(jo, jo.name, 'queryAll'),
  $r = Re(jo, gR, ER),
  Qs = $r[0],
  Ys = $r[1],
  Xs = $r[2],
  Js = $r[3],
  Zs = $r[4];
function Lo(e, r, t) {
  var a = t === void 0 ? {} : t,
    n = a.exact,
    o = n === void 0 ? !0 : n,
    l = a.collapseWhitespace,
    u = a.hidden,
    i = u === void 0 ? L().defaultHidden : u,
    s = a.name,
    c = a.description,
    f = a.trim,
    p = a.normalizer,
    y = a.queryFallbacks,
    P = y === void 0 ? !1 : y,
    v = a.selected,
    E = a.checked,
    h = a.pressed,
    _ = a.current,
    q = a.level,
    x = a.expanded;
  _e(e);
  var M = o ? he : He,
    b = je({ collapseWhitespace: l, trim: f, normalizer: p });
  if (v !== void 0) {
    var R;
    if (
      ((R = Je.get(r)) == null ? void 0 : R.props['aria-selected']) === void 0
    )
      throw new Error('"aria-selected" is not supported on role "' + r + '".');
  }
  if (E !== void 0) {
    var O;
    if (((O = Je.get(r)) == null ? void 0 : O.props['aria-checked']) === void 0)
      throw new Error('"aria-checked" is not supported on role "' + r + '".');
  }
  if (h !== void 0) {
    var U;
    if (((U = Je.get(r)) == null ? void 0 : U.props['aria-pressed']) === void 0)
      throw new Error('"aria-pressed" is not supported on role "' + r + '".');
  }
  if (_ !== void 0) {
    var d;
    if (((d = Je.get(r)) == null ? void 0 : d.props['aria-current']) === void 0)
      throw new Error('"aria-current" is not supported on role "' + r + '".');
  }
  if (q !== void 0 && r !== 'heading')
    throw new Error('Role "' + r + '" cannot have "level" property.');
  if (x !== void 0) {
    var ne;
    if (
      ((ne = Je.get(r)) == null ? void 0 : ne.props['aria-expanded']) === void 0
    )
      throw new Error('"aria-expanded" is not supported on role "' + r + '".');
  }
  var oe = new WeakMap();
  function w(m) {
    return oe.has(m) || oe.set(m, cs(m)), oe.get(m);
  }
  return Array.from(e.querySelectorAll(_R(r, o, p ? b : void 0)))
    .filter(function (m) {
      var T = m.hasAttribute('role');
      if (T) {
        var A = m.getAttribute('role');
        if (P)
          return A.split(' ')
            .filter(Boolean)
            .some(function (k) {
              return M(k, m, r, b);
            });
        if (p) return M(A, m, r, b);
        var $ = A.split(' '),
          B = $[0];
        return M(B, m, r, b);
      }
      var N = il(m);
      return N.some(function (k) {
        return M(k, m, r, b);
      });
    })
    .filter(function (m) {
      return v !== void 0
        ? v === X_(m)
        : E !== void 0
        ? E === J_(m)
        : h !== void 0
        ? h === Z_(m)
        : _ !== void 0
        ? _ === eR(m)
        : x !== void 0
        ? x === rR(m)
        : q !== void 0
        ? q === tR(m)
        : !0;
    })
    .filter(function (m) {
      return s === void 0
        ? !0
        : he(
            rl(m, {
              computedStyleSupportsPseudoElements:
                L().computedStyleSupportsPseudoElements
            }),
            m,
            s,
            function (T) {
              return T;
            }
          );
    })
    .filter(function (m) {
      return c === void 0
        ? !0
        : he(
            Fu(m, {
              computedStyleSupportsPseudoElements:
                L().computedStyleSupportsPseudoElements
            }),
            m,
            c,
            function (T) {
              return T;
            }
          );
    })
    .filter(function (m) {
      return i === !1 ? Hn(m, { isSubtreeInaccessible: w }) === !1 : !0;
    });
}
function _R(e, r, t) {
  var a;
  if (typeof e != 'string') return '*';
  var n = r && !t ? '*[role~="' + e + '"]' : '*[role]',
    o = (a = zu.get(e)) != null ? a : new Set(),
    l = new Set(
      Array.from(o).map(function (u) {
        var i = u.name;
        return i;
      })
    );
  return [n].concat(Array.from(l)).join(',');
}
var RR = function (r, t, a) {
    var n = a === void 0 ? {} : a,
      o = n.name,
      l = '';
    return (
      o === void 0
        ? (l = '')
        : typeof o == 'string'
        ? (l = ' and name "' + o + '"')
        : (l = ' and name `' + o + '`'),
      'Found multiple elements with the role "' + t + '"' + l
    );
  },
  wR = function (r, t, a) {
    var n = a === void 0 ? {} : a,
      o = n.hidden,
      l = o === void 0 ? L().defaultHidden : o,
      u = n.name,
      i = n.description;
    if (L()._disableExpensiveErrorDiagnostics)
      return 'Unable to find role="' + t + '"';
    var s = '';
    Array.from(r.children).forEach(function (y) {
      s += ps(y, { hidden: l, includeDescription: i !== void 0 });
    });
    var c;
    s.length === 0
      ? l === !1
        ? (c =
            'There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole')
        : (c = 'There are no available roles.')
      : (c = (
          `
Here are the ` +
          (l === !1 ? 'accessible' : 'available') +
          ` roles:

  ` +
          s
            .replace(
              /\n/g,
              `
  `
            )
            .replace(
              /\n\s\s\n/g,
              `

`
            ) +
          `
`
        ).trim());
    var f = '';
    u === void 0
      ? (f = '')
      : typeof u == 'string'
      ? (f = ' and name "' + u + '"')
      : (f = ' and name `' + u + '`');
    var p = '';
    return (
      i === void 0
        ? (p = '')
        : typeof i == 'string'
        ? (p = ' and description "' + i + '"')
        : (p = ' and description `' + i + '`'),
      (
        `
Unable to find an ` +
        (l === !1 ? 'accessible ' : '') +
        'element with the role "' +
        t +
        '"' +
        f +
        p +
        `

` +
        c
      ).trim()
    );
  },
  ed = te(Lo, Lo.name, 'queryAll'),
  Sr = Re(Lo, RR, wR),
  rd = Sr[0],
  td = Sr[1],
  ad = Sr[2],
  nd = Sr[3],
  od = Sr[4],
  dl = function () {
    return L().testIdAttribute;
  },
  Do = function () {
    for (var r = arguments.length, t = new Array(r), a = 0; a < r; a++)
      t[a] = arguments[a];
    return _e(t[0]), We.apply(void 0, [dl()].concat(t));
  },
  CR = function (r, t) {
    return 'Found multiple elements by: [' + dl() + '="' + t + '"]';
  },
  PR = function (r, t) {
    return 'Unable to find an element by: [' + dl() + '="' + t + '"]';
  },
  ld = te(Do, Do.name, 'queryAll'),
  Br = Re(Do, CR, PR),
  id = Br[0],
  ud = Br[1],
  sd = Br[2],
  dd = Br[3],
  cd = Br[4],
  lt = Object.freeze({
    __proto__: null,
    queryAllByLabelText: ws,
    queryByLabelText: ys,
    getAllByLabelText: _s,
    getByLabelText: Rs,
    findAllByLabelText: gs,
    findByLabelText: Es,
    queryByPlaceholderText: Ps,
    queryAllByPlaceholderText: Cs,
    getByPlaceholderText: Os,
    getAllByPlaceholderText: qs,
    findAllByPlaceholderText: Ts,
    findByPlaceholderText: xs,
    queryByText: As,
    queryAllByText: Ms,
    getByText: Ss,
    getAllByText: $s,
    findAllByText: Bs,
    findByText: Is,
    queryByDisplayValue: Ns,
    queryAllByDisplayValue: ks,
    getByDisplayValue: Ls,
    getAllByDisplayValue: js,
    findAllByDisplayValue: Ds,
    findByDisplayValue: Fs,
    queryByAltText: Us,
    queryAllByAltText: Vs,
    getByAltText: Ws,
    getAllByAltText: Hs,
    findAllByAltText: zs,
    findByAltText: Ks,
    queryByTitle: Qs,
    queryAllByTitle: Gs,
    getByTitle: Xs,
    getAllByTitle: Ys,
    findAllByTitle: Js,
    findByTitle: Zs,
    queryByRole: rd,
    queryAllByRole: ed,
    getAllByRole: td,
    getByRole: ad,
    findAllByRole: nd,
    findByRole: od,
    queryByTestId: id,
    queryAllByTestId: ld,
    getByTestId: sd,
    getAllByTestId: ud,
    findAllByTestId: dd,
    findByTestId: cd
  });
function Fo(e, r, t) {
  return (
    r === void 0 && (r = lt),
    t === void 0 && (t = {}),
    Object.keys(r).reduce(function (a, n) {
      var o = r[n];
      return (a[n] = o.bind(null, e)), a;
    }, t)
  );
}
var fd = function (r) {
  return !r || (Array.isArray(r) && !r.length);
};
function wi(e) {
  if (fd(e))
    throw new Error(
      'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.'
    );
}
function qR(e, r) {
  return Vo.apply(this, arguments);
}
function Vo() {
  return (
    (Vo = Ao(
      tr.mark(function e(r, t) {
        var a, n, o;
        return tr.wrap(function (u) {
          for (;;)
            switch ((u.prev = u.next)) {
              case 0:
                return (
                  (a = new Error('Timed out in waitForElementToBeRemoved.')),
                  typeof r != 'function' &&
                    (wi(r),
                    (n = Array.isArray(r) ? r : [r]),
                    (o = n.map(function (i) {
                      var s = i.parentElement;
                      if (s === null)
                        return function () {
                          return null;
                        };
                      for (; s.parentElement; ) s = s.parentElement;
                      return function () {
                        return s.contains(i) ? i : null;
                      };
                    })),
                    (r = function () {
                      return o
                        .map(function (s) {
                          return s();
                        })
                        .filter(Boolean);
                    })),
                  wi(r()),
                  u.abrupt(
                    'return',
                    ul(function () {
                      var i;
                      try {
                        i = r();
                      } catch (s) {
                        if (s.name === 'TestingLibraryElementError') return;
                        throw s;
                      }
                      if (!fd(i)) throw a;
                    }, t)
                  )
                );
              case 4:
              case 'end':
                return u.stop();
            }
        }, e);
      })
    )),
    Vo.apply(this, arguments)
  );
}
var Ci = {
    copy: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    cut: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    paste: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    compositionEnd: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    compositionStart: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    compositionUpdate: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    keyDown: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
    },
    keyPress: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
    },
    keyUp: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 }
    },
    focus: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
    },
    blur: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
    },
    focusIn: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    focusOut: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    change: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !1 }
    },
    input: {
      EventType: 'InputEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    invalid: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !0 }
    },
    submit: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !0 }
    },
    reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
    click: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 }
    },
    contextMenu: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    dblClick: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    drag: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    dragEnd: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    dragEnter: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    dragExit: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    dragLeave: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    dragOver: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    dragStart: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    drop: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    mouseDown: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    mouseEnter: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
    },
    mouseLeave: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 }
    },
    mouseMove: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    mouseOut: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    mouseOver: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    mouseUp: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    select: {
      EventType: 'Event',
      defaultInit: { bubbles: !0, cancelable: !1 }
    },
    touchCancel: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    touchEnd: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    touchMove: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    touchStart: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    resize: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    scroll: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    wheel: {
      EventType: 'WheelEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlay: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    canPlayThrough: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    durationChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    emptied: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    encrypted: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedData: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    loadedMetadata: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    loadStart: {
      EventType: 'ProgressEvent',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    playing: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    progress: {
      EventType: 'ProgressEvent',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    rateChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    seeked: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    seeking: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    stalled: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    suspend: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    timeUpdate: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    volumeChange: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    waiting: {
      EventType: 'Event',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    load: {
      EventType: 'UIEvent',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    animationStart: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 }
    },
    animationEnd: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 }
    },
    animationIteration: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 }
    },
    transitionCancel: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 }
    },
    transitionEnd: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !0 }
    },
    transitionRun: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 }
    },
    transitionStart: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 }
    },
    pointerOver: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    pointerEnter: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    pointerDown: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    pointerMove: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    pointerUp: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    pointerCancel: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    pointerOut: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 }
    },
    pointerLeave: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !1, cancelable: !1 }
    },
    gotPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    lostPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 }
    },
    popState: {
      EventType: 'PopStateEvent',
      defaultInit: { bubbles: !0, cancelable: !1 }
    }
  },
  Pi = { doubleClick: 'dblClick' },
  OR = ['value', 'files'],
  TR = ['bubbles', 'cancelable', 'detail'];
function nr(e, r) {
  return L().eventWrapper(function () {
    if (!r)
      throw new Error(
        'Unable to fire an event - please provide an event object.'
      );
    if (!e)
      throw new Error(
        'Unable to fire a "' +
          r.type +
          '" event - please provide a DOM element.'
      );
    return e.dispatchEvent(r);
  });
}
function et(e, r, t, a) {
  var n = a === void 0 ? {} : a,
    o = n.EventType,
    l = o === void 0 ? 'Event' : o,
    u = n.defaultInit,
    i = u === void 0 ? {} : u;
  if (!r)
    throw new Error(
      'Unable to fire a "' + e + '" event - please provide a DOM element.'
    );
  var s = me({}, i, t),
    c = s.target;
  c = c === void 0 ? {} : c;
  var f = c.value,
    p = c.files,
    y = Mo(c, OR);
  f !== void 0 && xR(r, f),
    p !== void 0 &&
      Object.defineProperty(r, 'files', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: p
      }),
    Object.assign(r, y);
  var P = ns(r),
    v = P[l] || P.Event,
    E;
  if (typeof v == 'function') E = new v(e, s);
  else {
    E = P.document.createEvent(l);
    var h = s.bubbles,
      _ = s.cancelable,
      q = s.detail,
      x = Mo(s, TR);
    E.initEvent(e, h, _, q),
      Object.keys(x).forEach(function (b) {
        E[b] = x[b];
      });
  }
  var M = ['dataTransfer', 'clipboardData'];
  return (
    M.forEach(function (b) {
      var R = s[b];
      typeof R == 'object' &&
        (typeof P.DataTransfer == 'function'
          ? Object.defineProperty(E, b, {
              value: Object.getOwnPropertyNames(R).reduce(function (O, U) {
                return Object.defineProperty(O, U, { value: R[U] }), O;
              }, new P.DataTransfer())
            })
          : Object.defineProperty(E, b, { value: R }));
    }),
    E
  );
}
Object.keys(Ci).forEach(function (e) {
  var r = Ci[e],
    t = r.EventType,
    a = r.defaultInit,
    n = e.toLowerCase();
  (et[e] = function (o, l) {
    return et(n, o, l, { EventType: t, defaultInit: a });
  }),
    (nr[e] = function (o, l) {
      return nr(o, et[e](o, l));
    });
});
function xR(e, r) {
  var t = Object.getOwnPropertyDescriptor(e, 'value') || {},
    a = t.set,
    n = Object.getPrototypeOf(e),
    o = Object.getOwnPropertyDescriptor(n, 'value') || {},
    l = o.set;
  if (l && a !== l) l.call(e, r);
  else if (a) a.call(e, r);
  else throw new Error('The given element does not have a value setter');
}
Object.keys(Pi).forEach(function (e) {
  var r = Pi[e];
  nr[e] = function () {
    return nr[r].apply(nr, arguments);
  };
});
function MR(e) {
  return e.replace(
    /[ \t]*[\n][ \t]*/g,
    `
`
  );
}
function AR(e) {
  return Yu.exports.compressToEncodedURIComponent(MR(e));
}
function $R(e) {
  return 'https://testing-playground.com/#markup=' + AR(e);
}
var SR = function (r, t, a) {
    return Array.isArray(r)
      ? r.forEach(function (n) {
          return $o(n, t, a);
        })
      : $o(r, t, a);
  },
  BR = function (r) {
    if ((r === void 0 && (r = ol().body), !r || !('innerHTML' in r))) {
      console.log("The element you're providing isn't a valid DOM element.");
      return;
    }
    if (!r.innerHTML) {
      console.log("The provided element doesn't have any children.");
      return;
    }
    console.log(
      `Open this URL in your browser

` + $R(r.innerHTML)
    );
  },
  qi = { debug: SR, logTestingPlaygroundURL: BR },
  IR =
    typeof document != 'undefined' && document.body
      ? Fo(document.body, lt, qi)
      : Object.keys(lt).reduce(function (e, r) {
          return (
            (e[r] = function () {
              throw new TypeError(
                'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error'
              );
            }),
            e
          );
        }, qi),
  pd = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        prettyFormat: yf,
        buildQueries: Re,
        configure: H_,
        createEvent: et,
        findAllByAltText: zs,
        findAllByDisplayValue: Ds,
        findAllByLabelText: gs,
        findAllByPlaceholderText: Ts,
        findAllByRole: nd,
        findAllByTestId: dd,
        findAllByText: Bs,
        findAllByTitle: Js,
        findByAltText: Ks,
        findByDisplayValue: Fs,
        findByLabelText: Es,
        findByPlaceholderText: xs,
        findByRole: od,
        findByTestId: cd,
        findByText: Is,
        findByTitle: Zs,
        fireEvent: nr,
        getAllByAltText: Hs,
        getAllByDisplayValue: js,
        getAllByLabelText: _s,
        getAllByPlaceholderText: qs,
        getAllByRole: td,
        getAllByTestId: ud,
        getAllByText: $s,
        getAllByTitle: Ys,
        getByAltText: Ws,
        getByDisplayValue: Ls,
        getByLabelText: Rs,
        getByPlaceholderText: Os,
        getByRole: ad,
        getByTestId: sd,
        getByText: Ss,
        getByTitle: Xs,
        getConfig: L,
        getDefaultNormalizer: ll,
        getElementError: Wn,
        getMultipleElementsFoundError: zn,
        getNodeText: qr,
        getQueriesForElement: Fo,
        getRoles: fs,
        getSuggestedQuery: ot,
        isInaccessible: Hn,
        logDOM: $o,
        logRoles: Y_,
        makeFindQuery: sr,
        makeGetAllQuery: sl,
        makeSingleQuery: ur,
        prettyDOM: wr,
        queries: lt,
        queryAllByAltText: Vs,
        queryAllByAttribute: We,
        queryAllByDisplayValue: ks,
        queryAllByLabelText: ws,
        queryAllByPlaceholderText: Cs,
        queryAllByRole: ed,
        queryAllByTestId: ld,
        queryAllByText: Ms,
        queryAllByTitle: Gs,
        queryByAltText: Us,
        queryByAttribute: vs,
        queryByDisplayValue: Ns,
        queryByLabelText: ys,
        queryByPlaceholderText: Ps,
        queryByRole: rd,
        queryByTestId: id,
        queryByText: As,
        queryByTitle: Qs,
        queryHelpers: oR,
        screen: IR,
        waitFor: ul,
        waitForElementToBeRemoved: qR,
        within: Fo,
        wrapAllByQueryWithSuggestion: te,
        wrapSingleQueryWithSuggestion: ke
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  vd = {},
  ze = {},
  ae = jd(pd),
  W = {},
  cl = {};
Object.defineProperty(cl, '__esModule', { value: !0 });
cl.getMouseEventOptions = kR;
function Oi(e) {
  return (
    e === 'mousedown' || e === 'mouseup' || e === 'click' || e === 'dblclick'
  );
}
const Ti = { none: 0, primary: 1, secondary: 2, auxiliary: 4 },
  xi = { primary: 0, auxiliary: 1, secondary: 2 };
function Mi(e, r) {
  var t;
  const [a, n] = r === 'button' ? [xi, Ti] : [Ti, xi],
    o =
      (t = Object.entries(a).find(([, l]) => l === e)) == null ? void 0 : t[0];
  return o && Object.prototype.hasOwnProperty.call(n, o) ? n[o] : 0;
}
function Ai(e, r, t) {
  return Oi(e)
    ? typeof r[t] == 'number'
      ? r[t]
      : t === 'button' && typeof r.buttons == 'number'
      ? Mi(r.buttons, 'buttons')
      : t === 'buttons' && typeof r.button == 'number'
      ? Mi(r.button, 'button')
      : t != 'button' && Oi(e)
      ? 1
      : 0
    : 0;
}
function kR(e, r, t = 0) {
  var a;
  return (
    (r = (a = r) != null ? a : {}),
    Vr(X({}, r), {
      detail: e === 'mousedown' || e === 'mouseup' || e === 'click' ? 1 + t : t,
      buttons: Ai(e, r, 'buttons'),
      button: Ai(e, r, 'button')
    })
  );
}
var fl = {},
  we = {};
Object.defineProperty(we, '__esModule', { value: !0 });
we.isElementType = NR;
function NR(e, r, t) {
  return (e.namespaceURI &&
    e.namespaceURI !== 'http://www.w3.org/1999/xhtml') ||
    ((r = Array.isArray(r) ? r : [r]), !r.includes(e.tagName.toLowerCase()))
    ? !1
    : t
    ? Object.entries(t).every(([a, n]) => e[a] === n)
    : !0;
}
Object.defineProperty(fl, '__esModule', { value: !0 });
fl.isClickableInput = LR;
var $i = we;
const jR = [
  'button',
  'color',
  'file',
  'image',
  'reset',
  'submit',
  'checkbox',
  'radio'
];
function LR(e) {
  return (
    (0, $i.isElementType)(e, 'button') ||
    ((0, $i.isElementType)(e, 'input') && jR.includes(e.type))
  );
}
var pl = {};
Object.defineProperty(pl, '__esModule', { value: !0 });
pl.buildTimeValue = DR;
function DR(e) {
  const r = e.replace(/\D/g, '');
  if (r.length < 2) return e;
  const t = parseInt(r[0], 10),
    a = parseInt(r[1], 10);
  if (t >= 3 || (t === 2 && a >= 4)) {
    let n;
    return t >= 3 ? (n = 1) : (n = 2), Si(r, n);
  }
  return e.length === 2 ? e : Si(r, 2);
}
function Si(e, r) {
  const t = e.slice(0, r),
    a = Math.min(parseInt(t, 10), 23),
    n = e.slice(r),
    o = parseInt(n, 10),
    l = Math.min(o, 59);
  return `${a.toString().padStart(2, '0')}:${l.toString().padStart(2, '0')}`;
}
var vl = {},
  Ke = {};
Object.defineProperty(Ke, '__esModule', { value: !0 });
Ke.getSelectionRange = bd;
Ke.hasSelectionSupport = ml;
Ke.setSelectionRange = FR;
var or = we,
  Uo;
(function (e) {
  (e.text = 'text'),
    (e.search = 'search'),
    (e.url = 'url'),
    (e.tel = 'tel'),
    (e.password = 'password');
})(Uo || (Uo = {}));
const md = Symbol('inputSelection');
function ml(e) {
  return (
    (0, or.isElementType)(e, 'textarea') ||
    ((0, or.isElementType)(e, 'input') && Boolean(Uo[e.type]))
  );
}
function bd(e) {
  if (ml(e))
    return { selectionStart: e.selectionStart, selectionEnd: e.selectionEnd };
  if ((0, or.isElementType)(e, 'input')) {
    var r;
    return (r = e[md]) != null
      ? r
      : { selectionStart: null, selectionEnd: null };
  }
  const t = e.ownerDocument.getSelection();
  if (t != null && t.rangeCount && e.contains(t.focusNode)) {
    const a = t.getRangeAt(0);
    return { selectionStart: a.startOffset, selectionEnd: a.endOffset };
  } else return { selectionStart: null, selectionEnd: null };
}
function FR(e, r, t) {
  const { selectionStart: a, selectionEnd: n } = bd(e);
  if (
    (a === r && n === t) ||
    (ml(e) && e.setSelectionRange(r, t),
    (0, or.isElementType)(e, 'input') &&
      (e[md] = { selectionStart: r, selectionEnd: t }),
    (0, or.isElementType)(e, 'input') || (0, or.isElementType)(e, 'textarea'))
  )
    return;
  const o = e.ownerDocument.createRange();
  o.selectNodeContents(e),
    e.firstChild && (o.setStart(e.firstChild, r), o.setEnd(e.firstChild, t));
  const l = e.ownerDocument.getSelection();
  l && (l.removeAllRanges(), l.addRange(o));
}
var fr = {},
  Ir = {};
Object.defineProperty(Ir, '__esModule', { value: !0 });
Ir.isContentEditable = VR;
function VR(e) {
  return (
    e.hasAttribute('contenteditable') &&
    (e.getAttribute('contenteditable') == 'true' ||
      e.getAttribute('contenteditable') == '')
  );
}
Object.defineProperty(fr, '__esModule', { value: !0 });
fr.getValue = HR;
var UR = Ir;
function HR(e) {
  return e ? ((0, UR.isContentEditable)(e) ? e.textContent : e.value) : null;
}
var Kn = {};
Object.defineProperty(Kn, '__esModule', { value: !0 });
Kn.isValidDateValue = WR;
function WR(e, r) {
  const t = e.cloneNode();
  return (t.value = r), t.value === r;
}
var Gn = {};
Object.defineProperty(Gn, '__esModule', { value: !0 });
Gn.isValidInputTimeValue = zR;
function zR(e, r) {
  const t = e.cloneNode();
  return (t.value = r), t.value === r;
}
Object.defineProperty(vl, '__esModule', { value: !0 });
vl.calculateNewValue = YR;
var KR = Ke,
  GR = fr,
  QR = Kn,
  Bi = Gn;
function YR(
  e,
  r,
  t = (() => {
    var o;
    return (o = (0, GR.getValue)(r)) != null ? o : '';
  })(),
  a = (0, KR.getSelectionRange)(r),
  n
) {
  const o = a.selectionStart === null ? t.length : a.selectionStart,
    l = a.selectionEnd === null ? t.length : a.selectionEnd,
    u = Math.max(0, o === l && n === 'backward' ? o - 1 : o),
    i = t.substring(0, u),
    s = Math.min(t.length, o === l && n === 'forward' ? l + 1 : l),
    c = t.substring(s, t.length);
  let f = `${i}${e}${c}`;
  const p = u + e.length;
  return (
    r.type === 'date' && !(0, QR.isValidDateValue)(r, f) && (f = t),
    r.type === 'time' &&
      !(0, Bi.isValidInputTimeValue)(r, f) &&
      ((0, Bi.isValidInputTimeValue)(r, e) ? (f = e) : (f = t)),
    { newValue: f, newSelectionStart: p }
  );
}
var Qn = {};
Object.defineProperty(Qn, '__esModule', { value: !0 });
Qn.isCursorAtEnd = JR;
Qn.isCursorAtStart = ZR;
var yd = Ke,
  XR = fr;
function JR(e) {
  var r;
  const { selectionStart: t, selectionEnd: a } = (0, yd.getSelectionRange)(e);
  return (
    t === a &&
    (t != null ? t : 0) === ((r = (0, XR.getValue)(e)) != null ? r : '').length
  );
}
function ZR(e) {
  const { selectionStart: r, selectionEnd: t } = (0, yd.getSelectionRange)(e);
  return r === t && (r != null ? r : 0) === 0;
}
var bl = {};
Object.defineProperty(bl, '__esModule', { value: !0 });
bl.hasUnreliableEmptyValue = rw;
var ew = we,
  Ho;
(function (e) {
  e.number = 'number';
})(Ho || (Ho = {}));
function rw(e) {
  return (0, ew.isElementType)(e, 'input') && Boolean(Ho[e.type]);
}
var Ge = {};
Object.defineProperty(Ge, '__esModule', { value: !0 });
Ge.editableInputTypes = void 0;
Ge.isEditable = aw;
Ge.isEditableInput = gd;
var hd = we,
  tw = Ir;
function aw(e) {
  return (
    gd(e) ||
    (0, hd.isElementType)(e, 'textarea', { readOnly: !1 }) ||
    (0, tw.isContentEditable)(e)
  );
}
let it;
Ge.editableInputTypes = it;
(function (e) {
  (e.text = 'text'),
    (e.date = 'date'),
    (e['datetime-local'] = 'datetime-local'),
    (e.email = 'email'),
    (e.month = 'month'),
    (e.number = 'number'),
    (e.password = 'password'),
    (e.search = 'search'),
    (e.tel = 'tel'),
    (e.time = 'time'),
    (e.url = 'url'),
    (e.week = 'week');
})(it || (Ge.editableInputTypes = it = {}));
function gd(e) {
  return (
    (0, hd.isElementType)(e, 'input', { readOnly: !1 }) && Boolean(it[e.type])
  );
}
var yl = {};
Object.defineProperty(yl, '__esModule', { value: !0 });
yl.getSpaceUntilMaxLength = ow;
var Ii = we,
  nw = fr,
  Wo;
(function (e) {
  (e.email = 'email'),
    (e.password = 'password'),
    (e.search = 'search'),
    (e.telephone = 'telephone'),
    (e.text = 'text'),
    (e.url = 'url');
})(Wo || (Wo = {}));
function ow(e) {
  const r = (0, nw.getValue)(e);
  if (r === null) return;
  const t = lw(e);
  return t ? t - r.length : void 0;
}
function lw(e) {
  var r;
  if (!iw(e)) return;
  const t = (r = e.getAttribute('maxlength')) != null ? r : '';
  return /^\d+$/.test(t) && Number(t) >= 0 ? Number(t) : void 0;
}
function iw(e) {
  return (
    (0, Ii.isElementType)(e, 'textarea') ||
    ((0, Ii.isElementType)(e, 'input') && Boolean(Wo[e.type]))
  );
}
var hl = {},
  kr = {};
Object.defineProperty(kr, '__esModule', { value: !0 });
kr.isDisabled = uw;
function uw(e) {
  return Boolean(e && e.disabled);
}
Object.defineProperty(hl, '__esModule', { value: !0 });
hl.getActiveElement = Ed;
var sw = kr;
function Ed(e) {
  const r = e.activeElement;
  return r != null && r.shadowRoot
    ? Ed(r.shadowRoot)
    : (0, sw.isDisabled)(r)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : r;
}
var gl = {},
  Yn = {};
Object.defineProperty(Yn, '__esModule', { value: !0 });
Yn.isLabelWithInternallyDisabledControl = fw;
var dw = kr,
  cw = we;
function fw(e) {
  if (!(0, cw.isElementType)(e, 'label')) return !1;
  const r = e.control;
  return Boolean(r && e.contains(r) && (0, dw.isDisabled)(r));
}
var Nr = {};
Object.defineProperty(Nr, '__esModule', { value: !0 });
Nr.FOCUSABLE_SELECTOR = void 0;
const pw = [
  'input:not([type=hidden]):not([disabled])',
  'button:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[contenteditable=""]',
  '[contenteditable="true"]',
  'a[href]',
  '[tabindex]:not([disabled])'
].join(', ');
Nr.FOCUSABLE_SELECTOR = pw;
Object.defineProperty(gl, '__esModule', { value: !0 });
gl.isFocusable = bw;
var vw = Yn,
  mw = Nr;
function bw(e) {
  return (
    !(0, vw.isLabelWithInternallyDisabledControl)(e) &&
    e.matches(mw.FOCUSABLE_SELECTOR)
  );
}
var El = {};
Object.defineProperty(El, '__esModule', { value: !0 });
El.eventWrapper = hw;
var yw = ae;
function hw(e) {
  let r;
  return (
    (0, yw.getConfig)().eventWrapper(() => {
      r = e();
    }),
    r
  );
}
var _l = {},
  Ce = {};
Object.defineProperty(Ce, '__esModule', { value: !0 });
Ce.TEXT_NODE = void 0;
Ce.checkContainerType = ww;
Ce.getDocument = _w;
Ce.getWindowFromNode = Rw;
Ce.jestFakeTimersAreEnabled = Ew;
const gw = 3;
Ce.TEXT_NODE = gw;
function Ew() {
  return typeof jest != 'undefined' && jest !== null
    ? setTimeout._isMockFunction === !0 ||
        Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    : !1;
}
function _w() {
  if (typeof window == 'undefined')
    throw new Error('Could not find default container');
  return window.document;
}
function Rw(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView)
    return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error(
        'It looks like the window object is not available for the provided node.'
      )
    : e.then instanceof Function
    ? new Error(
        'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?'
      )
    : Array.isArray(e)
    ? new Error(
        'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?'
      )
    : typeof e.debug == 'function' &&
      typeof e.logTestingPlaygroundURL == 'function'
    ? new Error(
        'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?'
      )
    : new Error(
        `The given node is not an Element, the node type is: ${typeof e}.`
      );
}
function ww(e) {
  if (
    !e ||
    typeof e.querySelector != 'function' ||
    typeof e.querySelectorAll != 'function'
  )
    throw new TypeError(
      `Expected container to be an Element, a Document or a DocumentFragment but got ${r(
        e
      )}.`
    );
  function r(t) {
    return typeof t == 'object'
      ? t === null
        ? 'null'
        : t.constructor.name
      : typeof t;
  }
}
Object.defineProperty(_l, '__esModule', { value: !0 });
_l.isVisible = Pw;
var Cw = Ce;
function Pw(e) {
  const r = (0, Cw.getWindowFromNode)(e);
  for (let a = e; (t = a) != null && t.ownerDocument; a = a.parentElement) {
    var t;
    if (r.getComputedStyle(a).display === 'none') return !1;
  }
  return !0;
}
var Rl = {};
Object.defineProperty(Rl, '__esModule', { value: !0 });
Rl.isDocument = qw;
function qw(e) {
  return e.nodeType === e.DOCUMENT_NODE;
}
var wl = {};
Object.defineProperty(wl, '__esModule', { value: !0 });
wl.wait = Ow;
function Ow(e) {
  return new Promise(r => setTimeout(() => r(), e));
}
var Cl = {};
Object.defineProperty(Cl, '__esModule', { value: !0 });
Cl.hasPointerEvents = xw;
var Tw = Ce;
function xw(e) {
  const r = (0, Tw.getWindowFromNode)(e);
  for (let a = e; (t = a) != null && t.ownerDocument; a = a.parentElement) {
    var t;
    const n = r.getComputedStyle(a).pointerEvents;
    if (n && !['inherit', 'unset'].includes(n)) return n !== 'none';
  }
  return !0;
}
var Xn = {};
Object.defineProperty(Xn, '__esModule', { value: !0 });
Xn.hasFormSubmit = void 0;
const Mw = e =>
  !!(
    e &&
    (e.querySelector('input[type="submit"]') ||
      e.querySelector('button[type="submit"]'))
  );
Xn.hasFormSubmit = Mw;
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var r = cl;
  Object.keys(r).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === r[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return r[d];
        }
      });
  });
  var t = fl;
  Object.keys(t).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === t[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return t[d];
        }
      });
  });
  var a = pl;
  Object.keys(a).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === a[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return a[d];
        }
      });
  });
  var n = vl;
  Object.keys(n).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === n[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return n[d];
        }
      });
  });
  var o = Qn;
  Object.keys(o).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === o[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return o[d];
        }
      });
  });
  var l = fr;
  Object.keys(l).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === l[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return l[d];
        }
      });
  });
  var u = bl;
  Object.keys(u).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === u[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return u[d];
        }
      });
  });
  var i = Ir;
  Object.keys(i).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === i[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return i[d];
        }
      });
  });
  var s = Ge;
  Object.keys(s).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === s[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return s[d];
        }
      });
  });
  var c = Kn;
  Object.keys(c).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === c[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return c[d];
        }
      });
  });
  var f = Gn;
  Object.keys(f).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === f[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return f[d];
        }
      });
  });
  var p = yl;
  Object.keys(p).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === p[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return p[d];
        }
      });
  });
  var y = Ke;
  Object.keys(y).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === y[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return y[d];
        }
      });
  });
  var P = hl;
  Object.keys(P).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === P[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return P[d];
        }
      });
  });
  var v = gl;
  Object.keys(v).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === v[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return v[d];
        }
      });
  });
  var E = Nr;
  Object.keys(E).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === E[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return E[d];
        }
      });
  });
  var h = El;
  Object.keys(h).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === h[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return h[d];
        }
      });
  });
  var _ = we;
  Object.keys(_).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === _[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return _[d];
        }
      });
  });
  var q = Yn;
  Object.keys(q).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === q[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return q[d];
        }
      });
  });
  var x = _l;
  Object.keys(x).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === x[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return x[d];
        }
      });
  });
  var M = kr;
  Object.keys(M).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === M[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return M[d];
        }
      });
  });
  var b = Rl;
  Object.keys(b).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === b[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return b[d];
        }
      });
  });
  var R = wl;
  Object.keys(R).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === R[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return R[d];
        }
      });
  });
  var O = Cl;
  Object.keys(O).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === O[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return O[d];
        }
      });
  });
  var U = Xn;
  Object.keys(U).forEach(function (d) {
    d === 'default' ||
      d === '__esModule' ||
      (d in e && e[d] === U[d]) ||
      Object.defineProperty(e, d, {
        enumerable: !0,
        get: function () {
          return U[d];
        }
      });
  });
})(W);
var pr = {};
Object.defineProperty(pr, '__esModule', { value: !0 });
pr.hover = Aw;
pr.unhover = $w;
var ue = ae,
  ee = W;
function _d(e) {
  const r = [e];
  let t = e;
  for (; (t = t.parentElement) != null; ) r.push(t);
  return r;
}
function Aw(e, r, { skipPointerEventsCheck: t = !1 } = {}) {
  if (!t && !(0, ee.hasPointerEvents)(e))
    throw new Error(
      'unable to hover element as it has or inherits pointer-events set to "none".'
    );
  if ((0, ee.isLabelWithInternallyDisabledControl)(e)) return;
  const a = _d(e).reverse();
  ue.fireEvent.pointerOver(e, r);
  for (const n of a) ue.fireEvent.pointerEnter(n, r);
  if (!(0, ee.isDisabled)(e)) {
    ue.fireEvent.mouseOver(e, (0, ee.getMouseEventOptions)('mouseover', r));
    for (const n of a)
      ue.fireEvent.mouseEnter(n, (0, ee.getMouseEventOptions)('mouseenter', r));
  }
  ue.fireEvent.pointerMove(e, r),
    (0, ee.isDisabled)(e) ||
      ue.fireEvent.mouseMove(e, (0, ee.getMouseEventOptions)('mousemove', r));
}
function $w(e, r, { skipPointerEventsCheck: t = !1 } = {}) {
  if (!t && !(0, ee.hasPointerEvents)(e))
    throw new Error(
      'unable to unhover element as it has or inherits pointer-events set to "none".'
    );
  if ((0, ee.isLabelWithInternallyDisabledControl)(e)) return;
  const a = _d(e);
  ue.fireEvent.pointerMove(e, r),
    (0, ee.isDisabled)(e) ||
      ue.fireEvent.mouseMove(e, (0, ee.getMouseEventOptions)('mousemove', r)),
    ue.fireEvent.pointerOut(e, r);
  for (const n of a) ue.fireEvent.pointerLeave(n, r);
  if (!(0, ee.isDisabled)(e)) {
    ue.fireEvent.mouseOut(e, (0, ee.getMouseEventOptions)('mouseout', r));
    for (const n of a)
      ue.fireEvent.mouseLeave(n, (0, ee.getMouseEventOptions)('mouseleave', r));
  }
}
var jr = {};
Object.defineProperty(jr, '__esModule', { value: !0 });
jr.blur = Sw;
var Co = W;
function Sw(e) {
  !(0, Co.isFocusable)(e) ||
    !((0, Co.getActiveElement)(e.ownerDocument) === e) ||
    (0, Co.eventWrapper)(() => e.blur());
}
var vr = {};
Object.defineProperty(vr, '__esModule', { value: !0 });
vr.focus = Bw;
var Po = W;
function Bw(e) {
  !(0, Po.isFocusable)(e) ||
    (0, Po.getActiveElement)(e.ownerDocument) === e ||
    (0, Po.eventWrapper)(() => e.focus());
}
Object.defineProperty(ze, '__esModule', { value: !0 });
ze.click = zo;
ze.dblClick = Dw;
var J = ae,
  z = W,
  Rd = pr,
  Iw = jr,
  ut = vr;
function kw(e) {
  const r = e.ownerDocument.activeElement;
  return r && r !== e.ownerDocument.body && r !== e ? r : null;
}
function Nw(e, r, { clickCount: t }) {
  (0, z.isLabelWithInternallyDisabledControl)(e) ||
    (J.fireEvent.pointerDown(e, r),
    J.fireEvent.mouseDown(e, (0, z.getMouseEventOptions)('mousedown', r, t)),
    J.fireEvent.pointerUp(e, r),
    J.fireEvent.mouseUp(e, (0, z.getMouseEventOptions)('mouseup', r, t)),
    Pl(e, (0, z.getMouseEventOptions)('click', r, t)),
    e.control && (0, ut.focus)(e.control));
}
function jw(e, r, { clickCount: t }) {
  J.fireEvent.pointerDown(e, r),
    e.disabled ||
      J.fireEvent.mouseDown(e, (0, z.getMouseEventOptions)('mousedown', r, t)),
    (0, ut.focus)(e),
    J.fireEvent.pointerUp(e, r),
    e.disabled ||
      (J.fireEvent.mouseUp(e, (0, z.getMouseEventOptions)('mouseup', r, t)),
      Pl(e, (0, z.getMouseEventOptions)('click', r, t)));
}
function ki(e, r, { clickCount: t }) {
  const a = kw(e);
  if (
    (J.fireEvent.pointerDown(e, r),
    !(0, z.isDisabled)(e) &&
      J.fireEvent.mouseDown(e, (0, z.getMouseEventOptions)('mousedown', r, t)))
  ) {
    const o = Lw(e, z.isFocusable);
    a && !o ? (0, Iw.blur)(a) : o && (0, ut.focus)(o);
  }
  if ((J.fireEvent.pointerUp(e, r), !(0, z.isDisabled)(e))) {
    J.fireEvent.mouseUp(e, (0, z.getMouseEventOptions)('mouseup', r, t)),
      Pl(e, (0, z.getMouseEventOptions)('click', r, t));
    const n = e.closest('label');
    n != null && n.control && (0, ut.focus)(n.control);
  }
}
function Lw(e, r) {
  let t = e;
  do {
    if (r(t)) return t;
    t = t.parentElement;
  } while (t && t !== e.ownerDocument.body);
}
function zo(
  e,
  r,
  { skipHover: t = !1, clickCount: a = 0, skipPointerEventsCheck: n = !1 } = {}
) {
  if (!n && !(0, z.hasPointerEvents)(e))
    throw new Error(
      'unable to click element as it has or inherits pointer-events set to "none".'
    );
  t || (0, Rd.hover)(e, r, { skipPointerEventsCheck: !0 }),
    (0, z.isElementType)(e, 'label')
      ? Nw(e, r, { clickCount: a })
      : (0, z.isElementType)(e, 'input')
      ? e.type === 'checkbox' || e.type === 'radio'
        ? jw(e, r, { clickCount: a })
        : ki(e, r, { clickCount: a })
      : ki(e, r, { clickCount: a });
}
function Pl(e, r) {
  r.button === 2 ? J.fireEvent.contextMenu(e, r) : J.fireEvent.click(e, r);
}
function Dw(e, r, { skipPointerEventsCheck: t = !1 } = {}) {
  if (!t && !(0, z.hasPointerEvents)(e))
    throw new Error(
      'unable to double-click element as it has or inherits pointer-events set to "none".'
    );
  (0, Rd.hover)(e, r, { skipPointerEventsCheck: t }),
    zo(e, r, { skipHover: !0, clickCount: 0, skipPointerEventsCheck: t }),
    zo(e, r, { skipHover: !0, clickCount: 1, skipPointerEventsCheck: t }),
    J.fireEvent.dblClick(e, (0, z.getMouseEventOptions)('dblclick', r, 2));
}
var Jn = {},
  ql = {},
  Ol = {},
  Zn = {},
  Tl = {};
Object.defineProperty(Tl, '__esModule', { value: !0 });
Tl.getNextKeyDef = Fw;
var st;
(function (e) {
  (e['{'] = '}'), (e['['] = ']');
})(st || (st = {}));
var Ko;
(function (e) {
  (e.alt = 'alt'), (e.ctrl = 'ctrl'), (e.meta = 'meta'), (e.shift = 'shift');
})(Ko || (Ko = {}));
var Go;
(function (e) {
  (e.ctrl = 'Control'), (e.del = 'Delete'), (e.esc = 'Escape'), (e.space = ' ');
})(Go || (Go = {}));
function Fw(e, r) {
  var t;
  const {
    type: a,
    descriptor: n,
    consumedLength: o,
    releasePrevious: l,
    releaseSelf: u,
    repeat: i
  } = Vw(e);
  return {
    keyDef:
      (t = r.keyboardMap.find(c => {
        if (a === '[') {
          var f;
          return (
            ((f = c.code) == null ? void 0 : f.toLowerCase()) ===
            n.toLowerCase()
          );
        } else if (a === '{') {
          var p;
          const y = zw(n);
          return (
            ((p = c.key) == null ? void 0 : p.toLowerCase()) === y.toLowerCase()
          );
        }
        return c.key === n;
      })) != null
        ? t
        : { key: 'Unknown', code: 'Unknown', [a === '[' ? 'code' : 'key']: n },
    consumedLength: o,
    releasePrevious: l,
    releaseSelf: u,
    repeat: i
  };
}
function Vw(e) {
  let r = 0;
  const t = e[r] in st ? e[r] : '';
  r += t.length;
  const a = t ? e.match(new RegExp(`^\\${t}+`))[0].length : 0,
    o = a === 2 || (t === '{' && a > 3) ? '' : t;
  return X({ type: o }, o === '' ? Uw(e, r) : Hw(e, r, o));
}
function Uw(e, r) {
  const t = e[r];
  return (
    wd(t, e, r),
    (r += t.length),
    {
      consumedLength: r,
      descriptor: t,
      releasePrevious: !1,
      releaseSelf: !0,
      repeat: 1
    }
  );
}
function Hw(e, r, t) {
  var a, n, o;
  const l = e[r] === '/' ? '/' : '';
  r += l.length;
  const u = (a = e.slice(r).match(/^\w+/)) == null ? void 0 : a[0];
  wd(u, e, r), (r += u.length);
  const i =
    (n = (o = e.slice(r).match(/^>\d+/)) == null ? void 0 : o[0]) != null
      ? n
      : '';
  r += i.length;
  const s = e[r] === '/' || (!i && e[r] === '>') ? e[r] : '';
  r += s.length;
  const c = st[t],
    f = e[r] === c ? c : '';
  if (!f)
    throw new Error(
      Pd(
        [!i && 'repeat modifier', !s && 'release modifier', `"${c}"`]
          .filter(Boolean)
          .join(' or '),
        e[r],
        e
      )
    );
  return (
    (r += f.length),
    {
      consumedLength: r,
      descriptor: u,
      releasePrevious: !!l,
      repeat: i ? Math.max(Number(i.substr(1)), 1) : 1,
      releaseSelf: Ww(t, u, s, i)
    }
  );
}
function wd(e, r, t) {
  if (!e) throw new Error(Pd('key descriptor', r[t], r));
}
function Cd(e, r) {
  return e[r];
}
function Ww(e, r, t, a) {
  return t ? t === '/' : !(a || (e === '{' && Cd(Ko, r.toLowerCase())));
}
function zw(e) {
  var r;
  return (r = Cd(Go, e)) != null ? r : e;
}
function Pd(e, r, t) {
  return `Expected ${e} but found "${r != null ? r : ''}" in "${t}"
    See https://github.com/testing-library/user-event/blob/main/README.md#keyboardtext-options
    for more information about how userEvent parses your input.`;
}
var G = {},
  eo = {};
Object.defineProperty(eo, '__esModule', { value: !0 });
eo.keydownBehavior = void 0;
var qo = W;
const Kw = [
  {
    matches: (e, r) =>
      (e.key === 'ArrowLeft' || e.key === 'ArrowRight') &&
      (0, qo.isElementType)(r, ['input', 'textarea']),
    handle: (e, r) => {
      var t;
      const { selectionStart: a, selectionEnd: n } = (0, qo.getSelectionRange)(
          r
        ),
        o = e.key === 'ArrowLeft' ? -1 : 1,
        l =
          (t = a === n ? (a != null ? a : 0) + o : o < 0 ? a : n) != null
            ? t
            : 0;
      (0, qo.setSelectionRange)(r, l, l);
    }
  }
];
eo.keydownBehavior = Kw;
var ro = {},
  to = {},
  xl = {};
Object.defineProperty(xl, '__esModule', { value: !0 });
xl.carryValue = Gw;
var Ni = W;
function Gw(e, r, t) {
  const a = (0, Ni.getValue)(e);
  r.carryValue =
    a !== t && a === '' && (0, Ni.hasUnreliableEmptyValue)(e) ? t : void 0;
}
var Ml = {};
Object.defineProperty(Ml, '__esModule', { value: !0 });
Ml.fireChangeForInputTimeIfValid = Xw;
var Qw = ae,
  Yw = W;
function Xw(e, r, t) {
  (0, Yw.isValidInputTimeValue)(e, t) &&
    r !== t &&
    Qw.fireEvent.change(e, { target: { value: t } });
}
var Al = {};
Object.defineProperty(Al, '__esModule', { value: !0 });
Al.fireInputEvent = Jw;
var qd = ae,
  De = W;
function Jw(e, { newValue: r, newSelectionStart: t, eventOverrides: a }) {
  if ((0, De.isContentEditable)(e)) ji(e, 'textContent', r);
  else if ((0, De.isElementType)(e, ['input', 'textarea'])) ji(e, 'value', r);
  else throw new Error('Invalid Element');
  Zw(e, t), qd.fireEvent.input(e, X({}, a)), eC(e, r, t);
}
function Zw(e, r) {
  (0, De.setSelectionRange)(e, r, r);
}
function eC(e, r, t) {
  const a = (0, De.getValue)(e);
  if (!(a === '' && (0, De.hasUnreliableEmptyValue)(e)) && a === r) {
    const { selectionStart: o } = (0, De.getSelectionRange)(e);
    o === a.length && (0, De.setSelectionRange)(e, t, t);
  }
}
const Qr = Symbol('initial input value/textContent'),
  Oo = Symbol('onBlur');
function ji(e, r, t) {
  const a = Object.getOwnPropertyDescriptor(e, r),
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, r);
  if (
    (a && n && Object.defineProperty(e, r, n),
    e[Qr] === void 0 && (e[Qr] = String(e[r])),
    (e[r] = t),
    !e[Oo])
  ) {
    var o;
    (o = e.ownerDocument.defaultView) == null ||
      o.addEventListener(
        'blur',
        (e[Oo] = () => {
          const l = e[Qr];
          delete e[Oo],
            delete e[Qr],
            String(e[r]) !== l && qd.fireEvent.change(e);
        }),
        { capture: !0, once: !0 }
      );
  }
  a && Object.defineProperty(e, r, a);
}
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 });
  var r = xl;
  Object.keys(r).forEach(function (n) {
    n === 'default' ||
      n === '__esModule' ||
      (n in e && e[n] === r[n]) ||
      Object.defineProperty(e, n, {
        enumerable: !0,
        get: function () {
          return r[n];
        }
      });
  });
  var t = Ml;
  Object.keys(t).forEach(function (n) {
    n === 'default' ||
      n === '__esModule' ||
      (n in e && e[n] === t[n]) ||
      Object.defineProperty(e, n, {
        enumerable: !0,
        get: function () {
          return t[n];
        }
      });
  });
  var a = Al;
  Object.keys(a).forEach(function (n) {
    n === 'default' ||
      n === '__esModule' ||
      (n in e && e[n] === a[n]) ||
      Object.defineProperty(e, n, {
        enumerable: !0,
        get: function () {
          return a[n];
        }
      });
  });
})(to);
Object.defineProperty(ro, '__esModule', { value: !0 });
ro.keydownBehavior = void 0;
var ie = W,
  Li = to;
const rC = [
  {
    matches: (e, r) =>
      (e.key === 'Home' || e.key === 'End') &&
      ((0, ie.isElementType)(r, ['input', 'textarea']) ||
        (0, ie.isContentEditable)(r)),
    handle: (e, r) => {
      if (e.key === 'Home') (0, ie.setSelectionRange)(r, 0, 0);
      else {
        var t, a;
        const n =
          (t = (a = (0, ie.getValue)(r)) == null ? void 0 : a.length) != null
            ? t
            : 0;
        (0, ie.setSelectionRange)(r, n, n);
      }
    }
  },
  {
    matches: (e, r) =>
      (e.key === 'PageUp' || e.key === 'PageDown') &&
      (0, ie.isElementType)(r, ['input']),
    handle: (e, r) => {
      if (e.key === 'PageUp') (0, ie.setSelectionRange)(r, 0, 0);
      else {
        var t, a;
        const n =
          (t = (a = (0, ie.getValue)(r)) == null ? void 0 : a.length) != null
            ? t
            : 0;
        (0, ie.setSelectionRange)(r, n, n);
      }
    }
  },
  {
    matches: (e, r) =>
      e.key === 'Delete' && (0, ie.isEditable)(r) && !(0, ie.isCursorAtEnd)(r),
    handle: (e, r, t, a) => {
      const { newValue: n, newSelectionStart: o } = (0, ie.calculateNewValue)(
        '',
        r,
        a.carryValue,
        void 0,
        'forward'
      );
      (0, Li.fireInputEvent)(r, {
        newValue: n,
        newSelectionStart: o,
        eventOverrides: { inputType: 'deleteContentForward' }
      }),
        (0, Li.carryValue)(r, a, n);
    }
  }
];
ro.keydownBehavior = rC;
var ao = {};
Object.defineProperty(ao, '__esModule', { value: !0 });
ao.keypressBehavior = void 0;
var tC = ae,
  Xe = to,
  V = W;
const aC = [
  {
    matches: (e, r) => {
      var t;
      return (
        ((t = e.key) == null ? void 0 : t.length) === 1 &&
        (0, V.isElementType)(r, 'input', { type: 'time', readOnly: !1 })
      );
    },
    handle: (e, r, t, a) => {
      var n;
      let o = e.key;
      const l = ((n = a.carryValue) != null ? n : '') + o,
        u = (0, V.buildTimeValue)(l);
      (0, V.isValidInputTimeValue)(r, u) && (o = u);
      const { newValue: i, newSelectionStart: s } = (0, V.calculateNewValue)(
          o,
          r
        ),
        c = (0, V.getValue)(r);
      c !== i &&
        (0, Xe.fireInputEvent)(r, {
          newValue: i,
          newSelectionStart: s,
          eventOverrides: { data: e.key, inputType: 'insertText' }
        }),
        (0, Xe.fireChangeForInputTimeIfValid)(r, c, u),
        (a.carryValue = l);
    }
  },
  {
    matches: (e, r) => {
      var t;
      return (
        ((t = e.key) == null ? void 0 : t.length) === 1 &&
        (0, V.isElementType)(r, 'input', { type: 'date', readOnly: !1 })
      );
    },
    handle: (e, r, t, a) => {
      var n;
      let o = e.key;
      const l = ((n = a.carryValue) != null ? n : '') + o,
        u = (0, V.isValidDateValue)(r, l);
      u && (o = l);
      const { newValue: i, newSelectionStart: s } = (0, V.calculateNewValue)(
        o,
        r
      );
      (0, V.getValue)(r) !== i &&
        (0, Xe.fireInputEvent)(r, {
          newValue: i,
          newSelectionStart: s,
          eventOverrides: { data: e.key, inputType: 'insertText' }
        }),
        u && tC.fireEvent.change(r, { target: { value: l } }),
        (a.carryValue = l);
    }
  },
  {
    matches: (e, r) => {
      var t;
      return (
        ((t = e.key) == null ? void 0 : t.length) === 1 &&
        (0, V.isElementType)(r, 'input', { type: 'number', readOnly: !1 })
      );
    },
    handle: (e, r, t, a) => {
      var n, o, l, u;
      if (!/[\d.\-e]/.test(e.key)) return;
      const i =
          (n = (o = a.carryValue) != null ? o : (0, V.getValue)(r)) != null
            ? n
            : '',
        { newValue: s, newSelectionStart: c } = (0, V.calculateNewValue)(
          e.key,
          r,
          i
        ),
        f = s.split('e', 2);
      if (
        Number((l = s.match(/-/g)) == null ? void 0 : l.length) > 2 ||
        Number((u = s.match(/\./g)) == null ? void 0 : u.length) > 1 ||
        (f[1] && !/^-?\d*$/.test(f[1]))
      )
        return;
      (0, Xe.fireInputEvent)(r, {
        newValue: s,
        newSelectionStart: c,
        eventOverrides: { data: e.key, inputType: 'insertText' }
      }),
        (0, V.getValue)(r) === s ? (a.carryValue = void 0) : (a.carryValue = s);
    }
  },
  {
    matches: (e, r) => {
      var t;
      return (
        ((t = e.key) == null ? void 0 : t.length) === 1 &&
        (((0, V.isElementType)(r, ['input', 'textarea'], { readOnly: !1 }) &&
          !(0, V.isClickableInput)(r)) ||
          (0, V.isContentEditable)(r)) &&
        (0, V.getSpaceUntilMaxLength)(r) !== 0
      );
    },
    handle: (e, r) => {
      const { newValue: t, newSelectionStart: a } = (0, V.calculateNewValue)(
        e.key,
        r
      );
      (0, Xe.fireInputEvent)(r, {
        newValue: t,
        newSelectionStart: a,
        eventOverrides: { data: e.key, inputType: 'insertText' }
      });
    }
  },
  {
    matches: (e, r) =>
      e.key === 'Enter' &&
      ((0, V.isElementType)(r, 'textarea', { readOnly: !1 }) ||
        (0, V.isContentEditable)(r)) &&
      (0, V.getSpaceUntilMaxLength)(r) !== 0,
    handle: (e, r, t, a) => {
      const { newValue: n, newSelectionStart: o } = (0, V.calculateNewValue)(
          `
`,
          r
        ),
        l =
          (0, V.isContentEditable)(r) && !a.modifiers.shift
            ? 'insertParagraph'
            : 'insertLineBreak';
      (0, Xe.fireInputEvent)(r, {
        newValue: n,
        newSelectionStart: o,
        eventOverrides: { inputType: l }
      });
    }
  }
];
ao.keypressBehavior = aC;
var re = {},
  Lr = {};
Object.defineProperty(Lr, '__esModule', { value: !0 });
Lr.getKeyEventProps = nC;
Lr.getMouseEventProps = oC;
function nC(e, r) {
  var t, a;
  return {
    key: e.key,
    code: e.code,
    altKey: r.modifiers.alt,
    ctrlKey: r.modifiers.ctrl,
    metaKey: r.modifiers.meta,
    shiftKey: r.modifiers.shift,
    keyCode:
      (t = e.keyCode) != null
        ? t
        : ((a = e.key) == null ? void 0 : a.length) === 1
        ? e.key.charCodeAt(0)
        : void 0
  };
}
function oC(e) {
  return {
    altKey: e.modifiers.alt,
    ctrlKey: e.modifiers.ctrl,
    metaKey: e.modifiers.meta,
    shiftKey: e.modifiers.shift
  };
}
Object.defineProperty(re, '__esModule', { value: !0 });
re.preKeyupBehavior =
  re.preKeydownBehavior =
  re.postKeyupBehavior =
  re.keyupBehavior =
  re.keypressBehavior =
  re.keydownBehavior =
    void 0;
var lr = ae,
  ve = W,
  no = Lr,
  Di = to;
const Od = { Alt: 'alt', Control: 'ctrl', Shift: 'shift', Meta: 'meta' },
  lC = [
    ...Object.entries(Od).map(([e, r]) => ({
      matches: t => t.key === e,
      handle: (t, a, n, o) => {
        o.modifiers[r] = !0;
      }
    })),
    {
      matches: e => e.key === 'AltGraph',
      handle: (e, r, t, a) => {
        var n;
        const o =
          (n = t.keyboardMap.find(l => l.key === 'Control')) != null
            ? n
            : { key: 'Control', code: 'Control' };
        lr.fireEvent.keyDown(r, (0, no.getKeyEventProps)(o, a));
      }
    }
  ];
re.preKeydownBehavior = lC;
const iC = [
  {
    matches: e => e.key === 'CapsLock',
    handle: (e, r, t, a) => {
      a.modifiers.caps = !a.modifiers.caps;
    }
  },
  {
    matches: (e, r) =>
      e.key === 'Backspace' &&
      (0, ve.isEditable)(r) &&
      !(0, ve.isCursorAtStart)(r),
    handle: (e, r, t, a) => {
      const { newValue: n, newSelectionStart: o } = (0, ve.calculateNewValue)(
        '',
        r,
        a.carryValue,
        void 0,
        'backward'
      );
      (0, Di.fireInputEvent)(r, {
        newValue: n,
        newSelectionStart: o,
        eventOverrides: { inputType: 'deleteContentBackward' }
      }),
        (0, Di.carryValue)(r, a, n);
    }
  }
];
re.keydownBehavior = iC;
const uC = [
  {
    matches: (e, r) =>
      e.key === 'Enter' &&
      (0, ve.isElementType)(r, 'input') &&
      ['checkbox', 'radio'].includes(r.type),
    handle: (e, r) => {
      const t = r.form;
      (0, ve.hasFormSubmit)(t) && lr.fireEvent.submit(t);
    }
  },
  {
    matches: (e, r) =>
      e.key === 'Enter' &&
      ((0, ve.isClickableInput)(r) ||
        ((0, ve.isElementType)(r, 'a') && Boolean(r.href))),
    handle: (e, r, t, a) => {
      lr.fireEvent.click(r, (0, no.getMouseEventProps)(a));
    }
  },
  {
    matches: (e, r) => e.key === 'Enter' && (0, ve.isElementType)(r, 'input'),
    handle: (e, r) => {
      const t = r.form;
      t &&
        (t.querySelectorAll('input').length === 1 ||
          (0, ve.hasFormSubmit)(t)) &&
        lr.fireEvent.submit(t);
    }
  }
];
re.keypressBehavior = uC;
const sC = [
  ...Object.entries(Od).map(([e, r]) => ({
    matches: t => t.key === e,
    handle: (t, a, n, o) => {
      o.modifiers[r] = !1;
    }
  }))
];
re.preKeyupBehavior = sC;
const dC = [
  {
    matches: (e, r) => e.key === ' ' && (0, ve.isClickableInput)(r),
    handle: (e, r, t, a) => {
      lr.fireEvent.click(r, (0, no.getMouseEventProps)(a));
    }
  }
];
re.keyupBehavior = dC;
const cC = [
  {
    matches: e => e.key === 'AltGraph',
    handle: (e, r, t, a) => {
      var n;
      const o =
        (n = t.keyboardMap.find(l => l.key === 'Control')) != null
          ? n
          : { key: 'Control', code: 'Control' };
      lr.fireEvent.keyUp(r, (0, no.getKeyEventProps)(o, a));
    }
  }
];
re.postKeyupBehavior = cC;
Object.defineProperty(G, '__esModule', { value: !0 });
G.replaceBehavior =
  G.preKeyupBehavior =
  G.preKeydownBehavior =
  G.postKeyupBehavior =
  G.keyupBehavior =
  G.keypressBehavior =
  G.keydownBehavior =
    void 0;
var Fi = W,
  fC = oo(eo),
  pC = oo(ro),
  vC = oo(ao),
  mr = oo(re);
function Td(e) {
  if (typeof WeakMap != 'function') return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (Td = function (a) {
    return a ? t : r;
  })(e);
}
function oo(e, r) {
  if (!r && e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var t = Td(r);
  if (t && t.has(e)) return t.get(e);
  var a = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(a, o, l) : (a[o] = e[o]);
    }
  return (a.default = e), t && t.set(e, a), a;
}
const mC = [
  {
    matches: (e, r) =>
      e.key === 'selectall' && (0, Fi.isElementType)(r, ['input', 'textarea']),
    handle: (e, r, t, a) => {
      var n;
      (0, Fi.setSelectionRange)(
        r,
        0,
        ((n = a.carryValue) != null ? n : r.value).length
      );
    }
  }
];
G.replaceBehavior = mC;
const bC = [...mr.preKeydownBehavior];
G.preKeydownBehavior = bC;
const yC = [
  ...fC.keydownBehavior,
  ...pC.keydownBehavior,
  ...mr.keydownBehavior
];
G.keydownBehavior = yC;
const hC = [...mr.keypressBehavior, ...vC.keypressBehavior];
G.keypressBehavior = hC;
const gC = [...mr.preKeyupBehavior];
G.preKeyupBehavior = gC;
const EC = [...mr.keyupBehavior];
G.keyupBehavior = EC;
const _C = [...mr.postKeyupBehavior];
G.postKeyupBehavior = _C;
Object.defineProperty(Zn, '__esModule', { value: !0 });
Zn.keyboardImplementation = Ad;
Zn.releaseAllKeys = CC;
var $l = ae,
  xd = W,
  RC = Tl,
  Fe = wC(G),
  Sl = Lr;
function Md(e) {
  if (typeof WeakMap != 'function') return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (Md = function (a) {
    return a ? t : r;
  })(e);
}
function wC(e, r) {
  if (!r && e && e.__esModule) return e;
  if (e === null || (typeof e != 'object' && typeof e != 'function'))
    return { default: e };
  var t = Md(r);
  if (t && t.has(e)) return t.get(e);
  var a = {},
    n = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var o in e)
    if (o !== 'default' && Object.prototype.hasOwnProperty.call(e, o)) {
      var l = n ? Object.getOwnPropertyDescriptor(e, o) : null;
      l && (l.get || l.set) ? Object.defineProperty(a, o, l) : (a[o] = e[o]);
    }
  return (a.default = e), t && t.set(e, a), a;
}
async function Ad(e, r, t) {
  var a;
  const { document: n } = r,
    o = () => $d(n),
    {
      keyDef: l,
      consumedLength: u,
      releasePrevious: i,
      releaseSelf: s,
      repeat: c
    } = (a = t.repeatKey) != null ? a : (0, RC.getNextKeyDef)(e, r);
  if (!Ve(Fe.replaceBehavior, l, o(), r, t)) {
    const p = t.pressed.find(y => y.keyDef === l);
    if ((p && !t.repeatKey && Qo(l, o, r, t, p.unpreventedDefault), !i)) {
      const y = PC(l, o, r, t);
      y && OC(l, t) && qC(l, o, r, t), s && c <= 1 && Qo(l, o, r, t, y);
    }
  }
  if (
    (c > 1
      ? (t.repeatKey = {
          consumedLength: 0,
          keyDef: l,
          releasePrevious: i,
          releaseSelf: s,
          repeat: c - 1
        })
      : delete t.repeatKey,
    e.length > u || c > 1)
  )
    return r.delay > 0 && (await (0, xd.wait)(r.delay)), Ad(e.slice(u), r, t);
}
function $d(e) {
  var r;
  return (r = (0, xd.getActiveElement)(e)) != null ? r : e.body;
}
function CC(e, r) {
  const t = () => $d(e.document);
  for (const a of r.pressed) Qo(a.keyDef, t, e, r, a.unpreventedDefault);
}
function PC(e, r, t, a) {
  const n = r();
  n !== a.activeElement && ((a.carryValue = void 0), (a.carryChar = '')),
    (a.activeElement = n),
    Ve(Fe.preKeydownBehavior, e, n, t, a);
  const o = $l.fireEvent.keyDown(n, (0, Sl.getKeyEventProps)(e, a));
  return (
    a.pressed.push({ keyDef: e, unpreventedDefault: o }),
    o && Ve(Fe.keydownBehavior, e, r(), t, a),
    o
  );
}
function qC(e, r, t, a) {
  const n = r();
  $l.fireEvent.keyPress(n, (0, Sl.getKeyEventProps)(e, a)) &&
    Ve(Fe.keypressBehavior, e, r(), t, a);
}
function Qo(e, r, t, a, n) {
  const o = r();
  Ve(Fe.preKeyupBehavior, e, o, t, a);
  const l = $l.fireEvent.keyUp(o, (0, Sl.getKeyEventProps)(e, a));
  n && l && Ve(Fe.keyupBehavior, e, r(), t, a),
    (a.pressed = a.pressed.filter(u => u.keyDef !== e)),
    Ve(Fe.postKeyupBehavior, e, o, t, a);
}
function Ve(e, r, t, a, n) {
  const o = e.find(l => l.matches(r, t, a, n));
  return o && o.handle(r, t, a, n), !!o;
}
function OC(e, r) {
  var t;
  return (
    (((t = e.key) == null ? void 0 : t.length) === 1 || e.key === 'Enter') &&
    !r.modifiers.ctrl &&
    !r.modifiers.alt
  );
}
var lo = {},
  Dr = {};
Object.defineProperty(Dr, '__esModule', { value: !0 });
Dr.DOM_KEY_LOCATION = void 0;
let Yo;
Dr.DOM_KEY_LOCATION = Yo;
(function (e) {
  (e[(e.STANDARD = 0)] = 'STANDARD'),
    (e[(e.LEFT = 1)] = 'LEFT'),
    (e[(e.RIGHT = 2)] = 'RIGHT'),
    (e[(e.NUMPAD = 3)] = 'NUMPAD');
})(Yo || (Dr.DOM_KEY_LOCATION = Yo = {}));
Object.defineProperty(lo, '__esModule', { value: !0 });
lo.defaultKeyMap = void 0;
var pe = Dr;
const TC = [
  ...'0123456789'.split('').map(e => ({ code: `Digit${e}`, key: e })),
  ...')!@#$%^&*('
    .split('')
    .map((e, r) => ({ code: `Digit${r}`, key: e, shiftKey: !0 })),
  ...'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .map(e => ({ code: `Key${e.toUpperCase()}`, key: e })),
  ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    .split('')
    .map(e => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
  { code: 'Space', key: ' ' },
  {
    code: 'AltLeft',
    key: 'Alt',
    location: pe.DOM_KEY_LOCATION.LEFT,
    keyCode: 18
  },
  {
    code: 'AltRight',
    key: 'Alt',
    location: pe.DOM_KEY_LOCATION.RIGHT,
    keyCode: 18
  },
  {
    code: 'ShiftLeft',
    key: 'Shift',
    location: pe.DOM_KEY_LOCATION.LEFT,
    keyCode: 16
  },
  {
    code: 'ShiftRight',
    key: 'Shift',
    location: pe.DOM_KEY_LOCATION.RIGHT,
    keyCode: 16
  },
  {
    code: 'ControlLeft',
    key: 'Control',
    location: pe.DOM_KEY_LOCATION.LEFT,
    keyCode: 17
  },
  {
    code: 'ControlRight',
    key: 'Control',
    location: pe.DOM_KEY_LOCATION.RIGHT,
    keyCode: 17
  },
  {
    code: 'MetaLeft',
    key: 'Meta',
    location: pe.DOM_KEY_LOCATION.LEFT,
    keyCode: 93
  },
  {
    code: 'MetaRight',
    key: 'Meta',
    location: pe.DOM_KEY_LOCATION.RIGHT,
    keyCode: 93
  },
  {
    code: 'OSLeft',
    key: 'OS',
    location: pe.DOM_KEY_LOCATION.LEFT,
    keyCode: 91
  },
  {
    code: 'OSRight',
    key: 'OS',
    location: pe.DOM_KEY_LOCATION.RIGHT,
    keyCode: 91
  },
  { code: 'CapsLock', key: 'CapsLock', keyCode: 20 },
  { code: 'Backspace', key: 'Backspace', keyCode: 8 },
  { code: 'Enter', key: 'Enter', keyCode: 13 },
  { code: 'Escape', key: 'Escape', keyCode: 27 },
  { code: 'ArrowUp', key: 'ArrowUp', keyCode: 38 },
  { code: 'ArrowDown', key: 'ArrowDown', keyCode: 40 },
  { code: 'ArrowLeft', key: 'ArrowLeft', keyCode: 37 },
  { code: 'ArrowRight', key: 'ArrowRight', keyCode: 39 },
  { code: 'Home', key: 'Home', keyCode: 36 },
  { code: 'End', key: 'End', keyCode: 35 },
  { code: 'Delete', key: 'Delete', keyCode: 46 },
  { code: 'PageUp', key: 'PageUp', keyCode: 33 },
  { code: 'PageDown', key: 'PageDown', keyCode: 34 }
];
lo.defaultKeyMap = TC;
var io = {};
Object.defineProperty(io, '__esModule', { value: !0 });
io.specialCharMap = void 0;
const xC = {
  arrowLeft: '{arrowleft}',
  arrowRight: '{arrowright}',
  arrowDown: '{arrowdown}',
  arrowUp: '{arrowup}',
  enter: '{enter}',
  escape: '{esc}',
  delete: '{del}',
  backspace: '{backspace}',
  home: '{home}',
  end: '{end}',
  selectAll: '{selectall}',
  space: '{space}',
  whitespace: ' ',
  pageUp: '{pageUp}',
  pageDown: '{pageDown}'
};
io.specialCharMap = xC;
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.keyboard = o),
    (e.keyboardImplementationWrapper = l),
    Object.defineProperty(e, 'specialCharMap', {
      enumerable: !0,
      get: function () {
        return n.specialCharMap;
      }
    });
  var r = ae,
    t = Zn,
    a = lo,
    n = io;
  function o(i, s) {
    var c;
    const { promise: f, state: p } = l(i, s);
    return ((c = s == null ? void 0 : s.delay) != null ? c : 0) > 0
      ? (0, r.getConfig)().asyncWrapper(() => f.then(() => p))
      : (f.catch(console.error), p);
  }
  function l(i, s = {}) {
    const {
        keyboardState: c = u(),
        delay: f = 0,
        document: p = document,
        autoModify: y = !1,
        keyboardMap: P = a.defaultKeyMap
      } = s,
      v = { delay: f, document: p, autoModify: y, keyboardMap: P };
    return {
      promise: (0, t.keyboardImplementation)(i, v, c),
      state: c,
      releaseAllKeys: () => (0, t.releaseAllKeys)(v, c)
    };
  }
  function u() {
    return {
      activeElement: null,
      pressed: [],
      carryChar: '',
      modifiers: { alt: !1, caps: !1, ctrl: !1, meta: !1, shift: !1 }
    };
  }
})(Ol);
Object.defineProperty(ql, '__esModule', { value: !0 });
ql.typeImplementation = $C;
var Yr = W,
  MC = ze,
  AC = Ol;
async function $C(
  e,
  r,
  {
    delay: t,
    skipClick: a = !1,
    skipAutoClose: n = !1,
    initialSelectionStart: o = void 0,
    initialSelectionEnd: l = void 0
  }
) {
  if (e.disabled) return;
  a || (0, MC.click)(e);
  const u = () => (0, Yr.getActiveElement)(e.ownerDocument),
    i = (0, Yr.getValue)(u()),
    { selectionStart: s, selectionEnd: c } = (0, Yr.getSelectionRange)(e);
  i != null &&
    (s === null || s === 0) &&
    (c === null || c === 0) &&
    (0, Yr.setSelectionRange)(
      u(),
      o != null ? o : i.length,
      l != null ? l : i.length
    );
  const { promise: f, releaseAllKeys: p } = (0,
  AC.keyboardImplementationWrapper)(r, { delay: t, document: e.ownerDocument });
  return t > 0 && (await f), n || p(), f;
}
Object.defineProperty(Jn, '__esModule', { value: !0 });
Jn.type = BC;
var SC = ae,
  Vi = ql;
function BC(e, r, n = {}) {
  var o = n,
    { delay: t = 0 } = o,
    a = Ul(o, ['delay']);
  return t > 0
    ? (0, SC.getConfig)().asyncWrapper(() =>
        (0, Vi.typeImplementation)(e, r, X({ delay: t }, a))
      )
    : void (0, Vi.typeImplementation)(e, r, X({ delay: t }, a)).catch(
        console.error
      );
}
var Bl = {};
Object.defineProperty(Bl, '__esModule', { value: !0 });
Bl.clear = kC;
var Ui = W,
  IC = Jn;
function kC(e) {
  var r, t;
  if (!(0, Ui.isElementType)(e, ['input', 'textarea']))
    throw new Error(
      'clear currently only supports input and textarea elements.'
    );
  if ((0, Ui.isDisabled)(e)) return;
  const a = e.type;
  a !== 'textarea' && (e.type = 'text'),
    (0, IC.type)(e, '{selectall}{del}', {
      delay: 0,
      initialSelectionStart: (r = e.selectionStart) != null ? r : void 0,
      initialSelectionEnd: (t = e.selectionEnd) != null ? t : void 0
    }),
    a !== 'textarea' && (e.type = a);
}
var Il = {};
Object.defineProperty(Il, '__esModule', { value: !0 });
Il.tab = DC;
var Xr = ae,
  gr = W,
  NC = vr,
  jC = jr;
function LC(e, r, t, a) {
  if ((0, gr.isDocument)(a) && ((e === 0 && r) || (e === t.length - 1 && !r)))
    return a.body;
  const n = r ? e - 1 : e + 1,
    o = r ? t.length - 1 : 0;
  return t[n] || t[o];
}
function DC({ shift: e = !1, focusTrap: r } = {}) {
  var t, a;
  const n =
      (t = (a = r) == null ? void 0 : a.ownerDocument) != null ? t : document,
    o = (0, gr.getActiveElement)(n);
  r || (r = n);
  const l = r.querySelectorAll(gr.FOCUSABLE_SELECTOR),
    u = Array.from(l).filter(
      h =>
        h === o ||
        (h.getAttribute('tabindex') !== '-1' &&
          !(0, gr.isDisabled)(h) &&
          (0, gr.isVisible)(h))
    );
  if (u.length === 0) return;
  const i = u
      .map((h, _) => ({ el: h, idx: _ }))
      .sort((h, _) => {
        if (o && o.getAttribute('tabindex') === '-1') return h.idx - _.idx;
        const q = Number(h.el.getAttribute('tabindex')),
          x = Number(_.el.getAttribute('tabindex')),
          M = q - x;
        return M === 0 ? h.idx - _.idx : M;
      })
      .map(({ el: h }) => h),
    s = {};
  let c = [];
  i.forEach(h => {
    const _ = h;
    if (_.type === 'radio' && _.name) {
      const q = o;
      if (q && q.type === _.type && q.name === _.name) {
        _ === q && c.push(_);
        return;
      }
      if (_.checked) {
        (c = c.filter(x => x.type !== _.type || x.name !== _.name)),
          c.push(_),
          (s[_.name] = _);
        return;
      }
      if (typeof s[_.name] != 'undefined') return;
    }
    c.push(_);
  });
  const f = c.findIndex(h => h === o),
    p = LC(f, e, c, r),
    y = { key: 'Shift', keyCode: 16, shiftKey: !0 },
    P = { key: 'Tab', keyCode: 9, shiftKey: e };
  let v = !0;
  o &&
    (e && Xr.fireEvent.keyDown(o, X({}, y)),
    (v = Xr.fireEvent.keyDown(o, X({}, P))));
  const E = !v && o ? o : p;
  v && (p === n.body ? o && (0, jC.blur)(o) : (0, NC.focus)(p)),
    Xr.fireEvent.keyUp(E, X({}, P)),
    e && Xr.fireEvent.keyUp(E, Vr(X({}, y), { shiftKey: !1 }));
}
var kl = {};
Object.defineProperty(kl, '__esModule', { value: !0 });
kl.upload = HC;
var To = ae,
  FC = ze,
  VC = jr,
  UC = vr,
  xo = W;
function HC(e, r, t, { applyAccept: a = !1 } = {}) {
  var n;
  const o = (0, xo.isElementType)(e, 'label') ? e.control : e;
  if (!o || !(0, xo.isElementType)(o, 'input', { type: 'file' }))
    throw new TypeError(
      `The ${o === e ? 'given' : 'associated'} ${
        o == null ? void 0 : o.tagName
      } element does not accept file uploads`
    );
  if ((0, xo.isDisabled)(e)) return;
  (0, FC.click)(e, t == null ? void 0 : t.clickInit);
  const l = (Array.isArray(r) ? r : [r])
    .filter(i => !a || WC(i, o.accept))
    .slice(0, o.multiple ? void 0 : 1);
  if (
    ((0, VC.blur)(e),
    (0, UC.focus)(e),
    l.length === ((n = o.files) == null ? void 0 : n.length) &&
      l.every((i, s) => {
        var c;
        return i === ((c = o.files) == null ? void 0 : c.item(s));
      }))
  )
    return;
  const u = Vr(X({}, l), {
    length: l.length,
    item: i => l[i],
    [Symbol.iterator]() {
      let i = 0;
      return { next: () => ({ done: i >= l.length, value: l[i++] }) };
    }
  });
  (0, To.fireEvent)(
    o,
    (0, To.createEvent)('input', o, {
      target: { files: u },
      bubbles: !0,
      cancelable: !1,
      composed: !0
    })
  ),
    To.fireEvent.change(
      o,
      X({ target: { files: u } }, t == null ? void 0 : t.changeInit)
    );
}
function WC(e, r) {
  if (!r) return !0;
  const t = ['audio/*', 'image/*', 'video/*'];
  return r
    .split(',')
    .some(a =>
      a.startsWith('.')
        ? e.name.endsWith(a)
        : t.includes(a)
        ? e.type.startsWith(a.substr(0, a.length - 1))
        : e.type === a
    );
}
var dr = {};
Object.defineProperty(dr, '__esModule', { value: !0 });
dr.selectOptions = dr.deselectOptions = void 0;
var F = ae,
  hr = W,
  Hi = ze,
  Wi = vr,
  zi = pr;
function Sd(e, r, t, a, { skipPointerEventsCheck: n = !1 } = {}) {
  if (!e && !r.multiple)
    throw (0, F.getConfig)().getElementError(
      'Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.',
      r
    );
  const o = Array.isArray(t) ? t : [t],
    l = Array.from(r.querySelectorAll('option, [role="option"]')),
    u = o
      .map(s => {
        if (typeof s != 'string' && l.includes(s)) return s;
        {
          const c = l.find(f => f.value === s || f.innerHTML === s);
          if (c) return c;
          throw (0, F.getConfig)().getElementError(
            `Value "${String(s)}" not found in options`,
            r
          );
        }
      })
      .filter(s => !(0, hr.isDisabled)(s));
  if ((0, hr.isDisabled)(r) || !u.length) return;
  if ((0, hr.isElementType)(r, 'select'))
    if (r.multiple)
      for (const s of u) {
        const c = n ? !0 : (0, hr.hasPointerEvents)(s);
        c &&
          (F.fireEvent.pointerOver(s, a),
          F.fireEvent.pointerEnter(r, a),
          F.fireEvent.mouseOver(s),
          F.fireEvent.mouseEnter(r),
          F.fireEvent.pointerMove(s, a),
          F.fireEvent.mouseMove(s, a),
          F.fireEvent.pointerDown(s, a),
          F.fireEvent.mouseDown(s, a)),
          (0, Wi.focus)(r),
          c && (F.fireEvent.pointerUp(s, a), F.fireEvent.mouseUp(s, a)),
          i(s),
          c && F.fireEvent.click(s, a);
      }
    else if (u.length === 1) {
      const s = n ? !0 : (0, hr.hasPointerEvents)(r);
      s ? (0, Hi.click)(r, a, { skipPointerEventsCheck: n }) : (0, Wi.focus)(r),
        i(u[0]),
        s &&
          (F.fireEvent.pointerOver(r, a),
          F.fireEvent.pointerEnter(r, a),
          F.fireEvent.mouseOver(r),
          F.fireEvent.mouseEnter(r),
          F.fireEvent.pointerUp(r, a),
          F.fireEvent.mouseUp(r, a),
          F.fireEvent.click(r, a));
    } else
      throw (0, F.getConfig)().getElementError(
        'Cannot select multiple options on a non-multiple select',
        r
      );
  else if (r.getAttribute('role') === 'listbox')
    u.forEach(s => {
      (0, zi.hover)(s, a, { skipPointerEventsCheck: n }),
        (0, Hi.click)(s, a, { skipPointerEventsCheck: n }),
        (0, zi.unhover)(s, a, { skipPointerEventsCheck: n });
    });
  else
    throw (0, F.getConfig)().getElementError(
      'Cannot select options on elements that are neither select nor listbox elements',
      r
    );
  function i(s) {
    (s.selected = e),
      (0, F.fireEvent)(
        r,
        (0, F.createEvent)(
          'input',
          r,
          X({ bubbles: !0, cancelable: !1, composed: !0 }, a)
        )
      ),
      F.fireEvent.change(r, a);
  }
}
const zC = Sd.bind(null, !0);
dr.selectOptions = zC;
const KC = Sd.bind(null, !1);
dr.deselectOptions = KC;
var Nl = {};
Object.defineProperty(Nl, '__esModule', { value: !0 });
Nl.paste = QC;
var Ki = ae,
  be = W;
function GC(e) {
  return (
    ((0, be.isElementType)(e, 'input') &&
      Boolean(be.editableInputTypes[e.type])) ||
    (0, be.isElementType)(e, 'textarea')
  );
}
function QC(
  e,
  r,
  t,
  { initialSelectionStart: a, initialSelectionEnd: n } = {}
) {
  if (!GC(e))
    throw new TypeError(`The given ${e.tagName} element is currently unsupported.
      A PR extending this implementation would be very much welcome at https://github.com/testing-library/user-event`);
  if (
    (0, be.isDisabled)(e) ||
    ((0, be.eventWrapper)(() => e.focus()),
    e.selectionStart === 0 &&
      e.selectionEnd === 0 &&
      (0, be.setSelectionRange)(
        e,
        a != null ? a : e.value.length,
        n != null ? n : e.value.length
      ),
    Ki.fireEvent.paste(e, t),
    e.readOnly)
  )
    return;
  r = r.substr(0, (0, be.getSpaceUntilMaxLength)(e));
  const { newValue: o, newSelectionStart: l } = (0, be.calculateNewValue)(r, e);
  Ki.fireEvent.input(e, { inputType: 'insertFromPaste', target: { value: o } }),
    (0, be.setSelectionRange)(e, { newSelectionStart: l, selectionEnd: l }, {});
}
(function (e) {
  Object.defineProperty(e, '__esModule', { value: !0 }),
    (e.default = void 0),
    Object.defineProperty(e, 'specialChars', {
      enumerable: !0,
      get: function () {
        return s.specialCharMap;
      }
    });
  var r = ze,
    t = Jn,
    a = Bl,
    n = Il,
    o = pr,
    l = kl,
    u = dr,
    i = Nl,
    s = Ol,
    f = {
      click: r.click,
      dblClick: r.dblClick,
      type: t.type,
      clear: a.clear,
      tab: n.tab,
      hover: o.hover,
      unhover: o.unhover,
      upload: l.upload,
      selectOptions: u.selectOptions,
      deselectOptions: u.deselectOptions,
      paste: i.paste,
      keyboard: s.keyboard
    };
  e.default = f;
})(vd);
var YC = Ld(vd),
  XC =
    (globalThis && globalThis.__makeTemplateObject) ||
    function (e, r) {
      return (
        Object.defineProperty
          ? Object.defineProperty(e, 'raw', { value: r })
          : (e.raw = r),
        e
      );
    },
  Te =
    (globalThis && globalThis.__assign) ||
    function () {
      return (
        (Te =
          Object.assign ||
          function (e) {
            for (var r, t = 1, a = arguments.length; t < a; t++) {
              r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }),
        Te.apply(this, arguments)
      );
    },
  Gi = { timeout: 2147483647, interval: 2147483647 },
  C = Yi(Te({}, pd), {
    intercept: function (e, r) {
      return r[0] === 'fireEvent' || e.startsWith('findBy');
    },
    getArgs: function (e, r) {
      if (!r.isDebugging) return e.args;
      if (e.method.startsWith('findBy')) {
        var t = e.args,
          a = t[0],
          n = t[1],
          o = t[2];
        return [a, n, Te(Te({}, o), Gi)];
      }
      if (e.method.startsWith('waitFor')) {
        var l = e.args,
          u = l[0],
          i = l[1];
        return [u, Te(Te({}, i), Gi)];
      }
      return e.args;
    }
  });
C.screen = Object.entries(C.screen).reduce(function (e, r) {
  var t = r[0],
    a = r[1];
  return Object.defineProperty(e, t, {
    get: function () {
      return (
        Dd.warn(
          Fd(
            Qi ||
              (Qi = XC(
                [
                  "\n          You are using Testing Library's `screen` object. Use `within(canvasElement)` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        "
                ],
                [
                  "\n          You are using Testing Library's \\`screen\\` object. Use \\`within(canvasElement)\\` instead.\n          More info: https://storybook.js.org/docs/react/essentials/interactions\n        "
                ]
              ))
          )
        ),
        a
      );
    }
  });
}, Te({}, C.screen));
C.buildQueries;
C.configure;
C.createEvent;
C.findAllByAltText;
C.findAllByDisplayValue;
C.findAllByLabelText;
C.findAllByPlaceholderText;
C.findAllByRole;
C.findAllByTestId;
C.findAllByText;
C.findAllByTitle;
C.findByAltText;
C.findByDisplayValue;
C.findByLabelText;
C.findByPlaceholderText;
C.findByRole;
C.findByTestId;
C.findByText;
C.findByTitle;
C.fireEvent;
C.getAllByAltText;
C.getAllByDisplayValue;
C.getAllByLabelText;
C.getAllByPlaceholderText;
C.getAllByRole;
C.getAllByTestId;
C.getAllByText;
C.getAllByTitle;
C.getByAltText;
C.getByDisplayValue;
C.getByLabelText;
C.getByPlaceholderText;
C.getByRole;
C.getByTestId;
C.getByText;
C.getByTitle;
C.getConfig;
C.getDefaultNormalizer;
C.getElementError;
C.getNodeText;
C.getQueriesForElement;
C.getRoles;
C.getSuggestedQuery;
C.isInaccessible;
C.logDOM;
C.logRoles;
C.prettyDOM;
C.queries;
C.queryAllByAltText;
C.queryAllByAttribute;
C.queryAllByDisplayValue;
C.queryAllByLabelText;
C.queryAllByPlaceholderText;
C.queryAllByRole;
C.queryAllByTestId;
C.queryAllByText;
C.queryAllByTitle;
C.queryByAltText;
C.queryByAttribute;
C.queryByDisplayValue;
C.queryByLabelText;
C.queryByPlaceholderText;
C.queryByRole;
C.queryByTestId;
C.queryByText;
C.queryByTitle;
C.queryHelpers;
C.screen;
C.waitFor;
C.waitForElementToBeRemoved;
var JC = C.within;
C.prettyFormat;
var ZC = Yi({ userEvent: YC }, { intercept: !0 }).userEvent,
  Qi;
const Er = () => {
  const [e, r] = Ud.useState();
  return Qe('article', {
    children: [
      Z(Hd, {
        user: e,
        onLogin: () => r({ name: 'Jane Doe' }),
        onLogout: () => r(void 0),
        onCreateAccount: () => r({ name: 'Jane Doe' })
      }),
      Qe('section', {
        children: [
          Z('h2', { children: 'Pages in Storybook' }),
          Qe('p', {
            children: [
              'We recommend building UIs with a',
              ' ',
              Z('a', {
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: Z('strong', { children: 'component-driven' })
              }),
              ' ',
              'process starting with atomic components and ending with pages.'
            ]
          }),
          Z('p', {
            children:
              'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:'
          }),
          Qe('ul', {
            children: [
              Z('li', {
                children:
                  'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'
              }),
              Z('li', {
                children:
                  'Assemble data in the page component from your services. You can mock these services out using Storybook.'
              })
            ]
          }),
          Qe('p', {
            children: [
              'Get a guided tutorial on component-driven development at',
              ' ',
              Z('a', {
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'Storybook tutorials'
              }),
              '. Read more in the',
              ' ',
              Z('a', {
                href: 'https://storybook.js.org/docs',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'docs'
              }),
              '.'
            ]
          }),
          Qe('div', {
            className: 'tip-wrapper',
            children: [
              Z('span', { className: 'tip', children: 'Tip' }),
              ' Adjust the width of the canvas with the',
              ' ',
              Z('svg', {
                width: '10',
                height: '10',
                viewBox: '0 0 12 12',
                xmlns: 'http://www.w3.org/2000/svg',
                children: Z('g', {
                  fill: 'none',
                  fillRule: 'evenodd',
                  children: Z('path', {
                    d: 'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
                    id: 'a',
                    fill: '#999'
                  })
                })
              }),
              'Viewports addon in the toolbar'
            ]
          })
        ]
      })
    ]
  });
};
try {
  (Er.displayName = 'Page'),
    (Er.__docgenInfo = { description: '', displayName: 'Page', props: {} }),
    typeof STORYBOOK_REACT_CLASSES != 'undefined' &&
      (STORYBOOK_REACT_CLASSES['src/stories/Page.tsx#Page'] = {
        docgenInfo: Er.__docgenInfo,
        name: 'Page',
        path: 'src/stories/Page.tsx#Page'
      });
} catch {}
var sP = {
  title: 'Example/Page',
  component: Er,
  parameters: {
    storySource: {
      source: `import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
`,
      locationsMap: {
        'logged-out': {
          startLoc: { col: 46, line: 15 },
          endLoc: { col: 74, line: 15 },
          startBody: { col: 46, line: 15 },
          endBody: { col: 74, line: 15 }
        },
        'logged-in': {
          startLoc: { col: 46, line: 15 },
          endLoc: { col: 74, line: 15 },
          startBody: { col: 46, line: 15 },
          endBody: { col: 74, line: 15 }
        }
      }
    },
    layout: 'fullscreen'
  }
};
const Bd = e => Z(Er, X({}, e)),
  dP = Bd.bind({}),
  eP = Bd.bind({});
eP.play = async ({ canvasElement: e }) => {
  const t = await JC(e).getByRole('button', { name: /Log in/i });
  await ZC.click(t);
};
const cP = ['LoggedOut', 'LoggedIn'];
export {
  eP as LoggedIn,
  dP as LoggedOut,
  cP as __namedExportsOrder,
  sP as default
};
//# sourceMappingURL=Page.stories.4551adda.js.map
