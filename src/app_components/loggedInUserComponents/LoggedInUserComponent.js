import React, { useState, useEffect } from "react";
import "./navbar/style.css";
import Navbar from "./navbar/Navbar";
import "react-multi-carousel/lib/styles.css";
import ServicesComponent from "./servicesComponents/ServicesComponent";
import SignInSignUpForm from "./../sign_in_up/SignInSignUpForm";
import { CookieConsentProvider } from "./../../cookies/cookie_consent";
import CookiePolicyModal from "./../../cookies/CookiePolicyModal";
import { fetchServices } from "./servicesComponents/fetchServices";

function LoggedInUserComponent({
  isUserLoggedIn,
  handleLogout,
  handleLoginSuccess,
}) {
  const [services, setServices] = useState([]);
  const [showSignInSignUp, setShowSignInSignUp] = useState(false);
  const [isCookiePolicyVisible, setIsCookiePolicyVisible] = useState(false);
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState("services");
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);
  const [isServiceSelected, setIsServiceSelected] = useState(false);

  useEffect(() => {
    // Fetch services when the component mounts
    const fetchAndSetServices = async () => {
      try {
        const fetchedServices = await fetchServices();
        setServices(fetchedServices);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchAndSetServices();
  }, []);

  const toggleCookiePolicyModal = () => {
    setIsCookiePolicyVisible(!isCookiePolicyVisible);
  };

  const toggleSignInSignUp = () => {
    setShowSignInSignUp(!showSignInSignUp);
  };

  const handleNavbarHover = () => {
    setIsNavbarExpanded(true);
  };

  const handleNavbarLeave = () => {
    setIsNavbarExpanded(false);
  };

  const handleServiceClick = (index) => {
    if (index >= 0 && index < services.length) {
      if (isServiceSelected && selectedServiceIndex === index) {
        setIsServiceSelected(false);
        setSelectedServiceIndex(null);
      } else {
        setSelectedServiceIndex(index);
        setIsServiceSelected(true);
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
            services={services}
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
                onLoginSuccess={handleLoginSuccess}
              />
            )}
          </div>
        ) : null;
      case "profile":
        return (
          <div className="user-board">
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
            onSignInSignUpClick={toggleSignInSignUp}
          />
          <main
            className={`content ${isNavbarExpanded
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
