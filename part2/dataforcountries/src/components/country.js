import React from 'react'

const Country = ({country}) => {
return (
    <div>
        <li key={country.numericCode}> {country.name} </li> 
        </div>
)
}

export default Country