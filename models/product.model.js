const mongoose = require('mongoose')

const { Schema } = mongoose

const ProductSchema = new Schema({
  Name: String,
  Description: String,
  Price: Number,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  }
}, { timestamps: true })

const Product = mongoose.model('Product', ProductSchema)

module.exports = Product
