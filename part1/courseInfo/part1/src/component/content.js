import React from 'react'
import ReactDOM from 'react-dom'
import Part from './part'


const Content = (props) => {
    return (
      <div>
        <Part part={props.part1} exercise={props.exercise1}></Part>
        <Part part={props.part2} exercise={props.exercise2}></Part>
        <Part part={props.part3} exercise={props.exercise3}></Part>
      </div>
    )
  }

export default Content