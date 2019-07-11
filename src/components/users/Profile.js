import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <form>
                    <div class="container">
                        <div>
                            <h1>Edit user profile pg</h1>

                            <button className="btn btn-outline-success btn-block" type="submit"> User </button>

                  <button className="btn btn-outline-success btn-block" type="submit"> Business </button>

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

