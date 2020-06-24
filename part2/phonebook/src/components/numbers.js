import React from 'react'
import ReactDOM from 'react-dom'

const Numbers = ({person, handleClick}) => {
   // const thing = prop

    
    return(
<div>
    <ul>
        <li key={person.id}> {person.name} Number: {person.phone} </li> <button onClick={handleClick}>Delete</button>
    </ul>
</div>
    )
}

export default Numbers