!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(s,o,function(e){return t[e]}.bind(null,o));return s},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=31)}([function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});class n{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){let n=this._events[t];n&&((n=n.filter(t=>t.fn!==e)).length?this._events[t]=n:delete this._events[t])}run(t,...e){let n=this._events[t];return console.assert(!!n,"No subscriber for event: "+t),n&&((n=n.filter(n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):s.apply(this,e),!n.options.once})).length?this._events[t]=n:delete this._events[t]),n?n.length:0}once(t,e,n={}){this.on(t,e,Object.assign({},n,{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout(()=>{clearTimeout(s._t),e.apply(this,n)},s.delay)}}let s;e.App=n;const o=t||window;o.app&&o.app.start?s=o.app:(s=new n,o.app=s),e.default=s}).call(this,n(3))},function(t,e,n){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=s(n(0));e.app=o.default;const r=n(5),i=n(7);e.Component=i.Component;const a=n(2);e.on=a.on,e.update=a.update,e.event=a.update;const u=s(n(9)),c=n(10);e.ROUTER_EVENT=c.ROUTER_EVENT,e.ROUTER_404_EVENT=c.ROUTER_404_EVENT,o.default.createElement=r.createElement,o.default.render=r.render,o.default.Fragment=r.Fragment,o.default.webComponent=u.default,o.default.start=((t,e,n,s,o)=>{const r=Object.assign({},o,{render:!0,global_event:!0}),a=new i.Component(e,n,s);return o&&o.rendered&&(a.rendered=o.rendered),a.mount(t,r),a}),o.default.on(c.ROUTER_EVENT,t=>{}),o.default.on("#",t=>{}),o.default.route=c.route,o.default.on("route",t=>o.default.route&&o.default.route(t)),"object"==typeof document&&document.addEventListener("DOMContentLoaded",()=>{o.default.route===c.route&&(window.onpopstate=(()=>c.route(location.hash)),c.route(location.hash))}),e.default=o.default,"object"==typeof window&&(window.Component=i.Component,window.React=o.default),o.default.on("debug",t=>0)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Reflect={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}},e.update=function(t,n={}){return(s,o,r)=>{const i=t?t.toString():o;return e.Reflect.defineMetadata(`apprun-update:${i}`,{name:i,key:o,options:n},s),r}},e.on=function(t,n={}){return function(s,o){const r=t?t.toString():o;e.Reflect.defineMetadata(`apprun-update:${r}`,{name:r,key:o,options:n},s)}}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=s(n(6)),r="_props";function i(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach(t=>{Array.isArray(t)?t.forEach(t=>n(t)):n(t)}),e}e.createElement=function(t,e,...n){const s=i(n);return"string"==typeof t?{tag:t,props:e,children:s}:Array.isArray(t)?t:void 0===t&&n?s:Object.getPrototypeOf(t).__isAppRunComponent?{tag:t,props:e,children:s}:t(e,s)};const a={};function u(t,e,n={}){null!=e&&(e=o.default(e,n),t&&(Array.isArray(e)?l(t,e):l(t,[e])))}function c(t,e){console.assert(!!t),function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(l(t,e.children),f(t,e.props)):t.parentNode.replaceChild(h(e),t)}function l(t,e){const n=Math.min(t.childNodes.length,e.length);for(let s=0;s<n;s++){const n=e[s],o=t.childNodes[s];if("string"==typeof n)o.textContent!==n&&(3===o.nodeType?o.textContent=n:t.replaceChild(d(n),o));else{const e=n.props&&n.props.key;if(e)if(o.key===e)c(t.childNodes[s],n);else{const r=a[e];r?(t.insertBefore(r,o),t.appendChild(o),c(t.childNodes[s],n)):t.insertBefore(h(n),o)}else c(t.childNodes[s],n)}}let s=t.childNodes.length;for(;s>n;)t.removeChild(t.lastChild),s--;if(e.length>n){const s=document.createDocumentFragment();for(let t=n;t<e.length;t++)s.appendChild(h(e[t]));t.appendChild(s)}}function d(t){if(0===t.indexOf("_html:")){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(t)}function h(t,e=!1){if(console.assert(null!=t),"string"==typeof t)return d(t);if(!t.tag||"function"==typeof t.tag)return d(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return f(n,t.props),t.children&&t.children.forEach(t=>n.appendChild(h(t,e))),n}function f(t,e){console.assert(!!t),e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach(t=>n[t]=null),e&&Object.keys(e).forEach(t=>n[t]=e[t]),n}(t[r]||{},e||{}),t[r]=e;for(const n in e){const s=e[n];if("style"===n){t.style.cssText&&(t.style.cssText="");for(const e in s)t.style[e]!==s[e]&&(t.style[e]=s[e])}else if(n.startsWith("data-")){const e=n.substring(5).replace(/-(\w)/g,t=>t[1].toUpperCase());t.dataset[e]!==s&&(s||""===s?t.dataset[e]=s:delete t.dataset[e])}else"class"===n||n.startsWith("role")||n.indexOf("-")>0||t instanceof SVGElement?t.getAttribute(n)!==s&&(s?t.setAttribute(n,s):t.removeAttribute(n)):t[n]!==s&&(t[n]=s);"key"===n&&s&&(a[s]=t)}}e.updateElement=u,e.render=u,e.Fragment=function(t,...e){return i(e)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});const s=n(4);e.createElement=s.createElement,e.Fragment=s.Fragment,e.render=function(t,e,n){s.updateElement(t,e,n)}},function(t,e,n){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=s(n(0));let r=0;e.default=function t(e,n,s=0){if(0===s&&(r=0),"string"==typeof e)return e;if(Array.isArray(e))return e.map(e=>t(e,n,r++));let i=e;return e&&"function"==typeof e.tag&&Object.getPrototypeOf(e.tag).__isAppRunComponent&&(i=function(t,e,n){const{tag:s,props:r,children:i}=t;let a=r&&r.id,u=`_${n}_`;a?u=`_${a}_`:a=`_${n}_`,e.__componentCache||(e.__componentCache={});let c=e.__componentCache[u];c||(c=e.__componentCache[u]=new s(Object.assign({},r,{children:i})).mount(a)),c.mounted&&c.mounted(r,i);const l=c.state;let d="";return l instanceof Promise||!c.view||(d=c.view(l,r),c.rendered&&setTimeout(()=>c.rendered(l,r))),o.default.createElement("section",Object.assign({},r,{id:a}),d)}(e,n,r++)),i&&i.children&&(i.children=i.children.map(e=>t(e,n,r++))),i}},function(t,e,n){"use strict";var s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e},o=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const r=s(n(0)),i=n(2),a=o(n(8)),u={};r.default.on("get-components",t=>t.components=u);class c{constructor(t,e,n,s){this.state=t,this.view=e,this.update=n,this.options=s,this._app=new r.App,this._actions=[],this._history=[],this._history_idx=-1,this.start=((t=null,e={render:!0})=>this.mount(t,Object.assign({},e,{render:!0})))}renderState(t){if(!this.view)return;const e=r.default.createElement;r.default.createElement=((t,n,...s)=>(n&&Object.keys(n).forEach(e=>{e.startsWith("$")&&(a.default(e,n,t,this),delete n[e])}),e(t,n,...s)));const n=this.view(t);if(r.default.createElement=e,r.default.run("debug",{component:this,state:t,vdom:n||"[vdom is null - no render]"}),"object"!=typeof document)return;const s="string"==typeof this.element?document.getElementById(this.element):this.element;if(s){const t="_c";if(this.unload){if(s._component!==this){this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(t,this.tracking_id);const e=new MutationObserver(t=>{const{removedNodes:n,oldValue:o}=t[0];(o===this.tracking_id||Array.from(n).indexOf(s)>=0)&&(this.unload(),e.disconnect())});s.parentNode&&e.observe(s.parentNode,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]})}}else s.removeAttribute&&s.removeAttribute(t);s._component=this}r.default.render(s,n,this),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)t.then(t=>{this.setState(t,e)}).catch(t=>{throw console.error(t),t}),this._state=t;else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){if(console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign({},this.options,e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history){const t=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},n=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1};this.on(e.history.prev||"history-prev",t),this.on(e.history.next||"history-next",n)}return this.add_actions(),void 0===this.state&&(this.state=null!=this.model?this.model:{}),e.render?this.setState(this.state,{render:!0,history:!0}):this.setState(this.state,{render:!1,history:!0}),u[t]=u[t]||[],u[t].push(this),this}is_global_event(t){return t&&(t.startsWith("#")||t.startsWith("/"))}add_action(t,e,n={}){e&&"function"==typeof e&&this.on(t,(...s)=>{const o=e(this.state,...s);r.default.run("debug",{component:this,event:t,e:s,state:this.state,newState:o,options:n}),this.setState(o,n)},n)}add_actions(){const t=this.update||{};i.Reflect.getMetadataKeys(this).forEach(e=>{if(e.startsWith("apprun-update:")){const n=i.Reflect.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}});const e={};Object.keys(t).forEach(n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach(t=>e[t.trim()]=s)}),Object.keys(e).forEach(t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])})}run(t,...e){const n=t.toString();return this.global_event||this.is_global_event(n)?r.default.run(n,...e):this._app.run(n,...e)}on(t,e,n){const s=t.toString();return this._actions.push({name:s,fn:e}),this.global_event||this.is_global_event(s)?r.default.on(s,e,n):this._app.on(s,e,n)}unmount(){this._actions.forEach(t=>{const{name:e,fn:n}=t;this.global_event||this.is_global_event(e)?r.default.off(e,n):this._app.off(e,n)})}}c.__isAppRunComponent=!0,e.Component=c},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),app.on("$",()=>{});const s=(t,e)=>e?t.state[e]:t.state,o=(t,e,n)=>{if(e){const s=Object.assign({},t.state);s[e]=n,t.setState(s)}else t.setState(n)};e.default=((t,e,n,r)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=(e=>r.run(t,e));else if("string"==typeof n)e[t]=(t=>r.run(n,t));else if("function"==typeof n)e[t]=(t=>r.setState(n(r.state,t)));else if(Array.isArray(n)){const[s,...o]=n;e[t]=(t=>r.setState(s(r.state,...o,t)))}}else if("$bind"===t){const i=e.type||"text",a="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(i){case"checkbox":e.checked=s(r,a),e.onclick=(t=>o(r,a||t.target.name,t.target.checked));break;case"radio":e.checked=s(r,a)===e.value,e.onclick=(t=>o(r,a||t.target.name,t.target.value));break;case"number":case"range":e.value=s(r,a),e.oninput=(t=>o(r,a||t.target.name,Number(t.target.value)));break;default:e.value=s(r,a),e.oninput=(t=>o(r,a||t.target.name,t.target.value))}else"select"===n?(e.selectedIndex=s(r,a),e.onchange=(t=>{t.target.multiple||o(r,a||t.target.name,t.target.selectedIndex)})):"option"===n&&(e.selected=s(r,a),e.onclick=(t=>o(r,a||t.target.name,t.target.selected)))}else app.run("$",{key:t,tag:n,props:e,component:r})})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.customElement=((t,e={})=>(class extends HTMLElement{constructor(){super();const n=Object.assign({render:!0,shadow:!1},e);this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s={};Array.from(this.attributes).forEach(t=>s[t.name]=t.value),this.children&&(s.children=Array.from(this.children),s.children.forEach(t=>t.parentElement.removeChild(t))),this._component=new t(s).mount(this._shadowRoot,n),this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component)}get state(){return this._component.state}})),e.default=((t,n,s)=>{customElements&&customElements.define(t,e.customElement(n,s))})},function(t,e,n){"use strict";var s=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const o=s(n(0));e.ROUTER_EVENT="//",e.ROUTER_404_EVENT="///",e.route=(t=>{if(t||(t="#"),t.startsWith("#")){const[n,...s]=t.split("/");o.default.run(n,...s)||o.default.run(e.ROUTER_404_EVENT,n,...s),o.default.run(e.ROUTER_EVENT,n,...s)}else if(t.startsWith("/")){const[n,s,...r]=t.split("/");o.default.run("/"+s,...r)||o.default.run(e.ROUTER_404_EVENT,"/"+s,...r),o.default.run(e.ROUTER_EVENT,"/"+s,...r)}else o.default.run(t)||o.default.run(e.ROUTER_404_EVENT,t),o.default.run(e.ROUTER_EVENT,t)}),e.default=e.route},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var s=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e};Object.defineProperty(e,"__esModule",{value:!0});const o=s(n(1));o.default.webComponent("my-app",class extends o.Component{constructor({num:t,children:e}){super(),this.view=(t=>o.default.createElement("div",null,o.default.createElement("h1",null,t))),this.update={"-1":t=>t-1,"+1":t=>t+1},this.rendered=(t=>{this.children.forEach(t=>{this.element.firstElementChild.appendChild(t)}),this.element.setAttribute("num",t)}),this.children=e,this.state=parseInt(t)}})}])});
//# sourceMappingURL=app.js.map