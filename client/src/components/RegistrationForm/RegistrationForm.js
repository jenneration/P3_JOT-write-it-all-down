import React, { useState } from 'react';
import axios from 'axios';
import './RegistrationForm.css';
import { API_BASE_URL } from '../../constants/apiContants';
import { withRouter } from 'react-router-dom';

function RegistrationForm(props) {
<<<<<<< HEAD
	const [ state, setState ] = useState({
		email: '',
		password: '',
		confirmPassword: '',
		successMessage: null,
		firstName: '',
		lastName: ''
	});
	const handleChange = (e) => {
		const { id, value } = e.target;
		setState((prevState) => ({
			...prevState,
			[id]: value
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
				confirmPassword: state.confirmPassword
			};

			var header = {
				headers: {
					'Access-Control-Allow-Origin': '*',
					'Access-Control-Allow-Credentials': true,
					'Access-Control-Allow-Methods': 'POST',
					'Access-Control-Allow-Headers': 'Content-Type'
				}
			};

			axios
				.post(API_BASE_URL + 'signup', payload, header)
				.then(function(response) {
					//console.log(response);
					if (response.status === 200) {
						setState((prevState) => ({
							...prevState,
							successMessage: 'Registration successful. Redirecting to home page..'
						}));
						redirectToHome();
						props.showError(null);
					} else if (response.status === 400) {
						props.showError('this email is already register');
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		} else {
			props.showError('Please enter valid username and password');
		}
	};
	const redirectToHome = () => {
		props.updateTitle('Home');
		props.history.push('/home');
	};
	const redirectToLogin = () => {
		props.updateTitle('Login');
		props.history.push('/login');
	};
	const handleSubmitClick = (e) => {
		e.preventDefault();
		if (state.password === state.confirmPassword) {
			sendDetailsToServer();
		} else {
			props.showError('Passwords do not match');
		}
	};
	return (
		<div className="card col-xlg-5 col-lg-5 col-sm-5 col-xs-12 login-card mt-2 hv-center">
			<form className="registration-form">
				<div className="form-group text-center">
					<label htmlFor="firstName">First name</label>
					<input
						type="text"
						className="form-control"
						id="firstName"
						placeholder="first name"
						value={state.firstName}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group text-center">
					<label htmlFor="lastName">Last name</label>
					<input
						type="text"
						className="form-control"
						id="lastName"
						placeholder="Last name"
						value={state.lastName}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group text-center">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input
						type="email"
						className="form-control"
						id="email"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						value={state.email}
						onChange={handleChange}
					/>
					<small id="emailHelp" className="form-text text-white">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className="form-group text-left">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input
						type="password"
						className="form-control"
						id="password"
						placeholder="Password"
						value={state.password}
						onChange={handleChange}
					/>
				</div>
				<div className="form-group text-center">
					<label htmlFor="exampleInputPassword1">Confirm Password</label>
					<input
						type="password"
						className="form-control"
						id="confirmPassword"
						placeholder="Confirm Password"
						value={state.confirmPassword}
						onChange={handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary register-button" onClick={handleSubmitClick}>
					Register
				</button>
			</form>
			<div
				className="alert alert-success mt-2"
				style={{ display: state.successMessage ? 'block' : 'none' }}
				role="alert"
			>
				{state.successMessage}
			</div>
			<div className="mt-2">
				<span>Already have an account? </span>
				<span className="loginText" onClick={() => redirectToLogin()}>
					Login here
				</span>
			</div>
		</div>
	);
=======
    const [state , setState] = useState({
        email : "",
        password : "",
        confirmPassword: "",
        successMessage: null,
        firstName: "",
        lastName :""
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const sendDetailsToServer = () => {
        if(state.email.length && state.password.length) {
            props.showError(null);
            const payload={
                "firstName":state.firstName,
                "lastName":state.lastName,
                "email":state.email,
                "password":state.password,
                "confirmPassword":state.confirmPassword,
            }
            axios.post(API_BASE_URL+'signup', payload)
                .then(function (response) {
                    //console.log(response);
                    if(response.status === 200){
                        const user = {
                            token : response.data.token,
                            id : response.data.result._id,
                            name: response.data.result.firstName

                        }
                        localStorage.setItem("user",JSON.stringify(user))
                        setState(prevState => ({
                            ...prevState,
                            'successMessage' : 'Registration successful. Redirecting to home page..'
                        }))
                        redirectToHome();
                        props.showError(null)
                    } else if(response.status===400){
                        props.showError("this email is already register");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });    
        } else {
            props.showError('Please enter valid username and password')    
        }
        
    }
    const redirectToHome = () => {
        props.updateTitle('Home')
        props.history.push('/home');
    }
    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login'); 
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.password === state.confirmPassword) {
            sendDetailsToServer()    
        } else {
            props.showError('Passwords do not match');
        }
    }
    return(
        <div className="card col-xlg-5 col-lg-5 col-sm-5 col-xs-12 login-card mt-2 hv-center">
            <form className ="registration-form">
            <div className="form-group text-center">
                    <label htmlFor="firstName">First name</label>
                    <input type="text" 
                        className="form-control" 
                        id="firstName" 
                        placeholder="first name"
                        value={state.firstName}
                        onChange={handleChange} 
                    />
                </div>
            <div className="form-group text-center">
                    <label htmlFor="lastName">Last name</label>
                    <input type="text" 
                        className="form-control" 
                        id="lastName" 
                        placeholder="Last name"
                        value={state.lastName}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-center">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" 
                       value={state.email}
                       onChange={handleChange}
                />
                <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                    />
                </div>
                <div className="form-group text-center">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary register-button"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" onClick={() => redirectToLogin()}>Login here</span> 
            </div>
            
        </div>
    )
>>>>>>> arjunbranch
}

export default withRouter(RegistrationForm);
