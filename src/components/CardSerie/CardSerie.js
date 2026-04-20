import React, { Component } from "react";
import "./CardSerie.css";

class CardSerie extends Component{
    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Ver más",
            esFavorito: false
        }
    }
    cambiarTexto(){
        if (this.state.textoBoton == "Ver más"){
            this.setState({
                textoBoton: "Ver menos"
            })
        }
        else{
            this.setState({
                textoBoton: "Ver más"
            })
        }
    }

     agregarFavoritos(){
        let favoritos = localStorage.getItem("favoritosSeries") === null ? [] : JSON.parse(localStorage.getItem("favoritosSeries"));

        favoritos.push({
        id: this.props.informacion.id,
        tipo: this.props.tipo
    });

    localStorage.setItem("favoritosSeries", JSON.stringify(favoritos));

    this.setState({esFavorito: true });
}

    borrarFavoritos() {
        let favoritos = JSON.parse(localStorage.getItem("favoritosSeries"));

        let favoritosNuevos = favoritos.filter(favs => favs.id !== this.props.informacion.id);

    localStorage.setItem("favoritosSeries", JSON.stringify(favoritosNuevos));

    this.setState({esFavorito: false });
}





    render(){

        
        return(
            <article className="single-card-tv">
            <img src={`https://image.tmdb.org/t/p/w500/${this.props.informacion.poster_path}`} className="card-img-top"
                alt={this.props.informacion.name}/>
            <div className="cardBody">
                <h5 className="card-title">{this.props.informacion.name}</h5>
                <p className="card-text">{this.props.informacion.overview}.</p>
                <button onClick={()=> this.cambiarTexto()}>{this.state.textoBoton}</button>
                <button onClick={() => this.state.esFavorito ? this.borrarFavoritos() : this.agregarFavoritos()}> 
                {this.state.esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"}</button>
                
            </div>
        </article>
        )
    }
}

export default CardSerie