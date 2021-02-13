const bodyParser = require('body-parser')
const { Telegraf } = require('telegraf')
const express = require('express')
const app = express()

const bot = new Telegraf('1580851464:AAGr-0IO3LLKdxqw74NRo4cTMg_3KJsPYo0')
const CHAT_ID = '-597719238'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/ping', function (req, res) {
	res.send('<h1>Pong!</h1>')
})

app.post('/new', function (req, res) {
	const { name, phone, quiz } = req.body
	const answers = quiz.map(quiz => `${quiz.title}: ${quiz.answer}`).join('\r\n')
	bot.telegram.sendMessage(CHAT_ID, `Имя: ${name}\nТелефон: ${phone}\n-------------------------------------\n${answers}`)
	res.end().status(200)
})

app.listen(process.env.PORT || 3000,
	() => console.log('Server is running...'))
