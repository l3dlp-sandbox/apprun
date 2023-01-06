!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(()=>(()=>{"use strict";var t={752:(t,e,n)=>{n.d(e,{Z:()=>r,g:()=>s});class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter((t=>t.fn!==e))}find(t){return this._events[t]}run(t,...e){const n=this.getSubscribers(t,this._events);return console.assert(n&&n.length>0,"No subscriber for event: "+t),n.forEach((n=>{const{fn:s,options:o}=n;return o.delay?this.delay(t,s,e,o):Object.keys(o).length>0?s.apply(this,[...e,o]):s.apply(this,e),!n.options.once})),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout((()=>{clearTimeout(s._t),Object.keys(s).length>0?e.apply(this,[...n,s]):e.apply(this,n)}),s.delay)}query(t,...e){const n=this.getSubscribers(t,this._events);console.assert(n&&n.length>0,"No subscriber for event: "+t);const s=n.map((t=>{const{fn:n,options:s}=t;return Object.keys(s).length>0?n.apply(this,[...e,s]):n.apply(this,e)}));return Promise.all(s)}getSubscribers(t,e){const n=e[t]||[];return e[t]=n.filter((t=>!t.options.once)),Object.keys(e).filter((e=>e.endsWith("*")&&t.startsWith(e.replace("*","")))).sort(((t,e)=>e.length-t.length)).forEach((s=>n.push(...e[s].map((e=>Object.assign(Object.assign({},e),{options:Object.assign(Object.assign({},e.options),{event:t})})))))),n}}let o;const i="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;i.app&&i._AppRunVersions?o=i.app:(o=new s,i.app=o,i._AppRunVersions="AppRun-3");const r=o},334:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(752);const o=(t,e)=>(e?t.state[e]:t.state)||"",i=(t,e,n)=>{if(e){const s=t.state||{};s[e]=n,t.setState(s)}else t.setState(n)},r=(t,e)=>{if(Array.isArray(t))return t.map((t=>r(t,e)));{let{tag:n,props:a,children:c}=t;return n?(a&&Object.keys(a).forEach((t=>{t.startsWith("$")&&(((t,e,n,r)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>r.run?r.run(t,e):s.Z.run(t,e);else if("string"==typeof n)e[t]=t=>r.run?r.run(n,t):s.Z.run(n,t);else if("function"==typeof n)e[t]=t=>r.setState(n(r.state,t));else if(Array.isArray(n)){const[o,...i]=n;"string"==typeof o?e[t]=t=>r.run?r.run(o,...i,t):s.Z.run(o,...i,t):"function"==typeof o&&(e[t]=t=>r.setState(o(r.state,...i,t)))}}else if("$bind"===t){const s=e.type||"text",a="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(s){case"checkbox":e.checked=o(r,a),e.onclick=t=>i(r,a||t.target.name,t.target.checked);break;case"radio":e.checked=o(r,a)===e.value,e.onclick=t=>i(r,a||t.target.name,t.target.value);break;case"number":case"range":e.value=o(r,a),e.oninput=t=>i(r,a||t.target.name,Number(t.target.value));break;default:e.value=o(r,a),e.oninput=t=>i(r,a||t.target.name,t.target.value)}else"select"===n?(e.value=o(r,a),e.onchange=t=>{t.target.multiple||i(r,a||t.target.name,t.target.value)}):"option"===n?(e.selected=o(r,a),e.onclick=t=>i(r,a||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=o(r,a),e.oninput=t=>i(r,a||t.target.name,t.target.value))}else s.Z.run("$",{key:t,tag:n,props:e,component:r})})(t,a,n,e),delete a[t])})),c&&(c=r(c,e)),{tag:n,props:a,children:c}):t}},a=r},559:(t,e,n)=>{n.d(e,{HY:()=>o,az:()=>a,eV:()=>d,yj:()=>h});var s=n(334);function o(t,...e){return r(e)}const i="_props";function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>n(t))):n(t)})),e}function a(t,e,...n){const s=r(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error(`Unknown tag in vdom ${t}`)}const c=new WeakMap,h=(t,e,n={})=>{null!=e&&!1!==e&&function(t,e,n={}){if(null==e||!1===e)return;if(e=g(e,n),!t)return;const s="SVG"===t.nodeName;Array.isArray(e)?u(t,e,s):u(t,[e],s)}("string"==typeof t&&t?document.getElementById(t)||document.querySelector(t):t,e=(0,s.Z)(e,n),n)};function l(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(!(2&e._op)&&u(t,e.children,n),!(1&e._op)&&m(t,e.props,n)):t.parentNode.replaceChild(f(e,n),t))}function u(t,e,n){var s,o;const i=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0,r=(null==e?void 0:e.length)||0,a=Math.min(i,r);for(let s=0;s<a;s++){const o=e[s];if(3===o._op)continue;const i=t.childNodes[s];if("string"==typeof o)i.textContent!==o&&(3===i.nodeType?i.nodeValue=o:t.replaceChild(p(o),i));else if(o instanceof HTMLElement||o instanceof SVGElement)t.insertBefore(o,i);else{const e=o.props&&o.props.key;if(e)if(i.key===e)l(t.childNodes[s],o,n);else{const r=c[e];if(r){const e=r.nextSibling;t.insertBefore(r,i),e?t.insertBefore(i,e):t.appendChild(i),l(t.childNodes[s],o,n)}else t.replaceChild(f(o,n),i)}else l(t.childNodes[s],o,n)}}let h=(null===(o=t.childNodes)||void 0===o?void 0:o.length)||0;for(;h>a;)t.removeChild(t.lastChild),h--;if(r>a){const s=document.createDocumentFragment();for(let t=a;t<e.length;t++)s.appendChild(f(e[t],n));t.appendChild(s)}}const d=t=>{const e=document.createElement("section");return e.insertAdjacentHTML("afterbegin",t),Array.from(e.children)};function p(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(null!=t?t:"")}function f(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return p(t);if(!t.tag||"function"==typeof t.tag)return p(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return m(n,t.props,e),t.children&&t.children.forEach((t=>n.appendChild(f(t,e)))),n}function m(t,e,n){const s=t[i]||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach((t=>n[t]=null)),e&&Object.keys(e).forEach((t=>n[t]=e[t])),n}(s,e||{}),t[i]=e;for(const s in e){const o=e[s];if(s.startsWith("data-")){const e=s.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[e]!==o&&(o||""===o?t.dataset[e]=o:delete t.dataset[e])}else if("style"===s)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof o)t.style.cssText=o;else for(const e in o)t.style[e]!==o[e]&&(t.style[e]=o[e]);else if(s.startsWith("xlink")){const e=s.replace("xlink","").toLowerCase();null==o||!1===o?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,o)}else s.startsWith("on")?o&&"function"!=typeof o?"string"==typeof o&&(o?t.setAttribute(s,o):t.removeAttribute(s)):t[s]=o:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(s)||n?t.getAttribute(s)!==o&&(o?t.setAttribute(s,o):t.removeAttribute(s)):t[s]!==o&&(t[s]=o);"key"===s&&o&&(c[o]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame((()=>e.ref(t)))}function g(t,e,n=0){var s;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>g(t,e,n++)));let o=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(o=function(t,e,n){const{tag:s,props:o,children:i}=t;let r=`_${n}`,a=o&&o.id;a?r=a:a=`_${n}${Date.now()}`;let c="section";o&&o.as&&(c=o.as,delete o.as),e.__componentCache||(e.__componentCache={});let h=e.__componentCache[r];if(h&&h instanceof s&&h.element)h.renderState(h.state);else{const t=document.createElement(c);h=e.__componentCache[r]=new s(Object.assign(Object.assign({},o),{children:i})).start(t)}if(h.mounted){const t=h.mounted(o,i,h.state);void 0!==t&&h.setState(t)}return m(h.element,o,!1),h.element}(t,e,n)),o&&Array.isArray(o.children)){const t=null===(s=o.props)||void 0===s?void 0:s._component;if(t){let e=0;o.children=o.children.map((n=>g(n,t,e++)))}else o.children=o.children.map((t=>g(t,e,n++)))}return o}}},e={};function n(s){var o=e[s];if(void 0!==o)return o.exports;var i=e[s]={exports:{}};return t[s](i,i.exports,n),i.exports}n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{n.r(s),n.d(s,{App:()=>t.g,Component:()=>p,Fragment:()=>e.HY,ROUTER_404_EVENT:()=>m,ROUTER_EVENT:()=>f,app:()=>t.Z,customElement:()=>h,default:()=>_,event:()=>a,on:()=>c,safeHTML:()=>e.eV,update:()=>a});var t=n(752),e=n(559);const o=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s=n.observedAttributes||[],o=s.reduce(((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t}),{});this._attrMap=t=>o[t]||t;const i={};Array.from(this.attributes).forEach((t=>i[this._attrMap(t.name)]=t.value)),s.forEach((t=>{void 0!==this[t]&&(i[t]=this[t]),Object.defineProperty(this,t,{get:()=>i[t],set(e){this.attributeChangedCallback(t,i[t],e)},configurable:!0,enumerable:!0})})),requestAnimationFrame((()=>{const e=this.children?Array.from(this.children):[];if(e.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},i),{children:e})).mount(this._shadowRoot,n),this._component._props=i,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(i,e,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}))}}disconnectedCallback(){var t,e,n,s;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(s=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===s||s.call(n),this._component=null}attributeChangedCallback(t,n,s){if(this._component){const o=this._attrMap(t);this._component._props[o]=s,this._component.run("attributeChanged",o,n,s),s!==n&&!1!==e.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}},i=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,o(e,n))},r={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function a(t,e={}){return(n,s,o)=>{const i=t?t.toString():s;return r.defineMetadata(`apprun-update:${i}`,{name:i,key:s,options:e},n),o}}function c(t,e={}){return function(n,s){const o=t?t.toString():s;r.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n)}}function h(t,e){return function(n){return i(t,n,e),n}}var l=n(334);const u=new Map;t.Z.find("get-components")||t.Z.on("get-components",(t=>t.components=u));const d=t=>t;class p{constructor(e,n,s,o){this.state=e,this.view=n,this.update=s,this.options=o,this._app=new t.g,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign({render:!0},e))}renderState(e,n=null){if(!this.view)return;let s=n||this.view(e);if(t.Z.debug&&t.Z.run("debug",{component:this,_:s?".":"-",state:e,vdom:s,el:this.element}),"object"!=typeof document)return;const o="string"==typeof this.element&&this.element?document.getElementById(this.element)||document.querySelector(this.element):this.element;if(o){const t="_c";this.unload?o._component===this&&o.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),o.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(o)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):o.removeAttribute&&o.removeAttribute(t),o._component=this}!n&&s&&(s=(0,l.Z)(s,this),t.Z.render(o,s,this)),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)Promise.resolve(t).then((n=>{this.setState(n,e),this._state=t}));else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(e=null,n){var s,o;return console.assert(!this.element,"Component already mounted."),this.options=n=Object.assign(Object.assign({},this.options),n),this.element=e,this.global_event=n.global_event,this.enable_history=!!n.history,this.enable_history&&(this.on(n.history.prev||"history-prev",this._history_prev),this.on(n.history.next||"history-next",this._history_next)),n.route&&(this.update=this.update||{},this.update[n.route]||(this.update[n.route]=d)),this.add_actions(),this.state=null!==(o=null!==(s=this.state)&&void 0!==s?s:this.model)&&void 0!==o?o:{},"function"==typeof this.state&&(this.state=this.state()),this.setState(this.state,{render:!!n.render,history:!0}),t.Z.debug&&(u.get(e)?u.get(e).push(this):u.set(e,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(e,n,s={}){n&&"function"==typeof n&&(s.global&&this._global_events.push(e),this.on(e,((...o)=>{t.Z.debug&&t.Z.run("debug",{component:this,_:">",event:e,p:o,current_state:this.state,options:s});const i=n(this.state,...o);t.Z.debug&&t.Z.run("debug",{component:this,_:"<",event:e,p:o,newState:i,state:this.state,options:s}),this.setState(i,s)}),s))}add_actions(){const t=this.update||{};r.getMetadataKeys(this).forEach((e=>{if(e.startsWith("apprun-update:")){const n=r.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}}));const e={};Array.isArray(t)?t.forEach((t=>{const[n,s,o]=t;n.toString().split(",").forEach((t=>e[t.trim()]=[s,o]))})):Object.keys(t).forEach((n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach((t=>e[t.trim()]=s))})),e["."]||(e["."]=d),Object.keys(e).forEach((t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])}))}run(e,...n){if(this.state instanceof Promise)return Promise.resolve(this.state).then((t=>{this.state=t,this.run(e,...n)}));{const s=e.toString();return this.is_global_event(s)?t.Z.run(s,...n):this._app.run(s,...n)}}on(e,n,s){const o=e.toString();return this._actions.push({name:o,fn:n}),this.is_global_event(o)?t.Z.on(o,n,s):this._app.on(o,n,s)}unmount(){var e;null===(e=this.observer)||void 0===e||e.disconnect(),this._actions.forEach((e=>{const{name:n,fn:s}=e;this.is_global_event(n)?t.Z.off(n,s):this._app.off(n,s)}))}}p.__isAppRunComponent=!0;const f="//",m="///",g=e=>{if(e||(e="#"),e.startsWith("#")){const[n,...s]=e.split("/");t.Z.run(n,...s)||t.Z.run(m,n,...s),t.Z.run(f,n,...s)}else if(e.startsWith("/")){const[n,s,...o]=e.split("/");t.Z.run("/"+s,...o)||t.Z.run(m,"/"+s,...o),t.Z.run(f,"/"+s,...o)}else t.Z.run(e)||t.Z.run(m,e),t.Z.run(f,e)};t.Z.h=t.Z.createElement=e.az,t.Z.render=e.yj,t.Z.Fragment=e.HY,t.Z.webComponent=i,t.Z.safeHTML=e.eV,t.Z.start=(t,e,n,s,o)=>{const i=Object.assign({render:!0,global_event:!0},o),r=new p(e,n,s);return o&&o.rendered&&(r.rendered=o.rendered),r.mount(t,i),r};const y=t=>{};t.Z.on("$",y),t.Z.on("debug",(t=>y)),t.Z.on(f,y),t.Z.on("#",y),t.Z.route=g,t.Z.on("route",(e=>t.Z.route&&t.Z.route(e))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{t.Z.route===g&&(window.onpopstate=()=>g(location.hash),document.body.hasAttribute("apprun-no-init")||t.Z["no-init-route"]||g(location.hash))}));const _=t.Z;"object"==typeof window&&(window.Component=p,window._React=window.React,window.React=t.Z,window.on=c,window.customElement=h,window.safeHTML=e.eV)})(),s})()));
//# sourceMappingURL=apprun.js.map