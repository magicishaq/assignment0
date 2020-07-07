const phone =[
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
      
    ]

  const express = require('express'); 
  const app = express()

  app.get('/', (request, response) => {
      response.send('<h1>Welcome to the phonebook </h1>')
  })

  app.get('/info', (request, response) => {
      const count = phone.length
      const today = new Date()
      response.send(`<h1> Phonebook has info of ${count} people </h1> </b> <p>${today}</p>`)
  })

  app.get('/api/phonebook', (request, responses) => {
      response.json(phone)
  })

  const PORT = 3001
  app.listen(PORT, () => {
      console.log(`Server is running on ${PORT}`)
  })