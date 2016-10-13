module.exports = function(context, req) {
    if (req.body && req.body.challenge) {
        context.log('Challenged.');

        context.log('query.body.challenge=%s', req.body.challenge);
        context.res = { challenge: req.body.challenge };
     	context.done();
 	}

    if (req.query && req.query.do == "auth" && req.query.code) {
        context.log('Authenticating OAuth.');
        context.log('Code=%s', req.query.code);

    }
    
    context.log('Hal9000 coming online.');
    var Hal9000 = require('./lib/hal9000');

    var token = process.env.BOT_API_KEY;
    var name = process.env.BOT_NAME;

    context.log('Token=%s', token);
    context.log('Name=%s', name);

    var hal9000 = new Hal9000({
        token: token,
        name: name
    });

    hal9000.run();
    
    context.done();
};
