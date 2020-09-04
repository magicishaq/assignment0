const mongoose = require('mongoose')
mongoose.set('useFindAndModify', false)
const dbName = 'note-app'
//password
//mongodb+srv://fullstack:<password>@ishaqcluster.fylvo.mongodb.net/<dbname>?retryWrites=true&w=majority
//Password123 name fullstack

if(process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mogo.js <password>')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://fullstack:${password}@ishaqcluster.fylvo.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

// const noteSchema = new mongoose.Schema({
//     content: String, 
//     date: Date, 
//     important: Boolean
// })

/**
 * Creating noteSchema with validation
 */
const noteSchema = new mongoose.Schema({
    content: {type: String, minlength: 5, required: true},
    date :{type: Date, required: true}, 
    important : Boolean
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note(
    {
        content: 'HTML is easy', 
        date: new Date(), 
        important: true
        }
)
const secondNote = new Note (
    {
        content: 'THis is a test note', 
        date: new Date(), 
        important: true
    })
const thirdNote = new Note (
    {
        content: 'ishaq khan', 
        date: new Date(), 
        impotant: false
    }
)


// note.save().then(result => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })

Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })

    mongoose.connection.close()
})