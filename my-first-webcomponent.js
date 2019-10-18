class MyFirstWebComponent extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {                      
        if (!this.hasAttribute('subject'))  {
            this.setAttribute('subject', 'Frontend');
        }
        this._renderPage();
    }
               
    static get observedAttributes() {
        return ['subject'];
    }

    attributeChangedCallback(name, oldValue, newValue) {        
        this._subject = newValue;
        this._renderPage();
    }

    _renderPage() {
        this._shadowRoot.innerHTML = `
            <style>
               span {
                   background-color: green;
               }
            </style>
            <span>${this._subject} Welcome to my First Webcomponent</span>
        `;
    }
}

window.customElements.define('my-first-web-component', MyFirstWebComponent);