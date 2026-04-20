import React from "react";
import {Link} from "react-router-dom";
import Cookies from "universal-cookie";

const cookies = new Cookies();

function Header(){
    
    return (
        <nav>
        <ul className="nav nav-tabs my-4">
            <li className="nav-item">
                <Link to = "/" className="nav-link" >Home</Link>
            </li>
            <li className="nav-item">
                <Link to = "/peliculas" className="nav-link">Películas</Link>
            </li>
            <li className="nav-item">
                <Link to = "/series"  className="nav-link">Series</Link>
            </li>
            
            {cookies.get("user-auth-cookie") ?
            <li className="nav-item">
                <Link to="/favoritos" className="nav-link">Favoritos</Link>
            </li>
            : null}
            
            {!cookies.get("user-auth-cookie") ?
            <li className="nav-item">
                <Link to="/login" className="nav-link">Login</Link>
            </li>
            : null}

            {!cookies.get("user-auth-cookie") ?
            <li className="nav-item">
                <Link to="/register" className="nav-link">Registro</Link>
            </li>
            : null}
        </ul>
    </nav>
    )
}

export default Header;