import { w as s, h as m, S as v, n as c } from './iframe.99391157.js';
import { m as u } from './make-decorator.3769f4d4.js';
var k = 'links',
  f = s.document,
  L = s.HTMLElement,
  h = function (e) {
    return m.getChannel().emit(c, e);
  },
  l = function (e) {
    var t = e.target;
    if (t instanceof L) {
      var d = t,
        a = d.dataset,
        i = a.sbKind,
        o = a.sbStory;
      (i || o) && (e.preventDefault(), h({ kind: i, story: o }));
    }
  },
  r = !1,
  p = function () {
    r || ((r = !0), f.addEventListener('click', l));
  },
  E = function () {
    r && ((r = !1), f.removeEventListener('click', l));
  },
  w = u({
    name: 'withLinks',
    parameterName: k,
    wrapper: function (e, t) {
      return p(), m.getChannel().once(v, E), e(t);
    }
  });
module && module.hot && module.hot.decline && module.hot.decline();
var T = [w];
export { T as decorators };
//# sourceMappingURL=preview.337ff7b0.js.map
