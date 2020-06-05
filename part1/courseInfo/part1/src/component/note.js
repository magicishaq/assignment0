import React from 'react'
import ReactDOM from 'react-dom'

const Note = ({note}) =>{
    
    return(
    <li key={note.id}> {note.content} was posted on <b>{note.date}is {note.important.toString()}</b></li>
    )

}

export default Note 