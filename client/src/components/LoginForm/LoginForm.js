import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import { API_BASE_URL } from "../../constants/apiContants";
import { withRouter } from "react-router-dom";
import Logo from "../Logo/logo";

function LoginForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    e.preventDefault();
    const payload = {
      email: state.email,
      password: state.password,
    };
    axios
      .post(API_BASE_URL + "/signin", payload)
      .then(function (response) {
        if (response.status === 200) {
          const user = {
            token: response.data.token,
            id: response.data.result._id,
            name: response.data.result.firstName,
          };
          localStorage.setItem("user", JSON.stringify(user));
          setState((prevState) => ({
            ...prevState,
            successMessage: "Login successful. Redirecting to home page..",
          }));
          redirectToHome();
          props.showError(null);
        } else if (response.status === 400) {
          props.showError("Username or password do not match");
        } else {
          props.showError("this email is not registered");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const redirectToHome = () => {
    props.updateTitle("Home");
    props.history.push("/alljournals");
  };
  const redirectToRegister = () => {
    props.history.push("/register");
    props.updateTitle("Register");
  };

  return (


    <div className="container-fluid">
      <div className="row h-100">
        <div className="login col-lg-9 col-md-4 h-100 ">
          <Logo />
        </div>

        {/* <div id="loginform1" className="login col-lg-4 col-md-4 col-sm-4 "> */}
        <div className="login pr-0 h-100 col-sm" >
          <form className="loginForm" style={{ height: "900px" }}>
            <h1>Log In</h1>
            <div className="form-group text-center">
              <label htmlFor="exampleInputEmail1"></label>
              <input
                type="email"
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
              />

            </div>
            <div className="form-group text-center">
              <label htmlFor="exampleInputPassword1"></label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-check form-group">
              <button
                type="submit"
                className="btn btn-lg btn-dark"
                onClick={handleSubmitClick}>
                Submit
          </button>
            </div>

            <div
              className="alert alert-success mt-2"
              style={{ display: state.successMessage ? "block" : "none" }}
              role="alert">
              {state.successMessage}
            </div>
            <div className="registerMessage">
              <span>Don't have an account? </span>
              <span className="loginText" onClick={() => redirectToRegister()}>
                Register</span>
            </div>
          </form>
        </div>
      </div>
    </div >

  );
}

export default withRouter(LoginForm);
