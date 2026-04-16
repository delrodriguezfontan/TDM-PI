import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <nav>
        <ul class="nav nav-tabs my-4">
            <li className="nav-item">
                <Link to = "/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
                <Link to = "/peliculas" className="nav-link">Películas</Link>
            </li>
            <li className="nav-item">
                <Link to = "/series"  className="nav-link">Series</Link>
            </li>
            <li className="nav-item">
                <Link to ="/favoritas"  className="nav-link">Favoritas</Link>
            </li>
            <li className="nav-item ml-auto">
                <Link to = "/registro"  className="nav-link">Registro</Link>
            </li>
            <li className="nav-item">
                <Link to ="/login"  className="nav-link">Login</Link>
            </li>
        </ul>
    </nav>
    )
}

export default Header;