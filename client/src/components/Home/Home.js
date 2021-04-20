import React,{useState} from 'react';
import axios from 'axios';
//import { API_BASE_URL } from '../../constants/apiContants';
// import {API_BASE_URL} from '../../constants/apiContants';

function Home() {
    const [state , setState] = useState({
        journal: "",
        successMessage: null,
        userId : "",
        token :""
    })
    var user = JSON.parse(localStorage.getItem('user'));
    const handleChange = (e) => {
        const {name , value} = e.target 
        if(user){
            setState(prevState => ({
                ...prevState,
                [name] : value,
                userId: user.id,
                token: user.token,
                name:user.name
            }))
        }  
      
    }
    const addJournal = (e)=>{
        e.preventDefault();
        if(state.journal==="")return;
        axios.post('http://localhost:3001/user/journal', state)
        .then(res =>
            console.log(res)
        )
        .catch(err =>{
            console.log(err)
        })
    }
    const getJournal = (e)=>{
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user)return window.location.href ="/login";
        const apiUrl = "http://localhost:3001/user/"
        const authAxios = axios.create({
        baseURL: apiUrl,
        headers:{
            Authorization :`Bearer ${user.token} `,
            userId: user.id
         }
        })
        if(state.journal==="")return;
        // Capturing the Token
        try {
        const journal = (authAxios.get(`journal/${state.userId}`));
        console.log(journal)
        } catch (error) {
        console.log(error)
        }
     
       
    }

    return(
        <div className="mt-2">
           <form>
               <input name="journal" type="text" placeholder="name of the journal" onChange={handleChange} />
               <button type="submit" onClick={addJournal}>add journal</button>
           </form>
           <form>
              
               <button type="submit" onClick={getJournal}>get journal</button>
           </form>
        </div>
    )
}

export default Home;