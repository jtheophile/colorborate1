import React, { Component } from 'react';
import { Link }  from 'react-router-dom';


export default class home extends Component {
    render() {
        return (
            <div className="container text-center">
                <br></br>
                <p>Support Black & Brown Businesses | Collaborate on Projects & Find Talent</p>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src="https://s3-media3.fl.yelpcdn.com/bphoto/tSRNA5p7JjoDa0yrsoBesw/180s.jpg" class="d-block w-100" alt="Daryls" width="500" height="400" />
                        </div>
                        <div class="carousel-item">
                        <img src="https://static.wixstatic.com/media/b8f674_e5cad7ece4984d859d02b01f6c5acd47~mv2_d_3000_3000_s_4_2.jpg" class="d-block w-100" alt="Slades" width="500" height="400"/>
                        </div>
                        <div class="carousel-item">
                        <img src="https://scontent.fbos1-1.fna.fbcdn.net/v/t1.0-9/27337171_1016693201820287_902293145280662378_n.jpg?_nc_cat=106&_nc_oc=AQktjgZhNNOJUw5Z30KZWZQoYVuTEOrRTTWVaCpuHy2uQDCOBIExx5fsuqmKQnTySXQ&_nc_ht=scontent.fbos1-1.fna&oh=5762fd05e10787705b085ba806c70625&oe=5D7B9924" class="d-block w-100" alt="QC" width="500" height="400" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <br></br>
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
                    <br></br>
                    <h4> Browse Businesses by Category </h4>

                    <div className="row">
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Dudley Businesses</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Dorchester Businesses</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Freelancers</button>
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Web Designers</button>
                    </div>
                    <div className="row">
                        <button id="cat" type="button" class="btn btn-outline-success" class="btn btn-success btn-lg">Wellness</button>
                        <Link to='/misc/today'>
                        <button id="cat" class="btn btn-outline-success" class="btn btn-success btn-lg">Events</button></Link>
                        <button id="cat" class="btn btn-outline-success" class="btn btn-success btn-lg">Shopping</button>
                        <button id="cat" class="btn btn-outline-success" class="btn btn-success btn-lg">Nutritionist</button>
                        </div>

                            <div >
                                <a id="morecat" href='search/searchCat' class="text-decoration-none mt-20">Check out more categories.</a>
                            </div>
                            <br></br>
                        </div>
            )
        }
    }