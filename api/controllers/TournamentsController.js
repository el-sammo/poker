/**
 * TournamentsController
 *
 * @description :: Server-side logic for managing tournaments
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	openMTTs: function(req, res) {
		Tournaments.find({type: 'mtt', open: true}).sort({
			name: 'asc', fee: 'asc'
		}).limit(30).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
			res.json({error: 'Server error'}, 500);
			console.error(err);
			throw err;
		});
	},
	openSNGs: function(req, res) {
		Tournaments.find({type: 'sng', open: true}).sort({
			name: 'asc', fee: 'asc'
		}).limit(30).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
			res.json({error: 'Server error'}, 500);
			console.error(err);
			throw err;
		});
	},
};

