let check = ($, dict, serv, tag, id) => {
	let d = dict[serv][tag];

	if(!d) {
		d = dict[serv][tag] = {};

		for(let i of $.rq(`data/tag/dict/${serv}/${tag}.json`)) d[i] = true;
	}

	return d[id];
};


module.exports = ($) => {
	let tags = {}, tagList;

	if($.conf.tagser)
		tagList = [
			'f.aoe', 'f.db2', 'f.covering', 'f.buffone', 'f.stan', 'f.debuffre',
			'd.5331', 'd.linkage', 'd.limited', 'd.speical', 'd.regicide'
		];

	let dict = {
		cn: {},
		jp: {}
	};

	for(let serv of $.conf.servs) {
		let tagser, result = {};

		if($.conf.tagser) {
			let func = $.rq(`data/tag/func.${serv}`);

			tagser = {};

			for(let card of $.data[serv]) {
				let tags = {};

				for(let tagRaw of tagList) {
					let tagRaws = tagRaw.split('.'), type = tagRaws[0], tag = tagRaws[1],
						isExist = false;

					if(type == 'f')
						isExist = func[tag](card);
					else if(type == 'd')
						isExist = check($, dict , serv, tag, card.id);

					if(isExist)
						tags[tag] = true;
				}

				tagser[card.id] = Object.keys(tags);
			}

			fs.writeFileSync($.pa(`data/tags.${serv}.json`), JSON.stringify(tagser, null, '\t'));
		}
		else
			tagser = $.rq(`data/tags.${serv}.json`);

		for(let ri in tagser) {
			let n = {};

			for(let t of tagser[ri])
				n[t] = true;

			result[ri] = n;
		}

		tags[serv] = result;
	}

	if($.conf.tagser)
		_l('retagser completed');

	return tags;
};