export async function sendLead (lead) {
	try {
		await fetch('https://localhost:3000/new', {
			method: 'POST',
			body: JSON.stringify(lead),
		})
	} catch (e) {
		console.log(e)
	}
}
