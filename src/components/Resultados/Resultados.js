import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";
import Formulario from "../Formulario/Formulario";

class Resultados extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultados: [],
        }
    };
    componentDidMount() {
        const apiKey = "94180faf61f8ab976c73db3b0fed85bc"
        fetch(`https://api.themoviedb.org/3/search/${this.props.match.params.tipo}?api_key=${apiKey}&query=${this.props.match.params.busqueda}&language=es-ES`)
         .then(response => response.json())
         .then(data => this.setState({resultados: data.results, cargando:false}))
        .catch(error => console.log(error))
     };
    }

    
export default Resultados;