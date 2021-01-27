const Router = require('express').Router()

const UserRouter = require('./users')
const CommentRouter = require('./comments')
const PostRouter = require('./posts')

Router.use('/users', UserRouter)
Router.use('/posts', PostRouter)
Router.use('/comments', CommentRouter)

module.exports = Router