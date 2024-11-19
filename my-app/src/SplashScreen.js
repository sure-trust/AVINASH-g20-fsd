// SplashScreen.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SplashScreen.css'; // Create this CSS file for styling
import img from "./suretrust.jpg"

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set a timer to navigate to the main page after the animation
    const timer = setTimeout(() => {
      navigate('/home'); // Replace '/home' with your desired route
    }, 3000); // 3 seconds for the splash screen

    return () => clearTimeout(timer); // Clean up the timer
  }, [navigate]);

  return (
    <div className="splash-screen">
      <img src={img} alt="SURE Trust Logo" className="splash-logo" />
      <h1 className="splash-title">SURE Trust</h1>
    </div>
  );
};

export default SplashScreen;
