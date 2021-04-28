import React from "react"
import FadeIn from 'react-fade-in'
import quotes from "../quotes.json";
import axios from "axios";




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
       
   // save quote to database
   const addQuote = (e) => {
      const apiUrl = "http://localhost:3001/quote/";
      const user = JSON.parse(localStorage.getItem("user"))
      const authAxios = axios.create({
          baseURL: apiUrl,
          headers: {
              Authorization: `Bearer ${user.token} `,
              userId: user.id
          }
      })
      const quote = {quote:navQuote}
      authAxios.post("create",quote )
          .then(res => console.log(res))
          .catch(err => console.log(err));
          //clearInput();
   }

       return (
          <FadeIn transitionDuration="6000">
    <nav className="navbar navbar-light bg-dark">
  <span className="navbar-brand mb-0 h1" style={{fontSize:"30px", fontFamily:"caveat", overflow:"auto", display:"block", color:"white"}}>{navQuote}</span>
  <button style={{width: "125px", height:"50px", borderRadius:"5px", background:"black", color:"white", display:"block", marginRight:"auto"}} onClick={addQuote}>Save Quote</button>
</nav>

</FadeIn>

       )








    }

    export default QuoteHeader;