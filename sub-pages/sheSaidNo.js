const quoteContent = document.querySelector(".quote-container .quote-content");
const quoteAuthor = document.querySelector(".quote-container .quote-author");
const newQuoteButton = document.querySelector(
  ".quote-container .new-quote-button"
);

const updateQuote = (data) => {
  quoteContent.innerHTML = data.content;
  quoteAuthor.innerHTML = data.author;
};

const nextQuote = () => {
  fetch("https://api.quotable.io/random?tags=love")
    .then((response) => response.json())
    .then((data) => {
      updateQuote(data);
    });
};

nextQuote();

newQuoteButton.addEventListener("click", nextQuote);

