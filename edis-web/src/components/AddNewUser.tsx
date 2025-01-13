import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import { Button } from 'primereact/button';
import { Container, Row, Col } from 'react-bootstrap';
import { RiRestartFill } from 'react-icons/ri';
import { FaCheck  } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const roles = [
  { label: 'Admin', value: 'admin' },
  { label: 'User', value: 'user' },
  { label: 'Manager', value: 'manager' },
];


const AddNewUser: React.FC = () => {
  const navigate = useNavigate();
  
      const handleClick = () => {
          navigate('/addNewUser');
      };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email:'',
    role: null,
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email:'',
    role: '',
  });

  const validate = (): boolean => {
    const newErrors = {
      firstName: formData.firstName ? '' : 'First Name is required.',
      lastName: formData.lastName ? '' : 'Last Name is required.',
      email: /^\S+@\S+\.\S+$/.test(formData.email) ? '' : 'A valid Email is required.',
      role: formData.role ? '' : 'Role is required.',
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
      email: '',
      role: null,
    });
    setErrors({
      firstName: '',
      lastName: '',
      email: '',
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
                    <InputText
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      required
                      className={`custom-input ${errors.email ? 'p-invalid' : ''}`}
                    />
                    <label htmlFor="email">Email</label>
                  </FloatLabel>
                  {errors.email && <small className="p-error">{errors.email}</small>}
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
                    label="Submit"
                    type="submit"
                    className="p-button-submit"
                    style={{ backgroundColor: '#0A3161' }}
                    icon={<FaCheck />}
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

export default AddNewUser;