import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function NotFound(){
    return(
        <div>
            <Header />
            
        <section>
             <h1 className="notfound"><strong>404 - Página no encontrada</strong></h1>
        </section>
            
            <Footer /> 
       </div>
    )    
}

export default NotFound;