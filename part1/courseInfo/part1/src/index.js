import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
<>
<h1> {props.course} </h1>
</>
  )
}


const Part = (props) => {
  return (
<>
  <p>{props.part} {props.exercise}</p>
</>
  )
}
const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1}></Part>
      <Part part={props.part2} exercise={props.exercise2}></Part>
      <Part part={props.part3} exercise={props.exercise3}></Part>
    </div>
  )
}

const Total = (props) => {
  const exerciseCount = props.exercise1 + props.exercise2 + props.exercise3
  return (
    <>
    <p>{props.numString} {exerciseCount}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part = [
    {
      name: 'Fundamentals of React', 
      exercises: 10
    },
   {
      name: 'Using props to pass data', 
      exercises: 7
    },
    {
      name: 'State of a component', 
      exercises: 14
    }
  ]; 
  const numString = 'Number of exercises'; 
 
return (
  <div>
    <Header course={course}></Header>
    <Content part1={part[0].name} exercise1={part[0].exercises} part2={part[1].name} exercise2={part[1].exercises} part3={part[2].name} exercise3={part[2].exercises}></Content>
    <Total exercise1={part[0].exercises} exercise2={part[1].exercises} exercise3={part[2].exercises} numString={numString}></Total>
  </div>
)
}

ReactDOM.render(<App/>, document.getElementById('root')); 

