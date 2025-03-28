// giving the variables the value of the elements in the html file
//const quoteContainer = document.getElementById("quote-container");
//const quoteText = document.getElementById("quote");
//const authorText = document.getElementById("author");
//const twitterBtn = document.getElementById("twitter");
//const newQuoteBtn = document.getElementById("new-quote");

 //Get Quote From API
//fetch("https://type.fit/api/quotes")
 // .then(function(response) {
  //  return response.json();
  //})
  //.then(function(data) {
  //  console.log(data);
  //});


//let apiQuotes = [];
 // Get Quote From API
// async function getQuote() {
 // const apiUrl = "https://type.fit/api/quotes";
  //try {
  //const response = await fetch( apiUrl);
    //const data = await response.json();
    //console.log(apiQuotes);
    //} catch (error) {
    // Catch Error Here
    //}
    //}

    // On Load
  //  getQuote();
  document.addEventListener("DOMContentLoaded", () => {
    const quoteContainer = document.getElementById('quote');
    const authorContainer = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const twitterButton = document.getElementById('twitter');

    const apiUrl = 'https://api.quotable.io/random'; // Using Quotable API as an example

    async function getQuote() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Failed to fetch quote.');
            
            const data = await response.json();
            quoteContainer.textContent = data.content;
            authorContainer.textContent = data.author || "Unknown";
        } catch (error) {
            quoteContainer.textContent = 'An error occurred while fetching the quote. Please try again later.';
            authorContainer.textContent = '';
            console.error('Error:', error);
        }
    }

    function tweetQuote() {
        const quote = quoteContainer.textContent;
        const author = authorContainer.textContent;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote}" - ${author}`)}`;
        window.open(twitterUrl, '_blank');
    }

    newQuoteButton.addEventListener('click', getQuote);
    twitterButton.addEventListener('click', tweetQuote);

    // Fetch a quote when the page loads
    getQuote();
});
