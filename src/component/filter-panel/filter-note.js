import React from "react";
import './index.css';

const FilterNote = () => {
    return (
        <div>
            <h4>Your notes</h4>
            <form>
                <label className="mr-sm-2" >Filter by tag</label>
                <div className="form-row align-items-center">
                    <div className="col-auto my-1">
                        <select className="custom-select mr-sm-2" id="filter">
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
    )
}

export default FilterNote;