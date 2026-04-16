import React, { Component } from "react";
import { Link } from "react-router-dom";

class CardPelicula extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }


    
    render(){
        return(
            <article class="single-card-movie">
            <img src="https://image.tmdb.org/t/p/w500/9PXZIUsSDh4alB80jheWX4fhZmy.jpg" class="card-img-top"
                alt="..."/>
            <div class="cardBody">
                <h5 class="card-title">{this.props.informacion.title}</h5>
                <p class="card-text">{this.props.informacion.overview}</p>
                <a href="movie.html" class="btn btn-primary">Ver más</a>
                <Link href="" class="btn alert-primary">♥️</Link>
            </div>
        </article>
        )
    }
}

export default CardPelicula