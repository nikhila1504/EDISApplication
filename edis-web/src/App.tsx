import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginComponent.tsx";
import FooterComponent from "./components/FooterComponent.tsx";
import AddNewUser from "./components/AddNewUser.tsx";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css"; 
import "primeicons/primeicons.css"; 

function App() {
  return (
    <div>
    <Router>
    <div className="d-flex flex-column min-vh-100">
  <div className="container flex-fill">
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="/addNewUser" element={<AddNewUser />} />
    </Routes>
  </div>
  <FooterComponent />
</div>
      
    </Router>
  </div >
 
  );
}

export default App;
