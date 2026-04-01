import React from "react";

function Buscador(){
    return(
        <form className="search-form" action="results.html" method="get">
            <input type="text" className="" name="searchData" placeholder="Buscar..." value=""></input>
            <button type="submit" className="btn btn-success btn-sm">Buscar</button>
        </form>
    )
}




export default Buscador;