import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";

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

     render() {
        console.log(this.state.resultados);
        
        return (
            <div>
                
                {
                if (this.state.resultados.length === 0) {
                        <p>Cargando...</p>
                } else {
                    if (this.props.match.params.tipo === "tv") {
                    <section class="row cards" id="movies">
                    { this.state.resultados.map(pelicula => <CardSerie informacion={pelicula} />)}
                     </section>
                }else {
                    <section class="row cards" id="series">
                    {this.state.resultados.map(pelicula => <CardPelicula informacion={pelicula} />)}
                    </section>
                }
                    }
                
                }
            </div>
  );
}
}


export default Resultados;