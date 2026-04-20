import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";

class Resultados extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resultados: [],
            cargando: true
        }
    };
    componentDidMount() {
    const apiKey = "94180faf61f8ab976c73db3b0fed85bc";
    fetch(`https://api.themoviedb.org/3/search/${this.props.match.params.tipo}?api_key=${apiKey}&query=${(this.props.match.params.busqueda)}&language=es-ES`)
        .then(response => response.json())
        .then(data => {

            this.setState({
                resultados: data.results,
                cargando: false
            });
        })
        .catch(error => console.log("error fetch:", error));
}


    render() {
         let contenido = (this.state.cargando === true) ? <p>Cargando...</p> : (this.state.resultados.map(resultado =>  (this.props.match.params.tipo === "movie") 
         ? <CardPelicula key={resultado.id} informacion={resultado} tipo ="movie" /> 
         : <CardSerie key={resultado.id} informacion={resultado} tipo="tv" /> ))

        return(
            <React.Fragment>
                <section>
                    <h4>Resultados</h4>
                    {contenido}
                </section>
            </React.Fragment>

        )
    }
    }

    
export default Resultados;