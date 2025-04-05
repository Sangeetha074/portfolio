import React from 'react'

export const Details = () => {
  return (
    <div className="portfolio"> <header className="header">  <h1 className="title">Your Name</h1> <p className="subtitle">Full Stack Developer | Tech Enthusiast</p> </header>

<section className="section">
    <h2 className="section-title">About Me</h2>
    <p className="section-text">
      I am a passionate full-stack developer with experience in building responsive and scalable web applications using React, FastAPI, and MySQL.
    </p>
  </section>

  <section className="section">
    <h2 className="section-title">Skills</h2>
    <ul className="skills">
      <li>React</li>
      <li>FastAPI</li>
      <li>MySQL</li>
      <li>JavaScript</li>
      <li>HTML & CSS</li>
    </ul>
  </section>

  <section className="section">
    <h2 className="section-title">Projects</h2>
    <div className="project-card">
      <h3 className="project-title">Beast Force Gym</h3>
      <p className="project-desc">
        A gym management system with login functionality, data fetching from a FastAPI backend, and MySQL integration.
      </p>
      <a href="#" className="project-link">View Project</a>
    </div>
  </section>

  <section className="section">
    <h2 className="section-title">Contact</h2>
    <p>Email:sangeetharamadurai3@gmail.com</p>
    <p>LinkedIn:linkedin.com/in/sangeetha-r</p>
    <p>GitHub::github.com/Sangeetha074</p>
  </section>
</div>
  )
}
