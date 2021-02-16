const bodyParser = require('body-parser')
const { Telegraf } = require('telegraf')
const express = require('express')
const cors = require('cors')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

const bot = new Telegraf('1580851464:AAGr-0IO3LLKdxqw74NRo4cTMg_3KJsPYo0')
const CHAT_ID = '-597719238'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', serveStatic(path.join(__dirname, '../client/dist')))

app.get('/ping', function (req, res) {
	res.send('<h1>Pong!</h1>')
})

app.post('/new', function (req, res) {
	try {
		const { name, phone, quiz } = req.body

		const answers = quiz.map(quiz => `${quiz.title}: \n${quiz.answer}`).join('\r\n')
		bot.telegram.sendMessage(CHAT_ID, `Имя: ${name}\nТелефон: ${phone}\n-------------------------------------\n${answers}`).then(() => {
			res.end().status(200)
		})
	} catch (e) {
		console.log(e)
	}
})

bot.launch()

app.listen(process.env.PORT || 3000,
	() => console.log('Server is running...'))
