/**
 * PlayersController
 *
 * @description :: Server-side logic for managing players
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	byUsername: function(req, res) {
		Players.find({username: req.params.id}, {username: true, fName: true, lName: true}).sort({
			fName: 'asc', lName: 'asc'
		}).limit(20).then(function(results) {
			res.send(JSON.stringify(results));
		}).catch(function(err) {
			res.json({error: 'Server error'}, 500);
			console.error(err);
			throw err;
		});
	},
};

