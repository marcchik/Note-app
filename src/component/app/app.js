import React from 'react';
import './app.css';

const app = () => {

    return (
        <div className="container">
            <div>
                <h2>Note tracker</h2>
            </div>
            <div>
                <form className="mb-3">
                    <div className="form-group ">
                        <label>Enter your note</label>
                        <textarea className="form-control mb-1" rows="2"></textarea>
                        <button type="submit" className="btn btn-outline-success">Add</button>
                    </div>
                </form>
            </div>
            <div>
                <h4>Your notes</h4>
                <form>
                    <label className="mr-sm-2" >Filter by tag</label>
                    <div className="form-row align-items-center">
                        <div className="col-auto my-1">
                            <select className="custom-select mr-sm-2" id="filter">
                                <option selected>Choose tag...</option>
                                <option value="1">#red</option>
                                <option value="2">#green</option>
                                <option value="3">#important</option>
                            </select>
                        </div>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-dark">
                                Filter
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                Delete tag
                            </button>
                        </div>
                    </div>
                </form>
                <form className="form-inline">
                    <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                    <input type="text" className="form-control mb-1 mr-sm-1" id="inlineFormInputName2"
                           placeholder="#new-tag"/>
                    <button type="submit" className="btn btn-outline-warning mb-1">Add new tag</button>
                </form>
            </div>
            <div>
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center mr-3">
                        Cras justo odio Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias asperiores aut consectetur consequatur culpa cumque deleniti, eaque eius eligendi fugiat illo inventore iusto laborum laudantium modi, nam nesciunt, nihil optio perspiciatis praesentium quaerat quasi repellat rerum sapiente soluta totam?
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-primary">
                                <i className="fa fa-search" />
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-edit" />
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="fa fa-trash-o" />
                            </button>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mr-3">
                        Dapibus ac facilisis in
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-primary">
                                <i className="fa fa-search" />
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-edit" />
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="fa fa-trash-o" />
                            </button>
                        </div>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mr-3">
                        Morbi leo risus
                        <div className="btn-group">
                            <button type="button" className="btn btn-outline-primary">
                                <i className="fa fa-search" />
                            </button>
                            <button type="button" className="btn btn-outline-secondary">
                                <i className="fa fa-edit" />
                            </button>
                            <button type="button" className="btn btn-outline-danger">
                                <i className="fa fa-trash-o" />
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default app;