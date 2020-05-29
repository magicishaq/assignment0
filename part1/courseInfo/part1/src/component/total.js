import React from 'react'
import ReactDOM from 'react-dom'

const Total = (props) => {
    const total = props.total.part.reduce((tot,elm) => elm.exercises += tot, 0)
    const heading = props.total.numString
    return (
      <>
      <p>{heading} {total}</p>
      </>
    )
  }

  
export default Total