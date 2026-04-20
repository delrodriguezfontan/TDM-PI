import React, { Component } from "react";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class DetallesCard extends Component{
constructor(props){
    super(props);

    this.state ={
    dataPelis: "",
    dataSeries:"",
    esFavorito: false,

}
};

componentDidMount() {
    const apiKey = "b91e0f031d3d69983804601676fdef28";
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    let urlSerie = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}`;
    
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          dataPelis: data.results,
        });
      })
      .catch((error) => {
        console.log("el error fue " + error);
      });

    
      fetch(urlSerie)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          dataSeries: data.results,
        });
      })
      .catch((error) => {
        console.log("el error fue " + error);
      });

  }

  agregarFavoritos(){

    let favoritos = localStorage.getItem("favoritos") == null ? [] : JSON.parse(localStorage.getItem("favoritos")); 
    
    if (this.state.esFavorito){
      let favoritosNuevos = favoritos.filter(id => id !== this.props.informacion.id)
      
      localStorage.setItem("favoritos", JSON.stringify(favoritosNuevos));
      this.setState({esFavorito: false });
   
    }else{
      favoritos.push({
        id: this.props.informacion.id,
        tipo: this.props.tipo
    
    });
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      
      this.setState({esFavorito: true});
    }
    }

    
  render() {
    return(
        <section className="row">
        <section className="col-md-6 info">
        <img src={`https://image.tmdb.org/t/p/w500/${this.props.dataPelis.poster_path}`} className="col-md-6 info"
                alt={this.props.dataPelis.name}/>
            <h3>Descripción</h3>
            <p className="description">{this.props.dataPelis.overview}</p>
            <p className="mt-0 mb-0" id="release-date"><strong>{this.props.dataPelis.release_date}</strong> 2025-07-09</p>
            <p className="mt-0" id="votes"><strong>{this.props.dataPelis.popularity}</strong> </p>

            {cookies.get("user-auth-cookie") ? (
            <button onClick={() => this.agregarFavoritos()}>{this.state.esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}
            </button> ) : null}
        </section>
    </section>
    )  
}
}

export default DetallesCard;
