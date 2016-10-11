var Bot = require('slackbots');

module.exports = function(context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);
    
	if (req.body && req.body.challenge){
		context.res = {
			challenge: req.body.challenge
		};
    	context.done();
	}
    
	var input = req.query.text;
	var command = input ? input.split(' ')[0] : '';
		
	switch (command) {
		case 'time': 
			context.res = {
				body: { 
					response_type: "in_channel",
					text:  "Hello, it's " + (new Date())
				}
			};
			break;
		case 'wordcloud':
			context.res = {
				body: { 
					response_type: "in_channel",
					text:  "wordcloud"
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
