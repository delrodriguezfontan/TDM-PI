import React, { Component } from "react";

class CardSerie extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <article class="single-card-tv">
            <img src="https://image.tmdb.org/t/p/w500/6TPGDrU9MyWbn2TpggJphVAVXiq.jpg" class="card-img-top"
                alt="..."/>
            <div class="cardBody">
                <h5 class="card-title">{this.props.informacion.title}</h5>
                <p class="card-text">{this.props.informacion.overview}.</p>
                <a href="serie.html" class="btn btn-primary">Ver más</a>
                <a href="" class="btn alert-primary">🩶</a>
            </div>
        </article>
        )
    }
}

export default CardSerie