const quoteText = document.querySelector('.quote-text');
const authorText = document.querySelector('.author-text');
const btnTwitter = document.querySelector('.btn-twitter');
const btnNewquote = document.querySelector('.btn-newQuote');

//to get a quote from api
async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    var arrayRandom = Math.floor(Math.random() * data.length);
    quoteText.innerText = data[arrayRandom].text;
    authorText.innerText = data[arrayRandom].author;

  } catch (error) {
    console.log("Theres a error." + error);
  }
}

btnNewquote.addEventListener('click', getQuote);

// onload
getQuote();
