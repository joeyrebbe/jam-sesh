const { Schema, model } = require('mongoose')

const commentSchema = new Schema({
    description: {
        type: String,
        required: true, 
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "users"
    }
})

const Comment = model('comments', commentSchema)

module.exports = Comment