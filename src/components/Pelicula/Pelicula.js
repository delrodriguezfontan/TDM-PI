import React, { Component } from "react";
import { Link } from "react-router-dom";

class Pelicula extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verMas: false
    };
  }

  cambiarVerMas = () => {
    this.setState({
      verMas: !this.state.verMas
    });
  };

  render() {
    let claseName = "hide";
    let textoBoton = "Ver más";
    let pelicula = this.props.pelicula;

    if (!pelicula) {
      return <p>Cargando...</p>;
    }

    if (this.state.verMas) {
      claseName = "show";
      textoBoton = "Ver menos";
    }

    return (
      <article className="pelicula-card">

        <Link to={`/pelicula/id/${pelicula.id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`}
            alt={pelicula.title}
          />

          <h2>{pelicula.title}</h2>
        </Link>

        <p>Rating: {pelicula.vote_average}</p>
        <p>Fecha: {pelicula.release_date}</p>

        <button onClick={this.cambiarVerMas}>
          {textoBoton}
        </button>

        <section className={claseName}>
          <p>{pelicula.overview}</p>
        </section>

      </article>
    );
  }
}

export default Pelicula;