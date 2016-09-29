module.exports = ($) => {
	let rdrCond = $.rq('render/cond'),
		rdrRole = $.rq('render/role');

	return (card) => {
		let result = {},
			skillTypes = ['awaken', 'normal', 'support'],
			skills = card.skill;

		for(let st of skillTypes) {
			let ss = [], skillFirst = skills[st][0];

			for(let skill of skills[st]) {
				let s = { prio: skill.cond.priority, content: [] },
					condType = skill.cond.type, delayType = skill.delay.type;

				if(condType) {
					let render = rdrCond[condType];

					if(render)
						s.cond = render(card, skill, skill.cond).replace(/\t|\n/g, '');
					else {
						_l('New Cond', condType, 'Card', card.id, 'Skill', skill.id);

						s.cond = '~未渲染条件' + condType;
					}
				}

				if(delayType) {
					let render = rdrCond[delayType];

					if(render)
						s.cond = (skill.delay.timing==2 ? '<kqud title="在敌方行动后判定条件，满足条件则发动技能">敌方行动后</kqud> | ' : '')+
							render(card, skill, skill.delay).replace(/\t|\n/g, '');
					else {
						_l('New Delay', delayType, 'Card', card.id, 'Skill', skill.id);

						s.cond = '~未渲染条件' + delayType;
					}
				}

				let chain = skill.info.chain;
				if(chain && (chain != 20 && chain != 1))
					s.content.push(`Chain威力 | <kqud title="Chain威力计算规则：\r\n1、影响HP的技能(物理、魔法、治疗)：每Chain增加总数值的${chain}%点\r\n2、影响属性的技能(防御、弱化、支援)：每Chain增加${chain}点\r\n3、根据某属性A影响属性的技能：每Chain增加${chain}%该属性数值">${chain}</>`);

				for(let role of skill.role) {
					let skillType = role.info.type, render = rdrRole[skillType];

					if(render instanceof Function){
						s.content.push(render(card, skill, role, skillFirst).replace(/\t|\n/g, ''));
					}
					else {
						_l('New Skill', skillType, 'Card', card.id, 'Skill', skill.id);

						s.content.push('~未渲染技能' + skillType);
					}
				}

				ss.push(s);
			}

			result[st] = ss.sort((a, b) => { return b.prio - a.prio; });
		}

		return result;
	};
};