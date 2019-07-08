import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SearchCat extends Component {
    render() {
        return (
            <div className ="container">
                <h3 text="center">Browse categories or search for exactly what you need.</h3>

                <div class="input-group">
                    <input type="text" class="form-control" placeholder="What are you looking For? Food, homes services, photographer, producer?" aria-label="What are you looking For?" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            

                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Location</button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item" href="#">Near Me</a>
                                        <a class="dropdown-item" href="#">Dorchester</a>
                                        <a class="dropdown-item" href="#">Roxbury</a>
                                        <a class="dropdown-item" href="#">Mattapan</a>
                                        <a class="dropdown-item" href="#">Jamaica Plain</a>
                                        <a class="dropdown-item" href="#">Greater Boston Area</a>
                                        <a class="dropdown-item" href="#">Somerville</a>
                                        <a class="dropdown-item" href="#">North America</a>
                                            <div role="separator" class="dropdown-divider"></div>
                                                <a class="dropdown-item" href="#">Global</a>
                                            </div>
                                    </div>
                            </div>
                            <Link to='/search/searchResults' button class="btn btn-outline-secondary" type="btn">Search</Link>
                    </div>

                    <div className="row">
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Dudley Businesses</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Dorchester Businesses</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Freelancers</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Wellness</button>
                        <Link to='/misc/today'>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Events</button></Link>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Nurses</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Mental Health Professionals</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Shopping</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Haitian Food</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Cape Verdian Food</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Freelancers</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Wellness</button>
                        <Link to='/misc/today'>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Events</button></Link>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Make Up Artists</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Producers</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Organizers</button>
                    </div>

            </div>
        )
    }
}
