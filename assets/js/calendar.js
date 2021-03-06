const daysofweek = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]
const startDateForMonth = [3]
let monthStartIndex = 0

var buttonDays = []
var buttonText

function DrawCalendar()
{
    let menu = document.getElementById('calendar_week')

	//draw days of the week
	for (let i = 0; i < daysofweek.length; i++) {
		let li = document.createElement("li")
		li.textContent = daysofweek[i]
		menu.appendChild(li)
	}

	menu = document.getElementById("calendar_day")

	//draw days of the week
	for (let i = startDateForMonth[monthStartIndex] * -1; i <= 31; i++) {
		if (i == 0) i++

        if(i > 0)
        {
            buttonDays[i - 1] = new Button(i)

            let li = document.createElement('li')
            li.textContent = i
            li.addEventListener("mouseleave", ClearCalendarTooltip)
            li.addEventListener("mouseover", function() { 
                DrawCalendarTooltip(buttonDays[i-1].ShowEvents()), 
                false})

            function handleEvent(passedInElement) {
                return function() {
                    passedInElement.AddEvent(passedInElement.getDay())
                }
            }
            li.onclick = handleEvent(buttonDays[i - 1])

            let date = new Date()
            let currentDay = date.getDate()
            if(i == currentDay)
            {
                li.className += "calendar-today"    
            }

            menu.appendChild(li)
        }
        else
        {
            let space = document.createElement('li')
            space.innerHTML = ''
            menu.appendChild(space)
        }
    }
}

function DrawCalendarTooltip(tosay)
{
    var event = event || window.event

    //maybe put a delay or animation here before drawing so that it is not flashing all the time
    let tooltip = document.getElementById('calendar_tooltip')
    tooltip.style.visibility = "visible"
    const x = event.clientX - 100
    const y = event.clientY - 150

    tooltip.innerHTML = tosay

    tooltip.style.transform = `translateX(${x}px) translateY(${y}px)`
}

function ClearCalendarTooltip()
{
    let tooltip = document.getElementById('calendar_tooltip')
    tooltip.style.visibility = "hidden"
}

class Button
{
    constructor(dayNum)
    {
        this.day = dayNum
        this.events = []
        this.eventIndex = 0
    }

    AddEvent(eventName)
    {
        this.events[this.eventIndex] = eventName
        this.eventIndex++
        DrawCalendarTooltip(this.ShowEvents())
    }

    ShowEvents()
    {
        let tosay = ""
        for(let i = 0; i < this.events.length; i++)
        {
            //show events on tooltip
            tosay += this.events[i] + "\n"
        }
        return tosay
    }

    getDay()
    {
        return this.day
    }
}

ClearCalendarTooltip()
DrawCalendar()