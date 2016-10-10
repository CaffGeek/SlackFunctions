module.exports = function(context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
    
	var input = req.query.text || (req.body && req.body.text);
	var command = input.split(' ')[0];
		
	switch (command) {
		case 'time': 
			context.res = {
				body: { 
					response_type: "in_channel",
					text:  "Hello, it's " + (new Date())
				}
			};
			break;
		default:			
			context.res = {
				status: 400,
				body:  "I'm sorry, I can't let you do that."
			};
			break;
	}
	
    context.done();
};
