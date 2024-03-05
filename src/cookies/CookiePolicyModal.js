import React, { useState } from "react";
import "./StyleCookiePolicyModal.css";

const CookiePolicyModal = ({ isVisible, onClose }) => {
  const [isNecessaryDropdownVisible, setIsNecessaryDropdownVisible] =
    useState(false);
  const [isOptionalDropdownVisible, setIsOptionalDropdownVisible] =
    useState(false);

  if (!isVisible) return null;

  const toggleNecessaryDropdown = () =>
    setIsNecessaryDropdownVisible(!isNecessaryDropdownVisible);
  const toggleOptionalDropdown = () =>
    setIsOptionalDropdownVisible(!isOptionalDropdownVisible);

  return (
    <div className="cookie-overlay">
      <div className="cookie-policy-modal">
        <h1>Cookie Policy</h1>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="cookie-policy-content">
          <p>
            We use cookies to enhance your experience. By continuing to visit
            this site you agree to our use of cookies.
          </p>
          <p>
            Necessary cookies:
            <button
              className="dropdown-button"
              onClick={toggleNecessaryDropdown}
            >
              {isNecessaryDropdownVisible ? "Hide Details" : "Show Details"}
            </button>
          </p>
          {isNecessaryDropdownVisible && (
            <div className="dropdown-content">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                doloribus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
                eius.
              </p>
              <p>Lorem ipsum minima nam vero ipsam fugiat aliquid fugit!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          )}
          <p>
            Other optional cookies:
            <button
              className="dropdown-button"
              onClick={toggleOptionalDropdown}
            >
              {isOptionalDropdownVisible ? "Hide Details" : "Show Details"}
            </button>
          </p>
          {isOptionalDropdownVisible && (
            <div className="dropdown-content">
              <p>Optional cookie 1 description and purpose.</p>
              <p>Optional cookie 2 description and purpose.</p>
              <p>Optional cookie 3 description and purpose.</p>
              <p>Optional cookie 4 description and purpose.</p>
            </div>
          )}
        </div>
        <button className="accept-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CookiePolicyModal;
