var _a;
import app from './app';
import toHTML from './vdom-to-html';
import { _createEventTests, _createStateTests } from './apprun-dev-tools-tests';
import yaml from 'js-yaml';
function replacer(key, value) {
    if (typeof value === 'function')
        return value.toString(); // value.toString();
    return ['', null].includes(value) || (typeof value === 'object' && (value.length === 0 || Object.keys(value).length === 0)) ? undefined : value;
}
function createProxy(obj) {
    const handler = {
        get(target, property, receiver) {
            // Get the property value
            const value = Reflect.get(target, property, receiver);
            // If the value is an object (including arrays), proxy it
            if (typeof value === 'object' && value !== null) {
                if (Array.isArray(value)) {
                    // Proxy each element of the array if it's an object
                    return value.map(item => createProxy(item));
                }
                else {
                    // Recursively proxy the object
                    return createProxy(value);
                }
            }
            return `{${property}}`;
        },
    };
    return Array.isArray(obj) ?
        obj.map(item => createProxy(item)) : new Proxy(obj, handler);
}
function htmlEncode(input) {
    return !input ? input : input.toString()
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}
function getVDOM(component) {
    let view;
    if (typeof component.state === 'object') {
        const proxy = createProxy(component.state);
        view = component.view(proxy);
    }
    else {
        view = component.view(component.state);
    }
    return view;
}
app['debug'] = true;
window['_apprun-help'] = ['', () => {
        Object.keys(window).forEach(cmd => {
            if (cmd.startsWith('_apprun-')) {
                cmd === '_apprun-help' ?
                    console.log('AppRun Commands:') :
                    console.log(`* ${cmd.substring(8)}: ${window[cmd][0]}`);
            }
        });
    }];
function newWin(html) {
    const win = window.open('', '_apprun_debug', 'toolbar=0');
    win.document.write(`<html>
  <title>AppRun Analyzer | ${document.location.href}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI" }
    li { margin-left: 80px; }
  </style>
  <body>
  <div id="main">${html}</div>
  </script>
  </body>
  </html>`);
    win.document.close();
}
const get_components = () => {
    const o = { components: {} };
    app.run('get-components', o);
    const { components } = o;
    return components;
};
const viewElement = element => app.h("div", null,
    element.tagName.toLowerCase(),
    element.id ? '#' + element.id : '',
    ' ',
    element.className && element.className.split(' ').map(c => '.' + c).join());
const viewComponents = state => {
    const Components = ({ components }) => app.h("ul", null, components.map(component => {
        const vdom = getVDOM(component);
        const events = component['_actions'].map(a => a.name);
        const component_def = {
            state: component.state,
            view: vdom,
            actions: events,
            update: component.update
        };
        return app.h("li", null,
            app.h("div", null, component.constructor.name),
            app.h("div", null,
                app.h("pre", null, htmlEncode(yaml.dump(component_def, { replacer })))),
            app.h("br", null));
    }));
    return app.h("ul", null, state.map(({ element, comps }) => app.h("li", null,
        app.h("div", null, viewElement(element)),
        app.h(Components, { components: comps }))));
};
const viewEvents = state => {
    const Components = ({ components }) => app.h("ul", null, components.map(component => app.h("li", null,
        app.h("div", null, component.constructor.name))));
    const Events = ({ events, global }) => app.h("ul", null, events && events
        .filter(event => event.global === global && event.event !== '.')
        .map(({ event, components }) => app.h("li", null,
        app.h("div", null, event),
        app.h(Components, { components: components }))));
    return app.h("div", null,
        app.h("div", null, "GLOBAL EVENTS"),
        app.h(Events, { events: state, global: true }),
        app.h("div", null, "LOCAL EVENTS"),
        app.h(Events, { events: state, global: false }));
};
const _events = (print) => {
    const global_events = app['_events'];
    const events = {};
    const cache = get_components();
    const add_component = component => component['_actions'].forEach(event => {
        events[event.name] = events[event.name] || [];
        events[event.name].push(component);
    });
    if (cache instanceof Map) {
        for (let [key, comps] of cache) {
            comps.forEach(add_component);
        }
    }
    else {
        Object.keys(cache).forEach(el => cache[el].forEach(add_component));
    }
    const data = [];
    Object.keys(events).forEach(event => {
        data.push({ event, components: events[event], global: global_events[event] ? true : false });
    });
    data.sort(((a, b) => a.event > b.event ? 1 : -1)).map(e => e.event);
    if (print) {
        const vdom = viewEvents(data);
        newWin(toHTML(vdom));
    }
    else {
        console.log('=== GLOBAL EVENTS ===');
        data.filter(event => event.global && event.event !== '.')
            .forEach(({ event, components }) => console.log({ event }, components));
        console.log('=== LOCAL EVENTS ===');
        data.filter(event => !event.global && event.event !== '.')
            .forEach(({ event, components }) => console.log({ event }, components));
    }
};
const _components = (print) => {
    const components = get_components();
    const data = [];
    if (components instanceof Map) {
        for (let [key, comps] of components) {
            const element = typeof key === 'string' ? document.getElementById(key) || document.querySelector(key) : key;
            data.push({ element, comps });
        }
    }
    else {
        Object.keys(components).forEach(el => {
            const element = typeof el === 'string' ? document.getElementById(el) || document.querySelector(el) : el;
            data.push({ element, comps: components[el] });
        });
    }
    if (print) {
        const vdom = viewComponents(data);
        newWin(toHTML(vdom));
    }
    else {
        data.forEach(({ element, comps }) => console.log(element, comps));
    }
};
let debugging = Number((_a = window === null || window === void 0 ? void 0 : window.localStorage) === null || _a === void 0 ? void 0 : _a.getItem('__apprun_debugging__')) || 0;
app.on('debug', p => {
    if (debugging & 1 && p.event)
        console.log(p);
    if (debugging & 2 && p.vdom)
        console.log(p);
});
window['_apprun-components'] = ['components [print]', (p) => {
        _components(p === 'print');
    }];
window['_apprun-events'] = ['events [print]', (p) => {
        _events(p === 'print');
    }];
window['_apprun-log'] = ['log [event|view] on|off', (a1, a2) => {
        var _a;
        if (a1 === 'on') {
            debugging = 3;
        }
        else if (a1 === 'off') {
            debugging = 0;
        }
        else if (a1 === 'event') {
            if (a2 === 'on') {
                debugging |= 1;
            }
            else if (a2 === 'off') {
                debugging &= ~1;
            }
        }
        else if (a1 === 'view') {
            if (a2 === 'on') {
                debugging |= 2;
            }
            else if (a2 === 'off') {
                debugging &= ~2;
            }
        }
        console.log(`* log ${a1} ${a2 || ''}`);
        (_a = window === null || window === void 0 ? void 0 : window.localStorage) === null || _a === void 0 ? void 0 : _a.setItem('__apprun_debugging__', `${debugging}`);
    }];
window['_apprun-create-event-tests'] = ['create-event-tests',
    () => _createEventTests()
];
window['_apprun-create-state-tests'] = ['create-state-tests <start|stop>',
    (p) => _createStateTests(p)
];
window['_apprun'] = (strings) => {
    const [cmd, ...p] = strings[0].split(' ').filter(c => !!c);
    const command = window[`_apprun-${cmd}`];
    if (command)
        command[1](...p);
    else
        window['_apprun-help'][1]();
};
console.info('AppRun DevTools 2.27: type "_apprun `help`" to list all available commands.');
const reduxExt = window['__REDUX_DEVTOOLS_EXTENSION__'];
if (reduxExt) {
    let devTools_running = false;
    const devTools = window['__REDUX_DEVTOOLS_EXTENSION__'].connect();
    if (devTools) {
        const hash = location.hash || '#';
        devTools.send(hash, '');
        const buf = [{ component: null, state: '' }];
        console.info('Connected to the Redux DevTools');
        devTools.subscribe((message) => {
            if (message.type === 'START')
                devTools_running = true;
            else if (message.type === 'STOP')
                devTools_running = false;
            else if (message.type === 'DISPATCH') {
                // console.log('From Redux DevTools: ', message);
                const idx = message.payload.index;
                if (idx === 0) {
                    app.run(hash);
                }
                else {
                    const { component, state } = buf[idx];
                    component === null || component === void 0 ? void 0 : component.setState(state);
                }
            }
        });
        const send = (component, action, state) => {
            if (state == null)
                return;
            buf.push({ component, state });
            devTools.send(action, state);
        };
        app.on('debug', p => {
            if (devTools_running && p.event) {
                const state = p.newState;
                const type = p.event;
                const payload = p.p;
                const action = { type, payload };
                const component = p.component;
                if (state instanceof Promise) {
                    state.then(s => send(component, action, s));
                }
                else {
                    send(component, action, state);
                }
            }
        });
    }
}
//# sourceMappingURL=apprun-dev-tools.js.map