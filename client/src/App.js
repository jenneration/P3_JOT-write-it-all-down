import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
// import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';

// Site Routes
import AllJournals from "./pages/AllJournals";
import Quotes from "./pages/Quotes";
import About from "./pages/About";
import AllEntries from "./pages/AllEntries";
import EntryPage from "./pages/EntryPage";
import CreateEntry from "./pages/CreateEntry";

import QuoteHeader from "./components/QuoteHeader";
import "bootstrap/js/src/collapse.js";


function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  const [logged, setLogged] = useState(false)
  const toggle = () => {
    setLogged(!logged)
  }
  const getuser = ()=>{
    const user = JSON.parse(localStorage.getItem("user"))
      setLogged(!!user)
  }
  useEffect(()=>{
    getuser();
  },[logged])

  return (
    <Router>
      <div className="App">
        <Header title={title} />
        {logged?<QuoteHeader />:null}
        <div>
          <Switch>
            <Route path="/" exact={true}>
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <Route path="/register">
              <RegistrationForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <Route path="/login">
              <LoginForm showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <Route path="/alljournals">
            </Route>
            </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} />
          
          <Route exact path="/alljournals">
            <AllJournals fn={toggle}/>
          </Route> 
          <Route exact path="/quotes/:id"><Quotes/></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/entrypage"> <EntryPage /></Route>
          <Route exact path="/create/:id"><CreateEntry /> </Route>
          <Route exact path="/books/:id"><AllEntries /> </Route>
          
        </div>
      </div>
    </Router>


  );
}

export default App;