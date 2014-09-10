var express = require("express"),
	config = require("./config.json");

var Application = function (config, server) {

	this.config = config;
	this.server = server;
	this.listener = this.server.listen(config.port, function () {
		console.log("Server listening on port %d", this.server.address().port);
	});

	return this;

};

var app = new Application(config, express());
