import React from 'react'
import ReactDOM from 'react-dom'
import Course from './component/course'
import NoteApp from './component/noteApp'
import './index.css'

//const promise = axios.get('http://localhost:3001/notes')

const App = () => {
  const courses =[ {
  id: 1,
   name :  'Half Stack application development', 
   numString: 'Number of exercises', 
   parts : [
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
  }, 
{
  id: 2,
  numString: 'Number of exercises', 
  name: 'Node.js',
  parts: [
    {
      name: 'Routing',
      exercises: 3,
      id: 1
    },
    {
      name: 'Middlewares',
      exercises: 7,
      id: 2
    }
  ]

}]



  
return (
  <div>
<Course course={courses[0]} /> 
<Course course={courses[1]} />
<NoteApp />
</div>
)
}

// promise.then((response) => {
//   const notes = response.data
//   ReactDOM.render(<App notes={notes}/>, document.getElementById('root')); 
// })

ReactDOM.render(<App/>, document.getElementById('root')); 

