import { LitElement, html, css } from 'lit-element';

export default class Inputtext extends LitElement {
    static get styles() {
        return css`
            .inputs {
                text-align:center;
            }
            input{
                width: 100%;
                height: 2rem;
                border: 3px solid;
            }
        `;
    }

    static get properties() {
        return { 
            label: {
                type: String
            },
            tipado: {
                type: String
            }
       }
    }
    constructor() {
        super();
        this.label="Se te olvido colocar la etiqueta del Imput";
        this.tipado="number";
    }

    // Implement `render` to define a template for your element.
    render() {
        return html`
            
                <div class="inputs">
                        <label> ${this.label}</label> <p></p>
                        <input type="${this.tipado}" placeholder="Prueba de Input">
                </div>
            `;
    }
}
customElements.define('input-component', Inputtext);