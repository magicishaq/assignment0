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
  const course = {
   name :  'Half Stack application development', 
   numString: 'Number of exercises', 
   part : [
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
  ]
  }
  
return (
  <div>
    <Header course={course.name}></Header>
    <Content part1={course.part[0].name} exercise1={course.part[0].exercises} part2={course.part[1].name} exercise2={course.part[1].exercises} part3={course.part[2].name} exercise3={course.part[2].exercises}></Content>
    <Total exercise1={course.part[0].exercises} exercise2={course.part[1].exercises} exercise3={course.part[2].exercises} numString={course.numString}></Total>
  </div>
)
}

ReactDOM.render(<App/>, document.getElementById('root')); 

