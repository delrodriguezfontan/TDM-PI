import React, { Component } from "react";
import Buscador from "../../components/Buscador/Buscador";
import Peliculas from "../Peliculas/Peliculas";
import Series from "../Series/Series";

class Home extends Component {
    render(){
        return (
            <main>
                <Buscador /> 
                <h2 className="alert alert-primary">Películas populares</h2>
                <Peliculas />
                <h2 className="alert alert-primary">Series populares</h2>
                <Series />
            </main>
        );
    }

}







export default Home;