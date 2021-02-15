export async function sendLead (lead) {
	try {
		await fetch('https://localhost:3000/new', {
			method: 'POST',

			headers: {
				'Access-Control-Allow-Origin': '*',
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify(lead),
		})
	} catch (e) {
		console.log(e)
	}
}
