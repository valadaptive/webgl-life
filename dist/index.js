(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
})((function () { 'use strict';

    var n$1,l$2,u$2,t$2,i$2,o$1,r$2,f$2,e$2,c$3,s$2,h$2={},p$2=[],v$3=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y$1=Array.isArray;function d$3(n,l){for(var u in l)n[u]=l[u];return n}function w$2(n){var l=n.parentNode;l&&l.removeChild(n);}function _$2(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n$1.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g$1(l,f,i,o,null)}function g$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$2:r,__i:-1,__u:0};return null==r&&null!=l$2.vnode&&l$2.vnode(f),f}function k$1(n){return n.children}function b$1(n,l){this.props=n,this.context=l;}function x$1(n,l){if(null==l)return n.__?x$1(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x$1(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=!0)&&i$2.push(n)&&!P.__r++||o$1!==l$2.debounceRendering)&&((o$1=l$2.debounceRendering)||r$2)(P);}function P(){var n,u,t,o,r,e,c,s;for(i$2.sort(f$2);n=i$2.shift();)n.__d&&(u=i$2.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d$3({},r)).__v=r.__v+1,l$2.vnode&&l$2.vnode(o),O(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x$1(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$1(c,o,s),o.__e!=e&&C$1(o)),i$2.length>u&&i$2.sort(f$2));P.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p$2,g=l.length;for(u.__d=e,$(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h$2:_[y.__i]||h$2,y.__i=a,O(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?(e&&!e.isConnected&&(e=x$1(v)),e=I(y,e,n)):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g$1(null,i,null,null,null):y$1(i)?g$1(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f===r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r?f==r-1&&(a=f-r):a=0,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x$1(o)),V(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x$1(o)),V(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function L(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$3.test(l)?u:u+"px";}function A(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$2,n.addEventListener(l,o?s$2:c$3,o)):n.removeEventListener(l,o?s$2:c$3,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,u));}}function F$1(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$2++;else if(u.t<t.u)return;return t(l$2.event?l$2.event(u):u)}}}function O(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$2.__b)&&a(u);n:if("function"==typeof L)try{if(m=u.props,x=(a=L.contextType)&&i[a.__c],C=a?x?x.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:("prototype"in L&&L.prototype.render?u.__c=h=new L(m,C):(u.__c=h=new b$1(m,C),h.constructor=L,h.render=q$1),x&&x.sub(h),h.props=m,h.state||(h.state={}),h.context=C,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),null==h.__s&&(h.__s=h.state),null!=L.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$3({},h.__s)),d$3(h.__s,L.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)null==L.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(null==L.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,C),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,C)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),M=0;M<h._sb.length;M++)h.__h.push(h._sb[M]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,C),null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=C,h.props=m,h.__P=n,h.__e=!1,P=l$2.__r,$=0,"prototype"in L&&L.prototype.render){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),I=0;I<h._sb.length;I++)h.__h.push(h._sb[I]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++$<25);h.state=h.__s,null!=h.getChildContext&&(i=d$3(d$3({},i),h.getChildContext())),p||null==h.getSnapshotBeforeUpdate||(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y$1(H=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?H:[H],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){u.__v=null,c||null!=r?(u.__e=e,u.__u|=c?160:32,r[r.indexOf(e)]=null):(u.__e=t.__e,u.__k=t.__k),l$2.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$1(t.__e,u,t,i,o,r,f,c,s);(a=l$2.diffed)&&a(u);}function j$1(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$2.__c&&l$2.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$2.__e(n,u.__v);}});}function z$1(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n$1.call(l.childNodes),m=t.props||h$2,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y$1(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x$1(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$2(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A(l,s,g,m[s],o));}return l}function N(n,u,t){try{"function"==typeof n?n(u):n.current=u;}catch(n){l$2.__e(n,t);}}function V(n,u,t){var i,o;if(l$2.unmount&&l$2.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$2.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$2(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q$1(n,l,u){return this.constructor(n,u)}function B$1(u,t,i){var o,r,f,e;l$2.__&&l$2.__(u,t),r=(o="function"==typeof i)?null:t.__k,f=[],e=[],O(t,u=(!o&&i||t).__k=_$2(k$1,null,[u]),r||h$2,h$2,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n$1.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$1(f,u,e);}n$1=p$2.slice,l$2={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$2=0,t$2=function(n){return null!=n&&null==n.constructor},b$1.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d$3({},this.state),"function"==typeof n&&(n=n(d$3({},u),this.props)),n&&d$3(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},b$1.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M(this));},b$1.prototype.render=k$1,i$2=[],r$2="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$2=function(n,l){return n.__v.__b-l.__v.__b},P.__r=0,e$2=0,c$3=F$1(!1),s$2=F$1(!0);

    var t$1,r$1,u$1,i$1,o=0,f$1=[],c$2=[],e$1=l$2,a$1=e$1.__b,v$2=e$1.__r,l$1=e$1.diffed,m=e$1.__c,s$1=e$1.unmount,d$2=e$1.__;function h$1(n,t){e$1.__h&&e$1.__h(r$1,n,o||t),o=0;var u=r$1.__H||(r$1.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({__V:c$2}),u.__[n]}function _$1(n,u){var i=h$1(t$1++,3);!e$1.__s&&C(i.__H,u)&&(i.__=n,i.i=u,r$1.__H.__h.push(i));}function F(n){return o=5,q(function(){return {current:n}},[])}function q(n,r){var u=h$1(t$1++,7);return C(u.__H,r)?(u.__V=n(),u.i=r,u.__h=n,u.__V):u.__}function x(n,t){return o=8,q(function(){return n},t)}function j(){for(var n;n=f$1.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],e$1.__e(t,n.__v);}}e$1.__b=function(n){r$1=null,a$1&&a$1(n);},e$1.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),d$2&&d$2(n,t);},e$1.__r=function(n){v$2&&v$2(n),t$1=0;var i=(r$1=n.__c).__H;i&&(u$1===r$1?(i.__h=[],r$1.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=c$2,n.__N=n.i=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t$1=0)),u$1=r$1;},e$1.diffed=function(n){l$1&&l$1(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f$1.push(t)&&i$1===e$1.requestAnimationFrame||((i$1=e$1.requestAnimationFrame)||w$1)(j)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==c$2&&(n.__=n.__V),n.i=void 0,n.__V=c$2;})),u$1=r$1=null;},e$1.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],e$1.__e(r,n.__v);}}),m&&m(n,t);},e$1.unmount=function(n){s$1&&s$1(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&e$1.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w$1(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z(n){var t=r$1,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r$1=t;}function B(n){var t=r$1;n.__c=n.__(),r$1=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}

    const i=Symbol.for("preact-signals");function t(){if(r>1){r--;return}let i,t=!1;while(void 0!==s){let o=s;s=void 0;f++;while(void 0!==o){const n=o.o;o.o=void 0;o.f&=-3;if(!(8&o.f)&&v$1(o))try{o.c();}catch(o){if(!t){i=o;t=!0;}}o=n;}}f=0;r--;if(t)throw i}let n,s;let r=0,f=0,e=0;function c$1(i){if(void 0===n)return;let t=i.n;if(void 0===t||t.t!==n){t={i:0,S:i,p:n.s,n:void 0,t:n,e:void 0,x:void 0,r:t};if(void 0!==n.s)n.s.n=t;n.s=t;i.n=t;if(32&n.f)i.S(t);return t}else if(-1===t.i){t.i=0;if(void 0!==t.n){t.n.p=t.p;if(void 0!==t.p)t.p.n=t.n;t.p=n.s;t.n=void 0;n.s.n=t;n.s=t;}return t}}function u(i){this.v=i;this.i=0;this.n=void 0;this.t=void 0;}u.prototype.brand=i;u.prototype.h=function(){return !0};u.prototype.S=function(i){if(this.t!==i&&void 0===i.e){i.x=this.t;if(void 0!==this.t)this.t.e=i;this.t=i;}};u.prototype.U=function(i){if(void 0!==this.t){const t=i.e,o=i.x;if(void 0!==t){t.x=o;i.e=void 0;}if(void 0!==o){o.e=t;i.x=void 0;}if(i===this.t)this.t=o;}};u.prototype.subscribe=function(i){return E(()=>{const t=this.value,o=n;n=void 0;try{i(t);}finally{n=o;}})};u.prototype.valueOf=function(){return this.value};u.prototype.toString=function(){return this.value+""};u.prototype.toJSON=function(){return this.value};u.prototype.peek=function(){const i=n;n=void 0;try{return this.value}finally{n=i;}};Object.defineProperty(u.prototype,"value",{get(){const i=c$1(this);if(void 0!==i)i.i=this.i;return this.v},set(i){if(i!==this.v){if(f>100)throw new Error("Cycle detected");this.v=i;this.i++;e++;r++;try{for(let i=this.t;void 0!==i;i=i.x)i.t.N();}finally{t();}}}});function d$1(i){return new u(i)}function v$1(i){for(let t=i.s;void 0!==t;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return !0;return !1}function l(i){for(let t=i.s;void 0!==t;t=t.n){const o=t.S.n;if(void 0!==o)t.r=o;t.S.n=t;t.i=-1;if(void 0===t.n){i.s=t;break}}}function y(i){let t,o=i.s;while(void 0!==o){const i=o.p;if(-1===o.i){o.S.U(o);if(void 0!==i)i.n=o.n;if(void 0!==o.n)o.n.p=i;}else t=o;o.S.n=o.r;if(void 0!==o.r)o.r=void 0;o=i;}i.s=t;}function a(i){u.call(this,void 0);this.x=i;this.s=void 0;this.g=e-1;this.f=4;}(a.prototype=new u).h=function(){this.f&=-3;if(1&this.f)return !1;if(32==(36&this.f))return !0;this.f&=-5;if(this.g===e)return !0;this.g=e;this.f|=1;if(this.i>0&&!v$1(this)){this.f&=-2;return !0}const i=n;try{l(this);n=this;const i=this.x();if(16&this.f||this.v!==i||0===this.i){this.v=i;this.f&=-17;this.i++;}}catch(i){this.v=i;this.f|=16;this.i++;}n=i;y(this);this.f&=-2;return !0};a.prototype.S=function(i){if(void 0===this.t){this.f|=36;for(let i=this.s;void 0!==i;i=i.n)i.S.S(i);}u.prototype.S.call(this,i);};a.prototype.U=function(i){if(void 0!==this.t){u.prototype.U.call(this,i);if(void 0===this.t){this.f&=-33;for(let i=this.s;void 0!==i;i=i.n)i.S.U(i);}}};a.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(let i=this.t;void 0!==i;i=i.x)i.t.N();}};Object.defineProperty(a.prototype,"value",{get(){if(1&this.f)throw new Error("Cycle detected");const i=c$1(this);this.h();if(void 0!==i)i.i=this.i;if(16&this.f)throw this.v;return this.v}});function w(i){return new a(i)}function _(i){const o=i.u;i.u=void 0;if("function"==typeof o){r++;const s=n;n=void 0;try{o();}catch(t){i.f&=-2;i.f|=8;g(i);throw t}finally{n=s;t();}}}function g(i){for(let t=i.s;void 0!==t;t=t.n)t.S.U(t);i.x=void 0;i.s=void 0;_(i);}function p$1(i){if(n!==this)throw new Error("Out-of-order effect");y(this);n=i;this.f&=-2;if(8&this.f)g(this);t();}function b(i){this.x=i;this.u=void 0;this.s=void 0;this.o=void 0;this.f=32;}b.prototype.c=function(){const i=this.S();try{if(8&this.f)return;if(void 0===this.x)return;const t=this.x();if("function"==typeof t)this.u=t;}finally{i();}};b.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1;this.f&=-9;_(this);l(this);r++;const i=n;n=this;return p$1.bind(this,i)};b.prototype.N=function(){if(!(2&this.f)){this.f|=2;this.o=s;s=this;}};b.prototype.d=function(){this.f|=8;if(!(1&this.f))g(this);};function E(i){const t=new b(i);try{t.c();}catch(i){t.d();throw i}return t.d.bind(t)}

    function c(t,e){l$2[t]=e.bind(null,l$2[t]||(()=>{}));}let d;function h(t){if(d)d();d=t&&t.S();}function p({data:t}){const i=useSignal(t);i.value=t;const o=q(()=>{let t=this.__v;while(t=t.__)if(t.__c){t.__c.__$f|=4;break}this.__$u.c=()=>{var t;if(!t$2(o.peek())&&3===(null==(t=this.base)?void 0:t.nodeType))this.base.data=o.peek();else {this.__$f|=1;this.setState({});}};return w(()=>{let t=i.value.value;return 0===t?0:!0===t?"":t||""})},[]);return o.value}p.displayName="_st";Object.defineProperties(u.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:p},props:{configurable:!0,get(){return {data:this}}},__b:{configurable:!0,value:1}});c("__b",(t,i)=>{if("string"==typeof i.type){let t,e=i.props;for(let n in e){if("children"===n)continue;let o=e[n];if(o instanceof u){if(!t)i.__np=t={};t[n]=o;e[n]=o.peek();}}}t(i);});c("__r",(t,i)=>{h();let e,n=i.__c;if(n){n.__$f&=-2;e=n.__$u;if(void 0===e)n.__$u=e=function(t){let i;E(function(){i=this;});i.c=()=>{n.__$f|=1;n.setState({});};return i}();}h(e);t(i);});c("__e",(t,i,e,n)=>{h();t(i,e,n);});c("diffed",(t,i)=>{h();let e;if("string"==typeof i.type&&(e=i.__e)){let t=i.__np,n=i.props;if(t){let i=e.U;if(i)for(let e in i){let n=i[e];if(void 0!==n&&!(e in t)){n.d();i[e]=void 0;}}else {i={};e.U=i;}for(let o in t){let r=i[o],f=t[o];if(void 0===r){r=v(e,o,f,n);i[o]=r;}else r.o(f,n);}}}t(i);});function v(t,i,e,n){const o=i in t&&void 0===t.ownerSVGElement,r=d$1(e);return {o:(t,i)=>{r.value=t;n=i;},d:E(()=>{const e=r.value.value;if(n[i]!==e){n[i]=e;if(o)t[i]=e;else if(e)t.setAttribute(i,e);else t.removeAttribute(i);}})}}c("unmount",(t,i)=>{if("string"==typeof i.type){let t=i.__e;if(t){const i=t.U;if(i){t.U=void 0;for(let t in i){let e=i[t];if(e)e.d();}}}}else {let t=i.__c;if(t){const i=t.__$u;if(i){t.__$u=void 0;i.d();}}}t(i);});c("__h",(t,i,e,n)=>{if(n<3||9===n)i.__$f|=2;t(i,e,n);});b$1.prototype.shouldComponentUpdate=function(t,i){const e=this.__$u;if(!(e&&void 0!==e.s||4&this.__$f))return !0;if(3&this.__$f)return !0;for(let t in i)return !0;for(let i in t)if("__source"!==i&&t[i]!==this.props[i])return !0;for(let i in this.props)if(!(i in t))return !0;return !1};function useSignal(t){return q(()=>d$1(t),[])}

    const VERSION = '#version 300 es\n';
    const PRECISION = 'precision highp float;\nprecision highp int;\n';
    class Shader {
        constructor(gl, vertSource, fragSource, defines = []) {
            const definesString = defines.map(define => `#define ${define}`).join('\n') + '\n';
            console.log(VERSION + PRECISION + definesString + vertSource);
            const vertShader = this.createShader(gl, VERSION + PRECISION + definesString + vertSource, gl.VERTEX_SHADER);
            const fragShader = this.createShader(gl, VERSION + PRECISION + definesString + fragSource, gl.FRAGMENT_SHADER);
            const program = gl.createProgram();
            if (!program) {
                throw new Error('Could not create WebGL program');
            }
            gl.attachShader(program, vertShader);
            gl.attachShader(program, fragShader);
            gl.linkProgram(program);
            if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
                const info = gl.getProgramInfoLog(program);
                throw new Error('Could not compile WebGL program. \n' + info);
            }
            this.program = program;
            this.attribLocations = {};
            this.uniformLocations = {};
            const numAttribs = gl.getProgramParameter(program, gl.ACTIVE_ATTRIBUTES);
            for (let i = 0; i < numAttribs; i++) {
                const activeAttrib = gl.getActiveAttrib(program, i);
                this.attribLocations[activeAttrib.name] = gl.getAttribLocation(program, activeAttrib.name);
            }
            const numUniforms = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
            for (let i = 0; i < numUniforms; i++) {
                const activeUniform = gl.getActiveUniform(program, i);
                this.uniformLocations[activeUniform.name] = gl.getUniformLocation(program, activeUniform.name);
            }
        }
        createShader(gl, source, type) {
            const shader = gl.createShader(type);
            if (!shader) {
                throw new Error('Could not create WebGL shader');
            }
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                const info = gl.getShaderInfoLog(shader);
                throw new Error(`Could not compile ${type === gl.VERTEX_SHADER ? 'vertex' : 'fragment'} shader. \n` + info);
            }
            return shader;
        }
    }

    var quadVert = "in vec2 a_position;\nout vec2 v_texcoord;\n\nvoid main() {\n    gl_Position = vec4(a_position * 2.0 - 1.0, 0.0, 1.0);\n    v_texcoord = a_position;\n}\n";

    var stepFrag = "in vec2 v_texcoord;\nuniform uvec2 u_dimensions;\nuniform highp usampler2D u_texture;\nout uvec4 fragColor;\n\nuint getNeighborCount(uvec2 coord) {\n    uint neighbors = 0u;\n\n    // left column\n    if (coord.x > 0u) {\n        if (coord.y > 0u) {\n            neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(-1, -1), 0).r;\n        }\n        neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(-1, 0), 0).r;\n        if (coord.y < u_dimensions.y) {\n            neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(-1, 1), 0).r;\n        }\n    }\n\n    // center column\n    if (coord.y > 0u) {\n        neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(0, -1), 0).r;\n    }\n    if (coord.y < u_dimensions.y) {\n        neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(0, 1), 0).r;\n    }\n\n    // right column\n    if (coord.x < u_dimensions.x) {\n        if (coord.y > 0u) {\n            neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(1, -1), 0).r;\n        }\n        neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(1, 0), 0).r;\n        if (coord.y < u_dimensions.y) {\n            neighbors += texelFetch(u_texture, ivec2(coord) + ivec2(1, 1), 0).r;\n        }\n    }\n\n    return neighbors;\n}\n\nvoid main() {\n    uvec2 cellCoord = uvec2(v_texcoord * vec2(u_dimensions));\n\n    uint cell = 0u;\n    uint neighbors = getNeighborCount(cellCoord);\n\n    if (neighbors == 3u) {\n        cell = 1u;\n    } else if (neighbors == 2u) {\n        cell = texelFetch(u_texture, ivec2(cellCoord), 0).r;\n    }\n\n    fragColor = uvec4(cell, 0, 0, 0);\n}\n";

    var drawFrag = "in vec2 v_texcoord;\nuniform uvec2 u_dimensions;\nuniform highp usampler2D u_texture;\nout vec4 fragColor;\n\nvec3 srgb_mix(vec3 x, vec3 y, float a) {\n    return pow(mix(\n        pow(x, vec3(2.2)),\n        pow(y, vec3(2.2)),\n        a\n    ), vec3(1.0 / 2.2));\n}\n\nvoid main() {\n    ivec2 cellCoord = ivec2(v_texcoord * vec2(u_dimensions));\n    uint cell = texelFetch(u_texture, cellCoord, 0).r;\n    float f_cell = float(cell);\n\n    uint density = 0u;\n\n    for (int y = -CELL_RADIUS; y <= CELL_RADIUS; y++) {\n        for (int x = -CELL_RADIUS; x <= CELL_RADIUS; x++) {\n            ivec2 avgCoord = cellCoord + ivec2(x, y);\n            density += texelFetch(u_texture, avgCoord, 0).r;\n        }\n    }\n\n    float density_norm = (float(density) - 2.0) / float(CELL_RADIUS * CELL_RADIUS);\n\n    vec4 cell_color = vec4(srgb_mix(\n        vec3(0.0, 0.25, 1.0),\n        vec3(1.0, 0.0, 0.25),\n        smoothstep(0.0, 1.0, pow(density_norm, 0.6))\n    ), 1.0);\n\n    fragColor = mix(\n        vec4(0.0, 0.0, 0.0, 1.0),\n        cell_color,\n        f_cell\n    );\n}\n";

    class CellBuffer {
        constructor(gl, width, height) {
            this.gl = gl;
            this.width = width;
            this.height = height;
            const texture = gl.createTexture();
            if (!texture) {
                throw new Error('Failed to create texture');
            }
            this.texture = texture;
            gl.bindTexture(gl.TEXTURE_2D, this.texture);
            this.textureData = new Uint8Array(width * height);
            for (let i = 0; i < width * height; i++) {
                this.textureData[i] = Math.round(Math.random());
            }
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.R8UI, width, height, 0, gl.RED_INTEGER, gl.UNSIGNED_BYTE, this.textureData);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            const framebuffer = gl.createFramebuffer();
            if (!framebuffer) {
                throw new Error('Failed to create framebuffer');
            }
            this.framebuffer = framebuffer;
            gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
            gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);
        }
        randomize() {
            for (let i = 0; i < this.width * this.height; i++) {
                this.textureData[i] = Math.round(Math.random());
            }
            const gl = this.gl;
            gl.texSubImage2D(gl.TEXTURE_2D, 0, 0, 0, this.width, this.height, gl.RED_INTEGER, gl.UNSIGNED_BYTE, this.textureData);
        }
    }
    class Grid {
        constructor(width, height) {
            this.radius = 7;
            this.width = width;
            this.height = height;
            this.canvas = document.createElement('canvas');
            this.canvas.width = width;
            this.canvas.height = height;
            const gl = this.canvas.getContext('webgl2', { antialias: false });
            if (!gl) {
                throw new Error('Failed to initialize WebGL context');
            }
            this.gl = gl;
            const quadBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, quadBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                0, 0,
                1, 0,
                0, 1,
                0, 1,
                1, 0,
                1, 1,
            ]), gl.STATIC_DRAW);
            this.simulationStepShader = new Shader(this.gl, quadVert, stepFrag);
            //this.drawShader = new Shader(this.gl, quadVert, drawFrag);
            this.drawShaders = [];
            this.prevBuffer = new CellBuffer(this.gl, width, height);
            this.nextBuffer = new CellBuffer(this.gl, width, height);
        }
        setShader(shader) {
            const gl = this.gl;
            gl.useProgram(shader.program);
            const a_position = this.simulationStepShader.attribLocations.a_position;
            gl.enableVertexAttribArray(a_position);
            gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);
            gl.uniform2ui(shader.uniformLocations.u_dimensions, this.width, this.height);
        }
        swapBuffers() {
            const tmp = this.prevBuffer;
            this.prevBuffer = this.nextBuffer;
            this.nextBuffer = tmp;
        }
        getDrawShaderForRadius(radius) {
            const shader = this.drawShaders[radius];
            if (shader) {
                return shader;
            }
            const newShader = new Shader(this.gl, quadVert, drawFrag, [`CELL_RADIUS ${radius}`]);
            this.drawShaders[radius] = newShader;
            return newShader;
        }
        randomize() {
            this.prevBuffer.randomize();
        }
        update() {
            const gl = this.gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, this.nextBuffer.framebuffer);
            gl.activeTexture(gl.TEXTURE0);
            gl.bindTexture(gl.TEXTURE_2D, this.prevBuffer.texture);
            this.setShader(this.simulationStepShader);
            const a_position = this.simulationStepShader.attribLocations.a_position;
            gl.enableVertexAttribArray(a_position);
            gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, 0, 0);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            this.swapBuffers();
        }
        draw() {
            const gl = this.gl;
            gl.bindFramebuffer(gl.FRAMEBUFFER, null);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);
            this.setShader(this.getDrawShaderForRadius(this.radius));
            gl.bindTexture(gl.TEXTURE_2D, this.prevBuffer.texture);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
        }
        step() {
            this.update();
            this.draw();
        }
        stepForMS(stepTime) {
            const now = Date.now();
            let steps = 0;
            for (;;) {
                // Do a prime number of steps to avoid hiding any oscillations with a period that divides the step count
                for (let i = 0; i < 7; i++) {
                    this.update();
                    steps++;
                }
                // Ensure the work is actually done so we can accurately measure time
                this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.prevBuffer.framebuffer);
                this.gl.readPixels(0, 0, 1, 1, this.gl.RGBA_INTEGER, this.gl.UNSIGNED_INT, new Uint32Array(4));
                const elapsed = Date.now() - now;
                if (elapsed >= stepTime) {
                    break;
                }
            }
            this.draw();
            return steps;
        }
    }

    const GridComponent = ({ width, height, paused, radius, speed, generation }) => {
        const containerRef = F(null);
        const gridRef = F();
        if (!gridRef.current) {
            gridRef.current = new Grid(width, height);
            gridRef.current.radius = radius;
        }
        const grid = gridRef.current;
        const animationFrameRef = F(null);
        const animationRef = F(null);
        _$1(() => {
            if (!gridRef.current)
                return;
            gridRef.current.radius = radius;
            gridRef?.current?.draw();
        }, [radius]);
        const speedRef = F(speed);
        _$1(() => {
            speedRef.current = speed;
        }, [speed]);
        _$1(() => {
            gridRef.current?.randomize();
        }, [generation]);
        _$1(() => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
            animationRef.current = () => {
                if (!gridRef.current)
                    return;
                for (let i = 0; i < speedRef.current; i++) {
                    gridRef.current.update();
                }
                gridRef.current.draw();
                if (!paused) {
                    animationFrameRef.current = requestAnimationFrame(animationRef.current);
                }
            };
        }, []);
        _$1(() => {
            if (containerRef.current !== null) {
                containerRef.current.append(grid.canvas);
            }
        }, [containerRef.current]);
        _$1(() => {
            if (paused && animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
            else if (!paused && !animationFrameRef.current) {
                animationFrameRef.current = requestAnimationFrame(animationRef.current);
            }
        }, [paused]);
        return (_$2("div", { className: "grid-container", ref: containerRef }));
    };

    const App = () => {
        const paused = useSignal(false);
        const togglePaused = x(() => {
            paused.value = !paused.value;
        }, [paused]);
        const radius = useSignal(7);
        const setRadius = x((event) => {
            radius.value = Number(event.target.value);
        }, [radius]);
        const speed = useSignal(1);
        const setSpeed = x((event) => {
            speed.value = Number(event.target.value);
        }, [speed]);
        const generation = useSignal(0);
        const setGeneration = x(() => {
            generation.value++;
        }, [generation]);
        return (_$2("div", { className: "app" },
            _$2(GridComponent, { width: 1920, height: 1080, paused: paused.value, radius: radius.value, speed: speed.value, generation: generation.value }),
            _$2("div", { className: "controls" },
                _$2("span", { className: "control" },
                    _$2("button", { onClick: togglePaused }, paused.value ? '▶️' : '⏸️')),
                _$2("label", { className: "control" },
                    "Radius: ",
                    _$2("input", { type: "range", min: "1", max: "15", value: radius.value, onInput: setRadius })),
                _$2("label", { className: "control" },
                    "Speed: ",
                    _$2("input", { type: "range", min: "1", max: "100", value: speed.value, onInput: setSpeed }),
                    " ",
                    speed.value),
                _$2("span", { className: "control" },
                    _$2("button", { onClick: setGeneration }, "Reset")))));
    };

    /*const grid = new Grid(2560, 1440);
    document.body.appendChild(grid.canvas);
    //grid.step();
    //setInterval(grid.step.bind(grid), 100);
    const step = (): void => {
        grid.stepForMS(10);
        requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
    */
    B$1(_$2(App, null), document.body);

}));
//# sourceMappingURL=index.js.map
