let quotes = [
"Looking for something is a waste of time, losing something, now that's an art form.",
"An open house is like a garage sale for criminals",
"Creating a website is a lot like raising children, it takes forever and they are ungrateful",
"If you close your eyes you can no longer see clearly",
"Updating file names is about as much fun as it sounds",
"Working 20 hours a week is for chumps...and Brian",
"HTML, the way to make websites before websites wanted to be made",
"\"Wait! We're NOT getting paied\" -Some intern NOT at Lockheed",
"Here at work we get lots of things done. In fact yesterday I sent one whole email! Now that's progress",
"11",
"12",
"13",
"14",
"15",
"16",
"17",
"18",
"19",
"20",
"21",
"22",
"hi",
"Working 20 hours a week is for chumps...and Brian",
"hi",
"Quote of the day more like NO of the day!",
"27",
"28",
"29",
"30",
"31",
"32",
"33"
];

function UpdateText()
{
    document.getElementById("dayText").innerHTML = GetQuote();
}

function GetQuote()
{
    var today = new Date();
    var date = today.getDate()-2;

    return "-" + quotes[Math.min(quotes.length - 1, date)];
}

document.onload = function () {
    
}
