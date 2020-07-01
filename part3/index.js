//simple web server
//const http = require('http')
//same as using imports however imports is not supported by node js
// const http = require('http')
const express = require('express')
let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2019-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2019-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2019-05-30T19:20:14.298Z",
      important: true
    }
  ]
// const app = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' })
//   res.end(JSON.stringify(notes))
// })

// const port = 3001
// app.listen(port)
// console.log(`Server running on port ${port}`)
const app = express(); //stored in variable app

app.get('/', (req, res) => {
    res.send('<h1>Hello World, Ishaq Using nodemon</h1>')
})

app.get('/api/notes', (req,res) => {
    res.json(notes)
})

//fetching a single note
app.get('/api/notes/:id', (request,response) => {
    const id = Number(request.params.id) //params is defined by using the :id syntax
    const note = notes.find(note => note.id === id)
    //because if a note isnt found it returned undetified a note will still set, we must use an if statement to return a 404 response if this happens
    note ? response.json(note): response.status(404).end() //shows the note

    
})

//deleting resources
app.delete('/api/notes/:id', (request, response) => {
  const id = Number(request.params.id)
  notes = notes.filter(note => note.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})