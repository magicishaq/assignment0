import React from 'react'
import ReactDOM from 'react-dom'
import Header from './component/header'
import Content from './component/content' //part compent is defined here
import Total from './component/total'

const Course = ({course}) => {
  return (
        <div>
          <Header course={course.name} />
          <Content part={course.part} />
          <Total total={course} />
        </div>
  )

}

const App = () => {
  const course = {
  id: 1,
   name :  'Half Stack application development', 
   numString: 'Number of exercises', 
   part : [
    {
      name: 'Fundamentals of React', 
      exercises: 10,
      id: 1
    },
   {
      name: 'Using props to pass data', 
      exercises: 7,
      id: 2
    },
    {
      name: 'State of a component', 
      exercises: 14,
      id: 3
    }, 
    {
      name: 'Redux',
      exercises: 11,
      id: 4
    }
  ]
  }
  
return (
<Course course={course} /> 
)
}

ReactDOM.render(<App/>, document.getElementById('root')); 

