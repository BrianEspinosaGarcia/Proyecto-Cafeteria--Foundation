/**
 * TODO: Import the LitElement base class and html helper function.
 */
import { LitElement, html, css } from 'lit-element'; 

/**
 * TODO: Create a class for your element that extends the LitElement
 * base class.
 */
export default class MyElement extends LitElement{
  static get styles (){
    return css`
    .azul {
      color: blue;
    }
    .btn-azul{
      background-color: blue;
      padding: 2rem;
      color: white;
    }
    .contenedor {
      width: 900px;
      margin: 0 auto;
    }
    
        `;
  }
  static get properties(){
    return {

    }
  }
  constructor(){
    super();
  }
  validarRespuestas(){
    const tipoOperacion = this.shadowRoot.querySelector('#tipoOperacion').value;
    const datos = this.shadowRoot.querySelector('#datos').value;
    const operacion = this.shadowRoot.querySelector('#operacion').value;
    const mostrarVentana = this.shadowRoot.querySelector('#ventana');
    if(tipoOperacion ==="MOVIL"){
      // Muestra pantalla 3
      const pantallaTres = `
          <div>
              <h2> Consulta Exitosa </h2>
            <button class="btn-azul" @click="">Ok</button>
          </div>
      `;
      mostrarVentana.innerHTML = pantallaTres;
    }
    else if(tipoOperacion != "MOVIL" ){
      if(datos === "si "){
          // Mostrar pantalla 2
          const pantallaDos = `
            <div>
                <h2> LA CONSULTA REQUIERE MAYOR AUTORIDAD </h2>
              <button class="btn-azul" @click="">Ok</button>
            </div>
          `;
          mostrarVentana.innerHTML = pantallaDos;
      }
      else if( datos === 'no'){
          if(operacion ==='si'){
             // Mostrar pantalla 2
            const pantallaDos = `
              <div>
                  <h2> LA CONSULTA REQUIERE MAYOR AUTORIDAD </h2>
                <button class="btn-azul" @click="">Ok</button>
              </div>
            `;
            mostrarVentana.innerHTML = pantallaDos;
          }
          else if( operacion ==='no' ){
                  // Muestra pantalla 3
            const pantallaTres = `
                <div>
                    <h2> Consulta Exitosa </h2>
                  <button class="btn-azul" @click="">Ok</button>
                </div>
            `;
            mostrarVentana.innerHTML = pantallaTres;
          }
      }
    }
  }
  render () {
    return html`
    <div class="contenedor">
      <h1>Esto es desde el componente de la pantallaUno</h1>

      <h2> Elige una opcion </h2>
      <select name="datos" id="datos" class="azul" required>
        <option value="si" class="azul">SI </option>
        <option value="no" class="azul">NO</option>
      </select>
      <hr>
      <h2> Elige una opcion </h2>
      <select name="operacion" id="operacion" class="azul" required>
        <option value="si">SI </option>
        <option value="no">NO</option>
      </select>
      <hr>
      <input type="text" placeholder="Tipo de Operacion" id="tipoOperacion" required >
      <button class="btn-azul" @click="${this.validarRespuestas}">Enviar</button>
      <div id="ventana">
      <!--Aqui se mostrara la ventana despues de las validaciones-->
      </div>
    </div> 
    `
  }


 }    

/**
 * TODO: Register the new element with the browser.
 */
customElements.define('my-element', MyElement);
