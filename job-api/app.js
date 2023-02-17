const express = require('express')
const dotenv = require('dotenv');
const errorMiddleware = require('./middlewares/errors')
const ErrorHandler = require('./utils/errorHandler')

const app = express()

app.use(express.json())


dotenv.config({path : './config/config.env'})
const connectDatabse = require('./config/database');

// Handling Uncaight Exception 
process.on('uncaughtException' , err => {
    console.log(`ERROR: ${err.message}`),
    console.log('Shutting down due to uncaught exception.')
    process.exit(1);
})


connectDatabse()


// Importing All routes 
const jobs = require('./routes/jobs')

app.use('/api/v1/',jobs)

app.all('*',(req,res,next) => {
    next(new ErrorHandler(`${req.originalUrl} route not found`, 404 ))
})

app.use(errorMiddleware)


const PORT = process.env.PORT;

const server = app.listen(PORT, () => {
    console.log(`Server started on port ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
});

// Handling Unhandled Promise Rejection
process.on('unhandledRejection', err => {
    console.log(`Errors : ${err.message}`);
    console.log('Shutting down the server due to Unhandled promise rejection.')
    server.close( () => {
        process.exit(1);
    })
});
