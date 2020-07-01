import { LitElement, html, css } from 'lit-element';
import '@lion/input/lion-input.js';
import '@lion/button/lion-button.js';
import { buttonStyle } from './buttonStyle.js'

class MyLionComponent extends LitElement {

  static get styles() {    
      return [buttonStyle, css`
      

            ::slotted(input) {
              height: 38px;
              padding: 6px 10px;
              background-color: #fff;
              border: 1px solid #D1D1D1;
              border-radius: 4px;
              box-shadow: none;
              box-sizing: border-box;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none; 
            }

            ::slotted(_button) {
              height: 38px;
              padding: 6px 10px;
              background-color: red;
              border: 1px solid #D1D1D1;
              border-radius: 4px;
            }
     `];
     
   }

  render() {
    return html`
      <p>Lion here</p>
      <lion-input name="firstName" label="Input label"></lion-input>
      <lion-button>This is a lion button!</lion-button>

    `
  }
}

customElements.define('my-lion-component', MyLionComponent);