function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e,n,r,o=(function(e){var n=function(e){var n,r=Object.prototype,o=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new L(r||[]);return a._invoke=function(t,e,n){var r=p;return function(o,a){if(r===v)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw a;return P()}for(n.method=o,n.arg=a;;){var i=n.delegate;if(i){var c=k(i,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===p)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=v;var u=l(t,e,n);if("normal"===u.type){if(r=n.done?d:h,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=d,n.method="throw",n.arg=u.arg)}}}(t,n,i),a}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var p="suspendedStart",h="suspendedYield",v="executing",d="completed",m={};function g(){}function y(){}function b(){}var $={};$[i]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(O([])));x&&x!==r&&o.call(x,i)&&($=x);var _=b.prototype=g.prototype=Object.create($);function E(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function S(e,n){function r(a,i,c,u){var s=l(e[a],e,i);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===t(p)&&o.call(p,"__await")?n.resolve(p.__await).then((function(t){r("next",t,c,u)}),(function(t){r("throw",t,c,u)})):n.resolve(p).then((function(t){f.value=t,c(f)}),(function(t){return r("throw",t,c,u)}))}u(s.arg)}var a;this._invoke=function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(r===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=n,k(t,e),"throw"===e.method))return m;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,m;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=n),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,a=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=n,e.done=!0,e};return a.next=a}}return{next:P}}function P(){return{value:n,done:!0}}return y.prototype=_.constructor=b,b.constructor=y,y.displayName=s(b,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,u,"GeneratorFunction")),t.prototype=Object.create(_),t},e.awrap=function(t){return{__await:t}},E(S.prototype),S.prototype[c]=function(){return this},e.AsyncIterator=S,e.async=function(t,n,r,o,a){void 0===a&&(a=Promise);var i=new S(f(t,n,r,o),a);return e.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},E(_),s(_,u,"Generator"),_[i]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=n,this.done=!1,this.delegate=null,this.method="next",this.arg=n,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=n)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,o){return c.type="throw",c.arg=t,e.next=r,o&&(e.method="next",e.arg=n),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),R(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;R(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=n),m}},e}(e.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}}(n={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&n.path)}},n.exports),n.exports);function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(t,e):void 0}}function c(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(t){o=!0,a=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,e)||i(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(e,n){return!n||"object"!==t(n)&&"function"!=typeof n?l(e):n}function h(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function m(){}function g(t,e){for(var n in e)t[n]=e[n];return t}function y(t){return t()}function b(){return Object.create(null)}function $(t){t.forEach(y)}function w(t){return"function"==typeof t}function x(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}function _(t,e,n,r){return t[1]&&r?g(n.ctx.slice(),t[1](r(e))):n.ctx}function E(e,n,r,o,a,i,c){var u=function(e,n,r,o){if(e[2]&&o){var a=e[2](o(r));if(void 0===n.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(n.dirty.length,a.length),u=0;u<c;u+=1)i[u]=n.dirty[u]|a[u];return i}return n.dirty|a}return n.dirty}(n,o,a,i);if(u){var s=_(n,r,o,c);e.p(s,u)}}function S(t,e){t.appendChild(e)}function k(t,e,n){t.insertBefore(e,n||null)}function j(t){t.parentNode.removeChild(t)}function R(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function L(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function P(){return O(" ")}function A(){return O("")}function N(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function I(t){return Array.from(t.childNodes)}function T(t,e,n,r){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0,c=[];i<a.attributes.length;){var u=a.attributes[i++];n[u.name]||c.push(u.name)}for(var s=0;s<c.length;s++)a.removeAttribute(c[s]);return t.splice(o,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):L(e)}function C(t,e){for(var n=0;n<t.length;n+=1){var r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return O(e)}function q(t){return C(t," ")}function U(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function D(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function G(t){r=t}function J(){if(!r)throw new Error("Function called outside component initialization");return r}var F=[],B=[],M=[],K=[],V=Promise.resolve(),Y=!1;function H(t){M.push(t)}var z=!1,W=new Set;function X(){if(!z){z=!0;do{for(var t=0;t<F.length;t+=1){var e=F[t];G(e),Q(e.$$)}for(G(null),F.length=0;B.length;)B.pop()();for(var n=0;n<M.length;n+=1){var r=M[n];W.has(r)||(W.add(r),r())}M.length=0}while(F.length);for(;K.length;)K.pop()();Y=!1,z=!1,W.clear()}}function Q(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(H)}}var Z,tt=new Set;function et(){Z={r:0,c:[],p:Z}}function nt(){Z.r||$(Z.c),Z=Z.p}function rt(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function ot(t,e,n,r){if(t&&t.o){if(tt.has(t))return;tt.add(t),Z.c.push((function(){tt.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}function at(t,e){for(var n={},r={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(r[u]=1);for(var s in c)o[s]||(n[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in r)l in n||(n[l]=void 0);return n}function it(e){return"object"===t(e)&&null!==e?e:{}}function ct(t){t&&t.c()}function ut(t,e){t&&t.l(e)}function st(t,e,n){var r=t.$$,o=r.fragment,a=r.on_mount,i=r.on_destroy,c=r.after_update;o&&o.m(e,n),H((function(){var e=a.map(y).filter(w);i?i.push.apply(i,h(e)):$(e),t.$$.on_mount=[]})),c.forEach(H)}function ft(t,e){var n=t.$$;null!==n.fragment&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function lt(t,e){-1===t.$$.dirty[0]&&(F.push(t),Y||(Y=!0,V.then(X)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(t,e,n,o,a,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=r;G(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:m,not_equal:a,bound:b(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:b(),dirty:c,skip_bound:!1},l=!1;if(f.ctx=n?n(t,s,(function(e,n){var r=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:n;return f.ctx&&a(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),l&&lt(t,e)),n})):[],f.update(),l=!0,$(f.before_update),f.fragment=!!o&&o(f.ctx),e.target){if(e.hydrate){var p=I(e.target);f.fragment&&f.fragment.l(p),p.forEach(j)}else f.fragment&&f.fragment.c();e.intro&&rt(t.$$.fragment),st(t,e.target,e.anchor),X()}G(u)}var ht=function(){function t(){v(this,t)}var e,n,r;return e=t,(n=[{key:"$destroy",value:function(){ft(this,1),this.$destroy=m}},{key:"$on",value:function(t,e){var n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),function(){var t=n.indexOf(e);-1!==t&&n.splice(t,1)}}},{key:"$set",value:function(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}])&&d(e.prototype,n),r&&d(e,r),t}(),vt=[];function dt(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,r=[];function o(n){if(x(t,n)&&(t=n,e)){for(var o=!vt.length,a=0;a<r.length;a+=1){var i=r[a];i[1](),vt.push(i,t)}if(o){for(var c=0;c<vt.length;c+=2)vt[c][0](vt[c+1]);vt.length=0}}}function a(e){o(e(t))}function i(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m,c=[a,i];return r.push(c),1===r.length&&(e=n(o)||m),a(t),function(){var t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(e(),e=null)}}return{set:o,update:a,subscribe:i}}var mt={};function gt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function yt(t){var e,n,r,o,a,i,u,s,f,l,p;return{c:function(){e=L("nav"),n=L("ul"),r=L("li"),o=L("a"),a=O("home"),u=P(),s=L("li"),f=L("a"),l=O("about"),this.h()},l:function(t){var i=I(e=T(t,"NAV",{class:!0})),c=I(n=T(i,"UL",{class:!0})),p=I(r=T(c,"LI",{class:!0})),h=I(o=T(p,"A",{"aria-current":!0,href:!0,class:!0}));a=C(h,"home"),h.forEach(j),p.forEach(j),u=q(c);var v=I(s=T(c,"LI",{class:!0})),d=I(f=T(v,"A",{"aria-current":!0,href:!0,class:!0}));l=C(d,"about"),d.forEach(j),v.forEach(j),c.forEach(j),i.forEach(j),this.h()},h:function(){N(o,"aria-current",i=void 0===t[0]?"page":void 0),N(o,"href","."),N(o,"class","svelte-1dbd5up"),N(r,"class","svelte-1dbd5up"),N(f,"aria-current",p="about"===t[0]?"page":void 0),N(f,"href","about"),N(f,"class","svelte-1dbd5up"),N(s,"class","svelte-1dbd5up"),N(n,"class","svelte-1dbd5up"),N(e,"class","svelte-1dbd5up")},m:function(t,i){k(t,e,i),S(e,n),S(n,r),S(r,o),S(o,a),S(n,u),S(n,s),S(s,f),S(f,l)},p:function(t,e){var n=c(e,1)[0];1&n&&i!==(i=void 0===t[0]?"page":void 0)&&N(o,"aria-current",i),1&n&&p!==(p="about"===t[0]?"page":void 0)&&N(f,"aria-current",p)},i:m,o:m,d:function(t){t&&j(e)}}}function bt(t,e,n){var r=e.segment;return t.$$set=function(t){"segment"in t&&n(0,r=t.segment)},[r]}var $t=function(t){f(n,ht);var e=gt(n);function n(t){var r;return v(this,n),pt(l(r=e.call(this)),t,bt,yt,x,{segment:0}),r}return n}();function wt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function xt(t){var e,n,r,o;e=new $t({props:{segment:t[0]}});var a=t[2].default,i=function(t,e,n,r){if(t){var o=_(t,e,n,r);return t[0](o)}}(a,t,t[1],null);return{c:function(){ct(e.$$.fragment),n=P(),r=L("main"),i&&i.c(),this.h()},l:function(t){ut(e.$$.fragment,t),n=q(t);var o=I(r=T(t,"MAIN",{class:!0}));i&&i.l(o),o.forEach(j),this.h()},h:function(){N(r,"class","svelte-79og9v")},m:function(t,a){st(e,t,a),k(t,n,a),k(t,r,a),i&&i.m(r,null),o=!0},p:function(t,n){var r=c(n,1)[0],o={};1&r&&(o.segment=t[0]),e.$set(o),i&&i.p&&2&r&&E(i,a,t,t[1],r,null,null)},i:function(t){o||(rt(e.$$.fragment,t),rt(i,t),o=!0)},o:function(t){ot(e.$$.fragment,t),ot(i,t),o=!1},d:function(t){ft(e,t),t&&j(n),t&&j(r),i&&i.d(t)}}}function _t(t,e,n){var r=e.$$slots,o=void 0===r?{}:r,a=e.$$scope,i=e.segment;return t.$$set=function(t){"segment"in t&&n(0,i=t.segment),"$$scope"in t&&n(1,a=t.$$scope)},[i,a,o]}var Et=function(t){f(n,ht);var e=wt(n);function n(t){var r;return v(this,n),pt(l(r=e.call(this)),t,_t,xt,x,{segment:0}),r}return n}();function St(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function kt(t){var e,n,r=t[1].stack+"";return{c:function(){e=L("pre"),n=O(r)},l:function(t){var o=I(e=T(t,"PRE",{}));n=C(o,r),o.forEach(j)},m:function(t,r){k(t,e,r),S(e,n)},p:function(t,e){2&e&&r!==(r=t[1].stack+"")&&U(n,r)},d:function(t){t&&j(e)}}}function jt(t){var e,n,r,o,a,i,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&kt(t);return{c:function(){n=P(),r=L("h1"),o=O(t[0]),a=P(),i=L("p"),u=O(l),s=P(),p&&p.c(),f=A(),this.h()},l:function(e){D('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(j),n=q(e);var c=I(r=T(e,"H1",{class:!0}));o=C(c,t[0]),c.forEach(j),a=q(e);var h=I(i=T(e,"P",{class:!0}));u=C(h,l),h.forEach(j),s=q(e),p&&p.l(e),f=A(),this.h()},h:function(){N(r,"class","svelte-8od9u6"),N(i,"class","svelte-8od9u6")},m:function(t,e){k(t,n,e),k(t,r,e),S(r,o),k(t,a,e),k(t,i,e),S(i,u),k(t,s,e),p&&p.m(t,e),k(t,f,e)},p:function(t,n){var r=c(n,1)[0];1&r&&e!==(e=t[0])&&(document.title=e),1&r&&U(o,t[0]),2&r&&l!==(l=t[1].message+"")&&U(u,l),t[2]&&t[1].stack?p?p.p(t,r):((p=kt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:m,o:m,d:function(t){t&&j(n),t&&j(r),t&&j(a),t&&j(i),t&&j(s),p&&p.d(t),t&&j(f)}}}function Rt(t,e,n){var r=e.status,o=e.error;return t.$$set=function(t){"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,false]}var Lt=function(t){f(n,ht);var e=St(n);function n(t){var r;return v(this,n),pt(l(r=e.call(this)),t,Rt,jt,x,{status:0,error:1}),r}return n}();function Ot(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=u(t);if(e){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function Pt(t){var e,n,r,o=[t[4].props],a=t[4].component;function i(t){for(var e={},n=0;n<o.length;n+=1)e=g(e,o[n]);return{props:e}}return a&&(e=new a(i())),{c:function(){e&&ct(e.$$.fragment),n=A()},l:function(t){e&&ut(e.$$.fragment,t),n=A()},m:function(t,o){e&&st(e,t,o),k(t,n,o),r=!0},p:function(t,r){var c=16&r?at(o,[it(t[4].props)]):{};if(a!==(a=t[4].component)){if(e){et();var u=e;ot(u.$$.fragment,1,0,(function(){ft(u,1)})),nt()}a?(ct((e=new a(i())).$$.fragment),rt(e.$$.fragment,1),st(e,n.parentNode,n)):e=null}else a&&e.$set(c)},i:function(t){r||(e&&rt(e.$$.fragment,t),r=!0)},o:function(t){e&&ot(e.$$.fragment,t),r=!1},d:function(t){t&&j(n),e&&ft(e,t)}}}function At(t){var e,n;return e=new Lt({props:{error:t[0],status:t[1]}}),{c:function(){ct(e.$$.fragment)},l:function(t){ut(e.$$.fragment,t)},m:function(t,r){st(e,t,r),n=!0},p:function(t,n){var r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i:function(t){n||(rt(e.$$.fragment,t),n=!0)},o:function(t){ot(e.$$.fragment,t),n=!1},d:function(t){ft(e,t)}}}function Nt(t){var e,n,r,o,a=[At,Pt],i=[];function c(t,e){return t[0]?0:1}return e=c(t),n=i[e]=a[e](t),{c:function(){n.c(),r=A()},l:function(t){n.l(t),r=A()},m:function(t,n){i[e].m(t,n),k(t,r,n),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(et(),ot(i[u],1,1,(function(){i[u]=null})),nt(),(n=i[e])?n.p(t,o):(n=i[e]=a[e](t)).c(),rt(n,1),n.m(r.parentNode,r))},i:function(t){o||(rt(n),o=!0)},o:function(t){ot(n),o=!1},d:function(t){i[e].d(t),t&&j(r)}}}function It(t){for(var e,n,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[Nt]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=g(o,r[a]);return e=new Et({props:o}),{c:function(){ct(e.$$.fragment)},l:function(t){ut(e.$$.fragment,t)},m:function(t,r){st(e,t,r),n=!0},p:function(t,n){var o=c(n,1)[0],a=12&o?at(r,[4&o&&{segment:t[2][0]},8&o&&it(t[3].props)]):{};147&o&&(a.$$scope={dirty:o,ctx:t}),e.$set(a)},i:function(t){n||(rt(e.$$.fragment,t),n=!0)},o:function(t){ot(e.$$.fragment,t),n=!1},d:function(t){ft(e,t)}}}function Tt(t,e,n){var r,o,a=e.stores,i=e.error,c=e.status,u=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f,p=e.notify;return function(t){J().$$.after_update.push(t)}(p),r=mt,o=a,J().$$.context.set(r,o),t.$$set=function(t){"stores"in t&&n(5,a=t.stores),"error"in t&&n(0,i=t.error),"status"in t&&n(1,c=t.status),"segments"in t&&n(2,u=t.segments),"level0"in t&&n(3,s=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,p=t.notify)},[i,c,u,s,l,a,p]}var Ct,qt=function(t){f(n,ht);var e=Ot(n);function n(t){var r;return v(this,n),pt(l(r=e.call(this)),t,Tt,It,x,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6}),r}return n}(),Ut=[/^\/blog\.json$/,/^\/blog\/([^/]+?)\.json$/],Dt=[{js:function(){return Promise.all([import("./index.79d886e4.js"),__inject_styles(["client-fe7a1db5.css","index-39716d32.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./about.03aa79e6.js"),__inject_styles(["client-fe7a1db5.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./index.2f3773e4.js"),__inject_styles(["client-fe7a1db5.css","index-7ed37c94.css"])]).then((function(t){return t[0]}))}},{js:function(){return Promise.all([import("./[slug].89216dce.js"),__inject_styles(["client-fe7a1db5.css","[slug]-5bc8f95f.css"])]).then((function(t){return t[0]}))}}],Gt=(Ct=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^/]+?)\/?$/,parts:[null,{i:3,params:function(t){return{slug:Ct(t[1])}}}]}]);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Jt(t,e,n,r){return new(n||(n=Promise))((function(o,a){function i(t){try{u(r.next(t))}catch(t){a(t)}}function c(t){try{u(r.throw(t))}catch(t){a(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,c)}u((r=r.apply(t,e||[])).next())}))}function Ft(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}var Bt,Mt=1;var Kt,Vt,Yt="undefined"!=typeof history?history:{pushState:function(){},replaceState:function(){},scrollRestoration:"auto"},Ht={};function zt(e){var n=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach((function(e){var r=c(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),o=r[1],a=r[2],i=void 0===a?"":a;"string"==typeof n[o]&&(n[o]=[n[o]]),"object"===t(n[o])?n[o].push(i):n[o]=i})),n}function Wt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Kt))return null;var e=t.pathname.slice(Kt.length);if(""===e&&(e="/"),!Ut.some((function(t){return t.test(e)})))for(var n=0;n<Gt.length;n+=1){var r=Gt[n],o=r.pattern.exec(e);if(o){var a=zt(t.search),i=r.parts[r.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:r,match:o,page:u}}}}function Xt(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.defaultPrevented)){var n=Ft(e.target);if(n&&n.href){var r="object"===t(n.href)&&"SVGAnimatedString"===n.href.constructor.name,o=String(r?n.href.baseVal:n.href);if(o!==location.href){if(!n.hasAttribute("download")&&"external"!==n.getAttribute("rel")&&!(r?n.target.baseVal:n.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=Wt(a);if(i)te(i,null,n.hasAttribute("sapper:noscroll"),a.hash),e.preventDefault(),Yt.pushState({id:Bt},"",a.href)}}}else location.hash||e.preventDefault()}}}function Qt(){return{x:pageXOffset,y:pageYOffset}}function Zt(t){if(Ht[Bt]=Qt(),t.state){var e=Wt(new URL(location.href));e?te(e,t.state.id):location.href=location.href}else(function(t){Bt=t})(Mt=Mt+1),Yt.replaceState({id:Bt},"",location.href)}function te(t,e,n,r){return Jt(this,void 0,void 0,o.mark((function a(){var i,c,u,s;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(i=!!e)?Bt=e:(c=Qt(),Ht[Bt]=c,Bt=e=++Mt,Ht[Bt]=n?c:{x:0,y:0}),o.next=4,Vt(t);case 4:document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),n||(u=Ht[e],r&&(s=document.getElementById(r.slice(1)))&&(u={x:0,y:s.getBoundingClientRect().top+scrollY}),Ht[Bt]=u,i||s?scrollTo(u.x,u.y):scrollTo(0,0));case 6:case"end":return o.stop()}}),a)})))}function ee(t){var e=t.baseURI;if(!e){var n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}var ne,re=null;function oe(t){return re&&re.href===t.href?re.promise:ke(t)}function ae(t){var e=Ft(t.target);e&&"prefetch"===e.rel&&function(t){var e=Wt(new URL(t,ee(document)));if(e)re&&t===re.href||(re={href:t,promise:ke(e)}),re.promise}(e.href)}function ie(t){clearTimeout(ne),ne=setTimeout((function(){ae(t)}),20)}function ce(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{noscroll:!1,replaceState:!1},n=Wt(new URL(t,ee(document)));return n?(Yt[e.replaceState?"replaceState":"pushState"]({id:Bt},"",t),te(n,null,e.noscroll)):(location.href=t,new Promise((function(){})))}var ue,se,fe,le,pe,he,ve,de,me,ge="undefined"!=typeof __SAPPER__&&__SAPPER__,ye=!1,be=[],$e="{}",we={page:function(t){var e=dt(t),n=!0;return{notify:function(){n=!0,e.update((function(t){return t}))},set:function(t){n=!1,e.set(t)},subscribe:function(t){var r;return e.subscribe((function(e){(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:dt(null),session:dt(ge&&ge.session)};function xe(t,e){var n=t.error;return Object.assign({error:n},e)}function _e(t){return Jt(this,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ue&&we.preloading.set(!0),n=oe(t),r=se={},e.next=5,n;case 5:if(a=e.sent,i=a.redirect,r===se){e.next=9;break}return e.abrupt("return");case 9:if(!i){e.next=14;break}return e.next=12,ce(i.location,{replaceState:!0});case 12:e.next=17;break;case 14:return c=a.props,u=a.branch,e.next=17,Ee(u,c,xe(c,t.page));case 17:case"end":return e.stop()}}),e)})))}function Ee(t,e,n){return Jt(this,void 0,void 0,o.mark((function r(){return o.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(we.page.set(n),we.preloading.set(!1),!ue){r.next=6;break}ue.$set(e),r.next=13;break;case 6:return e.stores={page:{subscribe:we.page.subscribe},preloading:{subscribe:we.preloading.subscribe},session:we.session},r.next=9,fe;case 9:r.t0=r.sent,e.level0={props:r.t0},e.notify=we.page.notify,ue=new qt({target:he,props:e,hydrate:!0});case 13:be=t,$e=JSON.stringify(n.query),ye=!0,pe=!1;case 17:case"end":return r.stop()}}),r)})))}function Se(t,e,n,r){if(r!==$e)return!0;var o=be[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}function ke(t){return Jt(this,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u,s,f,l,p,h,v,d=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.route,r=t.page,a=r.path.split("/").filter(Boolean),i=null,c={error:null,status:200,segments:[a[0]]},u={fetch:function(t){function e(e,n){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t,e){return fetch(t,e)})),redirect:function(t,e){if(i&&(i.statusCode!==t||i.location!==e))throw new Error("Conflicting redirects");i={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},fe||(s=function(){return{}},fe=ge.preloaded[0]||s.call(u,{host:r.host,path:r.path,query:r.query,params:{}},le)),l=1,e.prev=7,p=JSON.stringify(r.query),h=n.pattern.exec(r.path),v=!1,e.next=13,Promise.all(n.parts.map((function(e,n){return Jt(d,void 0,void 0,o.mark((function i(){var s,f,d,m,g,y;return o.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:if(s=a[n],Se(n,s,h,p)&&(v=!0),c.segments[l]=a[n+1],e){o.next=5;break}return o.abrupt("return",{segment:s});case 5:if(f=l++,pe||v||!be[n]||be[n].part!==e.i){o.next=8;break}return o.abrupt("return",be[n]);case 8:return v=!1,o.next=11,Dt[e.i].js();case 11:if(d=o.sent,m=d.default,g=d.preload,!ye&&ge.preloaded[n+1]){o.next=25;break}if(!g){o.next=21;break}return o.next=18,g.call(u,{host:r.host,path:r.path,query:r.query,params:e.params?e.params(t.match):{}},le);case 18:o.t0=o.sent,o.next=22;break;case 21:o.t0={};case 22:y=o.t0,o.next=26;break;case 25:y=ge.preloaded[n+1];case 26:return o.abrupt("return",c["level".concat(f)]={component:m,props:y,segment:s,match:h,part:e.i});case 27:case"end":return o.stop()}}),i)})))})));case 13:f=e.sent,e.next=21;break;case 16:e.prev=16,e.t0=e.catch(7),c.error=e.t0,c.status=500,f=[];case 21:return e.abrupt("return",{redirect:i,props:c,branch:f});case 22:case"end":return e.stop()}}),e,null,[[7,16]])})))}we.session.subscribe((function(t){return Jt(void 0,void 0,void 0,o.mark((function e(){var n,r,a,i,c,u;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(le=t,ye){e.next=3;break}return e.abrupt("return");case 3:return pe=!0,n=Wt(new URL(location.href)),r=se={},e.next=8,ke(n);case 8:if(a=e.sent,i=a.redirect,c=a.props,u=a.branch,r===se){e.next=14;break}return e.abrupt("return");case 14:if(!i){e.next=19;break}return e.next=17,ce(i.location,{replaceState:!0});case 17:e.next=21;break;case 19:return e.next=21,Ee(u,c,xe(c,n.page));case 21:case"end":return e.stop()}}),e)})))})),ve={target:document.querySelector("#sapper")},de=ve.target,he=de,me=ge.baseUrl,Kt=me,Vt=_e,"scrollRestoration"in Yt&&(Yt.scrollRestoration="manual"),addEventListener("beforeunload",(function(){Yt.scrollRestoration="auto"})),addEventListener("load",(function(){Yt.scrollRestoration="manual"})),addEventListener("click",Xt),addEventListener("popstate",Zt),addEventListener("touchstart",ae),addEventListener("mousemove",ie),ge.error?Promise.resolve().then((function(){return function(){var t=location,e=t.host,n=t.pathname,r=t.search,o=ge.session,a=ge.preloaded,i=ge.status,c=ge.error;fe||(fe=a&&a[0]);var u={error:c,status:i,session:o,level0:{props:fe},level1:{props:{status:i,error:c},component:Lt},segments:a},s=zt(r);Ee([],u,{host:e,path:n,query:s,params:{},error:c})}()})):Promise.resolve().then((function(){var t=location,e=t.hash,n=t.href;Yt.replaceState({id:Mt},"",n);var r=Wt(new URL(location.href));if(r)return te(r,Mt,!0,e)}));export{ht as S,f as _,u as a,p as b,v as c,l as d,P as e,L as f,j as g,q as h,pt as i,T as j,I as k,C as l,N as m,k as n,S as o,m as p,D as q,U as r,x as s,O as t,c as u,R as v,o as w};

import __inject_styles from './inject_styles.fe622066.js';