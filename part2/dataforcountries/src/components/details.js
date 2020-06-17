import React from 'react'

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
                </div>
        )
}

export default Details