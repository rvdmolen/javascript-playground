import { html } from 'lit-element';
import { render } from 'lit-html';

const myTemplate = (name) => html`
    <style>
        .boldstyle {
            font-weight: bold;
        }
    </style>
    <p class='boldstyle'>Hello ${name}</p>
`;

render(myTemplate('World from function'), document.body);