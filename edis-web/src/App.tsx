import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginComponent from "./components/loginComponent.tsx";

function App() {
  return (
    <div>
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <div className="container flex-fill">
          <Routes>
            <Route exact path="/" element={<LoginComponent />} />

          </Routes>
        </div>
      </div>
    </Router>
  </div >
  );
}

export default App;
