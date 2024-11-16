// sheSaidNo.js
/* thought the previous page wasn't working..*/
// Quotes and their respective authors
const quotes = [
    "When it's over, Leave! Don't keep watering the dead flowers!!",
    "Sometimes good things fall apart so better things can fall together.",
    "Letting go means to come to the realization that some people are a part of your history, but not a part of your destiny.",
    "Don't cry because it's over, smile because it happened.",
    "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not see the one which has been opened for us."
];

const authors = [
    "Soo Jie",
    "Marilyn Monroe",
    "Steve Maraboli",
    "Dr. Seuss",
    "Helen Keller"
];

// Function to generate a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteContent = document.getElementById("quoteContent");
    const quoteAuthor = document.getElementById("quoteAuthor");

    // Set new quote and author
    quoteContent.textContent = quotes[randomIndex];
    quoteAuthor.textContent = authors[randomIndex];
}

// Add event listener to button
document.getElementById("newQuoteButton").addEventListener("click", displayRandomQuote);

