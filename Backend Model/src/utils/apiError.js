class apiError extends express {
    constructor(message = "something went wrong",
        statusCode, 
        errors = [],
        stack
    )
        {
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = this.message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this , this.constructor)
        }
    }
}

export {apiError}