import React, { useState } from "react";
import axios from "axios";
import "./RegistrationForm.css";
import { API_BASE_URL } from "../../constants/apiContants";
import { withRouter } from "react-router-dom";
import Logo from "../Logo/logo";
import Tagline from "../Tagline/tagline"

function RegistrationForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    successMessage: null,
    firstName: "",
    lastName: "",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };
  const sendDetailsToServer = () => {
    if (state.email.length && state.password.length) {
      props.showError(null);
      const payload = {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword,
      };
      axios
        .post(API_BASE_URL + "signup", payload)
        .then(function (response) {
          console.log(response);
          if (response.status === 200) {
            const user = {
              token: response.data.token,
              id: response.data.result._id,
              name: response.data.result.firstName,
            };
            localStorage.setItem("user", JSON.stringify(user));
            setState((prevState) => ({
              ...prevState,
              successMessage:
                "Registration successful. Redirecting to home page..",
            }));
            redirectToHome();
            props.showError(null);
          } else if (response.status === 400) {
            props.showError("this email is already register");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      props.showError("Please enter valid username and password");
    }
  };
  const redirectToHome = () => {
    props.updateTitle("Home");
    props.history.push("/home");
  };
  const redirectToLogin = () => {
    props.updateTitle("Login");
    props.history.push("/login");
  };
  const handleSubmitClick = (e) => {
    e.preventDefault();
    if (state.password === state.confirmPassword) {
      sendDetailsToServer();
    } else {
      props.showError("Passwords do not match");
    }
  };
  return (
    <>

      <div className="container-fluid">
        <div className="row h-100">
          <div className="login register pr-0 col-sm-9">
            <Logo />
            <Tagline />
          </div>
          <div id="regform1" className="register pr-0 pl-0 col-sm-3">
            <form className="registration-form" style={{ height: "890px", paddingTop: "75px" }}>
              <h1> Sign Up</h1>
              <div className="form-group text-center">
                <label htmlFor="exampleInputfirstName"></label>
                <input
                  type="firstName"
                  className="form-control"
                  id="firstName"
                  placeholder="First Name"
                  value={state.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group text-center">
                <label htmlFor="exampleInputlastName"></label>
                <input
                  type="lastName"
                  className="form-control"
                  id="lastName"
                  placeholder="Last Name"
                  value={state.lastName}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group text-center">
                <label htmlFor="exampleInputEmail1"></label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  value={state.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group regis-password">
                <label htmlFor="exampleInputPassword1 text-center">
                  <h3><em>Shhhhh!</em></h3></label>
                <input
                  type="password"
                  className="form-control text-left"
                  id="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group text-center">
                <label htmlFor="exampleInputPassword1"></label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  value={state.confirmPassword}
                  onChange={handleChange}
                />
              </div>
              <div className="form-check form-group">
                <button
                  type="submit"
                  className="btn btn-lg btn-dark"
                  style={{ marginTop: "35px" }}
                  onClick={handleSubmitClick}>
                  Sign Up
              </button>
              </div>

              <br></br>
              <br></br>
              <div style={{ marginTop: "15px" }}>
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>
                  Login HERE
              </span>
              </div>

              <div
                className="alert alert-success "
                style={{ display: state.successMessage ? "block" : "none" }}
                role="alert">
                {state.successMessage}
              </div>
            </form>
          </div>
        </div>
      </div>


    </>
  );
}

export default withRouter(RegistrationForm);
