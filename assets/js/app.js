const got = require('got');

function detectRoute() {
	const path = location.pathname;

	switch(path) {
		case '/':
			buildLobby();
			break;
		case 'account':
			showAccount();
			break;
		default:
			buildLobby();
	}
}

detectRoute();


function buildLobby() {
	let mttTourns;
	let sngTourns;
	 
	const mttOptions = {
		host: '192.168.0.47',
		port: 7657,
		path: '/tournaments/openMTTs',
		json: true
	};

	(async () => {
		try {
			const res = await got(mttOptions);
			mttTourns = res.body;
console.log('mttTourns:');
console.log(mttTourns);
		} catch (error) {
			console.log('ERROR:' + error.message);
		}
	})();

	const sngOptions = {
		host: '192.168.0.47',
		port: 7657,
		path: '/tournaments/openSNGs',
		json: true
	};

	(async () => {
		try {
			const res = await got(sngOptions);
			sngTourns = res.body;
console.log('sngTourns:');
console.log(sngTourns);
		} catch (error) {
			console.log('ERROR:' + error.message);
		}
	})();

}
