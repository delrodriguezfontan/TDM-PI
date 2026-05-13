import React, { Component, useEffect } from "react";
import CardSerie from "../../components/CardSerie/CardSerie";

function Series() {
    const [series, setSeries] = useState([])
    const [page, setPage] = useState(1)
    const [cargando, setCargando] = useState(true)

    const apikey = "94180faf61f8ab976c73db3b0fed85bc";


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&page=1`)
            .then((res) => res.json())
            .then((data) => {
                setSeries(data.results)
                setPage(2)
                setCargando(false)
            })
            .catch(error => console.log(error))

    }, [])

    function cargarMas() {
        const apiKey = "94180faf61f8ab976c73db3b0fed85bc";
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page})`)
            .then((res) => res.json())
            .then((data) => {
                setSeries(series.concat(data.results))
                setPage(page + 1)

            })
            .catch(error => console.log(error))
    }



 let listado = (cargando === true) ? <p>Cargando...</p> : series.map((informacion) => (
        <CardSerie key={informacion.id} informacion={informacion} tipo="tv" />
    ));


return (
        <React.Fragment>

            <h2 className="alert alert-warning">Todas las series</h2>

            {listado}

            <button className="btn btn-warning" onClick={() => this.cargarMas()}>Cargar más</button>
        </React.Fragment>
    );





}




   


    



export default Series;