import axios from "axios";
import React, { Component, useState } from "react";
import Wrapper from "../components/Wrapper/wrapper";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import "./alljournals.css";
import "./allpages.css";

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
  clearInput = () => {
    this.setState({
      journalName: "",
    });
  };
  getJournal = () => {
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
    this.getJournal();
    this.clearInput();
  };

  render() {
    return (
      <Wrapper>
        <Modal />
        <div className="container">
          <div class="input-group input-group-lg create-journal">
            <div className="input-group-prepend ">
              <label
                className="input-group-text input-group-text-lg bg-secondary text-white border-0"
                for="inputGroupSelect01"
              >
                Create Journal
              </label>
            </div>
            <input
              required
              onChange={this.handleChange}
              value={this.state.journalName}
              type="text"
              className="form-control input-group-lg"
              placeholder="Journal Name"
              name="journalName"
              id="journalName"
              style={{ height: "60px" }}
            ></input>

            <div className="input-group-append">
              <button
                className="btn btn-dark search-button text-capitalize"
                id="button-addon2"
                type="submit"
                onClick={this.addJournal}
              >
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          {/* </form> */}
        </div>

        {this.state.results.length ? (
          <div className="container-fluid card-container d-flex flex-wrap justify-content-center">
            {this.state.results.map((result) => (
              <div className="card card-journal border-0">
                {/* <CardJournal> */}
                <div className="card-body vl card-body-journal d-flex flex-wrap justify-content-center align-items-center">
                  <div>
                    <div className="card-content card-content-journal">
                      <h4 className="card-title text-center">{result.name}</h4>
                      <hr />
                      <p className="card-text card-text-journal">
                        <Link to={"/books/" + result._id}>
                          <span>
                            <i class="fas fa-file-alt"></i>
                          </span>
                          See All Jots{" "}
                        </Link>
                      </p>
                      <hr />
                      <p className="card-text card-text-journal">
                        <Link to={"/create/" + result._id}>
                          <a
                            className="text-capitalize text-center"
                            onClick={this.createEntry}
                            id={result._id}
                          >
                            <span>
                              <i className="fas fa-edit"></i>
                            </span>{" "}
                            Create new jot
                          </a>
                        </Link>
                      </p>
                    </div>
                    <br />
                    <p className="text-right">
                      {/* <i class="fas fa-cog"></i> */}
                      <button
                        type="button"
                        className="btn btn-sm d-inline-block "
                        onClick={this.deleteJournal}
                        id={result._id}
                      >
                        <i
                          class="fas fa-times"
                          style={{ color: "red", fontSize: "25px" }}
                        ></i>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h4>You don't have any journals yoy can create here</h4>
          </div>
        )}
        {/* <Footer /> */}
      </Wrapper>
    );
  }
}
export default AllJournals;
