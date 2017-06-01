global.fs = require('fs');

let render = {
	filter: (cells) => { return !/^#/.test(cells[0]) && (~~cells[0] > 1000 || /[A-Z_]+/.test(cells[0])); },
	rare: (cell, cells, dicter) => { return dicter.rare[`${cells[7]}${cells[22]}`]; }
};

(async() => {
	let conf = require('./config'), mongo = require('./libs/db');

	let csvp = require('./libs/csvp'),
		hacker = require('./hack'),
		valuer = require('./data/dict/valuer.json'),
		merger = require('./libs/merger'),
		marker = require('./data/mark/func');

	let db = await mongo('kq');

	for(let serv of process.argv[2] ? [process.argv[2]] : conf.servs) {
		let raw = {};

		for(let type of conf.types) {
			let header = require(`./data/head/${type}.json`);

			let result = await csvp(`./data/raw/${serv}-${type}.csv`, type, 1, await hacker(`header-${serv}-${type}`, header), valuer, render);

			console.log(`${serv}-${type}-${result.length}`);

			if(result.length)
				await (await db.coll(`${serv}${type}`)).renew(result);

			raw[type] = result;
		}

		let data = merger(
			valuer, marker(serv),
			raw['card'], raw['skil'], raw['role'],
			raw['rule'], raw['sups'], raw['supr'], raw['evol']
		);

		(await db.coll(serv)).renew(data[0]);

		console.log(data[0].length);
	}

	console.log('done');
})();