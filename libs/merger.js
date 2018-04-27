let hasPlus = (cards, id, ids = []) => {
	let card = cards[id], rare = card.rare;

	if(ids.indexOf(id)+1)
		return 0;
	else if(card.plus && !ids.length)
		return card.plus+1;
	else if(card.plus || rare == 7 || rare == 71)
		return 1;
	else
		for(let evol of card.evol) {
			if(evol.type == 'NORMAL')
				return hasPlus(cards, evol.target, (ids.push(id) && 0) || ids);
			else if(evol.type == 'LIMIT')
				return 1;
		}

	return 0;
};
let hasMMR = (cards, id, ids = []) => {
	let card = cards[id], rare = card.rare;

	if(ids.indexOf(id)+1)
		return 0;
	else if(rare == 7 || rare == 71)
		return 1;
	else {
		for(let evol of card.evol) {
			if(hasMMR(cards, evol.target, (ids.push(id) && 0) || ids))
				return 1;
		}

		return 0;
	}
};

module.exports = async(serv, resultType = 1, valuer, marker, cards, skils, roles, rules, supss, suprs, evols, budys, burss, burrs) => {
	let result = {
		arr: [[], []],
		obj: [{}, {}]
	};

	let dictCard = {};
	let dictRule = {};
	let dictEvol = {};
	let dictSkil = {};
	let dictRole = {};
	let dictSupr = {};
	let dictBurr = {};

	for(let rule of rules)
		dictRule[rule.name] = rule;
	for(let card of cards)
		dictCard[card.id] = card;

	for(let role of roles) {
		if(role.type) {
			let rule = dictRule[role.type];

			for(let index in rule.types) {
				let type = rule.types[index];

				if(type == 2) {
					L('TRANCE_GAUGE_STATE!');
				}

				if(type && type != 1) {
					role.params[index] = [type, valuer[type][role.params[index]]];
				}
			}
		}

		for(let index in role.params) {
			role.params['p'+(index-1)] = role.params[index];
			delete role.params[index];
		}

		let dict = dictRole[role.id] || (dictRole[role.id] = []);

		dict.push(role);
	}

	for(let role of suprs) {
		if(role.type) {
			let rule = dictRule[role.type];

			for(let index in rule.types) {
				let type = rule.types[index];

				if(type == 2) {
					L('TRANCE_GAUGE_STATE!');
				}

				if(type && type != 1)
					role.params[index] = [type, valuer[type][role.params[index]]];
			}
		}

		for(let index in role.params) {
			role.params['p'+(index-1)] = role.params[index];
			delete role.params[index];
		}

		let dict = dictSupr[role.id] || (dictSupr[role.id] = []);

		dict.push(role);
	}

	for(let role of burrs) {
		if(role.type) {
			let rule = dictRule[role.type];

			for(let index in rule.types) {
				let type = rule.types[index];

				if(type == 2) {
					L('TRANCE_GAUGE_STATE!');
				}

				if(type && type != 1)
					role.params[index] = [type, valuer[type][role.params[index]]];
			}
		}

		for(let index in role.params) {
			role.params['p'+(index-1)] = role.params[index];
			delete role.params[index];
		}

		let dict = dictBurr[role.id] || (dictBurr[role.id] = []);

		dict.push(role);
	}

	for(let skil of skils) {
		skil.role = dictRole[skil.role] || [];

		let dict = dictSkil[skil.id] || (dictSkil[skil.id] = []);

		dict.push(skil);
	}

	for(let skil of supss) {
		skil.role = dictSupr[skil.role] || [];

		let dict = dictSkil[skil.id] || (dictSkil[skil.id] = []);

		dict.push(skil);
	}

	for(let skil of burss) {
		skil.role = dictBurr[skil.role] || [];

		let dict = dictSkil[skil.id] || (dictSkil[skil.id] = []);

		dict.push(skil);
	}

	for(let evol of evols) {
		if(!evol.type) continue;

		for(let id of Object.keys(evol.matter))
			if(!evol.matter[id].fame)
				delete evol.matter[id];

		let dict = dictEvol[evol.id] || (dictEvol[evol.id] = []);

		dict.push(evol);
	}

	for(let card of cards) {
		card.skill.normal = dictSkil[card.skill.normal] || [];
		card.skill.awaken = dictSkil[card.skill.awaken] || [];

		card.skill.suport1 = dictSkil[card.skill.suport ? card.skill.suport[1] : undefined] || [];
		card.skill.suport2 = dictSkil[card.skill.suport ? card.skill.suport[2] : undefined] || [];
		card.skill.suport3 = dictSkil[card.skill.suport ? card.skill.suport[3] : undefined] || [];

		card.skill.bless = dictSkil[card.skill.bless] || [];
		card.skill.pass = dictSkil[card.skill.pass] || [];

		delete card.skill.suport;

		card.evol = dictEvol[card.id] || [];

		if(resultType & 1) {
			result.arr[0].push(card);
		}
		if(resultType & 2) {
			result.obj[0][card.id] = card;
		}
	}

	for(let budy of budys) {
		budy.skill.pass = dictSkil[budy.skill.pass] || [];

		if(budy.skill.active1) {
			budy.skill.active1.role = dictSkil[budy.skill.active1.id] || [];
		}
		if(budy.skill.active2) {
			budy.skill.active2.role = dictSkil[budy.skill.active2.id] || [];
		}
		if(budy.skill.active3) {
			budy.skill.active3.role = dictSkil[budy.skill.active3.id] || [];
		}

		if(resultType & 1) {
			result.arr[1].push(budy);
		}
		if(resultType & 2) {
			result.obj[1][budy.id] = budy;
		}
	}

	for(let card of cards) {
		card.rare = ~~(`${card.rare}${hasPlus(dictCard, card.id)}`);
		card.mmr = hasMMR(dictCard, card.id);

		card.type = 'card';

		card.mark = marker(card);

		card.rend = await render(serv, card, [
			'id',
			['name', 'name'],
			['title', 'title'],
			['star', 'starType', 'd.shower.star'],
			['star', 'star'],
			['figure.hp.max', 'hp'],
			['figure.ad.max', 'ad'],
			['figure.ap.max', 'ap'],
			['figure.hq.max', 'hq'],
			['skill.normal.0.info.cost', 'cost'],
			['skill.awaken.0.info.cost', 'cost'],
			['skill.normal.0.info.job', 'job', 'd.shower.job'],
			['skill.awaken.0.info.job', 'job', 'd.shower.job'],
			['this', 'kind', 'f.skillKind'],
			['rare', 'rare', 'd.shower.rare'],
			['skill.normal.0.info.attr', 'attr', 'd.shower.attr'],
			['skill.awaken.0.info.attr', 'attr', 'd.shower.attr'],
			['this', 'skill', 'f.skill'],
			['this', 'prio', 'f.prio'],
			['evol', 'evol'],
			['skill.normal.0.info.attr', 'raw.attr'],
			['skill.awaken.0.info.attr', 'raw.attr'],
			['skill.normal.0.info.job', 'raw.job'],
			['skill.awaken.0.info.job', 'raw.job'],
			['rare', 'raw.rare'],
			['type', 'raw.type'],
			['pict.normal', 'pict']
		]);

		for(let type of ['normal', 'awaken', 'suport1', 'suport2', 'suport3', 'bless', 'pass'])
			if(card.skill[type])
				for(let skill of card.skill[type])
					delete skill.show;

	}

	for(let budy of budys) {
		budy.rare = `${budy.rare}${budy.limit}`;

		budy.type = 'budy';

		budy.mark = marker(budy);

		budy.rend = await render(serv, budy, [
			'id',
			'name',
			'limit',
			'pict',
			'evol',
			['rare', 'raw.rare', 'd.shower.rare'],
			['rare', 'raw.rare'],
			['type', 'raw.type'],
			['this', 'skill', 'f.skillBudy']
		]);

		for(let skill of budy.skill['pass'])
			delete skill.show;

		for(let type of ['active1', 'active2', 'active3'])
			for(let skill of budy.skill[type].role)
				delete skill.show;
	}

	return result;
};