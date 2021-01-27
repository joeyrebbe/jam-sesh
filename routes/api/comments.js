const router = require('express').Router()
const commentsCtrl = require('../../controllers/comment')

router.post('/posts/:post_id/comments', commentsCtrl.CreateComment)
router.delete('/posts/:post_id/comments/:comment_id', commentsCtrl.DeleteComment)

module.exports = router
