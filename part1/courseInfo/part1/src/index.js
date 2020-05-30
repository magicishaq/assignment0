import React from 'react'
import ReactDOM from 'react-dom'
import Course from './component/course'
// import Header from './component/header'
// import Content from './component/content' //part compent is defined here
// import Total from './component/total'

// const Course = ({course}) => {
//   return (
//         <div>
//           <Header course={course.name} />
//           <Content part={course.parts} />
//           <Total total={course} />
//         </div>
//   )

// }

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
</div>
)
}

ReactDOM.render(<App/>, document.getElementById('root')); 

