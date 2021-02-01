const { model } = require('mongoose')

const UserSchema = require('./models/User')
const PostSchema = require('./models/Post')
const CommentSchema = require('./models/Comment')

const User = model('users', UserSchema)
const Comment = model('comments', CommentSchema)
const Post = model('posts', PostSchema)

module.exports = {
  User,
  Comment,
  Post
}