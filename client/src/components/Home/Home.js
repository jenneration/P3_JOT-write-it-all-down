import React,{useState} from 'react';
import axios from 'axios';
import {API_BASE_URL} from '../../constants/apiContants';
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
        setState(prevState => ({
            ...prevState,
            [name] : value,
            userId: user.id,
            token: user.token,
            name:user.name
        }))
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
        if(state.journal==="")return;
        axios.get(`http://localhost:3001/user/journal/${state.userId}`)
        .then(res =>
            console.log(res)
        )
        .catch(err =>{
            console.log(err)
        })
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