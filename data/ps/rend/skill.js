module.exports = ($) => {

	return (serv, card) => {
		let rdrCond = $.rq(`data/${serv}/rend/cond`),
			rdrRole = $.rq(`data/${serv}/rend/role`);

		let result = {},
			skillTypes = ['awaken', 'normal'],
			skills = card.skill;

		for(let st of skillTypes) {
			let ss = [], skillFirst = skills[st][0];

			for(let skill of skills[st]) {
				let s = { prio: skill.cond.priority, content: [] },
					condType = skill.cond.type;

				if(condType) {
					let rend = rdrCond(serv)[condType];

					if(rend)
						s.cond = rend(card, skill, skill.cond).replace(/\t|\n/g, '');
					else {
						_l('New Cond', condType, 'Card', card.id, 'Skill', skill.id);

						s.cond = '~未渲染条件' + condType;
					}
				}

				let chain = skill.info.chain;
				if(chain && (chain != 20 && chain != 1))
					s.content.push(`<kqud title="发动等级越低越先发动，相同则随机发动">发动等级</kqud> | ${skill.priority.pve} | Chain威力 | <kqud title="Chain威力计算规则：\r\n1、影响HP的技能(物理、魔法、治疗)：每Chain增加总数值的${chain}%点\r\n2、影响属性的技能(防御、弱化、支援)：每Chain增加${chain}点\r\n3、根据某属性A影响属性的技能：每Chain增加${chain}%该属性数值">${chain}</>`);
				else
					s.content.push(`<kqud title="发动等级越低越先发动，相同则随机发动">发动等级</kqud> | ${skill.priority.pve}`);

				for(let role of skill.role) {
					let skillType = role.type, rend = rdrRole(serv)[skillType];

					if(rend instanceof Function)
						s.content.push(rend(card, skill, role, skillFirst).replace(/\t|\n/g, ''));
					else {
						_l('New Skill', skillType, 'Card', card.id, 'Skill', skill.id);

						s.content.push('~未渲染技能' + skillType);
					}
				}

				ss.push(s);
			}

			result[st] = ss.sort((a, b) => { return a.prio - b.prio; });
		}

		return result;
	};
};