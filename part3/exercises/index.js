let phone =[
      {
        name: "Max power",
        phone: "011222121212121",
        id: 1
      },{
        name: "Ishaq Khan",
        phone: "0121 753 0327",
        id: 2
      },{
        name: "Bill gates",
        phone: "0121 777 7777",
        id: 3
      },
      {
          name: "Martin lurther", 
          phone: "0909099090909090",
          id : 4
      }
      
    ]

  const express = require('express'); 
  const app = express()

  app.get('/', (request, response) => {
      response.send('<h1>Welcome to the phonebook </h1>')
  })
//getting an id

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id) //params is defined by using the :id syntax
    const persons = phone.find(person => person.id === id)
    //because if a note isnt found it returned undetified a note will still set, we must use an if statement to return a 404 response if this happens
    persons ? response.json(persons) : response.status(404).end() //shows the note
  
  
  })
  app.get('/info', (request, response) => {
      const count = phone.length
      const today = new Date()
      response.send(`<h1> Phonebook has info of ${count} people </h1> </b> <p>${today}</p>`)
  })

  app.get('/api/persons', (request, responses) => {
      response.json(phone)
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
  

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
  })
