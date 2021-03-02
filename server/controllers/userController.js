const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const uuid = require('uuid')
const ApiError = require('../error/apiError')

const { User } = require('../models/models')

const generateJwt = (id, email) => {
	return jwt.sign(
		{ id, email },
		process.env.SECRET_KEY,
		{ expiresIn: '24h' },
	)
}

class UserController {
	async registration (req, res, next) {
		const { email, password } = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Incorrect email or password'))
		}
		const candidate = await User.findOne({ where: { email } })
		if (candidate) {
			return next(ApiError.badRequest('User with this email already exists'))
		}
		const hashPassword = await bcrypt.hash(password, 5)
		const userId = uuid.v4()
		const user = await User.create({ id: userId, email, password: hashPassword })
		const token = generateJwt(user.id, user.email)
		return res.json({ token })
	}

	async login (req, res, next) {
		const { email, password } = req.body
		const user = await User.findOne({ where: { email } })
		if (!user) {
			return next(ApiError.internal('User not found'))
		}
		
		let comparePassword = bcrypt.compareSync(password, user.password)
		if (!comparePassword) {
			return next(ApiError.internal('Incorrect password'))
		}
		const token = generateJwt(user.id, user.email)
		return res.json({ token })
	}

	async check (req, res, next) {
		const { id } = req.query
		if (!id) {
			return next(ApiError.badRequest('Don\'t have ID'))
		}
		res.json(id)
	}
}

module.exports = new UserController()
