import { k as c } from './iframe.99391157.js';
function p(r, n, t, a, e, s, i) {
  try {
    var o = r[s](i),
      u = o.value;
  } catch (f) {
    t(f);
    return;
  }
  o.done ? n(u) : Promise.resolve(u).then(a, e);
}
function g(r) {
  return function () {
    var n = this,
      t = arguments;
    return new Promise(function (a, e) {
      var s = r.apply(n, t);
      function i(u) {
        p(s, a, e, i, o, 'next', u);
      }
      function o(u) {
        p(s, a, e, i, o, 'throw', u);
      }
      i(void 0);
    });
  };
}
var m = {
  docs: {
    getContainer: (function () {
      var r = g(
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    c(
                      () => import('./index.77a88129.js'),
                      [
                        'assets/index.77a88129.js',
                        'assets/Props.48585ce3.js',
                        'assets/index.d1b1a1f8.js',
                        'assets/iframe.99391157.js',
                        'assets/jsx-runtime.bd940121.js',
                        'assets/string.bf3fd91c.js'
                      ]
                    )
                  );
                case 2:
                  return e.abrupt('return', e.sent.DocsContainer);
                case 3:
                case 'end':
                  return e.stop();
              }
          }, t);
        })
      );
      function n() {
        return r.apply(this, arguments);
      }
      return n;
    })(),
    getPage: (function () {
      var r = g(
        regeneratorRuntime.mark(function t() {
          return regeneratorRuntime.wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2),
                    c(
                      () => import('./index.77a88129.js'),
                      [
                        'assets/index.77a88129.js',
                        'assets/Props.48585ce3.js',
                        'assets/index.d1b1a1f8.js',
                        'assets/iframe.99391157.js',
                        'assets/jsx-runtime.bd940121.js',
                        'assets/string.bf3fd91c.js'
                      ]
                    )
                  );
                case 2:
                  return e.abrupt('return', e.sent.DocsPage);
                case 3:
                case 'end':
                  return e.stop();
              }
          }, t);
        })
      );
      function n() {
        return r.apply(this, arguments);
      }
      return n;
    })()
  }
};
export { m as parameters };
//# sourceMappingURL=preview.e0b4c37a.js.map
