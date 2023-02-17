const ErrorHandler = require('../utils/errorHandler');

module.exports = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    if(process.env.NODE_ENV === 'development') {
        res.status(err.statusCode).json({
            success : false,
            error : err,
            errMessage : err.message,
            stack : err.stack
        });
    }

    if(process.env.NODE_ENV === 'production') {
        let error = {...err};
        console.log(error)
        error.message = err.message;

        // Wrong Mongooose Object ID Error 
        if(err.name == 'CasteError') {
            const message = 'Resource not found. Invalid : ${err.path}';
            error = new ErrorHandler(message , 404)
        }

        // Handling Mongoose Valiation Error 
        if(err.name === 'ValidationError') {
            const message = Object.values(err.errors).map(value => 
                value.message);
                error = new ErrorHandler(message,404)
        }

        res.status(err.statusCode).json({
            success : false,
            message : error.message || 'Internal Server Error.'
        })
    }
}