exports.setSuccessResponse = function(status, message, response, key = 'items')
{
    return {
        status:         status,
        statusCode:     200,
        message:        message,
        [key]:            response
    };
}