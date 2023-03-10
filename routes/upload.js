const router = require('express').Router()
const uploadImage = require('../middlewares/uploadImage')
const uploadCtrl = require('../controllers/uploadCtrl')
const auth = require('../middlewares/auth')

router.post('/upload_avatar', uploadImage, auth, uploadCtrl.uploadAvatar)

module.exports = router