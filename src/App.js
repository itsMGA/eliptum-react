import React from "react";
import "./style.css";
import "./services-style.css";
import Service from "./Service";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";
import { services_data } from "./services_data";
import { motion, AnimatePresence } from "framer-motion";
import ServicesComponent from "./ServicesComponent";
import SignInSignUpForm from "./SignInSignUpForm"; // Import the SignIn/SignUp Form Component
import { CookieConsentProvider } from "./cookies/cookie_consent"; // Adjust the import path as necessary
import CookiePolicyModal from "./cookies/CookiePolicyModal";

export default function App() {
  // Add state to handle showing the SignIn/SignUp form
  const [showSignInSignUp, setShowSignInSignUp] = useState(false);
  const [isCookiePolicyVisible, setIsCookiePolicyVisible] = useState(false);

  const toggleCookiePolicyModal = () => {
    setIsCookiePolicyVisible(!isCookiePolicyVisible);
  };
  const toggleSignInSignUp = () => {
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
        return <SignInSignUpForm toggleForm={toggleSignInSignUp} />;

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
            onSignInSignUpClick={toggleSignInSignUp} // Add prop for SignIn/SignUp click
          />
          <div className="user-login-form">
            {showSignInSignUp && (
              <SignInSignUpForm toggleForm={toggleSignInSignUp} />
            )}
          </div>
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
