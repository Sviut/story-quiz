const express = require('express')
const bodyParser = require('body-parser')
const { Telegraf } = require('telegraf')
const cors = require('cors')

const server = express()
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.use(express.json())

const port = 3000
const bot = new Telegraf('1580851464:AAGr-0IO3LLKdxqw74NRo4cTMg_3KJsPYo0')
const CHAT_ID = '-597719238'

server.post('/new', (req, res) => {
	const { name, phone, quiz } = req.body
	const answers = quiz.map(quiz => `${quiz.title}: ${quiz.answer}`).join('\r\n')
	bot.telegram.sendMessage(CHAT_ID, `Имя: ${name}\nТелефон: ${phone}\n-------------------------------------\n${answers}`)
})

server.listen(port, () => {
	console.log(`SERVER STARTED - http://localhost:${port}`)
})
