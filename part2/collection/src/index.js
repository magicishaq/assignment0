import React, {useState} from 'react';
import ReactDOM from 'react-dom';
//import Note from './components/Note'
import App from './components/App'
//moduals


const notes = [
  {
    id: 1 ,
    content: 'Html is easy' , 
    date: '2019-05-30T17:30:31.098Z',
    important: true

  },
  {
    id: 2,
    content: 'Browser can execute only Javascript',
    date: '2019-05-30T18:39:34.091Z',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    date: '2019-05-30T19:20:14.298Z',
    important: true
  }
]

// //displaying a single not
// const Note = ({note}) => {
//   return (
//     <li>{note.content}</li>
//   )
// }

// const App = ({notes}) => {
  //const {notes} = props //deconstruct the object passed props.notes = notes object 
  //impractical, can be achieved using the map array function
  // const html = (
  //   <ul>
  //  <li>{notes[0].content}</li>
  //  <li>{notes[1].content}</li>
  //  <li>{notes[2].content}</li>
  //  </ul>
  // )
//displaces each item in the array. maps it so its surrounded by li tag 
//even though it works, there is an error. 
  // const html = (
  //   <ul>
  //     {/* {notes.map(elm => <li>{elm.content}</li>)} */}
  //     {notes.map(elm => 
  //     <li key={elm.id}>{elm.content}</li>)
  //     }
  //   </ul>
  // ); 

  // return(
  //   <div>
  //   <h1>Notes</h1>
  //   <ul>
  //     {notes.map(note => 
  //       <Note key={note.id} note={note} />
  //     )}
  //   </ul>



  //     </div>
  // )
  // }

ReactDOM.render(<App notes={notes}/>, document.getElementById('root'))