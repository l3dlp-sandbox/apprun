class t{constructor(){this._events={}}on(t,n,i={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:n,options:i})}off(t,n){const i=this._events[t]||[];this._events[t]=i.filter((t=>t.fn!==n))}find(t){return this._events[t]}run(t,...n){const i=this.getSubscribers(t,this._events);return console.assert(i&&i.length>0,"No subscriber for event: "+t),i.forEach((i=>{const{fn:e,options:s}=i;return s.delay?this.delay(t,e,n,s):Object.keys(s).length>0?e.apply(this,[...n,s]):e.apply(this,n),!i.options.once})),i.length}once(t,n,i={}){this.on(t,n,Object.assign(Object.assign({},i),{once:!0}))}delay(t,n,i,e){e._t&&clearTimeout(e._t),e._t=setTimeout((()=>{clearTimeout(e._t),Object.keys(e).length>0?n.apply(this,[...i,e]):n.apply(this,i)}),e.delay)}runAsync(t,...n){const i=this.getSubscribers(t,this._events);console.assert(i&&i.length>0,"No subscriber for event: "+t);const e=i.map((t=>{const{fn:i,options:e}=t;return Object.keys(e).length>0?i.apply(this,[...n,e]):i.apply(this,n)}));return Promise.all(e)}query(t,...n){return this.query(t,...n)}getSubscribers(t,n){const i=n[t]||[];return n[t]=i.filter((t=>!t.options.once)),Object.keys(n).filter((n=>n.endsWith("*")&&t.startsWith(n.replace("*","")))).sort(((t,n)=>n.length-t.length)).forEach((e=>i.push(...n[e].map((n=>Object.assign(Object.assign({},n),{options:Object.assign(Object.assign({},n.options),{event:t})})))))),i}}let n;const i="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;i.app&&i._AppRunVersions?n=i.app:(n=new t,i.app=n,i._AppRunVersions="AppRun-3");var e=n;const s=(t,n)=>(n?t.state[n]:t.state)||"",o=(t,n,i)=>{if(n){const e=t.state||{};e[n]=i,t.setState(e)}else t.setState(i)},r=(t,n)=>{if(Array.isArray(t))return t.map((t=>r(t,n)));{let{type:i,tag:h,props:l,children:c}=t;return h=h||i,c=c||(null==l?void 0:l.children),l&&Object.keys(l).forEach((t=>{t.startsWith("$")&&(((t,n,i,r)=>{if(t.startsWith("$on")){const i=n[t];if(t=t.substring(1),"boolean"==typeof i)n[t]=n=>r.run?r.run(t,n):e.run(t,n);else if("string"==typeof i)n[t]=t=>r.run?r.run(i,t):e.run(i,t);else if("function"==typeof i)n[t]=t=>r.setState(i(r.state,t));else if(Array.isArray(i)){const[s,...o]=i;"string"==typeof s?n[t]=t=>r.run?r.run(s,...o,t):e.run(s,...o,t):"function"==typeof s&&(n[t]=t=>r.setState(s(r.state,...o,t)))}}else if("$bind"===t){const e=n.type||"text",h="string"==typeof n[t]?n[t]:n.name;if("input"===i)switch(e){case"checkbox":n.checked=s(r,h),n.onclick=t=>o(r,h||t.target.name,t.target.checked);break;case"radio":n.checked=s(r,h)===n.value,n.onclick=t=>o(r,h||t.target.name,t.target.value);break;case"number":case"range":n.value=s(r,h),n.oninput=t=>o(r,h||t.target.name,Number(t.target.value));break;default:n.value=s(r,h),n.oninput=t=>o(r,h||t.target.name,t.target.value)}else"select"===i?(n.value=s(r,h),n.onchange=t=>{t.target.multiple||o(r,h||t.target.name,t.target.value)}):"option"===i?(n.selected=s(r,h),n.onclick=t=>o(r,h||t.target.name,t.target.selected)):"textarea"===i&&(n.innerHTML=s(r,h),n.oninput=t=>o(r,h||t.target.name,t.target.value))}else e.run("$",{key:t,tag:i,props:n,component:r})})(t,l,h,n),delete l[t])})),c&&r(c,n),t}};function h(t,...n){return c(n)}const l="_props";function c(t){const n=[],i=t=>{null!=t&&""!==t&&!1!==t&&n.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>i(t))):i(t)})),n}function u(t,n,...i){const e=c(i);if("string"==typeof t)return{tag:t,props:n,children:e};if(Array.isArray(t))return t;if(void 0===t&&i)return e;if(Object.getPrototypeOf(t).t)return{tag:t,props:n,children:e};if("function"==typeof t)return t(n,e);throw new Error(`Unknown tag in vdom ${t}`)}const a=new WeakMap,d=(t,n,i={})=>{if(null==n||!1===n)return;!function(t,n,i={}){if(null==n||!1===n)return;if(n=g(n,i),!t)return;const e="SVG"===t.nodeName;Array.isArray(n)?f(t,n,e):f(t,[n],e)}("string"==typeof t&&t?document.getElementById(t)||document.querySelector(t):t,n=r(n,i),i)};function p(t,n,i){3!==n._op&&(i=i||"svg"===n.tag,!function(t,n){const i=t.nodeName,e=`${n.tag||""}`;return i.toUpperCase()===e.toUpperCase()}(t,n)?t.parentNode.replaceChild(m(n,i),t):(!(2&n._op)&&f(t,n.children,i),!(1&n._op)&&b(t,n.props,i)))}function f(t,n,i){var e,s;const o=(null===(e=t.childNodes)||void 0===e?void 0:e.length)||0,r=(null==n?void 0:n.length)||0,h=Math.min(o,r);for(let e=0;e<h;e++){const s=n[e];if(3===s._op)continue;const o=t.childNodes[e];if("string"==typeof s)o.textContent!==s&&(3===o.nodeType?o.nodeValue=s:t.replaceChild(y(s),o));else if(s instanceof HTMLElement||s instanceof SVGElement)t.insertBefore(s,o);else{const n=s.props&&s.props.key;if(n)if(o.key===n)p(t.childNodes[e],s,i);else{const r=a[n];if(r){const n=r.nextSibling;t.insertBefore(r,o),n?t.insertBefore(o,n):t.appendChild(o),p(t.childNodes[e],s,i)}else t.replaceChild(m(s,i),o)}else p(t.childNodes[e],s,i)}}let l=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0;for(;l>h;)t.removeChild(t.lastChild),l--;if(r>h){const e=document.createDocumentFragment();for(let t=h;t<n.length;t++)e.appendChild(m(n[t],i));t.appendChild(e)}}const v=t=>{const n=document.createElement("section");return n.insertAdjacentHTML("afterbegin",t),Array.from(n.children)};function y(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const n=document.createElement("div");return n.insertAdjacentHTML("afterbegin",t.substring(6)),n}return document.createTextNode(null!=t?t:"")}function m(t,n){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return y(t);if(!t.tag||"function"==typeof t.tag)return y(JSON.stringify(t));const i=(n=n||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return b(i,t.props,n),t.children&&t.children.forEach((t=>i.appendChild(m(t,n)))),i}function b(t,n,i){const e=t[l]||{};n=function(t,n){n.class=n.class||n.className,delete n.className;const i={};return t&&Object.keys(t).forEach((t=>i[t]=null)),n&&Object.keys(n).forEach((t=>i[t]=n[t])),i}(e,n||{}),t[l]=n;for(const e in n){const s=n[e];if(e.startsWith("data-")){const n=e.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[n]!==s&&(s||""===s?t.dataset[n]=s:delete t.dataset[n])}else if("style"===e)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof s)t.style.cssText=s;else for(const n in s)t.style[n]!==s[n]&&(t.style[n]=s[n]);else if(e.startsWith("xlink")){const n=e.replace("xlink","").toLowerCase();null==s||!1===s?t.removeAttributeNS("http://www.w3.org/1999/xlink",n):t.setAttributeNS("http://www.w3.org/1999/xlink",n,s)}else e.startsWith("on")?s&&"function"!=typeof s?"string"==typeof s&&(s?t.setAttribute(e,s):t.removeAttribute(e)):t[e]=s:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-|^for$/g.test(e)||i?t.getAttribute(e)!==s&&(s?t.setAttribute(e,s):t.removeAttribute(e)):t[e]!==s&&(t[e]=s);"key"===e&&s&&(a[s]=t)}n&&"function"==typeof n.ref&&window.requestAnimationFrame((()=>n.ref(t)))}function g(t,n,i=0){var e;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>g(t,n,i++)));let s=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).t&&(s=function(t,n,i){const{tag:e,props:s,children:o}=t;let r=`_${i}`,h=s&&s.id;h?r=h:h=`_${i}${Date.now()}`;let l="section";s&&s.as&&(l=s.as,delete s.as),n.i||(n.i={});let c=n.i[r];if(c&&c instanceof e&&c.element)c.renderState(c.state);else{const t=document.createElement(l);c=n.i[r]=new e(Object.assign(Object.assign({},s),{children:o})).mount(t,{render:!0})}if(c.mounted){const t=c.mounted(s,o,c.state);void 0!==t&&c.setState(t)}return b(c.element,s,!1),c.element}(t,n,i)),s&&Array.isArray(s.children)){const t=null===(e=s.props)||void 0===e?void 0:e._component;if(t){let n=0;s.children=s.children.map((i=>g(i,t,n++)))}else s.children=s.children.map((t=>g(t,n,i++)))}return s}const w=(t,n={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(n.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const i=n||{};this._shadowRoot=i.shadow?this.attachShadow({mode:"open"}):this;const e=i.observedAttributes||[],s=e.reduce(((t,n)=>{const i=n.toLowerCase();return i!==n&&(t[i]=n),t}),{});this._attrMap=t=>s[t]||t;const o={};Array.from(this.attributes).forEach((t=>o[this._attrMap(t.name)]=t.value)),e.forEach((t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(n){this.attributeChangedCallback(t,o[t],n)},configurable:!0,enumerable:!0})})),requestAnimationFrame((()=>{const n=this.children?Array.from(this.children):[];if(this._component=new t(Object.assign(Object.assign({},o),{children:n})).mount(this._shadowRoot,i),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,n,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==i.render&&this._component.run(".")}))}}disconnectedCallback(){var t,n,i,e;null===(n=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===n||n.call(t),null===(e=null===(i=this._component)||void 0===i?void 0:i.unmount)||void 0===e||e.call(i),this._component=null}attributeChangedCallback(t,i,e){if(this._component){const s=this._attrMap(t);this._component._props[s]=e,this._component.run("attributeChanged",s,i,e),e!==i&&!1!==n.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}};var $=(t,n,i)=>{"undefined"!=typeof customElements&&customElements.define(t,w(n,i))};const j={meta:new WeakMap,defineMetadata(t,n,i){this.meta.has(i)||this.meta.set(i,{}),this.meta.get(i)[t]=n},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,n){return n=Object.getPrototypeOf(n),this.meta.get(n)?this.meta.get(n)[t]:null}};const x=new Map;e.find("get-components")||e.on("get-components",(t=>t.components=x));const A=t=>t;class _{renderState(t,n=null){if(!this.view)return;let i=n||this.view(t);if(e.debug&&e.run("debug",{component:this,_:i?".":"-",state:t,vdom:i,el:this.element}),"object"!=typeof document)return;const s="string"==typeof this.element&&this.element?document.getElementById(this.element)||document.querySelector(this.element):this.element;if(!s)return;const o="_c";this.unload?s._component===this&&s.getAttribute(o)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),s.setAttribute(o,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(s)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[o]}))):s.removeAttribute&&s.removeAttribute(o),s._component=this,!n&&i&&(i=r(i,this),this.options.transition&&document&&document.startViewTransition?document.startViewTransition((()=>e.render(s,i,this))):e.render(s,i,this)),this.rendered&&this.rendered(this.state)}setState(t,n={render:!0,history:!1}){if(t instanceof Promise)Promise.resolve(t).then((i=>{this.setState(i,n),this._state=t}));else{if(this._state=t,null==t)return;this.state=t,!1!==n.render&&(n.transition&&document&&document.startViewTransition?document.startViewTransition((()=>this.renderState(t))):this.renderState(t)),!1!==n.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof n.callback&&n.callback(this.state)}}constructor(n,i,e,s){this.state=n,this.view=i,this.update=e,this.options=s,this._app=new t,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,n)=>{if(this.mount(t,Object.assign({render:!0},n)),this.mounted&&"function"==typeof this.mounted){const t=this.mounted({},[],this.state);void 0!==t&&this.setState(t)}return this}}mount(t=null,n){var i,s;return console.assert(!this.element,"Component already mounted."),this.options=n=Object.assign(Object.assign({},this.options),n),this.element=t,this.global_event=n.global_event,this.enable_history=!!n.history,this.enable_history&&(this.on(n.history.prev||"history-prev",this._history_prev),this.on(n.history.next||"history-next",this._history_next)),n.route&&(this.update=this.update||{},this.update[n.route]||(this.update[n.route]=A)),this.add_actions(),this.state=null!==(s=null!==(i=this.state)&&void 0!==i?i:this.model)&&void 0!==s?s:{},"function"==typeof this.state&&(this.state=this.state()),this.setState(this.state,{render:!!n.render,history:!0}),e.debug&&(x.get(t)?x.get(t).push(this):x.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,n,i={}){n&&"function"==typeof n&&(i.global&&this._global_events.push(t),this.on(t,((...s)=>{e.debug&&e.run("debug",{component:this,_:">",event:t,p:s,current_state:this.state,options:i});const o=n(this.state,...s);e.debug&&e.run("debug",{component:this,_:"<",event:t,p:s,newState:o,state:this.state,options:i}),this.setState(o,i)}),i))}add_actions(){const t=this.update||{};j.getMetadataKeys(this).forEach((n=>{if(n.startsWith("apprun-update:")){const i=j.getMetadata(n,this);t[i.name]=[this[i.key].bind(this),i.options]}}));const n={};Array.isArray(t)?t.forEach((t=>{const[i,e,s]=t;i.toString().split(",").forEach((t=>n[t.trim()]=[e,s]))})):Object.keys(t).forEach((i=>{const e=t[i];("function"==typeof e||Array.isArray(e))&&i.split(",").forEach((t=>n[t.trim()]=e))})),n["."]||(n["."]=A),Object.keys(n).forEach((t=>{const i=n[t];"function"==typeof i?this.add_action(t,i):Array.isArray(i)&&this.add_action(t,i[0],i[1])}))}run(t,...n){if(this.state instanceof Promise)return Promise.resolve(this.state).then((i=>{this.state=i,this.run(t,...n)}));{const i=t.toString();return this.is_global_event(i)?e.run(i,...n):this._app.run(i,...n)}}on(t,n,i){const s=t.toString();return this._actions.push({name:s,fn:n}),this.is_global_event(s)?e.on(s,n,i):this._app.on(s,n,i)}runAsync(t,...n){const i=t.toString();return this.is_global_event(i)?e.runAsync(i,...n):this._app.runAsync(i,...n)}query(t,...n){return this.runAsync(t,...n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:n,fn:i}=t;this.is_global_event(n)?e.off(n,i):this._app.off(n,i)}))}}_.t=!0;const O="//",k="///",T=t=>{if(t||(t="#"),t.startsWith("#")){const[n,...i]=t.split("/");e.run(n,...i)||e.run(k,n,...i),e.run(O,n,...i)}else if(t.startsWith("/")){const[n,i,...s]=t.split("/");e.run("/"+i,...s)||e.run(k,"/"+i,...s),e.run(O,"/"+i,...s)}else e.run(t)||e.run(k,t),e.run(O,t)};e.h=e.createElement=u,e.render=d,e.Fragment=h,e.webComponent=$,e.safeHTML=v,e.start=(t,n,i,e,s)=>{const o=Object.assign({render:!0,global_event:!0},s),r=new _(n,i,e);return s&&s.rendered&&(r.rendered=s.rendered),s&&s.mounted&&(r.mounted=s.mounted),r.start(t,o),r};const E=t=>{};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var M;e.on("$",E),e.on("debug",(t=>E)),e.on(O,E),e.on("#",E),e.route=T,e.on("route",(t=>e.route&&e.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{e.route===T&&(window.onpopstate=()=>T(location.hash),document.body.hasAttribute("apprun-no-init")||e["no-init-route"]||T(location.hash))})),"object"==typeof window&&(window.Component=_,window._React=window.React,window.React=e,window.on=function(t,n={}){return function(i,e){const s=t?t.toString():e;j.defineMetadata(`apprun-update:${s}`,{name:s,key:e,options:n},i)}},window.customElement=function(t,n){return function(i){return $(t,i,n),i}},window.safeHTML=v),e.use_render=(t,n=0)=>e.render=0===n?(n,i)=>t(i,n):(n,i)=>t(n,i),e.use_react=(t,n)=>{e.h=e.createElement=t.createElement,e.Fragment=t.Fragment,e.render=(t,i)=>n.render(i,t),t.version&&t.version.startsWith("18")&&(e.render=(t,i)=>{t&&i&&(t._root||(t._root=n.createRoot(t)),t._root.render(i))})};const C=window,P=C.trustedTypes,S=P?P.createPolicy("lit-html",{createHTML:t=>t}):void 0,N="$lit$",U=`lit$${(Math.random()+"").slice(9)}$`,z="?"+U,B=`<${z}>`,L=document,R=()=>L.createComment(""),D=t=>null===t||"object"!=typeof t&&"function"!=typeof t,H=Array.isArray,q="[ \t\n\f\r]",F=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,V=/>/g,G=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),W=/'/g,X=/"/g,Z=/^(?:script|style|textarea|title)$/i,J=t=>(n,...i)=>({_$litType$:t,strings:n,values:i}),K=J(1),Y=J(2),Q=Symbol.for("lit-noChange"),tt=Symbol.for("lit-nothing"),nt=new WeakMap,it=L.createTreeWalker(L,129,null,!1);function et(t,n){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==S?S.createHTML(n):n}const st=(t,n)=>{const i=t.length-1,e=[];let s,o=2===n?"<svg>":"",r=F;for(let n=0;n<i;n++){const i=t[n];let h,l,c=-1,u=0;for(;u<i.length&&(r.lastIndex=u,l=r.exec(i),null!==l);)u=r.lastIndex,r===F?"!--"===l[1]?r=I:void 0!==l[1]?r=V:void 0!==l[2]?(Z.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=G):void 0!==l[3]&&(r=G):r===G?">"===l[0]?(r=null!=s?s:F,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,h=l[1],r=void 0===l[3]?G:'"'===l[3]?X:W):r===X||r===W?r=G:r===I||r===V?r=F:(r=G,s=void 0);const a=r===G&&t[n+1].startsWith("/>")?" ":"";o+=r===F?i+B:c>=0?(e.push(h),i.slice(0,c)+N+i.slice(c)+U+a):i+U+(-2===c?(e.push(void 0),n):a)}return[et(t,o+(t[i]||"<?>")+(2===n?"</svg>":"")),e]};class ot{constructor({strings:t,_$litType$:n},i){let e;this.parts=[];let s=0,o=0;const r=t.length-1,h=this.parts,[l,c]=st(t,n);if(this.el=ot.createElement(l,i),it.currentNode=this.el.content,2===n){const t=this.el.content,n=t.firstChild;n.remove(),t.append(...n.childNodes)}for(;null!==(e=it.nextNode())&&h.length<r;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const n of e.getAttributeNames())if(n.endsWith(N)||n.startsWith(U)){const i=c[o++];if(t.push(n),void 0!==i){const t=e.getAttribute(i.toLowerCase()+N).split(U),n=/([.?@])?(.*)/.exec(i);h.push({type:1,index:s,name:n[2],strings:t,ctor:"."===n[1]?ut:"?"===n[1]?dt:"@"===n[1]?pt:ct})}else h.push({type:6,index:s})}for(const n of t)e.removeAttribute(n)}if(Z.test(e.tagName)){const t=e.textContent.split(U),n=t.length-1;if(n>0){e.textContent=P?P.emptyScript:"";for(let i=0;i<n;i++)e.append(t[i],R()),it.nextNode(),h.push({type:2,index:++s});e.append(t[n],R())}}}else if(8===e.nodeType)if(e.data===z)h.push({type:2,index:s});else{let t=-1;for(;-1!==(t=e.data.indexOf(U,t+1));)h.push({type:7,index:s}),t+=U.length-1}s++}}static createElement(t,n){const i=L.createElement("template");return i.innerHTML=t,i}}function rt(t,n,i=t,e){var s,o,r,h;if(n===Q)return n;let l=void 0!==e?null===(s=i._$Co)||void 0===s?void 0:s[e]:i._$Cl;const c=D(n)?void 0:n._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,e)),void 0!==e?(null!==(r=(h=i)._$Co)&&void 0!==r?r:h._$Co=[])[e]=l:i._$Cl=l),void 0!==l&&(n=rt(t,l._$AS(t,n.values),l,e)),n}class ht{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var n;const{el:{content:i},parts:e}=this._$AD,s=(null!==(n=null==t?void 0:t.creationScope)&&void 0!==n?n:L).importNode(i,!0);it.currentNode=s;let o=it.nextNode(),r=0,h=0,l=e[0];for(;void 0!==l;){if(r===l.index){let n;2===l.type?n=new lt(o,o.nextSibling,this,t):1===l.type?n=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(n=new ft(o,this,t)),this._$AV.push(n),l=e[++h]}r!==(null==l?void 0:l.index)&&(o=it.nextNode(),r++)}return it.currentNode=L,s}v(t){let n=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,n),n+=i.strings.length-2):i._$AI(t[n])),n++}}class lt{constructor(t,n,i,e){var s;this.type=2,this._$AH=tt,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=i,this.options=e,this._$Cp=null===(s=null==e?void 0:e.isConnected)||void 0===s||s}get _$AU(){var t,n;return null!==(n=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==n?n:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return void 0!==n&&11===(null==t?void 0:t.nodeType)&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=rt(this,t,n),D(t)?t===tt||null==t||""===t?(this._$AH!==tt&&this._$AR(),this._$AH=tt):t!==this._$AH&&t!==Q&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>H(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==tt&&D(this._$AH)?this._$AA.nextSibling.data=t:this.$(L.createTextNode(t)),this._$AH=t}g(t){var n;const{values:i,_$litType$:e}=t,s="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=ot.createElement(et(e.h,e.h[0]),this.options)),e);if((null===(n=this._$AH)||void 0===n?void 0:n._$AD)===s)this._$AH.v(i);else{const t=new ht(s,this),n=t.u(this.options);t.v(i),this.$(n),this._$AH=t}}_$AC(t){let n=nt.get(t.strings);return void 0===n&&nt.set(t.strings,n=new ot(t)),n}T(t){H(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let i,e=0;for(const s of t)e===n.length?n.push(i=new lt(this.k(R()),this.k(R()),this,this.options)):i=n[e],i._$AI(s),e++;e<n.length&&(this._$AR(i&&i._$AB.nextSibling,e),n.length=e)}_$AR(t=this._$AA.nextSibling,n){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,n);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var n;void 0===this._$AM&&(this._$Cp=t,null===(n=this._$AP)||void 0===n||n.call(this,t))}}class ct{constructor(t,n,i,e,s){this.type=1,this._$AH=tt,this._$AN=void 0,this.element=t,this.name=n,this._$AM=e,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=tt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,i,e){const s=this.strings;let o=!1;if(void 0===s)t=rt(this,t,n,0),o=!D(t)||t!==this._$AH&&t!==Q,o&&(this._$AH=t);else{const e=t;let r,h;for(t=s[0],r=0;r<s.length-1;r++)h=rt(this,e[i+r],n,r),h===Q&&(h=this._$AH[r]),o||(o=!D(h)||h!==this._$AH[r]),h===tt?t=tt:t!==tt&&(t+=(null!=h?h:"")+s[r+1]),this._$AH[r]=h}o&&!e&&this.j(t)}j(t){t===tt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ut extends ct{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===tt?void 0:t}}const at=P?P.emptyScript:"";class dt extends ct{constructor(){super(...arguments),this.type=4}j(t){t&&t!==tt?this.element.setAttribute(this.name,at):this.element.removeAttribute(this.name)}}class pt extends ct{constructor(t,n,i,e,s){super(t,n,i,e,s),this.type=5}_$AI(t,n=this){var i;if((t=null!==(i=rt(this,t,n,0))&&void 0!==i?i:tt)===Q)return;const e=this._$AH,s=t===tt&&e!==tt||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,o=t!==tt&&(e===tt||s);s&&this.element.removeEventListener(this.name,this,e),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class ft{constructor(t,n,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const vt=C.litHtmlPolyfillSupport;null==vt||vt(ot,lt),(null!==(M=C.litHtmlVersions)&&void 0!==M?M:C.litHtmlVersions=[]).push("2.8.0");const yt=(t,n,i)=>{var e,s;const o=null!==(e=null==i?void 0:i.renderBefore)&&void 0!==e?e:n;let r=o._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=r=new lt(n.insertBefore(R(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */},mt=2,bt=5,gt=t=>(...n)=>({_$litDirective$:t,values:n});class wt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,i){this._$Ct=t,this._$AM=n,this._$Ci=i}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class $t extends wt{constructor(t){if(super(t),this.et=tt,t.type!==mt)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===tt||null==t)return this.ft=void 0,this.et=t;if(t===Q)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.et)return this.ft;this.et=t;const n=[t];return n.raw=n,this.ft={_$litType$:this.constructor.resultType,strings:n,values:[]}}}$t.directiveName="unsafeHTML",$t.resultType=1;const jt=gt($t);const xt=gt(class extends wt{constructor(t){if(super(t),t.type!==bt)throw new Error("${run} can only be used in event handlers")}update(t,n){let{element:i,name:s}=t;const o=()=>{let t=i._component;for(;!t&&i;)i=i.parentElement,t=i&&i._component;return console.assert(!!t,"Component not found."),t},[r,...h]=n;return"string"==typeof r?i[`on${s}`]=t=>{const n=o();n?n.run(r,...h,t):e.run(r,...h,t)}:"function"==typeof r&&(i[`on${s}`]=t=>o().setState(r(o().state,...h,t))),this.render()}render(){return Q}});e.createElement=u,e.render=function(t,n,i){n&&("string"==typeof n?(t._$litPart$||t.replaceChildren(),yt(K`${jt(n)}`,t)):"_$litType$"in n?(t._$litPart$||t.replaceChildren(),yt(n,t)):(d(t,n,i),t._$litPart$=void 0))},e.Fragment=h,"object"==typeof window&&(window.React=window._React||e,window.html=K,window.svg=Y,window.run=xt);const At=(t,n,i,e)=>{if(!n||!i)return;const s=t=>{var i,e;const s=n.cloneNode();null===(i=n.parentNode)||void 0===i||i.replaceChild(s,n);const o=null===(e=(n=s).contentWindow)||void 0===e?void 0:e.document;o&&(o.open(),t.indexOf("<html")>=0?o.write(t):o.write((t=>`<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta http-equiv="X-UA-Compatible" content="ie=edge">\n  <script src="https://cdnjs.cloudflare.com/ajax/libs/custom-elements/1.1.2/custom-elements.min.js"><\/script>\n  <title>AppRun Playground</title>\n  <style>\n    body {\n      font-family: "Benton Sans", "Helvetica Neue", helvetica, arial, sans-serif;\n      margin: 2em;\n    }\n  </style>\n  <script src="https://unpkg.com/@babel/standalone/babel.min.js"><\/script>\n  <script src="https://unpkg.com/apprun/dist/apprun-html.js"><\/script>\n</head>\n<body>\n<script>\n  Babel.registerPlugin("d", [Babel.availablePlugins["proposal-decorators"], {legacy: true}]);\n  Babel.registerPlugin("c", [Babel.availablePlugins["proposal-class-properties"], {loose: true}]);\n  Babel.registerPlugin("b", [Babel.availablePlugins["proposal-private-methods"], {loose: true}]);\n<\/script>\n<script type="text/babel" data-plugins="d, c, b">\n  ${t}\n<\/script>\n</body>\n</html>`)(t)),o.close())};s(i),!e&&t&&"TEXTAREA"===t.nodeName&&("undefined"==typeof CodeMirror?t.onkeyup=()=>s(t.value):t.editor||(t.editor=CodeMirror.fromTextArea(t,{lineNumbers:!0,mode:"jsx"}),t.editor.on("change",(t=>s(t.getValue())))))};e.webComponent("apprun-play",class extends _{constructor(){super(...arguments),this.view=t=>{const n=t["code-element"],i=this.element;let e,s;return e=n?document.querySelector(n):i.previousElementSibling||i.parentElement.previousElementSibling,s=(null==e?void 0:e.innerText)||(null==e?void 0:e.value)||t.code,this.state.code_area=e,this.state.code=s,s?`<div class="toolbox">\n        ${!t.hide_button&&'<a class="button" onclick="app.run("@show-popup")" >Try the Code</a>'}\n      </div>`:"<div>AppRun Play cannot find code to run, please set code-element selector.</div>"},this.rendered=({style:t,hide_src:n,code_area:i,code:e})=>{if(!e)return;if(!document.getElementById("play-popup")){document.body.insertAdjacentHTML("beforeend",'<div id="play-popup" class="overlay">\n<style id="apprun-play-style">\n.apprun-play .col {\n  height: 100%;\n  flex: 1;\n}\n.apprun-preview {\n  width: 100%\n}\n.apprun-play .editor, .apprun-play .preview {\n  display: inline-block;\n  width: calc(100% - 20px);\n  height: calc(100% - 10px);\n}\n\na.button {\n  font-size: .8em;\n  padding: 10px;\n  cursor: pointer;\n  color: var(--md-primary-bg-color);\n  background: var(--md-primary-fg-color)\n}\na.button:hover {\n  color: var(--md-primary-fg-color);\n  background: var(--md-primary-bg-color)\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.7);\n  visibility: hidden;\n  opacity: 0;\n  z-index: 999;\n}\n.overlay.show {\n  visibility: visible;\n  opacity: 1;\n}\n\n.popup {\n  margin: 80px auto;\n  padding: 20px;\n  background: #fff;\n  border-radius: 3px;\n  position: relative;\n  width: 90%;\n  height: calc(100% - 150px);\n}\n\n.popup .close {\n  position: absolute;\n  top: 10px;\n  right: 20px;\n  font-size: 20px;\n  font-weight: bold;\n  text-decoration: none;\n  color: #333;\n}\n.popup .close:hover {\n  color: #06D85F;\n}\n.popup .content {\n  height: 100%;\n  overflow: hidden;\n  display: flex;\n}\n\n.cm-s-default {\n  height: 100%;\n  font-size: small;\n  line-height: 1.5em;\n  z-index: 0;\n}\n</style>\n\n\t<div class="popup apprun-play">\n\t\t<a class="close" href="javascript:app.run(\'@close-popup\')">&times;</a>\n\t\t<div class="content">\n\t\t\t<div class="col">\n        <textarea class="editor"></textarea>\n      </div>\n      <div class="col">\n      <iframe class="preview"/>\n      </div>\n    </div>\n\t</div>\n</div>');const t=document.querySelector(".apprun-play .editor"),n=document.querySelector(".apprun-play .preview");t.value=e,At(t,n,e,!1)}const s=document.createElement("iframe");s.classList.add("apprun-preview"),s.style.cssText=t,this.element.before(s),n&&(i.style.display="none"),At(i,s,e,n)},this.update={"@show-popup":({code:t})=>{var n;null===(n=document.querySelector(".apprun-play .editor").editor)||void 0===n||n.setValue(t),document.getElementById("play-popup").classList.add("show")},"@close-popup":()=>{document.getElementById("play-popup").classList.remove("show")}}}});
//# sourceMappingURL=apprun-play-html.esm.js.map
