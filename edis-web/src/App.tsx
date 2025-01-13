import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginComponent from "./components/LoginPageComponent.tsx";
import AddUser from "./components/AddUser.tsx";
import HeaderComponent from "./components/HeaderComponent.tsx"
import FooterComponent from "./components/FooterComponent.tsx";
import RegistrationForm from "./components/RegistrationForm.tsx";
import AddNewUser from "./components/AddNewUser.tsx";
import ChangePasswordComponent from "./components/ChangePasswordComponent.tsx";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <div className="flex-grow-1">
            <HeaderComponent />
            <Routes>
              <Route path="/" element={<LoginComponent />} />
              <Route path="/addUser" element={<AddUser />} />
              <Route path="/addNewUser" element={<AddNewUser />} />
              <Route path="/userRegistration" element={<RegistrationForm />} />
              <Route path="/changePassword" element={<ChangePasswordComponent />} />
              
            </Routes>
           
          </div>
          <FooterComponent />
        </div>
      </Router>
      
    </div >

  );
}

export default App;
