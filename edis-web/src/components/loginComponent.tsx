import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { FloatLabel } from 'primereact/floatlabel';
import { Card } from 'primereact/card';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // PrimeReact Theme
import 'primereact/resources/primereact.min.css';                // PrimeReact Core

const LoginPage = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;

        if (!username || !password) {
            setError('Username and Password are required.');
            return;
        }

        setLoading(true);
        setError('');

        // Simulate API call
        setTimeout(() => {
            if (username === 'admin' && password === 'admin123') {
                alert('Login successful!');
            } else {
                setError('Invalid username or password.');
            }
            setLoading(false);
        }, 2000);
    };

    return (
        <section>
            <div className="header-container mt-4 d-flex align-items-center justify-content-center">
                <Image src="/sbwc.JPG" alt="SBWC Logo" width="100" />
                <h4 className="mb-3 text-center" style={{ color: 'white', flex: 2 }}>
                    <b>Welcome to the State Board of Worker’s Compensation Enforcement Division (EDIS)</b>
                </h4>
            </div>
            {/* <div className="login-page">
                <div className="login-container">
                    <div className="image-container text-center mb-3">
                        <Image src="/georgia_logo.JPG" alt="Georgia Logo" width="150" />
                    </div> */}
            <div className="login-page">
                <div className="login-container" style={{ justifyContent: 'space-between' }}>
                    <div className="image-container d-flex align-items-center" >
                    <a href="https://sbwc.georgia.gov/" target="_blank" rel="noopener noreferrer">
                        <Image src="/georgia_logo.JPG" alt="Georgia Logo" width="80" />
                    </a>
                        {<h4 className="mb-3 text-nowrap" style={{ marginLeft: '25%', color: 'red' }}>
                            DEV
                        </h4>}
                        <div style={{ marginLeft: '30%' }} className="d-flex align-items-end"><Image src="/logo_sbwc.jpeg" alt="Image" /></div>

                    </div>
                    <h4 className="text-center mb-2" style={{ color: '#0A3161' }}>
                        Enforcement Division Information System (EDIS)
                    </h4>
                    <p className="text-center" style={{ color: '#0A3161' }}>Please log in to access your account.</p>
                    <Card className="login-card">
                        <h5 className="text-center" style={{ color: '#0A3161', marginTop: '0' }}>Sign In</h5>
                       {/* Error Message Container with Fixed Height */}
                        <div style={{ minHeight: '25px' }}>
                            {error && <p className="text-danger">{error}</p>}
                        </div>
                        <div style={{ minHeight: '25px' }}></div>
                        <form onSubmit={handleSubmit}>
                            <div className="p-fluid">
                                <FloatLabel>
                                    <label htmlFor="username">Username</label>
                                    <InputText
                                        id="username"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                    />
                                </FloatLabel>
                                <FloatLabel className="mt-4">
                                    <Password
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        feedback={false}
                                        toggleMask
                                        className={formData.password ? "p-filled" : ""}
                                    />
                                    <label htmlFor="password">Password</label>
                                </FloatLabel>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3">

                                <div className="d-flex align-items-center">
                                    <Checkbox
                                        inputId="rememberMe"
                                        checked={rememberMe}
                                        onChange={(e) => setRememberMe(e.checked || false)}
                                    />
                                    <label htmlFor="rememberMe" className="ml-2">Remember Me</label>
                                </div>
                                <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#0A3161' }}>
                                    Forgot Password?
                                </Link>
                            </div>
                            <Button
                                label={loading ? "Loading..." : "Login"}
                                className="mt-4 w-100 p-button-lg"
                                style={{ backgroundColor: '#0A3161' }}
                                disabled={loading}
                            />
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;
