// pages/AboutUs.js
import React from 'react';
import Navbar from '../components/Navbar1'; // <-- Import Navbar

function AboutUs() {
  return (
    <div>
      <Navbar />  {/* Include the Navbar */}
      
      <div className="container mt-5">
        <h1>About Us</h1>
        <p>We are a company dedicated to making renting easier and more efficient.</p>
        {/* Add other content here */}
      </div>
    </div>
  );
}

export default AboutUs;
