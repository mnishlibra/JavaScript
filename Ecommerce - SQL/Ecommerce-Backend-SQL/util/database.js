const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect('mongodb+srv://mongoDB:a3OPN2NX7DAfLsnp@ecommerce.wwc4wkl.mongodb.net/?retryWrites=true&w=majority')
  .then(client => {
    console.log('connected')
    _db = client.db();
    callback()
  })
  .catch((err) =>{
    console.log(err)
    throw err;
  }
  )
}

const getDb = () => {
  if(_db) {
    return _db;
  }
  throw 'No databse found!'
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb; 