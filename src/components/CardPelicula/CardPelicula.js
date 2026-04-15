import React, { Component } from "react";

class CardPelicula extends Component {
    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Ver más",
            textoClase: "Ocultar"
        }
    }

    cambiarTexto(){
        if (this.state.textoBoton == "Ver más"){
            this.setState({
                textoBoton: "Ver menos",
                textoClase: ""
            })
        }
        else{
            this.setState({
                textoBoton: "Ver más",
                textoClase: "Ocultar"

            })
        }
    }

    render(){
        return(
            <article className="single-card-movie">
            <img src={this.props.informacion.poster_path} class="card-img-top"
                alt={this.props.informacion.title}/>
            <div className="cardBody">
                <h5 className="card-title">{this.props.informacion.title}</h5>
                <p className={"card-text " + this.state.textoClase} >{this.props.informacion.overview}</p>
               <button onClick={()=> this.cambiarTexto()}>{this.state.textoBoton}</button>
            </div>
        </article>
        )
    }
}

export default CardPelicula