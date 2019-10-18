import { LitElement, html, css } from 'lit-element';

class MySecondWebComponent extends LitElement {

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

    handleClick() {
        this.subject = 'Value has changed!!';
    }

    render() {
        return html`
            <span> ${this.subject} Hello World from Second wecomponent</span>
            <button @click=${this.handleClick}>Click ME</button>
        `
    }
}

customElements.define('my-second-webcomponent', MySecondWebComponent);