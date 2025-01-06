import React from 'react';
import { Button } from 'primereact/button';
import logo from '../images/sbwc_logo.gif';
import icmslogo from '../images/icms_logo.gif';
const HeaderComponent = () => {
    return (
        <div>
            <div className="logo-container d-flex justify-content-between align-items-center" style={{ padding: '10px' }}>
                <img src={logo} alt="Logo" className="logo"  />
                {/* <img src={icmslogo} alt="ICMS Logo" className="icms-logo" /> */}
                <h4 style={{color:"#0A3161"}}>Enforcement Division Information System</h4>
            </div>
            <nav className="navbar navbar-light" style={{backgroundColor:"#0A3161"}}>
                <Button className="p-button-sm mx-2" style={{backgroundColor:"#0A3161", border: 'none',fontSize:'20px' }}><b>Home</b> </Button>
            </nav>
        </div>
    )
}

export default HeaderComponent
