import React from "react";
import './index.css';

const NoteListItem = (props) => {
    return (
        <div className="item-li">
            <div className="float-left">
                { props.text }
            </div>
            <div className="btn-group float float-right">
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
        </div>
    )
}

export default NoteListItem;