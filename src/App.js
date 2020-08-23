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


  delete(index) {
    this.setState({
      array: this.state.array.filter((e, i) => {
        return i !== index
      })
    });
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
            <button class="delete-btn"   onClick={this.delete.bind(this, i)}>X</button>
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
        
        <blockquote class="blockquote mb-0 mt-4">
          <p>“The secret of getting ahead is getting started.”</p>
          <footer class="blockquote-footer"><cite title="Source Title">Mark Twain</cite></footer>
        </blockquote>
      </div>

    );





  }
}

export default App;

