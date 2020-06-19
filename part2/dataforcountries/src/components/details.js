import React from 'react'
import Weather from './weather'

const Details = ({detail}) => {
        return (
            <div>
                <h1>{detail.name}</h1>
                <ul>
                    
                    <li> Capital: {detail.capital}</li>
                    <li>Population :  {detail.population} </li>

                </ul>  
            
            <h2>Languages</h2>
            <ul>
        {detail.languages.map((elm) => <li key={elm.nativeName}>{elm.name}</li> )}
            </ul>
            <img src={detail.flag} />
            <Weather details={detail}></Weather>
                </div>
        )
}

export default Details