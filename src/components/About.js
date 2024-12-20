// src/components/About.js
import React from 'react';
import aboutImage from './me.jpg'
const About = () => {
  return (
    <div className="container about-container">
      <h1>About Me</h1>
      <div className="backplate">
        <p>
          Hello! I am Johnathon Nelson, a Computer Science student at CSUF. I have experience with Python and C++, as well as some background in Database Management with SQL and Data Analysis using R.
        </p>
        <a href="\resume.pdf" download>Download Resume</a>
      </div>
      <img 
  src={aboutImage} 
  alt="About Me" 
  style={{ width: '400px', height: 'auto', borderRadius: '10px', marginTop: '20px' }} 
/>

    </div>
  );
};

export default About;