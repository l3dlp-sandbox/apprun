import webComponent, { CustomElementOptions } from './web-component';

/**
 * TypeScript Decorators for AppRun Components
 * 
 * This file provides decorators that enable:
 * 1. Event Handler Registration
 *    - @on(): Subscribe to events with options
 *    - @update(): Define state updates with metadata
 * 
 * 2. Web Component Integration
 *    - @customElement(): Register as custom element with options
 *    - Handles shadow DOM and attribute observation
 * 
 * 3. Metadata Management
 *    - Custom Reflect implementation for decorator metadata
 *    - Stores event handler and update metadata
 *    - Supports runtime reflection for dynamic behavior
 * 
 * Usage:
 * ```ts
 * @customElement('my-element')
 * class MyComponent extends Component {
 *   @on('event')  
 *   handler(state, ...args) {
 *     // Handle event
 *   }
 * 
 *   @update('event') 
 *   updater(state, ...args) {
 *     // Update state
 *   }
 * }
 * ```
 */

// tslint:disable:no-invalid-this
export const Reflect = {

  meta: new WeakMap(),

  defineMetadata(metadataKey, metadataValue, target) {
    if (!this.meta.has(target)) this.meta.set(target, {});
    this.meta.get(target)[metadataKey] = metadataValue;
  },

  getMetadataKeys(target) {
    target = Object.getPrototypeOf(target);
    return this.meta.get(target) ? Object.keys(this.meta.get(target)) : [];
  },

  getMetadata(metadataKey, target) {
    target = Object.getPrototypeOf(target);
    return this.meta.get(target) ? this.meta.get(target)[metadataKey] : null;
  }
}

export function update<E=string>(events?: E, options: any = {}) {
  return (target: any, key: string, descriptor: any) => {
    const name = events ? events.toString() : key;
    Reflect.defineMetadata(`apprun-update:${name}`,
      { name, key, options }, target);
    return descriptor;
  }
}

export function on<E = string>(events?: E, options: any = {}) {
  return function (target: any, key: string) {
    const name = events ? events.toString() : key;
    Reflect.defineMetadata(`apprun-update:${name}`,
      { name, key, options }, target)
  }
}

export function customElement(name: string, options?: CustomElementOptions) {
  return function _customElement<T extends { new(...args: any[]): {} }>(constructor: T) {
    webComponent(name, constructor, options);
    return constructor;
  }
}
