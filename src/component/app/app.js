import React, {useState} from 'react';
import './app.css';
import AddNote from "../add-note";
import FilterPanel from "../filter-panel";
import HeaderPanel from "../header-panel";
import NoteList from "../note-list";
import notes from "../../data"


function App() {

    // Объявляем новую переменную состояния "count"
    const [arr, setArr] = useState(['Тише', 'мыши', 'кот', 'на', 'крыше']);
    const [value, setValue] = useState('');

    const noteArray = [
        [1, "New note"],
        [2, "This is my note"],
        [3, "I need to do my project by monday"],
    ];

    const [notes, setNotes] = useState([
        [1, "New note"],
        [2, "This is my note"],
        [3, "I need to do my project by monday"],
    ]);

    function addItem(text) {

        noteArray.push({
            "id": 4,
            "text": "New"
        });
        console.log(noteArray)

        return noteArray;
    };

    return (
        <div className="container">
            <HeaderPanel />
            <AddNote onItemAdded={ useState }  />
            <FilterPanel />
            <NoteList notedata={ notes } />
        </div>
    )
}

export default App;