import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Join from "./Components/Join/Join";
import Chat from "./Components/Chat/Chat";


function App() {
  return (
    <Router>
      <div className="App"></div>
      <Route path='/' exact component={Join}/>
      <Route path='/chat' component={Chat}/>
    </Router>
  );
}

export default App;
