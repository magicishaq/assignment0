import React from 'react'
import ReactDOM from 'react-dom'

const Note = ({note, toggleImportance}) =>{

    const label = note.important ? 'remove importance' : 'make important'
    
    return(
    <li key={note.id}> 
    
    {note.content} was posted on <b>{note.date}</b>
    
    <b></b><button onClick={toggleImportance}>{label}</button>
    
    </li>
    )

}

export default Note 