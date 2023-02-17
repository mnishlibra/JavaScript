const mongoose = require('mongoose');

mongoose.set("strictQuery", false);
const connectDatabse = () => { mongoose.connect(process.env.MONGO_URL, () => {
  console.log("Connected to MongoDB");
})
}

module.exports = connectDatabse
