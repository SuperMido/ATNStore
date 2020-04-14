const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const menu = {
  product: { name: 'ATN Manager', icon: 'DataBase' },
  account: { name: 'Account Manager', icon: 'Account' },
  page: { name: 'Page Manager', icon: 'Classification' },
  post: { name: 'Post', icon: 'task--view'}
}

const user = require('./resources/user')
const page = require('./resources/page')
const blogPost = require('./resources/blog-post')
const article = require('./resources/article')
const complicated = require('./resources/complicated')
const comment = require('./resources/comment')
const category = require('./resources/category')
// const uploads = require('./resources/uploads')

const UserAccountModel = require('../models/user.account.model')
const PageModel = require('../models/page.model')
const CategoryModel = require('../models/category.model')
const CommentModel = require('../models/comment-model')
const ProductModel = require('../models/product.model')
const BlogPostModel = require('../models/blog.post.model')
const ArticleModel = require('../models/article.model')
const StoreModel = require('../models/store.model')
const { sort, timestamps } = require('./resources/sort')

module.exports = {
  resources: [
    { resource: CategoryModel, options: { parent: menu.product, ...category } },
    { resource: ProductModel, options: { parent: menu.product, ...complicated } },
    { resource: StoreModel, options: { parent: menu.product}, ...category },

    { resource: UserAccountModel, options: { parent: menu.account, ...user } },

    { resource: PageModel, options: { parent: menu.page, ...page } },
    { resource: CommentModel, options: { parent: menu.page, ...comment } },

    { resource: BlogPostModel, options: { parent: menu.post} },
    { resource: ArticleModel, options: { parent: menu.post} },
  ],
  version: {
    admin: true,
    app : '1.6.1.2'
  },
  branding: {
    logo: '/images/logo.png',
    favicon: '/images/favicon.ico',
    companyName: 'ATN Company',
    softwareBrothers: false,
  },
  pages: {
    customPage: {
      label: "About me",
      component: AdminBro.bundle('./components/some-stats'),
    },
  },
  locale: {
    translations: {
      messages: {
        loginWelcome: "to the ATN Admin Panel - Please login."
      }
    }
  },
  dashboard: {
    handler: async () => {

    },
    component: AdminBro.bundle('./components/dashboard-new.jsx')
  },
  rootPath: '/admin',
}

