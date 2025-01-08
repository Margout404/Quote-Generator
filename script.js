const quotecontainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const twitbut = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

let apiQuotes = [];
//loading
function loading(){
    loader.hidden=false
    quotecontainer.hidden=true
}
function complete(){
    loader.hidden=true  
    quotecontainer.hidden=false
}


//fynction for calling new quotes
function newQuote(){
    //start the loading spinner
    loading()
    // pick a random quote from apiquotes array
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
    //check if author is available
    if (quote.author==null){
        authorText.textContent = 'Unkown'
    } else {
        authorText.textContent = quote.author
    }
    //if its gonna change the style or not
    if (quote.text.length>140){
        quoteText.classList.add('long-quote')
    } else{
        quoteText.classList.remove('long-quote')
    }
    quoteText.textContent = quote.text;
    complete()
    //complete the loading symbol




}

//api quotes
async function getQuotes() {
    const apiUrl='https://jacintodesign.github.io/quotes-api/data/quotes.json'
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    }catch (error){
        //catch the error
    }
    
}

function tweetQuote(){
    const twitterUrl= `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`
    window.open(twitterUrl,'_blank')
}
//event listeners
newQuoteBtn.addEventListener('click', newQuote)

twitbut.addEventListener('click',tweetQuote)
//on load
getQuotes();
