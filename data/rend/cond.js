module.exports = async($) => {
	return async(serv) => {
		let shower = $.dicts.shower, valuer = $.dicts.valuer;

		return {
			1: async(card, skill, cond) => {
				let u = ~~cond.param1, d = ~~cond.param2;

				if(u==0) u=1;
				if(d==0) d=4;

				if(u==d)
					return `${u} Chain`;
				else
					return `${u}~${d} Chain`;
			},
			2: async(card, skill, cond) => {
				if(~~cond.param2) L('Cond 2 Double');

				return `目标 | ${shower.attr[valuer.attr[cond.param1]]}属性`;
			},
			3: async(card, skill, cond) => {
				if(~~cond.param2) L('Cond 3 Double');

				return `目标 | ${shower.roleDebuff[valuer.roleDebuff[cond.param1]]}状态`;
			},
			4: async(card, skill, cond) => {
				return `${cond.param1}%机率`;
			},
			5: async(card, skill, cond) => {
				return `${shower.attr[valuer.attr[cond.param1]]} | ${cond.param2}张<samp title="不包括此卡">或以上</samp>`;
			},
			6: async(card, skill, cond) => {
				return `${shower.skillKind2[valuer.skillKind[cond.param1]]} | ${cond.param2}张<samp title="不包括此卡">或以上</samp>`;
			},
			7: async(card, skill, cond) => {
				let rare = valuer.rare[cond.param1],
					star = (rare == 1? '' : `${rare}★+ | ` );

				return `${star}${cond.param2}张<samp title="不包括此卡">或以上</samp>`;
			},
			8: async(card, skill, cond) => {
				let u = ~~cond.param1, d = ~~cond.param2;

				if(u == d)
					return `自身 | 发动时 | HP<br>${u}%`;
				else if(u && !d)
					return `自身 | 发动时 | HP<br>${u}%或以上`;
				else if(!u && d)
					return `自身 | 发动时 | HP<br>${d}%或以下`;
				else
					return `自身 | 发动时 | HP<br>${u}%~${d}%`;
			},
			9: false,
			10: async(card, skill, cond) => {
				let u = ~~cond.param1, d = ~~cond.param2;

				if((u && d && u != d) || (!u && !d))
					L('Cond 10 New Type! '+card.id+' '+card.info.name+' '+skill.id+' '+u+' '+d);

				if(u == d)
					return `第${u}回合`;
				else if(u && !d)
					return `${u}回合或以上`;
				else if(!u && d)
					return `${d}回合或以下`;
			},
			11: false,
			12: false,
			13: false,
			14: async(card, skill, cond) => {
				let u = ~~cond.param1, d = ~~cond.param2;
				if(d >= 28) d = 0;

				if(u == d)
					return `我方 | <samp title="应该不包括此卡,请帮忙验证">出牌数</samp><br>共${u}张`;
				else if(u && !d)
					return `我方 | <samp title="应该不包括此卡,请帮忙验证">出牌数</samp><br>${u}张或以上`;
				else if(!u && d)
					return `我方 | <samp title="应该不包括此卡,请帮忙验证">出牌数</samp><br>${d}张或以下`;
				else
					return `我方 | <samp title="应该不包括此卡,请帮忙验证">出牌数</samp><br>${u}~${d}张`;
			},
			15: false,
			16: false,
			17: async(card, skill, cond) => {
				return `我方 | ${cond.param1}Cost | ${cond.param2}张<samp title="应该不包括此卡,请帮忙验证">或以上</samp>`;
			},
			18: false,
			19: false,
			20: false,
			21: false,
			22: false,
			23: async(card, skill, cond) => {
				if(~~cond.param3) L('Cond 23 Double');

				return `我方 | ${shower.roleDebuff[valuer.roleDebuff[cond.param1]]}
					${cond.param2 ? `或${shower.roleDebuff[valuer.roleDebuff[cond.param2]]}` : ''}
					状态`;
			},
			24: async(card, skill, cond) => {
				if(~~cond.param3) L('Cond 23 Double');

				return `我方 | ${shower.roleDebuff[valuer.roleDebuff[cond.param1]]}
					${cond.param2 ? '或'+shower.roleDebuff[valuer.roleDebuff[cond.param2]] : ''}
					状态`;
			},
			25: async(card, skill, cond) => {
				if(~~cond.param2) L('Cond 25 Double');

				return `我方 | ${shower.roleBuff[valuer.roleBuff[cond.param1]]}状态`;
			},
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
			37: async(card, skill, cond) => {
				if(~~cond.param2) L('Cond 37 Double');

				return `自身 | ${shower.roleBuff[valuer.roleBuff[cond.param1]]}状态`;
			},
			38: async(card, skill, cond) => {
				if(~~cond.param2) L('Cond 38 Double');

				return `目标 | ${shower.roleBuff[valuer.roleBuff[cond.param1]]}状态`;
			},
			39: false
		};
	};
};