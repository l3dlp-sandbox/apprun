!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.apprun=e():t.apprun=e()}(this,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}({15:function(t,e){var n;function o(t){(n=window.open("",t)).document.write("<html>\n  <title>AppRun Analyzer | "+document.location.href+'</title>\n  <style>\n    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" }\n  </style>\n  <body><pre>')}function r(t){n.document.write(t+"\n")}function c(){n.document.write("</pre>\n  </body>\n  </html>"),n.document.close()}app.debug=!0;var s=!1,u=[];app.on("debug",function(t){s&&t.vdom&&(u.push(t),console.log("* "+u.length+" state(s) recorded."))});window["_apprun-create-event-tests"]=["create-event-tests",function(){return function(){var t={components:{}};app.run("get-components",t);var e=t.components;o(""),Object.keys(e).forEach(function(t){e[t].forEach(function(t){r("const component = "+t.constructor.name+";"),r("describe('"+t.constructor.name+"', ()=>{"),t._actions.forEach(function(t){r("  it ('should handle event: "+t.name+"', ()=>{"),r("    component.run('"+t.name+"');"),r("    expect(component.state).toBeTruthy();"),r("  })")}),r("});")})}),c()}()}],window["_apprun-create-state-tests"]=["create-state-tests <start|stop>",function(t){var e;"start"===(e=t)?(u=[],s=!0,console.log("* State logging started.")):"stop"===e?(0!==u.length?(o(""),u.forEach(function(t,e){r("  it ('view snapshot: #"+(e+1)+"', ()=>{"),r("    const component = "+t.component.constructor.name+";"),r("    const state = "+JSON.stringify(t.state,void 0,2)+";"),r("    const vdom = component['view'](state);"),r("    expect(JSON.stringify(vdom)).toMatchSnapshot();"),r("  })")}),c()):console.log("* No state recorded."),s=!1,u=[],console.log("* State logging stopped.")):console.log("create-state-tests <start|stop>")}]}})});
//# sourceMappingURL=apprun-dev-tools-tests.js.map