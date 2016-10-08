let condsParse = function(checker, conds) {
	let bitParse = checker.bit.parse, tagParse = checker.tag.parse;

	conds.name = conds.name? conds.name.trim() : '';

	conds.rare = bitParse(~~conds.rare);
	conds.job = bitParse(~~conds.job);
	conds.cost = bitParse(~~conds.cost);
	conds.attr = bitParse(~~conds.attr);
	conds.skillType = bitParse(~~conds.skillType);

	conds.tags = tagParse(conds.tags);
};

let valid = function(checker, data, conds) {
	let bitValid = checker.bit.valid;

	if(!(data.info.name.indexOf(conds.name)+1)) return false;

	let skillType = data.skill.awaken && data.skill.awaken[0] ? data.skill.awaken[0].info.type : data.skill.normal[0].info.type;

	if(!bitValid(conds.rare, data.info.rare)) return false;
	if(!bitValid(conds.job, data.skill.normal[0].info.job)) return false;
	if(!bitValid(conds.cost, data.skill.normal[0].info.cost, 'cost')) return false;
	if(!bitValid(conds.attr, data.skill.normal[0].info.attr, 'attr')) return false;
	if(!bitValid(conds.skillType, skillType)) return false;

	return true;
};

module.exports = ($) => {
	let render = $.rq('render'),
		checker = {
			bit: $.rq('checker/bit'),
			tag: $.rq('checker/tag')
		};

	return (conds = {}, paths = []) => {
		let renderAll = $.conf.renderAll, pageEvery = $.conf.pageEvery;
		let resultAll = [], result = [];

		condsParse(checker, conds);

		let length = conds.tags.length, serv = conds.serv,
			counter = {}, data;

		if(!length)
			data = $.data[serv];
		else {
			data = {};

			for(let tag of conds.tags) {
				let tagArray = $.tags[conds.serv][tag];

				for(let id of tagArray) {
					counter[id] = counter[id] ? counter[id]+1 : 1;

					if(counter[id] == length)
						data[id] = $.data[serv][id];
				}
			}
		}

		for(let id in data) {
			let d = data[id];

			if(valid(checker, d, conds))
				resultAll.push(renderAll ? render(d, paths) : d);
		}

		for(let d of resultAll.slice(pageEvery * (conds.page - 1), pageEvery * conds.page))
			result.push(renderAll ? d : render(d, paths));

		return [result, ~~conds.page, Math.ceil(resultAll.length / pageEvery)];
	};
};