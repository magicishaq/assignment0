import React from 'react'
//Controls the form element of the element. 

const PersonForm = (props) => {

    const name = 'Name: '
    const number = 'Number: '
    const add = 'Add'
    return (
        <form onSubmit={props.addPerson}>
        <div>
          {name} <input value={props.newName} onChange={props.handleNoteChange}/>
          {number} <input value={props.phone} onChange={props.handlePhoneChange}/>
        </div>
        <div></div>
        <div>
          <button type="submit">{add}</button>
        </div>
      </form>

    )
}

export default PersonForm