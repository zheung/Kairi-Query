module.exports = ($) => {
	let loadDarr = (serv) => {
		let space = {}, raw = $.rq(`${''}data/${serv}/mark/markRaw.json`);

		raw.forEach((group, x) => {
			group.forEach((mark, y) => {
				space[mark] = `${x}:${Math.floor(y/16)}:${1<<y%16}:`;
			});
		});

		return space;
	};

	let loadMark = (serv, mark) => {
		let d = {}, raw = $.rq(`data/${serv}/mark/dict/${mark}.json`);

		if(raw instanceof Array) {
			d._ = true;

			for(let i of raw) d[i] = true;
		}
		else {
			for(let tsub in raw) {
				d[tsub] = {};

				for(let i of raw[tsub])
					d[tsub][i] = true;
			}
		}

		return d;
	};

	let check = (dict, serv, mark, id) => {
		let marks = mark.split(':'), d;

		if(marks.length > 1) {
			d = dict[serv][marks[0]];

			if(!d) d = dict[serv][marks[0]] = loadMark(serv, mark);
		}
		else {
			d = dict[serv][mark];

			if(!d) d = dict[serv][mark] = loadMark(serv, mark);
		}

		let result = [];

		if(marks.length > 1) {
			if(d[marks[1]][id]) result.push(mark);
		}
		else {
			if(d._) {
				if(d[id]) result.push(mark);
			}
			else {
				for(let tsub in d)
					if(d[tsub][id]) result.push(`${mark}:${tsub}`);

				if(result.length) result.push(mark);
			}
		}

		return result;
	};

	return () => {
		let marks = {}, dict = {};

		for(let serv of $.conf.servs) {
			let markServs, result = {}, xyMap = loadDarr(serv), xlen = Math.floor((Object.keys(xyMap).length-1)/16);

			console.log(result);

			dict[serv] = {};

			if($.conf.renderMark) {
				let func = $.rq(`data/${serv}/mark/func`),
					markDicts = fs.readdirSync($.pa(`data/${serv}/mark/dict`)),
					cards = $.datas[serv];

				markServs = {};

				for(let ci in cards) {
					let card = cards[ci], markCards = [];

					for(let markFunc in func)
						for(let m of func[markFunc](card))
							markCards.push(m);

					for(let markDict of markDicts)
						for(let m of check(dict, serv, markDict.replace(/\.json$/, ''), card.id))
							markCards.push(m);

					markServs[card.id] = markCards;
				}

				fs.writeFileSync($.pa(`data/${serv}/mark.json`), JSON.stringify(markServs, null, '\t'));
				fs.writeFileSync($.pa(`data/${serv}/mark/markMap.json`), JSON.stringify(xyMap, null, '\t'));
			}
			else
				markServs = $.rq(`data/${serv}/mark.json`);

			for(let ri in markServs) {
				let space = (result[ri] || (result[ri] = []));

				for(let mark of markServs[ri]) {
					let xySplit = xyMap[mark].split(':'), x = ~~xySplit[0], y = ~~xySplit[1], z = ~~xySplit[2];

					let dx = (space[x] || (space[x] = [])), dy = (dx[y] || (dx[y] = 0));

					dy += z;
				}
			}

			Object.defineProperty(result, 'xlen', {enumerable: false, value: xlen});

			marks[serv] = result;
		}

		if($.conf.renderMark) _l('render mark completed');

		return marks;
	};
};