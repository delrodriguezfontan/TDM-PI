import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Login.css";
import Cookies from "universal-cookie";

const cookies = new Cookies()

class Login extends Component{
  constructor(props){
    super(props);
    this.state = {
                  email: "",
                  password: "",
                  error: ""
    }
  };


  evitarSubmit(event){
    event.preventDefault();

    if (this.state.email === "") {
      this.setState({error: "completar email"})
      return
    }
    if (this.state.password === "") {
      this.setState({error: "completar password"})
      return
    }
    
    let traerUsuariosGuardados = localStorage.getItem("usuarios");

    if(traerUsuariosGuardados == null){
      this.setState({ error: "Credenciales incorrectas"});
      return ;
  
    }else {
      let usuarios = JSON.parse(traerUsuariosGuardados);
      let usuarioFiltrado = usuarios.filter(usu => usu.email === this.state.email);
      let usuario = usuarioFiltrado[0];
      console.log(usuario);
      
  
          if (usuario.password !== this.state.password){
            this.setState({
              error: "Credenciales incorrectas"
            });
            return;
          }
    }
    
  cookies.set("usuario", JSON.stringify({email: this.state.email}));
  this.props.history.push("/")
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

                        <p>{this.state.error}</p>
                   
                    <p className="mt-3 text-center">¿No tienes cuenta? <Link to={`/register`}>
                      "Registrarse"</Link>
                    </p>
            </form>
        );
        }
    }
  

export default Login;
