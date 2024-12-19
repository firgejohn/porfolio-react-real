// src/components/Contact.js
import React, { useState } from 'react';


const Contact = () => {
  const [name, setName] = useState('First Name');
  const [email, setEmail] = useState('email@gmail.com');
  const [message, setMessage] = useState('Your Message');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent!');
  };

  return (
    <div className="container contact-container">
      <h1>Contact Me</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Message"
          required
        />
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <p>Or find me on:</p>
        <a href="https://github.com/firgejohn" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/john-nelson-b0a71a342/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
