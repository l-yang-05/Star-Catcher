const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BidsSchema = new Schema({
    amount: Number,
    product: {type: Schema.Types.ObjectId, ref: 'Product'},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
})

module.exports = mongoose.model('Bids', BidsSchema);