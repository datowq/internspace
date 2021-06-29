const daysofweek = ["Mo","Tu","Wed","Th","Fri","Sat","Su"]

function DrawCalander()
{
    let menu = document.getElementById('calander_week')

    //draw days of the week
    for(let i = 0; i < daysofweek.length; i++)
    {
        let li = document.createElement('li')
        li.textContent = daysofweek[i]
        menu.appendChild(li)
    }

    menu = document.getElementById('calander_day')

    //draw days of the week
    for(let i = 1; i <= 30; i++)
    {
        let li = document.createElement('li')
        li.textContent = i
        if(i % 7 == 0) var x = document.createElement('br')
        
        menu.appendChild(li)
        if(x != null)
        {
            menu.appendChild(x)
            x = null;
        }
    }
}

DrawCalander()