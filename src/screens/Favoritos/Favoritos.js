import React, { Component } from "react";
import Pelicula from "../../components/Pelicula/Pelicula";

class Favoritos extends Component {
    constructor(props){
        super(props);

        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
            cargando: true,
        }

    };
        componentDidMount() {

        let favoritasPelis = localStorage.getItem("favoritosPeliculas") == null ? [] : JSON.parse(localStorage.getItem("favoritosPeliculas")); 
        
        let apiKey = "94180faf61f8ab976c73db3b0fed85bc";
        
        favoritasPelis.map(id =>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`)
            .then(res => res.json())
            .then(data => {
            this.setState({
                peliculasFavoritas: this.state.peliculasFavoritas.concat(data),
                cargando: false,
            })
            })
        )
    
    };

        render() {

            let listado = (this.state.peliculasFavoritas.length === 0) 
            ? <h4>No tenes películas favoritas</h4> : this.state.peliculasFavoritas.map(pelicula => 
                (<Pelicula key={pelicula.id} pelicula={pelicula}/>))
            
            let contenido = (this.state.cargando === true) ? <p>Cargando...</p> : listado
            return( 
                <div>
                <h2>Peliculas favoritas</h2>
                {contenido}
               </div>
                
            )
        };



}


export default Favoritos; 
