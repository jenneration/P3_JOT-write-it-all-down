import React from "react"
import quotes from "../quotes.json"




function QuoteHeader() {
   let quote = quotes[Math.floor(Math.random() * quotes.length)]
   console.log(quote);
   let navQuote = `${quote.q} ~ ${quote.a}`;
   console.log(quote.q)

//    function handleFormSubmit(event) {
//        event.preventDefault();
//        API.saveQuote({
//            title: quote.q,
//            author: quote.a

//          })
       


       return (

    <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">{navQuote}</span>
  <button style={{width: "150px"}} >Save Quote</button>
</nav>


       )








    }

    export default QuoteHeader;