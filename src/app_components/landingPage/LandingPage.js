// LandingPage.js
import React from "react";
import "./LandingPage.css";

function LandingPage({ onSignInSignUp }) {
  return (
    <div className="landing-page-container">
      <h1>Welcome to Our Service</h1>
      <p>Join us to explore our premium services.</p>
      <button onClick={onSignInSignUp}>Sign In/Sign Up</button>
    </div>
  );
}

export default LandingPage;
