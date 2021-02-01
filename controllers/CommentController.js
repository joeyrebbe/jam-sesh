const Comment = require('../db/models/Comment')
const Post = require('../db/models/Post')

const CreateComment = async (req, res) => {
    try {
        const comment = new Comment({description: req.body.description, user_id: req.user})
        comment.save()
        await Post.updateOne(
            {_id: req.params.post_id},
            {
                $push: {
                    comments: comment
                }
            }
        )
        res.send(comment)
    }
    catch (err) {
        throw err
    }
}

const DeleteComment = async (req, res) => {
    try {
        await Comment.deleteOne({_id: req.params.Comment_id})
        const updatedPost = await Post.findByIdAndUpdate(req.params.post_id, 
            {
                $pull: {
                    comments: {_id: req.params.Comment_id}
                }
            },
            {
                upsert: true,
                new: true
            }
        )
        res.send(updatedPost)
    }
    catch (err) {
        throw err
    }
}

module.exports = {
    CreateComment,
    DeleteComment
}

