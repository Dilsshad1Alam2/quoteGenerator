const quoteText = document.querySelector(".quote-text");
const authorText = document.querySelector(".author-text");
const btnTwitter = document.querySelector(".btn-twitter");
const btnNewquote = document.querySelector(".btn-newQuote");
const quoteContainer = document.querySelector(
  ".container container-whole-quote"
);
const loader = document.querySelector(".loader");

//to get a quote from api
async function getQuote() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    var arrayRandom = Math.floor(Math.random() * data.length);
    quoteText.innerText = data[arrayRandom].text;
    authorText.innerText = "-" + data[arrayRandom].author;
  } catch (error) {
    console.log("Theres a error." + error);
  }
}

//Tweet Quote function
function tweetQuote() {
  const quote = quoteText.innerText;
  const author = authorText.innerText;
  const tweetUrl = `https://twitter.com/intent/tweet/?text=${quote} ${author}`;
  window.open(tweetUrl, "_blank");
}

btnNewquote.addEventListener("click", getQuote);
btnTwitter.addEventListener("click", tweetQuote);

getQuote();
