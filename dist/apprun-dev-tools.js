!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.apprun=t():e.apprun=t()}(this,(()=>(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),e.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};e.r(t);let n;const o="object"==typeof self&&self.self===self&&self||"object"==typeof e.g&&e.g.global===e.g&&e.g;o.app&&o._AppRunVersions?n=o.app:(n=new class{constructor(){this._events={}}on(e,t,n={}){this._events[e]=this._events[e]||[],this._events[e].push({fn:t,options:n})}off(e,t){const n=this._events[e]||[];this._events[e]=n.filter((e=>e.fn!==t))}find(e){return this._events[e]}run(e,...t){const n=this.getSubscribers(e,this._events);return console.assert(n&&n.length>0,"No subscriber for event: "+e),n.forEach((n=>{const{fn:o,options:s}=n;return s.delay?this.delay(e,o,t,s):Object.keys(s).length>0?o.apply(this,[...t,s]):o.apply(this,t),!n.options.once})),n.length}once(e,t,n={}){this.on(e,t,Object.assign(Object.assign({},n),{once:!0}))}delay(e,t,n,o){o._t&&clearTimeout(o._t),o._t=setTimeout((()=>{clearTimeout(o._t),Object.keys(o).length>0?t.apply(this,[...n,o]):t.apply(this,n)}),o.delay)}query(e,...t){const n=this.getSubscribers(e,this._events);console.assert(n&&n.length>0,"No subscriber for event: "+e);const o=n.map((e=>{const{fn:n,options:o}=e;return Object.keys(o).length>0?n.apply(this,[...t,o]):n.apply(this,t)}));return Promise.all(o)}getSubscribers(e,t){const n=t[e]||[];return t[e]=n.filter((e=>!e.options.once)),Object.keys(t).filter((t=>t.endsWith("*")&&e.startsWith(t.replace("*","")))).sort(((e,t)=>t.length-e.length)).forEach((o=>n.push(...t[o].map((t=>Object.assign(Object.assign({},t),{options:Object.assign(Object.assign({},t.options),{event:e})})))))),n}},o.app=n,o._AppRunVersions="AppRun-3");const s=n;function l(e){return e.map((e=>i(e))).join("")}function c(e){for(var t in e)null==e[t]?delete e[t]:"object"==typeof e[t]&&c(e[t])}function i(e){if(!e)return"";if("_$litType$"in e)return e.toString();if(c(e),Array.isArray(e))return l(e);if("string"==typeof e)return e.startsWith("_html:")?e.substring(6):e;if(e.tag){const t=e.props?function(e){return Object.keys(e).map((t=>{return` ${"className"===t?"class":t}="${n=e[t],"object"==typeof n?Object.keys(n).map((e=>`${e}:${n[e]}`)).join(";"):n.toString()}"`;var n})).join("")}(e.props):"",n=e.children?l(e.children):"";return`<${e.tag}${t}>${n}</${e.tag}>`}return"object"==typeof e?JSON.stringify(e):void 0}const r=i;let a;function p(e){a=window.open("",e),a.document.write(`<html>\n  <title>AppRun Analyzer | ${document.location.href}</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" }\n  </style>\n  <body><pre>`)}function u(e){a.document.write(e+"\n")}function f(){a.document.write("</pre>\n  </body>\n  </html>"),a.document.close()}app.debug=!0;const d=e=>{u(`import ${e.constructor.name} from '../src/${e.constructor.name}'`),u(`describe('${e.constructor.name}', ()=>{`),e._actions.forEach((t=>{"."!==t.name&&(u(`  it ('should handle event: ${t.name}', (done)=>{`),u(`    const component = new ${e.constructor.name}().mount();`),u(`    component.run('${t.name}');`),u("    setTimeout(() => {"),u("      //expect(?).toHaveBeenCalled();"),u("      //expect(component.state).toBe(?);"),u("    done();"),u("  })"))})),u("});")};let m=!1,h=[];app.on("debug",(e=>{m&&e.vdom&&(h.push(e),console.log(`* ${h.length} state(s) recorded.`))}));var g;function v(e){const t=window.open("","_apprun_debug","toolbar=0");t.document.write(`<html>\n  <title>AppRun Analyzer | ${document.location.href}</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" }\n    li { margin-left: 80px; }\n  </style>\n  <body>\n  <div id="main">${e}</div>\n  <\/script>\n  </body>\n  </html>`),t.document.close()}s.debug=!0,window["_apprun-help"]=["",()=>{Object.keys(window).forEach((e=>{e.startsWith("_apprun-")&&("_apprun-help"===e?console.log("AppRun Commands:"):console.log(`* ${e.substring(8)}: ${window[e][0]}`))}))}];const y=()=>{const e={components:{}};s.run("get-components",e);const{components:t}=e;return t};let b=Number(null===(g=null===window||void 0===window?void 0:window.localStorage)||void 0===g?void 0:g.getItem("__apprun_debugging__"))||0;if(s.on("debug",(e=>{1&b&&e.event&&console.log(e),2&b&&e.vdom&&console.log(e)})),window["_apprun-components"]=["components [print]",e=>{(e=>{const t=y(),n=[];if(t instanceof Map)for(let[e,o]of t){const t="string"==typeof e?document.getElementById(e)||document.querySelector(e):e;n.push({element:t,comps:o})}else Object.keys(t).forEach((e=>{const o="string"==typeof e?document.getElementById(e)||document.querySelector(e):e;n.push({element:o,comps:t[e]})}));if(e){const e=(e=>{const t=({events:e})=>s.h("ul",null,e&&e.filter((e=>"."!==e.name)).map((e=>s.h("li",null,e.name)))),n=({components:e})=>s.h("ul",null,e.map((e=>s.h("li",null,s.h("div",null,e.constructor.name),s.h(t,{events:e._actions})))));return s.h("ul",null,e.map((({element:e,comps:t})=>s.h("li",null,s.h("div",null,(e=>s.h("div",null,e.tagName.toLowerCase(),e.id?"#"+e.id:""," ",e.className&&e.className.split(" ").map((e=>"."+e)).join()))(e)),s.h(n,{components:t})))))})(n);v(r(e))}else n.forEach((({element:e,comps:t})=>console.log(e,t)))})("print"===e)}],window["_apprun-events"]=["events [print]",e=>{(e=>{const t=s._events,n={},o=y(),l=e=>e._actions.forEach((t=>{n[t.name]=n[t.name]||[],n[t.name].push(e)}));if(o instanceof Map)for(let[e,t]of o)t.forEach(l);else Object.keys(o).forEach((e=>o[e].forEach(l)));const c=[];if(Object.keys(n).forEach((e=>{c.push({event:e,components:n[e],global:!!t[e]})})),c.sort(((e,t)=>e.event>t.event?1:-1)).map((e=>e.event)),e){const e=(e=>{const t=({components:e})=>s.h("ul",null,e.map((e=>s.h("li",null,s.h("div",null,e.constructor.name))))),n=({events:e,global:n})=>s.h("ul",null,e&&e.filter((e=>e.global===n&&"."!==e.event)).map((({event:e,components:n})=>s.h("li",null,s.h("div",null,e),s.h(t,{components:n})))));return s.h("div",null,s.h("div",null,"GLOBAL EVENTS"),s.h(n,{events:e,global:!0}),s.h("div",null,"LOCAL EVENTS"),s.h(n,{events:e,global:!1}))})(c);v(r(e))}else console.log("=== GLOBAL EVENTS ==="),c.filter((e=>e.global&&"."!==e.event)).forEach((({event:e,components:t})=>console.log({event:e},t))),console.log("=== LOCAL EVENTS ==="),c.filter((e=>!e.global&&"."!==e.event)).forEach((({event:e,components:t})=>console.log({event:e},t)))})("print"===e)}],window["_apprun-log"]=["log [event|view] on|off",(e,t)=>{var n;"on"===e?b=3:"off"===e?b=0:"event"===e?"on"===t?b|=1:"off"===t&&(b&=-2):"view"===e&&("on"===t?b|=2:"off"===t&&(b&=-3)),console.log(`* log ${e} ${t||""}`),null===(n=null===window||void 0===window?void 0:window.localStorage)||void 0===n||n.setItem("__apprun_debugging__",`${b}`)}],window["_apprun-create-event-tests"]=["create-event-tests",()=>(()=>{const e={components:{}};app.run("get-components",e);const{components:t}=e;if(p(""),t instanceof Map)for(let[e,n]of t)n.forEach(d);else Object.keys(t).forEach((e=>{t[e].forEach(d)}));f()})()],window["_apprun-create-state-tests"]=["create-state-tests <start|stop>",e=>{var t;"start"===(t=e)?(h=[],m=!0,console.log("* State logging started.")):"stop"===t?(0!==h.length?(p(""),h.forEach(((e,t)=>{u(`  it ('view snapshot: #${t+1}', ()=>{`),u(`    const component = new ${e.component.constructor.name}()`),u(`    const state = ${JSON.stringify(e.state,void 0,2)};`),u("    const vdom = component['view'](state);"),u("    expect(JSON.stringify(vdom)).toMatchSnapshot();"),u("  })")})),f()):console.log("* No state recorded."),m=!1,h=[],console.log("* State logging stopped.")):console.log("create-state-tests <start|stop>")}],window._apprun=e=>{const[t,...n]=e[0].split(" ").filter((e=>!!e)),o=window[`_apprun-${t}`];o?o[1](...n):window["_apprun-help"][1]()},console.info('AppRun DevTools 2.27: type "_apprun `help`" to list all available commands.'),window.__REDUX_DEVTOOLS_EXTENSION__){let e=!1;const t=window.__REDUX_DEVTOOLS_EXTENSION__.connect();if(t){const n=location.hash||"#";t.send(n,"");const o=[{component:null,state:""}];console.info("Connected to the Redux DevTools"),t.subscribe((t=>{if("START"===t.type)e=!0;else if("STOP"===t.type)e=!1;else if("DISPATCH"===t.type){const e=t.payload.index;if(0===e)s.run(n);else{const{component:t,state:n}=o[e];null==t||t.setState(n)}}}));const l=(e,n,s)=>{null!=s&&(o.push({component:e,state:s}),t.send(n,s))};s.on("debug",(t=>{if(e&&t.event){const e=t.newState,n={type:t.event,payload:t.p},o=t.component;e instanceof Promise?e.then((e=>l(o,n,e))):l(o,n,e)}}))}}return t})()));
//# sourceMappingURL=apprun-dev-tools.js.map