import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';


export default class home extends Component {
    state = {
        users: [],
        resultsShowing: [],
        searchInput: '',
        filteredUsers: []
    };


    //findAllUsers data function
    async componentDidMount() {
        const res = await Axios.get("/api/users");
        this.setState({
            users: res.data
        })
    }

    searchResults = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    filterAllUsersData = () => {
        const checkInput = (user, text) => {
            console.log(user.namePosition)
            return (user.businessName && user.businessName.includes(text)) || 
            (user.namePosition && user.namePosition.includes(text)) || 
            (user.categories && user.categories.includes(text))
        }

        const newUsers = this.state.users.filter(
            (user) => checkInput(user, this.state.searchInput)
        )

        this.setState({
            filteredUsers: newUsers
        })

        console.log(newUsers);
        
    }

    render() {
        const { uid } = this.props
        return (
            <div className="container text-center">
                <br></br>
                <p>Support Black & Brown Businesses | Collaborate on Projects & Find Talent</p>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://s3-media3.fl.yelpcdn.com/bphoto/tSRNA5p7JjoDa0yrsoBesw/180s.jpg" className="d-block w-100" alt="Daryls" width="500" height="400" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://static.wixstatic.com/media/b8f674_e5cad7ece4984d859d02b01f6c5acd47~mv2_d_3000_3000_s_4_2.jpg" className="d-block w-100" alt="Slades" width="500" height="400" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://scontent.fbos1-1.fna.fbcdn.net/v/t1.0-9/27337171_1016693201820287_902293145280662378_n.jpg?_nc_cat=106&_nc_oc=AQktjgZhNNOJUw5Z30KZWZQoYVuTEOrRTTWVaCpuHy2uQDCOBIExx5fsuqmKQnTySXQ&_nc_ht=scontent.fbos1-1.fna&oh=5762fd05e10787705b085ba806c70625&oe=5D7B9924" className="d-block w-100" alt="QC" width="500" height="400" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                <br></br>
                <div className="input-group">
                    <input
                        onChange={this.searchResults}
                        type="text"
                        className="form-control"
                        name="searchInput"
                        placeholder="What are you looking For? Food, homes services, photographer, producer?"
                        aria-label="What are you looking For?"
                        aria-describedby="basic-addon2" />
                    <div className="input-group-append">

                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Location</button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Near Me</a>
                                <a className="dropdown-item" href="#">Dorchester</a>
                                <a className="dropdown-item" href="#">Roxbury</a>
                                <a className="dropdown-item" href="#">Mattapan</a>
                                <a className="dropdown-item" href="#">Jamaica Plain</a>
                                <a className="dropdown-item" href="#">Greater Boston Area</a>
                                <a className="dropdown-item" href="#">Somerville</a>
                                <a className="dropdown-item" href="#">North America</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Global</a>
                            </div>
                        </div>
                    </div>
                    < button onClick={this.filterAllUsersData} className="btn btn-outline-secondary" type="btn">Search</ button>
                </div>
                <br></br>
                <h4> Browse Businesses by Category </h4>

                <div className="row">
                    <button id="cat" type="button" className="btn btn-success btn-lg">Dudley Businesses</button>
                    <button id="cat" type="button" className="btn btn-success btn-lg">Dorchester Businesses</button>
                    <button id="cat" type="button" className="btn btn-success btn-lg">Freelancers</button>
                    <button id="cat" type="button" className="btn btn-success btn-lg">Web Designers</button>
                </div>
                <div className="row">
                    <button id="cat" type="button" className="btn btn-success btn-lg">Wellness</button>
                    <Link to='/misc/today'>
                        <button id="cat" className="btn btn-success btn-lg">Events</button>
                    </Link>
                    <button id="cat" className="btn btn-success btn-lg">Shopping</button>
                    <button id="cat" className="btn btn-success btn-lg">Nutritionist</button>
                </div>

                <div >
                    <a id="morecat" href='search/searchCat' className="text-decoration-none mt-20">Check out more categories.</a>
                </div>
                <br></br>
            </div>
        )
    }
}