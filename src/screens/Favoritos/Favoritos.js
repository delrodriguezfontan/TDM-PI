import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";

class Favoritos extends Component {
    constructor(props){
        super(props);

        this.state = {
            peliculasFavoritas: [],
            seriesFavoritas: [],
            cargando: true,
            tipo: "pelicula"
        }

    };
        componentDidMount() {

        let favoritasPelis = localStorage.getItem("favoritosPeliculas") == null ? [] : JSON.parse(localStorage.getItem("favoritosPeliculas")); 
        
        const apiKey = "94180faf61f8ab976c73db3b0fed85bc";
        let nuevoArrayPeliculas = [];

            favoritasPelis.map(id =>
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`)
                .then(res => res.json())
                .then(data => {
                    nuevoArrayPeliculas.push(data)
                
                    this.setState({
                    peliculasFavoritas: nuevoArrayPeliculas,
                    cargando: false,
                    
                });



                })

                .catch(error => console.log(error))
    
    )};

        render() {

            let listado = (this.state.peliculasFavoritas.length === 0) 
            ? <h4>No tenes películas favoritas</h4> : this.state.peliculasFavoritas.map(pelicula => 
                (<CardPelicula key={pelicula.id} informacion={pelicula}/>))
            
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
