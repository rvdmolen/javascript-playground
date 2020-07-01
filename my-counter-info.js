import { LitElement, html } from 'lit-element';

class MyCounterInfo extends LitElement {
  static get properties() {
    return {
      counterValue: {
        type: Number,        
      }
    }
  }

  render() {
    return html`
      <p>The value of the counter is: ${this.counterValue}</p>
    `
  }
}

window.customElements.define('my-counter-info', MyCounterInfo);