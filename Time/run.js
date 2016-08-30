module.exports = function(context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
    
    if (req.query.text || (req.body && req.body.text)) {
        var now = new Date();
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.text || req.body.text) + ", it's " + now
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a text on the query string or in the request body"
        };
    }
    context.done();
};
