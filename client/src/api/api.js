import axios from 'axios'

export async function sendLead (lead) {
	try {
		await axios.post('https://story-quiz.herokuapp.com/new', lead)
	} catch (e) {
		console.log(e)
	}
}
