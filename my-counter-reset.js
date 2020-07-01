import {LitElement, html, css} from 'lit-element';
import {myStyles} from './styles.js';

class MyCounterReset extends LitElement {

    static get styles() {
        return myStyles;
    }


    resetCounter() {
        this.dispatchEvent(new CustomEvent('reset-counter', {}));
    }

    render() {
        return html`
      <button @click="${this.resetCounter}">Reset counter please!</button>
    `
    }
}

window.customElements.define('my-counter-reset', MyCounterReset);
