'use strict';

var NorrisBot = require('./lib/hal9000');

var token = process.env.BOT_API_KEY;
var name = process.env.BOT_NAME;

var hal9000 = new Hal9000({
    token: token,
    name: name
});

hal9000.run();