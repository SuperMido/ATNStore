const mongoose = require('mongoose')

const { Schema } = mongoose

const CommentSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  flagged: Boolean,
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
  },
}, { timestamps: true })

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
