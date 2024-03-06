import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import SignInSignUpForm from "./../sign_in_up/SignInSignUpForm";
import LoggedInUserComponent from "./../loggedInUserComponents/LoggedInUserComponent";
import { isAuthenticated } from "./../auth/auth.js";

function LandingPage() {
  const [showSignInSignUp, setShowSignInSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in

  useEffect(() => {
    const authStatus = isAuthenticated();
    setIsLoggedIn(authStatus);
  }, []);

  const toggleSignInSignUpModal = () => {
    setShowSignInSignUp(!showSignInSignUp);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true); // Update isLoggedIn state upon successful login
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Assuming JWT token is stored here
    setIsLoggedIn(false); // Update authStatus state to reflect logged-out state
  };

  return (
    <>
      {!isLoggedIn && (
        <div className="landing-page-container">
          <h1>Welcome to Our Service</h1>
          <p>Join us to explore our premium services.</p>
          <button onClick={toggleSignInSignUpModal}>Sign In/Sign Up</button>
        </div>
      )}
      {isLoggedIn && (
        <div className="user-login-form">
          <LoggedInUserComponent
            isUserLoggedIn={isLoggedIn}
            handleLogout={handleLogout}
            handleLoginSuccess={handleLoginSuccess}
          />
        </div>
      )}
      {showSignInSignUp && (
        <SignInSignUpForm
          toggleForm={toggleSignInSignUpModal}
          onLoginSuccess={handleLoginSuccess}
          // Pass handleLoginSuccess as prop
        />
      )}
    </>
  );
}

export default LandingPage;
