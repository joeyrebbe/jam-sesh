const router = require('express').Router()
const postsCtrl = require('../../controllers/posts')

router.get('/posts', postsCtrl.GetAllPosts)
router.get('/posts/:post_id', postsCtrl.GetPostById)
router.post('/posts', postsCtrl.CreatePost)
router.delete('/posts/:post_id', postsCtrl.DeletePost)


module.exports = router