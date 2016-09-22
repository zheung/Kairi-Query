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
	let bitValid = checker.bit.valid, tagValid = checker.tag.valid;

	if(!(data.info.name.indexOf(conds.name)+1)) return false;

	if(!bitValid(conds.serv, conds.rare, data.info.rare)) return false;
	if(!bitValid(conds.serv, conds.job, data.skill.normal[0].info.job)) return false;
	if(!bitValid(conds.serv, conds.cost, data.skill.normal[0].info.cost, 'cost')) return false;
	if(!bitValid(conds.serv, conds.attr, data.skill.normal[0].info.attr, 'attr')) return false;
	if(!bitValid(conds.serv, conds.skillType, data.skill.normal[0].info.type)) return false;

	if(!tagValid(conds.serv, conds.tags, data.id)) return false;

	return true;
};

module.exports = ($) => {
	let render = $.rq('render'),
		checker = {
			bit: $.rq('checker/bit'),
			tag: $.rq('checker/tag')
		};

	return (data = {}, conds = {}, paths = []) => {
		let renderAll = false, pageEvery = 5;
		let resultAll = [], result = [];

		condsParse(checker, conds);

		for(let d of data[conds.serv]) if(valid(checker, d, conds))
			resultAll.push(renderAll ? render(conds.serv, d, paths) : d);

		for(let d of resultAll.slice(pageEvery * (conds.page - 1), pageEvery * conds.page))
			result.push(renderAll ? d : render(conds.serv, d, paths));

		return [result, ~~conds.page, Math.ceil(resultAll.length / pageEvery)];
	};
};