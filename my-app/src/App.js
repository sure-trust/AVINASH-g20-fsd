import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SplashScreen from './SplashScreen.js';  // Import the SplashScreen component
import Home from './Home';
import Login from './cmpo/Login';
import Signup from './cmpo/Signup';
import UploadProject from './cmpo/UploadProject';
import DomainsPage from './cmpo/DomainsPage';
import ProjectsPage from './cmpo/ProjectsPage';
import CoursesGrid from './cmpo/CoursesGrid';
import CourseDetails from './cmpo/CourseDetails';
import CreateCourse from './cmpo/CreateCourse';

function App() {
  return (
    <Router>
      <Routes>
        {/* Splash Screen route */}
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />  {/* Home route after splash screen */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/uploadprojects" element={<UploadProject />} />
        <Route path="/intern" element={<DomainsPage />} />
        <Route path="/projects/:domain" element={<ProjectsPage />} />
        <Route path="/courses" element={<CoursesGrid />} />
        <Route path="/courseDetails/:name" element={<CourseDetails />} />
        <Route path="/create/course" element={<CreateCourse />} />
      </Routes>
    </Router>
  );
}

export default App;
