module.exports = ($) => {
	return (serv, card) => {
		return $.dicts[serv].shower.skillKind[(card.skill.awaken[0] || card.skill.normal[0]).info.kind];
	};
};