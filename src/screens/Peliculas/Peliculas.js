import React, { Component } from "react";
import CardPelicula from "../../components/CardPelicula/CardPelicula";


class Peliculas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      peliculas: [],
      page: 1,
      loading: true,
      busqueda: ""
    };
  }

  componentDidMount() {
    const apiKey = "94180faf61f8ab976c73db3b0fed85bc";
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`
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
      .catch((error) => console.log(error));
      
  }

   controlarCambios(event) {
        this.setState({[event.target.name]: event.target.value });
        
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

  render() {

    let peliculasFiltradas = (this.state.busqueda === "")  ? this.state.peliculas : (this.state.peliculas.filter((pelicula) => pelicula.title === this.state.busqueda))

    let contenido = (this.state.cargando === true) ? <p>Cargando...</p> : this.state.peliculas.map((informacion) => (
      <CardPelicula key={informacion.id} informacion={informacion} tipo="movie" />

    ));

    return (
      <React.Fragment>

        <form onSubmit={(event) => this.evitarSubmit(event)}>

                <input
                type = "text"
                name = "busqueda"
                onChange = {(event) => this.controlarCambios(event)}
                value={this.state.busqueda}
                placeholder = "Buscar..." />

              <button onClick={() => this.state.peliculas}>Buscar </button>
          
    </form>
       
        <h2>Todas las películas</h2>


        {contenido}

        <button onClick={() => this.cargarMas()}>Cargar más</button>
      </React.Fragment>
    );
  }
}

export default Peliculas;