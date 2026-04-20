import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Register.css";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

const cookies = new Cookies();
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

    let mail = this.state.email;
    let contrasena = this.state.password;
    let usuario = {
                  email: this.state.email,
                    password: this.state.password      
    };

    if (mail === "") {
        this.setState({error: "Completar campo email"})
        return
    }
    if (contrasena.length < 6){
        this.setState({error: "la contraseña debe tener al menos 6 caracteres."});
        return;
    };


    let usuariosGuardados = localStorage.getItem("usuarios");
    console.log(usuariosGuardados);
    
    if (usuariosGuardados !== null) {
        let usersParseados = JSON.parse(usuariosGuardados)
        let existe = usersParseados.filter(usu => usu.email === this.states.email)
        if (existe.length > 0) {
            this.setState({error: "El usuario ya existe"})
            return
        }else {
            existe.push(usuario)
            localStorage.setItem("usuarios", JSON.stringify(existe))
        }
    }else{
        let usuarioInicial = []
        usuarioInicial.push(usuario)
        localStorage.setItem("usuarios", JSON.stringify(usuarioInicial))
    }

    this.props.history.push("/login")
   
  
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
                    <button onClick={()=> this.state}
                    type="submit" 
                    className="btn btn-primary btn-block">
                        Registrarse
                    </button>
                    <p>{this.state.error}</p>
                <p className="mt-3 text-center">¿Ya tenés cuenta? <Link to={`/Login`}>
                  "Iniciar sesión"</Link>
                </p>
        </form>
    );
    }
}

export default withRouter( Register)