
let quotes = 
["Looking for something is a waste of time, losing something, now that's an art form.",
"An open house is like a garage sale for criminals",
"Creating a website is a lot like raising children, it takes forever and they are ungrateful",""];

function UpdateText()
{
    document.getElementById("dayText").innerHTML = GetQuote();
}

function GetQuote()
{
    var today = new Date();
    var date = today.getDate();

    return quotes[Math.min(quotes.length - 1, date)];
}