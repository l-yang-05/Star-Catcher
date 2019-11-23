const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const EndSchema = new Schema({
    end_time: Date,
    product: {type: Schema.Types.ObjectId, ref: 'Products'}
})

module.exports = mongoose.model('EndBid', EndSchema);