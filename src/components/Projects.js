// src/Projects.js
import React from 'react';
import checkersImage from './checkers.jpg'
import robloxImage from './roblox.jpg'
const Projects = () => {
  return (
    <div className="container projects-container">
      <h1>My Projects</h1>
      <ul className="projects-list">
        <li className="project-item">
          <img src={checkersImage} alt="Checkers Coach" className="project-image" />
          <div className="project-content">
            <h2>Checkers Coach</h2>
            <p>An algorithm that uses Alpha Beta pruning to recommend the best moves to a player in a checkers game.</p>
            <p className="technologies">Technologies: Python</p>
            <a href="https://github.com/firgejohn/Checkers" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        </li>
        <li className="project-item">
          <img src={robloxImage} alt="UP Roblox Game" className="project-image" />
          <div className="project-content">
            <h2>UP Roblox Game</h2>
            <p>A series of mazes and quizzes designed to help students learn about the Unified Process.</p>
            <p className="technologies">Technologies: Roblox Studio</p>
            <a href="https://www.roblox.com/games/113007384688560/Unified-Process-UP-Introduction" target="_blank" rel="noopener noreferrer">View Repository</a>
          </div>
        </li>
        <li className="project-item">
          <img src="/path-to-placeholder-image.jpg" alt="Corrupted" className="project-image" />
          <div className="project-content">
            <h2>Sorry Professor</h2>
            <p>My old drive for my computer got corrupted. I only have access to these two projects for now.</p>
            <a href="https://github.com/firgejohn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
