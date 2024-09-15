const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config()

const bodyParser = require('body-parser')
app.use(bodyParser.json()) //req.body
const PORT =  process.env || 3000


const Person = require('./models/Person')
const MenuItem = require('./models/MenuItem')

app.get('/', function (req, res) {
  res.send('welcome to my portal, how can I help you ?')
})

app.post('/person', async(req, res)=>{
  try {
      const data = req.body

      //create a new person document using the mongoose model
      const newPerson = new Person(data)

      //save the new person in database.
      const response = await newPerson.save()
      console.log('data saved')
      res.status(200).json(response)

  } catch (err) {
    console.log('error', err)
    res.status(500).json({error: 'Internal server error'})
  }
})

//GET method to get the person
app.get('/people', async(req, res) => {
  try {
    const data = await Person.find()
    console.log('data fetched')
    res.status(200).json(data)
  } catch (err) {
    console.log('error', err)
    res.status(500).json({error: 'Internal server error'})
  }
})

app.listen(PORT, () => {
  console.log("listening on portal 3000")
})