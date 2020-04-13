const mongoose = require('mongoose')

const { Schema } = mongoose

const StoreSchema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    PhoneNumber: {
        type: String,
        required: true,
    },
    User: {
        type: Schema.Types.ObjectId,
        ref: 'UserAccount',
    },
})

const Store = mongoose.model('Store', StoreSchema)

module.exports = Store
