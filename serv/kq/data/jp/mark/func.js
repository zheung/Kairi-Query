let skillTypes = ['awaken', 'normal'];

module.exports = {
	aoe: (card) => {
		for(let st of skillTypes) {
			let first = card.skill[st][0];

			for(let skill of card.skill[st])
				for(let role of skill.role) {
					let t = { r: role.info.target, s: skill.info.target || first.info.target };

					if(role.info.type == 1)
						if(t.r == 4 || (t.r == 1 && t.s == 5))
							return true;
				}
		}

		return false;
	},
	db2: (card) => {
		for(let st of skillTypes)
			for(let skill of card.skill[st])
				for(let role of skill.role)
					if(role.info.type == 44 && role.params[1] == '2')
						return true;

		return false;
	},
	covering: (card) => {
		for(let st of skillTypes)
			for(let skill of card.skill[st])
				for(let role of skill.role)
					if(role.info.type == 64)
						return true;

		return false;
	},
	buffone: (card) => {
		for(let st of skillTypes) {
			let first = card.skill[st][0];

			for(let skill of card.skill[st])
				for(let role of skill.role) {
					let t = { r: role.info.target, s: skill.info.target || first.info.target };

					if(role.info.type == 19)
						if(t.r == 1 && t.s == 2)
							return true;
				}
		}

		return false;
	},
	stan: (card) => {
		for(let st of skillTypes)
			for(let skill of card.skill[st])
				for(let role of skill.role)
					if(role.info.type == 35)
						return true;

		return false;
	},
	debuffre: (card) => {
		for(let st of skillTypes)
			for(let skill of card.skill[st])
				for(let role of skill.role)
					if(role.info.type == 46)
						return true;

		return false;
	},
	bug: (card) => {
		let c = 2;

		for(let st of skillTypes)
			for(let skill of card.skill[st])
				for(let role of skill.role)
					if(role.info.type == 9 || role.info.type == 17)
						c--;

		return c < 0;
	},
	enchant: (card) => {
		for(let st of skillTypes)
			for(let skill of card.skill[st])
				for(let role of skill.role)
					if(role.info.type == 107)
						return true;

		return false;
	},
	chain: (card) => {
		for(let st of skillTypes)
			for(let skill of card.skill[st])
				if(skill.info.chain && (skill.info.chain != 20 && skill.info.chain != 1))
					return true;

		return false;
	},
	crit: (card) => {
		for(let st of skillTypes)
			for(let skill of card.skill[st])
				for(let role of skill.role)
					if(role.info.type == 86)
						return true;

		return false;
	},
	ex: (card) => {
		return !!card.skill['suport3'].length;
	}
};