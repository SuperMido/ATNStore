const mongoose = require('mongoose')
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroOptions = require('./admin/options')
require('dotenv').config()

const express = require('express')
const app = express()

const UserAccountModel = require('./models/user.account.model')

const adminBro = new AdminBro(AdminBroOptions)

// const router = AdminBroExpress.buildRouter(adminBro)
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    const user = await UserAccountModel.findOne({ email })
    if (user){
      if(password === user.auth.password)
        return user
    }
    return null
  },
  cookieName: 'adminATN',
  cookiePassword: 'LongPassword',
})


app.use(adminBro.options.rootPath, router)
app.use(express.static('./public'));
app.get('/', router)

const run = async () => {
  await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  app.listen(process.env.PORT, () => console.log(`Admin Panel is under localhost:${process.env.PORT}`))
}

run()
