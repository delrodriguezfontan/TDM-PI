import React, { Component, useEffect } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";
import CardSerie from "../../components/CardSerie/CardSerie";


function Resultados(props) {
    const [resultados, setResultados] = useState([]);
    const [cargando, setCargando] = useState(true)


    const apiKey = "94180faf61f8ab976c73db3b0fed85bc";
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/search/${props.match.params.tipo}?api_key=${apiKey}&query=${(props.match.params.busqueda)}&language=es-ES`)
            .then(response => response.json)
            .then(data => {
                setResultados(data.results)
                setCargando(false)
            })
            .catch(error => console.log("error"))
    }, [])

    let contenido = ((cargando) === true) ? <p>Cargando...</p> : (resultados.map(resultado => (props.match.params.tipo === "movie")
        ? <CardPelicula key={resultado.id} informacion={resultado} tipo="movie" />
        : <CardSerie key={resultado.id} informacion={resultado} tipo="tv" />))


    return (

        <React.Fragment>
            <section>
                <h4>Resultados</h4>
                {contenido}
            </section>
        </React.Fragment>


    )

}

export default Resultados;