let apiQuotes = [];
//fynction for calling new quotes
function newQuote(){
    // pick a random quote from apiquotes array
    const quote = apiQuotes[Math.floor(Math.random()* apiQuotes.length)]
    console.log(quote);
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
//on load
getQuotes();