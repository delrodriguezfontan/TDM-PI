import './App.css';
import Header from "./components/Header/Header";
import React from 'react';
import Footer from './components/Footer/Footer';
import Buscador from './components/Buscador/Buscador';
import Peliculas from './screens/Peliculas/Peliculas';


function App() {
  return (
<React.Fragment>
   <header className="container" >
       <h1>UdeSA Movies</h1>
        <Header /> 
    </header>

    <body>
    <Buscador />

        <h2 className="alert alert-primary">Popular movies this week</h2>
        <Peliculas/>

        <h2 className="alert alert-warning">Popular TV shows this week</h2>
        <Peliculas/>

        


    </body>

    <Footer />
</React.Fragment>
  )
} 



export default App;
