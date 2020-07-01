class MyFirstWebcomponent extends HTMLElement {

	constructor() {
		super();
		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this.handleClick = this.handleClick.bind(this);
	}

	connectedCallback() {
		if (!this.hasAttribute('subject')) {
			this.setAttribute('subject', 'Hi All!');
		}
		this._renderPage();
		this.shadowRoot.querySelector('button').addEventListener('click', this.handleClick);
	}

	static get observedAttributes() {
		return ['subject'];
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this._subject = newValue;
	}

	handleClick() {
		this._subject = 'New value';
		this._renderPage();
	}

	_renderPage() {
		this._shadowRoot.innerHTML = `
            <span>${this._subject} Welcome to our first Webcomponent!!</span>
            <button> Click Me</button>
        `;
	}

}

customElements.define('my-first-web-component', MyFirstWebcomponent);
