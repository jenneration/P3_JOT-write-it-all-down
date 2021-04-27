
import axios from "axios";
import React, { Component, useState } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import { Link } from "react-router-dom";
import "./alljournals.css";
import "./allpages.css";
import Footer from "../components/Footer";


class AllJournals extends Component {
    state = {
        userId: "",
        token: "",
        journalId: "",
        name: "",
        results: [],
        journalName: "",
    };
    // user = JSON.parse(localStorage.getItem("user"));
    componentDidMount() {
        // API.getBooks("harry potter")
        // .then(res=>
        //   this.setState({results: res.data.items}))
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            this.setState({
                userId: user.id,
                token: user.token,
                name: user.name,
            });
            console.log(user);
            // creating header
            const apiUrl = "http://localhost:3001/user/";
            const authAxios = axios.create({
                baseURL: apiUrl,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                    userId: user.id,
                },
            });
            authAxios.get(`journal/${user.id}`).then((result) => {
                console.log(result.data);
                this.setState({
                    results: result.data,
                });
            });
        }
    }
    // handing input change
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    // function to create the article
    createEntry = () => { };
    // function to create new journal
    addJournal = (e) => {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            const apiUrl = "http://localhost:3001/user/";
            const authAxios = axios.create({
                baseURL: apiUrl,
                headers: {
                    Authorization: `Bearer ${user.token} `,
                    userId: user.id,
                },
            });
            if (this.state.journalName === "") return;
            authAxios
                .post("journal", this.state)
                .then((res) => console.log(res))
                .catch((error) => console.log(error));
        }
    };

    render() {
        return (
            <Wrapper>

                {/* <div className="input-container"> */}
                <div className="container">
                    {/* <form className="form-container align-center"> */}
                    {/* <div className="form srarch-from"> */}
                    <div class="input-group input-group-lg create-journal">
                        <div className="input-group-prepend ">
                            <label className="input-group-text input-group-text-lg bg-secondary text-white" for="inputGroupSelect01">
                                Create Journal
                        </label>
                        </div>
                        <input
                            required
                            onChange={this.handleChange}
                            value={this.state.journalName}
                            type="text"
                            className="journal-input form-control bg-warning"
                            placeholder="Journal Name"
                            name="journalName"
                            id="journalName">
                        </input>

                        <div className="input-group-append">
                            <button
                                className="btn btn-dark search-button text-capitalize" id="button-addon2"
                                type="submit"
                                onClick={this.addJournal}>save
                        </button>
                        </div>
                    </div>
                    {/* </form> */}
                </div>

                {this.state.results.length ? (
                    <div className="container card-container d-flex flex-wrap">

                        {this.state.results.map((result) => (
                            <div className="card">
                                {/* <CardJournal> */}
                                <div
                                    className="card-body d-flex justify-content-center align-items-center">
                                    <div className="card-content ">
                                        <h4 className="card-title text-center">{result.name}
                                            {/* <h3 className="text-capitalize">
                                                {result.name}
                                            </h3> */}
                                        </h4>
                                        <hr />
                                        <p className="card-text">
                                            <Link to={"/books/" + result._id}>
                                                <span><i class="fas fa-file-alt"></i></span>
                                                  See All Jots</Link>
                                        </p>
                                        <hr />
                                        <p className="card-text ">
                                            <Link to={"/create/" + result._id}>
                                                <a
                                                    className="text-capitalize text-center"
                                                    onClick={this.createEntry}
                                                    id={result._id}>
                                                    <span><i className="fas fa-edit"></i></span>
                                                    Create new jot
                                                </a>
                                            </Link>
                                        </p>
                                        <p className="text-right"><i class="fas fa-cog"></i></p>
                                    </div>
                                </div>
                                <div className="card-footer border-top-0 text-right">
                                    <button
                                        className="btn btn-outline-secondary
                                        "
                                        onClick={this.deleteJournal}
                                        id={result._id}>
                                        <i class="fas fa-times" style={{ color: "darkred" }}></i>
                                    </button>
                                </div>
                                {/* </CardJournal> */}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h4>You don't have any journals yoy can create here</h4>
                    </div>
                )}
                <Footer />
            </Wrapper>
        );
    }
}
export default AllJournals;
