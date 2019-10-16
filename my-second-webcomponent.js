import { LitElement, html, css } from 'lit-element';

class MySeconsWebComponent extends LitElement {

    constructor() {
        super();
        this.subject = 'test';
    }

    static get properties() {
        return {
            subject: {
                type: String
            }
        }
    }

    static get styles() {
        return css`
            span {
                background-color: red;
                color: var(--component-color);
            }
        `
    }

    render() {
        return html`
            <span> ${this.subject} Hello World from Second wecomponent</span>
        `
    }
}

customElements.define('my-second-webcomponent', MySeconsWebComponent);