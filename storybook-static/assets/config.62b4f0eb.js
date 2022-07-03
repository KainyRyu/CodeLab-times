var Mu = Object.defineProperty;
var gn = Object.getOwnPropertySymbols;
var ju = Object.prototype.hasOwnProperty,
  Vu = Object.prototype.propertyIsEnumerable;
var An = (e, t, r) =>
    t in e
      ? Mu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  Dn = (e, t) => {
    for (var r in t || (t = {})) ju.call(t, r) && An(e, r, t[r]);
    if (gn) for (var r of gn(t)) Vu.call(t, r) && An(e, r, t[r]);
    return e;
  };
import {
  m as Uu,
  c as Ye,
  a as qu,
  d as Qn,
  g as Wu,
  _ as Gu,
  i as zu,
  b as $u,
  e as Ju,
  f as En,
  h as Hu,
  u as Ku,
  l as $t,
  j as Qu
} from './iframe.99391157.js';
import { R as Ht, r as _t } from './index.d1b1a1f8.js';
import { r as Xe } from './index.979b7f4c.js';
import { s as Xu } from './string.bf3fd91c.js';
import { j as Yu } from './jsx-runtime.bd940121.js';
var Zu = function (t) {
    switch (t.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        var r = {};
        return (
          t.signature.properties.forEach(function (n) {
            r[n.key] = Xn(n.value);
          }),
          { name: 'object', value: r }
        );
      default:
        throw new Error('Unknown: '.concat(t));
    }
  },
  Xn = function e(t) {
    var r = t.name,
      n = t.raw,
      i = {};
    switch ((typeof n != 'undefined' && (i.raw = n), t.name)) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return Object.assign({}, i, { name: r });
      case 'Array':
        return Object.assign({}, i, {
          name: 'array',
          value: t.elements.map(e)
        });
      case 'signature':
        return Object.assign({}, i, Zu(t));
      case 'union':
      case 'intersection':
        return Object.assign({}, i, { name: r, value: t.elements.map(e) });
      default:
        return Object.assign({}, i, { name: 'other', value: r });
    }
  },
  ea = function (t) {
    return t.name === 'literal';
  },
  ta = function (t) {
    return t.value.replace(/['|"]/g, '');
  },
  ra = function (t) {
    switch (t.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        var r = {};
        return (
          t.signature.properties.forEach(function (n) {
            r[n.key] = Yn(n.value);
          }),
          { name: 'object', value: r }
        );
      default:
        throw new Error('Unknown: '.concat(t));
    }
  },
  Yn = function e(t) {
    var r = t.name,
      n = t.raw,
      i = {};
    switch ((typeof n != 'undefined' && (i.raw = n), t.name)) {
      case 'literal':
        return Object.assign({}, i, { name: 'other', value: t.value });
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return Object.assign({}, i, { name: r });
      case 'Array':
        return Object.assign({}, i, {
          name: 'array',
          value: t.elements.map(e)
        });
      case 'signature':
        return Object.assign({}, i, ra(t));
      case 'union':
        return t.elements.every(ea)
          ? Object.assign({}, i, { name: 'enum', value: t.elements.map(ta) })
          : Object.assign({}, i, { name: r, value: t.elements.map(e) });
      case 'intersection':
        return Object.assign({}, i, { name: r, value: t.elements.map(e) });
      default:
        return Object.assign({}, i, { name: 'other', value: r });
    }
  },
  Zn = /^['"]|['"]$/g,
  na = function (t) {
    return t.replace(Zn, '');
  },
  ia = function (t) {
    return Zn.test(t);
  },
  ua = /^\(.*\) => /,
  aa = function e(t) {
    var r = t.name,
      n = t.raw,
      i = t.computed,
      a = t.value,
      s = {};
    switch ((typeof n != 'undefined' && (s.raw = n), r)) {
      case 'enum': {
        var f = i
          ? a
          : a.map(function (A) {
              var w = na(A.value);
              return ia(A.value) || Number.isNaN(Number(w)) ? w : Number(w);
            });
        return Object.assign({}, s, { name: r, value: f });
      }
      case 'string':
      case 'number':
      case 'symbol':
        return Object.assign({}, s, { name: r });
      case 'func':
        return Object.assign({}, s, { name: 'function' });
      case 'bool':
      case 'boolean':
        return Object.assign({}, s, { name: 'boolean' });
      case 'arrayOf':
      case 'array':
        return Object.assign({}, s, { name: 'array', value: a && e(a) });
      case 'object':
        return Object.assign({}, s, { name: r });
      case 'objectOf':
        return Object.assign({}, s, { name: r, value: e(a) });
      case 'shape':
      case 'exact':
        var h = Uu(a, function (A) {
          return e(A);
        });
        return Object.assign({}, s, { name: 'object', value: h });
      case 'union':
        return Object.assign({}, s, {
          name: 'union',
          value: a.map(function (A) {
            return e(A);
          })
        });
      case 'instanceOf':
      case 'element':
      case 'elementType':
      default: {
        if ((r == null ? void 0 : r.indexOf('|')) > 0)
          try {
            var D = r.split('|').map(function (A) {
              return JSON.parse(A);
            });
            return Object.assign({}, s, { name: 'enum', value: D });
          } catch {}
        var v = a ? ''.concat(r, '(').concat(a, ')') : r,
          k = ua.test(r) ? 'function' : 'other';
        return Object.assign({}, s, { name: k, value: v });
      }
    }
  },
  Pr = function (t) {
    var r = t.type,
      n = t.tsType,
      i = t.flowType;
    return r != null ? aa(r) : n != null ? Xn(n) : i != null ? Yn(i) : null;
  },
  $e;
(function (e) {
  (e.JAVASCRIPT = 'JavaScript'),
    (e.FLOW = 'Flow'),
    (e.TYPESCRIPT = 'TypeScript'),
    (e.UNKNOWN = 'Unknown');
})($e || ($e = {}));
var sa = ['null', 'undefined'];
function Lr(e) {
  return sa.some(function (t) {
    return t === e;
  });
}
function Rr(e) {
  return !!e.__docgenInfo;
}
function oa(e) {
  return e != null && Object.keys(e).length > 0;
}
function ei(e, t) {
  return Rr(e) ? e.__docgenInfo[t] : null;
}
function la(e) {
  return Rr(e) && Xu(e.__docgenInfo.description);
}
var ti = {},
  Et = {},
  ri = { exports: {} };
(function () {
  function e(s) {
    if (s == null) return !1;
    switch (s.type) {
      case 'ArrayExpression':
      case 'AssignmentExpression':
      case 'BinaryExpression':
      case 'CallExpression':
      case 'ConditionalExpression':
      case 'FunctionExpression':
      case 'Identifier':
      case 'Literal':
      case 'LogicalExpression':
      case 'MemberExpression':
      case 'NewExpression':
      case 'ObjectExpression':
      case 'SequenceExpression':
      case 'ThisExpression':
      case 'UnaryExpression':
      case 'UpdateExpression':
        return !0;
    }
    return !1;
  }
  function t(s) {
    if (s == null) return !1;
    switch (s.type) {
      case 'DoWhileStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'WhileStatement':
        return !0;
    }
    return !1;
  }
  function r(s) {
    if (s == null) return !1;
    switch (s.type) {
      case 'BlockStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'DebuggerStatement':
      case 'DoWhileStatement':
      case 'EmptyStatement':
      case 'ExpressionStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'IfStatement':
      case 'LabeledStatement':
      case 'ReturnStatement':
      case 'SwitchStatement':
      case 'ThrowStatement':
      case 'TryStatement':
      case 'VariableDeclaration':
      case 'WhileStatement':
      case 'WithStatement':
        return !0;
    }
    return !1;
  }
  function n(s) {
    return r(s) || (s != null && s.type === 'FunctionDeclaration');
  }
  function i(s) {
    switch (s.type) {
      case 'IfStatement':
        return s.alternate != null ? s.alternate : s.consequent;
      case 'LabeledStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'WhileStatement':
      case 'WithStatement':
        return s.body;
    }
    return null;
  }
  function a(s) {
    var f;
    if (s.type !== 'IfStatement' || s.alternate == null) return !1;
    f = s.consequent;
    do {
      if (f.type === 'IfStatement' && f.alternate == null) return !0;
      f = i(f);
    } while (f);
    return !1;
  }
  ri.exports = {
    isExpression: e,
    isStatement: r,
    isIterationStatement: t,
    isSourceElement: n,
    isProblematicIfStatement: a,
    trailingStatement: i
  };
})();
var Mr = { exports: {} };
(function () {
  var e, t, r, n, i, a;
  (t = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/
  }),
    (e = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
    });
  function s(P) {
    return 48 <= P && P <= 57;
  }
  function f(P) {
    return (
      (48 <= P && P <= 57) || (97 <= P && P <= 102) || (65 <= P && P <= 70)
    );
  }
  function h(P) {
    return P >= 48 && P <= 55;
  }
  r = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202,
    8239, 8287, 12288, 65279
  ];
  function D(P) {
    return (
      P === 32 ||
      P === 9 ||
      P === 11 ||
      P === 12 ||
      P === 160 ||
      (P >= 5760 && r.indexOf(P) >= 0)
    );
  }
  function v(P) {
    return P === 10 || P === 13 || P === 8232 || P === 8233;
  }
  function k(P) {
    if (P <= 65535) return String.fromCharCode(P);
    var K = String.fromCharCode(Math.floor((P - 65536) / 1024) + 55296),
      ae = String.fromCharCode(((P - 65536) % 1024) + 56320);
    return K + ae;
  }
  for (n = new Array(128), a = 0; a < 128; ++a)
    n[a] =
      (a >= 97 && a <= 122) || (a >= 65 && a <= 90) || a === 36 || a === 95;
  for (i = new Array(128), a = 0; a < 128; ++a)
    i[a] =
      (a >= 97 && a <= 122) ||
      (a >= 65 && a <= 90) ||
      (a >= 48 && a <= 57) ||
      a === 36 ||
      a === 95;
  function A(P) {
    return P < 128 ? n[P] : t.NonAsciiIdentifierStart.test(k(P));
  }
  function w(P) {
    return P < 128 ? i[P] : t.NonAsciiIdentifierPart.test(k(P));
  }
  function O(P) {
    return P < 128 ? n[P] : e.NonAsciiIdentifierStart.test(k(P));
  }
  function x(P) {
    return P < 128 ? i[P] : e.NonAsciiIdentifierPart.test(k(P));
  }
  Mr.exports = {
    isDecimalDigit: s,
    isHexDigit: f,
    isOctalDigit: h,
    isWhiteSpace: D,
    isLineTerminator: v,
    isIdentifierStartES5: A,
    isIdentifierPartES5: w,
    isIdentifierStartES6: O,
    isIdentifierPartES6: x
  };
})();
var ni = { exports: {} };
(function () {
  var e = Mr.exports;
  function t(A) {
    switch (A) {
      case 'implements':
      case 'interface':
      case 'package':
      case 'private':
      case 'protected':
      case 'public':
      case 'static':
      case 'let':
        return !0;
      default:
        return !1;
    }
  }
  function r(A, w) {
    return !w && A === 'yield' ? !1 : n(A, w);
  }
  function n(A, w) {
    if (w && t(A)) return !0;
    switch (A.length) {
      case 2:
        return A === 'if' || A === 'in' || A === 'do';
      case 3:
        return A === 'var' || A === 'for' || A === 'new' || A === 'try';
      case 4:
        return (
          A === 'this' ||
          A === 'else' ||
          A === 'case' ||
          A === 'void' ||
          A === 'with' ||
          A === 'enum'
        );
      case 5:
        return (
          A === 'while' ||
          A === 'break' ||
          A === 'catch' ||
          A === 'throw' ||
          A === 'const' ||
          A === 'yield' ||
          A === 'class' ||
          A === 'super'
        );
      case 6:
        return (
          A === 'return' ||
          A === 'typeof' ||
          A === 'delete' ||
          A === 'switch' ||
          A === 'export' ||
          A === 'import'
        );
      case 7:
        return A === 'default' || A === 'finally' || A === 'extends';
      case 8:
        return A === 'function' || A === 'continue' || A === 'debugger';
      case 10:
        return A === 'instanceof';
      default:
        return !1;
    }
  }
  function i(A, w) {
    return A === 'null' || A === 'true' || A === 'false' || r(A, w);
  }
  function a(A, w) {
    return A === 'null' || A === 'true' || A === 'false' || n(A, w);
  }
  function s(A) {
    return A === 'eval' || A === 'arguments';
  }
  function f(A) {
    var w, O, x;
    if (A.length === 0 || ((x = A.charCodeAt(0)), !e.isIdentifierStartES5(x)))
      return !1;
    for (w = 1, O = A.length; w < O; ++w)
      if (((x = A.charCodeAt(w)), !e.isIdentifierPartES5(x))) return !1;
    return !0;
  }
  function h(A, w) {
    return (A - 55296) * 1024 + (w - 56320) + 65536;
  }
  function D(A) {
    var w, O, x, P, K;
    if (A.length === 0) return !1;
    for (K = e.isIdentifierStartES6, w = 0, O = A.length; w < O; ++w) {
      if (((x = A.charCodeAt(w)), 55296 <= x && x <= 56319)) {
        if (
          (++w, w >= O || ((P = A.charCodeAt(w)), !(56320 <= P && P <= 57343)))
        )
          return !1;
        x = h(x, P);
      }
      if (!K(x)) return !1;
      K = e.isIdentifierPartES6;
    }
    return !0;
  }
  function v(A, w) {
    return f(A) && !i(A, w);
  }
  function k(A, w) {
    return D(A) && !a(A, w);
  }
  ni.exports = {
    isKeywordES5: r,
    isKeywordES6: n,
    isReservedWordES5: i,
    isReservedWordES6: a,
    isRestrictedWord: s,
    isIdentifierNameES5: f,
    isIdentifierNameES6: D,
    isIdentifierES5: v,
    isIdentifierES6: k
  };
})();
(function () {
  (Et.ast = ri.exports), (Et.code = Mr.exports), (Et.keyword = ni.exports);
})();
var Lt = {},
  At = {};
const ca = 'doctrine',
  fa = 'JSDoc parser',
  pa = 'https://github.com/eslint/doctrine',
  ha = 'lib/doctrine.js',
  da = '3.0.0',
  ma = { node: '>=6.0.0' },
  ga = { lib: './lib' },
  Aa = ['lib'],
  Da = [
    {
      name: 'Nicholas C. Zakas',
      email: 'nicholas+npm@nczconsulting.com',
      web: 'https://www.nczonline.net'
    },
    {
      name: 'Yusuke Suzuki',
      email: 'utatane.tea@gmail.com',
      web: 'https://github.com/Constellation'
    }
  ],
  Ea = 'eslint/doctrine',
  ya = {
    coveralls: '^3.0.1',
    dateformat: '^1.0.11',
    eslint: '^1.10.3',
    'eslint-release': '^1.0.0',
    linefix: '^0.1.1',
    mocha: '^3.4.2',
    'npm-license': '^0.3.1',
    nyc: '^10.3.2',
    semver: '^5.0.3',
    shelljs: '^0.5.3',
    'shelljs-nodecli': '^0.1.1',
    should: '^5.0.1'
  },
  Ca = 'Apache-2.0',
  va = {
    pretest: 'npm run lint',
    test: 'nyc mocha',
    coveralls: 'nyc report --reporter=text-lcov | coveralls',
    lint: 'eslint lib/',
    'generate-release': 'eslint-generate-release',
    'generate-alpharelease': 'eslint-generate-prerelease alpha',
    'generate-betarelease': 'eslint-generate-prerelease beta',
    'generate-rcrelease': 'eslint-generate-prerelease rc',
    'publish-release': 'eslint-publish-release'
  },
  xa = { esutils: '^2.0.2' };
var Fa = {
    name: ca,
    description: fa,
    homepage: pa,
    main: ha,
    version: da,
    engines: ma,
    directories: ga,
    files: Aa,
    maintainers: Da,
    repository: Ea,
    devDependencies: ya,
    license: Ca,
    scripts: va,
    dependencies: xa
  },
  ii = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var yn = Object.getOwnPropertySymbols,
  ba = Object.prototype.hasOwnProperty,
  Sa = Object.prototype.propertyIsEnumerable;
function _a(e) {
  if (e == null)
    throw new TypeError(
      'Object.assign cannot be called with null or undefined'
    );
  return Object(e);
}
function Ba() {
  try {
    if (!Object.assign) return !1;
    var e = new String('abc');
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1;
    for (var t = {}, r = 0; r < 10; r++) t['_' + String.fromCharCode(r)] = r;
    var n = Object.getOwnPropertyNames(t).map(function (a) {
      return t[a];
    });
    if (n.join('') !== '0123456789') return !1;
    var i = {};
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (a) {
        i[a] = a;
      }),
      Object.keys(Object.assign({}, i)).join('') === 'abcdefghijklmnopqrst'
    );
  } catch {
    return !1;
  }
}
var wa = Ba()
    ? Object.assign
    : function (e, t) {
        for (var r, n = _a(e), i, a = 1; a < arguments.length; a++) {
          r = Object(arguments[a]);
          for (var s in r) ba.call(r, s) && (n[s] = r[s]);
          if (yn) {
            i = yn(r);
            for (var f = 0; f < i.length; f++)
              Sa.call(r, i[f]) && (n[i[f]] = r[i[f]]);
          }
        }
        return n;
      },
  ui = {},
  Ta = function (t) {
    return (
      t &&
      typeof t == 'object' &&
      typeof t.copy == 'function' &&
      typeof t.fill == 'function' &&
      typeof t.readUInt8 == 'function'
    );
  },
  xr = { exports: {} };
typeof Object.create == 'function'
  ? (xr.exports = function (t, r) {
      (t.super_ = r),
        (t.prototype = Object.create(r.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }));
    })
  : (xr.exports = function (t, r) {
      t.super_ = r;
      var n = function () {};
      (n.prototype = r.prototype),
        (t.prototype = new n()),
        (t.prototype.constructor = t);
    });
(function (e) {
  var t = /%[sdj%]/g;
  (e.format = function (b) {
    if (!Ae(b)) {
      for (var N = [], M = 0; M < arguments.length; M++)
        N.push(i(arguments[M]));
      return N.join(' ');
    }
    for (
      var M = 1,
        re = arguments,
        R = re.length,
        le = String(b).replace(t, function (Z) {
          if (Z === '%%') return '%';
          if (M >= R) return Z;
          switch (Z) {
            case '%s':
              return String(re[M++]);
            case '%d':
              return Number(re[M++]);
            case '%j':
              try {
                return JSON.stringify(re[M++]);
              } catch {
                return '[Circular]';
              }
            default:
              return Z;
          }
        }),
        oe = re[M];
      M < R;
      oe = re[++M]
    )
      P(oe) || !C(oe) ? (le += ' ' + oe) : (le += ' ' + i(oe));
    return le;
  }),
    (e.deprecate = function (b, N) {
      if (d(Ye.process))
        return function () {
          return e.deprecate(b, N).apply(this, arguments);
        };
      if (process.noDeprecation === !0) return b;
      var M = !1;
      function re() {
        if (!M) {
          if (process.throwDeprecation) throw new Error(N);
          process.traceDeprecation ? console.trace(N) : console.error(N),
            (M = !0);
        }
        return b.apply(this, arguments);
      }
      return re;
    });
  var r = {},
    n;
  e.debuglog = function (b) {
    if ((d(n) && (n = {}.NODE_DEBUG || ''), (b = b.toUpperCase()), !r[b]))
      if (new RegExp('\\b' + b + '\\b', 'i').test(n)) {
        var N = process.pid;
        r[b] = function () {
          var M = e.format.apply(e, arguments);
          console.error('%s %d: %s', b, N, M);
        };
      } else r[b] = function () {};
    return r[b];
  };
  function i(b, N) {
    var M = { seen: [], stylize: s };
    return (
      arguments.length >= 3 && (M.depth = arguments[2]),
      arguments.length >= 4 && (M.colors = arguments[3]),
      x(N) ? (M.showHidden = N) : N && e._extend(M, N),
      d(M.showHidden) && (M.showHidden = !1),
      d(M.depth) && (M.depth = 2),
      d(M.colors) && (M.colors = !1),
      d(M.customInspect) && (M.customInspect = !0),
      M.colors && (M.stylize = a),
      h(M, b, M.depth)
    );
  }
  (e.inspect = i),
    (i.colors = {
      bold: [1, 22],
      italic: [3, 23],
      underline: [4, 24],
      inverse: [7, 27],
      white: [37, 39],
      grey: [90, 39],
      black: [30, 39],
      blue: [34, 39],
      cyan: [36, 39],
      green: [32, 39],
      magenta: [35, 39],
      red: [31, 39],
      yellow: [33, 39]
    }),
    (i.styles = {
      special: 'cyan',
      number: 'yellow',
      boolean: 'yellow',
      undefined: 'grey',
      null: 'bold',
      string: 'green',
      date: 'magenta',
      regexp: 'red'
    });
  function a(b, N) {
    var M = i.styles[N];
    return M
      ? '\x1B[' + i.colors[M][0] + 'm' + b + '\x1B[' + i.colors[M][1] + 'm'
      : b;
  }
  function s(b, N) {
    return b;
  }
  function f(b) {
    var N = {};
    return (
      b.forEach(function (M, re) {
        N[M] = !0;
      }),
      N
    );
  }
  function h(b, N, M) {
    if (
      b.customInspect &&
      N &&
      z(N.inspect) &&
      N.inspect !== e.inspect &&
      !(N.constructor && N.constructor.prototype === N)
    ) {
      var re = N.inspect(M, b);
      return Ae(re) || (re = h(b, re, M)), re;
    }
    var R = D(b, N);
    if (R) return R;
    var le = Object.keys(N),
      oe = f(le);
    if (
      (b.showHidden && (le = Object.getOwnPropertyNames(N)),
      U(N) && (le.indexOf('message') >= 0 || le.indexOf('description') >= 0))
    )
      return v(N);
    if (le.length === 0) {
      if (z(N)) {
        var Z = N.name ? ': ' + N.name : '';
        return b.stylize('[Function' + Z + ']', 'special');
      }
      if (g(N)) return b.stylize(RegExp.prototype.toString.call(N), 'regexp');
      if (y(N)) return b.stylize(Date.prototype.toString.call(N), 'date');
      if (U(N)) return v(N);
    }
    var G = '',
      E = !1,
      F = ['{', '}'];
    if ((O(N) && ((E = !0), (F = ['[', ']'])), z(N))) {
      var H = N.name ? ': ' + N.name : '';
      G = ' [Function' + H + ']';
    }
    if (
      (g(N) && (G = ' ' + RegExp.prototype.toString.call(N)),
      y(N) && (G = ' ' + Date.prototype.toUTCString.call(N)),
      U(N) && (G = ' ' + v(N)),
      le.length === 0 && (!E || N.length == 0))
    )
      return F[0] + G + F[1];
    if (M < 0)
      return g(N)
        ? b.stylize(RegExp.prototype.toString.call(N), 'regexp')
        : b.stylize('[Object]', 'special');
    b.seen.push(N);
    var B;
    return (
      E
        ? (B = k(b, N, M, oe, le))
        : (B = le.map(function (S) {
            return A(b, N, M, oe, S, E);
          })),
      b.seen.pop(),
      w(B, G, F)
    );
  }
  function D(b, N) {
    if (d(N)) return b.stylize('undefined', 'undefined');
    if (Ae(N)) {
      var M =
        "'" +
        JSON.stringify(N)
          .replace(/^"|"$/g, '')
          .replace(/'/g, "\\'")
          .replace(/\\"/g, '"') +
        "'";
      return b.stylize(M, 'string');
    }
    if (ae(N)) return b.stylize('' + N, 'number');
    if (x(N)) return b.stylize('' + N, 'boolean');
    if (P(N)) return b.stylize('null', 'null');
  }
  function v(b) {
    return '[' + Error.prototype.toString.call(b) + ']';
  }
  function k(b, N, M, re, R) {
    for (var le = [], oe = 0, Z = N.length; oe < Z; ++oe)
      ee(N, String(oe)) ? le.push(A(b, N, M, re, String(oe), !0)) : le.push('');
    return (
      R.forEach(function (G) {
        G.match(/^\d+$/) || le.push(A(b, N, M, re, G, !0));
      }),
      le
    );
  }
  function A(b, N, M, re, R, le) {
    var oe, Z, G;
    if (
      ((G = Object.getOwnPropertyDescriptor(N, R) || { value: N[R] }),
      G.get
        ? G.set
          ? (Z = b.stylize('[Getter/Setter]', 'special'))
          : (Z = b.stylize('[Getter]', 'special'))
        : G.set && (Z = b.stylize('[Setter]', 'special')),
      ee(re, R) || (oe = '[' + R + ']'),
      Z ||
        (b.seen.indexOf(G.value) < 0
          ? (P(M) ? (Z = h(b, G.value, null)) : (Z = h(b, G.value, M - 1)),
            Z.indexOf(`
`) > -1 &&
              (le
                ? (Z = Z.split(
                    `
`
                  )
                    .map(function (E) {
                      return '  ' + E;
                    })
                    .join(
                      `
`
                    )
                    .substr(2))
                : (Z =
                    `
` +
                    Z.split(
                      `
`
                    ).map(function (E) {
                      return '   ' + E;
                    }).join(`
`))))
          : (Z = b.stylize('[Circular]', 'special'))),
      d(oe))
    ) {
      if (le && R.match(/^\d+$/)) return Z;
      (oe = JSON.stringify('' + R)),
        oe.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
          ? ((oe = oe.substr(1, oe.length - 2)), (oe = b.stylize(oe, 'name')))
          : ((oe = oe
              .replace(/'/g, "\\'")
              .replace(/\\"/g, '"')
              .replace(/(^"|"$)/g, "'")),
            (oe = b.stylize(oe, 'string')));
    }
    return oe + ': ' + Z;
  }
  function w(b, N, M) {
    var re = b.reduce(function (R, le) {
      return (
        le.indexOf(`
`) >= 0,
        R + le.replace(/\u001b\[\d\d?m/g, '').length + 1
      );
    }, 0);
    return re > 60
      ? M[0] +
          (N === ''
            ? ''
            : N +
              `
 `) +
          ' ' +
          b.join(`,
  `) +
          ' ' +
          M[1]
      : M[0] + N + ' ' + b.join(', ') + ' ' + M[1];
  }
  function O(b) {
    return Array.isArray(b);
  }
  e.isArray = O;
  function x(b) {
    return typeof b == 'boolean';
  }
  e.isBoolean = x;
  function P(b) {
    return b === null;
  }
  e.isNull = P;
  function K(b) {
    return b == null;
  }
  e.isNullOrUndefined = K;
  function ae(b) {
    return typeof b == 'number';
  }
  e.isNumber = ae;
  function Ae(b) {
    return typeof b == 'string';
  }
  e.isString = Ae;
  function _(b) {
    return typeof b == 'symbol';
  }
  e.isSymbol = _;
  function d(b) {
    return b === void 0;
  }
  e.isUndefined = d;
  function g(b) {
    return C(b) && Q(b) === '[object RegExp]';
  }
  e.isRegExp = g;
  function C(b) {
    return typeof b == 'object' && b !== null;
  }
  e.isObject = C;
  function y(b) {
    return C(b) && Q(b) === '[object Date]';
  }
  e.isDate = y;
  function U(b) {
    return C(b) && (Q(b) === '[object Error]' || b instanceof Error);
  }
  e.isError = U;
  function z(b) {
    return typeof b == 'function';
  }
  e.isFunction = z;
  function j(b) {
    return (
      b === null ||
      typeof b == 'boolean' ||
      typeof b == 'number' ||
      typeof b == 'string' ||
      typeof b == 'symbol' ||
      typeof b == 'undefined'
    );
  }
  (e.isPrimitive = j), (e.isBuffer = Ta);
  function Q(b) {
    return Object.prototype.toString.call(b);
  }
  function W(b) {
    return b < 10 ? '0' + b.toString(10) : b.toString(10);
  }
  var ne = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];
  function Ce() {
    var b = new Date(),
      N = [W(b.getHours()), W(b.getMinutes()), W(b.getSeconds())].join(':');
    return [b.getDate(), ne[b.getMonth()], N].join(' ');
  }
  (e.log = function () {
    console.log('%s - %s', Ce(), e.format.apply(e, arguments));
  }),
    (e.inherits = xr.exports),
    (e._extend = function (b, N) {
      if (!N || !C(N)) return b;
      for (var M = Object.keys(N), re = M.length; re--; ) b[M[re]] = N[M[re]];
      return b;
    });
  function ee(b, N) {
    return Object.prototype.hasOwnProperty.call(b, N);
  }
})(ui);
var ka = wa;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */ function Cn(e, t) {
  if (e === t) return 0;
  for (var r = e.length, n = t.length, i = 0, a = Math.min(r, n); i < a; ++i)
    if (e[i] !== t[i]) {
      (r = e[i]), (n = t[i]);
      break;
    }
  return r < n ? -1 : n < r ? 1 : 0;
}
function Rt(e) {
  return Ye.Buffer && typeof Ye.Buffer.isBuffer == 'function'
    ? Ye.Buffer.isBuffer(e)
    : !!(e != null && e._isBuffer);
}
var Je = ui,
  Na = Object.prototype.hasOwnProperty,
  vn = Array.prototype.slice,
  ai = (function () {
    return function () {}.name === 'foo';
  })();
function xn(e) {
  return Object.prototype.toString.call(e);
}
function Fn(e) {
  return Rt(e) || typeof Ye.ArrayBuffer != 'function'
    ? !1
    : typeof ArrayBuffer.isView == 'function'
    ? ArrayBuffer.isView(e)
    : e
    ? !!(e instanceof DataView || (e.buffer && e.buffer instanceof ArrayBuffer))
    : !1;
}
var ge = (ii.exports = oi),
  Oa = /\s*function\s+([^\(\s]*)\s*/;
function si(e) {
  if (!!Je.isFunction(e)) {
    if (ai) return e.name;
    var t = e.toString(),
      r = t.match(Oa);
    return r && r[1];
  }
}
ge.AssertionError = function (t) {
  (this.name = 'AssertionError'),
    (this.actual = t.actual),
    (this.expected = t.expected),
    (this.operator = t.operator),
    t.message
      ? ((this.message = t.message), (this.generatedMessage = !1))
      : ((this.message = Ia(this)), (this.generatedMessage = !0));
  var r = t.stackStartFunction || Le;
  if (Error.captureStackTrace) Error.captureStackTrace(this, r);
  else {
    var n = new Error();
    if (n.stack) {
      var i = n.stack,
        a = si(r),
        s = i.indexOf(
          `
` + a
        );
      if (s >= 0) {
        var f = i.indexOf(
          `
`,
          s + 1
        );
        i = i.substring(f + 1);
      }
      this.stack = i;
    }
  }
};
Je.inherits(ge.AssertionError, Error);
function bn(e, t) {
  return typeof e == 'string' ? (e.length < t ? e : e.slice(0, t)) : e;
}
function Sn(e) {
  if (ai || !Je.isFunction(e)) return Je.inspect(e);
  var t = si(e),
    r = t ? ': ' + t : '';
  return '[Function' + r + ']';
}
function Ia(e) {
  return (
    bn(Sn(e.actual), 128) + ' ' + e.operator + ' ' + bn(Sn(e.expected), 128)
  );
}
function Le(e, t, r, n, i) {
  throw new ge.AssertionError({
    message: r,
    actual: e,
    expected: t,
    operator: n,
    stackStartFunction: i
  });
}
ge.fail = Le;
function oi(e, t) {
  e || Le(e, !0, t, '==', ge.ok);
}
ge.ok = oi;
ge.equal = function (t, r, n) {
  t != r && Le(t, r, n, '==', ge.equal);
};
ge.notEqual = function (t, r, n) {
  t == r && Le(t, r, n, '!=', ge.notEqual);
};
ge.deepEqual = function (t, r, n) {
  Ct(t, r, !1) || Le(t, r, n, 'deepEqual', ge.deepEqual);
};
ge.deepStrictEqual = function (t, r, n) {
  Ct(t, r, !0) || Le(t, r, n, 'deepStrictEqual', ge.deepStrictEqual);
};
function Ct(e, t, r, n) {
  if (e === t) return !0;
  if (Rt(e) && Rt(t)) return Cn(e, t) === 0;
  if (Je.isDate(e) && Je.isDate(t)) return e.getTime() === t.getTime();
  if (Je.isRegExp(e) && Je.isRegExp(t))
    return (
      e.source === t.source &&
      e.global === t.global &&
      e.multiline === t.multiline &&
      e.lastIndex === t.lastIndex &&
      e.ignoreCase === t.ignoreCase
    );
  if (
    (e === null || typeof e != 'object') &&
    (t === null || typeof t != 'object')
  )
    return r ? e === t : e == t;
  if (
    Fn(e) &&
    Fn(t) &&
    xn(e) === xn(t) &&
    !(e instanceof Float32Array || e instanceof Float64Array)
  )
    return Cn(new Uint8Array(e.buffer), new Uint8Array(t.buffer)) === 0;
  if (Rt(e) !== Rt(t)) return !1;
  n = n || { actual: [], expected: [] };
  var i = n.actual.indexOf(e);
  return i !== -1 && i === n.expected.indexOf(t)
    ? !0
    : (n.actual.push(e), n.expected.push(t), Pa(e, t, r, n));
}
function _n(e) {
  return Object.prototype.toString.call(e) == '[object Arguments]';
}
function Pa(e, t, r, n) {
  if (e == null || t === null || t === void 0) return !1;
  if (Je.isPrimitive(e) || Je.isPrimitive(t)) return e === t;
  if (r && Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1;
  var i = _n(e),
    a = _n(t);
  if ((i && !a) || (!i && a)) return !1;
  if (i) return (e = vn.call(e)), (t = vn.call(t)), Ct(e, t, r);
  var s = wn(e),
    f = wn(t),
    h,
    D;
  if (s.length !== f.length) return !1;
  for (s.sort(), f.sort(), D = s.length - 1; D >= 0; D--)
    if (s[D] !== f[D]) return !1;
  for (D = s.length - 1; D >= 0; D--)
    if (((h = s[D]), !Ct(e[h], t[h], r, n))) return !1;
  return !0;
}
ge.notDeepEqual = function (t, r, n) {
  Ct(t, r, !1) && Le(t, r, n, 'notDeepEqual', ge.notDeepEqual);
};
ge.notDeepStrictEqual = li;
function li(e, t, r) {
  Ct(e, t, !0) && Le(e, t, r, 'notDeepStrictEqual', li);
}
ge.strictEqual = function (t, r, n) {
  t !== r && Le(t, r, n, '===', ge.strictEqual);
};
ge.notStrictEqual = function (t, r, n) {
  t === r && Le(t, r, n, '!==', ge.notStrictEqual);
};
function Bn(e, t) {
  if (!e || !t) return !1;
  if (Object.prototype.toString.call(t) == '[object RegExp]') return t.test(e);
  try {
    if (e instanceof t) return !0;
  } catch {}
  return Error.isPrototypeOf(t) ? !1 : t.call({}, e) === !0;
}
function La(e) {
  var t;
  try {
    e();
  } catch (r) {
    t = r;
  }
  return t;
}
function ci(e, t, r, n) {
  var i;
  if (typeof t != 'function')
    throw new TypeError('"block" argument must be a function');
  typeof r == 'string' && ((n = r), (r = null)),
    (i = La(t)),
    (n = (r && r.name ? ' (' + r.name + ').' : '.') + (n ? ' ' + n : '.')),
    e && !i && Le(i, r, 'Missing expected exception' + n);
  var a = typeof n == 'string',
    s = !e && Je.isError(i),
    f = !e && i && !r;
  if (
    (((s && a && Bn(i, r)) || f) && Le(i, r, 'Got unwanted exception' + n),
    (e && i && r && !Bn(i, r)) || (!e && i))
  )
    throw i;
}
ge.throws = function (e, t, r) {
  ci(!0, e, t, r);
};
ge.doesNotThrow = function (e, t, r) {
  ci(!1, e, t, r);
};
ge.ifError = function (e) {
  if (e) throw e;
};
function fi(e, t) {
  e || Le(e, !0, t, '==', fi);
}
ge.strict = ka(fi, ge, {
  equal: ge.strictEqual,
  deepEqual: ge.deepStrictEqual,
  notEqual: ge.notStrictEqual,
  notDeepEqual: ge.notDeepStrictEqual
});
ge.strict.strict = ge.strict;
var wn =
  Object.keys ||
  function (e) {
    var t = [];
    for (var r in e) Na.call(e, r) && t.push(r);
    return t;
  };
(function () {
  var e;
  (e = Fa.version), (At.VERSION = e);
  function t(n) {
    (this.name = 'DoctrineError'), (this.message = n);
  }
  (t.prototype = (function () {
    var n = function () {};
    return (n.prototype = Error.prototype), new n();
  })()),
    (t.prototype.constructor = t),
    (At.DoctrineError = t);
  function r(n) {
    throw new t(n);
  }
  (At.throwError = r), (At.assert = ii.exports);
})();
(function () {
  var e, t, r, n, i, a, s, f, h, D, v, k;
  (h = Et),
    (D = At),
    (e = {
      NullableLiteral: 'NullableLiteral',
      AllLiteral: 'AllLiteral',
      NullLiteral: 'NullLiteral',
      UndefinedLiteral: 'UndefinedLiteral',
      VoidLiteral: 'VoidLiteral',
      UnionType: 'UnionType',
      ArrayType: 'ArrayType',
      RecordType: 'RecordType',
      FieldType: 'FieldType',
      FunctionType: 'FunctionType',
      ParameterType: 'ParameterType',
      RestType: 'RestType',
      NonNullableType: 'NonNullableType',
      OptionalType: 'OptionalType',
      NullableType: 'NullableType',
      NameExpression: 'NameExpression',
      TypeApplication: 'TypeApplication',
      StringLiteralType: 'StringLiteralType',
      NumericLiteralType: 'NumericLiteralType',
      BooleanLiteralType: 'BooleanLiteralType'
    }),
    (t = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21
    });
  function A(E) {
    return (
      '><(){}[],:*|?!='.indexOf(String.fromCharCode(E)) === -1 &&
      !h.code.isWhiteSpace(E) &&
      !h.code.isLineTerminator(E)
    );
  }
  function w(E, F, H, B) {
    (this._previous = E),
      (this._index = F),
      (this._token = H),
      (this._value = B);
  }
  (w.prototype.restore = function () {
    (a = this._previous),
      (i = this._index),
      (s = this._token),
      (f = this._value);
  }),
    (w.save = function () {
      return new w(a, i, s, f);
    });
  function O(E, F) {
    return k && (E.range = [F[0] + v, F[1] + v]), E;
  }
  function x() {
    var E = r.charAt(i);
    return (i += 1), E;
  }
  function P(E) {
    var F,
      H,
      B,
      S = 0;
    for (H = E === 'u' ? 4 : 2, F = 0; F < H; ++F)
      if (i < n && h.code.isHexDigit(r.charCodeAt(i)))
        (B = x()), (S = S * 16 + '0123456789abcdef'.indexOf(B.toLowerCase()));
      else return '';
    return String.fromCharCode(S);
  }
  function K() {
    var E = '',
      F,
      H,
      B,
      S,
      q;
    for (F = r.charAt(i), ++i; i < n; )
      if (((H = x()), H === F)) {
        F = '';
        break;
      } else if (H === '\\')
        if (((H = x()), h.code.isLineTerminator(H.charCodeAt(0))))
          H === '\r' && r.charCodeAt(i) === 10 && ++i;
        else
          switch (H) {
            case 'n':
              E += `
`;
              break;
            case 'r':
              E += '\r';
              break;
            case 't':
              E += '	';
              break;
            case 'u':
            case 'x':
              (q = i), (S = P(H)), S ? (E += S) : ((i = q), (E += H));
              break;
            case 'b':
              E += '\b';
              break;
            case 'f':
              E += '\f';
              break;
            case 'v':
              E += '\v';
              break;
            default:
              h.code.isOctalDigit(H.charCodeAt(0))
                ? ((B = '01234567'.indexOf(H)),
                  i < n &&
                    h.code.isOctalDigit(r.charCodeAt(i)) &&
                    ((B = B * 8 + '01234567'.indexOf(x())),
                    '0123'.indexOf(H) >= 0 &&
                      i < n &&
                      h.code.isOctalDigit(r.charCodeAt(i)) &&
                      (B = B * 8 + '01234567'.indexOf(x()))),
                  (E += String.fromCharCode(B)))
                : (E += H);
              break;
          }
      else {
        if (h.code.isLineTerminator(H.charCodeAt(0))) break;
        E += H;
      }
    return F !== '' && D.throwError('unexpected quote'), (f = E), t.STRING;
  }
  function ae() {
    var E, F;
    if (((E = ''), (F = r.charCodeAt(i)), F !== 46)) {
      if (((E = x()), (F = r.charCodeAt(i)), E === '0')) {
        if (F === 120 || F === 88) {
          for (
            E += x();
            i < n && ((F = r.charCodeAt(i)), !!h.code.isHexDigit(F));

          )
            E += x();
          return (
            E.length <= 2 && D.throwError('unexpected token'),
            i < n &&
              ((F = r.charCodeAt(i)),
              h.code.isIdentifierStartES5(F) &&
                D.throwError('unexpected token')),
            (f = parseInt(E, 16)),
            t.NUMBER
          );
        }
        if (h.code.isOctalDigit(F)) {
          for (
            E += x();
            i < n && ((F = r.charCodeAt(i)), !!h.code.isOctalDigit(F));

          )
            E += x();
          return (
            i < n &&
              ((F = r.charCodeAt(i)),
              (h.code.isIdentifierStartES5(F) || h.code.isDecimalDigit(F)) &&
                D.throwError('unexpected token')),
            (f = parseInt(E, 8)),
            t.NUMBER
          );
        }
        h.code.isDecimalDigit(F) && D.throwError('unexpected token');
      }
      for (; i < n && ((F = r.charCodeAt(i)), !!h.code.isDecimalDigit(F)); )
        E += x();
    }
    if (F === 46)
      for (
        E += x();
        i < n && ((F = r.charCodeAt(i)), !!h.code.isDecimalDigit(F));

      )
        E += x();
    if (F === 101 || F === 69)
      if (
        ((E += x()),
        (F = r.charCodeAt(i)),
        (F === 43 || F === 45) && (E += x()),
        (F = r.charCodeAt(i)),
        h.code.isDecimalDigit(F))
      )
        for (
          E += x();
          i < n && ((F = r.charCodeAt(i)), !!h.code.isDecimalDigit(F));

        )
          E += x();
      else D.throwError('unexpected token');
    return (
      i < n &&
        ((F = r.charCodeAt(i)),
        h.code.isIdentifierStartES5(F) && D.throwError('unexpected token')),
      (f = parseFloat(E)),
      t.NUMBER
    );
  }
  function Ae() {
    var E, F;
    for (f = x(); i < n && A(r.charCodeAt(i)); ) {
      if (((E = r.charCodeAt(i)), E === 46)) {
        if (i + 1 >= n) return t.ILLEGAL;
        if (((F = r.charCodeAt(i + 1)), F === 60)) break;
      }
      f += x();
    }
    return t.NAME;
  }
  function _() {
    var E;
    for (a = i; i < n && h.code.isWhiteSpace(r.charCodeAt(i)); ) x();
    if (i >= n) return (s = t.EOF), s;
    switch (((E = r.charCodeAt(i)), E)) {
      case 39:
      case 34:
        return (s = K()), s;
      case 58:
        return x(), (s = t.COLON), s;
      case 44:
        return x(), (s = t.COMMA), s;
      case 40:
        return x(), (s = t.LPAREN), s;
      case 41:
        return x(), (s = t.RPAREN), s;
      case 91:
        return x(), (s = t.LBRACK), s;
      case 93:
        return x(), (s = t.RBRACK), s;
      case 123:
        return x(), (s = t.LBRACE), s;
      case 125:
        return x(), (s = t.RBRACE), s;
      case 46:
        if (i + 1 < n) {
          if (((E = r.charCodeAt(i + 1)), E === 60))
            return x(), x(), (s = t.DOT_LT), s;
          if (E === 46 && i + 2 < n && r.charCodeAt(i + 2) === 46)
            return x(), x(), x(), (s = t.REST), s;
          if (h.code.isDecimalDigit(E)) return (s = ae()), s;
        }
        return (s = t.ILLEGAL), s;
      case 60:
        return x(), (s = t.LT), s;
      case 62:
        return x(), (s = t.GT), s;
      case 42:
        return x(), (s = t.STAR), s;
      case 124:
        return x(), (s = t.PIPE), s;
      case 63:
        return x(), (s = t.QUESTION), s;
      case 33:
        return x(), (s = t.BANG), s;
      case 61:
        return x(), (s = t.EQUAL), s;
      case 45:
        return (s = ae()), s;
      default:
        return h.code.isDecimalDigit(E)
          ? ((s = ae()), s)
          : (D.assert(A(E)), (s = Ae()), s);
    }
  }
  function d(E, F) {
    D.assert(s === E, F || 'consumed token not matched'), _();
  }
  function g(E, F) {
    s !== E && D.throwError(F || 'unexpected token'), _();
  }
  function C() {
    var E,
      F = i - 1;
    if (
      (d(t.LPAREN, 'UnionType should start with ('), (E = []), s !== t.RPAREN)
    )
      for (; E.push(M()), s !== t.RPAREN; ) g(t.PIPE);
    return (
      d(t.RPAREN, 'UnionType should end with )'),
      O({ type: e.UnionType, elements: E }, [F, a])
    );
  }
  function y() {
    var E,
      F = i - 1,
      H;
    for (
      d(t.LBRACK, 'ArrayType should start with ['), E = [];
      s !== t.RBRACK;

    ) {
      if (s === t.REST) {
        (H = i - 3),
          d(t.REST),
          E.push(O({ type: e.RestType, expression: M() }, [H, a]));
        break;
      } else E.push(M());
      s !== t.RBRACK && g(t.COMMA);
    }
    return g(t.RBRACK), O({ type: e.ArrayType, elements: E }, [F, a]);
  }
  function U() {
    var E = f;
    if (s === t.NAME || s === t.STRING) return _(), E;
    if (s === t.NUMBER) return d(t.NUMBER), String(E);
    D.throwError('unexpected token');
  }
  function z() {
    var E,
      F = a;
    return (
      (E = U()),
      s === t.COLON
        ? (d(t.COLON), O({ type: e.FieldType, key: E, value: M() }, [F, a]))
        : O({ type: e.FieldType, key: E, value: null }, [F, a])
    );
  }
  function j() {
    var E,
      F = i - 1,
      H;
    if (
      (d(t.LBRACE, 'RecordType should start with {'), (E = []), s === t.COMMA)
    )
      d(t.COMMA);
    else for (; s !== t.RBRACE; ) E.push(z()), s !== t.RBRACE && g(t.COMMA);
    return (H = i), g(t.RBRACE), O({ type: e.RecordType, fields: E }, [F, H]);
  }
  function Q() {
    var E = f,
      F = i - E.length;
    return (
      g(t.NAME),
      s === t.COLON &&
        (E === 'module' || E === 'external' || E === 'event') &&
        (d(t.COLON), (E += ':' + f), g(t.NAME)),
      O({ type: e.NameExpression, name: E }, [F, a])
    );
  }
  function W() {
    var E = [];
    for (E.push(re()); s === t.COMMA; ) d(t.COMMA), E.push(re());
    return E;
  }
  function ne() {
    var E,
      F,
      H = i - f.length;
    return (
      (E = Q()),
      s === t.DOT_LT || s === t.LT
        ? (_(),
          (F = W()),
          g(t.GT),
          O({ type: e.TypeApplication, expression: E, applications: F }, [
            H,
            a
          ]))
        : E
    );
  }
  function Ce() {
    return (
      d(t.COLON, 'ResultType should start with :'),
      s === t.NAME && f === 'void' ? (d(t.NAME), { type: e.VoidLiteral }) : M()
    );
  }
  function ee() {
    for (var E = [], F = !1, H, B = !1, S, q = i - 3, X; s !== t.RPAREN; )
      s === t.REST && (d(t.REST), (B = !0)),
        (S = a),
        (H = M()),
        H.type === e.NameExpression &&
          s === t.COLON &&
          ((X = a - H.name.length),
          d(t.COLON),
          (H = O({ type: e.ParameterType, name: H.name, expression: M() }, [
            X,
            a
          ]))),
        s === t.EQUAL
          ? (d(t.EQUAL),
            (H = O({ type: e.OptionalType, expression: H }, [S, a])),
            (F = !0))
          : F && D.throwError('unexpected token'),
        B && (H = O({ type: e.RestType, expression: H }, [q, a])),
        E.push(H),
        s !== t.RPAREN && g(t.COMMA);
    return E;
  }
  function b() {
    var E,
      F,
      H,
      B,
      S,
      q = i - f.length;
    return (
      D.assert(
        s === t.NAME && f === 'function',
        "FunctionType should start with 'function'"
      ),
      d(t.NAME),
      g(t.LPAREN),
      (E = !1),
      (H = []),
      (F = null),
      s !== t.RPAREN &&
        (s === t.NAME && (f === 'this' || f === 'new')
          ? ((E = f === 'new'),
            d(t.NAME),
            g(t.COLON),
            (F = ne()),
            s === t.COMMA && (d(t.COMMA), (H = ee())))
          : (H = ee())),
      g(t.RPAREN),
      (B = null),
      s === t.COLON && (B = Ce()),
      (S = O({ type: e.FunctionType, params: H, result: B }, [q, a])),
      F && ((S.this = F), E && (S.new = !0)),
      S
    );
  }
  function N() {
    var E, F;
    switch (s) {
      case t.STAR:
        return d(t.STAR), O({ type: e.AllLiteral }, [a - 1, a]);
      case t.LPAREN:
        return C();
      case t.LBRACK:
        return y();
      case t.LBRACE:
        return j();
      case t.NAME:
        if (((F = i - f.length), f === 'null'))
          return d(t.NAME), O({ type: e.NullLiteral }, [F, a]);
        if (f === 'undefined')
          return d(t.NAME), O({ type: e.UndefinedLiteral }, [F, a]);
        if (f === 'true' || f === 'false')
          return (
            d(t.NAME),
            O({ type: e.BooleanLiteralType, value: f === 'true' }, [F, a])
          );
        if (((E = w.save()), f === 'function'))
          try {
            return b();
          } catch {
            E.restore();
          }
        return ne();
      case t.STRING:
        return (
          _(), O({ type: e.StringLiteralType, value: f }, [a - f.length - 2, a])
        );
      case t.NUMBER:
        return (
          _(),
          O({ type: e.NumericLiteralType, value: f }, [a - String(f).length, a])
        );
      default:
        D.throwError('unexpected token');
    }
  }
  function M() {
    var E, F;
    return s === t.QUESTION
      ? ((F = i - 1),
        d(t.QUESTION),
        s === t.COMMA ||
        s === t.EQUAL ||
        s === t.RBRACE ||
        s === t.RPAREN ||
        s === t.PIPE ||
        s === t.EOF ||
        s === t.RBRACK ||
        s === t.GT
          ? O({ type: e.NullableLiteral }, [F, a])
          : O({ type: e.NullableType, expression: N(), prefix: !0 }, [F, a]))
      : s === t.BANG
      ? ((F = i - 1),
        d(t.BANG),
        O({ type: e.NonNullableType, expression: N(), prefix: !0 }, [F, a]))
      : ((F = a),
        (E = N()),
        s === t.BANG
          ? (d(t.BANG),
            O({ type: e.NonNullableType, expression: E, prefix: !1 }, [F, a]))
          : s === t.QUESTION
          ? (d(t.QUESTION),
            O({ type: e.NullableType, expression: E, prefix: !1 }, [F, a]))
          : s === t.LBRACK
          ? (d(t.LBRACK),
            g(
              t.RBRACK,
              'expected an array-style type declaration (' + f + '[])'
            ),
            O(
              {
                type: e.TypeApplication,
                expression: O({ type: e.NameExpression, name: 'Array' }, [
                  F,
                  a
                ]),
                applications: [E]
              },
              [F, a]
            ))
          : E);
  }
  function re() {
    var E, F;
    if (((E = M()), s !== t.PIPE)) return E;
    for (F = [E], d(t.PIPE); F.push(M()), s === t.PIPE; ) d(t.PIPE);
    return O({ type: e.UnionType, elements: F }, [0, i]);
  }
  function R() {
    var E;
    return s === t.REST
      ? (d(t.REST), O({ type: e.RestType, expression: re() }, [0, i]))
      : ((E = re()),
        s === t.EQUAL
          ? (d(t.EQUAL), O({ type: e.OptionalType, expression: E }, [0, i]))
          : E);
  }
  function le(E, F) {
    var H;
    return (
      (r = E),
      (n = r.length),
      (i = 0),
      (a = 0),
      (k = F && F.range),
      (v = (F && F.startIndex) || 0),
      _(),
      (H = re()),
      F && F.midstream
        ? { expression: H, index: a }
        : (s !== t.EOF && D.throwError('not reach to EOF'), H)
    );
  }
  function oe(E, F) {
    var H;
    return (
      (r = E),
      (n = r.length),
      (i = 0),
      (a = 0),
      (k = F && F.range),
      (v = (F && F.startIndex) || 0),
      _(),
      (H = R()),
      F && F.midstream
        ? { expression: H, index: a }
        : (s !== t.EOF && D.throwError('not reach to EOF'), H)
    );
  }
  function Z(E, F, H) {
    var B, S, q;
    switch (E.type) {
      case e.NullableLiteral:
        B = '?';
        break;
      case e.AllLiteral:
        B = '*';
        break;
      case e.NullLiteral:
        B = 'null';
        break;
      case e.UndefinedLiteral:
        B = 'undefined';
        break;
      case e.VoidLiteral:
        B = 'void';
        break;
      case e.UnionType:
        for (H ? (B = '') : (B = '('), S = 0, q = E.elements.length; S < q; ++S)
          (B += Z(E.elements[S], F)), S + 1 !== q && (B += F ? '|' : ' | ');
        H || (B += ')');
        break;
      case e.ArrayType:
        for (B = '[', S = 0, q = E.elements.length; S < q; ++S)
          (B += Z(E.elements[S], F)), S + 1 !== q && (B += F ? ',' : ', ');
        B += ']';
        break;
      case e.RecordType:
        for (B = '{', S = 0, q = E.fields.length; S < q; ++S)
          (B += Z(E.fields[S], F)), S + 1 !== q && (B += F ? ',' : ', ');
        B += '}';
        break;
      case e.FieldType:
        E.value ? (B = E.key + (F ? ':' : ': ') + Z(E.value, F)) : (B = E.key);
        break;
      case e.FunctionType:
        for (
          B = F ? 'function(' : 'function (',
            E.this &&
              (E.new
                ? (B += F ? 'new:' : 'new: ')
                : (B += F ? 'this:' : 'this: '),
              (B += Z(E.this, F)),
              E.params.length !== 0 && (B += F ? ',' : ', ')),
            S = 0,
            q = E.params.length;
          S < q;
          ++S
        )
          (B += Z(E.params[S], F)), S + 1 !== q && (B += F ? ',' : ', ');
        (B += ')'), E.result && (B += (F ? ':' : ': ') + Z(E.result, F));
        break;
      case e.ParameterType:
        B = E.name + (F ? ':' : ': ') + Z(E.expression, F);
        break;
      case e.RestType:
        (B = '...'), E.expression && (B += Z(E.expression, F));
        break;
      case e.NonNullableType:
        E.prefix
          ? (B = '!' + Z(E.expression, F))
          : (B = Z(E.expression, F) + '!');
        break;
      case e.OptionalType:
        B = Z(E.expression, F) + '=';
        break;
      case e.NullableType:
        E.prefix
          ? (B = '?' + Z(E.expression, F))
          : (B = Z(E.expression, F) + '?');
        break;
      case e.NameExpression:
        B = E.name;
        break;
      case e.TypeApplication:
        for (
          B = Z(E.expression, F) + '.<', S = 0, q = E.applications.length;
          S < q;
          ++S
        )
          (B += Z(E.applications[S], F)), S + 1 !== q && (B += F ? ',' : ', ');
        B += '>';
        break;
      case e.StringLiteralType:
        B = '"' + E.value + '"';
        break;
      case e.NumericLiteralType:
        B = String(E.value);
        break;
      case e.BooleanLiteralType:
        B = String(E.value);
        break;
      default:
        D.throwError('Unknown type ' + E.type);
    }
    return B;
  }
  function G(E, F) {
    return F == null && (F = {}), Z(E, F.compact, F.topLevel);
  }
  (Lt.parseType = le),
    (Lt.parseParamType = oe),
    (Lt.stringify = G),
    (Lt.Syntax = e);
})();
(function (e) {
  (function () {
    var t, r, n, i, a;
    (i = Et), (t = Lt), (r = At);
    function s(g, C, y) {
      return g.slice(C, y);
    }
    a = (function () {
      var g = Object.prototype.hasOwnProperty;
      return function (y, U) {
        return g.call(y, U);
      };
    })();
    function f(g) {
      var C = {},
        y;
      for (y in g) g.hasOwnProperty(y) && (C[y] = g[y]);
      return C;
    }
    function h(g) {
      return (
        (g >= 97 && g <= 122) || (g >= 65 && g <= 90) || (g >= 48 && g <= 57)
      );
    }
    function D(g) {
      return g === 'param' || g === 'argument' || g === 'arg';
    }
    function v(g) {
      return g === 'return' || g === 'returns';
    }
    function k(g) {
      return g === 'property' || g === 'prop';
    }
    function A(g) {
      return (
        D(g) ||
        k(g) ||
        g === 'alias' ||
        g === 'this' ||
        g === 'mixes' ||
        g === 'requires'
      );
    }
    function w(g) {
      return A(g) || g === 'const' || g === 'constant';
    }
    function O(g) {
      return k(g) || D(g);
    }
    function x(g) {
      return k(g) || D(g);
    }
    function P(g) {
      return (
        D(g) ||
        v(g) ||
        g === 'define' ||
        g === 'enum' ||
        g === 'implements' ||
        g === 'this' ||
        g === 'type' ||
        g === 'typedef' ||
        k(g)
      );
    }
    function K(g) {
      return (
        P(g) ||
        g === 'throws' ||
        g === 'const' ||
        g === 'constant' ||
        g === 'namespace' ||
        g === 'member' ||
        g === 'var' ||
        g === 'module' ||
        g === 'constructor' ||
        g === 'class' ||
        g === 'extends' ||
        g === 'augments' ||
        g === 'public' ||
        g === 'private' ||
        g === 'protected'
      );
    }
    var ae =
        '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
      Ae =
        '(' +
        ae +
        '*(?:\\*' +
        ae +
        `?)?)(.+|[\r
\u2028\u2029])`;
    function _(g) {
      return g
        .replace(/^\/\*\*?/, '')
        .replace(/\*\/$/, '')
        .replace(new RegExp(Ae, 'g'), '$2')
        .replace(/\s*$/, '');
    }
    function d(g, C) {
      for (
        var y = g.replace(/^\/\*\*?/, ''), U = 0, z = new RegExp(Ae, 'g'), j;
        (j = z.exec(y));

      )
        if (((U += j[1].length), j.index + j[0].length > C + U))
          return C + U + g.length - y.length;
      return g.replace(/\*\/$/, '').replace(/\s*$/, '').length;
    }
    (function (g) {
      var C, y, U, z, j, Q, W, ne, Ce;
      function ee() {
        var B = j.charCodeAt(y);
        return (
          (y += 1),
          i.code.isLineTerminator(B) &&
            !(B === 13 && j.charCodeAt(y) === 10) &&
            (U += 1),
          String.fromCharCode(B)
        );
      }
      function b() {
        var B = '';
        for (ee(); y < z && h(j.charCodeAt(y)); ) B += ee();
        return B;
      }
      function N() {
        var B,
          S,
          q = y;
        for (S = !1; q < z; ) {
          if (
            ((B = j.charCodeAt(q)),
            i.code.isLineTerminator(B) &&
              !(B === 13 && j.charCodeAt(q + 1) === 10))
          )
            S = !0;
          else if (S) {
            if (B === 64) break;
            i.code.isWhiteSpace(B) || (S = !1);
          }
          q += 1;
        }
        return q;
      }
      function M(B, S, q) {
        for (var X, ce, De, Fe, Ke = !1; y < S; )
          if (((X = j.charCodeAt(y)), i.code.isWhiteSpace(X))) ee();
          else if (X === 123) {
            ee();
            break;
          } else {
            Ke = !0;
            break;
          }
        if (Ke) return null;
        for (ce = 1, De = ''; y < S; )
          if (((X = j.charCodeAt(y)), i.code.isLineTerminator(X))) ee();
          else {
            if (X === 125) {
              if (((ce -= 1), ce === 0)) {
                ee();
                break;
              }
            } else X === 123 && (ce += 1);
            De === '' && (Fe = y), (De += ee());
          }
        return ce !== 0
          ? r.throwError('Braces are not balanced')
          : x(B)
          ? t.parseParamType(De, { startIndex: Z(Fe), range: q })
          : t.parseType(De, { startIndex: Z(Fe), range: q });
      }
      function re(B) {
        var S;
        if (
          !i.code.isIdentifierStartES5(j.charCodeAt(y)) &&
          !j[y].match(/[0-9]/)
        )
          return null;
        for (S = ee(); y < B && i.code.isIdentifierPartES5(j.charCodeAt(y)); )
          S += ee();
        return S;
      }
      function R(B) {
        for (
          ;
          y < B &&
          (i.code.isWhiteSpace(j.charCodeAt(y)) ||
            i.code.isLineTerminator(j.charCodeAt(y)));

        )
          ee();
      }
      function le(B, S, q) {
        var X = '',
          ce,
          De;
        if ((R(B), y >= B)) return null;
        if (j.charCodeAt(y) === 91)
          if (S) (ce = !0), (X = ee());
          else return null;
        if (((X += re(B)), q))
          for (
            j.charCodeAt(y) === 58 &&
              (X === 'module' || X === 'external' || X === 'event') &&
              ((X += ee()), (X += re(B))),
              j.charCodeAt(y) === 91 &&
                j.charCodeAt(y + 1) === 93 &&
                ((X += ee()), (X += ee()));
            j.charCodeAt(y) === 46 ||
            j.charCodeAt(y) === 47 ||
            j.charCodeAt(y) === 35 ||
            j.charCodeAt(y) === 45 ||
            j.charCodeAt(y) === 126;

          )
            (X += ee()), (X += re(B));
        if (ce) {
          if ((R(B), j.charCodeAt(y) === 61)) {
            (X += ee()), R(B);
            for (var Fe, Ke = 1; y < B; ) {
              if (
                ((Fe = j.charCodeAt(y)),
                i.code.isWhiteSpace(Fe) &&
                  (De || (R(B), (Fe = j.charCodeAt(y)))),
                Fe === 39 && (De ? De === "'" && (De = '') : (De = "'")),
                Fe === 34 && (De ? De === '"' && (De = '') : (De = '"')),
                Fe === 91)
              )
                Ke++;
              else if (Fe === 93 && --Ke === 0) break;
              X += ee();
            }
          }
          if ((R(B), y >= B || j.charCodeAt(y) !== 93)) return null;
          X += ee();
        }
        return X;
      }
      function oe() {
        for (; y < z && j.charCodeAt(y) !== 64; ) ee();
        return y >= z ? !1 : (r.assert(j.charCodeAt(y) === 64), !0);
      }
      function Z(B) {
        return j === Q ? B : d(Q, B);
      }
      function G(B, S) {
        (this._options = B),
          (this._title = S.toLowerCase()),
          (this._tag = { title: S, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = U),
          (this._first = y - S.length - 1),
          (this._last = 0),
          (this._extra = {});
      }
      (G.prototype.addError = function (S) {
        var q = Array.prototype.slice.call(arguments, 1),
          X = S.replace(/%(\d)/g, function (ce, De) {
            return (
              r.assert(De < q.length, 'Message reference must be in range'),
              q[De]
            );
          });
        return (
          this._tag.errors || (this._tag.errors = []),
          Ce && r.throwError(X),
          this._tag.errors.push(X),
          W
        );
      }),
        (G.prototype.parseType = function () {
          if (P(this._title))
            try {
              if (
                ((this._tag.type = M(
                  this._title,
                  this._last,
                  this._options.range
                )),
                !this._tag.type &&
                  !D(this._title) &&
                  !v(this._title) &&
                  !this.addError('Missing or invalid tag type'))
              )
                return !1;
            } catch (B) {
              if (((this._tag.type = null), !this.addError(B.message)))
                return !1;
            }
          else if (K(this._title))
            try {
              this._tag.type = M(this._title, this._last, this._options.range);
            } catch {}
          return !0;
        }),
        (G.prototype._parseNamePath = function (B) {
          var S;
          return (
            (S = le(this._last, ne && x(this._title), !0)),
            !S && !B && !this.addError('Missing or invalid tag name')
              ? !1
              : ((this._tag.name = S), !0)
          );
        }),
        (G.prototype.parseNamePath = function () {
          return this._parseNamePath(!1);
        }),
        (G.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0);
        }),
        (G.prototype.parseName = function () {
          var B, S;
          if (w(this._title))
            if (
              ((this._tag.name = le(
                this._last,
                ne && x(this._title),
                O(this._title)
              )),
              this._tag.name)
            )
              (S = this._tag.name),
                S.charAt(0) === '[' &&
                  S.charAt(S.length - 1) === ']' &&
                  ((B = S.substring(1, S.length - 1).split('=')),
                  B.length > 1 && (this._tag.default = B.slice(1).join('=')),
                  (this._tag.name = B[0]),
                  this._tag.type &&
                    this._tag.type.type !== 'OptionalType' &&
                    (this._tag.type = {
                      type: 'OptionalType',
                      expression: this._tag.type
                    }));
            else {
              if (!A(this._title)) return !0;
              if (D(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type),
                  (this._tag.name = this._tag.type.name),
                  (this._tag.type = null);
              else if (!this.addError('Missing or invalid tag name')) return !1;
            }
          return !0;
        }),
        (G.prototype.parseDescription = function () {
          var S = s(j, y, this._last).trim();
          return (
            S &&
              (/^-\s+/.test(S) && (S = S.substring(2)),
              (this._tag.description = S)),
            !0
          );
        }),
        (G.prototype.parseCaption = function () {
          var S = s(j, y, this._last).trim(),
            q = '<caption>',
            X = '</caption>',
            ce = S.indexOf(q),
            De = S.indexOf(X);
          return (
            ce >= 0 && De >= 0
              ? ((this._tag.caption = S.substring(ce + q.length, De).trim()),
                (this._tag.description = S.substring(De + X.length).trim()))
              : (this._tag.description = S),
            !0
          );
        }),
        (G.prototype.parseKind = function () {
          var S, q;
          return (
            (q = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0
            }),
            (S = s(j, y, this._last).trim()),
            (this._tag.kind = S),
            !(!a(q, S) && !this.addError("Invalid kind name '%0'", S))
          );
        }),
        (G.prototype.parseAccess = function () {
          var S;
          return (
            (S = s(j, y, this._last).trim()),
            (this._tag.access = S),
            !(
              S !== 'private' &&
              S !== 'protected' &&
              S !== 'public' &&
              !this.addError("Invalid access name '%0'", S)
            )
          );
        }),
        (G.prototype.parseThis = function () {
          var S = s(j, y, this._last).trim();
          if (S && S.charAt(0) === '{') {
            var q = this.parseType();
            return (q && this._tag.type.type === 'NameExpression') ||
              this._tag.type.type === 'UnionType'
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError('Invalid name for this');
          } else return this.parseNamePath();
        }),
        (G.prototype.parseVariation = function () {
          var S, q;
          return (
            (q = s(j, y, this._last).trim()),
            (S = parseFloat(q, 10)),
            (this._tag.variation = S),
            !(isNaN(S) && !this.addError("Invalid variation '%0'", q))
          );
        }),
        (G.prototype.ensureEnd = function () {
          var B = s(j, y, this._last).trim();
          return !(B && !this.addError("Unknown content '%0'", B));
        }),
        (G.prototype.epilogue = function () {
          var S;
          return (
            (S = this._tag.description),
            !(
              x(this._title) &&
              !this._tag.type &&
              S &&
              S.charAt(0) === '[' &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !ne && !this.addError('Missing or invalid tag name'))
            )
          );
        }),
        (C = {
          access: ['parseAccess'],
          alias: ['parseNamePath', 'ensureEnd'],
          augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          example: ['parseCaption'],
          deprecated: ['parseDescription'],
          global: ['ensureEnd'],
          inner: ['ensureEnd'],
          instance: ['ensureEnd'],
          kind: ['parseKind'],
          mixes: ['parseNamePath', 'ensureEnd'],
          mixin: ['parseNamePathOptional', 'ensureEnd'],
          member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          method: ['parseNamePathOptional', 'ensureEnd'],
          module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          func: ['parseNamePathOptional', 'ensureEnd'],
          function: ['parseNamePathOptional', 'ensureEnd'],
          var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          name: ['parseNamePath', 'ensureEnd'],
          namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          private: ['parseType', 'parseDescription'],
          protected: ['parseType', 'parseDescription'],
          public: ['parseType', 'parseDescription'],
          readonly: ['ensureEnd'],
          requires: ['parseNamePath', 'ensureEnd'],
          since: ['parseDescription'],
          static: ['ensureEnd'],
          summary: ['parseDescription'],
          this: ['parseThis', 'ensureEnd'],
          todo: ['parseDescription'],
          typedef: ['parseType', 'parseNamePathOptional'],
          variation: ['parseVariation'],
          version: ['parseDescription']
        }),
        (G.prototype.parse = function () {
          var S, q, X, ce;
          if (!this._title && !this.addError('Missing or invalid title'))
            return null;
          for (
            this._last = N(this._title),
              this._options.range &&
                (this._tag.range = [
                  this._first,
                  j.slice(0, this._last).replace(/\s*$/, '').length
                ].map(Z)),
              a(C, this._title)
                ? (X = C[this._title])
                : (X = [
                    'parseType',
                    'parseName',
                    'parseDescription',
                    'epilogue'
                  ]),
              S = 0,
              q = X.length;
            S < q;
            ++S
          )
            if (((ce = X[S]), !this[ce]())) return null;
          return this._tag;
        });
      function E(B) {
        var S, q, X;
        if (!oe()) return null;
        for (S = b(), q = new G(B, S), X = q.parse(); y < q._last; ) ee();
        return X;
      }
      function F(B) {
        var S = '',
          q,
          X;
        for (X = !0; y < z && ((q = j.charCodeAt(y)), !(X && q === 64)); )
          i.code.isLineTerminator(q)
            ? (X = !0)
            : X && !i.code.isWhiteSpace(q) && (X = !1),
            (S += ee());
        return B ? S : S.trim();
      }
      function H(B, S) {
        var q = [],
          X,
          ce,
          De,
          Fe,
          Ke;
        if (
          (S === void 0 && (S = {}),
          typeof S.unwrap == 'boolean' && S.unwrap ? (j = _(B)) : (j = B),
          (Q = B),
          S.tags)
        )
          if (Array.isArray(S.tags))
            for (De = {}, Fe = 0, Ke = S.tags.length; Fe < Ke; Fe++)
              typeof S.tags[Fe] == 'string'
                ? (De[S.tags[Fe]] = !0)
                : r.throwError('Invalid "tags" parameter: ' + S.tags);
          else r.throwError('Invalid "tags" parameter: ' + S.tags);
        for (
          z = j.length,
            y = 0,
            U = 0,
            W = S.recoverable,
            ne = S.sloppy,
            Ce = S.strict,
            ce = F(S.preserveWhitespace);
          (X = E(S)), !!X;

        )
          (!De || De.hasOwnProperty(X.title)) && q.push(X);
        return { description: ce, tags: q };
      }
      g.parse = H;
    })((n = {})),
      (e.version = r.VERSION),
      (e.parse = n.parse),
      (e.parseType = t.parseType),
      (e.parseParamType = t.parseParamType),
      (e.unwrapComment = _),
      (e.Syntax = f(t.Syntax)),
      (e.Error = r.DoctrineError),
      (e.type = {
        Syntax: e.Syntax,
        parseType: t.parseType,
        parseParamType: t.parseParamType,
        stringify: t.stringify
      });
  })();
})(ti);
function Ra(e) {
  return e != null && e.includes('@');
}
function Ma(e, t) {
  var r;
  try {
    r = ti.parse(e, { tags: t, sloppy: !0 });
  } catch (n) {
    throw (console.error(n), new Error('Cannot parse JSDoc tags.'));
  }
  return r;
}
var ja = { tags: ['param', 'arg', 'argument', 'returns', 'ignore'] },
  Va = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ja;
    if (!Ra(t)) return { includesJsDoc: !1, ignore: !1 };
    var n = Ma(t, r.tags),
      i = Ua(n);
    return i.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : {
          includesJsDoc: !0,
          ignore: !1,
          description: n.description,
          extractedTags: i
        };
  };
function Ua(e) {
  for (
    var t = { params: null, returns: null, ignore: !1 }, r = 0;
    r < e.tags.length;
    r += 1
  ) {
    var n = e.tags[r];
    if (n.title === 'ignore') {
      t.ignore = !0;
      break;
    } else
      switch (n.title) {
        case 'param':
        case 'arg':
        case 'argument': {
          var i = qa(n);
          i != null && (t.params == null && (t.params = []), t.params.push(i));
          break;
        }
        case 'returns': {
          var a = Wa(n);
          a != null && (t.returns = a);
          break;
        }
      }
  }
  return t;
}
function qa(e) {
  var t = e.name;
  return t != null && t !== 'null-null'
    ? {
        name: e.name,
        type: e.type,
        description: e.description,
        getPrettyName: function () {
          return t.includes('null')
            ? t.replace('-null', '').replace('.null', '')
            : e.name;
        },
        getTypeName: function () {
          return e.type != null ? Dt(e.type) : null;
        }
      }
    : null;
}
function Wa(e) {
  return e.type != null
    ? {
        type: e.type,
        description: e.description,
        getTypeName: function () {
          return Dt(e.type);
        }
      }
    : null;
}
function Dt(e) {
  if (e.type === 'NameExpression') return e.name;
  if (e.type === 'RecordType') {
    var t = e.fields.map(function (i) {
      if (i.value != null) {
        var a = Dt(i.value);
        return ''.concat(i.key, ': ').concat(a);
      }
      return i.key;
    });
    return '({'.concat(t.join(', '), '})');
  }
  if (e.type === 'UnionType') {
    var r = e.elements.map(Dt);
    return '('.concat(r.join('|'), ')');
  }
  if (e.type === 'ArrayType') return '[]';
  if (
    e.type === 'TypeApplication' &&
    e.expression != null &&
    e.expression.name === 'Array'
  ) {
    var n = Dt(e.applications[0]);
    return ''.concat(n, '[]');
  }
  return e.type === 'NullableType' ||
    e.type === 'NonNullableType' ||
    e.type === 'OptionalType'
    ? Dt(e.expression)
    : e.type === 'AllLiteral'
    ? 'any'
    : null;
}
var Ga = 90,
  za = 50;
function jr(e) {
  return e.length > Ga;
}
function Bt(e) {
  return e.length > za;
}
function ie(e, t) {
  return e === t ? { summary: e } : { summary: e, detail: t };
}
var Kt;
(function (e) {
  (e.UNION = 'union'), (e.SIGNATURE = 'signature');
})(Kt || (Kt = {}));
function pi(e) {
  var t = e.name,
    r = e.value,
    n = e.elements,
    i = e.raw;
  return r != null ? r : n != null ? n.map(pi).join(' | ') : i != null ? i : t;
}
function $a(e) {
  var t = e.name,
    r = e.raw,
    n = e.elements;
  return n != null
    ? ie(n.map(pi).join(' | '))
    : r != null
    ? ie(r.replace(/^\|\s*/, ''))
    : ie(t);
}
function Ja(e) {
  var t = e.type,
    r = e.raw;
  return r != null ? ie(r) : ie(t);
}
function Ha(e) {
  var t = e.type,
    r = e.raw;
  return r != null ? (jr(r) ? ie(t, r) : ie(r)) : ie(t);
}
function Ka(e) {
  var t = e.type;
  return t === 'object' ? Ha(e) : Ja(e);
}
function Qa(e) {
  var t = e.name,
    r = e.raw;
  return r != null ? (jr(r) ? ie(t, r) : ie(r)) : ie(t);
}
function Xa(e) {
  if (e == null) return null;
  switch (e.name) {
    case Kt.UNION:
      return $a(e);
    case Kt.SIGNATURE:
      return Ka(e);
    default:
      return Qa(e);
  }
}
function Ya(e, t) {
  if (e != null) {
    var r = e.value;
    if (!Lr(r)) return Bt(r) ? ie(t.name, r) : ie(r);
  }
  return null;
}
var Za = function (t, r) {
  var n = r.flowType,
    i = r.description,
    a = r.required,
    s = r.defaultValue;
  return {
    name: t,
    type: Xa(n),
    required: a,
    description: i,
    defaultValue: Ya(s, n)
  };
};
function es(e) {
  var t = e.tsType,
    r = e.required;
  return t == null ? null : ie(r ? t.name : t.name.replace(' | undefined', ''));
}
function ts(e) {
  var t = e.defaultValue;
  if (t != null) {
    var r = t.value;
    if (!Lr(r)) return ie(r);
  }
  return null;
}
var rs = function (t, r) {
  var n = r.description,
    i = r.required;
  return {
    name: t,
    type: es(r),
    required: i,
    description: n,
    defaultValue: ts(r)
  };
};
function ns(e) {
  return e != null ? ie(e.name) : null;
}
function is(e) {
  var t = e.computed,
    r = e.func;
  return typeof t == 'undefined' && typeof r == 'undefined';
}
function us(e) {
  return e
    ? e.name === 'string'
      ? !0
      : e.name === 'enum'
      ? Array.isArray(e.value) &&
        e.value.every(function (t) {
          var r = t.value;
          return (
            typeof r == 'string' && r[0] === '"' && r[r.length - 1] === '"'
          );
        })
      : !1
    : !1;
}
function as(e, t) {
  if (e != null) {
    var r = e.value;
    if (!Lr(r)) return is(e) && us(t) ? ie(JSON.stringify(r)) : ie(r);
  }
  return null;
}
function hi(e, t, r) {
  var n = r.description,
    i = r.required,
    a = r.defaultValue;
  return {
    name: e,
    type: ns(t),
    required: i,
    description: n,
    defaultValue: as(a, t)
  };
}
function ir(e, t) {
  if (t.includesJsDoc) {
    var r = t.description,
      n = t.extractedTags;
    r != null && (e.description = t.description);
    var i = n.params != null,
      a = n.returns != null && n.returns.type != null;
    (i || a) &&
      (e.jsDocTags = {
        params:
          i &&
          n.params.map(function (s) {
            return { name: s.getPrettyName(), description: s.description };
          }),
        returns: a && { description: n.returns.description }
      });
  }
  return e;
}
var ss = function (t, r, n) {
    var i = hi(t, r.type, r);
    return (i.sbType = Pr(r)), ir(i, n);
  },
  os = function (t, r, n) {
    var i = rs(t, r);
    return (i.sbType = Pr(r)), ir(i, n);
  },
  ls = function (t, r, n) {
    var i = Za(t, r);
    return (i.sbType = Pr(r)), ir(i, n);
  },
  cs = function (t, r, n) {
    var i = hi(t, { name: 'unknown' }, r);
    return ir(i, n);
  },
  di = function (t) {
    switch (t) {
      case $e.JAVASCRIPT:
        return ss;
      case $e.TYPESCRIPT:
        return os;
      case $e.FLOW:
        return ls;
      default:
        return cs;
    }
  },
  mi = function (t) {
    return t.type != null
      ? $e.JAVASCRIPT
      : t.flowType != null
      ? $e.FLOW
      : t.tsType != null
      ? $e.TYPESCRIPT
      : $e.UNKNOWN;
  },
  fs = function (t) {
    var r = mi(t[0]),
      n = di(r);
    return t.map(function (i) {
      var a,
        s = i;
      return (
        (a = i.type) !== null &&
          a !== void 0 &&
          a.elements &&
          (s = Object.assign({}, i, {
            type: Object.assign({}, i.type, { value: i.type.elements })
          })),
        gi(s.name, s, r, n)
      );
    });
  },
  ps = function (t) {
    var r = Object.keys(t),
      n = mi(t[r[0]]),
      i = di(n);
    return r
      .map(function (a) {
        var s = t[a];
        return s != null ? gi(a, s, n, i) : null;
      })
      .filter(Boolean);
  },
  hs = function (t, r) {
    var n = ei(t, r);
    return oa(n) ? (Array.isArray(n) ? fs(n) : ps(n)) : [];
  };
function gi(e, t, r, n) {
  var i = Va(t.description),
    a = i.includesJsDoc && i.ignore;
  if (!a) {
    var s = n(e, t, i);
    return {
      propDef: s,
      jsDocTags: i.extractedTags,
      docgenInfo: t,
      typeSystem: r
    };
  }
  return null;
}
function ds(e) {
  return e != null && la(e);
}
var ms = function (t) {
    var r = t.component,
      n = t.argTypes,
      i = t.parameters.docs,
      a = i === void 0 ? {} : i,
      s = a.extractArgTypes,
      f = s && r ? s(r) : {},
      h = f ? qu(f, n) : n;
    return h;
  },
  gs = 'storybook/docs',
  As = ''.concat(gs, '/snippet-rendered'),
  Qt;
(function (e) {
  (e.AUTO = 'auto'), (e.CODE = 'code'), (e.DYNAMIC = 'dynamic');
})(Qt || (Qt = {}));
var Ai = { exports: {} },
  Ds = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Es = Ds,
  ys = Es;
function Di() {}
function Ei() {}
Ei.resetWarningCache = Di;
var Cs = function () {
  function e(n, i, a, s, f, h) {
    if (h !== ys) {
      var D = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
      );
      throw ((D.name = 'Invariant Violation'), D);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var r = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: Ei,
    resetWarningCache: Di
  };
  return (r.PropTypes = r), r;
};
Ai.exports = Cs();
var Tn = Ai.exports;
function vs(e, t) {
  var r = e != null,
    n = t != null;
  if (!r && !n) return '';
  var i = [];
  if (r) {
    var a = e.map(function (s) {
      var f = s.getPrettyName(),
        h = s.getTypeName();
      return h != null ? ''.concat(f, ': ').concat(h) : f;
    });
    i.push('('.concat(a.join(', '), ')'));
  } else i.push('()');
  return n && i.push('=> '.concat(t.getTypeName())), i.join(' ');
}
function xs(e, t) {
  var r = e != null,
    n = t != null;
  if (!r && !n) return '';
  var i = [];
  return (
    r ? i.push('( ... )') : i.push('()'),
    n && i.push('=> '.concat(t.getTypeName())),
    i.join(' ')
  );
}
function Fs(e) {
  return e.replace(
    /,/g,
    `,\r
`
  );
}
var Fr = 'custom',
  Ut = 'object',
  Vr = 'array',
  bs = 'class',
  vt = 'func',
  wt = 'element',
  Ss = [
    'a',
    'abbr',
    'address',
    'area',
    'article',
    'aside',
    'audio',
    'b',
    'base',
    'bdi',
    'bdo',
    'blockquote',
    'body',
    'br',
    'button',
    'canvas',
    'caption',
    'cite',
    'code',
    'col',
    'colgroup',
    'data',
    'datalist',
    'dd',
    'del',
    'details',
    'dfn',
    'dialog',
    'div',
    'dl',
    'dt',
    'em',
    'embed',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hgroup',
    'hr',
    'html',
    'i',
    'iframe',
    'img',
    'input',
    'ins',
    'kbd',
    'label',
    'legend',
    'li',
    'link',
    'main',
    'map',
    'mark',
    'math',
    'menu',
    'menuitem',
    'meta',
    'meter',
    'nav',
    'noscript',
    'object',
    'ol',
    'optgroup',
    'option',
    'output',
    'p',
    'param',
    'picture',
    'pre',
    'progress',
    'q',
    'rb',
    'rp',
    'rt',
    'rtc',
    'ruby',
    's',
    'samp',
    'script',
    'section',
    'select',
    'slot',
    'small',
    'source',
    'span',
    'strong',
    'style',
    'sub',
    'summary',
    'sup',
    'svg',
    'table',
    'tbody',
    'td',
    'template',
    'textarea',
    'tfoot',
    'th',
    'thead',
    'time',
    'title',
    'tr',
    'track',
    'u',
    'ul',
    'var',
    'video',
    'wbr'
  ],
  _s = Ss;
function Ur(e) {
  return _s.includes(e.toLowerCase());
}
var yi = {},
  Ci = {};
(function (e) {
  (function t(r) {
    var n, i, a, s, f, h;
    function D(d) {
      var g = {},
        C,
        y;
      for (C in d)
        d.hasOwnProperty(C) &&
          ((y = d[C]),
          typeof y == 'object' && y !== null ? (g[C] = D(y)) : (g[C] = y));
      return g;
    }
    function v(d, g) {
      var C, y, U, z;
      for (y = d.length, U = 0; y; )
        (C = y >>> 1),
          (z = U + C),
          g(d[z]) ? (y = C) : ((U = z + 1), (y -= C + 1));
      return U;
    }
    (n = {
      AssignmentExpression: 'AssignmentExpression',
      AssignmentPattern: 'AssignmentPattern',
      ArrayExpression: 'ArrayExpression',
      ArrayPattern: 'ArrayPattern',
      ArrowFunctionExpression: 'ArrowFunctionExpression',
      AwaitExpression: 'AwaitExpression',
      BlockStatement: 'BlockStatement',
      BinaryExpression: 'BinaryExpression',
      BreakStatement: 'BreakStatement',
      CallExpression: 'CallExpression',
      CatchClause: 'CatchClause',
      ChainExpression: 'ChainExpression',
      ClassBody: 'ClassBody',
      ClassDeclaration: 'ClassDeclaration',
      ClassExpression: 'ClassExpression',
      ComprehensionBlock: 'ComprehensionBlock',
      ComprehensionExpression: 'ComprehensionExpression',
      ConditionalExpression: 'ConditionalExpression',
      ContinueStatement: 'ContinueStatement',
      DebuggerStatement: 'DebuggerStatement',
      DirectiveStatement: 'DirectiveStatement',
      DoWhileStatement: 'DoWhileStatement',
      EmptyStatement: 'EmptyStatement',
      ExportAllDeclaration: 'ExportAllDeclaration',
      ExportDefaultDeclaration: 'ExportDefaultDeclaration',
      ExportNamedDeclaration: 'ExportNamedDeclaration',
      ExportSpecifier: 'ExportSpecifier',
      ExpressionStatement: 'ExpressionStatement',
      ForStatement: 'ForStatement',
      ForInStatement: 'ForInStatement',
      ForOfStatement: 'ForOfStatement',
      FunctionDeclaration: 'FunctionDeclaration',
      FunctionExpression: 'FunctionExpression',
      GeneratorExpression: 'GeneratorExpression',
      Identifier: 'Identifier',
      IfStatement: 'IfStatement',
      ImportExpression: 'ImportExpression',
      ImportDeclaration: 'ImportDeclaration',
      ImportDefaultSpecifier: 'ImportDefaultSpecifier',
      ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
      ImportSpecifier: 'ImportSpecifier',
      Literal: 'Literal',
      LabeledStatement: 'LabeledStatement',
      LogicalExpression: 'LogicalExpression',
      MemberExpression: 'MemberExpression',
      MetaProperty: 'MetaProperty',
      MethodDefinition: 'MethodDefinition',
      ModuleSpecifier: 'ModuleSpecifier',
      NewExpression: 'NewExpression',
      ObjectExpression: 'ObjectExpression',
      ObjectPattern: 'ObjectPattern',
      PrivateIdentifier: 'PrivateIdentifier',
      Program: 'Program',
      Property: 'Property',
      PropertyDefinition: 'PropertyDefinition',
      RestElement: 'RestElement',
      ReturnStatement: 'ReturnStatement',
      SequenceExpression: 'SequenceExpression',
      SpreadElement: 'SpreadElement',
      Super: 'Super',
      SwitchStatement: 'SwitchStatement',
      SwitchCase: 'SwitchCase',
      TaggedTemplateExpression: 'TaggedTemplateExpression',
      TemplateElement: 'TemplateElement',
      TemplateLiteral: 'TemplateLiteral',
      ThisExpression: 'ThisExpression',
      ThrowStatement: 'ThrowStatement',
      TryStatement: 'TryStatement',
      UnaryExpression: 'UnaryExpression',
      UpdateExpression: 'UpdateExpression',
      VariableDeclaration: 'VariableDeclaration',
      VariableDeclarator: 'VariableDeclarator',
      WhileStatement: 'WhileStatement',
      WithStatement: 'WithStatement',
      YieldExpression: 'YieldExpression'
    }),
      (a = {
        AssignmentExpression: ['left', 'right'],
        AssignmentPattern: ['left', 'right'],
        ArrayExpression: ['elements'],
        ArrayPattern: ['elements'],
        ArrowFunctionExpression: ['params', 'body'],
        AwaitExpression: ['argument'],
        BlockStatement: ['body'],
        BinaryExpression: ['left', 'right'],
        BreakStatement: ['label'],
        CallExpression: ['callee', 'arguments'],
        CatchClause: ['param', 'body'],
        ChainExpression: ['expression'],
        ClassBody: ['body'],
        ClassDeclaration: ['id', 'superClass', 'body'],
        ClassExpression: ['id', 'superClass', 'body'],
        ComprehensionBlock: ['left', 'right'],
        ComprehensionExpression: ['blocks', 'filter', 'body'],
        ConditionalExpression: ['test', 'consequent', 'alternate'],
        ContinueStatement: ['label'],
        DebuggerStatement: [],
        DirectiveStatement: [],
        DoWhileStatement: ['body', 'test'],
        EmptyStatement: [],
        ExportAllDeclaration: ['source'],
        ExportDefaultDeclaration: ['declaration'],
        ExportNamedDeclaration: ['declaration', 'specifiers', 'source'],
        ExportSpecifier: ['exported', 'local'],
        ExpressionStatement: ['expression'],
        ForStatement: ['init', 'test', 'update', 'body'],
        ForInStatement: ['left', 'right', 'body'],
        ForOfStatement: ['left', 'right', 'body'],
        FunctionDeclaration: ['id', 'params', 'body'],
        FunctionExpression: ['id', 'params', 'body'],
        GeneratorExpression: ['blocks', 'filter', 'body'],
        Identifier: [],
        IfStatement: ['test', 'consequent', 'alternate'],
        ImportExpression: ['source'],
        ImportDeclaration: ['specifiers', 'source'],
        ImportDefaultSpecifier: ['local'],
        ImportNamespaceSpecifier: ['local'],
        ImportSpecifier: ['imported', 'local'],
        Literal: [],
        LabeledStatement: ['label', 'body'],
        LogicalExpression: ['left', 'right'],
        MemberExpression: ['object', 'property'],
        MetaProperty: ['meta', 'property'],
        MethodDefinition: ['key', 'value'],
        ModuleSpecifier: [],
        NewExpression: ['callee', 'arguments'],
        ObjectExpression: ['properties'],
        ObjectPattern: ['properties'],
        PrivateIdentifier: [],
        Program: ['body'],
        Property: ['key', 'value'],
        PropertyDefinition: ['key', 'value'],
        RestElement: ['argument'],
        ReturnStatement: ['argument'],
        SequenceExpression: ['expressions'],
        SpreadElement: ['argument'],
        Super: [],
        SwitchStatement: ['discriminant', 'cases'],
        SwitchCase: ['test', 'consequent'],
        TaggedTemplateExpression: ['tag', 'quasi'],
        TemplateElement: [],
        TemplateLiteral: ['quasis', 'expressions'],
        ThisExpression: [],
        ThrowStatement: ['argument'],
        TryStatement: ['block', 'handler', 'finalizer'],
        UnaryExpression: ['argument'],
        UpdateExpression: ['argument'],
        VariableDeclaration: ['declarations'],
        VariableDeclarator: ['id', 'init'],
        WhileStatement: ['test', 'body'],
        WithStatement: ['object', 'body'],
        YieldExpression: ['argument']
      }),
      (s = {}),
      (f = {}),
      (h = {}),
      (i = { Break: s, Skip: f, Remove: h });
    function k(d, g) {
      (this.parent = d), (this.key = g);
    }
    (k.prototype.replace = function (g) {
      this.parent[this.key] = g;
    }),
      (k.prototype.remove = function () {
        return Array.isArray(this.parent)
          ? (this.parent.splice(this.key, 1), !0)
          : (this.replace(null), !1);
      });
    function A(d, g, C, y) {
      (this.node = d), (this.path = g), (this.wrap = C), (this.ref = y);
    }
    function w() {}
    (w.prototype.path = function () {
      var g, C, y, U, z, j;
      function Q(W, ne) {
        if (Array.isArray(ne))
          for (y = 0, U = ne.length; y < U; ++y) W.push(ne[y]);
        else W.push(ne);
      }
      if (!this.__current.path) return null;
      for (z = [], g = 2, C = this.__leavelist.length; g < C; ++g)
        (j = this.__leavelist[g]), Q(z, j.path);
      return Q(z, this.__current.path), z;
    }),
      (w.prototype.type = function () {
        var d = this.current();
        return d.type || this.__current.wrap;
      }),
      (w.prototype.parents = function () {
        var g, C, y;
        for (y = [], g = 1, C = this.__leavelist.length; g < C; ++g)
          y.push(this.__leavelist[g].node);
        return y;
      }),
      (w.prototype.current = function () {
        return this.__current.node;
      }),
      (w.prototype.__execute = function (g, C) {
        var y, U;
        return (
          (U = void 0),
          (y = this.__current),
          (this.__current = C),
          (this.__state = null),
          g &&
            (U = g.call(
              this,
              C.node,
              this.__leavelist[this.__leavelist.length - 1].node
            )),
          (this.__current = y),
          U
        );
      }),
      (w.prototype.notify = function (g) {
        this.__state = g;
      }),
      (w.prototype.skip = function () {
        this.notify(f);
      }),
      (w.prototype.break = function () {
        this.notify(s);
      }),
      (w.prototype.remove = function () {
        this.notify(h);
      }),
      (w.prototype.__initialize = function (d, g) {
        (this.visitor = g),
          (this.root = d),
          (this.__worklist = []),
          (this.__leavelist = []),
          (this.__current = null),
          (this.__state = null),
          (this.__fallback = null),
          g.fallback === 'iteration'
            ? (this.__fallback = Object.keys)
            : typeof g.fallback == 'function' && (this.__fallback = g.fallback),
          (this.__keys = a),
          g.keys &&
            (this.__keys = Object.assign(Object.create(this.__keys), g.keys));
      });
    function O(d) {
      return d == null ? !1 : typeof d == 'object' && typeof d.type == 'string';
    }
    function x(d, g) {
      return (
        (d === n.ObjectExpression || d === n.ObjectPattern) &&
        g === 'properties'
      );
    }
    function P(d, g) {
      for (var C = d.length - 1; C >= 0; --C) if (d[C].node === g) return !0;
      return !1;
    }
    (w.prototype.traverse = function (g, C) {
      var y, U, z, j, Q, W, ne, Ce, ee, b, N, M;
      for (
        this.__initialize(g, C),
          M = {},
          y = this.__worklist,
          U = this.__leavelist,
          y.push(new A(g, null, null, null)),
          U.push(new A(null, null, null, null));
        y.length;

      ) {
        if (((z = y.pop()), z === M)) {
          if (
            ((z = U.pop()),
            (W = this.__execute(C.leave, z)),
            this.__state === s || W === s)
          )
            return;
          continue;
        }
        if (z.node) {
          if (((W = this.__execute(C.enter, z)), this.__state === s || W === s))
            return;
          if ((y.push(M), U.push(z), this.__state === f || W === f)) continue;
          if (((j = z.node), (Q = j.type || z.wrap), (b = this.__keys[Q]), !b))
            if (this.__fallback) b = this.__fallback(j);
            else throw new Error('Unknown node type ' + Q + '.');
          for (Ce = b.length; (Ce -= 1) >= 0; )
            if (((ne = b[Ce]), (N = j[ne]), !!N)) {
              if (Array.isArray(N)) {
                for (ee = N.length; (ee -= 1) >= 0; )
                  if (!!N[ee] && !P(U, N[ee])) {
                    if (x(Q, b[Ce]))
                      z = new A(N[ee], [ne, ee], 'Property', null);
                    else if (O(N[ee])) z = new A(N[ee], [ne, ee], null, null);
                    else continue;
                    y.push(z);
                  }
              } else if (O(N)) {
                if (P(U, N)) continue;
                y.push(new A(N, ne, null, null));
              }
            }
        }
      }
    }),
      (w.prototype.replace = function (g, C) {
        var y, U, z, j, Q, W, ne, Ce, ee, b, N, M, re;
        function R(le) {
          var oe, Z, G, E;
          if (le.ref.remove()) {
            for (Z = le.ref.key, E = le.ref.parent, oe = y.length; oe--; )
              if (((G = y[oe]), G.ref && G.ref.parent === E)) {
                if (G.ref.key < Z) break;
                --G.ref.key;
              }
          }
        }
        for (
          this.__initialize(g, C),
            N = {},
            y = this.__worklist,
            U = this.__leavelist,
            M = { root: g },
            W = new A(g, null, null, new k(M, 'root')),
            y.push(W),
            U.push(W);
          y.length;

        ) {
          if (((W = y.pop()), W === N)) {
            if (
              ((W = U.pop()),
              (Q = this.__execute(C.leave, W)),
              Q !== void 0 && Q !== s && Q !== f && Q !== h && W.ref.replace(Q),
              (this.__state === h || Q === h) && R(W),
              this.__state === s || Q === s)
            )
              return M.root;
            continue;
          }
          if (
            ((Q = this.__execute(C.enter, W)),
            Q !== void 0 &&
              Q !== s &&
              Q !== f &&
              Q !== h &&
              (W.ref.replace(Q), (W.node = Q)),
            (this.__state === h || Q === h) && (R(W), (W.node = null)),
            this.__state === s || Q === s)
          )
            return M.root;
          if (
            ((z = W.node),
            !!z && (y.push(N), U.push(W), !(this.__state === f || Q === f)))
          ) {
            if (((j = z.type || W.wrap), (ee = this.__keys[j]), !ee))
              if (this.__fallback) ee = this.__fallback(z);
              else throw new Error('Unknown node type ' + j + '.');
            for (ne = ee.length; (ne -= 1) >= 0; )
              if (((re = ee[ne]), (b = z[re]), !!b))
                if (Array.isArray(b)) {
                  for (Ce = b.length; (Ce -= 1) >= 0; )
                    if (!!b[Ce]) {
                      if (x(j, ee[ne]))
                        W = new A(b[Ce], [re, Ce], 'Property', new k(b, Ce));
                      else if (O(b[Ce]))
                        W = new A(b[Ce], [re, Ce], null, new k(b, Ce));
                      else continue;
                      y.push(W);
                    }
                } else O(b) && y.push(new A(b, re, null, new k(z, re)));
          }
        }
        return M.root;
      });
    function K(d, g) {
      var C = new w();
      return C.traverse(d, g);
    }
    function ae(d, g) {
      var C = new w();
      return C.replace(d, g);
    }
    function Ae(d, g) {
      var C;
      return (
        (C = v(g, function (U) {
          return U.range[0] > d.range[0];
        })),
        (d.extendedRange = [d.range[0], d.range[1]]),
        C !== g.length && (d.extendedRange[1] = g[C].range[0]),
        (C -= 1),
        C >= 0 && (d.extendedRange[0] = g[C].range[1]),
        d
      );
    }
    function _(d, g, C) {
      var y = [],
        U,
        z,
        j,
        Q;
      if (!d.range) throw new Error('attachComments needs range information');
      if (!C.length) {
        if (g.length) {
          for (j = 0, z = g.length; j < z; j += 1)
            (U = D(g[j])), (U.extendedRange = [0, d.range[0]]), y.push(U);
          d.leadingComments = y;
        }
        return d;
      }
      for (j = 0, z = g.length; j < z; j += 1) y.push(Ae(D(g[j]), C));
      return (
        (Q = 0),
        K(d, {
          enter: function (W) {
            for (
              var ne;
              Q < y.length &&
              ((ne = y[Q]), !(ne.extendedRange[1] > W.range[0]));

            )
              ne.extendedRange[1] === W.range[0]
                ? (W.leadingComments || (W.leadingComments = []),
                  W.leadingComments.push(ne),
                  y.splice(Q, 1))
                : (Q += 1);
            if (Q === y.length) return i.Break;
            if (y[Q].extendedRange[0] > W.range[1]) return i.Skip;
          }
        }),
        (Q = 0),
        K(d, {
          leave: function (W) {
            for (
              var ne;
              Q < y.length &&
              ((ne = y[Q]), !(W.range[1] < ne.extendedRange[0]));

            )
              W.range[1] === ne.extendedRange[0]
                ? (W.trailingComments || (W.trailingComments = []),
                  W.trailingComments.push(ne),
                  y.splice(Q, 1))
                : (Q += 1);
            if (Q === y.length) return i.Break;
            if (y[Q].extendedRange[0] > W.range[1]) return i.Skip;
          }
        }),
        d
      );
    }
    return (
      (r.Syntax = n),
      (r.traverse = K),
      (r.replace = ae),
      (r.attachComments = _),
      (r.VisitorKeys = a),
      (r.VisitorOption = i),
      (r.Controller = w),
      (r.cloneEnvironment = function () {
        return t({});
      }),
      r
    );
  })(e);
})(Ci);
var ur = {},
  qr = {},
  ar = {},
  Wr = {},
  kn = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split(
    ''
  );
Wr.encode = function (e) {
  if (0 <= e && e < kn.length) return kn[e];
  throw new TypeError('Must be between 0 and 63: ' + e);
};
Wr.decode = function (e) {
  var t = 65,
    r = 90,
    n = 97,
    i = 122,
    a = 48,
    s = 57,
    f = 43,
    h = 47,
    D = 26,
    v = 52;
  return t <= e && e <= r
    ? e - t
    : n <= e && e <= i
    ? e - n + D
    : a <= e && e <= s
    ? e - a + v
    : e == f
    ? 62
    : e == h
    ? 63
    : -1;
};
var vi = Wr,
  Gr = 5,
  xi = 1 << Gr,
  Fi = xi - 1,
  bi = xi;
function Bs(e) {
  return e < 0 ? (-e << 1) + 1 : (e << 1) + 0;
}
function ws(e) {
  var t = (e & 1) === 1,
    r = e >> 1;
  return t ? -r : r;
}
ar.encode = function (t) {
  var r = '',
    n,
    i = Bs(t);
  do (n = i & Fi), (i >>>= Gr), i > 0 && (n |= bi), (r += vi.encode(n));
  while (i > 0);
  return r;
};
ar.decode = function (t, r, n) {
  var i = t.length,
    a = 0,
    s = 0,
    f,
    h;
  do {
    if (r >= i) throw new Error('Expected more digits in base 64 VLQ value.');
    if (((h = vi.decode(t.charCodeAt(r++))), h === -1))
      throw new Error('Invalid base64 digit: ' + t.charAt(r - 1));
    (f = !!(h & bi)), (h &= Fi), (a = a + (h << s)), (s += Gr);
  } while (f);
  (n.value = ws(a)), (n.rest = r);
};
var Tt = {};
(function (e) {
  function t(_, d, g) {
    if (d in _) return _[d];
    if (arguments.length === 3) return g;
    throw new Error('"' + d + '" is a required argument.');
  }
  e.getArg = t;
  var r = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/,
    n = /^data:.+\,.+$/;
  function i(_) {
    var d = _.match(r);
    return d
      ? { scheme: d[1], auth: d[2], host: d[3], port: d[4], path: d[5] }
      : null;
  }
  e.urlParse = i;
  function a(_) {
    var d = '';
    return (
      _.scheme && (d += _.scheme + ':'),
      (d += '//'),
      _.auth && (d += _.auth + '@'),
      _.host && (d += _.host),
      _.port && (d += ':' + _.port),
      _.path && (d += _.path),
      d
    );
  }
  e.urlGenerate = a;
  function s(_) {
    var d = _,
      g = i(_);
    if (g) {
      if (!g.path) return _;
      d = g.path;
    }
    for (
      var C = e.isAbsolute(d), y = d.split(/\/+/), U, z = 0, j = y.length - 1;
      j >= 0;
      j--
    )
      (U = y[j]),
        U === '.'
          ? y.splice(j, 1)
          : U === '..'
          ? z++
          : z > 0 &&
            (U === '' ? (y.splice(j + 1, z), (z = 0)) : (y.splice(j, 2), z--));
    return (
      (d = y.join('/')),
      d === '' && (d = C ? '/' : '.'),
      g ? ((g.path = d), a(g)) : d
    );
  }
  e.normalize = s;
  function f(_, d) {
    _ === '' && (_ = '.'), d === '' && (d = '.');
    var g = i(d),
      C = i(_);
    if ((C && (_ = C.path || '/'), g && !g.scheme))
      return C && (g.scheme = C.scheme), a(g);
    if (g || d.match(n)) return d;
    if (C && !C.host && !C.path) return (C.host = d), a(C);
    var y = d.charAt(0) === '/' ? d : s(_.replace(/\/+$/, '') + '/' + d);
    return C ? ((C.path = y), a(C)) : y;
  }
  (e.join = f),
    (e.isAbsolute = function (_) {
      return _.charAt(0) === '/' || r.test(_);
    });
  function h(_, d) {
    _ === '' && (_ = '.'), (_ = _.replace(/\/$/, ''));
    for (var g = 0; d.indexOf(_ + '/') !== 0; ) {
      var C = _.lastIndexOf('/');
      if (C < 0 || ((_ = _.slice(0, C)), _.match(/^([^\/]+:\/)?\/*$/)))
        return d;
      ++g;
    }
    return Array(g + 1).join('../') + d.substr(_.length + 1);
  }
  e.relative = h;
  var D = (function () {
    var _ = Object.create(null);
    return !('__proto__' in _);
  })();
  function v(_) {
    return _;
  }
  function k(_) {
    return w(_) ? '$' + _ : _;
  }
  e.toSetString = D ? v : k;
  function A(_) {
    return w(_) ? _.slice(1) : _;
  }
  e.fromSetString = D ? v : A;
  function w(_) {
    if (!_) return !1;
    var d = _.length;
    if (
      d < 9 ||
      _.charCodeAt(d - 1) !== 95 ||
      _.charCodeAt(d - 2) !== 95 ||
      _.charCodeAt(d - 3) !== 111 ||
      _.charCodeAt(d - 4) !== 116 ||
      _.charCodeAt(d - 5) !== 111 ||
      _.charCodeAt(d - 6) !== 114 ||
      _.charCodeAt(d - 7) !== 112 ||
      _.charCodeAt(d - 8) !== 95 ||
      _.charCodeAt(d - 9) !== 95
    )
      return !1;
    for (var g = d - 10; g >= 0; g--) if (_.charCodeAt(g) !== 36) return !1;
    return !0;
  }
  function O(_, d, g) {
    var C = P(_.source, d.source);
    return C !== 0 ||
      ((C = _.originalLine - d.originalLine), C !== 0) ||
      ((C = _.originalColumn - d.originalColumn), C !== 0 || g) ||
      ((C = _.generatedColumn - d.generatedColumn), C !== 0) ||
      ((C = _.generatedLine - d.generatedLine), C !== 0)
      ? C
      : P(_.name, d.name);
  }
  e.compareByOriginalPositions = O;
  function x(_, d, g) {
    var C = _.generatedLine - d.generatedLine;
    return C !== 0 ||
      ((C = _.generatedColumn - d.generatedColumn), C !== 0 || g) ||
      ((C = P(_.source, d.source)), C !== 0) ||
      ((C = _.originalLine - d.originalLine), C !== 0) ||
      ((C = _.originalColumn - d.originalColumn), C !== 0)
      ? C
      : P(_.name, d.name);
  }
  e.compareByGeneratedPositionsDeflated = x;
  function P(_, d) {
    return _ === d ? 0 : _ === null ? 1 : d === null ? -1 : _ > d ? 1 : -1;
  }
  function K(_, d) {
    var g = _.generatedLine - d.generatedLine;
    return g !== 0 ||
      ((g = _.generatedColumn - d.generatedColumn), g !== 0) ||
      ((g = P(_.source, d.source)), g !== 0) ||
      ((g = _.originalLine - d.originalLine), g !== 0) ||
      ((g = _.originalColumn - d.originalColumn), g !== 0)
      ? g
      : P(_.name, d.name);
  }
  e.compareByGeneratedPositionsInflated = K;
  function ae(_) {
    return JSON.parse(_.replace(/^\)]}'[^\n]*\n/, ''));
  }
  e.parseSourceMapInput = ae;
  function Ae(_, d, g) {
    if (
      ((d = d || ''),
      _ && (_[_.length - 1] !== '/' && d[0] !== '/' && (_ += '/'), (d = _ + d)),
      g)
    ) {
      var C = i(g);
      if (!C) throw new Error('sourceMapURL could not be parsed');
      if (C.path) {
        var y = C.path.lastIndexOf('/');
        y >= 0 && (C.path = C.path.substring(0, y + 1));
      }
      d = f(a(C), d);
    }
    return s(d);
  }
  e.computeSourceURL = Ae;
})(Tt);
var zr = {},
  $r = Tt,
  Jr = Object.prototype.hasOwnProperty,
  ft = typeof Map != 'undefined';
function rt() {
  (this._array = []), (this._set = ft ? new Map() : Object.create(null));
}
rt.fromArray = function (t, r) {
  for (var n = new rt(), i = 0, a = t.length; i < a; i++) n.add(t[i], r);
  return n;
};
rt.prototype.size = function () {
  return ft ? this._set.size : Object.getOwnPropertyNames(this._set).length;
};
rt.prototype.add = function (t, r) {
  var n = ft ? t : $r.toSetString(t),
    i = ft ? this.has(t) : Jr.call(this._set, n),
    a = this._array.length;
  (!i || r) && this._array.push(t),
    i || (ft ? this._set.set(t, a) : (this._set[n] = a));
};
rt.prototype.has = function (t) {
  if (ft) return this._set.has(t);
  var r = $r.toSetString(t);
  return Jr.call(this._set, r);
};
rt.prototype.indexOf = function (t) {
  if (ft) {
    var r = this._set.get(t);
    if (r >= 0) return r;
  } else {
    var n = $r.toSetString(t);
    if (Jr.call(this._set, n)) return this._set[n];
  }
  throw new Error('"' + t + '" is not in the set.');
};
rt.prototype.at = function (t) {
  if (t >= 0 && t < this._array.length) return this._array[t];
  throw new Error('No element indexed by ' + t);
};
rt.prototype.toArray = function () {
  return this._array.slice();
};
zr.ArraySet = rt;
var Si = {},
  _i = Tt;
function Ts(e, t) {
  var r = e.generatedLine,
    n = t.generatedLine,
    i = e.generatedColumn,
    a = t.generatedColumn;
  return (
    n > r ||
    (n == r && a >= i) ||
    _i.compareByGeneratedPositionsInflated(e, t) <= 0
  );
}
function sr() {
  (this._array = []),
    (this._sorted = !0),
    (this._last = { generatedLine: -1, generatedColumn: 0 });
}
sr.prototype.unsortedForEach = function (t, r) {
  this._array.forEach(t, r);
};
sr.prototype.add = function (t) {
  Ts(this._last, t)
    ? ((this._last = t), this._array.push(t))
    : ((this._sorted = !1), this._array.push(t));
};
sr.prototype.toArray = function () {
  return (
    this._sorted ||
      (this._array.sort(_i.compareByGeneratedPositionsInflated),
      (this._sorted = !0)),
    this._array
  );
};
Si.MappingList = sr;
var It = ar,
  Be = Tt,
  Xt = zr.ArraySet,
  ks = Si.MappingList;
function ze(e) {
  e || (e = {}),
    (this._file = Be.getArg(e, 'file', null)),
    (this._sourceRoot = Be.getArg(e, 'sourceRoot', null)),
    (this._skipValidation = Be.getArg(e, 'skipValidation', !1)),
    (this._sources = new Xt()),
    (this._names = new Xt()),
    (this._mappings = new ks()),
    (this._sourcesContents = null);
}
ze.prototype._version = 3;
ze.fromSourceMap = function (t) {
  var r = t.sourceRoot,
    n = new ze({ file: t.file, sourceRoot: r });
  return (
    t.eachMapping(function (i) {
      var a = {
        generated: { line: i.generatedLine, column: i.generatedColumn }
      };
      i.source != null &&
        ((a.source = i.source),
        r != null && (a.source = Be.relative(r, a.source)),
        (a.original = { line: i.originalLine, column: i.originalColumn }),
        i.name != null && (a.name = i.name)),
        n.addMapping(a);
    }),
    t.sources.forEach(function (i) {
      var a = i;
      r !== null && (a = Be.relative(r, i)),
        n._sources.has(a) || n._sources.add(a);
      var s = t.sourceContentFor(i);
      s != null && n.setSourceContent(i, s);
    }),
    n
  );
};
ze.prototype.addMapping = function (t) {
  var r = Be.getArg(t, 'generated'),
    n = Be.getArg(t, 'original', null),
    i = Be.getArg(t, 'source', null),
    a = Be.getArg(t, 'name', null);
  this._skipValidation || this._validateMapping(r, n, i, a),
    i != null &&
      ((i = String(i)), this._sources.has(i) || this._sources.add(i)),
    a != null && ((a = String(a)), this._names.has(a) || this._names.add(a)),
    this._mappings.add({
      generatedLine: r.line,
      generatedColumn: r.column,
      originalLine: n != null && n.line,
      originalColumn: n != null && n.column,
      source: i,
      name: a
    });
};
ze.prototype.setSourceContent = function (t, r) {
  var n = t;
  this._sourceRoot != null && (n = Be.relative(this._sourceRoot, n)),
    r != null
      ? (this._sourcesContents || (this._sourcesContents = Object.create(null)),
        (this._sourcesContents[Be.toSetString(n)] = r))
      : this._sourcesContents &&
        (delete this._sourcesContents[Be.toSetString(n)],
        Object.keys(this._sourcesContents).length === 0 &&
          (this._sourcesContents = null));
};
ze.prototype.applySourceMap = function (t, r, n) {
  var i = r;
  if (r == null) {
    if (t.file == null)
      throw new Error(
        `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
      );
    i = t.file;
  }
  var a = this._sourceRoot;
  a != null && (i = Be.relative(a, i));
  var s = new Xt(),
    f = new Xt();
  this._mappings.unsortedForEach(function (h) {
    if (h.source === i && h.originalLine != null) {
      var D = t.originalPositionFor({
        line: h.originalLine,
        column: h.originalColumn
      });
      D.source != null &&
        ((h.source = D.source),
        n != null && (h.source = Be.join(n, h.source)),
        a != null && (h.source = Be.relative(a, h.source)),
        (h.originalLine = D.line),
        (h.originalColumn = D.column),
        D.name != null && (h.name = D.name));
    }
    var v = h.source;
    v != null && !s.has(v) && s.add(v);
    var k = h.name;
    k != null && !f.has(k) && f.add(k);
  }, this),
    (this._sources = s),
    (this._names = f),
    t.sources.forEach(function (h) {
      var D = t.sourceContentFor(h);
      D != null &&
        (n != null && (h = Be.join(n, h)),
        a != null && (h = Be.relative(a, h)),
        this.setSourceContent(h, D));
    }, this);
};
ze.prototype._validateMapping = function (t, r, n, i) {
  if (r && typeof r.line != 'number' && typeof r.column != 'number')
    throw new Error(
      'original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values.'
    );
  if (
    !(
      t &&
      'line' in t &&
      'column' in t &&
      t.line > 0 &&
      t.column >= 0 &&
      !r &&
      !n &&
      !i
    )
  ) {
    if (
      t &&
      'line' in t &&
      'column' in t &&
      r &&
      'line' in r &&
      'column' in r &&
      t.line > 0 &&
      t.column >= 0 &&
      r.line > 0 &&
      r.column >= 0 &&
      n
    )
      return;
    throw new Error(
      'Invalid mapping: ' +
        JSON.stringify({ generated: t, source: n, original: r, name: i })
    );
  }
};
ze.prototype._serializeMappings = function () {
  for (
    var t = 0,
      r = 1,
      n = 0,
      i = 0,
      a = 0,
      s = 0,
      f = '',
      h,
      D,
      v,
      k,
      A = this._mappings.toArray(),
      w = 0,
      O = A.length;
    w < O;
    w++
  ) {
    if (((D = A[w]), (h = ''), D.generatedLine !== r))
      for (t = 0; D.generatedLine !== r; ) (h += ';'), r++;
    else if (w > 0) {
      if (!Be.compareByGeneratedPositionsInflated(D, A[w - 1])) continue;
      h += ',';
    }
    (h += It.encode(D.generatedColumn - t)),
      (t = D.generatedColumn),
      D.source != null &&
        ((k = this._sources.indexOf(D.source)),
        (h += It.encode(k - s)),
        (s = k),
        (h += It.encode(D.originalLine - 1 - i)),
        (i = D.originalLine - 1),
        (h += It.encode(D.originalColumn - n)),
        (n = D.originalColumn),
        D.name != null &&
          ((v = this._names.indexOf(D.name)),
          (h += It.encode(v - a)),
          (a = v))),
      (f += h);
  }
  return f;
};
ze.prototype._generateSourcesContent = function (t, r) {
  return t.map(function (n) {
    if (!this._sourcesContents) return null;
    r != null && (n = Be.relative(r, n));
    var i = Be.toSetString(n);
    return Object.prototype.hasOwnProperty.call(this._sourcesContents, i)
      ? this._sourcesContents[i]
      : null;
  }, this);
};
ze.prototype.toJSON = function () {
  var t = {
    version: this._version,
    sources: this._sources.toArray(),
    names: this._names.toArray(),
    mappings: this._serializeMappings()
  };
  return (
    this._file != null && (t.file = this._file),
    this._sourceRoot != null && (t.sourceRoot = this._sourceRoot),
    this._sourcesContents &&
      (t.sourcesContent = this._generateSourcesContent(
        t.sources,
        t.sourceRoot
      )),
    t
  );
};
ze.prototype.toString = function () {
  return JSON.stringify(this.toJSON());
};
qr.SourceMapGenerator = ze;
var or = {},
  Bi = {};
(function (e) {
  (e.GREATEST_LOWER_BOUND = 1), (e.LEAST_UPPER_BOUND = 2);
  function t(r, n, i, a, s, f) {
    var h = Math.floor((n - r) / 2) + r,
      D = s(i, a[h], !0);
    return D === 0
      ? h
      : D > 0
      ? n - h > 1
        ? t(h, n, i, a, s, f)
        : f == e.LEAST_UPPER_BOUND
        ? n < a.length
          ? n
          : -1
        : h
      : h - r > 1
      ? t(r, h, i, a, s, f)
      : f == e.LEAST_UPPER_BOUND
      ? h
      : r < 0
      ? -1
      : r;
  }
  e.search = function (n, i, a, s) {
    if (i.length === 0) return -1;
    var f = t(-1, i.length, n, i, a, s || e.GREATEST_LOWER_BOUND);
    if (f < 0) return -1;
    for (; f - 1 >= 0 && a(i[f], i[f - 1], !0) === 0; ) --f;
    return f;
  };
})(Bi);
var wi = {};
function Er(e, t, r) {
  var n = e[t];
  (e[t] = e[r]), (e[r] = n);
}
function Ns(e, t) {
  return Math.round(e + Math.random() * (t - e));
}
function br(e, t, r, n) {
  if (r < n) {
    var i = Ns(r, n),
      a = r - 1;
    Er(e, i, n);
    for (var s = e[n], f = r; f < n; f++)
      t(e[f], s) <= 0 && ((a += 1), Er(e, a, f));
    Er(e, a + 1, f);
    var h = a + 1;
    br(e, t, r, h - 1), br(e, t, h + 1, n);
  }
}
wi.quickSort = function (e, t) {
  br(e, t, 0, e.length - 1);
};
var J = Tt,
  Hr = Bi,
  xt = zr.ArraySet,
  Os = ar,
  jt = wi.quickSort;
function ve(e, t) {
  var r = e;
  return (
    typeof e == 'string' && (r = J.parseSourceMapInput(e)),
    r.sections != null ? new He(r, t) : new Ne(r, t)
  );
}
ve.fromSourceMap = function (e, t) {
  return Ne.fromSourceMap(e, t);
};
ve.prototype._version = 3;
ve.prototype.__generatedMappings = null;
Object.defineProperty(ve.prototype, '_generatedMappings', {
  configurable: !0,
  enumerable: !0,
  get: function () {
    return (
      this.__generatedMappings ||
        this._parseMappings(this._mappings, this.sourceRoot),
      this.__generatedMappings
    );
  }
});
ve.prototype.__originalMappings = null;
Object.defineProperty(ve.prototype, '_originalMappings', {
  configurable: !0,
  enumerable: !0,
  get: function () {
    return (
      this.__originalMappings ||
        this._parseMappings(this._mappings, this.sourceRoot),
      this.__originalMappings
    );
  }
});
ve.prototype._charIsMappingSeparator = function (t, r) {
  var n = t.charAt(r);
  return n === ';' || n === ',';
};
ve.prototype._parseMappings = function (t, r) {
  throw new Error('Subclasses must implement _parseMappings');
};
ve.GENERATED_ORDER = 1;
ve.ORIGINAL_ORDER = 2;
ve.GREATEST_LOWER_BOUND = 1;
ve.LEAST_UPPER_BOUND = 2;
ve.prototype.eachMapping = function (t, r, n) {
  var i = r || null,
    a = n || ve.GENERATED_ORDER,
    s;
  switch (a) {
    case ve.GENERATED_ORDER:
      s = this._generatedMappings;
      break;
    case ve.ORIGINAL_ORDER:
      s = this._originalMappings;
      break;
    default:
      throw new Error('Unknown order of iteration.');
  }
  var f = this.sourceRoot;
  s.map(function (h) {
    var D = h.source === null ? null : this._sources.at(h.source);
    return (
      (D = J.computeSourceURL(f, D, this._sourceMapURL)),
      {
        source: D,
        generatedLine: h.generatedLine,
        generatedColumn: h.generatedColumn,
        originalLine: h.originalLine,
        originalColumn: h.originalColumn,
        name: h.name === null ? null : this._names.at(h.name)
      }
    );
  }, this).forEach(t, i);
};
ve.prototype.allGeneratedPositionsFor = function (t) {
  var r = J.getArg(t, 'line'),
    n = {
      source: J.getArg(t, 'source'),
      originalLine: r,
      originalColumn: J.getArg(t, 'column', 0)
    };
  if (((n.source = this._findSourceIndex(n.source)), n.source < 0)) return [];
  var i = [],
    a = this._findMapping(
      n,
      this._originalMappings,
      'originalLine',
      'originalColumn',
      J.compareByOriginalPositions,
      Hr.LEAST_UPPER_BOUND
    );
  if (a >= 0) {
    var s = this._originalMappings[a];
    if (t.column === void 0)
      for (var f = s.originalLine; s && s.originalLine === f; )
        i.push({
          line: J.getArg(s, 'generatedLine', null),
          column: J.getArg(s, 'generatedColumn', null),
          lastColumn: J.getArg(s, 'lastGeneratedColumn', null)
        }),
          (s = this._originalMappings[++a]);
    else
      for (
        var h = s.originalColumn;
        s && s.originalLine === r && s.originalColumn == h;

      )
        i.push({
          line: J.getArg(s, 'generatedLine', null),
          column: J.getArg(s, 'generatedColumn', null),
          lastColumn: J.getArg(s, 'lastGeneratedColumn', null)
        }),
          (s = this._originalMappings[++a]);
  }
  return i;
};
or.SourceMapConsumer = ve;
function Ne(e, t) {
  var r = e;
  typeof e == 'string' && (r = J.parseSourceMapInput(e));
  var n = J.getArg(r, 'version'),
    i = J.getArg(r, 'sources'),
    a = J.getArg(r, 'names', []),
    s = J.getArg(r, 'sourceRoot', null),
    f = J.getArg(r, 'sourcesContent', null),
    h = J.getArg(r, 'mappings'),
    D = J.getArg(r, 'file', null);
  if (n != this._version) throw new Error('Unsupported version: ' + n);
  s && (s = J.normalize(s)),
    (i = i
      .map(String)
      .map(J.normalize)
      .map(function (v) {
        return s && J.isAbsolute(s) && J.isAbsolute(v) ? J.relative(s, v) : v;
      })),
    (this._names = xt.fromArray(a.map(String), !0)),
    (this._sources = xt.fromArray(i, !0)),
    (this._absoluteSources = this._sources.toArray().map(function (v) {
      return J.computeSourceURL(s, v, t);
    })),
    (this.sourceRoot = s),
    (this.sourcesContent = f),
    (this._mappings = h),
    (this._sourceMapURL = t),
    (this.file = D);
}
Ne.prototype = Object.create(ve.prototype);
Ne.prototype.consumer = ve;
Ne.prototype._findSourceIndex = function (e) {
  var t = e;
  if (
    (this.sourceRoot != null && (t = J.relative(this.sourceRoot, t)),
    this._sources.has(t))
  )
    return this._sources.indexOf(t);
  var r;
  for (r = 0; r < this._absoluteSources.length; ++r)
    if (this._absoluteSources[r] == e) return r;
  return -1;
};
Ne.fromSourceMap = function (t, r) {
  var n = Object.create(Ne.prototype),
    i = (n._names = xt.fromArray(t._names.toArray(), !0)),
    a = (n._sources = xt.fromArray(t._sources.toArray(), !0));
  (n.sourceRoot = t._sourceRoot),
    (n.sourcesContent = t._generateSourcesContent(
      n._sources.toArray(),
      n.sourceRoot
    )),
    (n.file = t._file),
    (n._sourceMapURL = r),
    (n._absoluteSources = n._sources.toArray().map(function (w) {
      return J.computeSourceURL(n.sourceRoot, w, r);
    }));
  for (
    var s = t._mappings.toArray().slice(),
      f = (n.__generatedMappings = []),
      h = (n.__originalMappings = []),
      D = 0,
      v = s.length;
    D < v;
    D++
  ) {
    var k = s[D],
      A = new Ti();
    (A.generatedLine = k.generatedLine),
      (A.generatedColumn = k.generatedColumn),
      k.source &&
        ((A.source = a.indexOf(k.source)),
        (A.originalLine = k.originalLine),
        (A.originalColumn = k.originalColumn),
        k.name && (A.name = i.indexOf(k.name)),
        h.push(A)),
      f.push(A);
  }
  return jt(n.__originalMappings, J.compareByOriginalPositions), n;
};
Ne.prototype._version = 3;
Object.defineProperty(Ne.prototype, 'sources', {
  get: function () {
    return this._absoluteSources.slice();
  }
});
function Ti() {
  (this.generatedLine = 0),
    (this.generatedColumn = 0),
    (this.source = null),
    (this.originalLine = null),
    (this.originalColumn = null),
    (this.name = null);
}
Ne.prototype._parseMappings = function (t, r) {
  for (
    var n = 1,
      i = 0,
      a = 0,
      s = 0,
      f = 0,
      h = 0,
      D = t.length,
      v = 0,
      k = {},
      A = {},
      w = [],
      O = [],
      x,
      P,
      K,
      ae,
      Ae;
    v < D;

  )
    if (t.charAt(v) === ';') n++, v++, (i = 0);
    else if (t.charAt(v) === ',') v++;
    else {
      for (
        x = new Ti(), x.generatedLine = n, ae = v;
        ae < D && !this._charIsMappingSeparator(t, ae);
        ae++
      );
      if (((P = t.slice(v, ae)), (K = k[P]), K)) v += P.length;
      else {
        for (K = []; v < ae; )
          Os.decode(t, v, A), (Ae = A.value), (v = A.rest), K.push(Ae);
        if (K.length === 2)
          throw new Error('Found a source, but no line and column');
        if (K.length === 3)
          throw new Error('Found a source and line, but no column');
        k[P] = K;
      }
      (x.generatedColumn = i + K[0]),
        (i = x.generatedColumn),
        K.length > 1 &&
          ((x.source = f + K[1]),
          (f += K[1]),
          (x.originalLine = a + K[2]),
          (a = x.originalLine),
          (x.originalLine += 1),
          (x.originalColumn = s + K[3]),
          (s = x.originalColumn),
          K.length > 4 && ((x.name = h + K[4]), (h += K[4]))),
        O.push(x),
        typeof x.originalLine == 'number' && w.push(x);
    }
  jt(O, J.compareByGeneratedPositionsDeflated),
    (this.__generatedMappings = O),
    jt(w, J.compareByOriginalPositions),
    (this.__originalMappings = w);
};
Ne.prototype._findMapping = function (t, r, n, i, a, s) {
  if (t[n] <= 0)
    throw new TypeError('Line must be greater than or equal to 1, got ' + t[n]);
  if (t[i] < 0)
    throw new TypeError(
      'Column must be greater than or equal to 0, got ' + t[i]
    );
  return Hr.search(t, r, a, s);
};
Ne.prototype.computeColumnSpans = function () {
  for (var t = 0; t < this._generatedMappings.length; ++t) {
    var r = this._generatedMappings[t];
    if (t + 1 < this._generatedMappings.length) {
      var n = this._generatedMappings[t + 1];
      if (r.generatedLine === n.generatedLine) {
        r.lastGeneratedColumn = n.generatedColumn - 1;
        continue;
      }
    }
    r.lastGeneratedColumn = 1 / 0;
  }
};
Ne.prototype.originalPositionFor = function (t) {
  var r = {
      generatedLine: J.getArg(t, 'line'),
      generatedColumn: J.getArg(t, 'column')
    },
    n = this._findMapping(
      r,
      this._generatedMappings,
      'generatedLine',
      'generatedColumn',
      J.compareByGeneratedPositionsDeflated,
      J.getArg(t, 'bias', ve.GREATEST_LOWER_BOUND)
    );
  if (n >= 0) {
    var i = this._generatedMappings[n];
    if (i.generatedLine === r.generatedLine) {
      var a = J.getArg(i, 'source', null);
      a !== null &&
        ((a = this._sources.at(a)),
        (a = J.computeSourceURL(this.sourceRoot, a, this._sourceMapURL)));
      var s = J.getArg(i, 'name', null);
      return (
        s !== null && (s = this._names.at(s)),
        {
          source: a,
          line: J.getArg(i, 'originalLine', null),
          column: J.getArg(i, 'originalColumn', null),
          name: s
        }
      );
    }
  }
  return { source: null, line: null, column: null, name: null };
};
Ne.prototype.hasContentsOfAllSources = function () {
  return this.sourcesContent
    ? this.sourcesContent.length >= this._sources.size() &&
        !this.sourcesContent.some(function (t) {
          return t == null;
        })
    : !1;
};
Ne.prototype.sourceContentFor = function (t, r) {
  if (!this.sourcesContent) return null;
  var n = this._findSourceIndex(t);
  if (n >= 0) return this.sourcesContent[n];
  var i = t;
  this.sourceRoot != null && (i = J.relative(this.sourceRoot, i));
  var a;
  if (this.sourceRoot != null && (a = J.urlParse(this.sourceRoot))) {
    var s = i.replace(/^file:\/\//, '');
    if (a.scheme == 'file' && this._sources.has(s))
      return this.sourcesContent[this._sources.indexOf(s)];
    if ((!a.path || a.path == '/') && this._sources.has('/' + i))
      return this.sourcesContent[this._sources.indexOf('/' + i)];
  }
  if (r) return null;
  throw new Error('"' + i + '" is not in the SourceMap.');
};
Ne.prototype.generatedPositionFor = function (t) {
  var r = J.getArg(t, 'source');
  if (((r = this._findSourceIndex(r)), r < 0))
    return { line: null, column: null, lastColumn: null };
  var n = {
      source: r,
      originalLine: J.getArg(t, 'line'),
      originalColumn: J.getArg(t, 'column')
    },
    i = this._findMapping(
      n,
      this._originalMappings,
      'originalLine',
      'originalColumn',
      J.compareByOriginalPositions,
      J.getArg(t, 'bias', ve.GREATEST_LOWER_BOUND)
    );
  if (i >= 0) {
    var a = this._originalMappings[i];
    if (a.source === n.source)
      return {
        line: J.getArg(a, 'generatedLine', null),
        column: J.getArg(a, 'generatedColumn', null),
        lastColumn: J.getArg(a, 'lastGeneratedColumn', null)
      };
  }
  return { line: null, column: null, lastColumn: null };
};
or.BasicSourceMapConsumer = Ne;
function He(e, t) {
  var r = e;
  typeof e == 'string' && (r = J.parseSourceMapInput(e));
  var n = J.getArg(r, 'version'),
    i = J.getArg(r, 'sections');
  if (n != this._version) throw new Error('Unsupported version: ' + n);
  (this._sources = new xt()), (this._names = new xt());
  var a = { line: -1, column: 0 };
  this._sections = i.map(function (s) {
    if (s.url)
      throw new Error('Support for url field in sections not implemented.');
    var f = J.getArg(s, 'offset'),
      h = J.getArg(f, 'line'),
      D = J.getArg(f, 'column');
    if (h < a.line || (h === a.line && D < a.column))
      throw new Error('Section offsets must be ordered and non-overlapping.');
    return (
      (a = f),
      {
        generatedOffset: { generatedLine: h + 1, generatedColumn: D + 1 },
        consumer: new ve(J.getArg(s, 'map'), t)
      }
    );
  });
}
He.prototype = Object.create(ve.prototype);
He.prototype.constructor = ve;
He.prototype._version = 3;
Object.defineProperty(He.prototype, 'sources', {
  get: function () {
    for (var e = [], t = 0; t < this._sections.length; t++)
      for (var r = 0; r < this._sections[t].consumer.sources.length; r++)
        e.push(this._sections[t].consumer.sources[r]);
    return e;
  }
});
He.prototype.originalPositionFor = function (t) {
  var r = {
      generatedLine: J.getArg(t, 'line'),
      generatedColumn: J.getArg(t, 'column')
    },
    n = Hr.search(r, this._sections, function (a, s) {
      var f = a.generatedLine - s.generatedOffset.generatedLine;
      return f || a.generatedColumn - s.generatedOffset.generatedColumn;
    }),
    i = this._sections[n];
  return i
    ? i.consumer.originalPositionFor({
        line: r.generatedLine - (i.generatedOffset.generatedLine - 1),
        column:
          r.generatedColumn -
          (i.generatedOffset.generatedLine === r.generatedLine
            ? i.generatedOffset.generatedColumn - 1
            : 0),
        bias: t.bias
      })
    : { source: null, line: null, column: null, name: null };
};
He.prototype.hasContentsOfAllSources = function () {
  return this._sections.every(function (t) {
    return t.consumer.hasContentsOfAllSources();
  });
};
He.prototype.sourceContentFor = function (t, r) {
  for (var n = 0; n < this._sections.length; n++) {
    var i = this._sections[n],
      a = i.consumer.sourceContentFor(t, !0);
    if (a) return a;
  }
  if (r) return null;
  throw new Error('"' + t + '" is not in the SourceMap.');
};
He.prototype.generatedPositionFor = function (t) {
  for (var r = 0; r < this._sections.length; r++) {
    var n = this._sections[r];
    if (n.consumer._findSourceIndex(J.getArg(t, 'source')) !== -1) {
      var i = n.consumer.generatedPositionFor(t);
      if (i) {
        var a = {
          line: i.line + (n.generatedOffset.generatedLine - 1),
          column:
            i.column +
            (n.generatedOffset.generatedLine === i.line
              ? n.generatedOffset.generatedColumn - 1
              : 0)
        };
        return a;
      }
    }
  }
  return { line: null, column: null };
};
He.prototype._parseMappings = function (t, r) {
  (this.__generatedMappings = []), (this.__originalMappings = []);
  for (var n = 0; n < this._sections.length; n++)
    for (
      var i = this._sections[n], a = i.consumer._generatedMappings, s = 0;
      s < a.length;
      s++
    ) {
      var f = a[s],
        h = i.consumer._sources.at(f.source);
      (h = J.computeSourceURL(i.consumer.sourceRoot, h, this._sourceMapURL)),
        this._sources.add(h),
        (h = this._sources.indexOf(h));
      var D = null;
      f.name &&
        ((D = i.consumer._names.at(f.name)),
        this._names.add(D),
        (D = this._names.indexOf(D)));
      var v = {
        source: h,
        generatedLine: f.generatedLine + (i.generatedOffset.generatedLine - 1),
        generatedColumn:
          f.generatedColumn +
          (i.generatedOffset.generatedLine === f.generatedLine
            ? i.generatedOffset.generatedColumn - 1
            : 0),
        originalLine: f.originalLine,
        originalColumn: f.originalColumn,
        name: D
      };
      this.__generatedMappings.push(v),
        typeof v.originalLine == 'number' && this.__originalMappings.push(v);
    }
  jt(this.__generatedMappings, J.compareByGeneratedPositionsDeflated),
    jt(this.__originalMappings, J.compareByOriginalPositions);
};
or.IndexedSourceMapConsumer = He;
var ki = {},
  Is = qr.SourceMapGenerator,
  Yt = Tt,
  Ps = /(\r?\n)/,
  Ls = 10,
  kt = '$$$isSourceNode$$$';
function je(e, t, r, n, i) {
  (this.children = []),
    (this.sourceContents = {}),
    (this.line = e == null ? null : e),
    (this.column = t == null ? null : t),
    (this.source = r == null ? null : r),
    (this.name = i == null ? null : i),
    (this[kt] = !0),
    n != null && this.add(n);
}
je.fromStringWithSourceMap = function (t, r, n) {
  var i = new je(),
    a = t.split(Ps),
    s = 0,
    f = function () {
      var A = O(),
        w = O() || '';
      return A + w;
      function O() {
        return s < a.length ? a[s++] : void 0;
      }
    },
    h = 1,
    D = 0,
    v = null;
  return (
    r.eachMapping(function (A) {
      if (v !== null)
        if (h < A.generatedLine) k(v, f()), h++, (D = 0);
        else {
          var w = a[s] || '',
            O = w.substr(0, A.generatedColumn - D);
          (a[s] = w.substr(A.generatedColumn - D)),
            (D = A.generatedColumn),
            k(v, O),
            (v = A);
          return;
        }
      for (; h < A.generatedLine; ) i.add(f()), h++;
      if (D < A.generatedColumn) {
        var w = a[s] || '';
        i.add(w.substr(0, A.generatedColumn)),
          (a[s] = w.substr(A.generatedColumn)),
          (D = A.generatedColumn);
      }
      v = A;
    }, this),
    s < a.length && (v && k(v, f()), i.add(a.splice(s).join(''))),
    r.sources.forEach(function (A) {
      var w = r.sourceContentFor(A);
      w != null && (n != null && (A = Yt.join(n, A)), i.setSourceContent(A, w));
    }),
    i
  );
  function k(A, w) {
    if (A === null || A.source === void 0) i.add(w);
    else {
      var O = n ? Yt.join(n, A.source) : A.source;
      i.add(new je(A.originalLine, A.originalColumn, O, w, A.name));
    }
  }
};
je.prototype.add = function (t) {
  if (Array.isArray(t))
    t.forEach(function (r) {
      this.add(r);
    }, this);
  else if (t[kt] || typeof t == 'string') t && this.children.push(t);
  else
    throw new TypeError(
      'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' +
        t
    );
  return this;
};
je.prototype.prepend = function (t) {
  if (Array.isArray(t))
    for (var r = t.length - 1; r >= 0; r--) this.prepend(t[r]);
  else if (t[kt] || typeof t == 'string') this.children.unshift(t);
  else
    throw new TypeError(
      'Expected a SourceNode, string, or an array of SourceNodes and strings. Got ' +
        t
    );
  return this;
};
je.prototype.walk = function (t) {
  for (var r, n = 0, i = this.children.length; n < i; n++)
    (r = this.children[n]),
      r[kt]
        ? r.walk(t)
        : r !== '' &&
          t(r, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
          });
};
je.prototype.join = function (t) {
  var r,
    n,
    i = this.children.length;
  if (i > 0) {
    for (r = [], n = 0; n < i - 1; n++) r.push(this.children[n]), r.push(t);
    r.push(this.children[n]), (this.children = r);
  }
  return this;
};
je.prototype.replaceRight = function (t, r) {
  var n = this.children[this.children.length - 1];
  return (
    n[kt]
      ? n.replaceRight(t, r)
      : typeof n == 'string'
      ? (this.children[this.children.length - 1] = n.replace(t, r))
      : this.children.push(''.replace(t, r)),
    this
  );
};
je.prototype.setSourceContent = function (t, r) {
  this.sourceContents[Yt.toSetString(t)] = r;
};
je.prototype.walkSourceContents = function (t) {
  for (var r = 0, n = this.children.length; r < n; r++)
    this.children[r][kt] && this.children[r].walkSourceContents(t);
  for (
    var i = Object.keys(this.sourceContents), r = 0, n = i.length;
    r < n;
    r++
  )
    t(Yt.fromSetString(i[r]), this.sourceContents[i[r]]);
};
je.prototype.toString = function () {
  var t = '';
  return (
    this.walk(function (r) {
      t += r;
    }),
    t
  );
};
je.prototype.toStringWithSourceMap = function (t) {
  var r = { code: '', line: 1, column: 0 },
    n = new Is(t),
    i = !1,
    a = null,
    s = null,
    f = null,
    h = null;
  return (
    this.walk(function (D, v) {
      (r.code += D),
        v.source !== null && v.line !== null && v.column !== null
          ? ((a !== v.source ||
              s !== v.line ||
              f !== v.column ||
              h !== v.name) &&
              n.addMapping({
                source: v.source,
                original: { line: v.line, column: v.column },
                generated: { line: r.line, column: r.column },
                name: v.name
              }),
            (a = v.source),
            (s = v.line),
            (f = v.column),
            (h = v.name),
            (i = !0))
          : i &&
            (n.addMapping({ generated: { line: r.line, column: r.column } }),
            (a = null),
            (i = !1));
      for (var k = 0, A = D.length; k < A; k++)
        D.charCodeAt(k) === Ls
          ? (r.line++,
            (r.column = 0),
            k + 1 === A
              ? ((a = null), (i = !1))
              : i &&
                n.addMapping({
                  source: v.source,
                  original: { line: v.line, column: v.column },
                  generated: { line: r.line, column: r.column },
                  name: v.name
                }))
          : r.column++;
    }),
    this.walkSourceContents(function (D, v) {
      n.setSourceContent(D, v);
    }),
    { code: r.code, map: n }
  );
};
ki.SourceNode = je;
ur.SourceMapGenerator = qr.SourceMapGenerator;
ur.SourceMapConsumer = or.SourceMapConsumer;
ur.SourceNode = ki.SourceNode;
const Rs = 'escodegen',
  Ms = 'ECMAScript code generator',
  js = 'http://github.com/estools/escodegen',
  Vs = 'escodegen.js',
  Us = { esgenerate: './bin/esgenerate.js', escodegen: './bin/escodegen.js' },
  qs = ['LICENSE.BSD', 'README.md', 'bin', 'escodegen.js', 'package.json'],
  Ws = '2.0.0',
  Gs = { node: '>=6.0' },
  zs = [
    {
      name: 'Yusuke Suzuki',
      email: 'utatane.tea@gmail.com',
      web: 'http://github.com/Constellation'
    }
  ],
  $s = { type: 'git', url: 'http://github.com/estools/escodegen.git' },
  Js = {
    estraverse: '^5.2.0',
    esutils: '^2.0.2',
    esprima: '^4.0.1',
    optionator: '^0.8.1'
  },
  Hs = { 'source-map': '~0.6.1' },
  Ks = {
    acorn: '^7.3.1',
    bluebird: '^3.4.7',
    'bower-registry-client': '^1.0.0',
    chai: '^4.2.0',
    'chai-exclude': '^2.0.2',
    'commonjs-everywhere': '^0.9.7',
    gulp: '^3.8.10',
    'gulp-eslint': '^3.0.1',
    'gulp-mocha': '^3.0.1',
    semver: '^5.1.0'
  },
  Qs = 'BSD-2-Clause',
  Xs = {
    test: 'gulp travis',
    'unit-test': 'gulp test',
    lint: 'gulp lint',
    release: 'node tools/release.js',
    'build-min':
      './node_modules/.bin/cjsify -ma path: tools/entry-point.js > escodegen.browser.min.js',
    build:
      './node_modules/.bin/cjsify -a path: tools/entry-point.js > escodegen.browser.js'
  };
var Ys = {
  name: Rs,
  description: Ms,
  homepage: js,
  main: Vs,
  bin: Us,
  files: qs,
  version: Ws,
  engines: Gs,
  maintainers: zs,
  repository: $s,
  dependencies: Js,
  optionalDependencies: Hs,
  devDependencies: Ks,
  license: Qs,
  scripts: Xs
};
(function (e) {
  (function () {
    var t,
      r,
      n,
      i,
      a,
      s,
      f,
      h,
      D,
      v,
      k,
      A,
      w,
      O,
      x,
      P,
      K,
      ae,
      Ae,
      _,
      d,
      g,
      C,
      y,
      U,
      z;
    (a = Ci), (s = Et), (t = a.Syntax);
    function j(u) {
      return _e.Expression.hasOwnProperty(u.type);
    }
    function Q(u) {
      return _e.Statement.hasOwnProperty(u.type);
    }
    (r = {
      Sequence: 0,
      Yield: 1,
      Assignment: 1,
      Conditional: 2,
      ArrowFunction: 2,
      LogicalOR: 3,
      LogicalAND: 4,
      BitwiseOR: 5,
      BitwiseXOR: 6,
      BitwiseAND: 7,
      Equality: 8,
      Relational: 9,
      BitwiseSHIFT: 10,
      Additive: 11,
      Multiplicative: 12,
      Exponentiation: 13,
      Await: 14,
      Unary: 14,
      Postfix: 15,
      OptionalChaining: 16,
      Call: 17,
      New: 18,
      TaggedTemplate: 19,
      Member: 20,
      Primary: 21
    }),
      (n = {
        '||': r.LogicalOR,
        '&&': r.LogicalAND,
        '|': r.BitwiseOR,
        '^': r.BitwiseXOR,
        '&': r.BitwiseAND,
        '==': r.Equality,
        '!=': r.Equality,
        '===': r.Equality,
        '!==': r.Equality,
        is: r.Equality,
        isnt: r.Equality,
        '<': r.Relational,
        '>': r.Relational,
        '<=': r.Relational,
        '>=': r.Relational,
        in: r.Relational,
        instanceof: r.Relational,
        '<<': r.BitwiseSHIFT,
        '>>': r.BitwiseSHIFT,
        '>>>': r.BitwiseSHIFT,
        '+': r.Additive,
        '-': r.Additive,
        '*': r.Multiplicative,
        '%': r.Multiplicative,
        '/': r.Multiplicative,
        '**': r.Exponentiation
      });
    var W = 1,
      ne = 1 << 1,
      Ce = 1 << 2,
      ee = 1 << 3,
      b = 1 << 4,
      N = 1 << 5,
      M = ne | Ce,
      re = W | ne,
      R = W | ne | Ce,
      le = W,
      oe = Ce,
      Z = W | Ce,
      G = W,
      E = W | N,
      F = 0,
      H = W | b,
      B = W | ee;
    function S() {
      return {
        indent: null,
        base: null,
        parse: null,
        comment: !1,
        format: {
          indent: { style: '    ', base: 0, adjustMultilineComment: !1 },
          newline: `
`,
          space: ' ',
          json: !1,
          renumber: !1,
          hexadecimal: !1,
          quotes: 'single',
          escapeless: !1,
          compact: !1,
          parentheses: !0,
          semicolons: !0,
          safeConcatenation: !1,
          preserveBlankLines: !1
        },
        moz: {
          comprehensionExpressionStartsWithAssignment: !1,
          starlessGenerator: !1
        },
        sourceMap: null,
        sourceMapRoot: null,
        sourceMapWithCode: !1,
        directive: !1,
        raw: !0,
        verbatim: null,
        sourceCode: null
      };
    }
    function q(u, l) {
      var o = '';
      for (l |= 0; l > 0; l >>>= 1, u += u) l & 1 && (o += u);
      return o;
    }
    function X(u) {
      return /[\r\n]/g.test(u);
    }
    function ce(u) {
      var l = u.length;
      return l && s.code.isLineTerminator(u.charCodeAt(l - 1));
    }
    function De(u, l) {
      var o;
      for (o in l) l.hasOwnProperty(o) && (u[o] = l[o]);
      return u;
    }
    function Fe(u, l) {
      var o, c;
      function m(T) {
        return (
          typeof T == 'object' && T instanceof Object && !(T instanceof RegExp)
        );
      }
      for (o in l)
        l.hasOwnProperty(o) &&
          ((c = l[o]),
          m(c) ? (m(u[o]) ? Fe(u[o], c) : (u[o] = Fe({}, c))) : (u[o] = c));
      return u;
    }
    function Ke(u) {
      var l, o, c, m, T;
      if (u !== u) throw new Error('Numeric literal whose value is NaN');
      if (u < 0 || (u === 0 && 1 / u < 0))
        throw new Error('Numeric literal whose value is negative');
      if (u === 1 / 0) return D ? 'null' : v ? '1e400' : '1e+400';
      if (((l = '' + u), !v || l.length < 3)) return l;
      for (
        o = l.indexOf('.'),
          !D &&
            l.charCodeAt(0) === 48 &&
            o === 1 &&
            ((o = 0), (l = l.slice(1))),
          c = l,
          l = l.replace('e+', 'e'),
          m = 0,
          (T = c.indexOf('e')) > 0 &&
            ((m = +c.slice(T + 1)), (c = c.slice(0, T))),
          o >= 0 &&
            ((m -= c.length - o - 1),
            (c = +(c.slice(0, o) + c.slice(o + 1)) + '')),
          T = 0;
        c.charCodeAt(c.length + T - 1) === 48;

      )
        --T;
      return (
        T !== 0 && ((m -= T), (c = c.slice(0, T))),
        m !== 0 && (c += 'e' + m),
        (c.length < l.length ||
          (k &&
            u > 1e12 &&
            Math.floor(u) === u &&
            (c = '0x' + u.toString(16)).length < l.length)) &&
          +c === u &&
          (l = c),
        l
      );
    }
    function ln(u, l) {
      return (u & -2) === 8232
        ? (l ? 'u' : '\\u') + (u === 8232 ? '2028' : '2029')
        : u === 10 || u === 13
        ? (l ? '' : '\\') + (u === 10 ? 'n' : 'r')
        : String.fromCharCode(u);
    }
    function Bu(u) {
      var l, o, c, m, T, I, L, $;
      if (((o = u.toString()), u.source)) {
        if (((l = o.match(/\/([^/]*)$/)), !l)) return o;
        for (
          c = l[1], o = '', L = !1, $ = !1, m = 0, T = u.source.length;
          m < T;
          ++m
        )
          (I = u.source.charCodeAt(m)),
            $
              ? ((o += ln(I, $)), ($ = !1))
              : (L
                  ? I === 93 && (L = !1)
                  : I === 47
                  ? (o += '\\')
                  : I === 91 && (L = !0),
                (o += ln(I, $)),
                ($ = I === 92));
        return '/' + o + '/' + c;
      }
      return o;
    }
    function wu(u, l) {
      var o;
      return u === 8
        ? '\\b'
        : u === 12
        ? '\\f'
        : u === 9
        ? '\\t'
        : ((o = u.toString(16).toUpperCase()),
          D || u > 255
            ? '\\u' + '0000'.slice(o.length) + o
            : u === 0 && !s.code.isDecimalDigit(l)
            ? '\\0'
            : u === 11
            ? '\\x0B'
            : '\\x' + '00'.slice(o.length) + o);
    }
    function Tu(u) {
      if (u === 92) return '\\\\';
      if (u === 10) return '\\n';
      if (u === 13) return '\\r';
      if (u === 8232) return '\\u2028';
      if (u === 8233) return '\\u2029';
      throw new Error('Incorrectly classified character');
    }
    function ku(u) {
      var l, o, c, m;
      for (m = A === 'double' ? '"' : "'", l = 0, o = u.length; l < o; ++l)
        if (((c = u.charCodeAt(l)), c === 39)) {
          m = '"';
          break;
        } else if (c === 34) {
          m = "'";
          break;
        } else c === 92 && ++l;
      return m + u + m;
    }
    function Nu(u) {
      var l = '',
        o,
        c,
        m,
        T = 0,
        I = 0,
        L,
        $;
      for (o = 0, c = u.length; o < c; ++o) {
        if (((m = u.charCodeAt(o)), m === 39)) ++T;
        else if (m === 34) ++I;
        else if (m === 47 && D) l += '\\';
        else if (s.code.isLineTerminator(m) || m === 92) {
          l += Tu(m);
          continue;
        } else if (
          !s.code.isIdentifierPartES5(m) &&
          ((D && m < 32) || (!D && !w && (m < 32 || m > 126)))
        ) {
          l += wu(m, u.charCodeAt(o + 1));
          continue;
        }
        l += String.fromCharCode(m);
      }
      if (
        ((L = !(A === 'double' || (A === 'auto' && I < T))),
        ($ = L ? "'" : '"'),
        !(L ? T : I))
      )
        return $ + l + $;
      for (u = l, l = $, o = 0, c = u.length; o < c; ++o)
        (m = u.charCodeAt(o)),
          ((m === 39 && L) || (m === 34 && !L)) && (l += '\\'),
          (l += String.fromCharCode(m));
      return l + $;
    }
    function cn(u) {
      var l,
        o,
        c,
        m = '';
      for (l = 0, o = u.length; l < o; ++l)
        (c = u[l]), (m += Array.isArray(c) ? cn(c) : c);
      return m;
    }
    function Ee(u, l) {
      if (!g) return Array.isArray(u) ? cn(u) : u;
      if (l == null) {
        if (u instanceof i) return u;
        l = {};
      }
      return l.loc == null
        ? new i(null, null, g, u, l.name || null)
        : new i(
            l.loc.start.line,
            l.loc.start.column,
            g === !0 ? l.loc.source || null : g,
            u,
            l.name || null
          );
    }
    function ke() {
      return x || ' ';
    }
    function te(u, l) {
      var o, c, m, T;
      return (
        (o = Ee(u).toString()),
        o.length === 0
          ? [l]
          : ((c = Ee(l).toString()),
            c.length === 0
              ? [u]
              : ((m = o.charCodeAt(o.length - 1)),
                (T = c.charCodeAt(0)),
                ((m === 43 || m === 45) && m === T) ||
                (s.code.isIdentifierPartES5(m) &&
                  s.code.isIdentifierPartES5(T)) ||
                (m === 47 && T === 105)
                  ? [u, ke(), l]
                  : s.code.isWhiteSpace(m) ||
                    s.code.isLineTerminator(m) ||
                    s.code.isWhiteSpace(T) ||
                    s.code.isLineTerminator(T)
                  ? [u, l]
                  : [u, x, l]))
      );
    }
    function Oe(u) {
      return [f, u];
    }
    function Se(u) {
      var l;
      (l = f), (f += h), u(f), (f = l);
    }
    function Ou(u) {
      var l;
      for (
        l = u.length - 1;
        l >= 0 && !s.code.isLineTerminator(u.charCodeAt(l));
        --l
      );
      return u.length - 1 - l;
    }
    function Iu(u, l) {
      var o, c, m, T, I, L, $, pe;
      for (
        o = u.split(/\r\n|[\r\n]/), L = Number.MAX_VALUE, c = 1, m = o.length;
        c < m;
        ++c
      ) {
        for (
          T = o[c], I = 0;
          I < T.length && s.code.isWhiteSpace(T.charCodeAt(I));

        )
          ++I;
        L > I && (L = I);
      }
      for (
        typeof l != 'undefined'
          ? (($ = f), o[1][L] === '*' && (l += ' '), (f = l))
          : (L & 1 && --L, ($ = f)),
          c = 1,
          m = o.length;
        c < m;
        ++c
      )
        (pe = Ee(Oe(o[c].slice(L)))), (o[c] = g ? pe.join('') : pe);
      return (
        (f = $),
        o.join(`
`)
      );
    }
    function Ze(u, l) {
      if (u.type === 'Line') {
        if (ce(u.value)) return '//' + u.value;
        var o = '//' + u.value;
        return (
          y ||
            (o += `
`),
          o
        );
      }
      return _.format.indent.adjustMultilineComment && /[\n\r]/.test(u.value)
        ? Iu('/*' + u.value + '*/', l)
        : '/*' + u.value + '*/';
    }
    function fn(u, l) {
      var o, c, m, T, I, L, $, pe, Te, lt, gt, dn, mn, Qe;
      if (u.leadingComments && u.leadingComments.length > 0) {
        if (((T = l), y)) {
          for (
            m = u.leadingComments[0],
              l = [],
              pe = m.extendedRange,
              Te = m.range,
              gt = C.substring(pe[0], Te[0]),
              Qe = (gt.match(/\n/g) || []).length,
              Qe > 0
                ? (l.push(
                    q(
                      `
`,
                      Qe
                    )
                  ),
                  l.push(Oe(Ze(m))))
                : (l.push(gt), l.push(Ze(m))),
              lt = Te,
              o = 1,
              c = u.leadingComments.length;
            o < c;
            o++
          )
            (m = u.leadingComments[o]),
              (Te = m.range),
              (dn = C.substring(lt[1], Te[0])),
              (Qe = (dn.match(/\n/g) || []).length),
              l.push(
                q(
                  `
`,
                  Qe
                )
              ),
              l.push(Oe(Ze(m))),
              (lt = Te);
          (mn = C.substring(Te[1], pe[1])),
            (Qe = (mn.match(/\n/g) || []).length),
            l.push(
              q(
                `
`,
                Qe
              )
            );
        } else
          for (
            m = u.leadingComments[0],
              l = [],
              ae &&
                u.type === t.Program &&
                u.body.length === 0 &&
                l.push(`
`),
              l.push(Ze(m)),
              ce(Ee(l).toString()) ||
                l.push(`
`),
              o = 1,
              c = u.leadingComments.length;
            o < c;
            ++o
          )
            (m = u.leadingComments[o]),
              ($ = [Ze(m)]),
              ce(Ee($).toString()) ||
                $.push(`
`),
              l.push(Oe($));
        l.push(Oe(T));
      }
      if (u.trailingComments)
        if (y)
          (m = u.trailingComments[0]),
            (pe = m.extendedRange),
            (Te = m.range),
            (gt = C.substring(pe[0], Te[0])),
            (Qe = (gt.match(/\n/g) || []).length),
            Qe > 0
              ? (l.push(
                  q(
                    `
`,
                    Qe
                  )
                ),
                l.push(Oe(Ze(m))))
              : (l.push(gt), l.push(Ze(m)));
        else
          for (
            I = !ce(Ee(l).toString()),
              L = q(' ', Ou(Ee([f, l, h]).toString())),
              o = 0,
              c = u.trailingComments.length;
            o < c;
            ++o
          )
            (m = u.trailingComments[o]),
              I
                ? (o === 0 ? (l = [l, h]) : (l = [l, L]), l.push(Ze(m, L)))
                : (l = [l, Oe(Ze(m))]),
              o !== c - 1 &&
                !ce(Ee(l).toString()) &&
                (l = [
                  l,
                  `
`
                ]);
      return l;
    }
    function mt(u, l, o) {
      var c,
        m = 0;
      for (c = u; c < l; c++)
        C[c] ===
          `
` && m++;
      for (c = 1; c < m; c++) o.push(O);
    }
    function we(u, l, o) {
      return l < o ? ['(', u, ')'] : u;
    }
    function pn(u) {
      var l, o, c;
      for (c = u.split(/\r\n|\n/), l = 1, o = c.length; l < o; l++)
        c[l] = O + f + c[l];
      return c;
    }
    function Pu(u, l) {
      var o, c, m;
      return (
        (o = u[_.verbatim]),
        typeof o == 'string'
          ? (c = we(pn(o), r.Sequence, l))
          : ((c = pn(o.content)),
            (m = o.precedence != null ? o.precedence : r.Sequence),
            (c = we(c, m, l))),
        Ee(c, u)
      );
    }
    function _e() {}
    (_e.prototype.maybeBlock = function (u, l) {
      var o,
        c,
        m = this;
      return (
        (c = !_.comment || !u.leadingComments),
        u.type === t.BlockStatement && c
          ? [x, this.generateStatement(u, l)]
          : u.type === t.EmptyStatement && c
          ? ';'
          : (Se(function () {
              o = [O, Oe(m.generateStatement(u, l))];
            }),
            o)
      );
    }),
      (_e.prototype.maybeBlockSuffix = function (u, l) {
        var o = ce(Ee(l).toString());
        return u.type === t.BlockStatement &&
          (!_.comment || !u.leadingComments) &&
          !o
          ? [l, x]
          : o
          ? [l, f]
          : [l, O, f];
      });
    function Re(u) {
      return Ee(u.name, u);
    }
    function Ot(u, l) {
      return u.async ? 'async' + (l ? ke() : x) : '';
    }
    function zt(u) {
      var l = u.generator && !_.moz.starlessGenerator;
      return l ? '*' + x : '';
    }
    function hn(u) {
      var l = u.value,
        o = '';
      return (
        l.async && (o += Ot(l, !u.computed)),
        l.generator && (o += zt(l) ? '*' : ''),
        o
      );
    }
    (_e.prototype.generatePattern = function (u, l, o) {
      return u.type === t.Identifier ? Re(u) : this.generateExpression(u, l, o);
    }),
      (_e.prototype.generateFunctionParams = function (u) {
        var l, o, c, m;
        if (
          ((m = !1),
          u.type === t.ArrowFunctionExpression &&
            !u.rest &&
            (!u.defaults || u.defaults.length === 0) &&
            u.params.length === 1 &&
            u.params[0].type === t.Identifier)
        )
          c = [Ot(u, !0), Re(u.params[0])];
        else {
          for (
            c = u.type === t.ArrowFunctionExpression ? [Ot(u, !1)] : [],
              c.push('('),
              u.defaults && (m = !0),
              l = 0,
              o = u.params.length;
            l < o;
            ++l
          )
            m && u.defaults[l]
              ? c.push(
                  this.generateAssignment(
                    u.params[l],
                    u.defaults[l],
                    '=',
                    r.Assignment,
                    R
                  )
                )
              : c.push(this.generatePattern(u.params[l], r.Assignment, R)),
              l + 1 < o && c.push(',' + x);
          u.rest &&
            (u.params.length && c.push(',' + x),
            c.push('...'),
            c.push(Re(u.rest))),
            c.push(')');
        }
        return c;
      }),
      (_e.prototype.generateFunctionBody = function (u) {
        var l, o;
        return (
          (l = this.generateFunctionParams(u)),
          u.type === t.ArrowFunctionExpression && (l.push(x), l.push('=>')),
          u.expression
            ? (l.push(x),
              (o = this.generateExpression(u.body, r.Assignment, R)),
              o.toString().charAt(0) === '{' && (o = ['(', o, ')']),
              l.push(o))
            : l.push(this.maybeBlock(u.body, B)),
          l
        );
      }),
      (_e.prototype.generateIterationForStatement = function (u, l, o) {
        var c = ['for' + (l.await ? ke() + 'await' : '') + x + '('],
          m = this;
        return (
          Se(function () {
            l.left.type === t.VariableDeclaration
              ? Se(function () {
                  c.push(l.left.kind + ke()),
                    c.push(m.generateStatement(l.left.declarations[0], F));
                })
              : c.push(m.generateExpression(l.left, r.Call, R)),
              (c = te(c, u)),
              (c = [
                te(c, m.generateExpression(l.right, r.Assignment, R)),
                ')'
              ]);
          }),
          c.push(this.maybeBlock(l.body, o)),
          c
        );
      }),
      (_e.prototype.generatePropertyKey = function (u, l) {
        var o = [];
        return (
          l && o.push('['),
          o.push(this.generateExpression(u, r.Assignment, R)),
          l && o.push(']'),
          o
        );
      }),
      (_e.prototype.generateAssignment = function (u, l, o, c, m) {
        return (
          r.Assignment < c && (m |= W),
          we(
            [
              this.generateExpression(u, r.Call, m),
              x + o + x,
              this.generateExpression(l, r.Assignment, m)
            ],
            r.Assignment,
            c
          )
        );
      }),
      (_e.prototype.semicolon = function (u) {
        return !K && u & N ? '' : ';';
      }),
      (_e.Statement = {
        BlockStatement: function (u, l) {
          var o,
            c,
            m = ['{', O],
            T = this;
          return (
            Se(function () {
              u.body.length === 0 &&
                y &&
                ((o = u.range),
                o[1] - o[0] > 2 &&
                  ((c = C.substring(o[0] + 1, o[1] - 1)),
                  c[0] ===
                    `
` && (m = ['{']),
                  m.push(c)));
              var I, L, $, pe;
              for (
                pe = G, l & ee && (pe |= b), I = 0, L = u.body.length;
                I < L;
                ++I
              )
                y &&
                  (I === 0 &&
                    (u.body[0].leadingComments &&
                      ((o = u.body[0].leadingComments[0].extendedRange),
                      (c = C.substring(o[0], o[1])),
                      c[0] ===
                        `
` && (m = ['{'])),
                    u.body[0].leadingComments ||
                      mt(u.range[0], u.body[0].range[0], m)),
                  I > 0 &&
                    !u.body[I - 1].trailingComments &&
                    !u.body[I].leadingComments &&
                    mt(u.body[I - 1].range[1], u.body[I].range[0], m)),
                  I === L - 1 && (pe |= N),
                  u.body[I].leadingComments && y
                    ? ($ = T.generateStatement(u.body[I], pe))
                    : ($ = Oe(T.generateStatement(u.body[I], pe))),
                  m.push($),
                  ce(Ee($).toString()) ||
                    (y && I < L - 1 && u.body[I + 1].leadingComments) ||
                    m.push(O),
                  y &&
                    I === L - 1 &&
                    (u.body[I].trailingComments ||
                      mt(u.body[I].range[1], u.range[1], m));
            }),
            m.push(Oe('}')),
            m
          );
        },
        BreakStatement: function (u, l) {
          return u.label
            ? 'break ' + u.label.name + this.semicolon(l)
            : 'break' + this.semicolon(l);
        },
        ContinueStatement: function (u, l) {
          return u.label
            ? 'continue ' + u.label.name + this.semicolon(l)
            : 'continue' + this.semicolon(l);
        },
        ClassBody: function (u, l) {
          var o = ['{', O],
            c = this;
          return (
            Se(function (m) {
              var T, I;
              for (T = 0, I = u.body.length; T < I; ++T)
                o.push(m),
                  o.push(c.generateExpression(u.body[T], r.Sequence, R)),
                  T + 1 < I && o.push(O);
            }),
            ce(Ee(o).toString()) || o.push(O),
            o.push(f),
            o.push('}'),
            o
          );
        },
        ClassDeclaration: function (u, l) {
          var o, c;
          return (
            (o = ['class']),
            u.id && (o = te(o, this.generateExpression(u.id, r.Sequence, R))),
            u.superClass &&
              ((c = te(
                'extends',
                this.generateExpression(u.superClass, r.Unary, R)
              )),
              (o = te(o, c))),
            o.push(x),
            o.push(this.generateStatement(u.body, E)),
            o
          );
        },
        DirectiveStatement: function (u, l) {
          return _.raw && u.raw
            ? u.raw + this.semicolon(l)
            : ku(u.directive) + this.semicolon(l);
        },
        DoWhileStatement: function (u, l) {
          var o = te('do', this.maybeBlock(u.body, G));
          return (
            (o = this.maybeBlockSuffix(u.body, o)),
            te(o, [
              'while' + x + '(',
              this.generateExpression(u.test, r.Sequence, R),
              ')' + this.semicolon(l)
            ])
          );
        },
        CatchClause: function (u, l) {
          var o,
            c = this;
          return (
            Se(function () {
              var m;
              u.param
                ? ((o = [
                    'catch' + x + '(',
                    c.generateExpression(u.param, r.Sequence, R),
                    ')'
                  ]),
                  u.guard &&
                    ((m = c.generateExpression(u.guard, r.Sequence, R)),
                    o.splice(2, 0, ' if ', m)))
                : (o = ['catch']);
            }),
            o.push(this.maybeBlock(u.body, G)),
            o
          );
        },
        DebuggerStatement: function (u, l) {
          return 'debugger' + this.semicolon(l);
        },
        EmptyStatement: function (u, l) {
          return ';';
        },
        ExportDefaultDeclaration: function (u, l) {
          var o = ['export'],
            c;
          return (
            (c = l & N ? E : G),
            (o = te(o, 'default')),
            Q(u.declaration)
              ? (o = te(o, this.generateStatement(u.declaration, c)))
              : (o = te(
                  o,
                  this.generateExpression(u.declaration, r.Assignment, R) +
                    this.semicolon(l)
                )),
            o
          );
        },
        ExportNamedDeclaration: function (u, l) {
          var o = ['export'],
            c,
            m = this;
          return (
            (c = l & N ? E : G),
            u.declaration
              ? te(o, this.generateStatement(u.declaration, c))
              : (u.specifiers &&
                  (u.specifiers.length === 0
                    ? (o = te(o, '{' + x + '}'))
                    : u.specifiers[0].type === t.ExportBatchSpecifier
                    ? (o = te(
                        o,
                        this.generateExpression(u.specifiers[0], r.Sequence, R)
                      ))
                    : ((o = te(o, '{')),
                      Se(function (T) {
                        var I, L;
                        for (
                          o.push(O), I = 0, L = u.specifiers.length;
                          I < L;
                          ++I
                        )
                          o.push(T),
                            o.push(
                              m.generateExpression(
                                u.specifiers[I],
                                r.Sequence,
                                R
                              )
                            ),
                            I + 1 < L && o.push(',' + O);
                      }),
                      ce(Ee(o).toString()) || o.push(O),
                      o.push(f + '}')),
                  u.source
                    ? (o = te(o, [
                        'from' + x,
                        this.generateExpression(u.source, r.Sequence, R),
                        this.semicolon(l)
                      ]))
                    : o.push(this.semicolon(l))),
                o)
          );
        },
        ExportAllDeclaration: function (u, l) {
          return [
            'export' + x,
            '*' + x,
            'from' + x,
            this.generateExpression(u.source, r.Sequence, R),
            this.semicolon(l)
          ];
        },
        ExpressionStatement: function (u, l) {
          var o, c;
          function m(L) {
            var $;
            return L.slice(0, 5) !== 'class'
              ? !1
              : (($ = L.charCodeAt(5)),
                $ === 123 ||
                  s.code.isWhiteSpace($) ||
                  s.code.isLineTerminator($));
          }
          function T(L) {
            var $;
            return L.slice(0, 8) !== 'function'
              ? !1
              : (($ = L.charCodeAt(8)),
                $ === 40 ||
                  s.code.isWhiteSpace($) ||
                  $ === 42 ||
                  s.code.isLineTerminator($));
          }
          function I(L) {
            var $, pe, Te;
            if (
              L.slice(0, 5) !== 'async' ||
              !s.code.isWhiteSpace(L.charCodeAt(5))
            )
              return !1;
            for (
              pe = 6, Te = L.length;
              pe < Te && s.code.isWhiteSpace(L.charCodeAt(pe));
              ++pe
            );
            return pe === Te || L.slice(pe, pe + 8) !== 'function'
              ? !1
              : (($ = L.charCodeAt(pe + 8)),
                $ === 40 ||
                  s.code.isWhiteSpace($) ||
                  $ === 42 ||
                  s.code.isLineTerminator($));
          }
          return (
            (o = [this.generateExpression(u.expression, r.Sequence, R)]),
            (c = Ee(o).toString()),
            c.charCodeAt(0) === 123 ||
            m(c) ||
            T(c) ||
            I(c) ||
            (Ae &&
              l & b &&
              u.expression.type === t.Literal &&
              typeof u.expression.value == 'string')
              ? (o = ['(', o, ')' + this.semicolon(l)])
              : o.push(this.semicolon(l)),
            o
          );
        },
        ImportDeclaration: function (u, l) {
          var o,
            c,
            m = this;
          return u.specifiers.length === 0
            ? [
                'import',
                x,
                this.generateExpression(u.source, r.Sequence, R),
                this.semicolon(l)
              ]
            : ((o = ['import']),
              (c = 0),
              u.specifiers[c].type === t.ImportDefaultSpecifier &&
                ((o = te(o, [
                  this.generateExpression(u.specifiers[c], r.Sequence, R)
                ])),
                ++c),
              u.specifiers[c] &&
                (c !== 0 && o.push(','),
                u.specifiers[c].type === t.ImportNamespaceSpecifier
                  ? (o = te(o, [
                      x,
                      this.generateExpression(u.specifiers[c], r.Sequence, R)
                    ]))
                  : (o.push(x + '{'),
                    u.specifiers.length - c === 1
                      ? (o.push(x),
                        o.push(
                          this.generateExpression(
                            u.specifiers[c],
                            r.Sequence,
                            R
                          )
                        ),
                        o.push(x + '}' + x))
                      : (Se(function (T) {
                          var I, L;
                          for (
                            o.push(O), I = c, L = u.specifiers.length;
                            I < L;
                            ++I
                          )
                            o.push(T),
                              o.push(
                                m.generateExpression(
                                  u.specifiers[I],
                                  r.Sequence,
                                  R
                                )
                              ),
                              I + 1 < L && o.push(',' + O);
                        }),
                        ce(Ee(o).toString()) || o.push(O),
                        o.push(f + '}' + x)))),
              (o = te(o, [
                'from' + x,
                this.generateExpression(u.source, r.Sequence, R),
                this.semicolon(l)
              ])),
              o);
        },
        VariableDeclarator: function (u, l) {
          var o = l & W ? R : M;
          return u.init
            ? [
                this.generateExpression(u.id, r.Assignment, o),
                x,
                '=',
                x,
                this.generateExpression(u.init, r.Assignment, o)
              ]
            : this.generatePattern(u.id, r.Assignment, o);
        },
        VariableDeclaration: function (u, l) {
          var o,
            c,
            m,
            T,
            I,
            L = this;
          (o = [u.kind]), (I = l & W ? G : F);
          function $() {
            for (
              T = u.declarations[0],
                _.comment && T.leadingComments
                  ? (o.push(`
`),
                    o.push(Oe(L.generateStatement(T, I))))
                  : (o.push(ke()), o.push(L.generateStatement(T, I))),
                c = 1,
                m = u.declarations.length;
              c < m;
              ++c
            )
              (T = u.declarations[c]),
                _.comment && T.leadingComments
                  ? (o.push(',' + O), o.push(Oe(L.generateStatement(T, I))))
                  : (o.push(',' + x), o.push(L.generateStatement(T, I)));
          }
          return (
            u.declarations.length > 1 ? Se($) : $(),
            o.push(this.semicolon(l)),
            o
          );
        },
        ThrowStatement: function (u, l) {
          return [
            te('throw', this.generateExpression(u.argument, r.Sequence, R)),
            this.semicolon(l)
          ];
        },
        TryStatement: function (u, l) {
          var o, c, m, T;
          if (
            ((o = ['try', this.maybeBlock(u.block, G)]),
            (o = this.maybeBlockSuffix(u.block, o)),
            u.handlers)
          )
            for (c = 0, m = u.handlers.length; c < m; ++c)
              (o = te(o, this.generateStatement(u.handlers[c], G))),
                (u.finalizer || c + 1 !== m) &&
                  (o = this.maybeBlockSuffix(u.handlers[c].body, o));
          else {
            for (T = u.guardedHandlers || [], c = 0, m = T.length; c < m; ++c)
              (o = te(o, this.generateStatement(T[c], G))),
                (u.finalizer || c + 1 !== m) &&
                  (o = this.maybeBlockSuffix(T[c].body, o));
            if (u.handler)
              if (Array.isArray(u.handler))
                for (c = 0, m = u.handler.length; c < m; ++c)
                  (o = te(o, this.generateStatement(u.handler[c], G))),
                    (u.finalizer || c + 1 !== m) &&
                      (o = this.maybeBlockSuffix(u.handler[c].body, o));
              else
                (o = te(o, this.generateStatement(u.handler, G))),
                  u.finalizer && (o = this.maybeBlockSuffix(u.handler.body, o));
          }
          return (
            u.finalizer &&
              (o = te(o, ['finally', this.maybeBlock(u.finalizer, G)])),
            o
          );
        },
        SwitchStatement: function (u, l) {
          var o,
            c,
            m,
            T,
            I,
            L = this;
          if (
            (Se(function () {
              o = [
                'switch' + x + '(',
                L.generateExpression(u.discriminant, r.Sequence, R),
                ')' + x + '{' + O
              ];
            }),
            u.cases)
          )
            for (I = G, m = 0, T = u.cases.length; m < T; ++m)
              m === T - 1 && (I |= N),
                (c = Oe(this.generateStatement(u.cases[m], I))),
                o.push(c),
                ce(Ee(c).toString()) || o.push(O);
          return o.push(Oe('}')), o;
        },
        SwitchCase: function (u, l) {
          var o,
            c,
            m,
            T,
            I,
            L = this;
          return (
            Se(function () {
              for (
                u.test
                  ? (o = [
                      te('case', L.generateExpression(u.test, r.Sequence, R)),
                      ':'
                    ])
                  : (o = ['default:']),
                  m = 0,
                  T = u.consequent.length,
                  T &&
                    u.consequent[0].type === t.BlockStatement &&
                    ((c = L.maybeBlock(u.consequent[0], G)),
                    o.push(c),
                    (m = 1)),
                  m !== T && !ce(Ee(o).toString()) && o.push(O),
                  I = G;
                m < T;
                ++m
              )
                m === T - 1 && l & N && (I |= N),
                  (c = Oe(L.generateStatement(u.consequent[m], I))),
                  o.push(c),
                  m + 1 !== T && !ce(Ee(c).toString()) && o.push(O);
            }),
            o
          );
        },
        IfStatement: function (u, l) {
          var o,
            c,
            m,
            T = this;
          return (
            Se(function () {
              o = [
                'if' + x + '(',
                T.generateExpression(u.test, r.Sequence, R),
                ')'
              ];
            }),
            (m = l & N),
            (c = G),
            m && (c |= N),
            u.alternate
              ? (o.push(this.maybeBlock(u.consequent, G)),
                (o = this.maybeBlockSuffix(u.consequent, o)),
                u.alternate.type === t.IfStatement
                  ? (o = te(o, [
                      'else ',
                      this.generateStatement(u.alternate, c)
                    ]))
                  : (o = te(o, te('else', this.maybeBlock(u.alternate, c)))))
              : o.push(this.maybeBlock(u.consequent, c)),
            o
          );
        },
        ForStatement: function (u, l) {
          var o,
            c = this;
          return (
            Se(function () {
              (o = ['for' + x + '(']),
                u.init
                  ? u.init.type === t.VariableDeclaration
                    ? o.push(c.generateStatement(u.init, F))
                    : (o.push(c.generateExpression(u.init, r.Sequence, M)),
                      o.push(';'))
                  : o.push(';'),
                u.test &&
                  (o.push(x),
                  o.push(c.generateExpression(u.test, r.Sequence, R))),
                o.push(';'),
                u.update &&
                  (o.push(x),
                  o.push(c.generateExpression(u.update, r.Sequence, R))),
                o.push(')');
            }),
            o.push(this.maybeBlock(u.body, l & N ? E : G)),
            o
          );
        },
        ForInStatement: function (u, l) {
          return this.generateIterationForStatement('in', u, l & N ? E : G);
        },
        ForOfStatement: function (u, l) {
          return this.generateIterationForStatement('of', u, l & N ? E : G);
        },
        LabeledStatement: function (u, l) {
          return [u.label.name + ':', this.maybeBlock(u.body, l & N ? E : G)];
        },
        Program: function (u, l) {
          var o, c, m, T, I;
          for (
            T = u.body.length,
              o = [
                ae && T > 0
                  ? `
`
                  : ''
              ],
              I = H,
              m = 0;
            m < T;
            ++m
          )
            !ae && m === T - 1 && (I |= N),
              y &&
                (m === 0 &&
                  (u.body[0].leadingComments ||
                    mt(u.range[0], u.body[m].range[0], o)),
                m > 0 &&
                  !u.body[m - 1].trailingComments &&
                  !u.body[m].leadingComments &&
                  mt(u.body[m - 1].range[1], u.body[m].range[0], o)),
              (c = Oe(this.generateStatement(u.body[m], I))),
              o.push(c),
              m + 1 < T &&
                !ce(Ee(c).toString()) &&
                ((y && u.body[m + 1].leadingComments) || o.push(O)),
              y &&
                m === T - 1 &&
                (u.body[m].trailingComments ||
                  mt(u.body[m].range[1], u.range[1], o));
          return o;
        },
        FunctionDeclaration: function (u, l) {
          return [
            Ot(u, !0),
            'function',
            zt(u) || ke(),
            u.id ? Re(u.id) : '',
            this.generateFunctionBody(u)
          ];
        },
        ReturnStatement: function (u, l) {
          return u.argument
            ? [
                te(
                  'return',
                  this.generateExpression(u.argument, r.Sequence, R)
                ),
                this.semicolon(l)
              ]
            : ['return' + this.semicolon(l)];
        },
        WhileStatement: function (u, l) {
          var o,
            c = this;
          return (
            Se(function () {
              o = [
                'while' + x + '(',
                c.generateExpression(u.test, r.Sequence, R),
                ')'
              ];
            }),
            o.push(this.maybeBlock(u.body, l & N ? E : G)),
            o
          );
        },
        WithStatement: function (u, l) {
          var o,
            c = this;
          return (
            Se(function () {
              o = [
                'with' + x + '(',
                c.generateExpression(u.object, r.Sequence, R),
                ')'
              ];
            }),
            o.push(this.maybeBlock(u.body, l & N ? E : G)),
            o
          );
        }
      }),
      De(_e.prototype, _e.Statement),
      (_e.Expression = {
        SequenceExpression: function (u, l, o) {
          var c, m, T;
          for (
            r.Sequence < l && (o |= W), c = [], m = 0, T = u.expressions.length;
            m < T;
            ++m
          )
            c.push(this.generateExpression(u.expressions[m], r.Assignment, o)),
              m + 1 < T && c.push(',' + x);
          return we(c, r.Sequence, l);
        },
        AssignmentExpression: function (u, l, o) {
          return this.generateAssignment(u.left, u.right, u.operator, l, o);
        },
        ArrowFunctionExpression: function (u, l, o) {
          return we(this.generateFunctionBody(u), r.ArrowFunction, l);
        },
        ConditionalExpression: function (u, l, o) {
          return (
            r.Conditional < l && (o |= W),
            we(
              [
                this.generateExpression(u.test, r.LogicalOR, o),
                x + '?' + x,
                this.generateExpression(u.consequent, r.Assignment, o),
                x + ':' + x,
                this.generateExpression(u.alternate, r.Assignment, o)
              ],
              r.Conditional,
              l
            )
          );
        },
        LogicalExpression: function (u, l, o) {
          return this.BinaryExpression(u, l, o);
        },
        BinaryExpression: function (u, l, o) {
          var c, m, T, I, L, $;
          return (
            (I = n[u.operator]),
            (m = u.operator === '**' ? r.Postfix : I),
            (T = u.operator === '**' ? I : I + 1),
            I < l && (o |= W),
            (L = this.generateExpression(u.left, m, o)),
            ($ = L.toString()),
            $.charCodeAt($.length - 1) === 47 &&
            s.code.isIdentifierPartES5(u.operator.charCodeAt(0))
              ? (c = [L, ke(), u.operator])
              : (c = te(L, u.operator)),
            (L = this.generateExpression(u.right, T, o)),
            (u.operator === '/' && L.toString().charAt(0) === '/') ||
            (u.operator.slice(-1) === '<' && L.toString().slice(0, 3) === '!--')
              ? (c.push(ke()), c.push(L))
              : (c = te(c, L)),
            u.operator === 'in' && !(o & W) ? ['(', c, ')'] : we(c, I, l)
          );
        },
        CallExpression: function (u, l, o) {
          var c, m, T;
          for (
            c = [this.generateExpression(u.callee, r.Call, re)],
              u.optional && c.push('?.'),
              c.push('('),
              m = 0,
              T = u.arguments.length;
            m < T;
            ++m
          )
            c.push(this.generateExpression(u.arguments[m], r.Assignment, R)),
              m + 1 < T && c.push(',' + x);
          return c.push(')'), o & ne ? we(c, r.Call, l) : ['(', c, ')'];
        },
        ChainExpression: function (u, l, o) {
          r.OptionalChaining < l && (o |= ne);
          var c = this.generateExpression(u.expression, r.OptionalChaining, o);
          return we(c, r.OptionalChaining, l);
        },
        NewExpression: function (u, l, o) {
          var c, m, T, I, L;
          if (
            ((m = u.arguments.length),
            (L = o & Ce && !P && m === 0 ? Z : le),
            (c = te('new', this.generateExpression(u.callee, r.New, L))),
            !(o & Ce) || P || m > 0)
          ) {
            for (c.push('('), T = 0, I = m; T < I; ++T)
              c.push(this.generateExpression(u.arguments[T], r.Assignment, R)),
                T + 1 < I && c.push(',' + x);
            c.push(')');
          }
          return we(c, r.New, l);
        },
        MemberExpression: function (u, l, o) {
          var c, m;
          return (
            (c = [this.generateExpression(u.object, r.Call, o & ne ? re : le)]),
            u.computed
              ? (u.optional && c.push('?.'),
                c.push('['),
                c.push(
                  this.generateExpression(
                    u.property,
                    r.Sequence,
                    o & ne ? R : Z
                  )
                ),
                c.push(']'))
              : (!u.optional &&
                  u.object.type === t.Literal &&
                  typeof u.object.value == 'number' &&
                  ((m = Ee(c).toString()),
                  m.indexOf('.') < 0 &&
                    !/[eExX]/.test(m) &&
                    s.code.isDecimalDigit(m.charCodeAt(m.length - 1)) &&
                    !(m.length >= 2 && m.charCodeAt(0) === 48) &&
                    c.push(' ')),
                c.push(u.optional ? '?.' : '.'),
                c.push(Re(u.property))),
            we(c, r.Member, l)
          );
        },
        MetaProperty: function (u, l, o) {
          var c;
          return (
            (c = []),
            c.push(typeof u.meta == 'string' ? u.meta : Re(u.meta)),
            c.push('.'),
            c.push(typeof u.property == 'string' ? u.property : Re(u.property)),
            we(c, r.Member, l)
          );
        },
        UnaryExpression: function (u, l, o) {
          var c, m, T, I, L;
          return (
            (m = this.generateExpression(u.argument, r.Unary, R)),
            x === ''
              ? (c = te(u.operator, m))
              : ((c = [u.operator]),
                u.operator.length > 2
                  ? (c = te(c, m))
                  : ((I = Ee(c).toString()),
                    (L = I.charCodeAt(I.length - 1)),
                    (T = m.toString().charCodeAt(0)),
                    (((L === 43 || L === 45) && L === T) ||
                      (s.code.isIdentifierPartES5(L) &&
                        s.code.isIdentifierPartES5(T))) &&
                      c.push(ke()),
                    c.push(m))),
            we(c, r.Unary, l)
          );
        },
        YieldExpression: function (u, l, o) {
          var c;
          return (
            u.delegate ? (c = 'yield*') : (c = 'yield'),
            u.argument &&
              (c = te(c, this.generateExpression(u.argument, r.Yield, R))),
            we(c, r.Yield, l)
          );
        },
        AwaitExpression: function (u, l, o) {
          var c = te(
            u.all ? 'await*' : 'await',
            this.generateExpression(u.argument, r.Await, R)
          );
          return we(c, r.Await, l);
        },
        UpdateExpression: function (u, l, o) {
          return u.prefix
            ? we(
                [u.operator, this.generateExpression(u.argument, r.Unary, R)],
                r.Unary,
                l
              )
            : we(
                [this.generateExpression(u.argument, r.Postfix, R), u.operator],
                r.Postfix,
                l
              );
        },
        FunctionExpression: function (u, l, o) {
          var c = [Ot(u, !0), 'function'];
          return (
            u.id
              ? (c.push(zt(u) || ke()), c.push(Re(u.id)))
              : c.push(zt(u) || x),
            c.push(this.generateFunctionBody(u)),
            c
          );
        },
        ArrayPattern: function (u, l, o) {
          return this.ArrayExpression(u, l, o, !0);
        },
        ArrayExpression: function (u, l, o, c) {
          var m,
            T,
            I = this;
          return u.elements.length
            ? ((T = c ? !1 : u.elements.length > 1),
              (m = ['[', T ? O : '']),
              Se(function (L) {
                var $, pe;
                for ($ = 0, pe = u.elements.length; $ < pe; ++$)
                  u.elements[$]
                    ? (m.push(T ? L : ''),
                      m.push(
                        I.generateExpression(u.elements[$], r.Assignment, R)
                      ))
                    : (T && m.push(L), $ + 1 === pe && m.push(',')),
                    $ + 1 < pe && m.push(',' + (T ? O : x));
              }),
              T && !ce(Ee(m).toString()) && m.push(O),
              m.push(T ? f : ''),
              m.push(']'),
              m)
            : '[]';
        },
        RestElement: function (u, l, o) {
          return '...' + this.generatePattern(u.argument);
        },
        ClassExpression: function (u, l, o) {
          var c, m;
          return (
            (c = ['class']),
            u.id && (c = te(c, this.generateExpression(u.id, r.Sequence, R))),
            u.superClass &&
              ((m = te(
                'extends',
                this.generateExpression(u.superClass, r.Unary, R)
              )),
              (c = te(c, m))),
            c.push(x),
            c.push(this.generateStatement(u.body, E)),
            c
          );
        },
        MethodDefinition: function (u, l, o) {
          var c, m;
          return (
            u.static ? (c = ['static' + x]) : (c = []),
            u.kind === 'get' || u.kind === 'set'
              ? (m = [
                  te(u.kind, this.generatePropertyKey(u.key, u.computed)),
                  this.generateFunctionBody(u.value)
                ])
              : (m = [
                  hn(u),
                  this.generatePropertyKey(u.key, u.computed),
                  this.generateFunctionBody(u.value)
                ]),
            te(c, m)
          );
        },
        Property: function (u, l, o) {
          return u.kind === 'get' || u.kind === 'set'
            ? [
                u.kind,
                ke(),
                this.generatePropertyKey(u.key, u.computed),
                this.generateFunctionBody(u.value)
              ]
            : u.shorthand
            ? u.value.type === 'AssignmentPattern'
              ? this.AssignmentPattern(u.value, r.Sequence, R)
              : this.generatePropertyKey(u.key, u.computed)
            : u.method
            ? [
                hn(u),
                this.generatePropertyKey(u.key, u.computed),
                this.generateFunctionBody(u.value)
              ]
            : [
                this.generatePropertyKey(u.key, u.computed),
                ':' + x,
                this.generateExpression(u.value, r.Assignment, R)
              ];
        },
        ObjectExpression: function (u, l, o) {
          var c,
            m,
            T,
            I = this;
          return u.properties.length
            ? ((c = u.properties.length > 1),
              Se(function () {
                T = I.generateExpression(u.properties[0], r.Sequence, R);
              }),
              !c && !X(Ee(T).toString())
                ? ['{', x, T, x, '}']
                : (Se(function (L) {
                    var $, pe;
                    if (((m = ['{', O, L, T]), c))
                      for (
                        m.push(',' + O), $ = 1, pe = u.properties.length;
                        $ < pe;
                        ++$
                      )
                        m.push(L),
                          m.push(
                            I.generateExpression(u.properties[$], r.Sequence, R)
                          ),
                          $ + 1 < pe && m.push(',' + O);
                  }),
                  ce(Ee(m).toString()) || m.push(O),
                  m.push(f),
                  m.push('}'),
                  m))
            : '{}';
        },
        AssignmentPattern: function (u, l, o) {
          return this.generateAssignment(u.left, u.right, '=', l, o);
        },
        ObjectPattern: function (u, l, o) {
          var c,
            m,
            T,
            I,
            L,
            $ = this;
          if (!u.properties.length) return '{}';
          if (((I = !1), u.properties.length === 1))
            (L = u.properties[0]),
              L.type === t.Property &&
                L.value.type !== t.Identifier &&
                (I = !0);
          else
            for (m = 0, T = u.properties.length; m < T; ++m)
              if (
                ((L = u.properties[m]), L.type === t.Property && !L.shorthand)
              ) {
                I = !0;
                break;
              }
          return (
            (c = ['{', I ? O : '']),
            Se(function (pe) {
              var Te, lt;
              for (Te = 0, lt = u.properties.length; Te < lt; ++Te)
                c.push(I ? pe : ''),
                  c.push($.generateExpression(u.properties[Te], r.Sequence, R)),
                  Te + 1 < lt && c.push(',' + (I ? O : x));
            }),
            I && !ce(Ee(c).toString()) && c.push(O),
            c.push(I ? f : ''),
            c.push('}'),
            c
          );
        },
        ThisExpression: function (u, l, o) {
          return 'this';
        },
        Super: function (u, l, o) {
          return 'super';
        },
        Identifier: function (u, l, o) {
          return Re(u);
        },
        ImportDefaultSpecifier: function (u, l, o) {
          return Re(u.id || u.local);
        },
        ImportNamespaceSpecifier: function (u, l, o) {
          var c = ['*'],
            m = u.id || u.local;
          return m && c.push(x + 'as' + ke() + Re(m)), c;
        },
        ImportSpecifier: function (u, l, o) {
          var c = u.imported,
            m = [c.name],
            T = u.local;
          return (
            T && T.name !== c.name && m.push(ke() + 'as' + ke() + Re(T)), m
          );
        },
        ExportSpecifier: function (u, l, o) {
          var c = u.local,
            m = [c.name],
            T = u.exported;
          return (
            T && T.name !== c.name && m.push(ke() + 'as' + ke() + Re(T)), m
          );
        },
        Literal: function (u, l, o) {
          var c;
          if (u.hasOwnProperty('raw') && d && _.raw)
            try {
              if (
                ((c = d(u.raw).body[0].expression),
                c.type === t.Literal && c.value === u.value)
              )
                return u.raw;
            } catch {}
          return u.regex
            ? '/' + u.regex.pattern + '/' + u.regex.flags
            : u.value === null
            ? 'null'
            : typeof u.value == 'string'
            ? Nu(u.value)
            : typeof u.value == 'number'
            ? Ke(u.value)
            : typeof u.value == 'boolean'
            ? u.value
              ? 'true'
              : 'false'
            : Bu(u.value);
        },
        GeneratorExpression: function (u, l, o) {
          return this.ComprehensionExpression(u, l, o);
        },
        ComprehensionExpression: function (u, l, o) {
          var c,
            m,
            T,
            I,
            L = this;
          return (
            (c = u.type === t.GeneratorExpression ? ['('] : ['[']),
            _.moz.comprehensionExpressionStartsWithAssignment &&
              ((I = this.generateExpression(u.body, r.Assignment, R)),
              c.push(I)),
            u.blocks &&
              Se(function () {
                for (m = 0, T = u.blocks.length; m < T; ++m)
                  (I = L.generateExpression(u.blocks[m], r.Sequence, R)),
                    m > 0 || _.moz.comprehensionExpressionStartsWithAssignment
                      ? (c = te(c, I))
                      : c.push(I);
              }),
            u.filter &&
              ((c = te(c, 'if' + x)),
              (I = this.generateExpression(u.filter, r.Sequence, R)),
              (c = te(c, ['(', I, ')']))),
            _.moz.comprehensionExpressionStartsWithAssignment ||
              ((I = this.generateExpression(u.body, r.Assignment, R)),
              (c = te(c, I))),
            c.push(u.type === t.GeneratorExpression ? ')' : ']'),
            c
          );
        },
        ComprehensionBlock: function (u, l, o) {
          var c;
          return (
            u.left.type === t.VariableDeclaration
              ? (c = [
                  u.left.kind,
                  ke(),
                  this.generateStatement(u.left.declarations[0], F)
                ])
              : (c = this.generateExpression(u.left, r.Call, R)),
            (c = te(c, u.of ? 'of' : 'in')),
            (c = te(c, this.generateExpression(u.right, r.Sequence, R))),
            ['for' + x + '(', c, ')']
          );
        },
        SpreadElement: function (u, l, o) {
          return ['...', this.generateExpression(u.argument, r.Assignment, R)];
        },
        TaggedTemplateExpression: function (u, l, o) {
          var c = re;
          o & ne || (c = le);
          var m = [
            this.generateExpression(u.tag, r.Call, c),
            this.generateExpression(u.quasi, r.Primary, oe)
          ];
          return we(m, r.TaggedTemplate, l);
        },
        TemplateElement: function (u, l, o) {
          return u.value.raw;
        },
        TemplateLiteral: function (u, l, o) {
          var c, m, T;
          for (c = ['`'], m = 0, T = u.quasis.length; m < T; ++m)
            c.push(this.generateExpression(u.quasis[m], r.Primary, R)),
              m + 1 < T &&
                (c.push('${' + x),
                c.push(
                  this.generateExpression(u.expressions[m], r.Sequence, R)
                ),
                c.push(x + '}'));
          return c.push('`'), c;
        },
        ModuleSpecifier: function (u, l, o) {
          return this.Literal(u, l, o);
        },
        ImportExpression: function (u, l, o) {
          return we(
            [
              'import(',
              this.generateExpression(u.source, r.Assignment, R),
              ')'
            ],
            r.Call,
            l
          );
        }
      }),
      De(_e.prototype, _e.Expression),
      (_e.prototype.generateExpression = function (u, l, o) {
        var c, m;
        return (
          (m = u.type || t.Property),
          _.verbatim && u.hasOwnProperty(_.verbatim)
            ? Pu(u, l)
            : ((c = this[m](u, l, o)), _.comment && (c = fn(u, c)), Ee(c, u))
        );
      }),
      (_e.prototype.generateStatement = function (u, l) {
        var o, c;
        return (
          (o = this[u.type](u, l)),
          _.comment && (o = fn(u, o)),
          (c = Ee(o).toString()),
          u.type === t.Program &&
            !ae &&
            O === '' &&
            c.charAt(c.length - 1) ===
              `
` &&
            (o = g ? Ee(o).replaceRight(/\s+$/, '') : c.replace(/\s+$/, '')),
          Ee(o, u)
        );
      });
    function Lu(u) {
      var l;
      if (((l = new _e()), Q(u))) return l.generateStatement(u, G);
      if (j(u)) return l.generateExpression(u, r.Sequence, R);
      throw new Error('Unknown node type: ' + u.type);
    }
    function Ru(u, l) {
      var o = S(),
        c,
        m;
      return (
        l != null
          ? (typeof l.indent == 'string' && (o.format.indent.style = l.indent),
            typeof l.base == 'number' && (o.format.indent.base = l.base),
            (l = Fe(o, l)),
            (h = l.format.indent.style),
            typeof l.base == 'string'
              ? (f = l.base)
              : (f = q(h, l.format.indent.base)))
          : ((l = o),
            (h = l.format.indent.style),
            (f = q(h, l.format.indent.base))),
        (D = l.format.json),
        (v = l.format.renumber),
        (k = D ? !1 : l.format.hexadecimal),
        (A = D ? 'double' : l.format.quotes),
        (w = l.format.escapeless),
        (O = l.format.newline),
        (x = l.format.space),
        l.format.compact && (O = x = h = f = ''),
        (P = l.format.parentheses),
        (K = l.format.semicolons),
        (ae = l.format.safeConcatenation),
        (Ae = l.directive),
        (d = D ? null : l.parse),
        (g = l.sourceMap),
        (C = l.sourceCode),
        (y = l.format.preserveBlankLines && C !== null),
        (_ = l),
        g && (e.browser ? (i = Ye.sourceMap.SourceNode) : (i = ur.SourceNode)),
        (c = Lu(u)),
        g
          ? ((m = c.toStringWithSourceMap({
              file: l.file,
              sourceRoot: l.sourceMapRoot
            })),
            l.sourceContent &&
              m.map.setSourceContent(l.sourceMap, l.sourceContent),
            l.sourceMapWithCode ? m : m.map.toString())
          : ((m = { code: c.toString(), map: null }),
            l.sourceMapWithCode ? m : m.code)
      );
    }
    (U = {
      indent: { style: '', base: 0 },
      renumber: !0,
      hexadecimal: !0,
      quotes: 'auto',
      escapeless: !0,
      compact: !0,
      parentheses: !1,
      semicolons: !1
    }),
      (z = S().format),
      (e.version = Ys.version),
      (e.generate = Ru),
      (e.attachComments = a.attachComments),
      (e.Precedence = Fe({}, r)),
      (e.browser = !1),
      (e.FORMAT_MINIFY = U),
      (e.FORMAT_DEFAULTS = z);
  })();
})(yi);
var Ni = { format: { indent: { style: '  ' }, semicolons: !1 } },
  Zs = Object.assign({}, Ni, { format: { newline: '' } }),
  eo = Object.assign({}, Ni);
function at(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return yi.generate(e, t ? Zs : eo);
}
function Sr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return t ? to(e) : at(e);
}
function to(e) {
  var t = at(e, !0);
  return t.endsWith(' }') || (t = ''.concat(t.slice(0, -1), ' }')), t;
}
function Nn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return t ? no(e) : ro(e);
}
function ro(e) {
  var t = at(e);
  return t.endsWith('  }]') && (t = Qn(t)), t;
}
function no(e) {
  var t = at(e, !0);
  return t.startsWith('[    ') && (t = t.replace('[    ', '[')), t;
}
var Oi = function (t) {
    return t.$$typeof === Symbol.for('react.memo');
  },
  io = function (t) {
    return t.$$typeof === Symbol.for('react.forward_ref');
  },
  ye;
(function (e) {
  (e.IDENTIFIER = 'Identifier'),
    (e.LITERAL = 'Literal'),
    (e.OBJECT = 'Object'),
    (e.ARRAY = 'Array'),
    (e.FUNCTION = 'Function'),
    (e.CLASS = 'Class'),
    (e.ELEMENT = 'Element'),
    (e.UNKNOWN = 'Unknown');
})(ye || (ye = {}));
var yr = {
    3: 'abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile',
    5: 'class enum extends super const export import',
    6: 'enum',
    strict:
      'implements interface let package private protected public static yield',
    strictBind: 'eval arguments'
  },
  Cr =
    'break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this',
  uo = {
    5: Cr,
    '5module': Cr + ' export import',
    6: Cr + ' const class extends export import super'
  },
  ao = /^in(stanceof)?$/,
  Kr =
    '\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC',
  Ii =
    '\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF\u1AC0\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F',
  so = new RegExp('[' + Kr + ']'),
  oo = new RegExp('[' + Kr + Ii + ']');
Kr = Ii = null;
var Pi = [
    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48,
    48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5,
    39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22,
    11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2,
    2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111,
    72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 107, 20,
    28, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47,
    15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46,
    39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3,
    21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0,
    72, 26, 230, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95,
    7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 35, 56,
    264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2,
    31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2749, 1070, 4050,
    582, 8634, 568, 8, 30, 114, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129,
    74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8952, 286, 50, 2,
    18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3,
    1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2,
    0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2,
    30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301, 196, 60, 67, 8, 0,
    1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0,
    2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2,
    6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42717, 35, 4148,
    12, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938
  ],
  lo = [
    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1,
    574, 3, 9, 9, 370, 1, 154, 10, 176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9,
    7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0,
    161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193,
    17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12,
    9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9,
    120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7,
    17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2,
    4, 9, 9, 330, 3, 19306, 9, 135, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82,
    0, 12, 1, 19628, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513,
    54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262,
    6, 10, 9, 419, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239
  ];
function _r(e, t) {
  for (var r = 65536, n = 0; n < t.length; n += 2) {
    if (((r += t[n]), r > e)) return !1;
    if (((r += t[n + 1]), r >= e)) return !0;
  }
}
function nt(e, t) {
  return e < 65
    ? e === 36
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && so.test(String.fromCharCode(e))
    : t === !1
    ? !1
    : _r(e, Pi);
}
function pt(e, t) {
  return e < 48
    ? e === 36
    : e < 58
    ? !0
    : e < 65
    ? !1
    : e < 91
    ? !0
    : e < 97
    ? e === 95
    : e < 123
    ? !0
    : e <= 65535
    ? e >= 170 && oo.test(String.fromCharCode(e))
    : t === !1
    ? !1
    : _r(e, Pi) || _r(e, lo);
}
var de = function (t, r) {
  r === void 0 && (r = {}),
    (this.label = t),
    (this.keyword = r.keyword),
    (this.beforeExpr = !!r.beforeExpr),
    (this.startsExpr = !!r.startsExpr),
    (this.isLoop = !!r.isLoop),
    (this.isAssign = !!r.isAssign),
    (this.prefix = !!r.prefix),
    (this.postfix = !!r.postfix),
    (this.binop = r.binop || null),
    (this.updateContext = null);
};
function Ue(e, t) {
  return new de(e, { beforeExpr: !0, binop: t });
}
var qe = { beforeExpr: !0 },
  Me = { startsExpr: !0 },
  lr = {};
function he(e, t) {
  return t === void 0 && (t = {}), (t.keyword = e), (lr[e] = new de(e, t));
}
var p = {
    num: new de('num', Me),
    regexp: new de('regexp', Me),
    string: new de('string', Me),
    name: new de('name', Me),
    eof: new de('eof'),
    bracketL: new de('[', { beforeExpr: !0, startsExpr: !0 }),
    bracketR: new de(']'),
    braceL: new de('{', { beforeExpr: !0, startsExpr: !0 }),
    braceR: new de('}'),
    parenL: new de('(', { beforeExpr: !0, startsExpr: !0 }),
    parenR: new de(')'),
    comma: new de(',', qe),
    semi: new de(';', qe),
    colon: new de(':', qe),
    dot: new de('.'),
    question: new de('?', qe),
    questionDot: new de('?.'),
    arrow: new de('=>', qe),
    template: new de('template'),
    invalidTemplate: new de('invalidTemplate'),
    ellipsis: new de('...', qe),
    backQuote: new de('`', Me),
    dollarBraceL: new de('${', { beforeExpr: !0, startsExpr: !0 }),
    eq: new de('=', { beforeExpr: !0, isAssign: !0 }),
    assign: new de('_=', { beforeExpr: !0, isAssign: !0 }),
    incDec: new de('++/--', { prefix: !0, postfix: !0, startsExpr: !0 }),
    prefix: new de('!/~', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    logicalOR: Ue('||', 1),
    logicalAND: Ue('&&', 2),
    bitwiseOR: Ue('|', 3),
    bitwiseXOR: Ue('^', 4),
    bitwiseAND: Ue('&', 5),
    equality: Ue('==/!=/===/!==', 6),
    relational: Ue('</>/<=/>=', 7),
    bitShift: Ue('<</>>/>>>', 8),
    plusMin: new de('+/-', {
      beforeExpr: !0,
      binop: 9,
      prefix: !0,
      startsExpr: !0
    }),
    modulo: Ue('%', 10),
    star: Ue('*', 10),
    slash: Ue('/', 10),
    starstar: new de('**', { beforeExpr: !0 }),
    coalesce: Ue('??', 1),
    _break: he('break'),
    _case: he('case', qe),
    _catch: he('catch'),
    _continue: he('continue'),
    _debugger: he('debugger'),
    _default: he('default', qe),
    _do: he('do', { isLoop: !0, beforeExpr: !0 }),
    _else: he('else', qe),
    _finally: he('finally'),
    _for: he('for', { isLoop: !0 }),
    _function: he('function', Me),
    _if: he('if'),
    _return: he('return', qe),
    _switch: he('switch'),
    _throw: he('throw', qe),
    _try: he('try'),
    _var: he('var'),
    _const: he('const'),
    _while: he('while', { isLoop: !0 }),
    _with: he('with'),
    _new: he('new', { beforeExpr: !0, startsExpr: !0 }),
    _this: he('this', Me),
    _super: he('super', Me),
    _class: he('class', Me),
    _extends: he('extends', qe),
    _export: he('export'),
    _import: he('import', Me),
    _null: he('null', Me),
    _true: he('true', Me),
    _false: he('false', Me),
    _in: he('in', { beforeExpr: !0, binop: 7 }),
    _instanceof: he('instanceof', { beforeExpr: !0, binop: 7 }),
    _typeof: he('typeof', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _void: he('void', { beforeExpr: !0, prefix: !0, startsExpr: !0 }),
    _delete: he('delete', { beforeExpr: !0, prefix: !0, startsExpr: !0 })
  },
  Ve = /\r\n?|\n|\u2028|\u2029/,
  Ft = new RegExp(Ve.source, 'g');
function Nt(e, t) {
  return e === 10 || e === 13 || (!t && (e === 8232 || e === 8233));
}
var Qr = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
  Ge = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
  Li = Object.prototype,
  co = Li.hasOwnProperty,
  fo = Li.toString;
function cr(e, t) {
  return co.call(e, t);
}
var On =
  Array.isArray ||
  function (e) {
    return fo.call(e) === '[object Array]';
  };
function ct(e) {
  return new RegExp('^(?:' + e.replace(/ /g, '|') + ')$');
}
var bt = function (t, r) {
  (this.line = t), (this.column = r);
};
bt.prototype.offset = function (t) {
  return new bt(this.line, this.column + t);
};
var qt = function (t, r, n) {
  (this.start = r),
    (this.end = n),
    t.sourceFile !== null && (this.source = t.sourceFile);
};
function Xr(e, t) {
  for (var r = 1, n = 0; ; ) {
    Ft.lastIndex = n;
    var i = Ft.exec(e);
    if (i && i.index < t) ++r, (n = i.index + i[0].length);
    else return new bt(r, t - n);
  }
}
var Zt = {
  ecmaVersion: 10,
  sourceType: 'script',
  onInsertedSemicolon: null,
  onTrailingComma: null,
  allowReserved: null,
  allowReturnOutsideFunction: !1,
  allowImportExportEverywhere: !1,
  allowAwaitOutsideFunction: !1,
  allowHashBang: !1,
  locations: !1,
  onToken: null,
  onComment: null,
  ranges: !1,
  program: null,
  sourceFile: null,
  directSourceFile: null,
  preserveParens: !1
};
function po(e) {
  var t = {};
  for (var r in Zt) t[r] = e && cr(e, r) ? e[r] : Zt[r];
  if (
    (t.ecmaVersion >= 2015 && (t.ecmaVersion -= 2009),
    t.allowReserved == null && (t.allowReserved = t.ecmaVersion < 5),
    On(t.onToken))
  ) {
    var n = t.onToken;
    t.onToken = function (i) {
      return n.push(i);
    };
  }
  return On(t.onComment) && (t.onComment = ho(t, t.onComment)), t;
}
function ho(e, t) {
  return function (r, n, i, a, s, f) {
    var h = { type: r ? 'Block' : 'Line', value: n, start: i, end: a };
    e.locations && (h.loc = new qt(this, s, f)),
      e.ranges && (h.range = [i, a]),
      t.push(h);
  };
}
var Vt = 1,
  Wt = 2,
  Yr = Vt | Wt,
  Ri = 4,
  Mi = 8,
  ji = 16,
  Vi = 32,
  Ui = 64,
  qi = 128;
function Zr(e, t) {
  return Wt | (e ? Ri : 0) | (t ? Mi : 0);
}
var In = 0,
  en = 1,
  tt = 2,
  Wi = 3,
  Gi = 4,
  zi = 5,
  xe = function (t, r, n) {
    (this.options = t = po(t)),
      (this.sourceFile = t.sourceFile),
      (this.keywords = ct(
        uo[t.ecmaVersion >= 6 ? 6 : t.sourceType === 'module' ? '5module' : 5]
      ));
    var i = '';
    if (t.allowReserved !== !0) {
      for (var a = t.ecmaVersion; !(i = yr[a]); a--);
      t.sourceType === 'module' && (i += ' await');
    }
    this.reservedWords = ct(i);
    var s = (i ? i + ' ' : '') + yr.strict;
    (this.reservedWordsStrict = ct(s)),
      (this.reservedWordsStrictBind = ct(s + ' ' + yr.strictBind)),
      (this.input = String(r)),
      (this.containsEsc = !1),
      n
        ? ((this.pos = n),
          (this.lineStart =
            this.input.lastIndexOf(
              `
`,
              n - 1
            ) + 1),
          (this.curLine = this.input.slice(0, this.lineStart).split(Ve).length))
        : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
      (this.type = p.eof),
      (this.value = null),
      (this.start = this.end = this.pos),
      (this.startLoc = this.endLoc = this.curPosition()),
      (this.lastTokEndLoc = this.lastTokStartLoc = null),
      (this.lastTokStart = this.lastTokEnd = this.pos),
      (this.context = this.initialContext()),
      (this.exprAllowed = !0),
      (this.inModule = t.sourceType === 'module'),
      (this.strict = this.inModule || this.strictDirective(this.pos)),
      (this.potentialArrowAt = -1),
      (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
      (this.labels = []),
      (this.undefinedExports = {}),
      this.pos === 0 &&
        t.allowHashBang &&
        this.input.slice(0, 2) === '#!' &&
        this.skipLineComment(2),
      (this.scopeStack = []),
      this.enterScope(Vt),
      (this.regexpState = null);
  },
  ht = {
    inFunction: { configurable: !0 },
    inGenerator: { configurable: !0 },
    inAsync: { configurable: !0 },
    allowSuper: { configurable: !0 },
    allowDirectSuper: { configurable: !0 },
    treatFunctionsAsVar: { configurable: !0 }
  };
xe.prototype.parse = function () {
  var t = this.options.program || this.startNode();
  return this.nextToken(), this.parseTopLevel(t);
};
ht.inFunction.get = function () {
  return (this.currentVarScope().flags & Wt) > 0;
};
ht.inGenerator.get = function () {
  return (this.currentVarScope().flags & Mi) > 0;
};
ht.inAsync.get = function () {
  return (this.currentVarScope().flags & Ri) > 0;
};
ht.allowSuper.get = function () {
  return (this.currentThisScope().flags & Ui) > 0;
};
ht.allowDirectSuper.get = function () {
  return (this.currentThisScope().flags & qi) > 0;
};
ht.treatFunctionsAsVar.get = function () {
  return this.treatFunctionsAsVarInScope(this.currentScope());
};
xe.prototype.inNonArrowFunction = function () {
  return (this.currentThisScope().flags & Wt) > 0;
};
xe.extend = function () {
  for (var t = [], r = arguments.length; r--; ) t[r] = arguments[r];
  for (var n = this, i = 0; i < t.length; i++) n = t[i](n);
  return n;
};
xe.parse = function (t, r) {
  return new this(r, t).parse();
};
xe.parseExpressionAt = function (t, r, n) {
  var i = new this(n, t, r);
  return i.nextToken(), i.parseExpression();
};
xe.tokenizer = function (t, r) {
  return new this(r, t);
};
Object.defineProperties(xe.prototype, ht);
var Pe = xe.prototype,
  mo = /^(?:'((?:\\.|[^'\\])*?)'|"((?:\\.|[^"\\])*?)")/;
Pe.strictDirective = function (e) {
  for (;;) {
    (Ge.lastIndex = e), (e += Ge.exec(this.input)[0].length);
    var t = mo.exec(this.input.slice(e));
    if (!t) return !1;
    if ((t[1] || t[2]) === 'use strict') {
      Ge.lastIndex = e + t[0].length;
      var r = Ge.exec(this.input),
        n = r.index + r[0].length,
        i = this.input.charAt(n);
      return (
        i === ';' ||
        i === '}' ||
        (Ve.test(r[0]) &&
          !(
            /[(`.[+\-/*%<>=,?^&]/.test(i) ||
            (i === '!' && this.input.charAt(n + 1) === '=')
          ))
      );
    }
    (e += t[0].length),
      (Ge.lastIndex = e),
      (e += Ge.exec(this.input)[0].length),
      this.input[e] === ';' && e++;
  }
};
Pe.eat = function (e) {
  return this.type === e ? (this.next(), !0) : !1;
};
Pe.isContextual = function (e) {
  return this.type === p.name && this.value === e && !this.containsEsc;
};
Pe.eatContextual = function (e) {
  return this.isContextual(e) ? (this.next(), !0) : !1;
};
Pe.expectContextual = function (e) {
  this.eatContextual(e) || this.unexpected();
};
Pe.canInsertSemicolon = function () {
  return (
    this.type === p.eof ||
    this.type === p.braceR ||
    Ve.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
Pe.insertSemicolon = function () {
  if (this.canInsertSemicolon())
    return (
      this.options.onInsertedSemicolon &&
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
      !0
    );
};
Pe.semicolon = function () {
  !this.eat(p.semi) && !this.insertSemicolon() && this.unexpected();
};
Pe.afterTrailingComma = function (e, t) {
  if (this.type === e)
    return (
      this.options.onTrailingComma &&
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
      t || this.next(),
      !0
    );
};
Pe.expect = function (e) {
  this.eat(e) || this.unexpected();
};
Pe.unexpected = function (e) {
  this.raise(e != null ? e : this.start, 'Unexpected token');
};
function fr() {
  this.shorthandAssign =
    this.trailingComma =
    this.parenthesizedAssign =
    this.parenthesizedBind =
    this.doubleProto =
      -1;
}
Pe.checkPatternErrors = function (e, t) {
  if (!!e) {
    e.trailingComma > -1 &&
      this.raiseRecoverable(
        e.trailingComma,
        'Comma is not permitted after the rest element'
      );
    var r = t ? e.parenthesizedAssign : e.parenthesizedBind;
    r > -1 && this.raiseRecoverable(r, 'Parenthesized pattern');
  }
};
Pe.checkExpressionErrors = function (e, t) {
  if (!e) return !1;
  var r = e.shorthandAssign,
    n = e.doubleProto;
  if (!t) return r >= 0 || n >= 0;
  r >= 0 &&
    this.raise(
      r,
      'Shorthand property assignments are valid only in destructuring patterns'
    ),
    n >= 0 && this.raiseRecoverable(n, 'Redefinition of __proto__ property');
};
Pe.checkYieldAwaitInDefaultParams = function () {
  this.yieldPos &&
    (!this.awaitPos || this.yieldPos < this.awaitPos) &&
    this.raise(this.yieldPos, 'Yield expression cannot be a default value'),
    this.awaitPos &&
      this.raise(this.awaitPos, 'Await expression cannot be a default value');
};
Pe.isSimpleAssignTarget = function (e) {
  return e.type === 'ParenthesizedExpression'
    ? this.isSimpleAssignTarget(e.expression)
    : e.type === 'Identifier' || e.type === 'MemberExpression';
};
var ue = xe.prototype;
ue.parseTopLevel = function (e) {
  var t = {};
  for (e.body || (e.body = []); this.type !== p.eof; ) {
    var r = this.parseStatement(null, !0, t);
    e.body.push(r);
  }
  if (this.inModule)
    for (
      var n = 0, i = Object.keys(this.undefinedExports);
      n < i.length;
      n += 1
    ) {
      var a = i[n];
      this.raiseRecoverable(
        this.undefinedExports[a].start,
        "Export '" + a + "' is not defined"
      );
    }
  return (
    this.adaptDirectivePrologue(e.body),
    this.next(),
    (e.sourceType = this.options.sourceType),
    this.finishNode(e, 'Program')
  );
};
var tn = { kind: 'loop' },
  go = { kind: 'switch' };
ue.isLet = function (e) {
  if (this.options.ecmaVersion < 6 || !this.isContextual('let')) return !1;
  Ge.lastIndex = this.pos;
  var t = Ge.exec(this.input),
    r = this.pos + t[0].length,
    n = this.input.charCodeAt(r);
  if (n === 91) return !0;
  if (e) return !1;
  if (n === 123) return !0;
  if (nt(n, !0)) {
    for (var i = r + 1; pt(this.input.charCodeAt(i), !0); ) ++i;
    var a = this.input.slice(r, i);
    if (!ao.test(a)) return !0;
  }
  return !1;
};
ue.isAsyncFunction = function () {
  if (this.options.ecmaVersion < 8 || !this.isContextual('async')) return !1;
  Ge.lastIndex = this.pos;
  var e = Ge.exec(this.input),
    t = this.pos + e[0].length;
  return (
    !Ve.test(this.input.slice(this.pos, t)) &&
    this.input.slice(t, t + 8) === 'function' &&
    (t + 8 === this.input.length || !pt(this.input.charAt(t + 8)))
  );
};
ue.parseStatement = function (e, t, r) {
  var n = this.type,
    i = this.startNode(),
    a;
  switch ((this.isLet(e) && ((n = p._var), (a = 'let')), n)) {
    case p._break:
    case p._continue:
      return this.parseBreakContinueStatement(i, n.keyword);
    case p._debugger:
      return this.parseDebuggerStatement(i);
    case p._do:
      return this.parseDoStatement(i);
    case p._for:
      return this.parseForStatement(i);
    case p._function:
      return (
        e &&
          (this.strict || (e !== 'if' && e !== 'label')) &&
          this.options.ecmaVersion >= 6 &&
          this.unexpected(),
        this.parseFunctionStatement(i, !1, !e)
      );
    case p._class:
      return e && this.unexpected(), this.parseClass(i, !0);
    case p._if:
      return this.parseIfStatement(i);
    case p._return:
      return this.parseReturnStatement(i);
    case p._switch:
      return this.parseSwitchStatement(i);
    case p._throw:
      return this.parseThrowStatement(i);
    case p._try:
      return this.parseTryStatement(i);
    case p._const:
    case p._var:
      return (
        (a = a || this.value),
        e && a !== 'var' && this.unexpected(),
        this.parseVarStatement(i, a)
      );
    case p._while:
      return this.parseWhileStatement(i);
    case p._with:
      return this.parseWithStatement(i);
    case p.braceL:
      return this.parseBlock(!0, i);
    case p.semi:
      return this.parseEmptyStatement(i);
    case p._export:
    case p._import:
      if (this.options.ecmaVersion > 10 && n === p._import) {
        Ge.lastIndex = this.pos;
        var s = Ge.exec(this.input),
          f = this.pos + s[0].length,
          h = this.input.charCodeAt(f);
        if (h === 40 || h === 46)
          return this.parseExpressionStatement(i, this.parseExpression());
      }
      return (
        this.options.allowImportExportEverywhere ||
          (t ||
            this.raise(
              this.start,
              "'import' and 'export' may only appear at the top level"
            ),
          this.inModule ||
            this.raise(
              this.start,
              "'import' and 'export' may appear only with 'sourceType: module'"
            )),
        n === p._import ? this.parseImport(i) : this.parseExport(i, r)
      );
    default:
      if (this.isAsyncFunction())
        return (
          e && this.unexpected(),
          this.next(),
          this.parseFunctionStatement(i, !0, !e)
        );
      var D = this.value,
        v = this.parseExpression();
      return n === p.name && v.type === 'Identifier' && this.eat(p.colon)
        ? this.parseLabeledStatement(i, D, v, e)
        : this.parseExpressionStatement(i, v);
  }
};
ue.parseBreakContinueStatement = function (e, t) {
  var r = t === 'break';
  this.next(),
    this.eat(p.semi) || this.insertSemicolon()
      ? (e.label = null)
      : this.type !== p.name
      ? this.unexpected()
      : ((e.label = this.parseIdent()), this.semicolon());
  for (var n = 0; n < this.labels.length; ++n) {
    var i = this.labels[n];
    if (
      (e.label == null || i.name === e.label.name) &&
      ((i.kind != null && (r || i.kind === 'loop')) || (e.label && r))
    )
      break;
  }
  return (
    n === this.labels.length && this.raise(e.start, 'Unsyntactic ' + t),
    this.finishNode(e, r ? 'BreakStatement' : 'ContinueStatement')
  );
};
ue.parseDebuggerStatement = function (e) {
  return this.next(), this.semicolon(), this.finishNode(e, 'DebuggerStatement');
};
ue.parseDoStatement = function (e) {
  return (
    this.next(),
    this.labels.push(tn),
    (e.body = this.parseStatement('do')),
    this.labels.pop(),
    this.expect(p._while),
    (e.test = this.parseParenExpression()),
    this.options.ecmaVersion >= 6 ? this.eat(p.semi) : this.semicolon(),
    this.finishNode(e, 'DoWhileStatement')
  );
};
ue.parseForStatement = function (e) {
  this.next();
  var t =
    this.options.ecmaVersion >= 9 &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
    this.eatContextual('await')
      ? this.lastTokStart
      : -1;
  if (
    (this.labels.push(tn),
    this.enterScope(0),
    this.expect(p.parenL),
    this.type === p.semi)
  )
    return t > -1 && this.unexpected(t), this.parseFor(e, null);
  var r = this.isLet();
  if (this.type === p._var || this.type === p._const || r) {
    var n = this.startNode(),
      i = r ? 'let' : this.value;
    return (
      this.next(),
      this.parseVar(n, !0, i),
      this.finishNode(n, 'VariableDeclaration'),
      (this.type === p._in ||
        (this.options.ecmaVersion >= 6 && this.isContextual('of'))) &&
      n.declarations.length === 1
        ? (this.options.ecmaVersion >= 9 &&
            (this.type === p._in
              ? t > -1 && this.unexpected(t)
              : (e.await = t > -1)),
          this.parseForIn(e, n))
        : (t > -1 && this.unexpected(t), this.parseFor(e, n))
    );
  }
  var a = new fr(),
    s = this.parseExpression(!0, a);
  return this.type === p._in ||
    (this.options.ecmaVersion >= 6 && this.isContextual('of'))
    ? (this.options.ecmaVersion >= 9 &&
        (this.type === p._in
          ? t > -1 && this.unexpected(t)
          : (e.await = t > -1)),
      this.toAssignable(s, !1, a),
      this.checkLVal(s),
      this.parseForIn(e, s))
    : (this.checkExpressionErrors(a, !0),
      t > -1 && this.unexpected(t),
      this.parseFor(e, s));
};
ue.parseFunctionStatement = function (e, t, r) {
  return this.next(), this.parseFunction(e, Mt | (r ? 0 : Br), !1, t);
};
ue.parseIfStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    (e.consequent = this.parseStatement('if')),
    (e.alternate = this.eat(p._else) ? this.parseStatement('if') : null),
    this.finishNode(e, 'IfStatement')
  );
};
ue.parseReturnStatement = function (e) {
  return (
    !this.inFunction &&
      !this.options.allowReturnOutsideFunction &&
      this.raise(this.start, "'return' outside of function"),
    this.next(),
    this.eat(p.semi) || this.insertSemicolon()
      ? (e.argument = null)
      : ((e.argument = this.parseExpression()), this.semicolon()),
    this.finishNode(e, 'ReturnStatement')
  );
};
ue.parseSwitchStatement = function (e) {
  this.next(),
    (e.discriminant = this.parseParenExpression()),
    (e.cases = []),
    this.expect(p.braceL),
    this.labels.push(go),
    this.enterScope(0);
  for (var t, r = !1; this.type !== p.braceR; )
    if (this.type === p._case || this.type === p._default) {
      var n = this.type === p._case;
      t && this.finishNode(t, 'SwitchCase'),
        e.cases.push((t = this.startNode())),
        (t.consequent = []),
        this.next(),
        n
          ? (t.test = this.parseExpression())
          : (r &&
              this.raiseRecoverable(
                this.lastTokStart,
                'Multiple default clauses'
              ),
            (r = !0),
            (t.test = null)),
        this.expect(p.colon);
    } else t || this.unexpected(), t.consequent.push(this.parseStatement(null));
  return (
    this.exitScope(),
    t && this.finishNode(t, 'SwitchCase'),
    this.next(),
    this.labels.pop(),
    this.finishNode(e, 'SwitchStatement')
  );
};
ue.parseThrowStatement = function (e) {
  return (
    this.next(),
    Ve.test(this.input.slice(this.lastTokEnd, this.start)) &&
      this.raise(this.lastTokEnd, 'Illegal newline after throw'),
    (e.argument = this.parseExpression()),
    this.semicolon(),
    this.finishNode(e, 'ThrowStatement')
  );
};
var Ao = [];
ue.parseTryStatement = function (e) {
  if (
    (this.next(),
    (e.block = this.parseBlock()),
    (e.handler = null),
    this.type === p._catch)
  ) {
    var t = this.startNode();
    if ((this.next(), this.eat(p.parenL))) {
      t.param = this.parseBindingAtom();
      var r = t.param.type === 'Identifier';
      this.enterScope(r ? Vi : 0),
        this.checkLVal(t.param, r ? Gi : tt),
        this.expect(p.parenR);
    } else
      this.options.ecmaVersion < 10 && this.unexpected(),
        (t.param = null),
        this.enterScope(0);
    (t.body = this.parseBlock(!1)),
      this.exitScope(),
      (e.handler = this.finishNode(t, 'CatchClause'));
  }
  return (
    (e.finalizer = this.eat(p._finally) ? this.parseBlock() : null),
    !e.handler &&
      !e.finalizer &&
      this.raise(e.start, 'Missing catch or finally clause'),
    this.finishNode(e, 'TryStatement')
  );
};
ue.parseVarStatement = function (e, t) {
  return (
    this.next(),
    this.parseVar(e, !1, t),
    this.semicolon(),
    this.finishNode(e, 'VariableDeclaration')
  );
};
ue.parseWhileStatement = function (e) {
  return (
    this.next(),
    (e.test = this.parseParenExpression()),
    this.labels.push(tn),
    (e.body = this.parseStatement('while')),
    this.labels.pop(),
    this.finishNode(e, 'WhileStatement')
  );
};
ue.parseWithStatement = function (e) {
  return (
    this.strict && this.raise(this.start, "'with' in strict mode"),
    this.next(),
    (e.object = this.parseParenExpression()),
    (e.body = this.parseStatement('with')),
    this.finishNode(e, 'WithStatement')
  );
};
ue.parseEmptyStatement = function (e) {
  return this.next(), this.finishNode(e, 'EmptyStatement');
};
ue.parseLabeledStatement = function (e, t, r, n) {
  for (var i = 0, a = this.labels; i < a.length; i += 1) {
    var s = a[i];
    s.name === t &&
      this.raise(r.start, "Label '" + t + "' is already declared");
  }
  for (
    var f = this.type.isLoop
        ? 'loop'
        : this.type === p._switch
        ? 'switch'
        : null,
      h = this.labels.length - 1;
    h >= 0;
    h--
  ) {
    var D = this.labels[h];
    if (D.statementStart === e.start)
      (D.statementStart = this.start), (D.kind = f);
    else break;
  }
  return (
    this.labels.push({ name: t, kind: f, statementStart: this.start }),
    (e.body = this.parseStatement(
      n ? (n.indexOf('label') === -1 ? n + 'label' : n) : 'label'
    )),
    this.labels.pop(),
    (e.label = r),
    this.finishNode(e, 'LabeledStatement')
  );
};
ue.parseExpressionStatement = function (e, t) {
  return (
    (e.expression = t),
    this.semicolon(),
    this.finishNode(e, 'ExpressionStatement')
  );
};
ue.parseBlock = function (e, t, r) {
  for (
    e === void 0 && (e = !0),
      t === void 0 && (t = this.startNode()),
      t.body = [],
      this.expect(p.braceL),
      e && this.enterScope(0);
    this.type !== p.braceR;

  ) {
    var n = this.parseStatement(null);
    t.body.push(n);
  }
  return (
    r && (this.strict = !1),
    this.next(),
    e && this.exitScope(),
    this.finishNode(t, 'BlockStatement')
  );
};
ue.parseFor = function (e, t) {
  return (
    (e.init = t),
    this.expect(p.semi),
    (e.test = this.type === p.semi ? null : this.parseExpression()),
    this.expect(p.semi),
    (e.update = this.type === p.parenR ? null : this.parseExpression()),
    this.expect(p.parenR),
    (e.body = this.parseStatement('for')),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, 'ForStatement')
  );
};
ue.parseForIn = function (e, t) {
  var r = this.type === p._in;
  return (
    this.next(),
    t.type === 'VariableDeclaration' &&
    t.declarations[0].init != null &&
    (!r ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      t.kind !== 'var' ||
      t.declarations[0].id.type !== 'Identifier')
      ? this.raise(
          t.start,
          (r ? 'for-in' : 'for-of') +
            ' loop variable declaration may not have an initializer'
        )
      : t.type === 'AssignmentPattern' &&
        this.raise(t.start, 'Invalid left-hand side in for-loop'),
    (e.left = t),
    (e.right = r ? this.parseExpression() : this.parseMaybeAssign()),
    this.expect(p.parenR),
    (e.body = this.parseStatement('for')),
    this.exitScope(),
    this.labels.pop(),
    this.finishNode(e, r ? 'ForInStatement' : 'ForOfStatement')
  );
};
ue.parseVar = function (e, t, r) {
  for (e.declarations = [], e.kind = r; ; ) {
    var n = this.startNode();
    if (
      (this.parseVarId(n, r),
      this.eat(p.eq)
        ? (n.init = this.parseMaybeAssign(t))
        : r === 'const' &&
          !(
            this.type === p._in ||
            (this.options.ecmaVersion >= 6 && this.isContextual('of'))
          )
        ? this.unexpected()
        : n.id.type !== 'Identifier' &&
          !(t && (this.type === p._in || this.isContextual('of')))
        ? this.raise(
            this.lastTokEnd,
            'Complex binding patterns require an initialization value'
          )
        : (n.init = null),
      e.declarations.push(this.finishNode(n, 'VariableDeclarator')),
      !this.eat(p.comma))
    )
      break;
  }
  return e;
};
ue.parseVarId = function (e, t) {
  (e.id = this.parseBindingAtom()),
    this.checkLVal(e.id, t === 'var' ? en : tt, !1);
};
var Mt = 1,
  Br = 2,
  $i = 4;
ue.parseFunction = function (e, t, r, n) {
  this.initFunction(e),
    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !n)) &&
      (this.type === p.star && t & Br && this.unexpected(),
      (e.generator = this.eat(p.star))),
    this.options.ecmaVersion >= 8 && (e.async = !!n),
    t & Mt &&
      ((e.id = t & $i && this.type !== p.name ? null : this.parseIdent()),
      e.id &&
        !(t & Br) &&
        this.checkLVal(
          e.id,
          this.strict || e.generator || e.async
            ? this.treatFunctionsAsVar
              ? en
              : tt
            : Wi
        ));
  var i = this.yieldPos,
    a = this.awaitPos,
    s = this.awaitIdentPos;
  return (
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(Zr(e.async, e.generator)),
    t & Mt || (e.id = this.type === p.name ? this.parseIdent() : null),
    this.parseFunctionParams(e),
    this.parseFunctionBody(e, r, !1),
    (this.yieldPos = i),
    (this.awaitPos = a),
    (this.awaitIdentPos = s),
    this.finishNode(e, t & Mt ? 'FunctionDeclaration' : 'FunctionExpression')
  );
};
ue.parseFunctionParams = function (e) {
  this.expect(p.parenL),
    (e.params = this.parseBindingList(
      p.parenR,
      !1,
      this.options.ecmaVersion >= 8
    )),
    this.checkYieldAwaitInDefaultParams();
};
ue.parseClass = function (e, t) {
  this.next();
  var r = this.strict;
  (this.strict = !0), this.parseClassId(e, t), this.parseClassSuper(e);
  var n = this.startNode(),
    i = !1;
  for (n.body = [], this.expect(p.braceL); this.type !== p.braceR; ) {
    var a = this.parseClassElement(e.superClass !== null);
    a &&
      (n.body.push(a),
      a.type === 'MethodDefinition' &&
        a.kind === 'constructor' &&
        (i && this.raise(a.start, 'Duplicate constructor in the same class'),
        (i = !0)));
  }
  return (
    (this.strict = r),
    this.next(),
    (e.body = this.finishNode(n, 'ClassBody')),
    this.finishNode(e, t ? 'ClassDeclaration' : 'ClassExpression')
  );
};
ue.parseClassElement = function (e) {
  var t = this;
  if (this.eat(p.semi)) return null;
  var r = this.startNode(),
    n = function (h, D) {
      D === void 0 && (D = !1);
      var v = t.start,
        k = t.startLoc;
      return t.eatContextual(h)
        ? t.type !== p.parenL && (!D || !t.canInsertSemicolon())
          ? !0
          : (r.key && t.unexpected(),
            (r.computed = !1),
            (r.key = t.startNodeAt(v, k)),
            (r.key.name = h),
            t.finishNode(r.key, 'Identifier'),
            !1)
        : !1;
    };
  (r.kind = 'method'), (r.static = n('static'));
  var i = this.eat(p.star),
    a = !1;
  i ||
    (this.options.ecmaVersion >= 8 && n('async', !0)
      ? ((a = !0), (i = this.options.ecmaVersion >= 9 && this.eat(p.star)))
      : n('get')
      ? (r.kind = 'get')
      : n('set') && (r.kind = 'set')),
    r.key || this.parsePropertyName(r);
  var s = r.key,
    f = !1;
  return (
    !r.computed &&
    !r.static &&
    ((s.type === 'Identifier' && s.name === 'constructor') ||
      (s.type === 'Literal' && s.value === 'constructor'))
      ? (r.kind !== 'method' &&
          this.raise(s.start, "Constructor can't have get/set modifier"),
        i && this.raise(s.start, "Constructor can't be a generator"),
        a && this.raise(s.start, "Constructor can't be an async method"),
        (r.kind = 'constructor'),
        (f = e))
      : r.static &&
        s.type === 'Identifier' &&
        s.name === 'prototype' &&
        this.raise(
          s.start,
          'Classes may not have a static property named prototype'
        ),
    this.parseClassMethod(r, i, a, f),
    r.kind === 'get' &&
      r.value.params.length !== 0 &&
      this.raiseRecoverable(r.value.start, 'getter should have no params'),
    r.kind === 'set' &&
      r.value.params.length !== 1 &&
      this.raiseRecoverable(
        r.value.start,
        'setter should have exactly one param'
      ),
    r.kind === 'set' &&
      r.value.params[0].type === 'RestElement' &&
      this.raiseRecoverable(
        r.value.params[0].start,
        'Setter cannot use rest params'
      ),
    r
  );
};
ue.parseClassMethod = function (e, t, r, n) {
  return (
    (e.value = this.parseMethod(t, r, n)),
    this.finishNode(e, 'MethodDefinition')
  );
};
ue.parseClassId = function (e, t) {
  this.type === p.name
    ? ((e.id = this.parseIdent()), t && this.checkLVal(e.id, tt, !1))
    : (t === !0 && this.unexpected(), (e.id = null));
};
ue.parseClassSuper = function (e) {
  e.superClass = this.eat(p._extends) ? this.parseExprSubscripts() : null;
};
ue.parseExport = function (e, t) {
  if ((this.next(), this.eat(p.star)))
    return (
      this.options.ecmaVersion >= 11 &&
        (this.eatContextual('as')
          ? ((e.exported = this.parseIdent(!0)),
            this.checkExport(t, e.exported.name, this.lastTokStart))
          : (e.exported = null)),
      this.expectContextual('from'),
      this.type !== p.string && this.unexpected(),
      (e.source = this.parseExprAtom()),
      this.semicolon(),
      this.finishNode(e, 'ExportAllDeclaration')
    );
  if (this.eat(p._default)) {
    this.checkExport(t, 'default', this.lastTokStart);
    var r;
    if (this.type === p._function || (r = this.isAsyncFunction())) {
      var n = this.startNode();
      this.next(),
        r && this.next(),
        (e.declaration = this.parseFunction(n, Mt | $i, !1, r));
    } else if (this.type === p._class) {
      var i = this.startNode();
      e.declaration = this.parseClass(i, 'nullableID');
    } else (e.declaration = this.parseMaybeAssign()), this.semicolon();
    return this.finishNode(e, 'ExportDefaultDeclaration');
  }
  if (this.shouldParseExportStatement())
    (e.declaration = this.parseStatement(null)),
      e.declaration.type === 'VariableDeclaration'
        ? this.checkVariableExport(t, e.declaration.declarations)
        : this.checkExport(t, e.declaration.id.name, e.declaration.id.start),
      (e.specifiers = []),
      (e.source = null);
  else {
    if (
      ((e.declaration = null),
      (e.specifiers = this.parseExportSpecifiers(t)),
      this.eatContextual('from'))
    )
      this.type !== p.string && this.unexpected(),
        (e.source = this.parseExprAtom());
    else {
      for (var a = 0, s = e.specifiers; a < s.length; a += 1) {
        var f = s[a];
        this.checkUnreserved(f.local), this.checkLocalExport(f.local);
      }
      e.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(e, 'ExportNamedDeclaration');
};
ue.checkExport = function (e, t, r) {
  !e ||
    (cr(e, t) && this.raiseRecoverable(r, "Duplicate export '" + t + "'"),
    (e[t] = !0));
};
ue.checkPatternExport = function (e, t) {
  var r = t.type;
  if (r === 'Identifier') this.checkExport(e, t.name, t.start);
  else if (r === 'ObjectPattern')
    for (var n = 0, i = t.properties; n < i.length; n += 1) {
      var a = i[n];
      this.checkPatternExport(e, a);
    }
  else if (r === 'ArrayPattern')
    for (var s = 0, f = t.elements; s < f.length; s += 1) {
      var h = f[s];
      h && this.checkPatternExport(e, h);
    }
  else
    r === 'Property'
      ? this.checkPatternExport(e, t.value)
      : r === 'AssignmentPattern'
      ? this.checkPatternExport(e, t.left)
      : r === 'RestElement'
      ? this.checkPatternExport(e, t.argument)
      : r === 'ParenthesizedExpression' &&
        this.checkPatternExport(e, t.expression);
};
ue.checkVariableExport = function (e, t) {
  if (!!e)
    for (var r = 0, n = t; r < n.length; r += 1) {
      var i = n[r];
      this.checkPatternExport(e, i.id);
    }
};
ue.shouldParseExportStatement = function () {
  return (
    this.type.keyword === 'var' ||
    this.type.keyword === 'const' ||
    this.type.keyword === 'class' ||
    this.type.keyword === 'function' ||
    this.isLet() ||
    this.isAsyncFunction()
  );
};
ue.parseExportSpecifiers = function (e) {
  var t = [],
    r = !0;
  for (this.expect(p.braceL); !this.eat(p.braceR); ) {
    if (r) r = !1;
    else if ((this.expect(p.comma), this.afterTrailingComma(p.braceR))) break;
    var n = this.startNode();
    (n.local = this.parseIdent(!0)),
      (n.exported = this.eatContextual('as') ? this.parseIdent(!0) : n.local),
      this.checkExport(e, n.exported.name, n.exported.start),
      t.push(this.finishNode(n, 'ExportSpecifier'));
  }
  return t;
};
ue.parseImport = function (e) {
  return (
    this.next(),
    this.type === p.string
      ? ((e.specifiers = Ao), (e.source = this.parseExprAtom()))
      : ((e.specifiers = this.parseImportSpecifiers()),
        this.expectContextual('from'),
        (e.source =
          this.type === p.string ? this.parseExprAtom() : this.unexpected())),
    this.semicolon(),
    this.finishNode(e, 'ImportDeclaration')
  );
};
ue.parseImportSpecifiers = function () {
  var e = [],
    t = !0;
  if (this.type === p.name) {
    var r = this.startNode();
    if (
      ((r.local = this.parseIdent()),
      this.checkLVal(r.local, tt),
      e.push(this.finishNode(r, 'ImportDefaultSpecifier')),
      !this.eat(p.comma))
    )
      return e;
  }
  if (this.type === p.star) {
    var n = this.startNode();
    return (
      this.next(),
      this.expectContextual('as'),
      (n.local = this.parseIdent()),
      this.checkLVal(n.local, tt),
      e.push(this.finishNode(n, 'ImportNamespaceSpecifier')),
      e
    );
  }
  for (this.expect(p.braceL); !this.eat(p.braceR); ) {
    if (t) t = !1;
    else if ((this.expect(p.comma), this.afterTrailingComma(p.braceR))) break;
    var i = this.startNode();
    (i.imported = this.parseIdent(!0)),
      this.eatContextual('as')
        ? (i.local = this.parseIdent())
        : (this.checkUnreserved(i.imported), (i.local = i.imported)),
      this.checkLVal(i.local, tt),
      e.push(this.finishNode(i, 'ImportSpecifier'));
  }
  return e;
};
ue.adaptDirectivePrologue = function (e) {
  for (var t = 0; t < e.length && this.isDirectiveCandidate(e[t]); ++t)
    e[t].directive = e[t].expression.raw.slice(1, -1);
};
ue.isDirectiveCandidate = function (e) {
  return (
    e.type === 'ExpressionStatement' &&
    e.expression.type === 'Literal' &&
    typeof e.expression.value == 'string' &&
    (this.input[e.start] === '"' || this.input[e.start] === "'")
  );
};
var it = xe.prototype;
it.toAssignable = function (e, t, r) {
  if (this.options.ecmaVersion >= 6 && e)
    switch (e.type) {
      case 'Identifier':
        this.inAsync &&
          e.name === 'await' &&
          this.raise(
            e.start,
            "Cannot use 'await' as identifier inside an async function"
          );
        break;
      case 'ObjectPattern':
      case 'ArrayPattern':
      case 'RestElement':
        break;
      case 'ObjectExpression':
        (e.type = 'ObjectPattern'), r && this.checkPatternErrors(r, !0);
        for (var n = 0, i = e.properties; n < i.length; n += 1) {
          var a = i[n];
          this.toAssignable(a, t),
            a.type === 'RestElement' &&
              (a.argument.type === 'ArrayPattern' ||
                a.argument.type === 'ObjectPattern') &&
              this.raise(a.argument.start, 'Unexpected token');
        }
        break;
      case 'Property':
        e.kind !== 'init' &&
          this.raise(
            e.key.start,
            "Object pattern can't contain getter or setter"
          ),
          this.toAssignable(e.value, t);
        break;
      case 'ArrayExpression':
        (e.type = 'ArrayPattern'),
          r && this.checkPatternErrors(r, !0),
          this.toAssignableList(e.elements, t);
        break;
      case 'SpreadElement':
        (e.type = 'RestElement'),
          this.toAssignable(e.argument, t),
          e.argument.type === 'AssignmentPattern' &&
            this.raise(
              e.argument.start,
              'Rest elements cannot have a default value'
            );
        break;
      case 'AssignmentExpression':
        e.operator !== '=' &&
          this.raise(
            e.left.end,
            "Only '=' operator can be used for specifying default value."
          ),
          (e.type = 'AssignmentPattern'),
          delete e.operator,
          this.toAssignable(e.left, t);
      case 'AssignmentPattern':
        break;
      case 'ParenthesizedExpression':
        this.toAssignable(e.expression, t, r);
        break;
      case 'ChainExpression':
        this.raiseRecoverable(
          e.start,
          'Optional chaining cannot appear in left-hand side'
        );
        break;
      case 'MemberExpression':
        if (!t) break;
      default:
        this.raise(e.start, 'Assigning to rvalue');
    }
  else r && this.checkPatternErrors(r, !0);
  return e;
};
it.toAssignableList = function (e, t) {
  for (var r = e.length, n = 0; n < r; n++) {
    var i = e[n];
    i && this.toAssignable(i, t);
  }
  if (r) {
    var a = e[r - 1];
    this.options.ecmaVersion === 6 &&
      t &&
      a &&
      a.type === 'RestElement' &&
      a.argument.type !== 'Identifier' &&
      this.unexpected(a.argument.start);
  }
  return e;
};
it.parseSpread = function (e) {
  var t = this.startNode();
  return (
    this.next(),
    (t.argument = this.parseMaybeAssign(!1, e)),
    this.finishNode(t, 'SpreadElement')
  );
};
it.parseRestBinding = function () {
  var e = this.startNode();
  return (
    this.next(),
    this.options.ecmaVersion === 6 && this.type !== p.name && this.unexpected(),
    (e.argument = this.parseBindingAtom()),
    this.finishNode(e, 'RestElement')
  );
};
it.parseBindingAtom = function () {
  if (this.options.ecmaVersion >= 6)
    switch (this.type) {
      case p.bracketL:
        var e = this.startNode();
        return (
          this.next(),
          (e.elements = this.parseBindingList(p.bracketR, !0, !0)),
          this.finishNode(e, 'ArrayPattern')
        );
      case p.braceL:
        return this.parseObj(!0);
    }
  return this.parseIdent();
};
it.parseBindingList = function (e, t, r) {
  for (var n = [], i = !0; !this.eat(e); )
    if ((i ? (i = !1) : this.expect(p.comma), t && this.type === p.comma))
      n.push(null);
    else {
      if (r && this.afterTrailingComma(e)) break;
      if (this.type === p.ellipsis) {
        var a = this.parseRestBinding();
        this.parseBindingListItem(a),
          n.push(a),
          this.type === p.comma &&
            this.raise(
              this.start,
              'Comma is not permitted after the rest element'
            ),
          this.expect(e);
        break;
      } else {
        var s = this.parseMaybeDefault(this.start, this.startLoc);
        this.parseBindingListItem(s), n.push(s);
      }
    }
  return n;
};
it.parseBindingListItem = function (e) {
  return e;
};
it.parseMaybeDefault = function (e, t, r) {
  if (
    ((r = r || this.parseBindingAtom()),
    this.options.ecmaVersion < 6 || !this.eat(p.eq))
  )
    return r;
  var n = this.startNodeAt(e, t);
  return (
    (n.left = r),
    (n.right = this.parseMaybeAssign()),
    this.finishNode(n, 'AssignmentPattern')
  );
};
it.checkLVal = function (e, t, r) {
  switch ((t === void 0 && (t = In), e.type)) {
    case 'Identifier':
      t === tt &&
        e.name === 'let' &&
        this.raiseRecoverable(
          e.start,
          'let is disallowed as a lexically bound name'
        ),
        this.strict &&
          this.reservedWordsStrictBind.test(e.name) &&
          this.raiseRecoverable(
            e.start,
            (t ? 'Binding ' : 'Assigning to ') + e.name + ' in strict mode'
          ),
        r &&
          (cr(r, e.name) &&
            this.raiseRecoverable(e.start, 'Argument name clash'),
          (r[e.name] = !0)),
        t !== In && t !== zi && this.declareName(e.name, t, e.start);
      break;
    case 'ChainExpression':
      this.raiseRecoverable(
        e.start,
        'Optional chaining cannot appear in left-hand side'
      );
      break;
    case 'MemberExpression':
      t && this.raiseRecoverable(e.start, 'Binding member expression');
      break;
    case 'ObjectPattern':
      for (var n = 0, i = e.properties; n < i.length; n += 1) {
        var a = i[n];
        this.checkLVal(a, t, r);
      }
      break;
    case 'Property':
      this.checkLVal(e.value, t, r);
      break;
    case 'ArrayPattern':
      for (var s = 0, f = e.elements; s < f.length; s += 1) {
        var h = f[s];
        h && this.checkLVal(h, t, r);
      }
      break;
    case 'AssignmentPattern':
      this.checkLVal(e.left, t, r);
      break;
    case 'RestElement':
      this.checkLVal(e.argument, t, r);
      break;
    case 'ParenthesizedExpression':
      this.checkLVal(e.expression, t, r);
      break;
    default:
      this.raise(e.start, (t ? 'Binding' : 'Assigning to') + ' rvalue');
  }
};
var se = xe.prototype;
se.checkPropClash = function (e, t, r) {
  if (
    !(this.options.ecmaVersion >= 9 && e.type === 'SpreadElement') &&
    !(this.options.ecmaVersion >= 6 && (e.computed || e.method || e.shorthand))
  ) {
    var n = e.key,
      i;
    switch (n.type) {
      case 'Identifier':
        i = n.name;
        break;
      case 'Literal':
        i = String(n.value);
        break;
      default:
        return;
    }
    var a = e.kind;
    if (this.options.ecmaVersion >= 6) {
      i === '__proto__' &&
        a === 'init' &&
        (t.proto &&
          (r
            ? r.doubleProto < 0 && (r.doubleProto = n.start)
            : this.raiseRecoverable(
                n.start,
                'Redefinition of __proto__ property'
              )),
        (t.proto = !0));
      return;
    }
    i = '$' + i;
    var s = t[i];
    if (s) {
      var f;
      a === 'init'
        ? (f = (this.strict && s.init) || s.get || s.set)
        : (f = s.init || s[a]),
        f && this.raiseRecoverable(n.start, 'Redefinition of property');
    } else s = t[i] = { init: !1, get: !1, set: !1 };
    s[a] = !0;
  }
};
se.parseExpression = function (e, t) {
  var r = this.start,
    n = this.startLoc,
    i = this.parseMaybeAssign(e, t);
  if (this.type === p.comma) {
    var a = this.startNodeAt(r, n);
    for (a.expressions = [i]; this.eat(p.comma); )
      a.expressions.push(this.parseMaybeAssign(e, t));
    return this.finishNode(a, 'SequenceExpression');
  }
  return i;
};
se.parseMaybeAssign = function (e, t, r) {
  if (this.isContextual('yield')) {
    if (this.inGenerator) return this.parseYield(e);
    this.exprAllowed = !1;
  }
  var n = !1,
    i = -1,
    a = -1;
  t
    ? ((i = t.parenthesizedAssign),
      (a = t.trailingComma),
      (t.parenthesizedAssign = t.trailingComma = -1))
    : ((t = new fr()), (n = !0));
  var s = this.start,
    f = this.startLoc;
  (this.type === p.parenL || this.type === p.name) &&
    (this.potentialArrowAt = this.start);
  var h = this.parseMaybeConditional(e, t);
  if ((r && (h = r.call(this, h, s, f)), this.type.isAssign)) {
    var D = this.startNodeAt(s, f);
    return (
      (D.operator = this.value),
      (D.left = this.type === p.eq ? this.toAssignable(h, !1, t) : h),
      n || (t.parenthesizedAssign = t.trailingComma = t.doubleProto = -1),
      t.shorthandAssign >= D.left.start && (t.shorthandAssign = -1),
      this.checkLVal(h),
      this.next(),
      (D.right = this.parseMaybeAssign(e)),
      this.finishNode(D, 'AssignmentExpression')
    );
  } else n && this.checkExpressionErrors(t, !0);
  return (
    i > -1 && (t.parenthesizedAssign = i), a > -1 && (t.trailingComma = a), h
  );
};
se.parseMaybeConditional = function (e, t) {
  var r = this.start,
    n = this.startLoc,
    i = this.parseExprOps(e, t);
  if (this.checkExpressionErrors(t)) return i;
  if (this.eat(p.question)) {
    var a = this.startNodeAt(r, n);
    return (
      (a.test = i),
      (a.consequent = this.parseMaybeAssign()),
      this.expect(p.colon),
      (a.alternate = this.parseMaybeAssign(e)),
      this.finishNode(a, 'ConditionalExpression')
    );
  }
  return i;
};
se.parseExprOps = function (e, t) {
  var r = this.start,
    n = this.startLoc,
    i = this.parseMaybeUnary(t, !1);
  return this.checkExpressionErrors(t) ||
    (i.start === r && i.type === 'ArrowFunctionExpression')
    ? i
    : this.parseExprOp(i, r, n, -1, e);
};
se.parseExprOp = function (e, t, r, n, i) {
  var a = this.type.binop;
  if (a != null && (!i || this.type !== p._in) && a > n) {
    var s = this.type === p.logicalOR || this.type === p.logicalAND,
      f = this.type === p.coalesce;
    f && (a = p.logicalAND.binop);
    var h = this.value;
    this.next();
    var D = this.start,
      v = this.startLoc,
      k = this.parseExprOp(this.parseMaybeUnary(null, !1), D, v, a, i),
      A = this.buildBinary(t, r, e, k, h, s || f);
    return (
      ((s && this.type === p.coalesce) ||
        (f && (this.type === p.logicalOR || this.type === p.logicalAND))) &&
        this.raiseRecoverable(
          this.start,
          'Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses'
        ),
      this.parseExprOp(A, t, r, n, i)
    );
  }
  return e;
};
se.buildBinary = function (e, t, r, n, i, a) {
  var s = this.startNodeAt(e, t);
  return (
    (s.left = r),
    (s.operator = i),
    (s.right = n),
    this.finishNode(s, a ? 'LogicalExpression' : 'BinaryExpression')
  );
};
se.parseMaybeUnary = function (e, t) {
  var r = this.start,
    n = this.startLoc,
    i;
  if (
    this.isContextual('await') &&
    (this.inAsync ||
      (!this.inFunction && this.options.allowAwaitOutsideFunction))
  )
    (i = this.parseAwait()), (t = !0);
  else if (this.type.prefix) {
    var a = this.startNode(),
      s = this.type === p.incDec;
    (a.operator = this.value),
      (a.prefix = !0),
      this.next(),
      (a.argument = this.parseMaybeUnary(null, !0)),
      this.checkExpressionErrors(e, !0),
      s
        ? this.checkLVal(a.argument)
        : this.strict &&
          a.operator === 'delete' &&
          a.argument.type === 'Identifier'
        ? this.raiseRecoverable(
            a.start,
            'Deleting local variable in strict mode'
          )
        : (t = !0),
      (i = this.finishNode(a, s ? 'UpdateExpression' : 'UnaryExpression'));
  } else {
    if (((i = this.parseExprSubscripts(e)), this.checkExpressionErrors(e)))
      return i;
    for (; this.type.postfix && !this.canInsertSemicolon(); ) {
      var f = this.startNodeAt(r, n);
      (f.operator = this.value),
        (f.prefix = !1),
        (f.argument = i),
        this.checkLVal(i),
        this.next(),
        (i = this.finishNode(f, 'UpdateExpression'));
    }
  }
  return !t && this.eat(p.starstar)
    ? this.buildBinary(r, n, i, this.parseMaybeUnary(null, !1), '**', !1)
    : i;
};
se.parseExprSubscripts = function (e) {
  var t = this.start,
    r = this.startLoc,
    n = this.parseExprAtom(e);
  if (
    n.type === 'ArrowFunctionExpression' &&
    this.input.slice(this.lastTokStart, this.lastTokEnd) !== ')'
  )
    return n;
  var i = this.parseSubscripts(n, t, r);
  return (
    e &&
      i.type === 'MemberExpression' &&
      (e.parenthesizedAssign >= i.start && (e.parenthesizedAssign = -1),
      e.parenthesizedBind >= i.start && (e.parenthesizedBind = -1)),
    i
  );
};
se.parseSubscripts = function (e, t, r, n) {
  for (
    var i =
        this.options.ecmaVersion >= 8 &&
        e.type === 'Identifier' &&
        e.name === 'async' &&
        this.lastTokEnd === e.end &&
        !this.canInsertSemicolon() &&
        e.end - e.start === 5 &&
        this.potentialArrowAt === e.start,
      a = !1;
    ;

  ) {
    var s = this.parseSubscript(e, t, r, n, i, a);
    if (
      (s.optional && (a = !0), s === e || s.type === 'ArrowFunctionExpression')
    ) {
      if (a) {
        var f = this.startNodeAt(t, r);
        (f.expression = s), (s = this.finishNode(f, 'ChainExpression'));
      }
      return s;
    }
    e = s;
  }
};
se.parseSubscript = function (e, t, r, n, i, a) {
  var s = this.options.ecmaVersion >= 11,
    f = s && this.eat(p.questionDot);
  n &&
    f &&
    this.raise(
      this.lastTokStart,
      'Optional chaining cannot appear in the callee of new expressions'
    );
  var h = this.eat(p.bracketL);
  if (
    h ||
    (f && this.type !== p.parenL && this.type !== p.backQuote) ||
    this.eat(p.dot)
  ) {
    var D = this.startNodeAt(t, r);
    (D.object = e),
      (D.property = h
        ? this.parseExpression()
        : this.parseIdent(this.options.allowReserved !== 'never')),
      (D.computed = !!h),
      h && this.expect(p.bracketR),
      s && (D.optional = f),
      (e = this.finishNode(D, 'MemberExpression'));
  } else if (!n && this.eat(p.parenL)) {
    var v = new fr(),
      k = this.yieldPos,
      A = this.awaitPos,
      w = this.awaitIdentPos;
    (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
    var O = this.parseExprList(p.parenR, this.options.ecmaVersion >= 8, !1, v);
    if (i && !f && !this.canInsertSemicolon() && this.eat(p.arrow))
      return (
        this.checkPatternErrors(v, !1),
        this.checkYieldAwaitInDefaultParams(),
        this.awaitIdentPos > 0 &&
          this.raise(
            this.awaitIdentPos,
            "Cannot use 'await' as identifier inside an async function"
          ),
        (this.yieldPos = k),
        (this.awaitPos = A),
        (this.awaitIdentPos = w),
        this.parseArrowExpression(this.startNodeAt(t, r), O, !0)
      );
    this.checkExpressionErrors(v, !0),
      (this.yieldPos = k || this.yieldPos),
      (this.awaitPos = A || this.awaitPos),
      (this.awaitIdentPos = w || this.awaitIdentPos);
    var x = this.startNodeAt(t, r);
    (x.callee = e),
      (x.arguments = O),
      s && (x.optional = f),
      (e = this.finishNode(x, 'CallExpression'));
  } else if (this.type === p.backQuote) {
    (f || a) &&
      this.raise(
        this.start,
        'Optional chaining cannot appear in the tag of tagged template expressions'
      );
    var P = this.startNodeAt(t, r);
    (P.tag = e),
      (P.quasi = this.parseTemplate({ isTagged: !0 })),
      (e = this.finishNode(P, 'TaggedTemplateExpression'));
  }
  return e;
};
se.parseExprAtom = function (e) {
  this.type === p.slash && this.readRegexp();
  var t,
    r = this.potentialArrowAt === this.start;
  switch (this.type) {
    case p._super:
      return (
        this.allowSuper ||
          this.raise(this.start, "'super' keyword outside a method"),
        (t = this.startNode()),
        this.next(),
        this.type === p.parenL &&
          !this.allowDirectSuper &&
          this.raise(t.start, 'super() call outside constructor of a subclass'),
        this.type !== p.dot &&
          this.type !== p.bracketL &&
          this.type !== p.parenL &&
          this.unexpected(),
        this.finishNode(t, 'Super')
      );
    case p._this:
      return (
        (t = this.startNode()),
        this.next(),
        this.finishNode(t, 'ThisExpression')
      );
    case p.name:
      var n = this.start,
        i = this.startLoc,
        a = this.containsEsc,
        s = this.parseIdent(!1);
      if (
        this.options.ecmaVersion >= 8 &&
        !a &&
        s.name === 'async' &&
        !this.canInsertSemicolon() &&
        this.eat(p._function)
      )
        return this.parseFunction(this.startNodeAt(n, i), 0, !1, !0);
      if (r && !this.canInsertSemicolon()) {
        if (this.eat(p.arrow))
          return this.parseArrowExpression(this.startNodeAt(n, i), [s], !1);
        if (
          this.options.ecmaVersion >= 8 &&
          s.name === 'async' &&
          this.type === p.name &&
          !a
        )
          return (
            (s = this.parseIdent(!1)),
            (this.canInsertSemicolon() || !this.eat(p.arrow)) &&
              this.unexpected(),
            this.parseArrowExpression(this.startNodeAt(n, i), [s], !0)
          );
      }
      return s;
    case p.regexp:
      var f = this.value;
      return (
        (t = this.parseLiteral(f.value)),
        (t.regex = { pattern: f.pattern, flags: f.flags }),
        t
      );
    case p.num:
    case p.string:
      return this.parseLiteral(this.value);
    case p._null:
    case p._true:
    case p._false:
      return (
        (t = this.startNode()),
        (t.value = this.type === p._null ? null : this.type === p._true),
        (t.raw = this.type.keyword),
        this.next(),
        this.finishNode(t, 'Literal')
      );
    case p.parenL:
      var h = this.start,
        D = this.parseParenAndDistinguishExpression(r);
      return (
        e &&
          (e.parenthesizedAssign < 0 &&
            !this.isSimpleAssignTarget(D) &&
            (e.parenthesizedAssign = h),
          e.parenthesizedBind < 0 && (e.parenthesizedBind = h)),
        D
      );
    case p.bracketL:
      return (
        (t = this.startNode()),
        this.next(),
        (t.elements = this.parseExprList(p.bracketR, !0, !0, e)),
        this.finishNode(t, 'ArrayExpression')
      );
    case p.braceL:
      return this.parseObj(!1, e);
    case p._function:
      return (t = this.startNode()), this.next(), this.parseFunction(t, 0);
    case p._class:
      return this.parseClass(this.startNode(), !1);
    case p._new:
      return this.parseNew();
    case p.backQuote:
      return this.parseTemplate();
    case p._import:
      return this.options.ecmaVersion >= 11
        ? this.parseExprImport()
        : this.unexpected();
    default:
      this.unexpected();
  }
};
se.parseExprImport = function () {
  var e = this.startNode();
  this.containsEsc &&
    this.raiseRecoverable(this.start, 'Escape sequence in keyword import');
  var t = this.parseIdent(!0);
  switch (this.type) {
    case p.parenL:
      return this.parseDynamicImport(e);
    case p.dot:
      return (e.meta = t), this.parseImportMeta(e);
    default:
      this.unexpected();
  }
};
se.parseDynamicImport = function (e) {
  if (
    (this.next(), (e.source = this.parseMaybeAssign()), !this.eat(p.parenR))
  ) {
    var t = this.start;
    this.eat(p.comma) && this.eat(p.parenR)
      ? this.raiseRecoverable(t, 'Trailing comma is not allowed in import()')
      : this.unexpected(t);
  }
  return this.finishNode(e, 'ImportExpression');
};
se.parseImportMeta = function (e) {
  this.next();
  var t = this.containsEsc;
  return (
    (e.property = this.parseIdent(!0)),
    e.property.name !== 'meta' &&
      this.raiseRecoverable(
        e.property.start,
        "The only valid meta property for import is 'import.meta'"
      ),
    t &&
      this.raiseRecoverable(
        e.start,
        "'import.meta' must not contain escaped characters"
      ),
    this.options.sourceType !== 'module' &&
      this.raiseRecoverable(
        e.start,
        "Cannot use 'import.meta' outside a module"
      ),
    this.finishNode(e, 'MetaProperty')
  );
};
se.parseLiteral = function (e) {
  var t = this.startNode();
  return (
    (t.value = e),
    (t.raw = this.input.slice(this.start, this.end)),
    t.raw.charCodeAt(t.raw.length - 1) === 110 &&
      (t.bigint = t.raw.slice(0, -1).replace(/_/g, '')),
    this.next(),
    this.finishNode(t, 'Literal')
  );
};
se.parseParenExpression = function () {
  this.expect(p.parenL);
  var e = this.parseExpression();
  return this.expect(p.parenR), e;
};
se.parseParenAndDistinguishExpression = function (e) {
  var t = this.start,
    r = this.startLoc,
    n,
    i = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();
    var a = this.start,
      s = this.startLoc,
      f = [],
      h = !0,
      D = !1,
      v = new fr(),
      k = this.yieldPos,
      A = this.awaitPos,
      w;
    for (this.yieldPos = 0, this.awaitPos = 0; this.type !== p.parenR; )
      if (
        (h ? (h = !1) : this.expect(p.comma),
        i && this.afterTrailingComma(p.parenR, !0))
      ) {
        D = !0;
        break;
      } else if (this.type === p.ellipsis) {
        (w = this.start),
          f.push(this.parseParenItem(this.parseRestBinding())),
          this.type === p.comma &&
            this.raise(
              this.start,
              'Comma is not permitted after the rest element'
            );
        break;
      } else f.push(this.parseMaybeAssign(!1, v, this.parseParenItem));
    var O = this.start,
      x = this.startLoc;
    if (
      (this.expect(p.parenR),
      e && !this.canInsertSemicolon() && this.eat(p.arrow))
    )
      return (
        this.checkPatternErrors(v, !1),
        this.checkYieldAwaitInDefaultParams(),
        (this.yieldPos = k),
        (this.awaitPos = A),
        this.parseParenArrowList(t, r, f)
      );
    (!f.length || D) && this.unexpected(this.lastTokStart),
      w && this.unexpected(w),
      this.checkExpressionErrors(v, !0),
      (this.yieldPos = k || this.yieldPos),
      (this.awaitPos = A || this.awaitPos),
      f.length > 1
        ? ((n = this.startNodeAt(a, s)),
          (n.expressions = f),
          this.finishNodeAt(n, 'SequenceExpression', O, x))
        : (n = f[0]);
  } else n = this.parseParenExpression();
  if (this.options.preserveParens) {
    var P = this.startNodeAt(t, r);
    return (P.expression = n), this.finishNode(P, 'ParenthesizedExpression');
  } else return n;
};
se.parseParenItem = function (e) {
  return e;
};
se.parseParenArrowList = function (e, t, r) {
  return this.parseArrowExpression(this.startNodeAt(e, t), r);
};
var Do = [];
se.parseNew = function () {
  this.containsEsc &&
    this.raiseRecoverable(this.start, 'Escape sequence in keyword new');
  var e = this.startNode(),
    t = this.parseIdent(!0);
  if (this.options.ecmaVersion >= 6 && this.eat(p.dot)) {
    e.meta = t;
    var r = this.containsEsc;
    return (
      (e.property = this.parseIdent(!0)),
      e.property.name !== 'target' &&
        this.raiseRecoverable(
          e.property.start,
          "The only valid meta property for new is 'new.target'"
        ),
      r &&
        this.raiseRecoverable(
          e.start,
          "'new.target' must not contain escaped characters"
        ),
      this.inNonArrowFunction() ||
        this.raiseRecoverable(
          e.start,
          "'new.target' can only be used in functions"
        ),
      this.finishNode(e, 'MetaProperty')
    );
  }
  var n = this.start,
    i = this.startLoc,
    a = this.type === p._import;
  return (
    (e.callee = this.parseSubscripts(this.parseExprAtom(), n, i, !0)),
    a &&
      e.callee.type === 'ImportExpression' &&
      this.raise(n, 'Cannot use new with import()'),
    this.eat(p.parenL)
      ? (e.arguments = this.parseExprList(
          p.parenR,
          this.options.ecmaVersion >= 8,
          !1
        ))
      : (e.arguments = Do),
    this.finishNode(e, 'NewExpression')
  );
};
se.parseTemplateElement = function (e) {
  var t = e.isTagged,
    r = this.startNode();
  return (
    this.type === p.invalidTemplate
      ? (t ||
          this.raiseRecoverable(
            this.start,
            'Bad escape sequence in untagged template literal'
          ),
        (r.value = { raw: this.value, cooked: null }))
      : (r.value = {
          raw: this.input.slice(this.start, this.end).replace(
            /\r\n?/g,
            `
`
          ),
          cooked: this.value
        }),
    this.next(),
    (r.tail = this.type === p.backQuote),
    this.finishNode(r, 'TemplateElement')
  );
};
se.parseTemplate = function (e) {
  e === void 0 && (e = {});
  var t = e.isTagged;
  t === void 0 && (t = !1);
  var r = this.startNode();
  this.next(), (r.expressions = []);
  var n = this.parseTemplateElement({ isTagged: t });
  for (r.quasis = [n]; !n.tail; )
    this.type === p.eof &&
      this.raise(this.pos, 'Unterminated template literal'),
      this.expect(p.dollarBraceL),
      r.expressions.push(this.parseExpression()),
      this.expect(p.braceR),
      r.quasis.push((n = this.parseTemplateElement({ isTagged: t })));
  return this.next(), this.finishNode(r, 'TemplateLiteral');
};
se.isAsyncProp = function (e) {
  return (
    !e.computed &&
    e.key.type === 'Identifier' &&
    e.key.name === 'async' &&
    (this.type === p.name ||
      this.type === p.num ||
      this.type === p.string ||
      this.type === p.bracketL ||
      this.type.keyword ||
      (this.options.ecmaVersion >= 9 && this.type === p.star)) &&
    !Ve.test(this.input.slice(this.lastTokEnd, this.start))
  );
};
se.parseObj = function (e, t) {
  var r = this.startNode(),
    n = !0,
    i = {};
  for (r.properties = [], this.next(); !this.eat(p.braceR); ) {
    if (n) n = !1;
    else if (
      (this.expect(p.comma),
      this.options.ecmaVersion >= 5 && this.afterTrailingComma(p.braceR))
    )
      break;
    var a = this.parseProperty(e, t);
    e || this.checkPropClash(a, i, t), r.properties.push(a);
  }
  return this.finishNode(r, e ? 'ObjectPattern' : 'ObjectExpression');
};
se.parseProperty = function (e, t) {
  var r = this.startNode(),
    n,
    i,
    a,
    s;
  if (this.options.ecmaVersion >= 9 && this.eat(p.ellipsis))
    return e
      ? ((r.argument = this.parseIdent(!1)),
        this.type === p.comma &&
          this.raise(
            this.start,
            'Comma is not permitted after the rest element'
          ),
        this.finishNode(r, 'RestElement'))
      : (this.type === p.parenL &&
          t &&
          (t.parenthesizedAssign < 0 && (t.parenthesizedAssign = this.start),
          t.parenthesizedBind < 0 && (t.parenthesizedBind = this.start)),
        (r.argument = this.parseMaybeAssign(!1, t)),
        this.type === p.comma &&
          t &&
          t.trailingComma < 0 &&
          (t.trailingComma = this.start),
        this.finishNode(r, 'SpreadElement'));
  this.options.ecmaVersion >= 6 &&
    ((r.method = !1),
    (r.shorthand = !1),
    (e || t) && ((a = this.start), (s = this.startLoc)),
    e || (n = this.eat(p.star)));
  var f = this.containsEsc;
  return (
    this.parsePropertyName(r),
    !e && !f && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(r)
      ? ((i = !0),
        (n = this.options.ecmaVersion >= 9 && this.eat(p.star)),
        this.parsePropertyName(r, t))
      : (i = !1),
    this.parsePropertyValue(r, e, n, i, a, s, t, f),
    this.finishNode(r, 'Property')
  );
};
se.parsePropertyValue = function (e, t, r, n, i, a, s, f) {
  if (
    ((r || n) && this.type === p.colon && this.unexpected(), this.eat(p.colon))
  )
    (e.value = t
      ? this.parseMaybeDefault(this.start, this.startLoc)
      : this.parseMaybeAssign(!1, s)),
      (e.kind = 'init');
  else if (this.options.ecmaVersion >= 6 && this.type === p.parenL)
    t && this.unexpected(),
      (e.kind = 'init'),
      (e.method = !0),
      (e.value = this.parseMethod(r, n));
  else if (
    !t &&
    !f &&
    this.options.ecmaVersion >= 5 &&
    !e.computed &&
    e.key.type === 'Identifier' &&
    (e.key.name === 'get' || e.key.name === 'set') &&
    this.type !== p.comma &&
    this.type !== p.braceR &&
    this.type !== p.eq
  ) {
    (r || n) && this.unexpected(),
      (e.kind = e.key.name),
      this.parsePropertyName(e),
      (e.value = this.parseMethod(!1));
    var h = e.kind === 'get' ? 0 : 1;
    if (e.value.params.length !== h) {
      var D = e.value.start;
      e.kind === 'get'
        ? this.raiseRecoverable(D, 'getter should have no params')
        : this.raiseRecoverable(D, 'setter should have exactly one param');
    } else
      e.kind === 'set' &&
        e.value.params[0].type === 'RestElement' &&
        this.raiseRecoverable(
          e.value.params[0].start,
          'Setter cannot use rest params'
        );
  } else
    this.options.ecmaVersion >= 6 && !e.computed && e.key.type === 'Identifier'
      ? ((r || n) && this.unexpected(),
        this.checkUnreserved(e.key),
        e.key.name === 'await' &&
          !this.awaitIdentPos &&
          (this.awaitIdentPos = i),
        (e.kind = 'init'),
        t
          ? (e.value = this.parseMaybeDefault(i, a, e.key))
          : this.type === p.eq && s
          ? (s.shorthandAssign < 0 && (s.shorthandAssign = this.start),
            (e.value = this.parseMaybeDefault(i, a, e.key)))
          : (e.value = e.key),
        (e.shorthand = !0))
      : this.unexpected();
};
se.parsePropertyName = function (e) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(p.bracketL))
      return (
        (e.computed = !0),
        (e.key = this.parseMaybeAssign()),
        this.expect(p.bracketR),
        e.key
      );
    e.computed = !1;
  }
  return (e.key =
    this.type === p.num || this.type === p.string
      ? this.parseExprAtom()
      : this.parseIdent(this.options.allowReserved !== 'never'));
};
se.initFunction = function (e) {
  (e.id = null),
    this.options.ecmaVersion >= 6 && (e.generator = e.expression = !1),
    this.options.ecmaVersion >= 8 && (e.async = !1);
};
se.parseMethod = function (e, t, r) {
  var n = this.startNode(),
    i = this.yieldPos,
    a = this.awaitPos,
    s = this.awaitIdentPos;
  return (
    this.initFunction(n),
    this.options.ecmaVersion >= 6 && (n.generator = e),
    this.options.ecmaVersion >= 8 && (n.async = !!t),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    this.enterScope(Zr(t, n.generator) | Ui | (r ? qi : 0)),
    this.expect(p.parenL),
    (n.params = this.parseBindingList(
      p.parenR,
      !1,
      this.options.ecmaVersion >= 8
    )),
    this.checkYieldAwaitInDefaultParams(),
    this.parseFunctionBody(n, !1, !0),
    (this.yieldPos = i),
    (this.awaitPos = a),
    (this.awaitIdentPos = s),
    this.finishNode(n, 'FunctionExpression')
  );
};
se.parseArrowExpression = function (e, t, r) {
  var n = this.yieldPos,
    i = this.awaitPos,
    a = this.awaitIdentPos;
  return (
    this.enterScope(Zr(r, !1) | ji),
    this.initFunction(e),
    this.options.ecmaVersion >= 8 && (e.async = !!r),
    (this.yieldPos = 0),
    (this.awaitPos = 0),
    (this.awaitIdentPos = 0),
    (e.params = this.toAssignableList(t, !0)),
    this.parseFunctionBody(e, !0, !1),
    (this.yieldPos = n),
    (this.awaitPos = i),
    (this.awaitIdentPos = a),
    this.finishNode(e, 'ArrowFunctionExpression')
  );
};
se.parseFunctionBody = function (e, t, r) {
  var n = t && this.type !== p.braceL,
    i = this.strict,
    a = !1;
  if (n)
    (e.body = this.parseMaybeAssign()),
      (e.expression = !0),
      this.checkParams(e, !1);
  else {
    var s = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(e.params);
    (!i || s) &&
      ((a = this.strictDirective(this.end)),
      a &&
        s &&
        this.raiseRecoverable(
          e.start,
          "Illegal 'use strict' directive in function with non-simple parameter list"
        ));
    var f = this.labels;
    (this.labels = []),
      a && (this.strict = !0),
      this.checkParams(
        e,
        !i && !a && !t && !r && this.isSimpleParamList(e.params)
      ),
      this.strict && e.id && this.checkLVal(e.id, zi),
      (e.body = this.parseBlock(!1, void 0, a && !i)),
      (e.expression = !1),
      this.adaptDirectivePrologue(e.body.body),
      (this.labels = f);
  }
  this.exitScope();
};
se.isSimpleParamList = function (e) {
  for (var t = 0, r = e; t < r.length; t += 1) {
    var n = r[t];
    if (n.type !== 'Identifier') return !1;
  }
  return !0;
};
se.checkParams = function (e, t) {
  for (var r = {}, n = 0, i = e.params; n < i.length; n += 1) {
    var a = i[n];
    this.checkLVal(a, en, t ? null : r);
  }
};
se.parseExprList = function (e, t, r, n) {
  for (var i = [], a = !0; !this.eat(e); ) {
    if (a) a = !1;
    else if ((this.expect(p.comma), t && this.afterTrailingComma(e))) break;
    var s = void 0;
    r && this.type === p.comma
      ? (s = null)
      : this.type === p.ellipsis
      ? ((s = this.parseSpread(n)),
        n &&
          this.type === p.comma &&
          n.trailingComma < 0 &&
          (n.trailingComma = this.start))
      : (s = this.parseMaybeAssign(!1, n)),
      i.push(s);
  }
  return i;
};
se.checkUnreserved = function (e) {
  var t = e.start,
    r = e.end,
    n = e.name;
  if (
    (this.inGenerator &&
      n === 'yield' &&
      this.raiseRecoverable(
        t,
        "Cannot use 'yield' as identifier inside a generator"
      ),
    this.inAsync &&
      n === 'await' &&
      this.raiseRecoverable(
        t,
        "Cannot use 'await' as identifier inside an async function"
      ),
    this.keywords.test(n) && this.raise(t, "Unexpected keyword '" + n + "'"),
    !(
      this.options.ecmaVersion < 6 &&
      this.input.slice(t, r).indexOf('\\') !== -1
    ))
  ) {
    var i = this.strict ? this.reservedWordsStrict : this.reservedWords;
    i.test(n) &&
      (!this.inAsync &&
        n === 'await' &&
        this.raiseRecoverable(
          t,
          "Cannot use keyword 'await' outside an async function"
        ),
      this.raiseRecoverable(t, "The keyword '" + n + "' is reserved"));
  }
};
se.parseIdent = function (e, t) {
  var r = this.startNode();
  return (
    this.type === p.name
      ? (r.name = this.value)
      : this.type.keyword
      ? ((r.name = this.type.keyword),
        (r.name === 'class' || r.name === 'function') &&
          (this.lastTokEnd !== this.lastTokStart + 1 ||
            this.input.charCodeAt(this.lastTokStart) !== 46) &&
          this.context.pop())
      : this.unexpected(),
    this.next(!!e),
    this.finishNode(r, 'Identifier'),
    e ||
      (this.checkUnreserved(r),
      r.name === 'await' &&
        !this.awaitIdentPos &&
        (this.awaitIdentPos = r.start)),
    r
  );
};
se.parseYield = function (e) {
  this.yieldPos || (this.yieldPos = this.start);
  var t = this.startNode();
  return (
    this.next(),
    this.type === p.semi ||
    this.canInsertSemicolon() ||
    (this.type !== p.star && !this.type.startsExpr)
      ? ((t.delegate = !1), (t.argument = null))
      : ((t.delegate = this.eat(p.star)),
        (t.argument = this.parseMaybeAssign(e))),
    this.finishNode(t, 'YieldExpression')
  );
};
se.parseAwait = function () {
  this.awaitPos || (this.awaitPos = this.start);
  var e = this.startNode();
  return (
    this.next(),
    (e.argument = this.parseMaybeUnary(null, !1)),
    this.finishNode(e, 'AwaitExpression')
  );
};
var er = xe.prototype;
er.raise = function (e, t) {
  var r = Xr(this.input, e);
  t += ' (' + r.line + ':' + r.column + ')';
  var n = new SyntaxError(t);
  throw ((n.pos = e), (n.loc = r), (n.raisedAt = this.pos), n);
};
er.raiseRecoverable = er.raise;
er.curPosition = function () {
  if (this.options.locations)
    return new bt(this.curLine, this.pos - this.lineStart);
};
var ot = xe.prototype,
  Eo = function (t) {
    (this.flags = t),
      (this.var = []),
      (this.lexical = []),
      (this.functions = []);
  };
ot.enterScope = function (e) {
  this.scopeStack.push(new Eo(e));
};
ot.exitScope = function () {
  this.scopeStack.pop();
};
ot.treatFunctionsAsVarInScope = function (e) {
  return e.flags & Wt || (!this.inModule && e.flags & Vt);
};
ot.declareName = function (e, t, r) {
  var n = !1;
  if (t === tt) {
    var i = this.currentScope();
    (n =
      i.lexical.indexOf(e) > -1 ||
      i.functions.indexOf(e) > -1 ||
      i.var.indexOf(e) > -1),
      i.lexical.push(e),
      this.inModule && i.flags & Vt && delete this.undefinedExports[e];
  } else if (t === Gi) {
    var a = this.currentScope();
    a.lexical.push(e);
  } else if (t === Wi) {
    var s = this.currentScope();
    this.treatFunctionsAsVar
      ? (n = s.lexical.indexOf(e) > -1)
      : (n = s.lexical.indexOf(e) > -1 || s.var.indexOf(e) > -1),
      s.functions.push(e);
  } else
    for (var f = this.scopeStack.length - 1; f >= 0; --f) {
      var h = this.scopeStack[f];
      if (
        (h.lexical.indexOf(e) > -1 && !(h.flags & Vi && h.lexical[0] === e)) ||
        (!this.treatFunctionsAsVarInScope(h) && h.functions.indexOf(e) > -1)
      ) {
        n = !0;
        break;
      }
      if (
        (h.var.push(e),
        this.inModule && h.flags & Vt && delete this.undefinedExports[e],
        h.flags & Yr)
      )
        break;
    }
  n &&
    this.raiseRecoverable(
      r,
      "Identifier '" + e + "' has already been declared"
    );
};
ot.checkLocalExport = function (e) {
  this.scopeStack[0].lexical.indexOf(e.name) === -1 &&
    this.scopeStack[0].var.indexOf(e.name) === -1 &&
    (this.undefinedExports[e.name] = e);
};
ot.currentScope = function () {
  return this.scopeStack[this.scopeStack.length - 1];
};
ot.currentVarScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Yr) return t;
  }
};
ot.currentThisScope = function () {
  for (var e = this.scopeStack.length - 1; ; e--) {
    var t = this.scopeStack[e];
    if (t.flags & Yr && !(t.flags & ji)) return t;
  }
};
var pr = function (t, r, n) {
    (this.type = ''),
      (this.start = r),
      (this.end = 0),
      t.options.locations && (this.loc = new qt(t, n)),
      t.options.directSourceFile &&
        (this.sourceFile = t.options.directSourceFile),
      t.options.ranges && (this.range = [r, 0]);
  },
  hr = xe.prototype;
hr.startNode = function () {
  return new pr(this, this.start, this.startLoc);
};
hr.startNodeAt = function (e, t) {
  return new pr(this, e, t);
};
function Ji(e, t, r, n) {
  return (
    (e.type = t),
    (e.end = r),
    this.options.locations && (e.loc.end = n),
    this.options.ranges && (e.range[1] = r),
    e
  );
}
hr.finishNode = function (e, t) {
  return Ji.call(this, e, t, this.lastTokEnd, this.lastTokEndLoc);
};
hr.finishNodeAt = function (e, t, r, n) {
  return Ji.call(this, e, t, r, n);
};
var We = function (t, r, n, i, a) {
    (this.token = t),
      (this.isExpr = !!r),
      (this.preserveSpace = !!n),
      (this.override = i),
      (this.generator = !!a);
  },
  be = {
    b_stat: new We('{', !1),
    b_expr: new We('{', !0),
    b_tmpl: new We('${', !1),
    p_stat: new We('(', !1),
    p_expr: new We('(', !0),
    q_tmpl: new We('`', !0, !0, function (e) {
      return e.tryReadTemplateToken();
    }),
    f_stat: new We('function', !1),
    f_expr: new We('function', !0),
    f_expr_gen: new We('function', !0, !1, null, !0),
    f_gen: new We('function', !1, !1, null, !0)
  },
  dr = xe.prototype;
dr.initialContext = function () {
  return [be.b_stat];
};
dr.braceIsBlock = function (e) {
  var t = this.curContext();
  return t === be.f_expr || t === be.f_stat
    ? !0
    : e === p.colon && (t === be.b_stat || t === be.b_expr)
    ? !t.isExpr
    : e === p._return || (e === p.name && this.exprAllowed)
    ? Ve.test(this.input.slice(this.lastTokEnd, this.start))
    : e === p._else ||
      e === p.semi ||
      e === p.eof ||
      e === p.parenR ||
      e === p.arrow
    ? !0
    : e === p.braceL
    ? t === be.b_stat
    : e === p._var || e === p._const || e === p.name
    ? !1
    : !this.exprAllowed;
};
dr.inGeneratorContext = function () {
  for (var e = this.context.length - 1; e >= 1; e--) {
    var t = this.context[e];
    if (t.token === 'function') return t.generator;
  }
  return !1;
};
dr.updateContext = function (e) {
  var t,
    r = this.type;
  r.keyword && e === p.dot
    ? (this.exprAllowed = !1)
    : (t = r.updateContext)
    ? t.call(this, e)
    : (this.exprAllowed = r.beforeExpr);
};
p.parenR.updateContext = p.braceR.updateContext = function () {
  if (this.context.length === 1) {
    this.exprAllowed = !0;
    return;
  }
  var e = this.context.pop();
  e === be.b_stat &&
    this.curContext().token === 'function' &&
    (e = this.context.pop()),
    (this.exprAllowed = !e.isExpr);
};
p.braceL.updateContext = function (e) {
  this.context.push(this.braceIsBlock(e) ? be.b_stat : be.b_expr),
    (this.exprAllowed = !0);
};
p.dollarBraceL.updateContext = function () {
  this.context.push(be.b_tmpl), (this.exprAllowed = !0);
};
p.parenL.updateContext = function (e) {
  var t = e === p._if || e === p._for || e === p._with || e === p._while;
  this.context.push(t ? be.p_stat : be.p_expr), (this.exprAllowed = !0);
};
p.incDec.updateContext = function () {};
p._function.updateContext = p._class.updateContext = function (e) {
  e.beforeExpr &&
  e !== p.semi &&
  e !== p._else &&
  !(
    e === p._return && Ve.test(this.input.slice(this.lastTokEnd, this.start))
  ) &&
  !((e === p.colon || e === p.braceL) && this.curContext() === be.b_stat)
    ? this.context.push(be.f_expr)
    : this.context.push(be.f_stat),
    (this.exprAllowed = !1);
};
p.backQuote.updateContext = function () {
  this.curContext() === be.q_tmpl
    ? this.context.pop()
    : this.context.push(be.q_tmpl),
    (this.exprAllowed = !1);
};
p.star.updateContext = function (e) {
  if (e === p._function) {
    var t = this.context.length - 1;
    this.context[t] === be.f_expr
      ? (this.context[t] = be.f_expr_gen)
      : (this.context[t] = be.f_gen);
  }
  this.exprAllowed = !0;
};
p.name.updateContext = function (e) {
  var t = !1;
  this.options.ecmaVersion >= 6 &&
    e !== p.dot &&
    ((this.value === 'of' && !this.exprAllowed) ||
      (this.value === 'yield' && this.inGeneratorContext())) &&
    (t = !0),
    (this.exprAllowed = t);
};
var Hi =
    'ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS',
  Ki = Hi + ' Extended_Pictographic',
  yo = Ki,
  Co = { 9: Hi, 10: Ki, 11: yo },
  Pn =
    'Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu',
  Qi =
    'Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb',
  Xi =
    Qi +
    ' Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd',
  vo =
    Xi +
    ' Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho',
  xo = { 9: Qi, 10: Xi, 11: vo },
  Yi = {};
function rn(e) {
  var t = (Yi[e] = {
    binary: ct(Co[e] + ' ' + Pn),
    nonBinary: { General_Category: ct(Pn), Script: ct(xo[e]) }
  });
  (t.nonBinary.Script_Extensions = t.nonBinary.Script),
    (t.nonBinary.gc = t.nonBinary.General_Category),
    (t.nonBinary.sc = t.nonBinary.Script),
    (t.nonBinary.scx = t.nonBinary.Script_Extensions);
}
rn(9);
rn(10);
rn(11);
var Y = xe.prototype,
  ut = function (t) {
    (this.parser = t),
      (this.validFlags =
        'gim' +
        (t.options.ecmaVersion >= 6 ? 'uy' : '') +
        (t.options.ecmaVersion >= 9 ? 's' : '')),
      (this.unicodeProperties =
        Yi[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion]),
      (this.source = ''),
      (this.flags = ''),
      (this.start = 0),
      (this.switchU = !1),
      (this.switchN = !1),
      (this.pos = 0),
      (this.lastIntValue = 0),
      (this.lastStringValue = ''),
      (this.lastAssertionIsQuantifiable = !1),
      (this.numCapturingParens = 0),
      (this.maxBackReference = 0),
      (this.groupNames = []),
      (this.backReferenceNames = []);
  };
ut.prototype.reset = function (t, r, n) {
  var i = n.indexOf('u') !== -1;
  (this.start = t | 0),
    (this.source = r + ''),
    (this.flags = n),
    (this.switchU = i && this.parser.options.ecmaVersion >= 6),
    (this.switchN = i && this.parser.options.ecmaVersion >= 9);
};
ut.prototype.raise = function (t) {
  this.parser.raiseRecoverable(
    this.start,
    'Invalid regular expression: /' + this.source + '/: ' + t
  );
};
ut.prototype.at = function (t, r) {
  r === void 0 && (r = !1);
  var n = this.source,
    i = n.length;
  if (t >= i) return -1;
  var a = n.charCodeAt(t);
  if (!(r || this.switchU) || a <= 55295 || a >= 57344 || t + 1 >= i) return a;
  var s = n.charCodeAt(t + 1);
  return s >= 56320 && s <= 57343 ? (a << 10) + s - 56613888 : a;
};
ut.prototype.nextIndex = function (t, r) {
  r === void 0 && (r = !1);
  var n = this.source,
    i = n.length;
  if (t >= i) return i;
  var a = n.charCodeAt(t),
    s;
  return !(r || this.switchU) ||
    a <= 55295 ||
    a >= 57344 ||
    t + 1 >= i ||
    (s = n.charCodeAt(t + 1)) < 56320 ||
    s > 57343
    ? t + 1
    : t + 2;
};
ut.prototype.current = function (t) {
  return t === void 0 && (t = !1), this.at(this.pos, t);
};
ut.prototype.lookahead = function (t) {
  return t === void 0 && (t = !1), this.at(this.nextIndex(this.pos, t), t);
};
ut.prototype.advance = function (t) {
  t === void 0 && (t = !1), (this.pos = this.nextIndex(this.pos, t));
};
ut.prototype.eat = function (t, r) {
  return (
    r === void 0 && (r = !1), this.current(r) === t ? (this.advance(r), !0) : !1
  );
};
function tr(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
Y.validateRegExpFlags = function (e) {
  for (var t = e.validFlags, r = e.flags, n = 0; n < r.length; n++) {
    var i = r.charAt(n);
    t.indexOf(i) === -1 &&
      this.raise(e.start, 'Invalid regular expression flag'),
      r.indexOf(i, n + 1) > -1 &&
        this.raise(e.start, 'Duplicate regular expression flag');
  }
};
Y.validateRegExpPattern = function (e) {
  this.regexp_pattern(e),
    !e.switchN &&
      this.options.ecmaVersion >= 9 &&
      e.groupNames.length > 0 &&
      ((e.switchN = !0), this.regexp_pattern(e));
};
Y.regexp_pattern = function (e) {
  (e.pos = 0),
    (e.lastIntValue = 0),
    (e.lastStringValue = ''),
    (e.lastAssertionIsQuantifiable = !1),
    (e.numCapturingParens = 0),
    (e.maxBackReference = 0),
    (e.groupNames.length = 0),
    (e.backReferenceNames.length = 0),
    this.regexp_disjunction(e),
    e.pos !== e.source.length &&
      (e.eat(41) && e.raise("Unmatched ')'"),
      (e.eat(93) || e.eat(125)) && e.raise('Lone quantifier brackets')),
    e.maxBackReference > e.numCapturingParens && e.raise('Invalid escape');
  for (var t = 0, r = e.backReferenceNames; t < r.length; t += 1) {
    var n = r[t];
    e.groupNames.indexOf(n) === -1 &&
      e.raise('Invalid named capture referenced');
  }
};
Y.regexp_disjunction = function (e) {
  for (this.regexp_alternative(e); e.eat(124); ) this.regexp_alternative(e);
  this.regexp_eatQuantifier(e, !0) && e.raise('Nothing to repeat'),
    e.eat(123) && e.raise('Lone quantifier brackets');
};
Y.regexp_alternative = function (e) {
  for (; e.pos < e.source.length && this.regexp_eatTerm(e); );
};
Y.regexp_eatTerm = function (e) {
  return this.regexp_eatAssertion(e)
    ? (e.lastAssertionIsQuantifiable &&
        this.regexp_eatQuantifier(e) &&
        e.switchU &&
        e.raise('Invalid quantifier'),
      !0)
    : (e.switchU ? this.regexp_eatAtom(e) : this.regexp_eatExtendedAtom(e))
    ? (this.regexp_eatQuantifier(e), !0)
    : !1;
};
Y.regexp_eatAssertion = function (e) {
  var t = e.pos;
  if (((e.lastAssertionIsQuantifiable = !1), e.eat(94) || e.eat(36))) return !0;
  if (e.eat(92)) {
    if (e.eat(66) || e.eat(98)) return !0;
    e.pos = t;
  }
  if (e.eat(40) && e.eat(63)) {
    var r = !1;
    if (
      (this.options.ecmaVersion >= 9 && (r = e.eat(60)), e.eat(61) || e.eat(33))
    )
      return (
        this.regexp_disjunction(e),
        e.eat(41) || e.raise('Unterminated group'),
        (e.lastAssertionIsQuantifiable = !r),
        !0
      );
  }
  return (e.pos = t), !1;
};
Y.regexp_eatQuantifier = function (e, t) {
  return (
    t === void 0 && (t = !1),
    this.regexp_eatQuantifierPrefix(e, t) ? (e.eat(63), !0) : !1
  );
};
Y.regexp_eatQuantifierPrefix = function (e, t) {
  return (
    e.eat(42) || e.eat(43) || e.eat(63) || this.regexp_eatBracedQuantifier(e, t)
  );
};
Y.regexp_eatBracedQuantifier = function (e, t) {
  var r = e.pos;
  if (e.eat(123)) {
    var n = 0,
      i = -1;
    if (
      this.regexp_eatDecimalDigits(e) &&
      ((n = e.lastIntValue),
      e.eat(44) && this.regexp_eatDecimalDigits(e) && (i = e.lastIntValue),
      e.eat(125))
    )
      return (
        i !== -1 &&
          i < n &&
          !t &&
          e.raise('numbers out of order in {} quantifier'),
        !0
      );
    e.switchU && !t && e.raise('Incomplete quantifier'), (e.pos = r);
  }
  return !1;
};
Y.regexp_eatAtom = function (e) {
  return (
    this.regexp_eatPatternCharacters(e) ||
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e)
  );
};
Y.regexp_eatReverseSolidusAtomEscape = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatAtomEscape(e)) return !0;
    e.pos = t;
  }
  return !1;
};
Y.regexp_eatUncapturingGroup = function (e) {
  var t = e.pos;
  if (e.eat(40)) {
    if (e.eat(63) && e.eat(58)) {
      if ((this.regexp_disjunction(e), e.eat(41))) return !0;
      e.raise('Unterminated group');
    }
    e.pos = t;
  }
  return !1;
};
Y.regexp_eatCapturingGroup = function (e) {
  if (e.eat(40)) {
    if (
      (this.options.ecmaVersion >= 9
        ? this.regexp_groupSpecifier(e)
        : e.current() === 63 && e.raise('Invalid group'),
      this.regexp_disjunction(e),
      e.eat(41))
    )
      return (e.numCapturingParens += 1), !0;
    e.raise('Unterminated group');
  }
  return !1;
};
Y.regexp_eatExtendedAtom = function (e) {
  return (
    e.eat(46) ||
    this.regexp_eatReverseSolidusAtomEscape(e) ||
    this.regexp_eatCharacterClass(e) ||
    this.regexp_eatUncapturingGroup(e) ||
    this.regexp_eatCapturingGroup(e) ||
    this.regexp_eatInvalidBracedQuantifier(e) ||
    this.regexp_eatExtendedPatternCharacter(e)
  );
};
Y.regexp_eatInvalidBracedQuantifier = function (e) {
  return (
    this.regexp_eatBracedQuantifier(e, !0) && e.raise('Nothing to repeat'), !1
  );
};
Y.regexp_eatSyntaxCharacter = function (e) {
  var t = e.current();
  return Zi(t) ? ((e.lastIntValue = t), e.advance(), !0) : !1;
};
function Zi(e) {
  return (
    e === 36 ||
    (e >= 40 && e <= 43) ||
    e === 46 ||
    e === 63 ||
    (e >= 91 && e <= 94) ||
    (e >= 123 && e <= 125)
  );
}
Y.regexp_eatPatternCharacters = function (e) {
  for (var t = e.pos, r = 0; (r = e.current()) !== -1 && !Zi(r); ) e.advance();
  return e.pos !== t;
};
Y.regexp_eatExtendedPatternCharacter = function (e) {
  var t = e.current();
  return t !== -1 &&
    t !== 36 &&
    !(t >= 40 && t <= 43) &&
    t !== 46 &&
    t !== 63 &&
    t !== 91 &&
    t !== 94 &&
    t !== 124
    ? (e.advance(), !0)
    : !1;
};
Y.regexp_groupSpecifier = function (e) {
  if (e.eat(63)) {
    if (this.regexp_eatGroupName(e)) {
      e.groupNames.indexOf(e.lastStringValue) !== -1 &&
        e.raise('Duplicate capture group name'),
        e.groupNames.push(e.lastStringValue);
      return;
    }
    e.raise('Invalid group');
  }
};
Y.regexp_eatGroupName = function (e) {
  if (((e.lastStringValue = ''), e.eat(60))) {
    if (this.regexp_eatRegExpIdentifierName(e) && e.eat(62)) return !0;
    e.raise('Invalid capture group name');
  }
  return !1;
};
Y.regexp_eatRegExpIdentifierName = function (e) {
  if (((e.lastStringValue = ''), this.regexp_eatRegExpIdentifierStart(e))) {
    for (
      e.lastStringValue += tr(e.lastIntValue);
      this.regexp_eatRegExpIdentifierPart(e);

    )
      e.lastStringValue += tr(e.lastIntValue);
    return !0;
  }
  return !1;
};
Y.regexp_eatRegExpIdentifierStart = function (e) {
  var t = e.pos,
    r = this.options.ecmaVersion >= 11,
    n = e.current(r);
  return (
    e.advance(r),
    n === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (n = e.lastIntValue),
    Fo(n) ? ((e.lastIntValue = n), !0) : ((e.pos = t), !1)
  );
};
function Fo(e) {
  return nt(e, !0) || e === 36 || e === 95;
}
Y.regexp_eatRegExpIdentifierPart = function (e) {
  var t = e.pos,
    r = this.options.ecmaVersion >= 11,
    n = e.current(r);
  return (
    e.advance(r),
    n === 92 &&
      this.regexp_eatRegExpUnicodeEscapeSequence(e, r) &&
      (n = e.lastIntValue),
    bo(n) ? ((e.lastIntValue = n), !0) : ((e.pos = t), !1)
  );
};
function bo(e) {
  return pt(e, !0) || e === 36 || e === 95 || e === 8204 || e === 8205;
}
Y.regexp_eatAtomEscape = function (e) {
  return this.regexp_eatBackReference(e) ||
    this.regexp_eatCharacterClassEscape(e) ||
    this.regexp_eatCharacterEscape(e) ||
    (e.switchN && this.regexp_eatKGroupName(e))
    ? !0
    : (e.switchU &&
        (e.current() === 99 && e.raise('Invalid unicode escape'),
        e.raise('Invalid escape')),
      !1);
};
Y.regexp_eatBackReference = function (e) {
  var t = e.pos;
  if (this.regexp_eatDecimalEscape(e)) {
    var r = e.lastIntValue;
    if (e.switchU)
      return r > e.maxBackReference && (e.maxBackReference = r), !0;
    if (r <= e.numCapturingParens) return !0;
    e.pos = t;
  }
  return !1;
};
Y.regexp_eatKGroupName = function (e) {
  if (e.eat(107)) {
    if (this.regexp_eatGroupName(e))
      return e.backReferenceNames.push(e.lastStringValue), !0;
    e.raise('Invalid named reference');
  }
  return !1;
};
Y.regexp_eatCharacterEscape = function (e) {
  return (
    this.regexp_eatControlEscape(e) ||
    this.regexp_eatCControlLetter(e) ||
    this.regexp_eatZero(e) ||
    this.regexp_eatHexEscapeSequence(e) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(e, !1) ||
    (!e.switchU && this.regexp_eatLegacyOctalEscapeSequence(e)) ||
    this.regexp_eatIdentityEscape(e)
  );
};
Y.regexp_eatCControlLetter = function (e) {
  var t = e.pos;
  if (e.eat(99)) {
    if (this.regexp_eatControlLetter(e)) return !0;
    e.pos = t;
  }
  return !1;
};
Y.regexp_eatZero = function (e) {
  return e.current() === 48 && !mr(e.lookahead())
    ? ((e.lastIntValue = 0), e.advance(), !0)
    : !1;
};
Y.regexp_eatControlEscape = function (e) {
  var t = e.current();
  return t === 116
    ? ((e.lastIntValue = 9), e.advance(), !0)
    : t === 110
    ? ((e.lastIntValue = 10), e.advance(), !0)
    : t === 118
    ? ((e.lastIntValue = 11), e.advance(), !0)
    : t === 102
    ? ((e.lastIntValue = 12), e.advance(), !0)
    : t === 114
    ? ((e.lastIntValue = 13), e.advance(), !0)
    : !1;
};
Y.regexp_eatControlLetter = function (e) {
  var t = e.current();
  return eu(t) ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
};
function eu(e) {
  return (e >= 65 && e <= 90) || (e >= 97 && e <= 122);
}
Y.regexp_eatRegExpUnicodeEscapeSequence = function (e, t) {
  t === void 0 && (t = !1);
  var r = e.pos,
    n = t || e.switchU;
  if (e.eat(117)) {
    if (this.regexp_eatFixedHexDigits(e, 4)) {
      var i = e.lastIntValue;
      if (n && i >= 55296 && i <= 56319) {
        var a = e.pos;
        if (e.eat(92) && e.eat(117) && this.regexp_eatFixedHexDigits(e, 4)) {
          var s = e.lastIntValue;
          if (s >= 56320 && s <= 57343)
            return (
              (e.lastIntValue = (i - 55296) * 1024 + (s - 56320) + 65536), !0
            );
        }
        (e.pos = a), (e.lastIntValue = i);
      }
      return !0;
    }
    if (
      n &&
      e.eat(123) &&
      this.regexp_eatHexDigits(e) &&
      e.eat(125) &&
      So(e.lastIntValue)
    )
      return !0;
    n && e.raise('Invalid unicode escape'), (e.pos = r);
  }
  return !1;
};
function So(e) {
  return e >= 0 && e <= 1114111;
}
Y.regexp_eatIdentityEscape = function (e) {
  if (e.switchU)
    return this.regexp_eatSyntaxCharacter(e)
      ? !0
      : e.eat(47)
      ? ((e.lastIntValue = 47), !0)
      : !1;
  var t = e.current();
  return t !== 99 && (!e.switchN || t !== 107)
    ? ((e.lastIntValue = t), e.advance(), !0)
    : !1;
};
Y.regexp_eatDecimalEscape = function (e) {
  e.lastIntValue = 0;
  var t = e.current();
  if (t >= 49 && t <= 57) {
    do (e.lastIntValue = 10 * e.lastIntValue + (t - 48)), e.advance();
    while ((t = e.current()) >= 48 && t <= 57);
    return !0;
  }
  return !1;
};
Y.regexp_eatCharacterClassEscape = function (e) {
  var t = e.current();
  if (_o(t)) return (e.lastIntValue = -1), e.advance(), !0;
  if (e.switchU && this.options.ecmaVersion >= 9 && (t === 80 || t === 112)) {
    if (
      ((e.lastIntValue = -1),
      e.advance(),
      e.eat(123) &&
        this.regexp_eatUnicodePropertyValueExpression(e) &&
        e.eat(125))
    )
      return !0;
    e.raise('Invalid property name');
  }
  return !1;
};
function _o(e) {
  return (
    e === 100 || e === 68 || e === 115 || e === 83 || e === 119 || e === 87
  );
}
Y.regexp_eatUnicodePropertyValueExpression = function (e) {
  var t = e.pos;
  if (this.regexp_eatUnicodePropertyName(e) && e.eat(61)) {
    var r = e.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(e)) {
      var n = e.lastStringValue;
      return this.regexp_validateUnicodePropertyNameAndValue(e, r, n), !0;
    }
  }
  if (((e.pos = t), this.regexp_eatLoneUnicodePropertyNameOrValue(e))) {
    var i = e.lastStringValue;
    return this.regexp_validateUnicodePropertyNameOrValue(e, i), !0;
  }
  return !1;
};
Y.regexp_validateUnicodePropertyNameAndValue = function (e, t, r) {
  cr(e.unicodeProperties.nonBinary, t) || e.raise('Invalid property name'),
    e.unicodeProperties.nonBinary[t].test(r) ||
      e.raise('Invalid property value');
};
Y.regexp_validateUnicodePropertyNameOrValue = function (e, t) {
  e.unicodeProperties.binary.test(t) || e.raise('Invalid property name');
};
Y.regexp_eatUnicodePropertyName = function (e) {
  var t = 0;
  for (e.lastStringValue = ''; tu((t = e.current())); )
    (e.lastStringValue += tr(t)), e.advance();
  return e.lastStringValue !== '';
};
function tu(e) {
  return eu(e) || e === 95;
}
Y.regexp_eatUnicodePropertyValue = function (e) {
  var t = 0;
  for (e.lastStringValue = ''; Bo((t = e.current())); )
    (e.lastStringValue += tr(t)), e.advance();
  return e.lastStringValue !== '';
};
function Bo(e) {
  return tu(e) || mr(e);
}
Y.regexp_eatLoneUnicodePropertyNameOrValue = function (e) {
  return this.regexp_eatUnicodePropertyValue(e);
};
Y.regexp_eatCharacterClass = function (e) {
  if (e.eat(91)) {
    if ((e.eat(94), this.regexp_classRanges(e), e.eat(93))) return !0;
    e.raise('Unterminated character class');
  }
  return !1;
};
Y.regexp_classRanges = function (e) {
  for (; this.regexp_eatClassAtom(e); ) {
    var t = e.lastIntValue;
    if (e.eat(45) && this.regexp_eatClassAtom(e)) {
      var r = e.lastIntValue;
      e.switchU && (t === -1 || r === -1) && e.raise('Invalid character class'),
        t !== -1 &&
          r !== -1 &&
          t > r &&
          e.raise('Range out of order in character class');
    }
  }
};
Y.regexp_eatClassAtom = function (e) {
  var t = e.pos;
  if (e.eat(92)) {
    if (this.regexp_eatClassEscape(e)) return !0;
    if (e.switchU) {
      var r = e.current();
      (r === 99 || iu(r)) && e.raise('Invalid class escape'),
        e.raise('Invalid escape');
    }
    e.pos = t;
  }
  var n = e.current();
  return n !== 93 ? ((e.lastIntValue = n), e.advance(), !0) : !1;
};
Y.regexp_eatClassEscape = function (e) {
  var t = e.pos;
  if (e.eat(98)) return (e.lastIntValue = 8), !0;
  if (e.switchU && e.eat(45)) return (e.lastIntValue = 45), !0;
  if (!e.switchU && e.eat(99)) {
    if (this.regexp_eatClassControlLetter(e)) return !0;
    e.pos = t;
  }
  return (
    this.regexp_eatCharacterClassEscape(e) || this.regexp_eatCharacterEscape(e)
  );
};
Y.regexp_eatClassControlLetter = function (e) {
  var t = e.current();
  return mr(t) || t === 95 ? ((e.lastIntValue = t % 32), e.advance(), !0) : !1;
};
Y.regexp_eatHexEscapeSequence = function (e) {
  var t = e.pos;
  if (e.eat(120)) {
    if (this.regexp_eatFixedHexDigits(e, 2)) return !0;
    e.switchU && e.raise('Invalid escape'), (e.pos = t);
  }
  return !1;
};
Y.regexp_eatDecimalDigits = function (e) {
  var t = e.pos,
    r = 0;
  for (e.lastIntValue = 0; mr((r = e.current())); )
    (e.lastIntValue = 10 * e.lastIntValue + (r - 48)), e.advance();
  return e.pos !== t;
};
function mr(e) {
  return e >= 48 && e <= 57;
}
Y.regexp_eatHexDigits = function (e) {
  var t = e.pos,
    r = 0;
  for (e.lastIntValue = 0; ru((r = e.current())); )
    (e.lastIntValue = 16 * e.lastIntValue + nu(r)), e.advance();
  return e.pos !== t;
};
function ru(e) {
  return (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102);
}
function nu(e) {
  return e >= 65 && e <= 70
    ? 10 + (e - 65)
    : e >= 97 && e <= 102
    ? 10 + (e - 97)
    : e - 48;
}
Y.regexp_eatLegacyOctalEscapeSequence = function (e) {
  if (this.regexp_eatOctalDigit(e)) {
    var t = e.lastIntValue;
    if (this.regexp_eatOctalDigit(e)) {
      var r = e.lastIntValue;
      t <= 3 && this.regexp_eatOctalDigit(e)
        ? (e.lastIntValue = t * 64 + r * 8 + e.lastIntValue)
        : (e.lastIntValue = t * 8 + r);
    } else e.lastIntValue = t;
    return !0;
  }
  return !1;
};
Y.regexp_eatOctalDigit = function (e) {
  var t = e.current();
  return iu(t)
    ? ((e.lastIntValue = t - 48), e.advance(), !0)
    : ((e.lastIntValue = 0), !1);
};
function iu(e) {
  return e >= 48 && e <= 55;
}
Y.regexp_eatFixedHexDigits = function (e, t) {
  var r = e.pos;
  e.lastIntValue = 0;
  for (var n = 0; n < t; ++n) {
    var i = e.current();
    if (!ru(i)) return (e.pos = r), !1;
    (e.lastIntValue = 16 * e.lastIntValue + nu(i)), e.advance();
  }
  return !0;
};
var gr = function (t) {
    (this.type = t.type),
      (this.value = t.value),
      (this.start = t.start),
      (this.end = t.end),
      t.options.locations && (this.loc = new qt(t, t.startLoc, t.endLoc)),
      t.options.ranges && (this.range = [t.start, t.end]);
  },
  fe = xe.prototype;
fe.next = function (e) {
  !e &&
    this.type.keyword &&
    this.containsEsc &&
    this.raiseRecoverable(
      this.start,
      'Escape sequence in keyword ' + this.type.keyword
    ),
    this.options.onToken && this.options.onToken(new gr(this)),
    (this.lastTokEnd = this.end),
    (this.lastTokStart = this.start),
    (this.lastTokEndLoc = this.endLoc),
    (this.lastTokStartLoc = this.startLoc),
    this.nextToken();
};
fe.getToken = function () {
  return this.next(), new gr(this);
};
typeof Symbol != 'undefined' &&
  (fe[Symbol.iterator] = function () {
    var e = this;
    return {
      next: function () {
        var t = e.getToken();
        return { done: t.type === p.eof, value: t };
      }
    };
  });
fe.curContext = function () {
  return this.context[this.context.length - 1];
};
fe.nextToken = function () {
  var e = this.curContext();
  if (
    ((!e || !e.preserveSpace) && this.skipSpace(),
    (this.start = this.pos),
    this.options.locations && (this.startLoc = this.curPosition()),
    this.pos >= this.input.length)
  )
    return this.finishToken(p.eof);
  if (e.override) return e.override(this);
  this.readToken(this.fullCharCodeAtPos());
};
fe.readToken = function (e) {
  return nt(e, this.options.ecmaVersion >= 6) || e === 92
    ? this.readWord()
    : this.getTokenFromCode(e);
};
fe.fullCharCodeAtPos = function () {
  var e = this.input.charCodeAt(this.pos);
  if (e <= 55295 || e >= 57344) return e;
  var t = this.input.charCodeAt(this.pos + 1);
  return (e << 10) + t - 56613888;
};
fe.skipBlockComment = function () {
  var e = this.options.onComment && this.curPosition(),
    t = this.pos,
    r = this.input.indexOf('*/', (this.pos += 2));
  if (
    (r === -1 && this.raise(this.pos - 2, 'Unterminated comment'),
    (this.pos = r + 2),
    this.options.locations)
  ) {
    Ft.lastIndex = t;
    for (var n; (n = Ft.exec(this.input)) && n.index < this.pos; )
      ++this.curLine, (this.lineStart = n.index + n[0].length);
  }
  this.options.onComment &&
    this.options.onComment(
      !0,
      this.input.slice(t + 2, r),
      t,
      this.pos,
      e,
      this.curPosition()
    );
};
fe.skipLineComment = function (e) {
  for (
    var t = this.pos,
      r = this.options.onComment && this.curPosition(),
      n = this.input.charCodeAt((this.pos += e));
    this.pos < this.input.length && !Nt(n);

  )
    n = this.input.charCodeAt(++this.pos);
  this.options.onComment &&
    this.options.onComment(
      !1,
      this.input.slice(t + e, this.pos),
      t,
      this.pos,
      r,
      this.curPosition()
    );
};
fe.skipSpace = function () {
  e: for (; this.pos < this.input.length; ) {
    var e = this.input.charCodeAt(this.pos);
    switch (e) {
      case 32:
      case 160:
        ++this.pos;
        break;
      case 13:
        this.input.charCodeAt(this.pos + 1) === 10 && ++this.pos;
      case 10:
      case 8232:
      case 8233:
        ++this.pos,
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos));
        break;
      case 47:
        switch (this.input.charCodeAt(this.pos + 1)) {
          case 42:
            this.skipBlockComment();
            break;
          case 47:
            this.skipLineComment(2);
            break;
          default:
            break e;
        }
        break;
      default:
        if ((e > 8 && e < 14) || (e >= 5760 && Qr.test(String.fromCharCode(e))))
          ++this.pos;
        else break e;
    }
  }
};
fe.finishToken = function (e, t) {
  (this.end = this.pos),
    this.options.locations && (this.endLoc = this.curPosition());
  var r = this.type;
  (this.type = e), (this.value = t), this.updateContext(r);
};
fe.readToken_dot = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  if (e >= 48 && e <= 57) return this.readNumber(!0);
  var t = this.input.charCodeAt(this.pos + 2);
  return this.options.ecmaVersion >= 6 && e === 46 && t === 46
    ? ((this.pos += 3), this.finishToken(p.ellipsis))
    : (++this.pos, this.finishToken(p.dot));
};
fe.readToken_slash = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return this.exprAllowed
    ? (++this.pos, this.readRegexp())
    : e === 61
    ? this.finishOp(p.assign, 2)
    : this.finishOp(p.slash, 1);
};
fe.readToken_mult_modulo_exp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1),
    r = 1,
    n = e === 42 ? p.star : p.modulo;
  return (
    this.options.ecmaVersion >= 7 &&
      e === 42 &&
      t === 42 &&
      (++r, (n = p.starstar), (t = this.input.charCodeAt(this.pos + 2))),
    t === 61 ? this.finishOp(p.assign, r + 1) : this.finishOp(n, r)
  );
};
fe.readToken_pipe_amp = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  if (t === e) {
    if (this.options.ecmaVersion >= 12) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r === 61) return this.finishOp(p.assign, 3);
    }
    return this.finishOp(e === 124 ? p.logicalOR : p.logicalAND, 2);
  }
  return t === 61
    ? this.finishOp(p.assign, 2)
    : this.finishOp(e === 124 ? p.bitwiseOR : p.bitwiseAND, 1);
};
fe.readToken_caret = function () {
  var e = this.input.charCodeAt(this.pos + 1);
  return e === 61 ? this.finishOp(p.assign, 2) : this.finishOp(p.bitwiseXOR, 1);
};
fe.readToken_plus_min = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === e
    ? t === 45 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 62 &&
      (this.lastTokEnd === 0 ||
        Ve.test(this.input.slice(this.lastTokEnd, this.pos)))
      ? (this.skipLineComment(3), this.skipSpace(), this.nextToken())
      : this.finishOp(p.incDec, 2)
    : t === 61
    ? this.finishOp(p.assign, 2)
    : this.finishOp(p.plusMin, 1);
};
fe.readToken_lt_gt = function (e) {
  var t = this.input.charCodeAt(this.pos + 1),
    r = 1;
  return t === e
    ? ((r = e === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2),
      this.input.charCodeAt(this.pos + r) === 61
        ? this.finishOp(p.assign, r + 1)
        : this.finishOp(p.bitShift, r))
    : t === 33 &&
      e === 60 &&
      !this.inModule &&
      this.input.charCodeAt(this.pos + 2) === 45 &&
      this.input.charCodeAt(this.pos + 3) === 45
    ? (this.skipLineComment(4), this.skipSpace(), this.nextToken())
    : (t === 61 && (r = 2), this.finishOp(p.relational, r));
};
fe.readToken_eq_excl = function (e) {
  var t = this.input.charCodeAt(this.pos + 1);
  return t === 61
    ? this.finishOp(
        p.equality,
        this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2
      )
    : e === 61 && t === 62 && this.options.ecmaVersion >= 6
    ? ((this.pos += 2), this.finishToken(p.arrow))
    : this.finishOp(e === 61 ? p.eq : p.prefix, 1);
};
fe.readToken_question = function () {
  var e = this.options.ecmaVersion;
  if (e >= 11) {
    var t = this.input.charCodeAt(this.pos + 1);
    if (t === 46) {
      var r = this.input.charCodeAt(this.pos + 2);
      if (r < 48 || r > 57) return this.finishOp(p.questionDot, 2);
    }
    if (t === 63) {
      if (e >= 12) {
        var n = this.input.charCodeAt(this.pos + 2);
        if (n === 61) return this.finishOp(p.assign, 3);
      }
      return this.finishOp(p.coalesce, 2);
    }
  }
  return this.finishOp(p.question, 1);
};
fe.getTokenFromCode = function (e) {
  switch (e) {
    case 46:
      return this.readToken_dot();
    case 40:
      return ++this.pos, this.finishToken(p.parenL);
    case 41:
      return ++this.pos, this.finishToken(p.parenR);
    case 59:
      return ++this.pos, this.finishToken(p.semi);
    case 44:
      return ++this.pos, this.finishToken(p.comma);
    case 91:
      return ++this.pos, this.finishToken(p.bracketL);
    case 93:
      return ++this.pos, this.finishToken(p.bracketR);
    case 123:
      return ++this.pos, this.finishToken(p.braceL);
    case 125:
      return ++this.pos, this.finishToken(p.braceR);
    case 58:
      return ++this.pos, this.finishToken(p.colon);
    case 96:
      if (this.options.ecmaVersion < 6) break;
      return ++this.pos, this.finishToken(p.backQuote);
    case 48:
      var t = this.input.charCodeAt(this.pos + 1);
      if (t === 120 || t === 88) return this.readRadixNumber(16);
      if (this.options.ecmaVersion >= 6) {
        if (t === 111 || t === 79) return this.readRadixNumber(8);
        if (t === 98 || t === 66) return this.readRadixNumber(2);
      }
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return this.readNumber(!1);
    case 34:
    case 39:
      return this.readString(e);
    case 47:
      return this.readToken_slash();
    case 37:
    case 42:
      return this.readToken_mult_modulo_exp(e);
    case 124:
    case 38:
      return this.readToken_pipe_amp(e);
    case 94:
      return this.readToken_caret();
    case 43:
    case 45:
      return this.readToken_plus_min(e);
    case 60:
    case 62:
      return this.readToken_lt_gt(e);
    case 61:
    case 33:
      return this.readToken_eq_excl(e);
    case 63:
      return this.readToken_question();
    case 126:
      return this.finishOp(p.prefix, 1);
  }
  this.raise(this.pos, "Unexpected character '" + nn(e) + "'");
};
fe.finishOp = function (e, t) {
  var r = this.input.slice(this.pos, this.pos + t);
  return (this.pos += t), this.finishToken(e, r);
};
fe.readRegexp = function () {
  for (var e, t, r = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(r, 'Unterminated regular expression');
    var n = this.input.charAt(this.pos);
    if ((Ve.test(n) && this.raise(r, 'Unterminated regular expression'), e))
      e = !1;
    else {
      if (n === '[') t = !0;
      else if (n === ']' && t) t = !1;
      else if (n === '/' && !t) break;
      e = n === '\\';
    }
    ++this.pos;
  }
  var i = this.input.slice(r, this.pos);
  ++this.pos;
  var a = this.pos,
    s = this.readWord1();
  this.containsEsc && this.unexpected(a);
  var f = this.regexpState || (this.regexpState = new ut(this));
  f.reset(r, i, s), this.validateRegExpFlags(f), this.validateRegExpPattern(f);
  var h = null;
  try {
    h = new RegExp(i, s);
  } catch {}
  return this.finishToken(p.regexp, { pattern: i, flags: s, value: h });
};
fe.readInt = function (e, t, r) {
  for (
    var n = this.options.ecmaVersion >= 12 && t === void 0,
      i = r && this.input.charCodeAt(this.pos) === 48,
      a = this.pos,
      s = 0,
      f = 0,
      h = 0,
      D = t == null ? 1 / 0 : t;
    h < D;
    ++h, ++this.pos
  ) {
    var v = this.input.charCodeAt(this.pos),
      k = void 0;
    if (n && v === 95) {
      i &&
        this.raiseRecoverable(
          this.pos,
          'Numeric separator is not allowed in legacy octal numeric literals'
        ),
        f === 95 &&
          this.raiseRecoverable(
            this.pos,
            'Numeric separator must be exactly one underscore'
          ),
        h === 0 &&
          this.raiseRecoverable(
            this.pos,
            'Numeric separator is not allowed at the first of digits'
          ),
        (f = v);
      continue;
    }
    if (
      (v >= 97
        ? (k = v - 97 + 10)
        : v >= 65
        ? (k = v - 65 + 10)
        : v >= 48 && v <= 57
        ? (k = v - 48)
        : (k = 1 / 0),
      k >= e)
    )
      break;
    (f = v), (s = s * e + k);
  }
  return (
    n &&
      f === 95 &&
      this.raiseRecoverable(
        this.pos - 1,
        'Numeric separator is not allowed at the last of digits'
      ),
    this.pos === a || (t != null && this.pos - a !== t) ? null : s
  );
};
function wo(e, t) {
  return t ? parseInt(e, 8) : parseFloat(e.replace(/_/g, ''));
}
function uu(e) {
  return typeof BigInt != 'function' ? null : BigInt(e.replace(/_/g, ''));
}
fe.readRadixNumber = function (e) {
  var t = this.pos;
  this.pos += 2;
  var r = this.readInt(e);
  return (
    r == null && this.raise(this.start + 2, 'Expected number in radix ' + e),
    this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110
      ? ((r = uu(this.input.slice(t, this.pos))), ++this.pos)
      : nt(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, 'Identifier directly after number'),
    this.finishToken(p.num, r)
  );
};
fe.readNumber = function (e) {
  var t = this.pos;
  !e &&
    this.readInt(10, void 0, !0) === null &&
    this.raise(t, 'Invalid number');
  var r = this.pos - t >= 2 && this.input.charCodeAt(t) === 48;
  r && this.strict && this.raise(t, 'Invalid number');
  var n = this.input.charCodeAt(this.pos);
  if (!r && !e && this.options.ecmaVersion >= 11 && n === 110) {
    var i = uu(this.input.slice(t, this.pos));
    return (
      ++this.pos,
      nt(this.fullCharCodeAtPos()) &&
        this.raise(this.pos, 'Identifier directly after number'),
      this.finishToken(p.num, i)
    );
  }
  r && /[89]/.test(this.input.slice(t, this.pos)) && (r = !1),
    n === 46 &&
      !r &&
      (++this.pos, this.readInt(10), (n = this.input.charCodeAt(this.pos))),
    (n === 69 || n === 101) &&
      !r &&
      ((n = this.input.charCodeAt(++this.pos)),
      (n === 43 || n === 45) && ++this.pos,
      this.readInt(10) === null && this.raise(t, 'Invalid number')),
    nt(this.fullCharCodeAtPos()) &&
      this.raise(this.pos, 'Identifier directly after number');
  var a = wo(this.input.slice(t, this.pos), r);
  return this.finishToken(p.num, a);
};
fe.readCodePoint = function () {
  var e = this.input.charCodeAt(this.pos),
    t;
  if (e === 123) {
    this.options.ecmaVersion < 6 && this.unexpected();
    var r = ++this.pos;
    (t = this.readHexChar(this.input.indexOf('}', this.pos) - this.pos)),
      ++this.pos,
      t > 1114111 && this.invalidStringToken(r, 'Code point out of bounds');
  } else t = this.readHexChar(4);
  return t;
};
function nn(e) {
  return e <= 65535
    ? String.fromCharCode(e)
    : ((e -= 65536),
      String.fromCharCode((e >> 10) + 55296, (e & 1023) + 56320));
}
fe.readString = function (e) {
  for (var t = '', r = ++this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, 'Unterminated string constant');
    var n = this.input.charCodeAt(this.pos);
    if (n === e) break;
    n === 92
      ? ((t += this.input.slice(r, this.pos)),
        (t += this.readEscapedChar(!1)),
        (r = this.pos))
      : (Nt(n, this.options.ecmaVersion >= 10) &&
          this.raise(this.start, 'Unterminated string constant'),
        ++this.pos);
  }
  return (t += this.input.slice(r, this.pos++)), this.finishToken(p.string, t);
};
var au = {};
fe.tryReadTemplateToken = function () {
  this.inTemplateElement = !0;
  try {
    this.readTmplToken();
  } catch (e) {
    if (e === au) this.readInvalidTemplateToken();
    else throw e;
  }
  this.inTemplateElement = !1;
};
fe.invalidStringToken = function (e, t) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw au;
  this.raise(e, t);
};
fe.readTmplToken = function () {
  for (var e = '', t = this.pos; ; ) {
    this.pos >= this.input.length &&
      this.raise(this.start, 'Unterminated template');
    var r = this.input.charCodeAt(this.pos);
    if (r === 96 || (r === 36 && this.input.charCodeAt(this.pos + 1) === 123))
      return this.pos === this.start &&
        (this.type === p.template || this.type === p.invalidTemplate)
        ? r === 36
          ? ((this.pos += 2), this.finishToken(p.dollarBraceL))
          : (++this.pos, this.finishToken(p.backQuote))
        : ((e += this.input.slice(t, this.pos)),
          this.finishToken(p.template, e));
    if (r === 92)
      (e += this.input.slice(t, this.pos)),
        (e += this.readEscapedChar(!0)),
        (t = this.pos);
    else if (Nt(r)) {
      switch (((e += this.input.slice(t, this.pos)), ++this.pos, r)) {
        case 13:
          this.input.charCodeAt(this.pos) === 10 && ++this.pos;
        case 10:
          e += `
`;
          break;
        default:
          e += String.fromCharCode(r);
          break;
      }
      this.options.locations && (++this.curLine, (this.lineStart = this.pos)),
        (t = this.pos);
    } else ++this.pos;
  }
};
fe.readInvalidTemplateToken = function () {
  for (; this.pos < this.input.length; this.pos++)
    switch (this.input[this.pos]) {
      case '\\':
        ++this.pos;
        break;
      case '$':
        if (this.input[this.pos + 1] !== '{') break;
      case '`':
        return this.finishToken(
          p.invalidTemplate,
          this.input.slice(this.start, this.pos)
        );
    }
  this.raise(this.start, 'Unterminated template');
};
fe.readEscapedChar = function (e) {
  var t = this.input.charCodeAt(++this.pos);
  switch ((++this.pos, t)) {
    case 110:
      return `
`;
    case 114:
      return '\r';
    case 120:
      return String.fromCharCode(this.readHexChar(2));
    case 117:
      return nn(this.readCodePoint());
    case 116:
      return '	';
    case 98:
      return '\b';
    case 118:
      return '\v';
    case 102:
      return '\f';
    case 13:
      this.input.charCodeAt(this.pos) === 10 && ++this.pos;
    case 10:
      return (
        this.options.locations && ((this.lineStart = this.pos), ++this.curLine),
        ''
      );
    case 56:
    case 57:
      if (e) {
        var r = this.pos - 1;
        return (
          this.invalidStringToken(
            r,
            'Invalid escape sequence in template string'
          ),
          null
        );
      }
    default:
      if (t >= 48 && t <= 55) {
        var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
          i = parseInt(n, 8);
        return (
          i > 255 && ((n = n.slice(0, -1)), (i = parseInt(n, 8))),
          (this.pos += n.length - 1),
          (t = this.input.charCodeAt(this.pos)),
          (n !== '0' || t === 56 || t === 57) &&
            (this.strict || e) &&
            this.invalidStringToken(
              this.pos - 1 - n.length,
              e
                ? 'Octal literal in template string'
                : 'Octal literal in strict mode'
            ),
          String.fromCharCode(i)
        );
      }
      return Nt(t) ? '' : String.fromCharCode(t);
  }
};
fe.readHexChar = function (e) {
  var t = this.pos,
    r = this.readInt(16, e);
  return (
    r === null && this.invalidStringToken(t, 'Bad character escape sequence'), r
  );
};
fe.readWord1 = function () {
  this.containsEsc = !1;
  for (
    var e = '', t = !0, r = this.pos, n = this.options.ecmaVersion >= 6;
    this.pos < this.input.length;

  ) {
    var i = this.fullCharCodeAtPos();
    if (pt(i, n)) this.pos += i <= 65535 ? 1 : 2;
    else if (i === 92) {
      (this.containsEsc = !0), (e += this.input.slice(r, this.pos));
      var a = this.pos;
      this.input.charCodeAt(++this.pos) !== 117 &&
        this.invalidStringToken(
          this.pos,
          'Expecting Unicode escape sequence \\uXXXX'
        ),
        ++this.pos;
      var s = this.readCodePoint();
      (t ? nt : pt)(s, n) ||
        this.invalidStringToken(a, 'Invalid Unicode escape'),
        (e += nn(s)),
        (r = this.pos);
    } else break;
    t = !1;
  }
  return e + this.input.slice(r, this.pos);
};
fe.readWord = function () {
  var e = this.readWord1(),
    t = p.name;
  return this.keywords.test(e) && (t = lr[e]), this.finishToken(t, e);
};
var su = '7.4.1';
xe.acorn = {
  Parser: xe,
  version: su,
  defaultOptions: Zt,
  Position: bt,
  SourceLocation: qt,
  getLineInfo: Xr,
  Node: pr,
  TokenType: de,
  tokTypes: p,
  keywordTypes: lr,
  TokContext: We,
  tokContexts: be,
  isIdentifierChar: pt,
  isIdentifierStart: nt,
  Token: gr,
  isNewLine: Nt,
  lineBreak: Ve,
  lineBreakG: Ft,
  nonASCIIwhitespace: Qr
};
function To(e, t) {
  return xe.parse(e, t);
}
function ko(e, t, r) {
  return xe.parseExpressionAt(e, t, r);
}
function No(e, t) {
  return xe.tokenizer(e, t);
}
var Oo = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        Node: pr,
        Parser: xe,
        Position: bt,
        SourceLocation: qt,
        TokContext: We,
        Token: gr,
        TokenType: de,
        defaultOptions: Zt,
        getLineInfo: Xr,
        isIdentifierChar: pt,
        isIdentifierStart: nt,
        isNewLine: Nt,
        keywordTypes: lr,
        lineBreak: Ve,
        lineBreakG: Ft,
        nonASCIIwhitespace: Qr,
        parse: To,
        parseExpressionAt: ko,
        tokContexts: be,
        tokTypes: p,
        tokenizer: No,
        version: su
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  ),
  ou = { exports: {} },
  Io = {
    quot: '"',
    amp: '&',
    apos: "'",
    lt: '<',
    gt: '>',
    nbsp: '\xA0',
    iexcl: '\xA1',
    cent: '\xA2',
    pound: '\xA3',
    curren: '\xA4',
    yen: '\xA5',
    brvbar: '\xA6',
    sect: '\xA7',
    uml: '\xA8',
    copy: '\xA9',
    ordf: '\xAA',
    laquo: '\xAB',
    not: '\xAC',
    shy: '\xAD',
    reg: '\xAE',
    macr: '\xAF',
    deg: '\xB0',
    plusmn: '\xB1',
    sup2: '\xB2',
    sup3: '\xB3',
    acute: '\xB4',
    micro: '\xB5',
    para: '\xB6',
    middot: '\xB7',
    cedil: '\xB8',
    sup1: '\xB9',
    ordm: '\xBA',
    raquo: '\xBB',
    frac14: '\xBC',
    frac12: '\xBD',
    frac34: '\xBE',
    iquest: '\xBF',
    Agrave: '\xC0',
    Aacute: '\xC1',
    Acirc: '\xC2',
    Atilde: '\xC3',
    Auml: '\xC4',
    Aring: '\xC5',
    AElig: '\xC6',
    Ccedil: '\xC7',
    Egrave: '\xC8',
    Eacute: '\xC9',
    Ecirc: '\xCA',
    Euml: '\xCB',
    Igrave: '\xCC',
    Iacute: '\xCD',
    Icirc: '\xCE',
    Iuml: '\xCF',
    ETH: '\xD0',
    Ntilde: '\xD1',
    Ograve: '\xD2',
    Oacute: '\xD3',
    Ocirc: '\xD4',
    Otilde: '\xD5',
    Ouml: '\xD6',
    times: '\xD7',
    Oslash: '\xD8',
    Ugrave: '\xD9',
    Uacute: '\xDA',
    Ucirc: '\xDB',
    Uuml: '\xDC',
    Yacute: '\xDD',
    THORN: '\xDE',
    szlig: '\xDF',
    agrave: '\xE0',
    aacute: '\xE1',
    acirc: '\xE2',
    atilde: '\xE3',
    auml: '\xE4',
    aring: '\xE5',
    aelig: '\xE6',
    ccedil: '\xE7',
    egrave: '\xE8',
    eacute: '\xE9',
    ecirc: '\xEA',
    euml: '\xEB',
    igrave: '\xEC',
    iacute: '\xED',
    icirc: '\xEE',
    iuml: '\xEF',
    eth: '\xF0',
    ntilde: '\xF1',
    ograve: '\xF2',
    oacute: '\xF3',
    ocirc: '\xF4',
    otilde: '\xF5',
    ouml: '\xF6',
    divide: '\xF7',
    oslash: '\xF8',
    ugrave: '\xF9',
    uacute: '\xFA',
    ucirc: '\xFB',
    uuml: '\xFC',
    yacute: '\xFD',
    thorn: '\xFE',
    yuml: '\xFF',
    OElig: '\u0152',
    oelig: '\u0153',
    Scaron: '\u0160',
    scaron: '\u0161',
    Yuml: '\u0178',
    fnof: '\u0192',
    circ: '\u02C6',
    tilde: '\u02DC',
    Alpha: '\u0391',
    Beta: '\u0392',
    Gamma: '\u0393',
    Delta: '\u0394',
    Epsilon: '\u0395',
    Zeta: '\u0396',
    Eta: '\u0397',
    Theta: '\u0398',
    Iota: '\u0399',
    Kappa: '\u039A',
    Lambda: '\u039B',
    Mu: '\u039C',
    Nu: '\u039D',
    Xi: '\u039E',
    Omicron: '\u039F',
    Pi: '\u03A0',
    Rho: '\u03A1',
    Sigma: '\u03A3',
    Tau: '\u03A4',
    Upsilon: '\u03A5',
    Phi: '\u03A6',
    Chi: '\u03A7',
    Psi: '\u03A8',
    Omega: '\u03A9',
    alpha: '\u03B1',
    beta: '\u03B2',
    gamma: '\u03B3',
    delta: '\u03B4',
    epsilon: '\u03B5',
    zeta: '\u03B6',
    eta: '\u03B7',
    theta: '\u03B8',
    iota: '\u03B9',
    kappa: '\u03BA',
    lambda: '\u03BB',
    mu: '\u03BC',
    nu: '\u03BD',
    xi: '\u03BE',
    omicron: '\u03BF',
    pi: '\u03C0',
    rho: '\u03C1',
    sigmaf: '\u03C2',
    sigma: '\u03C3',
    tau: '\u03C4',
    upsilon: '\u03C5',
    phi: '\u03C6',
    chi: '\u03C7',
    psi: '\u03C8',
    omega: '\u03C9',
    thetasym: '\u03D1',
    upsih: '\u03D2',
    piv: '\u03D6',
    ensp: '\u2002',
    emsp: '\u2003',
    thinsp: '\u2009',
    zwnj: '\u200C',
    zwj: '\u200D',
    lrm: '\u200E',
    rlm: '\u200F',
    ndash: '\u2013',
    mdash: '\u2014',
    lsquo: '\u2018',
    rsquo: '\u2019',
    sbquo: '\u201A',
    ldquo: '\u201C',
    rdquo: '\u201D',
    bdquo: '\u201E',
    dagger: '\u2020',
    Dagger: '\u2021',
    bull: '\u2022',
    hellip: '\u2026',
    permil: '\u2030',
    prime: '\u2032',
    Prime: '\u2033',
    lsaquo: '\u2039',
    rsaquo: '\u203A',
    oline: '\u203E',
    frasl: '\u2044',
    euro: '\u20AC',
    image: '\u2111',
    weierp: '\u2118',
    real: '\u211C',
    trade: '\u2122',
    alefsym: '\u2135',
    larr: '\u2190',
    uarr: '\u2191',
    rarr: '\u2192',
    darr: '\u2193',
    harr: '\u2194',
    crarr: '\u21B5',
    lArr: '\u21D0',
    uArr: '\u21D1',
    rArr: '\u21D2',
    dArr: '\u21D3',
    hArr: '\u21D4',
    forall: '\u2200',
    part: '\u2202',
    exist: '\u2203',
    empty: '\u2205',
    nabla: '\u2207',
    isin: '\u2208',
    notin: '\u2209',
    ni: '\u220B',
    prod: '\u220F',
    sum: '\u2211',
    minus: '\u2212',
    lowast: '\u2217',
    radic: '\u221A',
    prop: '\u221D',
    infin: '\u221E',
    ang: '\u2220',
    and: '\u2227',
    or: '\u2228',
    cap: '\u2229',
    cup: '\u222A',
    int: '\u222B',
    there4: '\u2234',
    sim: '\u223C',
    cong: '\u2245',
    asymp: '\u2248',
    ne: '\u2260',
    equiv: '\u2261',
    le: '\u2264',
    ge: '\u2265',
    sub: '\u2282',
    sup: '\u2283',
    nsub: '\u2284',
    sube: '\u2286',
    supe: '\u2287',
    oplus: '\u2295',
    otimes: '\u2297',
    perp: '\u22A5',
    sdot: '\u22C5',
    lceil: '\u2308',
    rceil: '\u2309',
    lfloor: '\u230A',
    rfloor: '\u230B',
    lang: '\u2329',
    rang: '\u232A',
    loz: '\u25CA',
    spades: '\u2660',
    clubs: '\u2663',
    hearts: '\u2665',
    diams: '\u2666'
  },
  Ln = Wu(Oo);
(function (e) {
  const t = Io,
    r = /^[\da-fA-F]+$/,
    n = /^\d+$/,
    i = new WeakMap();
  function a(h) {
    h = h.Parser.acorn || h;
    let D = i.get(h);
    if (!D) {
      const v = h.tokTypes,
        k = h.TokContext,
        A = h.TokenType,
        w = new k('<tag', !1),
        O = new k('</tag', !1),
        x = new k('<tag>...</tag>', !0, !0),
        P = { tc_oTag: w, tc_cTag: O, tc_expr: x },
        K = {
          jsxName: new A('jsxName'),
          jsxText: new A('jsxText', { beforeExpr: !0 }),
          jsxTagStart: new A('jsxTagStart', { startsExpr: !0 }),
          jsxTagEnd: new A('jsxTagEnd')
        };
      (K.jsxTagStart.updateContext = function () {
        this.context.push(x), this.context.push(w), (this.exprAllowed = !1);
      }),
        (K.jsxTagEnd.updateContext = function (ae) {
          let Ae = this.context.pop();
          (Ae === w && ae === v.slash) || Ae === O
            ? (this.context.pop(), (this.exprAllowed = this.curContext() === x))
            : (this.exprAllowed = !0);
        }),
        (D = { tokContexts: P, tokTypes: K }),
        i.set(h, D);
    }
    return D;
  }
  function s(h) {
    if (!h) return h;
    if (h.type === 'JSXIdentifier') return h.name;
    if (h.type === 'JSXNamespacedName')
      return h.namespace.name + ':' + h.name.name;
    if (h.type === 'JSXMemberExpression')
      return s(h.object) + '.' + s(h.property);
  }
  (e.exports = function (h) {
    return (
      (h = h || {}),
      function (D) {
        return f(
          {
            allowNamespaces: h.allowNamespaces !== !1,
            allowNamespacedObjects: !!h.allowNamespacedObjects
          },
          D
        );
      }
    );
  }),
    Object.defineProperty(e.exports, 'tokTypes', {
      get: function () {
        return a(Ln).tokTypes;
      },
      configurable: !0,
      enumerable: !0
    });
  function f(h, D) {
    const v = D.acorn || Ln,
      k = a(v),
      A = v.tokTypes,
      w = k.tokTypes,
      O = v.tokContexts,
      x = k.tokContexts.tc_oTag,
      P = k.tokContexts.tc_cTag,
      K = k.tokContexts.tc_expr,
      ae = v.isNewLine,
      Ae = v.isIdentifierStart,
      _ = v.isIdentifierChar;
    return class extends D {
      static get acornJsx() {
        return k;
      }
      jsx_readToken() {
        let d = '',
          g = this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, 'Unterminated JSX contents');
          let C = this.input.charCodeAt(this.pos);
          switch (C) {
            case 60:
            case 123:
              return this.pos === this.start
                ? C === 60 && this.exprAllowed
                  ? (++this.pos, this.finishToken(w.jsxTagStart))
                  : this.getTokenFromCode(C)
                : ((d += this.input.slice(g, this.pos)),
                  this.finishToken(w.jsxText, d));
            case 38:
              (d += this.input.slice(g, this.pos)),
                (d += this.jsx_readEntity()),
                (g = this.pos);
              break;
            case 62:
            case 125:
              this.raise(
                this.pos,
                'Unexpected token `' +
                  this.input[this.pos] +
                  '`. Did you mean `' +
                  (C === 62 ? '&gt;' : '&rbrace;') +
                  '` or `{"' +
                  this.input[this.pos] +
                  '"}`?'
              );
            default:
              ae(C)
                ? ((d += this.input.slice(g, this.pos)),
                  (d += this.jsx_readNewLine(!0)),
                  (g = this.pos))
                : ++this.pos;
          }
        }
      }
      jsx_readNewLine(d) {
        let g = this.input.charCodeAt(this.pos),
          C;
        return (
          ++this.pos,
          g === 13 && this.input.charCodeAt(this.pos) === 10
            ? (++this.pos,
              (C = d
                ? `
`
                : `\r
`))
            : (C = String.fromCharCode(g)),
          this.options.locations &&
            (++this.curLine, (this.lineStart = this.pos)),
          C
        );
      }
      jsx_readString(d) {
        let g = '',
          C = ++this.pos;
        for (;;) {
          this.pos >= this.input.length &&
            this.raise(this.start, 'Unterminated string constant');
          let y = this.input.charCodeAt(this.pos);
          if (y === d) break;
          y === 38
            ? ((g += this.input.slice(C, this.pos)),
              (g += this.jsx_readEntity()),
              (C = this.pos))
            : ae(y)
            ? ((g += this.input.slice(C, this.pos)),
              (g += this.jsx_readNewLine(!1)),
              (C = this.pos))
            : ++this.pos;
        }
        return (
          (g += this.input.slice(C, this.pos++)), this.finishToken(A.string, g)
        );
      }
      jsx_readEntity() {
        let d = '',
          g = 0,
          C,
          y = this.input[this.pos];
        y !== '&' &&
          this.raise(this.pos, 'Entity must start with an ampersand');
        let U = ++this.pos;
        for (; this.pos < this.input.length && g++ < 10; ) {
          if (((y = this.input[this.pos++]), y === ';')) {
            d[0] === '#'
              ? d[1] === 'x'
                ? ((d = d.substr(2)),
                  r.test(d) && (C = String.fromCharCode(parseInt(d, 16))))
                : ((d = d.substr(1)),
                  n.test(d) && (C = String.fromCharCode(parseInt(d, 10))))
              : (C = t[d]);
            break;
          }
          d += y;
        }
        return C || ((this.pos = U), '&');
      }
      jsx_readWord() {
        let d,
          g = this.pos;
        do d = this.input.charCodeAt(++this.pos);
        while (_(d) || d === 45);
        return this.finishToken(w.jsxName, this.input.slice(g, this.pos));
      }
      jsx_parseIdentifier() {
        let d = this.startNode();
        return (
          this.type === w.jsxName
            ? (d.name = this.value)
            : this.type.keyword
            ? (d.name = this.type.keyword)
            : this.unexpected(),
          this.next(),
          this.finishNode(d, 'JSXIdentifier')
        );
      }
      jsx_parseNamespacedName() {
        let d = this.start,
          g = this.startLoc,
          C = this.jsx_parseIdentifier();
        if (!h.allowNamespaces || !this.eat(A.colon)) return C;
        var y = this.startNodeAt(d, g);
        return (
          (y.namespace = C),
          (y.name = this.jsx_parseIdentifier()),
          this.finishNode(y, 'JSXNamespacedName')
        );
      }
      jsx_parseElementName() {
        if (this.type === w.jsxTagEnd) return '';
        let d = this.start,
          g = this.startLoc,
          C = this.jsx_parseNamespacedName();
        for (
          this.type === A.dot &&
          C.type === 'JSXNamespacedName' &&
          !h.allowNamespacedObjects &&
          this.unexpected();
          this.eat(A.dot);

        ) {
          let y = this.startNodeAt(d, g);
          (y.object = C),
            (y.property = this.jsx_parseIdentifier()),
            (C = this.finishNode(y, 'JSXMemberExpression'));
        }
        return C;
      }
      jsx_parseAttributeValue() {
        switch (this.type) {
          case A.braceL:
            let d = this.jsx_parseExpressionContainer();
            return (
              d.expression.type === 'JSXEmptyExpression' &&
                this.raise(
                  d.start,
                  'JSX attributes must only be assigned a non-empty expression'
                ),
              d
            );
          case w.jsxTagStart:
          case A.string:
            return this.parseExprAtom();
          default:
            this.raise(
              this.start,
              'JSX value should be either an expression or a quoted JSX text'
            );
        }
      }
      jsx_parseEmptyExpression() {
        let d = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
        return this.finishNodeAt(
          d,
          'JSXEmptyExpression',
          this.start,
          this.startLoc
        );
      }
      jsx_parseExpressionContainer() {
        let d = this.startNode();
        return (
          this.next(),
          (d.expression =
            this.type === A.braceR
              ? this.jsx_parseEmptyExpression()
              : this.parseExpression()),
          this.expect(A.braceR),
          this.finishNode(d, 'JSXExpressionContainer')
        );
      }
      jsx_parseAttribute() {
        let d = this.startNode();
        return this.eat(A.braceL)
          ? (this.expect(A.ellipsis),
            (d.argument = this.parseMaybeAssign()),
            this.expect(A.braceR),
            this.finishNode(d, 'JSXSpreadAttribute'))
          : ((d.name = this.jsx_parseNamespacedName()),
            (d.value = this.eat(A.eq) ? this.jsx_parseAttributeValue() : null),
            this.finishNode(d, 'JSXAttribute'));
      }
      jsx_parseOpeningElementAt(d, g) {
        let C = this.startNodeAt(d, g);
        C.attributes = [];
        let y = this.jsx_parseElementName();
        for (
          y && (C.name = y);
          this.type !== A.slash && this.type !== w.jsxTagEnd;

        )
          C.attributes.push(this.jsx_parseAttribute());
        return (
          (C.selfClosing = this.eat(A.slash)),
          this.expect(w.jsxTagEnd),
          this.finishNode(C, y ? 'JSXOpeningElement' : 'JSXOpeningFragment')
        );
      }
      jsx_parseClosingElementAt(d, g) {
        let C = this.startNodeAt(d, g),
          y = this.jsx_parseElementName();
        return (
          y && (C.name = y),
          this.expect(w.jsxTagEnd),
          this.finishNode(C, y ? 'JSXClosingElement' : 'JSXClosingFragment')
        );
      }
      jsx_parseElementAt(d, g) {
        let C = this.startNodeAt(d, g),
          y = [],
          U = this.jsx_parseOpeningElementAt(d, g),
          z = null;
        if (!U.selfClosing) {
          e: for (;;)
            switch (this.type) {
              case w.jsxTagStart:
                if (
                  ((d = this.start),
                  (g = this.startLoc),
                  this.next(),
                  this.eat(A.slash))
                ) {
                  z = this.jsx_parseClosingElementAt(d, g);
                  break e;
                }
                y.push(this.jsx_parseElementAt(d, g));
                break;
              case w.jsxText:
                y.push(this.parseExprAtom());
                break;
              case A.braceL:
                y.push(this.jsx_parseExpressionContainer());
                break;
              default:
                this.unexpected();
            }
          s(z.name) !== s(U.name) &&
            this.raise(
              z.start,
              'Expected corresponding JSX closing tag for <' + s(U.name) + '>'
            );
        }
        let j = U.name ? 'Element' : 'Fragment';
        return (
          (C['opening' + j] = U),
          (C['closing' + j] = z),
          (C.children = y),
          this.type === A.relational &&
            this.value === '<' &&
            this.raise(
              this.start,
              'Adjacent JSX elements must be wrapped in an enclosing tag'
            ),
          this.finishNode(C, 'JSX' + j)
        );
      }
      jsx_parseText() {
        let d = this.parseLiteral(this.value);
        return (d.type = 'JSXText'), d;
      }
      jsx_parseElement() {
        let d = this.start,
          g = this.startLoc;
        return this.next(), this.jsx_parseElementAt(d, g);
      }
      parseExprAtom(d) {
        return this.type === w.jsxText
          ? this.jsx_parseText()
          : this.type === w.jsxTagStart
          ? this.jsx_parseElement()
          : super.parseExprAtom(d);
      }
      readToken(d) {
        let g = this.curContext();
        if (g === K) return this.jsx_readToken();
        if (g === x || g === P) {
          if (Ae(d)) return this.jsx_readWord();
          if (d == 62) return ++this.pos, this.finishToken(w.jsxTagEnd);
          if ((d === 34 || d === 39) && g == x) return this.jsx_readString(d);
        }
        return d === 60 &&
          this.exprAllowed &&
          this.input.charCodeAt(this.pos + 1) !== 33
          ? (++this.pos, this.finishToken(w.jsxTagStart))
          : super.readToken(d);
      }
      updateContext(d) {
        if (this.type == A.braceL) {
          var g = this.curContext();
          g == x
            ? this.context.push(O.b_expr)
            : g == K
            ? this.context.push(O.b_tmpl)
            : super.updateContext(d),
            (this.exprAllowed = !0);
        } else if (this.type === A.slash && d === w.jsxTagStart)
          (this.context.length -= 2),
            this.context.push(P),
            (this.exprAllowed = !1);
        else return super.updateContext(d);
      }
    };
  }
})(ou);
var Po = ou.exports;
function lu(e, t, r, n, i) {
  r || (r = V),
    (function a(s, f, h) {
      var D = h || s.type,
        v = t[D];
      r[D](s, f, a), v && v(s, f);
    })(e, n, i);
}
function Lo(e, t, r, n, i) {
  var a = [];
  r || (r = V),
    (function s(f, h, D) {
      var v = D || f.type,
        k = t[v],
        A = f !== a[a.length - 1];
      A && a.push(f), r[v](f, h, s), k && k(f, h || a, a), A && a.pop();
    })(e, n, i);
}
function un(e, t, r) {
  r(e, t);
}
function dt(e, t, r) {}
var V = {};
V.Program = V.BlockStatement = function (e, t, r) {
  for (var n = 0, i = e.body; n < i.length; n += 1) {
    var a = i[n];
    r(a, t, 'Statement');
  }
};
V.Statement = un;
V.EmptyStatement = dt;
V.ExpressionStatement =
  V.ParenthesizedExpression =
  V.ChainExpression =
    function (e, t, r) {
      return r(e.expression, t, 'Expression');
    };
V.IfStatement = function (e, t, r) {
  r(e.test, t, 'Expression'),
    r(e.consequent, t, 'Statement'),
    e.alternate && r(e.alternate, t, 'Statement');
};
V.LabeledStatement = function (e, t, r) {
  return r(e.body, t, 'Statement');
};
V.BreakStatement = V.ContinueStatement = dt;
V.WithStatement = function (e, t, r) {
  r(e.object, t, 'Expression'), r(e.body, t, 'Statement');
};
V.SwitchStatement = function (e, t, r) {
  r(e.discriminant, t, 'Expression');
  for (var n = 0, i = e.cases; n < i.length; n += 1) {
    var a = i[n];
    a.test && r(a.test, t, 'Expression');
    for (var s = 0, f = a.consequent; s < f.length; s += 1) {
      var h = f[s];
      r(h, t, 'Statement');
    }
  }
};
V.SwitchCase = function (e, t, r) {
  e.test && r(e.test, t, 'Expression');
  for (var n = 0, i = e.consequent; n < i.length; n += 1) {
    var a = i[n];
    r(a, t, 'Statement');
  }
};
V.ReturnStatement =
  V.YieldExpression =
  V.AwaitExpression =
    function (e, t, r) {
      e.argument && r(e.argument, t, 'Expression');
    };
V.ThrowStatement = V.SpreadElement = function (e, t, r) {
  return r(e.argument, t, 'Expression');
};
V.TryStatement = function (e, t, r) {
  r(e.block, t, 'Statement'),
    e.handler && r(e.handler, t),
    e.finalizer && r(e.finalizer, t, 'Statement');
};
V.CatchClause = function (e, t, r) {
  e.param && r(e.param, t, 'Pattern'), r(e.body, t, 'Statement');
};
V.WhileStatement = V.DoWhileStatement = function (e, t, r) {
  r(e.test, t, 'Expression'), r(e.body, t, 'Statement');
};
V.ForStatement = function (e, t, r) {
  e.init && r(e.init, t, 'ForInit'),
    e.test && r(e.test, t, 'Expression'),
    e.update && r(e.update, t, 'Expression'),
    r(e.body, t, 'Statement');
};
V.ForInStatement = V.ForOfStatement = function (e, t, r) {
  r(e.left, t, 'ForInit'),
    r(e.right, t, 'Expression'),
    r(e.body, t, 'Statement');
};
V.ForInit = function (e, t, r) {
  e.type === 'VariableDeclaration' ? r(e, t) : r(e, t, 'Expression');
};
V.DebuggerStatement = dt;
V.FunctionDeclaration = function (e, t, r) {
  return r(e, t, 'Function');
};
V.VariableDeclaration = function (e, t, r) {
  for (var n = 0, i = e.declarations; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
};
V.VariableDeclarator = function (e, t, r) {
  r(e.id, t, 'Pattern'), e.init && r(e.init, t, 'Expression');
};
V.Function = function (e, t, r) {
  e.id && r(e.id, t, 'Pattern');
  for (var n = 0, i = e.params; n < i.length; n += 1) {
    var a = i[n];
    r(a, t, 'Pattern');
  }
  r(e.body, t, e.expression ? 'Expression' : 'Statement');
};
V.Pattern = function (e, t, r) {
  e.type === 'Identifier'
    ? r(e, t, 'VariablePattern')
    : e.type === 'MemberExpression'
    ? r(e, t, 'MemberPattern')
    : r(e, t);
};
V.VariablePattern = dt;
V.MemberPattern = un;
V.RestElement = function (e, t, r) {
  return r(e.argument, t, 'Pattern');
};
V.ArrayPattern = function (e, t, r) {
  for (var n = 0, i = e.elements; n < i.length; n += 1) {
    var a = i[n];
    a && r(a, t, 'Pattern');
  }
};
V.ObjectPattern = function (e, t, r) {
  for (var n = 0, i = e.properties; n < i.length; n += 1) {
    var a = i[n];
    a.type === 'Property'
      ? (a.computed && r(a.key, t, 'Expression'), r(a.value, t, 'Pattern'))
      : a.type === 'RestElement' && r(a.argument, t, 'Pattern');
  }
};
V.Expression = un;
V.ThisExpression = V.Super = V.MetaProperty = dt;
V.ArrayExpression = function (e, t, r) {
  for (var n = 0, i = e.elements; n < i.length; n += 1) {
    var a = i[n];
    a && r(a, t, 'Expression');
  }
};
V.ObjectExpression = function (e, t, r) {
  for (var n = 0, i = e.properties; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
};
V.FunctionExpression = V.ArrowFunctionExpression = V.FunctionDeclaration;
V.SequenceExpression = function (e, t, r) {
  for (var n = 0, i = e.expressions; n < i.length; n += 1) {
    var a = i[n];
    r(a, t, 'Expression');
  }
};
V.TemplateLiteral = function (e, t, r) {
  for (var n = 0, i = e.quasis; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
  for (var s = 0, f = e.expressions; s < f.length; s += 1) {
    var h = f[s];
    r(h, t, 'Expression');
  }
};
V.TemplateElement = dt;
V.UnaryExpression = V.UpdateExpression = function (e, t, r) {
  r(e.argument, t, 'Expression');
};
V.BinaryExpression = V.LogicalExpression = function (e, t, r) {
  r(e.left, t, 'Expression'), r(e.right, t, 'Expression');
};
V.AssignmentExpression = V.AssignmentPattern = function (e, t, r) {
  r(e.left, t, 'Pattern'), r(e.right, t, 'Expression');
};
V.ConditionalExpression = function (e, t, r) {
  r(e.test, t, 'Expression'),
    r(e.consequent, t, 'Expression'),
    r(e.alternate, t, 'Expression');
};
V.NewExpression = V.CallExpression = function (e, t, r) {
  if ((r(e.callee, t, 'Expression'), e.arguments))
    for (var n = 0, i = e.arguments; n < i.length; n += 1) {
      var a = i[n];
      r(a, t, 'Expression');
    }
};
V.MemberExpression = function (e, t, r) {
  r(e.object, t, 'Expression'), e.computed && r(e.property, t, 'Expression');
};
V.ExportNamedDeclaration = V.ExportDefaultDeclaration = function (e, t, r) {
  e.declaration &&
    r(
      e.declaration,
      t,
      e.type === 'ExportNamedDeclaration' || e.declaration.id
        ? 'Statement'
        : 'Expression'
    ),
    e.source && r(e.source, t, 'Expression');
};
V.ExportAllDeclaration = function (e, t, r) {
  e.exported && r(e.exported, t), r(e.source, t, 'Expression');
};
V.ImportDeclaration = function (e, t, r) {
  for (var n = 0, i = e.specifiers; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
  r(e.source, t, 'Expression');
};
V.ImportExpression = function (e, t, r) {
  r(e.source, t, 'Expression');
};
V.ImportSpecifier =
  V.ImportDefaultSpecifier =
  V.ImportNamespaceSpecifier =
  V.Identifier =
  V.Literal =
    dt;
V.TaggedTemplateExpression = function (e, t, r) {
  r(e.tag, t, 'Expression'), r(e.quasi, t, 'Expression');
};
V.ClassDeclaration = V.ClassExpression = function (e, t, r) {
  return r(e, t, 'Class');
};
V.Class = function (e, t, r) {
  e.id && r(e.id, t, 'Pattern'),
    e.superClass && r(e.superClass, t, 'Expression'),
    r(e.body, t);
};
V.ClassBody = function (e, t, r) {
  for (var n = 0, i = e.body; n < i.length; n += 1) {
    var a = i[n];
    r(a, t);
  }
};
V.MethodDefinition = V.Property = function (e, t, r) {
  e.computed && r(e.key, t, 'Expression'), r(e.value, t, 'Expression');
};
var an = Object.assign({}, V, { JSXElement: function () {} }),
  Ro = xe.extend(Po());
function Gt(e) {
  return e != null ? e.name : null;
}
function Rn(e) {
  return e.filter(function (t) {
    return t.type === 'ObjectExpression' || t.type === 'ArrayExpression';
  });
}
function cu(e) {
  var t = [];
  return (
    Lo(
      e,
      {
        ObjectExpression: function (n, i) {
          t.push(Rn(i).length);
        },
        ArrayExpression: function (n, i) {
          t.push(Rn(i).length);
        }
      },
      an
    ),
    Math.max.apply(Math, t)
  );
}
function Mo(e) {
  return { inferredType: { type: ye.IDENTIFIER, identifier: Gt(e) }, ast: e };
}
function jo(e) {
  return { inferredType: { type: ye.LITERAL }, ast: e };
}
function Vo(e) {
  var t;
  lu(
    e.body,
    {
      JSXElement: function (s) {
        t = s;
      }
    },
    an
  );
  var r = t != null,
    n = {
      type: r ? ye.ELEMENT : ye.FUNCTION,
      params: e.params,
      hasParams: e.params.length !== 0
    },
    i = Gt(e.id);
  return i != null && (n.identifier = i), { inferredType: n, ast: e };
}
function Uo(e) {
  var t;
  lu(
    e.body,
    {
      JSXElement: function (i) {
        t = i;
      }
    },
    an
  );
  var r = { type: t != null ? ye.ELEMENT : ye.CLASS, identifier: Gt(e.id) };
  return { inferredType: r, ast: e };
}
function qo(e) {
  var t = { type: ye.ELEMENT },
    r = Gt(e.openingElement.name);
  return r != null && (t.identifier = r), { inferredType: t, ast: e };
}
function Wo(e) {
  var t = e.callee.type === 'MemberExpression' ? e.callee.property : e.callee,
    r = Gt(t);
  return r === 'shape' ? fu(e.arguments[0]) : null;
}
function fu(e) {
  return { inferredType: { type: ye.OBJECT, depth: cu(e) }, ast: e };
}
function Go(e) {
  return { inferredType: { type: ye.ARRAY, depth: cu(e) }, ast: e };
}
function zo(e) {
  switch (e.type) {
    case 'Identifier':
      return Mo(e);
    case 'Literal':
      return jo(e);
    case 'FunctionExpression':
    case 'ArrowFunctionExpression':
      return Vo(e);
    case 'ClassExpression':
      return Uo(e);
    case 'JSXElement':
      return qo(e);
    case 'CallExpression':
      return Wo(e);
    case 'ObjectExpression':
      return fu(e);
    case 'ArrayExpression':
      return Go(e);
    default:
      return null;
  }
}
function $o(e) {
  var t = Ro.parse('('.concat(e, ')')),
    r = { inferredType: { type: ye.UNKNOWN }, ast: t };
  if (t.body[0] != null) {
    var n = t.body[0];
    switch (n.type) {
      case 'ExpressionStatement': {
        var i = zo(n.expression);
        i != null && (r = i);
        break;
      }
    }
  }
  return r;
}
function st(e) {
  try {
    var t = $o(e);
    return Object.assign({}, t);
  } catch {}
  return { inferredType: { type: ye.UNKNOWN } };
}
var Jo = 150,
  me;
(function (e) {
  (e.CUSTOM = 'custom'),
    (e.ANY = 'any'),
    (e.FUNC = 'func'),
    (e.SHAPE = 'shape'),
    (e.OBJECT = 'object'),
    (e.INSTANCEOF = 'instanceOf'),
    (e.OBJECTOF = 'objectOf'),
    (e.UNION = 'union'),
    (e.ENUM = 'enum'),
    (e.ARRAYOF = 'arrayOf'),
    (e.ELEMENT = 'element'),
    (e.ELEMENTTYPE = 'elementType'),
    (e.NODE = 'node');
})(me || (me = {}));
function Ie(e) {
  var t = e.name,
    r = e.short,
    n = e.compact,
    i = e.full,
    a = e.inferredType;
  return {
    name: t,
    short: r,
    compact: n,
    full: i != null ? i : r,
    inferredType: a
  };
}
function pu(e) {
  return e.replace(/PropTypes./g, '').replace(/.isRequired/g, '');
}
function Mn(e) {
  return e.split(/\r?\n/);
}
function rr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return pu(Sr(e, t));
}
function jn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  return pu(at(e, t));
}
function Ho(e) {
  switch (e) {
    case ye.OBJECT:
      return Ut;
    case ye.ARRAY:
      return Vr;
    case ye.CLASS:
      return bs;
    case ye.FUNCTION:
      return vt;
    case ye.ELEMENT:
      return wt;
    default:
      return Fr;
  }
}
function hu(e, t) {
  var r = st(e),
    n = r.inferredType,
    i = r.ast,
    a = n.type,
    s,
    f,
    h;
  switch (a) {
    case ye.IDENTIFIER:
    case ye.LITERAL:
      (s = e), (f = e);
      break;
    case ye.OBJECT: {
      var D = n,
        v = D.depth;
      (s = Ut), (f = v === 1 ? rr(i, !0) : null), (h = rr(i));
      break;
    }
    case ye.ELEMENT: {
      var k = n,
        A = k.identifier;
      (s = A != null && !Ur(A) ? A : wt),
        (f = Mn(e).length === 1 ? e : null),
        (h = e);
      break;
    }
    case ye.ARRAY: {
      var w = n,
        O = w.depth;
      (s = Vr), (f = O <= 2 ? jn(i, !0) : null), (h = jn(i));
      break;
    }
    default:
      (s = Ho(a)), (f = Mn(e).length === 1 ? e : null), (h = e);
      break;
  }
  return Ie({ name: t, short: s, compact: f, full: h, inferredType: a });
}
function Ko(e) {
  var t = e.raw;
  return t != null
    ? hu(t, me.CUSTOM)
    : Ie({ name: me.CUSTOM, short: Fr, compact: Fr });
}
function Qo(e) {
  var t = e.jsDocTags;
  return t != null && (t.params != null || t.returns != null)
    ? Ie({
        name: me.FUNC,
        short: xs(t.params, t.returns),
        compact: null,
        full: vs(t.params, t.returns)
      })
    : Ie({ name: me.FUNC, short: vt, compact: vt });
}
function Xo(e, t) {
  var r = Object.keys(e.value)
      .map(function (h) {
        return ''.concat(h, ': ').concat(St(e.value[h], t).full);
      })
      .join(', '),
    n = st('{ '.concat(r, ' }')),
    i = n.inferredType,
    a = n.ast,
    s = i,
    f = s.depth;
  return Ie({
    name: me.SHAPE,
    short: Ut,
    compact: f === 1 && a ? rr(a, !0) : null,
    full: a ? rr(a) : null
  });
}
function vr(e) {
  return 'objectOf('.concat(e, ')');
}
function Yo(e, t) {
  var r = St(e.value, t),
    n = r.short,
    i = r.compact,
    a = r.full;
  return Ie({
    name: me.OBJECTOF,
    short: vr(n),
    compact: i != null ? vr(i) : null,
    full: vr(a)
  });
}
function Zo(e, t) {
  if (Array.isArray(e.value)) {
    var r = e.value.reduce(
      function (n, i) {
        var a = St(i, t),
          s = a.short,
          f = a.compact,
          h = a.full;
        return n.short.push(s), n.compact.push(f), n.full.push(h), n;
      },
      { short: [], compact: [], full: [] }
    );
    return Ie({
      name: me.UNION,
      short: r.short.join(' | '),
      compact: r.compact.every(function (n) {
        return n != null;
      })
        ? r.compact.join(' | ')
        : null,
      full: r.full.join(' | ')
    });
  }
  return Ie({ name: me.UNION, short: e.value, compact: null });
}
function el(e) {
  var t = e.value,
    r = e.computed;
  return r
    ? hu(t, 'enumvalue')
    : Ie({ name: 'enumvalue', short: t, compact: t });
}
function tl(e) {
  if (Array.isArray(e.value)) {
    var t = e.value.reduce(
      function (r, n) {
        var i = el(n),
          a = i.short,
          s = i.compact,
          f = i.full;
        return r.short.push(a), r.compact.push(s), r.full.push(f), r;
      },
      { short: [], compact: [], full: [] }
    );
    return Ie({
      name: me.ENUM,
      short: t.short.join(' | '),
      compact: t.compact.every(function (r) {
        return r != null;
      })
        ? t.compact.join(' | ')
        : null,
      full: t.full.join(' | ')
    });
  }
  return Ie({ name: me.ENUM, short: e.value, compact: e.value });
}
function wr(e) {
  return ''.concat(e, '[]');
}
function Vn(e) {
  return '['.concat(e, ']');
}
function Un(e, t, r) {
  return Ie({
    name: me.ARRAYOF,
    short: wr(e),
    compact: t != null ? Vn(t) : null,
    full: Vn(r)
  });
}
function rl(e, t) {
  var r = St(e.value, t),
    n = r.name,
    i = r.short,
    a = r.compact,
    s = r.full,
    f = r.inferredType;
  if (n === me.CUSTOM) {
    if (f === ye.OBJECT) return Un(i, a, s);
  } else if (n === me.SHAPE) return Un(i, a, s);
  return Ie({ name: me.ARRAYOF, short: wr(i), compact: wr(i) });
}
function St(e, t) {
  try {
    switch (e.name) {
      case me.CUSTOM:
        return Ko(e);
      case me.FUNC:
        return Qo(t);
      case me.SHAPE:
        return Xo(e, t);
      case me.INSTANCEOF:
        return Ie({ name: me.INSTANCEOF, short: e.value, compact: e.value });
      case me.OBJECTOF:
        return Yo(e, t);
      case me.UNION:
        return Zo(e, t);
      case me.ENUM:
        return tl(e);
      case me.ARRAYOF:
        return rl(e, t);
      default:
        return Ie({ name: e.name, short: e.name, compact: e.name });
    }
  } catch (r) {
    console.error(r);
  }
  return Ie({ name: 'unknown', short: 'unknown', compact: 'unknown' });
}
function nl(e) {
  var t = e.docgenInfo.type;
  if (t == null) return null;
  try {
    switch (t.name) {
      case me.CUSTOM:
      case me.SHAPE:
      case me.INSTANCEOF:
      case me.OBJECTOF:
      case me.UNION:
      case me.ENUM:
      case me.ARRAYOF: {
        var r = St(t, e),
          n = r.short,
          i = r.compact,
          a = r.full;
        return i != null && !jr(i) ? ie(i) : ie(n, a);
      }
      case me.FUNC: {
        var s = St(t, e),
          f = s.short,
          h = s.full,
          D = f,
          v;
        return h.length < Jo ? (D = h) : (v = Fs(h)), ie(D, v);
      }
      default:
        return null;
    }
  } catch (k) {
    console.error(k);
  }
  return null;
}
function du(e) {
  var t = e.inferredType,
    r = e.ast,
    n = t,
    i = n.depth;
  if (i === 1) {
    var a = Sr(r, !0);
    if (!Bt(a)) return ie(a);
  }
  return ie(Ut, Sr(r));
}
function mu(e) {
  var t = e.inferredType,
    r = e.ast,
    n = t,
    i = n.depth;
  if (i <= 2) {
    var a = Nn(r, !0);
    if (!Bt(a)) return ie(a);
  }
  return ie(Vr, Nn(r));
}
function gu(e) {
  var t = e.type,
    r = e.identifier;
  switch (t) {
    case ye.FUNCTION:
      return sn(r, e.hasParams);
    case ye.ELEMENT:
      return Ar(r);
    default:
      return r;
  }
}
function sn(e, t) {
  return t ? ''.concat(e, '( ... )') : ''.concat(e, '()');
}
function Ar(e) {
  return '<'.concat(e, ' />');
}
function il(e) {
  var t = e.inferredType,
    r = e.ast,
    n = t,
    i = n.identifier;
  if (i != null) return ie(gu(t), at(r));
  var a = at(r, !0);
  return Bt(a) ? ie(vt, at(r)) : ie(a);
}
function ul(e, t) {
  var r = t.inferredType,
    n = r,
    i = n.identifier;
  if (i != null && !Ur(i)) {
    var a = gu(r);
    return ie(a, e);
  }
  return Bt(e) ? ie(wt, e) : ie(e);
}
function Au(e) {
  try {
    var t = st(e);
    switch (t.inferredType.type) {
      case ye.OBJECT:
        return du(t);
      case ye.FUNCTION:
        return il(t);
      case ye.ELEMENT:
        return ul(e, t);
      case ye.ARRAY:
        return mu(t);
      default:
        return null;
    }
  } catch (r) {
    console.error(r);
  }
  return null;
}
var al = Gu,
  sl = zu,
  ol = $u,
  ll = '[object String]';
function cl(e) {
  return typeof e == 'string' || (!sl(e) && ol(e) && al(e) == ll);
}
var fl = cl;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function qn(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}
function pl(e) {
  var t, r;
  return qn(e) === !1
    ? !1
    : ((t = e.constructor),
      t === void 0
        ? !0
        : ((r = t.prototype),
          !(qn(r) === !1 || r.hasOwnProperty('isPrototypeOf') === !1)));
}
var Du = {},
  nr =
    (Ye && Ye.__assign) ||
    function () {
      return (
        (nr =
          Object.assign ||
          function (e) {
            for (var t, r = 1, n = arguments.length; r < n; r++) {
              t = arguments[r];
              for (var i in t)
                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            }
            return e;
          }),
        nr.apply(this, arguments)
      );
    },
  hl =
    (Ye && Ye.__spreadArrays) ||
    function () {
      for (var e = 0, t = 0, r = arguments.length; t < r; t++)
        e += arguments[t].length;
      for (var n = Array(e), i = 0, t = 0; t < r; t++)
        for (var a = arguments[t], s = 0, f = a.length; s < f; s++, i++)
          n[i] = a[s];
      return n;
    };
Object.defineProperty(Du, '__esModule', { value: !0 });
var Pt = [];
function dl(e) {
  var t = typeof e;
  return e !== null && (t === 'object' || t === 'function');
}
function ml(e) {
  return Object.prototype.toString.call(e) === '[object RegExp]';
}
function gl(e) {
  return Object.getOwnPropertySymbols(e).filter(function (t) {
    return Object.prototype.propertyIsEnumerable.call(e, t);
  });
}
function Jt(e, t, r) {
  r === void 0 && (r = '');
  var n = { indent: '	', singleQuotes: !0 },
    i = nr(nr({}, n), t),
    a;
  i.inlineCharacterLimit === void 0
    ? (a = {
        newLine: `
`,
        newLineOrSpace: `
`,
        pad: r,
        indent: r + i.indent
      })
    : (a = {
        newLine: '@@__PRETTY_PRINT_NEW_LINE__@@',
        newLineOrSpace: '@@__PRETTY_PRINT_NEW_LINE_OR_SPACE__@@',
        pad: '@@__PRETTY_PRINT_PAD__@@',
        indent: '@@__PRETTY_PRINT_INDENT__@@'
      });
  var s = function (D) {
    if (i.inlineCharacterLimit === void 0) return D;
    var v = D.replace(new RegExp(a.newLine, 'g'), '')
      .replace(new RegExp(a.newLineOrSpace, 'g'), ' ')
      .replace(new RegExp(a.pad + '|' + a.indent, 'g'), '');
    return v.length <= i.inlineCharacterLimit
      ? v
      : D.replace(
          new RegExp(a.newLine + '|' + a.newLineOrSpace, 'g'),
          `
`
        )
          .replace(new RegExp(a.pad, 'g'), r)
          .replace(new RegExp(a.indent, 'g'), r + i.indent);
  };
  if (Pt.indexOf(e) !== -1) return '"[Circular]"';
  if (
    e == null ||
    typeof e == 'number' ||
    typeof e == 'boolean' ||
    typeof e == 'function' ||
    typeof e == 'symbol' ||
    ml(e)
  )
    return String(e);
  if (e instanceof Date) return "new Date('" + e.toISOString() + "')";
  if (Array.isArray(e)) {
    if (e.length === 0) return '[]';
    Pt.push(e);
    var f =
      '[' +
      a.newLine +
      e
        .map(function (D, v) {
          var k = e.length - 1 === v ? a.newLine : ',' + a.newLineOrSpace,
            A = Jt(D, i, r + i.indent);
          return i.transform && (A = i.transform(e, v, A)), a.indent + A + k;
        })
        .join('') +
      a.pad +
      ']';
    return Pt.pop(), s(f);
  }
  if (dl(e)) {
    var h = hl(Object.keys(e), gl(e));
    if (
      (i.filter &&
        (h = h.filter(function (v) {
          return i.filter && i.filter(e, v);
        })),
      h.length === 0)
    )
      return '{}';
    Pt.push(e);
    var f =
      '{' +
      a.newLine +
      h
        .map(function (v, k) {
          var A = h.length - 1 === k ? a.newLine : ',' + a.newLineOrSpace,
            w = typeof v == 'symbol',
            O = !w && /^[a-z$_][a-z$_0-9]*$/i.test(v.toString()),
            x = w || O ? v : Jt(v, i),
            P = Jt(e[v], i, r + i.indent);
          return (
            i.transform && (P = i.transform(e, v, P)),
            a.indent + String(x) + ': ' + P + A
          );
        })
        .join('') +
      a.pad +
      '}';
    return Pt.pop(), s(f);
  }
  return (
    (e = String(e).replace(/[\r\n]/g, function (D) {
      return D ===
        `
`
        ? '\\n'
        : '\\r';
    })),
    i.singleQuotes
      ? ((e = e.replace(/\\?'/g, "\\'")), "'" + e + "'")
      : ((e = e.replace(/"/g, '\\"')), '"' + e + '"')
  );
}
var Al = (Du.prettyPrint = Jt),
  et = function (e, t) {
    return e === 0 ? '' : new Array(e * t).fill(' ').join('');
  };
function yt(e) {
  return (
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? (yt = function (t) {
          return typeof t;
        })
      : (yt = function (t) {
          return t &&
            typeof Symbol == 'function' &&
            t.constructor === Symbol &&
            t !== Symbol.prototype
            ? 'symbol'
            : typeof t;
        }),
    yt(e)
  );
}
function Wn(e) {
  return Dl(e) || El(e) || yl(e) || Cl();
}
function Dl(e) {
  if (Array.isArray(e)) return Tr(e);
}
function El(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function yl(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Tr(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Tr(e, t);
  }
}
function Tr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function Cl() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function kr(e, t) {
  return e === null ||
    yt(e) !== 'object' ||
    e instanceof Date ||
    e instanceof RegExp ||
    _t.exports.isValidElement(e)
    ? e
    : (t.add(e),
      Array.isArray(e)
        ? e.map(function (r) {
            return kr(r, t);
          })
        : Object.keys(e)
            .sort()
            .reduce(function (r, n) {
              return (
                n === '_owner' ||
                  (n === 'current' || t.has(e[n])
                    ? (r[n] = '[Circular]')
                    : (r[n] = kr(e[n], t))),
                r
              );
            }, {}));
}
function vl(e) {
  return kr(e, new WeakSet());
}
var Eu = function (t) {
    return { type: 'string', value: t };
  },
  xl = function (t) {
    return { type: 'number', value: t };
  },
  Fl = function (t, r, n, i) {
    return {
      type: 'ReactElement',
      displayName: t,
      props: r,
      defaultProps: n,
      childrens: i
    };
  },
  bl = function (t, r) {
    return { type: 'ReactFragment', key: t, childrens: r };
  },
  Sl = Boolean(_t.exports.Fragment),
  yu = function (t) {
    return !t.name || t.name === '_default' ? 'No Display Name' : t.name;
  },
  _l = function e(t) {
    switch (!0) {
      case Boolean(t.displayName):
        return t.displayName;
      case t.$$typeof === Xe.exports.Memo:
        return e(t.type);
      case t.$$typeof === Xe.exports.ForwardRef:
        return e(t.render);
      default:
        return yu(t);
    }
  },
  Bl = function (t) {
    switch (!0) {
      case typeof t.type == 'string':
        return t.type;
      case typeof t.type == 'function':
        return t.type.displayName ? t.type.displayName : yu(t.type);
      case Xe.exports.isForwardRef(t):
      case Xe.exports.isMemo(t):
        return _l(t.type);
      case Xe.exports.isContextConsumer(t):
        return ''.concat(t.type._context.displayName || 'Context', '.Consumer');
      case Xe.exports.isContextProvider(t):
        return ''.concat(t.type._context.displayName || 'Context', '.Provider');
      case Xe.exports.isLazy(t):
        return 'Lazy';
      case Xe.exports.isProfiler(t):
        return 'Profiler';
      case Xe.exports.isStrictMode(t):
        return 'StrictMode';
      case Xe.exports.isSuspense(t):
        return 'Suspense';
      default:
        return 'UnknownElementType';
    }
  },
  Gn = function (t, r) {
    return r !== 'children';
  },
  wl = function (t) {
    return t !== !0 && t !== !1 && t !== null && t !== '';
  },
  zn = function (t, r) {
    var n = {};
    return (
      Object.keys(t)
        .filter(function (i) {
          return r(t[i], i);
        })
        .forEach(function (i) {
          return (n[i] = t[i]);
        }),
      n
    );
  },
  on = function e(t, r) {
    var n = r.displayName,
      i = n === void 0 ? Bl : n;
    if (typeof t == 'string') return Eu(t);
    if (typeof t == 'number') return xl(t);
    if (!Ht.isValidElement(t))
      throw new Error(
        'react-element-to-jsx-string: Expected a React.Element, got `'.concat(
          yt(t),
          '`'
        )
      );
    var a = i(t),
      s = zn(t.props, Gn);
    t.ref !== null && (s.ref = t.ref);
    var f = t.key;
    typeof f == 'string' && f.search(/^\./) && (s.key = f);
    var h = zn(t.type.defaultProps || {}, Gn),
      D = Ht.Children.toArray(t.props.children)
        .filter(wl)
        .map(function (v) {
          return e(v, r);
        });
    return Sl && t.type === _t.exports.Fragment ? bl(f, D) : Fl(a, s, h, D);
  };
function Tl() {}
var kl = function (t) {
    return t
      .toString()
      .split(
        `
`
      )
      .map(function (r) {
        return r.trim();
      })
      .join('');
  },
  $n = kl,
  Cu = function (e, t) {
    var r = t.functionValue,
      n = r === void 0 ? $n : r,
      i = t.showFunctions;
    return n(!i && n === $n ? Tl : e);
  },
  Nl = function (e, t, r, n) {
    var i = vl(e),
      a = Al(i, {
        transform: function (f, h, D) {
          var v = f[h];
          return v && _t.exports.isValidElement(v)
            ? Dr(on(v, n), !0, r, n)
            : typeof v == 'function'
            ? Cu(v, n)
            : D;
        }
      });
    return t
      ? a
          .replace(/\s+/g, ' ')
          .replace(/{ /g, '{')
          .replace(/ }/g, '}')
          .replace(/\[ /g, '[')
          .replace(/ ]/g, ']')
      : a.replace(/\t/g, et(1, n.tabStop)).replace(
          /\n([^$])/g,
          `
`.concat(et(r + 1, n.tabStop), '$1')
        );
  },
  Ol = function (t) {
    return t.replace(/"/g, '&quot;');
  },
  Il = function (t, r, n, i) {
    if (typeof t == 'number') return '{'.concat(String(t), '}');
    if (typeof t == 'string') return '"'.concat(Ol(t), '"');
    if (yt(t) === 'symbol') {
      var a = t
        .valueOf()
        .toString()
        .replace(/Symbol\((.*)\)/, '$1');
      return a ? "{Symbol('".concat(a, "')}") : '{Symbol()}';
    }
    return typeof t == 'function'
      ? '{'.concat(Cu(t, i), '}')
      : _t.exports.isValidElement(t)
      ? '{'.concat(Dr(on(t, i), !0, n, i), '}')
      : t instanceof Date
      ? isNaN(t.valueOf())
        ? '{new Date(NaN)}'
        : '{new Date("'.concat(t.toISOString(), '")}')
      : pl(t) || Array.isArray(t)
      ? '{'.concat(Nl(t, r, n, i), '}')
      : '{'.concat(String(t), '}');
  },
  Pl = function (e, t, r, n, i, a, s, f) {
    if (!t && !n)
      throw new Error(
        'The prop "'.concat(
          e,
          '" has no value and no default: could not be formatted'
        )
      );
    var h = t ? r : i,
      D = f.useBooleanShorthandSyntax,
      v = f.tabStop,
      k = Il(h, a, s, f),
      A = ' ',
      w = `
`.concat(et(s + 1, v)),
      O = k.includes(`
`);
    return (
      D && k === '{false}' && !n
        ? ((A = ''), (w = ''))
        : D && k === '{true}'
        ? ((A += ''.concat(e)), (w += ''.concat(e)))
        : ((A += ''.concat(e, '=').concat(k)),
          (w += ''.concat(e, '=').concat(k))),
      {
        attributeFormattedInline: A,
        attributeFormattedMultiline: w,
        isMultilineAttribute: O
      }
    );
  },
  Ll = function (e, t) {
    var r = e.slice(0, e.length > 0 ? e.length - 1 : 0),
      n = e[e.length - 1];
    return (
      n &&
      (t.type === 'string' || t.type === 'number') &&
      (n.type === 'string' || n.type === 'number')
        ? r.push(Eu(String(n.value) + String(t.value)))
        : (n && r.push(n), r.push(t)),
      r
    );
  },
  Rl = function (t) {
    return ['key', 'ref'].includes(t);
  },
  Ml = function (e) {
    return function (t) {
      var r = t.includes('key'),
        n = t.includes('ref'),
        i = t.filter(function (s) {
          return !Rl(s);
        }),
        a = Wn(e ? i.sort() : i);
      return n && a.unshift('ref'), r && a.unshift('key'), a;
    };
  };
function jl(e, t) {
  return Array.isArray(t)
    ? function (r) {
        return t.indexOf(r) === -1;
      }
    : function (r) {
        return t(e[r], r);
      };
}
var Vl = function (t, r, n, i, a) {
    var s = a.tabStop;
    return t.type === 'string'
      ? r
          .split(
            `
`
          )
          .map(function (f, h) {
            return h === 0 ? f : ''.concat(et(i, s)).concat(f);
          }).join(`
`)
      : r;
  },
  Ul = function (t, r, n) {
    return function (i) {
      return Vl(i, Dr(i, t, r, n), t, r, n);
    };
  },
  ql = function (t, r) {
    return function (n) {
      var i = Object.keys(t).includes(n);
      return !i || (i && t[n] !== r[n]);
    };
  },
  vu = function (t, r, n, i, a) {
    return a ? et(n, i).length + r.length > a : t.length > 1;
  },
  Wl = function (t, r, n, i, a, s, f) {
    return (vu(t, r, a, s, f) || n) && !i;
  },
  xu = function (e, t, r, n) {
    var i = e.type,
      a = e.displayName,
      s = a === void 0 ? '' : a,
      f = e.childrens,
      h = e.props,
      D = h === void 0 ? {} : h,
      v = e.defaultProps,
      k = v === void 0 ? {} : v;
    if (i !== 'ReactElement')
      throw new Error(
        'The "formatReactElementNode" function could only format node of type "ReactElement". Given:  '.concat(
          i
        )
      );
    var A = n.filterProps,
      w = n.maxInlineAttributesLineLength,
      O = n.showDefaultProps,
      x = n.sortProps,
      P = n.tabStop,
      K = '<'.concat(s),
      ae = K,
      Ae = K,
      _ = !1,
      d = [],
      g = jl(D, A);
    Object.keys(D)
      .filter(g)
      .filter(ql(k, D))
      .forEach(function (U) {
        return d.push(U);
      }),
      Object.keys(k)
        .filter(g)
        .filter(function () {
          return O;
        })
        .filter(function (U) {
          return !d.includes(U);
        })
        .forEach(function (U) {
          return d.push(U);
        });
    var C = Ml(x)(d);
    if (
      (C.forEach(function (U) {
        var z = Pl(
            U,
            Object.keys(D).includes(U),
            D[U],
            Object.keys(k).includes(U),
            k[U],
            t,
            r,
            n
          ),
          j = z.attributeFormattedInline,
          Q = z.attributeFormattedMultiline,
          W = z.isMultilineAttribute;
        W && (_ = !0), (ae += j), (Ae += Q);
      }),
      (Ae += `
`.concat(et(r, P))),
      Wl(C, ae, _, t, r, P, w) ? (K = Ae) : (K = ae),
      f && f.length > 0)
    ) {
      var y = r + 1;
      (K += '>'),
        t ||
          ((K += `
`),
          (K += et(y, P))),
        (K += f
          .reduce(Ll, [])
          .map(Ul(t, y, n))
          .join(
            t
              ? ''
              : `
`.concat(et(y, P))
          )),
        t ||
          ((K += `
`),
          (K += et(y - 1, P))),
        (K += '</'.concat(s, '>'));
    } else vu(C, ae, r, P, w) || (K += ' '), (K += '/>');
    return K;
  },
  Gl = '',
  Jn = 'React.Fragment',
  zl = function (t, r, n) {
    var i = {};
    return (
      r && (i = { key: r }),
      {
        type: 'ReactElement',
        displayName: t,
        props: i,
        defaultProps: {},
        childrens: n
      }
    );
  },
  $l = function (t) {
    var r = t.key;
    return Boolean(r);
  },
  Jl = function (t) {
    var r = t.childrens;
    return r.length === 0;
  },
  Hl = function (e, t, r, n) {
    var i = e.type,
      a = e.key,
      s = e.childrens;
    if (i !== 'ReactFragment')
      throw new Error(
        'The "formatReactFragmentNode" function could only format node of type "ReactFragment". Given: '.concat(
          i
        )
      );
    var f = n.useFragmentShortSyntax,
      h;
    return (
      f ? (Jl(e) || $l(e) ? (h = Jn) : (h = Gl)) : (h = Jn),
      xu(zl(h, a, s), t, r, n)
    );
  },
  Kl = ['<', '>', '{', '}'],
  Ql = function (t) {
    return Kl.some(function (r) {
      return t.includes(r);
    });
  },
  Xl = function (t) {
    return Ql(t) ? '{`'.concat(t, '`}') : t;
  },
  Yl = function (t) {
    var r = t;
    return (
      r.endsWith(' ') && (r = r.replace(/^(.*?)(\s+)$/, "$1{'$2'}")),
      r.startsWith(' ') && (r = r.replace(/^(\s+)(.*)$/, "{'$1'}$2")),
      r
    );
  },
  Dr = function (e, t, r, n) {
    if (e.type === 'number') return String(e.value);
    if (e.type === 'string')
      return e.value ? ''.concat(Yl(Xl(String(e.value)))) : '';
    if (e.type === 'ReactElement') return xu(e, t, r, n);
    if (e.type === 'ReactFragment') return Hl(e, t, r, n);
    throw new TypeError('Unknow format type "'.concat(e.type, '"'));
  },
  Zl = function (e, t) {
    return Dr(e, !1, 0, t);
  },
  Nr = function (t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = r.filterProps,
      i = n === void 0 ? [] : n,
      a = r.showDefaultProps,
      s = a === void 0 ? !0 : a,
      f = r.showFunctions,
      h = f === void 0 ? !1 : f,
      D = r.functionValue,
      v = r.tabStop,
      k = v === void 0 ? 2 : v,
      A = r.useBooleanShorthandSyntax,
      w = A === void 0 ? !0 : A,
      O = r.useFragmentShortSyntax,
      x = O === void 0 ? !0 : O,
      P = r.sortProps,
      K = P === void 0 ? !0 : P,
      ae = r.maxInlineAttributesLineLength,
      Ae = r.displayName;
    if (!t)
      throw new Error('react-element-to-jsx-string: Expected a ReactElement');
    var _ = {
      filterProps: i,
      showDefaultProps: s,
      showFunctions: h,
      functionValue: D,
      tabStop: k,
      useBooleanShorthandSyntax: w,
      useFragmentShortSyntax: x,
      sortProps: K,
      maxInlineAttributesLineLength: ae,
      displayName: Ae
    };
    return Zl(on(t, _), _);
  };
function Or(e) {
  return (
    (Or =
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
    Or(e)
  );
}
function Fu(e) {
  return e.$$typeof != null;
}
function bu(e, t) {
  var r = e.name;
  return r !== '' && r !== 'anonymous' && r !== t ? r : null;
}
var ec = function (t) {
  return ie(JSON.stringify(t));
};
function tc(e) {
  var t = e.type,
    r = t.displayName,
    n = Nr(e, {});
  if (r != null) {
    var i = Ar(r);
    return ie(i, n);
  }
  if (fl(t) && Ur(t)) {
    var a = Nr(e, { tabStop: 0 }),
      s = a.replace(/\r?\n|\r/g, '');
    if (!Bt(s)) return ie(s);
  }
  return ie(wt, n);
}
var rc = function (t) {
    if (Fu(t) && t.type != null) return tc(t);
    if (Ju(t)) {
      var r = st(JSON.stringify(t));
      return du(r);
    }
    if (Array.isArray(t)) {
      var n = st(JSON.stringify(t));
      return mu(n);
    }
    return ie(Ut);
  },
  nc = function (t, r) {
    var n = !1,
      i;
    if (En(t.render)) n = !0;
    else if (t.prototype != null && En(t.prototype.render)) n = !0;
    else {
      var a;
      try {
        i = st(t.toString());
        var s = i.inferredType,
          f = s.hasParams,
          h = s.params;
        f
          ? h.length === 1 && h[0].type === 'ObjectPattern' && (a = t({}))
          : (a = t()),
          a != null && Fu(a) && (n = !0);
      } catch {}
    }
    var D = bu(t, r.name);
    if (D != null) {
      if (n) return ie(Ar(D));
      i != null && (i = st(t.toString()));
      var v = i.inferredType,
        k = v.hasParams;
      return ie(sn(D, k));
    }
    return ie(n ? wt : vt);
  },
  ic = function (t) {
    return ie(t.toString());
  },
  Su = { string: ec, object: rc, function: nc, default: ic };
function uc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.assign({}, Su, e);
}
function _u(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Su;
  try {
    switch (Or(e)) {
      case 'string':
        return r.string(e, t);
      case 'object':
        return r.object(e, t);
      case 'function':
        return r.function(e, t);
      default:
        return r.default(e, t);
    }
  } catch (n) {
    console.error(n);
  }
  return null;
}
function ac(e, t) {
  var r = t.propTypes;
  return r != null
    ? Object.keys(r)
        .map(function (n) {
          return e.find(function (i) {
            return i.name === n;
          });
        })
        .filter(function (n) {
          return n;
        })
    : e;
}
var sc = function (t, r) {
    var n = r.name,
      i = r.type,
      a = i.summary === 'element' || i.summary === 'elementType',
      s = bu(t, n);
    if (s != null) {
      if (a) return ie(Ar(s));
      var f = st(t.toString()).inferredType,
        h = f.hasParams;
      return ie(sn(s, h));
    }
    return ie(a ? wt : vt);
  },
  oc = uc({ function: sc });
function lc(e, t) {
  var r = e.propDef,
    n = nl(e);
  n != null && (r.type = n);
  var i = e.docgenInfo.defaultValue;
  if (i != null && i.value != null) {
    var a = Au(i.value);
    a != null && (r.defaultValue = a);
  } else if (t != null) {
    var s = _u(t, r, oc);
    s != null && (r.defaultValue = s);
  }
  return r;
}
function cc(e, t) {
  var r = t.defaultProps != null ? t.defaultProps : {},
    n = e.map(function (i) {
      return lc(i, r[i.propDef.name]);
    });
  return ac(n, t);
}
function fc(e, t) {
  var r = e.propDef,
    n = e.docgenInfo.defaultValue;
  if (n != null && n.value != null) {
    var i = Au(n.value);
    i != null && (r.defaultValue = i);
  } else if (t != null) {
    var a = _u(t, r);
    a != null && (r.defaultValue = a);
  }
  return r;
}
function pc(e) {
  return e.map(function (t) {
    return fc(t);
  });
}
var Hn = new Map();
Object.keys(Tn).forEach(function (e) {
  var t = Tn[e];
  Hn.set(t, e), Hn.set(t.isRequired, e);
});
function hc(e, t) {
  var r = e;
  !Rr(e) && !e.propTypes && Oi(e) && (r = e.type);
  var n = hs(r, t);
  if (n.length === 0) return [];
  switch (n[0].typeSystem) {
    case $e.JAVASCRIPT:
      return cc(n, e);
    case $e.TYPESCRIPT:
      return pc(n);
    default:
      return n.map(function (i) {
        return i.propDef;
      });
  }
}
var dc = function (t) {
    return { rows: hc(t, 'props') };
  },
  mc = function (t) {
    if (t) {
      var r = dc(t),
        n = r.rows;
      if (n)
        return n.reduce(function (i, a) {
          var s = a.name,
            f = a.description,
            h = a.type,
            D = a.sbType,
            v = a.defaultValue,
            k = a.jsDocTags,
            A = a.required;
          return (
            (i[s] = {
              name: s,
              description: f,
              type: Object.assign({ required: A }, D),
              table: { type: h, jsDocTags: k, defaultValue: v }
            }),
            i
          );
        }, {});
    }
    return null;
  },
  gc = ['mdxType', 'originalType', 'children'],
  Kn;
function Ac(e) {
  return Cc(e) || yc(e) || Ec(e) || Dc();
}
function Dc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ec(e, t) {
  if (!!e) {
    if (typeof e == 'string') return Ir(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e);
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Ir(e, t);
  }
}
function yc(e) {
  if (
    (typeof Symbol != 'undefined' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e);
}
function Cc(e) {
  if (Array.isArray(e)) return Ir(e);
}
function Ir(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function vc(e, t) {
  if (e == null) return {};
  var r = xc(e, t),
    n,
    i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      (n = a[i]),
        !(t.indexOf(n) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, n) || (r[n] = e[n]));
  }
  return r;
}
function xc(e, t) {
  if (e == null) return {};
  var r = {},
    n = Object.keys(e),
    i,
    a;
  for (a = 0; a < n.length; a++)
    (i = n[a]), !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function Fc(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
    )
  );
}
var bc = function (t, r) {
    if (typeof r.onBeforeRender != 'function') return t;
    var n = Qu(
      r.onBeforeRender,
      Qn(
        Kn ||
          (Kn = Fc([
            `
      StoryFn.parameters.jsx.onBeforeRender was deprecated.
      Prefer StoryFn.parameters.jsx.transformSource instead.
      See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-onbeforerender for details.
    `
          ]))
      )
    );
    return n(t);
  },
  Sc = function (t, r, n) {
    return typeof r.transformSource != 'function' ? t : r.transformSource(t, n);
  },
  _c = function (t, r) {
    if (typeof t == 'undefined')
      return $t.warn('Too many skip or undefined component'), null;
    for (var n = t, i = n.type, a = 0; a < r.skip; a += 1) {
      if (typeof n == 'undefined')
        return $t.warn('Cannot skip undefined element'), null;
      if (Ht.Children.count(n) > 1)
        return $t.warn('Trying to skip an array of elements'), null;
      typeof n.props.children == 'undefined'
        ? ($t.warn('Not enough children to skip elements.'),
          typeof n.type == 'function' &&
            n.type.name === '' &&
            (n = Yu(i, Dn({}, n.props))))
        : typeof n.props.children == 'function'
        ? (n = n.props.children())
        : (n = n.props.children);
    }
    var s =
        typeof r.displayName == 'string'
          ? {
              showFunctions: !0,
              displayName: function () {
                return r.displayName;
              }
            }
          : {
              displayName: function (k) {
                return (
                  k.type.displayName ||
                  ei(k.type, 'displayName') ||
                  (k.type.name !== '_default' ? k.type.name : null) ||
                  (typeof k.type == 'function' ? 'No Display Name' : null) ||
                  (io(k.type) ? k.type.render.name : null) ||
                  (Oi(k.type) ? k.type.type.name : null) ||
                  k.type
                );
              }
            },
      f = {
        filterProps: function (k, A) {
          return k !== void 0;
        }
      },
      h = Object.assign({}, s, f, r),
      D = Ht.Children.map(t, function (v) {
        var k = typeof v == 'number' ? v.toString() : v,
          A = bc(Nr(k, h), r);
        if (A.indexOf('&quot;') > -1) {
          var w = A.match(/\S+=\\"([^"]*)\\"/g);
          w &&
            w.forEach(function (O) {
              A = A.replace(O, O.replace(/&quot;/g, "'"));
            });
        }
        return A;
      }).join(`
`);
    return D.replace(/function\s+noRefCheck\(\)\s+\{\}/, '() => {}');
  },
  Bc = { skip: 0, showFunctions: !1, enableBeautify: !0, showDefaultProps: !1 },
  wc = function (t) {
    var r,
      n =
        t == null || (r = t.parameters.docs) === null || r === void 0
          ? void 0
          : r.source,
      i = t == null ? void 0 : t.parameters.__isArgsStory;
    return (n == null ? void 0 : n.type) === Qt.DYNAMIC
      ? !1
      : !i ||
          (n == null ? void 0 : n.code) ||
          (n == null ? void 0 : n.type) === Qt.CODE;
  },
  Tc = function (t) {
    var r, n;
    return (
      ((r = t.type) === null || r === void 0 ? void 0 : r.displayName) ===
        'MDXCreateElement' &&
      !!((n = t.props) !== null && n !== void 0 && n.mdxType)
    );
  },
  kc = function e(t) {
    if (!Tc(t)) return t;
    var r = t.props;
    r.mdxType;
    var n = r.originalType,
      i = r.children,
      a = vc(r, gc),
      s = [];
    if (i) {
      var f = Array.isArray(i) ? i : [i];
      s = f.map(e);
    }
    return _t.exports.createElement.apply(void 0, [n, a].concat(Ac(s)));
  },
  Nc = function (t, r) {
    var n,
      i,
      a = Hu.getChannel(),
      s = wc(r),
      f = t(),
      h = '';
    if (
      (Ku(function () {
        s || a.emit(As, (r || {}).id, h);
      }),
      s)
    )
      return f;
    var D = Object.assign(
        {},
        Bc,
        (r == null ? void 0 : r.parameters.jsx) || {}
      ),
      v =
        r != null &&
        (n = r.parameters.docs) !== null &&
        n !== void 0 &&
        (i = n.source) !== null &&
        i !== void 0 &&
        i.excludeDecorators
          ? r.originalStoryFn(r.args, r)
          : f,
      k = kc(v),
      A = _c(k, D);
    return A && (h = Sc(A, D, r)), f;
  },
  jc = {
    docs: {
      inlineStories: !0,
      prepareForInline: function (t) {
        return t();
      },
      extractArgTypes: mc,
      extractComponentDescription: ds
    }
  },
  Vc = [Nc],
  Uc = [ms];
export { Uc as argTypesEnhancers, Vc as decorators, jc as parameters };
//# sourceMappingURL=config.62b4f0eb.js.map
