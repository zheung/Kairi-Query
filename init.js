module.exports = () => {
	global._c = console;
	global._l = _c.log;
	global._d = __dirname;

	global.fs = require('fs');
	global.path = require('path');
	global.qs = require('querystring');

	global.dicter = {
		value: require(path.join(_d, 'data', 'dict', 'value.js')),
		show: require(path.join(_d, 'data', 'dict', 'show.js')),
		bits: require(path.join(_d, 'data', 'dict', 'bits.js'))
	};
};