import React, {useState, useEffect} from 'react'
import axios from 'axios'; 
import Country from './country'
import Details from './details'



const Find = (props) => {
    const hook = () => {
        const url = 'https://restcountries.eu/rest/v2/all'
        const promise = axios.get(url)
        console.log('started')
        promise.then((response) =>{
            const data = response.data
            console.log(response.data, 'has loaded')
            setCountry(data)
            
        })
    }
    useEffect(hook,[])
    const [country, setCountry] = useState()
    const [filtered, setFilterd] = useState('')
    const handleFilter = (event) => {
        console.log(event.target.value)
        setFilterd(event.target.value)
      }

    const showFilter = filtered.length === 0 ? [] : country.filter(count => count.name.includes(filtered))
    return(
        <div>
            Filter shown with <input value={filtered} onChange={handleFilter}/>   
            {showFilter.map(count => <Country country={count} />)}
            <Details detail={showFilter} />
            </div> 
    )
} 

export default Find