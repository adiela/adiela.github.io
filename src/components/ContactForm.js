import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Form submission logic goes here
      fetch('https://formspree.io/f/xrgojjly', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Name"
        />
        {errors.name && <p className="form-error" style={{ color: 'red' }}>{errors.name}</p>}
      </fieldset>
      <fieldset>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        {errors.email && <p className="form-error" style={{ color: 'red' }}>{errors.email}</p>}
      </fieldset>
      <fieldset>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          placeholder="Message"
          rows="10"
        />
        {errors.message && <p className="form-error" style={{ color: 'red' }}>{errors.message}</p>}
      </fieldset>
      <button type="submit" className="button">Submit</button>
    </form>
  );
}
