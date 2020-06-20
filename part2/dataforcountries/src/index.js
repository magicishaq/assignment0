import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Find from './components/find'

const App = () => {
  return (
    <div>
      <Find></Find>
      </div>
  )
}


ReactDOM.render(<App/>, document.getElementById('root'))