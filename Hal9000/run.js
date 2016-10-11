'use strict';

var util = require('util');
var path = require('path');
var fs = require('fs');
var Bot = require('slackbots');

var Hal9000 = function Constructor(settings) {
    this.settings = settings;
    this.settings.name = this.settings.name || 'hal9000';
};

util.inherits(Hal9000, Bot);

Hal9000.prototype.run = function () {
    Hal9000.super_.call(this, this.settings);

    this.on('start', this._onStart);
    this.on('message', this._onMessage);
};

Hal9000.prototype._onStart = function () {
    this._loadBotUser();
};

Hal9000.prototype._onMessage = function (message) {    
    var self = this;
    
	var channel = self._getChannelById(message.channel);
	self.postMessageToChannel(channel.name, "Hi Dave!", {as_user: true});
};

Hal9000.prototype._loadBotUser = function () {
    var self = this;
    this.user = this.users.filter(function (user) {
        return user.name === self.name;
    })[0];
};

module.exports = Hal9000;