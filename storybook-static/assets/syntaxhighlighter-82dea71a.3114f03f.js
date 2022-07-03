var dt = Object.defineProperty,
  gt = Object.defineProperties;
var ft = Object.getOwnPropertyDescriptors;
var rn = Object.getOwnPropertySymbols;
var vt = Object.prototype.hasOwnProperty,
  ht = Object.prototype.propertyIsEnumerable;
var on = (e, n, t) =>
    n in e
      ? dt(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t),
  ln = (e, n) => {
    for (var t in n || (n = {})) vt.call(n, t) && on(e, t, n[t]);
    if (rn) for (var t of rn(n)) ht.call(n, t) && on(e, t, n[t]);
    return e;
  },
  sn = (e, n) => gt(e, ft(n));
import { c as we, s as mt, l as yt } from './iframe.99391157.js';
import {
  U as Le,
  _ as bt,
  V as Se,
  W as xt,
  X as wt,
  Y as St
} from './Props.48585ce3.js';
import { R as Q, r as cn } from './index.d1b1a1f8.js';
import { j as be, a as At } from './jsx-runtime.bd940121.js';
import './string.bf3fd91c.js';
var Fn = Fe;
Fe.displayName = 'jsx';
Fe.aliases = [];
function Fe(e) {
  (function (n) {
    var t = n.util.clone(n.languages.javascript),
      a = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
      r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
      s = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
    function d(h, b) {
      return (
        (h = h
          .replace(/<S>/g, function () {
            return a;
          })
          .replace(/<BRACES>/g, function () {
            return r;
          })
          .replace(/<SPREAD>/g, function () {
            return s;
          })),
        RegExp(h, b)
      );
    }
    (s = d(s).source),
      (n.languages.jsx = n.languages.extend('markup', t)),
      (n.languages.jsx.tag.pattern = d(
        /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
          .source
      )),
      (n.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
      (n.languages.jsx.tag.inside['attr-value'].pattern =
        /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
      (n.languages.jsx.tag.inside.tag.inside['class-name'] =
        /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
      (n.languages.jsx.tag.inside.comment = t.comment),
      n.languages.insertBefore(
        'inside',
        'attr-name',
        { spread: { pattern: d(/<SPREAD>/.source), inside: n.languages.jsx } },
        n.languages.jsx.tag
      ),
      n.languages.insertBefore(
        'inside',
        'special-attr',
        {
          script: {
            pattern: d(/=<BRACES>/.source),
            alias: 'language-javascript',
            inside: {
              'script-punctuation': {
                pattern: /^=(?=\{)/,
                alias: 'punctuation'
              },
              rest: n.languages.jsx
            }
          }
        },
        n.languages.jsx.tag
      );
    var l = function (h) {
        return h
          ? typeof h == 'string'
            ? h
            : typeof h.content == 'string'
            ? h.content
            : h.content.map(l).join('')
          : '';
      },
      v = function (h) {
        for (var b = [], g = 0; g < h.length; g++) {
          var m = h[g],
            w = !1;
          if (
            (typeof m != 'string' &&
              (m.type === 'tag' && m.content[0] && m.content[0].type === 'tag'
                ? m.content[0].content[0].content === '</'
                  ? b.length > 0 &&
                    b[b.length - 1].tagName === l(m.content[0].content[1]) &&
                    b.pop()
                  : m.content[m.content.length - 1].content === '/>' ||
                    b.push({
                      tagName: l(m.content[0].content[1]),
                      openedBraces: 0
                    })
                : b.length > 0 && m.type === 'punctuation' && m.content === '{'
                ? b[b.length - 1].openedBraces++
                : b.length > 0 &&
                  b[b.length - 1].openedBraces > 0 &&
                  m.type === 'punctuation' &&
                  m.content === '}'
                ? b[b.length - 1].openedBraces--
                : (w = !0)),
            (w || typeof m == 'string') &&
              b.length > 0 &&
              b[b.length - 1].openedBraces === 0)
          ) {
            var k = l(m);
            g < h.length - 1 &&
              (typeof h[g + 1] == 'string' || h[g + 1].type === 'plain-text') &&
              ((k += l(h[g + 1])), h.splice(g + 1, 1)),
              g > 0 &&
                (typeof h[g - 1] == 'string' ||
                  h[g - 1].type === 'plain-text') &&
                ((k = l(h[g - 1]) + k), h.splice(g - 1, 1), g--),
              (h[g] = new n.Token('plain-text', k, null, k));
          }
          m.content && typeof m.content != 'string' && v(m.content);
        }
      };
    n.hooks.add('after-tokenize', function (h) {
      (h.language !== 'jsx' && h.language !== 'tsx') || v(h.tokens);
    });
  })(e);
}
var kt = Fn,
  Et = Te;
Te.displayName = 'bash';
Te.aliases = ['shell'];
function Te(e) {
  (function (n) {
    var t =
        '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b',
      a = {
        pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
        lookbehind: !0,
        alias: 'punctuation',
        inside: null
      },
      r = {
        bash: a,
        environment: { pattern: RegExp('\\$' + t), alias: 'constant' },
        variable: [
          {
            pattern: /\$?\(\([\s\S]+?\)\)/,
            greedy: !0,
            inside: {
              variable: [
                { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                /^\$\(\(/
              ],
              number:
                /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
              operator:
                /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
              punctuation: /\(\(?|\)\)?|,|;/
            }
          },
          {
            pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
            greedy: !0,
            inside: { variable: /^\$\(|^`|\)$|`$/ }
          },
          {
            pattern: /\$\{[^}]+\}/,
            greedy: !0,
            inside: {
              operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
              punctuation: /[\[\]]/,
              environment: {
                pattern: RegExp('(\\{)' + t),
                lookbehind: !0,
                alias: 'constant'
              }
            }
          },
          /\$(?:\w+|[#?*!@$])/
        ],
        entity:
          /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
      };
    (n.languages.bash = {
      shebang: { pattern: /^#!\s*\/.*/, alias: 'important' },
      comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
      'function-name': [
        {
          pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
          lookbehind: !0,
          alias: 'function'
        },
        { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: 'function' }
      ],
      'for-or-select': {
        pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
        alias: 'variable',
        lookbehind: !0
      },
      'assign-left': {
        pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
        inside: {
          environment: {
            pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + t),
            lookbehind: !0,
            alias: 'constant'
          }
        },
        alias: 'variable',
        lookbehind: !0
      },
      string: [
        {
          pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
          lookbehind: !0,
          greedy: !0,
          inside: r
        },
        {
          pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
          lookbehind: !0,
          greedy: !0,
          inside: { bash: a }
        },
        {
          pattern:
            /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
          lookbehind: !0,
          greedy: !0,
          inside: r
        },
        { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
        {
          pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
          greedy: !0,
          inside: { entity: r.entity }
        }
      ],
      environment: { pattern: RegExp('\\$?' + t), alias: 'constant' },
      variable: r.variable,
      function: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      keyword: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      builtin: {
        pattern:
          /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
        lookbehind: !0,
        alias: 'class-name'
      },
      boolean: {
        pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
        lookbehind: !0
      },
      'file-descriptor': { pattern: /\B&\d\b/, alias: 'important' },
      operator: {
        pattern:
          /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
        inside: { 'file-descriptor': { pattern: /^\d/, alias: 'important' } }
      },
      punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
      number: { pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/, lookbehind: !0 }
    }),
      (a.inside = n.languages.bash);
    for (
      var s = [
          'comment',
          'function-name',
          'for-or-select',
          'assign-left',
          'string',
          'environment',
          'function',
          'keyword',
          'builtin',
          'boolean',
          'file-descriptor',
          'operator',
          'punctuation',
          'number'
        ],
        d = r.variable[1].inside,
        l = 0;
      l < s.length;
      l++
    )
      d[s[l]] = n.languages.bash[s[l]];
    n.languages.shell = n.languages.bash;
  })(e);
}
var $t = Et,
  Tn = _e;
_e.displayName = 'css';
_e.aliases = [];
function _e(e) {
  (function (n) {
    var t =
      /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    (n.languages.css = {
      comment: /\/\*[\s\S]*?\*\//,
      atrule: {
        pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
        inside: {
          rule: /^@[\w-]+/,
          'selector-function-argument': {
            pattern:
              /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
            lookbehind: !0,
            alias: 'selector'
          },
          keyword: {
            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
            lookbehind: !0
          }
        }
      },
      url: {
        pattern: RegExp(
          '\\burl\\((?:' +
            t.source +
            '|' +
            /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
            ')\\)',
          'i'
        ),
        greedy: !0,
        inside: {
          function: /^url/i,
          punctuation: /^\(|\)$/,
          string: { pattern: RegExp('^' + t.source + '$'), alias: 'url' }
        }
      },
      selector: {
        pattern: RegExp(
          `(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` +
            t.source +
            ')*(?=\\s*\\{)'
        ),
        lookbehind: !0
      },
      string: { pattern: t, greedy: !0 },
      property: {
        pattern:
          /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
        lookbehind: !0
      },
      important: /!important\b/i,
      function: { pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i, lookbehind: !0 },
      punctuation: /[(){};:,]/
    }),
      (n.languages.css.atrule.inside.rest = n.languages.css);
    var a = n.languages.markup;
    a && (a.tag.addInlined('style', 'css'), a.tag.addAttribute('style', 'css'));
  })(e);
}
var Nt = Tn,
  Ct = Ie;
Ie.displayName = 'jsExtras';
Ie.aliases = [];
function Ie(e) {
  (function (n) {
    n.languages.insertBefore('javascript', 'function-variable', {
      'method-variable': {
        pattern: RegExp(
          '(\\.\\s*)' +
            n.languages.javascript['function-variable'].pattern.source
        ),
        lookbehind: !0,
        alias: ['function-variable', 'method', 'function', 'property-access']
      }
    }),
      n.languages.insertBefore('javascript', 'function', {
        method: {
          pattern: RegExp('(\\.\\s*)' + n.languages.javascript.function.source),
          lookbehind: !0,
          alias: ['function', 'property-access']
        }
      }),
      n.languages.insertBefore('javascript', 'constant', {
        'known-class-name': [
          {
            pattern:
              /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
            alias: 'class-name'
          },
          { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: 'class-name' }
        ]
      });
    function t(v, h) {
      return RegExp(
        v.replace(/<ID>/g, function () {
          return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
            .source;
        }),
        h
      );
    }
    n.languages.insertBefore('javascript', 'keyword', {
      imports: {
        pattern: t(
          /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
            .source
        ),
        lookbehind: !0,
        inside: n.languages.javascript
      },
      exports: {
        pattern: t(
          /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
            .source
        ),
        lookbehind: !0,
        inside: n.languages.javascript
      }
    }),
      n.languages.javascript.keyword.unshift(
        { pattern: /\b(?:as|default|export|from|import)\b/, alias: 'module' },
        {
          pattern:
            /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
          alias: 'control-flow'
        },
        { pattern: /\bnull\b/, alias: ['null', 'nil'] },
        { pattern: /\bundefined\b/, alias: 'nil' }
      ),
      n.languages.insertBefore('javascript', 'operator', {
        spread: { pattern: /\.{3}/, alias: 'operator' },
        arrow: { pattern: /=>/, alias: 'operator' }
      }),
      n.languages.insertBefore('javascript', 'punctuation', {
        'property-access': {
          pattern: t(/(\.\s*)#?<ID>/.source),
          lookbehind: !0
        },
        'maybe-class-name': {
          pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
          lookbehind: !0
        },
        dom: {
          pattern:
            /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
          alias: 'variable'
        },
        console: { pattern: /\bconsole(?=\s*\.)/, alias: 'class-name' }
      });
    for (
      var a = [
          'function',
          'function-variable',
          'method',
          'method-variable',
          'property-access'
        ],
        r = 0;
      r < a.length;
      r++
    ) {
      var s = a[r],
        d = n.languages.javascript[s];
      n.util.type(d) === 'RegExp' &&
        (d = n.languages.javascript[s] = { pattern: d });
      var l = d.inside || {};
      (d.inside = l), (l['maybe-class-name'] = /^[A-Z][\s\S]*/);
    }
  })(e);
}
var Ot = Ct,
  Lt = je;
je.displayName = 'json';
je.aliases = ['webmanifest'];
function je(e) {
  (e.languages.json = {
    property: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    string: {
      pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
      lookbehind: !0,
      greedy: !0
    },
    comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
    number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    punctuation: /[{}[\],]/,
    operator: /:/,
    boolean: /\b(?:false|true)\b/,
    null: { pattern: /\bnull\b/, alias: 'keyword' }
  }),
    (e.languages.webmanifest = e.languages.json);
}
var Ft = Lt,
  Tt = Re;
Re.displayName = 'graphql';
Re.aliases = [];
function Re(e) {
  (e.languages.graphql = {
    comment: /#.*/,
    description: {
      pattern:
        /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
      greedy: !0,
      alias: 'string',
      inside: {
        'language-markdown': {
          pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
          lookbehind: !0,
          inside: e.languages.markdown
        }
      }
    },
    string: {
      pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
      greedy: !0
    },
    number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
    boolean: /\b(?:false|true)\b/,
    variable: /\$[a-z_]\w*/i,
    directive: { pattern: /@[a-z_]\w*/i, alias: 'function' },
    'attr-name': {
      pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
      greedy: !0
    },
    'atom-input': { pattern: /\b[A-Z]\w*Input\b/, alias: 'class-name' },
    scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
    constant: /\b[A-Z][A-Z_\d]*\b/,
    'class-name': {
      pattern:
        /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
      lookbehind: !0
    },
    fragment: {
      pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function'
    },
    'definition-mutation': {
      pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function'
    },
    'definition-query': {
      pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
      lookbehind: !0,
      alias: 'function'
    },
    keyword:
      /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
    operator: /[!=|&]|\.{3}/,
    'property-query': /\w+(?=\s*\()/,
    object: /\w+(?=\s*\{)/,
    punctuation: /[!(){}\[\]:=,]/,
    property: /\w+/
  }),
    e.hooks.add('after-tokenize', function (t) {
      if (t.language !== 'graphql') return;
      var a = t.tokens.filter(function (S) {
          return (
            typeof S != 'string' && S.type !== 'comment' && S.type !== 'scalar'
          );
        }),
        r = 0;
      function s(S) {
        return a[r + S];
      }
      function d(S, A) {
        A = A || 0;
        for (var o = 0; o < S.length; o++) {
          var i = s(o + A);
          if (!i || i.type !== S[o]) return !1;
        }
        return !0;
      }
      function l(S, A) {
        for (var o = 1, i = r; i < a.length; i++) {
          var p = a[i],
            u = p.content;
          if (p.type === 'punctuation' && typeof u == 'string') {
            if (S.test(u)) o++;
            else if (A.test(u) && (o--, o === 0)) return i;
          }
        }
        return -1;
      }
      function v(S, A) {
        var o = S.alias;
        o ? Array.isArray(o) || (S.alias = o = [o]) : (S.alias = o = []),
          o.push(A);
      }
      for (; r < a.length; ) {
        var h = a[r++];
        if (h.type === 'keyword' && h.content === 'mutation') {
          var b = [];
          if (
            d(['definition-mutation', 'punctuation']) &&
            s(1).content === '('
          ) {
            r += 2;
            var g = l(/^\($/, /^\)$/);
            if (g === -1) continue;
            for (; r < g; r++) {
              var m = s(0);
              m.type === 'variable' &&
                (v(m, 'variable-input'), b.push(m.content));
            }
            r = g + 1;
          }
          if (
            d(['punctuation', 'property-query']) &&
            s(0).content === '{' &&
            (r++, v(s(0), 'property-mutation'), b.length > 0)
          ) {
            var w = l(/^\{$/, /^\}$/);
            if (w === -1) continue;
            for (var k = r; k < w; k++) {
              var N = a[k];
              N.type === 'variable' &&
                b.indexOf(N.content) >= 0 &&
                v(N, 'variable-input');
            }
          }
        }
      }
    });
}
var _t = Tt,
  _n = De;
De.displayName = 'markup';
De.aliases = ['html', 'mathml', 'svg', 'xml', 'ssml', 'atom', 'rss'];
function De(e) {
  (e.languages.markup = {
    comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
    prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
    doctype: {
      pattern:
        /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
      greedy: !0,
      inside: {
        'internal-subset': {
          pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
          lookbehind: !0,
          greedy: !0,
          inside: null
        },
        string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
        punctuation: /^<!|>$|[[\]]/,
        'doctype-tag': /^DOCTYPE/i,
        name: /[^\s<>'"]+/
      }
    },
    cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
    tag: {
      pattern:
        /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
      greedy: !0,
      inside: {
        tag: {
          pattern: /^<\/?[^\s>\/]+/,
          inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ }
        },
        'special-attr': [],
        'attr-value': {
          pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
          inside: {
            punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
          }
        },
        punctuation: /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: { namespace: /^[^\s>\/:]+:/ }
        }
      }
    },
    entity: [
      { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
      /&#x?[\da-f]{1,8};/i
    ]
  }),
    (e.languages.markup.tag.inside['attr-value'].inside.entity =
      e.languages.markup.entity),
    (e.languages.markup.doctype.inside['internal-subset'].inside =
      e.languages.markup),
    e.hooks.add('wrap', function (n) {
      n.type === 'entity' &&
        (n.attributes.title = n.content.value.replace(/&amp;/, '&'));
    }),
    Object.defineProperty(e.languages.markup.tag, 'addInlined', {
      value: function (t, a) {
        var r = {};
        (r['language-' + a] = {
          pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
          lookbehind: !0,
          inside: e.languages[a]
        }),
          (r.cdata = /^<!\[CDATA\[|\]\]>$/i);
        var s = {
          'included-cdata': { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, inside: r }
        };
        s['language-' + a] = { pattern: /[\s\S]+/, inside: e.languages[a] };
        var d = {};
        (d[t] = {
          pattern: RegExp(
            /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
              /__/g,
              function () {
                return t;
              }
            ),
            'i'
          ),
          lookbehind: !0,
          greedy: !0,
          inside: s
        }),
          e.languages.insertBefore('markup', 'cdata', d);
      }
    }),
    Object.defineProperty(e.languages.markup.tag, 'addAttribute', {
      value: function (n, t) {
        e.languages.markup.tag.inside['special-attr'].push({
          pattern: RegExp(
            /(^|["'\s])/.source +
              '(?:' +
              n +
              ')' +
              /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
            'i'
          ),
          lookbehind: !0,
          inside: {
            'attr-name': /^[^\s=]+/,
            'attr-value': {
              pattern: /=[\s\S]+/,
              inside: {
                value: {
                  pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                  lookbehind: !0,
                  alias: [t, 'language-' + t],
                  inside: e.languages[t]
                },
                punctuation: [{ pattern: /^=/, alias: 'attr-equals' }, /"|'/]
              }
            }
          }
        });
      }
    }),
    (e.languages.html = e.languages.markup),
    (e.languages.mathml = e.languages.markup),
    (e.languages.svg = e.languages.markup),
    (e.languages.xml = e.languages.extend('markup', {})),
    (e.languages.ssml = e.languages.xml),
    (e.languages.atom = e.languages.xml),
    (e.languages.rss = e.languages.xml);
}
var It = _n,
  jt = Me;
Me.displayName = 'markdown';
Me.aliases = ['md'];
function Me(e) {
  (function (n) {
    var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
    function a(g) {
      return (
        (g = g.replace(/<inner>/g, function () {
          return t;
        })),
        RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + g + ')')
      );
    }
    var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source,
      s = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
        /__/g,
        function () {
          return r;
        }
      ),
      d = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
        .source;
    (n.languages.markdown = n.languages.extend('markup', {})),
      n.languages.insertBefore('markdown', 'prolog', {
        'front-matter-block': {
          pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
          lookbehind: !0,
          greedy: !0,
          inside: {
            punctuation: /^---|---$/,
            'front-matter': {
              pattern: /\S+(?:\s+\S+)*/,
              alias: ['yaml', 'language-yaml'],
              inside: n.languages.yaml
            }
          }
        },
        blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: 'punctuation' },
        table: {
          pattern: RegExp('^' + s + d + '(?:' + s + ')*', 'm'),
          inside: {
            'table-data-rows': {
              pattern: RegExp('^(' + s + d + ')(?:' + s + ')*$'),
              lookbehind: !0,
              inside: {
                'table-data': {
                  pattern: RegExp(r),
                  inside: n.languages.markdown
                },
                punctuation: /\|/
              }
            },
            'table-line': {
              pattern: RegExp('^(' + s + ')' + d + '$'),
              lookbehind: !0,
              inside: { punctuation: /\||:?-{3,}:?/ }
            },
            'table-header-row': {
              pattern: RegExp('^' + s + '$'),
              inside: {
                'table-header': {
                  pattern: RegExp(r),
                  alias: 'important',
                  inside: n.languages.markdown
                },
                punctuation: /\|/
              }
            }
          }
        },
        code: [
          {
            pattern:
              /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
            lookbehind: !0,
            alias: 'keyword'
          },
          {
            pattern: /^```[\s\S]*?^```$/m,
            greedy: !0,
            inside: {
              'code-block': {
                pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                lookbehind: !0
              },
              'code-language': { pattern: /^(```).+/, lookbehind: !0 },
              punctuation: /```/
            }
          }
        ],
        title: [
          {
            pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
            alias: 'important',
            inside: { punctuation: /==+$|--+$/ }
          },
          {
            pattern: /(^\s*)#.+/m,
            lookbehind: !0,
            alias: 'important',
            inside: { punctuation: /^#+|#+$/ }
          }
        ],
        hr: {
          pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
          lookbehind: !0,
          alias: 'punctuation'
        },
        list: {
          pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
          lookbehind: !0,
          alias: 'punctuation'
        },
        'url-reference': {
          pattern:
            /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
          inside: {
            variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
            string:
              /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
            punctuation: /^[\[\]!:]|[<>]/
          },
          alias: 'url'
        },
        bold: {
          pattern: a(
            /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^..)[\s\S]+(?=..$)/,
              lookbehind: !0,
              inside: {}
            },
            punctuation: /\*\*|__/
          }
        },
        italic: {
          pattern: a(
            /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^.)[\s\S]+(?=.$)/,
              lookbehind: !0,
              inside: {}
            },
            punctuation: /[*_]/
          }
        },
        strike: {
          pattern: a(/(~~?)(?:(?!~)<inner>)+\2/.source),
          lookbehind: !0,
          greedy: !0,
          inside: {
            content: {
              pattern: /(^~~?)[\s\S]+(?=\1$)/,
              lookbehind: !0,
              inside: {}
            },
            punctuation: /~~?/
          }
        },
        'code-snippet': {
          pattern:
            /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
          lookbehind: !0,
          greedy: !0,
          alias: ['code', 'keyword']
        },
        url: {
          pattern: a(
            /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
              .source
          ),
          lookbehind: !0,
          greedy: !0,
          inside: {
            operator: /^!/,
            content: {
              pattern: /(^\[)[^\]]+(?=\])/,
              lookbehind: !0,
              inside: {}
            },
            variable: { pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/, lookbehind: !0 },
            url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
            string: {
              pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
              lookbehind: !0
            }
          }
        }
      }),
      ['url', 'bold', 'italic', 'strike'].forEach(function (g) {
        ['url', 'bold', 'italic', 'strike', 'code-snippet'].forEach(function (
          m
        ) {
          g !== m &&
            (n.languages.markdown[g].inside.content.inside[m] =
              n.languages.markdown[m]);
        });
      }),
      n.hooks.add('after-tokenize', function (g) {
        if (g.language !== 'markdown' && g.language !== 'md') return;
        function m(w) {
          if (!(!w || typeof w == 'string'))
            for (var k = 0, N = w.length; k < N; k++) {
              var S = w[k];
              if (S.type !== 'code') {
                m(S.content);
                continue;
              }
              var A = S.content[1],
                o = S.content[3];
              if (
                A &&
                o &&
                A.type === 'code-language' &&
                o.type === 'code-block' &&
                typeof A.content == 'string'
              ) {
                var i = A.content
                  .replace(/\b#/g, 'sharp')
                  .replace(/\b\+\+/g, 'pp');
                i = (/[a-z][\w-]*/i.exec(i) || [''])[0].toLowerCase();
                var p = 'language-' + i;
                o.alias
                  ? typeof o.alias == 'string'
                    ? (o.alias = [o.alias, p])
                    : o.alias.push(p)
                  : (o.alias = [p]);
              }
            }
        }
        m(g.tokens);
      }),
      n.hooks.add('wrap', function (g) {
        if (g.type === 'code-block') {
          for (var m = '', w = 0, k = g.classes.length; w < k; w++) {
            var N = g.classes[w],
              S = /language-(.+)/.exec(N);
            if (S) {
              m = S[1];
              break;
            }
          }
          var A = n.languages[m];
          if (A) g.content = n.highlight(b(g.content.value), A, m);
          else if (m && m !== 'none' && n.plugins.autoloader) {
            var o =
              'md-' +
              new Date().valueOf() +
              '-' +
              Math.floor(Math.random() * 1e16);
            (g.attributes.id = o),
              n.plugins.autoloader.loadLanguages(m, function () {
                var i = document.getElementById(o);
                i &&
                  (i.innerHTML = n.highlight(i.textContent, n.languages[m], m));
              });
          }
        }
      });
    var l = RegExp(n.languages.markup.tag.pattern.source, 'gi'),
      v = { amp: '&', lt: '<', gt: '>', quot: '"' },
      h = String.fromCodePoint || String.fromCharCode;
    function b(g) {
      var m = g.replace(l, '');
      return (
        (m = m.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function (w, k) {
          if (((k = k.toLowerCase()), k[0] === '#')) {
            var N;
            return (
              k[1] === 'x'
                ? (N = parseInt(k.slice(2), 16))
                : (N = Number(k.slice(1))),
              h(N)
            );
          } else {
            var S = v[k];
            return S || w;
          }
        })),
        m
      );
    }
    n.languages.md = n.languages.markdown;
  })(e);
}
var Rt = jt,
  Dt = He;
He.displayName = 'yaml';
He.aliases = ['yml'];
function He(e) {
  (function (n) {
    var t = /[*&][^\s[\]{},]+/,
      a =
        /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
      r =
        '(?:' +
        a.source +
        '(?:[ 	]+' +
        t.source +
        ')?|' +
        t.source +
        '(?:[ 	]+' +
        a.source +
        ')?)',
      s =
        /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
          /<PLAIN>/g,
          function () {
            return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
              .source;
          }
        ),
      d = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
    function l(v, h) {
      h = (h || '').replace(/m/g, '') + 'm';
      var b =
        /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
          .replace(/<<prop>>/g, function () {
            return r;
          })
          .replace(/<<value>>/g, function () {
            return v;
          });
      return RegExp(b, h);
    }
    (n.languages.yaml = {
      scalar: {
        pattern: RegExp(
          /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
            /<<prop>>/g,
            function () {
              return r;
            }
          )
        ),
        lookbehind: !0,
        alias: 'string'
      },
      comment: /#.*/,
      key: {
        pattern: RegExp(
          /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
            .replace(/<<prop>>/g, function () {
              return r;
            })
            .replace(/<<key>>/g, function () {
              return '(?:' + s + '|' + d + ')';
            })
        ),
        lookbehind: !0,
        greedy: !0,
        alias: 'atrule'
      },
      directive: {
        pattern: /(^[ \t]*)%.+/m,
        lookbehind: !0,
        alias: 'important'
      },
      datetime: {
        pattern: l(
          /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
            .source
        ),
        lookbehind: !0,
        alias: 'number'
      },
      boolean: {
        pattern: l(/false|true/.source, 'i'),
        lookbehind: !0,
        alias: 'important'
      },
      null: {
        pattern: l(/null|~/.source, 'i'),
        lookbehind: !0,
        alias: 'important'
      },
      string: { pattern: l(d), lookbehind: !0, greedy: !0 },
      number: {
        pattern: l(
          /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
            .source,
          'i'
        ),
        lookbehind: !0
      },
      tag: a,
      important: t,
      punctuation: /---|[:[\]{}\-,|>?]|\.\.\./
    }),
      (n.languages.yml = n.languages.yaml);
  })(e);
}
var Mt = Dt,
  In = Be;
Be.displayName = 'typescript';
Be.aliases = ['ts'];
function Be(e) {
  (function (n) {
    (n.languages.typescript = n.languages.extend('javascript', {
      'class-name': {
        pattern:
          /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
        lookbehind: !0,
        greedy: !0,
        inside: null
      },
      builtin:
        /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
    })),
      n.languages.typescript.keyword.push(
        /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
        /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
        /\btype\b(?=\s*(?:[\{*]|$))/
      ),
      delete n.languages.typescript.parameter,
      delete n.languages.typescript['literal-property'];
    var t = n.languages.extend('typescript', {});
    delete t['class-name'],
      (n.languages.typescript['class-name'].inside = t),
      n.languages.insertBefore('typescript', 'function', {
        decorator: {
          pattern: /@[$\w\xA0-\uFFFF]+/,
          inside: {
            at: { pattern: /^@/, alias: 'operator' },
            function: /^[\s\S]+/
          }
        },
        'generic-function': {
          pattern:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
          greedy: !0,
          inside: {
            function:
              /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
            generic: { pattern: /<[\s\S]+/, alias: 'class-name', inside: t }
          }
        }
      }),
      (n.languages.ts = n.languages.typescript);
  })(e);
}
var Ht = In,
  Bt = Fn,
  zt = In,
  Pt = ze;
ze.displayName = 'tsx';
ze.aliases = [];
function ze(e) {
  e.register(Bt),
    e.register(zt),
    (function (n) {
      var t = n.util.clone(n.languages.typescript);
      (n.languages.tsx = n.languages.extend('jsx', t)),
        delete n.languages.tsx.parameter,
        delete n.languages.tsx['literal-property'];
      var a = n.languages.tsx.tag;
      (a.pattern = RegExp(
        /(^|[^\w$]|(?=<\/))/.source + '(?:' + a.pattern.source + ')',
        a.pattern.flags
      )),
        (a.lookbehind = !0);
    })(e);
}
var Ut = Pt;
function Gt(e, n) {
  if (e == null) return {};
  var t = {},
    a = Object.keys(e),
    r,
    s;
  for (s = 0; s < a.length; s++)
    (r = a[s]), !(n.indexOf(r) >= 0) && (t[r] = e[r]);
  return t;
}
var qt = Gt,
  Wt = qt;
function Zt(e, n) {
  if (e == null) return {};
  var t = Wt(e, n),
    a,
    r;
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(e);
    for (r = 0; r < s.length; r++)
      (a = s[r]),
        !(n.indexOf(a) >= 0) &&
          (!Object.prototype.propertyIsEnumerable.call(e, a) || (t[a] = e[a]));
  }
  return t;
}
var Xt = Zt,
  Kt = Xt;
function Yt(e) {
  if (Array.isArray(e)) {
    for (var n = 0, t = new Array(e.length); n < e.length; n++) t[n] = e[n];
    return t;
  }
}
var Vt = Yt;
function Jt(e) {
  if (
    Symbol.iterator in Object(e) ||
    Object.prototype.toString.call(e) === '[object Arguments]'
  )
    return Array.from(e);
}
var Qt = Jt;
function ea() {
  throw new TypeError('Invalid attempt to spread non-iterable instance');
}
var na = ea,
  ta = Vt,
  aa = Qt,
  ra = na;
function oa(e) {
  return ta(e) || aa(e) || ra();
}
var ia = oa;
function la(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[n] = t),
    e
  );
}
var jn = la;
function Ne() {
  return (
    (Rn = Ne =
      Object.assign ||
      function (e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = arguments[n];
          for (var a in t)
            Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
        }
        return e;
      }),
    Ne.apply(this, arguments)
  );
}
var Rn = Ne,
  sa = Rn;
function un(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n &&
      (a = a.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, a);
  }
  return t;
}
function ie(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? un(Object(t), !0).forEach(function (a) {
          jn(e, a, t[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : un(Object(t)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
        });
  }
  return e;
}
function ca(e) {
  var n = e.length;
  if (n === 0 || n === 1) return e;
  if (n === 2)
    return [
      e[0],
      e[1],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0])
    ];
  if (n === 3)
    return [
      e[0],
      e[1],
      e[2],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0])
    ];
  if (n >= 4)
    return [
      e[0],
      e[1],
      e[2],
      e[3],
      ''.concat(e[0], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3]),
      ''.concat(e[3], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[1], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[0], '.').concat(e[2], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[0], '.').concat(e[3], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[2], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[0], '.').concat(e[3], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[1], '.').concat(e[2], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[1], '.').concat(e[3], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[1], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[0], '.').concat(e[3], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[0], '.').concat(e[3]),
      ''.concat(e[2], '.').concat(e[1], '.').concat(e[3], '.').concat(e[0]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[2], '.').concat(e[3], '.').concat(e[1], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[1], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[0], '.').concat(e[2], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[0], '.').concat(e[2]),
      ''.concat(e[3], '.').concat(e[1], '.').concat(e[2], '.').concat(e[0]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[0], '.').concat(e[1]),
      ''.concat(e[3], '.').concat(e[2], '.').concat(e[1], '.').concat(e[0])
    ];
}
var $e = {};
function ua(e) {
  if (e.length === 0 || e.length === 1) return e;
  var n = e.join('.');
  return $e[n] || ($e[n] = ca(e)), $e[n];
}
function pa(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    t = arguments.length > 2 ? arguments[2] : void 0,
    a = e.filter(function (s) {
      return s !== 'token';
    }),
    r = ua(a);
  return r.reduce(function (s, d) {
    return ie(ie({}, s), t[d]);
  }, n);
}
function pn(e) {
  return e.join(' ');
}
function da(e, n) {
  var t = 0;
  return function (a) {
    return (
      (t += 1),
      a.map(function (r, s) {
        return Dn({
          node: r,
          stylesheet: e,
          useInlineStyles: n,
          key: 'code-segment-'.concat(t, '-').concat(s)
        });
      })
    );
  };
}
function Dn(e) {
  var n = e.node,
    t = e.stylesheet,
    a = e.style,
    r = a === void 0 ? {} : a,
    s = e.useInlineStyles,
    d = e.key,
    l = n.properties,
    v = n.type,
    h = n.tagName,
    b = n.value;
  if (v === 'text') return b;
  if (h) {
    var g = da(t, s),
      m;
    if (!s) m = ie(ie({}, l), {}, { className: pn(l.className) });
    else {
      var w = Object.keys(t).reduce(function (A, o) {
          return (
            o.split('.').forEach(function (i) {
              A.includes(i) || A.push(i);
            }),
            A
          );
        }, []),
        k = l.className && l.className.includes('token') ? ['token'] : [],
        N =
          l.className &&
          k.concat(
            l.className.filter(function (A) {
              return !w.includes(A);
            })
          );
      m = ie(
        ie({}, l),
        {},
        {
          className: pn(N) || void 0,
          style: pa(l.className, Object.assign({}, l.style, r), t)
        }
      );
    }
    var S = g(n.children);
    return Q.createElement(h, sa({ key: d }, m), S);
  }
}
var ga = function (e, n) {
    var t = e.listLanguages();
    return t.indexOf(n) !== -1;
  },
  fa = [
    'language',
    'children',
    'style',
    'customStyle',
    'codeTagProps',
    'useInlineStyles',
    'showLineNumbers',
    'showInlineLineNumbers',
    'startingLineNumber',
    'lineNumberContainerStyle',
    'lineNumberStyle',
    'wrapLines',
    'wrapLongLines',
    'lineProps',
    'renderer',
    'PreTag',
    'CodeTag',
    'code',
    'astGenerator'
  ];
function dn(e, n) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    n &&
      (a = a.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })),
      t.push.apply(t, a);
  }
  return t;
}
function V(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = arguments[n] != null ? arguments[n] : {};
    n % 2
      ? dn(Object(t), !0).forEach(function (a) {
          jn(e, a, t[a]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
      : dn(Object(t)).forEach(function (a) {
          Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
        });
  }
  return e;
}
var va = /\n/g;
function ha(e) {
  return e.match(va);
}
function ma(e) {
  var n = e.lines,
    t = e.startingLineNumber,
    a = e.style;
  return n.map(function (r, s) {
    var d = s + t;
    return Q.createElement(
      'span',
      {
        key: 'line-'.concat(s),
        className: 'react-syntax-highlighter-line-number',
        style: typeof a == 'function' ? a(d) : a
      },
      ''.concat(
        d,
        `
`
      )
    );
  });
}
function ya(e) {
  var n = e.codeString,
    t = e.codeStyle,
    a = e.containerStyle,
    r = a === void 0 ? { float: 'left', paddingRight: '10px' } : a,
    s = e.numberStyle,
    d = s === void 0 ? {} : s,
    l = e.startingLineNumber;
  return Q.createElement(
    'code',
    { style: Object.assign({}, t, r) },
    ma({
      lines: n.replace(/\n$/, '').split(`
`),
      style: d,
      startingLineNumber: l
    })
  );
}
function ba(e) {
  return ''.concat(e.toString().length, '.25em');
}
function Mn(e, n) {
  return {
    type: 'element',
    tagName: 'span',
    properties: {
      key: 'line-number--'.concat(e),
      className: [
        'comment',
        'linenumber',
        'react-syntax-highlighter-line-number'
      ],
      style: n
    },
    children: [{ type: 'text', value: e }]
  };
}
function Hn(e, n, t) {
  var a = {
      display: 'inline-block',
      minWidth: ba(t),
      paddingRight: '1em',
      textAlign: 'right',
      userSelect: 'none'
    },
    r = typeof e == 'function' ? e(n) : e,
    s = V(V({}, a), r);
  return s;
}
function xe(e) {
  var n = e.children,
    t = e.lineNumber,
    a = e.lineNumberStyle,
    r = e.largestLineNumber,
    s = e.showInlineLineNumbers,
    d = e.lineProps,
    l = d === void 0 ? {} : d,
    v = e.className,
    h = v === void 0 ? [] : v,
    b = e.showLineNumbers,
    g = e.wrapLongLines,
    m = typeof l == 'function' ? l(t) : l;
  if (((m.className = h), t && s)) {
    var w = Hn(a, t, r);
    n.unshift(Mn(t, w));
  }
  return (
    g & b && (m.style = V(V({}, m.style), {}, { display: 'flex' })),
    { type: 'element', tagName: 'span', properties: m, children: n }
  );
}
function Bn(e) {
  for (
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
      t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
      a = 0;
    a < e.length;
    a++
  ) {
    var r = e[a];
    if (r.type === 'text')
      t.push(xe({ children: [r], className: ia(new Set(n)) }));
    else if (r.children) {
      var s = n.concat(r.properties.className);
      Bn(r.children, s).forEach(function (d) {
        return t.push(d);
      });
    }
  }
  return t;
}
function xa(e, n, t, a, r, s, d, l, v) {
  var h,
    b = Bn(e.value),
    g = [],
    m = -1,
    w = 0;
  function k(u, c) {
    var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return xe({
      children: u,
      lineNumber: c,
      lineNumberStyle: l,
      largestLineNumber: d,
      showInlineLineNumbers: r,
      lineProps: t,
      className: y,
      showLineNumbers: a,
      wrapLongLines: v
    });
  }
  function N(u, c) {
    if (a && c && r) {
      var y = Hn(l, c, d);
      u.unshift(Mn(c, y));
    }
    return u;
  }
  function S(u, c) {
    var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    return n || y.length > 0 ? k(u, c, y) : N(u, c);
  }
  for (
    var A = function () {
      var c = b[w],
        y = c.children[0].value,
        x = ha(y);
      if (x) {
        var f = y.split(`
`);
        f.forEach(function ($, C) {
          var _ = a && g.length + s,
            D = {
              type: 'text',
              value: ''.concat(
                $,
                `
`
              )
            };
          if (C === 0) {
            var U = b
                .slice(m + 1, w)
                .concat(
                  xe({ children: [D], className: c.properties.className })
                ),
              B = S(U, _);
            g.push(B);
          } else if (C === f.length - 1) {
            var M = b[w + 1] && b[w + 1].children && b[w + 1].children[0],
              X = { type: 'text', value: ''.concat($) };
            if (M) {
              var O = xe({ children: [X], className: c.properties.className });
              b.splice(w + 1, 0, O);
            } else {
              var I = [X],
                T = S(I, _, c.properties.className);
              g.push(T);
            }
          } else {
            var L = [D],
              j = S(L, _, c.properties.className);
            g.push(j);
          }
        }),
          (m = w);
      }
      w++;
    };
    w < b.length;

  )
    A();
  if (m !== b.length - 1) {
    var o = b.slice(m + 1, b.length);
    if (o && o.length) {
      var i = a && g.length + s,
        p = S(o, i);
      g.push(p);
    }
  }
  return n ? g : (h = []).concat.apply(h, g);
}
function wa(e) {
  var n = e.rows,
    t = e.stylesheet,
    a = e.useInlineStyles;
  return n.map(function (r, s) {
    return Dn({
      node: r,
      stylesheet: t,
      useInlineStyles: a,
      key: 'code-segement'.concat(s)
    });
  });
}
function zn(e) {
  return e && typeof e.highlightAuto != 'undefined';
}
function Sa(e) {
  var n = e.astGenerator,
    t = e.language,
    a = e.code,
    r = e.defaultCodeValue;
  if (zn(n)) {
    var s = ga(n, t);
    return t === 'text'
      ? { value: r, language: 'text' }
      : s
      ? n.highlight(t, a)
      : n.highlightAuto(a);
  }
  try {
    return t && t !== 'text' ? { value: n.highlight(a, t) } : { value: r };
  } catch {
    return { value: r };
  }
}
function Aa(e, n) {
  return function (a) {
    var r = a.language,
      s = a.children,
      d = a.style,
      l = d === void 0 ? n : d,
      v = a.customStyle,
      h = v === void 0 ? {} : v,
      b = a.codeTagProps,
      g =
        b === void 0
          ? {
              className: r ? 'language-'.concat(r) : void 0,
              style: V(
                V({}, l['code[class*="language-"]']),
                l['code[class*="language-'.concat(r, '"]')]
              )
            }
          : b,
      m = a.useInlineStyles,
      w = m === void 0 ? !0 : m,
      k = a.showLineNumbers,
      N = k === void 0 ? !1 : k,
      S = a.showInlineLineNumbers,
      A = S === void 0 ? !0 : S,
      o = a.startingLineNumber,
      i = o === void 0 ? 1 : o,
      p = a.lineNumberContainerStyle,
      u = a.lineNumberStyle,
      c = u === void 0 ? {} : u,
      y = a.wrapLines,
      x = a.wrapLongLines,
      f = x === void 0 ? !1 : x,
      $ = a.lineProps,
      C = $ === void 0 ? {} : $,
      _ = a.renderer,
      D = a.PreTag,
      U = D === void 0 ? 'pre' : D,
      B = a.CodeTag,
      M = B === void 0 ? 'code' : B,
      X = a.code,
      O = X === void 0 ? (Array.isArray(s) ? s[0] : s) || '' : X,
      I = a.astGenerator,
      T = Kt(a, fa);
    I = I || e;
    var L = N
        ? Q.createElement(ya, {
            containerStyle: p,
            codeStyle: g.style || {},
            numberStyle: c,
            startingLineNumber: i,
            codeString: O
          })
        : null,
      j = l.hljs || l['pre[class*="language-"]'] || { backgroundColor: '#fff' },
      ae = zn(I) ? 'hljs' : 'prismjs',
      z = w
        ? Object.assign({}, T, { style: Object.assign({}, j, h) })
        : Object.assign({}, T, {
            className: T.className
              ? ''.concat(ae, ' ').concat(T.className)
              : ae,
            style: Object.assign({}, h)
          });
    if (
      (f
        ? (g.style = V(V({}, g.style), {}, { whiteSpace: 'pre-wrap' }))
        : (g.style = V(V({}, g.style), {}, { whiteSpace: 'pre' })),
      !I)
    )
      return Q.createElement(U, z, L, Q.createElement(M, g, O));
    ((y === void 0 && _) || f) && (y = !0), (_ = _ || wa);
    var K = [{ type: 'text', value: O }],
      G = Sa({ astGenerator: I, language: r, code: O, defaultCodeValue: K });
    G.language === null && (G.value = K);
    var Y = G.value.length + i,
      se = xa(G, y, C, N, A, i, Y, c, f);
    return Q.createElement(
      U,
      z,
      Q.createElement(
        M,
        g,
        !A && L,
        _({ rows: se, stylesheet: l, useInlineStyles: w })
      )
    );
  };
}
var ka = $a,
  Ea = Object.prototype.hasOwnProperty;
function $a() {
  for (var e = {}, n = 0; n < arguments.length; n++) {
    var t = arguments[n];
    for (var a in t) Ea.call(t, a) && (e[a] = t[a]);
  }
  return e;
}
var Pn = Un,
  Pe = Un.prototype;
Pe.space = null;
Pe.normal = {};
Pe.property = {};
function Un(e, n, t) {
  (this.property = e), (this.normal = n), t && (this.space = t);
}
var gn = ka,
  Na = Pn,
  Ca = Oa;
function Oa(e) {
  for (var n = e.length, t = [], a = [], r = -1, s, d; ++r < n; )
    (s = e[r]), t.push(s.property), a.push(s.normal), (d = s.space);
  return new Na(gn.apply(null, t), gn.apply(null, a), d);
}
var Ue = La;
function La(e) {
  return e.toLowerCase();
}
var Gn = qn,
  W = qn.prototype;
W.space = null;
W.attribute = null;
W.property = null;
W.boolean = !1;
W.booleanish = !1;
W.overloadedBoolean = !1;
W.number = !1;
W.commaSeparated = !1;
W.spaceSeparated = !1;
W.commaOrSpaceSeparated = !1;
W.mustUseProperty = !1;
W.defined = !1;
function qn(e, n) {
  (this.property = e), (this.attribute = n);
}
var J = {},
  Fa = 0;
J.boolean = te();
J.booleanish = te();
J.overloadedBoolean = te();
J.number = te();
J.spaceSeparated = te();
J.commaSeparated = te();
J.commaOrSpaceSeparated = te();
function te() {
  return Math.pow(2, ++Fa);
}
var Wn = Gn,
  fn = J,
  Zn = Ge;
Ge.prototype = new Wn();
Ge.prototype.defined = !0;
var Xn = [
    'boolean',
    'booleanish',
    'overloadedBoolean',
    'number',
    'commaSeparated',
    'spaceSeparated',
    'commaOrSpaceSeparated'
  ],
  Ta = Xn.length;
function Ge(e, n, t, a) {
  var r = -1,
    s;
  for (vn(this, 'space', a), Wn.call(this, e, n); ++r < Ta; )
    (s = Xn[r]), vn(this, s, (t & fn[s]) === fn[s]);
}
function vn(e, n, t) {
  t && (e[n] = t);
}
var hn = Ue,
  _a = Pn,
  Ia = Zn,
  ge = ja;
function ja(e) {
  var n = e.space,
    t = e.mustUseProperty || [],
    a = e.attributes || {},
    r = e.properties,
    s = e.transform,
    d = {},
    l = {},
    v,
    h;
  for (v in r)
    (h = new Ia(v, s(a, v), r[v], n)),
      t.indexOf(v) !== -1 && (h.mustUseProperty = !0),
      (d[v] = h),
      (l[hn(v)] = v),
      (l[hn(h.attribute)] = v);
  return new _a(d, l, n);
}
var Ra = ge,
  Da = Ra({
    space: 'xlink',
    transform: Ma,
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null
    }
  });
function Ma(e, n) {
  return 'xlink:' + n.slice(5).toLowerCase();
}
var Ha = ge,
  Ba = Ha({
    space: 'xml',
    transform: za,
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null }
  });
function za(e, n) {
  return 'xml:' + n.slice(3).toLowerCase();
}
var Pa = Ua;
function Ua(e, n) {
  return n in e ? e[n] : n;
}
var Ga = Pa,
  Kn = qa;
function qa(e, n) {
  return Ga(e, n.toLowerCase());
}
var Wa = ge,
  Za = Kn,
  Xa = Wa({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: Za,
    properties: { xmlns: null, xmlnsXLink: null }
  }),
  qe = J,
  Ka = ge,
  P = qe.booleanish,
  q = qe.number,
  ne = qe.spaceSeparated,
  Ya = Ka({
    transform: Va,
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: P,
      ariaAutoComplete: null,
      ariaBusy: P,
      ariaChecked: P,
      ariaColCount: q,
      ariaColIndex: q,
      ariaColSpan: q,
      ariaControls: ne,
      ariaCurrent: null,
      ariaDescribedBy: ne,
      ariaDetails: null,
      ariaDisabled: P,
      ariaDropEffect: ne,
      ariaErrorMessage: null,
      ariaExpanded: P,
      ariaFlowTo: ne,
      ariaGrabbed: P,
      ariaHasPopup: null,
      ariaHidden: P,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: ne,
      ariaLevel: q,
      ariaLive: null,
      ariaModal: P,
      ariaMultiLine: P,
      ariaMultiSelectable: P,
      ariaOrientation: null,
      ariaOwns: ne,
      ariaPlaceholder: null,
      ariaPosInSet: q,
      ariaPressed: P,
      ariaReadOnly: P,
      ariaRelevant: null,
      ariaRequired: P,
      ariaRoleDescription: ne,
      ariaRowCount: q,
      ariaRowIndex: q,
      ariaRowSpan: q,
      ariaSelected: P,
      ariaSetSize: q,
      ariaSort: null,
      ariaValueMax: q,
      ariaValueMin: q,
      ariaValueNow: q,
      ariaValueText: null,
      role: null
    }
  });
function Va(e, n) {
  return n === 'role' ? n : 'aria-' + n.slice(4).toLowerCase();
}
var le = J,
  Ja = ge,
  Qa = Kn,
  E = le.boolean,
  er = le.overloadedBoolean,
  ce = le.booleanish,
  F = le.number,
  H = le.spaceSeparated,
  he = le.commaSeparated,
  nr = Ja({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv'
    },
    transform: Qa,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: he,
      acceptCharset: H,
      accessKey: H,
      action: null,
      allow: null,
      allowFullScreen: E,
      allowPaymentRequest: E,
      allowUserMedia: E,
      alt: null,
      as: null,
      async: E,
      autoCapitalize: null,
      autoComplete: H,
      autoFocus: E,
      autoPlay: E,
      capture: E,
      charSet: null,
      checked: E,
      cite: null,
      className: H,
      cols: F,
      colSpan: null,
      content: null,
      contentEditable: ce,
      controls: E,
      controlsList: H,
      coords: F | he,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: E,
      defer: E,
      dir: null,
      dirName: null,
      disabled: E,
      download: er,
      draggable: ce,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: E,
      formTarget: null,
      headers: H,
      height: F,
      hidden: E,
      high: F,
      href: null,
      hrefLang: null,
      htmlFor: H,
      httpEquiv: H,
      id: null,
      imageSizes: null,
      imageSrcSet: he,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: E,
      itemId: null,
      itemProp: H,
      itemRef: H,
      itemScope: E,
      itemType: H,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: E,
      low: F,
      manifest: null,
      max: null,
      maxLength: F,
      media: null,
      method: null,
      min: null,
      minLength: F,
      multiple: E,
      muted: E,
      name: null,
      nonce: null,
      noModule: E,
      noValidate: E,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextMenu: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: E,
      optimum: F,
      pattern: null,
      ping: H,
      placeholder: null,
      playsInline: E,
      poster: null,
      preload: null,
      readOnly: E,
      referrerPolicy: null,
      rel: H,
      required: E,
      reversed: E,
      rows: F,
      rowSpan: F,
      sandbox: H,
      scope: null,
      scoped: E,
      seamless: E,
      selected: E,
      shape: null,
      size: F,
      sizes: null,
      slot: null,
      span: F,
      spellCheck: ce,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: he,
      start: F,
      step: null,
      style: null,
      tabIndex: F,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: E,
      useMap: null,
      value: ce,
      width: F,
      wrap: null,
      align: null,
      aLink: null,
      archive: H,
      axis: null,
      background: null,
      bgColor: null,
      border: F,
      borderColor: null,
      bottomMargin: F,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: E,
      declare: E,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: F,
      leftMargin: F,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: F,
      marginWidth: F,
      noResize: E,
      noHref: E,
      noShade: E,
      noWrap: E,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: F,
      rules: null,
      scheme: null,
      scrolling: ce,
      standby: null,
      summary: null,
      text: null,
      topMargin: F,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: F,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: E,
      disableRemotePlayback: E,
      prefix: null,
      property: null,
      results: F,
      security: null,
      unselectable: null
    }
  }),
  tr = Ca,
  ar = Da,
  rr = Ba,
  or = Xa,
  ir = Ya,
  lr = nr,
  sr = tr([rr, ar, or, ir, lr]),
  cr = Ue,
  ur = Zn,
  pr = Gn,
  We = 'data',
  dr = vr,
  gr = /^data[-\w.:]+$/i,
  Yn = /-[a-z]/g,
  fr = /[A-Z]/g;
function vr(e, n) {
  var t = cr(n),
    a = n,
    r = pr;
  return t in e.normal
    ? e.property[e.normal[t]]
    : (t.length > 4 &&
        t.slice(0, 4) === We &&
        gr.test(n) &&
        (n.charAt(4) === '-' ? (a = hr(n)) : (n = mr(n)), (r = ur)),
      new r(a, n));
}
function hr(e) {
  var n = e.slice(5).replace(Yn, br);
  return We + n.charAt(0).toUpperCase() + n.slice(1);
}
function mr(e) {
  var n = e.slice(4);
  return Yn.test(n)
    ? e
    : ((n = n.replace(fr, yr)), n.charAt(0) !== '-' && (n = '-' + n), We + n);
}
function yr(e) {
  return '-' + e.toLowerCase();
}
function br(e) {
  return e.charAt(1).toUpperCase();
}
var xr = wr,
  mn = /[#.]/g;
function wr(e, n) {
  for (var t = e || '', a = n || 'div', r = {}, s = 0, d, l, v; s < t.length; )
    (mn.lastIndex = s),
      (v = mn.exec(t)),
      (d = t.slice(s, v ? v.index : t.length)),
      d &&
        (l
          ? l === '#'
            ? (r.id = d)
            : r.className
            ? r.className.push(d)
            : (r.className = [d])
          : (a = d),
        (s += d.length)),
      v && ((l = v[0]), s++);
  return { type: 'element', tagName: a, properties: r, children: [] };
}
var Ze = {};
Ze.parse = kr;
Ze.stringify = Er;
var yn = '',
  Sr = ' ',
  Ar = /[ \t\n\r\f]+/g;
function kr(e) {
  var n = String(e || yn).trim();
  return n === yn ? [] : n.split(Ar);
}
function Er(e) {
  return e.join(Sr).trim();
}
var Xe = {};
Xe.parse = $r;
Xe.stringify = Nr;
var Ce = ',',
  bn = ' ',
  pe = '';
function $r(e) {
  for (
    var n = [], t = String(e || pe), a = t.indexOf(Ce), r = 0, s = !1, d;
    !s;

  )
    a === -1 && ((a = t.length), (s = !0)),
      (d = t.slice(r, a).trim()),
      (d || !s) && n.push(d),
      (r = a + 1),
      (a = t.indexOf(Ce, r));
  return n;
}
function Nr(e, n) {
  var t = n || {},
    a = t.padLeft === !1 ? pe : bn,
    r = t.padRight ? bn : pe;
  return (
    e[e.length - 1] === pe && (e = e.concat(pe)), e.join(r + Ce + a).trim()
  );
}
var Cr = dr,
  xn = Ue,
  Or = xr,
  wn = Ze.parse,
  Sn = Xe.parse,
  Lr = Tr,
  Fr = {}.hasOwnProperty;
function Tr(e, n, t) {
  var a = t ? Dr(t) : null;
  return r;
  function r(d, l) {
    var v = Or(d, n),
      h = Array.prototype.slice.call(arguments, 2),
      b = v.tagName.toLowerCase(),
      g;
    if (
      ((v.tagName = a && Fr.call(a, b) ? a[b] : b),
      l && _r(l, v) && (h.unshift(l), (l = null)),
      l)
    )
      for (g in l) s(v.properties, g, l[g]);
    return (
      Vn(v.children, h),
      v.tagName === 'template' &&
        ((v.content = { type: 'root', children: v.children }),
        (v.children = [])),
      v
    );
  }
  function s(d, l, v) {
    var h, b, g;
    v == null ||
      v !== v ||
      ((h = Cr(e, l)),
      (b = h.property),
      (g = v),
      typeof g == 'string' &&
        (h.spaceSeparated
          ? (g = wn(g))
          : h.commaSeparated
          ? (g = Sn(g))
          : h.commaOrSpaceSeparated && (g = wn(Sn(g).join(' ')))),
      b === 'style' && typeof v != 'string' && (g = Rr(g)),
      b === 'className' && d.className && (g = d.className.concat(g)),
      (d[b] = jr(h, b, g)));
  }
}
function _r(e, n) {
  return typeof e == 'string' || 'length' in e || Ir(n.tagName, e);
}
function Ir(e, n) {
  var t = n.type;
  return e === 'input' || !t || typeof t != 'string'
    ? !1
    : typeof n.children == 'object' && 'length' in n.children
    ? !0
    : ((t = t.toLowerCase()),
      e === 'button'
        ? t !== 'menu' && t !== 'submit' && t !== 'reset' && t !== 'button'
        : 'value' in n);
}
function Vn(e, n) {
  var t, a;
  if (typeof n == 'string' || typeof n == 'number') {
    e.push({ type: 'text', value: String(n) });
    return;
  }
  if (typeof n == 'object' && 'length' in n) {
    for (t = -1, a = n.length; ++t < a; ) Vn(e, n[t]);
    return;
  }
  if (typeof n != 'object' || !('type' in n))
    throw new Error('Expected node, nodes, or string, got `' + n + '`');
  e.push(n);
}
function jr(e, n, t) {
  var a, r, s;
  if (typeof t != 'object' || !('length' in t)) return An(e, n, t);
  for (r = t.length, a = -1, s = []; ++a < r; ) s[a] = An(e, n, t[a]);
  return s;
}
function An(e, n, t) {
  var a = t;
  return (
    e.number || e.positiveNumber
      ? !isNaN(a) && a !== '' && (a = Number(a))
      : (e.boolean || e.overloadedBoolean) &&
        typeof a == 'string' &&
        (a === '' || xn(t) === xn(n)) &&
        (a = !0),
    a
  );
}
function Rr(e) {
  var n = [],
    t;
  for (t in e) n.push([t, e[t]].join(': '));
  return n.join('; ');
}
function Dr(e) {
  for (var n = e.length, t = -1, a = {}, r; ++t < n; )
    (r = e[t]), (a[r.toLowerCase()] = r);
  return a;
}
var Mr = sr,
  Hr = Lr,
  Jn = Hr(Mr, 'div');
Jn.displayName = 'html';
var Br = Jn,
  zr = Br;
const Pr = '\xC6',
  Ur = '&',
  Gr = '\xC1',
  qr = '\xC2',
  Wr = '\xC0',
  Zr = '\xC5',
  Xr = '\xC3',
  Kr = '\xC4',
  Yr = '\xA9',
  Vr = '\xC7',
  Jr = '\xD0',
  Qr = '\xC9',
  eo = '\xCA',
  no = '\xC8',
  to = '\xCB',
  ao = '>',
  ro = '\xCD',
  oo = '\xCE',
  io = '\xCC',
  lo = '\xCF',
  so = '<',
  co = '\xD1',
  uo = '\xD3',
  po = '\xD4',
  go = '\xD2',
  fo = '\xD8',
  vo = '\xD5',
  ho = '\xD6',
  mo = '"',
  yo = '\xAE',
  bo = '\xDE',
  xo = '\xDA',
  wo = '\xDB',
  So = '\xD9',
  Ao = '\xDC',
  ko = '\xDD',
  Eo = '\xE1',
  $o = '\xE2',
  No = '\xB4',
  Co = '\xE6',
  Oo = '\xE0',
  Lo = '&',
  Fo = '\xE5',
  To = '\xE3',
  _o = '\xE4',
  Io = '\xA6',
  jo = '\xE7',
  Ro = '\xB8',
  Do = '\xA2',
  Mo = '\xA9',
  Ho = '\xA4',
  Bo = '\xB0',
  zo = '\xF7',
  Po = '\xE9',
  Uo = '\xEA',
  Go = '\xE8',
  qo = '\xF0',
  Wo = '\xEB',
  Zo = '\xBD',
  Xo = '\xBC',
  Ko = '\xBE',
  Yo = '>',
  Vo = '\xED',
  Jo = '\xEE',
  Qo = '\xA1',
  ei = '\xEC',
  ni = '\xBF',
  ti = '\xEF',
  ai = '\xAB',
  ri = '<',
  oi = '\xAF',
  ii = '\xB5',
  li = '\xB7',
  si = '\xA0',
  ci = '\xAC',
  ui = '\xF1',
  pi = '\xF3',
  di = '\xF4',
  gi = '\xF2',
  fi = '\xAA',
  vi = '\xBA',
  hi = '\xF8',
  mi = '\xF5',
  yi = '\xF6',
  bi = '\xB6',
  xi = '\xB1',
  wi = '\xA3',
  Si = '"',
  Ai = '\xBB',
  ki = '\xAE',
  Ei = '\xA7',
  $i = '\xAD',
  Ni = '\xB9',
  Ci = '\xB2',
  Oi = '\xB3',
  Li = '\xDF',
  Fi = '\xFE',
  Ti = '\xD7',
  _i = '\xFA',
  Ii = '\xFB',
  ji = '\xF9',
  Ri = '\xA8',
  Di = '\xFC',
  Mi = '\xFD',
  Hi = '\xA5',
  Bi = '\xFF';
var zi = {
    AElig: Pr,
    AMP: Ur,
    Aacute: Gr,
    Acirc: qr,
    Agrave: Wr,
    Aring: Zr,
    Atilde: Xr,
    Auml: Kr,
    COPY: Yr,
    Ccedil: Vr,
    ETH: Jr,
    Eacute: Qr,
    Ecirc: eo,
    Egrave: no,
    Euml: to,
    GT: ao,
    Iacute: ro,
    Icirc: oo,
    Igrave: io,
    Iuml: lo,
    LT: so,
    Ntilde: co,
    Oacute: uo,
    Ocirc: po,
    Ograve: go,
    Oslash: fo,
    Otilde: vo,
    Ouml: ho,
    QUOT: mo,
    REG: yo,
    THORN: bo,
    Uacute: xo,
    Ucirc: wo,
    Ugrave: So,
    Uuml: Ao,
    Yacute: ko,
    aacute: Eo,
    acirc: $o,
    acute: No,
    aelig: Co,
    agrave: Oo,
    amp: Lo,
    aring: Fo,
    atilde: To,
    auml: _o,
    brvbar: Io,
    ccedil: jo,
    cedil: Ro,
    cent: Do,
    copy: Mo,
    curren: Ho,
    deg: Bo,
    divide: zo,
    eacute: Po,
    ecirc: Uo,
    egrave: Go,
    eth: qo,
    euml: Wo,
    frac12: Zo,
    frac14: Xo,
    frac34: Ko,
    gt: Yo,
    iacute: Vo,
    icirc: Jo,
    iexcl: Qo,
    igrave: ei,
    iquest: ni,
    iuml: ti,
    laquo: ai,
    lt: ri,
    macr: oi,
    micro: ii,
    middot: li,
    nbsp: si,
    not: ci,
    ntilde: ui,
    oacute: pi,
    ocirc: di,
    ograve: gi,
    ordf: fi,
    ordm: vi,
    oslash: hi,
    otilde: mi,
    ouml: yi,
    para: bi,
    plusmn: xi,
    pound: wi,
    quot: Si,
    raquo: Ai,
    reg: ki,
    sect: Ei,
    shy: $i,
    sup1: Ni,
    sup2: Ci,
    sup3: Oi,
    szlig: Li,
    thorn: Fi,
    times: Ti,
    uacute: _i,
    ucirc: Ii,
    ugrave: ji,
    uml: Ri,
    uuml: Di,
    yacute: Mi,
    yen: Hi,
    yuml: Bi
  },
  Pi = {
    0: '\uFFFD',
    128: '\u20AC',
    130: '\u201A',
    131: '\u0192',
    132: '\u201E',
    133: '\u2026',
    134: '\u2020',
    135: '\u2021',
    136: '\u02C6',
    137: '\u2030',
    138: '\u0160',
    139: '\u2039',
    140: '\u0152',
    142: '\u017D',
    145: '\u2018',
    146: '\u2019',
    147: '\u201C',
    148: '\u201D',
    149: '\u2022',
    150: '\u2013',
    151: '\u2014',
    152: '\u02DC',
    153: '\u2122',
    154: '\u0161',
    155: '\u203A',
    156: '\u0153',
    158: '\u017E',
    159: '\u0178'
  },
  Qn = Ui;
function Ui(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e;
  return n >= 48 && n <= 57;
}
var Gi = qi;
function qi(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e;
  return (n >= 97 && n <= 102) || (n >= 65 && n <= 70) || (n >= 48 && n <= 57);
}
var Wi = Zi;
function Zi(e) {
  var n = typeof e == 'string' ? e.charCodeAt(0) : e;
  return (n >= 97 && n <= 122) || (n >= 65 && n <= 90);
}
var Xi = Wi,
  Ki = Qn,
  Yi = Vi;
function Vi(e) {
  return Xi(e) || Ki(e);
}
var me,
  Ji = 59,
  Qi = el;
function el(e) {
  var n = '&' + e + ';',
    t;
  return (
    (me = me || document.createElement('i')),
    (me.innerHTML = n),
    (t = me.textContent),
    (t.charCodeAt(t.length - 1) === Ji && e !== 'semi') || t === n ? !1 : t
  );
}
var kn = zi,
  En = Pi,
  nl = Qn,
  tl = Gi,
  et = Yi,
  al = Qi,
  rl = ml,
  ol = {}.hasOwnProperty,
  re = String.fromCharCode,
  il = Function.prototype,
  $n = {
    warning: null,
    reference: null,
    text: null,
    warningContext: null,
    referenceContext: null,
    textContext: null,
    position: {},
    additional: null,
    attribute: !1,
    nonTerminated: !0
  },
  ll = 9,
  Nn = 10,
  sl = 12,
  cl = 32,
  Cn = 38,
  ul = 59,
  pl = 60,
  dl = 61,
  gl = 35,
  fl = 88,
  vl = 120,
  hl = 65533,
  oe = 'named',
  Ke = 'hexadecimal',
  Ye = 'decimal',
  Ve = {};
Ve[Ke] = 16;
Ve[Ye] = 10;
var Ae = {};
Ae[oe] = et;
Ae[Ye] = nl;
Ae[Ke] = tl;
var nt = 1,
  tt = 2,
  at = 3,
  rt = 4,
  ot = 5,
  Oe = 6,
  it = 7,
  ee = {};
ee[nt] = 'Named character references must be terminated by a semicolon';
ee[tt] = 'Numeric character references must be terminated by a semicolon';
ee[at] = 'Named character references cannot be empty';
ee[rt] = 'Numeric character references cannot be empty';
ee[ot] = 'Named character references must be known';
ee[Oe] = 'Numeric character references cannot be disallowed';
ee[it] =
  'Numeric character references cannot be outside the permissible Unicode range';
function ml(e, n) {
  var t = {},
    a,
    r;
  n || (n = {});
  for (r in $n) (a = n[r]), (t[r] = a == null ? $n[r] : a);
  return (
    (t.position.indent || t.position.start) &&
      ((t.indent = t.position.indent || []), (t.position = t.position.start)),
    yl(e, t)
  );
}
function yl(e, n) {
  var t = n.additional,
    a = n.nonTerminated,
    r = n.text,
    s = n.reference,
    d = n.warning,
    l = n.textContext,
    v = n.referenceContext,
    h = n.warningContext,
    b = n.position,
    g = n.indent || [],
    m = e.length,
    w = 0,
    k = -1,
    N = b.column || 1,
    S = b.line || 1,
    A = '',
    o = [],
    i,
    p,
    u,
    c,
    y,
    x,
    f,
    $,
    C,
    _,
    D,
    U,
    B,
    M,
    X,
    O,
    I,
    T,
    L;
  for (
    typeof t == 'string' && (t = t.charCodeAt(0)),
      O = j(),
      $ = d ? ae : il,
      w--,
      m++;
    ++w < m;

  )
    if ((y === Nn && (N = g[k] || 1), (y = e.charCodeAt(w)), y === Cn)) {
      if (
        ((f = e.charCodeAt(w + 1)),
        f === ll ||
          f === Nn ||
          f === sl ||
          f === cl ||
          f === Cn ||
          f === pl ||
          f !== f ||
          (t && f === t))
      ) {
        (A += re(y)), N++;
        continue;
      }
      for (
        B = w + 1,
          U = B,
          L = B,
          f === gl
            ? ((L = ++U),
              (f = e.charCodeAt(L)),
              f === fl || f === vl ? ((M = Ke), (L = ++U)) : (M = Ye))
            : (M = oe),
          i = '',
          D = '',
          c = '',
          X = Ae[M],
          L--;
        ++L < m && ((f = e.charCodeAt(L)), !!X(f));

      )
        (c += re(f)), M === oe && ol.call(kn, c) && ((i = c), (D = kn[c]));
      (u = e.charCodeAt(L) === ul),
        u && (L++, (p = M === oe ? al(c) : !1), p && ((i = c), (D = p))),
        (T = 1 + L - B),
        (!u && !a) ||
          (c
            ? M === oe
              ? (u && !D
                  ? $(ot, 1)
                  : (i !== c && ((L = U + i.length), (T = 1 + L - U), (u = !1)),
                    u ||
                      ((C = i ? nt : at),
                      n.attribute
                        ? ((f = e.charCodeAt(L)),
                          f === dl
                            ? ($(C, T), (D = null))
                            : et(f)
                            ? (D = null)
                            : $(C, T))
                        : $(C, T))),
                (x = D))
              : (u || $(tt, T),
                (x = parseInt(c, Ve[M])),
                bl(x)
                  ? ($(it, T), (x = re(hl)))
                  : x in En
                  ? ($(Oe, T), (x = En[x]))
                  : ((_ = ''),
                    xl(x) && $(Oe, T),
                    x > 65535 &&
                      ((x -= 65536),
                      (_ += re((x >>> 10) | 55296)),
                      (x = 56320 | (x & 1023))),
                    (x = _ + re(x))))
            : M !== oe && $(rt, T)),
        x
          ? (z(),
            (O = j()),
            (w = L - 1),
            (N += L - B + 1),
            o.push(x),
            (I = j()),
            I.offset++,
            s && s.call(v, x, { start: O, end: I }, e.slice(B - 1, L)),
            (O = I))
          : ((c = e.slice(B - 1, L)), (A += c), (N += c.length), (w = L - 1));
    } else y === 10 && (S++, k++, (N = 0)), y === y ? ((A += re(y)), N++) : z();
  return o.join('');
  function j() {
    return { line: S, column: N, offset: w + (b.offset || 0) };
  }
  function ae(K, G) {
    var Y = j();
    (Y.column += G), (Y.offset += G), d.call(h, ee[K], Y, K);
  }
  function z() {
    A && (o.push(A), r && r.call(l, A, { start: O, end: j() }), (A = ''));
  }
}
function bl(e) {
  return (e >= 55296 && e <= 57343) || e > 1114111;
}
function xl(e) {
  return (
    (e >= 1 && e <= 8) ||
    e === 11 ||
    (e >= 13 && e <= 31) ||
    (e >= 127 && e <= 159) ||
    (e >= 64976 && e <= 65007) ||
    (e & 65535) === 65535 ||
    (e & 65535) === 65534
  );
}
var lt = { exports: {} };
(function (e) {
  var n =
    typeof window != 'undefined'
      ? window
      : typeof WorkerGlobalScope != 'undefined' &&
        self instanceof WorkerGlobalScope
      ? self
      : {};
  /**
   * Prism: Lightweight, robust, elegant syntax highlighting
   *
   * @license MIT <https://opensource.org/licenses/MIT>
   * @author Lea Verou <https://lea.verou.me>
   * @namespace
   * @public
   */ var t = (function (a) {
    var r = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
      s = 0,
      d = {},
      l = {
        manual: a.Prism && a.Prism.manual,
        disableWorkerMessageHandler:
          a.Prism && a.Prism.disableWorkerMessageHandler,
        util: {
          encode: function o(i) {
            return i instanceof v
              ? new v(i.type, o(i.content), i.alias)
              : Array.isArray(i)
              ? i.map(o)
              : i
                  .replace(/&/g, '&amp;')
                  .replace(/</g, '&lt;')
                  .replace(/\u00a0/g, ' ');
          },
          type: function (o) {
            return Object.prototype.toString.call(o).slice(8, -1);
          },
          objId: function (o) {
            return (
              o.__id || Object.defineProperty(o, '__id', { value: ++s }), o.__id
            );
          },
          clone: function o(i, p) {
            p = p || {};
            var u, c;
            switch (l.util.type(i)) {
              case 'Object':
                if (((c = l.util.objId(i)), p[c])) return p[c];
                (u = {}), (p[c] = u);
                for (var y in i) i.hasOwnProperty(y) && (u[y] = o(i[y], p));
                return u;
              case 'Array':
                return (
                  (c = l.util.objId(i)),
                  p[c]
                    ? p[c]
                    : ((u = []),
                      (p[c] = u),
                      i.forEach(function (x, f) {
                        u[f] = o(x, p);
                      }),
                      u)
                );
              default:
                return i;
            }
          },
          getLanguage: function (o) {
            for (; o; ) {
              var i = r.exec(o.className);
              if (i) return i[1].toLowerCase();
              o = o.parentElement;
            }
            return 'none';
          },
          setLanguage: function (o, i) {
            (o.className = o.className.replace(RegExp(r, 'gi'), '')),
              o.classList.add('language-' + i);
          },
          currentScript: function () {
            if (typeof document == 'undefined') return null;
            if ('currentScript' in document && 1 < 2)
              return document.currentScript;
            try {
              throw new Error();
            } catch (u) {
              var o = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(u.stack) ||
                [])[1];
              if (o) {
                var i = document.getElementsByTagName('script');
                for (var p in i) if (i[p].src == o) return i[p];
              }
              return null;
            }
          },
          isActive: function (o, i, p) {
            for (var u = 'no-' + i; o; ) {
              var c = o.classList;
              if (c.contains(i)) return !0;
              if (c.contains(u)) return !1;
              o = o.parentElement;
            }
            return !!p;
          }
        },
        languages: {
          plain: d,
          plaintext: d,
          text: d,
          txt: d,
          extend: function (o, i) {
            var p = l.util.clone(l.languages[o]);
            for (var u in i) p[u] = i[u];
            return p;
          },
          insertBefore: function (o, i, p, u) {
            u = u || l.languages;
            var c = u[o],
              y = {};
            for (var x in c)
              if (c.hasOwnProperty(x)) {
                if (x == i)
                  for (var f in p) p.hasOwnProperty(f) && (y[f] = p[f]);
                p.hasOwnProperty(x) || (y[x] = c[x]);
              }
            var $ = u[o];
            return (
              (u[o] = y),
              l.languages.DFS(l.languages, function (C, _) {
                _ === $ && C != o && (this[C] = y);
              }),
              y
            );
          },
          DFS: function o(i, p, u, c) {
            c = c || {};
            var y = l.util.objId;
            for (var x in i)
              if (i.hasOwnProperty(x)) {
                p.call(i, x, i[x], u || x);
                var f = i[x],
                  $ = l.util.type(f);
                $ === 'Object' && !c[y(f)]
                  ? ((c[y(f)] = !0), o(f, p, null, c))
                  : $ === 'Array' &&
                    !c[y(f)] &&
                    ((c[y(f)] = !0), o(f, p, x, c));
              }
          }
        },
        plugins: {},
        highlightAll: function (o, i) {
          l.highlightAllUnder(document, o, i);
        },
        highlightAllUnder: function (o, i, p) {
          var u = {
            callback: p,
            container: o,
            selector:
              'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
          };
          l.hooks.run('before-highlightall', u),
            (u.elements = Array.prototype.slice.apply(
              u.container.querySelectorAll(u.selector)
            )),
            l.hooks.run('before-all-elements-highlight', u);
          for (var c = 0, y; (y = u.elements[c++]); )
            l.highlightElement(y, i === !0, u.callback);
        },
        highlightElement: function (o, i, p) {
          var u = l.util.getLanguage(o),
            c = l.languages[u];
          l.util.setLanguage(o, u);
          var y = o.parentElement;
          y && y.nodeName.toLowerCase() === 'pre' && l.util.setLanguage(y, u);
          var x = o.textContent,
            f = { element: o, language: u, grammar: c, code: x };
          function $(_) {
            (f.highlightedCode = _),
              l.hooks.run('before-insert', f),
              (f.element.innerHTML = f.highlightedCode),
              l.hooks.run('after-highlight', f),
              l.hooks.run('complete', f),
              p && p.call(f.element);
          }
          if (
            (l.hooks.run('before-sanity-check', f),
            (y = f.element.parentElement),
            y &&
              y.nodeName.toLowerCase() === 'pre' &&
              !y.hasAttribute('tabindex') &&
              y.setAttribute('tabindex', '0'),
            !f.code)
          ) {
            l.hooks.run('complete', f), p && p.call(f.element);
            return;
          }
          if ((l.hooks.run('before-highlight', f), !f.grammar)) {
            $(l.util.encode(f.code));
            return;
          }
          if (i && a.Worker) {
            var C = new Worker(l.filename);
            (C.onmessage = function (_) {
              $(_.data);
            }),
              C.postMessage(
                JSON.stringify({
                  language: f.language,
                  code: f.code,
                  immediateClose: !0
                })
              );
          } else $(l.highlight(f.code, f.grammar, f.language));
        },
        highlight: function (o, i, p) {
          var u = { code: o, grammar: i, language: p };
          if ((l.hooks.run('before-tokenize', u), !u.grammar))
            throw new Error(
              'The language "' + u.language + '" has no grammar.'
            );
          return (
            (u.tokens = l.tokenize(u.code, u.grammar)),
            l.hooks.run('after-tokenize', u),
            v.stringify(l.util.encode(u.tokens), u.language)
          );
        },
        tokenize: function (o, i) {
          var p = i.rest;
          if (p) {
            for (var u in p) i[u] = p[u];
            delete i.rest;
          }
          var c = new g();
          return m(c, c.head, o), b(o, c, i, c.head, 0), k(c);
        },
        hooks: {
          all: {},
          add: function (o, i) {
            var p = l.hooks.all;
            (p[o] = p[o] || []), p[o].push(i);
          },
          run: function (o, i) {
            var p = l.hooks.all[o];
            if (!(!p || !p.length)) for (var u = 0, c; (c = p[u++]); ) c(i);
          }
        },
        Token: v
      };
    a.Prism = l;
    function v(o, i, p, u) {
      (this.type = o),
        (this.content = i),
        (this.alias = p),
        (this.length = (u || '').length | 0);
    }
    v.stringify = function o(i, p) {
      if (typeof i == 'string') return i;
      if (Array.isArray(i)) {
        var u = '';
        return (
          i.forEach(function ($) {
            u += o($, p);
          }),
          u
        );
      }
      var c = {
          type: i.type,
          content: o(i.content, p),
          tag: 'span',
          classes: ['token', i.type],
          attributes: {},
          language: p
        },
        y = i.alias;
      y &&
        (Array.isArray(y)
          ? Array.prototype.push.apply(c.classes, y)
          : c.classes.push(y)),
        l.hooks.run('wrap', c);
      var x = '';
      for (var f in c.attributes)
        x +=
          ' ' +
          f +
          '="' +
          (c.attributes[f] || '').replace(/"/g, '&quot;') +
          '"';
      return (
        '<' +
        c.tag +
        ' class="' +
        c.classes.join(' ') +
        '"' +
        x +
        '>' +
        c.content +
        '</' +
        c.tag +
        '>'
      );
    };
    function h(o, i, p, u) {
      o.lastIndex = i;
      var c = o.exec(p);
      if (c && u && c[1]) {
        var y = c[1].length;
        (c.index += y), (c[0] = c[0].slice(y));
      }
      return c;
    }
    function b(o, i, p, u, c, y) {
      for (var x in p)
        if (!(!p.hasOwnProperty(x) || !p[x])) {
          var f = p[x];
          f = Array.isArray(f) ? f : [f];
          for (var $ = 0; $ < f.length; ++$) {
            if (y && y.cause == x + ',' + $) return;
            var C = f[$],
              _ = C.inside,
              D = !!C.lookbehind,
              U = !!C.greedy,
              B = C.alias;
            if (U && !C.pattern.global) {
              var M = C.pattern.toString().match(/[imsuy]*$/)[0];
              C.pattern = RegExp(C.pattern.source, M + 'g');
            }
            for (
              var X = C.pattern || C, O = u.next, I = c;
              O !== i.tail && !(y && I >= y.reach);
              I += O.value.length, O = O.next
            ) {
              var T = O.value;
              if (i.length > o.length) return;
              if (!(T instanceof v)) {
                var L = 1,
                  j;
                if (U) {
                  if (((j = h(X, I, o, D)), !j || j.index >= o.length)) break;
                  var G = j.index,
                    ae = j.index + j[0].length,
                    z = I;
                  for (z += O.value.length; G >= z; )
                    (O = O.next), (z += O.value.length);
                  if (((z -= O.value.length), (I = z), O.value instanceof v))
                    continue;
                  for (
                    var K = O;
                    K !== i.tail && (z < ae || typeof K.value == 'string');
                    K = K.next
                  )
                    L++, (z += K.value.length);
                  L--, (T = o.slice(I, z)), (j.index -= I);
                } else if (((j = h(X, 0, T, D)), !j)) continue;
                var G = j.index,
                  Y = j[0],
                  se = T.slice(0, G),
                  an = T.slice(G + Y.length),
                  ke = I + T.length;
                y && ke > y.reach && (y.reach = ke);
                var ve = O.prev;
                se && ((ve = m(i, ve, se)), (I += se.length)), w(i, ve, L);
                var pt = new v(x, _ ? l.tokenize(Y, _) : Y, B, Y);
                if (((O = m(i, ve, pt)), an && m(i, O, an), L > 1)) {
                  var Ee = { cause: x + ',' + $, reach: ke };
                  b(o, i, p, O.prev, I, Ee),
                    y && Ee.reach > y.reach && (y.reach = Ee.reach);
                }
              }
            }
          }
        }
    }
    function g() {
      var o = { value: null, prev: null, next: null },
        i = { value: null, prev: o, next: null };
      (o.next = i), (this.head = o), (this.tail = i), (this.length = 0);
    }
    function m(o, i, p) {
      var u = i.next,
        c = { value: p, prev: i, next: u };
      return (i.next = c), (u.prev = c), o.length++, c;
    }
    function w(o, i, p) {
      for (var u = i.next, c = 0; c < p && u !== o.tail; c++) u = u.next;
      (i.next = u), (u.prev = i), (o.length -= c);
    }
    function k(o) {
      for (var i = [], p = o.head.next; p !== o.tail; )
        i.push(p.value), (p = p.next);
      return i;
    }
    if (!a.document)
      return (
        a.addEventListener &&
          (l.disableWorkerMessageHandler ||
            a.addEventListener(
              'message',
              function (o) {
                var i = JSON.parse(o.data),
                  p = i.language,
                  u = i.code,
                  c = i.immediateClose;
                a.postMessage(l.highlight(u, l.languages[p], p)),
                  c && a.close();
              },
              !1
            )),
        l
      );
    var N = l.util.currentScript();
    N &&
      ((l.filename = N.src), N.hasAttribute('data-manual') && (l.manual = !0));
    function S() {
      l.manual || l.highlightAll();
    }
    if (!l.manual) {
      var A = document.readyState;
      A === 'loading' || (A === 'interactive' && N && N.defer)
        ? document.addEventListener('DOMContentLoaded', S)
        : window.requestAnimationFrame
        ? window.requestAnimationFrame(S)
        : window.setTimeout(S, 16);
    }
    return l;
  })(n);
  e.exports && (e.exports = t), typeof we != 'undefined' && (we.Prism = t);
})(lt);
var wl = Je;
Je.displayName = 'clike';
Je.aliases = [];
function Je(e) {
  e.languages.clike = {
    comment: [
      {
        pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
        lookbehind: !0,
        greedy: !0
      },
      { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 }
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: !0
    },
    'class-name': {
      pattern:
        /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
      lookbehind: !0,
      inside: { punctuation: /[.\\]/ }
    },
    keyword:
      /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
    boolean: /\b(?:false|true)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/
  };
}
var Sl = Qe;
Qe.displayName = 'javascript';
Qe.aliases = ['js'];
function Qe(e) {
  (e.languages.javascript = e.languages.extend('clike', {
    'class-name': [
      e.languages.clike['class-name'],
      {
        pattern:
          /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
        lookbehind: !0
      }
    ],
    keyword: [
      { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
      {
        pattern:
          /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
        lookbehind: !0
      }
    ],
    function:
      /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: {
      pattern: RegExp(
        /(^|[^\w$])/.source +
          '(?:' +
          (/NaN|Infinity/.source +
            '|' +
            /0[bB][01]+(?:_[01]+)*n?/.source +
            '|' +
            /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
            '|' +
            /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
            '|' +
            /\d+(?:_\d+)*n/.source +
            '|' +
            /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
              .source) +
          ')' +
          /(?![\w$])/.source
      ),
      lookbehind: !0
    },
    operator:
      /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
  })),
    (e.languages.javascript['class-name'][0].pattern =
      /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
    e.languages.insertBefore('javascript', 'keyword', {
      regex: {
        pattern:
          /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: !0,
        greedy: !0,
        inside: {
          'regex-source': {
            pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
            lookbehind: !0,
            alias: 'language-regex',
            inside: e.languages.regex
          },
          'regex-delimiter': /^\/|\/$/,
          'regex-flags': /^[a-z]+$/
        }
      },
      'function-variable': {
        pattern:
          /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function'
      },
      parameter: [
        {
          pattern:
            /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern:
            /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern:
            /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
          lookbehind: !0,
          inside: e.languages.javascript
        },
        {
          pattern:
            /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
          lookbehind: !0,
          inside: e.languages.javascript
        }
      ],
      constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }),
    e.languages.insertBefore('javascript', 'string', {
      hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
      'template-string': {
        pattern:
          /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: !0,
        inside: {
          'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
          interpolation: {
            pattern:
              /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
            lookbehind: !0,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\$\{|\}$/,
                alias: 'punctuation'
              },
              rest: e.languages.javascript
            }
          },
          string: /[\s\S]+/
        }
      },
      'string-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
        lookbehind: !0,
        greedy: !0,
        alias: 'property'
      }
    }),
    e.languages.insertBefore('javascript', 'operator', {
      'literal-property': {
        pattern:
          /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
        lookbehind: !0,
        alias: 'property'
      }
    }),
    e.languages.markup &&
      (e.languages.markup.tag.addInlined('script', 'javascript'),
      e.languages.markup.tag.addAttribute(
        /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
          .source,
        'javascript'
      )),
    (e.languages.js = e.languages.javascript);
}
var de =
    typeof globalThis == 'object'
      ? globalThis
      : typeof self == 'object'
      ? self
      : typeof window == 'object'
      ? window
      : typeof we == 'object'
      ? we
      : {},
  Al = Ml();
de.Prism = { manual: !0, disableWorkerMessageHandler: !0 };
var kl = zr,
  El = rl,
  st = lt.exports,
  $l = _n,
  Nl = Tn,
  Cl = wl,
  Ol = Sl;
Al();
var en = {}.hasOwnProperty;
function ct() {}
ct.prototype = st;
var R = new ct(),
  nn = R;
R.highlight = Fl;
R.register = fe;
R.alias = Ll;
R.registered = Tl;
R.listLanguages = _l;
fe($l);
fe(Nl);
fe(Cl);
fe(Ol);
R.util.encode = Rl;
R.Token.stringify = Il;
function fe(e) {
  if (typeof e != 'function' || !e.displayName)
    throw new Error('Expected `function` for `grammar`, got `' + e + '`');
  R.languages[e.displayName] === void 0 && e(R);
}
function Ll(e, n) {
  var t = R.languages,
    a = e,
    r,
    s,
    d,
    l;
  n && ((a = {}), (a[e] = n));
  for (r in a)
    for (
      s = a[r], s = typeof s == 'string' ? [s] : s, d = s.length, l = -1;
      ++l < d;

    )
      t[s[l]] = t[r];
}
function Fl(e, n) {
  var t = st.highlight,
    a;
  if (typeof e != 'string')
    throw new Error('Expected `string` for `value`, got `' + e + '`');
  if (R.util.type(n) === 'Object') (a = n), (n = null);
  else {
    if (typeof n != 'string')
      throw new Error('Expected `string` for `name`, got `' + n + '`');
    if (en.call(R.languages, n)) a = R.languages[n];
    else throw new Error('Unknown language: `' + n + '` is not registered');
  }
  return t.call(this, e, a, n);
}
function Tl(e) {
  if (typeof e != 'string')
    throw new Error('Expected `string` for `language`, got `' + e + '`');
  return en.call(R.languages, e);
}
function _l() {
  var e = R.languages,
    n = [],
    t;
  for (t in e) en.call(e, t) && typeof e[t] == 'object' && n.push(t);
  return n;
}
function Il(e, n, t) {
  var a;
  return typeof e == 'string'
    ? { type: 'text', value: e }
    : R.util.type(e) === 'Array'
    ? jl(e, n)
    : ((a = {
        type: e.type,
        content: R.Token.stringify(e.content, n, t),
        tag: 'span',
        classes: ['token', e.type],
        attributes: {},
        language: n,
        parent: t
      }),
      e.alias && (a.classes = a.classes.concat(e.alias)),
      R.hooks.run('wrap', a),
      kl(a.tag + '.' + a.classes.join('.'), Dl(a.attributes), a.content));
}
function jl(e, n) {
  for (var t = [], a = e.length, r = -1, s; ++r < a; )
    (s = e[r]), s !== '' && s !== null && s !== void 0 && t.push(s);
  for (r = -1, a = t.length; ++r < a; )
    (s = t[r]), (t[r] = R.Token.stringify(s, n, t));
  return t;
}
function Rl(e) {
  return e;
}
function Dl(e) {
  var n;
  for (n in e) e[n] = El(e[n]);
  return e;
}
function Ml() {
  var e = 'Prism' in de,
    n = e ? de.Prism : void 0;
  return t;
  function t() {
    e ? (de.Prism = n) : delete de.Prism, (e = void 0), (n = void 0);
  }
}
var tn = Aa(nn, {});
tn.registerLanguage = function (e, n) {
  return nn.register(n);
};
tn.alias = function (e, n) {
  return nn.alias(e, n);
};
var Z = tn;
function Hl(e, n, t) {
  return (
    n in e
      ? Object.defineProperty(e, n, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[n] = t),
    e
  );
}
function ut(e, n) {
  return Ul(e) || Pl(e, n) || zl(e, n) || Bl();
}
function Bl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function zl(e, n) {
  if (!!e) {
    if (typeof e == 'string') return On(e, n);
    var t = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (t === 'Object' && e.constructor && (t = e.constructor.name),
      t === 'Map' || t === 'Set')
    )
      return Array.from(e);
    if (t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return On(e, n);
  }
}
function On(e, n) {
  (n == null || n > e.length) && (n = e.length);
  for (var t = 0, a = new Array(n); t < n; t++) a[t] = e[t];
  return a;
}
function Pl(e, n) {
  var t =
    e == null
      ? null
      : (typeof Symbol != 'undefined' && e[Symbol.iterator]) || e['@@iterator'];
  if (t != null) {
    var a = [],
      r = !0,
      s = !1,
      d,
      l;
    try {
      for (
        t = t.call(e);
        !(r = (d = t.next()).done) && (a.push(d.value), !(n && a.length === n));
        r = !0
      );
    } catch (v) {
      (s = !0), (l = v);
    } finally {
      try {
        !r && t.return != null && t.return();
      } finally {
        if (s) throw l;
      }
    }
    return a;
  }
}
function Ul(e) {
  if (Array.isArray(e)) return e;
}
var ye = Le.navigator,
  ue = Le.document,
  Ln = Le.window;
Z.registerLanguage('jsextra', Ot);
Z.registerLanguage('jsx', kt);
Z.registerLanguage('json', Ft);
Z.registerLanguage('yml', Mt);
Z.registerLanguage('md', Rt);
Z.registerLanguage('bash', $t);
Z.registerLanguage('css', Nt);
Z.registerLanguage('html', It);
Z.registerLanguage('tsx', Ut);
Z.registerLanguage('typescript', Ht);
Z.registerLanguage('graphql', _t);
var Gl = mt(2)(function (e) {
    return Object.entries(e.code || {}).reduce(function (n, t) {
      var a = ut(t, 2),
        r = a[0],
        s = a[1];
      return Object.assign(Object.assign({}, n), Hl({}, '* .'.concat(r), s));
    }, {});
  }),
  ql = Wl();
function Wl() {
  var e = this;
  return ye != null && ye.clipboard
    ? function (n) {
        return ye.clipboard.writeText(n);
      }
    : function (n) {
        return bt(
          e,
          void 0,
          void 0,
          regeneratorRuntime.mark(function t() {
            var a, r;
            return regeneratorRuntime.wrap(function (d) {
              for (;;)
                switch ((d.prev = d.next)) {
                  case 0:
                    (a = ue.createElement('TEXTAREA')),
                      (r = ue.activeElement),
                      (a.value = n),
                      ue.body.appendChild(a),
                      a.select(),
                      ue.execCommand('copy'),
                      ue.body.removeChild(a),
                      r.focus();
                  case 8:
                  case 'end':
                    return d.stop();
                }
            }, t);
          })
        );
      };
}
var Zl = Se.div(
    function (e) {
      var n = e.theme;
      return {
        position: 'relative',
        overflow: 'hidden',
        color: n.color.defaultText
      };
    },
    function (e) {
      var n = e.theme,
        t = e.bordered;
      return t
        ? {
            border: '1px solid '.concat(n.appBorderColor),
            borderRadius: n.borderRadius,
            background: n.background.content
          }
        : {};
    }
  ),
  Xl = Se(function (e) {
    var n = e.children,
      t = e.className;
    return be(xt, { horizontal: !0, vertical: !0, className: t, children: n });
  })({ position: 'relative' }, function (e) {
    var n = e.theme;
    return Gl(n);
  }),
  Kl = Se.pre(function (e) {
    var n = e.theme,
      t = e.padded;
    return {
      display: 'flex',
      justifyContent: 'flex-start',
      margin: 0,
      padding: t ? n.layoutMargin : 0
    };
  }),
  Yl = Se.div(function (e) {
    var n = e.theme;
    return {
      flex: 1,
      paddingLeft: 2,
      paddingRight: n.layoutMargin,
      opacity: 1
    };
  }),
  as = function (n) {
    var t = n.children,
      a = n.language,
      r = a === void 0 ? 'jsx' : a,
      s = n.copyable,
      d = s === void 0 ? !1 : s,
      l = n.bordered,
      v = l === void 0 ? !1 : l,
      h = n.padded,
      b = h === void 0 ? !1 : h,
      g = n.format,
      m = g === void 0 ? !0 : g,
      w = n.formatter,
      k = w === void 0 ? null : w,
      N = n.className,
      S = N === void 0 ? null : N,
      A = n.showLineNumbers,
      o = A === void 0 ? !1 : A,
      i = wt(n, [
        'children',
        'language',
        'copyable',
        'bordered',
        'padded',
        'format',
        'formatter',
        'className',
        'showLineNumbers'
      ]);
    if (typeof t != 'string' || !t.trim()) return null;
    var p = k ? k(m, t) : t.trim(),
      u = cn.exports.useState(!1),
      c = ut(u, 2),
      y = c[0],
      x = c[1],
      f = cn.exports.useCallback(function ($) {
        $.preventDefault();
        var C = Ln.getSelection().toString(),
          _ = $.type !== 'click' && C ? C : p;
        ql(_)
          .then(function () {
            x(!0),
              Ln.setTimeout(function () {
                return x(!1);
              }, 1500);
          })
          .catch(yt.error);
      }, []);
    return At(Zl, {
      bordered: v,
      padded: b,
      className: S,
      onCopyCapture: f,
      children: [
        be(Xl, {
          children: be(
            Z,
            sn(
              ln(
                {},
                Object.assign(
                  {
                    padded: b || v,
                    language: r,
                    showLineNumbers: o,
                    showInlineLineNumbers: o,
                    useInlineStyles: !1,
                    PreTag: Kl,
                    CodeTag: Yl,
                    lineNumberContainerStyle: {}
                  },
                  i
                )
              ),
              { children: p }
            )
          )
        }),
        d
          ? be(St, {
              actionItems: [{ title: y ? 'Copied' : 'Copy', onClick: f }]
            })
          : null
      ]
    });
  };
export {
  as as SyntaxHighlighter,
  Wl as createCopyToClipboardFunction,
  as as default
};
//# sourceMappingURL=syntaxhighlighter-82dea71a.3114f03f.js.map
