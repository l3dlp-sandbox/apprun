class t{constructor(){this._events={}}on(t,i,s={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:i,options:s})}off(t,i){const s=this._events[t]||[];this._events[t]=s.filter((t=>t.fn!==i))}find(t){return this._events[t]}run(t,...i){const s=this.getSubscribers(t,this._events);return console.assert(s&&s.length>0,"No subscriber for event: "+t),s.forEach((s=>{const{fn:n,options:e}=s;return e.delay?this.delay(t,n,i,e):Object.keys(e).length>0?n.apply(this,[...i,e]):n.apply(this,i),!s.options.once})),s.length}once(t,i,s={}){this.on(t,i,Object.assign(Object.assign({},s),{once:!0}))}delay(t,i,s,n){n._t&&clearTimeout(n._t),n._t=setTimeout((()=>{clearTimeout(n._t),Object.keys(n).length>0?i.apply(this,[...s,n]):i.apply(this,s)}),n.delay)}runAsync(t,...i){const s=this.getSubscribers(t,this._events);console.assert(s&&s.length>0,"No subscriber for event: "+t);const n=s.map((t=>{const{fn:s,options:n}=t;return Object.keys(n).length>0?s.apply(this,[...i,n]):s.apply(this,i)}));return Promise.all(n)}query(t,...i){return this.query(t,...i)}getSubscribers(t,i){const s=i[t]||[];return i[t]=s.filter((t=>!t.options.once)),Object.keys(i).filter((i=>i.endsWith("*")&&t.startsWith(i.replace("*","")))).sort(((t,i)=>i.length-t.length)).forEach((n=>s.push(...i[n].map((i=>Object.assign(Object.assign({},i),{options:Object.assign(Object.assign({},i.options),{event:t})})))))),s}}let i;const s="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;s.app&&s._AppRunVersions?i=s.app:(i=new t,s.app=i,s._AppRunVersions="AppRun-3");var n=i;const e=(t,i)=>(i?t.state[i]:t.state)||"",o=(t,i,s)=>{if(i){const n=t.state||{};n[i]=s,t.setState(n)}else t.setState(s)},r=(t,i)=>{if(Array.isArray(t))return t.map((t=>r(t,i)));{let{type:s,tag:h,props:c,children:l}=t;return h=h||s,l=l||(null==c?void 0:c.children),c&&Object.keys(c).forEach((t=>{t.startsWith("$")&&(((t,i,s,r)=>{if(t.startsWith("$on")){const s=i[t];if(t=t.substring(1),"boolean"==typeof s)i[t]=i=>r.run?r.run(t,i):n.run(t,i);else if("string"==typeof s)i[t]=t=>r.run?r.run(s,t):n.run(s,t);else if("function"==typeof s)i[t]=t=>r.setState(s(r.state,t));else if(Array.isArray(s)){const[e,...o]=s;"string"==typeof e?i[t]=t=>r.run?r.run(e,...o,t):n.run(e,...o,t):"function"==typeof e&&(i[t]=t=>r.setState(e(r.state,...o,t)))}}else if("$bind"===t){const n=i.type||"text",h="string"==typeof i[t]?i[t]:i.name;if("input"===s)switch(n){case"checkbox":i.checked=e(r,h),i.onclick=t=>o(r,h||t.target.name,t.target.checked);break;case"radio":i.checked=e(r,h)===i.value,i.onclick=t=>o(r,h||t.target.name,t.target.value);break;case"number":case"range":i.value=e(r,h),i.oninput=t=>o(r,h||t.target.name,Number(t.target.value));break;default:i.value=e(r,h),i.oninput=t=>o(r,h||t.target.name,t.target.value)}else"select"===s?(i.value=e(r,h),i.onchange=t=>{t.target.multiple||o(r,h||t.target.name,t.target.value)}):"option"===s?(i.selected=e(r,h),i.onclick=t=>o(r,h||t.target.name,t.target.selected)):"textarea"===s&&(i.innerHTML=e(r,h),i.oninput=t=>o(r,h||t.target.name,t.target.value))}else n.run("$",{key:t,tag:s,props:i,component:r})})(t,c,h,i),delete c[t])})),l&&r(l,i),t}};function h(t,...i){return l(i)}const c="_props";function l(t){const i=[],s=t=>{null!=t&&""!==t&&!1!==t&&i.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>s(t))):s(t)})),i}function u(t,i,...s){const n=l(s);if("string"==typeof t)return{tag:t,props:i,children:n};if(Array.isArray(t))return t;if(void 0===t&&s)return n;if(Object.getPrototypeOf(t).t)return{tag:t,props:i,children:n};if("function"==typeof t)return t(i,n);throw new Error(`Unknown tag in vdom ${t}`)}const d=new WeakMap,f=(t,i,s={})=>{if(null==i||!1===i)return;!function(t,i,s={}){if(null==i||!1===i)return;if(i=w(i,s),!t)return;const n="SVG"===t.nodeName;Array.isArray(i)?v(t,i,n):v(t,[i],n)}("string"==typeof t&&t?document.getElementById(t)||document.querySelector(t):t,i=r(i,s),s)};function a(t,i,s){3!==i._op&&(s=s||"svg"===i.tag,!function(t,i){const s=t.nodeName,n=`${i.tag||""}`;return s.toUpperCase()===n.toUpperCase()}(t,i)?t.parentNode.replaceChild(g(i,s),t):(!(2&i._op)&&v(t,i.children,s),!(1&i._op)&&b(t,i.props,s)))}function v(t,i,s){var n,e;const o=(null===(n=t.childNodes)||void 0===n?void 0:n.length)||0,r=(null==i?void 0:i.length)||0,h=Math.min(o,r);for(let n=0;n<h;n++){const e=i[n];if(3===e._op)continue;const o=t.childNodes[n];if("string"==typeof e)o.textContent!==e&&(3===o.nodeType?o.nodeValue=e:t.replaceChild(y(e),o));else if(e instanceof HTMLElement||e instanceof SVGElement)t.insertBefore(e,o);else{const i=e.props&&e.props.key;if(i)if(o.key===i)a(t.childNodes[n],e,s);else{const r=d[i];if(r){const i=r.nextSibling;t.insertBefore(r,o),i?t.insertBefore(o,i):t.appendChild(o),a(t.childNodes[n],e,s)}else t.replaceChild(g(e,s),o)}else a(t.childNodes[n],e,s)}}let c=(null===(e=t.childNodes)||void 0===e?void 0:e.length)||0;for(;c>h;)t.removeChild(t.lastChild),c--;if(r>h){const n=document.createDocumentFragment();for(let t=h;t<i.length;t++)n.appendChild(g(i[t],s));t.appendChild(n)}}const p=t=>{const i=document.createElement("section");return i.insertAdjacentHTML("afterbegin",t),Array.from(i.children)};function y(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const i=document.createElement("div");return i.insertAdjacentHTML("afterbegin",t.substring(6)),i}return document.createTextNode(null!=t?t:"")}function g(t,i){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return y(t);if(!t.tag||"function"==typeof t.tag)return y(JSON.stringify(t));const s=(i=i||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return b(s,t.props,i),t.children&&t.children.forEach((t=>s.appendChild(g(t,i)))),s}function b(t,i,s){const n=t[c]||{};i=function(t,i){i.class=i.class||i.className,delete i.className;const s={};return t&&Object.keys(t).forEach((t=>s[t]=null)),i&&Object.keys(i).forEach((t=>s[t]=i[t])),s}(n,i||{}),t[c]=i;for(const n in i){const e=i[n];if(n.startsWith("data-")){const i=n.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[i]!==e&&(e||""===e?t.dataset[i]=e:delete t.dataset[i])}else if("style"===n)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof e)t.style.cssText=e;else for(const i in e)t.style[i]!==e[i]&&(t.style[i]=e[i]);else if(n.startsWith("xlink")){const i=n.replace("xlink","").toLowerCase();null==e||!1===e?t.removeAttributeNS("http://www.w3.org/1999/xlink",i):t.setAttributeNS("http://www.w3.org/1999/xlink",i,e)}else n.startsWith("on")?e&&"function"!=typeof e?"string"==typeof e&&(e?t.setAttribute(n,e):t.removeAttribute(n)):t[n]=e:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-|^for$/g.test(n)||s?t.getAttribute(n)!==e&&(e?t.setAttribute(n,e):t.removeAttribute(n)):t[n]!==e&&(t[n]=e);"key"===n&&e&&(d[e]=t)}i&&"function"==typeof i.ref&&window.requestAnimationFrame((()=>i.ref(t)))}function w(t,i,s=0){var n;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>w(t,i,s++)));let e=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(e=function(t,i,s){const{tag:n,props:e,children:o}=t;let r=`_${s}`,h=e&&e.id;h?r=h:h=`_${s}${Date.now()}`;let c="section";e&&e.as&&(c=e.as,delete e.as),i.i||(i.i={});let l=i.i[r];if(l&&l instanceof n&&l.element)l.renderState(l.state);else{const t=document.createElement(c);l=i.i[r]=new n(Object.assign(Object.assign({},e),{children:o})).mount(t,{render:!0})}if(l.mounted){const t=l.mounted(e,o,l.state);void 0!==t&&l.setState(t)}return b(l.element,e,!1),l.element}(t,i,s)),e&&Array.isArray(e.children)){const t=null===(n=e.props)||void 0===n?void 0:n._component;if(t){let i=0;e.children=e.children.map((s=>w(s,t,i++)))}else e.children=e.children.map((t=>w(t,i,s++)))}return e}const m=(t,i={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(i.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const s=i||{};this._shadowRoot=s.shadow?this.attachShadow({mode:"open"}):this;const n=s.observedAttributes||[],e=n.reduce(((t,i)=>{const s=i.toLowerCase();return s!==i&&(t[s]=i),t}),{});this._attrMap=t=>e[t]||t;const o={};Array.from(this.attributes).forEach((t=>o[this._attrMap(t.name)]=t.value)),n.forEach((t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(i){this.attributeChangedCallback(t,o[t],i)},configurable:!0,enumerable:!0})})),requestAnimationFrame((()=>{const i=this.children?Array.from(this.children):[];if(this._component=new t(Object.assign(Object.assign({},o),{children:i})).mount(this._shadowRoot,s),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,i,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==s.render&&this._component.run(".")}))}}disconnectedCallback(){var t,i,s,n;null===(i=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===i||i.call(t),null===(n=null===(s=this._component)||void 0===s?void 0:s.unmount)||void 0===n||n.call(s),this._component=null}attributeChangedCallback(t,s,n){if(this._component){const e=this._attrMap(t);this._component._props[e]=n,this._component.run("attributeChanged",e,s,n),n!==s&&!1!==i.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}};var $=(t,i,s)=>{"undefined"!=typeof customElements&&customElements.define(t,m(i,s))};const j={meta:new WeakMap,defineMetadata(t,i,s){this.meta.has(s)||this.meta.set(s,{}),this.meta.get(s)[t]=i},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,i){return i=Object.getPrototypeOf(i),this.meta.get(i)?this.meta.get(i)[t]:null}};function A(t,i={}){return(s,n,e)=>{const o=t?t.toString():n;return j.defineMetadata(`apprun-update:${o}`,{name:o,key:n,options:i},s),e}}function O(t,i={}){return function(s,n){const e=t?t.toString():n;j.defineMetadata(`apprun-update:${e}`,{name:e,key:n,options:i},s)}}function _(t,i){return function(s){return $(t,s,i),s}}const x=new Map;n.find("get-components")||n.on("get-components",(t=>t.components=x));const k=t=>t;class M{renderState(t,i=null){if(!this.view)return;let s=i||this.view(t);if(n.debug&&n.run("debug",{component:this,_:s?".":"-",state:t,vdom:s,el:this.element}),"object"!=typeof document)return;const e="string"==typeof this.element&&this.element?document.getElementById(this.element)||document.querySelector(this.element):this.element;if(!e)return;const o="_c";this.unload?e._component===this&&e.getAttribute(o)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),e.setAttribute(o,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(e)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[o]}))):e.removeAttribute&&e.removeAttribute(o),e._component=this,!i&&s&&(s=r(s,this),this.options.transition&&document&&document.startViewTransition?document.startViewTransition((()=>n.render(e,s,this))):n.render(e,s,this)),this.rendered&&this.rendered(this.state)}setState(t,i={render:!0,history:!1}){if(t instanceof Promise)Promise.resolve(t).then((s=>{this.setState(s,i),this._state=t}));else{if(this._state=t,null==t)return;this.state=t,!1!==i.render&&(i.transition&&document&&document.startViewTransition?document.startViewTransition((()=>this.renderState(t))):this.renderState(t)),!1!==i.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof i.callback&&i.callback(this.state)}}constructor(i,s,n,e){this.state=i,this.view=s,this.update=n,this.options=e,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,i)=>{if(this.mount(t,Object.assign({render:!0},i)),this.mounted&&"function"==typeof this.mounted){const t=this.mounted({},[],this.state);void 0!==t&&this.setState(t)}return this}}mount(t=null,i){var s,e;return console.assert(!this.element,"Component already mounted."),this.options=i=Object.assign(Object.assign({},this.options),i),this.element=t,this.global_event=i.global_event,this.enable_history=!!i.history,this.enable_history&&(this.on(i.history.prev||"history-prev",this._history_prev),this.on(i.history.next||"history-next",this._history_next)),i.route&&(this.update=this.update||{},this.update[i.route]||(this.update[i.route]=k)),this.add_actions(),this.state=null!==(e=null!==(s=this.state)&&void 0!==s?s:this.model)&&void 0!==e?e:{},"function"==typeof this.state&&(this.state=this.state()),this.setState(this.state,{render:!!i.render,history:!0}),n.debug&&(x.get(t)?x.get(t).push(this):x.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,i,s={}){i&&"function"==typeof i&&(s.global&&this._global_events.push(t),this.on(t,((...e)=>{n.debug&&n.run("debug",{component:this,_:">",event:t,p:e,current_state:this.state,options:s});const o=i(this.state,...e);n.debug&&n.run("debug",{component:this,_:"<",event:t,p:e,newState:o,state:this.state,options:s}),this.setState(o,s)}),s))}add_actions(){const t=this.update||{};j.getMetadataKeys(this).forEach((i=>{if(i.startsWith("apprun-update:")){const s=j.getMetadata(i,this);t[s.name]=[this[s.key].bind(this),s.options]}}));const i={};Array.isArray(t)?t.forEach((t=>{const[s,n,e]=t;s.toString().split(",").forEach((t=>i[t.trim()]=[n,e]))})):Object.keys(t).forEach((s=>{const n=t[s];("function"==typeof n||Array.isArray(n))&&s.split(",").forEach((t=>i[t.trim()]=n))})),i["."]||(i["."]=k),Object.keys(i).forEach((t=>{const s=i[t];"function"==typeof s?this.add_action(t,s):Array.isArray(s)&&this.add_action(t,s[0],s[1])}))}run(t,...i){if(this.state instanceof Promise)return Promise.resolve(this.state).then((s=>{this.state=s,this.run(t,...i)}));{const s=t.toString();return this.is_global_event(s)?n.run(s,...i):this._app.run(s,...i)}}on(t,i,s){const e=t.toString();return this._actions.push({name:e,fn:i}),this.is_global_event(e)?n.on(e,i,s):this._app.on(e,i,s)}runAsync(t,...i){const s=t.toString();return this.is_global_event(s)?n.runAsync(s,...i):this._app.runAsync(s,...i)}query(t,...i){return this.runAsync(t,...i)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:i,fn:s}=t;this.is_global_event(i)?n.off(i,s):this._app.off(i,s)}))}}M.t=!0;const E="//",T="///",S=t=>{if(t||(t="#"),t.startsWith("#")){const[i,...s]=t.split("/");n.run(i,...s)||n.run(T,i,...s),n.run(E,i,...s)}else if(t.startsWith("/")){const[i,s,...e]=t.split("/");n.run("/"+s,...e)||n.run(T,"/"+s,...e),n.run(E,"/"+s,...e)}else n.run(t)||n.run(T,t),n.run(E,t)};n.h=n.createElement=u,n.render=f,n.Fragment=h,n.webComponent=$,n.safeHTML=p,n.start=(t,i,s,n,e)=>{const o=Object.assign({render:!0,global_event:!0},e),r=new M(i,s,n);return e&&e.rendered&&(r.rendered=e.rendered),e&&e.mounted&&(r.mounted=e.mounted),r.start(t,o),r};const C=t=>{};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var N;n.on("$",C),n.on("debug",(t=>C)),n.on(E,C),n.on("#",C),n.route=S,n.on("route",(t=>n.route&&n.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{n.route===S&&(window.onpopstate=()=>S(location.hash),document.body.hasAttribute("apprun-no-init")||n["no-init-route"]||S(location.hash))})),"object"==typeof window&&(window.Component=M,window._React=window.React,window.React=n,window.on=O,window.customElement=_,window.safeHTML=p),n.use_render=(t,i=0)=>n.render=0===i?(i,s)=>t(s,i):(i,s)=>t(i,s),n.use_react=(t,i)=>{n.h=n.createElement=t.createElement,n.Fragment=t.Fragment,n.render=(t,s)=>i.render(s,t),t.version&&t.version.startsWith("18")&&(n.render=(t,s)=>{t&&s&&(t._root||(t._root=i.createRoot(t)),t._root.render(s))})};const L=window,U=L.trustedTypes,H=U?U.createPolicy("lit-html",{createHTML:t=>t}):void 0,P="$lit$",D=`lit$${(Math.random()+"").slice(9)}$`,I="?"+D,R=`<${I}>`,V=document,q=()=>V.createComment(""),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,W=Array.isArray,z="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,J=/>/g,K=RegExp(`>|${z}(?:([^\\s"'>=/]+)(${z}*=${z}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),B=/'/g,Q=/"/g,X=/^(?:script|style|textarea|title)$/i,Y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),tt=Y(1),it=Y(2),st=Symbol.for("lit-noChange"),nt=Symbol.for("lit-nothing"),et=new WeakMap,ot=V.createTreeWalker(V,129,null,!1);function rt(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==H?H.createHTML(i):i}const ht=(t,i)=>{const s=t.length-1,n=[];let e,o=2===i?"<svg>":"",r=F;for(let i=0;i<s;i++){const s=t[i];let h,c,l=-1,u=0;for(;u<s.length&&(r.lastIndex=u,c=r.exec(s),null!==c);)u=r.lastIndex,r===F?"!--"===c[1]?r=Z:void 0!==c[1]?r=J:void 0!==c[2]?(X.test(c[2])&&(e=RegExp("</"+c[2],"g")),r=K):void 0!==c[3]&&(r=K):r===K?">"===c[0]?(r=null!=e?e:F,l=-1):void 0===c[1]?l=-2:(l=r.lastIndex-c[2].length,h=c[1],r=void 0===c[3]?K:'"'===c[3]?Q:B):r===Q||r===B?r=K:r===Z||r===J?r=F:(r=K,e=void 0);const d=r===K&&t[i+1].startsWith("/>")?" ":"";o+=r===F?s+R:l>=0?(n.push(h),s.slice(0,l)+P+s.slice(l)+D+d):s+D+(-2===l?(n.push(void 0),i):d)}return[rt(t,o+(t[s]||"<?>")+(2===i?"</svg>":"")),n]};class ct{constructor({strings:t,_$litType$:i},s){let n;this.parts=[];let e=0,o=0;const r=t.length-1,h=this.parts,[c,l]=ht(t,i);if(this.el=ct.createElement(c,s),ot.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(n=ot.nextNode())&&h.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const i of n.getAttributeNames())if(i.endsWith(P)||i.startsWith(D)){const s=l[o++];if(t.push(i),void 0!==s){const t=n.getAttribute(s.toLowerCase()+P).split(D),i=/([.?@])?(.*)/.exec(s);h.push({type:1,index:e,name:i[2],strings:t,ctor:"."===i[1]?at:"?"===i[1]?pt:"@"===i[1]?yt:ft})}else h.push({type:6,index:e})}for(const i of t)n.removeAttribute(i)}if(X.test(n.tagName)){const t=n.textContent.split(D),i=t.length-1;if(i>0){n.textContent=U?U.emptyScript:"";for(let s=0;s<i;s++)n.append(t[s],q()),ot.nextNode(),h.push({type:2,index:++e});n.append(t[i],q())}}}else if(8===n.nodeType)if(n.data===I)h.push({type:2,index:e});else{let t=-1;for(;-1!==(t=n.data.indexOf(D,t+1));)h.push({type:7,index:e}),t+=D.length-1}e++}}static createElement(t,i){const s=V.createElement("template");return s.innerHTML=t,s}}function lt(t,i,s=t,n){var e,o,r,h;if(i===st)return i;let c=void 0!==n?null===(e=s._$Co)||void 0===e?void 0:e[n]:s._$Cl;const l=G(i)?void 0:i._$litDirective$;return(null==c?void 0:c.constructor)!==l&&(null===(o=null==c?void 0:c._$AO)||void 0===o||o.call(c,!1),void 0===l?c=void 0:(c=new l(t),c._$AT(t,s,n)),void 0!==n?(null!==(r=(h=s)._$Co)&&void 0!==r?r:h._$Co=[])[n]=c:s._$Cl=c),void 0!==c&&(i=lt(t,c._$AS(t,i.values),c,n)),i}class ut{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:n}=this._$AD,e=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:V).importNode(s,!0);ot.currentNode=e;let o=ot.nextNode(),r=0,h=0,c=n[0];for(;void 0!==c;){if(r===c.index){let i;2===c.type?i=new dt(o,o.nextSibling,this,t):1===c.type?i=new c.ctor(o,c.name,c.strings,this,t):6===c.type&&(i=new gt(o,this,t)),this._$AV.push(i),c=n[++h]}r!==(null==c?void 0:c.index)&&(o=ot.nextNode(),r++)}return ot.currentNode=V,e}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class dt{constructor(t,i,s,n){var e;this.type=2,this._$AH=nt,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=n,this._$Cp=null===(e=null==n?void 0:n.isConnected)||void 0===e||e}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=lt(this,t,i),G(t)?t===nt||null==t||""===t?(this._$AH!==nt&&this._$AR(),this._$AH=nt):t!==this._$AH&&t!==st&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>W(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==nt&&G(this._$AH)?this._$AA.nextSibling.data=t:this.$(V.createTextNode(t)),this._$AH=t}g(t){var i;const{values:s,_$litType$:n}=t,e="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=ct.createElement(rt(n.h,n.h[0]),this.options)),n);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===e)this._$AH.v(s);else{const t=new ut(e,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t}}_$AC(t){let i=et.get(t.strings);return void 0===i&&et.set(t.strings,i=new ct(t)),i}T(t){W(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const e of t)n===i.length?i.push(s=new dt(this.k(q()),this.k(q()),this,this.options)):s=i[n],s._$AI(e),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class ft{constructor(t,i,s,n,e){this.type=1,this._$AH=nt,this._$AN=void 0,this.element=t,this.name=i,this._$AM=n,this.options=e,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=nt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,n){const e=this.strings;let o=!1;if(void 0===e)t=lt(this,t,i,0),o=!G(t)||t!==this._$AH&&t!==st,o&&(this._$AH=t);else{const n=t;let r,h;for(t=e[0],r=0;r<e.length-1;r++)h=lt(this,n[s+r],i,r),h===st&&(h=this._$AH[r]),o||(o=!G(h)||h!==this._$AH[r]),h===nt?t=nt:t!==nt&&(t+=(null!=h?h:"")+e[r+1]),this._$AH[r]=h}o&&!n&&this.j(t)}j(t){t===nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class at extends ft{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===nt?void 0:t}}const vt=U?U.emptyScript:"";class pt extends ft{constructor(){super(...arguments),this.type=4}j(t){t&&t!==nt?this.element.setAttribute(this.name,vt):this.element.removeAttribute(this.name)}}class yt extends ft{constructor(t,i,s,n,e){super(t,i,s,n,e),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=lt(this,t,i,0))&&void 0!==s?s:nt)===st)return;const n=this._$AH,e=t===nt&&n!==nt||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==nt&&(n===nt||e);e&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class gt{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){lt(this,t)}}const bt=L.litHtmlPolyfillSupport;null==bt||bt(ct,dt),(null!==(N=L.litHtmlVersions)&&void 0!==N?N:L.litHtmlVersions=[]).push("2.8.0");const wt=(t,i,s)=>{var n,e;const o=null!==(n=null==s?void 0:s.renderBefore)&&void 0!==n?n:i;let r=o._$litPart$;if(void 0===r){const t=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:null;o._$litPart$=r=new dt(i.insertBefore(q(),t),t,void 0,null!=s?s:{})}return r._$AI(t),r
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},mt=2,$t=5,jt=t=>(...i)=>({_$litDirective$:t,values:i});class At{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,s){this._$Ct=t,this._$AM=i,this._$Ci=s}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class Ot extends At{constructor(t){if(super(t),this.et=nt,t.type!==mt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===nt||null==t)return this.ft=void 0,this.et=t;if(t===st)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const i=[t];return i.raw=i,this.ft={_$litType$:this.constructor.resultType,strings:i,values:[]}}}Ot.directiveName="unsafeHTML",Ot.resultType=1;const _t=jt(Ot);function xt(t,i,s){i&&("string"==typeof i?(t._$litPart$||t.replaceChildren(),wt(tt`${_t(i)}`,t)):"_$litType$"in i?(t._$litPart$||t.replaceChildren(),wt(i,t)):(f(t,i,s),t._$litPart$=void 0))}const kt=jt(class extends At{constructor(t){if(super(t),t.type!==$t)throw new Error("${run} can only be used in event handlers")}update(t,i){let{element:s,name:e}=t;const o=()=>{let t=s._component;for(;!t&&s;)s=s.parentElement,t=s&&s._component;return console.assert(!!t,"Component not found."),t},[r,...h]=i;return"string"==typeof r?s[`on${e}`]=t=>{const i=o();i?i.run(r,...h,t):n.run(r,...h,t)}:"function"==typeof r&&(s[`on${e}`]=t=>o().setState(r(o().state,...h,t))),this.render()}render(){return st}});n.createElement=u,n.render=xt,n.Fragment=h,"object"==typeof window&&(window.React=window._React||n,window.html=tt,window.svg=it,window.run=kt);export{M as Component,T as ROUTER_404_EVENT,E as ROUTER_EVENT,n as app,_ as customElement,n as default,A as event,tt as html,O as on,xt as render,kt as run,p as safeHTML,it as svg,A as update};
//# sourceMappingURL=apprun-html.esm.js.map
