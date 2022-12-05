import React from "react";
import './index.css';
import NoteListItem from "../note-list-item";

const NoteList = (props) => {

    const notes = props.notedata.map((item) => {
        return (
            <li  key={ item } className="list-group-item d-flex justify-content-between align-items-center mr-3">
                <NoteListItem text={ item } />
            </li>
        );
    });

    return (
        <div>
            <ul className="list-group">
                { notes }
            </ul>
        </div>
    )
}

export default NoteList;