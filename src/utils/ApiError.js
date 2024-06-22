class ApiError extends Error{
    constructor(
        statusCode,
        message = "something went wrong",
        errors = [],
        statck = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.errors = errors
        this.success = false
        this.message = message

        if (statck) {
            this.statck = statck
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }

}


export {ApiError}