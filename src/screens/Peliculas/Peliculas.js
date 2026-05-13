import React, { Component, useEffect } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";


function Peliculas() {
  const [peliculas, setPeliculas] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const apiKey = "94180faf61f8ab976c73db3b0fed85bc";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        setPeliculas(data.results)
        setPage(2)
        setLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])


function cargarMas() {
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=ec5518eaae7a4de7af1f6d040ec36025&page=${page}`
  )
    .then((res) => res.json())
    .then((data) => {
      setPeliculas(peliculas.concat(data.results))
      setPage(page + 1)
    })
    .catch((error) => console.log(error))

  }

  let contenido = (loading === true) ? <p>Cargando...</p> : peliculas.map((informacion) => (
    <CardPelicula key={informacion.id} informacion={informacion} tipo="movie" />

  ));

  return (
    <React.Fragment>
      <h2>Todas las películas</h2>


      {contenido}

      <button onClick={() => this.cargarMas()}>Cargar más</button>
    </React.Fragment>
  );

}

export default Peliculas;