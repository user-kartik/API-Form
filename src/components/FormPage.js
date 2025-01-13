import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './one.css';

const FormPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    dob: '',
    address: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.email || !formData.dob || !formData.address) {
      return 'All fields are required.';
    }
    if (!/^[a-zA-Z ]{1,15}$/.test(formData.name)) {
      return 'Name should be text only and max 15 characters.';
    }
    if (!/^\d{10}$/.test(formData.phone)) {
      return 'Phone number must be 10 digits.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Invalid email format.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errorMessage = validateForm();
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setError('');
      navigate('/form/details', { state: formData });
    }
  };

  return (
    <section>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="colour"></div>
      <div className="box">
        <div className="square" style={{ '--i': 0 }}></div>
        <div className="square" style={{ '--i': 1 }}></div>
        <div className="square" style={{ '--i': 2 }}></div>
        <div className="square" style={{ '--i': 3 }}></div>
        <div className="square" style={{ '--i': 4 }}></div>
        <div className="container">
          <form onSubmit={handleSubmit} className="form">
            <h2>Fill Out the Form</h2>
            <div className="input__box">
              <input name="name" placeholder="Name" onChange={handleChange} />
            </div>
            <div className="input__box">
              <input name="phone" placeholder="Phone Number" onChange={handleChange} />
            </div>
            <div className="input__box">
              <input name="email" placeholder="Email" onChange={handleChange} />
            </div>
            <div className="input__box">
              <input name="dob" type="date" placeholder="DOB" onChange={handleChange} />
            </div>
            <div className="input__box">
              <input name="address" placeholder="Address" onChange={handleChange} />
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="input__box">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormPage;
