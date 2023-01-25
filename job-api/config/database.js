const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectDatabse = () => { mongoose.connect(process.env.MONGO_URL, () => {
  console.log(`Connected to MongoDB at ${process.env.MONGO_URL}`);
})
}

module.exports = connectDatabse
