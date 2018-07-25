const express = require('express')
const mongoose = require('mongoose')
const app = express()
const router = express.Router()
const beers = require('./app/routes/beers')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Middleware
app.use((req, res, next) => {
	console.log(`Something's hitting me...`)
	next()
})

app.use((req, res, next) => {
	console.log(`...and I don't know if I like it.`)
	next()
})

app.get('/', (req, res) => {
	res.json({ message: 'Welcome to our API! Try hitting the /api endpoint.' })
})

app.use('/api', router)

router.get('/', (req, res) => {
	res.json({ message: 'Great! Now checkout the /api/beers endpoint.' })
})

router.use('/beers', beers)
// base/api/beers




const port = process.env.PORT || 8080
app.listen(port)

console.log(`Listening on port ${port}`)

