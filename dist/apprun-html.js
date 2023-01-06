/*! For license information please see apprun-html.js.LICENSE.txt */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,(()=>(()=>{"use strict";var t={752:(t,e,n)=>{n.d(e,{Z:()=>r,g:()=>s});class s{constructor(){this._events={}}on(t,e,n={}){this._events[t]=this._events[t]||[],this._events[t].push({fn:e,options:n})}off(t,e){const n=this._events[t]||[];this._events[t]=n.filter((t=>t.fn!==e))}find(t){return this._events[t]}run(t,...e){const n=this.getSubscribers(t,this._events);return console.assert(n&&n.length>0,"No subscriber for event: "+t),n.forEach((n=>{const{fn:s,options:i}=n;return i.delay?this.delay(t,s,e,i):Object.keys(i).length>0?s.apply(this,[...e,i]):s.apply(this,e),!n.options.once})),n.length}once(t,e,n={}){this.on(t,e,Object.assign(Object.assign({},n),{once:!0}))}delay(t,e,n,s){s._t&&clearTimeout(s._t),s._t=setTimeout((()=>{clearTimeout(s._t),Object.keys(s).length>0?e.apply(this,[...n,s]):e.apply(this,n)}),s.delay)}query(t,...e){const n=this.getSubscribers(t,this._events);console.assert(n&&n.length>0,"No subscriber for event: "+t);const s=n.map((t=>{const{fn:n,options:s}=t;return Object.keys(s).length>0?n.apply(this,[...e,s]):n.apply(this,e)}));return Promise.all(s)}getSubscribers(t,e){const n=e[t]||[];return e[t]=n.filter((t=>!t.options.once)),Object.keys(e).filter((e=>e.endsWith("*")&&t.startsWith(e.replace("*","")))).sort(((t,e)=>e.length-t.length)).forEach((s=>n.push(...e[s].map((e=>Object.assign(Object.assign({},e),{options:Object.assign(Object.assign({},e.options),{event:t})})))))),n}}let i;const o="object"==typeof self&&self.self===self&&self||"object"==typeof n.g&&n.g.global===n.g&&n.g;o.app&&o._AppRunVersions?i=o.app:(i=new s,o.app=i,o._AppRunVersions="AppRun-3");const r=i},37:(t,e,n)=>{n.d(e,{Component:()=>f,ROUTER_404_EVENT:()=>m,ROUTER_EVENT:()=>_,app:()=>s.Z,customElement:()=>c,default:()=>y,event:()=>l,on:()=>h,safeHTML:()=>i.eV,update:()=>l});var s=n(752),i=n(559);const o=(t,e={})=>class extends HTMLElement{constructor(){super()}get component(){return this._component}get state(){return this._component.state}static get observedAttributes(){return(e.observedAttributes||[]).map((t=>t.toLowerCase()))}connectedCallback(){if(this.isConnected&&!this._component){const n=e||{};this._shadowRoot=n.shadow?this.attachShadow({mode:"open"}):this;const s=n.observedAttributes||[],i=s.reduce(((t,e)=>{const n=e.toLowerCase();return n!==e&&(t[n]=e),t}),{});this._attrMap=t=>i[t]||t;const o={};Array.from(this.attributes).forEach((t=>o[this._attrMap(t.name)]=t.value)),s.forEach((t=>{void 0!==this[t]&&(o[t]=this[t]),Object.defineProperty(this,t,{get:()=>o[t],set(e){this.attributeChangedCallback(t,o[t],e)},configurable:!0,enumerable:!0})})),requestAnimationFrame((()=>{const e=this.children?Array.from(this.children):[];if(e.forEach((t=>t.parentElement.removeChild(t))),this._component=new t(Object.assign(Object.assign({},o),{children:e})).mount(this._shadowRoot,n),this._component._props=o,this._component.dispatchEvent=this.dispatchEvent.bind(this),this._component.mounted){const t=this._component.mounted(o,e,this._component.state);void 0!==t&&(this._component.state=t)}this.on=this._component.on.bind(this._component),this.run=this._component.run.bind(this._component),!1!==n.render&&this._component.run(".")}))}}disconnectedCallback(){var t,e,n,s;null===(e=null===(t=this._component)||void 0===t?void 0:t.unload)||void 0===e||e.call(t),null===(s=null===(n=this._component)||void 0===n?void 0:n.unmount)||void 0===s||s.call(n),this._component=null}attributeChangedCallback(t,n,s){if(this._component){const i=this._attrMap(t);this._component._props[i]=s,this._component.run("attributeChanged",i,n,s),s!==n&&!1!==e.render&&window.requestAnimationFrame((()=>{this._component.run(".")}))}}},r=(t,e,n)=>{"undefined"!=typeof customElements&&customElements.define(t,o(e,n))},a={meta:new WeakMap,defineMetadata(t,e,n){this.meta.has(n)||this.meta.set(n,{}),this.meta.get(n)[t]=e},getMetadataKeys(t){return t=Object.getPrototypeOf(t),this.meta.get(t)?Object.keys(this.meta.get(t)):[]},getMetadata(t,e){return e=Object.getPrototypeOf(e),this.meta.get(e)?this.meta.get(e)[t]:null}};function l(t,e={}){return(n,s,i)=>{const o=t?t.toString():s;return a.defineMetadata(`apprun-update:${o}`,{name:o,key:s,options:e},n),i}}function h(t,e={}){return function(n,s){const i=t?t.toString():s;a.defineMetadata(`apprun-update:${i}`,{name:i,key:s,options:e},n)}}function c(t,e){return function(n){return r(t,n,e),n}}var u=n(334);const d=new Map;s.Z.find("get-components")||s.Z.on("get-components",(t=>t.components=d));const p=t=>t;class f{constructor(t,e,n,i){this.state=t,this.view=e,this.update=n,this.options=i,this._app=new s.g,this._actions=[],this._global_events=[],this._history=[],this._history_idx=-1,this._history_prev=()=>{this._history_idx--,this._history_idx>=0?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=0},this._history_next=()=>{this._history_idx++,this._history_idx<this._history.length?this.setState(this._history[this._history_idx],{render:!0,history:!1}):this._history_idx=this._history.length-1},this.start=(t=null,e)=>this.mount(t,Object.assign({render:!0},e))}renderState(t,e=null){if(!this.view)return;let n=e||this.view(t);if(s.Z.debug&&s.Z.run("debug",{component:this,_:n?".":"-",state:t,vdom:n,el:this.element}),"object"!=typeof document)return;const i="string"==typeof this.element&&this.element?document.getElementById(this.element)||document.querySelector(this.element):this.element;if(i){const t="_c";this.unload?i._component===this&&i.getAttribute(t)===this.tracking_id||(this.tracking_id=(new Date).valueOf().toString(),i.setAttribute(t,this.tracking_id),"undefined"!=typeof MutationObserver&&(this.observer||(this.observer=new MutationObserver((t=>{t[0].oldValue!==this.tracking_id&&document.body.contains(i)||(this.unload(this.state),this.observer.disconnect(),this.observer=null)}))),this.observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0,attributeFilter:[t]}))):i.removeAttribute&&i.removeAttribute(t),i._component=this}!e&&n&&(n=(0,u.Z)(n,this),s.Z.render(i,n,this)),this.rendered&&this.rendered(this.state)}setState(t,e={render:!0,history:!1}){if(t instanceof Promise)Promise.resolve(t).then((n=>{this.setState(n,e),this._state=t}));else{if(this._state=t,null==t)return;this.state=t,!1!==e.render&&this.renderState(t),!1!==e.history&&this.enable_history&&(this._history=[...this._history,t],this._history_idx=this._history.length-1),"function"==typeof e.callback&&e.callback(this.state)}}mount(t=null,e){var n,i;return console.assert(!this.element,"Component already mounted."),this.options=e=Object.assign(Object.assign({},this.options),e),this.element=t,this.global_event=e.global_event,this.enable_history=!!e.history,this.enable_history&&(this.on(e.history.prev||"history-prev",this._history_prev),this.on(e.history.next||"history-next",this._history_next)),e.route&&(this.update=this.update||{},this.update[e.route]||(this.update[e.route]=p)),this.add_actions(),this.state=null!==(i=null!==(n=this.state)&&void 0!==n?n:this.model)&&void 0!==i?i:{},"function"==typeof this.state&&(this.state=this.state()),this.setState(this.state,{render:!!e.render,history:!0}),s.Z.debug&&(d.get(t)?d.get(t).push(this):d.set(t,[this])),this}is_global_event(t){return t&&(this.global_event||this._global_events.indexOf(t)>=0||t.startsWith("#")||t.startsWith("/")||t.startsWith("@"))}add_action(t,e,n={}){e&&"function"==typeof e&&(n.global&&this._global_events.push(t),this.on(t,((...i)=>{s.Z.debug&&s.Z.run("debug",{component:this,_:">",event:t,p:i,current_state:this.state,options:n});const o=e(this.state,...i);s.Z.debug&&s.Z.run("debug",{component:this,_:"<",event:t,p:i,newState:o,state:this.state,options:n}),this.setState(o,n)}),n))}add_actions(){const t=this.update||{};a.getMetadataKeys(this).forEach((e=>{if(e.startsWith("apprun-update:")){const n=a.getMetadata(e,this);t[n.name]=[this[n.key].bind(this),n.options]}}));const e={};Array.isArray(t)?t.forEach((t=>{const[n,s,i]=t;n.toString().split(",").forEach((t=>e[t.trim()]=[s,i]))})):Object.keys(t).forEach((n=>{const s=t[n];("function"==typeof s||Array.isArray(s))&&n.split(",").forEach((t=>e[t.trim()]=s))})),e["."]||(e["."]=p),Object.keys(e).forEach((t=>{const n=e[t];"function"==typeof n?this.add_action(t,n):Array.isArray(n)&&this.add_action(t,n[0],n[1])}))}run(t,...e){if(this.state instanceof Promise)return Promise.resolve(this.state).then((n=>{this.state=n,this.run(t,...e)}));{const n=t.toString();return this.is_global_event(n)?s.Z.run(n,...e):this._app.run(n,...e)}}on(t,e,n){const i=t.toString();return this._actions.push({name:i,fn:e}),this.is_global_event(i)?s.Z.on(i,e,n):this._app.on(i,e,n)}unmount(){var t;null===(t=this.observer)||void 0===t||t.disconnect(),this._actions.forEach((t=>{const{name:e,fn:n}=t;this.is_global_event(e)?s.Z.off(e,n):this._app.off(e,n)}))}}f.__isAppRunComponent=!0;const _="//",m="///",g=t=>{if(t||(t="#"),t.startsWith("#")){const[e,...n]=t.split("/");s.Z.run(e,...n)||s.Z.run(m,e,...n),s.Z.run(_,e,...n)}else if(t.startsWith("/")){const[e,n,...i]=t.split("/");s.Z.run("/"+n,...i)||s.Z.run(m,"/"+n,...i),s.Z.run(_,"/"+n,...i)}else s.Z.run(t)||s.Z.run(m,t),s.Z.run(_,t)};s.Z.h=s.Z.createElement=i.az,s.Z.render=i.yj,s.Z.Fragment=i.HY,s.Z.webComponent=r,s.Z.safeHTML=i.eV,s.Z.start=(t,e,n,s,i)=>{const o=Object.assign({render:!0,global_event:!0},i),r=new f(e,n,s);return i&&i.rendered&&(r.rendered=i.rendered),r.mount(t,o),r};const v=t=>{};s.Z.on("$",v),s.Z.on("debug",(t=>v)),s.Z.on(_,v),s.Z.on("#",v),s.Z.route=g,s.Z.on("route",(t=>s.Z.route&&s.Z.route(t))),"object"==typeof document&&document.addEventListener("DOMContentLoaded",(()=>{s.Z.route===g&&(window.onpopstate=()=>g(location.hash),document.body.hasAttribute("apprun-no-init")||s.Z["no-init-route"]||g(location.hash))}));const y=s.Z;"object"==typeof window&&(window.Component=f,window._React=window.React,window.React=s.Z,window.on=h,window.customElement=c,window.safeHTML=i.eV)},334:(t,e,n)=>{n.d(e,{Z:()=>a});var s=n(752);const i=(t,e)=>(e?t.state[e]:t.state)||"",o=(t,e,n)=>{if(e){const s=t.state||{};s[e]=n,t.setState(s)}else t.setState(n)},r=(t,e)=>{if(Array.isArray(t))return t.map((t=>r(t,e)));{let{tag:n,props:a,children:l}=t;return n?(a&&Object.keys(a).forEach((t=>{t.startsWith("$")&&(((t,e,n,r)=>{if(t.startsWith("$on")){const n=e[t];if(t=t.substring(1),"boolean"==typeof n)e[t]=e=>r.run?r.run(t,e):s.Z.run(t,e);else if("string"==typeof n)e[t]=t=>r.run?r.run(n,t):s.Z.run(n,t);else if("function"==typeof n)e[t]=t=>r.setState(n(r.state,t));else if(Array.isArray(n)){const[i,...o]=n;"string"==typeof i?e[t]=t=>r.run?r.run(i,...o,t):s.Z.run(i,...o,t):"function"==typeof i&&(e[t]=t=>r.setState(i(r.state,...o,t)))}}else if("$bind"===t){const s=e.type||"text",a="string"==typeof e[t]?e[t]:e.name;if("input"===n)switch(s){case"checkbox":e.checked=i(r,a),e.onclick=t=>o(r,a||t.target.name,t.target.checked);break;case"radio":e.checked=i(r,a)===e.value,e.onclick=t=>o(r,a||t.target.name,t.target.value);break;case"number":case"range":e.value=i(r,a),e.oninput=t=>o(r,a||t.target.name,Number(t.target.value));break;default:e.value=i(r,a),e.oninput=t=>o(r,a||t.target.name,t.target.value)}else"select"===n?(e.value=i(r,a),e.onchange=t=>{t.target.multiple||o(r,a||t.target.name,t.target.value)}):"option"===n?(e.selected=i(r,a),e.onclick=t=>o(r,a||t.target.name,t.target.selected)):"textarea"===n&&(e.innerHTML=i(r,a),e.oninput=t=>o(r,a||t.target.name,t.target.value))}else s.Z.run("$",{key:t,tag:n,props:e,component:r})})(t,a,n,e),delete a[t])})),l&&(l=r(l,e)),{tag:n,props:a,children:l}):t}},a=r},559:(t,e,n)=>{n.d(e,{HY:()=>i,az:()=>a,eV:()=>d,yj:()=>h});var s=n(334);function i(t,...e){return r(e)}const o="_props";function r(t){const e=[],n=t=>{null!=t&&""!==t&&!1!==t&&e.push("function"==typeof t||"object"==typeof t?t:`${t}`)};return t&&t.forEach((t=>{Array.isArray(t)?t.forEach((t=>n(t))):n(t)})),e}function a(t,e,...n){const s=r(n);if("string"==typeof t)return{tag:t,props:e,children:s};if(Array.isArray(t))return t;if(void 0===t&&n)return s;if(Object.getPrototypeOf(t).__isAppRunComponent)return{tag:t,props:e,children:s};if("function"==typeof t)return t(e,s);throw new Error(`Unknown tag in vdom ${t}`)}const l=new WeakMap,h=(t,e,n={})=>{null!=e&&!1!==e&&function(t,e,n={}){if(null==e||!1===e)return;if(e=m(e,n),!t)return;const s="SVG"===t.nodeName;Array.isArray(e)?u(t,e,s):u(t,[e],s)}("string"==typeof t&&t?document.getElementById(t)||document.querySelector(t):t,e=(0,s.Z)(e,n),n)};function c(t,e,n){3!==e._op&&(n=n||"svg"===e.tag,function(t,e){const n=t.nodeName,s=`${e.tag||""}`;return n.toUpperCase()===s.toUpperCase()}(t,e)?(!(2&e._op)&&u(t,e.children,n),!(1&e._op)&&_(t,e.props,n)):t.parentNode.replaceChild(f(e,n),t))}function u(t,e,n){var s,i;const o=(null===(s=t.childNodes)||void 0===s?void 0:s.length)||0,r=(null==e?void 0:e.length)||0,a=Math.min(o,r);for(let s=0;s<a;s++){const i=e[s];if(3===i._op)continue;const o=t.childNodes[s];if("string"==typeof i)o.textContent!==i&&(3===o.nodeType?o.nodeValue=i:t.replaceChild(p(i),o));else if(i instanceof HTMLElement||i instanceof SVGElement)t.insertBefore(i,o);else{const e=i.props&&i.props.key;if(e)if(o.key===e)c(t.childNodes[s],i,n);else{const r=l[e];if(r){const e=r.nextSibling;t.insertBefore(r,o),e?t.insertBefore(o,e):t.appendChild(o),c(t.childNodes[s],i,n)}else t.replaceChild(f(i,n),o)}else c(t.childNodes[s],i,n)}}let h=(null===(i=t.childNodes)||void 0===i?void 0:i.length)||0;for(;h>a;)t.removeChild(t.lastChild),h--;if(r>a){const s=document.createDocumentFragment();for(let t=a;t<e.length;t++)s.appendChild(f(e[t],n));t.appendChild(s)}}const d=t=>{const e=document.createElement("section");return e.insertAdjacentHTML("afterbegin",t),Array.from(e.children)};function p(t){if(0===(null==t?void 0:t.indexOf("_html:"))){const e=document.createElement("div");return e.insertAdjacentHTML("afterbegin",t.substring(6)),e}return document.createTextNode(null!=t?t:"")}function f(t,e){if(t instanceof HTMLElement||t instanceof SVGElement)return t;if("string"==typeof t)return p(t);if(!t.tag||"function"==typeof t.tag)return p(JSON.stringify(t));const n=(e=e||"svg"===t.tag)?document.createElementNS("http://www.w3.org/2000/svg",t.tag):document.createElement(t.tag);return _(n,t.props,e),t.children&&t.children.forEach((t=>n.appendChild(f(t,e)))),n}function _(t,e,n){const s=t[o]||{};e=function(t,e){e.class=e.class||e.className,delete e.className;const n={};return t&&Object.keys(t).forEach((t=>n[t]=null)),e&&Object.keys(e).forEach((t=>n[t]=e[t])),n}(s,e||{}),t[o]=e;for(const s in e){const i=e[s];if(s.startsWith("data-")){const e=s.substring(5).replace(/-(\w)/g,(t=>t[1].toUpperCase()));t.dataset[e]!==i&&(i||""===i?t.dataset[e]=i:delete t.dataset[e])}else if("style"===s)if(t.style.cssText&&(t.style.cssText=""),"string"==typeof i)t.style.cssText=i;else for(const e in i)t.style[e]!==i[e]&&(t.style[e]=i[e]);else if(s.startsWith("xlink")){const e=s.replace("xlink","").toLowerCase();null==i||!1===i?t.removeAttributeNS("http://www.w3.org/1999/xlink",e):t.setAttributeNS("http://www.w3.org/1999/xlink",e,i)}else s.startsWith("on")?i&&"function"!=typeof i?"string"==typeof i&&(i?t.setAttribute(s,i):t.removeAttribute(s)):t[s]=i:/^id$|^class$|^list$|^readonly$|^contenteditable$|^role|-/g.test(s)||n?t.getAttribute(s)!==i&&(i?t.setAttribute(s,i):t.removeAttribute(s)):t[s]!==i&&(t[s]=i);"key"===s&&i&&(l[i]=t)}e&&"function"==typeof e.ref&&window.requestAnimationFrame((()=>e.ref(t)))}function m(t,e,n=0){var s;if("string"==typeof t)return t;if(Array.isArray(t))return t.map((t=>m(t,e,n++)));let i=t;if(t&&"function"==typeof t.tag&&Object.getPrototypeOf(t.tag).__isAppRunComponent&&(i=function(t,e,n){const{tag:s,props:i,children:o}=t;let r=`_${n}`,a=i&&i.id;a?r=a:a=`_${n}${Date.now()}`;let l="section";i&&i.as&&(l=i.as,delete i.as),e.__componentCache||(e.__componentCache={});let h=e.__componentCache[r];if(h&&h instanceof s&&h.element)h.renderState(h.state);else{const t=document.createElement(l);h=e.__componentCache[r]=new s(Object.assign(Object.assign({},i),{children:o})).start(t)}if(h.mounted){const t=h.mounted(i,o,h.state);void 0!==t&&h.setState(t)}return _(h.element,i,!1),h.element}(t,e,n)),i&&Array.isArray(i.children)){const t=null===(s=i.props)||void 0===s?void 0:s._component;if(t){let e=0;i.children=i.children.map((n=>m(n,t,e++)))}else i.children=i.children.map((t=>m(t,e,n++)))}return i}},875:(t,e,n)=>{n.d(e,{XM:()=>i,Xe:()=>o,pX:()=>s});const s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>(...e)=>({_$litDirective$:t,values:e});class o{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},692:(t,e,n)=>{var s;n.d(e,{Jb:()=>w,Ld:()=>E,YP:()=>$,dy:()=>A,sY:()=>x});const i=globalThis.trustedTypes,o=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,a="?"+r,l=`<${a}>`,h=document,c=(t="")=>h.createComment(t),u=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,p=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,f=/-->/g,_=/>/g,m=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,v=/"/g,y=/^(?:script|style|textarea|title)$/i,b=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),A=b(1),$=b(2),w=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,e,n)=>{var s,i;const o=null!==(s=null==n?void 0:n.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;o._$litPart$=r=new Z(e.insertBefore(c(),t),t,void 0,null!=n?n:{})}return r._$AI(t),r},C=h.createTreeWalker(h,129,null,!1),O=(t,e)=>{const n=t.length-1,s=[];let i,a=2===e?"<svg>":"",h=p;for(let e=0;e<n;e++){const n=t[e];let o,c,u=-1,d=0;for(;d<n.length&&(h.lastIndex=d,c=h.exec(n),null!==c);)d=h.lastIndex,h===p?"!--"===c[1]?h=f:void 0!==c[1]?h=_:void 0!==c[2]?(y.test(c[2])&&(i=RegExp("</"+c[2],"g")),h=m):void 0!==c[3]&&(h=m):h===m?">"===c[0]?(h=null!=i?i:p,u=-1):void 0===c[1]?u=-2:(u=h.lastIndex-c[2].length,o=c[1],h=void 0===c[3]?m:'"'===c[3]?v:g):h===v||h===g?h=m:h===f||h===_?h=p:(h=m,i=void 0);const b=h===m&&t[e+1].startsWith("/>")?" ":"";a+=h===p?n+l:u>=0?(s.push(o),n.slice(0,u)+"$lit$"+n.slice(u)+r+b):n+r+(-2===u?(s.push(void 0),e):b)}const c=a+(t[n]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==o?o.createHTML(c):c,s]};class S{constructor({strings:t,_$litType$:e},n){let s;this.parts=[];let o=0,l=0;const h=t.length-1,u=this.parts,[d,p]=O(t,e);if(this.el=S.createElement(d,n),C.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=C.nextNode())&&u.length<h;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(r)){const n=p[l++];if(t.push(e),void 0!==n){const t=s.getAttribute(n.toLowerCase()+"$lit$").split(r),e=/([.?@])?(.*)/.exec(n);u.push({type:1,index:o,name:e[2],strings:t,ctor:"."===e[1]?H:"?"===e[1]?R:"@"===e[1]?L:j})}else u.push({type:6,index:o})}for(const e of t)s.removeAttribute(e)}if(y.test(s.tagName)){const t=s.textContent.split(r),e=t.length-1;if(e>0){s.textContent=i?i.emptyScript:"";for(let n=0;n<e;n++)s.append(t[n],c()),C.nextNode(),u.push({type:2,index:++o});s.append(t[e],c())}}}else if(8===s.nodeType)if(s.data===a)u.push({type:2,index:o});else{let t=-1;for(;-1!==(t=s.data.indexOf(r,t+1));)u.push({type:7,index:o}),t+=r.length-1}o++}}static createElement(t,e){const n=h.createElement("template");return n.innerHTML=t,n}}function N(t,e,n=t,s){var i,o,r,a;if(e===w)return e;let l=void 0!==s?null===(i=n._$Cl)||void 0===i?void 0:i[s]:n._$Cu;const h=u(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,n,s)),void 0!==s?(null!==(r=(a=n)._$Cl)&&void 0!==r?r:a._$Cl=[])[s]=l:n._$Cu=l),void 0!==l&&(e=N(t,l._$AS(t,e.values),l,s)),e}class M{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:s}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:h).importNode(n,!0);C.currentNode=i;let o=C.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new Z(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new P(o,this,t)),this.v.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=C.nextNode(),r++)}return i}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class Z{constructor(t,e,n,s){var i;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=s,this._$Cg=null===(i=null==s?void 0:s.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),u(t)?t===E||null==t||""===t?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==w&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):(t=>{var e;return d(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==E&&u(this._$AH)?this._$AA.nextSibling.data=t:this.k(h.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:s}=t,i="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(n);else{const t=new M(i,this),e=t.p(this.options);t.m(n),this.k(e),this._$AH=t}}_$AC(t){let e=T.get(t.strings);return void 0===e&&T.set(t.strings,e=new S(t)),e}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,s=0;for(const i of t)s===e.length?e.push(n=new Z(this.A(c()),this.A(c()),this,this.options)):n=e[s],n._$AI(i),s++;s<e.length&&(this._$AR(n&&n._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class j{constructor(t,e,n,s,i){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,s){const i=this.strings;let o=!1;if(void 0===i)t=N(this,t,e,0),o=!u(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else{const s=t;let r,a;for(t=i[0],r=0;r<i.length-1;r++)a=N(this,s[n+r],e,r),a===w&&(a=this._$AH[r]),o||(o=!u(a)||a!==this._$AH[r]),a===E?t=E:t!==E&&(t+=(null!=a?a:"")+i[r+1]),this._$AH[r]=a}o&&!s&&this.C(t)}C(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class H extends j{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===E?void 0:t}}const k=i?i.emptyScript:"";class R extends j{constructor(){super(...arguments),this.type=4}C(t){t&&t!==E?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class L extends j{constructor(t,e,n,s,i){super(t,e,n,s,i),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=N(this,t,e,0))&&void 0!==n?n:E)===w)return;const s=this._$AH,i=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==E&&(s===E||i);i&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class P{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}}const U=window.litHtmlPolyfillSupport;null==U||U(S,Z),(null!==(s=globalThis.litHtmlVersions)&&void 0!==s?s:globalThis.litHtmlVersions=[]).push("2.2.1")}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var o=e[s]={exports:{}};return t[s](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var s={};return(()=>{n.r(s),n.d(s,{Component:()=>t.Component,ROUTER_404_EVENT:()=>t.ROUTER_404_EVENT,ROUTER_EVENT:()=>t.ROUTER_EVENT,app:()=>t.app,customElement:()=>t.customElement,default:()=>u,event:()=>t.event,html:()=>i.dy,on:()=>t.on,render:()=>l,run:()=>c,safeHTML:()=>t.safeHTML,svg:()=>i.YP,update:()=>t.update});var t=n(37),e=n(559),i=n(692),o=n(875);class r extends o.Xe{constructor(t){if(super(t),this.it=i.Ld,t.type!==o.pX.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===i.Ld||null==t)return this.ft=void 0,this.it=t;if(t===i.Jb)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}}r.directiveName="unsafeHTML",r.resultType=1;const a=(0,o.XM)(r);function l(t,n,s){n&&("string"==typeof n?(t._$litPart$||t.replaceChildren(),(0,i.sY)(i.dy`${a(n)}`,t)):"_$litType$"in n?(t._$litPart$||t.replaceChildren(),(0,i.sY)(n,t)):((0,e.yj)(t,n,s),t._$litPart$=void 0))}class h extends o.Xe{constructor(t){if(super(t),t.type!==o.pX.EVENT)throw new Error("${run} can only be used in event handlers")}update(e,n){let{element:s,name:i}=e;const o=()=>{let t=s._component;for(;!t&&s;)s=s.parentElement,t=s&&s._component;return console.assert(!!t,"Component not found."),t},[r,...a]=n;return"string"==typeof r?s[`on${i}`]=e=>{const n=o();n?n.run(r,...a,e):t.default.run(r,...a,e)}:"function"==typeof r&&(s[`on${i}`]=t=>o().setState(r(o().state,...a,t))),this.render()}render(){return i.Jb}}const c=(0,o.XM)(h);t.default.createElement=e.az,t.default.render=l,t.default.Fragment=e.HY;const u=t.default;"object"==typeof window&&(window.React=window._React||t.default,window.html=i.dy,window.svg=i.YP,window.run=c)})(),s})()));
//# sourceMappingURL=apprun-html.js.map