const mongoose = require('mongoose')

const CategoryModel = require('./category.model')


// const findCategoryByName = function(catName, done) {
//   CategoryModel.find({Name: 0}, function (err, catFound) {
//     if (err) return console.log(err);
//     done(null, catFound);
//   });
// };

// console.log(findCategoryByName)

// let catNames = [];
//
// CategoryModel.find({}, (err,obj) => {
//   for(let item of obj) catNames.push(item.Name);
// });
//
// console.log(catNames);

// return CategoryModel.find({}, (err,obj)=>{
//   let product_names = [];
//   for (let item of obj){
//     product_names.push(item.Name)
//   }
//   // console.log(product_names)
//   return product_names
// }) ;


// function listCategoryName(cat) {
//   let product_names = [];
//   for (let item of cat) {
//     product_names.push(item.Name);
//   }
//   return product_names;
// }
//
//   CategoryModel.find({}).exec(function (err,res) {
//     if(err){
//       console.log(err)
//     }
//     console.log(listCategoryName(res))
//   });


const { Schema } = mongoose

const Nested = new Schema({
  extremelyNested: String,
}, { _id: false })

const ImageVariant = new mongoose.Schema({
  imageURL: String,
  isApproved: Boolean,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  isDeleted: Boolean
}, { _id: false });

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
