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


const App = (props) => { 
  const score = [...anecdotoes];
score.fill(0, 0, score.length); //emptys the array and fills it with 0; 
  const [points, setPoints] = useState(score); 
  const addVote = () => {
    const newScore = points[selected] + 1
    const newPoints = [...points]; 
    const nPoints = newPoints.splice(points[selected], 1, newScore)
    //const nPoints = [...points, points[selected] + 1 ]; 
    console.log(nPoints); 
    return setPoints(nPoints)
  }
  const [selected, setSelected] = useState(0); 
  const randomNumber = () => Math.floor(Math.random() * anecdotoes.length) //gets a random number between the length of the array
  const handleClick = () => {setSelected(randomNumber())} //sets the state as a random number
  const nextButton = 'next anecdote'; 
  const prevButton = 'previous'; 
  return(
    <div>
      {props.anecdotoes[selected]} has {points[selected]}   
      <Button handleClick={handleClick} text={nextButton}></Button>
      <button onClick={addVote}>Vote</button>
      </div> 
  )
}

ReactDOM.render(<App anecdotoes={anecdotoes}/>, document.getElementById('root')); 

