var casper = require('casper').create({
	verbose: true,
	logLevel: 'debug',
	pageSettings: {
		loadImages: true,
		loadPlugins: false
	}
});

casper.start('http://vip.jd.com/', function() {
	this.capture('jdbeans0.png');
	if (this.exists('div.my-beans div.no-login-op a')) {
		this.echo(this.getHTML('div.my-beans div.no-login-op a', true));
	} else {
		this.echo('no got!');
		this.exit();
	}
});

casper.then(function() {
	this.wait(3000);
});

casper.then(function() {
	this.click('div.my-beans div.no-login-op a');
});

casper.then(function() {
	this.wait(3000);
});

casper.then(function() {
	this.capture('jdbeans1.png');
});

casper.then(function() {
	if (this.exists('div.thickwrap')) {
		this.echo(this.getHTML('div.thickwrap', true));
	} else {
		this.echo('no login form');
		this.exit();
	}
});
casper.then(function() {
	this.withFrame(2, function() {
//		this.echo(this.getHTML('form#formloginframe'), true);
		this.fill('form#formloginframe', {
			'loginname': 'phoenix747',
			'nloginpwd': 'phoenix737'
		}, false);
		this.click('#loginsubmitframe');
	});
});

casper.then(function() {
	this.wait(3000);
});

casper.then(function() {
	this.capture('jdbeans2.png');
});

casper.then(function() {
	if (this.exists('div.my-beans div.beans-op a')) {
		this.echo(this.getHTML('div.my-beans div.beans-op a', true));
	} else {
		this.echo('no login!');
		this.exit();
	}
});

casper.then(function() {
	this.click('div.my-beans div.beans-op a');
});

casper.then(function() {
	this.wait(3000);
});

casper.then(function() {
	this.capture('jdbeans3.png');
});

casper.thenEvaluate(function() {
	document.querySelector('#checkCode').setAttribute('value', 'XVHY');
	document.querySelector('#checkBeanBtn').setAttribute('onclick', 'vipFN.beanAjax(1,"70686f656e69783734371830")');
});

casper.then(function() {
	this.capture('jdbeans4.png');
});

casper.then(function() {
	this.click('#checkBeanBtn');
});

casper.then(function() {
	this.wait(3000);
});

casper.then(function() {
	this.capture('jdbeans5.png');
});

casper.then(function() {
	this.echo(this.getHTML('#beanchk', true));
});

casper.run();