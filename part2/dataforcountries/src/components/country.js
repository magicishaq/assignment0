import React, {useState}from 'react'
import Details from './details'

const Country = ({country}) => {
    const [view, changeView] = useState(false)
    const handleClick = () => {
        changeView(true)
    }
    const list =  (
        <div>
            <li key={country.numericCode}> {country.name} <button onClick={handleClick}>Show all</button></li> 
            </div>
    )
    
    const details = (
        <Details detail={country} />
    )
    
const showView = view ? details : list

return(showView)


}

export default Country