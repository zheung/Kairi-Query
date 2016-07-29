let parsePath = (obj, paths, value) => {
		paths.forEach((path, index) => {
			if(index < paths.length-1) {
				if(!obj[path]) {
					obj[path] = {};
				}

				obj = obj[path];
			}
			else {
				obj[path] = value;
			}
		});
	},
	parseCount = (obj, paths, value) => {
		paths.forEach((path, index) => {
			if(index < paths.length - 1) {
				if(!obj[path]) {
					obj[path] = {};
				}

				obj = obj[path];
			}
			else if(value) {
				obj[path] = (obj[path] ? obj[path]+1 : 1);
			}
		});
	},
	parseParam = (param, name, dir, type) => {
		if(!param) return {};

		try {
			if(typeof param == 'boolean')
				param = require(path.join(dir, name+'-'+type+'.js'));
			else if(typeof param == 'string')
				param = require(param);
		}
		catch(err) {
			if(type == 'parser' || type == 'dicter')
				param = require(path.join(dir, '_'+type+'.js'));
			else
				throw err;
		}

		return param;
	};

module.exports = (name, dir, start, header, parser, dicter) => {
	let str = fs.readFileSync(path.join(dir, name+'.csv')).toString(),
		rows = str.split('\r\n');

	header = parseParam(header, name, dir, 'header');
	parser = parseParam(parser, name, dir, 'parser');
	dicter = parseParam(dicter, name, dir, 'dicter');

	if(header && header.length) {
		let result = [], counter = {};

		header.push('i');

		rows.forEach((row, index) => {
			if(index+1 >= start && row.trim()) {
				let cells = row.split(','), rowObj = {};

				if(parser.filter && parser.filter(cells)) {
					cells.forEach((cell, index) => {
						let heads = header[index].split('.'),
							option = heads.shift();

						if(option == 's')
							parsePath(rowObj, heads, cell);
						else if(option == 'n')
							parsePath(rowObj, heads, ~~cell);
						else if(option == 'b')
							parsePath(rowObj, heads, !!cell);

						else if(option == 'p')
							parsePath(rowObj, heads, parser[heads.shift()](cell));
						else if(option == 'd')
							parsePath(rowObj, heads, ((dicter[heads.shift()][cell]) || 0));
						else if(option == 'i')
							return;
						else if(option == 'c')
							parseCount(counter, heads, !!cell);
					});

					result.push(rowObj);
				}
			}
		});

		ll(name+' counter:');
		ll(counter);

		return result;
	}
	else {
		return rows;
	}
};