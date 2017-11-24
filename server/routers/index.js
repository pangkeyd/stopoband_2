const express = require('express')
const router = express.Router()
const Item = require('../controllers/index')
const Multer = require('multer')
const multer = Multer({
  dest: 'assets/music/',
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 10 * 1024 * 1024
  }
})

router.get('/', Item.getData)

router.post('/', multer.single('image'), Item.saveData)

module.exports = router
