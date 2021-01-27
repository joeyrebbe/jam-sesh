const { Schema, model } = require('mongoose')

const postSchema = new Schema({
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'users'
    },
    caption: String,
    comments: [{
        type: Schema.Type.ObjectId,
        ref: 'comments'
    }]
})


const Post = model('posts', postSchema)

module.exports = Post