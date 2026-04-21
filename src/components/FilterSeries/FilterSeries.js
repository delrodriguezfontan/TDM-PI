import React, { Component } from "react";

class FilterSerie extends Component {
    constructor(props) {
        super(props);

        this.state = {
            busqueda: "", 

        };
    }
    
    controlarCambios(event) {
        this.setState({[event.target.name]: event.target.value });
        
    }

     evitarSubmit(event) {
        event.preventDefault();
        this.props.history.push('/resultadosseries/' + "/" + this.state.busqueda)
     }

     render() {
        return ( 
            <form onSubmit={(event) => this.evitarSubmit(event)}>

                <input
                type = "text"
                name = "busqueda"
                onChange = {(event) => this.controlarCambios(event)}
                value={this.state.busqueda}
                placeholder = "Buscar..." />

                <Link to={`/resultadosseries/${this.state.busqueda}`}> Buscar </Link>
            </form>

           
     )}



}

export default FilterSeries;