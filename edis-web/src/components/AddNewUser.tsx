import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { FloatLabel } from 'primereact/floatlabel';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import { useNavigate } from 'react-router-dom';
import HeaderComponent from "./HeaderComponent.tsx";

const FormPage: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any stored user data (e.g., tokens, session info)
        localStorage.removeItem('authToken'); // Example: clear auth token
        navigate('/login'); // Redirect to the login page
    };

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: null,
    });
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: '',
    });

    const roles = [
        { label: 'Administrator', value: 'admin' },
        { label: 'User', value: 'user' },
        { label: 'Manager', value: 'manager' },
    ];

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        // Clear error if the field is valid
        if (value.trim() !== '') {
            setErrors({ ...errors, [name]: '' });
        }

        if (name === 'email' && errors.email) {
            const emailValid = /^\S+@\S+\.\S+$/.test(value);
            if (emailValid) setErrors({ ...errors, email: '' });
        }
    };

    const handleDropdownChange = (e: any) => {
        setFormData({ ...formData, role: e.value });

         // Clear error if role is selected
         if (e.value) {
            setErrors({ ...errors, role: '' });
        }
    };

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (validate()) {
            alert('Form submitted successfully!');
            console.log('Form Data:', formData);
        }
    };

    return (
        <section>
            
            <div className="form-page">
            
                <div className="form-container">
                {/* <div style={{ marginLeft: '85%' }}>
                    <Button
                    label="Logout"
                    icon="pi pi-sign-out"
                    className="p-button-danger logout-button"
                    onClick={handleLogout}
                /></div> */}
                    <Card className="form-card card-section">
                        
                        <h5 className="text-center" style={{ color: '#0A3161', marginTop: '0' }}>Add a New User</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="p-fluid mt-4">
                                <FloatLabel>
                                    <InputText
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`custom-input ${errors.firstName ? 'p-invalid' : ''}`}
                                    />
                                    <label htmlFor="firstName">First Name</label>
                                </FloatLabel>
                                {errors.firstName && <small className="p-error">{errors.firstName}</small>}

                                <FloatLabel className="mt-4">
                                    <InputText
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`custom-input ${errors.lastName ? 'p-invalid' : ''}`}
                                    />
                                    <label htmlFor="lastName">Last Name</label>
                                </FloatLabel>
                                {errors.lastName && <small className="p-error">{errors.lastName}</small>}

                                <FloatLabel className="mt-4">
                                    <InputText
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className={`custom-input ${errors.email ? 'p-invalid' : ''}`}
                                    />
                                    <label htmlFor="email">Email</label>
                                </FloatLabel>
                                {errors.email && <small className="p-error">{errors.email}</small>}

                                <FloatLabel className="mt-4">
                                    <Dropdown
                                        id="role"
                                        value={formData.role}
                                        options={roles}
                                        onChange={handleDropdownChange}
                                        placeholder="Select a Role"
                                        className={`custom-input ${errors.role ? 'p-invalid' : ''}`}
                                    />
                                    <label htmlFor="role">Role</label>
                                </FloatLabel>
                                {errors.role && <small className="p-error">{errors.role}</small>}
                            </div>
                            <Button
                                label="Submit"
                                className="mt-4 w-100 p-button-lg"
                                style={{ backgroundColor: '#0A3161' }}
                            />
                        </form>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default FormPage;
