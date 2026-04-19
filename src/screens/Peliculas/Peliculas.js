import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";

class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      page: 1,
      loading: true
    };
  }

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ec5518eaae7a4de7af1f6d040ec36025&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peliculas: data.results,
          page: 2,
          loading: false
        });
      })
      .catch((error) => console.log(error));
  }

  cargarMas() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=ec5518eaae7a4de7af1f6d040ec36025&page=${this.state.page}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peliculas: this.state.peliculas.concat(data.results),
          page: this.state.page + 1
        });
      })
      
  }

  render() {
    let contenido = (this.state.cargando === true) ? <p>Cargando...</p> : this.state.peliculas.map((informacion) => (
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
}

export default Peliculas;