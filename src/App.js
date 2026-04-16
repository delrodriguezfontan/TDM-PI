
import Header from "./components/Header/Header";
import React, {Component} from "react";

import Footer from "./components/Footer/Footer";

import Peliculas from "./screens/Peliculas/Peliculas";
import Resultados from "./screens/Resultados/Resultados"
import Home from './screens/Home/Home';
import Series from "./screens/Series/Series";
import { Route , Switch} from "react-router-dom";


class App  extends Component {
  render() {
    return (

      <React.Fragment>
      <header className="container">
        <h1>UdeSA Movies</h1>
        <Header />
      </header>


      <Switch> 
        <Route path="/" exact={true} component={Home} />
        <Route path="/resultados/:tipo/:busqueda" component={Resultados} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/series" component={Series} />
        
      </Switch>

      <Footer />

      </React.Fragment>

    )
  }
}




export default App;