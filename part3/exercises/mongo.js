const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validation')
mongoose.set('useFindAndModify', false)
const pasword = 'Password123'
const dbName = 'phonebook-app'

if(process.argv.length < 2) {
    console.log('Please provide the password as an argument : node mongo.js <password>')
}


const password = process.argv[2]
const theName = process.argv[3]
const phoneNumber = process.argv[4]

const url = `mongodb+srv://fullstack:${password}@ishaqcluster.fylvo.mongodb.net/${dbName}?retryWrites=true&w=majority`

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

const phoneSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 4,
        required: true
    },
    phone:{
        type: String,
        minlength: 11,
        required: true
    }
})
phoneSchema.plugin(uniqueValidator); 

const Phone = mongoose.model('Phone', phoneSchema)
const phone = new Phone({
    name: theName,
    phone: phoneNumber
})




if(theName !== undefined && phoneNumber !== undefined) {
phone.save().then(result => {
    console.log(`added ${theName} number ${phoneNumber} to phonebook`); 
    mongoose.connection.close()

})
}else {
    Phone.find({}).then(result => {
        result.forEach(entry => {
            console.log(entry)
            })
            mongoose.connection.close()
        })
}


