const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/users')
const multer = require('multer')

router.post('/signup', usersCtrl.signup)
router.post('/login', usersCtrl.login)
router.get('/:username', usersCtrl.profile)

module.exports = router