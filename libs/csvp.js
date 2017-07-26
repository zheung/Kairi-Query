let parsePath = (obj, paths, value) => {
		paths.forEach((path, index) => {
			if(index < paths.length - 1) {
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
	};

module.exports = async(path, name, start, header, dicter, parser) => {
<<<<<<< HEAD
	let str = fs.readFileSync(path).toString().replace(/侠客/g, '盗贼').replace(/侠士/g, '义贼型'),
=======
	let str = fs.readFileSync(path).toString().replace(/侠客/g, '盗贼').replace(/侠士型/g, '义贼型'),
>>>>>>> 01704ed0f4b1999465c295ec9bf84642aa924ed4
		rows = str.split('\r\n');

	if(header && header.length) {
		let result = [], counter = {};

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
							parsePath(rowObj, heads, parser[heads.shift()](cell, cells, dicter));
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

		if(Object.keys(counter).length) {
			L(name+' counter:');
			L(counter);
		}

		return result;
	}
	else {
		return rows;
	}
};