import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../users/Login';

class Navbar extends Component {



    render() {
        return (          
            <div className="bg-light text-center">
                <Link id="nl" to="/">COLORborate</Link>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                          <ul className="navbar-nav mr-auto" >
                            <li className="nav-item" >
                              <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/search/SearchCat' className="nav-link" >Search</Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/misc/about' className="nav-link">The Vision</Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/misc/action' className="nav-link">Let's Do This!</Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/misc/foc' className="nav-link" >Friends</Link>
                            </li>
                            <li className="nav-item">
                              <Link to='/misc/contact' className="nav-link">Stay In Touch</Link>
                            </li>
                          </ul>
                          
                              <Link to='/users/UserP'>  
                                <i id="nl"className="far fa-user fa-2x pr-1"></i>
                              </Link>           

                              
                              <button type="button" className="btn btn-outline-success mr-2" data-toggle="modal" data-target="#exampleModalCenter">
                                Login
                              </button>
                           
                              <Login />
                             

                                <Link to='/register'>
                                  <button className="btn btn-outline-success my-2 my-sm-0 " type="submit"> Register!</button>
                                </Link>
                        </div>                    
                    </nav>
            </div>
        );
    }
}

export default Navbar