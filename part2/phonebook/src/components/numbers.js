import React from 'react'
import ReactDOM from 'react-dom'

const Numbers = ({person}) => {
   // const thing = prop

    
    return(
<div>
    <ul>
        <li key={person.id}> {person.name} Number: {person.phone} </li>
    </ul>
</div>
    )
}

export default Numbers