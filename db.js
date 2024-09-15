const mongoose = require('mongoose')
require('dotenv').config()


//define the mongoose connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL
mongoose.connect(mongoURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
const db = mongoose.connection

// define event listener for database connection
db.on('connected', () => {
    console.log('connected to mongoDB server')
})

db.on('error', (err) => {
    console.error('mongDB connection error', err)
})

db.on('disconnected', () => {
    console.log('mongoDB disconnected')
})

//Export the database connection

module.exports = db