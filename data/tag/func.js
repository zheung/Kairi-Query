let skillTypes = ['awaken', 'normal', 'support'];

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
	}
};