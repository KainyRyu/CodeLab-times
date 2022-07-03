var f = Object.defineProperty,
  y = Object.defineProperties;
var g = Object.getOwnPropertyDescriptors;
var r = Object.getOwnPropertySymbols;
var s = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable;
var l = (o, e, t) =>
    e in o
      ? f(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (o[e] = t),
  d = (o, e) => {
    for (var t in e || (e = {})) s.call(e, t) && l(o, t, e[t]);
    if (r) for (var t of r(e)) u.call(e, t) && l(o, t, e[t]);
    return o;
  },
  p = (o, e) => y(o, g(e));
var c = (o, e) => {
  var t = {};
  for (var n in o) s.call(o, n) && e.indexOf(n) < 0 && (t[n] = o[n]);
  if (o != null && r)
    for (var n of r(o)) e.indexOf(n) < 0 && u.call(o, n) && (t[n] = o[n]);
  return t;
};
import { a as k } from './jsx-runtime.bd940121.js';
const a = x => {
  var i = x,
    { primary: o = !1, size: e = 'medium', backgroundColor: t, label: n } = i,
    b = c(i, ['primary', 'size', 'backgroundColor', 'label']);
  const m = o ? 'storybook-button--primary' : 'storybook-button--secondary';
  return k(
    'button',
    p(
      d(
        {
          type: 'button',
          className: ['storybook-button', `storybook-button--${e}`, m].join(
            ' '
          ),
          style: { backgroundColor: t }
        },
        b
      ),
      { children: ['button: ', n] }
    )
  );
};
try {
  (a.displayName = 'Button'),
    (a.__docgenInfo = {
      description: 'Primary UI component for user interaction',
      displayName: 'Button',
      props: {
        primary: {
          defaultValue: { value: 'false' },
          description: 'Is this the principal call to action on the page?',
          name: 'primary',
          required: !1,
          type: { name: 'boolean' }
        },
        backgroundColor: {
          defaultValue: null,
          description: 'What background color to use',
          name: 'backgroundColor',
          required: !1,
          type: { name: 'string' }
        },
        size: {
          defaultValue: { value: 'medium' },
          description: 'How large should the button be?',
          name: 'size',
          required: !1,
          type: {
            name: 'enum',
            value: [
              { value: '"small"' },
              { value: '"medium"' },
              { value: '"large"' }
            ]
          }
        },
        label: {
          defaultValue: null,
          description: 'Button contents',
          name: 'label',
          required: !0,
          type: { name: 'string' }
        },
        onClick: {
          defaultValue: null,
          description: 'Optional click handler',
          name: 'onClick',
          required: !1,
          type: { name: '(() => void)' }
        }
      }
    }),
    typeof STORYBOOK_REACT_CLASSES != 'undefined' &&
      (STORYBOOK_REACT_CLASSES['src/stories/Button.tsx#Button'] = {
        docgenInfo: a.__docgenInfo,
        name: 'Button',
        path: 'src/stories/Button.tsx#Button'
      });
} catch {}
export { a as B };
//# sourceMappingURL=Button.490d214f.js.map
