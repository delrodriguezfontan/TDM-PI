import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Formulario extends Component { 
    constructor(props) {
        super(props); 

        this.state = {
            busqueda: "",
            tipo: "movie",
            listaPeliculas: [],
            listaSeries: [],
        };
    }

    controlarCambios(event) {
        this.setState({[event.target.name]: event.target.value });
        
    }

    evitarSubmit(event) {
        event.preventDefault();
        this.props.history.push('/resultados/' + this.state.tipo + "/" + this.state.busqueda)
    }

    render(){
        return (
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <select 
                    name="tipo" 
                    onChange={(event) => this.controlarCambios(event)} 
                    value = {this.state.tipo}>

                    <option value = "movie"> Pelicula</option>
                    <option value = "tv"> Serie </option>
                </select>

                <input 
                    type="text" 
                    name="busqueda" 
                    onChange= {(event) => this.controlarCambios(event)} 
                    value={this.state.busqueda} 
                    placeholder="Buscar..." />
                
                <Link to={`/resultados/${this.state.tipo}/${this.state.busqueda}`}> Buscar </Link>
            </form> 
        );
    }
}

export default withRouter( Formulario)