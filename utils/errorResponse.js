class ErrorResponse extends Error{
    // Blueprint for error message
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode
    }
}

module.exports = ErrorResponse;