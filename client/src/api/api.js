import axios from 'axios'

export async function sendLead (lead) {
	try {
		await axios.post('http://localhost:3000/new', lead)
	} catch (e) {
		console.log(e)
	}
}
