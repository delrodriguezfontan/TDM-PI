import React, { Component, useEffect } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";


function Favoritos(props) {
    const [peliculasFavoritas, setPeliculasFavoritas] = useState([])
    const [seriesFavoritas, setSeriesFavoritas] = useState([])
    const [tipo, setBusqueda] = useState("pelicula")
    const [cargandoPelis, setCargandoPelis] = useState(true)
    const [cargandoSeries, setCargandoSeries] = useState(true)


    useEffect(() => {
        let favoritasPelis = localStorage.getItem("favoritosPeliculas") == null ? [] : JSON.parse(localStorage.getItem("favoritosPeliculas"));

        const apiKey = "94180faf61f8ab976c73db3b0fed85bc";

        let nuevoArrayPeliculas = [];

        favoritasPelis.map(id =>
            fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`)
                .then(res => res.json())
                .then(data => {
                    nuevoArrayPeliculas.push(data)

                    setPeliculasFavoritas(nuevoArrayPeliculas)

                        .catch(error => console.log(error))

                    setCargandoPelis(false)


                    let favoritasTv = localStorage.getItem("favoritosSeries") == null ? [] : JSON.parse(localStorage.getItem("favoritosSeries"));

                    let nuevoArraySeries = [];

                    favoritasTv.map(id =>
                        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}&language=es-ES`)
                            .then(res => res.json())
                            .then(data => {
                                nuevoArraySeries.push(data)

                                setSeriesFavoritas(nuevoArraySeries)

                            })
                            .catch(error => console.log(error))
                    )

                    setCargandoSeries(false)
                }), [])
    })


    let listadoPelis = (cargandoPelis)
        ? <h4>Cargando...</h4> : peliculasFavoritas.map(pelicula =>
            (<CardPelicula key={pelicula.id} informacion={pelicula} />));


    let listadoSeries = (cargandoPelis)
        ? <h4>Cargando...</h4> : seriesFavoritas.map(serie =>
            (<CardSerie key={serie.id} informacion={serie} />))

    let contenido = (peliculasFavoritas.length === 0)
        ? <p>No tenes peliculas favoritas</p>
        : (
            <div>
                <h2 className="alert alert-primary">Películas favoritas</h2>
                <section class="row cards" id="movies">
                    {listadoPelis}
                </section>
            </div>
        );

    let contenidoSeries = (seriesFavoritas.length === 0)
        ? <p>No tenes series favoritas</p>
        : (
            <div>
                <h2 className="alert alert-warning">Series favoritas</h2>
                <section className="row cards" id="tv-show">
                    {listadoSeries}
                </section>
            </div>
        );


return (
        <div className="container">
            {contenido}
            {contenidoSeries}

        </div>
    );


};








export default Favoritos; 
