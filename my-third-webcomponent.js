import { LitElement, html, css } from 'lit-element';

class MyThirdWebComponent extends LitElement {

    constructor() {
        super();
        this.subject = 'test';
    }

    connectedCallback() {
        // Invoked when a component is added to the document’s DOM.
        console.log('connected')
    }

    disconnectedCallback() {
        // Invoked when a component is removed from the document’s DOM.
        console.log('disconnected')
    } 

    adoptedCallback() {
        // Invoked when a component is moved to a new document.
        console.log('moved to new document')
    }

    attributeChangedCallback() {
        // Invoked when component attribute changes.
        console.log('attribute is changed')
    }

 
    firstUpdated(changedProperties) {
        // firstUpdated runs once after the element renders for the first time.
        console.log('first updated')
    }
  
    updated(changedProperties) {
        // Updated runs every time the element renders
        console.log('trigger when sometthing is updated')
    }
}

customElements.define('my-third-webcomponent', MyThirdWebComponent);