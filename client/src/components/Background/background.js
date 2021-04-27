import React from "react";
import background from "../../assets/background.jpeg";

function Background() {
    return (
        <div className="text-transparent"

            style={{
                backgroundImage: `url(${background})`,
                height: "100vh",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                position: "absolute",
                left: "0",
                top: "0",
                zIndex: "-1",
                opacity: "0.5"
            }} >Hello




        </div>
    )
}




export default Background;