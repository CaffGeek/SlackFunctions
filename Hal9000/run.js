'use strict';

var config = require('./config.js');
var Hal9000 = require('./lib/hal9000.js');

var hal9000 = new Hal9000(
{
	token: config.bot_api_key,
	name: config.botname
});

hal9000.run();