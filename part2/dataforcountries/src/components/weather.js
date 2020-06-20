import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import axios from'axios'


const Weather = ({details}) => {
    const [detail, setDetail] = useState(details);
    //    const api = '78584de80f746567491e5f70da1203e1'
       const api = process.env.REACT_APP_API_KEY
        const [current, setCurrent] = useState([]); 
        const fullUrl = `http://api.weatherstack.com/current?access_key=78584de80f746567491e5f70da1203e1&query=${detail.capital}`
    const hook = () => {
            
        const promise = axios.get(fullUrl)
        promise.then(response => {
            const data = response.data.current
            console.log('weather',data)
            setCurrent(data)
        })
    }

    useEffect(hook,[]); 
    return(
        <div>
            <h1>Weather in {detail.capital}</h1>
    <h3>Temperature: {current.temperature} Celcius </h3>
            <img src={current.weather_icons} />
    <h3>Wind: {current.wind_speed} direction {current.wind_dir}</h3>
        </div>


    )
}

export default Weather