#!/usr/bin/env node

'use strict';

var Hal9000 = require('./lib/hal9000');

var token = process.env.BOT_API_KEY;
var name = process.env.BOT_NAME;

var hal9000 = new Hal9000({
    token: token,
    name: name
});

hal9000.run();