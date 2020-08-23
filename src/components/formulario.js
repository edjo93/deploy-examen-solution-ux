import React, { Component } from "react";


/*import { array } from '../registros.json'*/

var obj_date=new Date();

class Formulario extends Component{
	
	

	constructor () {
	    super();
	    this.state = {
	      	texto : "",
			fecha : obj_date.toLocaleDateString()+" " 
					+ obj_date.getHours() + ":" + obj_date.getMinutes() 
					+":" + obj_date.getSeconds(),
			etiquetas : ""
	    };

	    
	    this.manejarEntrada = this.manejarEntrada.bind(this);
	    this.manejarSubmit = this.manejarSubmit.bind(this);
  	}	




	manejarEntrada(e) {
	  const {name, value} = e.target;
	  this.setState({
	     [name]: value
	  });
	}


	manejarSubmit(e){
		e.preventDefault();
		this.props.alAgregarReg(this.state);
	}
  

	render(){

		return(

			<form onSubmit= {this.manejarSubmit}>
				<h1 className="display-4">{this.props.titulo}</h1>
	          <div className="form-group">
	          
	          <textarea value={this.state.texto} name="texto" className="form-control" onChange ={this.manejarEntrada} id="exampleFormControlTextarea1" rows="3" placeholder="Que quieres guardar hoy?"></textarea>
	          </div>
	          <div class="form-group">
			    <label  htmlFor="formGroupExampleInput"></label>
			    <input  value={this.state.etiquetas} name="etiquetas" onChange ={this.manejarEntrada}  type="text" class="form-control" id="formGroupExampleInput" placeholder="etiqueta tus apuntes para encontrarlos luego" />
			  </div>

	          
	        <button type="submit" className="btn btn-success">Guardar apunte</button>
	        </form>

		)
	}


}

export default Formulario;