// src/components/Contact.js
import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('Johnathon Nelson');
  const [email, setEmail] = useState('firgejohn3@gmail.com');
  const [message, setMessage] = useState('stuff here');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add logic to handle form submission, such as sending the data to an API.
    alert('Message sent!');
  };

  return (
    <div>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          />
        </div>
        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>

      <div>
        <p>Or find me on:</p>
        <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </div>
  );
};

export default Contact;
