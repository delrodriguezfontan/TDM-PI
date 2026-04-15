import React, { Component } from "react";

class Resultados extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultados: [],
            cargando: true, 
        }
    };
    componentDidMount() {
        fetch(`https://api.themoviedb.org/3/search/${this.props.match.params.tipo}?api_key=TU_API_KEY&query=${this.props.match.params.busqueda}&language=es-ES`)
         .then(response => response.json())
         .then(data => this.setState({resultados: data.results, cargando:false}))
        .catch(error => console.log(error))
     };

     render() {
        return (
            <div>
            {this.state.cargando === true ? <p>Cargando...</p> : null}
            </div>
  );
}
}


export default Resultados;