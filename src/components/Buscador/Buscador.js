import React, { Component } from "react";
import { Link } from "react-router-dom";

class Buscador extends Component { 
    constructor(props) {
        super(props); 

        this.state = {
            busqueda: "",
            tipo: "pelicula",
        };
    }

    controlarCambios(event) {
        this.setState({ [event.target.name]: event.target.value });

    }

    evitarSubmit(event) {
        event.preventDefault();

    }

    render(){
        return (
            <form onSubmit={(event)=> this.evitarSubmit(event)}>
                <select name="tipo" onChange={(event) => this.controlarCambios(event)} value = {this.state.tipo}>
                    <option value = "movie"> Pelicula</option>
                    <option value = "tv"> Serie </option>
                </select>

                <input type="text" name="busqueda" onChange= {(event) => this.controlarCambios(event)} value={this.state.busqueda} placeholder="Buscar..." />
                
                <Link to={`/resultados/${this.state.tipo}/${this.state.busqueda}`}>
                <button type="submit">Buscar</button>
                </Link>
            </form> 
        );
    }
}



export default Buscador;