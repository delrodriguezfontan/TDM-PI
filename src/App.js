
import Header from "./components/Header/Header";
import React, {Component} from "react";
import Footer from "./components/Footer/Footer";
import Peliculas from "./screens/Peliculas/Peliculas";
import Resultados from "./components/Resultados/Resultados";
import Home from './screens/Home/Home';
import Series from "./screens/Series/Series";
import { Route , Switch} from "react-router-dom";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";



class App  extends Component {
  render() {
    return (

      <React.Fragment>
        <header className="container">
        <h1 className="titulo">Las 2 mosqueteras</h1>
          <Header />
        </header>


      <Switch> 
        <Route path="/" exact={true} component={Home} />
        <Route path="/resultados/:tipo/:busqueda" component={Resultados} />
        <Route path="/peliculas" component={Peliculas} />
        <Route path="/series" component={Series} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="" component={NotFound} />
        
      </Switch>

      <Footer />

      </React.Fragment>

    )
  }
}

export default App;