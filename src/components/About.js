// src/components/About.js
import React from 'react';

const About = () => {
  return (
    <div className="container about-container">
      <h1>About Me</h1>
      <div className="backplate">
        <p>
        Hello I am Johnathon Nelson, a Computer Science student at CSUF. I have experience with Python and C++ as well as some background in Database a and Data Analysis using R.
        </p>
        <a href="/path-to-your-resume.pdf" download>Download Resume</a>
      </div>
    </div>
  );
};

export default About;
