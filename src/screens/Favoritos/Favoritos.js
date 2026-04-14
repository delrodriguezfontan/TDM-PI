import React, { Component } from "react";

class Favoritos extends Component {
    constructor(props){
        super(props);

        this.state = {
            peliculasFavorita: [],
            seriesFavoritas: [],
            cargando: true,
        }
    
    let favoritos = localStorage.getItem("favoritosPeliculas") == null ? [] : JSON.parse(localStorage.getItem("favoritosPeliculas")); 
    let favoritosParseados = JSON.parse(favoritos)

    

    }

}



export default Favoritos; 
