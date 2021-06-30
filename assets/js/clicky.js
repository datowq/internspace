var point = 0;
var clicks = 0;
var count = 0;
var threshold = 10;
var line = 2;
var increment = 0.25;

function clicky(multiplier) {
    point += increment * multiplier;
    clicks++;
    console.log(clicks, point);
    document.getElementsByTagName("p")[1].firstChild.data = point;
    if(line <= 10) {
        reveal(threshold, line);
    }
}

function reveal(min, lineNum) {
    if(clicks >= min) {
        document.getElementById('line'+line).style.animation = "fadeIn 0.6s ease";
        document.getElementById('line'+line).style.animationFillMode = "forwards";
        document.getElementById('line'+line).style.pointerEvents = "all";
        count =+ 10;
        threshold = 10*count;
        line++;
    }
}

