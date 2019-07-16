import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class extends Component {  

    render() {
        return (
        <div className="center">
            <h1>Results</h1> 
            <ul className="list-unstyled">

                <li className="media">
                     <a href='/users/UserP' img src="https://www.wonderopolis.org/wp-content/uploads/2016/02/f_18.jpg" className="mr-3" alt="Search Test" width="250" height="200"></a>
                    <div className="media-body">
                        <Link to='/users/UserP'><h5 className="mt-0 mb-1">List-based media object</h5></Link>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>

                <li className="media my-4">
                <img src="https://www.wonderopolis.org/wp-content/uploads/2016/02/f_18.jpg" className="mr-3" alt="Search Test" width="250" height="200"/> 
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>

                <li className="media">
                    < img src="https://www.wonderopolis.org/wp-content/uploads/2016/02/f_18.jpg" class="mr-3" alt="Search Test" width="250" height="200"/>
                    <div className="media-body">
                        <h5 className="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
            </ul>
        </div>

           
        )
    }
}