import React from 'react';
import NavBar from './NavBar'; // Import the NavBar
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <div className="hero">
        <h1>Welcome to the Post Platform</h1>
        <p>Share your questions and articles with the community!</p>
      </div>

      {/* Content Section */}
      <div className="content">
        <div className="feature">
          <img src="image1.jpeg" alt="Feature 1" className="image1.jpeg" width={400}/>
          <h2>Doubt</h2>
          <p>"Have a question? Don't hesitate to ask! We're here to help you find answers."</p>
        </div>
        <div className="feature">
          <img src="image2.webp" alt="Feature 2" className="image2.webp" width={400}/>
          <h2>Find Question</h2>
          <p>Easily search through a list of questions using filters for tags, titles, and dates. This feature helps users quickly find relevant questions to answer or review, ensuring a smooth user experience.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;