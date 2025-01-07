import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Row, Col } from 'react-bootstrap';
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';
import { FloatLabel } from 'primereact/floatlabel';
import { Card } from 'primereact/card';
import { useNavigate } from 'react-router-dom';

const RegistrationForm: React.FC = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear any stored user data (e.g., tokens, session info)
        localStorage.removeItem('authToken'); // Example: clear auth token
        navigate('/login'); // Redirect to the login page
    };
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mailingAddress1: '',
    mailingAddress2: '',
    suffix:'',
    securityRole: '',
    city: '',
    state: '',
    zip: '',
    zipExt: '',
    phone: '',
    phoneExt: '',
    officeLocation: '',
    password: '',
    confirmPassword: '',
    badgeNumber:''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    mailingAddress1: '',
    securityRole: '',
    city: '',
    state: '',
    zip: '',
    phone: '',

    officeLocation: '',
    password: '',
    confirmPassword: '',
    badgeNumber:''
  });

  const [roles] = useState([
    { label: 'Atlanta', value: 'Atlanta' },
    { label: 'Gainesvelle', value: 'Gainesvelle' },
    { label: 'Savannah', value: 'manager' }
  ]);
  const header = <div className="font-bold mb-3">Pick a password</div>;
  const footer = (
      <>
          <Divider />
          <p className="mt-2">Suggestions</p>
          <ul className="pl-2 ml-2 mt-0 line-height-3">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
          </ul>
      </>
  );
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const value = e.target.value;
    setFormData({ ...formData, [field]: value });
    setErrors(prevErrors => ({
        ...prevErrors,
        [field]: '',
      }));
  };

  const handleDropdownChange = (e: any, field: string) => {
    setFormData({ ...formData, [field]: e.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let formIsValid = true;


    if (validate()) {
      // Proceed with form submission (e.g., send data to server)
      alert('Form submitted successfully');
    }
    console.log('Form Data:', formData);
    // Handle form submission, e.g., send data to the server
  };
  const validate = (): boolean => {
    const newErrors: any = {};

    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.mailingAddress1) newErrors.mailingAddress1 = 'Mailing Address1 is required';
    if (!formData.securityRole) newErrors.securityRole = 'Security Role is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.zip) newErrors.zip = 'ZIP Code is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.officeLocation) newErrors.officeLocation = 'Office Location is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords must match';
    
    // Optional: Add phone number and zip code validation (e.g., regex)
    const phoneRegex = /^[0-9]{10}$/;
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    const zipRegex = /^[0-9]{5}$/;
    if (formData.zip && !zipRegex.test(formData.zip)) {
      newErrors.zip = 'ZIP code must be 5 digits';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
};

  return (
    <section>

    <div className="form-page">
               
       <div className="form-container">
           <div style={{ marginLeft: '85%' }}>
               <Button
               label="Logout"
               icon="pi pi-sign-out"
               className="p-button-danger logout-button"
               onClick={handleLogout}
           /></div>
           <Card className="form-card">
               
               <h5 className="text-center" style={{ color: '#0A3161', marginTop: '0' }}>User Registration</h5>
                   <form onSubmit={handleSubmit}>
                       <Row className="mb-3 mt-4">
                       {/* First Name and Last Name */}
                       <Col sm={12} md={6}>
                           <div className="p-field">
                               <FloatLabel>
                                   <label htmlFor="firstName">First Name</label>
                                   <InputText
                                       id="firstName"
                                       value={formData.firstName}
                                       onChange={(e) => handleInputChange(e, 'firstName')}
                                       placeholder="Enter your first name"
                                       className="w-100"
                                   />
                           </FloatLabel>
                           {errors.firstName && <small className="p-error">{errors.firstName}</small>}
                           </div>
                       </Col>
               {/* Mailing Address */}
               <Col sm={12}  md={6}>
                           <div className="p-field">
                               <FloatLabel>  
                                   <label htmlFor="mailingAddress1">Mailing Address 1</label>
                                   <InputText
                                       id="mailingAddress1"
                                       value={formData.mailingAddress1}
                                       onChange={(e) => handleInputChange(e, 'mailingAddress1')}
                                       placeholder="Enter your mailing address"
                                       className="w-100"
                                   />
                               </FloatLabel>
                               {errors.mailingAddress1 && <small className="p-error">{errors.mailingAddress1}</small>}
                           </div>  
                       </Col>
                       
                       </Row>

                       <Row className="mb-3 mt-4">

                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                               <label htmlFor="lastName">Last Name</label>
                               <InputText
                                   id="lastName"
                                   value={formData.lastName}
                                   onChange={(e) => handleInputChange(e, 'lastName')}
                                   placeholder="Enter your last name"
                                   className="w-100"
                               />
                           </FloatLabel>
                           {errors.lastName && <small className="p-error">{errors.lastName}</small>}
                           </div>
                       </Col>
                       {/* Mailing Address */}
                       <Col sm={12}  md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="mailingAddress2">Mailing Address 2</label>
                           <InputText
                               id="mailingAddress2"
                               value={formData.mailingAddress2}
                               onChange={(e) => handleInputChange(e, 'mailingAddress2')}
                               placeholder="Enter your mailing address"
                               className="w-100"
                           />
                           </FloatLabel>
                           </div>
                       </Col>
                       </Row>
                       <Row className="mb-3 mt-4">
                       {/* Suffix */}
                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="suffix">Suffix</label>
                           <InputText
                               id="suffix"
                               value={formData.suffix}
                               onChange={(e) => handleInputChange(e, 'suffix')}
                               placeholder="Enter suffix"
                               className="w-100"
                           />
                           </FloatLabel>
                           </div>
                       </Col>
                       {/* City and State */}
                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="city">City</label>
                           <InputText
                               id="city"
                               value={formData.city}
                               onChange={(e) => handleInputChange(e, 'city')}
                               placeholder="Enter your city"
                               className="w-100"
                           />
                           </FloatLabel>
                           {errors.city && <small className="p-error">{errors.city}</small>}
                           </div>
                       </Col>
                       </Row>

                       <Row className="mb-3 mt-4">

                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="securityRole">Security Role</label>
                           <InputText
                               id="securityRole"
                               value={formData.securityRole}
                               onChange={(e) => handleInputChange(e, 'securityRole')}
                               placeholder="Enter your securityRole"
                               className="w-100"
                           />
                           </FloatLabel>
                           {errors.securityRole && <small className="p-error">{errors.securityRole}</small>}
                           </div>
                       </Col>
                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="state">State</label>
                           <InputText
                               id="state"
                               value={formData.state}
                               onChange={(e) => handleInputChange(e, 'state')}
                               placeholder="Enter your state"
                               className="w-100"
                           />
                           </FloatLabel>
                           {errors.state && <small className="p-error">{errors.state}</small>}
                           </div>
                       </Col>
                       </Row>
                       <Row className="mb-3 mt-4">
                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="badgeNumber">Badge Number</label>
                           <InputText
                               id="badgeNumber"
                               value={formData.badgeNumber}
                               onChange={(e) => handleInputChange(e, 'badgeNumber')}
                               placeholder="Enter your badgeNumber"
                               className="w-100"
                           />
                       </FloatLabel>
                           </div>
                       </Col>
                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="zip">ZIP Code</label>
                           <InputText
                               id="zip"
                               value={formData.zip}
                               onChange={(e) => handleInputChange(e, 'zip')}
                               placeholder="ZIP"
                               className="w-100"
                           />
                           </FloatLabel>
                           {errors.zip && <small className="p-error">{errors.zip}</small>}
                           </div>
                       </Col>

                       </Row>

                       <Row className="mb-3 mt-4">

                       <Col sm={12} md={6}>
                           <div className="p-field">
                       
                           <FloatLabel className="w-full md:w-14rem">
                               <Dropdown 
                           
                               value={formData.officeLocation}  
                               id="officeLocation" 
                               onChange={(e) => handleDropdownChange(e, 'officeLocation')} 
                               options={roles}  
                               className="w-full" />
                               <label htmlFor="dd-city">Office Location</label>
                           </FloatLabel>
                           {errors.officeLocation && <small className="p-error">{errors.officeLocation}</small>}
                           </div>
                       </Col>
                       
                       <Col sm={12} md={2}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="zipExt">ZIP Ext</label>
                           <InputText
                               id="zipExt"
                               value={formData.zipExt}
                               onChange={(e) => handleInputChange(e, 'zipExt')}
                               placeholder="Extension"
                               className="w-100"
                           />
                           </FloatLabel>
                           </div>
                       </Col>
                   
                       </Row>
                   

                       <Row className="mb-3 mt-4">
                       

                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           
                           <Password inputId="password"
                           value={formData.password} 
                           onChange={(e) => handleInputChange(e, 'password')} 
                           header={header} 
                           footer={footer} 
                           className="w-100"/>
                           <label htmlFor="password">Password</label>
                           </FloatLabel>
                           {errors.password && <small className="p-error">{errors.password}</small>}
                           </div>
                       </Col>
                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="phone">Phone</label>
                           <InputText
                               id="phone"
                               value={formData.phone}
                               onChange={(e) => handleInputChange(e, 'phone')}
                               placeholder="Phone number"
                               className="w-100"
                           />
                           </FloatLabel>
                           </div>
                       </Col>
                       </Row>
                   

                       <Row className="mb-3 mt-4">
                       <Col sm={12} md={6}>
                           <div className="p-field">
                           <FloatLabel>
                           
                           <Password
                               inputId="confirmPassword"
                               value={formData.confirmPassword}
                               onChange={(e) => handleInputChange(e, 'confirmPassword')}
                               header={header} 
                               footer={footer} 
                               className="w-100"
                           />

                           <label htmlFor="confirmPassword">Confirm Password</label>
                           </FloatLabel>
                           {errors.confirmPassword && <small className="p-error">{errors.confirmPassword}</small>}
                           </div>
                       </Col>
                       <Col sm={12} md={2}>
                           <div className="p-field">
                           <FloatLabel>
                           <label htmlFor="phoneExt">Phone Ext</label>
                           <InputText
                               id="phoneExt"
                               value={formData.phoneExt}
                               onChange={(e) => handleInputChange(e, 'phoneExt')}
                               placeholder="Phone number Ext"
                               className="w-100"
                           />
                           </FloatLabel>
                           </div>
                       </Col>
                       </Row>

                       {/* Submit Button */}
                       <Button type="submit" label="Register" className="p-button p-button-primary w-100" style={{ backgroundColor: '#0A3161'}}/>
                   </form>
               </Card>
           </div>
       </div>
   </section>
  );
};

export default RegistrationForm;
