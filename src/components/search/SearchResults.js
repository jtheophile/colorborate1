import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class extends Component {
    constructor(props) {
        super(props)
        console.log("This is my initializer")

        const results = [
            {id: 0, logo_src:"https://static.wixstatic.com/media/b8f674_e5cad7ece4984d859d02b01f6c5acd47~mv2_d_3000_3000_s_4_2.jpg", title: "Slades", overview: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci voluptatem magni sed quisquam quos sunt cupiditate praesentium itaque, molestias quam."},
            {id: 1, logo_src:"https://s3-media3.fl.yelpcdn.com/bphoto/tSRNA5p7JjoDa0yrsoBesw/180s.jpg/", title: "Queens Co", overview: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci voluptatem magni sed quisquam quos sunt cupiditate praesentium itaque, molestias quam."}
        ]

        var resultRows = []
        results.forEach((result) => {
            console.log(result.title)
            const resultRow = <table key={results.id}>
                <tbody>
                    <tr>
                        <td>
                            <img alt="logo" src={results.logo_src}/>
                        </td>
                        <td>
                            {result.title}
                        </td>
                    </tr>
                </tbody>
            </table>
            resultRows.push(resultRow)
        })

        this.state = {rows: resultRows}
      }


    render() {
        return (
        <div className="center">
            <h1>Results</h1> 
            <ul class="list-unstyled">

                <li class="media">
                     <a href='/users/UserP' img src="https://www.wonderopolis.org/wp-content/uploads/2016/02/f_18.jpg" class="mr-3" alt="Search Test" width="250" height="200"></a>
                    <div class="media-body">
                        <Link to='/users/UserP'><h5 class="mt-0 mb-1">List-based media object</h5></Link>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>

                <li class="media my-4">
                <img src="https://www.wonderopolis.org/wp-content/uploads/2016/02/f_18.jpg" class="mr-3" alt="Search Test" width="250" height="200"/> 
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>

                <li class="media">
                    < img src="https://www.wonderopolis.org/wp-content/uploads/2016/02/f_18.jpg" class="mr-3" alt="Search Test" width="250" height="200"/>
                    <div class="media-body">
                        <h5 class="mt-0 mb-1">List-based media object</h5>
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </div>
                </li>
            </ul>

            {this.state.rows}
            </div>

           
        )
    }
}