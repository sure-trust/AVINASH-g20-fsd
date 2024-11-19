import React, { useEffect, useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import './Home.css';
import axios from 'axios'; // Import axios for making HTTP requests
import Skeleton from 'react-loading-skeleton'; // Import Skeleton component
import Collaborators from './cmpo/Collaborators';
import img from "./suretrust.jpg"

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state for projects
  const [error, setError] = useState(null); // Add error state
  const navigate = useNavigate();
  console.log("proj",projects);

const move=()=>{
  navigate('/courses');
}
  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true); // Start loading
        const response = await axios.get('http://localhost:3001/sure/projects');
        setProjects(response.data);
        setLoading(false); // End loading
      } catch (error) {
        setError('Error fetching projects');
        setLoading(false); // End loading
        console.error('Error fetching projects:', error);
      }
    };
  
    fetchProjects();
  }, []); // Empty dependency array ensures it runs once on initial load
  
  

  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <img src={img} alt="SURE Trust Logo" />
          <h1>SURE Trust</h1>
          <div>Social Service Initiative</div>
        </div>
        <nav className="nav">
          <ul>
             <li><Link to="/uploadprojects" className="nav-button">Upload Projects</Link></li>
             <li><Link to="/login" className="nav-button">Login</Link></li>
            <li><Link to="/signup" className="nav-button">Signup</Link></li>
          </ul>
        </nav>


        <div className="actions">
          <button className="icon-button home-icon"></button>
          <button className="icon-button grid-icon"></button>
          <button className="icon-button theme-icon"></button>
        </div>
      </header>
      <div className="banner">
        <p>Training at SURE Trust is totally industry relevant with complete focus on real-time projects to gain hands-on experience</p>
      </div>
      <section className="main-content">
        <div className="text-content">
          <h2>SURE Trust</h2>
          <h3>Skill Upgradation for Rural-youth Empowerment</h3>
          <div className="buttons">
             <button onClick={move}className="btn secondary">Explore Courses</button>
          </div>
        </div>
        <div className="video-content">
          <iframe
            width="560"
            height="315"
            src="https://youtu.be/5elv45wEImo?si=nZxylE6-CyM3wxOf"
            title="SURE Trust Graduation Ceremony"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
      <section className="internship-projects">
        <h2>Internship Projects</h2>
        <div className="projects-grid">
          {loading ? (
            Array(6).fill(null).map((_, index) => (
              <div className="project-card" key={index}>
                <Skeleton height={200} /> {/* Skeleton for the image */}
                <div className="project-info">
                  <Skeleton width={100} height={20} /> {/* Skeleton for the domain */}
                  <Skeleton width={200} height={30} /> {/* Skeleton for the project name */}
                  <Skeleton count={3} /> {/* Skeleton for the description */}
                </div>
              </div>
            ))
          ) : error ? (
            <p>{error}</p> // Display error message
          ) : projects.length === 0 ? (
            <p>No projects available</p> // Handle empty project list
          ) : (
            projects.map((project, index) => (
              <div className="project-card" key={index}>
                <img 
                  src={project.image} 
                  alt={project.projectName} 
                  style={{ width: '100%', height: 'auto' }} 
                />
                <div className="project-info">
                  <p className="domain">{project.domainName}</p>
                  <h3>{project.projectName}</h3>
                  <p>{project.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </section>
      <section>
        <Collaborators/>
      </section>
    </div>
  );
};

export default Home;
