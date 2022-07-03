import { c as A, h as F, F as D, p as x } from './iframe.99391157.js';
import { i as G } from './instrumenter.4d3b6f19.js';
var f = {};
Object.defineProperty(f, '__esModule', { value: !0 });
f.spyOn = f.mocked = f.fn = R = f.ModuleMocker = void 0;
function k(o, e, t) {
  return (
    e in o
      ? Object.defineProperty(o, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (o[e] = t),
    o
  );
}
const d = 'mockConstructor',
  E = /[\s!-\/:-@\[-`{-~]/,
  T = new RegExp(E.source, 'g'),
  V = new Set([
    'arguments',
    'await',
    'break',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'eval',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'interface',
    'let',
    'new',
    'null',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'static',
    'super',
    'switch',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield'
  ]);
function W(o, e) {
  let t;
  switch (e) {
    case 1:
      t = function (r) {
        return o.apply(this, arguments);
      };
      break;
    case 2:
      t = function (r, i) {
        return o.apply(this, arguments);
      };
      break;
    case 3:
      t = function (r, i, l) {
        return o.apply(this, arguments);
      };
      break;
    case 4:
      t = function (r, i, l, c) {
        return o.apply(this, arguments);
      };
      break;
    case 5:
      t = function (r, i, l, c, n) {
        return o.apply(this, arguments);
      };
      break;
    case 6:
      t = function (r, i, l, c, n, s) {
        return o.apply(this, arguments);
      };
      break;
    case 7:
      t = function (r, i, l, c, n, s, u) {
        return o.apply(this, arguments);
      };
      break;
    case 8:
      t = function (r, i, l, c, n, s, u, a) {
        return o.apply(this, arguments);
      };
      break;
    case 9:
      t = function (r, i, l, c, n, s, u, a, p) {
        return o.apply(this, arguments);
      };
      break;
    default:
      t = function () {
        return o.apply(this, arguments);
      };
      break;
  }
  return t;
}
function b(o) {
  return Object.prototype.toString.apply(o).slice(8, -1);
}
function j(o) {
  const e = b(o);
  return e === 'Function' || e === 'AsyncFunction' || e === 'GeneratorFunction'
    ? 'function'
    : Array.isArray(o)
    ? 'array'
    : e === 'Object'
    ? 'object'
    : e === 'Number' || e === 'String' || e === 'Boolean' || e === 'Symbol'
    ? 'constant'
    : e === 'Map' || e === 'WeakMap' || e === 'Set'
    ? 'collection'
    : e === 'RegExp'
    ? 'regexp'
    : o === void 0
    ? 'undefined'
    : o === null
    ? 'null'
    : null;
}
function $(o, e) {
  if (
    e === 'arguments' ||
    e === 'caller' ||
    e === 'callee' ||
    e === 'name' ||
    e === 'length'
  ) {
    const t = b(o);
    return (
      t === 'Function' || t === 'AsyncFunction' || t === 'GeneratorFunction'
    );
  }
  return e === 'source' ||
    e === 'global' ||
    e === 'ignoreCase' ||
    e === 'multiline'
    ? b(o) === 'RegExp'
    : !1;
}
class I {
  constructor(e) {
    k(this, '_environmentGlobal', void 0),
      k(this, '_mockState', void 0),
      k(this, '_mockConfigRegistry', void 0),
      k(this, '_spyState', void 0),
      k(this, '_invocationCallCounter', void 0),
      (this._environmentGlobal = e),
      (this._mockState = new WeakMap()),
      (this._mockConfigRegistry = new WeakMap()),
      (this._spyState = new Set()),
      (this._invocationCallCounter = 1);
  }
  _getSlots(e) {
    if (!e) return [];
    const t = new Set(),
      r = this._environmentGlobal.Object.prototype,
      i = this._environmentGlobal.Function.prototype,
      l = this._environmentGlobal.RegExp.prototype,
      c = Object.prototype,
      n = Function.prototype,
      s = RegExp.prototype;
    for (
      ;
      e != null &&
      e !== r &&
      e !== i &&
      e !== l &&
      e !== c &&
      e !== n &&
      e !== s;

    ) {
      const u = Object.getOwnPropertyNames(e);
      for (let a = 0; a < u.length; a++) {
        const p = u[a];
        if (!$(e, p)) {
          const _ = Object.getOwnPropertyDescriptor(e, p);
          ((_ !== void 0 && !_.get) || e.__esModule) && t.add(p);
        }
      }
      e = Object.getPrototypeOf(e);
    }
    return Array.from(t);
  }
  _ensureMockConfig(e) {
    let t = this._mockConfigRegistry.get(e);
    return (
      t ||
        ((t = this._defaultMockConfig()), this._mockConfigRegistry.set(e, t)),
      t
    );
  }
  _ensureMockState(e) {
    let t = this._mockState.get(e);
    return (
      t || ((t = this._defaultMockState()), this._mockState.set(e, t)),
      t.calls.length > 0 && (t.lastCall = t.calls[t.calls.length - 1]),
      t
    );
  }
  _defaultMockConfig() {
    return {
      mockImpl: void 0,
      mockName: 'jest.fn()',
      specificMockImpls: [],
      specificReturnValues: []
    };
  }
  _defaultMockState() {
    return { calls: [], instances: [], invocationCallOrder: [], results: [] };
  }
  _makeComponent(e, t) {
    if (e.type === 'object') return new this._environmentGlobal.Object();
    if (e.type === 'array') return new this._environmentGlobal.Array();
    if (e.type === 'regexp') return new this._environmentGlobal.RegExp('');
    if (
      e.type === 'constant' ||
      e.type === 'collection' ||
      e.type === 'null' ||
      e.type === 'undefined'
    )
      return e.value;
    if (e.type === 'function') {
      const r =
          (e.members && e.members.prototype && e.members.prototype.members) ||
          {},
        i = this._getSlots(r),
        l = this,
        c = W(function (...s) {
          const u = l._ensureMockState(n),
            a = l._ensureMockConfig(n);
          u.instances.push(this), u.calls.push(s);
          const p = { type: 'incomplete', value: void 0 };
          u.results.push(p),
            u.invocationCallOrder.push(l._invocationCallCounter++);
          let _,
            O,
            g = !1;
          try {
            _ = (() => {
              if (this instanceof n) {
                i.forEach(h => {
                  if (r[h].type === 'function') {
                    const P = this[h];
                    (this[h] = l.generateFromMetadata(r[h])),
                      (this[h]._protoImpl = P);
                  }
                });
                const M = a.specificMockImpls.length
                  ? a.specificMockImpls.shift()
                  : a.mockImpl;
                return M && M.apply(this, arguments);
              }
              let m = a.specificMockImpls.shift();
              if ((m === void 0 && (m = a.mockImpl), m))
                return m.apply(this, arguments);
              if (n._protoImpl) return n._protoImpl.apply(this, arguments);
            })();
          } catch (m) {
            throw ((O = m), (g = !0), m);
          } finally {
            (p.type = g ? 'throw' : 'return'), (p.value = g ? O : _);
          }
          return _;
        }, e.length || 0),
        n = this._createMockFunction(e, c);
      return (
        (n._isMockFunction = !0),
        (n.getMockImplementation = () => this._ensureMockConfig(n).mockImpl),
        typeof t == 'function' && this._spyState.add(t),
        this._mockState.set(n, this._defaultMockState()),
        this._mockConfigRegistry.set(n, this._defaultMockConfig()),
        Object.defineProperty(n, 'mock', {
          configurable: !1,
          enumerable: !0,
          get: () => this._ensureMockState(n),
          set: s => this._mockState.set(n, s)
        }),
        (n.mockClear = () => (this._mockState.delete(n), n)),
        (n.mockReset = () => (
          n.mockClear(), this._mockConfigRegistry.delete(n), n
        )),
        (n.mockRestore = () => (n.mockReset(), t ? t() : void 0)),
        (n.mockReturnValueOnce = s => n.mockImplementationOnce(() => s)),
        (n.mockResolvedValueOnce = s =>
          n.mockImplementationOnce(() => Promise.resolve(s))),
        (n.mockRejectedValueOnce = s =>
          n.mockImplementationOnce(() => Promise.reject(s))),
        (n.mockReturnValue = s => n.mockImplementation(() => s)),
        (n.mockResolvedValue = s =>
          n.mockImplementation(() => Promise.resolve(s))),
        (n.mockRejectedValue = s =>
          n.mockImplementation(() => Promise.reject(s))),
        (n.mockImplementationOnce = s => (
          this._ensureMockConfig(n).specificMockImpls.push(s), n
        )),
        (n.mockImplementation = s => {
          const u = this._ensureMockConfig(n);
          return (u.mockImpl = s), n;
        }),
        (n.mockReturnThis = () =>
          n.mockImplementation(function () {
            return this;
          })),
        (n.mockName = s => {
          if (s) {
            const u = this._ensureMockConfig(n);
            u.mockName = s;
          }
          return n;
        }),
        (n.getMockName = () =>
          this._ensureMockConfig(n).mockName || 'jest.fn()'),
        e.mockImpl && n.mockImplementation(e.mockImpl),
        n
      );
    } else {
      const r = e.type || 'undefined type';
      throw new Error('Unrecognized type ' + r);
    }
  }
  _createMockFunction(e, t) {
    let r = e.name;
    if (!r) return t;
    const i = 'bound ';
    let l = '';
    if (r && r.startsWith(i))
      do (r = r.substring(i.length)), (l = '.bind(null)');
      while (r && r.startsWith(i));
    if (r === d) return t;
    (V.has(r) || /^\d/.test(r)) && (r = '$' + r),
      E.test(r) && (r = r.replace(T, '$'));
    const c =
      'return function ' +
      r +
      '() {return ' +
      d +
      '.apply(this,arguments);}' +
      l;
    return new this._environmentGlobal.Function(d, c)(t);
  }
  _generateMock(e, t, r) {
    const i = this._makeComponent(e);
    return (
      e.refID != null && (r[e.refID] = i),
      this._getSlots(e.members).forEach(l => {
        const c = (e.members && e.members[l]) || {};
        c.ref != null
          ? t.push(
              (function (n) {
                return () => (i[l] = r[n]);
              })(c.ref)
            )
          : (i[l] = this._generateMock(c, t, r));
      }),
      e.type !== 'undefined' &&
        e.type !== 'null' &&
        i.prototype &&
        typeof i.prototype == 'object' &&
        (i.prototype.constructor = i),
      i
    );
  }
  generateFromMetadata(e) {
    const t = [],
      r = {},
      i = this._generateMock(e, t, r);
    return t.forEach(l => l()), i;
  }
  getMetadata(e, t) {
    const r = t || new Map(),
      i = r.get(e);
    if (i != null) return { ref: i };
    const l = j(e);
    if (!l) return null;
    const c = { type: l };
    if (
      l === 'constant' ||
      l === 'collection' ||
      l === 'undefined' ||
      l === 'null'
    )
      return (c.value = e), c;
    l === 'function' &&
      ((c.name = e.name),
      e._isMockFunction === !0 && (c.mockImpl = e.getMockImplementation())),
      (c.refID = r.size),
      r.set(e, c.refID);
    let n = null;
    return (
      l !== 'array' &&
        this._getSlots(e).forEach(s => {
          if (l === 'function' && e._isMockFunction === !0 && s.match(/^mock/))
            return;
          const u = this.getMetadata(e[s], r);
          u && (n || (n = {}), (n[s] = u));
        }),
      n && (c.members = n),
      c
    );
  }
  isMockFunction(e) {
    return !!e && e._isMockFunction === !0;
  }
  fn(e) {
    const t = e ? e.length : 0,
      r = this._makeComponent({ length: t, type: 'function' });
    return e && r.mockImplementation(e), r;
  }
  spyOn(e, t, r) {
    if (r) return this._spyOnProperty(e, t, r);
    if (typeof e != 'object' && typeof e != 'function')
      throw new Error(
        'Cannot spyOn on a primitive value; ' + this._typeOf(e) + ' given'
      );
    const i = e[t];
    if (!this.isMockFunction(i)) {
      if (typeof i != 'function')
        throw new Error(
          'Cannot spy the ' +
            t +
            ' property because it is not a function; ' +
            this._typeOf(i) +
            ' given instead'
        );
      const l = Object.prototype.hasOwnProperty.call(e, t);
      let c = Object.getOwnPropertyDescriptor(e, t),
        n = Object.getPrototypeOf(e);
      for (; !c && n !== null; )
        (c = Object.getOwnPropertyDescriptor(n, t)),
          (n = Object.getPrototypeOf(n));
      let s;
      if (c && c.get) {
        const u = c.get;
        (s = this._makeComponent({ type: 'function' }, () => {
          (c.get = u), Object.defineProperty(e, t, c);
        })),
          (c.get = () => s),
          Object.defineProperty(e, t, c);
      } else
        (s = this._makeComponent({ type: 'function' }, () => {
          l ? (e[t] = i) : delete e[t];
        })),
          (e[t] = s);
      s.mockImplementation(function () {
        return i.apply(this, arguments);
      });
    }
    return e[t];
  }
  _spyOnProperty(e, t, r = 'get') {
    if (typeof e != 'object' && typeof e != 'function')
      throw new Error(
        'Cannot spyOn on a primitive value; ' + this._typeOf(e) + ' given'
      );
    if (!e)
      throw new Error('spyOn could not find an object to spy upon for ' + t);
    if (!t) throw new Error('No property name supplied');
    let i = Object.getOwnPropertyDescriptor(e, t),
      l = Object.getPrototypeOf(e);
    for (; !i && l !== null; )
      (i = Object.getOwnPropertyDescriptor(l, t)),
        (l = Object.getPrototypeOf(l));
    if (!i) throw new Error(t + ' property does not exist');
    if (!i.configurable) throw new Error(t + ' is not declared configurable');
    if (!i[r])
      throw new Error('Property ' + t + ' does not have access type ' + r);
    const c = i[r];
    if (!this.isMockFunction(c)) {
      if (typeof c != 'function')
        throw new Error(
          'Cannot spy the ' +
            t +
            ' property because it is not a function; ' +
            this._typeOf(c) +
            ' given instead'
        );
      (i[r] = this._makeComponent({ type: 'function' }, () => {
        (i[r] = c), Object.defineProperty(e, t, i);
      })),
        i[r].mockImplementation(function () {
          return c.apply(this, arguments);
        });
    }
    return Object.defineProperty(e, t, i), i[r];
  }
  clearAllMocks() {
    this._mockState = new WeakMap();
  }
  resetAllMocks() {
    (this._mockConfigRegistry = new WeakMap()),
      (this._mockState = new WeakMap());
  }
  restoreAllMocks() {
    this._spyState.forEach(e => e()), (this._spyState = new Set());
  }
  _typeOf(e) {
    return e == null ? '' + e : typeof e;
  }
  mocked(e, t = !1) {
    return e;
  }
}
var R = (f.ModuleMocker = I);
const y = new I(A),
  U = y.fn.bind(y);
f.fn = U;
const H = y.spyOn.bind(y);
f.spyOn = H;
const N = y.mocked.bind(y);
f.mocked = N;
function z(o, e) {
  return Y(o) || L(o, e) || K(o, e) || J();
}
function J() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function K(o, e) {
  if (!!o) {
    if (typeof o == 'string') return w(o, e);
    var t = Object.prototype.toString.call(o).slice(8, -1);
    if (
      (t === 'Object' && o.constructor && (t = o.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(o);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return w(o, e);
  }
}
function w(o, e) {
  (e == null || e > o.length) && (e = o.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = o[t];
  return r;
}
function L(o, e) {
  var t =
    o == null
      ? null
      : (typeof Symbol != 'undefined' && o[Symbol.iterator]) || o['@@iterator'];
  if (t != null) {
    var r = [],
      i = !0,
      l = !1,
      c,
      n;
    try {
      for (
        t = t.call(o);
        !(i = (c = t.next()).done) && (r.push(c.value), !(e && r.length === e));
        i = !0
      );
    } catch (s) {
      (l = !0), (n = s);
    } finally {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (l) throw n;
      }
    }
    return r;
  }
}
function Y(o) {
  if (Array.isArray(o)) return o;
}
var C = new R(global),
  B = C.fn.bind(C),
  q = G({ action: B }, { retain: !0 }),
  Q = q.action,
  S = F.getChannel(),
  v = [];
S.on(D, function () {
  return v.forEach(function (o) {
    var e;
    return o == null || (e = o.mockClear) === null || e === void 0
      ? void 0
      : e.call(o);
  });
});
S.on(x, function (o) {
  var e = o.newPhase;
  e === 'loading' &&
    v.forEach(function (t) {
      var r;
      return t == null || (r = t.mockClear) === null || r === void 0
        ? void 0
        : r.call(t);
    });
});
var X = function (e) {
    var t = e.id,
      r = e.initialArgs;
    return Object.entries(r).reduce(function (i, l) {
      var c = z(l, 2),
        n = c[0],
        s = c[1];
      return typeof s == 'function' && s.name === 'actionHandler'
        ? (Object.defineProperty(s, 'name', { value: n, writable: !1 }),
          Object.defineProperty(s, '__storyId__', { value: t, writable: !1 }),
          (i[n] = Q(s)),
          v.push(i[n]),
          i)
        : ((i[n] = s), i);
    }, {});
  },
  te = [X];
export { te as argsEnhancers };
//# sourceMappingURL=preview.ca74a57c.js.map
