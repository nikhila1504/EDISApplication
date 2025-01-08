import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Container, Row, Col } from 'react-bootstrap';
import { RiRestartFill } from 'react-icons/ri';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import FooterComponent from "./FooterComponent.tsx";


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
          <h4 className="d-flex justify-content-center" style={{ color: 'Black' }}>
            Manage Internal Users
          </h4>
          <nav className="navbar navbar-light" style={{ backgroundColor: "#B31942" }}>
            <h4 className="ms-4" style={{ color: 'white' }}>Search</h4>
          </nav>
          <Card className="p-fluid" style={{ maxWidth: '100%', padding: '2rem' }}>
            <form onSubmit={handleSubmit}>
              <Row className="d-flex">
                <Col xs={4} sm={4} md={4} className="d-flex justify-content-center mb-3">
                  <FloatLabel className="w-100">
                    <label htmlFor="firstName">First Name</label>
                    <InputText
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="mobile-input"
                      style={{ width: '100%' }}
                    />
                  </FloatLabel>
                </Col>

                <Col xs={4} sm={4} md={4} className="d-flex justify-content-center mb-3">
                  <FloatLabel className="w-100">
                    <label htmlFor="lastName">Last Name</label>
                    <InputText
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required
                      className="w-100"
                      style={{ width: '100%' }}
                    />
                  </FloatLabel>
                </Col>

                <Col xs={4} sm={4} md={4} className="d-flex justify-content-center mb-3">
                  <FloatLabel className="w-100">
                    <Dropdown
                      inputId="dd-city"
                      value={userStatus}
                      id="userStatus"
                      onChange={(e) => setUserStatus(e.value)}
                      options={userStatuses}
                      className="w-100"
                      style={{ width: '100%' }}
                    />
                    <label htmlFor="dd-city">User Status</label>
                  </FloatLabel>
                </Col>
              </Row>

              <Row className="mt-4 d-flex">
                <Col xs={5} sm={4} md={4} className="d-flex justify-content-center mb-3">
                  <FloatLabel className="w-100">
                    <Dropdown
                      inputId="dd-role"
                      value={role}
                      id="role"
                      onChange={(e) => setRole(e.value)}
                      options={roles}
                      className="w-100"
                      style={{ width: '100%' }}
                    />
                    <label htmlFor="dd-role">Role</label>
                  </FloatLabel>
                </Col>

                <Col xs={5} sm={4} md={4} className="d-flex justify-content-center mb-3">
                  <FloatLabel className="w-100">
                    <Dropdown
                      inputId="dd-location"
                      value={location}
                      id="location"
                      onChange={(e) => setLocation(e.value)}
                      options={locations}
                      className="w-100"
                      style={{ width: '100%' }}
                    />
                    <label htmlFor="dd-location">Location</label>
                  </FloatLabel>
                </Col>
              </Row>

              <Row className="d-flex justify-content-center" style={{ marginTop: '0px' }}>
                <Col xs={12} sm={8} md={8} className="d-flex justify-content-center">
                  <Button
                    label="Reset"
                    type="reset"
                    className="p-button-lg mx-2"
                    style={{ backgroundColor: '#0A3161' }}
                    icon={<RiRestartFill size={30} />}
                  />
                  <Button
                    label="Search"
                    type="submit"
                    className="p-button-lg mx-2"
                    style={{ backgroundColor: '#0A3161' }}
                    icon={<FaSearch />}
                  />
                  <Button
                    label="Add User"
                    type="submit"
                    className="p-button-lg mx-2"
                    style={{ backgroundColor: '#0A3161' }}
                    icon={<FaUserPlus />}
                  />
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