import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
const data = [
  { name: 'Arto Hellas', phone: '040-123456' },
  { name: 'Ada Lovelace', phone: '39-44-5323523' },
  { name: 'Dan Abramov', phone: '12-43-234345' },
  { name: 'Mary Poppendieck', phone: '39-23-6423122' }
]


ReactDOM.render(<App data={data}/>, document.getElementById('root'));


