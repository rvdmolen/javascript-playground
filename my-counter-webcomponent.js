import { LitElement, html, css } from 'lit-element';
import './my-counter-info.js';
import './my-counter-reset.js';
import './my-lion-component.js';

import {myStyles} from './styles.js';


class MyComponent extends LitElement {

  static get properties() {
    return {
      counter: { type: Number }
    }
  }

  static get styles() {
    return [css`
        :host {
          display: block;
          font-size: 24px;
          font-family: 'Verdana'
        }

        .counter{
          color: blue;
        }     
    `, myStyles];
  }

  constructor() {
    super();
    this.counter = 0;
    console.log('constructor is called');
  }


  connectedCallback() {
    super.connectedCallback();
    console.log('connected callback is called');
  }

  resetCounter() {
    this.counter = 0;
  }

  render() {
    return html`
      <h3>Hello! I'm a Webcomponent, Which simulates a counter...</h3>
      <p class='counter'>Count:${this.counter}</p>    
      <my-counter-info counterValue="${this.counter}"></my-counter-info>
      <button @click="${this.count}">Press me to counting!!</button>
      <my-counter-reset @reset-counter=${this.resetCounter}></my-counter-reset>

      <my-lion-component></my-lion-component>
    `;
  }

  count() {
    this.counter++;
  }
}


window.customElements.define('my-second-webcomponent', MyComponent);
