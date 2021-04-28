import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar/navbar";

import Home from "./pages/Home";
import Quotes from "./pages/Quotes";
import About from "./pages/About";
import AllEntries from "./pages/AllEntries";
import EntryPage from "./pages/EntryPage";
import CreateEntry from "./pages/CreateEntry";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route exact path="/quotes" component={Quotes} />
        <Route exact path="/about" component={About} />
        <Route exact path="/allentries" component={AllEntries} />
        <Route exact path="/entrypage" component={EntryPage} />
        <Route exact path="/createentry" component={CreateEntry} />
      </div>
      
    </Router>
  );
}
export default App;