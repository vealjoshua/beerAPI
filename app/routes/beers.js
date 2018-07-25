const express = require('express')
const router = express.Router()

// stuff
router.get('/', (req, res) => {
	console.log('got beers')
})

router.post('/', (req, res) => {
	console.log('postin beers')
})

module.exports = router
