//function buildLobby() {
//	const got = require('got');
//
//	let mttTourns;
//	let sngTourns;
//	 
//	const mttOptions = {
//		host: '192.168.0.47',
//		port: 7657,
//		path: '/tournaments/openMTTs',
//		json: true
//	};
//
//	(async () => {
//		try {
//			const res = await got(mttOptions);
//			mttTourns = res.body;
//console.log('mttTourns:');
//console.log(mttTourns);
//		} catch (error) {
//			console.log('ERROR:' + error.message);
//		}
//	})();
//
//	const sngOptions = {
//		host: '192.168.0.47',
//		port: 7657,
//		path: '/tournaments/openSNGs',
//		json: true
//	};
//
//	(async () => {
//		try {
//			const res = await got(sngOptions);
//			sngTourns = res.body;
//console.log('sngTourns:');
//console.log(sngTourns);
//		} catch (error) {
//			console.log('ERROR:' + error.message);
//		}
//	})();
//
//}
