module.exports = () => {
	let data = require(path.join(_d, 'data', 'data.json'));

	let app = require('koa')(), router = require('koa-router')(), static = require('koa-static');

	let filter = require(path.join(_d, 'libs', 'website', 'filter'));

	app.use(static(path.join(_d, 'page')));

	router.get('/q', function() {
		let query;

		if(this.originalUrl != this._matchedRoute)
			query = qs.parse(qs.unescape(this.originalUrl.replace('/q\?', '')));

		let result = filter(data, query, [
			'id',
			['info.name', 'name'],
			['info.title', 'title'],
			['figure.hp.max', 'hp'],
			['figure.ad.max', 'ad'],
			['figure.ap.max', 'ap'],
			['figure.hq.max', 'hq'],
			['skill.normal.0.info.cost', 'cost'],
			['skill.normal.0.info.job', 'job', 'd.shower.job'],
			['skill.normal.0.info.type', 'kind', 'd.shower.skillKind'],
			['info.rare', 'rare'],
			['skill.normal.0.info.attr', 'attr', 'd.shower.attr'],
			['this', 'skill', 'f.skill']
		]);

		this.body = result;
	});

	router.post('/wh', function() {
		_l('webhook');

		require('child_process').spawn('sh', ['./webhook.sh']);

		this.body = 'webhook';
	});

	let time = new Date();
	router.get('/t', function() { this.body = time; });

	app.use(router.routes()).use(router.allowedMethods());

	app.listen(80, '0.0.0.0');

	_l('website start on 0.0.0.0:80');
};