module.exports = ($) => {
	return (serv) => {
		let shower = $.dicts[serv].shower, valuer = $.dicts[serv].valuer;

		return {
			1: (card, skill, cond) => {
				if(~~cond.param1 > 0 && cond.param2 > 0) _l('Cond 1 Double');

				if(~~cond.param1 > 0)
					return `${cond.param1}Chain或以上`;
				else
					return`${cond.param2}Chain以下`;
			},
			2: (card, skill, cond) => {
				if(~~cond.param2) _l('Cond 2 Double');

				return `目标 | ${shower.attr[valuer.attr[cond.param1]]}属性`;
			},
			3: (card, skill, cond) => {
				if(~~cond.param2) _l('Cond 3 Double');

				return `目标 | ${shower.roleDebuff[valuer.roleDebuff[cond.param1]]}状态`;
			},
			4: (card, skill, cond) => {
				return `${cond.param1}%机率`;
			},
			5: (card, skill, cond) => {
				return `${shower.attr[valuer.attr[cond.param1]]} | ${cond.param2}张<kqud title="不包括此卡">或以上</kqud>`;
			},
			6: (card, skill, cond) => {
				return `${shower.skillKind2[valuer.skillKind[cond.param1]]} | ${cond.param2}张<kqud title="不包括此卡">或以上</kqud>`;
			},
			7: (card, skill, cond) => {
				let rare = valuer.rare[cond.param1],
					star = (rare == 1? '' : `${rare}★+ | ` );

				return `${star}${cond.param2}张<kqud title="不包括此卡">或以上</kqud>`;
			},
			8: (card, skill, cond) => {
				if(~~cond.param1 > 0 && cond.param2 > 0) _l('Cond 8 Double');

				if(~~cond.param1 > 0)
					return `自身 | 发动时 | HP${cond.param1}%或以上`;
				else
					return `自身 | 发动时 | HP${cond.param2}%以下`;
			},
			9: false,
			10: (card, skill, cond) => {
				if(~~cond.param1 > 0 && cond.param2 > 0) _l('Cond 10 Double');

				if(~~cond.param1>0)
					return `${cond.param1}回合或以上`;
				else
					return `${cond.param2}回合以下`;
			},
			11: false,
			12: false,
			13: false,
			14: false,
			15: false,
			16: false,
			17: false,
			18: false,
			19: false,
			20: false,
			21: false,
			22: false,
			23: (card, skill, cond) => {
				if(~~cond.param3) _l('Cond 23 Double');

				return `我方 | ${shower.roleDebuff[valuer.roleDebuff[cond.param1]]}
					${cond.param2 ? `或${shower.roleDebuff[valuer.roleDebuff[cond.param2]]}` : ''}
					状态`;
			},
			24: (card, skill, cond) => {
				if(~~cond.param3) _l('Cond 23 Double');

				return `我方 | ${shower.roleDebuff[valuer.roleDebuff[cond.param1]]}
					${cond.param2 ? '或'+shower.roleDebuff[valuer.roleDebuff[cond.param2]] : ''}
					状态`;
			},
			25: false,
			26: false,
			27: false,
			28: false,
			29: false,
			30: false,
			31: false,
			32: false,
			33: false,
			34: false,
			35: false,
			36: false,
			37: (card, skill, cond) => {
				if(~~cond.param2) _l('Cond 37 Double');

				return `自身 | ${shower.roleBuff[valuer.roleBuff[cond.param1]]}状态`;
			},
			38: (card, skill, cond) => {
				if(~~cond.param2) _l('Cond 38 Double');

				return `目标 | ${shower.roleBuff[valuer.roleBuff[cond.param1]]}状态`;
			},
			39: false
		};
	};

};