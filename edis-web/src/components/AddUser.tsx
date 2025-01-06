import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Container, Row, Col } from 'react-bootstrap';
import { RiRestartFill } from 'react-icons/ri';
import { FaSearch, FaUserPlus } from 'react-icons/fa';

const userStatuses = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' },
];

const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
  { label: 'Manager', value: 'manager' },
];

const locations = [
  { label: 'New York', value: 'new_york' },
  { label: 'Georgia', value: 'georgia' },
  { label: 'California', value: 'california' },
];

const AddUser: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userStatus, setUserStatus] = useState(null);
  const [role, setRole] = useState(null);
  const [location, setLocation] = useState(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      userStatus,
      role,
      location,
    });
  };

  return (
    <Container style={{ marginTop: '5%' }}>
      <Row>
        <Col xs={12} md={8} className="mx-auto">
        <h4 className='d-flex justify-content-center'>Manage Internal Users</h4>
        <nav className="navbar navbar-light" style={{backgroundColor:"#B31942"}}>
            <h4 className="ms-4" style={{color:'white'}}>Search</h4>
        </nav>
          <Card  className="p-fluid" style={{ maxWidth: '100%', height: '80%' }} >
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} md={4}>
                  <FloatLabel>
                    <label htmlFor="firstName">First Name</label>
                    <InputText
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                    />
                  </FloatLabel>
                </Col>

                <Col xs={12} md={4}>
                  <FloatLabel>
                    <label htmlFor="lastName">Last Name</label>
                    <InputText
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                    />
                  </FloatLabel>
                </Col>

                <Col xs={12} md={4}>
                  <FloatLabel className="w-full md:w-14rem">
                        <Dropdown inputId="dd-city" value={userStatus}  id="userStatus" onChange={(e) => setUserStatus(e.value)} options={userStatuses}  className="w-full" />
                        <label htmlFor="dd-city">User Status</label>
                 </FloatLabel>
                </Col>
              </Row>

              <Row className="mt-4">
                <Col xs={12} md={4}>
                  {/* <FloatLabel>
                    <label htmlFor="role">Role</label>
                    <Dropdown
                      id="role"
                      value={role}
                      options={roles}
                      onChange={(e) => setRole(e.value)}
                      placeholder="Select Role"
                      filter
                      filterBy="label"
                      showClear
                    />
                  </FloatLabel> */}
                   <FloatLabel className="w-full md:w-14rem">
                        <Dropdown inputId="dd-city" value={role}  id="role" onChange={(e) => setRole(e.value)} options={roles}  className="w-full" />
                        <label htmlFor="dd-city">Role</label>
                 </FloatLabel>
                </Col>

                <Col xs={12} md={4}>
                  {/* <FloatLabel>
                    <label htmlFor="location">Location</label>
                    <Dropdown
                      id="location"
                      value={location}
                      options={locations}
                      onChange={(e) => setLocation(e.value)}
                      placeholder="Select Location"
                      filter
                      filterBy="label"
                      showClear
                    />
                  </FloatLabel> */}
                   <FloatLabel className="w-full md:w-14rem">
                        <Dropdown inputId="dd-city" value={location}  id="location" onChange={(e) => setLocation(e.value)} options={locations}  className="w-full" />
                        <label htmlFor="dd-city">Location</label>
                 </FloatLabel>
                </Col>
              </Row>

              <Row className="mt-4 d-flex justify-content-center">
                <Col xs={12} className="d-flex justify-content-center">
                  <Button label="Reset" type="reset" className="p-button-sm mx-2" style={{ backgroundColor: '#0A3161' }} icon={<RiRestartFill size={30}/>}/>
                  <Button label="Search" type="submit" className="p-button-sm mx-2" style={{ backgroundColor: '#0A3161' }} icon={<FaSearch />}/>
                  <Button label="Add User" type="submit" className="p-button-sm mx-2" style={{ backgroundColor: '#0A3161' }} icon={<FaUserPlus />}/>
                </Col>
              </Row>
            </form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AddUser;