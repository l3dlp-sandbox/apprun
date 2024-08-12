class t{constructor(){this._events={}}on(t,n,i={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:n,options:i})}off(t,n){const i=this._events[t]||[];this._events[t]=i.filter((t=>t.fn!==n))}find(t){return this._events[t]}run(t,...n){const i=this.getSubscribers(t,this._events);return console.assert(i&&i.length>0,"No subscriber for event: "+t),i.forEach((i=>{const{fn:s,options:e}=i;return e.delay?this.delay(t,s,n,e):Object.keys(e).length>0?s.apply(this,[...n,e]):s.apply(this,n),!i.options.once})),i.length}once(t,n,i={}){this.on(t,n,Object.assign(Object.assign({},i),{once:!0}))}delay(t,n,i,s){s._t&&clearTimeout(s._t),s._t=setTimeout((()=>{clearTimeout(s._t),Object.keys(s).length>0?n.apply(this,[...i,s]):n.apply(this,i)}),s.delay)}runAsync(t,...n){const i=this.getSubscribers(t,this._events);console.assert(i&&i.length>0,"No subscriber for event: "+t);const s=i.map((t=>{const{fn:i,options:s}=t;return Object.keys(s).length>0?i.apply(this,[...n,s]):i.apply(this,n)}));return Promise.all(s)}query(t,...n){return this.query(t,...n)}getSubscribers(t,n){const i=n[t]||[];return n[t]=i.filter((t=>!t.options.once)),Object.keys(n).filter((n=>n.endsWith("*")&&t.startsWith(n.replace("*","")))).sort(((t,n)=>n.length-t.length)).forEach((s=>i.push(...n[s].map((n=>Object.assign(Object.assign({},n),{options:Object.assign(Object.assign({},n.options),{event:t})})))))),i}}let n;const i="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;i.app&&i._AppRunVersions?n=i.app:(n=new t,i.app=n,i._AppRunVersions="AppRun-3");var s=n;const e=(t,n)=>(n?t.state[n]:t.state)||"",o=(t,n,i)=>{if(n){const s=t.state||{};s[n]=i,t.setState(s)}else t.setState(i)},r=(t,n)=>{if(Array.isArray(t))return t.map((t=>r(t,n)));{let{tag:i,props:h,children:l}=t;return i?(h&&Object.keys(h).forEach((t=>{t.startsWith("$")&&(((t,n,i,r)=>{if(t.startsWith("$on")){const i=n[t];if(t=t.substring(1),"boolean"==typeof i)n[t]=n=>r.run?r.run(t,n):s.run(t,n);else if("string"==typeof i)n[t]=t=>r.run?r.run(i,t):s.run(i,t);else if("function"==typeof i)n[t]=t=>r.setState(i(r.state,t));else if(Array.isArray(i)){const[e,...o]=i;"string"==typeof e?n[t]=t=>r.run?r.run(e,...o,t):s.run(e,...o,t):"function"==typeof e&&(n[t]=t=>r.setState(e(r.state,...o,t)))}}else if("$bind"===t){const s=n.type||"text",h="string"==typeof n[t]?n[t]:n.name;if("input"===i)switch(s){case"checkbox":n.checked=e(r,h),n.onclick=t=>o(r,h||t.target.name,t.target.checked);break;case"radio":n.checked=e(r,h)===n.value,n.onclick=t=>o(r,h||t.target.name,t.target.value);break;case"number":case"range":n.value=e(r,h),n.oninput=t=>o(r,h||t.target.name,Number(t.target.value));break;default:n.value=e(r,h),n.oninput=t=>o(r,h||t.target.name,t.target.value)}else"select"===i?(n.value=e(r,h),n.onchange=t=>{t.target.multiple||o(r,h||t.target.name,t.target.value)}):"option"===i?(n.selected=e(r,h),n.onclick=t=>o(r,h||t.target.name,t.target.selected)):"textarea"===i&&(n.innerHTML=e(r,h),n.oninput=t=>o(r,h||t.target.name,t.target.value))}else s.run("$",{key:t,tag:i,props:n,component:r})})(t,h,i,n),delete h[t])})),l&&(l=r(l,n)),{tag:i,props:h,children:l}):t}};function h(t,...n){return c(n)}const l="_props";function c(t){const n=[],i=t=>{null!=t&&""!==t&&!1!==t&&n.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>i(t))):i(t)})),n}function u(t,n,...i){const s=c(i);if("string"==typeof t)return{tag:t,props:n,children:s};if(Array.isArray(t))return t;if(void 0===t&&i)return s;if(Object.getPrototypeOf(t).t)return{tag:t,props:n,children:s};if("function"==typeof t)return t(n,s);throw new Error(`Unknown tag in vdom ${t}`)}const a=new WeakMap,d=(t,n,i={})=>{if(null==n||!1===n)return;!function(t,n,i={}){if(null==n||!1===n)return;if(n=g(n,i),!t)return;const s="SVG"===t.nodeName;Array.isArray(n)?f(t,n,s):f(t,[n],s)}("string"==typeof t&&t?document.getElementById(t)||document.querySelector(t):t,n=r(n,i),i)};function p(t,n,i){3!==n._op&&(i=i||"svg"===n.tag,!function(t,n){const i=t.nodeName,s=`${n.tag||""}`;return i.toUpperCase()===s.toUpperCase()}(t,n)?t.parentNode.replaceChild(b(n,i),t):(!(2&n._op)&&f(t,n.children,i),!(1&n._op)&&m(t,n.props,i)))}function f(t,n,i){var s,e;const o=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0,r=(null==n?void 0:n.length)||0,h=Math.min(o,r);for(let s=0;s<h;s++){const e=n[s];if(3===e._op)continue;const o=t.childNodes[s];if("string"==typeof e)o.textContent!==e&&(3===o.nodeType?o.nodeValue=e:t.replaceChild(y(e),o));else if(e instanceof HTMLElement||e instanceof SVGElement)t.insertBefore(e,o);else{const n=e.props&&e.props.key;if(n)if(o.key===n)p(t.childNodes[s],e,i);else{const r=a[n];if(r){const n=r.nextSibling;t.insertBefore(r,o),n?t.insertBefore(o,n):t.appendChild(o),p(t.childNodes[s],e,i)}else t.replaceChild(b(e,i),o)}else p(t.childNodes[s],e,i)}}let l=(null===(e=t.childNodes)||void 0===e?void 0:e.length)||0;for(;l>h;)t.removeChild(t.lastChild),l--;if(r>h){const s=document.createDocumentFragment();for(let t=h;t<n.length;t++)s.appendChild(b(n[t],i));t.appendChild(s)}}const v=t=>{const n=document.createElement("section");return n.insertAdjacentHTML("afterbegin",t),Array.from(n.children)};function y(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const n=document.createElement("div");return n.insertAdjacentHTML("afterbegin",t.substring(6)),n}return document.createTextNode(null!=t?t:"")}function b(t,n){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return y(t);if(!t.tag||"function"==typeof t.tag)return y(JSON.stringify(t));const i=(n=n||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return m(i,t.props,n),t.children&&t.children.forEach((t=>i.appendChild(b(t,n)))),i}function m(t,n,i){const s=t[l]||{};n=function(t,n){n.class=n.class||n.className,delete n.className;const i={};return t&&Object.keys(t).forEach((t=>i[t]=null)),n&&Object.keys(n).forEach((t=>i[t]=n[t])),i}(s,n||{}),t[l]=n;for(const s in n){const e=n[s];if(s.startsWith("data-")){const n=s.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[n]!==e&&(e||""===e?t.dataset[n]=e:delete t.dataset[n])}else if("style"===s)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof e)t.style.cssText=e;else for(const n in e)t.style[n]!==e[n]&&(t.style[n]=e[n]);else if(s.startsWith("xlink")){const n=s.replace("xlink","").toLowerCase();null==e||!1===e?t.removeAttributeNS("http://www.w3.org/1999/xlink",n):t.setAttributeNS("http://www.w3.org/1999/xlink",n,e)}else s.startsWith("on")?e&&"function"!=typeof e?"string"==typeof e&&(e?t.setAttribute(s,e):t.removeAttribute(s)):t[s]=e:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-|^for$/g.test(s)||i?t.getAttribute(s)!==e&&(e?t.setAttribute(s,e):t.removeAttribute(s)):t[s]!==e&&(t[s]=e);"key"===s&&e&&(a[e]=t)}n&&"function"==typeof n.ref&&window.requestAnimationFrame((()=>n.ref(t)))}function g(t,n,i=0){var s;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>g(t,n,i++)));let e=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(e=function(t,n,i){const{tag:s,props:e,children:o}=t;let r=`_${i}`,h=e&&e.id;h?r=h:h=`_${i}${Date.now()}`;let l="section";e&&e.as&&(l=e.as,delete e.as),n.i||(n.i={});let c=n.i[r];if(c&&c instanceof s&&c.element)c.renderState(c.state);else{const t=document.createElement(l);c=n.i[r]=new s(Object.assign(Object.assign({},e),{children:o})).mount(t,{render:!0})}if(c.mounted){const t=c.mounted(e,o,c.state);void 0!==t&&c.setState(t)}return m(c.element,e,!1),c.element}(t,n,i)),e&&Array.isArray(e.children)){const t=null===(s=e.props)||void 0===s?void 0:s._component;if(t){let n=0;e.children=e.children.map((i=>g(i,t,n++)))}else e.children=e.children.map((t=>g(t,n,i++)))}return e}const w=(t,n={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(n.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const i=n||{};this._shadowRoot=i.shadow?this.attachShadow({mode:"open"}):this;const s=i.observedAttributes||[],e=s.reduce(((t,n)=>{const i=n.toLowerCase();return i!==n&&(t[i]=n),t}),{});this._attrMap=t=>e[t]||t;const o={};Array.from(this.attributes).forEach((t=>o[this._attrMap(t.name)]=t.value)),s.forEach((t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(n){this.attributeChangedCallback(t,o[t],n)},configurable:!0,enumerable:!0})})),requestAnimationFrame((()=>{const n=this.children?Array.from(this.children):[];if(n.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},o),{children:n})).mount(this._shadowRoot,i),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,n,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==i.render&&this._component.run(".")}))}}disconnectedCallback(){var t,n,i,s;null===(n=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===n||n.call(t),null===(s=null===(i=this._component)||void 0===i?void 0:i.unmount)||void 0===s||s.call(i),this._component=null}attributeChangedCallback(t,i,s){if(this._component){const e=this._attrMap(t);this._component._props[e]=s,this._component.run("attributeChanged",e,i,s),s!==i&&!1!==n.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}};var $=(t,n,i)=>{"undefined"!=typeof customElements&&customElements.define(t,w(n,i))};const j={meta:new WeakMap,defineMetadata(t,n,i){this.meta.has(i)||this.meta.set(i,{}),this.meta.get(i)[t]=n},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,n){return n=Object.getPrototypeOf(n),this.meta.get(n)?this.meta.get(n)[t]:null}};const x=new Map;s.find("get-components")||s.on("get-components",(t=>t.components=x));const A=t=>t;class O{renderState(t,n=null){if(!this.view)return;let i=n||this.view(t);if(s.debug&&s.run("debug",{component:this,_:i?".":"-",state:t,vdom:i,el:this.element}),"object"!=typeof document)return;const e="string"==typeof this.element&&this.element?document.getElementById(this.element)||document.querySelector(this.element):this.element;if(e){const t="_c";this.unload?e._component===this&&e.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),e.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(e)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):e.removeAttribute&&e.removeAttribute(t),e._component=this}!n&&i&&(i=r(i,this),this.options.transition&&document&&document.startViewTransition?document.startViewTransition((()=>s.render(e,i,this))):s.render(e,i,this)),this.rendered&&this.rendered(this.state)}setState(t,n={render:!0,history:!1}){if(t instanceof Promise)Promise.resolve(t).then((i=>{this.setState(i,n),this._state=t}));else{if(this._state=t,null==t)return;this.state=t,!1!==n.render&&(n.transition&&document&&document.startViewTransition?document.startViewTransition((()=>this.renderState(t))):this.renderState(t)),!1!==n.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof n.callback&&n.callback(this.state)}}constructor(n,i,s,e){this.state=n,this.view=i,this.update=s,this.options=e,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,n)=>{if(this.mount(t,Object.assign({render:!0},n)),this.mounted&&"function"==typeof this.mounted){const t=this.mounted({},[],this.state);void 0!==t&&this.setState(t)}return this}}mount(t=null,n){var i,e;return console.assert(!this.element,"Component already mounted."),this.options=n=Object.assign(Object.assign({},this.options),n),this.element=t,this.global_event=n.global_event,this.enable_history=!!n.history,this.enable_history&&(this.on(n.history.prev||"history-prev",this._history_prev),this.on(n.history.next||"history-next",this._history_next)),n.route&&(this.update=this.update||{},this.update[n.route]||(this.update[n.route]=A)),this.add_actions(),this.state=null!==(e=null!==(i=this.state)&&void 0!==i?i:this.model)&&void 0!==e?e:{},"function"==typeof this.state&&(this.state=this.state()),this.setState(this.state,{render:!!n.render,history:!0}),s.debug&&(x.get(t)?x.get(t).push(this):x.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,n,i={}){n&&"function"==typeof n&&(i.global&&this._global_events.push(t),this.on(t,((...e)=>{s.debug&&s.run("debug",{component:this,_:">",event:t,p:e,current_state:this.state,options:i});const o=n(this.state,...e);s.debug&&s.run("debug",{component:this,_:"<",event:t,p:e,newState:o,state:this.state,options:i}),this.setState(o,i)}),i))}add_actions(){const t=this.update||{};j.getMetadataKeys(this).forEach((n=>{if(n.startsWith("apprun-update:")){const i=j.getMetadata(n,this);t[i.name]=[this[i.key].bind(this),i.options]}}));const n={};Array.isArray(t)?t.forEach((t=>{const[i,s,e]=t;i.toString().split(",").forEach((t=>n[t.trim()]=[s,e]))})):Object.keys(t).forEach((i=>{const s=t[i];("function"==typeof s||Array.isArray(s))&&i.split(",").forEach((t=>n[t.trim()]=s))})),n["."]||(n["."]=A),Object.keys(n).forEach((t=>{const i=n[t];"function"==typeof i?this.add_action(t,i):Array.isArray(i)&&this.add_action(t,i[0],i[1])}))}run(t,...n){if(this.state instanceof Promise)return Promise.resolve(this.state).then((i=>{this.state=i,this.run(t,...n)}));{const i=t.toString();return this.is_global_event(i)?s.run(i,...n):this._app.run(i,...n)}}on(t,n,i){const e=t.toString();return this._actions.push({name:e,fn:n}),this.is_global_event(e)?s.on(e,n,i):this._app.on(e,n,i)}runAsync(t,...n){const i=t.toString();return this.is_global_event(i)?s.runAsync(i,...n):this._app.runAsync(i,...n)}query(t,...n){return this.runAsync(t,...n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:n,fn:i}=t;this.is_global_event(n)?s.off(n,i):this._app.off(n,i)}))}}O.t=!0;const _="//",k="///",T=t=>{if(t||(t="#"),t.startsWith("#")){const[n,...i]=t.split("/");s.run(n,...i)||s.run(k,n,...i),s.run(_,n,...i)}else if(t.startsWith("/")){const[n,i,...e]=t.split("/");s.run("/"+i,...e)||s.run(k,"/"+i,...e),s.run(_,"/"+i,...e)}else s.run(t)||s.run(k,t),s.run(_,t)};s.h=s.createElement=u,s.render=d,s.Fragment=h,s.webComponent=$,s.safeHTML=v,s.start=(t,n,i,s,e)=>{const o=Object.assign({render:!0,global_event:!0},e),r=new O(n,i,s);return e&&e.rendered&&(r.rendered=e.rendered),e&&e.mounted&&(r.mounted=e.mounted),r.start(t,o),r};const C=t=>{};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var M;s.on("$",C),s.on("debug",(t=>C)),s.on(_,C),s.on("#",C),s.route=T,s.on("route",(t=>s.route&&s.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{s.route===T&&(window.onpopstate=()=>T(location.hash),document.body.hasAttribute("apprun-no-init")||s["no-init-route"]||T(location.hash))})),"object"==typeof window&&(window.Component=O,window._React=window.React,window.React=s,window.on=function(t,n={}){return function(i,s){const e=t?t.toString():s;j.defineMetadata(`apprun-update:${e}`,{name:e,key:s,options:n},i)}},window.customElement=function(t,n){return function(i){return $(t,i,n),i}},window.safeHTML=v),s.use_render=(t,n=0)=>s.render=0===n?(n,i)=>t(i,n):(n,i)=>t(n,i),s.use_react=t=>{s.render=(n,i)=>{n&&i&&(n._root||(n._root=t(n)),n._root.render(i))}};const E=globalThis.trustedTypes,S=E?E.createPolicy("lit-html",{createHTML:t=>t}):void 0,P=`lit$${(Math.random()+"").slice(9)}$`,N="?"+P,U=`<${N}>`,z=document,B=(t="")=>z.createComment(t),L=t=>null===t||"object"!=typeof t&&"function"!=typeof t,D=Array.isArray,H=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,R=/-->/g,q=/>/g,F=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,I=/'/g,V=/"/g,G=/^(?:script|style|textarea|title)$/i,W=t=>(n,...i)=>({_$litType$:t,strings:n,values:i}),X=W(1),Z=W(2),J=Symbol.for("lit-noChange"),K=Symbol.for("lit-nothing"),Y=new WeakMap,Q=(t,n,i)=>{var s,e;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:n;let r=o._$litPart$;if(void 0===r){const t=null!==(e=null==i?void 0:i.renderBefore)&&void 0!==e?e:null;o._$litPart$=r=new ot(n.insertBefore(B(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r},tt=z.createTreeWalker(z,129,null,!1),nt=(t,n)=>{const i=t.length-1,s=[];let e,o=2===n?"<svg>":"",r=H;for(let n=0;n<i;n++){const i=t[n];let h,l,c=-1,u=0;for(;u<i.length&&(r.lastIndex=u,l=r.exec(i),null!==l);)u=r.lastIndex,r===H?"!--"===l[1]?r=R:void 0!==l[1]?r=q:void 0!==l[2]?(G.test(l[2])&&(e=RegExp("</"+l[2],"g")),r=F):void 0!==l[3]&&(r=F):r===F?">"===l[0]?(r=null!=e?e:H,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?F:'"'===l[3]?V:I):r===V||r===I?r=F:r===R||r===q?r=H:(r=F,e=void 0);const a=r===F&&t[n+1].startsWith("/>")?" ":"";o+=r===H?i+U:c>=0?(s.push(h),i.slice(0,c)+"$lit$"+i.slice(c)+P+a):i+P+(-2===c?(s.push(void 0),n):a)}const h=o+(t[i]||"<?>")+(2===n?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==S?S.createHTML(h):h,s]};class it{constructor({strings:t,_$litType$:n},i){let s;this.parts=[];let e=0,o=0;const r=t.length-1,h=this.parts,[l,c]=nt(t,n);if(this.el=it.createElement(l,i),tt.currentNode=this.el.content,2===n){const t=this.el.content,n=t.firstChild;n.remove(),t.append(...n.childNodes)}for(;null!==(s=tt.nextNode())&&h.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const n of s.getAttributeNames())if(n.endsWith("$lit$")||n.startsWith(P)){const i=c[o++];if(t.push(n),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(P),n=/([.?@])?(.*)/.exec(i);h.push({type:1,index:e,name:n[2],strings:t,ctor:"."===n[1]?ht:"?"===n[1]?ct:"@"===n[1]?ut:rt})}else h.push({type:6,index:e})}for(const n of t)s.removeAttribute(n)}if(G.test(s.tagName)){const t=s.textContent.split(P),n=t.length-1;if(n>0){s.textContent=E?E.emptyScript:"";for(let i=0;i<n;i++)s.append(t[i],B()),tt.nextNode(),h.push({type:2,index:++e});s.append(t[n],B())}}}else if(8===s.nodeType)if(s.data===N)h.push({type:2,index:e});else{let t=-1;for(;-1!==(t=s.data.indexOf(P,t+1));)h.push({type:7,index:e}),t+=P.length-1}e++}}static createElement(t,n){const i=z.createElement("template");return i.innerHTML=t,i}}function st(t,n,i=t,s){var e,o,r,h;if(n===J)return n;let l=void 0!==s?null===(e=i._$Cl)||void 0===e?void 0:e[s]:i._$Cu;const c=L(n)?void 0:n._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(h=i)._$Cl)&&void 0!==r?r:h._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(n=st(t,l._$AS(t,n.values),l,s)),n}class et{constructor(t,n){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var n;const{el:{content:i},parts:s}=this._$AD,e=(null!==(n=null==t?void 0:t.creationScope)&&void 0!==n?n:z).importNode(i,!0);tt.currentNode=e;let o=tt.nextNode(),r=0,h=0,l=s[0];for(;void 0!==l;){if(r===l.index){let n;2===l.type?n=new ot(o,o.nextSibling,this,t):1===l.type?n=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(n=new at(o,this,t)),this.v.push(n),l=s[++h]}r!==(null==l?void 0:l.index)&&(o=tt.nextNode(),r++)}return e}m(t){let n=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class ot{constructor(t,n,i,s){var e;this.type=2,this._$AH=K,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=s,this._$Cg=null===(e=null==s?void 0:s.isConnected)||void 0===e||e}get _$AU(){var t,n;return null!==(n=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==n?n:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return void 0!==n&&11===t.nodeType&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=st(this,t,n),L(t)?t===K||null==t||""===t?(this._$AH!==K&&this._$AR(),this._$AH=K):t!==this._$AH&&t!==J&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var n;return D(t)||"function"==typeof(null===(n=t)||void 0===n?void 0:n[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==K&&L(this._$AH)?this._$AA.nextSibling.data=t:this.k(z.createTextNode(t)),this._$AH=t}T(t){var n;const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=it.createElement(s.h,this.options)),s);if((null===(n=this._$AH)||void 0===n?void 0:n._$AD)===e)this._$AH.m(i);else{const t=new et(e,this),n=t.p(this.options);t.m(i),this.k(n),this._$AH=t}}_$AC(t){let n=Y.get(t.strings);return void 0===n&&Y.set(t.strings,n=new it(t)),n}S(t){D(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,s=0;for(const e of t)s===n.length?n.push(i=new ot(this.A(B()),this.A(B()),this,this.options)):i=n[s],i._$AI(e),s++;s<n.length&&(this._$AR(i&&i._$AB.nextSibling,s),n.length=s)}_$AR(t=this._$AA.nextSibling,n){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,n);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var n;void 0===this._$AM&&(this._$Cg=t,null===(n=this._$AP)||void 0===n||n.call(this,t))}}class rt{constructor(t,n,i,s,e){this.type=1,this._$AH=K,this._$AN=void 0,this.element=t,this.name=n,this._$AM=s,this.options=e,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=K}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,i,s){const e=this.strings;let o=!1;if(void 0===e)t=st(this,t,n,0),o=!L(t)||t!==this._$AH&&t!==J,o&&(this._$AH=t);else{const s=t;let r,h;for(t=e[0],r=0;r<e.length-1;r++)h=st(this,s[i+r],n,r),h===J&&(h=this._$AH[r]),o||(o=!L(h)||h!==this._$AH[r]),h===K?t=K:t!==K&&(t+=(null!=h?h:"")+e[r+1]),this._$AH[r]=h}o&&!s&&this.C(t)}C(t){t===K?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ht extends rt{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===K?void 0:t}}const lt=E?E.emptyScript:"";class ct extends rt{constructor(){super(...arguments),this.type=4}C(t){t&&t!==K?this.element.setAttribute(this.name,lt):this.element.removeAttribute(this.name)}}class ut extends rt{constructor(t,n,i,s,e){super(t,n,i,s,e),this.type=5}_$AI(t,n=this){var i;if((t=null!==(i=st(this,t,n,0))&&void 0!==i?i:K)===J)return;const s=this._$AH,e=t===K&&s!==K||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==K&&(s===K||e);e&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class at{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const dt=window.litHtmlPolyfillSupport;null==dt||dt(it,ot),(null!==(M=globalThis.litHtmlVersions)&&void 0!==M?M:globalThis.litHtmlVersions=[]).push("2.2.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pt=2,ft=5,vt=t=>(...n)=>({_$litDirective$:t,values:n});class yt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class bt extends yt{constructor(t){if(super(t),this.it=K,t.type!==pt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===K||null==t)return this.ft=void 0,this.it=t;if(t===J)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const n=[t];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}bt.directiveName="unsafeHTML",bt.resultType=1;const mt=vt(bt);const gt=vt(class extends yt{constructor(t){if(super(t),t.type!==ft)throw new Error("${run} can only be used in event handlers")}update(t,n){let{element:i,name:e}=t;const o=()=>{let t=i._component;for(;!t&&i;)i=i.parentElement,t=i&&i._component;return console.assert(!!t,"Component not found."),t},[r,...h]=n;return"string"==typeof r?i[`on${e}`]=t=>{const n=o();n?n.run(r,...h,t):s.run(r,...h,t)}:"function"==typeof r&&(i[`on${e}`]=t=>o().setState(r(o().state,...h,t))),this.render()}render(){return J}});s.createElement=u,s.render=function(t,n,i){n&&("string"==typeof n?(t._$litPart$||t.replaceChildren(),Q(X`${mt(n)}`,t)):"_$litType$"in n?(t._$litPart$||t.replaceChildren(),Q(n,t)):(d(t,n,i),t._$litPart$=void 0))},s.Fragment=h,"object"==typeof window&&(window.React=window._React||s,window.html=X,window.svg=Z,window.run=gt);const wt=(t,n,i,s)=>{if(!n||!i)return;const e=t=>{var i,s;const e=n.cloneNode();null===(i=n.parentNode)||void 0===i||i.replaceChild(e,n);const o=null===(s=(n=e).contentWindow)||void 0===s?void 0:s.document;o&&(o.open(),t.indexOf("<html")>=0?o.write(t):o.write((t=>`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.1.2/custom-elements.min.js"><\/script>\n  <title>AppRun Playground</title>\n  <style>\n    body {\n      font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;\n      margin: 2em;\n    }\n  </style>\n  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n  <script src="https://unpkg.com/apprun/dist/apprun-html.js"><\/script>\n</head>\n<body>\n<script>\n  Babel.registerPlugin("d", [Babel.availablePlugins["proposal-decorators"], {legacy: true}]);\n  Babel.registerPlugin("c", [Babel.availablePlugins["proposal-class-properties"], {loose: true}]);\n  Babel.registerPlugin("b", [Babel.availablePlugins["proposal-private-methods"], {loose: true}]);\n<\/script>\n<script type="text/babel" data-plugins="d, c, b">\n  ${t}\n<\/script>\n</body>\n</html>`)(t)),o.close())};e(i),!s&&t&&"TEXTAREA"===t.nodeName&&("undefined"==typeof CodeMirror?t.onkeyup=()=>e(t.value):t.editor||(t.editor=CodeMirror.fromTextArea(t,{lineNumbers:!0,mode:"jsx"}),t.editor.on("change",(t=>e(t.getValue())))))};s.webComponent("apprun-play",class extends O{constructor(){super(...arguments),this.view=t=>{const n=t["code-element"],i=this.element;let s,e;return s=n?document.querySelector(n):i.previousElementSibling||i.parentElement.previousElementSibling,e=(null==s?void 0:s.innerText)||(null==s?void 0:s.value)||t.code,this.state.code_area=s,this.state.code=e,e?`<div class="toolbox">\n        ${!t.hide_button&&'<a class="button" onclick="app.run("@show-popup")" >Try the Code</a>'}\n      </div>`:"<div>AppRun Play cannot find code to run, please set code-element selector.</div>"},this.rendered=({style:t,hide_src:n,code_area:i,code:s})=>{if(!s)return;if(!document.getElementById("play-popup")){document.body.insertAdjacentHTML("beforeend",'<div id="play-popup" class="overlay">\n<style id="apprun-play-style">\n.apprun-play .col {\n  height: 100%;\n  flex: 1;\n}\n.apprun-preview {\n  width: 100%\n}\n.apprun-play .editor, .apprun-play .preview {\n  display: inline-block;\n  width: calc(100% - 20px);\n  height: calc(100% - 10px);\n}\n\na.button {\n  font-size: .8em;\n  padding: 10px;\n  cursor: pointer;\n  color: var(--md-primary-bg-color);\n  background: var(--md-primary-fg-color)\n}\na.button:hover {\n  color: var(--md-primary-fg-color);\n  background: var(--md-primary-bg-color)\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  visibility: hidden;\n  opacity: 0;\n  z-index: 999;\n}\n.overlay.show {\n  visibility: visible;\n  opacity: 1;\n}\n\n.popup {\n  margin: 80px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 3px;\n  position: relative;\n  width: 90%;\n  height: calc(100% - 150px);\n}\n\n.popup .close {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n}\n.popup .close:hover {\n  color: #06D85F;\n}\n.popup .content {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n}\n\n.cm-s-default {\n  height: 100%;\n  font-size: small;\n  line-height: 1.5em;\n  z-index: 0;\n}\n</style>\n\n\t<div class="popup apprun-play">\n\t\t<a class="close" href="javascript:app.run(\'@close-popup\')">&times;</a>\n\t\t<div class="content">\n\t\t\t<div class="col">\n        <textarea class="editor"></textarea>\n      </div>\n      <div class="col">\n      <iframe class="preview"/>\n      </div>\n    </div>\n\t</div>\n</div>');const t=document.querySelector(".apprun-play .editor"),n=document.querySelector(".apprun-play .preview");t.value=s,wt(t,n,s,!1)}const e=document.createElement("iframe");e.classList.add("apprun-preview"),e.style.cssText=t,this.element.before(e),n&&(i.style.display="none"),wt(i,e,s,n)},this.update={"@show-popup":({code:t})=>{var n;null===(n=document.querySelector(".apprun-play .editor").editor)||void 0===n||n.setValue(t),document.getElementById("play-popup").classList.add("show")},"@close-popup":()=>{document.getElementById("play-popup").classList.remove("show")}}}});
//# sourceMappingURL=apprun-play-html.esm.js.map
