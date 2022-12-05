import React from "react";
import './index.css';
import data from "../../data"

const AddNote = (props) => {

    function addNote() {
        props.notedata.push( {
            "id": 4,
            "text": "New"
        });
        console.log(props.notedata)
    }

    function onSubmit(e) {
        e.preventDefault();
        props.onItemAdded("go");
    }

    return (
        <div>
            <form className="mb-3">
                <div className="form-group ">
                    <label>Enter your note</label>
                    <textarea  className="form-control mb-1" rows="2"></textarea>
                    <button type="submit" className="btn btn-outline-success" onClick={onSubmit}>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote;