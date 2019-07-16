import React, { Component } from 'react'
import {Link, withRouter} from "react-router-dom"
import axios from "axios"
class Login extends Component {

    state = {
        username: "",
        password: "",
        showAlert: false
    }
    
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            showAlert: false
        })
    }
    
    onSubmit = e => {
        e.preventDefault();
        const {username, password} = this.state;
        const user = {
            username,
            password
        }
        this.login(user);
    }
    
    login = async user => {
        try {
            const res = await axios.post('/api/login', user);
            // navigate user to profile page - /users/:id
            this.props.history.push(`/users/${res.data._id}`);
            window.$("#exampleModalCenter").modal("hide");
        } catch {
            this.setState({
                showAlert: true
            })
        }
      }

    render() {
        return (
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalCenterTitle">Login</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                    <form onSubmit={this.onSubmit} id="loginForm">           
                      <div className="form-group mb-2">
                        <label htmlFor="username" >Username: </label> 
                        <input 
                          placeholder="Enter Username" 
                          className="form-control" 
                          type="text" 
                          id="username" 
                          name="username"
                          value={this.state.username}
                          onChange = {this.onChange}
                        />
                      </div>    
                      <div className="form-group mb-4">
                        <label htmlFor="password">Password: </label>
                        <input
                          placeholder="Password"
                          type="password"
                          className="form-control" 
                          id="password"
                          name="password"
                          value={this.state.password}
                          onChange = {this.onChange}
                        />
                      </div>
                    </form>
                </div>
                <div className="modal-footer"> 
                    <button form="loginForm" className="btn btn-success btn-block">Log In</button>
                    <Link className="btn btn-success btn-block" to="/">
                       Cancel
                    </Link>
                </div>  
                
              </div>
            </div>
          </div>
        )
    }
}

export default withRouter(Login);