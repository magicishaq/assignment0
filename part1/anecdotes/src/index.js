import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const anecdotoes = [
  'if it hurts, do it more often', 
  'Adding manpower to a late software project makes it later', 
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const HighestVoted = (props) => {
  const findHighest = () => { 
    const highest = Math.max(...props.score)
    const position = props.score.indexOf(highest)
    return props.anecdotoes[position]; 
  }
  const highest = findHighest(); 
if(highest != 0 ){
  return (
  <div>
    <h1>The Highest rated is: </h1>
    <h3>{highest}</h3>
  </div>
  )
}else{
  return (
    <div>
      <h1>Please vote to see the highest</h1>
    </div>
  )
}
}
const Vote = (props) => {

  return (
    <button onClick={props.handleClick}>
      Vote
    </button>
  )
}
const Button = (props) => {

  return (
<button onClick={props.handleClick}> 
{props.text}
  </button>
  )
}
const score = [...anecdotoes];
score.fill(0, 0, score.length); //emptys the array and fills it with 0; 
const App = (props) => { 
  const [selected, setSelected] = useState(0); 
  const [render, setRender] = useState(0); 
  const randomNumber = () => Math.floor(Math.random() * anecdotoes.length) //gets a random number between the length of the array
  const handleClick = () => {
    const newRandom = randomNumber(); 
    if(newRandom != selected){
      setSelected(newRandom)
    }else{
      handleClick()
    }
    
  } //sets the state as a random number
  const [points, setPoints] = useState(props.score); 
  const addVote = () => {
    const newPoints = points 
    newPoints[selected] =  newPoints[selected] + 1;
    setPoints(newPoints)
    setRender(render + 1) //need to set this render because array mutation does not cause a re-render. 
  }
  const nextButton = 'next anecdote'; 
  const prevButton = 'previous'; 
  return(
    <div>
      <h1>Anecdote of the day</h1>
     <h2>{props.anecdotoes[selected]}</h2> 
      <h2> has {points[selected]} votes</h2>
      <Button handleClick={handleClick} text={nextButton}></Button>
      <button onClick={addVote}>Vote</button>

      <HighestVoted score={props.score} anecdotoes={props.anecdotoes} ></HighestVoted>
      </div> 
  )
}

ReactDOM.render(<App anecdotoes={anecdotoes} score={score}/>, document.getElementById('root')); 

