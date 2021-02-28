const QUIZ = [
	{
		type: 'first',
		image: 'http://localhost:5000/images/lazer.jpg',
	},
	{
		type: 'question',
		title: 'Как Вы относитесь к лазерной эпиляции?',
		answers: [
			{ text: 'Давно хочу попробовать' },
			{ text: 'Делаю в салоне, мне нравится' },
			{ text: 'Боюсь, что это больно' },
		],
	},
	{
		type: 'question',
		title: 'Что для Вас важно при выборе студии эпиляции?',
		answers: [
			{ text: 'Безопасный аппарат' },
			{ text: 'Наличие медицинского образования у мастера' },
			{ text: 'Невысокая стоимость процедуры' },
		],
	},
	{
		type: 'question',
		title: 'Какую зону Вы бы хотели сделать первой?',
		answers: [
			{ text: 'Голени' },
			{ text: 'Подмышки' },
			{ text: 'Бикини' },
			{ text: 'Бикини глубокое + подмышки (комплекс S)' },
			{ text: 'Другую зону' },
		],
	},
	{
		type: 'form',
	},
	{
		type: 'final',
	},
]

module.exports = QUIZ
