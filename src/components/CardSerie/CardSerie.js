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

    let favoritos = localStorage.getItem("favoritos") == null ? [] : JSON.parse(localStorage.getItem("favoritos")); 
    
    if (this.state.esFavorito){
      let favoritosNuevos = favoritos.filter(id => id !== this.props.informacion.id)
      
      localStorage.setItem("favoritos", JSON.stringify(favoritosNuevos));
      this.setState({esFavorito: false });
   
    }else{
      favoritos.push(this.props.informacion.id);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
      this.setState({esFavorito: true});
    }
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
                <button onClick={() => this.agregarFavoritos()}> {this.state.esFavorito ? "Quitar de favoritos" : "Agregar a favoritos"} </button>
                
            </div>
        </article>
        )
    }
}

export default CardSerie