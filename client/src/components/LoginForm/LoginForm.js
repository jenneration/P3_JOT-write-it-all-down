import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";
import { API_BASE_URL } from "../../constants/apiContants";
import { withRouter } from "react-router-dom";

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
      <div className="row">
        <div className="login col-lg-8  col-md-8 col-sm-8 ">
          {/* logo content  */}
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        </div>

        <div id="loginform1" className="login col-lg-4  col-md-4 col-sm-4 ">
          <form className="loginForm">
            <div className="form-group text-centermb">
              <label htmlFor="exampleInputEmail1" className="labelmb">Email address</label>
              <input
                type="email"
                className="form-control input-login"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={state.email}
                onChange={handleChange}
              />
              
            </div>
            <div className="form-group text-center">
              <label htmlFor="exampleInputPassword1"className="passwordmb">Password</label>
              <input
                type="password"
                className="form-control input-login"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-check"></div>
            <button
              type="submit"
             
              className="btn btn-dark"
              onClick={handleSubmitClick}
            >
              Submit
            </button>
          </form>
          <div
            className="alert alert-success mt-2"
            style={{ display: state.successMessage ? "block" : "none" }}
            role="alert"
          >
            {state.successMessage}
          </div>
          <div className="registerMessage">
            <span>Don't have an account? </span>
            <span className="loginText" onClick={() => redirectToRegister()}>
              Register
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(LoginForm);
