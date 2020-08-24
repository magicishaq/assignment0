const mongoose = require('mongoose')
const url = process.env.MONGODB_URI 
console.log('connecting to' , url)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(result => {
    console.log('connecting to MongoDB')
}).catch(result => {
    console.log('error connecting ')
})

const phoneSchema = new mongoose.Schema({
    name: String, 
    phone: String
})

phoneSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Phone', phoneSchema)