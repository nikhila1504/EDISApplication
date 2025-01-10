import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Container, Row, Col } from 'react-bootstrap';
import { RiRestartFill } from 'react-icons/ri';
import { FaSearch, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  
      const handleClick = () => {
          navigate('/addNewUser');
      };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userStatus: null,
    location: null,
    role: null,
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    userStatus: '',
    location: '',
    role: '',
  });

  const validate = (): boolean => {
    const newErrors = {
      firstName: formData.firstName ? '' : 'First Name is required.',
      lastName: formData.lastName ? '' : 'Last Name is required.',
      userStatus: formData.userStatus ? '' : 'User Status is required.',
      role: formData.role ? '' : 'Role is required.',
      location: formData.location ? '' : 'Location is required.',
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      console.log(formData);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prevData) => {
      const updatedFormData = { ...prevData, [field]: value };
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: value ? '' : prevErrors[field],
      }));
      return updatedFormData;
    });
  };
  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      userStatus: null,
      location: null,
      role: null,
    });
    setErrors({
      firstName: '',
      lastName: '',
      userStatus: '',
      location: '',
      role: '',
    });
  };

  return (
    <Container fluid style={{ marginTop: '2%' }}>
      <Row>
        <Col xs={12} lg={8} className="mx-auto">
          <Card className="p-fluid card-section">
            <h5 className="text-center mb-4" style={{ color: '#0A3161' }}>
              Manage Internal Users
            </h5>
            <form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col xs={12} sm={6} className="mb-3 mt-2">
                  <FloatLabel>
                    <InputText
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                      className={`custom-input ${errors.firstName ? 'p-invalid' : ''}`}
                    />
                    <label htmlFor="firstName">First Name</label>
                  </FloatLabel>
                  {errors.firstName && <small className="p-error">{errors.firstName}</small>}
                </Col>
                <Col xs={12} sm={6} className="mb-3 mt-2">
                  <FloatLabel>
                    <InputText
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      required
                      className={`custom-input ${errors.lastName ? 'p-invalid' : ''}`}
                    />
                    <label htmlFor="lastName">Last Name</label>
                  </FloatLabel>
                  {errors.lastName && <small className="p-error">{errors.lastName}</small>}
                </Col>
              </Row>
              <Row>
                <Col xs={12} sm={6} className="mb-3 mt-2">
                  <FloatLabel>
                    <Dropdown
                      inputId="dd-status"
                      value={formData.userStatus}
                      onChange={(e) => handleInputChange('userStatus', e.value)}
                      options={userStatuses}
                      className={`custom-input ${errors.userStatus ? 'p-invalid' : ''}`}
                    />
                    <label htmlFor="dd-status">User Status</label>
                  </FloatLabel>
                  {errors.userStatus && <small className="p-error">{errors.userStatus}</small>}
                </Col>
                <Col xs={12} sm={6} className="mb-3 mt-2">
                  <FloatLabel>
                    <Dropdown
                      inputId="dd-role"
                      value={formData.role}
                      onChange={(e) => handleInputChange('role', e.value)}
                      options={roles}
                      className={`custom-input ${errors.role ? 'p-invalid' : ''}`}
                    />
                    <label htmlFor="dd-role">Role</label>
                  </FloatLabel>
                  {errors.role && <small className="p-error">{errors.role}</small>}
                </Col>
              </Row>
              <Row>
                <Col xs={12} className="mb-3 mt-2">
                  <FloatLabel>
                    <Dropdown
                      inputId="dd-location"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.value)}
                      options={locations}
                      className={`custom-input ${errors.location ? 'p-invalid' : ''}`}
                    />
                    <label htmlFor="dd-location">Location</label>
                  </FloatLabel>
                  {errors.location && <small className="p-error">{errors.location}</small>}
                </Col>
              </Row>
              <Row className="justify-content-center mt-3">
                <Col xs="auto" className="mb-2">
                  <Button
                    label="Reset"
                    type="reset"
                    className="p-button-lg"
                    onClick={handleReset}
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
                    onClick={handleClick}
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