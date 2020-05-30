import React from 'react'
import ReactDOM from 'react-dom'
import Header from './header'
import Content from './content' //part component is defined here
import Total from './total'

const Course = ({course}) => {
  return (
        <div>
          <Header course={course.name} />
          <Content part={course.parts} />
          <Total total={course} />
        </div>
  )

}

export default Course