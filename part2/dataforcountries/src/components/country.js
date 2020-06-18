import React, {useState}from 'react'
import Details from './details'

const Country = ({country}) => {
    const [view, changeView] = useState(false)
    const button = 'show All'
    const handleClick = () => {
        changeView(true)
    }
    const list =  (
        <div>
            <li key={country.numericCode}> {country.name} <button onClick={handleClick}>{button}</button></li> 
            </div>
    )
    
    const details = (
        <Details detail={country} />
    )
    
const showView = view ? details : list

return(showView)


}

export default Country