const express = require('express')
const cors = require('cors')
const serveStatic = require('serve-static')
const path = require('path')
const history = require('connect-history-api-fallback')
const QUIZ = require('./quiz')
const bodyParser = require('body-parser')
const { Telegraf } = require('telegraf')

const app = express()
const bot = new Telegraf('1580851464:AAGr-0IO3LLKdxqw74NRo4cTMg_3KJsPYo0')
const CHAT_ID = '-597719238'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors())

app.get('/api/ping', function (req, res) {
	res.send('<h1>Pong!</h1>')
})

app.get('/api/quiz', (req, res) => {
	res.json({ quiz: QUIZ })
})

app.post('/api/new', function (req, res) {
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

app.use('/images', express.static(path.join(__dirname, 'images')))
// app.use(serveStatic((__dirname + '/images/')))

bot.launch()

const staticFileMiddleware = express.static(path.join(__dirname))
app.use(staticFileMiddleware)
app.use(history())
app.use(staticFileMiddleware)

if (process.env.NODE_ENV === 'production') {
	app.use(serveStatic((__dirname + '/public/')))
	app.use(serveStatic((__dirname + '/panel/')))

	app.get('/panel/*', (req, res) => res.sendfile(__dirname + '/panel/index.html'))
	app.get('*', (res, req) => res.sendfile(__dirname + '/public/index.html'))
}

app.listen(process.env.PORT || 5000,
	() => console.log('Server is running...'))
