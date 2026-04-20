import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Login.css";
import Cookies from "universal-cookie";

const cookies = new Cookies()

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {usario: "",
                  email: "",
                  password: "",
                  error: ""
    }
  };
  evitarSubmit(event){
    event.preventDefault();
    this.validar
};

cambioEmail(event){
    this.setState({
      email: event.target.value
    });

};
cambioPasswordl(event){
  this.setState({
    password: event.target.value
  });

};
validarLogin(){
  let {email,password} = this.state;

  let traerUsuariosGuardados = localStorage.getItem("usuarios");
  let usuarios = traerUsuarios ? JSON.parse(traerUsuariosGuardados): [];
  
  //PREGUNTAS LUCA
  //Como hago para hacer verificar que el email no esta repetido, hasta ahora solo traigo los datos en un array. 
  //Tengo que pasar el array a un usario simple como lo hago?

  if (usuarios.email == email || usuarios.password !== password){
    this.setState({
      error: "Credenciales incorrectas"
    })
  }
cookies.set("usuario", JSON.stringify({email}, {password}));
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
                            onChange={(event) => this.cambioEmail(event)} 
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
                            onChange={(event) => this.cambioPasswordl(event)} 
                            value={this.state.password} />
                            </label>
                        </div>
                        <button 
                        type="submit" 
                        className="btn btn-primary btn-block">
                            Iniciar sesion
                        </button>
                   
                    <p className="mt-3 text-center">¿No tienes cuenta? <Link to={`/register`}>
                      "Registrarse"</Link>
                    </p>
            </form>
        );
        }
    }
  

export default Login;