import React, { Component } from "react";
import "./App.css";

import Formulario from "./components/formulario.js"

import {array} from  "./registros.json"


class App extends Component {
  constructor(){
    super();
    this.state ={
      array
    }

    this.agregarNuevoReg=this.agregarNuevoReg.bind(this);

  }


  agregarNuevoReg(regi){
    
    this.setState({

      array: [...this.state.array, regi]
    })

  }

  render() {


    const tags=this.state.array.map((registro, i)=> {
      return (

        <div className= "col-lg-4 col-md-6">
          
          <div className= "card mt-4">
            
            <div className="card-header">
              <h2 id="text_etiqueta">{registro.etiquetas}</h2>

            </div>
            <div className="card-body">
              <p>
                {registro.texto}
                

              </p>
              <p>
                {registro.fecha}
                

              </p>  

            </div>
            
          </div>

        </div>


      )


    })

    return (
      <div className="App">
        
        <Formulario titulo = "APEL.io"  alAgregarReg={this.agregarNuevoReg}  />
        
        <div className="container">
          <div className="row  mt-4">
            {tags}  
          </div>
            
        </div>
        

      </div>
    );
  }
}

export default App;

