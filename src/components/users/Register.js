import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

export default class Register extends Component {

    state = {
        username:"",
        password:"",
        password2:"",
        showUsernameAlert: false, 
        showPasswordAlert: false,
        showUsernameLengthAlert: false,
        showPasswordLengthAlert: false
      }

      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
          showUsernameAlert: false, 
          showPasswordAlert: false,
        })
      }

      //function to change for hidden buttons 6.7

    onSubmit = e => {
      e.preventDefault();
      const {username, password, password2} = this.state;
      this.register(username, password, password2);
    }

    async register (username, password, password2) {
      // check username length
      if(username.length < 5) {
        this.setState({
            showUsernameLengthAlert: true
        })
        return;
      }
      // check password length
      if(username.length < 5) {
        this.setState({
            showPasswordLengthAlert: true
        })
        return;
      }

        // do the passwords match?
      if(password !== password2) {
        // alert("The passwords do not match, Please try again.");
        this.setState({
          showPasswordAlert: true
        })
        return;
      }

            //check is username is available
      const res = await axios.get(`/api/user?username=${username}`);

      if(res.data){
        // alert("This username is taken, please try another one");
        this.setState({
          showUsernameAlert: true
        })
        return;
      } else {
         const newUser = {
          username,
          password,
          email: "",
          firstName: "",
          lastName: ""
      };   
      //send to server   
      const res2 = await axios.post("/api/register", newUser);
      this.props.history.push(`/user/${res2.data._id}`);
  }

 }

    render() {
        return (
            <div>
                <form>
                    <div class="container">
                        <div>
                            I am a: 
                            <button className="btn btn-outline-success btn-block" type="submit"> User </button>
                            <button className="btn btn-outline-success btn-block" type="submit"> Business </button>

                  
                            {this.state.showPasswordAlert && (<div className="alert alert-danger">Your credentials don't match.</div>)}

                            {this.state.showUsernameAlert && (<div className="alert alert-danger">Try another username, this one is taken.</div>)}

                            {this.state.showUsernameLengthAlert && (<div className="alert alert-danger">Your Username is too short, please make at least 6 characters.</div>)}

                            {this.state.showPasswordLengthAlert && (<div className="alert alert-danger">Your password is too short, please make at least 6 character.</div>)}


                            

                        <div class="form-group">
                            <label for="Name">First Name</label>
                            <input type="text" class="form-control" id="First Name" />
                        </div>
                        <div class="form-group">
                            <label for="Name">Last Name</label>
                            <input type="text" class="form-control" id="Last Name" />
                        </div>
                        <div>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group">
                            <label for="zipCode">Zip Code</label>
                            <input type="password" class="form-control" id="number" />
                        <div class="form-group">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Yes, I would like to receive the monthly newsletter.</label>
                            </div>
                        <h4> Add information about your business! </h4>
                        <div class="form-group">
                            <label for="Name">What's the name of your business?</label>
                            <input type="text" class="form-control" id="business name" />
                        </div>
                        <div class="form-group">
                            <label for="Name">Your name & position.</label>
                            <input type="text" class="form-control" id="business name" />
                        </div>
                        <div class="form-group">
                            <label for="Name">Link to your business website.</label>
                            <input type="text" class="form-control" id="business name" />
                        </div>
                        <small id="emailHelp" class="form-text text-muted">Link your social media, articles, acknowledgements and anything else you would like to appear on your page.</small>
                        <div class="form-group">
                            <label for="Name">Facebook</label>
                            <input type="text" class="form-control" id="business name" />
                        </div>
                        <div class="form-group">
                            <label for="Name">Instagram</label>
                            <input type="text" class="form-control" id="business name" />
                        </div>
                        <div class="form-group">
                            <label for="Name">Twitter</label>
                            <input type="text" class="form-control" id="business name" />
                        </div>
                        </div>
                        
                        </div>
                             <Link to="/">
                             <button type="submit" class="btn btn-success">Submit</button>
                             </Link>
                        </div>
                </form>
            </div>
        )
    }
}
