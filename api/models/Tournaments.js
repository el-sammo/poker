/**
 * Tournaments.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

		name: {
			type: 'string',
			required: true
		},
		open: {
			type: 'boolean',
			required: true
		},
		start: {
			type: 'string',
			required: true
		},
		buyin: {
			type: 'float',
			required: true
		},
		fee: {
			type: 'float',
			required: true
		},
		blinds: {
			type: 'integer',
			required: true
		},
		mix: {
			type: 'integer',
			required: true
		},
		max: {
			type: 'integer',
			required: true
		}
  }

};

