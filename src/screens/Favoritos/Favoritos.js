import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";
import Cookies from "universal-cookie";

const cookies = new Cookies();

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
                   
                    
                });



                })

                .catch(error => console.log(error))
    
    )

        let favoritasSeries = localStorage.getItem("favoritosSeries") == null ? [] : JSON.parse(localStorage.getItem("favoritosSeries"));

        let nuevoArraySeries = [];

            favoritasSeries.map(id => 
                fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=es-ES`)
                    .then(res => res.json())
                    .then(data => {
                        nuevoArraySeries.push(data)

                        this.setState({
                        seriesFavoritas: nuevoArraySeries,
                      
                            
                        });
                    })
                 .catch(error => console.log(error))
            )

};

        render() {

            let listadoPelis = (this.state.peliculasFavoritas.length === 0) 
            ? <h4>No tenes películas favoritas</h4> : this.state.peliculasFavoritas.map(pelicula => 
                (<CardPelicula key={pelicula.id} informacion={pelicula}/>));
            

            let listadoSeries = (this.state.seriesFavoritas.length === 0)
             ? <h4>No tenes series favoritas</h4> : this.state.seriesFavoritas.map(serie => 
                (<CardSerie key={serie.id} informacion={serie} /> ))
          
         let contenido = (this.state.cargando === true)
        ? <p>Cargando...</p>
        : (
            <div>
                <h2 className="alert alert-primary">Películas favoritas</h2>
                <section class="row cards" id="movies">
                {listadoPeliculas}
                </section>


                <h2 className="alert alert-warning">Series favoritas</h2>
                 <section className="row cards" id="tv-show">
                {listadoSeries}
                 </section>

            </div>
        );

    return (
        <div className="container">
            {contenido}
        </div>
    );
}



}


export default Favoritos; 
