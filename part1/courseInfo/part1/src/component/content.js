import React from 'react'
import ReactDOM from 'react-dom'
import Part from './part'


const Content = ({part}) => {
return (
      <div>
        {part.map(obj => 
        {
            return <Part key={obj.id} name={obj.name} exercises={obj.exercises} />
        })}
      </div>
    )
  }

export default Content