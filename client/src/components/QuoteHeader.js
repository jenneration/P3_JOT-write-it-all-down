import React from "react";
import FadeIn from "react-fade-in";
import quotes from "../quotes.json";
import axios from "axios";

function QuoteHeader() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    const navQuote = `${quote.q} ~ ${quote.a}`;

    // save quote to database
    const addQuote = (e) => {
        const apiUrl = "http://localhost:3001/quote/";
        const user = JSON.parse(localStorage.getItem("user"));
        const authAxios = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${user.token} `,
                userId: user.id,
            },
        });
        const quote = { quote: navQuote };
        authAxios
            .post("create", quote)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <FadeIn transitionDuration="6000">
            <nav className="navbar navbar-light bg-dark d-flex justify-content-center">
                <span
                    className="navbar-brand mr-1"
                    style={{
                        fontSize: "25px",
                        fontFamily: "caveat",
                        overflow: "auto",
                        // display: "inline",
                        color: "white",
                    }}>
                    {navQuote}
                </span>
                <button
                    style={{
                        width: "120px",
                        height: "40px",
                        borderRadius: "5px",
                        background: "black",
                        color: "white",
                        fontSize: "14px"
                        // display: "inline",
                        // marginRight: "auto",
                    }}
                    onClick={addQuote}>
                    Save Quote
        </button>
                <span><i class="fas fa-bookmark" style={{ fontSize: "1.75rem", color: "#dadad5", marginRight: "13px" }}></i></span>
                <span><i class="fas fa-cog" style={{ fontSize: "1.75rem", color: "#dadad5", marginRight: "13px", marginLeft: "30px" }}></i></span>
            </nav>
        </FadeIn >
    );
}

export default QuoteHeader;
