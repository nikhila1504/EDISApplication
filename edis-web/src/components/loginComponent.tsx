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
import georgia from '../images/georgia.png';

const LoginComponent: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <section className="container">
      <div className="mt-4 d-flex align-items-center">
        <Image src={workersBoardLogo} alt="Image" width="150" />
        <h4 className="mb-3 text-nowrap ms-3" style={{ color: '#0A3161' }}>
          State Board Of <br /> Worker's Compensation
        </h4>
      </div>

      <div className="row justify-content-between">
        <div className="col-12 col-md-6">
          <h4 className="" style={{ color: '#0A3161', flex: 3,marginTop:'3rem' ,whiteSpace: 'nowrap',}}>
            <b>Welcome To State Board Of Worker's Compensation Enforcement Division (EDIS)</b>
          </h4>
          <div className=" text-end" style={{ position: 'relative', top: '60%', left: '35%' }}>
            <Image src={georgia} alt="Georgia" width="150" />
          </div>
        </div>

        <div className="col-8 col-md-4 d-flex flex-column align-items-start">
          <h4 className=" mb-3" style={{ color: '#0A3161'}}>
            <b>Enforcement Division Information System</b>
          </h4>

          <Card className="border border-black w-100">
            <h5 className="card-title text-center mb-4" style={{ color: '#0A3161'}}>Sign In</h5>

            <div className="p-fluid">
              <FloatLabel>
                <label htmlFor="username">Username</label>
                <InputText
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </FloatLabel>
              {/* <FloatLabel className="mt-4"> */}
              <div className="p-float-label mt-4">
                <label htmlFor="password">Password</label>
                <Password variant="filled" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  feedback={false} 
                  toggleMask 
                  tabIndex={1} 
                />
              </div>
              {/* </FloatLabel> */}
            </div>

            <div className="mt-3">
              <Link to="/forgot-password" className="text-decoration-none text-primary">
                Forgot Password?
              </Link>
            </div>

            <div className="mt-2 d-flex align-items-center">
              <Checkbox
                inputId="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.checked || false)}
              />
              <label htmlFor="rememberMe" className="ms-2">Remember Me</label>
            </div>

            <Button label="Login" onClick={handleLogin} className="mt-4 w-100 p-button-lg" style={{ backgroundColor: '#0A3161' }} />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LoginComponent;