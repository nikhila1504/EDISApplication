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
    <section className="vh-100">
      <div className="mt-4 d-flex align-items-center">
        <Image src={workersBoardLogo} alt="Image" width="150" />
        <h4 className="mb-3 text-nowrap text-primary" style={{marginLeft:'10px'}}>
          State Board Of <br /> Worker's Compensation
        </h4>
      </div>
      <div>
      <h4 className="mb-3" style={{marginTop:'5%'}}>
          <b>Welcome To State Board Of  Worker's Compensation Enforcement Division (EDIS)</b>
      </h4>
      </div>
      <div className="d-flex justify-content-end align-items-start position-absolute top-0 end-0 p-4 pe-5 mt-4">
        <div className="col-12">
          <h4 className="mb-3 text-nowrap">
            Enforcement Division <br /> Information System (EDIS)
          </h4>
          <Card className="border border-black p-4 " style={{ maxWidth: '800px' }}>
            <h5 className="card-title text-center text-primary mb-4">Sign In</h5>
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
                <Password
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  feedback={false}
                />
              </FloatLabel>
            </div>
            <div className="mt-3">
              <Link to="/forgot-password" className="text-decoration-none text-primary">
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
            <Button label="Login" onClick={handleLogin} className="mt-4 w-100 p-button-lg" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;