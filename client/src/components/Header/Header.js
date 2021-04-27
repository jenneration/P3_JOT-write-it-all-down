import React, { useState, useEffect } from 'react';
import decode from "jwt-decode";
// import {useDispatch} from "react-redux";
// import {Redirect, useHistory} from "react-router-dom";
import { Link } from "react-router-dom";
import "bootstrap/js/src/collapse.js";
import "./header.css";



const Header = () => {
    const [user, setuser] = useState([]);
    const NewUser = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        if (NewUser) {
            setuser(prevState => ({
                ...prevState,
                userId: NewUser.id,
                token: NewUser.token,
                name: NewUser.name
            }))
        }
    }, []);
    const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
    }
    const token = NewUser?.token;
    if (token) {
        const decodedToken = decode(token);
        if (decodedToken.exp * 1000 < new Date().getTime()) {
            logout();
        }
    }

    return (
        <div>

       { NewUser?(
        <nav className = "navbar navbar-expand-lg navbar-dark bg-dark " >
                
                    <div className="navbar-brand"><Link to="/alljournals" className={window.location.pathname === "/alljournals" ? "nav-link active" : "nav-link"}>jot</Link></div>
                    <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <Link to="/alljournals" className={window.location.pathname === "/alljounsals" ? "nav-link active" : "nav-link"}>Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to="/allentries" className={window.location.pathname === "/allentries" ? "nav-link active" : "nav-link"}>AllEntries</Link>
                            </li>
                            <li className="nav-item " >
                                <Link to="/createentry" className={window.location.pathname === "/createentry" ? "nav-link active" : "nav-link"}>CreateEntry</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/quotes" className={window.location.pathname === "/quotes" ? "nav-link active" : "nav-link"}>Quotes</Link>
                            </li>
                            <li className="nav-item " >
                                <Link to="/entrypage" className={window.location.pathname === "/entrypage" ? "nav-link active" : "nav-link"}>EntryPage</Link>
                            </li>
                            <li className="nav-item" >
                                <Link to="/about" className={window.location.pathname === "/entries" ? "nav-link active" : "nav-link"}>About</Link>
                            </li>
                            <li>
                                <button id="button1" className="btn " onClick={logout}> logout</button>
                            </li>
                        </ul>
                    </div>

                </nav >
            ) : (<div></div>)}



        </div>
    )

}
export default Header;

           


//                     <div>
//                         <div className="navbar-brand"><Link to="/alljournals" className={window.location.pathname === "/alljournals" ? "nav-link active" : "nav-link"}>jot</Link></div>
//                         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                             <span className="navbar-toggler-icon"></span>
//                         </button>
//                         <div className="collapse navbar-collapse" id="navbarNav">
//                             <ul className="navbar-nav">
//                                 <li className="nav-item">
//                                     <Link to="/alljournals" className={window.location.pathname === "/alljounsals" ? "nav-link active" : "nav-link"}>Home</Link>
//                                 </li>
//                                 <li className="nav-item bg-danger">
//                                     <Link to="/allentries" className={window.location.pathname === "/allentries" ? "nav-link active" : "nav-link"}>AllEntries</Link>
//                                 </li>
//                                 <li className="nav-item bg-danger" >
//                                     <Link to="/createentry" className={window.location.pathname === "/createentry" ? "nav-link active" : "nav-link"}>CreateEntry</Link>
//                                 </li>
//                                 <li className="nav-item" >
//                                     <Link to="/quotes" className={window.location.pathname === "/quotes" ? "nav-link active" : "nav-link"}>Quotes</Link>
//                                 </li>
//                                 <li className="nav-item bg-danger" >
//                                     <Link to="/entrypage" className={window.location.pathname === "/entrypage" ? "nav-link active" : "nav-link"}>EntryPage</Link>
//                                 </li>
//                                 <li className="nav-item" >
//                                     <Link to="/about" className={window.location.pathname === "/entries" ? "nav-link active" : "nav-link"}>About</Link>
//                                 </li>
//                                 <li>
//                                     <button id="button1" className="btn btn-primary" onClick={logout}> logout</button>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div >

//                 </nav >
//             ) : (<div></div>)}



//         </div>
//     )

// }
// export default Header;