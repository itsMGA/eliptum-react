import React, { useState, useEffect } from "react";
import LoggedInUserComponent from "./app_components/loggedInUserComponents/LoggedInUserComponent";
import LandingPage from "./app_components/landingPage/LandingPage";
import { isAuthenticated } from "./app_components/auth/auth.js";

function App() {
  const [authStatus, setAuthStatus] = useState(isAuthenticated());

  const handleLogout = () => {
    localStorage.removeItem("access_token"); // Assuming JWT token is stored here
    setAuthStatus(false); // Update authStatus state to reflect logged-out state
  };

  useEffect(() => {
    setAuthStatus(isAuthenticated());
  }, []);

  // Method to update auth status upon successful login
  const handleSuccessfulLogin = () => {
    setAuthStatus(true);
  };

  return (
    <div>
      {authStatus ? (
        <LoggedInUserComponent
          isUserLoggedIn={authStatus}
          handleLogout={handleLogout}
        />
      ) : (
        <LandingPage onLoginSuccess={handleSuccessfulLogin} />
      )}
    </div>
  );
}

export default App;
