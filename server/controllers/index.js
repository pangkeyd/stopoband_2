const item = require('../models/index')

class Item {

  static getData(req, res){
    item.getItem(result => {
      res.send(result)
    })
  }

  static saveData(req, res, next){
    item.saveItem(req.body, req.file, (result) => {
      res.send(result)
    })
  }

}

module.exports = Item
