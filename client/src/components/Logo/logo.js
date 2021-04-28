import React from "react";
import logotrans from "../../assets/logotrans.png";
// import background1cr from "../../assets/background1cr.png";
import "./logo.css";

function Logo(props) {
    return (
        <div>
            <div className="card card-logo bg-transparent border-0" >
                <img className="card-img-top img-fluid card-img-logo" src={logotrans} style={{ width: "500px" }} alt="Card image cap" />
            </div>


            {/* <img className="landing-bg" src={background1cr} /> */}
            {/* <div className="bg-div">
            </div> */}
        </div >
    )


}


export default Logo;