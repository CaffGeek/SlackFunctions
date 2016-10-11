#!/usr/bin/env node

'use strict';

context.log('Hal9000 coming online...');

var Hal9000 = require('./lib/hal9000');

var token = process.env.BOT_API_KEY;
var name = process.env.BOT_NAME;

context.log('Token=%s', token);
context.log('Name=%s', name);

context.log('Hal9000 coming online....');

var hal9000 = new Hal9000({
    token: token,
    name: name
});

hal9000.run();
