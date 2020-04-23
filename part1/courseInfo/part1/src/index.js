import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
<>
<h1> {props.course} </h1>
</>
  )
}
const Content = (props) => {
  return (
    <>
<p>{props.part1} {props.exercise1}</p>
  <p>{props.part2} {props.exercise2}</p>
  <p>{props.part3} {props.exercise3} </p>

  
    </>
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
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  const part3 = 'State of a component'
  const exercise3 = 14
  const numString = 'Number of exercises'
return (
  <div>
    <Header course={course}></Header>
    <Content part1={part1} exercise1={exercise1} part2={part2} exercise2={exercise2} part3={part3} exercise3={exercise3}></Content>
    <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} numString={numString}></Total>
  </div>
)
}

ReactDOM.render(<App/>, document.getElementById('root')); 

