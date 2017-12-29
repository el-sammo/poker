/**
 * Players.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
		fName: {
			type: 'string',
			required: true
		},
		lName: {
			type: 'string',
			required: true
		},
		username: {
			type: 'string',
			required: true
		}
  }
};

