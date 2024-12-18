// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <ul>
        <li>
          <h2>Project Name</h2>
          <p>Description of the project</p>
          <p>Technologies: React, Node.js, etc.</p>
        </li>
        {/* Add more projects below */}
        <li>
          <h2>Another Project</h2>
          <p>Description of another project</p>
          <p>Technologies: JavaScript, Express, etc.</p>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
