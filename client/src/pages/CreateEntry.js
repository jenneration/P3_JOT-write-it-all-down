import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import { Row } from "../components/Grid/grid";
// import { Input, TextArea, FormBtn } from "../components/Form/form";
import Wrapper from "../components/Wrapper";
// import Background from "../components/Background/background"
import "./createentry.css";
// import themes from "../themes";
import axios from 'axios';

let today = new Date().toDateString();


function CreateEntry() {
    const [state, setState] = useState({
        journalId: "",
        title: "",
        body: "",
        userId: "",
        token: "",
        name: ""
    });
    const { id } = useParams()
    const handleChange = (e) => {
        const user = JSON.parse(localStorage.getItem('user'));
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value,
            journalId: id,
            userId: user.id,
            token: user.token,
            name: user.name
        }))
    }
    const clearInput = () => {
        setState({
            //...prevState,
            title: "",
            body: ""
        })
    }
    const addArticle = (e) => {
        e.preventDefault();
        if (state.journalId === "" || state.userId === "") return;
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
            .catch(err => console.log(err));
        clearInput();
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
    return (
        <Wrapper>
            {/* <Background /> */}
            {/* <div className="form-container "> */}
            <div className="container ">
                <Row className="d-flex justify-content-center">
                    <div className="col-md-8 offset-md-2">

                        <form className="bg-white mt-40 createentry">
                            <div class="text-right">
                                <button
                                    onClick={addArticle}
                                    type="submit"
                                    className="btn btn-lg btn-dark">
                                    Save
                                </button>
                            </div>

                            <div className="input-group">
                                <input
                                    onChange={handleChange}
                                    className="form-control form-control-lg createinput"
                                    type="text"
                                    placeholder="Title"
                                    name="title"
                                    id="title" value={state.title}>
                                </input>
                            </div>

                            <div className="input-group">
                                <input
                                    className="form-control form-control-lg createinput2"
                                    type="text"
                                    placeholder={today} />
                            </div>

                            <div className="form-group">
                                <textarea
                                    className="form-control "
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Write it all down"
                                    name="body"
                                    id="body"
                                    rows="15" value={state.body}>
                                </textarea>

                            </div>
                        </form>
                        <button
                            onClick={addArticle}
                            type="submit"
                            className="btn btn-lg btn-dark">
                            Save
                        </button>
                    </div>
                </Row>
            </div>
        </Wrapper >
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