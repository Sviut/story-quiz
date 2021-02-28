import axios from 'axios'

const url = 'api/'

export async function sendLead (lead) {
	try {
		await axios.post(url + 'new', lead)
	} catch (e) {
		console.log(e)
	}
}
