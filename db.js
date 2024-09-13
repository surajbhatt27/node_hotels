const mongoose = require('mongoose')

//define the mongoose connection URL
const mongoURL = 'mongodb://127.0.0.1:27017/hotels'

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