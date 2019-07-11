import React, { Component } from 'react'
import { Link } from 'react-router-dom';


export default class Footer extends Component {
    
    render() {
        return (
        <div className="container">
            <div class="row">
                <div class="col-sm">
                    <div class="card text-white bg-success mb-3" class="btn btn-outline-success btn-lg">
                        <div class="card-header" height="100" width="100">
                            Stay in Touch
                        </div>
                            <div class="card-body">
                                <h5 class="card-title">Have a Suggesting?</h5>
                                <p class="card-text">Contact us or join our mailing list!</p>
                            </div>
                        <div class="form-group">
                            <label for="Name">Email Address</label>
                            <input type="text" class="form-control" id="business name" />
                        </div>
                        <div>
                            <p href="#" class="btn btn-primary mb-1">Join Our Mailing List</p>
                            <a href="misc/contact" class="btn btn-primary">Hit Us Up</a>
                        </div>
                    </div>
                </div>


                <div class="col-sm">
                    <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-2 mb-4" data-toggle="modal" data-target="#exampleModalCenter">
                    Submit a Business
                    </button>
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalCenterTitle">Submit a Business You Would Like to See! </h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                            <div class="modal-body">
                                    <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Business Name</label>
                                        <input type="text" class="form-control" id="recipient-name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Contact Information:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Additional Details You Would Like to Share</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div>
                        <button type="button" class="btn btn-outline-success my-2 my-sm-0 mr-2" data-toggle="modal" data-target="#exampleModalCenter">
                        Submit a Collaboration
                        </button>
                        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered" role="document">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalCenterTitle">Submit a Business You Would Like to See! </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="form-group">
                                        <label for="recipient-name" class="col-form-label">Business Name</label>
                                        <input type="text" class="form-control" id="recipient-name" />
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Contact Information:</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="message-text" class="col-form-label">Additional Details You Would Like to Share</label>
                                        <textarea class="form-control" id="message-text"></textarea>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Submit</button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>


                    <div class="col-sm">
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
                <footer>Copyright COLORborate - All Rights Reserved - DOL Funding Disclosure - Registered 501(c)(3). blah blah </footer>
            </div>

            

            )
        }
    }