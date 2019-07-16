import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Footer extends Component {
    
    render() {
        return (
        <div className="container">
            <div className="row">
                <div className="col-sm">
                    <div className="btn btn-outline-success btn-lg">
                        <div className="card-header" height="100" width="100">
                            Stay in Touch
                        </div>
                            <div className="card-body">
                                <h5 className="card-title">Have a Suggesting?</h5>
                                <p className="card-text">Contact us or join our mailing list!</p>
                            </div>
                        <div className="form-group">
                            <label htmlFor="Name">Email Address</label>
                            <input type="text" className="form-control" id="business name" />
                        </div>
                        <div>
                            <a href="#" className="btn btn-success mr-4">Join Our Mailing List</a>
                            <a href="misc/contact" className="btn btn-success">Hit Us Up</a>
                        </div>
                    </div>
                </div>


                <div className="col-sm">
                    <button type="button" className="btn btn-outline-success my-2 my-sm-0 mr-2 mb-4" data-toggle="modal" data-target="#exampleModalCenter">
                    Submit a Business
                    </button>
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalCenterTitle">Submit a Business You Would Like to See! </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div className="modal-body">
                                    <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Business Name</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Contact Information:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Additional Details You Would Like to Share</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div>
                        <button type="button" className="btn btn-outline-success my-2 my-sm-0 mr-2" data-toggle="modal" data-target="#exampleModalCenter">
                        Submit a Collaboration
                        </button>
                        <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalCenterTitle">Submit a Business You Would Like to See! </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="recipient-name" className="col-form-label">Business Name</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Contact Information:</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message-text" className="col-form-label">Additional Details You Would Like to Share</label>
                                        <textarea className="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                    <div className="col-sm">
                        <div>
                            <Link to='/misc/collab'>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                    Collab Now!
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link to='/misc/today'>
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                                Calendar/Today
                                </button>
                            </Link>
                        </div>                                                
                    </div>
                    
                </div>
                    <br></br>
                <footer>Copyright COLORborate - All Rights Reserved - DOL Funding Disclosure - Registered 501(c)(3). blah blah </footer>
            </div>
            )
        }
    }