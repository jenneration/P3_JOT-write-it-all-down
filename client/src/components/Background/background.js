import React from "react";
import background from "../../assets/background.jpeg";

function Background() {
    return (
        <div

            style={{
                backgroundImage: `url(${background}1)`,
                height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: "-1",
                opacity: "0.5"
            }} >




        </div>
    )
}




export default Background;