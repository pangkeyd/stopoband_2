const mongoose = require('mongoose')
const URI = process.env.DB_NAME
const Schema = mongoose.Schema
const jwt = require('jsonwebtoken')

var user = new Schema({
  name: String,
  email: {
    type: String,
    index: true,
    unique: true
  }
})

var User = mongoose.model('User-ecommerce', user)

function getUser(cb){
  User.find({}, (err, user) => {
    if(err){
      res.status(200).send(err)
    }
    cb(user)
  })
}

function signIn(head, cb){
  let token = head.token
  let decoded = jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if(decoded){
      let userSchema = new User({
        name: decoded.name,
        email: decoded.email
      })
      userSchema.save((err, user) => {
        if(err){
          res.status(200).send(err)
        }
        cb(user)
      })
    }
  })
}

module.exports = {
  getUser,
  signIn
}
