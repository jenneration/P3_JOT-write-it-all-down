import React from "react"
import FadeIn from 'react-fade-in'
import quotes from "../quotes.json"




function QuoteHeader() {
   const quote = quotes[Math.floor(Math.random() * quotes.length)]
   const navQuote = `${quote.q} ~ ${quote.a}`;
   console.log(navQuote);

//    function handleFormSubmit(event) {
//        event.preventDefault();
//        API.saveQuote({
//            title: quote.q,
//            author: quote.a

//          })
       


       return (
          <FadeIn transitionDuration="6000">
    <nav className="navbar navbar-light bg-light">
  <span className="navbar-brand mb-0 h1" style={{fontSize:"30px", fontFamily:"caveat", overflow:"auto", display:"block"}}>{navQuote}</span>
  <button style={{width: "125px", height:"50px", borderRadius:"5px", background:"black", color:"white", display:"block", marginRight:"auto"}} >Save Quote</button>
</nav>

</FadeIn>

       )








    }

    export default QuoteHeader;