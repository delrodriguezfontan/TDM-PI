import React from "react";
import {Link} from "react-router-dom";

function Header(){
    return (
        <nav>
        <ul class="nav nav-tabs my-4">
            <li className="nav-item">
                <Link to = "index.html" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
                <Link to = "movies.html" className="nav-link">Películas</Link>
            </li>
            <li className="nav-item">
                <Link to = "series.html"  className="nav-link">Series</Link>
            </li>
            <li className="nav-item">
                <Link to ="favorites.html"  className="nav-link">Favoritas</Link>
            </li>
            <li className="nav-item ml-auto">
                <Link to = "register.html"  className="nav-link">Registro</Link>
            </li>
            <li className="nav-item">
                <Link to ="login.html"  className="nav-link">Login</Link>
            </li>
        </ul>
    </nav>
    );
}

export default Header;