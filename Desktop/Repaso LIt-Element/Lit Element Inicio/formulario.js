import { LitElement, html, css } from 'lit-element';
import  input from './inputText.js';
class Formulario extends LitElement {
    static get styles() {
        return css`
        .encapsular {
            width: 600px;
            border: 5px dashed pink;
            margin: 0 auto;
            height:400px;
            
        }
        button {
            background-color: green;
            text-align: center;
            padding: 15px;
            margin-top: 20px;
            margin-left: 100px;
        }
        
        `;
    }

    static get properties() {
    
        return { 
            prop: {
                type: String
            }
        };
    }
    agregadorTarjetas(){
        let name = this.shadowRoot.querySelector('#name')
        console.log('Se ha hecho un click y funciona el evento')
        console.log(name);
    }
    

    render() {
        return html`
            <h1>===>>>>> Aqui estoy dentro de Formulario</h1>
            <div class="encapsular">
                
                <input-component id="name" label="Nombre Empleado " tipado="text"></input-component>
                <input-component id="puesto" label="Puesto  " tipado="text"></input-component>
                <input-component id="sueldo" label="Sueldo " tipado="number"></input-component>
                <button @click="${this.agregadorTarjetas}">Enviar</button>
            </div>

        `;
    }
}
customElements.define('formulario-component',Formulario);