import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Login.css";
import Cookies from "universal-cookie";

class Formulario extends Component{
  constructor(props){
    super(props);
    this.state = {valor: ""}
  }
  evitarSubmit(event){
    event.preventDefault();
}

controlarCambios(event){
    this.setState({
    })

}
render(){
  return (
     <form onSubmit = {(event) => this.evitarSubmit(event)}>
             
                        <div className="form-group">
                            <label>Email
                            <input 
                            type="email" 
                            className="form-control" 
                            id="email" 
                            placeholder="Ingresá tu email" 
                            onChange={(event) => this.controlarCambios(event)} 
                            value={this.state.email} />
                            </label>
                        </div>
    
                        <div className="form-group">
                            <label>Contraseña
                            <input 
                            type="password" 
                            className="form-control" 
                            id="password" 
                            placeholder="Ingresá tu contraseña" 
                            onChange={(event) => this.controlarCambios2(event)} 
                            value={this.state.password} />
                            </label>
                        </div>
                        <button 
                        type="submit" 
                        className="btn btn-primary btn-block">
                            Iniciar sesion
                        </button>
                   
                    <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to={`/register`}>
                      "Registrarse"</Link>
                    </p>
            </form>
        );
        }
    }
  

export default Login;