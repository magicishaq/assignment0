import React, {useState} from 'react';
import ReactDOM from 'react-dom';

/**
 * Part 6 unicafe 
 */

const Button = (props) => {
  return (
<button onClick={props.handleClick}>
  {props.text}
</button>
  )
}

const Stats = (props) => { 
  return (
      <table>
        <tr>
<td>Good</td>
<td>{props.good}</td>
        </tr>
        <tr>
<td>Bad</td>
<td>{props.bad}</td>
        </tr>
        <tr>
<td>Netrual</td>
<td>{props.netural}</td>
        </tr>
        <tr>
<td>All</td>
<td>{props.all}</td>
        </tr>
        <tr>
<td>Average</td>
<td>{props.average}</td>
        </tr>
        <tr>
<td>Positive</td>
<td>{props.positive} % </td>
        </tr>    
        </table> 
  )
}


 const App = (props) => {
   const [selected, setSelected] = useState(0); 
   const [good, setGood] = useState(0); 
   const [netural, setNetural] = useState(0); 
   const [bad, setBad] = useState(0); 
   const [counter, setCounter] = useState(0);  
   const [average, setAverage] = useState(0); 
   const handleClick = (newValue) => () => {
    setCounter(counter + 1); 
     if(newValue === 'good'){   
       setAverage(average + 1)  
       return setGood(good + 1); 
     }else if (newValue === 'bad'){
       setAverage(average - 1); 
      return setBad(bad + 1); 
     }else{
       setAverage(average)
      return setNetural(netural + 1 )
      
     }
   }

   const getAverage = () => {
    return good / counter
  }

   const positive = () => {
     return getAverage() * 100;  
   }
   const html = (<div>
    <h1>Give Feedback</h1>
<Button text="good" handleClick={handleClick('good')}></Button>
<Button text="netural" handleClick={handleClick('netural')}></Button>
<Button text="bad" handleClick={handleClick('bad')}> </Button> </div>)

   if(counter > 0) {
     
   return(
     <div> 
       {html}
<Stats  good={good} netural={netural} bad={bad} all={counter} average={getAverage()} positive={positive()}></Stats>
</div> 


   )
   }else {
     return (
    <div> 
      {html}
<p> No feedback given </p>
</div>
     )
   }
 }

 ReactDOM.render(<App/>, document.getElementById('root')); 