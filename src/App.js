import React, { Component } from "react";
import "./App.css";

import Formulario from "./components/formulario.js"

import {array} from  "./registros.json"
console.log(array)

class App extends Component {
  constructor(){
    super();
    this.state ={

      array
    }
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
      <div className="app">
        
        <Formulario titulo = "APEL.io"/>
        
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

