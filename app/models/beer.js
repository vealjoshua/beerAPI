const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BeerSchema = new Schema({
	name: {
		type: String,
		require: true
	},
	rating: {
		type: Number,
		min: [0, 'Rating too small.'],
		max: [10, 'Woah. No beer is that good.'],
		required: true
	}
})

module.exports = mongoose.model('Beer', BeerSchema)