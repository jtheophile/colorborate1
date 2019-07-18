import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class extends Component {  

    render() {        
        const { users } = this.props.location.state

        return (
        <div className="container" id="sr">
            <h1> Search Results</h1> 
            <li className="list-group-item" id="sr">
               {users.map(user => (
                    <div className="row">
                        <div className="col">
                            <Link to={`/users/${user._id}`}><h3>{user.businessName}</h3></Link>
                            <h6>{user.businessAddress} </h6>
                            <h6>{user.website} </h6>
                            <h6>{user.facebook} </h6>
                        </div>
                    </div>

                    <div className="col">
                        <h6>{user.twitter} </h6>
                        <h6>{user.instagram} </h6>
                    </div>
               )
            </li>
        </div>
        )
    }
};