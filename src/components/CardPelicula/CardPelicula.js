import React, { Component } from "react";
import "./CardPelicula.css";

class CardPelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Ver más",
            textoClase: "Ocultar",
            esFavorito: false
        }
    }

    cambiarTexto(){
        if (this.state.textoBoton === "Ver más"){
            this.setState ({
                textoBoton: "Ver menos",
                textoClase: ""
            });
        }
        else{
            this.setState ({
                textoBoton: "Ver más",
                textoClase: "Ocultar"

            });
        }
    }

    

    agregarFavoritos(){

    let favoritos = localStorage.getItem("favoritosPeliculas") == null ? [] : JSON.parse(localStorage.getItem("favoritosPeliculas")); 
    
    if (this.state.esFavorito){
      let favoritosNuevos = favoritos.filter(id => id !== this.props.informacion.id)
      
      localStorage.setItem("favoritosPeliculas", JSON.stringify(favoritosNuevos));
      this.setState({esFavorito: false });
   
    }else{
      favoritos.push(this.props.informacion.id);
      localStorage.setItem("favoritosPeliculas", JSON.stringify(favoritos));
      this.setState({esFavorito: true});
    }
    console.log(localStorage.getItem("favoritosPeliculas"))
    }

    
    
    

    render() {
        return(
            <article className="single-card-movie"> 
            <img src={`https://image.tmdb.org/t/p/w500/${this.props.informacion.poster_path}`} className="card-img-top"
                alt={this.props.informacion.title}/>
            <div className="cardBody">
                <h5 className="card-title">{this.props.informacion.title}</h5>
                <p className={"card-text " + this.state.textoClase} >{this.props.informacion.overview}</p>
               <button onClick={() => this.cambiarTexto()}>{this.state.textoBoton}</button>
               <button onClick={() => this.agregarFavoritos()}>{this.state.esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"} </button>
            </div>
        </article>
        )
    }

}
    export default CardPelicula;