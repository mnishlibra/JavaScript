const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { MONGO_URI} = require('./config');

// Router
const postsRoutes = require('./routes/api/routes')

// Body Parser
app.use(express.json());

// Connect to MDB
mongoose.connect(MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Mongdo DB Connected'))
    .catch(err => console.log(err));

// User Routes 
app.use('/api/posts',postsRoutes);  

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server run ar port ${PORT}`));
