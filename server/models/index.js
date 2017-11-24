const format = require('util').format
const mongoose = require('mongoose')
const URI = process.env.DB_NAME
const Schema = mongoose.Schema
const Storage = require('@google-cloud/storage')
const storage = new Storage({
  projectId: 'linear-time-184203',
  keyFilename: './keyfile.json'
})
const bucket = storage.bucket('bucket-stopoband')

mongoose.connect(URI, { useMongoClient: true })

var item = new Schema({
  title: String,
  file: String,
  tags: [
    {type: String}
  ],
  description: String
})

var Item = mongoose.model('Item', item)

function createBucket(cb){
  let bucketName = 'bucket-stopoband'
  storage.createBucket(bucketName).then((err, bucket) => {
    if(!err){
      cb('Bucket berhasil dibuat!')
    }
  })
}

function getItem(cb){
  Item.find({}, (err, item) => {
    if(err){
      res.status(200).send(err)
    }
    cb(item)
  })
}

function saveItem(body, file, cb){
  if(!file){
    res.status(200).send('No File Uploaded!')
    return;
  }

  const blob = bucket.file(file.originalname)
  const blobStream = blob.createWriteStream()

  blobStream.on('error', (err) => {
    next(err)
  })

  blobStream.on('finish', () => {
    blob.makePublic().then(() => {
      const publicUrl = format(`https://storage.googleapis.com/${bucket.name}/${blob.name}`)
      let tags = body.tags.split(',')
      if(tags.length > 1){
        let itemSchema = new Item({
          title: body.title,
          file: publicUrl,
          tags: tags,
          description: body.desc
        })
        itemSchema.save((err, item) => {
          if(err){
            res.status(200).send(err)
          }
          cb(item)
        })
      }else{
        let itemSchema = new Item({
          title: body.title,
          file: publicUrl,
          tags: body.tags,
          description: body.desc
        })
        itemSchema.save((err, item) => {
          if(err){
            res.status(200).send(err)
          }
          cb(item)
        })
      }
    })
  })

  blobStream.end(file.buffer)
}

module.exports = {
  getItem,
  saveItem
}
