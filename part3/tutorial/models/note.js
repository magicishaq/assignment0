const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const dbName = 'note-app'
const password = process.argv[2]
const oldUrl =  `mongodb+srv://fullstack:${password}@ishaqcluster.fylvo.mongodb.net/${dbName}?retryWrites=true&w=majority`
const url = process.env.MONGODB_URI


console.log('connecting to', url)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true })
.then(result => {
    console.log('connected to mongoDB:')
})
.catch((error) => {
    console.log('error connecting to mongoDB:', error.message)
})

const noteSchema = new mongoose.Schema({
    content: String, 
    date: Date, 
    important: Boolean
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })
module.exports = mongoose.model('Note', noteSchema)

