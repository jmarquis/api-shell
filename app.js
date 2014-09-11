var config = require("./config.json"),
	express = require("express"),
	http = require("http"),
	io = require("socket.io");

var Application = function (config) {

	this.config = config;
	this.express = express();
	this.server = http.Server(this.express);
	this.io = io(this.server);
	this.listener = null;

	this.run = function () {
		var listener = this.listener = this.server.listen(this.config.port, function () {
			console.log("Server listening on port %d", listener.address().port);
		});
	};

	return this;

};

var app = new Application(config);

app.io.on("connection", function (socket) {

	console.log("new connection");

});

app.run();
