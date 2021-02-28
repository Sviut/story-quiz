import axios from 'axios'

const url = 'http://localhost:3000/api'

export async function sendLead (lead) {
	try {
		await axios.post(url + '/new', lead)
	} catch (e) {
		console.log(e)
	}
}
