import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import LoginForm from './components/LoginForm/LoginForm';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AlertComponent from './components/AlertComponent/AlertComponent';

// Site Routes
// import Navbar from "./components/Navbar/navbar";
import AllJournals from "./pages/AllJournals";
import Quotes from "./pages/Quotes";
import About from "./pages/About";
import AllEntries from "./pages/AllEntries";
import EntryPage from "./pages/EntryPage";
import CreateEntry from "./pages/CreateEntry";



function App() {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <Router>
      <div className="App">
        <Header title={title} />
        {/* <div className="d-flex align-items-center flex-column"> */}
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
              <Home />
            </Route>
          </Switch>
          <AlertComponent errorMessage={errorMessage} hideError={updateErrorMessage} />
          {/* </div> */}


          {/* TO FIX START */}

          {/* <div> */}
          {/* <Navbar /> */}
          <Route exact path="/alljournals" component={AllJournals} />
          <Route exact path="/quotes" component={Quotes} />
          <Route exact path="/about" component={About} />
          <Route exact path="/entrypage" component={EntryPage} />
          <Route exact path="/createentry" component={CreateEntry} />
          <Route exact path="/allentries" component={AllEntries} />
        </div>
      </div>


      {/* TO FIX END */}



    </Router>


  );
}

export default App;