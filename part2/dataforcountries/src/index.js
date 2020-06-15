import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Find from './components/find'

const App = () => {
 
  //when filter is changed 
  // const handleFilter = (event) => {
  //   console.log(event.target.value)
  //   setFilterd(event.target.value)
  // }
  //when there is a change on the filter input feild
  // const onChangeFilter = () => {

  // }
  return (
    <div>
      <Find></Find>
      </div>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))