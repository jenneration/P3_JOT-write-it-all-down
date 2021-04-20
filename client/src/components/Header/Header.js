// import { STATES } from 'mongoose';
 import React,{ useState, useEffect} from 'react';
// import {useDispatch} from "react-redux";
// import {Redirect, useHistory} from "react-router-dom";
const Header = ()=> {
    const[user, setUser] = useState([]);
    useEffect(()=>{
        getUser()
    },[])
     function getUser(){
        const user = JSON.parse(localStorage.getItem("user"))
        setUser(user)
     }
    const logout = ()=>{
        localStorage.clear();
        window.location.href="/login";
    }
    return(
        <nav class="navbar navbar-dark bg-primary">
            <div className="row col-12 d-flex justify-content-center text-white align-self-center">
            <span className="h3 align-self-center">The-JAMM</span>
            {user ? (
                <div className="profile-head align-right">
                    
                    <button className="btn btn-primary" style={{float: "right"}} onClick={logout}> logout</button>
                    <h6 className="display-flex-end">{user.name}</h6>
                 </div>
            ) : (
                <div className="ml-auto"> <button className="btn btn-light display-flex-end" >login/register</button></div>
            )}
            </div>
        </nav>
    )
}
export default Header;