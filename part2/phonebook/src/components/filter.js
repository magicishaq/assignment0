import React from 'react'
//Deals with the search filtering
const Filter = (props) => {

    return (
        <div>
            Filter shown with <input value={props.filtered} onChange={props.handleFilter}></input>
            </div> 
    )
}

export default Filter