import React, { useState } from "react";
import "./LandingPage.css";
import SignInSignUpForm from "./../sign_in_up/SignInSignUpForm";

function LandingPage({ onLoginSuccess }) {
  const [showSignInSignUp, setShowSignInSignUp] = useState(false);

  const toggleSignInSignUpModal = () => {
    setShowSignInSignUp(!showSignInSignUp);
  };

  return (
    <div className="landing-page-container">
      <h1>Welcome to Our Service</h1>
      <p>Join us to explore our premium services.</p>
      <button onClick={toggleSignInSignUpModal}>Sign In/Sign Up</button>
      {showSignInSignUp && (
        <SignInSignUpForm
          toggleForm={toggleSignInSignUpModal}
          onLoginSuccess={onLoginSuccess}
        />
      )}
    </div>
  );
}

export default LandingPage;
