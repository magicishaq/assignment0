
 
  const express = require('express') 
  const app = express()
   //for the enviroment variables
   require('dotenv').config()
   const Phone = require('./models/phonebook')
  const cors = require('cors') 
  const morgan = require('morgan') 
  //making a token that retrieves the req body from the post
  morgan.token('body', (req,res) => {return JSON.stringify(req.body)} )
//method path status time and request
  const morganString = ':method :url :status :body :res[header] :res[content-length] - :response-time ms ishaq'; 
  app.use(express.static('build'))
  app.use(express.json())
  app.use(morgan(morganString))
app.use(cors())
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
  app.post('/api/persons', (request, response, next) => {   
      const body = request.body
      const errorObj = {
          errorName: 'Please insert a name AND a number', 
          errorDuplicte: 'name must be unique'

      }
      // if(!body.name || !body.phone){
      //     return response.status(400).json(errorObj.errorName)
      // }

      // if(phone.filter(contact => contact.name === body.name).length > 0){
      //     return response.status(400).json(errorObj.errorDuplicte)
      // }

      
//using the database
const newPhone = new Phone({
  name: body.name, 
  phone: body.phone
})
      
      newPhone.save().then(savedPhone => savedPhone.toJSON())
      .then(savedFormattedPhone => {
        response.json(savedFormattedPhone)
      }).catch(error => {
        console.log(error.response.data + 'hello world')  
        return next(error)}
      )

  })


  app.get('/', (request, response) => {
      response.send('<h1>Welcome to the phonebook </h1>')
  })
//getting an id

app.get('/api/persons/:id', (request, response) => {
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
app.get('/api/persons/:id', (request, response, next) => {
    Phone.findById(request.params.id).then(phones => {
      phones ? response.json(phone) : response.status(404).end() //shows the note
    }).catch(error => next(error))
       })

  //deleting resources
app.delete('/api/persons/:id', (request, response, next) => {
  Phone.findByIdAndRemove(request.params.id).then(result => {
    response.status(204).end()
  }).catch(error => next(error)) 
  })

  app.put('/api/persons/:id', (request, response, next) => {
    const body = request.body
    const phone = {
      name: body.name, 
      phone: body.phone
    }
    Phone.findByIdAndUpdate(request.params.id, phone,{new: true}).then(
      updatedPhone => {
        response.json(updatedPhone.toJSON())
      }).catch(error => next(error))
  })

 const unknownEndpoint = (request, response) => {
   response.status(404).send({error: 'unknown endpoint'})
 } 
 app.use(unknownEndpoint)
 
 const errorHandler = (error, request, response, next) => {
  console.log(error.message)

  if(error.name == 'CastError' && error.kind == 'ObjectId'){
    return response.status(400).send({error: 'malformed id'})
  }

  next(error)
 }
app.use(errorHandler)

  const PORT = process.env.PORT
  app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
  })
