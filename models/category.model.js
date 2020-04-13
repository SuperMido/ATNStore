const mongoose = require('mongoose')

const { Schema } = mongoose

const CategorySchema = new Schema({
  Name: {
    type: String,
    required: true,
  },
  createdAt: Date,
  Description: String,
}, { timestamps: true })

const Category = mongoose.model('Category', CategorySchema)

module.exports = Category
