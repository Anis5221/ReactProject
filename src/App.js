import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contect from './Contect';
import Navbar from './Navbar';
import Footer from './Footer';

const App = () =>{

    return (
        <div>
        <Navbar/>
          <Switch>
              <Route exact path="/"><Home/></Route>
              <Route exact path="/about"><About/></Route>
              <Route exact path="/service"><Service/></Route>
              <Route exact path="/contect"><Contect/></Route>
              <Redirect to='/'><Home/></Redirect>
          </Switch>  
          <Footer/>
        </div>
    )
}
export default App;