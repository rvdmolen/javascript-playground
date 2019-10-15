class MyFirstWebComponent extends HTMLElement {
    constructor() {
        super();
        console.log('component created');
    }

    connectedCallback() {        
        this.textContent = 'My first webcomponent';
        
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.innerHTML = `
          <h1>Bla</h1>
        `;    
    }
}

window.customElements.define('my-first-web-component', MyFirstWebComponent);