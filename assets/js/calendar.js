const daysofweek = ["Mo","Tu","Wed","Th","Fri","Sat","Su"]
const startDateForMonth = [1]
let monthStartIndex = 0

let buttonDays = []
let buttonIndex = 0

function DrawCalendar()
{
    let menu = document.getElementById('calendar_week')

    //draw days of the week
    for(let i = 0; i < daysofweek.length; i++)
    {
        let li = document.createElement('li')
        li.textContent = daysofweek[i]
        menu.appendChild(li)
    }

    menu = document.getElementById('calendar_day')

    //draw days of the week
    for(let i = startDateForMonth[monthStartIndex] * -1; i <= 30; i++)
    {
        if(i == 0) i++

        if(i > 0)
        {
            buttonDays[buttonIndex] = new Button(i)
            let buttonText = buttonDays[buttonIndex].ShowEvents()

            let li = document.createElement('li')
            li.textContent = i
            li.addEventListener("mouseleave", ClearCalendarTooltip)
            li.addEventListener("mouseover", function() { DrawCalendarTooltip(buttonText), false})

            menu.appendChild(li)

            buttonIndex++
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

//ClearCalendarTooltip(document.getElementById('calendar_tooltip'))

class Button
{
    constructor(dayNum)
    {
        this.day = dayNum
        this.events = []
    }

    ShowEvents()
    {
        let tosay = ""
        for(let i = 0; i < this.events.length; i++)
        {
            //show events on tooltip
            tosay += this.events[i] + "\n"
        }
        return this.day
    }
}

ClearCalendarTooltip()
DrawCalendar()
