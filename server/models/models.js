const sequelize = require('../db')
const { STRING, UUID } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: UUID, primaryKey: true },
	email: { type: STRING, unique: true },
	password: { type: STRING },
})

module.exports = { User }
