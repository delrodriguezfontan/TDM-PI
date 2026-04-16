import React, { Component } from "react";
import "./CardSerie.css";

class CardSerie extends Component{
    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Ver más"
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
    render(){
        return(
            <article className="single-card-tv">
            <img src={`https://image.tmdb.org/t/p/w500/${this.props.informacion.poster_path}`} className="card-img-top"
                alt={this.props.informacion.name}/>
            <div className="cardBody">
                <h5 className="card-title">{this.props.informacion.name}</h5>
                <p className="card-text">{this.props.informacion.overview}.</p>
                <button onClick={()=> this.cambiarTexto()}>{this.state.textoBoton}</button>
                
            </div>
        </article>
        )
    }
}

export default CardSerie