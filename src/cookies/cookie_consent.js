import React, { createContext, useContext, useState, useEffect } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import axios from "axios"; // Import Axios
import "./style_cookie_consent.css";

const fetchCSRFToken = async () => {
  try {
    // Include credentials in the request to ensure cookies are sent and received
    const response = await axios.get("/user/visitor_config", {
      withCredentials: true,
    });
    const { csrf_token } = response.data;

    // Optionally, store the CSRF token in Axios defaults or in application state for future requests
    axios.defaults.headers.common["X-CSRF-Token"] = csrf_token;
  } catch (error) {
    console.error("Error fetching CSRF token:", error);
  }
};

// Create a context
const CookieConsentContext = createContext();

export const useCookieConsent = () => useContext(CookieConsentContext);

// Provider component
export const CookieConsentProvider = ({ children, onCookiePolicyClick }) => {
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    const consent = getCookieConsentValue();
    setCookiesAccepted(consent === "true");
  }, []);

  const handleAcceptAll = () => {
    setCookiesAccepted(true);
    fetchCSRFToken(); // Fetch CSRF token when cookies are accepted
    console.log("All cookies accepted");
  };

  const handleAcceptNecessary = () => {
    setCookiesAccepted(true);
    fetchCSRFToken(); // Fetch CSRF token when cookies are accepted
    console.log("Only necessary cookies accepted");
  };

  return (
    <CookieConsentContext.Provider
      value={{
        cookiesAccepted,
        handleAcceptAll,
        handleAcceptNecessary,
      }}
    >
      {children}
      {!cookiesAccepted && (
        <CookieConsent
          location="bottom"
          buttonText="Accept All"
          declineButtonText="Accept Necessary"
          onAccept={handleAcceptAll}
          onDecline={handleAcceptNecessary}
          enableDeclineButton
          cookieName="myCookieConsent"
          className="cookie-consent-bar" // Use class for the bar
          buttonClasses="cookie-consent-button" // Use class for accept button
          declineButtonClasses="cookie-consent-decline-button" // Use class for decline button
          expires={150}
        >
          This website uses cookies to enhance the user experience.
          <span
            className="cookie-policy-link" // Use class for link
            onClick={onCookiePolicyClick}
          >
            Click here for cookies policy.
          </span>
        </CookieConsent>
      )}
    </CookieConsentContext.Provider>
  );
};
