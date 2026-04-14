import React, { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";
import Peliculas from "../Peliculas/Peliculas";
import Series from "../Series/Series";
import {Link} from "react-router-dom";
import CardPelicula from "../../components/CardPelicula/CardPelicula";

// Formulario de buscador 
class Formulario extends Component { 
    constructor(props) {
        super(props); 

        this.state = {
            busqueda: "",
            tipo: "movie",
            listaPeliculas: [],
            listaSeries: []
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
                
                <Link to={`/resultados/${this.state.tipo}/${this.state.busqueda}`}>
                     Buscar
                </Link>
            </form> 
        );
    }
}



 

class Home extends Component {
    constructor(props){
        super(props)
        this.state({peliculas: [],
                    series: [],
        })
    }

    componentDidMount(){
        const apiKey = "b91e0f031d3d69983804601676fdef28";
        let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        let urlSerie = `https://api.themoviedb.org/3/tv/popular?api_ley=${apiKey}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    listaPeliculas: data.results
                })
            })
            .catch((error) => {
                console.log("el error fue " + error);
            });

            fetch(urlSerie)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    listaSeries: data.results
                })
            })
            .catch((error) => {
                console.log("el error fue " + error);
            });



    }

    render(){
        return (
            <main>
                <Buscador /> 
                <h2 className="alert alert-primary">Películas populares</h2>
                <section class="row cards" id="movies">
                {this.state.listaPeliculas.length === 0 ? <h3>Cargando...</h3> : 
                this.state.listaPeliculas.map(pelicula => <CardPelicula informacion={pelicula} />)
                }
                </section>
                <h2 className="alert alert-primary">Series populares</h2>
                
            </main>
        );
    }

}







export default Home;

