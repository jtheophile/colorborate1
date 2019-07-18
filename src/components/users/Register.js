import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom"
import axios from "axios";

export default class Register extends Component {

  state = {
    username: "",
    password: "",
    password2: "",
    firstName: "",
    lastName: "",
    email: "",
    zipCode: "",
    role: "",
    businessName: "",
    businessAddress: "",
    namePosition: "",
    website: "",
    facebook: "",
    instagram: "",
    twitter: "",
    categories: "",
    showUsernameAlert: false,
    showPasswordAlert: false,
    showUsernameLengthAlert: false,
    showPasswordLengthAlert: false
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      showPasswordAlert: false,
      showUsernameAlert: false
    })
  }

  onSubmit = e => {
    e.preventDefault();
    const { username, password, password2, firstName, lastName, email, zipCode, role, businessName, businessAddress, namePosition, website, facebook, instagram, twitter, categories} = this.state;
    this.register(username, password, password2, firstName, lastName, email, zipCode, role, businessName, businessAddress, namePosition, website, facebook, instagram, twitter, categories);
  }

  async register(username, password, password2, firstName, lastName, email, zipCode, role, businessName, businessAddress, namePosition, website, facebook, instagram, twitter, categories) {
    // check username length
    if (username.length < 5) {
      this.setState({
        showUsernameLengthAlert: true
      })
      return;
    }
    // check password length
    if (username.length < 5) {
      this.setState({
        showPasswordLengthAlert: true
      })
      return;
    }
    // check password length
    if (password.length < 5) {
      this.setState({
        showPasswordLengthAlert: true
      })
      return;
    }
    // do the passwords match?
    if (password !== password2) {
      // alert("The passwords do not match, Please try again.");
      this.setState({
        showPasswordAlert: true
      })
      return;
    }

    //check is username is available
    const res = await axios.get(`/api/user?username=${username}`);

    if (res.data) {
      // alert("This username is taken, please try another one");
      this.setState({
        showUsernameAlert: true
      })
      return;
    } else {
      const newUser = {
        username,
        password,
        password2,
        firstName,
        lastName,
        email,
        zipCode,
        role,
        businessName,
        businessAddress,
        namePosition,
        website,
        facebook,
        instagram,
        twitter,
        categories,
      };
      //send to server   
      const res2 = await axios.post("/api/register", newUser);
      // navigate user to profile page - /users/:id
      this.props.history.push(`/users/${res2.data._id}`);
    }

  }

  render() {
    const { username, password, password2, firstName, lastName, email, zipCode, role, businessName, businessAddress, namePosition, website, facebook, instagram, twitter, categories } = this.state
    return (



      <div className="container">
        {this.state.showPasswordAlert && (<div className="alert alert-danger">Your credentials don't match.</div>)}

        {this.state.showUsernameAlert && (<div className="alert alert-danger">Try another username, this one is taken.</div>)}

        {this.state.showUsernameLengthAlert && (<div className="alert alert-danger">Please make your username at least 6 characters.</div>)}

        {this.state.showPasswordLengthAlert && (<div className="alert alert-danger">Please make your password at least 6 characters.</div>)}




        {/*<div>
                <p>I am a: </p>
                  <button className="btn btn-outline-success btn btn-block" > User </button>
                  <button className="btn btn-outline-success btn btn-block" > Business </button>
                  <button className="btn btn-outline-success btn btn-block" > Partner </button>                    
                </div>*/}

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="role">Role</label>
            <input type="text" className="form-control" id="role"
              name="role"
              onChange={this.onChange}
              value={role}
            />
          </div>





          <div className="form-group">
            <label htmlFor="Name">First Name:</label>
            <input type="text" className="form-control" id="firstName"
              name="firstName"
              onChange={this.onChange}
              value={firstName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="Name">Last Name</label>
            <input type="text" className="form-control" id="lastName"
              name="lastName"
              onChange={this.onChange}
              value={lastName}
            />
          </div>
          <div>
            <label htmlFor="exampleInputEmail1">Email address:</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp"
              name="email"
              onChange={this.onChange}
              value={email}
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" className="form-control" id="username"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" className="form-control" id="password"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Verify Password:</label>
            <input type="password" className="form-control" id="password2"
              name="password2"
              onChange={this.onChange}
              value={password2}
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code:</label>
            <input type="number" className="form-control" id="zipCode"
              name="zipCode"
              onChange={this.onChange}
              value={zipCode}
            />
          </div>
          <div className="form-group">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Yes, I would like to receive the monthly newsletter.</label>
          </div>
          <h4> Add information about your business! </h4>
          <div className="form-group">
            <label htmlFor="businessName">What's the name of your business?</label>
            <input type="text" className="form-control" id="businessName"
              name="businessName"
              onChange={this.onChange}
              value={businessName}
            />
          </div>
          <div className="form-group">
            <label htmlFor="namePosition">Your name & position.</label>
            <input type="text" className="form-control" id="namePosition"
              name="namePosition"
              onChange={this.onChange}
              value={namePosition}
            />
          </div>
          <div className="form-group">
            <label htmlFor="website">Link to your business website.</label>
            <input type="text" className="form-control" id="website"
              name="website"
              onChange={this.onChange}
              value={website}
            />
          </div>
          <div className="form-group">
            <label htmlFor="businessAddress">Business Address:</label>
            <input type="text" className="form-control" id="businessAddress"
              name="businessAddress"
              onChange={this.onChange}
              value={businessAddress}
            />
          </div>
          <small id="emailHelp" className="form-text text-muted">Link your social media, articles, acknowledgements and anything else you would like to appear on your page.</small>
          <div className="form-group">
            <label htmlFor="facebook">Facebook:</label>
            <input type="text" className="form-control" id="facebook"
              name="facebook"
              onChange={this.onChange}
              value={facebook}
            />
          </div>
          <div className="form-group">
            <label htmlFor="instagram">Instagram:</label>
            <input type="text" className="form-control" id="instagram"
              name="instagram"
              onChange={this.onChange}
              value={instagram}
            />
          </div>
          <div className="form-group">
            <label htmlFor="twitter">Twitter:</label>
            <input type="text" className="form-control" id="twitter"
              name="twitter"
              onChange={this.onChange}
              value={twitter}
            />
          </div>
          <div className="form-group">
            <label htmlFor="categories">Categories:</label>
            <input type="text" className="form-control" id="categories" placeholder="Check all that apply"
              name="categories"
              onChange={this.onChange}
              value={categories}
            />
          </div>
            <div>
            <button className="btn btn-success btn-block mb-2">Submit</button>
          </div>

          <Link className="btn btn-success btn-block" to="/">
            Cancel
          </Link>


          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </form>
      </div>
    )
  }
}
