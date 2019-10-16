import { html, render } from 'lit-html';

const helloWorldTemplate = html`<p>Hello World!</p>`;
render(helloWorldTemplate, document.body);


const myTemplate = (name) => html`
    <style>
        .boldstyle {
            font-weight: bold;
        }
    </style>
    ${helloWorldTemplate}
    <p class='boldstyle'>Hello ${name}</p>
`;

render(myTemplate('people'), document.body);


