module.exports = () => {
	global._c = console;
	global._l = _c.log;
	global._d = __dirname;

	global.fs = require('fs');
	global.path = require('path');
	global.qs = require('querystring');
};