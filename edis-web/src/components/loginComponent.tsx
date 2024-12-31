import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { Checkbox } from 'primereact/checkbox';
import { Link } from 'react-router-dom';
import { Image } from 'primereact/image';
import workersBoardLogo from '../images/workersBoardlogo.jpg';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <section className="">
      <div className="mt-4 d-flex align-items-center">
        <Image src={workersBoardLogo} alt="Image" width="150" />
        <h4 className="mb-3 text-nowrap" style={{ marginLeft: '10px', color: '#0A3161' }}>
          State Board Of <br /> Worker's Compensation
        </h4>
      </div>

      <div className="d-flex align-items-center" style={{ justifyContent: 'space-between' }}>
        <h4 className="mb-3" style={{ color: '#0A3161', flex: 2 }}>
          <b>Welcome To State Board Of  Worker's Compensation Enforcement Division (EDIS)</b>
        </h4>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <Card className="border border-black" style={{ maxWidth: '100%', width: '100%' }}>
            <h5 className="card-title text-center mb-4" style={{ color: '#0A3161' }}>Sign In</h5>
            <div className="p-fluid">
              <FloatLabel>
                <label htmlFor="username">Username</label>
                <InputText
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FloatLabel>
              <FloatLabel className="mt-4">
                <label htmlFor="password">Password</label>
                <InputText
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FloatLabel>
            </div>
            <div className="mt-3">
              <Link to="/forgot-password" className="text-decoration-none" style={{ color: '#0A3161' }}>
                Forgot Password?
              </Link>
            </div>
            <div className="mt-2">
              <Checkbox
                inputId="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.checked || false)}
              />
              <label className="ml-3">  Remember Me</label>
            </div>
            <Button label="Login" onClick={handleLogin} className="mt-4 w-100 p-button-lg" style={{ backgroundColor: '#0A3161' }} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;