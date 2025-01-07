import React from 'react';
import { Button } from 'primereact/button';
import logo from '../images/sbwc_logo.gif';
import icmslogo from '../images/icms_logo.gif';
import edislogo from '../images/edis_logo.png';

import { useLocation } from 'react-router-dom';

const HeaderComponent = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';
    return (
        <div>
            <div className=" d-flex justify-content-between align-items-center" style={{ padding: '10px',backgroundImage: 'linear-gradient(135deg, #B31942, #0A3161)' }}>
                <img src={logo} alt="Logo" className="logo" />
                <img src={edislogo} alt="ICMS Logo" className="edis-logo" width="450" />
                {/* <h4 style={{ color: "#0A3161" }}>Enforcement Division Information System</h4> */}
            </div>
            {!isLoginPage && (
                <nav className="navbar navbar-light" style={{backgroundImage: 'linear-gradient(135deg, #0A3161, #B31942)', 
        backgroundSize: 'cover'}}>
                    {/* style={{ backgroundColor: "#0A3161" }} */}
                    <Button className="p-button-sm mx-2" style={{ backgroundColor: "#0A3161", border: 'none', fontSize: '20px', color: "white" }}><b>Home</b> </Button>
                </nav>
            )}
        </div>
    )
}

export default HeaderComponent
