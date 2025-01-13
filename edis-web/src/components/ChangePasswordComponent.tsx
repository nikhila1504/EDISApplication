
import React, { useState } from 'react';
import { Form, Button, Col, Row, Card } from 'react-bootstrap';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';
import { FloatLabel } from 'primereact/floatlabel';

interface Errors {
  oldPassword?: string;
  newPassword?: string;
  confirmPassword?: string;
}

const ChangePasswordComponent = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toastRef = React.useRef<Toast>(null);

  const validatePassword = (password: string) => {
    let errorMessages: string[] = [];

    if (password.length < 10) {
      errorMessages.push('Password must be a minimum of 10 characters');
    }

    const letterCount = (password.match(/[a-zA-Z]/g) || []).length;
    if (letterCount < 5) {
      errorMessages.push('Password must have at least 5 letters');
    }

    const uppercaseCount = (password.match(/[A-Z]/g) || []).length;
    if (uppercaseCount < 2) {
      errorMessages.push('Password must have at least two uppercase letters');
    }

    const numberCount = (password.match(/\d/g) || []).length;
    if (numberCount < 2) {
      errorMessages.push('Password must have at least two numbers');
    }

    const specialCount = (password.match(/[!@#\$%\^&\*\(\)<>?]/g) || []).length;
    if (specialCount < 2) {
      errorMessages.push('Password must have at least two special characters');
    }

    return errorMessages;
  };

  const handleFieldChange = (field: keyof Errors) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: undefined, // Remove any existing error message for this field
    }));

    if (field === 'oldPassword') {
      setOldPassword(value);
    } else if (field === 'newPassword') {
      setNewPassword(value);
    } else if (field === 'confirmPassword') {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true); // Mark the form as submitted

    let formErrors: any = {};

    // Check for required fields
    if (!oldPassword) formErrors.oldPassword = 'Old password is required';
    if (!newPassword) formErrors.newPassword = 'New password is required';
    if (!confirmPassword) formErrors.confirmPassword = 'Confirm password is required';

    // Validate new password
    const passwordErrors = validatePassword(newPassword);
    if (passwordErrors.length > 0) {
      formErrors.newPassword = passwordErrors.join(', ');
    }

    // Check if passwords match
    if (newPassword !== confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      toastRef.current?.show({ severity: 'success', summary: 'Success', detail: 'Password changed successfully!', life: 3000 });
    } else {
      toastRef.current?.show({ severity: 'error', summary: 'Error', detail: 'Please fill all fields correctly!', life: 3000 });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ marginTop: '10%' }}>
      <Toast ref={toastRef} />
      <Card className="p-4 w-80 col-md-6 col-lg-4 card-section">
        <Form onSubmit={handleSubmit} autoComplete="off">
          <Row className="mb-3">
            <Form.Group as={Col} md={12} controlId="oldPassword">
              <FloatLabel>
                <Password
                  inputId="oldPassword"
                  value={oldPassword}
                  onChange={handleFieldChange('oldPassword')}
                  className={`form-control ${errors.oldPassword && isSubmitted ? 'p-invalid' : ''}`}
                  feedback={false} 
                  placeholder=" "
                  toggleMask
                />
                <label htmlFor="oldPassword">Old Password</label>
              </FloatLabel>
              {errors.oldPassword  && (
                <small className="p-error">{errors.oldPassword}</small>
              )}
            </Form.Group>

            <Form.Group as={Col} md={12} controlId="newPassword" className="mt-4">
              <FloatLabel>
                <Password
                  inputId="newPassword"
                  value={newPassword}
                  onChange={handleFieldChange('newPassword')}
                  className={`form-control ${errors.newPassword && isSubmitted ? 'p-invalid' : ''}`}
                  feedback={false}
                  placeholder=" "
                  type="password"
                  toggleMask
                />
                <label htmlFor="newPassword">New Password</label>
              </FloatLabel>
              {errors.newPassword && isSubmitted && (
                <div className="p-error">
                  {errors.newPassword}
                </div>
              )}
            </Form.Group>

            <Form.Group as={Col} md={12} controlId="confirmPassword" className="mt-4">
              <FloatLabel>
                <Password
                  inputId="confirmPassword"
                  value={confirmPassword}
                  onChange={handleFieldChange('confirmPassword')}
                  className={`form-control ${errors.confirmPassword && isSubmitted ? 'p-invalid' : ''}`}
                  feedback={false}
                  placeholder=" "
                  toggleMask
                />
                <label htmlFor="confirmPassword">Confirm Password</label>
              </FloatLabel>
              {errors.confirmPassword && isSubmitted && (
                <div className="p-error">
                  {errors.confirmPassword}
                </div>
              )}
            </Form.Group>
          </Row>

          <Button variant="primary" type="submit" className="mt-3 w-100" style={{ backgroundColor: '#0A3161' }}>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default ChangePasswordComponent;