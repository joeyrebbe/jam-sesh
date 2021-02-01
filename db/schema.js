const { model } = require('mongoose')

const UserSchema = require('./models/User')
const PostSchema = require('./models/Posts')
const CommentSchema = require('./models/Comments')

const User = model('users', UserSchema)
const Comment = model('comments', CommentSchema)
const Post = model('travel_logs', PostSchema)

module.exports = {
  User,
  Comment,
  Post
}
