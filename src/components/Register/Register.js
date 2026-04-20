import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Register.css";
import Cookies from "universal-cookie";

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {email: "",
                    password: "",
                    error: ""
            
        };
    }
   
evitarSubmit(event){
    event.preventDefault();
}

controlarCambios(event){
    this.setState({
        email: event.target.value,
    
    })

}

controlarCambios2(event){
    this.setState({
        password: event.target.value
    })

}

Validar(){
    let mail = this.state.email
    let contrasena = this.state.password
    let usuario = {
                 email: this.state.email,
                    password: this.state.password      
    }

    if (contrasena.length < 6){
        this.setState({error: "la contraseña debe tener al menos 6 caracteres."});
        return;
    }
    localStorage.setItem("usuarios", JSON.stringify(usuario));
    let usuariosGuardados = localStorage.getItem("usuarios");
    let usuarios = usuariosGuardados ? JSON.parse(usuariosGuardados): []
    if (usuarios.email === mail ){
    
        setCookie("usuario", JSON.stringify({email: mail}));
    }

}

render (){
    return(
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
                        Registrarse
                    </button>
               
                <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to={`/Login`}>
                  "Iniciar sesión"</Link>
                </p>
        </form>
    );
    }
}

export default Register