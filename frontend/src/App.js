import React from 'react';
import './App.css';
import Form from './Form';
import Home from './Homepage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' Component={Home}></Route>
          <Route path='/classify/' Component={Form}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;