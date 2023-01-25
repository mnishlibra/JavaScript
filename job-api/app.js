const express = require('express')
const dotenv = require('dotenv');


const app = express()

app.use(express.json())


dotenv.config({path : './config/config.env'})
const connectDatabse = require('./config/database');
connectDatabse()


// Importing All routes 
const jobs = require('./routes/jobs')

app.use('/api/v1/',jobs)


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});