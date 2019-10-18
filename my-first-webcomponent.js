class MyFirstWebComponent extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({mode: 'open'});
        this.handleClick = this.handleClick.bind(this);
    }

    connectedCallback() {                      
        if (!this.hasAttribute('subject'))  {
            this.setAttribute('subject', 'Frontend');
        }
        this._renderPage();
        this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick);
    }
               
    static get observedAttributes() {
        return ['subject'];
    }

    attributeChangedCallback(name, oldValue, newValue) {        
        this._subject = newValue;
        this._renderPage();
    }

    handleClick() {        
        this._subject = 'The button is clicked';
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
            <button>Click me</button>
        `;
    }
}

window.customElements.define('my-first-web-component', MyFirstWebComponent);