var point = 0;
var clicks = 0;
var count = 0;
var threshold = 10;
var line = 2;
var increment = 0.25;

function mainClick(multiplier, lineIndex, amountOfUpgrades, ...images) {
    point += increment * multiplier;
    clicks++;
    console.log(clicks, point);
    document.getElementsByTagName("p")[1].firstChild.data = point;
    if(line <= 10) {
        reveal(threshold, line);
    }

    let menu = document.getElementById("line" + lineIndex)
    if(menu.children.length <= amountOfUpgrades)
    {
        let btn = document.createElement('button')
        btn.className = "btn"
        btn.onclick = upgradeClick
    
        let img = document.createElement('img')
        //img.className = images[i]
        btn.appendChild(img)
    
        menu.appendChild(btn)
    }
}
function upgradeClick()
{
    //upgrade click things
    console.log("testing log")
}

function reveal(min, lineNum ) {
    if(clicks >= min) {
        document.getElementById('line'+line).style.animation = "fadeIn 0.6s ease";
        document.getElementById('line'+line).style.animationFillMode = "forwards";
        document.getElementById('line'+line).style.pointerEvents = "all";
        count += 10;
        threshold = 10*count;
        line++;
    }
}

function setCookie()
{
    let date = new Date()
    let changedDate = date.getDay
    document.cookie = "count=1; expires="+ changedDate +"; path=/; domain=lifewire.com";
}

