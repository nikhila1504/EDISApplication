import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Container, Row, Col } from 'react-bootstrap';
import { RiRestartFill } from 'react-icons/ri';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import FooterComponent from './FooterComponent.tsx';

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
    <Container fluid style={{ marginTop: '2%' }}>
      <Row>
        <Col xs={12} lg={8} className="mx-auto">
          <Card className="p-fluid" style={{ padding: '1rem' }}>
            <h5 className="text-center mb-4" style={{ color: '#0A3161' }}>
              Manage Internal Users
            </h5>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col xs={12} sm={6} className="mb-3 mt-2">
                  <FloatLabel>
                    <InputText
                      id="firstName"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required
                      className="custom-input"
                    />
                    <label htmlFor="firstName">First Name</label>
                  </FloatLabel>
                </Col>
                <Col xs={12} sm={6} className="mb-3 mt-2">
                  <FloatLabel>
                    <InputText
                      id="lastName"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required 
                      className="custom-input"
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </FloatLabel>
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} className="mb-3 mt-2">
                  <FloatLabel>
                    <Dropdown
                      inputId="dd-status"
                      value={userStatus}
                      onChange={(e) => setUserStatus(e.value)}
                      options={userStatuses}
                      className="custom-input"
                    />
                    <label htmlFor="dd-status">User Status</label>
                  </FloatLabel>
                </Col>
                <Col xs={12} sm={6} className="mb-3 mt-2">
                  <FloatLabel>
                    <Dropdown
                      inputId="dd-role"
                      value={role}
                      onChange={(e) => setRole(e.value)}
                      options={roles}
                      className="custom-input"
                    />
                    <label htmlFor="dd-role">Role</label>
                  </FloatLabel>
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="mb-3 mt-2">
                  <FloatLabel>
                    <Dropdown
                      inputId="dd-location"
                      value={location}
                      onChange={(e) => setLocation(e.value)}
                      options={locations}
                      className="custom-input"
                    />
                    <label htmlFor="dd-location">Location</label>
                  </FloatLabel>
                </Col>
              </Row>
              <Row className="justify-content-center mt-3">
                <Col xs="auto" className="mb-2">
                  <Button
                    label="Reset"
                    type="reset"
                    className="p-button-lg"
                    style={{ backgroundColor: '#0A3161' }}
                    icon={<RiRestartFill size={20} />}
                  />
                </Col>
                <Col xs="auto" className="mb-2">
                  <Button
                    label="Search"
                    type="submit"
                    className="p-button-lg"
                    style={{ backgroundColor: '#0A3161' }}
                    icon={<FaSearch />}
                  />
                </Col>
                <Col xs="auto" className="mb-2">
                  <Button
                    label="Add User"
                    type="submit"
                    className="p-button-lg"
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
