import React from 'react'
import ReactDOM from 'react-dom'
import Header from './component/header'
import Content from './component/content' //part compent is defined here
import Total from './component/total'

const Course = ({course}) => {
  return (
        <div>
          <Header course={course.name} />
          <Content part1={course.part[0].name} exercise1={course.part[0].exercises} part2={course.part[1].name} exercise2={course.part[1].exercises} part3={course.part[2].name} exercise3={course.part[2].exercises} />
          <Total exercise1={course.part[0].exercises} exercise2={course.part[1].exercises} exercise3={course.part[2].exercises} numString={course.numString} />
        </div>
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
<Course course={course} /> 
)
}

ReactDOM.render(<App/>, document.getElementById('root')); 

