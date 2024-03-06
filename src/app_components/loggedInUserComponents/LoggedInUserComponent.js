// LoggedInUserComponent.js
import React, { useState } from "react";
import "./navbar/style.css";
import "./servicesComponents/services-style.css";
import Navbar from "./navbar/Navbar";
import "react-multi-carousel/lib/styles.css";
import { services_data } from "./servicesComponents/services_data";
import ServicesComponent from "./servicesComponents/ServicesComponent";
import SignInSignUpForm from "./../sign_in_up/SignInSignUpForm";
import { CookieConsentProvider } from "./../../cookies/cookie_consent";
import CookiePolicyModal from "./../../cookies/CookiePolicyModal";

function LoggedInUserComponent({ isUserLoggedIn, handleLogout }) {
  const [showSignInSignUp, setShowSignInSignUp] = useState(false);
  const [isCookiePolicyVisible, setIsCookiePolicyVisible] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);

  const toggleCookiePolicyModal = () => {
    setIsCookiePolicyVisible(!isCookiePolicyVisible);
  };

  const toggleSignInSignUp = () => {
    setShowSignInSignUp(!showSignInSignUp);
  };

  const toggleSignInSignUp2 = () => {
    setShowSignInSignUp(!showSignInSignUp);
  };

  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const handleNavbarHover = () => {
    console.log("hovered");
    setIsNavbarExpanded(true);
  };

  const handleNavbarLeave = () => {
    console.log("not hovered");
    setIsNavbarExpanded(false);
  };

  const [selectedOption, setSelectedOption] = useState("home");

  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  const [isServiceSelected, setIsServiceSelected] = useState(false);

  const handleServiceClick = (index) => {
    console.log("Clicked service index:", index); // Add a log to track the index clicked

    if (index >= 0 && index < services_data.length) {
      // Check if index is within range
      if (isServiceSelected && selectedServiceIndex === index) {
        setIsServiceSelected(false); // If already selected, deselect
        console.log(false);
        setSelectedServiceIndex(null);
      } else {
        setSelectedServiceIndex(index);
        setIsServiceSelected(true); // Select the service
        console.log(true);
      }
    } else {
      console.error("Invalid index or index out of range");
    }
  };
  const renderContent = () => {
    switch (selectedOption) {
      case "home":
        return <text text="">Home</text>;
      case "services":
        return (
          <ServicesComponent
            selectedServiceIndex={selectedServiceIndex}
            handleServiceClick={handleServiceClick}
          />
        );

      case "shop":
        return <text text="">Shopping Spree</text>;
      case "contact":
        return <text text="">Hello, we'll be back soon</text>;
      case "signin":
      case "signup":
        return showSignInSignUp ? (
          <div className="user-login-form">
            {showSignInSignUp && (
              <SignInSignUpForm
                toggleForm={toggleSignInSignUp}
                onLoginSuccess={isUserLoggedIn}
              />
            )}
          </div>
        ) : null;

      case "profile":
        return (
          <div className="user-board">
            {/* User board content... */}
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        );

      default:
        return <text text="">Home</text>;
    }
  };

  return (
    <CookieConsentProvider onCookiePolicyClick={toggleCookiePolicyModal}>
      <html>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" href="style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
            rel="stylesheet"
          />
        </head>
        <body>
          <Navbar
            setSelectedOption={setSelectedOption}
            handleNavbarHover={handleNavbarHover}
            handleNavbarLeave={handleNavbarLeave}
            isNavbarExpanded={isNavbarExpanded}
            isUserLoggedIn={isUserLoggedIn}
            onSignInSignUpClick={toggleSignInSignUp} // Add prop for SignIn/SignUp click
          />

          <main
            className={`content ${
              isNavbarExpanded
                ? "shiftContent"
                : isNavbarExpanded === false
                  ? "shiftContentBack"
                  : ""
            }`}
          >
            {renderContent()}
          </main>
        </body>
      </html>
      <CookiePolicyModal
        isVisible={isCookiePolicyVisible}
        onClose={() => setIsCookiePolicyVisible(false)}
      />
    </CookieConsentProvider>
  );
}

export default LoggedInUserComponent;
