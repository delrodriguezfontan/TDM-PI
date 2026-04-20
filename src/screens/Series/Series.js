import React, { Component } from "react";
import CardSerie from "../../components/CardSerie/CardSerie";


class Series extends Component{
    constructor(props){
        super(props)

        this.state ={
        series: [],
        page: 1,
        cargando: true,
        }
        ;

    }

    componentDidMount() {
         const apikey = "94180faf61f8ab976c73db3b0fed85bc";
        
        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&page=1`)
            .then((res) => res.json())
            .then((data) =>
            this.setState({
                series: data.results,
                page: 2,
                cargando: false
            }))

             .catch(error => console.log(error))
                     
        }         
        
    
        cargarMas() {

            const apiKey= "94180faf61f8ab976c73db3b0fed85bc";

            fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${this.state.page})`)
                .then((res) => res.json())
                .then((data) => {
                    this.setState({
                        series: this.state.series.concat(data.results),
                        page: this.state.page + 1,
                    });
                
                }
                
            )
            .catch(error => console.log(error))
         }
    
   

    render() {
        let listado = (this.state.cargando === true) ? <p>Cargando...</p> : this.state.series.map((informacion) => (
            <CardSerie key={informacion.id} informacion={informacion} tipo="tv" /> 
        ));



        return(
            <React.Fragment>
            <h2 className="alert alert-warning">Todas las series</h2>

            {listado}

             <button className="btn btn-warning" onClick={() => this.cargarMas()}>Cargar más</button>
            </React.Fragment>
            );
        }
    }


export default Series