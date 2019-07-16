import React, { Component } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Axios from "axios";

import Home from './components/search/Home';
import Navbar from './components/utility/NavbarB';
import Footer from './components/utility/Footer';
import SearchResults from './components/search/SearchResults';
import SearchCat from './components/search/SearchCat';
import Login from './components/users/Login';
import Profile from './components/users/Profile';
import Register from './components/users/Register';
import UserP from './components/users/UserP';
import Contact from './components/misc/Contact';
import Resources from './components/misc/Resources';
import About from './components/misc/About';
import Action from './components/misc/Action';
import Foc from './components/misc/Foc';
import Today from './components/misc/Today';
import Collab from './components/misc/Collab';



class App extends Component {

    loggedIn = async () => {
    const res = await Axios.get("/api/loggedIn"); 
    return res.data;
}

  render() {
    return(
      <Router>
      <Navbar />
      <Switch>        
        <Route exact path='/' component={Home} />
        <Route exact path='/search/searchResults' component={SearchResults} />
        <Route exact path='/search/searchCat' component={SearchCat} />

        <Route exact path='/users/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/users/:id' component={UserP} />
        <Route exact path='/users/:id/edit' component={Profile} />

        <Route exact path='/utility/navbar' component={Navbar} />
        <Route exact path='/utility/footer' component={Footer} />

        <Route exact path='/misc/resources' component={Resources} />
        <Route exact path='/misc/contact' component={Contact} />
        <Route exact path='/misc/about' component={About} />
        <Route exact path='/misc/action' component={Action} />
        <Route exact path='/misc/foc' component={Foc} />

        <Route exact path='/misc/today' component={Today} />
        <Route exact path='/misc/collab' component={Collab} />    
            
      </Switch>
      <Footer />
    </Router>

    
    )
  }
}
export default App;