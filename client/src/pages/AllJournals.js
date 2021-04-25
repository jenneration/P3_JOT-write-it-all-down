import axios from 'axios';
import React, { Component, useState} from 'react';
 import Wrapper from "../components/Wrapper";
 import { Link } from "react-router-dom";
// import Create from "../components/Create";
 import Card from '../components/Card/card';
// import axios from 'axios';


// //TEST JSON FILE
// import user from "../user.json";

class  AllJournals extends Component{
    state={
        userId:"",
        token:"",
        journalId:"",
        name:"",
        results :[],
        journalName:""

    };
    // user = JSON.parse(localStorage.getItem("user"));
    componentDidMount(){
        // API.getBooks("harry potter")
        // .then(res=>
        //   this.setState({results: res.data.items}))
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
           this.setState({
                userId: user.id,
                token: user.token,
                name: user.name
            })
            console.log(user);
            // creating header
            const apiUrl = "http://localhost:3001/user/"
            const authAxios = axios.create({
                baseURL: apiUrl,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                    userId: user.id
                }
            })
            authAxios.get(`journal/${user.id}`)
            .then(result=>{
                console.log(result.data);
                this.setState({
                    results:result.data
                })
            })

        }
        
     }; 
     // handing input change
     handleChange = (e) => {
        const { name, value } = e.target
           this.setState({
                [name]: value,
        })
    }
      


     // function to create the article
     createEntry = ()=>{

     }
     // function to create new journa
     addJournal= (e)=>{
         e.preventDefault();
         const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            const apiUrl = "http://localhost:3001/user/"
            const authAxios = axios.create({
                baseURL: apiUrl,
                headers: {
                    Authorization: `Bearer ${user.token} `,
                    userId: user.id
                }
            })
            if (this.state.journalName === "") return;
            authAxios.post('journal', this.state)
            .then(res =>console.log(res))
            .catch(error=> console.log(error));
        }
     }
     

  render(){
     return( 
         <Wrapper>
             <div className="input-container">
             <form className="form-container align-center">
                <div className="form srarch-from">   
                        <input required 
                        onChange={this.handleChange}
                        value = {this.state.journalName}
                         type="text" className="journal-input"
                          placeholder="name of the journal"
                        name="journalName"
                        id = "journalName"
                         ></input>
                        <button className="btn btn-primary search-button text-capitalize" type ="submit"
                         onClick={this.addJournal}>save</button>   
                </div>
            </form>
             </div>


             {this.state.results.length ? (
            <div className="card-container">
                {this.state.results.map(result=>(
                    <div className="card">
                        <div className="card-title">
                            <h5 className="text-center m-2 text-capitalize">{result.name}</h5>
                        </div>
                        <div className="card-body">
                        <h6 ><Link to={"/books/" + result._id}><strong>See all jots</strong> </Link></h6>
                            <h6><Link to={"/create/"+ result._id}><a className="text-capitalize text-center" onClick={this.createEntry} id ={result._id}>jot a new entry</a></Link> </h6>
                        </div>
                        <div className="card-footer">
                        <button className="btn btn-primary" onClick={this.deleteJournal} id ={result._id}>Delete</button> 
                        </div>
                        
                     </div>
                ))}
            </div>
             ):(<div>
                 <h4>You don't have any journals yoy can create here</h4>
             </div>)}

     </Wrapper>)
  };
};
export default AllJournals;
