const express = require('express')
const router = express.Router()
const fileUploader = require('../configs/cloudinary.config')
const uploadController = require('../controllers/uploadsController')

router.post('/', fileUploader.single('file'), uploadController.upLoad)
router.delete('/', uploadController.delete)
module.exports = router
