const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StartSchema = new Schema({
    start_time: Date,
    product: {type: Schema.Types.ObjectId, ref: 'Products'}
})

module.exports = mongoose.model('StartBid', StartSchema);