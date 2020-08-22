import React, { Component } from "react";

class Formulario extends Component{
	
	handleTextArea(e){
		console.log(e.target.value,e.target.name)

	}



	render(){

		return(

			<form>
				<h1 className="display-4"> {this.props.titulo}  </h1>
	          <div className="form-group">
	          
	          <textarea name="apunte" className="form-control" onChange ={this.handleTextArea} id="exampleFormControlTextarea1" rows="3" placeholder="Que quieres guardar hoy?"></textarea>
	          </div>
	          <div class="form-group">
			    <label  htmlFor="formGroupExampleInput"></label>
			    <input onChange ={this.handleTextArea} name="etiqueta" type="text" class="form-control" id="formGroupExampleInput" placeholder="etiqueta tus apuntes para encontrarlos luego" />
			  </div>

	          
	        <button type="button" className="btn btn-success">Guardar apunte</button>
	        </form>

		)
	}


}

export default Formulario;