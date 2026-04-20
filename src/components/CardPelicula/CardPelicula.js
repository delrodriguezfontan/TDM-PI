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
        let favoritos = localStorage.getItem("favoritosPeliculas") === null ? [] : JSON.parse(localStorage.getItem("favoritosPeliculas"));

        favoritos.push({
        id: this.props.informacion.id,
        tipo: this.props.tipo
    });

    localStorage.setItem("favoritosPeliculas", JSON.stringify(favoritos));

    this.setState({esFavorito: true });
}

    borrarFavoritos() {
        let favoritos = JSON.parse(localStorage.getItem("favoritosPeliculas"));

        let favoritosNuevos = favoritos.filter(favs => favs.id !== this.props.informacion.id);

    localStorage.setItem("favoritosPeliculas", JSON.stringify(favoritosNuevos));

    this.setState({esFavorito: false });
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
              <button onClick={() => this.state.esFavorito ? this.borrarFavoritos() : this.agregarFavoritos()}> 
                {this.state.esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
            </div>
        </article>
        )
    }

}
    export default CardPelicula;