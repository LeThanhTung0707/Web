var cloudinary = require('cloudinary').v2
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
})

exports.upLoad = (req, res, next) => {
  if (!req.file) {
    next(new Error('No file uploaded!'))
    return
  }
  console.log(req.file)
  res.status(200).json({
    success: true,
    urlImage: req.file.path,
    publicIdImage: req.file.filename,
  })
}
exports.delete = (req, res, next) => {
  cloudinary.uploader
    .destroy(req.body.publicIdImage)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch(() => {
      res.status(404).json('error')
    })
}
