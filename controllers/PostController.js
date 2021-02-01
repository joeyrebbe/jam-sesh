const Post = require('../db/models/Post')
const Comment = require('../db/models/Comment')

const CreatePost = async (req, res) => {
    try {

        const post = await Post.create({caption: req.body.caption, user: req.user});

        console.log(post)
        res.status(201).json({post: post})
    }
        
    catch(err) {
        console.log(err)
        res.json({data: err})
    }
}

const GetAllPosts = async (req, res) => {
    try {
        const posts = await Post.find()
        res.send(posts)
    }
    catch (err) {
        throw err
    }
}

const GetPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.post_id).populate([{model: Comment, path: 'comments', select: '_id description'}])
        // if using actual model doesnt work, use 'comments' for model
        res.send(post)
    }
    catch (err) {
        throw err
    }
}

const DeletePost = async (req, res) => {
    try {
        await Comment.deleteMany({_id: {$in: post.comments}})
        await Post.findByIdAndDelete(req.params.post_id)
        res.send({msg: 'your post has been banished to the shadow realm'})
    }
    catch (err) {
        throw err
    }
}







module.exports = {
    CreatePost,
    GetAllPosts,
    GetPostById,
    DeletePost
}