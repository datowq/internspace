const monthOffset = 1

async function updateQOTD(day, month, year) {
	let quotesResponse = await fetch("https://quotes.rest/qod?category=funny&language=en")
	let quotesQOTD = await quotesResponse.json()
	let quote = quotesQOTD.contents.quotes[0]
	const qotdTitleElement = document.getElementById("qotdTitle")
	const qotdElement = document.getElementById("qotd")
	const qotdAuthorElement = document.getElementById("qotdAuthor")
	qotdTitleElement.innerHTML = `Quote of the Day for ${month}/${day}/${year}`
	qotdElement.innerHTML = `"${quote.quote}"`
	qotdAuthorElement.innerHTML = quote.author
	//curl -X GET "https://quotes.rest/qod?category=funny&language=en" -H "accept: application/json"
}

function StartQOTD() {
	let date = new Date()
	let day = date.getDate()
	let month = date.getMonth() + monthOffset
	let year = date.getFullYear()
	qotd = updateQOTD(day, month, year)
		.catch((err) => console.warn)
	setInterval(() => {
		date = new Date()
		const currentDay = date.getDate()
		if (day != currentDay) {
			day = currentDay
			month = date.getMonth() + monthOffset
			year = date.getFullYear()
			qotd = updateQOTD(day, month, year)
				.catch((err) => console.warn)
		}
	}, 1000)
}

StartQOTD()
