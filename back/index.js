module.exports = async function($, router) {
	await $.rq('init');
	await $.st(await $.pa('dist'), { defer: true });
	await $.io(await $.rq('io'));

	router.get('/api/modules', async function(ctx, next) {
		await next();

		ctx.type = 'json';

		ctx.body = [
			{ type: 'cardQuery', name: '骑士速查', only: false, dash: true },
			{ type: 'budyQuery', name: '传承速查', only: false, dash: true },
			{ type: 'iconMaker', name: '头像生成', only: false }
		];
	});

	await require('./router/cardQuery')($, router);
	await require('./router/budyQuery')($, router);
};