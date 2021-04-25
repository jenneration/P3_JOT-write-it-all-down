import React, { useState } from 'react';
import {useParams } from "react-router-dom";
import { Row } from "../components/Grid/grid";
import { Input, TextArea, FormBtn } from "../components/Form/form";
import Wrapper from "../components/Wrapper";
import themes from "../themes";
import axios from 'axios';


function CreateEntry() {
    const [state, setState] = useState({
        journalId:"",
        title:"",
        body:"",
        userId: "",
        token: "",
        name:""
    });
    const { id } = useParams()
    const handleChange = (e) =>{
     const   user = JSON.parse(localStorage.getItem('user'));
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value,
            journalId:id,
            userId: user.id,
            token: user.token,
            name: user.name
        }))
    }
   const addArticle = (e)=>{
       e.preventDefault();
       if (state.journalId ==="" || state.userId ==="") return;
       const apiUrl = "http://localhost:3001/article/"
       const authAxios = axios.create({
           baseURL: apiUrl,
           headers: {
               Authorization: `Bearer ${state.token} `,
               userId: state.userId
           }
       })
       authAxios.post("create", state)
       .then(res => console.log(res))
       .catch(err =>console.log(err));
   }
    // const handleChange = (selectedTheme) => {
    //     setTheme(themes[selectedTheme.value]);
    // };
    // const refCallback = (node) => {
    //     if (node) {
    //         theme &&
    //             Object.keys(theme).forEach((element) => {
    //                 node.style.setProperty(element, theme[element], 'important');
    //                 if (element === 'background-color' || element === 'background') {
    //                     // apply the same background mentioned for theme to the body of the website
    //                     document.body.style.background = theme[element];
    //                 }
    //             });
    //     }
    // };
    return(
        <Wrapper >
            <div className="form-container">
                <form>
                    <input 
                    onChange={handleChange}
                    type="text"
                    placeholder ="title of the article"
                    name ="title"
                    id="title"
                    ></input>
                    <textarea 
                    onChange={handleChange}
                    type="text"
                    placeholder ="title of the article"
                    name ="body"
                    id="body"
                    ></textarea>
                     <button type="submit" onClick={addArticle} className="btn btn-primary">add entries</button>
                </form>
            </div>
        </Wrapper>
    )
    // return (
    //     <Wrapper>
    //         <div ref={refCallback}>
    //             <br></br><br></br>
    //             <div className="container">
    //                 <Row className="d-flex justify-content-center">
    //                     <div className="col-md-7 offset-md-2">
    //                         <form className="form-create">
    //                             <FormBtn>Save</FormBtn>
    //                             <Input
    //                                 // onChange={handleInputChange}
    //                                 name="title"
    //                                 placeholder="Title" />
    //                             <Input
    //                                 name="today's date goes here"
    //                                 placeholder="Today's Date" />
    //                             <TextArea
    //                                 name="entrycontent"
    //                                 placeholder="Jot it here" />
    //                         </form>
    //                     </div>
    //                 </Row>
    //             </div>
    //         </div>
    //     </Wrapper >
    // )
}

export default CreateEntry;