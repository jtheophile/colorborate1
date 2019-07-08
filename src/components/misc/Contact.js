import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ContactUs extends Component {
    render() {
        return (
          <div className="container">
            <h2>Stay in Touch</h2>
            <form>
                <div class="container">
                <div class="form-group pt-5">
                    <label for="exampleFormControlInput1">Your Name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                <label for="exampleFormControlInput1">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
                </div>
                <div class="form-group">
                <label for="exampleFormControlInput1">Phone Number</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Only if you would like us to call you." />
                </div>
            
            <div class="form-group">
              <label for="exampleFormControlSelect2">What is this regarding</label>
              <select multiple class="form-control" id="exampleFormControlSelect2">
                <option>1-Question</option>
                <option>2-Comment</option>
                <option>3-Suggest a Collaboration</option>
                <option>4-Submit a Business</option>
                <option>5-Other</option>
              </select>
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Type here</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
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