
  //for the enviroment variables
  require('dotenv').config()
  const express = require('express') 
  const app = express()
  const morgan = require('morgan')
  const cors = require('cors') 
  const mongoose = require('mongoose')
  const Phone = require('./models/phonebook')
  //making a token that retrieves the req body from the post
  morgan.token('body', (req,res) => {return JSON.stringify(req.body)} )
//method path status time and request
  const morganString = ':method :url :status :body :res[header] :res[content-length] - :response-time ms ishaq'; 
  app.use(express.static('build'))
  app.use(express.json())
  app.use(morgan(morganString))
app.use(cors())
 let phone =[
    {
      name: "Max power",
      phone: "011222121212121",
      id: 0
    },{
      name: "Ishaq Khan",
      phone: "0121 753 0327",
      id: 1
    },{
      name: "Bill gates",
      phone: "0121 777 7777",
      id: 2
    },
    {
        name: "Martin lurther", 
        phone: "0909099090909090",
        id : 3
    }
    
  ]

  //generating a random number for the id
  const generateId = () => {
      
      const idsToAvoid = () => { 
          const id = phone.map(elm => elm.id)
          const inorder = id.sort((a,b) => a-b)
          for(let i = inorder.length; i < 101 ; i++ ){
              inorder.push(i)
          }

          return inorder
        }
        const newId = phone.length > 0 ? idsToAvoid().splice(Math.floor(Math.random * idsToAvoid().length)) : 0
        return newId[phone.length]; 
  }

  //generating a post
  app.post('/api/persons', (request, response) => {
    
      const body = request.body
      const errorObj = {
          errorName: 'Please insert a name AND a number', 
          errorDuplicte: 'name must be unique'

      }

      

      if(!body.name || !body.phone){
          return response.status(400).json(errorObj.errorName)
      }

      if(phone.filter(contact => contact.name === body.name).length > 0){
          return response.status(400).json(errorObj.errorDuplicte)
      }

      // const newPerson = {
      //     name : body.name,
      //     phone: body.phone,
      //     id: generateId()
      // }

      // phone = phone.concat(newPerson)
      // response.json(phone); 

      
//using the database
const newPhone = new Phone({
  name: body.name, 
  phone: body.phone
})
      
      newPhone.save().then(savedPhone => {
        response.json(savedPhone)
      })

  })


  app.get('/', (request, response) => {
      response.send('<h1>Welcome to the phonebook </h1>')
  })
//getting an id

app.get('/api/persons/:id', (request, response) => {
    // const id = Number(request.params.id) //params is defined by using the :id syntax
    // const persons = phone.find(person => person.id === id)
    // //because if a note isnt found it returned undetified a note will still set, we must use an if statement to return a 404 response if this happens
    // persons ? response.json(persons) : response.status(404).end() //shows the note

    //using database
    Phone.findById(request.params.id).then(phone => {
      response.json(phone)
    })
  
  
  })
  app.get('/info', (request, response) => {
      const count = phone.length
      const today = new Date()
      response.send(`<h1> Phonebook has info of ${count} people </h1> </b> <p>${today}</p>`)
  })

  app.get('/api/persons', (request, response) => {
    Phone.find({}).then(entry => {
      response.json(entry)
    })
      
  })
 //fetching a single note
app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id) //params is defined by using the :id syntax
    const phones = phone.find(contact => contact.id === id)
    //because if a note isnt found it returned undetified a note will still set, we must use an if statement to return a 404 response if this happens
     phones ? response.json(phone) : response.status(404).end() //shows the note
  })

  //deleting resources
app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    phone = phone.find(contact => contact.id !== id) //changes the phone list
    response.status(204).end()
  })
  
 

  const PORT = process.env.PORT
  app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
  })
