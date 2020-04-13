const mongoose = require('mongoose')
const { Schema } = mongoose
const EMAIL_REGEXP = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validateEmail = email => EMAIL_REGEXP.test(email);

const UserSchema = new Schema({
  name: String,
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: true,
    validate: [validateEmail, 'Please fill a valid email address']
  },
  auth: {
    password: {
      type: String,
      required: true,
    },
  },
  role: {
    type: String,
    enum: ['Admin', 'Store Manager', 'Sales'],
    required: true
  }
}, { timestamps: true })

const UserAccount = mongoose.model('UserAccount', UserSchema)

module.exports = UserAccount