//simple web server
const express = require('express')
//mongoose database
const mongoose = require('mongoose')
//get the enviroment variables
require('dotenv').config()
const Note = require('./models/note')
const app = express(); //stored in variable app
const morgan = require('morgan')
const cors = require('cors'); 
app.use(cors()); //use cors
app.use(express.static('build')) //http request get will check build directory 
app.use(express.json()) //helps to access the data easaily //transform json data into javascript object
//url //statuscode //responsetime and body 
const token = morgan.token('type', (tokens, req,res) => {
return [tokens.method(req,res),
  tokens.url(req,res),
   tokens.status(req,res),
   tokens.res(req, res, 'content-length'), '-',
    tokens['response-time'](req, res), 'ms'
   ].join(' ')
})
//mongoose url
// const dbName = 'note-app'
// const password = process.argv[2]
//const url = `mongodb+srv://fullstack:${password}@ishaqcluster.fylvo.mongodb.net/${dbName}?retryWrites=true&w=majority`
//mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
const noteSchema = new mongoose.Schema({
    content: String, 
    date: Date, 
    important: Boolean
})

//format the returned object . changes the id to a string (easier for writing tests)
// noteSchema.set('toJSON', {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString()
//     delete returnedObject._id
//     delete returnedObject.__v
//   }
// })
// const Note = mongoose.model('Note', noteSchema)
/**end of mongoose */

app.use(morgan(token))


//middleware functions
const requestLogger = (request, response, next) => {
  console.log('Method: ', request.method)
  console.log('Path: ', request.path)
  console.log('Body: ', request.body)
  next()
}
app.use(requestLogger)

const unknownEndpoint = (request, response) => {
  const errorObject = {error: 'Unknown endpoint'}
  response.status(400).send(errorObject)
}
app.use(unknownEndpoint)

//error handlers 
const errorHandler = (error, request, response, next) => {
  console.log(error.message)
  if(error.name === 'CastError') {
    return response.status(400).send({error})
  }

  next(error)
}
app.use(errorHandler); 



let notes = [{
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

const generateId = () => {
  //finds the largest id in the ist , spreading the notes in an array and return the math max of the id
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0
  return maxId
}
//old way to post a note without using a database
// app.post('/api/notes', (request, response) => {
//   const body = request.body
//   const errorObj = {
//     error: 'content missing'
//   }
//   if (!body.content) {
//     return response.status(400).json(errorObj)
//   }


//   const note = {
//     content: body.content,
//     important: body.content || false,
//     date: new Date(),
//     id: generateId()
//   }

//   notes = notes.concat(note)
//   response.json(note)
// })

app.post('/api/notes', (request, response) => {
  const body = request.body

  if(body.content === undefined) {
    return response.status(400).json({error: 'content missing'})
  }

  const note = new Note({
    content: body.content, 
    important: body.important || false, 
  date: new Date()})

  note.save().then(savedNote => {
    response.json(savedNote)
  })
  
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World, Ishaq Using nodemon</h1>')
})

app.get('/api/notes', (request, response) => { 
  Note.find({}).then(notes => {
    response.json(notes)
  })
})

//fetching a single note - without a database
// app.get('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id) //params is defined by using the :id syntax
//   const note = notes.find(note => note.id === id)
//   //because if a note isnt found it returned undetified a note will still set, we must use an if statement to return a 404 response if this happens
//   note ? response.json(note) : response.status(404).end() //shows the note


// })
//fetching a single note using a database
app.get('/api/notes/:id', (request, response) => {
  Note.findById(request.params.id)
  .then(note => {
    if(note){
      response.json(note)
    }else{
      //if no matching note is found will send a 404 message
      response.status(404).end()
    }
  })
  .catch(error => {next(error)})
  // .catch(error => {
  //   //if cant find the id . 
  //   console.log(error)
  //   //response.status(500).end()
  //   //400 is bad request format
  //   response.status(400).send({error: 'malformed id'})
  // })
})

//deleting resources
// app.delete('/api/notes/:id', (request, response) => {
//   const id = Number(request.params.id)
//   notes = notes.filter(note => note.id !== id)

//   response.status(204).end()
// })

//changing the importance of a note
app.put('/api/notes/:id', (request, response, next) => {
  const body = request.body

  const note = {
    content: body.content,
    important: body.important
  }

  Note.findByIdAndUpdate(request.params.id, note, {new: true}).then(updatedNote => {response.json(updatedNote)}).catch(error => next(error))
})
//deleting from the database
app.delete('/api/notes/:id', (request, response, next) => {
  Note.findByIdAndRemove(request.params.id).then(result => {
    response.status(204).end()
  }).catch(error => {
    next(error)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`)
})