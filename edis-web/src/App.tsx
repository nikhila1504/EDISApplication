import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginComponent from "./components/loginComponent.tsx";
import "primereact/resources/themes/saga-blue/theme.css"; /* Theme */
import "primereact/resources/primereact.min.css"; /* Core styles */
import "primeicons/primeicons.css"; /* Icons */

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
