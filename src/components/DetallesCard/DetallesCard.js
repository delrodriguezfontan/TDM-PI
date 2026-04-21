import React, { Component } from "react";
import Cookies from "universal-cookie";


const cookies = new Cookies();

class DetallesCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      esFavorito: false,
    };
  }

  componentDidMount() {
    let id = this.props.match.params.id;
    let tipo = this.props.match.params.tipo;

    const apiKey = "b91e0f031d3d69983804601676fdef28";
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    let urlSerie = `https://api.themoviedb.org/3/tv/${id}?api_key=${apiKey}`;


    if (tipo === "movie"){
      fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
        });
      })
      .catch((error) => {
        console.log("el error fue " + error);
      });

    }
    else {
      fetch(urlSerie)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          data: data,
        });
      })
      .catch((error) => {
        console.log("el error fue " + error);
      });
  }

    }
   

  render() {
    console.log(this.state.dataSeries)
    return (
      <div>
          {this.state.data.length === 0 ? (
            <h3>Cargando...</h3>
          ) : (
            <div>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${this.state.data.poster_path}`}
                  className="col-md-6 info"
                  alt={this.state.data.name}
                />
                {
                  this.props.match.params.tipo === "tv" ? <p> {this.state.data.name}</p>:  <p> {this.state.data.title}</p>}
              <p className="description">{this.state.data.overview}</p>
              <p className="mt-0 mb-0" id="release-date">
                <strong>{this.state.data.release_date}</strong> 2025-07-09
              </p>
              <p className="mt-0" id="votes">
                <strong>{this.state.data.popularity}</strong>{" "}
              </p>

              <button
                onClick={() =>
                  this.state.esFavorito
                    ? this.borrarFavoritos()
                    : this.agregarFavoritos()
                }
              >
                {this.state.esFavorito
                  ? "Quitar de favoritos"
                  : "Agregar a favoritos"}
              </button>
            </div>
          )}
      </div>
  
    );
    
  }
}

export default DetallesCard;
