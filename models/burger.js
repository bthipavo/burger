var orm = require('../config/orm.js')

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res)
		})
	},

	insertOne: function(id, burger_name, devoured, cb) {
		orm.insertOne("burgers", id, burger_name, devoured, function(res) {
			cb(res)
		})
	},

	updateOne: function(id, burger_name, devoured, cb) {
		orm.updateOne("burgers", id, burger_name, devoured, function(res) {
			cb(res)
		})
	}
}
module.exports = burger;