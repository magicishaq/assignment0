import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
      return (
    <ul>
      <li key={props.id}>{props.name} {props.exercises}</li>
    </ul>
      )
    }

export default Part
