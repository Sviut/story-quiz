const sequelize = require('../db')
const { STRING, UUIDV4 } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: UUIDV4, primaryKey: true },
	email: { type: STRING, unique: true },
	password: { type: STRING },
})

module.exports = { User }
