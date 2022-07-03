var h = Object.defineProperty,
  f = Object.defineProperties;
var b = Object.getOwnPropertyDescriptors;
var n = Object.getOwnPropertySymbols;
var p = Object.prototype.hasOwnProperty,
  m = Object.prototype.propertyIsEnumerable;
var l = (e, o, s) =>
    o in e
      ? h(e, o, { enumerable: !0, configurable: !0, writable: !0, value: s })
      : (e[o] = s),
  c = (e, o) => {
    for (var s in o || (o = {})) p.call(o, s) && l(e, s, o[s]);
    if (n) for (var s of n(o)) m.call(o, s) && l(e, s, o[s]);
    return e;
  },
  d = (e, o) => f(e, b(o));
var g = (e, o) => {
  var s = {};
  for (var a in e) p.call(e, a) && o.indexOf(a) < 0 && (s[a] = e[a]);
  if (e != null && n)
    for (var a of n(e)) o.indexOf(a) < 0 && m.call(e, a) && (s[a] = e[a]);
  return s;
};
import './index.d1b1a1f8.js';
import { c as t, A as k, M as x } from './Props.48585ce3.js';
import './iframe.99391157.js';
import './jsx-runtime.bd940121.js';
import './string.bf3fd91c.js';
var y = '/assets/code-brackets.9ef6443e.svg',
  v = '/assets/colors.ac9401f3.svg',
  w = '/assets/comments.f15a6837.svg',
  N = '/assets/direction.94a9917f.svg',
  _ = '/assets/flow.275142c6.svg',
  S = '/assets/plugin.57148314.svg',
  C = '/assets/repo.fb4ece47.svg',
  D = '/assets/stackalt.2ad81543.svg';
function i() {
  return (
    (i = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var o = 1; o < arguments.length; o++) {
            var s = arguments[o];
            for (var a in s)
              Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
          }
          return e;
        }),
    i.apply(this, arguments)
  );
}
const j = {},
  E = 'wrapper';
function u(s) {
  var a = s,
    { components: e } = a,
    o = g(a, ['components']);
  return t(
    E,
    i({}, j, o, { components: e, mdxType: 'MDXLayout' }),
    t(x, { title: 'Example/Introduction', mdxType: 'Meta' }),
    t(
      'style',
      null,
      `
    .subheading {
      --mediumdark: '#999999';
      font-weight: 900;
      font-size: 13px;
      color: #999;
      letter-spacing: 6px;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
      margin-top: 40px;
    }

    .link-list {
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      row-gap: 10px;
    }

    @media (min-width: 620px) {
      .link-list {
        row-gap: 20px;
        column-gap: 20px;
        grid-template-columns: 1fr 1fr;
      }
    }

    @media all and (-ms-high-contrast:none) {
    .link-list {
        display: -ms-grid;
        -ms-grid-columns: 1fr 1fr;
        -ms-grid-rows: 1fr 1fr;
      }
    }

    .link-item {
      display: block;
      padding: 20px 30px 20px 15px;
      border: 1px solid #00000010;
      border-radius: 5px;
      transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;
      color: #333333;
      display: flex;
      align-items: flex-start;
    }

    .link-item:hover {
      border-color: #1EA7FD50;
      transform: translate3d(0, -3px, 0);
      box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
    }

    .link-item:active {
      border-color: #1EA7FD;
      transform: translate3d(0, 0, 0);
    }

    .link-item strong {
      font-weight: 700;
      display: block;
      margin-bottom: 2px;
    }

    .link-item img {
      height: 40px;
      width: 40px;
      margin-right: 15px;
      flex: none;
    }

    .link-item span {
      font-size: 14px;
      line-height: 20px;
    }

    .tip {
      display: inline-block;
      border-radius: 1em;
      font-size: 11px;
      line-height: 12px;
      font-weight: 700;
      background: #E7FDD8;
      color: #66BF3C;
      padding: 4px 12px;
      margin-right: 10px;
      vertical-align: top;
    }

    .tip-wrapper {
      font-size: 13px;
      line-height: 20px;
      margin-top: 40px;
      margin-bottom: 40px;
    }

    .tip-wrapper code {
      font-size: 12px;
      display: inline-block;
    }
  `
    ),
    t('h1', null, 'Welcome to Storybook'),
    t(
      'p',
      null,
      `Storybook helps you build UI components in isolation from your app's business logic, data, and context.
That makes it easy to develop hard-to-reach states. Save these UI states as `,
      t('strong', { parentName: 'p' }, 'stories'),
      ' to revisit during development, testing, or QA.'
    ),
    t(
      'p',
      null,
      `Browse example stories now by navigating to them in the sidebar.
View their code in the `,
      t('inlineCode', { parentName: 'p' }, 'stories'),
      ` directory to learn how they work.
We recommend building UIs with a `,
      t(
        'a',
        { parentName: 'p', href: 'https://componentdriven.org' },
        t('strong', { parentName: 'a' }, 'component-driven')
      ),
      ' process starting with atomic components and ending with pages.'
    ),
    t('div', { className: 'subheading' }, 'Configure'),
    t(
      'div',
      { className: 'link-list' },
      t(
        'a',
        {
          className: 'link-item',
          href: 'https://storybook.js.org/docs/react/addons/addon-types',
          target: '_blank'
        },
        t('img', { src: S, alt: 'plugin' }),
        t(
          'span',
          null,
          t('strong', null, 'Presets for popular tools'),
          'Easy setup for TypeScript, SCSS and more.'
        )
      ),
      t(
        'a',
        {
          className: 'link-item',
          href: 'https://storybook.js.org/docs/react/configure/webpack',
          target: '_blank'
        },
        t('img', { src: D, alt: 'Build' }),
        t(
          'span',
          null,
          t('strong', null, 'Build configuration'),
          'How to customize webpack and Babel'
        )
      ),
      t(
        'a',
        {
          className: 'link-item',
          href: 'https://storybook.js.org/docs/react/configure/styling-and-css',
          target: '_blank'
        },
        t('img', { src: v, alt: 'colors' }),
        t(
          'span',
          null,
          t('strong', null, 'Styling'),
          'How to load and configure CSS libraries'
        )
      ),
      t(
        'a',
        {
          className: 'link-item',
          href: 'https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack',
          target: '_blank'
        },
        t('img', { src: _, alt: 'flow' }),
        t(
          'span',
          null,
          t('strong', null, 'Data'),
          'Providers and mocking for data libraries'
        )
      )
    ),
    t('div', { className: 'subheading' }, 'Learn'),
    t(
      'div',
      { className: 'link-list' },
      t(
        'a',
        {
          className: 'link-item',
          href: 'https://storybook.js.org/docs',
          target: '_blank'
        },
        t('img', { src: C, alt: 'repo' }),
        t(
          'span',
          null,
          t('strong', null, 'Storybook documentation'),
          'Configure, customize, and extend'
        )
      ),
      t(
        'a',
        {
          className: 'link-item',
          href: 'https://storybook.js.org/tutorials/',
          target: '_blank'
        },
        t('img', { src: N, alt: 'direction' }),
        t(
          'span',
          null,
          t('strong', null, 'In-depth guides'),
          'Best practices from leading teams'
        )
      ),
      t(
        'a',
        {
          className: 'link-item',
          href: 'https://github.com/storybookjs/storybook',
          target: '_blank'
        },
        t('img', { src: y, alt: 'code' }),
        t(
          'span',
          null,
          t('strong', null, 'GitHub project'),
          'View the source and add issues'
        )
      ),
      t(
        'a',
        {
          className: 'link-item',
          href: 'https://discord.gg/storybook',
          target: '_blank'
        },
        t('img', { src: w, alt: 'comments' }),
        t(
          'span',
          null,
          t('strong', null, 'Discord chat'),
          'Chat with maintainers and the community'
        )
      )
    ),
    t(
      'div',
      { className: 'tip-wrapper' },
      t('span', { className: 'tip' }, 'Tip'),
      'Edit the Markdown in',
      ' ',
      t('code', null, 'stories/Introduction.stories.mdx')
    )
  );
}
u.isMDXComponent = !0;
const M = () => {
  throw new Error('Docs-only story');
};
M.parameters = { docsOnly: !0 };
const r = { title: 'Example/Introduction', includeStories: ['__page'] },
  z = {};
r.parameters = r.parameters || {};
r.parameters.docs = d(c({}, r.parameters.docs || {}), {
  page: () =>
    t(k, { mdxStoryNameToKey: z, mdxComponentAnnotations: r }, t(u, null))
});
const P = ['__page'];
export { P as __namedExportsOrder, M as __page, r as default };
//# sourceMappingURL=Introduction.stories.1da6de74.js.map
