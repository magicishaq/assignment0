import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import Note from './note'

const NoteApp = (props) => {
    
    const [notes, setNote] = useState(props.notes)
    debugger
    const [newNote, setNewNote] = useState('...a new note')
    const addNote = (event) => {
        event.preventDefault() //prevents default action of submitting the form
        console.log('button clicked', event.target)
    }
    return (

        <div>
            <h1>Notes</h1>
            <ul>
                {notes.map(note => 
                    <Note note={note} />
                    
                    )}

            </ul>
            <form onSubmit={addNote}>
                <input value={newNote}/>
                <button type="submit">Save</button>
            </form>
        </div>
    )
}

export default NoteApp