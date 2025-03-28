// giving the variables the value of the elements in the html file
//const quoteContainer = document.getElementById("quote-container");
//const quoteText = document.getElementById("quote");
//const authorText = document.getElementById("author");
//const twitterBtn = document.getElementById("twitter");
//const newQuoteBtn = document.getElementById("new-quote");

// Get Quote From API
//fetch("https://type.fit/api/quotes")
 // .then(function(response) {
//    return response.json();
  //})
 // .then(function(data) {
 //   console.log(data);
 // });
let apiQuotes = [];
 // Get Quote From API
 async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch( apiUrl);
    const data = await response.json();
    console.log(apiQuotes);
    } catch (error) {
    // Catch Error Here
    }
    }

    // On Load
    getQuote();