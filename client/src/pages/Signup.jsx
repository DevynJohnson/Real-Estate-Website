import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Use this to navigate after signup

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error before each submit

    // Basic validation
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Successful signup, store the token and navigate to the home page
        localStorage.setItem('id_token', data.token); // Store the token in localStorage
        console.log('Signup successful', data);
        navigate('/'); // Redirect to home page after signup
      } else {
        // Show error message
        setError(data.message || 'Something went wrong during signup');
      }
    } catch (error) {
      console.error('Error signing up:', error);
      setError('An error occurred while signing up. Please try again later.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Row className="w-100">
        <Col md={6} className="mx-auto">
          <h2 className="text-center mb-4">Sign Up</h2>
          
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" block>
              Sign Up
            </Button>
          </Form>

          <div className="mt-3 text-center">
            <p>
              Already have an account?{' '}
              <Link to="/login">Login here.</Link>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
