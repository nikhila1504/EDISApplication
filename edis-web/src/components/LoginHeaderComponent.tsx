import React from 'react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { FaUser, FaKey, FaSignOutAlt } from 'react-icons/fa';
import logo from '../images/sbwc_logo.gif';
import icmslogo from '../images/icms_logo.gif';
import edislogo from '../images/edis_logo.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useLocation } from 'react-router-dom';

const HeaderComponent = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/';
    const isRegistrationPage = location.pathname === '/userRegistration';
    const menuItems = [
        { label: 'Profile', icon: <FaUser />, command: () => handleMenuItemClick('Profile') },
        { label: 'Change Password', icon: <FaKey />, command: () => handleMenuItemClick('Change Password') },
        { label: 'Logout', icon: <FaSignOutAlt />, command: () => handleMenuItemClick('Logout') },
    ];

    const handleMenuItemClick = (item: string) => {
        console.log("You clicked on ${item}");
    };

    return (
        <div >
            <div style={{ border: 'none' }}>
                {/* Header Section with Flexbox */}
                <div className="d-flex justify-content-between align-items-center" style={{ padding: '10px' }}>
                    <img src={logo} alt="Logo" className="logo img-fluid" width='250' />
                     {<h4 className="mb-3 text-nowrap" style={{ marginLeft: '5%', color: 'red' }}>
                                    DEV
                                  </h4>}
                    <img src={edislogo} alt="ICMS Logo" className="edis-logo img-fluid" width='350' />
                </div>
                
                {isLoginPage && (
                    <div className="login-marquee-container">
                        <div className="marquee-text">
                            <b>Welcome to the State Board of Worker’s Compensation Enforcement Division (EDIS)</b>
                        </div>
                    </div>
                )}
            </div>
            {/* Navbar Section */}
            {!isLoginPage && !isRegistrationPage && (
                <nav className="navbar navbar-light" style={{ backgroundSize: 'cover',backgroundColor: "#0A3161" }}>
                    <div className="d-flex">
                        <Button
                            className="p-button-sm mx-2"
                            style={{ backgroundColor: "#0A3161", border: 'none', fontSize: '20px', color: "white", padding: '10px 20px' }}>
                            <b>Home</b>
                        </Button>
                    </div>
                    {/* <Dropdown 
                        value={null}
                        options={menuItems} 
                        placeholder="Username" 
                        className="p-dropdown-sm ml-auto custom-dropdown"
                        style={{ width: 'auto' ,marginRight:'20px' ,backgroundColor:'rgb(179, 25, 66)',color: 'white',border:'none'}}
                        // style={{ backgroundColor: '#0A3161', color: 'white',fontFamily:'bold'}}
                    /> */}
                    <NavDropdown
                        className='text-white me-5 fw-bold'
                        id="nav-dropdown-light"
                        title="Tammy Marshall"
                        menuVariant="light"
                    >
                        <NavDropdown.Item href="#action/3.1"><i className="bi bi-person-circle icon-color"></i> Profile</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            <i className="bi bi-house-lock icon-color"></i> Change Password
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/"><i className="bi bi-power icon-color"></i> Logout</NavDropdown.Item>
                    </NavDropdown>
                </nav>
            )}
        </div>
    )
}

export default HeaderComponent
