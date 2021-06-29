const daysofweek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
const startDateForMonth = [1]
let monthStartIndex = 0

function DrawCalendar() {
	let menu = document.getElementById("calendar_week")

	//draw days of the week
	for (let i = 0; i < daysofweek.length; i++) {
		let li = document.createElement("li")
		li.textContent = daysofweek[i]
		menu.appendChild(li)
	}

	menu = document.getElementById("calendar_day")

	//draw days of the week
	for (let i = startDateForMonth[monthStartIndex] * -1; i <= 30; i++) {
		if (i == 0) i++

		if (i > 0) {
			let li = document.createElement("li")
			li.textContent = i

			menu.appendChild(li)
		} else {
			let space = document.createElement("li")
			space.innerHTML = ""
			menu.appendChild(space)
		}
	}
}

DrawCalendar()
