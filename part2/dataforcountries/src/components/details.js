import React from 'react'

const Details = ({detail}) => {
        return (
            <div>
                <h1>{detail[0].name}</h1>
                <ul>
                    
                    <li> Capital: {detail[0].capital}</li>
                    <li>Population :  {detail[0].population} </li>

                </ul>  
            
            <h2>Languages</h2>
            <ul>
        {detail[0].languages.map((elm) => <li key={elm.nativeName}>{elm.name}</li> )}
            </ul>
            <img src={detail[0].flag} />
                </div>
        )
}

export default Details